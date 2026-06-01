'use client';

import React from 'react';
import { ArrowRight, Globe2, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { buildTelUrl, buildWhatsAppUrl, WHATSAPP_CONTACTS } from '../constants';
import { useTranslation } from '../contexts/LanguageContext';
import { Language } from '../types';
import { trackEvent, trackFunnelEvent } from '../lib/analytics';
import Magnetic from './Magnetic';
import Button from './Button';

type ContactRouteId = 'br' | 'intl';

const ROUTING_REASON_COPY: Record<
  Language,
  { brPt: string; nonPt: string; nonBr: string; fallback: string }
> = {
  pt: {
    brPt: 'Recomendação automática: Brasil + idioma PT.',
    nonPt: 'Recomendação automática: idioma selecionado direciona para canal internacional.',
    nonBr: 'Recomendação automática: localidade fora do Brasil.',
    fallback: 'Recomendação automática: sinal de idioma priorizado.',
  },
  en: {
    brPt: 'Automatic recommendation: Brazil + PT language.',
    nonPt: 'Automatic recommendation: selected language routes to international channel.',
    nonBr: 'Automatic recommendation: location outside Brazil.',
    fallback: 'Automatic recommendation: language signal prioritized.',
  },
  es: {
    brPt: 'Recomendación automática: Brasil + idioma PT.',
    nonPt: 'Recomendación automática: el idioma seleccionado dirige al canal internacional.',
    nonBr: 'Recomendación automática: localidad fuera de Brasil.',
    fallback: 'Recomendación automática: se priorizó la señal de idioma.',
  },
  fr: {
    brPt: 'Recommandation automatique : Brésil + langue PT.',
    nonPt: 'Recommandation automatique : la langue choisie dirige vers le canal international.',
    nonBr: 'Recommandation automatique : localisation hors du Brésil.',
    fallback: 'Recommandation automatique : signal de langue priorisé.',
  },
};

const ROUTE_CONTEXT_COPY: Record<
  Language,
  {
    br: { path: string; eta: string; signals: [string, string] };
    intl: { path: string; eta: string; signals: [string, string] };
  }
> = {
  pt: {
    br: {
      path: 'Caminho nacional',
      eta: 'Resposta comercial: até 1 dia útil',
      signals: ['Empresa no Brasil', 'Atendimento principal em português'],
    },
    intl: {
      path: 'Caminho internacional',
      eta: 'Resposta comercial: até 1 dia útil',
      signals: ['Empresa fora do Brasil', 'Atendimento em espanhol'],
    },
  },
  en: {
    br: {
      path: 'National route',
      eta: 'Commercial response: within 1 business day',
      signals: ['Business in Brazil', 'Primary support in Portuguese'],
    },
    intl: {
      path: 'International route',
      eta: 'Commercial response: within 1 business day',
      signals: ['Business outside Brazil', 'Support in Spanish'],
    },
  },
  es: {
    br: {
      path: 'Ruta nacional',
      eta: 'Respuesta comercial: hasta 1 día hábil',
      signals: ['Empresa en Brasil', 'Atención principal en portugués'],
    },
    intl: {
      path: 'Ruta internacional',
      eta: 'Respuesta comercial: hasta 1 día hábil',
      signals: ['Empresa fuera de Brasil', 'Atención en español'],
    },
  },
  fr: {
    br: {
      path: 'Route nationale',
      eta: 'Réponse commerciale : sous 1 jour ouvré',
      signals: ['Entreprise au Brésil', 'Assistance principale en portugais'],
    },
    intl: {
      path: 'Route internationale',
      eta: 'Réponse commerciale : sous 1 jour ouvré',
      signals: ['Entreprise hors Brésil', 'Assistance en espagnol'],
    },
  },
};

const splitPhoneDisplay = (phone: string) => {
  const normalizedPhone = phone.replace(/-/g, '\u2011');
  const [prefix, ...restParts] = normalizedPhone.trim().split(' ');
  return {
    prefix: prefix ?? '',
    rest: restParts.join(' '),
  };
};

const FinalCTA: React.FC = () => {
  const { language, t, localeSignals, recommendedContactRoute } = useTranslation();

  const recommendedRoute: ContactRouteId = recommendedContactRoute;

  const routes = [
    {
      id: 'br' as const,
      icon: MapPin,
      phone: WHATSAPP_CONTACTS.br.displayPhone,
      telHref: buildTelUrl(WHATSAPP_CONTACTS.br.phone),
      href: buildWhatsAppUrl(WHATSAPP_CONTACTS.br.phone, t.contactRouting.routes.br.message),
      label: t.contactRouting.routes.br.label,
      summary: t.contactRouting.routes.br.summary,
      button: t.contactRouting.routes.br.button,
    },
    {
      id: 'intl' as const,
      icon: Globe2,
      phone: WHATSAPP_CONTACTS.intl.displayPhone,
      telHref: buildTelUrl(WHATSAPP_CONTACTS.intl.phone),
      href: buildWhatsAppUrl(WHATSAPP_CONTACTS.intl.phone, t.contactRouting.routes.intl.message),
      label: t.contactRouting.routes.intl.label,
      summary: t.contactRouting.routes.intl.summary,
      button: t.contactRouting.routes.intl.button,
    },
  ];

  const orderedRoutes = [...routes].sort((a, b) => {
    if (a.id === recommendedRoute) return -1;
    if (b.id === recommendedRoute) return 1;
    return 0;
  });

  const routingCopy = ROUTING_REASON_COPY[language];
  const routingReason =
    language === 'pt' && localeSignals.countryBucket === 'BR'
      ? routingCopy.brPt
      : language !== 'pt'
        ? routingCopy.nonPt
        : localeSignals.countryBucket === 'NON_BR'
          ? routingCopy.nonBr
          : routingCopy.fallback;
  const routeContextCopy = ROUTE_CONTEXT_COPY[language];

  const handleContactClick = (route: ContactRouteId) => {
    trackFunnelEvent('final_cta_click', {
      lang: language,
      section: 'final_cta',
      cta: `open_whatsapp_${route}`,
      country: localeSignals.countryBucket,
      route: route,
    });

    trackFunnelEvent('whatsapp_click', {
      lang: language,
      section: 'final_cta',
      cta: `whatsapp_${route}`,
      country: localeSignals.countryBucket,
      route: route,
    });

    trackEvent('routing_recommendation_gap', {
      recommended_route: recommendedRoute,
      selected_route: route,
      is_recommended_route: route === recommendedRoute,
      language_selected: language,
    });
  };

  const handlePhoneClick = (route: ContactRouteId) => {
    trackEvent('contact_phone_click', {
      source: `tel_${route}`,
      contact_route: route,
      recommended_route: recommendedRoute,
      language_selected: language,
      locale_region: localeSignals.regionCode ?? 'unknown',
      locale_timezone: localeSignals.timeZone ?? 'unknown',
    });
  };

  return (
    <section id="contato" className="relative overflow-hidden border-t border-white/10 bg-brand-black py-24 lg:py-32 bg-noise">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-brand-lime/10 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-brand-lime/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="chapter-kicker">Capitulo 10</div>
          <div className="ds-section-badge gap-2 tracking-[0.35em]">
            <Sparkles size={12} />
            {t.contactRouting.badge}
          </div>

          <h2 className="mt-6 font-display text-4xl md:text-7xl font-black uppercase italic leading-[0.9] tracking-tighter text-white">
            {t.contactRouting.title}{' '}
            <span className="text-brand-lime">{t.contactRouting.titleAccent}</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/70">
            {t.contactRouting.subtitle}
          </p>

          <p className="mt-4 text-[11px] font-black uppercase tracking-[0.35em] text-brand-lime/80">
            {t.contactRouting.helper}
          </p>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-white/65">
            {routingReason}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {orderedRoutes.map((route) => {
            const isRecommended = route.id === recommendedRoute;
            const Icon = route.icon;
            const context = route.id === 'br' ? routeContextCopy.br : routeContextCopy.intl;
            const { prefix, rest } = splitPhoneDisplay(route.phone);

            return (
              <article
                key={route.id}
                className={`relative overflow-hidden rounded-[2rem] border p-6 md:p-8 motion-enter-primary chapter-shell ${
                  isRecommended
                    ? 'border-brand-lime/50 bg-white/[0.05] md:shadow-[0_0_80px_rgba(212,255,0,0.08)]'
                    : 'border-white/10 bg-white/[0.03]'
                }`}
              >
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity [transition-duration:var(--motion-duration-medium)] ${
                    isRecommended
                      ? 'bg-[radial-gradient(circle_at_top,rgba(212,255,0,0.10),transparent_40%)]'
                      : 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_40%)]'
                  }`}
                />

                <div className="relative flex h-full flex-col gap-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${
                          isRecommended
                            ? 'border-brand-lime/30 bg-brand-lime text-brand-black'
                            : 'border-white/10 bg-white/[0.05] text-brand-lime'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <span className="ds-chip ds-chip-muted tracking-[0.35em]">
                          {route.label}
                        </span>
                        <p className="mt-3 text-[10px] font-black uppercase tracking-[0.32em] text-white/70">
                          {context.path}
                        </p>
                        <a
                          href={route.telHref}
                          aria-label={`Ligar para ${route.phone}`}
                          onClick={() => handlePhoneClick(route.id)}
                          className="mt-3 inline-flex flex-wrap items-end gap-x-2 md:gap-x-3 gap-y-1 font-display font-black italic leading-none text-white tabular-nums transition-colors [transition-duration:var(--motion-duration-fast)] hover:text-brand-lime"
                        >
                          <span className="text-2xl md:text-3xl text-brand-lime">{prefix}</span>
                          <span className="text-3xl md:text-5xl tracking-tight whitespace-nowrap">{rest}</span>
                        </a>
                      </div>
                    </div>

                    {isRecommended && (
                      <span className="hidden sm:inline-flex ds-chip border-brand-lime bg-brand-lime tracking-[0.35em] text-brand-black">
                        {t.contactRouting.recommended}
                      </span>
                    )}
                  </div>

                  <p className="max-w-xl text-base md:text-lg leading-relaxed text-white/72">
                    {route.summary}
                  </p>
                  <div className="grid gap-2">
                    {context.signals.map((signal) => (
                      <div
                        key={`${route.id}-${signal}`}
                        className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white/65"
                      >
                        {signal}
                      </div>
                    ))}
                    <p className="pt-1 text-[10px] font-black uppercase tracking-[0.22em] text-brand-lime/75">
                      {context.eta}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <Magnetic>
                      <Button
                        href={route.href}
                        variant={isRecommended ? 'solid' : 'subtle'}
                        size="md"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleContactClick(route.id)}
                        className={`rounded-2xl ${
                          isRecommended
                            ? 'shadow-[0_18px_50px_rgba(212,255,0,0.18)] motion-lift'
                            : 'text-brand-lime motion-lift'
                        }`}
                      >
                        <MessageCircle className="h-4 w-4" />
                        {route.button}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Magnetic>

                    <div className="text-[10px] font-black uppercase tracking-[0.35em] ds-text-subtle md:block hidden">
                      {route.id === 'br' ? 'BR / WhatsApp' : 'INTL / WhatsApp'}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed ds-text-subtle">
            {t.contactRouting.disclaimer}
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-lime/55">
            {t.cta.urgency}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
