# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run lint       # ESLint via next lint
npm run format     # Prettier write (src/**/*.{js,ts,jsx,tsx})
npm run format:check  # Prettier check without writing
```

No test suite is configured.

## Architecture

Single-page portfolio built with **Next.js 15** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**. UI primitives come from **shadcn/ui** (Radix UI + CVA), located in `src/components/ui/`.

### Routing

| Route | File | Notes |
|---|---|---|
| `/` | `src/app/(root)/page.tsx` | Server component; fetches GitHub repos then renders `<HomePage>` |
| `/github` | `src/app/(root)/github/page.tsx` | Server component; full GitHub repo listing |

The `(root)` route group applies a shared layout (`src/app/(root)/layout.tsx`) that constrains content to `max-w-2xl` and appends `<Footer>`.

### Data flow

- **GitHub repos** — fetched server-side via `src/lib/github.ts` (`fetchGithubRepos`, revalidated every 60 s via Next.js ISR). Passed as props down to the client component tree.
- **Static content** — all portfolio data (projects, experience, education) lives in `src/lib/home-content.ts` as typed arrays. Skills list is in `src/lib/skills.ts`. Site-wide constants (name, social links, GA ID) are in `src/lib/constants.ts`.

### Component structure

`<HomePage>` (`src/components/home/home-page.tsx`) is the root client component. It holds `useRef` handles for every section and threads them to `<Navbar>` (for smooth-scroll navigation) and to each section component as `forwardedRef`.

Section components: `Hero`, `Experience`, `Projects`, `GitHubSection`, `Education`, `Skills` — all in `src/components/home/`.

### Styling conventions

- Tailwind v4 with CSS variables for theming (`src/app/globals.css`).
- `cn()` helper (`src/lib/utils.ts`) merges Tailwind classes — use it for conditional class logic.
- Prettier sorts imports in the order: `react` → third-party → `@/components` → `@/lib` → relative. Run `npm run format` before committing to avoid lint drift.
- Font variables: `--font-nunito` (body) and `--font-pt-sans` are set on `<body>` in `src/app/layout.tsx`.

### Adding content

To update portfolio data, edit the exported arrays in `src/lib/home-content.ts` (`projectsData`, `experienceData`, `educationData`) or `src/lib/skills.ts`. No API or CMS is involved — changes are baked in at build time.
