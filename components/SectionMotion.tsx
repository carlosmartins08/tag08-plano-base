'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { trackEvent } from '../lib/analytics';

type SectionMotionProps = {
  sectionId: string;
  children: React.ReactNode;
  className?: string;
};

const SectionMotion: React.FC<SectionMotionProps> = ({ sectionId, children, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasTracked = useRef(false);
  const { language, localeSignals, recommendedContactRoute } = useTranslation();

  useEffect(() => {
    if (!ref.current) return;

    const node = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        node.classList.add('is-visible');
        node.querySelectorAll<HTMLElement>('.reveal, .motion-enter-primary').forEach((item) => {
          item.classList.add('is-visible');
        });

        if (!hasTracked.current) {
          hasTracked.current = true;
          trackEvent('section_engagement', {
            lang: language,
            section: sectionId,
            cta: 'section_visible',
            country: localeSignals.countryBucket,
            route: recommendedContactRoute,
          });
        }
      },
      { threshold: 0.35, rootMargin: '0px 0px -20% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [language, localeSignals.countryBucket, recommendedContactRoute, sectionId]);

  return (
    <div ref={ref} data-motion-section={sectionId} className={className}>
      {children}
    </div>
  );
};

export default SectionMotion;
