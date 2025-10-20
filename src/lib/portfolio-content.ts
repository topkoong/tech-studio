import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export interface PortfolioMetadata {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  client: string;
  duration: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
  locale: string;
  slug: string;
}

export interface PortfolioProject {
  metadata: PortfolioMetadata;
  content: string;
}

const portfolioDirectory = path.join(process.cwd(), 'src/content/portfolio');

export function getAllPortfolioSlugs(): string[] {
  try {
    const slugs: string[] = [];

    // Check both en and th directories
    const enDir = path.join(portfolioDirectory, 'en');
    const thDir = path.join(portfolioDirectory, 'th');

    // Read English projects
    if (fs.existsSync(enDir)) {
      const enFiles = fs.readdirSync(enDir);
      enFiles
        .filter((name) => name.endsWith('.md'))
        .forEach((name) => slugs.push(`en/${name.replace(/\.md$/, '')}`));
    }

    // Read Thai projects
    if (fs.existsSync(thDir)) {
      const thFiles = fs.readdirSync(thDir);
      thFiles
        .filter((name) => name.endsWith('.md'))
        .forEach((name) => slugs.push(`th/${name.replace(/\.md$/, '')}`));
    }

    return slugs;
  } catch (error) {
    console.error('Error reading portfolio directory:', error);
    return [];
  }
}

export function getAllPortfolioProjects(): PortfolioProject[] {
  try {
    const slugs = getAllPortfolioSlugs();
    const projects = slugs
      .map((slug) => getPortfolioProject(slug))
      .filter((project) => project !== null) as PortfolioProject[];

    return projects.sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
    );
  } catch (error) {
    console.error('Error getting portfolio projects:', error);
    return [];
  }
}

export function getPortfolioProject(slug: string): PortfolioProject | null {
  try {
    // Decode URL-encoded slug (e.g., "en%2Fproject-name" -> "en/project-name")
    const decodedSlug = decodeURIComponent(slug);
    const fullPath = path.join(portfolioDirectory, `${decodedSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      metadata: {
        id: data.id || decodedSlug.split('/').pop() || decodedSlug,
        title: data.title || '',
        description: data.description || '',
        longDescription: data.longDescription || '',
        image: data.image || '/images/portfolio/default.svg',
        technologies: data.technologies || [],
        category: data.category || 'General',
        client: data.client || 'Confidential',
        duration: data.duration || 'N/A',
        features: data.features || [],
        challenges: data.challenges || [],
        solutions: data.solutions || [],
        results: data.results || [],
        liveUrl: data.liveUrl,
        githubUrl: data.githubUrl,
        featured: data.featured || false,
        date: data.date || new Date().toISOString(),
        locale: decodedSlug.includes('/') ? decodedSlug.split('/')[0] : 'en',
        slug: decodedSlug,
      },
      content,
    };
  } catch (error) {
    console.error(`Error reading portfolio project ${slug}:`, error);
    return null;
  }
}

export function getPortfolioProjectsByCategory(
  category: string
): PortfolioProject[] {
  return getAllPortfolioProjects().filter(
    (project) =>
      project.metadata.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedPortfolioProjects(): PortfolioProject[] {
  return getAllPortfolioProjects().filter(
    (project) => project.metadata.featured
  );
}

export function getRelatedPortfolioProjects(
  currentSlug: string,
  limit: number = 3
): PortfolioProject[] {
  const allProjects = getAllPortfolioProjects();
  const currentProject = allProjects.find(
    (project) => project.metadata.id === currentSlug
  );

  if (!currentProject) return [];

  const relatedProjects = allProjects
    .filter((project) => project.metadata.id !== currentSlug)
    .filter(
      (project) =>
        project.metadata.category === currentProject.metadata.category ||
        project.metadata.technologies.some((tech) =>
          currentProject.metadata.technologies.includes(tech)
        )
    )
    .slice(0, limit);

  return relatedProjects;
}
