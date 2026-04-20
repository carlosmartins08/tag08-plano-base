'use client';

import React, { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { useUX } from '../contexts/UXContext';
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
      className="relative overflow-hidden bg-brand-black px-4 py-24 text-white bg-noise lg:py-32"
      onMouseEnter={() => setStrategyNote(t.strategyNotes.design)}
      onMouseLeave={() => setStrategyNote(null)}
    >
      <div className="absolute right-0 top-0 h-full w-1/3 translate-x-1/2 rounded-full bg-brand-lime/5 blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="reveal relative mb-20 text-center">
          <span className="blueprint-label -top-8 left-1/2 -translate-x-1/2">SERVICE_ARCHITECTURE: PILLARS</span>
          <div className="mb-6 ds-section-badge">
            <span>{t.pillars.badge}</span>
          </div>
          <h2 className="font-display text-4xl font-black uppercase italic leading-[0.9] tracking-tight text-white md:text-6xl">
            {t.pillars.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-slate-400">
            {t.pillars.subtitle}
          </p>
        </header>

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <span className="blueprint-label -left-12 top-0 origin-left rotate-90">GRID_COLS: 4</span>
          {pillars.map((pillar, idx) => (
            <article
              key={pillar.title}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
              className="blueprint-element reveal ds-card-shell ds-card-shell-hover-lime group relative overflow-hidden rounded-[32px] p-8 hover:-translate-y-2 md:p-10"
            >
              <span className="blueprint-label -top-4 left-6">PILLAR_ID: P0{idx + 1}</span>
              {activeCard === idx && (
                <div
                  className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 255, 0, 0.08), transparent 40%)`,
                  }}
                />
              )}

              <div className="relative z-10">
                <div className="ds-icon-shell mb-10 h-14 w-14 shadow-xl group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand-lime group-hover:text-brand-black">
                  {pillar.icon}
                </div>

                <h3 className="mb-4 text-xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-brand-lime">
                  {pillar.title}
                </h3>

                <p className="text-sm font-medium leading-relaxed text-slate-400">
                  {pillar.desc}
                </p>
              </div>

              <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-brand-lime/10 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <span className="blueprint-label -bottom-2 right-4 opacity-50">HEURISTIC: 0.92</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedPillars;
