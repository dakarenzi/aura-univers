import { NavLink } from 'react-router-dom';
import { Crown, Instagram, Twitter, Facebook } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-background border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold font-display text-foreground">
            <Crown className="w-6 h-6 text-brand-gold" />
            Aura Universe
          </NavLink>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-foreground/70 hover:text-brand-gold transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-foreground/70 hover:text-brand-gold transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-foreground/70 hover:text-brand-gold transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-4 text-center text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Aura Universe. Tous droits réservés.
          </p>
          <p className="text-center text-xs text-foreground/50">
            Construit avec ❤️ chez Cloudflare
          </p>
        </div>
      </div>
    </footer>
  );
}