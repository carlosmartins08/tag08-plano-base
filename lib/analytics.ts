export type EventParams = Record<string, string | number | boolean | null | undefined>;
export type FunnelStep = 'hero_cta' | 'final_cta_click' | 'whatsapp_click';
export type FunnelEventParams = { lang: string; section: string; cta: string; country: string; route?: string };
type GtagFn = (command: 'event', eventName: string, params?: EventParams) => void;
type FbqFn = (command: 'track' | 'trackCustom', eventName: string, params?: EventParams) => void;
const getGtag = (): GtagFn | null => {
  if (typeof window === 'undefined') return null;
  const candidate = (window as Window & { gtag?: GtagFn }).gtag;
  return typeof candidate === 'function' ? candidate : null;
};
const getFbq = (): FbqFn | null => {
  if (typeof window === 'undefined') return null;
  const candidate = (window as Window & { fbq?: FbqFn }).fbq;
  return typeof candidate === 'function' ? candidate : null;
};
export const trackEvent = (eventName: string, params?: EventParams) => getGtag()?.('event', eventName, params);
export const trackFunnelEvent = (step: FunnelStep, params: FunnelEventParams) => { trackEvent(step, params); const fbq = getFbq(); if (!fbq) return; if (step === 'whatsapp_click') fbq('track', 'Lead', params); else fbq('trackCustom', step === 'hero_cta' ? 'HeroCTA' : 'FinalCTAClick', params); };
