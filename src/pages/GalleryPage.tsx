import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from 'react';
const images = [
  'https://images.unsplash.com/photo-1542596594-649ed6e6b342?q=80&w=2574&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=2574&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596622718895-03dc9a752a6a?q=80&w=2574&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519742866993-6c8a2835a145?q=80&w=2574&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529595274002-0d4a6e765153?q=80&w=2574&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541250824573-b53317c44d18?q=80&w=2574&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588117269370-afc406474663?q=80&w=2574&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop',
];
export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <PageTransition>
      <div className="bg-brand-background text-brand-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">Gallery</h1>
              <p className="mt-4 text-lg text-brand-text/80 max-w-3xl mx-auto">
                A collection of moments captured in time.
              </p>
            </div>
            <Dialog>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {images.map((src, index) => (
                  <DialogTrigger asChild key={index} onClick={() => setSelectedImage(src)}>
                    <Card className="overflow-hidden cursor-pointer group border-brand-accent/20 hover:border-brand-accent/50 transition-all duration-300">
                      <div className="aspect-w-1 aspect-h-1">
                        <img
                          src={src}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Card>
                  </DialogTrigger>
                ))}
              </div>
              {selectedImage && (
                <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
                  <img src={selectedImage} alt="Enlarged view" className="w-full h-auto rounded-lg" />
                </DialogContent>
              )}
            </Dialog>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}