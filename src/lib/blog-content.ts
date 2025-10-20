import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export interface BlogMetadata {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  category: string;
  tags: string[];
  author: string;
  readTime: string;
  featured?: boolean;
}

export interface BlogPost {
  metadata: BlogMetadata;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getAllBlogSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((name) => name.endsWith('.md'))
      .map((name) => name.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

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
        slug: slug,
        category: data.category || 'General',
        tags: data.tags || [],
        author: data.author || 'TechStudio',
        readTime: data.readTime || '5 min read',
        featured: data.featured || false,
      },
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter(
    (post) => post.metadata.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.metadata.featured);
}

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
        post.metadata.category === currentPost.metadata.category ||
        post.metadata.tags.some((tag) =>
          currentPost.metadata.tags.includes(tag)
        )
    )
    .slice(0, limit);

  return relatedPosts;
}
