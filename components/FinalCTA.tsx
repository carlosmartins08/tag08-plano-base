'use client';

import { useTranslation } from './LanguageContext';
import { useUX } from './UXContext';
import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

const FinalCTA: React.FC = () => {
  const { t } = useTranslation();
  const { isHighValue } = useUX();

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
        <h2 className="text-5xl md:text-8xl font-display font-black text-brand-black mb-8 leading-[0.8] tracking-tighter uppercase italic">
          {isHighValue ? t.cta.highValueTitle : t.cta.title}
        </h2>
        <p className="text-brand-black font-black text-xl mb-12 max-w-2xl mx-auto opacity-70">
          {t.cta.desc}
        </p>
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="flex flex-col items-center gap-4">
            <Magnetic>
              <a
                href="https://wa.me/message/XURZIJ762YMVB1"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-14 py-8 bg-brand-black text-brand-lime font-black text-2xl rounded-3xl hover:bg-slate-900 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 flex items-center gap-4 uppercase tracking-tighter italic"
                onClick={handleContactClick}
              >
                {isHighValue ? t.cta.highValueButton : t.cta.button}
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </a>
            </Magnetic>
            <p className="text-[10px] text-brand-black/60 font-black uppercase tracking-widest max-w-md leading-relaxed mt-4">
              {t.cta.disclaimer}
            </p>
          </div>
          <div className="inline-flex items-center gap-3 bg-brand-black/5 px-4 py-2 rounded-full mt-6">
            <span className="w-2 h-2 rounded-full bg-brand-black animate-pulse"></span>
            <p className="text-brand-black text-[10px] font-black uppercase tracking-[0.2em]">
              {t.cta.urgency}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
