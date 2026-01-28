'use client';

import React from 'react';
import { useTranslation } from './LanguageContext';
import { Shield, Sparkles, Calendar, ArrowRight, Lock } from 'lucide-react';

const InvestmentAndSecurity: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="investimento" className="py-24 lg:py-32 bg-brand-black relative overflow-hidden bg-noise">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-lime/[0.02] blur-[150px] rounded-full translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-24 reveal">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-lime/20 bg-brand-lime/5 mb-8">
            <Lock className="w-4 h-4 text-brand-lime" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime">
              {t.investment.badge}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8">
            {t.investment.title} <br />
            <span className="text-brand-lime">{t.investment.titleAccent}</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium max-w-xl">
            {t.investment.subtitle}
          </p>
        </div>

        <div className="reveal stagger-1 bg-gradient-to-br from-white/[0.05] to-white/[0.01] rounded-[60px] p-8 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-white/10 backdrop-blur-xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10">
            <div className="space-y-16">
              <h3 className="text-3xl font-black uppercase italic tracking-tight flex items-center gap-4">
                {t.investment.cardTitle}
                <span className="h-px flex-1 bg-white/10"></span>
              </h3>

              <div className="space-y-12">
                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-brand-lime group-hover:scale-110 group-hover:bg-brand-lime group-hover:text-brand-black transition-all duration-500 shadow-xl">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-3 uppercase tracking-tight text-white flex items-center gap-4">
                      {t.investment.fideleityTitle}
                      <span className="bg-brand-lime text-brand-black text-[9px] px-3 py-1 rounded-full font-black animate-pulse">{t.investment.fidelityTag}</span>
                    </h4>
                    <p className="text-slate-400 text-base leading-relaxed font-medium">
                      {t.investment.fidelityDesc}
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-brand-lime group-hover:scale-110 group-hover:bg-brand-lime group-hover:text-brand-black transition-all duration-500 shadow-xl">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-3 uppercase tracking-tight text-white">
                      {t.investment.cancelTitle}
                    </h4>
                    <p className="text-slate-400 text-base leading-relaxed font-medium">
                      {t.investment.cancelDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-lime rounded-[48px] p-10 lg:p-14 text-brand-black shadow-[0_20px_80px_rgba(212,255,0,0.15)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-125">
                <Sparkles className="w-32 h-32" />
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-black text-brand-black/40 uppercase tracking-[0.4em] mb-6 block">
                  {t.investment.offerTitleAccent}
                </span>
                <p className="text-5xl lg:text-6xl font-display font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
                  {t.investment.offerTitle} <br />
                  <span className="text-brand-black/60">{t.investment.offerTitleAccent}</span>
                </p>
                <p className="text-brand-black/80 font-bold mb-12 text-lg leading-relaxed">
                  {t.investment.offerDesc}
                </p>
                <a
                  href="#contato"
                  className="w-full inline-flex items-center justify-between bg-brand-black text-brand-lime font-black px-8 py-6 rounded-3xl hover:bg-slate-900 transition-all shadow-2xl text-lg uppercase tracking-widest group/btn"
                >
                  {t.investment.offerCta}
                  <ArrowRight className="w-6 h-6 transition-transform group-hover/btn:translate-x-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentAndSecurity;
