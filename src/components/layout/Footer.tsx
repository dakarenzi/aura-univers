import { NavLink } from 'react-router-dom';
import { Crown, Instagram, Twitter, Facebook } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-brand-background border-t border-brand-accent/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold font-display text-brand-text">
            <Crown className="w-6 h-6 text-brand-accent" />
            Aura Universe
          </NavLink>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-brand-text/70 hover:text-brand-accent transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-brand-text/70 hover:text-brand-accent transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-brand-text/70 hover:text-brand-accent transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-4 text-center text-sm text-brand-text/60">
            &copy; {new Date().getFullYear()} Aura Universe. Tous droits réservés.
          </p>
          <p className="text-center text-xs text-brand-text/50">
            Construit avec ❤️ chez Cloudflare
          </p>
        </div>
      </div>
    </footer>
  );
}