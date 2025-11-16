import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AchievementsTimeline } from '@/components/AchievementsTimeline';
import { PageMetadata } from '@/components/PageMetadata';
export function AboutPage() {
  return (
    <PageTransition>
      <PageMetadata
        title="About Camilla | Aura Universe"
        description="Learn about Camilla's journey, her passions, and the causes she champions. An insight into her biography, achievements, and advocacy work."
      />
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">About Camilla</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                An insight into my journey, my passions, and the causes I champion.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
              <div className="space-y-4">
                <h2 className="text-3xl font-display font-semibold text-brand-gold">My Journey</h2>
                <p className="text-base leading-relaxed text-foreground/90">
                  From a small town with big dreams, my path has been one of relentless pursuit of knowledge, purpose, and positive impact. My journey into the world of pageantry began not as a quest for a crown, but as a search for a platform to amplify the voices of the unheard and to champion the causes close to my heart.
                </p>
                <p className="text-base leading-relaxed text-foreground/90">
                  Studying International Relations, I developed a deep understanding of the global challenges we face and the interconnectedness of our world. This academic background fuels my passion for advocacy, providing me with the tools to analyze complex issues and work towards sustainable solutions.
                </p>
              </div>
              <div>
                <Card className="overflow-hidden border-brand-gold/20 shadow-lg bg-card">
                  <img
                    src="https://images.unsplash.com/photo-1614777738455-26c652549734?q=80&w=2574&auto=format&fit=crop"
                    alt="Portrait of Camilla"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </Card>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
              <div className="lg:order-last">
                <div className="space-y-4">
                  <h2 className="text-3xl font-display font-semibold text-brand-gold">Advocacy & Passion</h2>
                  <p className="text-base leading-relaxed text-foreground/90">
                    My core mission is to advocate for quality education and mental health awareness. Through my 'Empower Her' initiative, I work to dismantle barriers that prevent young women from accessing education. I believe that an educated woman has the power to uplift her entire community.
                  </p>
                  <p className="text-base leading-relaxed text-foreground/90">
                    Simultaneously, I am a fervent advocate for de-stigmatizing mental health conversations. By sharing stories and promoting resources, I aim to create a world where seeking help for mental well-being is seen as a sign of strength, not weakness.
                  </p>
                </div>
              </div>
              <div>
                <Card className="overflow-hidden border-brand-gold/20 shadow-lg bg-card">
                  <img
                    src="https://images.unsplash.com/photo-1589571894960-20452674C740?q=80&w=2787&auto=format&fit=crop"
                    alt="Second portrait of Camilla"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </Card>
              </div>
            </div>
            <Separator className="my-16 bg-brand-gold/20" />
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold">My Achievements</h2>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                A timeline of key milestones on my journey so far.
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