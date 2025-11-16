import React, { createContext, useState, useMemo, ReactNode } from 'react';
export type Language = 'en' | 'fr';
export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
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