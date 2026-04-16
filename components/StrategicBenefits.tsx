'use client';

import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { ShieldCheck, Target, Users, Zap, CheckCircle2 } from 'lucide-react';

const StrategicBenefits: React.FC = () => {
  const { t } = useTranslation();

  const icons = [
    <ShieldCheck key="0" className="w-8 h-8" />,
    <Target key="1" className="w-8 h-8" />,
    <Users key="2" className="w-8 h-8" />,
    <Zap key="3" className="w-8 h-8" />,
  ];

  return (
    <section id="diferenciais" className="relative overflow-hidden bg-brand-black py-24 text-white bg-noise lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-lime/10 blur-[120px] opacity-50 animate-slow-pulse" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-lime/5 blur-[120px] opacity-30 animate-slow-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-24 flex flex-col items-center gap-16 lg:flex-row">
          <div className="reveal flex-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-lime/20 bg-brand-lime/5 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-brand-lime" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime">
                {t.strategicBenefits.badge}
              </span>
            </div>

            <h2 className="mb-8 font-display text-5xl font-black uppercase italic leading-[0.9] tracking-tight text-white md:text-7xl">
              {t.strategicBenefits.title.split(' ').slice(0, -1).join(' ')} <br />
              <span className="text-brand-lime">{t.strategicBenefits.title.split(' ').pop()}</span>
            </h2>

            <p className="max-w-xl text-xl font-medium leading-relaxed text-slate-400">
              {t.strategicBenefits.subtitle}
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="font-display text-4xl font-black italic text-white">100%</p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-brand-lime">
                  {t.strategicBenefits.stats.transparency}
                </p>
              </div>
              <div>
                <p className="font-display text-4xl font-black italic text-white">+200%</p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-brand-lime">
                  {t.strategicBenefits.stats.roi}
                </p>
              </div>
            </div>
          </div>

          <div className="reveal stagger-2 w-full flex-1">
            <div className="grid gap-4">
              {t.strategicBenefits.items.map((benefit, idx) => (
                <div
                  key={benefit.title}
                  className="group flex items-center gap-6 rounded-[32px] border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-brand-lime/30 hover:bg-white/[0.04]"
                >
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-lime text-brand-black shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {icons[idx]}
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-brand-lime">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed font-medium text-slate-400">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal stagger-3 mt-16 border-t border-white/10 pt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 opacity-40 md:gap-16">
            {['Estratégia Proprietária', 'Gestão de Ativos', 'Creative Lab', 'Performance Sênior'].map((tag, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-brand-lime" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white md:text-xs">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicBenefits;
