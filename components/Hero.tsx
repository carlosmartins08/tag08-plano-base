'use client';

import React from 'react';
import { useTranslation } from './LanguageContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-24 pb-20 lg:pt-40 lg:pb-36 overflow-hidden bg-brand-black bg-noise">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-lime/10 blur-[120px] rounded-full animate-slow-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-lime/5 blur-[100px] rounded-full animate-slow-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 max-w-3xl">
            <div className="reveal stagger-1 inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
              {t.hero.badge}
            </div>
            <h1 className="reveal stagger-2 text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter uppercase italic">
              {t.hero.title} <br />
              <span className="text-brand-lime">{t.hero.titleAccent}</span>
            </h1>
            <p className="reveal stagger-3 text-xl text-slate-400 mb-12 leading-relaxed max-w-xl font-medium">
              {t.hero.description}
            </p>
            <div className="reveal stagger-4 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a 
                href="#contato" 
                className="btn-magnetic inline-flex items-center justify-center px-12 py-5 bg-brand-lime text-brand-black rounded-full font-black text-xl hover:shadow-[0_0_30px_rgba(212,255,0,0.5)] transition-all"
              >
                {t.hero.cta}
              </a>
              <div className="flex items-center gap-4 text-white/50 text-sm font-bold uppercase tracking-widest">
                <span className="w-12 h-px bg-white/20"></span>
                {t.hero.limited}
              </div>
            </div>
          </div>
          <div className="flex-1 relative hidden lg:block reveal stagger-4">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                alt="Equipe de consultoria estratégica da TAG08 planejando o crescimento de uma marca premium" 
                width="800"
                height="533"
                className="w-full grayscale brightness-50 contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;