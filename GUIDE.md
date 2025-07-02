# Developer & User Guide

## Editing Content in `/data`

All dynamic content is managed in the `/data` folder. Each file is typed and modular, making it easy to update or extend content for the portfolio.

### Files

- `projects.ts`: Project data and types
- `journey.ts`: Professional journey data and types
- `skills.ts`: Skills data and types
- `socials.ts`: Social/contact data and types
- `personalJourney.ts`: Personal (non-professional) experiences and types
- `home.ts`: Home page metadata

### How to Add or Edit Content

- To add a new project, edit `projects.ts` and add a new object to the `projects` array.
- To add a new professional experience, edit `journey.ts` and add a new object to the `journey` array.
- To add a new skill, edit `skills.ts` and add a new object to the `skills` array.
- To add a new social link, edit `socials.ts` and add a new object to the `socials` array.
- To add a new personal experience, edit `personalJourney.ts` and add a new object to the `personalJourney` array.

Each file also exports a section title and subtitle for use in the UI.

### Best Practices

- Keep all content in English.
- Use realistic but generic placeholders for demo data.
- Update types if you need to extend the data structure.
- Use the exported titles/subtitles for consistent UI sections.

---

For more information, see the README.md file.

## Customizing Components

- The global dark/light theme toggle is implemented in `src/app/components/ThemeToggle.tsx`.
- It uses Tailwind's dark class strategy and persists the user's preference in localStorage.
- The toggle is accessible from the header (see `src/app/layout.tsx`).
- To customize the toggle, edit the `ThemeToggle` component or its placement in the layout.

## Extending Features

<!-- Guidelines for adding new features or functionality will be provided as the codebase grows. -->

## Contributing

### Code Quality Workflow

- All code must pass ESLint, Prettier, and TypeScript checks before being committed (enforced by Husky and lint-staged).
- To manually run checks:
  - Lint: `npm run lint`
  - Format: `npm run format`
  - Type check: `npm run type-check`

### Documentation

This guide and the README will be updated incrementally as new features and best practices are added to the project.
