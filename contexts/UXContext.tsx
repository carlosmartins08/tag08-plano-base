'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Persona, Niche } from '../types';

type Source = 'google' | 'meta' | 'linkedin' | 'direct';

interface UXContextType {
  source: Source;
  isReturning: boolean;
  updateROI: (revenue: number, growth: number) => void;
  strategyNote: string | null;
  setStrategyNote: (note: string | null) => void;
  persona: Persona;
  updatePersona: (persona: Persona) => void;
  niche: Niche;
  setNiche: (niche: Niche) => void;
  isBlueprintMode: boolean;
  toggleBlueprintMode: () => void;
}

const UXContext = createContext<UXContextType | undefined>(undefined);

export const UXProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [source, setSource] = useState<Source>('direct');
  const [isReturning, setIsReturning] = useState(false);
  const [strategyNote, setStrategyNote] = useState<string | null>(null);
  const [persona, setPersona] = useState<Persona>('neutral');
  const [niche, setNiche] = useState<Niche>('generic');
  const [isBlueprintMode, setIsBlueprintMode] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source')?.toLowerCase();
    const utmCampaign = params.get('utm_campaign')?.toLowerCase();

    if (utmCampaign?.includes('imobi') || utmCampaign?.includes('realestate')) setNiche('real-estate');
    else if (utmCampaign?.includes('saude') || utmCampaign?.includes('health')) setNiche('health');
    else if (utmCampaign?.includes('tech') || utmCampaign?.includes('startup')) setNiche('tech');
    else if (utmCampaign?.includes('expert') || utmCampaign?.includes('mentor') || utmCampaign?.includes('consultor')) setNiche('expert');

    if (utmSource?.includes('google')) setSource('google');
    else if (utmSource?.includes('facebook') || utmSource?.includes('instagram') || utmSource?.includes('meta')) setSource('meta');
    else if (utmSource?.includes('linkedin')) setSource('linkedin');

    const hasVisited = localStorage.getItem('tag08_visited');
    if (hasVisited) {
      setIsReturning(true);
    } else {
      localStorage.setItem('tag08_visited', 'true');
    }

    const savedPersona = localStorage.getItem('tag08_persona') as Persona | null;
    const savedBlueprint = localStorage.getItem('tag08_blueprint') === 'true';

    if (savedPersona) setPersona(savedPersona);
    if (savedBlueprint) setIsBlueprintMode(savedBlueprint);
  }, []);

  useEffect(() => {
    if (persona === 'neutral') {
      const timer = setTimeout(() => {
        updatePersona('vision-focused');
      }, 45000);

      return () => clearTimeout(timer);
    }
  }, [persona]);

  const updateROI = (revenue: number, growth: number) => {
    const annualLoss = revenue * (growth / 100) * 12;
    localStorage.setItem('tag08_last_roi', annualLoss.toString());
    localStorage.setItem('tag08_last_revenue', revenue.toString());

    updatePersona('data-focused');
  };

  const updatePersona = (newPersona: Persona) => {
    setPersona(newPersona);
    localStorage.setItem('tag08_persona', newPersona);
  };

  const toggleBlueprintMode = () => {
    setIsBlueprintMode((prev) => {
      const next = !prev;
      localStorage.setItem('tag08_blueprint', next.toString());
      return next;
    });
  };

  return (
    <UXContext.Provider
      value={{
        source,
        isReturning,
        updateROI,
        strategyNote,
        setStrategyNote,
        persona,
        updatePersona,
        niche,
        setNiche,
        isBlueprintMode,
        toggleBlueprintMode,
      }}
    >
      {children}
    </UXContext.Provider>
  );
};

export const useUX = () => {
  const context = useContext(UXContext);
  if (context === undefined) {
    throw new Error('useUX must be used within a UXProvider');
  }
  return context;
};
