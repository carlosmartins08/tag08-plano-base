'use client';

import React from 'react';
import { ArrowRight, Globe2, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl, WHATSAPP_CONTACTS } from '../constants';
import { useTranslation } from '../contexts/LanguageContext';
import Magnetic from './Magnetic';

type ContactRouteId = 'br' | 'intl';

const FinalCTA: React.FC = () => {
  const { language, t } = useTranslation();

  const recommendedRoute: ContactRouteId = language === 'pt' ? 'br' : 'intl';

  const routes = [
    {
      id: 'br' as const,
      icon: MapPin,
      phone: WHATSAPP_CONTACTS.br.displayPhone,
      href: buildWhatsAppUrl(WHATSAPP_CONTACTS.br.phone, t.contactRouting.routes.br.message),
      label: t.contactRouting.routes.br.label,
      summary: t.contactRouting.routes.br.summary,
      button: t.contactRouting.routes.br.button,
    },
    {
      id: 'intl' as const,
      icon: Globe2,
      phone: WHATSAPP_CONTACTS.intl.displayPhone,
      href: buildWhatsAppUrl(WHATSAPP_CONTACTS.intl.phone, t.contactRouting.routes.intl.message),
      label: t.contactRouting.routes.intl.label,
      summary: t.contactRouting.routes.intl.summary,
      button: t.contactRouting.routes.intl.button,
    },
  ];

  const handleContactClick = (route: ContactRouteId) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        currency: 'BRL',
        value: 0,
        source: `whatsapp_${route}`,
        contact_route: route,
      });
    }
  };

  return (
    <section id="contato" className="relative overflow-hidden border-t border-white/10 bg-brand-black py-24 lg:py-32 bg-noise">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-brand-lime/10 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-brand-lime/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-lime/20 bg-brand-lime/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-brand-lime">
            <Sparkles size={12} />
            {t.contactRouting.badge}
          </div>

          <h2 className="mt-6 font-display text-5xl md:text-7xl font-black uppercase italic leading-[0.9] tracking-tighter text-white">
            {t.contactRouting.title}{' '}
            <span className="text-brand-lime">{t.contactRouting.titleAccent}</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/70">
            {t.contactRouting.subtitle}
          </p>

          <p className="mt-4 text-[11px] font-black uppercase tracking-[0.35em] text-brand-lime/80">
            {t.contactRouting.helper}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {routes.map((route) => {
            const isRecommended = route.id === recommendedRoute;
            const Icon = route.icon;

            return (
              <article
                key={route.id}
                className={`relative overflow-hidden rounded-[2rem] border p-6 md:p-8 transition-all duration-500 ${
                  isRecommended
                    ? 'border-brand-lime/50 bg-white/[0.05] shadow-[0_0_80px_rgba(212,255,0,0.08)]'
                    : 'border-white/10 bg-white/[0.03]'
                }`}
              >
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
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
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-white/60">
                          {route.label}
                        </span>
                        <h3 className="mt-4 font-display text-3xl md:text-4xl font-black uppercase italic leading-[0.9] tracking-tight text-white">
                          {route.phone}
                        </h3>
                      </div>
                    </div>

                    {isRecommended && (
                      <span className="rounded-full bg-brand-lime px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-brand-black">
                        {t.contactRouting.recommended}
                      </span>
                    )}
                  </div>

                  <p className="max-w-xl text-base md:text-lg leading-relaxed text-white/72">
                    {route.summary}
                  </p>

                  <div className="mt-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <Magnetic>
                      <a
                        href={route.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleContactClick(route.id)}
                        className={`inline-flex items-center gap-3 rounded-2xl px-6 py-4 text-[11px] font-black uppercase tracking-[0.35em] transition-all duration-300 ${
                          isRecommended
                            ? 'bg-brand-lime text-brand-black shadow-[0_18px_50px_rgba(212,255,0,0.18)] hover:scale-[1.02]'
                            : 'border border-white/10 bg-black/35 text-brand-lime hover:border-brand-lime/30 hover:bg-brand-lime/5'
                        }`}
                      >
                        <MessageCircle className="h-4 w-4" />
                        {route.button}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Magnetic>

                    <div className="text-[10px] font-black uppercase tracking-[0.35em] text-white/35">
                      {route.id === 'br' ? 'BR / WhatsApp' : 'INTL / WhatsApp'}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-white/55">
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
