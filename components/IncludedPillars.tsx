'use client';

import React, { useState } from 'react';
import { useTranslation } from './LanguageContext';
import { useUX } from './UXContext';
import { Icons } from '../constants';

const IncludedPillars: React.FC = () => {
  const { t } = useTranslation();
  const { setStrategyNote } = useUX();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const pillars = [
    { ...t.pillars.items.strategy, icon: <Icons.Strategy /> },
    { ...t.pillars.items.content, icon: <Icons.Content /> },
    { ...t.pillars.items.ads, icon: <Icons.Ads /> },
    { ...t.pillars.items.analysis, icon: <Icons.Analysis /> },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>, idx: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setActiveCard(idx);
  };

  return (
    <section
      id="pilares"
      className="py-24 lg:py-32 bg-brand-black text-white overflow-hidden relative bg-noise px-4"
      onMouseEnter={() => setStrategyNote(t.strategyNotes.design)}
      onMouseLeave={() => setStrategyNote(null)}
    >
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-lime/5 blur-[120px] rounded-full translate-x-1/2" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-20 reveal relative">
          <span className="blueprint-label -top-8 left-1/2 -translate-x-1/2">SERVICE_ARCHITECTURE: PILLARS</span>
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime">
              Full Stack Marketing
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tight uppercase italic leading-[0.9]">
            {t.pillars.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            {t.pillars.subtitle}
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <span className="blueprint-label -left-12 top-0 rotate-90 origin-left">GRID_COLS: 4</span>
          {pillars.map((pillar, idx) => (
            <article
              key={idx}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
              className={`reveal stagger-${idx + 1} relative p-8 md:p-10 border border-white/5 bg-white/[0.02] rounded-[32px] overflow-hidden transition-all duration-500 group hover:border-brand-lime/40 hover:-translate-y-2 blueprint-element`}
            >
              <span className="blueprint-label -top-4 left-6">PILLAR_ID: P0{idx + 1}</span>
              {/* Spotlight Effect */}
              {activeCard === idx && (
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100"
                  style={{
                    background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 255, 0, 0.08), transparent 40%)`
                  }}
                />
              )}

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-lime mb-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-lime group-hover:text-brand-black group-hover:rotate-6 shadow-xl">
                  {pillar.icon}
                </div>

                <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-white transition-colors group-hover:text-brand-lime">
                  {pillar.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-lime/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="blueprint-label -bottom-2 right-4 opacity-50">HEURISTIC: 0.92</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedPillars;