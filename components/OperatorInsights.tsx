'use client';

import React, { useState } from 'react';
import { BrainCircuit, ChevronDown } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { trackEvent } from '../lib/analytics';

const OperatorInsights: React.FC = () => {
  const { t, language, localeSignals, recommendedContactRoute } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const onToggle = (index: number) => {
    const willOpen = openIndex !== index;
    setOpenIndex(willOpen ? index : null);

    trackEvent('operator_insight_toggle', {
      lang: language,
      section: 'operator_insights',
      cta: `insight_${index + 1}_${willOpen ? 'open' : 'close'}`,
      country: localeSignals.countryBucket,
      route: recommendedContactRoute,
    });
  };

  return (
    <section id="insights" className="relative overflow-hidden bg-brand-black py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 chapter-kicker">Capitulo 04</div>
        <div className="mb-10 max-w-4xl">
          <div className="mb-6 ds-section-badge gap-2">
            <BrainCircuit className="h-4 w-4 text-brand-lime" />
            <span>{t.contentLab.badge}</span>
          </div>
          <h2 className="cinematic-title text-4xl font-black uppercase italic leading-[0.9] tracking-tight text-white md:text-6xl lg:text-7xl">
            {t.contentLab.title} <span className="text-brand-lime">{t.contentLab.titleAccent}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/72 md:text-xl">{t.contentLab.subtitle}</p>
        </div>

        <div className="grid gap-4">
          {t.contentLab.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.hook} className="chapter-shell overflow-hidden rounded-3xl">
                <button
                  type="button"
                  onClick={() => onToggle(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                >
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.32em] text-brand-lime/85">{t.contentLab.ctaLabel}</p>
                    <h3 className="mt-2 text-2xl font-black uppercase italic leading-tight text-white">{item.hook}</h3>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-brand-lime transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-5 pb-6 pt-4 md:px-6">
                    <p className="text-sm leading-relaxed text-white/75">{item.context}</p>
                    <p className="mt-3 text-base font-semibold leading-relaxed text-white/90">{item.insight}</p>
                    <div className="mt-4 rounded-xl border border-brand-lime/20 bg-brand-lime/[0.07] p-4 text-sm font-semibold leading-relaxed text-white/92">
                      {item.action}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OperatorInsights;
