'use client';

import React from 'react';
import { useTranslation } from './LanguageContext';

const FinalCTA: React.FC = () => {
  const { t } = useTranslation();

  const handleContactClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      // Dispara evento para GA4 e Google Ads
      (window as any).gtag('event', 'generate_lead', {
        currency: 'BRL',
        value: 0,
        source: 'whatsapp_button',
      });
      
      // Se tivermos um rótulo de conversão específico do Ads no futuro, adicionamos aqui
      console.log('Evento de conversão disparado');
    }
  };

  return (
    <section id="contato" className="py-32 bg-brand-lime overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="grid grid-cols-12 h-full">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="border-r border-brand-black h-full"></div>
            ))}
         </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-brand-black mb-8 leading-[0.9] tracking-tighter uppercase">
          {t.cta.title.split('?')[0]}?
        </h2>
        <p className="text-brand-black font-bold text-xl mb-12 max-w-2xl mx-auto opacity-80">
          {t.cta.desc}
        </p>
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="flex flex-col items-center gap-4">
            <a 
              href="https://wa.me/message/XURZIJ762YMVB1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-6 bg-brand-black text-brand-lime font-black text-2xl rounded-2xl hover:bg-slate-800 transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-4 uppercase tracking-tight"
              onClick={handleContactClick}
            >
              {t.cta.button}
            </a>
            <p className="text-[10px] text-brand-black/70 font-black uppercase tracking-widest max-w-md leading-relaxed">
              * Ao iniciar o contato, você autoriza a TAG08 a tratar seus dados para fins de diagnóstico comercial, conforme a LGPD e nossa {t.cookie.policy}.
            </p>
          </div>
          <p className="text-brand-black text-sm font-black uppercase tracking-widest animate-pulse mt-4">
            {t.cta.urgency}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
