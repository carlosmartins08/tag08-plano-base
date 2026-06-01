import { NextResponse } from 'next/server';
import { SITE_CONFIG } from '../../../../constants';

export const runtime = 'nodejs';
export const revalidate = 300;

const DEFAULT_LIMIT = 8;
const MAX_LIMIT = 12;
const REQUEST_TIMEOUT_MS = 7000;
const MAX_ATTEMPTS = 2;

const REQUEST_HEADERS = {
  'user-agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
};

const LANGUAGE_HEADERS: Record<string, string> = {
  pt: 'pt-BR,pt;q=0.9,en;q=0.8',
  en: 'en-US,en;q=0.9,pt;q=0.8',
  es: 'es-ES,es;q=0.9,pt;q=0.8,en;q=0.7',
  fr: 'fr-FR,fr;q=0.9,en;q=0.8,pt;q=0.7',
};

type VideoItem = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
};

type YoutubeApiPayload = {
  channelUrl: string;
  videos: VideoItem[];
  error?: string;
  source?: 'live' | 'stale-cache' | 'error';
  fetchedAt?: string;
};

type YoutubeTextBlock = {
  simpleText?: string;
  runs?: Array<{
    text?: string;
  }>;
  text?: string;
};

type YoutubeVideoRenderer = {
  videoId?: string;
  title?: YoutubeTextBlock;
  publishedTimeText?: YoutubeTextBlock;
  thumbnail?: {
    thumbnails?: Array<{
      url?: string;
    }>;
  };
  navigationEndpoint?: {
    commandMetadata?: {
      webCommandMetadata?: {
        url?: string;
      };
    };
  };
};

type YoutubeInitialData = {
  contents?: {
    twoColumnBrowseResultsRenderer?: {
      tabs?: Array<{
        tabRenderer?: {
          selected?: boolean;
          content?: {
            richGridRenderer?: {
              contents?: unknown[];
            };
          };
        };
      }>;
    };
  };
};

const decodeHtmlEntities = (value: string) =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

const getAcceptLanguage = (language: string | null) => {
  if (!language) return LANGUAGE_HEADERS.pt;

  return LANGUAGE_HEADERS[language] ?? LANGUAGE_HEADERS.pt;
};

const extractText = (value: YoutubeTextBlock | undefined) => {
  if (!value) return '';

  if (typeof value.simpleText === 'string') {
    return decodeHtmlEntities(value.simpleText.trim());
  }

  if (Array.isArray(value.runs)) {
    return decodeHtmlEntities(value.runs.map((run) => run?.text ?? '').join('').trim());
  }

  if (typeof value.text === 'string') {
    return decodeHtmlEntities(value.text.trim());
  }

  return '';
};

const extractJsonAssignment = (source: string, marker: string) => {
  const start = source.indexOf(marker);
  if (start < 0) return null;

  const braceStart = source.indexOf('{', start + marker.length);
  if (braceStart < 0) return null;

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = braceStart; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }

      if (char === '\\') {
        escaped = true;
        continue;
      }

      if (char === '"') {
        inString = false;
      }

      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === '{') {
      depth += 1;
      continue;
    }

    if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        return source.slice(braceStart, index + 1);
      }
    }
  }

  return null;
};

const extractInitialData = (html: string): YoutubeInitialData | null => {
  const markers = ['var ytInitialData = ', 'window["ytInitialData"] = ', 'ytInitialData = '];
  let jsonSource: string | null = null;

  for (const marker of markers) {
    jsonSource = extractJsonAssignment(html, marker);
    if (jsonSource) break;
  }

  if (!jsonSource) return null;

  try {
    return JSON.parse(jsonSource) as YoutubeInitialData;
  } catch {
    return null;
  }
};

const pickThumbnail = (thumbnails: Array<{ url?: string }> | undefined, videoId: string) => {
  const lastThumbnail = Array.isArray(thumbnails) ? thumbnails[thumbnails.length - 1] : null;

  if (lastThumbnail?.url) {
    return decodeHtmlEntities(lastThumbnail.url);
  }

  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
};

const normalizeVideoUrl = (renderer: YoutubeVideoRenderer, videoId: string) => {
  const rawUrl = renderer.navigationEndpoint?.commandMetadata?.webCommandMetadata?.url;
  if (rawUrl) {
    try {
      return new URL(rawUrl, 'https://www.youtube.com').toString();
    } catch {
      return `https://www.youtube.com/watch?v=${videoId}`;
    }
  }

  return `https://www.youtube.com/watch?v=${videoId}`;
};

const parseVideoRenderer = (renderer: YoutubeVideoRenderer): VideoItem | null => {
  const id = renderer.videoId?.trim() ?? '';
  const title = extractText(renderer.title);

  if (!id || !title) return null;

  return {
    id,
    title,
    url: normalizeVideoUrl(renderer, id),
    thumbnail: pickThumbnail(renderer.thumbnail?.thumbnails, id),
    publishedAt: extractText(renderer.publishedTimeText),
  };
};

const collectVideoRenderers = (node: unknown, limit: number, results: YoutubeVideoRenderer[] = [], seenIds = new Set<string>()) => {
  if (results.length >= limit || node == null) {
    return results;
  }

  if (Array.isArray(node)) {
    for (const item of node) {
      collectVideoRenderers(item, limit, results, seenIds);
      if (results.length >= limit) break;
    }
    return results;
  }

  if (typeof node !== 'object') {
    return results;
  }

  const record = node as Record<string, unknown>;

  if ('videoRenderer' in record) {
    const renderer = record.videoRenderer as YoutubeVideoRenderer | undefined;
    const videoId = renderer?.videoId?.trim() ?? '';

    if (renderer && videoId && !seenIds.has(videoId)) {
      const parsed = parseVideoRenderer(renderer);
      if (parsed) {
        seenIds.add(parsed.id);
        results.push(renderer);
      }
    }
  }

  for (const value of Object.values(record)) {
    collectVideoRenderers(value, limit, results, seenIds);
    if (results.length >= limit) break;
  }

  return results;
};

const extractVideosFromInitialData = (initialData: YoutubeInitialData, limit: number) => {
  const selectedTab = initialData.contents?.twoColumnBrowseResultsRenderer?.tabs?.find((tab) => tab?.tabRenderer?.selected);
  const tabContents = selectedTab?.tabRenderer?.content?.richGridRenderer?.contents;
  const renderers = collectVideoRenderers(tabContents, limit);

  return renderers
    .map((renderer) => parseVideoRenderer(renderer))
    .filter((video): video is VideoItem => Boolean(video))
    .slice(0, limit);
};

const extractVideosFallback = (initialData: YoutubeInitialData, limit: number) => {
  const renderers = collectVideoRenderers(initialData, limit);

  return renderers
    .map((renderer) => parseVideoRenderer(renderer))
    .filter((video): video is VideoItem => Boolean(video))
    .slice(0, limit);
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const normalizeVideos = (videos: VideoItem[], limit: number) => {
  const seen = new Set<string>();
  const validVideos: VideoItem[] = [];

  for (const video of videos) {
    if (validVideos.length >= limit) break;
    if (!video.id || seen.has(video.id)) continue;
    if (!video.url.startsWith('https://www.youtube.com/')) continue;

    validVideos.push(video);
    seen.add(video.id);
  }

  return validVideos;
};

const requestChannelHtml = async (language: string | null) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(SITE_CONFIG.youtubeVideosUrl, {
      headers: {
        ...REQUEST_HEADERS,
        'accept-language': getAcceptLanguage(language),
      },
      cache: 'no-store',
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Channel page fetch failed with status ${response.status}`);
    }

    return response.text();
  } finally {
    clearTimeout(timeout);
  }
};

let lastSuccessfulPayload: YoutubeApiPayload | null = null;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const requestedLimit = Number.parseInt(url.searchParams.get('limit') ?? `${DEFAULT_LIMIT}`, 10);
  const requestedLanguage = url.searchParams.get('lang');
  const limit = Number.isFinite(requestedLimit) ? Math.min(Math.max(requestedLimit, 1), MAX_LIMIT) : DEFAULT_LIMIT;

  try {
    let videos: VideoItem[] = [];
    let lastError: unknown = null;

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
      try {
        const channelHtml = await requestChannelHtml(requestedLanguage);
        const initialData = extractInitialData(channelHtml);

        if (!initialData) {
          throw new Error('Unable to parse YouTube channel page.');
        }

        const directVideos = extractVideosFromInitialData(initialData, limit);
        const fallbackVideos = directVideos.length ? [] : extractVideosFallback(initialData, limit);
        videos = normalizeVideos(directVideos.length ? directVideos : fallbackVideos, limit);

        if (!videos.length) {
          throw new Error('Unable to extract latest videos from the channel page.');
        }

        break;
      } catch (error) {
        lastError = error;
        if (attempt < MAX_ATTEMPTS) {
          await sleep(250 * attempt);
        }
      }
    }

    if (!videos.length) {
      throw lastError instanceof Error ? lastError : new Error('Unknown YouTube fetch error.');
    }

    const payload: YoutubeApiPayload = {
      channelUrl: SITE_CONFIG.youtubeVideosUrl,
      videos,
      source: 'live',
      fetchedAt: new Date().toISOString(),
    };

    lastSuccessfulPayload = payload;

    return NextResponse.json(payload, {
      headers: {
        'Cache-Control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=1800',
        'X-Feed-Source': 'live',
        'X-Feed-SLA': 'refresh<=300s',
      },
    });
  } catch (error) {
    console.error('[youtube/latest]', error);

    if (lastSuccessfulPayload?.videos?.length) {
      return NextResponse.json(
        {
          ...lastSuccessfulPayload,
          source: 'stale-cache',
          error: 'Live feed temporarily unavailable. Showing latest cached videos.',
        } satisfies YoutubeApiPayload,
        {
          headers: {
            'Cache-Control': 'public, max-age=0, s-maxage=120, stale-while-revalidate=1800',
            'X-Feed-Source': 'stale-cache',
            'X-Feed-SLA': 'degraded-cache',
          },
        },
      );
    }

    return NextResponse.json(
      {
        channelUrl: SITE_CONFIG.youtubeVideosUrl,
        videos: [],
        error: 'Unable to load YouTube videos right now.',
        source: 'error',
      } satisfies YoutubeApiPayload,
      {
        headers: {
          'Cache-Control': 'no-store',
          'X-Feed-Source': 'error',
          'X-Feed-SLA': 'degraded-offline',
        },
      },
    );
  }
}
