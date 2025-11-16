import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTranslation } from '@/hooks/useTranslation';
import { LanguageSwitcher } from '../LanguageSwitcher';
const navPaths = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'gallery', path: '/gallery' },
  { key: 'videos', path: '/videos' },
  { key: 'advocacy', path: '/advocacy' },
  { key: 'qa', path: '/qa' },
  { key: 'press_kit', path: '/press-kit' },
  { key: 'contact', path: '/contact' },
];
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, isLoading } = useTranslation();
  if (isLoading) {
    return null; // Or a loading skeleton for the header
  }
  const NavLinksContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <nav
      className={cn(
        'flex items-center gap-1 md:gap-2',
        isMobile ? 'flex-col space-y-4 pt-8' : 'hidden md:flex'
      )}
    >
      {navPaths.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={() => isMobile && setIsMenuOpen(false)}
          className={({ isActive }) =>
            cn(
              'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
              'hover:bg-brand-gold/20 hover:text-foreground',
              isActive
                ? 'bg-brand-gold/10 text-brand-gold'
                : 'text-foreground/80',
              isMobile && 'text-lg w-full text-center'
            )
          }
        >
          {t(`nav.${link.key}`)}
        </NavLink>
      ))}
    </nav>
  );
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold font-display text-foreground">
            <Crown className="w-6 h-6 text-brand-gold" />
            Aura Universe
          </NavLink>
          <div className="hidden md:flex items-center gap-2">
            <NavLinksContent />
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <LanguageSwitcher />
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">{t('header.open_menu')}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-3/4 bg-background">
                <div className="flex justify-between items-center p-4 border-b border-brand-gold/20">
                   <NavLink to="/" className="flex items-center gap-2 text-xl font-bold font-display text-foreground" onClick={() => setIsMenuOpen(false)}>
                      <Crown className="w-6 h-6 text-brand-gold" />
                      Aura Universe
                    </NavLink>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">{t('header.close_menu')}</span>
                    </Button>
                </div>
                <div className="p-4">
                  <NavLinksContent isMobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}