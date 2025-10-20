# TechStudio - Custom Software Development Solutions

A modern, multilingual website built with Next.js 15, TypeScript, and Tailwind CSS, showcasing custom software development services with support for English and Thai languages.

## 🚀 Live Demo

- **Production**: https://topkoong.github.io/tech-studio
- **English**: https://topkoong.github.io/tech-studio/tech-studio/en/
- **Thai**: https://topkoong.github.io/tech-studio/tech-studio/th/

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Architecture](#-architecture)
- [API Reference](#-api-reference)

## ✨ Features

### Core Features
- **Multilingual Support**: English and Thai with next-intl
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: Theme switching with next-themes
- **Static Site Generation**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized images, fonts, and bundle splitting

### Pages & Sections
- **Home**: Hero section, services overview, testimonials, tech stack
- **About**: Company vision, mission, team, tools & technologies
- **Services**: Detailed service offerings and development process
- **Portfolio**: Project showcase with case studies
- **Blog**: Technical articles and insights
- **Contact**: Contact form, FAQ, and business information

### Interactive Elements
- **Animations**: Framer Motion for smooth transitions
- **Floating Elements**: Dynamic mascots and particles
- **Text Effects**: Typing effects, staggered animations
- **Glassmorphism**: Modern UI with backdrop blur effects

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, Tech Stack Icons
- **UI Components**: Radix UI + shadcn/ui

### Internationalization
- **i18n**: next-intl
- **Languages**: English (en), Thai (th)
- **Content**: JSON-based translations

### Content Management
- **Blog Posts**: Markdown with frontmatter
- **Portfolio**: Markdown with metadata
- **Images**: Unsplash/Pexels integration

### Deployment
- **Platform**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Build**: Static export with optimization

## 📁 Project Structure

```
tech-studio/
├── .github/
│   └── workflows/
│       └── deployment.yml          # GitHub Actions CI/CD
├── i18n/
│   └── request.ts                  # Internationalization config
├── messages/
│   ├── en.json                     # English translations
│   └── th.json                     # Thai translations
├── public/
│   ├── index.html                  # Root redirect for GitHub Pages
│   └── images/                     # Static assets
├── src/
│   ├── app/
│   │   ├── [locale]/               # Locale-based routing
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   ├── contact/
│   │   │   ├── portfolio/
│   │   │   ├── services/
│   │   │   ├── layout.tsx          # Locale layout
│   │   │   └── page.tsx            # Home page
│   │   ├── globals.css             # Global styles
│   │   └── layout.tsx              # Root layout
│   ├── components/
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── animated-header.tsx     # Animated page headers
│   │   ├── blog-card.tsx           # Blog post cards
│   │   ├── blog-grid.tsx           # Blog posts grid
│   │   ├── floating-particles.tsx # Background particles
│   │   ├── mascot.tsx              # Animated mascot
│   │   ├── navigation.tsx          # Main navigation
│   │   ├── portfolio-card.tsx      # Portfolio project cards
│   │   ├── portfolio-grid.tsx      # Portfolio projects grid
│   │   └── text-animations.tsx     # Text animation components
│   ├── lib/
│   │   ├── blog-content.ts         # Blog content utilities
│   │   ├── portfolio-content.ts    # Portfolio content utilities
│   │   └── utils.ts                # Utility functions
│   ├── middleware.ts                # Next.js middleware
│   └── types/
│       └── css.d.ts                # CSS module types
├── content/
│   ├── blog/
│   │   ├── en/                     # English blog posts
│   │   └── th/                     # Thai blog posts
│   └── portfolio/
│       ├── en/                     # English portfolio projects
│       └── th/                     # Thai portfolio projects
├── next.config.ts                  # Next.js configuration
├── package.json                    # Dependencies and scripts
├── tailwind.config.ts              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 22.x or higher
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/topkoong/tech-studio.git
   cd tech-studio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠 Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript checks
```

### Development Guidelines

1. **Code Style**: Follow the existing code patterns and use Prettier for formatting
2. **TypeScript**: Use strict typing and avoid `any` types
3. **Components**: Use functional components with hooks
4. **Styling**: Use Tailwind CSS classes, avoid custom CSS when possible
5. **Internationalization**: Always use translation keys, never hardcode text

### Adding New Content

#### Blog Posts
1. Create a new `.md` file in `content/blog/[locale]/`
2. Add frontmatter with metadata
3. Write content in Markdown
4. The post will automatically appear in the blog

#### Portfolio Projects
1. Create a new `.md` file in `content/portfolio/[locale]/`
2. Add frontmatter with project metadata
3. Write detailed project description
4. The project will appear in the portfolio

#### Translations
1. Add new keys to `messages/en.json`
2. Add corresponding translations to `messages/th.json`
3. Use the keys in components with `useTranslations()`

## 🚀 Deployment

### GitHub Pages (Current)

The project is automatically deployed to GitHub Pages using GitHub Actions:

1. **Push to main branch** triggers deployment
2. **Build process**:
   - Sets `NODE_ENV=production`
   - Runs `pnpm run build`
   - Generates static files in `out/` directory
3. **Deployment**:
   - Publishes `out/` directory to `gh-pages` branch
   - GitHub Pages serves from `gh-pages` branch

### Manual Deployment

```bash
# Build for production
NODE_ENV=production pnpm run build

# The static files will be in the 'out' directory
# Upload the contents to your hosting provider
```

### Environment Variables

For production deployment, ensure these are set:
- `NODE_ENV=production` (automatically set in GitHub Actions)

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit: `git commit -m 'Add amazing feature'`
5. Push: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 🏗 Architecture

### Design Principles

1. **Component-Based**: Modular, reusable React components
2. **Type-Safe**: Full TypeScript coverage with strict typing
3. **Performance**: Static generation, optimized assets, lazy loading
4. **Accessibility**: WCAG compliant, semantic HTML, keyboard navigation
5. **SEO**: Server-side rendering, meta tags, structured data

### Key Architectural Decisions

- **App Router**: Using Next.js 15 App Router for better performance
- **Static Export**: Optimized for GitHub Pages with static generation
- **Internationalization**: next-intl for scalable multilingual support
- **Styling**: Tailwind CSS for consistent, maintainable styles
- **Animations**: Framer Motion for smooth, performant animations

## 📚 API Reference

### Components

#### Navigation
```typescript
interface NavigationProps {
  locale: string;
  translations: NavigationTranslations;
}
```

#### BlogCard
```typescript
interface BlogCardProps {
  post: {
    metadata: BlogMetadata;
    content: string;
  };
}
```

#### PortfolioCard
```typescript
interface PortfolioCardProps {
  project: PortfolioProject;
  featured?: boolean;
}
```

### Utilities

#### Blog Content
```typescript
// Get all blog posts
function getAllBlogPosts(): BlogPost[]

// Get specific blog post
function getBlogPost(slug: string): BlogPost | null
```

#### Portfolio Content
```typescript
// Get all portfolio projects
function getAllPortfolioProjects(): PortfolioProject[]

// Get specific portfolio project
function getPortfolioProject(slug: string): PortfolioProject | null
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Unsplash](https://unsplash.com/) - Stock photography
- [Pexels](https://www.pexels.com/) - Stock photography

## 📞 Support

For support, email support@techstudio.com or create an issue in this repository.

---

**Built with ❤️ by TechStudio**