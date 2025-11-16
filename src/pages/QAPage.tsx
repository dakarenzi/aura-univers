import PageTransition from '@/components/PageTransition';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PageMetadata } from '@/components/PageMetadata';
const qaItems = [
  {
    question: "Que signifie le titre de Miss Univers pour vous ?",
    answer: "Pour moi, le titre de Miss Univers n'est pas seulement une couronne ; c'est un micro. Il représente une plateforme puissante pour amplifier des conversations mondiales importantes, pour me connecter avec des gens de tous horizons et pour agir de manière significative sur les causes qui me passionnent, comme l'équité en matière d'éducation et la sensibilisation à la santé mentale."
  },
  {
    question: "Comment gérez-vous la pression de la compétition ?",
    answer: "Je gère la pression en restant ancrée dans mon objectif. Je me rappelle pourquoi j'ai commencé ce voyage : pour faire une différence. La pratique de la pleine conscience, le maintien d'un solide système de soutien familial et amical, et la concentration sur ma croissance personnelle plutôt que sur le simple résultat sont des éléments essentiels de ma routine."
  },
  {
    question: "Quelle est votre plus grande source d'inspiration ?",
    answer: "Ma plus grande inspiration vient de la résilience et de la force des jeunes femmes que je rencontre à travers mon travail de plaidoyer. Leur détermination à surmonter des obstacles incroyables pour poursuivre leurs études et leurs rêves alimente ma propre motivation et me rappelle l'impact profond que nous pouvons avoir les uns sur les autres."
  },
  {
    question: "Quel message aimeriez-vous partager avec les jeunes filles du monde entier ?",
    answer: "Je veux que chaque jeune fille sache que sa voix a du pouvoir et que ses rêves sont valides. N'ayez pas peur d'être ambitieuse, d'être intelligente et d'être compatissante. Acceptez vos qualités uniques, car ce sont vos plus grandes forces. Ne sous-estimez jamais le changement que vous pouvez créer dans le monde."
  },
  {
    question: "Comment définissez-vous la 'beauté avec un but' ?",
    answer: "La 'beauté avec un but' signifie utiliser sa visibilité et son influence pour le bien commun. Il s'agit de reconnaître que la vraie beauté réside dans nos actions, notre empathie et notre engagement à laisser le monde meilleur que nous ne l'avons trouvé. C'est une question de service, de substance et d'impact."
  }
];
export function QAPage() {
  return (
    <PageTransition>
      <PageMetadata
        title="Q&R | Aura Universe"
        description="Trouvez les réponses aux questions fréquemment posées sur Camilla, ses opinions sur le titre de Miss Univers, ses inspirations et son message au monde."
      />
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">Q&R</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                Réponses à certaines de vos questions les plus fréquentes.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {qaItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-brand-gold/20 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline text-foreground">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-foreground/80 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}