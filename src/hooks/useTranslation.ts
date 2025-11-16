import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
// A simple key-value pair object for translations
type Translations = { [key: string]: any };
const getDescendantProp = (obj: Translations, desc: string): any => {
  const arr = desc.split('.');
  while (arr.length && (obj = obj[arr.shift()!]));
  return obj;
};
export const useTranslation = () => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const module = await import(`../locales/${language}.json`);
        setTranslations(module.default);
      } catch (error) {
        console.error(`Could not load translations for language: ${language}`, error);
        // Fallback to English if the desired language fails to load
        const fallbackModule = await import(`../locales/en.json`);
        setTranslations(fallbackModule.default);
      } finally {
        setIsLoading(false);
      }
    };
    loadTranslations();
  }, [language]);
  const t = (key: string): any => {
    if (!translations) {
      return key;
    }
    const translation = getDescendantProp(translations, key);
    return translation === undefined ? key : translation;
  };
  return { t, isLoading, currentLanguage: language };
};