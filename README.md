# Portfolio Boilerplate

A modern, highly customizable portfolio boilerplate built with cutting-edge technologies. This project provides a solid foundation for developers who want to create professional portfolios with clean code architecture and excellent developer experience.

## 🚀 Overview

This boilerplate combines modern web development practices with a focus on maintainability and extensibility. It features a modular data layer, responsive design, and comprehensive development tooling to help you build and deploy professional portfolios quickly.

## ⚡ Tech Stack

### Core Technologies

- **Next.js 15** - React framework with App Router and Turbopack
- **React 19** - Latest React features and improvements
- **TypeScript 5** - Static type checking for better development experience
- **TailwindCSS 4** - Utility-first CSS framework with latest features

### Development Tools

- **ESLint 9** - Code linting with Next.js and TypeScript rules
- **Prettier 3** - Code formatting for consistent style
- **Husky** - Git hooks for automated quality checks
- **lint-staged** - Run linters only on staged files

### UI/UX Libraries

- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **Class Variance Authority** - Type-safe component variants
- **Tailwind Merge** - Efficient CSS class merging

## ✨ Key Features

### 🎨 Design & User Experience

- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Theme** - Global theme toggle with localStorage persistence
- **Smooth Animations** - Powered by Framer Motion
- **Modern UI Components** - Clean, accessible interface

### 🗂️ Data Management

- **Modular Data Layer** - All content managed in typed `/data` files
- **TypeScript Types** - Full type safety for all data structures
- **Easy Content Updates** - Simple file-based content management
- **Dynamic Routing** - Automatic page generation for projects

### 🛠️ Developer Experience

- **Code Quality Enforcement** - ESLint, Prettier, and TypeScript checks
- **Pre-commit Hooks** - Automated quality checks before commits
- **Hot Reload** - Fast development with Turbopack
- **Path Aliases** - Clean import statements with `@/` prefix

### 📱 Portfolio Sections

- **Home** - Hero section with introduction
- **About Me** - Personal journey and experiences
- **Skills** - Technical competencies organized by categories
- **Projects** - Detailed project showcase with individual pages
- **Career** - Professional experience timeline
- **Contact** - Social links and contact information

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- Package manager (npm, yarn, or pnpm recommended)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies:**

   ```bash
   # Using pnpm (recommended)
   pnpm install

   # Or using npm
   npm install

   # Or using yarn
   yarn install
   ```

3. **Start development server:**

   ```bash
   pnpm dev
   # or npm run dev
   # or yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

| Script       | Description                             |
| ------------ | --------------------------------------- |
| `dev`        | Start development server with Turbopack |
| `build`      | Build production application            |
| `start`      | Start production server                 |
| `lint`       | Run ESLint checks                       |
| `type-check` | Run TypeScript type checking            |
| `format`     | Format code with Prettier               |

## 🔧 Configuration

### Environment Setup

The project works out of the box with no additional configuration required. However, you can customize:

- **Theme colors** in `tailwind.config.js`
- **ESLint rules** in `eslint.config.mjs`
- **Prettier settings** in `.prettierrc`
- **TypeScript config** in `tsconfig.json`

### Content Management

All portfolio content is managed through TypeScript files in the `/data` directory:

- `home.ts` - Home page content and metadata
- `aboutMe.ts` - Personal experiences and stories
- `skills.ts` - Technical skills organized by categories
- `projects.ts` - Project details with comprehensive information
- `career.ts` - Professional experience timeline
- `socials.ts` - Contact information and social links

For detailed information on data structure and customization, see [GUIDE.md](./GUIDE.md).

## 🎯 Code Quality

This project enforces high code quality standards through:

### Automated Checks

- **ESLint** - Code linting with Next.js, TypeScript, and Prettier rules
- **Prettier** - Automatic code formatting
- **TypeScript** - Static type checking
- **Husky** - Pre-commit hooks for quality enforcement

### Pre-commit Workflow

When you commit changes, the following checks run automatically:

1. **Prettier** formats staged files
2. **ESLint** fixes linting issues
3. **TypeScript** validates types
4. **Tests** run (when available)

If any check fails, the commit is blocked until issues are resolved.

## 📚 Documentation

- **[GUIDE.md](./GUIDE.md)** - Comprehensive usage guide and customization instructions
- **[DATA_SCHEMA.md](./docs/DATA_SCHEMA.md)** - Complete data structure documentation
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Guidelines for contributors

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on:

- Reporting issues
- Proposing features
- Submitting pull requests
- Code style guidelines

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Features Roadmap

- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Blog/Article system
- [ ] Multi-language support
- [ ] CMS integration
- [ ] Performance monitoring

---

**Ready to build your portfolio?** Start by customizing the content in the `/data` folder and make it your own! 🚀
