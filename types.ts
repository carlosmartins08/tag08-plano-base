import React from 'react';

export type Language = 'pt' | 'en' | 'es' | 'fr';
export type ContactRouteId = 'br' | 'intl';

export interface TranslationSchema {
  hero: { badge: string; title: string; description: string; cta: string; fitLabel: string; fitText: string; heroAlt: string };
  navbar: { cta: string; menu: { problem: string; howItWorks: string; plan: string; cycle: string; faq: string } };
  problem: { label: string; title: string; description: string; items: string[]; cards: Record<string, string> };
  valueProposition: { badge: string; title: string; subtitle: string; features: { title: string; desc: string }[] };
  pillars: { badge: string; title: string; subtitle: string; items: { title: string; desc: string }[] };
  monthlyCycle: { badge: string; title: string; subtitle: string; steps: { title: string; desc: string }[]; footerText: string };
  growthRoadmap: { badge: string; title: string; subtitle: string; steps: { stage: string; title: string; desc: string }[]; footerText: string };
  strategicBenefits: { badge: string; title: string; subtitle: string; items: { title: string; desc: string }[] };
  investment: { badge: string; title: string; subtitle: string; items: { title: string; desc: string }[]; cardTitle: string; cardText: string; cta: string };
  responsibilities: { badge: string; title: string; subtitle: string; items: string[] };
  faq: { badge: string; title: string; subtitle: string; supportTitle: string; supportBody: string; supportCta: string; items: { question: string; answer: string }[] };
  cta: { badge: string; title: string; desc: string; button: string; disclaimer: string; messageBr: string; messageIntl: string };
  cookie: { title: string; desc: string; accept: string; policy: string; configure: string; acceptAll: string; customizeTitle: string; customizeSubtitle: string; necessaryLabel: string; necessaryDesc: string; analyticalLabel: string; analyticalDesc: string; marketingLabel: string; marketingDesc: string; back: string; savePreferences: string };
  privacy: { title: string; close: string; intro: string; sections: Record<string, { title: string; text: string }> };
  cookiePolicy: { title: string; intro: string; sections: Record<string, { title: string; text: string }> };
  footer: { description: string; headquarters: string; centralSupport: string; about: string; services: string; social: string; socialDesc: string; rights: string; allRights: string; privacy: string; cookies: string; preferences: string; managementService: string; institutionalContact: string };
}

export interface Pillar { title: string; description: string; icon: React.ReactNode }
export interface Step { title: string; description: string }
export interface Benefit { title: string; description: string }
