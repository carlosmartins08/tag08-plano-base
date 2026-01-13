'use client';

import React, { useEffect } from 'react';
import { LanguageProvider } from '../components/LanguageContext';

// Fix: Providers children are made optional to handle cases where it might be missing or passed as undefined.
export function Providers({ children }: { children?: React.ReactNode }) {
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
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
