# Swaliha Khanam — Therapy Website

Marketing and booking website for Swaliha Khanam's clinical hypnotherapy and mental health practice in Punjabi Bagh, New Delhi.

Built with React 19, TanStack Start / Router, Tailwind CSS, and a shadcn/ui component library.

## Tech stack

- **Framework**: TanStack Start (SSR) + TanStack Router
- **UI**: React 19, Tailwind CSS, Radix UI / shadcn/ui components
- **Data**: TanStack Query
- **Validation**: Zod + React Hook Form
- **Tooling**: Vite, Vitest, ESLint, Prettier, TypeScript

## Getting started

Requires [Node.js](https://nodejs.org) and [Bun](https://bun.sh).

```sh
# install dependencies
bun install

# start the dev server (http://localhost:8080)
bun run dev
```

## Available scripts

```sh
bun run dev          # start the local dev server
bun run build        # production build
bun run preview      # preview the production build
bun run lint         # run ESLint
bun run format       # format with Prettier
bun run test         # run the test suite once
bun run test:watch   # run tests in watch mode
```

## Project structure

```
src/
  components/   website shell, therapy page sections, and UI primitives
  routes/       TanStack Router routes (one per page) + root shell
  lib/          shared helpers (clinic facts, WhatsApp links, error handling)
  hooks/        reusable React hooks
  styles.css    global styles and design tokens
```
