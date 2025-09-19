export type SEOConfig = {
  title: string;
  description: string;
  url: string;
  siteName: string;
  author: string;
  keywords: string[];
  locale: string;
  type: 'website' | 'profile';
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  twitter: {
    card: 'summary' | 'summary_large_image';
    site?: string;
    creator?: string;
  };
  robots: string;
  canonical?: string;
};

export const defaultSEO: SEOConfig = {
  title: 'Alison Bessa - Full Stack Developer',
  description:
    'Experienced Full Stack Developer specializing in React, TypeScript, and Next.js. Building scalable web applications and digital solutions for startups and B2B companies. Expert in modern JavaScript frameworks, API development, and responsive design.',
  url: 'https://alisonbessa.dev',
  siteName: 'Alison Bessa Portfolio',
  author: 'Alison Bessa',
  keywords: [
    'Alison Bessa',
    'Full Stack Developer',
    'React Developer',
    'TypeScript Developer',
    'Next.js Developer',
    'Node.js Developer',
    'JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Web Development',
    'React.js',
    'Software Developer',
    'Desenvolvedor Full Stack',
    'Desenvolvedor React',
    'Programador JavaScript',
    'Portfolio',
    'São Paulo Developer',
    'Brazil Developer',
    'Freelancer Developer',
    'Tech Consultant',
    'Startup Developer',
    'B2B Developer',
    'SaaS Developer',
    'API Development',
    'Database Design',
    'Mobile Responsive',
    'UI/UX Implementation',
  ],
  locale: 'en_US',
  type: 'profile',
  image: {
    url: '/profile1x1.png',
    width: 400,
    height: 400,
    alt: 'Alison Bessa - Full Stack Developer',
  },
  twitter: {
    card: 'summary',
  },
  robots: 'index, follow',
};

export const pageSEO = {
  home: {
    title: 'Alison Bessa - Full Stack Developer',
    description:
      'Full Stack Developer specialized in React, TypeScript and Next.js. Experience with startups, B2B products and scalable solutions.',
    keywords: [...defaultSEO.keywords, 'portfolio', 'home', 'introduction'],
  },
  about: {
    title: 'About Me - Alison Bessa',
    description:
      'Get to know my personal and professional journey. Experiences that shaped my career as a developer and entrepreneur.',
    keywords: [...defaultSEO.keywords, 'about', 'biography', 'personal story', 'experiences'],
  },
  skills: {
    title: 'Technical Skills - Alison Bessa',
    description:
      'My technical competencies in web development, modern frameworks and productivity tools.',
    keywords: [
      ...defaultSEO.keywords,
      'skills',
      'technical competencies',
      'technologies',
      'expertise',
    ],
  },
  projects: {
    title: 'Projects - Alison Bessa',
    description:
      'Portfolio of developed projects. Web solutions, full-stack applications and open source contributions.',
    keywords: [...defaultSEO.keywords, 'projects', 'portfolio', 'work', 'development'],
  },
  career: {
    title: 'Professional Career - Alison Bessa',
    description:
      'My professional journey, company experiences and contributions to impactful projects.',
    keywords: [...defaultSEO.keywords, 'career', 'professional experience', 'work', 'history'],
  },
  contact: {
    title: 'Contact - Alison Bessa',
    description:
      'Get in touch for collaboration opportunities, freelance work or professional networking.',
    keywords: [...defaultSEO.keywords, 'contact', 'email', 'networking', 'collaboration'],
  },
};

export function generatePageSEO(
  page: keyof typeof pageSEO,
  customData?: Partial<SEOConfig>,
): SEOConfig {
  const pageData = pageSEO[page];
  return {
    ...defaultSEO,
    ...pageData,
    ...customData,
    url: customData?.url || `${defaultSEO.url}/${page === 'home' ? '' : page}`,
  };
}
