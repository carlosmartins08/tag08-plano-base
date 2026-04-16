'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { CookieConsent, useConsent } from '../contexts/ConsentContext';

const DEFAULT_CONSENT: CookieConsent = {
  necessary: true,
  analytical: false,
  marketing: false,
};

const CookieBanner: React.FC = () => {
  const { t } = useTranslation();
  const { cookieConsent, updateCookieConsent, setCookieModalOpen } = useConsent();
  const [isVisible, setIsVisible] = useState(false);
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [tempConsent, setTempConsent] = useState<CookieConsent>(DEFAULT_CONSENT);

  useEffect(() => {
    if (!cookieConsent) {
      const timer = window.setTimeout(() => setIsVisible(true), 1500);
      return () => window.clearTimeout(timer);
    }

    setIsVisible(false);
    setIsConfiguring(false);
    setTempConsent(DEFAULT_CONSENT);
  }, [cookieConsent]);

  const handleAcceptAll = () => {
    updateCookieConsent({
      necessary: true,
      analytical: true,
      marketing: true,
    });
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    updateCookieConsent(tempConsent);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label={t.cookie.title}
      className="fixed bottom-6 left-1/2 z-[200] w-[95%] max-w-3xl -translate-x-1/2"
    >
      <div className="flex flex-col gap-8 rounded-[2.5rem] border border-white/10 bg-brand-black/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl md:p-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
        {!isConfiguring ? (
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <h4 className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white">
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-lime" />
                {t.cookie.title}
              </h4>
              <p className="text-sm leading-relaxed font-medium text-slate-400">
                {t.cookie.desc}
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
              <button
                type="button"
                onClick={() => setIsConfiguring(true)}
                className="rounded-xl bg-white/5 px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:bg-white/10"
              >
                {t.cookie.configure}
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-xl bg-brand-lime px-8 py-4 text-[10px] font-black uppercase tracking-widest text-brand-black shadow-lg shadow-brand-lime/20 transition-all hover:scale-105 hover:bg-white active:scale-95"
              >
                {t.cookie.acceptAll}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <header>
              <h4 className="mb-2 text-sm font-black uppercase tracking-widest text-white">
                {t.cookie.customizeTitle}
              </h4>
              <p className="text-xs text-slate-500">
                {t.cookie.customizeSubtitle}
              </p>
            </header>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-5 opacity-80">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-tighter text-white">
                    Essenciais
                  </span>
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-lime">
                    <svg className="h-2.5 w-2.5 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-[9px] text-slate-400">Obrigatórios para o site funcionar.</p>
              </div>

              <button
                type="button"
                onClick={() => setTempConsent((prev) => ({ ...prev, analytical: !prev.analytical }))}
                className={`rounded-2xl border p-5 text-left transition-all ${tempConsent.analytical ? 'border-brand-lime/40 bg-brand-lime/10' : 'border-white/5 bg-white/5'}`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-tighter ${tempConsent.analytical ? 'text-brand-lime' : 'text-white'}`}>
                    Analíticos
                  </span>
                  <div className={`relative h-4 w-8 rounded-full transition-colors ${tempConsent.analytical ? 'bg-brand-lime' : 'bg-white/20'}`}>
                    <div className={`absolute top-1 h-2 w-2 rounded-full bg-brand-black transition-all ${tempConsent.analytical ? 'left-5' : 'left-1'}`} />
                  </div>
                </div>
                <p className="text-[9px] text-slate-400">Ajuda a entender nosso tráfego.</p>
              </button>

              <button
                type="button"
                onClick={() => setTempConsent((prev) => ({ ...prev, marketing: !prev.marketing }))}
                className={`rounded-2xl border p-5 text-left transition-all ${tempConsent.marketing ? 'border-brand-lime/40 bg-brand-lime/10' : 'border-white/5 bg-white/5'}`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-tighter ${tempConsent.marketing ? 'text-brand-lime' : 'text-white'}`}>
                    Marketing
                  </span>
                  <div className={`relative h-4 w-8 rounded-full transition-colors ${tempConsent.marketing ? 'bg-brand-lime' : 'bg-white/20'}`}>
                    <div className={`absolute top-1 h-2 w-2 rounded-full bg-brand-black transition-all ${tempConsent.marketing ? 'left-5' : 'left-1'}`} />
                  </div>
                </div>
                <p className="text-[9px] text-slate-400">Anúncios mais relevantes para você.</p>
              </button>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/5 pt-4 md:flex-row md:items-center md:justify-between">
              <button
                type="button"
                onClick={() => setIsConfiguring(false)}
                className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors hover:text-white"
              >
                {t.cookie.back}
              </button>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setCookieModalOpen(true)}
                  className="rounded-xl border border-white/10 bg-black/35 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:border-brand-lime/30 hover:bg-brand-lime/5"
                >
                  {t.cookie.policy}
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="rounded-xl bg-white/5 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:bg-white/10"
                >
                  {t.cookie.acceptAll}
                </button>
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="rounded-xl bg-brand-lime px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-black shadow-xl transition-all hover:bg-white"
                >
                  {t.cookie.savePreferences}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
