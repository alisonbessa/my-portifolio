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
    slug: 'hivebudget',
    title: 'HiveBudget',
    description: 'A collaborative budgeting platform for personal and group finance management.',
    repoUrl: 'https://github.com/alisonbessa/hivebudget',
    repoPrivate: true,
    featured: true,
    tags: ['dashboard', 'app', 'typescript', 'problem-solving'],
    date: '2024-12-15',
    thumbnail: '/images/projects/hivebudget-thumb.png',
    motivation: 'To make personal and group financial planning more collaborative and effective.',
    challenges: [
      'Implementing a robust role-based access control system for multi-user collaboration',
      'Integrating external services (Stripe for payments, AWS S3 storage, etc.) into the budgeting workflow',
    ],
    learnings: [
      'Gained experience with advanced Next.js features (App Router, NextAuth) and type-safe ORM (Drizzle) in a full-stack application',
      'Learned best practices for secure handling of financial data and third-party API integrations',
    ],
    details: {
      Overview:
        'HiveBudget is a collaborative financial planning platform for managing personal or group finances through shared groups called "Hives". It allows users to organize income, expenses, and budgets collectively with features like role-based access control and interactive financial reports.',
      'Key Features':
        'Key features include collaborative budgeting groups with role-based permissions (Owner, Admin, Editor, Viewer), intelligent transaction categorization, budgeting goals tracking, detailed charts for financial analysis, and secure authentication with multiple sign-in options.',
    },
  },
  {
    slug: 'intelimeet',
    title: 'InteliMeet',
    description:
      'An intelligent meeting room app with AI-driven Q&A assistance and audio recording features.',
    repoUrl: 'https://github.com/alisonbessa/intelimeet-web',
    repoPrivate: true,
    featured: false,
    tags: ['ai', 'app', 'typescript', 'problem-solving', 'creativity', 'critical-thinking'],
    date: '2024-08-01',
    thumbnail: '/images/projects/intelimeet-thumb.png',
    motivation:
      'To enhance virtual meetings by providing an AI assistant that can answer questions in real time and record meeting discussions.',
    challenges: [
      'Integrating an AI Q&A system that provides accurate real-time answers during meetings',
      'Managing real-time audio recording and playback in the browser without disrupting the user experience',
    ],
    learnings: [
      'Deepened knowledge of integrating AI services (NLP models) into web applications for domain-specific Q&A',
      'Learned how to build interactive, real-time features (like live Q&A and audio capture) with responsive UI/UX considerations',
    ],
    details: {
      Overview:
        'InteliMeet is a web application for intelligent virtual meetings. Each meeting room provides a Q&A interface where participants can ask questions and receive answers from an AI assistant in real time. The platform also allows recording the meeting audio for future reference.',
      'Key Features':
        "Key features include the ability to create dedicated meeting rooms, an AI-driven Q&A system that generates answers to participants' questions on the fly, and an option to record and replay meeting audio for archiving discussions.",
    },
  },
  {
    slug: 'my-portfolio',
    title: 'My Portfolio',
    description:
      'My personal developer portfolio website built with a modern web stack to showcase projects and skills.',
    repoUrl: 'https://github.com/alisonbessa/my-portfolio',
    repoPrivate: false,
    featured: false,
    tags: ['app', 'javascript', 'typescript', 'css', 'creativity', 'problem-solving'],
    date: '2025-07-01',
    thumbnail: '/images/projects/my-portfolio-thumb.png',
    motivation:
      'To create a professional online presence and demonstrate my skills through a customized portfolio site.',
    challenges: [
      'Ensuring the site design is fully responsive and includes a toggleable dark/light theme for better UX',
      'Structuring the project for easy content management (using a data-driven approach) so updates can be made without touching layout code',
    ],
    learnings: [
      'Learned to enforce code quality and standards using tools like ESLint, Prettier, Husky, and lint-staged',
      'Strengthened skills in building responsive UIs and theme toggles with Next.js and Tailwind CSS',
    ],
    details: {
      Overview:
        'My Portfolio is a personal website to showcase my projects, skills, and experience. Built with Next.js, TypeScript, and Tailwind CSS, it features a modern design and is easily customizable and maintainable.',
      'Key Features':
        'Key features include a mobile-responsive layout with a dark/light theme toggle for user preference, a structured content management system (using a dedicated data folder) for easy updates, and integration of pre-commit tools to maintain high code quality standards.',
    },
  },
];
