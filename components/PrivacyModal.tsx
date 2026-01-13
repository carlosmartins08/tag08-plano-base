'use client';

import React, { useEffect } from 'react';
import { useTranslation } from './LanguageContext';

const PrivacyModal: React.FC = () => {
  const { t, isPrivacyModalOpen, setPrivacyModalOpen } = useTranslation();

  useEffect(() => {
    if (isPrivacyModalOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setPrivacyModalOpen(false);
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isPrivacyModalOpen]);

  if (!isPrivacyModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center px-4 py-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-black/95 backdrop-blur-xl animate-in fade-in duration-300" 
        onClick={() => setPrivacyModalOpen(false)}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-brand-black border border-white/10 w-full max-w-4xl max-h-full overflow-y-auto rounded-[2.5rem] shadow-2xl p-8 md:p-12 animate-in zoom-in-95 duration-300">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">
              {t.privacy.title}
            </h2>
            <p className="text-slate-400 font-medium max-w-2xl leading-relaxed">
              {t.privacy.intro}
            </p>
          </div>
          <button 
            onClick={() => setPrivacyModalOpen(false)}
            className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-all"
            aria-label={t.privacy.close}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Fix: Explicitly cast Object.entries to ensure 'section' is not inferred as 'unknown' */}
          {(Object.entries(t.privacy.sections) as [string, { title: string; text: string }][]).map(([key, section]) => (
            <div key={key} className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-brand-lime/30 transition-colors">
              <h3 className="text-brand-lime font-black uppercase tracking-widest text-xs mb-4">
                {section.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center gap-4">
          <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
            Last Update: 2024.12
          </p>
          <button 
            onClick={() => setPrivacyModalOpen(false)}
            className="px-8 py-3 bg-brand-lime text-brand-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all"
          >
            {t.privacy.close}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;