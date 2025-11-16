import { NavLink } from 'react-router-dom';
import { Crown, Instagram, Youtube } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M12.528 8.528A5.5 5.5 0 1 0 18 14v-1.5a2.5 2.5 0 1 1 2.5 2.5H18"/>
    <path d="M12 18.5v-13"/>
  </svg>
);
export function Footer() {
  const { t, isLoading } = useTranslation();
  if (isLoading) return null;
  return (
    <footer className="bg-background border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold font-display text-foreground">
            <Crown className="w-6 h-6 text-brand-gold" />
            Aura Universe
          </NavLink>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com/aurauniverse.official" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-brand-gold transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://youtube.com/@aurauniverse" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-brand-gold transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="https://tiktok.com/@aurauniverse.official" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-brand-gold transition-colors">
              <TikTokIcon />
            </a>
          </div>
          <p className="mt-4 text-center text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Aura Universe. {t('footer.copyright')}
          </p>
          <p className="text-center text-xs text-foreground/50">
            {t('footer.credit')}
          </p>
        </div>
      </div>
    </footer>
  );
}