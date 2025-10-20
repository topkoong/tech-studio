import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import PortfolioCard from '@/components/portfolio-card';
import { getAllPortfolioProjects } from '@/lib/portfolio-content';

export default function PortfolioPage() {
  const projects = getAllPortfolioProjects();

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800'>
      <Navigation />

      {/* Hero Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6'>
            Our Portfolio
          </h1>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            Explore our successful projects and see how we've helped businesses
            solve their challenges with custom software solutions.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className='py-20 bg-white dark:bg-slate-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-4'>
              Featured Projects
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300'>
              Highlighting some of our most successful custom software
              development projects
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
            {projects
              .filter((p) => p.metadata.featured)
              .slice(0, 2)
              .map((project) => (
                <PortfolioCard
                  key={project.metadata.id}
                  project={project.metadata}
                  featured
                />
              ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-4'>
              All Projects
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300'>
              Complete portfolio of our custom software development work
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project) => (
              <PortfolioCard
                key={project.metadata.id}
                project={project.metadata}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-white dark:bg-slate-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-4'>
            Ready to Start Your Project?
          </h2>
          <p className='text-lg text-slate-600 dark:text-slate-300 mb-8'>
            Let's discuss your requirements and create a custom solution for
            your business
          </p>
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors'>
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
