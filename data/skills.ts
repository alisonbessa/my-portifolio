export const skillsTitle = 'Skills';
export const skillsSubtitle = 'Main technologies, frameworks, and technical competencies.';

export type Skill = {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  category?: string;
};

export const skills: Skill[] = [
  { name: 'Vue.js', level: 'advanced', category: 'Frontend' },
  { name: 'Angular', level: 'intermediate', category: 'Frontend' },
  { name: 'Python', level: 'advanced', category: 'Language' },
  { name: 'Django', level: 'intermediate', category: 'Backend' },
  { name: 'MySQL', level: 'intermediate', category: 'Database' },
  { name: 'Sass', level: 'advanced', category: 'Styling' },
];
