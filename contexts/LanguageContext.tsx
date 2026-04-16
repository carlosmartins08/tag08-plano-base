"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, TranslationSchema } from '../types';
import { translations } from '../translations';
import { SITE_CONFIG } from '../constants';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children?: React.ReactNode; initialLanguage?: Language }> = ({ children, initialLanguage }) => {
  const [language, setLanguageState] = useState<Language>(initialLanguage || 'pt');

  useEffect(() => {
    if (initialLanguage && initialLanguage !== language) {
      setLanguageState(initialLanguage);
    }
  }, [initialLanguage, language]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (!initialLanguage) {
      const savedLang = localStorage.getItem('tag08-lang') as Language | null;
      const supportedLanguages = SITE_CONFIG.locales;

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
    setLanguageState(lang);
    localStorage.setItem('tag08-lang', lang);
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t: translations[language],
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
