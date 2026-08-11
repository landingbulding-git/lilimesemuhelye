# Lili Meseműhelye — landing

Astro + Tailwind v4 + React implementation of the Claude Design export
(`Lili landing/main.dc.html`). Content and design are a 1:1 translation of the
export — no copy or layout was changed.

## Stack

- **Astro 5** — static output, zero JS shipped by default
- **Tailwind v4** — via `@tailwindcss/vite`; design tokens live in `src/styles/global.css` under `@theme`
- **React 19** — used for the one interactive piece on the page (the FAQ accordion)

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve dist/
```

## Structure

```
src/
  assets/            illustrations (optimised at build time by astro:assets)
  components/        one component per design section
  data/faq.ts        FAQ copy — also the source for the FAQPage JSON-LD
  layouts/           document shell, meta, font imports
  pages/index.astro  the main page
  styles/global.css  design tokens (@theme) + shared primitives (@utility)
```

## Performance notes

- The page ships **no JavaScript** apart from the FAQ accordion, which hydrates on
  `client:visible`. Its answers are server-rendered, so they are in the HTML for
  crawlers and for users before hydration.
- Fonts are **self-hosted** (`@fontsource`) — no render-blocking request to
  `fonts.googleapis.com`, and the woff2 files are fingerprinted and immutably cached.
- Images go through `astro:assets` — webp, explicit `width`/`height` to reserve
  layout (no CLS), lazy below the fold. The step and guarantee illustrations are
  served at 1x/2x (~860 kB of PNG → ~125 kB); the hero and founder portraits get a
  480/720/1080 `srcset` with `sizes`, so the hero drops from a 1.6 MB PNG to an
  83–147 kB webp. The hero is the LCP element and is `loading="eager"` with
  `fetchpriority="high"`.
- One stylesheet, tokens emitted once as custom properties.

## Links

The four "try it free" CTAs — navbar, hero, the pricing banner and the closer —
point at the Cal.com booking page and open in a new tab. The URL lives in
`src/data/site.ts`; change it there and all four follow.

## Not done yet

- **The three "Ezt választom" package buttons** are still `#`. They need a
  per-package destination (checkout, or a booking link carrying the package).
- **The three value-prop images** are still `ImagePlaceholder.astro`, which renders
  the art-direction hint from the matching `<image-slot>` in the export. Replace
  with `<Image />` from `astro:assets` as the photography lands; the wrappers
  already own the aspect ratio and fallback fill.
- **"Zseb-Menedék mesetár"** in the nav points at `#`. That is the second page in
  the export (`Mesetar.dc.html`) and has not been built.
