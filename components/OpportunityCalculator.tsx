'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from './LanguageContext';
import { useUX } from './UXContext';
import { DollarSign, TrendingUp, ArrowRight, Info } from 'lucide-react';

const OpportunityCalculator: React.FC = () => {
  const { t } = useTranslation();
  const { updateROI, setStrategyNote } = useUX();
  const [revenue, setRevenue] = useState(50000);
  const [targetGrowth, setTargetGrowth] = useState(20);
  const [animatedLoss, setAnimatedLoss] = useState(0);

  const annualLoss = revenue * (targetGrowth / 100) * 12;

  useEffect(() => {
    updateROI(revenue, targetGrowth);

    let start = 0;
    const end = annualLoss;
    const duration = 1000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setAnimatedLoss(end);
        clearInterval(timer);
      } else {
        setAnimatedLoss(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [annualLoss]);

  const trackCalculator = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'calculate_roi', {
        revenue: revenue,
        growth: targetGrowth,
        annual_loss: annualLoss
      });
    }
    window.location.href = '#contato';
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section
      id="calculadora"
      className="py-24 lg:py-32 bg-brand-black relative overflow-hidden bg-noise"
      onMouseEnter={() => setStrategyNote(t.strategyNotes.roi)}
      onMouseLeave={() => setStrategyNote(null)}
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(212,255,0,0.03),_transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative">
          <span className="blueprint-label -top-8 left-0">MODULE: ROI_ANALYZER_V1</span>

          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-lime/20 bg-brand-lime/5 mb-8 relative">
              <TrendingUp className="w-3 h-3 text-brand-lime" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime">
                {t.calculator.badge}
              </span>
              <span className="blueprint-label -right-12 top-0">COMP_TYPE: CALC</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight italic leading-[0.9] mb-8">
              {t.calculator.title} <br />
              <span className="text-brand-lime">{t.calculator.titleAccent}</span>
            </h2>

            <p className="text-slate-400 text-xl font-medium leading-relaxed mb-12">
              {t.calculator.description}
            </p>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10 relative">
              <span className="blueprint-label -top-4 left-1/2 -translate-x-1/2">DATA_OUTPUT: CURRENCY_BRL</span>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">{t.calculator.monthlyLossLabel}</p>
                <p className="text-white text-2xl font-black italic">
                  {formatCurrency(revenue * (targetGrowth / 100))}
                </p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">{t.calculator.newCeilingLabel}</p>
                <p className="text-brand-lime text-2xl font-black italic relative">
                  {formatCurrency(revenue * (1 + targetGrowth / 100))}
                  <span className="blueprint-label -bottom-6 right-0">EST_MAX: 1.25X</span>
                </p>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4 text-slate-500">
              <Info className="w-5 h-5 text-brand-lime" />
              <p className="text-xs font-bold uppercase tracking-widest">{t.calculator.disclaimer}</p>
            </div>
          </div>

          <div className="reveal stagger-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-[48px] p-8 md:p-12 backdrop-blur-xl relative group blueprint-element">
              <span className="blueprint-label -top-4 right-12">INPUT_CONTAINER: INTERACTIVE</span>
              <div className="space-y-12">
                {/* Revenue Slider */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label className="text-white font-black uppercase tracking-tighter text-sm italic">{t.calculator.revenueLabel}</label>
                    <span className="text-brand-lime text-3xl font-display font-black italic">{formatCurrency(revenue)}</span>
                    <span className="blueprint-label -top-4 left-0">VAR: CURR_REV</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-lime"
                  />
                </div>

                {/* Growth Slider */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label className="text-white font-black uppercase tracking-tighter text-sm italic">{t.calculator.growthLabel}</label>
                    <span className="text-brand-lime text-3xl font-display font-black italic">{targetGrowth}%</span>
                    <span className="blueprint-label -top-4 left-0">VAR: GROWTH_TARGET</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={targetGrowth}
                    onChange={(e) => setTargetGrowth(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-lime"
                  />
                </div>

                {/* Result Card */}
                <div className="mt-16 bg-brand-lime rounded-[32px] p-8 text-brand-black shadow-[0_20px_60px_rgba(212,255,0,0.15)] relative overflow-hidden">
                  <span className="blueprint-label top-4 left-4 text-brand-black opacity-30">OUT: ANNL_ROI_EST</span>
                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-50">
                      {t.calculator.lossLabel}
                    </p>
                    <p className="text-4xl md:text-5xl font-display font-black italic tracking-tighter leading-none">
                      {formatCurrency(animatedLoss)}
                    </p>

                    <button
                      onClick={trackCalculator}
                      className="mt-10 w-full bg-brand-black text-brand-lime py-5 rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest text-sm hover:bg-slate-900 transition-all shadow-xl group relative"
                    >
                      {t.calculator.cta}
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                      <span className="blueprint-label -bottom-2 right-4 text-brand-lime opacity-30">LINK: #CONTATO</span>
                    </button>
                  </div>

                  {/* Decorative background for the card */}
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <DollarSign className="w-24 h-24" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OpportunityCalculator;
