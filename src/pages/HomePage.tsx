import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';
export function HomePage() {
  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599687488389-9370d5dba59a?q=80&w=2574&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 p-4 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-balance leading-tight"
          >
            Aura of the Universe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90"
          >
            Embodying grace, intelligence, and purpose. Discover the journey.
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
              className="bg-brand-accent text-brand-text hover:bg-brand-accent/90 font-semibold px-8 py-6 text-lg transition-transform duration-200 hover:scale-105"
            >
              <Link to="/about">Explore My Story</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}