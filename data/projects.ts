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
  details?: string;
};

export const projects: Project[] = [
  {
    slug: 'taskmaster-pro',
    title: 'TaskMaster Pro',
    description: 'A productivity app for managing daily tasks and projects collaboratively.',
    demoUrl: 'https://taskmasterpro.app',
    repoUrl: 'https://github.com/example/taskmaster-pro',
    repoPrivate: false,
    featured: true,
    tags: [
      'productivity',
      'collaboration',
      'app',
      'javascript',
      'typescript',
      'communication',
      'problem-solving',
      'teamwork',
    ],
    date: '2024-05-10',
    thumbnail: '/images/projects/taskmaster-thumb.png',
    motivation: 'To help teams and individuals organize their work and boost productivity.',
    challenges: [
      'Designing a real-time collaborative editing experience',
      'Ensuring data consistency across devices',
    ],
    learnings: [
      'Deepened knowledge of WebSockets and real-time data flows',
      'Improved UI/UX for productivity tools',
    ],
    details:
      'TaskMaster Pro allows users to create, assign, and track tasks in real time, with advanced filtering and analytics.',
  },
  {
    slug: 'weatherly',
    title: 'Weatherly',
    description: 'A weather dashboard providing real-time forecasts and climate analytics.',
    repoPrivate: true,
    featured: false,
    tags: [
      'weather',
      'dashboard',
      'javascript',
      'css',
      'adaptability',
      'resilience',
      'critical-thinking',
    ],
    date: '2023-09-15',
    thumbnail: '/images/projects/weatherly-thumb.png',
    motivation: 'To make weather data more accessible and actionable for everyday users.',
    challenges: [
      'Integrating multiple third-party weather APIs',
      'Handling inconsistent data formats',
    ],
    learnings: ['API normalization strategies', 'Building robust error handling for external data'],
    details:
      'Weatherly aggregates weather data from several sources, providing users with accurate forecasts and climate trends.',
  },
];
