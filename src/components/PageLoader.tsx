import { Crown } from 'lucide-react';
export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-background">
      <div className="flex flex-col items-center gap-4">
        <Crown className="h-12 w-12 text-brand-gold animate-pulse" />
        <p className="text-foreground/80">Loading...</p>
      </div>
    </div>
  );
}