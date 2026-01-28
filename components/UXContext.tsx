'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Source = 'google' | 'meta' | 'linkedin' | 'direct';
export type Persona = 'data-focused' | 'vision-focused' | 'neutral';

interface UXContextType {
    source: Source;
    isReturning: boolean;
    calculatedROI: number;
    calculatedRevenue: number;
    updateROI: (revenue: number, growth: number) => void;
    isHighValue: boolean;
    // New Innovations
    strategyNote: string | null;
    setStrategyNote: (note: string | null) => void;
    persona: Persona;
    updatePersona: (persona: Persona) => void;
    isBlueprintMode: boolean;
    toggleBlueprintMode: () => void;
}

const UXContext = createContext<UXContextType | undefined>(undefined);

export const UXProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [source, setSource] = useState<Source>('direct');
    const [isReturning, setIsReturning] = useState(false);
    const [calculatedROI, setCalculatedROI] = useState(0);
    const [calculatedRevenue, setCalculatedRevenue] = useState(0);

    // Innovation States
    const [strategyNote, setStrategyNote] = useState<string | null>(null);
    const [persona, setPersona] = useState<Persona>('neutral');
    const [isBlueprintMode, setIsBlueprintMode] = useState(false);

    useEffect(() => {
        // 1. Detect Source via UTMs
        const params = new URLSearchParams(window.location.search);
        const utmSource = params.get('utm_source')?.toLowerCase();

        if (utmSource?.includes('google')) setSource('google');
        else if (utmSource?.includes('facebook') || utmSource?.includes('instagram') || utmSource?.includes('meta')) setSource('meta');
        else if (utmSource?.includes('linkedin')) setSource('linkedin');

        // 2. Detect Returning Visitor
        const hasVisited = localStorage.getItem('tag08_visited');
        if (hasVisited) {
            setIsReturning(true);
        } else {
            localStorage.setItem('tag08_visited', 'true');
        }

        // 3. Load previous states
        const savedROI = localStorage.getItem('tag08_last_roi');
        const savedRev = localStorage.getItem('tag08_last_revenue');
        const savedPersona = localStorage.getItem('tag08_persona') as Persona;
        const savedBlueprint = localStorage.getItem('tag08_blueprint') === 'true';

        if (savedROI) setCalculatedROI(Number(savedROI));
        if (savedRev) setCalculatedRevenue(Number(savedRev));
        if (savedPersona) setPersona(savedPersona);
        if (savedBlueprint) setIsBlueprintMode(savedBlueprint);
    }, []);

    useEffect(() => {
        if (persona === 'neutral') {
            const timer = setTimeout(() => {
                updatePersona('vision-focused');
            }, 45000); // 45 seconds
            return () => clearTimeout(timer);
        }
    }, [persona]);

    const updateROI = (revenue: number, growth: number) => {
        const annualLoss = revenue * (growth / 100) * 12;
        setCalculatedROI(annualLoss);
        setCalculatedRevenue(revenue);
        localStorage.setItem('tag08_last_roi', annualLoss.toString());
        localStorage.setItem('tag08_last_revenue', revenue.toString());

        // Interaction with Data Calculator pushes towards Data-focused persona
        updatePersona('data-focused');
    };

    const updatePersona = (newPersona: Persona) => {
        setPersona(newPersona);
        localStorage.setItem('tag08_persona', newPersona);
    };

    const toggleBlueprintMode = () => {
        setIsBlueprintMode(prev => {
            const newValue = !prev;
            localStorage.setItem('tag08_blueprint', newValue.toString());
            return newValue;
        });
    };

    // Business Rule: If annual loss > 150k, mark as High Value
    const isHighValue = calculatedROI > 150000;

    return (
        <UXContext.Provider value={{
            source,
            isReturning,
            calculatedROI,
            calculatedRevenue,
            updateROI,
            isHighValue,
            strategyNote,
            setStrategyNote,
            persona,
            updatePersona,
            isBlueprintMode,
            toggleBlueprintMode
        }}>
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
