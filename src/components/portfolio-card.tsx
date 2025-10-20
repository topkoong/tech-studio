import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { PortfolioProject } from '@/lib/data/portfolio';
import { Separator } from '@/components/ui/separator';
import { useParams } from 'next/navigation';

interface PortfolioCardProps {
  project: PortfolioProject;
  featured?: boolean;
}

export default function PortfolioCard({
  project,
  featured = false,
}: PortfolioCardProps) {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <Card
      className={`hover:shadow-xl transition-all duration-300 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 hover:border-lime-500/50 dark:hover:border-lime-500/50 shadow-xl hover:shadow-lime-500/25 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className='aspect-video bg-muted flex items-center justify-center overflow-hidden'>
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
        ) : (
          <span className='text-muted-foreground'>Project Image</span>
        )}
      </div>

      <CardHeader>
        <div className='flex items-center justify-between'>
          <Badge variant='secondary'>{project.category}</Badge>
          <span className='text-sm text-muted-foreground'>
            {project.duration}
          </span>
        </div>
        <h2 className={`font-bold ${featured ? 'text-2xl' : 'text-xl'}`}>
          <Link
            href={`/${locale}/portfolio/${project.id}`}
            className='hover:text-primary transition-colors'
          >
            {project.title}
          </Link>
        </h2>
      </CardHeader>

      <CardContent>
        <p
          className={`text-muted-foreground mb-4 ${
            featured ? 'text-lg' : 'text-sm'
          }`}
        >
          {project.description}
        </p>

        <div className='flex flex-wrap gap-2 mb-4'>
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant='outline' className='text-xs'>
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant='outline' className='text-xs'>
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        <div className='flex items-center justify-between text-sm text-muted-foreground mb-4'>
          <span>{project.client}</span>
        </div>

        {featured && (
          <>
            <Separator className='my-4' />
            <div className='flex flex-wrap gap-2'>
              {project.results.slice(0, 2).map((result, index) => (
                <Badge key={index} variant='default' className='text-xs'>
                  {result}
                </Badge>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
