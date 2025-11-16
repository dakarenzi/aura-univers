import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from '@/components/ScrollToTop';
type AppLayoutProps = {
  children: React.ReactNode;
};
export function AppLayout({ children }: AppLayoutProps): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen bg-brand-background text-brand-text">
      <Header />
      <ScrollToTop />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}