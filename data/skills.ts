export const skillsTitle = 'Skills';
export const skillsSubtitle = 'Main technologies, frameworks, and technical competencies.';

export type Skill = {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  category?: string;
};

export type SkillCategory = {
  slug: string;
  title: string;
  description: string;
  skills: Skill[];
  period: string;
};

export const skillCategories: SkillCategory[] = [
  {
    slug: 'core-frontend',
    title: 'Core Frontend',
    description:
      'Languages, frameworks, and libraries that form the foundation of modern web development',
    period: '2020 - Present',
    skills: [
      { name: 'React', level: 'advanced' },
      { name: 'Next.js', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
      { name: 'JavaScript', level: 'advanced' },
      { name: 'Remix', level: 'intermediate' },
      { name: 'RESTful APIs', level: 'advanced' },
      { name: 'GraphQL', level: 'intermediate' },
    ],
  },
  {
    slug: 'design-systems',
    title: 'Design Systems & UI',
    description: 'Creating consistent, scalable user interfaces and design systems',
    period: '2021 - Present',
    skills: [
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'Material UI', level: 'advanced' },
      { name: 'ShadCN UI', level: 'advanced' },
      { name: 'Component System Design', level: 'advanced' },
      { name: 'Design Tokens', level: 'advanced' },
      { name: 'Figma', level: 'intermediate' },
      { name: 'Storybook', level: 'intermediate' },
    ],
  },
  {
    slug: 'quality-assurance',
    title: 'Quality & Testing',
    description: 'Testing strategies, code quality, and development workflow optimization',
    period: '2021 - Present',
    skills: [
      { name: 'Jest', level: 'intermediate' },
      { name: 'React Testing Library', level: 'intermediate' },
      { name: 'Vitest', level: 'intermediate' },
      { name: 'Playwright', level: 'beginner' },
      { name: 'ESLint', level: 'advanced' },
      { name: 'Prettier', level: 'advanced' },
    ],
  },
  {
    slug: 'backend-integration',
    title: 'Backend & Integration',
    description: 'Server-side technologies and authentication systems',
    period: '2022 - Present',
    skills: [
      { name: 'Node.js', level: 'intermediate' },
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'Prisma', level: 'intermediate' },
      { name: 'MSAL / Azure SSO', level: 'intermediate' },
      { name: 'JWT', level: 'intermediate' },
      { name: 'OAuth 2.0', level: 'intermediate' },
    ],
  },
  {
    slug: 'soft-skills',
    title: 'Soft Skills',
    description: 'Communication, leadership, and collaboration abilities',
    period: 'Throughout career',
    skills: [
      { name: 'Team Leadership', level: 'advanced' },
      { name: 'Mentoring', level: 'advanced' },
      { name: 'Cross-functional Collaboration', level: 'advanced' },
      { name: 'Technical Communication', level: 'advanced' },
      { name: 'Problem Solving', level: 'advanced' },
      { name: 'Agile Methodologies', level: 'intermediate' },
    ],
  },
];

// Backward compatibility
export const skills: Skill[] = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({ ...skill, category: category.title })),
);
