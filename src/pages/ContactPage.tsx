import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Instagram, Twitter, Facebook } from 'lucide-react';
export function ContactPage() {
  return (
    <PageTransition>
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">Contactez-Moi</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                Pour les demandes de renseignements, les collaborations ou simplement pour dire bonjour.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-semibold text-brand-gold">Formulaire de Contact</h2>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground/80">Nom</Label>
                    <Input id="name" type="text" placeholder="Votre Nom" className="bg-card border-brand-gold/30 focus:border-brand-gold focus:ring-brand-gold" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground/80">Email</Label>
                    <Input id="email" type="email" placeholder="Votre Email" className="bg-card border-brand-gold/30 focus:border-brand-gold focus:ring-brand-gold" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-foreground/80">Message</Label>
                    <Textarea id="message" placeholder="Votre Message" rows={5} className="bg-card border-brand-gold/30 focus:border-brand-gold focus:ring-brand-gold" />
                  </div>
                  <Button type="submit" className="w-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-semibold">
                    Envoyer le Message
                  </Button>
                </form>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-semibold text-brand-gold">Suivez-Moi</h2>
                <p className="text-foreground/80">
                  Restez connecté et suivez mon parcours sur les réseaux sociaux.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-brand-gold/10 rounded-full hover:bg-brand-gold/20 transition-colors">
                    <Instagram className="h-6 w-6 text-brand-gold" />
                  </a>
                  <a href="#" className="p-3 bg-brand-gold/10 rounded-full hover:bg-brand-gold/20 transition-colors">
                    <Twitter className="h-6 w-6 text-brand-gold" />
                  </a>
                  <a href="#" className="p-3 bg-brand-gold/10 rounded-full hover:bg-brand-gold/20 transition-colors">
                    <Facebook className="h-6 w-6 text-brand-gold" />
                  </a>
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold">Réservations & Demandes Médias</h3>
                  <p className="text-foreground/80">
                    <a href="mailto:contact@aurauniverse.com" className="text-brand-gold hover:underline">
                      contact@aurauniverse.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}