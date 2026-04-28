'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight, PlayCircle, RefreshCcw, Sparkles, Star, Youtube } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { SITE_CONFIG } from '../constants';
import { Language } from '../types';
import { trackEvent } from '../lib/analytics';
import Button from './Button';

type VideoItem = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
};

type ApiResponse = {
  channelUrl: string;
  videos: VideoItem[];
  error?: string;
  source?: 'live' | 'stale-cache' | 'error';
  fetchedAt?: string;
};

const localeMap: Record<Language, string> = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
};

const formatPublishedAt = (value: string, language: Language) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat(localeMap[language], {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
};

const VideoSkeleton = ({ label }: { label: string }) => (
  <div className="space-y-6 animate-pulse">
    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.35em]">{label}</p>

    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,2.1fr)_minmax(0,0.95fr)] lg:items-center">
      <div className="hidden lg:block translate-y-6">
        <div className="ds-panel-shell overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.35)] opacity-35">
          <div className="aspect-[16/9] bg-white/10" />
          <div className="space-y-3 p-4">
            <div className="h-3 w-20 rounded-full bg-white/10" />
            <div className="h-6 w-full rounded-full bg-white/10" />
            <div className="h-4 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>
      </div>

      <div className="ds-panel-shell overflow-hidden rounded-[2.25rem] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
        <div className="aspect-[16/9] bg-white/10" />
        <div className="space-y-5 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="h-11 w-11 rounded-full bg-white/10" />
            <div className="hidden gap-2 md:flex">
              <div className="h-6 w-24 rounded-full bg-white/10" />
              <div className="h-6 w-24 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="h-3 w-28 rounded-full bg-white/10" />
            <div className="h-10 w-3/4 rounded-2xl bg-white/10" />
            <div className="h-4 w-full rounded-full bg-white/10" />
            <div className="h-4 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>
      </div>

      <div className="hidden lg:block translate-y-6">
        <div className="ds-panel-shell overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.35)] opacity-35">
          <div className="aspect-[16/9] bg-white/10" />
          <div className="space-y-3 p-4">
            <div className="h-3 w-20 rounded-full bg-white/10" />
            <div className="h-6 w-full rounded-full bg-white/10" />
            <div className="h-4 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </div>

    <div className="flex gap-4 overflow-hidden pb-4">
      {[0, 1, 2, 3].map((item) => (
        <div
          key={item}
          className="ds-panel-shell min-w-[240px] flex-1 overflow-hidden rounded-[1.75rem]"
        >
          <div className="aspect-video bg-white/10" />
          <div className="space-y-3 p-4">
            <div className="h-3 w-20 rounded-full bg-white/10" />
            <div className="h-6 w-full rounded-full bg-white/10" />
            <div className="h-4 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  </div>
);


const VideoGallery: React.FC = () => {
  const { language, t } = useTranslation();
  const text = t.videoGallery;
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState<ApiResponse['source']>('live');
  const [fetchedAt, setFetchedAt] = useState<string | null>(null);
  const [degradationTracked, setDegradationTracked] = useState(false);

  useEffect(() => {
    let active = true;

    const loadVideos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/youtube/latest?limit=8&lang=${language}`);
        const data = (await response.json()) as ApiResponse;
        const nextVideos = Array.isArray(data.videos) ? data.videos : [];

        if (active) {
          setVideos(nextVideos);
          setActiveIndex(0);
          setError(nextVideos.length ? null : data.error || text.error);
          setDataSource(data.source ?? 'live');
          setFetchedAt(data.fetchedAt ?? null);
        }
      } catch {
        if (active) {
          setError(text.error);
          setVideos([]);
          setActiveIndex(0);
          setDataSource('error');
          setFetchedAt(null);
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    loadVideos();

    return () => {
      active = false;
    };
  }, [language, text.error]);

  useEffect(() => {
    if (degradationTracked) return;

    if (dataSource === 'stale-cache') {
      trackEvent('youtube_feed_degraded', {
        source: 'stale-cache',
        language_selected: language,
      });
      setDegradationTracked(true);
    }

    if (dataSource === 'error') {
      trackEvent('youtube_feed_degraded', {
        source: 'error',
        language_selected: language,
      });
      setDegradationTracked(true);
    }
  }, [dataSource, degradationTracked, language]);

  const sourceBadge =
    dataSource === 'stale-cache'
      ? { label: 'CACHE', className: 'border-amber-400/40 bg-amber-400/10 text-amber-300' }
      : dataSource === 'error'
        ? { label: 'OFFLINE', className: 'border-rose-400/40 bg-rose-400/10 text-rose-300' }
        : { label: 'LIVE', className: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300' };

  const carousel = useMemo(() => {
    if (!videos.length) {
      return {
        activeIndex: 0,
        activeVideo: null as VideoItem | null,
        previousVideo: null as VideoItem | null,
        nextVideo: null as VideoItem | null,
      };
    }

    const normalizedIndex = ((activeIndex % videos.length) + videos.length) % videos.length;
    const previousIndex = videos.length > 1 ? (normalizedIndex - 1 + videos.length) % videos.length : normalizedIndex;
    const nextIndex = videos.length > 2 ? (normalizedIndex + 1) % videos.length : normalizedIndex;

    return {
      activeIndex: normalizedIndex,
      activeVideo: videos[normalizedIndex],
      previousVideo: videos.length > 1 ? videos[previousIndex] : null,
      nextVideo: videos.length > 2 ? videos[nextIndex] : null,
    };
  }, [activeIndex, videos]);

  const railVideos = useMemo(
    () => videos.filter((_, index) => index !== carousel.activeIndex),
    [videos, carousel.activeIndex],
  );

  const videoJsonLd = useMemo(() => {
    if (!videos.length) return null;

    const graph = videos.map((video) => {
      const parsedDate = new Date(video.publishedAt);
      const uploadDate = Number.isNaN(parsedDate.getTime()) ? undefined : parsedDate.toISOString();

      return {
        '@type': 'VideoObject',
        '@id': `${SITE_CONFIG.domain}/#video-${video.id}`,
        name: video.title,
        description: `Conteúdo do canal ${SITE_CONFIG.siteName}: ${video.title}`,
        thumbnailUrl: [video.thumbnail],
        url: video.url,
        embedUrl: `https://www.youtube.com/embed/${video.id}`,
        uploadDate,
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.siteName,
          url: SITE_CONFIG.domain,
        },
      };
    });

    return {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  }, [videos]);

  const cycleVideo = (direction: -1 | 1) => {
    if (!videos.length) return;

    setActiveIndex((current) => {
      const nextIndex = current + direction;
      return (nextIndex + videos.length) % videos.length;
    });
  };

  const renderPreviewCard = (video: VideoItem, position: 'left' | 'right') => (
    <div className="ds-panel-shell pointer-events-none overflow-hidden rounded-[2rem] opacity-35 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 1024px) 100vw, 22rem"
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/55">
            {position === 'left' ? text.latest : text.watch}
          </p>
          <h4
            className="text-lg font-black uppercase italic leading-[0.95] tracking-tight text-white"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
            }}
          >
            {video.title}
          </h4>
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/55">
            {formatPublishedAt(video.publishedAt, language)}
          </p>
        </div>
      </div>
    </div>
  );

  const renderRailCard = (video: VideoItem, index: number) => {
    const isActive = index === carousel.activeIndex;

    return (
      <button
        key={video.id}
        type="button"
        onClick={() => setActiveIndex(index)}
        className={`group ds-card-shell snap-start flex-none w-[min(78vw,280px)] md:w-[280px] overflow-hidden rounded-[1.75rem] text-left transition-all duration-500 ${isActive
          ? 'border-brand-lime/60 bg-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.35)]'
          : 'ds-card-shell-hover-lime border-white/10 bg-white/[0.03]'
          }`}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 78vw, 280px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
          <div className="ds-chip ds-chip-muted absolute left-4 top-4 inline-flex items-center gap-2">
            {isActive ? text.featured : text.watch}
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-lime text-brand-black shadow-2xl shadow-brand-lime/20">
              <PlayCircle className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="p-4">
          <h4
            className="mb-4 text-white font-black uppercase italic leading-tight tracking-tight transition-colors group-hover:text-brand-lime"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
            }}
          >
            {video.title}
          </h4>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            {formatPublishedAt(video.publishedAt, language)}
          </p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime">
            <span>{SITE_CONFIG.siteName}</span>
            <span>|</span>
            <span>{text.watch}</span>
          </div>
        </div>
      </button>
    );
  };

  return (
    <section id="videos" className="relative overflow-hidden bg-brand-black bg-noise py-24 lg:py-32">
      {videoJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        />
      )}
      <div className="pointer-events-none absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-brand-lime/10 blur-[180px] translate-x-1/3 -translate-y-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-white/5 blur-[180px] -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="reveal max-w-3xl">
            <div className="mb-7 ds-section-badge gap-2">
              <Sparkles className="h-4 w-4 text-brand-lime" />
              <span>{text.badge}</span>
            </div>

            <h2 className="mb-6 text-4xl font-black uppercase italic leading-[0.9] tracking-tight text-white md:text-6xl lg:text-7xl font-display">
              {text.title} <span className="text-brand-lime">{text.titleAccent}</span>
            </h2>

            <p className="max-w-3xl text-lg font-medium leading-relaxed text-slate-400 md:text-xl">
              {text.subtitle}
            </p>
          </div>

          <Button
            href={SITE_CONFIG.youtubeVideosUrl}
            variant="solid"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start rounded-2xl hover:scale-[1.02] active:scale-[0.98] lg:self-auto"
          >
            <Youtube className="h-4 w-4" />
            {text.openChannel}
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mb-4 flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.35em] text-slate-500">
          <div className="flex items-center gap-3">
            <RefreshCcw className="h-4 w-4 text-brand-lime" />
            <span>{text.updated}</span>
            <span className={`rounded-full border px-2 py-1 tracking-[0.2em] ${sourceBadge.className}`}>
              {sourceBadge.label}
            </span>
            {fetchedAt && (
              <span className="tracking-[0.2em] text-slate-600">
                {formatPublishedAt(fetchedAt, language)}
              </span>
            )}
          </div>

          {videos.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="ds-chip ds-chip-muted px-3 py-1 tracking-[0.22em] text-white/60">
                {String(carousel.activeIndex + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={() => cycleVideo(-1)}
                className="ds-icon-shell h-9 w-9 rounded-full bg-white/[0.03] text-white/70 transition-colors hover:border-brand-lime/50 hover:text-brand-lime"
                aria-label={text.previousVideoAria}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => cycleVideo(1)}
                className="ds-icon-shell h-9 w-9 rounded-full bg-white/[0.03] text-white/70 transition-colors hover:border-brand-lime/50 hover:text-brand-lime"
                aria-label={text.nextVideoAria}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {isLoading ? (
          <VideoSkeleton label={text.loading} />
        ) : error || !videos.length ? (
          <div className="ds-panel-shell rounded-[2rem] bg-white/[0.04] p-8 md:p-10">
            <h3 className="mb-4 text-2xl font-black uppercase italic tracking-tight text-white">
              {text.latest}
            </h3>
            <p className="mb-6 max-w-2xl leading-relaxed text-slate-400">
              {error || text.error}
            </p>
            <Button
              href={SITE_CONFIG.youtubeVideosUrl}
              variant="solid"
              size="md"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl"
            >
              <Youtube className="h-4 w-4" />
              {text.openChannel}
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,2.1fr)_minmax(0,0.95fr)] lg:items-center">
              <div className="hidden lg:block translate-y-6">
                {carousel.previousVideo ? renderPreviewCard(carousel.previousVideo, 'left') : null}
              </div>

              <div className="relative">
                <a
                  href={carousel.activeVideo?.url || SITE_CONFIG.youtubeVideosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group ds-panel-shell relative block overflow-hidden rounded-[2.25rem] shadow-[0_30px_100px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={carousel.activeVideo?.thumbnail || 'https://i.ytimg.com/vi/placeholder/hqdefault.jpg'}
                      alt={carousel.activeVideo?.title || text.featured}
                      fill
                      sizes="(max-width: 1024px) 100vw, 72vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-md">
                          <Star className="h-4 w-4" />
                        </div>

                        <div className="hidden items-center gap-2 md:flex">
                          <span className="ds-chip ds-chip-muted">
                            {String(carousel.activeIndex + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}
                          </span>
                          <span className="ds-chip border-brand-lime bg-brand-lime tracking-[0.25em] text-brand-black">
                            {text.featured}
                          </span>
                        </div>
                      </div>

                      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                        <div className="max-w-2xl">
                          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.35em] text-brand-lime">
                            {text.latest}
                          </p>
                          <h3 className="mb-4 text-2xl font-black uppercase italic leading-[0.92] tracking-tight text-white md:text-4xl">
                            {carousel.activeVideo?.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.28em] text-white/60">
                            <span>{SITE_CONFIG.siteName}</span>
                            <span>|</span>
                            <span>{formatPublishedAt(carousel.activeVideo?.publishedAt || '', language)}</span>
                            <span>|</span>
                            <span>{text.watch}</span>
                          </div>
                        </div>

                        <div className="flex justify-start lg:justify-end">
                          <span className="ds-chip inline-flex items-center gap-2 border-brand-lime bg-brand-lime px-4 py-2 text-brand-black shadow-[0_0_30px_rgba(212,255,0,0.18)]">
                            <PlayCircle className="h-4 w-4" />
                            {text.watch}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="hidden lg:block translate-y-6">
                {carousel.nextVideo ? renderPreviewCard(carousel.nextVideo, 'right') : null}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-end justify-between gap-4">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-500">
                  {text.latest}
                </p>
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-600">
                  {SITE_CONFIG.siteName}
                </p>
              </div>

              <div className="no-scrollbar flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                {railVideos.map((video, index) => renderRailCard(video, index))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoGallery;
