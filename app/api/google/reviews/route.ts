import { NextResponse } from 'next/server';
import { GOOGLE_BUSINESS } from '../../../../constants';
import { GoogleReview, GoogleReviewsPayload } from '../../../../types';
import { logError, logWarn } from '../../../../lib/observability';

export const runtime = 'nodejs';
export const revalidate = 3600;

const DEFAULT_LIMIT = 3;

const LANGUAGE_MAP: Record<string, { languageCode: string; regionCode: string }> = {
  pt: { languageCode: 'pt-BR', regionCode: 'BR' },
  en: { languageCode: 'en-US', regionCode: 'US' },
  es: { languageCode: 'es-ES', regionCode: 'ES' },
  fr: { languageCode: 'fr-FR', regionCode: 'FR' },
};

type GoogleLocalizedText = {
  text?: string;
  languageCode?: string;
};

type GoogleAuthorAttribution = {
  displayName?: string;
  uri?: string;
  photoUri?: string;
};

type GoogleApiReview = {
  name?: string;
  relativePublishTimeDescription?: string;
  text?: GoogleLocalizedText;
  originalText?: GoogleLocalizedText;
  rating?: number;
  authorAttribution?: GoogleAuthorAttribution;
  publishTime?: string;
  googleMapsUri?: string;
};

type GoogleApiPlace = {
  id?: string;
  displayName?: GoogleLocalizedText;
  formattedAddress?: string;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GoogleApiReview[];
};

const REVIEW_FIELD_MASK = [
  'id',
  'displayName',
  'formattedAddress',
  'rating',
  'userRatingCount',
  'googleMapsUri',
  'reviews.rating',
  'reviews.text',
  'reviews.originalText',
  'reviews.authorAttribution.displayName',
  'reviews.authorAttribution.uri',
  'reviews.authorAttribution.photoUri',
  'reviews.relativePublishTimeDescription',
  'reviews.publishTime',
].join(',');

const extractText = (value?: GoogleLocalizedText | null) => value?.text?.trim() ?? '';

const parseReview = (review: GoogleApiReview, index: number): GoogleReview | null => {
  const text = extractText(review.text) || extractText(review.originalText);
  const rating = typeof review.rating === 'number' ? review.rating : null;
  const authorName = review.authorAttribution?.displayName?.trim() ?? 'Google user';

  if (!text || rating === null) {
    return null;
  }

  return {
    id: review.name?.trim() || `review-${index}`,
    author: {
      displayName: authorName,
      uri: review.authorAttribution?.uri?.trim() || undefined,
      photoUri: review.authorAttribution?.photoUri?.trim() || undefined,
    },
    rating,
    text,
    relativePublishTimeDescription: review.relativePublishTimeDescription?.trim() || '',
    googleMapsUri: review.googleMapsUri?.trim() || undefined,
    publishTime: review.publishTime?.trim() || undefined,
  };
};

const buildPayload = (source: GoogleReviewsPayload['source'], partial: Partial<GoogleReviewsPayload>): GoogleReviewsPayload => ({
  source,
  placeId: GOOGLE_BUSINESS.placeId,
  placeName: GOOGLE_BUSINESS.name,
  rating: null,
  userRatingCount: null,
  reviews: [],
  fetchedAt: new Date().toISOString(),
  ...partial,
});

export async function GET(request: Request) {
  const url = new URL(request.url);
  const requestedLimit = Number.parseInt(url.searchParams.get('limit') ?? `${DEFAULT_LIMIT}`, 10);
  const limit = Number.isFinite(requestedLimit) ? Math.min(Math.max(requestedLimit, 1), 6) : DEFAULT_LIMIT;
  const requestedLanguage = url.searchParams.get('lang') ?? 'pt';
  const language = LANGUAGE_MAP[requestedLanguage] ?? LANGUAGE_MAP.pt;
  const apiKey = process.env.GOOGLE_MAPS_API_KEY?.trim();

  if (!apiKey) {
    logWarn({
      scope: 'api.google.reviews',
      message: 'Google Maps API key is not configured.',
    });

    return NextResponse.json(
      buildPayload('unconfigured', {
        placeId: GOOGLE_BUSINESS.placeId,
        error: 'GOOGLE_MAPS_API_KEY is not configured.',
      }),
      {
        headers: {
          'Cache-Control': 'no-store',
          'X-Reviews-Source': 'unconfigured',
          'X-Reviews-SLA': 'blocked-by-config',
        },
      },
    );
  }

  try {
    const placeUrl = new URL(`https://places.googleapis.com/v1/places/${encodeURIComponent(GOOGLE_BUSINESS.placeId)}`);
    placeUrl.searchParams.set('languageCode', language.languageCode);
    placeUrl.searchParams.set('regionCode', language.regionCode);

    const response = await fetch(placeUrl.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': REVIEW_FIELD_MASK,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Google Places request failed (${response.status}): ${errorText}`);
    }

    const place = (await response.json()) as GoogleApiPlace;
    const reviews = Array.isArray(place.reviews) ? place.reviews.map(parseReview).filter((review): review is GoogleReview => Boolean(review)).slice(0, limit) : [];

    return NextResponse.json(
      buildPayload('google', {
        placeId: GOOGLE_BUSINESS.placeId,
        placeName: extractText(place.displayName) || GOOGLE_BUSINESS.name,
        formattedAddress: place.formattedAddress?.trim() || undefined,
        rating: typeof place.rating === 'number' ? place.rating : null,
        userRatingCount: typeof place.userRatingCount === 'number' ? place.userRatingCount : null,
        googleMapsUri: place.googleMapsUri?.trim() || undefined,
        reviews,
      }),
      {
        headers: {
          'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          'X-Language-Code': language.languageCode,
          'X-Region-Code': language.regionCode,
          'X-Reviews-Source': 'google',
          'X-Reviews-SLA': 'refresh<=3600s',
        },
      },
    );
  } catch (error) {
    logError({
      scope: 'api.google.reviews',
      message: 'Failed to fetch Google reviews.',
      error,
      details: {
        placeId: GOOGLE_BUSINESS.placeId,
        languageCode: language.languageCode,
        regionCode: language.regionCode,
      },
    });

    return NextResponse.json(
      buildPayload('error', {
        placeId: GOOGLE_BUSINESS.placeId,
        error: 'Unable to load Google reviews right now.',
      }),
      {
        headers: {
          'Cache-Control': 'no-store',
          'X-Reviews-Source': 'error',
          'X-Reviews-SLA': 'degraded-fallback',
        },
      },
    );
  }
}
