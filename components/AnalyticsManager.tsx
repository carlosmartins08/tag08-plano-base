'use client';

import { useEffect } from 'react';
import { useConsent, CookieConsent } from '../contexts/ConsentContext';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const SCRIPT_ID = 'tag08-gtag-script';
const INIT_SCRIPT_ID = 'tag08-gtag-init-script';
const META_SCRIPT_ID = 'tag08-meta-pixel-script';
const META_INIT_SCRIPT_ID = 'tag08-meta-pixel-init-script';

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

const removeMetaScripts = () => {
  document.getElementById(META_SCRIPT_ID)?.remove();
  document.getElementById(META_INIT_SCRIPT_ID)?.remove();

  const globalWindow = window as typeof window & {
    fbq?: CallableFunction;
    _fbq?: CallableFunction;
  };

  delete globalWindow.fbq;
  delete globalWindow._fbq;
};

const AnalyticsManager = () => {
  const { cookieConsent } = useConsent();

  useEffect(() => {
    if (!cookieConsent) {
      removeGoogleScripts();
      removeMetaScripts();
      return;
    }

    const configEntries = buildConfigEntries(cookieConsent);
    const primaryId = resolvePrimaryScriptId(cookieConsent);

    if (configEntries.length === 0 || !primaryId) {
      removeGoogleScripts();
      if (configEntries.length > 0 && !primaryId) {
        console.warn('[Analytics] No compatible Google id found for the current consent.');
      }
    }

    if (configEntries.length > 0 && primaryId) {
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
    } else {
      removeGoogleScripts();
    }

    if (!cookieConsent.marketing) {
      removeMetaScripts();
    } else if (!META_PIXEL_ID) {
      console.warn('[Pixel] NEXT_PUBLIC_META_PIXEL_ID is missing.');
      removeMetaScripts();
    } else {
      const existingMetaScript = document.getElementById(META_SCRIPT_ID);
      const existingMetaInit = document.getElementById(META_INIT_SCRIPT_ID);

      if (!existingMetaScript) {
        const script = document.createElement('script');
        script.id = META_SCRIPT_ID;
        script.async = true;
        script.src = 'https://connect.facebook.net/en_US/fbevents.js';
        document.head.appendChild(script);
      }

      if (!existingMetaInit) {
        const inlineScript = document.createElement('script');
        inlineScript.id = META_INIT_SCRIPT_ID;
        inlineScript.innerHTML = `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `;
        document.head.appendChild(inlineScript);
      }
    }

    return () => {
      removeGoogleScripts();
      removeMetaScripts();
    };
  }, [cookieConsent]);

  return null;
};

export default AnalyticsManager;
