import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
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
        // Vite does not support fully dynamic imports with variables like `../locales/${language}.json`
        // We must use a more static path for Vite's bundler to detect the files.
        let module;
        if (language === 'fr') {
          module = await import(`../locales/fr.json`);
        } else {
          module = await import(`../locales/en.json`);
        }
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