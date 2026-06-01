'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { trackEvent } from '../lib/analytics';

const THRESHOLDS = [25, 50, 75, 100] as const;

const ScrollDepthTracker: React.FC = () => {
  const fired = useRef<Set<number>>(new Set());
  const { language, localeSignals, recommendedContactRoute } = useTranslation();

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight <= 0) return;

      const percent = Math.min(100, Math.round((scrollTop / documentHeight) * 100));
      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold);
          trackEvent('scroll_depth', {
            lang: language,
            section: 'page',
            cta: `scroll_${threshold}`,
            country: localeSignals.countryBucket,
            route: recommendedContactRoute,
            value: threshold,
          });
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [language, localeSignals.countryBucket, recommendedContactRoute]);

  return null;
};

export default ScrollDepthTracker;
