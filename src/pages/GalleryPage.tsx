import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from 'react';
import { PageMetadata } from '@/components/PageMetadata';
const images = [
  'https://images.unsplash.com/photo-1542596594-649ed6e6b342?q=80&w=2574&auto=format=fit=crop',
  'https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=2574&auto=format=fit=crop',
  'https://images.unsplash.com/photo-1596622718895-03dc9a752a6a?q=80&w=2574&auto=format=fit=crop',
  'https://images.unsplash.com/photo-1519742866993-6c8a2835a145?q=80&w=2574&auto=format=fit=crop',
  'https://images.unsplash.com/photo-1529595274002-0d4a6e765153?q=80&w=2574&auto=format=fit=crop',
  'https://images.unsplash.com/photo-1541250824573-b53317c44d18?q=80&w=2574&auto=format=fit=crop',
  'https://images.unsplash.com/photo-1588117269370-afc406474663?q=80&w=2574&auto=format=fit=crop',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format=fit=crop',
];
export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <PageTransition>
      <PageMetadata
        title="Galerie | Aura Universe"
        description="Explorez une collection de moments du parcours de Camilla. Un portfolio visuel de séances photo professionnelles et d'événements."
      />
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">Galerie</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                Une collection de moments figés dans le temps.
              </p>
            </div>
            <Dialog>
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
                {images.map((src, index) => (
                  <div key={index} className="break-inside-avoid">
                    <DialogTrigger asChild onClick={() => setSelectedImage(src)}>
                      <Card className="overflow-hidden cursor-pointer group border-brand-gold/20 hover:border-brand-gold/50 transition-all duration-300 bg-card">
                        <img
                          src={src}
                          alt={`Image de la galerie ${index + 1}`}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Card>
                    </DialogTrigger>
                  </div>
                ))}
              </div>
              <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
                {selectedImage && <img src={selectedImage} alt="Vue agrandie" className="w-full h-auto rounded-lg" />}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}