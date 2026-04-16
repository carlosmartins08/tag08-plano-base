'use client';

import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Target, BarChart, Rocket, CheckCircle2 } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: t.valueProposition.features.focus.title,
      desc: t.valueProposition.features.focus.desc,
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: t.valueProposition.features.data.title,
      desc: t.valueProposition.features.data.desc,
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: t.valueProposition.features.scale.title,
      desc: t.valueProposition.features.scale.desc,
    },
  ];

  return (
    <section id="solucao" className="relative overflow-hidden bg-brand-black py-24 lg:py-32 bg-noise">
      <div className="absolute top-1/2 left-0 h-full w-1/4 -translate-y-1/2 rounded-full bg-brand-lime/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="reveal mb-8 inline-flex items-center gap-3 rounded-full border border-brand-lime/20 bg-brand-lime/5 px-4 py-1.5">
            <CheckCircle2 className="h-4 w-4 text-brand-lime" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime">
              {t.valueProposition.badge}
            </span>
          </div>

          <h2 className="reveal stagger-1 mb-10 font-display text-4xl font-black uppercase italic leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
            {t.valueProposition.title} <br />
            <span className="text-brand-lime">{t.valueProposition.titleAccent}</span>
          </h2>

          <p className="reveal stagger-2 mx-auto mb-20 max-w-3xl text-xl font-medium leading-relaxed text-slate-400 md:text-2xl">
            {t.valueProposition.subtitle}
          </p>

          <div className="grid gap-6 text-left md:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`reveal stagger-${idx + 3} group relative overflow-hidden rounded-[40px] border border-white/5 bg-white/[0.02] p-10 transition-all duration-500 hover:border-brand-lime/40 hover:bg-white/[0.04]`}
              >
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-brand-lime/5 blur-2xl transition-all duration-700 group-hover:bg-brand-lime/20" />

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-lime text-brand-black shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {feature.icon}
                </div>

                <h3 className="mb-4 text-xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-brand-lime">
                  {feature.title}
                </h3>

                <p className="text-sm font-medium leading-relaxed text-slate-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
