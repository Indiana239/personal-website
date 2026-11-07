# Indira Diana — Personal Portfolio Starter

A Next.js App Router portfolio starter with a hybrid editorial + experimental visual direction, light/dark theme support, Tailwind CSS v4, Motion for React, and static export configured for Cloudflare Pages.

## Stack

- Next.js 16 App Router
- React 19 + TypeScript
- Tailwind CSS v4 through the official PostCSS plugin
- CSS variables for design tokens and bespoke portfolio artwork
- Motion for React for small expressive motions
- next-themes for light/dark mode
- Lucide React icons
- Static export (`output: "export"`) for simple static hosting

## 1. Requirements

- Node.js 20.9 or newer (use an active LTS release)
- npm
- VS Code (recommended)
- Git (recommended for version control and deployment)

## 2. Install dependencies

Open this folder in VS Code, open Terminal, and run:

```bash
npm install
```

## 3. Start the local development server

```bash
npm run dev
```

Open <http://localhost:3000>.

## 4. Useful scripts

```bash
npm run dev        # local development
npm run typecheck  # TypeScript check
npm run lint       # ESLint
npm run build      # production build + static export
```

The production export is written to `out/`.

## 5. Project structure

```text
src/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── design/page.tsx
│   ├── development/page.tsx
│   ├── seo/page.tsx
│   ├── work/page.tsx
│   ├── work/[slug]/page.tsx
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── home/hero-art.tsx
│   ├── discipline-card.tsx
│   ├── discipline-page.tsx
│   ├── project-artwork.tsx
│   ├── project-card.tsx
│   ├── section-heading.tsx
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── work-grid.tsx
└── lib/
    └── projects.ts
```

## 6. Where to customise the design system

Most global design tokens are in `src/app/globals.css`:

- `:root` — light theme values
- `.dark` — dark theme values
- `@theme inline` — exposes the CSS variables as Tailwind theme tokens
- `@keyframes` and bespoke component selectors — custom expressive details that are not practical as long utility class strings

The visual system is intentionally a mix:

- Tailwind utilities for layout, responsive behavior, and common styling.
- CSS variables for colors, surfaces, typography, and theme consistency.
- Bespoke CSS for the portfolio's editorial composition and CSS-built project artwork.

Avoid adding a second design-token source. Update the variables in `globals.css` first, then use Tailwind classes or component styles against those tokens.

## 7. Where to add or edit projects

Edit `src/lib/projects.ts`.

Each project object provides:

- `slug`: URL segment, e.g. `dineease` becomes `/work/dineease/`
- `title`, `category`, `discipline`, `year`, `summary`
- `role`, `tools`, and `status`
- `visual`: selects one of the CSS project-artwork treatments
- `challenge`, `approach`, and `outcome`: case-study content

The project detail route uses `generateStaticParams()` so every project page is generated at build time for static export. When adding a project, add a unique slug and complete all required fields.

The current DineEase, packaging, and SEO entries are starter content. Review all copy, project status, images, and claims before publishing. Keep client work anonymised unless you have explicit permission to identify the client or share its data.

## 8. Theme behavior

`next-themes` is configured in `src/app/layout.tsx`:

- Light mode is the initial default.
- The header toggle switches between light and dark.
- Theme choice persists in the browser.
- The site uses CSS variables so both themes stay consistent.

## 9. Animation and accessibility

Motion is used in `src/components/home/hero-art.tsx` for decorative movement. CSS handles simpler hover states and transitions. The animation respects `prefers-reduced-motion`; keep important copy and navigation readable without motion.

Do not use animation to hide core page content. Keep keyboard focus states, semantic headings, descriptive links, and sufficient color contrast as the design evolves.

## 10. Static export and Cloudflare Pages

The project uses:

```ts
// next.config.ts
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
```

Build locally with:

```bash
npm run build
```

Cloudflare Pages settings when you are ready to deploy:

- Build command: `npx next build`
- Build output directory: `out`

This static-export setup does not provide request-time Next.js server features such as Server Actions, middleware/proxy, or runtime server rendering. The current portfolio does not need those features. If you later need SSR or server-side functionality, revisit the deployment target instead of assuming the static Pages setup can run it.

## 11. Before publishing

- Replace the CSS-built illustrative project artwork with real screenshots/mockups when the actual work is ready.
- Review all project descriptions, years, roles, and status labels.
- Add your preferred professional email address to the contact page.
- Add Behance, GitHub, or other relevant profile links that you want public.
- Confirm that every client example is shareable and properly anonymised.
- Add a `metadataBase`, canonical URLs, sitemap, and final Open Graph image after the public domain/subdomain is chosen.
- Test mobile layout, keyboard navigation, reduced-motion behavior, and color contrast.
