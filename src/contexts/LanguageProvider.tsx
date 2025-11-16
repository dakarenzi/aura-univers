import React, { useState, useMemo, ReactNode } from 'react';
import { LanguageContext, Language } from './LanguageContext';
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined' && window.navigator) {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'fr') {
        return 'fr';
      }
    }
    return 'en'; // Default to English
  });
  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};