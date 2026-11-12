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
    slug: 'sigma-senior-frontend',
    title: 'Senior Frontend Engineer',
    company: 'Sigma Software Group',
    period: 'Dec 2025 - Present',
    description:
      'Modernizing an enterprise backup and recovery application platform migration, moving legacy PHP interfaces to React.',
    highlights: [
      'Migrated roughly 20-30 screens and 15-20 workflows from legacy PHP to React.',
      'Wrote the technical design for an FTPS-based recovery feature, converting legacy PHP business rules into the new frontend architecture and breaking the work into engineering tasks.',
      'Built an AI-assisted localization workflow connected to an external translations repository, with supporting documentation and developer workflows.',
      'Used agentic development, context engineering, and MCP-assisted UI validation for codebase exploration, implementation, and reviews; helped with the beta release for existing users.',
      'Stack: React, JavaScript, Redux Toolkit, Material UI, REST APIs, Jest, React Testing Library, Cursor, MCP.',
    ],
    companyLinkedin: 'https://www.linkedin.com/company/sigma-software-page/',
  },
  {
    slug: 'radix-senior-software-engineer',
    title: 'Senior Software Engineer',
    company: 'Radix',
    period: 'Mar 2025 - Dec 2025',
    description:
      'Sole frontend engineer on a new geospatial digital-twin data platform for a major energy company, choosing the architecture and building the application from scratch.',
    highlights: [
      'Delivered interactive maps, 3D asset visualization, coordinate-reference transformations, unit normalization, vendor data integration, and role-based interfaces.',
      'Worked with backend and geospatial engineers on API contracts and complex spatial workflows, and supported gradual internal adoption.',
      'Industrial Asset Monitoring (Cognite): built the frontend from inception for monitoring equipment health from industrial sensor data, owning architectural decisions.',
      'Integrated the Cognite SDK with Next.js for data acquisition and dashboards, and implemented authentication with MSAL and Azure AD.',
      'Applied AI-assisted and agentic coding workflows (Claude Code) to code exploration, feature development, debugging, and refactoring.',
      'Stack: React, Next.js, TypeScript, TanStack Query, Mapbox GL, Cognite SDK, Material UI.',
    ],
    companyLinkedin: 'https://www.linkedin.com/company/radixeng/',
  },
  {
    slug: 'seedz-senior-frontend',
    title: 'Senior Frontend Engineer',
    company: 'Seedz (AgriTech Company)',
    period: 'May 2023 - Dec 2024',
    description:
      'Built satellite-imagery and NDVI geospatial interfaces to support high-stakes agricultural decisions.',
    highlights: [
      'Developed geospatial interfaces using Remix, React, Mapbox GL, Turf.js, and GeoJSON.',
      'Redesigned the frontend architecture and property-selection UX around preprocessed GeoJSON, cutting map calculation time from minutes to under five seconds.',
      'Improved Remix SSR page loading by about 35% and developed reusable components and data-intensive interfaces.',
      'Served as the technical reference for complex calculations and business logic, drawing on a mechanical engineering background.',
    ],
    companyLinkedin: 'https://www.linkedin.com/company/seedzbr/',
  },
  {
    slug: 'loka-frontend',
    title: 'Frontend Engineer',
    company: 'Loka (US-based Consultancy)',
    period: 'Jul 2021 - Apr 2023',
    description:
      'Worked on four software projects for US-based clients in fintech, healthcare, and digital products.',
    highlights: [
      'Developed dashboards, data visualizations, virtualized lists, and complex multi-step healthcare forms with dependent validation and Redux-based state management.',
      'Contributed to a blockchain-based digital ticketing product aimed at reducing counterfeit tickets and unauthorized resale.',
      'Built Next.js interfaces using SSG and ISR, and took part in frontend design decisions and regular code reviews.',
      'Stack: React, Redux Toolkit, Material UI, Formik, TanStack Query, Recharts, Next.js, Jest, React Testing Library.',
    ],
    companyLinkedin: 'https://www.linkedin.com/company/loka/',
  },
  {
    slug: 'webjump-frontend',
    title: 'Frontend Developer',
    company: 'Webjump (E-Commerce Consultancy)',
    period: 'Mar 2020 - Jul 2021',
    description:
      'Built B2B e-commerce storefronts from scratch on Adobe PWA Studio and Magento 2, using React and Apollo GraphQL.',
    highlights: [
      'Implemented a credit-card payment gateway integration and complex checkout interfaces.',
      'Extended a company-wide design system with reusable React, Styled Components, and Storybook components, contributing to an approximately 35% reduction in UI development time reported by the Scrum Master team.',
    ],
    companyLinkedin: 'https://www.linkedin.com/company/webjump/',
  },
  {
    slug: 'ctrlplay-manager',
    title: 'Unit Manager & Instructor',
    company: 'Ctrl+Play (Coding School for Youngers and Kids)',
    period: 'Nov 2016 - Apr 2020',
    description:
      'Managed operations and academic programs at a coding and robotics school.',
    highlights: [
      'Taught programming fundamentals, web development, and robotics.',
    ],
    companyLinkedin: 'https://www.linkedin.com/company/escolactrlplay/',
  },
];
