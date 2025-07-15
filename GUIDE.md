# Portfolio Boilerplate - Usage Guide

This guide provides detailed instructions on how to use, customize, and extend this portfolio boilerplate. Here you'll find everything you need to adapt the project to your needs.

## 📂 Project Structure

```
my-portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── components/      # Reusable components
│   │   ├── about-me/        # About me page
│   │   ├── projects/        # Project pages
│   │   ├── career/          # Career page
│   │   ├── skills/          # Skills page
│   │   ├── contact/         # Contact page
│   │   └── layout.tsx       # Main layout
│   └── lib/                 # Utilities and helpers
├── data/                    # Modular data layer
├── public/                  # Static files
├── docs/                    # Additional documentation
└── configuration files
```

## 🗂️ Modular Data Layer

All dynamic content is managed in the `/data` folder. Each file is typed and modular, making it easy to update or extend the portfolio content.

### Data Files

#### `home.ts` - Home Page

```typescript
export const homeTitle = 'Your Name';
export const homeSubtitle = 'Your professional tagline';
export const homeDescription = 'Your main presentation...';
export const homeKeywords = ['portfolio', 'projects', 'skills'];
export const resumeLink = 'https://link-to-your-resume.com';
```

#### `aboutMe.ts` - Personal Experiences

```typescript
export type AboutMeEntry = {
  slug: string; // URL-friendly identifier
  title: string; // Experience title
  images?: string[]; // Related images (optional)
  description: string; // Main description
  reflections: string[]; // Reflections and learnings
  tags: string[]; // Tags for categorization
};
```

#### `skills.ts` - Technical Skills

```typescript
export type Skill = {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  category?: string;
};

export type SkillCategory = {
  slug: string; // Unique identifier
  title: string; // Category name
  description: string; // Category description
  skills: Skill[]; // Array of skills
  period: string; // Experience period
};
```

#### `projects.ts` - Projects

```typescript
export type Project = {
  slug: string; // URL-friendly identifier
  title: string; // Project name
  description: string; // Brief description
  longDescription?: string; // Detailed description
  images: string[]; // Screenshots/images
  technologies: string[]; // Technologies used
  githubUrl?: string; // Repository link
  liveUrl?: string; // Production project link
  repoPrivate?: boolean; // If repository is private
  motivation?: string; // Project motivation
  challenges?: string[]; // Challenges faced
  learnings?: string[]; // Learnings obtained
  details?: string; // Additional technical details
};
```

#### `career.ts` - Professional Experience

```typescript
export type CareerEntry = {
  slug: string; // Unique identifier
  title: string; // Position/Role
  company: string; // Company name
  period: string; // Work period
  description: string; // Role description
  highlights: string[]; // Main achievements
  companyLinkedin: string; // Company LinkedIn
};
```

#### `socials.ts` - Social Networks and Contact

```typescript
export type Social = {
  platform: string; // Platform name
  url: string; // Profile URL
  icon?: string; // Platform icon
  extra?: string; // Extra information
};

export const userName = 'Your Name';
export const location = 'Your Location';
export const availability = 'Availability status';
export const contactMessage = 'Contact message';
```

## 🎨 Content Customization

### 1. Initial Setup

1. **Update your personal information:**
   - Edit `data/home.ts` with your name and presentation
   - Update `data/socials.ts` with your social networks
   - Replace the profile picture in `public/profile.png`

2. **Configure your content:**
   - Add your skills in `data/skills.ts`
   - Include your projects in `data/projects.ts`
   - Document your career in `data/career.ts`
   - Share personal experiences in `data/aboutMe.ts`

### 2. Adding Projects

To add a new project, edit `data/projects.ts`:

```typescript
const newProject: Project = {
  slug: 'my-new-project',
  title: 'My New Project',
  description: 'Brief project description...',
  longDescription: 'Detailed description with more context...',
  images: ['/images/projects/project1.png'],
  technologies: ['React', 'TypeScript', 'Next.js'],
  githubUrl: 'https://github.com/user/project',
  liveUrl: 'https://project.vercel.app',
  motivation: 'Why I created this project...',
  challenges: ['Challenge 1: How I solved...', 'Challenge 2: Learning obtained...'],
  learnings: ['Learned about...', 'Developed skills in...'],
};

// Add to projects array
export const projects: Project[] = [
  // ... existing projects
  newProject,
];
```

### 3. Configuring Skills

Organize your skills by categories:

```typescript
const newCategory: SkillCategory = {
  slug: 'mobile-development',
  title: 'Mobile Development',
  description: 'Experience in mobile application development',
  period: '2+ years',
  skills: [
    { name: 'React Native', level: 'advanced' },
    { name: 'Flutter', level: 'intermediate' },
    { name: 'Expo', level: 'advanced' },
  ],
};
```

### 4. Adding Professional Experiences

```typescript
const newExperience: CareerEntry = {
  slug: 'new-company-role',
  title: 'Full Stack Developer',
  company: 'New Tech Company',
  period: 'Jan 2024 - Present',
  description: 'Responsible for development...',
  highlights: [
    'Led team of 5 developers',
    'Implemented microservices architecture',
    'Reduced deployment time by 60%',
  ],
  companyLinkedin: 'https://linkedin.com/company/new-company',
};
```

## 🎯 Navigation and Routing

### Main Navigation

The `Header` component provides anchor links to each main section:

- Skills
- Projects
- Professional Journey
- Personal Journey
- Contact

To add/remove sections, update the `sections` array in `Header.tsx`:

```typescript
const sections = [
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Career', href: '#career' },
  { name: 'About Me', href: '#about-me' },
  { name: 'Contact', href: '#contact' },
  // Add new section here
];
```

### Project Detail Pages

Each project has a dynamic page at `/projects/[slug]` that displays:

- Complete project information
- Screenshots and images
- Technologies used
- Repository and demo links
- Challenges and learnings

To link to a project page:

```tsx
<Link href={`/projects/${project.slug}`}>View Project</Link>
```

## 🎨 Visual Customization

### 1. Theme and Colors

The project uses TailwindCSS 4. To customize colors, edit the Tailwind configuration file:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
    },
  },
};
```

### 2. Dark/Light Theme Toggle

The theme is implemented in `src/app/components/ThemeToggle.tsx`:

- Uses Tailwind's dark class strategy
- Persists preference in localStorage
- Accessible via header

To customize the toggle:

```tsx
// Customize icons or behavior
const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');
  // ... your implementation
};
```

### 3. Animations

The project uses Framer Motion for smooth animations. Usage example:

```tsx
import { motion } from 'framer-motion';

const AnimatedComponent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Animated content
  </motion.div>
);
```

## 📱 Responsiveness

The project is fully responsive using Tailwind classes:

```tsx
// Responsive component example
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{/* Content */}</div>
```

## 🖼️ Image Management

### Image Structure

```
public/
├── images/
│   ├── projects/        # Project screenshots
│   ├── about/          # Personal experience images
│   └── icons/          # Icons and logos
└── profile.png         # Main profile picture
```

### Image Optimization

Use Next.js `Image` component for automatic optimization:

```tsx
import Image from 'next/image';

<Image
  src="/images/projects/project1.png"
  alt="Project screenshot"
  width={800}
  height={600}
  className="rounded-lg"
/>;
```

## 🚀 Deploy and Production

### Deploy Preparation

1. **Production build:**

   ```bash
   pnpm build
   ```

2. **Local test:**
   ```bash
   pnpm start
   ```

### Recommended Platforms

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **AWS Amplify**

### Environment Configuration

For environment variables, create `.env.local`:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Other services
NEXT_PUBLIC_CONTACT_FORM_URL=your-form-endpoint
```

## 🔧 Advanced Extensions and Customizations

### 1. Adding Analytics

```tsx
// lib/analytics.ts
export const trackEvent = (eventName: string, properties?: object) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};
```

### 2. Contact Form

To add a functional form, consider:

- **Formspree** - Free service for forms
- **Netlify Forms** - If hosted on Netlify
- **EmailJS** - Direct email sending

### 3. Blog/Articles (Optional)

To add a blog section:

1. Create `data/blog.ts`:

```typescript
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  tags: string[];
};
```

2. Add routes in `src/app/blog/`

### 4. SEO Optimization

Configure metadata for each page:

```tsx
// app/layout.tsx or page.tsx
export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Developer portfolio...',
  keywords: 'developer, react, typescript',
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'Developer portfolio...',
    url: 'https://yoursite.com',
    siteName: 'Your Portfolio',
  },
};
```

## 🧪 Testing (Future)

To add testing to the project:

1. **Install dependencies:**

   ```bash
   pnpm add -D jest @testing-library/react @testing-library/jest-dom
   ```

2. **Configure Jest:**
   ```javascript
   // jest.config.js
   module.exports = {
     testEnvironment: 'jsdom',
     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
   };
   ```

## 📋 Best Practices

### 1. Code Organization

- Keep components small and focused
- Use TypeScript for complete typing
- Follow consistent naming conventions

### 2. Performance

- Optimize images using Next.js Image
- Use lazy loading for heavy components
- Minimize unused JavaScript

### 3. Accessibility

- Use semantic HTML tags
- Implement keyboard navigation
- Add alternative texts to images

### 4. SEO

- Configure appropriate metadata
- Use clean URL structure
- Implement structured data

## 🆘 Troubleshooting

### Common Issues

1. **Hydration error:**
   - Check if server and client content are equal
   - Use `useEffect` for browser-dependent code

2. **Images not loading:**
   - Check if images are in the `public/` folder
   - Confirm paths in data files

3. **TypeScript errors:**
   - Update types when modifying data structure
   - Use `pnpm type-check` to verify

### Logs and Debug

For detailed debugging:

```bash
# Development mode with detailed logs
DEBUG=* pnpm dev
```

## 🔄 Maintenance and Updates

### Updating Dependencies

```bash
# Check outdated packages
pnpm outdated

# Update all packages
pnpm update

# Update specific package
pnpm update next@latest
```

### Content Versioning

Consider using Git to version content changes:

```bash
# Specific commit for content
git add data/
git commit -m "content: update projects section"
```

---

This guide covers the main aspects of using and customizing the boilerplate. For specific questions or improvement suggestions, check the [contribution](./CONTRIBUTING.md) section.

**Ready to customize?** Start by editing the files in the `/data` folder and make this portfolio yours! 🎨
