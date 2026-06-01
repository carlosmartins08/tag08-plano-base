'use client';

import React from 'react';
import { Eye, Radar, Sparkles } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { trackStrategicEvent } from '../lib/analytics';

const DecisionLens: React.FC = () => {
  const { t, language, localeSignals } = useTranslation();

  const onCardHover = (index: number, title: string) => {
    trackStrategicEvent('decision_lens_card_view', {
      lang: language,
      section: 'decision_lens',
      cta: `card_${index + 1}`,
      country: localeSignals.countryBucket,
      title,
    });
  };

  return (
    <section id="sinais" className="relative overflow-hidden bg-brand-black py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(212,255,0,0.08),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.06),transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <div className="mb-7 ds-section-badge gap-2">
              <Radar className="h-4 w-4 text-brand-lime" />
              <span>{t.decisionLens.badge}</span>
            </div>
            <h2 className="font-display text-4xl font-black uppercase italic leading-[0.9] tracking-tight text-white md:text-6xl lg:text-7xl">
              {t.decisionLens.title} <span className="text-brand-lime">{t.decisionLens.titleAccent}</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-slate-400 md:text-xl">
              {t.decisionLens.subtitle}
            </p>
          </div>

          <aside className="ds-panel-shell rounded-3xl p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-lime">{t.decisionLens.revealLabel}</p>
            <p className="mt-3 text-xl font-black uppercase italic leading-tight text-white">{t.decisionLens.revealTitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">{t.decisionLens.revealBody}</p>
          </aside>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {t.decisionLens.items.map((item, index) => (
            <article
              key={item.title}
              onMouseEnter={() => onCardHover(index, item.title)}
              className="group ds-card-shell ds-card-shell-hover-lime rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center gap-3">
                {index === 0 ? <Eye className="h-4 w-4 text-brand-lime" /> : index === 1 ? <Sparkles className="h-4 w-4 text-brand-lime" /> : <Radar className="h-4 w-4 text-brand-lime" />}
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime/90">
                  {String(index + 1).padStart(2, '0')}
                </p>
              </div>
              <h3 className="text-2xl font-black uppercase italic leading-tight text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{item.hidden}</p>
              <div className="mt-5 rounded-2xl border border-brand-lime/20 bg-brand-lime/[0.06] p-4">
                <p className="text-xs font-semibold leading-relaxed text-white/90">{item.action}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DecisionLens;
