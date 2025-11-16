import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookOpen, BrainCircuit, HeartHandshake } from 'lucide-react';
const advocacies = [
  {
    icon: <BookOpen className="h-10 w-10 text-brand-gold" />,
    title: "Educational Equity for Women",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop",
    description: "Championing the right to education for every girl and woman. My 'Empower Her' initiative provides scholarships, mentorship, and resources to help young women in underserved communities achieve their academic and professional dreams. I believe education is the key to unlocking potential and breaking cycles of poverty."
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-brand-gold" />,
    title: "Mental Health Awareness",
    image: "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=2938&auto=format&fit=crop",
    description: "Dedicated to de-stigmatizing mental health and promoting accessible resources. I work with organizations to create safe spaces for dialogue, share powerful stories of recovery, and advocate for policies that integrate mental healthcare into our communities and schools. Your mental well-being matters."
  },
];
export function AdvocacyPage() {
  return (
    <PageTransition>
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">My Advocacy</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                Using my platform to create meaningful change and uplift communities.
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