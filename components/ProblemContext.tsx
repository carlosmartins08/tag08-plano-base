'use client';

import React from 'react';
import { useTranslation } from './LanguageContext';
import { useUX } from './UXContext';
import { AlertTriangle, TrendingDown, DollarSign, EyeOff } from 'lucide-react';
import { Icons } from '../constants';

const ProblemContext: React.FC = () => {
  const { t } = useTranslation();
  const { setStrategyNote } = useUX();

  const problemIcons = [
    <TrendingDown key="0" className="w-6 h-6" />,
    <AlertTriangle key="1" className="w-6 h-6" />,
    <DollarSign key="2" className="w-6 h-6" />,
    <EyeOff key="3" className="w-6 h-6" />,
  ];

  const cards = Object.values(t.problem.cards);

  return (
    <section
      id="problema"
      className="py-24 lg:py-40 bg-brand-black overflow-hidden bg-noise relative"
      onMouseEnter={() => setStrategyNote(t.strategyNotes.roi)}
      onMouseLeave={() => setStrategyNote(null)}
    >
      {/* Structural Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/[0.02] -translate-y-1/2"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.02]"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/[0.02]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center relative">
          <span className="blueprint-label -top-8 left-0">AUDIT_CONTEXT: DIAGNOSIS_MATRIX</span>

          {/* Left: The "Radar" Diagnosis Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Radar Circles */}
              <div className="absolute inset-0 border border-white/5 rounded-full"></div>
              <div className="absolute inset-[15%] border border-white/5 rounded-full"></div>
              <div className="absolute inset-[30%] border border-white/5 rounded-full"></div>
              <div className="absolute inset-[45%] border border-white/5 rounded-full"></div>

              {/* Scanning Beam */}
              <div className="absolute top-1/2 left-1/2 w-[50%] h-[50%] bg-gradient-to-tr from-brand-lime/20 to-transparent origin-bottom-left animate-radar-spin rounded-tr-full blur-xl opacity-30"></div>

              {/* Problem Nodes */}
              {cards.map((label, idx) => {
                const positions = [
                  "top-[10%] left-[20%]",
                  "top-[30%] right-[5%]",
                  "bottom-[20%] left-[5%]",
                  "bottom-[10%] right-[15%]"
                ];
                return (
                  <div
                    key={idx}
                    className={`absolute ${positions[idx]} reveal stagger-${idx + 1}`}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="w-12 h-12 bg-black border border-white/10 rounded-xl flex items-center justify-center text-red-500 group-hover:border-red-500/50 transition-all duration-500 group-hover:scale-110 shadow-2xl">
                        {problemIcons[idx]}
                      </div>
                      <div className="absolute top-14 left-0 whitespace-nowrap bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-md">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-red-400">
                          {label as string}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Center "Stagnation" Point */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.8)]"></div>
            </div>

            {/* Technical Labels */}
            <div className="mt-20 flex justify-between px-8 text-[8px] font-mono text-slate-600 uppercase tracking-[0.3em] relative">
              <span className="flex items-center gap-2 relative">
                <div className="w-1 h-1 bg-red-500 animate-pulse"></div> ERROR_DETECTED
                <span className="blueprint-label -top-4 left-0">HEX: #DC2626</span>
              </span>
              <span>SYSTEM_AUDIT_V2.0</span>
              <span className="relative">
                CORE_STAGNATION: TRUE
                <span className="blueprint-label -top-4 right-0">STAG_COEFF: 0.85</span>
              </span>
            </div>
          </div>

          {/* Right: Copy & Findings */}
          <div className="lg:col-span-7 order-1 lg:order-2 reveal relative">
            <span className="blueprint-label -top-8 right-0">SECTION: FINDINGS_LIST</span>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">
                {t.problem.label}
              </span>
            </div>

            <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-8 leading-[0.85] tracking-tighter uppercase italic">
              {t.problem.title}
            </h2>

            <p className="text-xl text-slate-400 mb-16 leading-relaxed font-medium max-w-2xl border-l-2 border-red-600/30 pl-8">
              {t.problem.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {t.problem.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`reveal stagger-${idx + 1} flex items-center gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all duration-300 group hover:translate-x-2 relative`}
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/5 text-red-500 flex items-center justify-center shrink-0 border border-red-500/10 group-hover:bg-red-500 group-hover:text-black transition-all">
                    <Icons.Warning />
                  </div>
                  <span className="text-white font-bold text-sm tracking-tight leading-snug">{item}</span>
                  <span className="blueprint-label -bottom-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity">FAULT_ID: 0x{idx}F</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemContext;