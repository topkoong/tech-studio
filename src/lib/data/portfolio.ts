export interface PortfolioProject {
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
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'web-application-platform',
    title: 'Custom Web Application Platform',
    description: 'A comprehensive web application solution with advanced features',
    longDescription:
      'Built a full-featured web application platform from scratch using modern web technologies. The platform includes user authentication, data management, real-time updates, payment processing, and admin dashboard.',
    image: '/images/portfolio/web-application.svg',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Stripe',
    ],
    category: 'Web Development',
    client: 'Technology Company',
    duration: '6 months',
    features: [
      'User authentication and authorization',
      'Real-time data synchronization',
      'Advanced search and filtering',
      'Payment integration with Stripe',
      'Admin dashboard for management',
      'Email notifications',
      'Responsive design',
      'API integration',
    ],
    challenges: [
      'Complex data relationships',
      'Real-time synchronization requirements',
      'Scalability concerns',
      'Security implementation',
    ],
    solutions: [
      'Implemented efficient database design',
      'Used WebSocket for real-time updates',
      'Applied microservices architecture',
      'Implemented comprehensive security measures',
    ],
    results: [
      '50% reduction in data processing time',
      '99.9% uptime achieved',
      '40% increase in user engagement',
      'Seamless payment processing',
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    featured: true,
    date: '2024-01-15',
  },
  {
    id: 'mobile-booking-app',
    title: 'Mobile Booking System',
    description: 'A comprehensive mobile booking application with real-time availability',
    longDescription:
      'Developed a mobile-first booking system that allows users to book services, manage appointments, and receive notifications. The app includes calendar integration, payment processing, and real-time updates.',
    image: '/images/portfolio/mobile-application.svg',
    technologies: [
      'React Native',
      'Node.js',
      'MongoDB',
      'Firebase',
      'Stripe',
      'Expo',
    ],
    category: 'Mobile Development',
    client: 'Service Provider',
    duration: '4 months',
    features: [
      'Real-time booking availability',
      'Calendar integration',
      'Push notifications',
      'Payment processing',
      'User profile management',
      'Booking history',
      'Offline support',
      'Multi-language support',
    ],
    challenges: [
      'Real-time synchronization',
      'Offline functionality',
      'Cross-platform compatibility',
      'Payment security',
    ],
    solutions: [
      'Implemented WebSocket connections',
      'Used local storage for offline data',
      'Applied React Native best practices',
      'Integrated secure payment gateway',
    ],
    results: [
      '60% increase in booking efficiency',
      '95% user satisfaction rate',
      '30% reduction in no-shows',
      'Cross-platform compatibility achieved',
    ],
    liveUrl: 'https://booking-app.com',
    githubUrl: 'https://github.com/booking-app',
    featured: true,
    date: '2024-02-20',
  },
  {
    id: 'api-microservices-platform',
    title: 'API & Microservices Platform',
    description: 'Scalable microservices architecture with comprehensive API management',
    longDescription:
      'Designed and implemented a microservices platform with API gateway, service discovery, and comprehensive monitoring. The platform handles high traffic loads and provides seamless service communication.',
    image: '/images/portfolio/automation-system.svg',
    technologies: [
      'Spring Boot',
      'Kafka',
      'Redis',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
    ],
    category: 'API Development',
    client: 'Enterprise Client',
    duration: '8 months',
    features: [
      'Microservices architecture',
      'API gateway implementation',
      'Service discovery',
      'Message queuing with Kafka',
      'Caching with Redis',
      'Database optimization',
      'Monitoring and logging',
      'Auto-scaling capabilities',
    ],
    challenges: [
      'Service communication complexity',
      'Data consistency across services',
      'Performance optimization',
      'Monitoring and debugging',
    ],
    solutions: [
      'Implemented event-driven architecture',
      'Used distributed transactions',
      'Applied caching strategies',
      'Implemented comprehensive monitoring',
    ],
    results: [
      '80% improvement in system performance',
      '99.99% service availability',
      '50% reduction in response time',
      'Scalable architecture achieved',
    ],
    liveUrl: 'https://api-platform.com',
    githubUrl: 'https://github.com/api-platform',
    featured: true,
    date: '2024-03-10',
  },
  {
    id: 'line-integration-system',
    title: 'LINE Integration System',
    description: 'Comprehensive LINE bot integration with automated workflows',
    longDescription:
      'Developed a sophisticated LINE bot integration system that handles customer inquiries, automated responses, and seamless integration with existing business systems. The system includes natural language processing and workflow automation.',
    image: '/images/portfolio/web-application.svg',
    technologies: [
      'Node.js',
      'LINE Messaging API',
      'MongoDB',
      'Redis',
      'Webhook',
      'Express.js',
    ],
    category: 'Integration Development',
    client: 'Customer Service Company',
    duration: '3 months',
    features: [
      'LINE bot integration',
      'Automated responses',
      'Natural language processing',
      'Customer data management',
      'Workflow automation',
      'Analytics and reporting',
      'Multi-language support',
      'Rich message support',
    ],
    challenges: [
      'LINE API limitations',
      'Natural language understanding',
      'Response time optimization',
      'Scalability requirements',
    ],
    solutions: [
      'Implemented efficient webhook handling',
      'Used NLP libraries for text processing',
      'Applied caching for faster responses',
      'Designed scalable architecture',
    ],
    results: [
      '70% reduction in response time',
      '90% customer satisfaction',
      '24/7 automated support',
      'Seamless integration achieved',
    ],
    liveUrl: 'https://line-bot.com',
    githubUrl: 'https://github.com/line-bot',
    featured: false,
    date: '2024-04-05',
  },
  {
    id: 'n8n-line-automation',
    title: 'N8N-LINE Automation Platform',
    description: 'Advanced workflow automation connecting N8N with LINE messaging',
    longDescription:
      'Created an advanced automation platform that connects N8N workflow engine with LINE messaging API. The system enables complex business process automation with intelligent message routing and response handling.',
    image: '/images/portfolio/automation-system.svg',
    technologies: [
      'N8N',
      'LINE API',
      'Node.js',
      'PostgreSQL',
      'Webhook',
      'Docker',
    ],
    category: 'Automation Development',
    client: 'Business Process Company',
    duration: '2 months',
    features: [
      'N8N workflow integration',
      'LINE messaging automation',
      'Custom node development',
      'Workflow scheduling',
      'Error handling and retry logic',
      'Data transformation',
      'Multi-channel support',
      'Workflow monitoring',
    ],
    challenges: [
      'N8N custom node development',
      'Workflow complexity management',
      'Error handling strategies',
      'Performance optimization',
    ],
    solutions: [
      'Developed custom N8N nodes',
      'Implemented robust error handling',
      'Applied workflow optimization techniques',
      'Created monitoring dashboards',
    ],
    results: [
      '85% automation efficiency',
      '60% reduction in manual work',
      '99% workflow success rate',
      'Seamless integration achieved',
    ],
    liveUrl: 'https://n8n-line.com',
    githubUrl: 'https://github.com/n8n-line',
    featured: false,
    date: '2024-05-15',
  },
  {
    id: 'make-line-integration',
    title: 'Make-LINE Integration Service',
    description: 'Comprehensive integration service connecting Make with LINE platform',
    longDescription:
      'Developed a comprehensive integration service that connects Make automation platform with LINE messaging system. The service enables seamless data flow and automated communication workflows.',
    image: '/images/portfolio/mobile-application.svg',
    technologies: [
      'Make.com',
      'LINE API',
      'JavaScript',
      'Webhook',
      'JSON',
      'REST API',
    ],
    category: 'Integration Development',
    client: 'Marketing Agency',
    duration: '1 month',
    features: [
      'Make.com integration',
      'LINE messaging automation',
      'Data synchronization',
      'Custom webhook handling',
      'Real-time notifications',
      'Error handling',
      'Logging and monitoring',
      'Multi-tenant support',
    ],
    challenges: [
      'Make.com API limitations',
      'Data format transformation',
      'Real-time synchronization',
      'Error handling complexity',
    ],
    solutions: [
      'Implemented custom webhook handlers',
      'Created data transformation logic',
      'Applied real-time sync strategies',
      'Developed comprehensive error handling',
    ],
    results: [
      '90% integration success rate',
      '50% faster data processing',
      'Real-time synchronization achieved',
      'Seamless workflow automation',
    ],
    liveUrl: 'https://make-line.com',
    githubUrl: 'https://github.com/make-line',
    featured: false,
    date: '2024-06-01',
  },
  {
    id: 'ui-ux-design-system',
    title: 'UI/UX Design System',
    description: 'Comprehensive design system with component library and guidelines',
    longDescription:
      'Created a comprehensive UI/UX design system including component library, design guidelines, and documentation. The system ensures consistency across all products and improves development efficiency.',
    image: '/images/portfolio/web-application.svg',
    technologies: [
      'Figma',
      'React',
      'Storybook',
      'TypeScript',
      'CSS',
      'Design Tokens',
    ],
    category: 'UI/UX Design',
    client: 'Design Agency',
    duration: '3 months',
    features: [
      'Component library',
      'Design tokens',
      'Style guide',
      'Interactive documentation',
      'Accessibility guidelines',
      'Responsive design patterns',
      'Animation guidelines',
      'Brand guidelines',
    ],
    challenges: [
      'Component consistency',
      'Design token management',
      'Documentation maintenance',
      'Accessibility compliance',
    ],
    solutions: [
      'Implemented design token system',
      'Created comprehensive documentation',
      'Applied accessibility best practices',
      'Developed automated testing',
    ],
    results: [
      '70% faster development time',
      '100% design consistency',
      'WCAG 2.1 AA compliance',
      'Improved developer experience',
    ],
    liveUrl: 'https://design-system.com',
    githubUrl: 'https://github.com/design-system',
    featured: false,
    date: '2024-07-10',
  },
  {
    id: 'booking-management-system',
    title: 'Booking Management System',
    description: 'Complete booking management solution with calendar integration',
    longDescription:
      'Developed a comprehensive booking management system that handles reservations, calendar integration, payment processing, and customer management. The system includes both web and mobile interfaces.',
    image: '/images/portfolio/mobile-application.svg',
    technologies: [
      'Next.js',
      'React',
      'PostgreSQL',
      'Prisma',
      'Stripe',
      'Calendar API',
    ],
    category: 'Web Development',
    client: 'Hospitality Company',
    duration: '5 months',
    features: [
      'Calendar integration',
      'Real-time availability',
      'Payment processing',
      'Customer management',
      'Booking history',
      'Email notifications',
      'Admin dashboard',
      'Mobile responsive',
    ],
    challenges: [
      'Calendar synchronization',
      'Real-time updates',
      'Payment integration',
      'Data consistency',
    ],
    solutions: [
      'Implemented WebSocket connections',
      'Used database transactions',
      'Applied payment best practices',
      'Created real-time sync system',
    ],
    results: [
      '80% booking efficiency improvement',
      '95% customer satisfaction',
      'Real-time synchronization',
      'Seamless payment processing',
    ],
    liveUrl: 'https://booking-system.com',
    githubUrl: 'https://github.com/booking-system',
    featured: true,
    date: '2024-08-20',
  },
];

export function getPortfolioProjects(): PortfolioProject[] {
  return portfolioProjects;
}

export function getProjectBySlug(slug: string): PortfolioProject | null {
  return portfolioProjects.find((project) => project.id === slug) || null;
}

export function getRelatedProjects(currentSlug: string, limit: number = 3): PortfolioProject[] {
  const currentProject = getProjectBySlug(currentSlug);
  if (!currentProject) return [];

  return portfolioProjects
    .filter((project) => project.id !== currentSlug && project.category === currentProject.category)
    .slice(0, limit);
}

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
  return portfolioProjects.filter((project) => project.category === category);
}