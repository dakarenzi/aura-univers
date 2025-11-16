import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { PageMetadata } from '@/components/PageMetadata';
const videos = [
  { id: 'rokGy0huYEA', title: 'Miss Universe 2023 - RBonney Gabriel (USA) | Final Question' },
  { id: 'b-18vQwno-A', title: 'Miss Universe 2022 - FULL SHOW' },
  { id: 'Z8l3h_5A4eE', title: 'Miss Universe 2021 - Harnaaz Sandhu (India) | Final Question' },
  { id: 'UryjCzSeMXE', title: 'Miss Universe 2020 - Andrea Meza (Mexico) | Final Question' },
];
export function VideosPage() {
  return (
    <PageTransition>
      <PageMetadata
        title="Videos | Aura Universe"
        description="Watch highlights from Camilla's interviews, campaigns, and performances. A collection of her most memorable video moments."
      />
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">Videos</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                Highlights from interviews, campaigns, and performances.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {videos.map((video) => (
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