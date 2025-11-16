import PageTransition from '@/components/PageTransition';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const qaItems = [
  {
    question: "What does the Miss Universe title mean to you?",
    answer: "To me, the Miss Universe title is not just a crown; it's a microphone. It represents a powerful platform to amplify important global conversations, connect with people from all walks of life, and take meaningful action on the causes I am passionate about, such as educational equity and mental health awareness."
  },
  {
    question: "How do you handle the pressure of competition?",
    answer: "I handle pressure by staying grounded in my purpose. I remind myself why I started this journey—to make a difference. Practicing mindfulness, maintaining a strong support system of family and friends, and focusing on personal growth rather than just the outcome are essential parts of my routine."
  },
  {
    question: "What is your biggest source of inspiration?",
    answer: "My biggest inspiration comes from the resilience and strength of the young women I meet through my advocacy work. Their determination to overcome incredible obstacles to pursue their education and dreams fuels my own drive and reminds me of the profound impact we can have on one another's lives."
  },
  {
    question: "What is one message you would like to share with young girls around the world?",
    answer: "I want every young girl to know that her voice has power and her dreams are valid. Do not be afraid to be ambitious, to be intelligent, and to be compassionate. Embrace your unique qualities, for they are your greatest strengths. Never underestimate the change you can create in the world."
  },
  {
    question: "How do you define 'beauty with a purpose'?",
    answer: "'Beauty with a purpose' means using one's visibility and influence for the greater good. It's about recognizing that true beauty lies in our actions, our empathy, and our commitment to leaving the world a better place than we found it. It's about service, substance, and impact."
  }
];
export function QAPage() {
  return (
    <PageTransition>
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">Q&A</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                Answering some of your most frequently asked questions.
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