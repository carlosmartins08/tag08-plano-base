
import React from 'react';

export type Language = 'pt' | 'en' | 'es' | 'fr';

export interface NavItem {
  label: string;
  href: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TranslationSchema {
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    cta: string;
    limited: string;
  };
  navbar: {
    diagnosis: string;
    free: string;
    menu: {
      problem: string;
      solution: string;
      plan: string;
      cycle: string;
    };
  };
  problem: {
    label: string;
    title: string;
    description: string;
    items: string[];
    cards: {
      posts: string;
      leads: string;
      money: string;
      brand: string;
    };
  };
  pillars: {
    title: string;
    subtitle: string;
    items: {
      strategy: { title: string; desc: string };
      content: { title: string; desc: string };
      ads: { title: string; desc: string };
      analysis: { title: string; desc: string };
    };
  };
  faq: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  cta: {
    title: string;
    desc: string;
    button: string;
    disclaimer: string;
    urgency: string;
  };
  cookie: {
    title: string;
    desc: string;
    accept: string;
    policy: string;
  };
  privacy: {
    title: string;
    close: string;
    intro: string;
    sections: {
      data: { title: string; text: string };
      cookies: { title: string; text: string };
      rights: { title: string; text: string };
      security: { title: string; text: string };
    };
  };
  cookiePolicy: {
    title: string;
    intro: string;
    sections: {
      necessary: { title: string; text: string };
      analytical: { title: string; text: string };
      marketing: { title: string; text: string };
      management: { title: string; text: string };
    };
  };
}
