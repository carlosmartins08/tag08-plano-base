'use client';

import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { useConsent } from '../contexts/ConsentContext';
import ModalShell from './ModalShell';

const PrivacyModal: React.FC = () => {
  const { t } = useTranslation();
  const { isPrivacyModalOpen, setPrivacyModalOpen } = useConsent();

  if (!isPrivacyModalOpen) return null;

  return (
    <ModalShell isOpen={isPrivacyModalOpen} onClose={() => setPrivacyModalOpen(false)}>
      <div>
        <div className="mb-12 flex items-start justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-black uppercase italic tracking-tighter text-white md:text-5xl">
              {t.privacy.title}
            </h2>
            <p className="max-w-2xl font-medium leading-relaxed text-slate-400">
              {t.privacy.intro}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPrivacyModalOpen(false)}
            className="rounded-full bg-white/5 p-3 text-white/50 transition-all hover:bg-white/10 hover:text-white"
            aria-label={t.privacy.close}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {(Object.entries(t.privacy.sections) as [string, { title: string; text: string }][]).map(([key, section]) => (
            <div key={key} className="rounded-3xl border border-white/5 bg-white/5 p-8 transition-colors hover:border-brand-lime/30">
              <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-brand-lime">
                {section.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-slate-400">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
            Last Update: 2024.12
          </p>
          <button
            type="button"
            onClick={() => setPrivacyModalOpen(false)}
            className="rounded-xl bg-brand-lime px-8 py-3 text-xs font-black uppercase tracking-widest text-brand-black transition-all hover:bg-white"
          >
            {t.privacy.close}
          </button>
        </div>
      </div>
    </ModalShell>
  );
};

export default PrivacyModal;
