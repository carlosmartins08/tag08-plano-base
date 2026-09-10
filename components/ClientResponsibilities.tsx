'use client';

import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
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
        <div className="reveal ds-panel-shell rounded-[60px] p-8 md:p-16 lg:p-24 relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-lime/10 blur-[80px] rounded-full -translate-x-12 -translate-y-12"></div>

          <div className="max-w-4xl relative z-10">
            <div className="mb-8 ds-section-badge gap-3">
              <Handshake className="w-4 h-4 text-brand-lime" />
              <span>{t.responsibilities.badge}</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 uppercase italic tracking-tighter leading-[0.9]">
              {t.responsibilities.title}
            </h2>

            <p className="text-slate-400 mb-16 leading-relaxed font-medium text-lg max-w-2xl">
              {t.responsibilities.subtitle}
            </p>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {t.responsibilities.items.map((text, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="ds-icon-shell w-12 h-12 flex-shrink-0 group-hover:bg-brand-lime group-hover:text-brand-black shadow-xl">
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

