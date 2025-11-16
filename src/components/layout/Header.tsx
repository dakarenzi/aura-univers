import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Videos', path: '/videos' },
  { name: 'Contact', path: '/contact' },
];
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const NavLinksContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <nav
      className={cn(
        'flex items-center gap-1 md:gap-2',
        isMobile ? 'flex-col space-y-4 pt-8' : 'hidden md:flex'
      )}
    >
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={() => isMobile && setIsMenuOpen(false)}
          className={({ isActive }) =>
            cn(
              'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
              'hover:bg-brand-accent/20 hover:text-brand-text',
              isActive
                ? 'bg-brand-accent/10 text-brand-accent'
                : 'text-brand-text/80',
              isMobile && 'text-lg w-full text-center'
            )
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-background/80 backdrop-blur-sm border-b border-brand-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold font-display text-brand-text">
            <Crown className="w-6 h-6 text-brand-accent" />
            Aura Universe
          </NavLink>
          <div className="hidden md:block">
            <NavLinksContent />
          </div>
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-3/4 bg-brand-background">
                <div className="flex justify-between items-center p-4 border-b border-brand-accent/10">
                   <NavLink to="/" className="flex items-center gap-2 text-xl font-bold font-display text-brand-text" onClick={() => setIsMenuOpen(false)}>
                      <Crown className="w-6 h-6 text-brand-accent" />
                      Aura Universe
                    </NavLink>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
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