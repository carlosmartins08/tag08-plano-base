'use client';

import React from 'react';
import { useTranslation } from './LanguageContext';
import { Calendar, PenTool, Rocket, BarChart3 } from 'lucide-react';

const MonthlyCycle: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      ...t.monthlyCycle.steps.step1,
      icon: <Calendar className="w-6 h-6" />,
      tag: "01"
    },
    {
      ...t.monthlyCycle.steps.step2,
      icon: <PenTool className="w-6 h-6" />,
      tag: "02"
    },
    {
      ...t.monthlyCycle.steps.step3,
      icon: <Rocket className="w-6 h-6" />,
      tag: "03"
    },
    {
      ...t.monthlyCycle.steps.step4,
      icon: <BarChart3 className="w-6 h-6" />,
      tag: "04"
    }
  ];

  return (
    <section id="ciclo" className="py-24 lg:py-32 bg-brand-black relative overflow-hidden bg-noise">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 reveal">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-brand-lime/20 bg-brand-lime/5">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime">
              Workflow
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 uppercase tracking-tight italic">
            {t.monthlyCycle.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            {t.monthlyCycle.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`reveal stagger-${idx + 1} group relative`}
              >
                {/* Connector Dot (Desktop) */}
                <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-black border-2 border-white/20 z-20 transition-all duration-500 group-hover:border-brand-lime group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(212,255,0,0.5)]"></div>

                <div className="h-full p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-brand-lime/30 hover:bg-white/[0.04] transition-all duration-500 group">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-brand-lime/10 text-brand-lime flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {step.icon}
                    </div>
                    <span className="text-4xl font-display font-black text-white/5 italic select-none">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight transition-colors group-hover:text-brand-lime">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>

                  {/* Desktop Hover Indicator */}
                  <div className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-1 h-8 bg-gradient-to-t from-brand-lime to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center reveal stagger-4">
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em]">
            {t.monthlyCycle.footerText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MonthlyCycle;
