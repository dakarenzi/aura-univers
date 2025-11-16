import PageTransition from '@/components/PageTransition';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
export function AboutPage() {
  return (
    <PageTransition>
      <div className="bg-brand-background text-brand-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">About Me</h1>
              <p className="mt-4 text-lg text-brand-text/80 max-w-3xl mx-auto">
                A glimpse into my journey, my passions, and the causes I champion.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2">
                <Card className="overflow-hidden border-brand-accent/20 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1614777738455-26c652549734?q=80&w=2574&auto=format&fit=crop"
                    alt="Portrait"
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </Card>
              </div>
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <h2 className="text-3xl font-display font-semibold text-brand-accent">My Journey</h2>
                  <p className="mt-4 text-base leading-relaxed text-brand-text/90">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-brand-text/90">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
                  </p>
                </div>
                <Separator className="bg-brand-accent/20" />
                <div>
                  <h2 className="text-3xl font-display font-semibold text-brand-accent">Advocacy & Passion</h2>
                  <p className="mt-4 text-base leading-relaxed text-brand-text/90">
                    Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.
                  </p>
                </div>
                <Separator className="bg-brand-accent/20" />
                <div>
                  <h2 className="text-3xl font-display font-semibold text-brand-accent">Achievements</h2>
                  <ul className="mt-4 list-disc list-inside space-y-2 text-brand-text/90">
                    <li>Miss Universe National Title 2024</li>
                    <li>Dean's List, University of Excellence</li>
                    <li>Founder of "Empower Her" Initiative</li>
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