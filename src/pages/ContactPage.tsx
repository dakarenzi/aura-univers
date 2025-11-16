import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Instagram, Youtube } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});
type ContactFormValues = z.infer<typeof contactFormSchema>;
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-brand-gold">
    <path d="M12.528 8.528A5.5 5.5 0 1 0 18 14v-1.5a2.5 2.5 0 1 1 2.5 2.5H18"/>
    <path d="M12 18.5v-13"/>
  </svg>
);
export function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });
  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    toast.success("Message Sent!", {
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    reset();
  };
  return (
    <PageTransition>
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">Contact Me</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                For inquiries, collaborations, or just to say hello.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-semibold text-brand-gold">Contact Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground/80">Name</Label>
                    <Input id="name" type="text" placeholder="Your Name" {...register('name')} className="bg-card border-brand-gold/30 focus:border-brand-gold focus:ring-brand-gold" />
                    {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground/80">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" {...register('email')} className="bg-card border-brand-gold/30 focus:border-brand-gold focus:ring-brand-gold" />
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-foreground/80">Message</Label>
                    <Textarea id="message" placeholder="Your Message" rows={5} {...register('message')} className="bg-card border-brand-gold/30 focus:border-brand-gold focus:ring-brand-gold" />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-semibold disabled:opacity-50">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-semibold text-brand-gold">Follow Me</h2>
                <p className="text-foreground/80">
                  Stay connected and follow my journey on social media.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-brand-gold/10 rounded-full hover:bg-brand-gold/20 transition-colors">
                    <Instagram className="h-6 w-6 text-brand-gold" />
                  </a>
                  <a href="#" className="p-3 bg-brand-gold/10 rounded-full hover:bg-brand-gold/20 transition-colors">
                    <Youtube className="h-6 w-6 text-brand-gold" />
                  </a>
                  <a href="#" className="p-3 bg-brand-gold/10 rounded-full hover:bg-brand-gold/20 transition-colors">
                    <TikTokIcon />
                  </a>
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold">Bookings & Media Inquiries</h3>
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