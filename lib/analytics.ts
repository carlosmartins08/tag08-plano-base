export type EventParams = Record<string, string | number | boolean | null | undefined>;
export type FunnelStep = 'hero_cta' | 'calculator_submit' | 'final_cta_click' | 'whatsapp_click';

export type FunnelEventParams = {
  lang: string;
  section: string;
  cta: string;
  country: string;
  route?: string;
  experiment?: string;
  variant?: string;
  value?: number;
};

type GtagFn = (command: 'event', eventName: string, params?: EventParams) => void;
type FbqFn = (command: 'track' | 'trackCustom', eventName: string, params?: EventParams) => void;

const getGtag = (): GtagFn | null => {
  if (typeof window === 'undefined') return null;

  const maybeWindow = window as Window & { gtag?: GtagFn };
  return typeof maybeWindow.gtag === 'function' ? maybeWindow.gtag : null;
};

const getFbq = (): FbqFn | null => {
  if (typeof window === 'undefined') return null;

  const maybeWindow = window as Window & { fbq?: FbqFn };
  return typeof maybeWindow.fbq === 'function' ? maybeWindow.fbq : null;
};

const mapFunnelToMetaEvent = (step: FunnelStep): { mode: 'track' | 'trackCustom'; name: string } => {
  if (step === 'whatsapp_click') return { mode: 'track', name: 'Lead' };
  if (step === 'hero_cta') return { mode: 'trackCustom', name: 'HeroCTA' };
  if (step === 'calculator_submit') return { mode: 'trackCustom', name: 'CalculatorSubmit' };
  return { mode: 'trackCustom', name: 'FinalCTAClick' };
};

export const trackEvent = (eventName: string, params?: EventParams) => {
  const gtag = getGtag();
  if (gtag) {
    gtag('event', eventName, params);
  }
};

export const trackFunnelEvent = (step: FunnelStep, params: FunnelEventParams) => {
  trackEvent(step, params);

  const fbq = getFbq();
  if (!fbq) return;

  const mapped = mapFunnelToMetaEvent(step);
  fbq(mapped.mode, mapped.name, params);
};
