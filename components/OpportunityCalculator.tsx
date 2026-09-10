'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { useUX } from '../contexts/UXContext';
import { DollarSign, TrendingUp, ArrowRight, Info } from 'lucide-react';
import { trackEvent, trackFunnelEvent } from '../lib/analytics';

const OpportunityCalculator: React.FC = () => {
  const { t, language, localeSignals, recommendedContactHref, recommendedContactRoute } = useTranslation();
  const { markRevenueScenarioExplored, setStrategyNote } = useUX();
  const [revenue, setRevenue] = useState(50000);
  const [targetGrowth, setTargetGrowth] = useState(20);
  const [animatedAnnualPotential, setAnimatedAnnualPotential] = useState(0);

  const monthlyPotential = revenue * (targetGrowth / 100);
  const annualPotential = monthlyPotential * 12;
  const growthMultiplier = 1 + targetGrowth / 100;

  useEffect(() => {
    let start = 0;
    const end = annualPotential;
    const duration = 1000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setAnimatedAnnualPotential(end);
        clearInterval(timer);
      } else {
        setAnimatedAnnualPotential(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [annualPotential]);

  const getGrowthBand = () => {
    if (targetGrowth <= 15) return '5_15';
    if (targetGrowth <= 30) return '20_30';
    return '35_50';
  };

  const handleRevenueChange = (value: number) => {
    setRevenue(value);
    markRevenueScenarioExplored();
  };

  const handleGrowthChange = (value: number) => {
    setTargetGrowth(value);
    markRevenueScenarioExplored();
  };

  const trackCalculator = () => {
    trackFunnelEvent('calculator_submit', {
      lang: language,
      section: 'calculator',
      cta: 'discuss_revenue_scenario',
      country: localeSignals.countryBucket,
      route: recommendedContactRoute,
    });

    trackEvent('calculator_context', {
      model: 'linear_monthly_revenue',
      growth_band: getGrowthBand(),
      currency: 'BRL',
    });

    window.open(recommendedContactHref, '_blank', 'noopener,noreferrer');
  };

  const formatCurrency = (value: number) => {
    const locale = {
      pt: 'pt-BR',
      en: 'en-US',
      es: 'es-ES',
      fr: 'fr-FR',
    }[language];

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section
      id="calculadora"
      className="py-24 lg:py-32 bg-brand-black relative overflow-hidden bg-noise"
      onMouseEnter={() => setStrategyNote(t.strategyNotes.calculator)}
      onMouseLeave={() => setStrategyNote(null)}
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(212,255,0,0.03),_transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative">
          <span className="blueprint-label -top-8 left-0">MODULE: REVENUE_SCENARIO_V1</span>

          <div className="reveal">
            <div className="ds-section-badge mb-8 relative">
              <TrendingUp className="w-3 h-3 text-brand-lime" />
              <span>{t.calculator.badge}</span>
              <span className="blueprint-label -right-12 top-0">COMP_TYPE: SCENARIO</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight italic leading-[0.9] mb-8">
              {t.calculator.title} <br />
              <span className="text-brand-lime">{t.calculator.titleAccent}</span>
            </h2>

            <p className="text-slate-400 text-xl font-medium leading-relaxed mb-12">
              {t.calculator.description}
            </p>

            <div className="relative grid grid-cols-1 gap-6 border-y border-white/10 py-8 sm:grid-cols-2 sm:gap-8">
              <span className="blueprint-label -top-4 left-1/2 -translate-x-1/2">DATA_OUTPUT: BRL</span>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">{t.calculator.monthlyPotentialLabel}</p>
                  <p className="break-words text-2xl font-black italic text-white">
                  {formatCurrency(monthlyPotential)}
                </p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">{t.calculator.newMonthlyRevenueLabel}</p>
                  <p className="relative break-words text-2xl font-black italic text-brand-lime">
                  {formatCurrency(revenue * growthMultiplier)}
                  <span className="blueprint-label -bottom-6 right-0">EST: {growthMultiplier.toFixed(2)}X</span>
                </p>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4 text-slate-500">
              <Info className="w-5 h-5 text-brand-lime" />
              <p className="text-xs font-bold uppercase tracking-widest">{t.calculator.currencyNote} · {t.calculator.disclaimer}</p>
            </div>
          </div>

          <div className="reveal stagger-2">
            <div className="ds-panel-shell rounded-[48px] p-8 md:p-12 relative group blueprint-element">
              <span className="blueprint-label -top-4 right-12">INPUT_CONTAINER: SCENARIO</span>
              <div className="space-y-12">
                {/* Revenue Slider */}
                <div className="space-y-6">
                  <div className="relative flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <label htmlFor="monthly-revenue" className="text-white font-black uppercase tracking-tighter text-sm italic">{t.calculator.revenueLabel}</label>
                    <span className="text-brand-lime text-3xl font-display font-black italic">{formatCurrency(revenue)}</span>
                    <span className="blueprint-label -top-4 left-0">VAR: MONTHLY_REVENUE</span>
                  </div>
                  <input
                    id="monthly-revenue"
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={revenue}
                    onChange={(e) => handleRevenueChange(Number(e.target.value))}
                    aria-valuetext={formatCurrency(revenue)}
                    className="w-full h-2 cursor-pointer appearance-none rounded-lg bg-white/10 accent-brand-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-4 focus-visible:ring-offset-brand-black"
                  />
                  <p className="ds-text-subtle text-xs">{t.calculator.revenueRange}</p>
                </div>

                {/* Growth Slider */}
                <div className="space-y-6">
                  <div className="relative flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <label htmlFor="growth-target" className="text-white font-black uppercase tracking-tighter text-sm italic">{t.calculator.growthLabel}</label>
                    <span className="text-brand-lime text-3xl font-display font-black italic">{targetGrowth}%</span>
                    <span className="blueprint-label -top-4 left-0">VAR: GROWTH_TARGET</span>
                  </div>
                  <input
                    id="growth-target"
                    type="range"
                    min="5"
                    max="50"
                    step="5"
                    value={targetGrowth}
                    onChange={(e) => handleGrowthChange(Number(e.target.value))}
                    aria-valuetext={`${targetGrowth}%`}
                    className="w-full h-2 cursor-pointer appearance-none rounded-lg bg-white/10 accent-brand-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-4 focus-visible:ring-offset-brand-black"
                  />
                  <p className="ds-text-subtle text-xs">{t.calculator.growthRange}</p>
                </div>

                {/* Result Card */}
                <div className="mt-16 bg-brand-lime rounded-[32px] p-8 text-brand-black shadow-[0_20px_60px_rgba(212,255,0,0.15)] relative overflow-hidden">
                  <span className="blueprint-label top-4 left-4 text-brand-black opacity-30">OUT: ANNUAL_REVENUE_POTENTIAL</span>
                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-50">
                      {t.calculator.annualPotentialLabel}
                    </p>
                    <p aria-hidden="true" className="text-4xl md:text-5xl font-display font-black italic tracking-tighter leading-none">
                      {formatCurrency(animatedAnnualPotential)}
                    </p>
                    <p className="sr-only" aria-live="polite" aria-atomic="true">
                      {t.calculator.annualPotentialLabel}: {formatCurrency(annualPotential)}
                    </p>

                    <button
                      onClick={trackCalculator}
                      className="relative mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-brand-black py-5 text-sm font-black uppercase tracking-widest text-brand-lime shadow-xl transition-all hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:ring-offset-2 focus-visible:ring-offset-brand-lime group"
                    >
                      {t.calculator.cta}
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                      <span className="blueprint-label -bottom-2 right-4 text-brand-lime opacity-30">
                        LINK: WA_{recommendedContactRoute.toUpperCase()}
                      </span>
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

