'use client';

import React from 'react';
import { useTranslation } from './LanguageContext';
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
    <section id="diferenciais" className="py-24 lg:py-32 bg-brand-black text-white overflow-hidden relative bg-noise">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-lime/10 blur-[120px] rounded-full opacity-50 animate-slow-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-lime/5 blur-[120px] rounded-full opacity-30 animate-slow-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-lime/20 bg-brand-lime/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime">
                The Standard
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tight italic leading-[0.9] mb-8">
              {t.strategicBenefits.title.split(' ').slice(0, -1).join(' ')} <br />
              <span className="text-brand-lime">{t.strategicBenefits.title.split(' ').pop()}</span>
            </h2>

            <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-xl">
              {t.strategicBenefits.subtitle}
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-display font-black text-white italic">100%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-lime mt-2">Transparência</p>
              </div>
              <div>
                <p className="text-4xl font-display font-black text-white italic">+200%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-lime mt-2">Média de ROI</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full reveal stagger-2">
            <div className="grid gap-4">
              {t.strategicBenefits.items.map((benefit, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-6 p-6 rounded-[32px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-lime/30 transition-all duration-500"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-lime text-brand-black flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl">
                    {icons[idx]}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1 group-hover:text-brand-lime transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Comparison or Extra Authority Badge */}
        <div className="reveal stagger-3 border-t border-white/10 pt-16 mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 md:gap-16 opacity-40">
            {['Estratégia Proprietária', 'Gestão de Ativos', 'Creative Lab', 'Performance Sênior'].map((tag, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white">
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
