# Copilot Instructions: Code Style for MyTaste Frontend

This document describes the code style and best practices to be followed in this project. Follow these guidelines to ensure consistency and readability in the code.

## General Principles
- **TypeScript** must be used for all files (use `.ts` and `.tsx`).
- Use **React** function components, with hooks for state and side effects.
- Code should be **modular** and **reusable**.
- Use **ES6+** syntax (const, let, arrow functions, destructuring, etc.).
- Avoid code duplication.

## File and Folder Structure
- Organize code into logical folders: `components/`, `pages/`, `api/`, `context/`, `mocks/`, `assets/`, `resources/`.
- One component per file.
- Name component files with a capital letter, e.g. `Header.tsx`.
- Type definitions are collected in `types.ts`.

## Imports
- Use relative imports within `src/`.
- Group imports: external packages first, then internal modules.
- Avoid wildcard imports (`import * as ...`).

## Functions and Variables
- Use **const** as default, **let** only if necessary.
- Name variables and functions descriptively and in English.
- Use camelCase for variables and functions, PascalCase for components and types.
- Functions should be pure and small.
- Avoid magic numbers and strings – use constants from `constants.ts`.

## Typing
- All code must be type-safe with TypeScript.
- Use explicit types for props, state, and function parameters.
- Use `interface` or `type` for complex objects. Prefer `type` for unions and intersections.
- Avoid the "any" type.

## React Specifics
- Function components should be written as arrow functions.
- Props and state must be type-safe.
- Use hooks (`useState`, `useEffect`, etc.) instead of classes.
- Avoid side effects in the render function.
- Avoid useEffect without dependencies and when not stictly necessary.
- Use context for global state management, avoid prop drilling.
- Use `React.FC` for component typing.

## API Calls
- API calls are handled in the `api/` folder.
- Use dedicated handler functions for GET/POST/PUT/DELETE.
- Error handling and loading state must be supported.

## Comments and Documentation
- Comment only where necessary for understanding.
- Use JSDoc for complex functions.
- Write in English in code and comments.

## Styling
- Use CSS modules, do not use styled components or inline styles in new code.

## Formatting and Linting
- Follow the project's ESLint and Prettier rules.
- Avoid trailing whitespace.

## Testing and Mock Data
- Use mock data from `mocks/` for development and testing.
- Write simple unit tests where appropriate.

## Common Best Practices
- Do not include sensitive data in the repo.
- Write code that is easy to extend and maintain.

---

**Summary:**
Follow these guidelines to ensure that the code is consistent, readable, and easy to maintain.
