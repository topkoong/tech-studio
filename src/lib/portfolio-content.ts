import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

/**
 * Comprehensive metadata structure for portfolio projects
 * Contains all frontmatter information from markdown files
 */
export interface PortfolioMetadata {
  /** Unique project identifier */
  id: string;
  /** Project title */
  title: string;
  /** Short description for previews */
  description: string;
  /** Detailed project description */
  longDescription: string;
  /** Project image/thumbnail URL */
  image: string;
  /** Array of technologies used in the project */
  technologies: string[];
  /** Project category (e.g., 'Web Development', 'Mobile App') */
  category: string;
  /** Client name or company */
  client: string;
  /** Project duration */
  duration: string;
  /** Key features implemented */
  features: string[];
  /** Challenges faced during development */
  challenges: string[];
  /** Solutions implemented for challenges */
  solutions: string[];
  /** Results and outcomes achieved */
  results: string[];
  /** Live project URL (optional) */
  liveUrl?: string;
  /** GitHub repository URL (optional) */
  githubUrl?: string;
  /** Whether project should be featured prominently */
  featured: boolean;
  /** Project completion date */
  date: string;
  /** Language locale (en/th) */
  locale: string;
  /** URL slug including language prefix */
  slug: string;
}

/**
 * Complete portfolio project structure
 * Combines metadata with markdown content
 */
export interface PortfolioProject {
  /** Project metadata from frontmatter */
  metadata: PortfolioMetadata;
  /** Raw markdown content */
  content: string;
}

/** Path to the portfolio content directory */
const portfolioDirectory = path.join(process.cwd(), 'src/content/portfolio');

/**
 * Retrieves all portfolio project slugs from both English and Thai directories
 * Returns slugs in format 'locale/filename' (e.g., 'en/project-name', 'th/project-name')
 * 
 * @returns Array of portfolio project slugs with language prefixes
 * @example
 * // Returns: ['en/ecommerce-app', 'th/ecommerce-app', 'en/saas-platform']
 * const slugs = getAllPortfolioSlugs();
 */
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

/**
 * Loads all portfolio projects from markdown files
 * Projects are sorted by date in descending order (newest first)
 * 
 * @returns Array of portfolio projects sorted by completion date
 * @example
 * const projects = getAllPortfolioProjects();
 * console.log(projects[0].metadata.title); // Most recent project title
 */
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

/**
 * Loads a specific portfolio project by its slug
 * Handles URL-encoded slugs and parses markdown frontmatter
 * 
 * @param slug - Portfolio project slug including language prefix (e.g., 'en/project-name')
 * @returns Portfolio project object or null if not found
 * @example
 * const project = getPortfolioProject('en/ecommerce-app');
 * if (project) {
 *   console.log(project.metadata.title);
 *   console.log(project.metadata.technologies);
 * }
 */
export function getPortfolioProject(slug: string): PortfolioProject | null {
  try {
    // Decode URL-encoded slug to handle special characters in URLs
    // Example: "en%2Fproject-name" becomes "en/project-name"
    const decodedSlug = decodeURIComponent(slug);
    
    // Construct full file path for the markdown file
    const fullPath = path.join(portfolioDirectory, `${decodedSlug}.md`);
    
    // Read and parse the markdown file
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      metadata: {
        // Use frontmatter ID or extract from slug as fallback
        // Example: "en/project-name" -> "project-name"
        id: data.id || decodedSlug.split('/').pop() || decodedSlug,
        
        // Basic project information with fallbacks
        title: data.title || '',
        description: data.description || '',
        longDescription: data.longDescription || '',
        
        // Image with default fallback
        image: data.image || '/images/portfolio/default.svg',
        
        // Arrays with empty array fallbacks
        technologies: data.technologies || [],
        features: data.features || [],
        challenges: data.challenges || [],
        solutions: data.solutions || [],
        results: data.results || [],
        
        // Project details with sensible defaults
        category: data.category || 'General',
        client: data.client || 'Confidential',
        duration: data.duration || 'N/A',
        
        // Optional URLs
        liveUrl: data.liveUrl,
        githubUrl: data.githubUrl,
        
        // Boolean flags
        featured: data.featured || false,
        
        // Date with current date fallback
        date: data.date || new Date().toISOString(),
        
        // Extract locale from slug (first part before '/')
        // Example: "en/project-name" -> "en"
        locale: decodedSlug.includes('/') ? decodedSlug.split('/')[0] : 'en',
        
        // Store the decoded slug for reference
        slug: decodedSlug,
      },
      content,
    };
  } catch (error) {
    console.error(`Error reading portfolio project ${slug}:`, error);
    return null;
  }
}

/**
 * Filters portfolio projects by category
 * Case-insensitive category matching
 * 
 * @param category - Category name to filter by
 * @returns Array of portfolio projects in the specified category
 * @example
 * const webProjects = getPortfolioProjectsByCategory('Web Development');
 * console.log(webProjects.length); // Number of web development projects
 */
export function getPortfolioProjectsByCategory(
  category: string
): PortfolioProject[] {
  return getAllPortfolioProjects().filter(
    (project) =>
      project.metadata.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Retrieves all featured portfolio projects
 * Featured projects are typically displayed prominently on the homepage
 * 
 * @returns Array of portfolio projects marked as featured
 * @example
 * const featured = getFeaturedPortfolioProjects();
 * featured.forEach(project => console.log(project.metadata.title));
 */
export function getFeaturedPortfolioProjects(): PortfolioProject[] {
  return getAllPortfolioProjects().filter(
    (project) => project.metadata.featured
  );
}

/**
 * Finds related portfolio projects based on category and technologies
 * Uses category matching and technology intersection for relevance
 * 
 * @param currentSlug - Slug of the current project to find related projects for
 * @param limit - Maximum number of related projects to return (default: 3)
 * @returns Array of related portfolio projects
 * @example
 * const related = getRelatedPortfolioProjects('en/ecommerce-app', 5);
 * related.forEach(project => console.log(project.metadata.title));
 */
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
