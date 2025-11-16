import { Crown, Star, Award, Heart } from 'lucide-react';
const achievements = [
  {
    icon: <Crown className="h-6 w-6 text-brand-gold" />,
    year: "2024",
    title: "Titre National de Miss Univers",
    description: "Couronnée représentante nationale, l'aboutissement d'années de dévouement et de travail acharné.",
  },
  {
    icon: <Award className="h-6 w-6 text-brand-gold" />,
    year: "2023",
    title: "Université d'Excellence, Liste du Doyen",
    description: "Atteinte de l'excellence académique en Relations Internationales, tout en équilibrant des études rigoureuses avec les préparations au concours.",
  },
  {
    icon: <Heart className="h-6 w-6 text-brand-gold" />,
    year: "2022",
    title: "Fondatrice de l'initiative 'Empower Her'",
    description: "Lancement d'une organisation à but non lucratif dédiée à fournir des ressources éducatives aux filles défavorisées.",
  },
  {
    icon: <Star className="h-6 w-6 text-brand-gold" />,
    year: "2021",
    title: "Ambassadrice de Bonne Volonté pour la Santé des Enfants",
    description: "Partenariat avec des organisations mondiales de la santé pour plaider en faveur d'un meilleur accès aux soins pour les enfants des zones rurales.",
  },
];
export function AchievementsTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-brand-gold/20" />
      <div className="space-y-8">
        {achievements.map((item, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/10 ring-8 ring-background z-10">
              {item.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-brand-gold">{item.year}</p>
              <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
              <p className="mt-1 text-sm text-foreground/80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}