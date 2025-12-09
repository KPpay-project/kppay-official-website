# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KPPAY Frontend - Official website for a fintech platform providing payment and banking solutions. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

```bash
# Development
npm run dev          # Start development server on localhost:3000

# Build
npm run build        # Production build

# Production
npm start            # Start production server (requires build first)

# Linting
npm run lint         # Run ESLint
```

## Critical Architectural Pattern: Centralized Imports

**The most important pattern in this codebase is the centralized import system through `src/types/index.ts`.**

### Single Import Source

All components, types, utilities, and constants are imported from a single file:

```typescript
// ✅ CORRECT - Import everything from @/types
import { Header, Footer, ROUTES, images, cn, getLayoutConfig } from '@/types';

// ❌ INCORRECT - Do not import directly from component files
import Header from '@/components/layout/Header';
import { ROUTES } from '@/config/constants';
```

### What's Available from @/types

- **All 92 components** (layout, sections, solutions, shared)
- **All TypeScript types and interfaces**
- **ROUTES constant** (61 route definitions from `src/config/constants.ts`)
- **Configuration functions** (`getLayoutConfig`, `servicesData`, `images`)
- **Utilities** (`cn` function for class merging)

### Adding New Components

When creating new components, **always export them through `src/types/index.ts`**:

1. Create component in appropriate directory
2. Add export to `src/types/index.ts`:
   ```typescript
   export { default as YourComponent } from '@/components/path/YourComponent';
   ```
3. Import from `@/types` when using:
   ```typescript
   import { YourComponent } from '@/types';
   ```

## Configuration Architecture

Everything is centralized in `src/config/`:

### 1. Routes (`src/config/constants.ts`)

All routes are defined as typed constants:

```typescript
export const ROUTES = {
  HOME: '/',
  BANKING_BUSINESS_ACCOUNTS: '/banking/business-accounts',
  PAYMENT_INFRA_GATEWAY: '/payment-infrastructure/payment-gateway',
  // ... 61 total routes
} as const;
```

**Never hardcode routes in components.** Always use `ROUTES` constants.

### 2. Layout Configuration (`src/config/layout.config.ts`)

Header/footer variants are configured per route:

```typescript
export const routeLayouts: Record<string, LayoutConfig> = {
  '/': { header: 'dark', footer: 'dark' },
  '/payments/online': { header: 'light', footer: 'dark' },
};
```

- Function `getLayoutConfig(pathname)` determines variants dynamically
- Supports parent route fallback (e.g., `/payments/new` inherits `/payments` config)
- Default fallback: light header, dark footer

### 3. Design Tokens (`src/config/design-tokens.ts`)

Centralized design system with colors, shadows, spacing, typography, animations.

### 4. Images (`src/config/images.ts`)

All image URLs organized by category, served from Cloudinary CDN:

```typescript
const CDN_BASE_URL = 'https://res.cloudinary.com/dfwty72r9';
export const images = {
  logos: { primary, white, icon },
  hero: { gradient, main },
  // ... organized by category
};
```

### 5. Service Data (`src/config/servicesData.tsx`)

Service page metadata separate from components (icons, hero data, features).

## Component Organization

```
src/components/
├── layout/              # Header (1,192 lines), Footer (566 lines)
├── ui/                  # Button (CVA-based primitive)
├── sections/            # 50+ page sections organized by domain
│   ├── Homepage/
│   ├── FinancialServices/
│   ├── Enterprise/
│   ├── Individual/
│   ├── AboutUsPage/
│   ├── Resources/
│   └── shared/         # 26 reusable components
├── solutions/          # 14 product-specific components
├── services/           # ServiceHero, ServiceFeatures, LoanCards
├── ContactDB/          # Contact form system
└── [Utilities]         # LanguageSwitcher, ScrollToTop, AnimationProvider
```

**Component Hierarchy:**

- **Primitives:** Button (base UI)
- **Composites:** Feature cards, grids, selectors
- **Sections:** Domain-specific page sections
- **Templates:** Service page templates (ServiceHero, ServiceFeatures)
- **Pages:** Composed from sections

## Page Structure Pattern

Pages follow a consistent composition pattern:

```typescript
// Example: src/app/some-page/page.tsx
import { ServiceHero, ServiceFeatures, CTABox, BenefitsGrid } from '@/types';

export default function SomePage() {
  const features: ServiceFeature[] = [...];

  return (
    <main>
      <ServiceHero {...heroData} />
      <ServiceFeatures features={features} />
      <BenefitsGrid benefits={benefits} />
      <CTABox {...ctaData} />
    </main>
  );
}
```

## Styling System

### Tailwind CSS v4 with Design Tokens

Global styles use `@theme` directive in `src/app/globals.css`:

```css
@theme {
  --color-brand-primary: #1560fc;
  --color-brand-secondary: #153794;
  /* ... comprehensive token system */
}
```

### Usage Pattern

```tsx
// Use design tokens in className
<div className="bg-brand-primary text-surface-primary rounded-lg shadow-card">

// For conditional classes, use cn() utility
import { cn } from '@/types';
<div className={cn(
  "base-class",
  isActive && "active-class",
  variant === 'dark' && "dark-variant"
)}>
```

**The `cn()` utility** (from `src/lib/utils.ts`) combines `clsx` and `tailwind-merge` to handle conditional classes and prevent Tailwind conflicts.

## TypeScript Configuration

- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- All components and pages are TypeScript

## Important Architecture Rules

### 1. Import Pattern

Always import from `@/types`, never directly from component files.

### 2. Route References

Always use `ROUTES` constants from `@/types`, never hardcode URLs.

### 3. Layout Configuration

Header/footer variants are determined by `getLayoutConfig()` based on route. Add new routes to `src/config/layout.config.ts`.

### 4. Component Exports

New components must be exported through `src/types/index.ts` to be available.

### 5. Styling

- Use Tailwind classes with design tokens (e.g., `bg-brand-primary`)
- Use `cn()` utility for conditional/merged classes
- No component-scoped CSS files

### 6. Images

- All images served from Cloudinary CDN
- Access via `images` object from `@/types`
- Remote patterns configured in `next.config.ts` for Cloudinary and Unsplash

### 7. Data Separation

Service page content lives in `src/config/servicesData.tsx`, not in components. This keeps presentation logic separate from content.

## Next.js App Router Structure

- 40 pages organized by domain (`/banking`, `/payments`, `/financial-services`, etc.)
- Root layout (`src/app/layout.tsx`) handles dynamic SEO and layout variant selection
- API routes: `/api/contact` and `/api/newsletter` (MongoDB integration)

## Key Files to Know

- `src/types/index.ts` - Central export hub (298 lines)
- `src/config/constants.ts` - Route definitions (61 routes)
- `src/config/layout.config.ts` - Layout variant configuration
- `src/config/design-tokens.ts` - Design system tokens
- `src/config/images.ts` - Image URL management
- `src/config/servicesData.tsx` - Service page metadata
- `src/lib/utils.ts` - `cn()` utility function
- `src/app/layout.tsx` - Root layout with dynamic configuration

## Form Handling

Forms use React Hook Form + Zod validation:

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({ ... });
const { register, handleSubmit } = useForm({
  resolver: zodResolver(schema)
});
```

## Internationalization

- Uses `next-intl` for i18n
- Google Translate integration via `LanguageSwitcher` component
- Language switcher available on all pages

## State Management

No global state management (Redux/Zustand). Uses:

- Props-based data flow
- Local component state
- Configuration-driven content

## Development Principles

1. **Configuration over code** - Routes, layouts, tokens, service data are all configured
2. **Consistent patterns** - Service pages use same component templates with different data
3. **Type-safe everything** - Comprehensive TypeScript with centralized definitions
4. **Component reusability** - Shared components in `sections/shared/`
5. **Data-driven UI** - Content separated from presentation logic

- For running the project, let me do that myself manually.
- Make sure to use my @src\app\globals.css styles as that's good for maintainability even while scaling.
  Only use other styling when I don't necessary have them in my global.css file.
- Make sure all my components and relevant files are exported from my @src\types\index.ts so that they can be imported all from my types.
- Whenever we create a new page route, we should add it to our @src\config\constants.ts and when we wanna call that route, it should be called from the constants file and written appropriately. this is so that when we make quick changes to the routes, the entire codebase gets affected at once.
- All our images should be in our @src\config\images.ts file - coming from there - except when otherwise instructed.
