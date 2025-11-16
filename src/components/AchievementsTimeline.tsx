import { Crown, Star, Award, Heart } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
const iconMap: { [key: string]: JSX.Element } = {
  "Crown": <Crown className="h-6 w-6 text-brand-gold" />,
  "Award": <Award className="h-6 w-6 text-brand-gold" />,
  "Heart": <Heart className="h-6 w-6 text-brand-gold" />,
  "Star": <Star className="h-6 w-6 text-brand-gold" />,
};
export function AchievementsTimeline() {
  const { t, isLoading } = useTranslation();
  if (isLoading) return null;
  const achievements = t('achievements') || [];
  return (
    <div className="relative">
      <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-brand-gold/20" />
      <div className="space-y-8">
        {achievements.map((item: any, index: number) => (
          <div key={index} className="flex items-start gap-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/10 ring-8 ring-background z-10">
              {iconMap[item.icon] || <Star className="h-6 w-6 text-brand-gold" />}
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