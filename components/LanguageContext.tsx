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

// IDs do Google (Analytics e Ads)
const GA_TRACKING_ID = 'G-ZJ9SRM27Y9';
const GOOGLE_ADS_ID = 'AW-823454219';

export const LanguageProvider: React.FC<{ children?: React.ReactNode, initialLanguage?: Language }> = ({ children, initialLanguage }) => {
  const [language, setLanguageState] = useState<Language>(initialLanguage || 'pt');
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isCookieModalOpen, setCookieModalOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    if (initialLanguage && initialLanguage !== language) {
      setLanguageState(initialLanguage);
    }
  }, [initialLanguage, language]);

  // Function to load Google Analytics / Ads based on consent
  const loadGoogleAnalytics = (consentOverride?: CookieConsent) => {
    const consent = consentOverride ?? cookieConsent;
    if (!consent) return;

    const { analytical, marketing } = consent;
    if (!analytical && !marketing) return;

    if (typeof window === 'undefined') return;

    const doc = window.document;
    const hasScript = !!doc.getElementById('ga-script');

    const configLines: string[] = [];
    if (analytical) configLines.push(`gtag('config', '${GA_TRACKING_ID}', { 'anonymize_ip': true });`);
    if (marketing) configLines.push(`gtag('config', '${GOOGLE_ADS_ID}');`);

    if (!hasScript) {
      const script = doc.createElement('script');
      script.id = 'ga-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      doc.head.appendChild(script);

      const inlineScript = doc.createElement('script');
      inlineScript.id = 'ga-init-script';
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        ${configLines.join('\n        ')}
      `;
      doc.head.appendChild(inlineScript);

      console.debug('Google Analytics / Ads ativado com sucesso.');
    } else {
      const gtagFn = (window as typeof globalThis & { gtag?: CallableFunction }).gtag;
      if (gtagFn) {
        if (analytical) {
          gtagFn('config', GA_TRACKING_ID, { 'anonymize_ip': true });
        }
        if (marketing) {
          gtagFn('config', GOOGLE_ADS_ID);
        }
      }
    }
  };


  useEffect(() => {
    // Carregar consentimento de cookies
    const savedConsent = localStorage.getItem('tag08-cookie-preferences');
    if (savedConsent) {
      const parsedConsent: CookieConsent = JSON.parse(savedConsent);
      setCookieConsent(parsedConsent);

      // Se houver consentimento salvo, com Analytics ou Marketing
      loadGoogleAnalytics(parsedConsent);
    }

    // If no initial language, fallback to local storage or browser
    if (!initialLanguage) {
      const savedLang = localStorage.getItem('tag08-lang') as Language | null;
      const supportedLanguages: Language[] = ['pt', 'en', 'es', 'fr'];

      if (savedLang && supportedLanguages.includes(savedLang)) {
        setLanguageState(savedLang);
      } else {
        const browserLang = navigator.language.toLowerCase();
        let resolvedLang: Language = 'en';

        if (browserLang.includes('pt')) {
          resolvedLang = 'pt';
        } else if (browserLang.includes('es')) {
          resolvedLang = 'es';
        } else if (browserLang.includes('fr')) {
          resolvedLang = 'fr';
        }

        setLanguageState(resolvedLang);
      }
    }
  }, [initialLanguage]);

  const setLanguage = (lang: Language) => {
    // With URL routing, we should probably redirect instead of just setting state
    // But for now, we'll keep the state set so components can react immediately
    // The LanguageSwitcher will handle the actual URL change
    setLanguageState(lang);
    localStorage.setItem('tag08-lang', lang);
    document.documentElement.lang = lang;
  };

  const updateCookieConsent = (consent: CookieConsent) => {
    setCookieConsent(consent);
    localStorage.setItem('tag08-cookie-preferences', JSON.stringify(consent));

    // Gerenciamento dinâmico de scripts baseado no novo consentimento
    if (consent.analytical || consent.marketing) {
      loadGoogleAnalytics(consent);
    } else {
      console.debug('Scripts Analiticos desativados pelo usuario.');
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
