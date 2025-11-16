import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { BookOpen, BrainCircuit } from 'lucide-react';
import { PageMetadata } from '@/components/PageMetadata';
const advocacies = [
  {
    icon: <BookOpen className="h-10 w-10 text-brand-gold" />,
    title: "Équité Éducative pour les Femmes",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format=fit=crop",
    description: "Défendre le droit à l'éducation pour chaque fille et femme. Mon initiative 'Empower Her' offre des bourses, du mentorat et des ressources pour aider les jeunes femmes des communautés défavorisées à réaliser leurs rêves académiques et professionnels. Je crois que l'éducation est la clé pour libérer le potentiel et briser les cycles de pauvreté."
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-brand-gold" />,
    title: "Sensibilisation à la Santé Mentale",
    image: "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=2938&auto=format=fit=crop",
    description: "Dédiée à la déstigmatisation de la santé mentale et à la promotion de ressources accessibles. Je travaille avec des organisations pour créer des espaces de dialogue sûrs, partager des histoires poignantes de rétablissement et plaider pour des politiques qui intègrent les soins de santé mentale dans nos communautés et nos écoles. Votre bien-être mental est important."
  },
];
export function AdvocacyPage() {
  return (
    <PageTransition>
      <PageMetadata
        title="Mon Plaidoyer | Aura Universe"
        description="Découvrez le travail de plaidoyer de Camilla pour l'équité éducative et la sensibilisation à la santé mentale. Utiliser sa plateforme pour créer un changement significatif."
      />
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">Mon Plaidoyer</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                Utiliser ma plateforme pour créer un changement significatif et élever les communautés.
              </p>
            </div>
            <div className="space-y-20">
              {advocacies.map((item, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-last' : ''}>
                    <Card className="overflow-hidden border-brand-gold/20 shadow-lg bg-card">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-cover aspect-video"
                      />
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <h2 className="text-3xl font-display font-semibold text-brand-gold">{item.title}</h2>
                    </div>
                    <p className="text-base leading-relaxed text-foreground/90">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}