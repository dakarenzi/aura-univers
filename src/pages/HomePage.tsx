import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';
import { PageMetadata } from '@/components/PageMetadata';
import { useTranslation } from '@/hooks/useTranslation';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowRight } from 'lucide-react';
import { LazyImage } from '@/components/LazyImage';
export function HomePage() {
  const { t, isLoading } = useTranslation();
  const blogPosts = t('blog_posts') || [];
  if (isLoading) {
    return (
      <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-brand-navy">
        <div className="relative z-10 p-4 space-y-4">
          <Skeleton className="h-20 w-[600px] mx-auto" />
          <Skeleton className="h-6 w-[400px] mx-auto" />
          <Skeleton className="h-16 w-52 mx-auto mt-4" />
        </div>
      </div>
    );
  }
  return (
    <PageTransition>
      <PageMetadata
        title={t('home.meta_title')}
        description={t('home.meta_description')}
      />
      <div className="bg-background text-foreground">
        <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-brand-navy">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2940&auto=format&fit=crop')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent" />
          </div>
          <div className="relative z-10 p-4 text-brand-light">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-balance leading-tight"
            >
              {t('home.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-brand-light/90"
            >
              {t('home.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-8"
            >
              <Button
                asChild
                size="lg"
                className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-semibold px-8 py-6 text-lg transition-transform duration-200 hover:scale-105"
              >
                <Link to="/about">{t('home.cta')}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        {/* Blog Section */}
        <div className="py-24 md:py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold">{t('home.blog_section.title')}</h2>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                {t('home.blog_section.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {blogPosts.slice(0, 3).map((post: any) => (
                <Card key={post.slug} className="overflow-hidden border-brand-gold/20 shadow-lg bg-card flex flex-col group">
                  <AspectRatio ratio={16 / 9}>
                    <LazyImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-bold text-foreground flex-grow">{post.title}</h3>
                    <p className="mt-2 text-foreground/80 text-sm flex-grow">{post.summary}</p>
                     <Button asChild variant="link" className="p-0 mt-4 text-brand-gold self-start">
                      <Link to={`/blog/${post.slug}`}>
                        {t('blog_page.read_more')} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-16">
                <Button asChild size="lg" variant="outline" className="border-brand-gold/50 hover:bg-brand-gold/10 hover:text-brand-gold font-semibold transition-transform duration-200 hover:scale-105">
                    <Link to="/blog">{t('home.blog_section.view_all')}</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}