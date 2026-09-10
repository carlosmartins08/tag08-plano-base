'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Globe2, MapPin, MessageCircle } from 'lucide-react';
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
  const primaryRoute = orderedRoutes[0];
  const secondaryRoute = orderedRoutes[1];
  const primaryContext = primaryRoute.id === 'br' ? routeContextCopy.br : routeContextCopy.intl;
  const PrimaryIcon = primaryRoute.icon;
  const SecondaryIcon = secondaryRoute.icon;
  const primaryPhone = splitPhoneDisplay(primaryRoute.phone);
  const secondaryPhone = splitPhoneDisplay(secondaryRoute.phone);

  const handleContactClick = (route: ContactRouteId) => {
    trackFunnelEvent('final_cta_click', {
      lang: language,
      section: 'final_cta',
      cta: `open_whatsapp_${route}`,
      country: localeSignals.countryBucket,
      route,
    });

    trackFunnelEvent('whatsapp_click', {
      lang: language,
      section: 'final_cta',
      cta: `whatsapp_${route}`,
      country: localeSignals.countryBucket,
      route,
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
    <section id="contato" className="relative scroll-mt-40 overflow-hidden border-t border-white/10 bg-brand-black py-28 lg:scroll-mt-44 lg:py-36 bg-noise">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-brand-lime/10 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-brand-lime/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.8rem] bg-brand-lime px-6 py-6 shadow-[0_30px_120px_rgba(212,255,0,0.14)] md:px-7 md:py-8 xl:px-10 xl:py-10">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-start">
            <div className="relative flex min-h-[clamp(24rem,40vw,32.5rem)] w-full min-w-0 flex-col justify-between overflow-hidden rounded-[2.15rem] border border-black/10 bg-black/88 xl:w-[40%] xl:self-start">
              <Image
                src="/team/pedro.jpg"
                alt="TAG08 operação estratégica"
                fill
                sizes="(max-width: 1280px) 100vw, 34vw"
                className="object-cover object-[44%_28%] grayscale brightness-[0.58] contrast-[1.12]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.42)),radial-gradient(circle_at_46%_24%,rgba(255,255,255,0.10),transparent_24%),radial-gradient(circle_at_50%_78%,rgba(0,0,0,0.18),transparent_38%)]" />

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 p-5 sm:flex-nowrap sm:gap-4 sm:p-6">
                <span className="rounded-full border border-white/10 bg-black/38 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/68 backdrop-blur-md">
                  Núcleo operacional
                </span>
                <span className="rounded-full border border-white/8 bg-black/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-white/34">
                  TAG08.v3
                </span>
              </div>

              <div className="relative z-10 mt-auto flex flex-col gap-4 p-5 sm:p-6">
                <div className="w-fit max-w-full rounded-[1.6rem] border border-white/10 bg-black/18 px-5 py-4 backdrop-blur-[3px]">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/46">
                    Roteamento TAG08
                  </p>
                  <p className="mt-3 text-3xl font-black uppercase leading-none tracking-[0.02em] text-white/88 md:text-[2.6rem]">
                    COMERCIAL
                  </p>
                  <p className="mt-1 text-lg font-black uppercase tracking-[0.22em] text-white/34 md:text-xl">
                    360
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/42 sm:flex-nowrap sm:gap-4">
                  <span>Latência: 12ms</span>
                  <span className="rounded-full border border-white/10 bg-black/18 px-3 py-1.5 text-white/46 backdrop-blur-[2px]">
                    Roteamento sênior
                  </span>
                </div>
              </div>
            </div>

            <div className="min-w-0 flex-1 pt-2 text-brand-black xl:pt-1">
              <div className="inline-flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border-4 border-brand-black bg-transparent">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-black"></span>
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-brand-black/80">
                  {t.contactRouting.badge}
                </span>
              </div>

              <h2 className="mt-5 max-w-[13ch] font-display text-4xl font-black uppercase leading-[0.84] tracking-[-0.06em] text-brand-black sm:text-5xl lg:text-[3.35rem] xl:text-[3.8rem]">
                {t.contactRouting.title}
                <span className="block">{t.contactRouting.titleAccent}</span>
              </h2>

              <p className="mt-4 max-w-[46ch] text-[0.95rem] font-bold leading-relaxed text-brand-black/80 md:text-[1rem]">
                {t.contactRouting.subtitle}
              </p>

              <p className="mt-4 max-w-[62ch] text-[10px] font-black uppercase leading-[1.5] tracking-[0.18em] text-brand-black/55">
                {t.contactRouting.helper}
              </p>

              <div className="mt-8 grid max-w-[920px] grid-cols-1 items-stretch gap-4 md:grid-cols-2">
                <div className="flex h-full min-h-[332px] flex-col rounded-[2rem] border border-brand-lime/18 bg-brand-black/90 px-5 py-5 text-white shadow-[0_28px_80px_rgba(0,0,0,0.24)] md:px-6 md:py-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-lime text-brand-black shadow-[0_8px_24px_rgba(212,255,0,0.22)]">
                      <PrimaryIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand-lime/80">
                        {t.contactRouting.recommended}
                      </p>
                      <p className="mt-2 max-w-[22ch] text-[1.02rem] font-bold leading-relaxed text-white/92">
                        {primaryRoute.summary}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-[1.35rem] border border-white/10 bg-white/[0.035] px-4 py-4">
                    <p className="ds-text-muted text-[10px] font-black uppercase tracking-[0.24em]">
                      {primaryContext.path}
                    </p>
                    <a
                      href={primaryRoute.telHref}
                      aria-label={`Ligar para ${primaryRoute.phone}`}
                      onClick={() => handlePhoneClick(primaryRoute.id)}
                      className="mt-2 inline-flex flex-wrap items-end gap-x-2 gap-y-1 rounded font-display font-black italic leading-none text-white/94 transition-colors hover:text-brand-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                    >
                      <span className="text-base text-brand-lime">{primaryPhone.prefix}</span>
                      <span className="text-[1.62rem] tracking-tight">{primaryPhone.rest}</span>
                    </a>

                    <Magnetic>
                      <Button
                        href={primaryRoute.href}
                        variant="solid"
                        size="md"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleContactClick(primaryRoute.id)}
                        className="mt-4 w-full rounded-2xl motion-lift justify-center shadow-[0_18px_50px_rgba(212,255,0,0.18)]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Conectar
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Magnetic>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/8 pt-4 text-[10px] font-black uppercase tracking-[0.22em]">
                    <span className="ds-text-subtle">AGÊNCIA TAG08</span>
                    <span className="ds-chip ds-chip-lime border-brand-lime/30 bg-brand-lime/10">
                      {primaryContext.eta}
                    </span>
                  </div>
                </div>

                <div className="flex h-full min-h-[332px] flex-col rounded-[2rem] border border-white/8 bg-brand-black/85 px-5 py-5 text-white shadow-[0_18px_46px_rgba(0,0,0,0.14)] md:px-6 md:py-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-lime/8 text-brand-lime">
                      <SecondaryIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="ds-text-subtle text-[10px] font-black uppercase tracking-[0.24em]">
                        {t.contactRouting.secondary}
                      </p>
                      <p className="mt-2 max-w-[22ch] text-[0.98rem] font-bold leading-relaxed text-white/84">
                        {secondaryRoute.summary}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-[1.35rem] border border-white/8 bg-white/[0.025] px-4 py-4">
                    <p className="ds-text-muted text-[10px] font-black uppercase tracking-[0.24em]">
                      {secondaryRoute.label}
                    </p>
                    <a
                      href={secondaryRoute.telHref}
                      aria-label={`Ligar para ${secondaryRoute.phone}`}
                      onClick={() => handlePhoneClick(secondaryRoute.id)}
                      className="mt-2 inline-flex flex-wrap items-end gap-x-2 gap-y-1 rounded font-display font-black italic leading-none text-white/82 transition-colors hover:text-brand-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                    >
                      <span className="text-base text-brand-lime/90">{secondaryPhone.prefix}</span>
                      <span className="text-[1.5rem] tracking-tight">{secondaryPhone.rest}</span>
                    </a>

                    <a
                      href={secondaryRoute.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleContactClick(secondaryRoute.id)}
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white/88 transition-colors hover:border-brand-lime/35 hover:bg-brand-lime/[0.05] hover:text-brand-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                    >
                      Abrir alternativa
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/8 pt-4 text-[10px] font-black uppercase tracking-[0.22em]">
                    <span className="ds-text-subtle max-w-[22ch]">{routingReason}</span>
                    <span className="ds-chip ds-chip-muted">
                      {t.cta.urgency}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-brand-black/10 pt-4 text-brand-black/46">
            <p className="max-w-3xl text-xs leading-relaxed md:text-[13px]">
              {t.contactRouting.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
