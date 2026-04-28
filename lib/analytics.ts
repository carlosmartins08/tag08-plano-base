export type EventParams = Record<string, string | number | boolean | null | undefined>;

type GtagFn = (command: 'event', eventName: string, params?: EventParams) => void;

const getGtag = (): GtagFn | null => {
  if (typeof window === 'undefined') return null;

  const maybeWindow = window as Window & { gtag?: GtagFn };
  return typeof maybeWindow.gtag === 'function' ? maybeWindow.gtag : null;
};

export const trackEvent = (eventName: string, params?: EventParams) => {
  const gtag = getGtag();
  if (!gtag) return;

  gtag('event', eventName, params);
};
