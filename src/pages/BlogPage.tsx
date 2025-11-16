import PageTransition from '@/components/PageTransition';
import { PageMetadata } from '@/components/PageMetadata';
import { useTranslation } from '@/hooks/useTranslation';
import { PageLoader } from '@/components/PageLoader';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { LazyImage } from '@/components/LazyImage';
export function BlogPage() {
  const { t, isLoading } = useTranslation();
  if (isLoading) return <PageLoader />;
  const blogPosts = t('blog_posts') || [];
  return (
    <PageTransition>
      <PageMetadata
        title={t('blog_page.meta_title')}
        description={t('blog_page.meta_description')}
      />
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold">{t('blog_page.title')}</h1>
              <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                {t('blog_page.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {blogPosts.map((post: any) => (
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
          </div>
        </div>
      </div>
    </PageTransition>
  );
}