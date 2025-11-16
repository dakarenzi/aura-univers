import { Crown, Star, Award, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const achievements = [
  {
    icon: <Crown className="h-6 w-6 text-brand-gold" />,
    year: "2024",
    title: "National Miss Universe Title",
    description: "Crowned as the national representative, a culmination of years of dedication and hard work.",
  },
  {
    icon: <Award className="h-6 w-6 text-brand-gold" />,
    year: "2023",
    title: "University of Excellence, Dean's List",
    description: "Achieved academic excellence in International Relations, balancing rigorous studies with pageant preparations.",
  },
  {
    icon: <Heart className="h-6 w-6 text-brand-gold" />,
    year: "2022",
    title: "Founder of 'Empower Her' Initiative",
    description: "Launched a non-profit organization dedicated to providing educational resources for underprivileged girls.",
  },
  {
    icon: <Star className="h-6 w-6 text-brand-gold" />,
    year: "2021",
    title: "Goodwill Ambassador for Children's Health",
    description: "Partnered with global health organizations to advocate for better healthcare access for children in rural areas.",
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