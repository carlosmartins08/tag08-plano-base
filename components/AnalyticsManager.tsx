'use client';

import { useEffect } from 'react';
import { useConsent, CookieConsent } from '../contexts/ConsentContext';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

const SCRIPT_ID = 'tag08-gtag-script';
const INIT_SCRIPT_ID = 'tag08-gtag-init-script';

const buildConfigEntries = (consent: CookieConsent) => {
  const configEntries: Array<{ id: string; anonymizeIp?: boolean }> = [];

  if (consent.analytical) {
    if (GA_TRACKING_ID) {
      configEntries.push({ id: GA_TRACKING_ID, anonymizeIp: true });
    } else {
      console.warn('[Analytics] NEXT_PUBLIC_GA_TRACKING_ID is missing.');
    }

    if (GOOGLE_TAG_ID) {
      configEntries.push({ id: GOOGLE_TAG_ID });
    }
  }

  if (consent.marketing) {
    if (GOOGLE_ADS_ID) {
      configEntries.push({ id: GOOGLE_ADS_ID });
    } else {
      console.warn('[Ads] NEXT_PUBLIC_GOOGLE_ADS_ID is missing.');
    }
  }

  return configEntries;
};

const resolvePrimaryScriptId = (consent: CookieConsent) => {
  if (consent.analytical) {
    const analyticalId = GA_TRACKING_ID || GOOGLE_TAG_ID;
    if (analyticalId) {
      return analyticalId;
    }
  }

  if (consent.marketing) {
    return GOOGLE_ADS_ID || null;
  }

  return null;
};

const removeGoogleScripts = () => {
  document.getElementById(SCRIPT_ID)?.remove();
  document.getElementById(INIT_SCRIPT_ID)?.remove();

  const globalWindow = window as typeof window & {
    dataLayer?: unknown[];
    gtag?: CallableFunction;
  };

  if (Array.isArray(globalWindow.dataLayer)) {
    globalWindow.dataLayer.length = 0;
  }

  delete globalWindow.dataLayer;
  delete globalWindow.gtag;
};

const AnalyticsManager = () => {
  const { cookieConsent } = useConsent();

  useEffect(() => {
    if (!cookieConsent) {
      removeGoogleScripts();
      return;
    }

    const configEntries = buildConfigEntries(cookieConsent);
    const primaryId = resolvePrimaryScriptId(cookieConsent);

    if (configEntries.length === 0 || !primaryId) {
      removeGoogleScripts();
      if (configEntries.length > 0 && !primaryId) {
        console.warn('[Analytics] No compatible Google id found for the current consent.');
      }
      return;
    }

    const existingScript = document.getElementById(SCRIPT_ID);
    const existingInit = document.getElementById(INIT_SCRIPT_ID);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${primaryId}`;
      document.head.appendChild(script);
    }

    if (!existingInit) {
      const inlineScript = document.createElement('script');
      inlineScript.id = INIT_SCRIPT_ID;
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      `;
      document.head.appendChild(inlineScript);
    }

    const gtagFn = (window as typeof window & { gtag?: CallableFunction }).gtag;
    if (gtagFn) {
      configEntries.forEach(({ id, anonymizeIp }) => {
        if (anonymizeIp) {
          gtagFn('config', id, { anonymize_ip: true });
        } else {
          gtagFn('config', id);
        }
      });
    }

    return () => {
      removeGoogleScripts();
    };
  }, [cookieConsent]);

  return null;
};

export default AnalyticsManager;
