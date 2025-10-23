import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

/**
 * Metadata structure for blog posts
 * Contains all frontmatter information from markdown files
 */
export interface BlogMetadata {
  /** Post title */
  title: string;
  /** Publication date in ISO format */
  date: string;
  /** Short description for previews */
  excerpt: string;
  /** Unique identifier including language prefix (e.g., 'en/post-slug') */
  slug: string;
  /** Post category for organization */
  category: string;
  /** Array of tags for filtering and related posts */
  tags: string[];
  /** Author name */
  author: string;
  /** Estimated reading time */
  readTime: string;
  /** Whether post should be featured prominently */
  featured?: boolean;
  /** Optional image URL for post thumbnail */
  image?: string;
}

/**
 * Complete blog post structure
 * Combines metadata with markdown content
 */
export interface BlogPost {
  /** Post metadata from frontmatter */
  metadata: BlogMetadata;
  /** Raw markdown content */
  content: string;
}

/** Path to the blog content directory */
const postsDirectory = path.join(process.cwd(), 'src/content/blog');

/**
 * Retrieves all blog post slugs from both English and Thai directories
 * Returns slugs in format 'locale/filename' (e.g., 'en/post-slug', 'th/post-slug')
 *
 * @returns Array of blog post slugs with language prefixes
 * @example
 * // Returns: ['en/getting-started', 'th/getting-started', 'en/advanced-guide']
 * const slugs = getAllBlogSlugs();
 */
export function getAllBlogSlugs(): string[] {
  try {
    const slugs: string[] = [];

    // Check both en and th directories
    const enDir = path.join(postsDirectory, 'en');
    const thDir = path.join(postsDirectory, 'th');

    // Read English posts
    if (fs.existsSync(enDir)) {
      const enFiles = fs.readdirSync(enDir);
      enFiles
        .filter((name) => name.endsWith('.md'))
        .forEach((name) => slugs.push(`en/${name.replace(/\.md$/, '')}`));
    }

    // Read Thai posts
    if (fs.existsSync(thDir)) {
      const thFiles = fs.readdirSync(thDir);
      thFiles
        .filter((name) => name.endsWith('.md'))
        .forEach((name) => slugs.push(`th/${name.replace(/\.md$/, '')}`));
    }

    return slugs;
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

/**
 * Loads all blog posts from markdown files
 * Posts are sorted by date in descending order (newest first)
 *
 * @returns Array of blog posts sorted by publication date
 * @example
 * const posts = getAllBlogPosts();
 * console.log(posts[0].metadata.title); // Most recent post title
 */
export function getAllBlogPosts(): BlogPost[] {
  try {
    const slugs = getAllBlogSlugs();
    const posts = slugs
      .map((slug) => getBlogPost(slug))
      .filter((post) => post !== null) as BlogPost[];

    return posts.sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
    );
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return [];
  }
}

/**
 * Loads a specific blog post by its slug
 * Parses markdown frontmatter and content using gray-matter
 *
 * @param slug - Blog post slug including language prefix (e.g., 'en/post-slug')
 * @returns Blog post object or null if not found
 * @example
 * const post = getBlogPost('en/getting-started');
 * if (post) {
 *   console.log(post.metadata.title);
 *   console.log(post.content);
 * }
 */
export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      metadata: {
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        slug: slug, // Use the full slug including language prefix to ensure uniqueness
        category: data.category || 'General',
        tags: data.tags || [],
        author: data.author || 'TechStudio',
        readTime: data.readTime || '5 min read',
        featured: data.featured || false,
        image: data.image,
      },
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

/**
 * Filters blog posts by category
 * Case-insensitive category matching
 *
 * @param category - Category name to filter by
 * @returns Array of blog posts in the specified category
 * @example
 * const techPosts = getBlogPostsByCategory('Technology');
 * console.log(techPosts.length); // Number of tech posts
 */
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter(
    (post) => post.metadata.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Retrieves all featured blog posts
 * Featured posts are typically displayed prominently on the homepage
 *
 * @returns Array of blog posts marked as featured
 * @example
 * const featured = getFeaturedBlogPosts();
 * featured.forEach(post => console.log(post.metadata.title));
 */
export function getFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.metadata.featured);
}

/**
 * Finds related blog posts based on category and tags
 * Uses category matching and tag intersection for relevance
 *
 * @param currentSlug - Slug of the current post to find related posts for
 * @param limit - Maximum number of related posts to return (default: 3)
 * @returns Array of related blog posts
 * @example
 * const related = getRelatedPosts('en/getting-started', 5);
 * related.forEach(post => console.log(post.metadata.title));
 */
export function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): BlogPost[] {
  const allPosts = getAllBlogPosts();
  const currentPost = allPosts.find(
    (post) => post.metadata.slug === currentSlug
  );

  if (!currentPost) return [];

  const relatedPosts = allPosts
    .filter((post) => post.metadata.slug !== currentSlug)
    .filter(
      (post) =>
        // ✓ Match by category
        post.metadata.category === currentPost.metadata.category ||
        // OR ✓ Match by at least one shared tag
        post.metadata.tags.some((tag) =>
          currentPost.metadata.tags.includes(tag)
        )
    )
    .slice(0, limit);

  return relatedPosts;
}
