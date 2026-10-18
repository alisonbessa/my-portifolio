export const projectsTitle = 'Projects';
export const projectsSubtitle =
  'Products I built and run end to end: talking to users, shipping, measuring, and iterating.';

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
  ai: {
    label: 'AI',
    color: 'bg-purple-200 text-purple-900',
    type: 'tech',
  },
  nextjs: {
    label: 'Next.js',
    color: 'bg-blue-200 text-blue-900',
    type: 'tech',
  },
  postgres: {
    label: 'PostgreSQL',
    color: 'bg-sky-200 text-sky-900',
    type: 'tech',
  },
  analytics: {
    label: 'Product Analytics',
    color: 'bg-amber-200 text-amber-900',
    type: 'tech',
  },
  automation: {
    label: 'Automation',
    color: 'bg-lime-200 text-lime-900',
    type: 'tech',
  },
  mcp: {
    label: 'MCP / Agents',
    color: 'bg-fuchsia-200 text-fuchsia-900',
    type: 'tech',
  },
  'product-thinking': {
    label: 'Product Thinking',
    color: 'bg-rose-200 text-rose-900',
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
  workInProgress?: boolean;
  tags?: Tag[];
  date: string;
  thumbnail?: string;
  motivation?: string;
  challenges?: string[];
  learnings?: string[];
  details?: { [section: string]: string };
};

export const projects: Project[] = [
  {
    slug: 'the-easy-list',
    title: 'The Easy List',
    description:
      'A real-time collaborative list app (shopping, trips, parties) that anyone can edit from a shared link, with no sign-up. 2,500+ lists created in five months with zero marketing.',
    demoUrl: 'https://theeasylist.com',
    repoUrl: 'https://github.com/alisonbessa/easy-list',
    repoPrivate: true,
    featured: true,
    workInProgress: false,
    tags: [
      'app',
      'typescript',
      'nextjs',
      'postgres',
      'analytics',
      'ai',
      'product-thinking',
      'collaboration',
      'problem-solving',
    ],
    date: '2024-12-01',
    thumbnail: '/images/projects/the-easy-list-thumb.png',
    motivation:
      'Shared lists should be as easy as sending a link. I wanted a list anyone in a group chat could open and edit together, instantly, without creating an account.',
    challenges: [
      'Rewriting the app as offline-first: IndexedDB (Dexie) as the single source of truth, a batched sync queue with exponential backoff, and temp-ID reconciliation, which removed duplicate items caused by realtime and optimistic updates racing each other',
      'Designing a privacy-friendly, first-party analytics pipeline (no cookies, no third parties, honors Do Not Track) with a whitelisted event schema covering the core funnel: list created, item added, share clicked, identity selected',
      'Fixing a confusing core interaction: users tapped items repeatedly without understanding them. I tried a checkbox variant, rejected it, and shipped tap to complete, hold to edit, plus a short tutorial and a contextual hint',
      'Reading the funnel honestly: 38% of lists stayed empty and 87% were active for only one week, so retention, not acquisition, became the priority',
    ],
    learnings: [
      'Measure the behaviour, not the feature: "confused" items (toggled 3 times in under 20 seconds) dropped from 7-8 to 3 per day after the interaction redesign, at similar volume',
      'Virality can be designed: shared lists average 4.1 members and the viral coefficient reached 0.83 without any paid acquisition',
      'Let data gate business decisions: I wrote a strategy memo that only allows a Pro plan once D30 retention passes 15%, and ranked monetization options by their impact on sharing',
      'Real user feedback beats assumptions: an in-app feedback form led to an onboarding redesign with one prompt at a time and the feedback button moved out of the way of the list input',
    ],
    details: {
      'Detailed Overview':
        'The Easy List is a collaborative list app I build and run solo. You create a list, share the link, and everyone edits it together in real time, as a guest or with an account. It grew organically to 2,500+ lists in about five months, with 22% of lists shared and an average of 4.1 members per shared list.',
      'Key Features':
        'Link sharing with guest editing and an identity picker, real-time sync, categories with drag-and-drop, batch add ("milk, bread, eggs" becomes three items) with autocomplete, swipe to complete or delete with undo, templates, a poll mode (used by 93 lists in two months without promotion), Secret Santa with exclusions, web push, PWA install, AI list generation with Google Gemini, and EN/PT-BR in the app plus localized landing pages.',
      'Product & Metrics':
        'I instrument every change and decide from the numbers: 62% of lists receive an item, 35% reach 3+ items, 22% are shared, D7 list retention is 13.5% and D30 is 4.2% (12.6% for users with an account). Current work focuses on the empty-list leak and on shortening the tutorial, which most people close at step one.',
      'Technical Highlights':
        'Next.js App Router and TypeScript, Supabase (Postgres, Realtime, Auth), Drizzle ORM with SQL migrations, offline-first sync with Dexie and a service worker, idempotency keys and rate limiting on server actions, shadcn/ui with Tailwind, GitHub Actions CI (lint, typecheck, build, security audit) and Playwright checks for mobile and desktop.',
    },
  },
  {
    slug: 'naguil',
    title: 'Naguil Ops Platform',
    description:
      'The operations platform running a kitchen-equipment repair business every day: orders, stock, billing, and Playwright robots that operate customer procurement portals. Now adding an MCP server and evals so the team can query it through an LLM.',
    repoPrivate: true,
    featured: true,
    workInProgress: true,
    tags: [
      'app',
      'typescript',
      'nextjs',
      'postgres',
      'automation',
      'mcp',
      'ai',
      'product-thinking',
      'problem-solving',
    ],
    date: '2026-06-01',
    motivation:
      'The back office was spending hours copying data by hand between spreadsheets and enterprise procurement portals. I mapped the real workflow with the team and built the system they now run the business on.',
    challenges: [
      'Automating fragile third-party portals (a Bubble app and SAP Ariba) with Playwright robots on a VPS, with safety locks: re-reading on-screen totals before saving, refusing tasks whose target changed, and verifying results after every write',
      'Reconciling imperfect external data, such as a portal that silently truncates ticket numbers, with a guarded matcher (exact prefix, value, and time window, single candidate only) and a review queue for duplicates',
      'Serializing concurrent robots against the same portal with file locks and a prioritized queue, so imports and writes never collide',
      'Exposing business data to an LLM safely: an MCP server with read-only tools and an eval suite to check answers before the team relies on them (in progress)',
    ],
    learnings: [
      'Product engineering for internal tools means shipping what removes the most manual work this week, then iterating from daily feedback',
      'Automation you cannot trust is worse than none, so every robot action is verified and every failure is visible',
      'Keeping business rules as pure, well-tested modules (1,388 tests) makes it safe to ship several PRs a week to a system people depend on',
    ],
    details: {
      'Detailed Overview':
        'A multi-tenant operations platform for a company that repairs and refurbishes commercial kitchen equipment for large restaurant chains. It is in daily production use and has gone through 440+ PRs since mid-2026, with a staging branch and owner sign-off before each release.',
      'Key Features':
        'Orders with duplicate detection and merge, procurement-portal integrations (CSV import every 15 minutes, a send queue for quotes, and approval tracking), stock with minimum levels and lead times, billing, margin and cost analysis, sales reports with Excel/CSV export, PDF purchase-order import, WhatsApp notifications, an audit trail, and delivery labels printed from a phone to a Bluetooth label printer with a QR code back to the order.',
      'Agents & LLMs':
        'Currently building an MCP server so the team can ask questions about orders, stock, and billing in natural language, backed by evals that check tool selection and answer accuracy against known cases.',
      'Technical Highlights':
        'Next.js 16 and React 19, Prisma on Neon serverless Postgres, Vitest (127 files, 1,388 tests), Playwright robots on a Linux VPS with scheduled modes and locks, pdf-lib and QR generation, Web Bluetooth printing, and a read-only database role for diagnostics. The code and customer data are private.',
    },
  },
  {
    slug: 'walle',
    title: 'Walle',
    demoUrl: 'https://usewalle.com',
    description:
      'A shared budgeting SaaS for couples and families, with a WhatsApp assistant that logs expenses from plain messages. Instrumented end to end with PostHog.',
    repoUrl: 'https://github.com/alisonbessa/bluemoon',
    repoPrivate: true,
    featured: true,
    workInProgress: false,
    tags: [
      'dashboard',
      'app',
      'typescript',
      'nextjs',
      'postgres',
      'analytics',
      'ai',
      'product-thinking',
      'critical-thinking',
    ],
    date: '2025-11-27',
    thumbnail: '/images/projects/walle-thumb.png',
    motivation:
      'Couples rarely manage money together because budgeting apps are built for one person. Walle makes it shared by default and meets people where they already are: on WhatsApp.',
    challenges: [
      'Designing a shared budgeting model for couples and families with roles and permissions across income, categories, goals, and reports',
      'Building a WhatsApp and Telegram assistant with Gemini intent recognition, plus deterministic fast paths that run before the AI so feedback and invites keep working even when a user hits the daily AI quota',
      'Migrating the WhatsApp number with both numbers running in parallel and a safe rollback path',
      'Running billing (Stripe subscriptions with a card-less trial), scheduled jobs (Inngest), retention emails (Resend), and monitoring (Sentry) as a one-person team',
    ],
    learnings: [
      'Pick one north-star metric that reflects real value: for Walle it is both partners logging in during the same week, tracked with a couple-activation funnel in PostHog (sign-up, WhatsApp connected, first transaction, partner invited, invite accepted)',
      'Model the unit you care about: since the value is per couple, I attach household properties to every event to analyse couples, not individuals',
      'Clean data first: I found that sign-up events were inflated by bots and a double-firing bug, fixed both, and added an anti-bot trap before trusting the funnel',
      'The data showed the bottleneck was acquisition, not conversion, which changed what I worked on next',
    ],
    details: {
      'Detailed Overview':
        'Walle (formerly HiveBudget) is a collaborative financial planning platform for couples and families in Brazil. People share income, expenses, and budgets, track goals, see reports, and log a transaction by simply texting the WhatsApp assistant something like "spent 49.30 at the market".',
      'Key Features':
        'Shared budgets with role-based permissions, category budgets and goals, interactive reports, a WhatsApp/Telegram assistant with natural-language logging and in-chat partner invites, subscription plans with a card-less trial, recurring transactions and monthly rollovers, and automated retention emails (day 3, 5, 7 and win-back) with dry-run mode and per-run caps.',
      'Product & Analytics':
        'PostHog dashboards for the activation funnel and the couple north-star metric, LGPD-aware consent and analytics, an inverted onboarding that gets users to the WhatsApp assistant first, and feedback and bug reports collected straight from the chat.',
      'Technical Highlights':
        'Next.js 16 App Router and React 19, Neon PostgreSQL with Drizzle ORM and hand-reviewed SQL migrations that are safe before or after deploy, NextAuth, Stripe, Inngest, Resend, Sentry, PostHog, and shadcn/ui with Tailwind. Every commit passes typecheck, lint, 1,000+ tests, and build.',
    },
  },
  {
    slug: 'intelimeet',
    title: 'InteliMeet',
    description:
      'An intelligent meeting room app with AI-driven Q&A assistance and audio recording features.',
    repoUrl: 'https://github.com/alisonbessa/intelimeet-web',
    repoPrivate: false,
    featured: false,
    workInProgress: true,
    tags: ['ai', 'typescript', 'problem-solving', 'creativity', 'critical-thinking', 'nextjs'],
    date: '2024-08-01',
    thumbnail: '/images/projects/intelimeet-thumb.png',
    motivation:
      'To enhance virtual meetings by providing an AI assistant that can answer questions in real time and record meeting discussions.',
    challenges: [
      'Integrating an AI Q&A system that provides accurate real-time answers during meetings',
      'Managing real-time audio recording and playback in the browser without disrupting the user experience',
    ],
    learnings: [
      'Deepened knowledge of integrating AI services (NLP models) into web applications for domain-specific Q&A',
      'Learned how to build interactive, real-time features (like live Q&A and audio capture) with responsive UI/UX considerations',
    ],
    details: {
      Overview:
        'InteliMeet is a web application for intelligent virtual meetings. Each meeting room provides a Q&A interface where participants can ask questions and receive answers from an AI assistant in real time. The platform also allows recording the meeting audio for future reference.',
      'Key Features':
        "Key features include the ability to create dedicated meeting rooms, an AI-driven Q&A system that generates answers to participants' questions on the fly, and an option to record and replay meeting audio for archiving discussions.",
      'Next features':
        'The next tasks are to improve the audio chunk creation parameters and the parameters used by the AI. Create a speaker area where they have a better view of the questions and can answer them. Create an authentication system for better user control.',
    },
  },
  {
    slug: 'my-portfolio',
    title: 'My Portfolio',
    demoUrl: 'https://alisonbessa.dev',
    description:
      'My personal developer portfolio website built with a modern web stack to showcase projects and skills.',
    repoUrl: 'https://github.com/alisonbessa/my-portfolio',
    repoPrivate: false,
    featured: false,
    workInProgress: false,
    tags: ['app', 'typescript', 'css', 'creativity', 'problem-solving', 'time-management'],
    date: '2025-07-01',
    thumbnail: '/images/projects/my-portfolio-thumb.png',
    motivation:
      'To create a professional online presence and demonstrate my skills through a customized portfolio site. Also, to share the codebase with people who want to create their own portfolio websites.',
    challenges: [
      'Ensuring the site design is fully responsive and includes a toggleable dark/light theme for better UX',
      'Structuring the project for easy content management (using a data-driven approach) so updates can be made without touching layout code',
    ],
    learnings: [
      'Learned to enforce code quality and standards using tools like ESLint, Prettier, Husky, and lint-staged',
      'Strengthened skills in building responsive UIs and theme toggles with Next.js and Tailwind CSS',
      'The idea was to create a base where it would be simple for other people to edit the code to create their own portfolio.',
    ],
    details: {
      Overview:
        'My Portfolio is a personal website to showcase my projects, skills, and experience. Built with Next.js, TypeScript, and Tailwind CSS, it features a modern design and is easily customizable and maintainable.',
      'Key Features':
        'Key features include a mobile-responsive layout with a dark/light theme toggle for user preference, a structured content management system (using a dedicated data folder) for easy updates, and integration of pre-commit tools to maintain high code quality standards.',
      'Next features':
        'The next tasks are to improve the codebase and add more features to the portfolio. Also, to add a blog section to the portfolio.',
    },
  },
];
