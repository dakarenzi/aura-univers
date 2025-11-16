import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { BookOpen, BrainCircuit } from 'lucide-react';
import { PageMetadata } from '@/components/PageMetadata';
import { useTranslation } from '@/hooks/useTranslation';
import { PageLoader } from '@/components/PageLoader';
const staticContent = [
  {
    icon: <BookOpen className="h-10 w-10 text-brand-gold" />,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format=fit=crop",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-brand-gold" />,
    image: "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=2938&auto=format=fit=crop",
  },
];
export function AdvocacyPage() {
  const { t, isLoading } = useTranslation();
  if (isLoading) return <PageLoader />;
  const advocacies = t('advocacy_page.items') || [];
  return (
    <PageTransition>
      <PageMetadata
        title={t('advocacy_page.meta_title')}
        description={t('advocacy_page.meta_description')}
      />
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">{t('advocacy_page.title')}</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                {t('advocacy_page.subtitle')}
              </p>
            </div>
            <div className="space-y-20">
              {advocacies.map((item: any, index: number) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-last' : ''}>
                    <Card className="overflow-hidden border-brand-gold/20 shadow-lg bg-card">
                      <img
                        src={staticContent[index].image}
                        alt={item.title}
                        className="w-full h-auto object-cover aspect-video"
                      />
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      {staticContent[index].icon}
                      <h2 className="text-3xl font-display font-semibold text-brand-gold">{item.title}</h2>
                    </div>
                    <p className="text-base leading-relaxed text-foreground/90">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}