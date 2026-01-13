'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationSchema } from '../types';
import { translations } from '../translations';

export interface CookieConsent {
  necessary: true;
  analytical: boolean;
  marketing: boolean;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  isPrivacyModalOpen: boolean;
  setPrivacyModalOpen: (open: boolean) => void;
  isCookieModalOpen: boolean;
  setCookieModalOpen: (open: boolean) => void;
  cookieConsent: CookieConsent | null;
  updateCookieConsent: (consent: CookieConsent) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// ID do Google Analytics (Substituir pelo ID real quando disponível)
const GA_TRACKING_ID = 'G-ZJ9SRM27Y9';

export const LanguageProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('pt');
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isCookieModalOpen, setCookieModalOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<CookieConsent | null>(null);

  // Função para carregar o Google Analytics dinamicamente
  const loadGoogleAnalytics = (id: string) => {
    if (typeof window === 'undefined' || window.document.getElementById('ga-script')) return;

    // Injeta o script principal do GTAG
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    // Injeta a configuração inicial
    const inlineScript = document.createElement('script');
    inlineScript.id = 'ga-init-script';
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}', { 'anonymize_ip': true });
    `;
    document.head.appendChild(inlineScript);
    
    console.debug('Google Analytics ativado com sucesso.');
  };

  useEffect(() => {
    // Carregar idioma
    const savedLang = localStorage.getItem('tag08-lang') as Language;
    const browserLang = navigator.language.split('-')[0] as Language;
    
    if (savedLang && ['pt', 'en', 'es', 'fr'].includes(savedLang)) {
      setLanguageState(savedLang);
    } else if (['pt', 'en', 'es', 'fr'].includes(browserLang)) {
      setLanguageState(browserLang);
    }

    // Carregar consentimento de cookies
    const savedConsent = localStorage.getItem('tag08-cookie-preferences');
    if (savedConsent) {
      const parsedConsent: CookieConsent = JSON.parse(savedConsent);
      setCookieConsent(parsedConsent);
      
      // Se já houver consentimento analítico, carrega o GA imediatamente
      if (parsedConsent.analytical) {
        loadGoogleAnalytics(GA_TRACKING_ID);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('tag08-lang', lang);
    document.documentElement.lang = lang;
  };

  const updateCookieConsent = (consent: CookieConsent) => {
    setCookieConsent(consent);
    localStorage.setItem('tag08-cookie-preferences', JSON.stringify(consent));
    
    // Gerenciamento dinâmico de scripts baseado no novo consentimento
    if (consent.analytical) {
      loadGoogleAnalytics(GA_TRACKING_ID);
    } else {
      console.debug('Scripts Analíticos desativados pelo usuário.');
      // Nota: Remover scripts do DOM não remove necessariamente os rastreadores já inicializados na sessão,
      // mas impede novos carregamentos e obedece à escolha do usuário para sessões futuras.
    }
    
    if (consent.marketing) {
      console.debug('Iniciando Scripts de Marketing (Pixel/Ads)...');
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t: translations[language],
      isPrivacyModalOpen,
      setPrivacyModalOpen,
      isCookieModalOpen,
      setCookieModalOpen,
      cookieConsent,
      updateCookieConsent
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
};
