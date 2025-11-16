import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Instagram, Twitter, Facebook } from 'lucide-react';
export function ContactPage() {
  return (
    <PageTransition>
      <div className="bg-brand-background text-brand-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">Get In Touch</h1>
              <p className="mt-4 text-lg text-brand-text/80 max-w-3xl mx-auto">
                For inquiries, collaborations, or just to say hello.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-semibold">Contact Form</h2>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-brand-text/80">Name</Label>
                    <Input id="name" type="text" placeholder="Your Name" className="bg-white/80 border-brand-accent/30 focus:border-brand-accent focus:ring-brand-accent" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-brand-text/80">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" className="bg-white/80 border-brand-accent/30 focus:border-brand-accent focus:ring-brand-accent" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-brand-text/80">Message</Label>
                    <Textarea id="message" placeholder="Your Message" rows={5} className="bg-white/80 border-brand-accent/30 focus:border-brand-accent focus:ring-brand-accent" />
                  </div>
                  <Button type="submit" className="w-full bg-brand-accent text-brand-text hover:bg-brand-accent/90 font-semibold">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-semibold">Follow Me</h2>
                <p className="text-brand-text/80">
                  Stay connected and follow my journey on social media.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-brand-accent/10 rounded-full hover:bg-brand-accent/20 transition-colors">
                    <Instagram className="h-6 w-6 text-brand-accent" />
                  </a>
                  <a href="#" className="p-3 bg-brand-accent/10 rounded-full hover:bg-brand-accent/20 transition-colors">
                    <Twitter className="h-6 w-6 text-brand-accent" />
                  </a>
                  <a href="#" className="p-3 bg-brand-accent/10 rounded-full hover:bg-brand-accent/20 transition-colors">
                    <Facebook className="h-6 w-6 text-brand-accent" />
                  </a>
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold">Booking & Media Inquiries</h3>
                  <p className="text-brand-text/80">
                    <a href="mailto:contact@aurauniverse.com" className="text-brand-accent hover:underline">
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