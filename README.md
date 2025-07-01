<!-- TODO: Create a README -->

## Code Quality

This project uses the following tools to ensure clean and standardized code:

- **ESLint**: With recommended rules for Next.js, TypeScript, and TailwindCSS.
- **Prettier**: For automatic code formatting.
- **Husky**: Ensures that before every commit, the code passes linting, formatting, and type checking.
- **lint-staged**: Runs Prettier and ESLint only on staged files.

### How pre-commit works

When you try to commit, Husky will run:

- `prettier --write` and `eslint --fix` on staged files (via lint-staged)
- Type checking with `tsc --noEmit`

If any of these steps fail, the commit will be blocked until the code is compliant.
