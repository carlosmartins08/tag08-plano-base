'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, MessageSquare, Quote, Star } from 'lucide-react';
import { GOOGLE_BUSINESS } from '../constants';
import { useTranslation } from '../contexts/LanguageContext';
import { GoogleReviewsPayload, Language } from '../types';

type TestimonialCard = {
  id: string;
  name: string;
  role: string;
  content: string;
  date: string;
  rating: number;
  source: 'static' | 'google';
};

const clampStyle = (lines: number): React.CSSProperties => ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: lines,
  overflow: 'hidden',
});

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const formatReviewCount = (language: Language, count: number, label: string) => {
  return `${new Intl.NumberFormat(language).format(count)} ${label}`;
};

const renderStars = (rating: number) =>
  [...Array(5)].map((_, index) => (
    <Star
      key={index}
      className={`w-3 h-3 fill-current ${index < Math.round(rating) ? 'text-brand-lime' : 'text-white/10'}`}
    />
  ));

const Testimonials: React.FC = () => {
  const { language, t } = useTranslation();

  const fallbackCards = useMemo<TestimonialCard[]>(
    () =>
      t.testimonials.items.map((testimonial, index) => ({
        id: `static-${index}`,
        name: testimonial.name,
        role: testimonial.role,
        content: testimonial.content,
        date: testimonial.date,
        rating: 5,
        source: 'static',
      })),
    [t.testimonials.items],
  );

  const [cards, setCards] = useState<TestimonialCard[]>(fallbackCards);
  const [ratingText, setRatingText] = useState<string>(t.testimonials.googleRating);
  const [reviewCountText, setReviewCountText] = useState<string>(t.testimonials.reviewCount);
  const [reviewLink, setReviewLink] = useState<string>(GOOGLE_BUSINESS.mapsUrl);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    setCards(fallbackCards);
    setRatingText(t.testimonials.googleRating);
    setReviewCountText(t.testimonials.reviewCount);
    setReviewLink(GOOGLE_BUSINESS.mapsUrl);

    const loadGoogleReviews = async () => {
      try {
        const params = new URLSearchParams({
          limit: '3',
          lang: language,
        });

        const response = await fetch(`/api/google/reviews?${params.toString()}`, {
          signal: controller.signal,
          cache: 'no-store',
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as GoogleReviewsPayload;

        if (!active || controller.signal.aborted || data.source !== 'google' || !data.reviews.length) {
          return;
        }

        setCards(
          data.reviews.map((review) => ({
            id: review.id,
            name: review.author.displayName,
            role: t.testimonials.sourceLabel,
            content: review.text,
            date: review.relativePublishTimeDescription || t.testimonials.sourceLabel,
            rating: review.rating,
            source: 'google',
          })),
        );

        if (typeof data.rating === 'number') {
          setRatingText(data.rating.toFixed(1));
        }

        if (typeof data.userRatingCount === 'number') {
          setReviewCountText(formatReviewCount(language, data.userRatingCount, t.testimonials.reviewCountLabel));
        }

        setReviewLink(data.googleMapsUri ?? GOOGLE_BUSINESS.mapsUrl);
      } catch {
        // Keep the local testimonial copy as a safe fallback.
      }
    };

    void loadGoogleReviews();

    return () => {
      active = false;
      controller.abort();
    };
  }, [fallbackCards, language, t.testimonials.googleRating, t.testimonials.reviewCount, t.testimonials.reviewCountLabel, t.testimonials.sourceLabel]);

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-brand-black relative overflow-hidden bg-noise">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20 reveal">
          <div className="max-w-2xl">
            <div className="mb-6 ds-section-badge">
              <MessageSquare className="w-3 h-3 text-brand-lime" />
              <span>{t.testimonials.badge}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight italic leading-[0.9]">
              {t.testimonials.title}
            </h2>
            <p className="text-slate-400 text-lg font-medium mt-6">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="ds-panel-shell p-6 rounded-3xl flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <GoogleLogo />
            </div>
            <div>
              <div className="flex items-center gap-1 text-brand-lime mb-1">
                {renderStars(Number.parseFloat(ratingText) || 5)}
              </div>
              <p className="text-white font-black text-xl leading-none">
                {ratingText} <span className="text-white/40 text-sm font-medium ml-2">/ 5.0</span>
              </p>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1 font-bold">
                {reviewCountText}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`reveal stagger-${idx + 1} ds-card-shell ds-card-shell-hover-lime group p-8 rounded-[32px] relative overflow-hidden`}
            >
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/[0.02] -rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0" />

              <div className="flex items-center gap-1 text-brand-lime mb-6">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-slate-300 font-medium leading-relaxed mb-8 relative z-10" style={clampStyle(7)}>
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-6">
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-brand-lime text-[10px] font-bold uppercase tracking-widest mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
                <span className="text-[10px] text-white/20 font-bold uppercase tracking-tighter">
                  {testimonial.date}
                </span>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal stagger-4">
          <a
            href={reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:border-brand-lime/50 transition-all duration-300"
          >
            <GoogleLogo />
            <span className="text-white font-black text-xs uppercase tracking-[0.2em]">
              {t.testimonials.viewAll}
            </span>
            <ArrowUpRight className="w-4 h-4 text-brand-lime transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
