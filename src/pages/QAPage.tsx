import PageTransition from '@/components/PageTransition';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PageMetadata } from '@/components/PageMetadata';
import { useTranslation } from '@/hooks/useTranslation';
import { PageLoader } from '@/components/PageLoader';
export function QAPage() {
  const { t, isLoading } = useTranslation();
  if (isLoading) return <PageLoader />;
  const qaItems = t('qa_page.items') || [];
  return (
    <PageTransition>
      <PageMetadata
        title={t('qa_page.meta_title')}
        description={t('qa_page.meta_description')}
      />
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">{t('qa_page.title')}</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                {t('qa_page.subtitle')}
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {qaItems.map((item: any, index: number) => (
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