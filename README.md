# Turborepo Tailwind CSS starter

This is an official starter Turborepo.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/ui

This example is setup to build `packages/ui` and output the transpiled source and compiled styles to `dist/`. This was chosen to make sharing one `tailwind.config.cjs` as easy as possible, and to ensure only the CSS that is used by the current application and its dependencies is generated.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update your `tailwind.config.cjs` to be aware of your package locations, so it can find all usages of the `tailwindcss` class names.

For example, in [tailwind.config.cjs](packages/tailwind-config/tailwind.config.cjs):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## More detailed Docs

Exploring Editor.js

Welcome to this Vite app exploring modifications to Editor.js. The following packages are used: 

- `apps/web` A Next.js 13 website which renders the Editor.js blocks
- `apps/editor` - A Vite app which runs Editor.js
- `packages/editor-plugin` - Custom components for Editor.js
- `packages/ui` - React UI components
- `packages/tsconfig` - TypeScript config for development
- `packages/eslint-config-custom` - ESLint config for development
- `packages/tailwind-config` - TailwindCSS config for styling the project
- 