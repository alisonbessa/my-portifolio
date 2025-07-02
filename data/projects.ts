export const projectsTitle = 'Projects';
export const projectsSubtitle =
  'A selection of public and private projects, built with different stacks and purposes.';

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
  repoPrivate?: boolean;
  featured?: boolean;
  tags?: string[];
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
    stack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    demoUrl: 'https://taskmasterpro.app',
    repoUrl: 'https://github.com/example/taskmaster-pro',
    repoPrivate: false,
    featured: true,
    tags: ['Productivity', 'Collaboration', 'App'],
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
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    repoPrivate: true,
    featured: false,
    tags: ['Weather', 'Dashboard'],
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
