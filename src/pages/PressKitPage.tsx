import PageTransition from '@/components/PageTransition';
import { PageMetadata } from '@/components/PageMetadata';
import { useTranslation } from '@/hooks/useTranslation';
import { PageLoader } from '@/components/PageLoader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Mail } from 'lucide-react';
const mediaImages = [
  'https://images.unsplash.com/photo-1542596594-649ed6e6b342?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596622718895-03dc9a752a6a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519742866993-6c8a2835a145?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588117269370-afc406474663?q=80&w=800&auto=format&fit=crop',
];
export function PressKitPage() {
  const { t, isLoading } = useTranslation();
  if (isLoading) return <PageLoader />;
  return (
    <PageTransition>
      <PageMetadata
        title={t('press_kit_page.meta_title')}
        description={t('press_kit_page.meta_description')}
      />
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">{t('press_kit_page.title')}</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                {t('press_kit_page.subtitle')}
              </p>
            </div>
            <div className="space-y-16">
              {/* Download Section */}
              <Card className="p-8 bg-card border-brand-gold/20 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-display font-semibold text-brand-gold">{t('press_kit_page.download_title')}</h2>
                  <p className="mt-2 text-foreground/80">{t('press_kit_page.download_description')}</p>
                </div>
                <Button asChild size="lg" className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-semibold transition-transform duration-200 hover:scale-105 w-full md:w-auto">
                  <a href="/placeholder-press-kit.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    {t('press_kit_page.download_cta')}
                  </a>
                </Button>
              </Card>
              {/* Media Photos Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-center mb-8">{t('press_kit_page.photos_title')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {mediaImages.map((src, index) => (
                    <Card key={index} className="overflow-hidden group border-brand-gold/20 hover:border-brand-gold/50 transition-all duration-300 bg-card">
                      <img
                        src={src}
                        alt={`${t('press_kit_page.photo_alt')} ${index + 1}`}
                        className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                      />
                    </Card>
                  ))}
                </div>
              </div>
              {/* Contact Section */}
              <Card className="p-8 bg-card border-brand-gold/20 shadow-lg text-center">
                <h2 className="text-2xl font-display font-semibold text-brand-gold">{t('press_kit_page.contact_title')}</h2>
                <p className="mt-2 text-foreground/80 max-w-xl mx-auto">{t('press_kit_page.contact_description')}</p>
                <div className="mt-6">
                  <Button asChild variant="outline" className="border-brand-gold/50 hover:bg-brand-gold/10 hover:text-brand-gold">
                    <a href={`mailto:${t('press_kit_page.contact_email')}`}>
                      <Mail className="mr-2 h-5 w-5" />
                      {t('press_kit_page.contact_email')}
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}