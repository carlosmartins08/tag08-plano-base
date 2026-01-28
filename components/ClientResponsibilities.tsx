'use client';

import React from 'react';
import { useTranslation } from './LanguageContext';
import { Handshake, CheckCircle2, MessageSquare, Target, Zap } from 'lucide-react';

const ClientResponsibilities: React.FC = () => {
  const { t } = useTranslation();

  const responsibilityIcons = [
    <Zap key="0" className="w-4 h-4" />,
    <Target key="1" className="w-4 h-4" />,
    <MessageSquare key="2" className="w-4 h-4" />,
    <CheckCircle2 key="3" className="w-4 h-4" />,
  ];

  return (
    <section className="py-24 lg:py-32 bg-brand-black relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal border border-white/10 bg-white/[0.02] rounded-[60px] p-8 md:p-16 lg:p-24 backdrop-blur-sm relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-lime/10 blur-[80px] rounded-full -translate-x-12 -translate-y-12"></div>

          <div className="max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-lime/20 bg-brand-lime/5 mb-8">
              <Handshake className="w-4 h-4 text-brand-lime" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime">
                {t.responsibilities.badge}
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 uppercase italic tracking-tighter leading-[0.9]">
              {t.responsibilities.title} <br />
              <span className="text-brand-lime">{t.responsibilities.titleAccent}</span>
            </h2>

            <p className="text-slate-400 mb-16 leading-relaxed font-medium text-lg max-w-2xl">
              {t.responsibilities.subtitle}
            </p>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {t.responsibilities.items.map((text, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-lime group-hover:text-brand-black transition-all duration-500 shadow-xl text-brand-lime">
                    {responsibilityIcons[i]}
                  </div>
                  <div>
                    <p className="text-white font-black text-sm uppercase tracking-tight group-hover:text-brand-lime transition-colors duration-300">
                      {text}
                    </p>
                    <div className="w-0 h-0.5 bg-brand-lime mt-1 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientResponsibilities;
