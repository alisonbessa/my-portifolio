export const skillsTitle = 'Skills';
export const skillsSubtitle = 'Main technologies, frameworks, and technical competencies.';

export type Skill = {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  category?: string;
};

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 'advanced', category: 'Frontend' },
  { name: 'Next.js', level: 'advanced', category: 'Frontend' },
  { name: 'TypeScript', level: 'advanced', category: 'Frontend' },
  { name: 'JavaScript', level: 'advanced', category: 'Frontend' },

  // Styling
  { name: 'Tailwind CSS', level: 'advanced', category: 'Styling' },
  { name: 'Material UI', level: 'advanced', category: 'Styling' },
  { name: 'ShadCN UI', level: 'advanced', category: 'Styling' },
  { name: 'class-variance-authority', level: 'advanced', category: 'Styling' },
  { name: 'HTML5', level: 'advanced', category: 'Styling' },
  { name: 'CSS3', level: 'advanced', category: 'Styling' },
  { name: 'Sass', level: 'advanced', category: 'Styling' },

  // Architecture & Tooling
  { name: 'Component System Design', level: 'advanced', category: 'Architecture & Tooling' },
  { name: 'Design Tokens', level: 'advanced', category: 'Architecture & Tooling' },
  { name: 'ESLint', level: 'advanced', category: 'Architecture & Tooling' },
  { name: 'Prettier', level: 'advanced', category: 'Architecture & Tooling' },
  { name: 'Husky', level: 'advanced', category: 'Architecture & Tooling' },
  { name: 'Storybook', level: 'intermediate', category: 'Architecture & Tooling' },

  // Testing
  { name: 'Vitest', level: 'intermediate', category: 'Testing' },
  { name: 'Jest', level: 'intermediate', category: 'Testing' },
  { name: 'React Testing Library', level: 'intermediate', category: 'Testing' },
  { name: 'Playwright', level: 'beginner', category: 'Testing' },

  // Backend & APIs
  { name: 'Node.js', level: 'intermediate', category: 'Backend' },
  { name: 'Express', level: 'beginner', category: 'Backend' },
  { name: 'PostgreSQL', level: 'intermediate', category: 'Backend' },
  { name: 'RESTful APIs', level: 'advanced', category: 'Backend' },
  { name: 'GraphQL (Apollo Client)', level: 'intermediate', category: 'Backend' },

  // Auth & Security
  { name: 'MSAL / Azure SSO', level: 'intermediate', category: 'Auth & Security' },
  { name: 'JWT', level: 'intermediate', category: 'Auth & Security' },
  { name: 'OAuth 2.0', level: 'intermediate', category: 'Auth & Security' },
  { name: 'RBAC', level: 'intermediate', category: 'Auth & Security' },

  // DevOps & Deployment
  { name: 'Vercel', level: 'advanced', category: 'DevOps & Deployment' },
  { name: 'Netlify', level: 'advanced', category: 'DevOps & Deployment' },
  { name: 'Azure Pipelines', level: 'intermediate', category: 'DevOps & Deployment' },
  { name: 'GitHub Actions', level: 'intermediate', category: 'DevOps & Deployment' },
  { name: 'Docker', level: 'beginner', category: 'DevOps & Deployment' },

  // Product & Analytics
  { name: 'Statsig', level: 'beginner', category: 'Product & Analytics' },
  { name: 'Flagsmith', level: 'beginner', category: 'Product & Analytics' },
  { name: 'Google Analytics', level: 'intermediate', category: 'Product & Analytics' },

  // Tools & Collaboration
  { name: 'Git', level: 'advanced', category: 'Collaboration' },
  { name: 'Jira', level: 'intermediate', category: 'Collaboration' },
  { name: 'Linear', level: 'intermediate', category: 'Collaboration' },
  { name: 'Figma', level: 'intermediate', category: 'Collaboration' },
];
