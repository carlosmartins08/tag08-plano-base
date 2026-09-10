'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Language } from '../types';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    setIsOpen(false);
    window.requestAnimationFrame(() => toggleRef.current?.focus());
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const languages: { code: Language; label: string; name: string }[] = [
    { code: 'pt', label: 'PT', name: 'Português' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'es', label: 'ES', name: 'Español' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[150] flex flex-col items-end gap-2">
      {isOpen && (
        <div
          id="language-switcher-menu"
          role="group"
          aria-label="Language options"
          className="flex origin-bottom flex-col gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          {languages.filter((item) => item.code !== language).map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageChange(lang.code)}
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-brand-black/80 px-4 py-2.5 text-white/60 shadow-xl backdrop-blur-xl transition-all hover:border-brand-lime/50 hover:text-brand-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
            >
              <span className="text-[10px] font-black tracking-widest uppercase">{lang.name}</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 text-[9px] font-black transition-colors group-hover:bg-brand-lime group-hover:text-brand-black">
                {lang.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 rounded-2xl border bg-brand-black px-4 py-3 shadow-2xl transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black ${isOpen ? 'border-brand-lime ring-4 ring-brand-lime/10' : 'border-white/10 hover:border-brand-lime/50'
          }`}
        aria-label="Selecionar Idioma"
        aria-expanded={isOpen}
        aria-controls="language-switcher-menu"
      >
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-none mb-1">Language</span>
          <span className="text-xs font-black text-white tracking-widest">{language.toUpperCase()}</span>
        </div>
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-brand-lime text-brand-black rotate-180' : 'bg-white/5 text-brand-lime'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default LanguageSwitcher;

