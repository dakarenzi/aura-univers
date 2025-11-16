import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { PageMetadata } from '@/components/PageMetadata';
const videos = [
  { id: 'rokGy0huYEA', title: 'Miss Univers 2023 - RBonney Gabriel (USA) | Question Finale' },
  { id: 'b-18vQwno-A', title: 'Miss Univers 2022 - SPECTACLE COMPLET' },
  { id: 'Z8l3h_5A4eE', title: 'Miss Univers 2021 - Harnaaz Sandhu (Inde) | Question Finale' },
  { id: 'UryjCzSeMXE', title: 'Miss Univers 2020 - Andrea Meza (Mexique) | Question Finale' },
];
export function VideosPage() {
  return (
    <PageTransition>
      <PageMetadata
        title="Vidéos | Aura Universe"
        description="Regardez les moments forts des interviews, campagnes et performances de Camilla. Une collection de ses moments vidéo les plus mémorables."
      />
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">Vidéos</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                Moments forts des interviews, campagnes et performances.
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