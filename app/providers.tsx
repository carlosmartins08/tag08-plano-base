'use client';

import React, { useEffect } from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import { UXProvider, useUX } from '../components/UXContext';
import { Language } from '../types';

const BlueprintWrapper = ({ children }: { children?: React.ReactNode }) => {
  const { isBlueprintMode } = useUX();
  return (
    <div className={`${isBlueprintMode ? 'blueprint-active' : ''} min-h-screen transition-colors duration-500`}>
      {children}
    </div>
  );
};

export function Providers({ children, initialLanguage }: { children?: React.ReactNode, initialLanguage?: Language }) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <UXProvider>
        <BlueprintWrapper>
          {children}
        </BlueprintWrapper>
      </UXProvider>
    </LanguageProvider>
  );
}
