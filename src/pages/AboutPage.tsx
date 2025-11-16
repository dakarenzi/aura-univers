import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AchievementsTimeline } from '@/components/AchievementsTimeline';
import { PageMetadata } from '@/components/PageMetadata';
export function AboutPage() {
  return (
    <PageTransition>
      <PageMetadata
        title="À Propos de Camilla | Aura Universe"
        description="Découvrez le parcours de Camilla, ses passions et les causes qu'elle défend. Un aperçu de sa biographie, de ses réalisations et de son travail de plaidoyer."
      />
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">À Propos de Camilla</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                Un aperçu de mon parcours, de mes passions et des causes que je défends.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
              <div className="space-y-4">
                <h2 className="text-3xl font-display font-semibold text-brand-gold">Mon Parcours</h2>
                <p className="text-base leading-relaxed text-foreground/90">
                  Originaire d'une petite ville aux grands rêves, mon chemin a été celui d'une quête incessante de connaissance, de but et d'impact positif. Mon parcours dans le monde des concours de beauté n'a pas commencé comme une quête pour une couronne, mais comme la recherche d'une plateforme pour amplifier la voix des sans-voix et pour défendre les causes qui me sont chères.
                </p>
                <p className="text-base leading-relaxed text-foreground/90">
                  En étudiant les Relations Internationales, j'ai développé une compréhension approfondie des défis mondiaux auxquels nous sommes confrontés et de l'interconnexion de notre monde. Cette formation académique nourrit ma passion pour le plaidoyer, me fournissant les outils pour analyser des probl��mes complexes et œuvrer à des solutions durables.
                </p>
              </div>
              <div>
                <Card className="overflow-hidden border-brand-gold/20 shadow-lg bg-card">
                  <img
                    src="https://images.unsplash.com/photo-1614777738455-26c652549734?q=80&w=2574&auto=format&fit=crop"
                    alt="Portrait de Camilla"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </Card>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
              <div className="lg:order-last">
                <div className="space-y-4">
                  <h2 className="text-3xl font-display font-semibold text-brand-gold">Plaidoyer & Passion</h2>
                  <p className="text-base leading-relaxed text-foreground/90">
                    Ma mission principale est de plaider pour une éducation de qualité et la sensibilisation à la santé mentale. À travers mon initiative 'Empower Her', je m'efforce de démanteler les barrières qui empêchent les jeunes femmes d'accéder à l'éducation. Je crois qu'une femme éduquée a le pouvoir d'élever toute sa communauté.
                  </p>
                  <p className="text-base leading-relaxed text-foreground/90">
                    Parallèlement, je suis une fervente avocate de la déstigmatisation des conversations sur la santé mentale. En partageant des histoires et en promouvant des ressources, je vise à créer un monde où chercher de l'aide pour son bien-être mental est considéré comme un signe de force, et non de faiblesse.
                  </p>
                </div>
              </div>
              <div>
                <Card className="overflow-hidden border-brand-gold/20 shadow-lg bg-card">
                  <img
                    src="https://images.unsplash.com/photo-1589571894960-20452674C740?q=80&w=2787&auto=format&fit=crop"
                    alt="Second portrait de Camilla"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </Card>
              </div>
            </div>
            <Separator className="my-16 bg-brand-gold/20" />
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold">Mes Réalisations</h2>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                Une chronologie des étapes clés de mon parcours jusqu'à présent.
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