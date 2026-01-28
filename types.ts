
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
    welcomeBack: string;
    sourceMeta: string;
    sourceGoogle: string;
    sourceLinkedin: string;
    heroAlt: string;
    headlines: {
      data: string;
      vision: string;
      default: string;
    };
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
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    supportTitle: string;
    supportBody: string;
    supportCta: string;
    items: FAQItem[];
  };
  cta: {
    title: string;
    desc: string;
    button: string;
    highValueTitle: string;
    highValueButton: string;
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
  monthlyCycle: {
    title: string;
    subtitle: string;
    steps: {
      step1: { title: string; desc: string };
      step2: { title: string; desc: string };
      step3: { title: string; desc: string };
      step4: { title: string; desc: string };
    };
    footerText: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    googleRating: string;
    reviewCount: string;
    viewAll: string;
    items: {
      name: string;
      role: string;
      content: string;
      date: string;
    }[];
  };
  strategicBenefits: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  calculator: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    revenueLabel: string;
    growthLabel: string;
    lossLabel: string;
    monthlyLossLabel: string;
    newCeilingLabel: string;
    cta: string;
    disclaimer: string;
  };
  investment: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cardTitle: string;
    fideleityTitle: string;
    fidelityTag: string;
    fidelityDesc: string;
    cancelTitle: string;
    cancelDesc: string;
    offerTitle: string;
    offerTitleAccent: string;
    offerDesc: string;
    offerCta: string;
  };
  responsibilities: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    items: string[];
  };
  footer: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    ctaDiagnosis: string;
    ctaDirection: string;
    about: string;
    ecosystem: string;
    institutional: string;
    social: string;
    socialDesc: string;
    rights: string;
    allRights: string;
    privacy: string;
    cookies: string;
    preferences: string;
  };
  growthRoadmap: {
    title: string;
    titleAccent: string;
    subtitle: string;
    steps: {
      step1: { stage: string; title: string; desc: string };
      step2: { stage: string; title: string; desc: string };
      step3: { stage: string; title: string; desc: string };
      step4: { stage: string; title: string; desc: string };
    };
  };
  strategyNotes: {
    hero: string;
    metrics: string;
    roadmap: string;
    roi: string;
    design: string;
    blueprint: string;
  };
}
