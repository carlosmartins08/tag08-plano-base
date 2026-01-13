'use client';

import React, { useState } from 'react';
import { useTranslation } from './LanguageContext';
import { Language } from '../types';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; label: string; name: string }[] = [
    { code: 'pt', label: 'PT', name: 'Português' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'es', label: 'ES', name: 'Español' },
    { code: 'fr', label: 'FR', name: 'Français' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[150] flex flex-col items-end gap-2">
      {/* Expanded Menu */}
      <div 
        className={`flex flex-col gap-2 transition-all duration-300 origin-bottom ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        {languages.filter(l => l.code !== language).map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code);
              setIsOpen(false);
            }}
            className="group flex items-center gap-3 px-4 py-2.5 bg-brand-black/80 backdrop-blur-xl border border-white/10 rounded-2xl text-white/60 hover:text-brand-lime hover:border-brand-lime/50 transition-all shadow-xl"
          >
            <span className="text-[10px] font-black tracking-widest uppercase">{lang.name}</span>
            <span className="text-[9px] font-black w-6 h-6 flex items-center justify-center bg-white/5 rounded-lg group-hover:bg-brand-lime group-hover:text-brand-black transition-colors">
              {lang.label}
            </span>
          </button>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-4 py-3 bg-brand-black border rounded-2xl shadow-2xl transition-all duration-500 ${
          isOpen ? 'border-brand-lime ring-4 ring-brand-lime/10' : 'border-white/10 hover:border-brand-lime/50'
        }`}
        aria-label="Selecionar Idioma"
      >
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-none mb-1">Language</span>
          <span className="text-xs font-black text-white tracking-widest">{language.toUpperCase()}</span>
        </div>
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-brand-lime text-brand-black rotate-180' : 'bg-white/5 text-brand-lime'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default LanguageSwitcher;