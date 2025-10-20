import BlogCard from '@/components/blog-card';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import { getAllBlogPosts } from '@/lib/blog-content';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className='min-h-screen bg-black dark:bg-black'>
      <Navigation />

      {/* Hero Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 font-sans'>
            บทความและอินไซต์
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed'>
            แบ่งปันความรู้ ประสบการณ์ และเทคนิคต่างๆ เกี่ยวกับ UX/UI Design
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {posts.length === 0 ? (
            <div className='text-center py-12'>
              <h2 className='text-2xl font-semibold text-white mb-4'>
                No posts found
              </h2>
              <p className='text-gray-300'>
                Check back soon for new content!
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {posts.map((post) => (
                <BlogCard key={post.metadata.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-green-800 rounded-2xl p-12 text-center'>
            <div className='w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-6'>
              <svg className='w-8 h-8 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
              </svg>
            </div>
            <h2 className='text-3xl font-bold text-white mb-4 font-sans'>
              รับบทความใหม่ทุกสัปดาห์
            </h2>
            <p className='text-gray-200 mb-8 font-sans leading-relaxed'>
              สมัครรับ Newsletter เพื่อรับ UX Tips, Case Studies และความรู้ใหม่ๆ ส่งตรงถึงอีเมล
            </p>
            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='อีเมลของคุณ'
                className='flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-lime-500 focus:outline-none'
              />
              <button className='px-6 py-3 bg-lime-500 text-black font-semibold rounded-lg hover:bg-lime-400 transition-colors'>
                สมัคร
              </button>
            </div>
            <p className='text-sm text-gray-300 mt-4 font-sans'>
              เราให้ความสำคัญกับความเป็นส่วนตัว และจะไม่ส่ง Spam
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
