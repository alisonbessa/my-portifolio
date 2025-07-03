export const careerTitle = 'Professional Journey';
export const careerSubtitle =
  'Professional experiences, roles, and main achievements throughout the career.';

export type CareerEntry = {
  slug: string;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export const career: CareerEntry[] = [
  {
    slug: 'frontend-lead',
    title: 'Front-End Lead',
    company: 'TechNova Solutions',
    period: 'Jan 2024 – Present',
    description: 'Leading a team to build scalable web applications for enterprise clients.',
    highlights: [
      'Architected a design system used across multiple products',
      'Mentored junior developers in React and TypeScript',
      'Improved performance of legacy apps by 40%',
    ],
  },
  {
    slug: 'backend-engineer',
    title: 'Backend Engineer',
    company: 'CloudSync Inc.',
    period: 'Aug 2021 – Dec 2023',
    description: 'Developed APIs and microservices for cloud-based file storage solutions.',
    highlights: [
      'Implemented authentication and authorization modules',
      'Optimized database queries for large-scale data',
      'Collaborated with DevOps to automate deployments',
    ],
  },
];
