# AGENTS.md - Agent Coding Guidelines

This file provides guidelines for agentic coding agents working in this repository.

## Project Overview

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode)
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS v4 with shadcn/ui (base-nova style)
- **UI Components**: Base UI React, Radix UI primitives
- **Authentication**: Clerk
- **Animations**: GSAP, Motion

## Build, Lint & Test Commands

### Development
```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Start production server
```

### Linting
```bash
pnpm lint       # Run ESLint on entire codebase
```

### Testing
- **No test framework is currently configured**. If adding tests, use Vitest or Jest with React Testing Library.
- For single test file: `pnpm vitest run <path>` or `pnpm jest <path>`

### Type Checking
```bash
pnpm tsc --noEmit    # Run TypeScript compiler check
```

## Code Style Guidelines

### General Principles
- Use TypeScript with strict mode enabled
- Prefer explicit typing over implicit `any`
- Keep components small and focused
- Use functional components with hooks

### Imports
- Use path aliases: `@/*` maps to project root
- Order imports: external libraries → internal components/hooks → utils
- Example:
  ```typescript
  import { useState } from "react"
  import { cn } from "@/lib/utils"
  import { Button } from "@/components/ui/button"
  import { HeroSection } from "@/src/components/blocks/hero-section"
  ```

### File Organization
- Components: `src/components/` or `components/` (shadcn/ui uses root-level)
- UI primitives: `src/components/ui/`
- Blocks (larger sections): `src/components/blocks/`
- Utils: `lib/utils.ts`
- Hooks: `hooks/` or `src/hooks/`
- App routes: `src/app/`

### Naming Conventions
- Components: PascalCase (`HeroSection`, `Navbar`)
- Files: kebab-case or PascalCase for components
- Hooks: camelCase starting with `use` (`useHeroAnimation`)
- CSS classes: Tailwind utility classes

### TypeScript
- Enable strict mode in tsconfig
- Use explicit return types for utility functions
- Use `interface` for object shapes, `type` for unions/intersections
- Use `type` for import statements: `import { type NextConfig } from "next"`

### React/Next.js Patterns
- Add `"use client"` directive for client-side components
- Use Server Components by default, opt-in to client with `"use client"`
- Follow Next.js 15+ patterns for data fetching
- Use proper children prop typing

### Tailwind CSS
- Use Tailwind v4 syntax (CSS-first configuration in `globals.css`)
- Use `cn()` utility for conditional class merging (from `lib/utils.ts`)
- Use shadcn/ui component patterns with cva for variants

### Error Handling
- Use try/catch for async operations
- Display user-friendly error messages in UI
- Log errors appropriately (avoid console.log in production)

### Component Patterns (shadcn/ui)
- Use cva (class-variance-authority) for variant components
- Follow the pattern in `src/components/ui/button.tsx`:
  - Define variants with cva
  - Accept `className`, variant props, and spread rest
  - Use `data-slot` attribute for component identification
  - Export both component and variants

### String Quotes
- Use double quotes for strings in TypeScript/JSX
- Use single quotes for CSS strings if needed

### ESLint
- Uses `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Configuration in `eslint.config.mjs`
- Run `pnpm lint` before committing

### Git Conventions
- Write concise, descriptive commit messages
- Use conventional commits if team prefers

### Environment Variables
- Never commit `.env` files
- Use `.env.example` for required variables
- Prefix with `NEXT_PUBLIC_` for client-side accessible vars

### Accessibility
- Use semantic HTML elements
- Include aria-* attributes where appropriate
- Ensure keyboard navigation works
- Use proper contrast ratios

### Performance
- Optimize images with next/image
- Lazy load components when appropriate
- Use React Server Components to reduce bundle size
- Avoid unnecessary client-side state
