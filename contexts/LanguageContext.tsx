"use client";

import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { ContactRouteId, Language, TranslationSchema } from '../types';
import { translations } from '../translations';
import { buildWhatsAppUrl, SITE_CONFIG, WHATSAPP_CONTACTS } from '../constants';

type CountryBucket = 'BR' | 'NON_BR' | 'UNKNOWN';

interface LocaleSignals {
  browserLanguages: string[];
  regionCode: string | null;
  timeZone: string | null;
  geoCountryCode: string | null;
  detectionSource: 'browser' | 'browser+geo';
  countryBucket: CountryBucket;
  inferredLanguage: Language;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  localeSignals: LocaleSignals;
  recommendedContactRoute: ContactRouteId;
  recommendedContactHref: string;
  recommendedContactPhone: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const BRAZIL_TIMEZONES = new Set([
  'America/Sao_Paulo',
  'America/Fortaleza',
  'America/Recife',
  'America/Bahia',
  'America/Belem',
  'America/Manaus',
  'America/Campo_Grande',
  'America/Cuiaba',
  'America/Porto_Velho',
  'America/Boa_Vista',
  'America/Araguaina',
  'America/Eirunepe',
  'America/Rio_Branco',
  'America/Noronha',
  'America/Maceio',
]);

const SPANISH_COUNTRIES = new Set([
  'AR',
  'BO',
  'CL',
  'CO',
  'CR',
  'CU',
  'DO',
  'EC',
  'ES',
  'GQ',
  'GT',
  'HN',
  'MX',
  'NI',
  'PA',
  'PE',
  'PR',
  'PY',
  'SV',
  'UY',
  'VE',
]);

const DEFAULT_LOCALE_SIGNALS: LocaleSignals = {
  browserLanguages: [],
  regionCode: null,
  timeZone: null,
  geoCountryCode: null,
  detectionSource: 'browser',
  countryBucket: 'UNKNOWN',
  inferredLanguage: SITE_CONFIG.defaultLocale as Language,
};

const normalizeCountryCode = (countryCode: string | null | undefined): string | null => {
  if (!countryCode) {
    return null;
  }

  const normalized = countryCode.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(normalized) ? normalized : null;
};

const extractRegionCode = (locale: string): string | null => {
  const match = locale.match(/[-_]([a-z]{2})$/i);
  return match ? match[1].toUpperCase() : null;
};

const resolveCountryBucket = (
  regionCode: string | null,
  timeZone: string | null,
  geoCountryCode: string | null,
): CountryBucket => {
  const isBrazilTimeZone = Boolean(timeZone && BRAZIL_TIMEZONES.has(timeZone));
  const normalizedRegionCode = normalizeCountryCode(regionCode);

  if (geoCountryCode === 'BR' || normalizedRegionCode === 'BR' || isBrazilTimeZone) {
    return 'BR';
  }

  if (geoCountryCode || normalizedRegionCode) {
    return 'NON_BR';
  }

  return 'UNKNOWN';
};

const inferLanguage = (
  countryBucket: CountryBucket,
  browserLanguages: string[],
  regionCode: string | null,
  geoCountryCode: string | null,
): Language => {
  const hasLanguage = (prefix: string) => browserLanguages.some((lang) => lang.startsWith(prefix));
  const countryForLanguage = geoCountryCode ?? normalizeCountryCode(regionCode);

  if (countryBucket === 'BR') {
    return 'pt';
  }

  if (hasLanguage('es') || (countryForLanguage ? SPANISH_COUNTRIES.has(countryForLanguage) : false)) {
    return 'es';
  }

  if (hasLanguage('pt')) {
    return 'pt';
  }

  return 'en';
};

const resolveContactRoute = (language: Language, countryBucket: CountryBucket): ContactRouteId => {
  if (language === 'pt' && countryBucket === 'BR') {
    return 'br';
  }

  return 'intl';
};

const detectLocaleSignals = (): LocaleSignals => {
  const browserLanguages = Array.from(
    new Set(
      (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language])
        .filter(Boolean)
        .map((lang) => lang.toLowerCase()),
    ),
  );

  const regionCode =
    browserLanguages.map((lang) => extractRegionCode(lang)).find(Boolean) ?? null;

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? null;
  const countryBucket = resolveCountryBucket(regionCode, timeZone, null);
  const inferredLanguage = inferLanguage(countryBucket, browserLanguages, regionCode, null);

  return {
    browserLanguages,
    regionCode,
    timeZone,
    geoCountryCode: null,
    detectionSource: 'browser',
    countryBucket,
    inferredLanguage,
  };
};

const fetchGeoCountryCode = async (): Promise<string | null> => {
  try {
    const response = await fetch('/api/geo', { cache: 'no-store' });
    if (!response.ok) {
      return null;
    }

    const payload = (await response.json()) as { countryCode?: string | null };
    return normalizeCountryCode(payload.countryCode);
  } catch {
    return null;
  }
};

export const LanguageProvider: React.FC<{ children?: React.ReactNode; initialLanguage?: Language }> = ({ children, initialLanguage }) => {
  const [language, setLanguageState] = useState<Language>(initialLanguage || (SITE_CONFIG.defaultLocale as Language));
  const [localeSignals, setLocaleSignals] = useState<LocaleSignals>(DEFAULT_LOCALE_SIGNALS);
  const hasExplicitLanguageSelection = useRef(Boolean(initialLanguage));
  const t = translations[language];

  useEffect(() => {
    if (initialLanguage && initialLanguage !== language) {
      setLanguageState(initialLanguage);
    }
  }, [initialLanguage, language]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const applyDetectedSignals = () => {
      const detectedSignals = detectLocaleSignals();
      setLocaleSignals(detectedSignals);

      if (!initialLanguage) {
        const savedLang = localStorage.getItem('tag08-lang') as Language | null;
        const supportedLanguages = SITE_CONFIG.locales as Language[];

        if (savedLang && supportedLanguages.includes(savedLang)) {
          hasExplicitLanguageSelection.current = true;
          setLanguageState(savedLang);
        } else if (!hasExplicitLanguageSelection.current) {
          setLanguageState(detectedSignals.inferredLanguage);
        }
      }
    };

    applyDetectedSignals();

    window.addEventListener('languagechange', applyDetectedSignals);
    return () => window.removeEventListener('languagechange', applyDetectedSignals);
  }, [initialLanguage]);

  useEffect(() => {
    if (initialLanguage) {
      return;
    }

    let active = true;

    const syncGeoSignal = async () => {
      const geoCountryCode = await fetchGeoCountryCode();
      if (!active || !geoCountryCode) {
        return;
      }

      const detectedSignals = detectLocaleSignals();
      const countryBucket = resolveCountryBucket(
        detectedSignals.regionCode,
        detectedSignals.timeZone,
        geoCountryCode,
      );
      const inferredLanguage = inferLanguage(
        countryBucket,
        detectedSignals.browserLanguages,
        detectedSignals.regionCode,
        geoCountryCode,
      );

      setLocaleSignals({
        ...detectedSignals,
        geoCountryCode,
        countryBucket,
        inferredLanguage,
        detectionSource: 'browser+geo',
      });

      if (!hasExplicitLanguageSelection.current) {
        setLanguageState(inferredLanguage);
      }
    };

    void syncGeoSignal();

    return () => {
      active = false;
    };
  }, [initialLanguage]);

  const setLanguage = (lang: Language) => {
    hasExplicitLanguageSelection.current = true;
    setLanguageState(lang);
    localStorage.setItem('tag08-lang', lang);
  };

  const recommendedContactRoute = useMemo(
    () => resolveContactRoute(language, localeSignals.countryBucket),
    [language, localeSignals.countryBucket],
  );

  const recommendedContactPhone = useMemo(
    () => (recommendedContactRoute === 'br' ? WHATSAPP_CONTACTS.br.phone : WHATSAPP_CONTACTS.intl.phone),
    [recommendedContactRoute],
  );

  const recommendedContactMessage = useMemo(
    () =>
      recommendedContactRoute === 'br' ? t.cta.messageBr : t.cta.messageIntl,
    [recommendedContactRoute, t.cta.messageBr, t.cta.messageIntl],
  );

  const recommendedContactHref = useMemo(
    () => buildWhatsAppUrl(recommendedContactPhone, recommendedContactMessage),
    [recommendedContactPhone, recommendedContactMessage],
  );

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      localeSignals,
      recommendedContactRoute,
      recommendedContactHref,
      recommendedContactPhone,
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
