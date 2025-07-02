# My Portifolio

## Overview

A modern portfolio website built with Next.js, TypeScript, and TailwindCSS. This project is designed to be easily customizable and maintainable, providing a solid foundation for personal or professional portfolios.

## Tech Stack

- Next.js 15
- React 19
- TypeScript 5
- TailwindCSS 4
- ESLint & Prettier
- Husky & lint-staged

## Key Features

- Modern, responsive design
- Easy to customize and extend
- Global dark/light theme toggle with persistence
- Code quality enforced with ESLint, Prettier, Husky, and lint-staged

## Installation

1. Clone the repository:
   ```sh
   git clone <git@github.com:alisonbessa/my-portifolio.git>
   cd my-portfolio
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

- Start the development server:
  ```sh
  npm run dev
  ```
- Lint the code:
  ```sh
  npm run lint
  ```
- Format the code:
  ```sh
  npm run format
  ```
- Type check:
  ```sh
  npm run type-check
  ```

## Code Quality

This project uses the following tools to ensure clean and standardized code:

- **ESLint**: With recommended rules for Next.js, TypeScript, and Prettier.
- **Prettier**: For automatic code formatting.
- **Husky**: Ensures that before every commit, the code passes linting, formatting, and type checking.
- **lint-staged**: Runs Prettier and ESLint only on staged files.

### How pre-commit works

When you try to commit, Husky will run:

- `prettier --write` and `eslint --fix` on staged files (via lint-staged)
- Type checking with `tsc --noEmit`

If any of these steps fail, the commit will be blocked until the code is compliant.

## Customization

All content is managed in the `/data` folder. For technical details and how to extend the data structure, see [GUIDE.md](./GUIDE.md).

---

Feel free to fork, customize, and make it your own!
