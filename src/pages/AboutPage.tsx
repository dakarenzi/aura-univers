import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
export function AboutPage() {
  return (
    <PageTransition>
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">About Me</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                An insight into my journey, my passions, and the causes I champion.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2">
                <Card className="overflow-hidden border-brand-gold/20 shadow-lg bg-card">
                  <img
                    src="https://images.unsplash.com/photo-1614777738455-26c652549734?q=80&w=2574&auto=format&fit=crop"
                    alt="Portrait"
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </Card>
              </div>
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <h2 className="text-3xl font-display font-semibold text-brand-gold">My Journey</h2>
                  <p className="mt-4 text-base leading-relaxed text-foreground/90">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-foreground/90">
                    Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor.
                  </p>
                </div>
                <Separator className="bg-brand-gold/20" />
                <div>
                  <h2 className="text-3xl font-display font-semibold text-brand-gold">Advocacy & Passion</h2>
                  <p className="mt-4 text-base leading-relaxed text-foreground/90">
                    Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
                  </p>
                </div>
                <Separator className="bg-brand-gold/20" />
                <div>
                  <h2 className="text-3xl font-display font-semibold text-brand-gold">Achievements</h2>
                  <ul className="mt-4 list-disc list-inside space-y-2 text-foreground/90">
                    <li>National Miss Universe Title 2024</li>
                    <li>Dean's List, University of Excellence</li>
                    <li>Founder of the 'Empower Her' Initiative</li>
                    <li>Goodwill Ambassador for Children's Health</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}