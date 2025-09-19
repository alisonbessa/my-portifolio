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
    slug: 'the-easy-list',
    title: 'The Easy List',
    description:
      'A modern, real-time collaborative list application built with Next.js 15, Supabase, and Drizzle ORM.',
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
        'The Easy List is a collaborative list application that enables multiple users to create, edit, and organize lists in real-time. It features AI-powered list generation, drag-and-drop categorization, template systems, and anonymous collaboration capabilities.',
      'Key Features':
        'Real-time collaboration with live member presence, AI-powered list generation using Google Gemini, drag-and-drop organization between categories, template system for reusable lists, batch operations for multiple items, full internationalization (EN/PT-BR), accessibility-first design with keyboard navigation, and anonymous or authenticated usage.',
      'Technical Highlights':
        'Built with Next.js 15 App Router, Supabase for real-time database and authentication, Drizzle ORM for type-safe queries, shadcn/ui components with Tailwind CSS, and comprehensive testing with CI/CD pipeline through GitHub Actions.',
    },
  },
  {
    slug: 'hivebudget',
    title: 'HiveBudget',
    demoUrl: 'https://hivebudget.com',
    description: 'A collaborative budgeting platform for personal and group finance management.',
    repoUrl: 'https://github.com/alisonbessa/hivebudget',
    repoPrivate: true,
    featured: true,
    workInProgress: true,
    tags: ['dashboard', 'app', 'typescript', 'problem-solving', 'critical-thinking', 'nextjs'],
    date: '2024-12-15',
    thumbnail: '/images/projects/hivebudget-thumb.png',
    motivation: 'To make personal and group financial planning more collaborative and effective.',
    challenges: [
      'Implementing a robust role-based access control system for multi-user collaboration',
      'Integrating external services (Stripe for payments, Resend for emails, etc.) into the budgeting workflow',
      'Integrating and making all the features communicate with each other was a challenging task',
    ],
    learnings: [
      'Gained experience with advanced Next.js features (App Router, NextAuth) and type-safe ORM (Drizzle) in a full-stack application',
      'Learned best practices for secure handling of financial data and third-party API integrations',
      'Even though I had made a great plan before starting the project, I should have used smaller and more specific milestones',
    ],
    details: {
      'Detailed Overview':
        'HiveBudget is a collaborative financial planning platform for managing personal or group finances through shared groups called "Hives". It allows users to organize income, expenses, and budgets collectively with features like role-based access control and interactive financial reports.',
      'Work in progress':
        'I am currently working on some details of the HiveBudget application to make it public and available for everyone to use. Meanwhile, I would be happy to show you a demo of the application.',
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
    repoPrivate: false,
    featured: false,
    workInProgress: true,
    tags: ['ai', 'typescript', 'problem-solving', 'creativity', 'critical-thinking', 'nextjs'],
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
      'Next features':
        'The next tasks are to improve the audio chunk creation parameters and the parameters used by the AI. Create a speaker area where they have a better view of the questions and can answer them. Create an authentication system for better user control.',
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
