export const projectsTitle = 'Projects';
export const projectsSubtitle =
  'A selection of public and private projects, built with different stacks and purposes.';

export const T = {
  javascript: {
    label: 'JavaScript',
    color: 'bg-yellow-300 text-yellow-900',
    type: 'tech',
  },
  typescript: {
    label: 'TypeScript',
    color: 'bg-blue-200 text-blue-900',
    type: 'tech',
  },
  css: {
    label: 'CSS',
    color: 'bg-purple-300 text-purple-900',
    type: 'tech',
  },
  html: {
    label: 'HTML',
    color: 'bg-orange-200 text-orange-900',
    type: 'tech',
  },
  python: {
    label: 'Python',
    color: 'bg-green-200 text-green-900',
    type: 'tech',
  },
  productivity: {
    label: 'Productivity',
    color: 'bg-pink-200 text-pink-900',
    type: 'soft',
  },
  collaboration: {
    label: 'Collaboration',
    color: 'bg-cyan-200 text-cyan-900',
    type: 'soft',
  },
  app: {
    label: 'App',
    color: 'bg-gray-200 text-gray-800',
    type: 'tech',
  },
  weather: {
    label: 'Weather',
    color: 'bg-blue-100 text-blue-800',
    type: 'tech',
  },
  dashboard: {
    label: 'Dashboard',
    color: 'bg-indigo-100 text-indigo-800',
    type: 'tech',
  },
  communication: {
    label: 'Communication',
    color: 'bg-orange-100 text-orange-900',
    type: 'soft',
  },
  leadership: {
    label: 'Leadership',
    color: 'bg-red-200 text-red-900',
    type: 'soft',
  },
  'problem-solving': {
    label: 'Problem Solving',
    color: 'bg-green-100 text-green-900',
    type: 'soft',
  },
  adaptability: {
    label: 'Adaptability',
    color: 'bg-yellow-100 text-yellow-900',
    type: 'soft',
  },
  teamwork: {
    label: 'Teamwork',
    color: 'bg-blue-50 text-blue-900',
    type: 'soft',
  },
  creativity: {
    label: 'Creativity',
    color: 'bg-pink-100 text-pink-900',
    type: 'soft',
  },
  'critical-thinking': {
    label: 'Critical Thinking',
    color: 'bg-purple-100 text-purple-900',
    type: 'soft',
  },
  'time-management': {
    label: 'Time Management',
    color: 'bg-gray-100 text-gray-800',
    type: 'soft',
  },
  empathy: {
    label: 'Empathy',
    color: 'bg-teal-100 text-teal-900',
    type: 'soft',
  },
  resilience: {
    label: 'Resilience',
    color: 'bg-indigo-200 text-indigo-900',
    type: 'soft',
  },
  ai: {
    label: 'AI',
    color: 'bg-purple-200 text-purple-900',
    type: 'tech',
  },
  nextjs: {
    label: 'Next.js',
    color: 'bg-blue-200 text-blue-900',
    type: 'tech',
  },
  geospatial: {
    label: 'Geospatial',
    color: 'bg-emerald-200 text-emerald-900',
    type: 'tech',
  },
  react: {
    label: 'React',
    color: 'bg-sky-200 text-sky-900',
    type: 'tech',
  },
};

export type Tag = keyof typeof T;

export type Project = {
  slug: string;
  title: string;
  description: string;
  demoUrl?: string;
  repoUrl?: string;
  repoPrivate?: boolean;
  featured?: boolean;
  workInProgress?: boolean;
  tags?: Tag[];
  date: string;
  thumbnail?: string;
  motivation?: string;
  challenges?: string[];
  learnings?: string[];
  details?: { [section: string]: string };
};

export const projects: Project[] = [
  {
    slug: 'geospatial-digital-twin-platform',
    title: 'Geospatial Digital-Twin Platform',
    description:
      'Frontend of a new geospatial digital-twin data platform for a major energy company, built from scratch as the sole frontend engineer at Radix.',
    featured: true,
    workInProgress: false,
    tags: ['geospatial', 'react', 'nextjs', 'typescript', 'dashboard', 'ai', 'problem-solving'],
    date: '2025-03-01',
    motivation:
      'A major energy company needed a single platform to centralize, visualize and govern geospatial source data about its physical assets, replacing fragmented vendor datasets and manual workflows.',
    challenges: [
      'Choosing and owning the frontend architecture as the only frontend engineer, from an empty repository to gradual internal adoption',
      'Combining interactive maps and 3D asset visualization in a performant way with large spatial datasets',
      'Handling coordinate-reference-system transformations and unit normalization across data coming from different vendors',
      'Defining API contracts and complex spatial workflows together with backend and geospatial engineers',
    ],
    learnings: [
      'Designing a frontend for geospatial correctness, where a wrong projection or unit is a real bug, not a visual glitch',
      'Making architectural decisions alone and documenting them so other teams could adopt the platform',
      'Using AI-assisted and agentic coding (Claude Code) for code exploration, feature development, debugging and refactoring without losing control of quality',
    ],
    details: {
      'Detailed Overview':
        'A digital-twin data platform for a major energy company that organizes geospatial source data of physical assets and exposes it through interactive maps, 3D views and role-based interfaces. Delivered at Radix, where I was the sole frontend engineer.',
      'My Role':
        'Sole frontend engineer: chose the architecture, built the application from scratch, and worked with backend and geospatial engineers on API contracts and spatial workflows. Supported the gradual internal adoption of the platform.',
      'Key Features':
        'Interactive maps, 3D asset visualization, coordinate-reference transformations, unit normalization, vendor data integration and role-based interfaces.',
      'Tech Stack':
        'React, Next.js, TypeScript, TanStack Query, Mapbox GL, Material UI, REST APIs, Claude Code.',
    },
  },
  {
    slug: 'industrial-asset-monitoring',
    title: 'Industrial Asset Monitoring (Cognite)',
    description:
      'Frontend for monitoring equipment health from industrial sensor data, integrated with Cognite and secured with Azure AD.',
    featured: false,
    workInProgress: false,
    tags: ['dashboard', 'react', 'nextjs', 'typescript', 'problem-solving'],
    date: '2025-06-01',
    motivation:
      'Give operations teams a clear, reliable view of equipment health based on real-time industrial sensor data.',
    challenges: [
      'Building the frontend from inception and owning the architectural decisions',
      'Acquiring and visualizing time-series sensor data through the Cognite SDK in a responsive dashboard',
      'Implementing enterprise single sign-on with MSAL and Azure AD',
    ],
    learnings: [
      'Working with industrial data platforms and their SDKs inside a Next.js application',
      'Designing secure enterprise authentication flows end to end',
    ],
    details: {
      Overview:
        'A web application to monitor the health of industrial equipment using sensor data stored in Cognite, delivered at Radix.',
      'Tech Stack': 'React, Next.js, TypeScript, Cognite SDK, Material UI, MSAL, Azure AD.',
    },
  },
  {
    slug: 'seedz-satellite-ndvi',
    title: 'Satellite Imagery & NDVI Dashboard (Seedz)',
    description:
      'AI-powered geospatial dashboard that visualizes satellite imagery and NDVI to support agricultural decisions, with map calculations cut from minutes to under five seconds.',
    featured: true,
    workInProgress: false,
    tags: ['geospatial', 'react', 'dashboard', 'javascript', 'problem-solving', 'critical-thinking'],
    date: '2023-05-01',
    motivation:
      'Farmers and agronomists needed to understand crop health from satellite data and make high-stakes decisions without waiting on slow calculations.',
    challenges: [
      'Map calculations over property geometries took minutes, which made the experience unusable',
      'Redesigning the frontend architecture and property-selection UX around preprocessed GeoJSON',
      'Keeping SSR pages fast while rendering data-intensive interfaces',
      'Translating complex agronomic calculations and business rules into reliable frontend logic',
    ],
    learnings: [
      'Moving heavy work out of the browser and into preprocessed data can change the entire UX, with calculations dropping from minutes to under five seconds',
      'Remix SSR tuning improved page loading by about 35%',
      'A mechanical engineering background helped me become the technical reference for calculations and business logic',
    ],
    details: {
      Overview:
        'A geospatial dashboard for the agtech company Seedz, showing satellite imagery and NDVI vegetation indexes over rural properties.',
      'My Role':
        'Senior frontend engineer from May 2023 to Dec 2024: built the geospatial interfaces, redesigned the architecture around preprocessed GeoJSON, and developed reusable components and data-intensive interfaces.',
      'Tech Stack': 'Remix, React, JavaScript, Mapbox GL, Turf.js, GeoJSON, SSR.',
    },
  },
  {
    slug: 'enterprise-php-to-react-migration',
    title: 'Backup & Recovery Modernization',
    description:
      'Migration of an enterprise backup and recovery application from legacy PHP interfaces to React, delivered through Sigma Software Group.',
    featured: false,
    workInProgress: true,
    tags: ['react', 'javascript', 'ai', 'problem-solving', 'adaptability'],
    date: '2025-12-01',
    motivation:
      'Part of a platform migration: modernizing a mature product without breaking the workflows its customers rely on.',
    challenges: [
      'Moving roughly 20-30 screens and 15-20 workflows from legacy PHP to React',
      'Converting legacy PHP business rules into the new frontend architecture',
      'Writing the technical design of an FTPS-based recovery feature and breaking it into engineering tasks',
    ],
    learnings: [
      'Legacy modernization is mostly about recovering undocumented business rules',
      'Agentic development, context engineering and MCP-assisted UI validation speed up exploration, implementation and reviews when used with clear guardrails',
      'Built an AI-assisted localization workflow connected to an external translations repository, with documentation for the team',
    ],
    details: {
      Overview:
        'A client project (via Sigma Software Group): migrating the legacy PHP interface of a backup and recovery application to React, including support for the beta release for existing users.',
      'Tech Stack':
        'React, JavaScript, Redux Toolkit, Material UI, REST APIs, Jest, React Testing Library, Cursor, MCP.',
    },
  },
  {
    slug: 'the-easy-list',
    title: 'The Easy List',
    description:
      'A modern, real-time collaborative list application built with Next.js 15, Supabase, and Drizzle ORM, now serving over 3,000 users.',
    demoUrl: 'https://theeasylist.vercel.app',
    repoUrl: 'https://github.com/alisonbessa/easy-list',
    repoPrivate: true,
    featured: true,
    workInProgress: false,
    tags: ['app', 'typescript', 'ai', 'collaboration', 'productivity', 'problem-solving', 'nextjs'],
    date: '2024-12-01',
    thumbnail: '/images/projects/the-easy-list-thumb.png',
    motivation:
      'To create a seamless collaborative list-making experience with real-time features and AI assistance.',
    challenges: [
      'Implementing real-time collaboration with multiple users editing simultaneously',
      'Integrating AI-powered list generation with natural language processing',
      'Building a robust drag-and-drop system for categories and items',
      'Ensuring accessibility compliance (WCAG 2.1 AA) while maintaining modern UX',
    ],
    learnings: [
      'Mastered real-time database subscriptions with Supabase for live collaboration',
      'Gained experience with Google Generative AI integration for smart content creation',
      'Developed skills in building accessible, keyboard-navigable interfaces',
      'Learned to implement comprehensive internationalization (i18n) systems',
    ],
    details: {
      'Detailed Overview':
        'The Easy List is a collaborative list application that enables multiple users to create, edit, and organize lists in real-time. It features AI-powered list generation, drag-and-drop categorization, template systems, and anonymous collaboration capabilities. Since launch, it has grown to serve over 3,000 users.',
      'Key Features':
        'Real-time collaboration with live member presence, AI-powered list generation using Google Gemini, drag-and-drop organization between categories, template system for reusable lists, batch operations for multiple items, full internationalization (EN/PT-BR), accessibility-first design with keyboard navigation, and anonymous or authenticated usage.',
      'Technical Highlights':
        'Built with Next.js 15 App Router, Supabase for real-time database and authentication, Drizzle ORM for type-safe queries, shadcn/ui components with Tailwind CSS, and comprehensive testing with CI/CD pipeline through GitHub Actions.',
    },
  },
  {
    slug: 'walle',
    title: 'Walle',
    demoUrl: 'https://usewalle.com',
    description:
      'A collaborative financial planning platform that helps couples and families manage their budgets together, with an AI-powered WhatsApp assistant.',
    repoUrl: 'https://github.com/alisonbessa/bluemoon',
    repoPrivate: true,
    featured: true,
    workInProgress: false,
    tags: ['dashboard', 'app', 'typescript', 'ai', 'problem-solving', 'critical-thinking', 'nextjs'],
    date: '2025-11-27',
    thumbnail: '/images/projects/walle-thumb.png',
    motivation:
      'To make household and shared financial planning simple and collaborative for couples and families, meeting people where they already are, including on WhatsApp.',
    challenges: [
      'Designing a collaborative budgeting model where couples and families share categories, income, and expenses with proper roles and permissions',
      'Building a WhatsApp and Telegram assistant with AI-powered intent recognition so users can log transactions in natural language',
      'Handling subscriptions, trials, and billing securely with Stripe, including a card-less trial flow',
      'Orchestrating scheduled background jobs (Inngest) for recurring transactions, reminders, and monthly rollovers',
    ],
    learnings: [
      'Deepened experience architecting a full-stack Next.js 16 / React 19 app with a type-safe Drizzle + PostgreSQL (Neon) data layer',
      'Learned to design resilient messaging integrations, including a dual-number WhatsApp migration strategy with safe rollback',
      'Gained practical experience with production concerns like Stripe billing, Sentry monitoring, and LGPD-aware analytics and consent',
    ],
    details: {
      'Detailed Overview':
        'Walle is a collaborative financial planning platform for couples and families. It lets people organize shared income, expenses, and budgets together, track goals, and get insights through reports, with an AI-powered WhatsApp assistant so logging a transaction is as easy as sending a message.',
      'Key Features':
        'Key features include shared budgeting groups with role-based permissions, category budgets and goal tracking, interactive financial reports and charts, subscription plans with a card-less trial (Stripe), scheduled background jobs for recurring items and reminders (Inngest), transactional emails (Resend), and a WhatsApp/Telegram assistant with natural-language intent recognition powered by Gemini.',
      'Technical Highlights':
        'Built with Next.js 16 App Router and React 19, Neon PostgreSQL with Drizzle ORM, NextAuth for authentication, Stripe for payments, Inngest for scheduled jobs, Resend for email, and Sentry for monitoring, using shadcn/ui components with Tailwind CSS.',
    },
  },
  {
    slug: 'my-portfolio',
    title: 'My Portfolio',
    demoUrl: 'https://alisonbessa.dev',
    description:
      'My personal developer portfolio website built with a modern web stack to showcase projects and skills.',
    repoUrl: 'https://github.com/alisonbessa/my-portfolio',
    repoPrivate: false,
    featured: false,
    workInProgress: false,
    tags: ['app', 'typescript', 'css', 'creativity', 'problem-solving', 'time-management'],
    date: '2025-07-01',
    thumbnail: '/images/projects/my-portfolio-thumb.png',
    motivation:
      'To create a professional online presence and demonstrate my skills through a customized portfolio site. Also, to share the codebase with people who want to create their own portfolio websites.',
    challenges: [
      'Ensuring the site design is fully responsive and includes a toggleable dark/light theme for better UX',
      'Structuring the project for easy content management (using a data-driven approach) so updates can be made without touching layout code',
    ],
    learnings: [
      'Learned to enforce code quality and standards using tools like ESLint, Prettier, Husky, and lint-staged',
      'Strengthened skills in building responsive UIs and theme toggles with Next.js and Tailwind CSS',
      'The idea was to create a base where it would be simple for other people to edit the code to create their own portfolio.',
    ],
    details: {
      Overview:
        'My Portfolio is a personal website to showcase my projects, skills, and experience. Built with Next.js, TypeScript, and Tailwind CSS, it features a modern design and is easily customizable and maintainable.',
      'Key Features':
        'Key features include a mobile-responsive layout with a dark/light theme toggle for user preference, a structured content management system (using a dedicated data folder) for easy updates, and integration of pre-commit tools to maintain high code quality standards.',
      'Next features':
        'The next tasks are to improve the codebase and add more features to the portfolio. Also, to add a blog section to the portfolio.',
    },
  },
];
