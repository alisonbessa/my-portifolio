# Developer & User Guide

## Editing Content in `/data`

<!-- Instructions for editing content in the /data directory will be added as features are implemented. -->

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
