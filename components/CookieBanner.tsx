'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation, CookieConsent } from './LanguageContext';

const CookieBanner: React.FC = () => {
  const { t, setCookieModalOpen, cookieConsent, updateCookieConsent } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [tempConsent, setTempConsent] = useState<CookieConsent>({
    necessary: true,
    analytical: false,
    marketing: false
  });

  useEffect(() => {
    if (!cookieConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [cookieConsent]);

  const handleAcceptAll = () => {
    const allConsent: CookieConsent = {
      necessary: true,
      analytical: true,
      marketing: true
    };
    updateCookieConsent(allConsent);
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
      aria-label="Gestão de Privacidade e Cookies"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] w-[95%] max-w-3xl"
    >
      <div className="bg-brand-black/95 backdrop-blur-2xl border border-white/10 p-6 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
        
        {!isConfiguring ? (
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-lime rounded-full animate-pulse"></span>
                {t.cookie.title} (LGPD)
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Respeitamos sua privacidade. {t.cookie.desc} Você pode personalizar suas escolhas ou aceitar o uso padrão.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button 
                onClick={() => setIsConfiguring(true)}
                className="px-6 py-4 bg-white/5 text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all"
              >
                Configurar
              </button>
              <button 
                onClick={handleAcceptAll}
                className="px-8 py-4 bg-brand-lime text-brand-black font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-lime/20"
              >
                {t.cookie.accept} Todos
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <header>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Personalizar Cookies</h4>
              <p className="text-slate-500 text-xs">Sua escolha impacta como podemos melhorar nosso serviço para você.</p>
            </header>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/5 opacity-80">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black text-white uppercase tracking-tighter">Essenciais</span>
                  <div className="w-4 h-4 rounded-full bg-brand-lime flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-brand-black" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  </div>
                </div>
                <p className="text-[9px] text-slate-400">Obrigatórios para o site funcionar.</p>
              </div>

              <button 
                onClick={() => setTempConsent(prev => ({ ...prev, analytical: !prev.analytical }))}
                className={`p-5 rounded-2xl border transition-all text-left ${tempConsent.analytical ? 'bg-brand-lime/10 border-brand-lime/40' : 'bg-white/5 border-white/5'}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-[10px] font-black uppercase tracking-tighter ${tempConsent.analytical ? 'text-brand-lime' : 'text-white'}`}>Analíticos</span>
                  <div className={`w-8 h-4 rounded-full relative transition-colors ${tempConsent.analytical ? 'bg-brand-lime' : 'bg-white/20'}`}>
                    <div className={`absolute top-1 w-2 h-2 rounded-full bg-brand-black transition-all ${tempConsent.analytical ? 'left-5' : 'left-1'}`}></div>
                  </div>
                </div>
                <p className="text-[9px] text-slate-400">Ajuda a entender nosso tráfego.</p>
              </button>

              <button 
                onClick={() => setTempConsent(prev => ({ ...prev, marketing: !prev.marketing }))}
                className={`p-5 rounded-2xl border transition-all text-left ${tempConsent.marketing ? 'bg-brand-lime/10 border-brand-lime/40' : 'bg-white/5 border-white/5'}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-[10px] font-black uppercase tracking-tighter ${tempConsent.marketing ? 'text-brand-lime' : 'text-white'}`}>Marketing</span>
                  <div className={`w-8 h-4 rounded-full relative transition-colors ${tempConsent.marketing ? 'bg-brand-lime' : 'bg-white/20'}`}>
                    <div className={`absolute top-1 w-2 h-2 rounded-full bg-brand-black transition-all ${tempConsent.marketing ? 'left-5' : 'left-1'}`}></div>
                  </div>
                </div>
                <p className="text-[9px] text-slate-400">Anúncios mais relevantes para você.</p>
              </button>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-white/5">
              <button 
                onClick={() => setIsConfiguring(false)}
                className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-white transition-colors"
              >
                Voltar
              </button>
              <div className="flex gap-3">
                <button 
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-white/5 text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all"
                >
                  Aceitar Todos
                </button>
                <button 
                  onClick={handleSavePreferences}
                  className="px-6 py-3 bg-brand-lime text-brand-black font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-xl"
                >
                  Salvar Preferências
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
