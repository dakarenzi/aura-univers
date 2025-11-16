import { useParams, Link, Navigate } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { PageMetadata } from '@/components/PageMetadata';
import { useTranslation } from '@/hooks/useTranslation';
import { PageLoader } from '@/components/PageLoader';
import { LazyImage } from '@/components/LazyImage';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, isLoading } = useTranslation();
  if (isLoading) return <PageLoader />;
  const blogPosts = t('blog_posts') || [];
  const post = blogPosts.find((p: any) => p.slug === slug);
  if (!post) {
    return <Navigate to="/404" replace />;
  }
  return (
    <PageTransition>
      <PageMetadata
        title={`${post.title} | ${t('blog_page.meta_title')}`}
        description={post.summary}
      />
      <div className="bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <article>
              <div className="mb-8">
                <Button asChild variant="ghost" className="mb-4 text-brand-gold hover:bg-brand-gold/10 hover:text-brand-gold">
                  <Link to="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t('blog_page.back_to_blog')}
                  </Link>
                </Button>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-balance">{post.title}</h1>
              </div>
              <LazyImage
                src={post.image}
                alt={post.title}
                containerClassName="w-full aspect-video rounded-lg mb-8 shadow-lg border border-brand-gold/20"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-display prose-a:text-brand-gold hover:prose-a:text-brand-gold/80 prose-strong:text-foreground">
                {post.content.split('\n').map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}