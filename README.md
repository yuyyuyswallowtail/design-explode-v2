# DESIGN EXPLODE V2

A fictional experimental design festival / digital-art portfolio.

> **Inspired by [Design Bomb](https://www.designbomb.it/)** (designbomb.it) as a visual and art-direction reference only.
> This is an original dummy project. It is **not affiliated** with Design Bomb and reuses none of its logo, copy, names, images or data.

## Stack

Next.js 16.3.6 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Framer Motion · Biome · Bun

## Palette

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#0B0B14` | Background (midnight) |
| `bone` | `#F1EBDD` | Text, inverted sections |
| `ember` | `#FF6A1F` | Primary accent |
| `aqua` | `#19E3D2` | Accent |
| `crimson` | `#E8204F` | CTA, party |
| `butter` | `#FFD84A` | Accent, about section |

Deliberately different from the reference (lime / pink / blue / purple).

## Routes

`/` · `/program` · `/workshops` · `/gallery` · `/about` · `/shop`

## Scripts

```bash
bun install
bun run dev        # http://localhost:3000
bun run lint       # biome check
bun run typecheck  # tsc --noEmit
bun run build
```

## Structure
app/ routes, layout, template.tsx (page transition)
components/design-explode/ reusable UI (header, hero, lineup, program, ...)
lib/data.ts lineup, events, projects, workshops, gallery, shop

## Motion, responsiveness, accessibility

- Transform/opacity only; marquees are pure CSS and pause on hover.
- Custom cursor and cursor-follow previews mount only for `(hover: hover) and (pointer: fine)`.
- `prefers-reduced-motion`: Framer Motion transforms are disabled (`MotionConfig`), CSS loops stop, cursor is off.
- Mobile: full-screen menu overlay (ESC closes), collage becomes a grid, lineup rows expand on tap, hero type scales with `clamp()`.

## Imagery

Artwork is generated in-code as deterministic SVG posters (`components/design-explode/art.tsx`).
`next.config.ts` already allows `images.unsplash.com` if you want to swap in photos.

## Deploy (Vercel CLI)

```bash
bunx vercel login
bunx vercel link
bunx vercel --prod
```
