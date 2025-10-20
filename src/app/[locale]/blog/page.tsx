import BlogCard from '@/components/blog-card';
import { BlogGrid } from '@/components/blog-grid';
import { BlogHero } from '@/components/blog-hero';
import { BlogMascot } from '@/components/mascots';
import { BlogNewsletter } from '@/components/blog-newsletter';
import { FloatingObstacles } from '@/components/floating-obstacles';
import { FloatingParticles } from '@/components/floating-particles';
import Footer from '@/components/footer';
import { LemonGlow } from '@/components/lemon-glow';
import Navigation from '@/components/navigation';
import { getAllBlogPosts } from '@/lib/blog-content';
import { getTranslations } from 'next-intl/server';

export default async function BlogPage() {
  const posts = getAllBlogPosts().map((p) => ({
    ...p,
    metadata: { ...p.metadata, featured: Boolean(p.metadata.featured) },
  }));
  const t = await getTranslations('blog');

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-background dark:from-green-950 dark:via-green-900 dark:to-background relative overflow-hidden'>
      <Navigation />

      {/* Floating particles */}
      <FloatingParticles
        count={40}
        className='text-emerald-500/20 dark:text-lime-400/30'
        size='md'
      />

      <LemonGlow />
      <FloatingObstacles count={10} seed={303} />
      <BlogMascot />

      {/* Hero Section */}
      <BlogHero title={t('title')} subtitle={t('subtitle')} />

      {/* Blog Posts Grid */}
      <section className='py-20 relative z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <BlogGrid posts={posts} />
        </div>
      </section>

      {/* Newsletter Section */}
      <BlogNewsletter
        title={t('newsletter.title')}
        description={t('newsletter.description')}
        placeholder={t('newsletter.placeholder')}
        subscribeText={t('newsletter.subscribe')}
        privacyText={t('newsletter.privacy')}
      />

      <Footer />
    </div>
  );
}
