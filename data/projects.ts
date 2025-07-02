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
  },
];
