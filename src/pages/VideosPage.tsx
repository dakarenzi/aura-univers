import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { PageMetadata } from '@/components/PageMetadata';
import { useTranslation } from '@/hooks/useTranslation';
import { PageLoader } from '@/components/PageLoader';
export function VideosPage() {
  const { t, isLoading } = useTranslation();
  if (isLoading) return <PageLoader />;
  const videos = t('videos.items') || [];
  return (
    <PageTransition>
      <PageMetadata
        title={t('videos.meta_title')}
        description={t('videos.meta_description')}
      />
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">{t('videos.title')}</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                {t('videos.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {videos.map((video: any) => (
                <div key={video.id}>
                  <Card className="overflow-hidden border-brand-gold/20 shadow-lg bg-card">
                    <AspectRatio ratio={16 / 9}>
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </AspectRatio>
                  </Card>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{video.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}