import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AchievementsTimeline } from '@/components/AchievementsTimeline';
import { PageMetadata } from '@/components/PageMetadata';
import { useTranslation } from '@/hooks/useTranslation';
import { PageLoader } from '@/components/PageLoader';
export function AboutPage() {
  const { t, isLoading } = useTranslation();
  if (isLoading) return <PageLoader />;
  return (
    <PageTransition>
      <PageMetadata
        title={t('about.meta_title')}
        description={t('about.meta_description')}
      />
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">{t('about.title')}</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                {t('about.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
              <div className="space-y-4">
                <h2 className="text-3xl font-display font-semibold text-brand-gold">{t('about.journey_title')}</h2>
                <p className="text-base leading-relaxed text-foreground/90">
                  {t('about.journey_p1')}
                </p>
                <p className="text-base leading-relaxed text-foreground/90">
                  {t('about.journey_p2')}
                </p>
              </div>
              <div>
                <Card className="overflow-hidden border-brand-gold/20 shadow-lg bg-card">
                  <img
                    src="https://images.unsplash.com/photo-1614777738455-26c652549734?q=80&w=2574&auto=format&fit=crop"
                    alt={t('about.portrait_alt_1')}
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </Card>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
              <div className="lg:order-last">
                <div className="space-y-4">
                  <h2 className="text-3xl font-display font-semibold text-brand-gold">{t('about.advocacy_title')}</h2>
                  <p className="text-base leading-relaxed text-foreground/90">
                    {t('about.advocacy_p1')}
                  </p>
                  <p className="text-base leading-relaxed text-foreground/90">
                    {t('about.advocacy_p2')}
                  </p>
                </div>
              </div>
              <div>
                <Card className="overflow-hidden border-brand-gold/20 shadow-lg bg-card">
                  <img
                    src="https://images.unsplash.com/photo-1589571894960-20452674C740?q=80&w=2787&auto=format&fit=crop"
                    alt={t('about.portrait_alt_2')}
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </Card>
              </div>
            </div>
            <Separator className="my-16 bg-brand-gold/20" />
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold">{t('about.achievements_title')}</h2>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                {t('about.achievements_subtitle')}
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <AchievementsTimeline />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}