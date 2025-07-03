export const careerTitle = 'Professional Experience';
export const careerSubtitle =
  'Professional experiences, roles, and main achievements throughout my career.';

export type CareerEntry = {
  slug: string;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  companyLinkedin: string;
};

export const career: CareerEntry[] = [
  {
    slug: 'radix-senior-frontend',
    title: 'Senior Front-End Engineer',
    company: 'Radix (Engineering & Software)',
    period: 'Mar 2025 - Present',
    description:
      'Led development of a modern industrial web application using Next.js and Material UI, optimizing performance and scalability.',
    highlights: [
      'Integrated Cognite SDK for real-time data visualization and advanced assets monitoring, and SSO authentication with MSAL and Azure AD, ensuring secure enterprise access.',
      'Maintained a robust test suite using Jest, React Testing Library, and Playwright, integrated with CI/CD pipelines.',
    ],
    companyLinkedin: 'https://www.linkedin.com/company/radixeng/',
  },
  {
    slug: 'seedz-senior-frontend',
    title: 'Senior Front-End Engineer',
    company: 'Seedz (AgriTech Company)',
    period: 'May 2023 - Dec 2024',
    description:
      'Led frontend efforts in a new AI-powered geospatial dashboard, visualizing satellite data to support high-stakes agricultural decisions.',
    highlights: [
      'Designed and implemented scalable SSR pages using Remix and a custom design system, improving initial page load by ~35%.',
      'Built reusable UI components and tables handling large datasets, with a strong focus on UX and performance.',
      'Created and documented a frontend boilerplate with testing setup (Jest, RTL), accelerating onboarding of new developers.',
      'Partnered with backend engineers to refine API responses, influencing data structures for better frontend consumption.',
    ],
    companyLinkedin: 'https://www.linkedin.com/company/seedzbr/',
  },
  {
    slug: 'loka-frontend',
    title: 'Front-End Engineer',
    company: 'Loka (US-based Consultancy)',
    period: 'Jul 2021 - Apr 2023',
    description:
      'Delivered complex dashboards and data-driven UIs for fintech and healthtech clients using React and Material UI.',
    highlights: [
      'Worked closely with designers and product teams to iterate quickly on user interfaces and component libraries.',
      'Acted as frontend lead in 0 to 1 product initiatives, helping define architecture, state management, and API interfaces.',
      'Strong integration with custom APIs and large datasets, advising backend teams on frontend requirements.',
      'Mentored junior developers and led code reviews in a collaborative, async-first environment.',
    ],
    companyLinkedin: 'https://www.linkedin.com/company/loka/',
  },
  {
    slug: 'webjump-frontend',
    title: 'Front-End Developer',
    company: 'Webjump (E-Commerce Consultancy)',
    period: 'Mar 2020 - Jul 2021',
    description:
      'Migrated legacy systems to PWA Studio with React, improving performance and mobile usability.',
    highlights: [
      'Integrated third-party payment systems and streamlined checkout UIs.',
      'Helped create a scalable design system adopted across multiple e-commerce clients.',
      'Worked on projects implementing the new PWA Studio architecture for Magento.',
    ],
    companyLinkedin: 'https://www.linkedin.com/company/webjump/',
  },
  {
    slug: 'ctrlplay-manager',
    title: 'Franchise Partner and Manager',
    company: 'Ctrl+Play (Coding School for Youngers and Kids)',
    period: 'Nov 2016 - Mar 2020',
    description:
      'Managed daily operations, administrative tasks, and educational planning for the unit.',
    highlights: [
      'Taught classes on programming logic, robotics,game development, and introductory web development.',
      'Adapted in-person classes to an online format during the pandemic, ensuring continuity and engagement.',
      'Built partnerships with local schools and organizations to increase visibility and drive student enrollment.',
    ],
    companyLinkedin: 'https://www.linkedin.com/company/escolactrlplay/',
  },
];
