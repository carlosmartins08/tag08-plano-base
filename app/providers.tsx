'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { ConsentProvider } from '../contexts/ConsentContext';
import AnalyticsManager from '../components/AnalyticsManager';

export function Providers({ children }: { children?: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .motion-enter-primary');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <ConsentProvider>
      <AnalyticsManager />
      <div className="min-h-screen">{children}</div>
    </ConsentProvider>
  );
}

