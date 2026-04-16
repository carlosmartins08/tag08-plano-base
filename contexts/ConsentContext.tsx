'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface CookieConsent {
  necessary: true;
  analytical: boolean;
  marketing: boolean;
}

interface ConsentContextType {
  cookieConsent: CookieConsent | null;
  updateCookieConsent: (consent: CookieConsent) => void;
  resetCookieConsent: () => void;
  isPrivacyModalOpen: boolean;
  setPrivacyModalOpen: (open: boolean) => void;
  isCookieModalOpen: boolean;
  setCookieModalOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'tag08-cookie-preferences';

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const ConsentProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState<CookieConsent | null>(null);
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isCookieModalOpen, setCookieModalOpen] = useState(false);

  useEffect(() => {
    try {
      const savedConsent = localStorage.getItem(STORAGE_KEY);
      if (savedConsent) {
        setCookieConsent(JSON.parse(savedConsent) as CookieConsent);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const updateCookieConsent = (consent: CookieConsent) => {
    setCookieConsent(consent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  };

  const resetCookieConsent = () => {
    setCookieConsent(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ConsentContext.Provider
      value={{
        cookieConsent,
        updateCookieConsent,
        resetCookieConsent,
        isPrivacyModalOpen,
        setPrivacyModalOpen,
        isCookieModalOpen,
        setCookieModalOpen,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) throw new Error('useConsent must be used within ConsentProvider');
  return context;
};
