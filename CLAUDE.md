# tripleetech-next

Marketing site for Triple E Technology Solutions, an IT firm in Kentville, NS.
Next 16 (App Router), SCSS Modules, TypeScript, pnpm. Hosted on Vercel.

**Pushing to `main` deploys production.** There is no staging branch.

## Commands

```bash
pnpm dev                                    # local dev
pnpm build                                  # production build
pnpm lint                                   # eslint
pnpm format                                 # prettier --write .
pnpm format:check                           # prettier --check .
./node_modules/.bin/tsc --noEmit --incremental false   # typecheck
```

Typecheck note: pass `--incremental false`, or a stale `.tsbuildinfo` can make a
broken build look clean. `tsc` also ignores the `plugins` field in tsconfig, so
Next's TS plugin diagnostics appear only in the editor — an error VS Code shows
but `tsc` does not is usually that plugin, not a real build failure.

## Before every commit

Run all four: `prettier --check`, `eslint`, `tsc --noEmit`, `pnpm build`.

## Verifying changes

Check `.next/server/app/*.html` — those are the exact bytes Vercel serves. Almost
nothing needs a request to the live site.

- **Never poll production in a loop.** Repeated curls trip Vercel's per-IP bot
  mitigation and every request then returns 403 with
  `x-vercel-mitigated: challenge`. One check after a deploy is enough.
- **Strip HTML comments before matching rendered output.** React inserts
  `<!-- -->` between adjacent JSX expressions, so `Call {phone}` renders as
  `Call<!-- -->(902) 365-7333` and a literal string match silently fails.
- **Measure before and after** when claiming an improvement, and report the real
  number.

## Single sources of truth

Never hardcode the domain, business name, phone, address, hours, or a route in a
component.

| File | Owns |
| --- | --- |
| `src/lib/metadata.ts` | `SITE_NAME`, `SITE_URL`, `GA_MEASUREMENT_ID`, `buildMetadata()` |
| `src/lib/business.tsx` | `BUSINESS` (NAP, hours, geo, social) and `BusinessJsonLd` |
| `src/lib/breadcrumbs.tsx`, `src/lib/service.tsx` | per-page structured data |
| `src/app/sitemap.ts` | the `routes` array |
| `src/styles/abstracts/_variables.scss` | every colour |

`BUSINESS.phone` has three deliberate forms: `href` (E.164, for `tel:`),
`display` (what visitors read), `schema` (hyphenated, for JSON-LD). Use the right
one; do not invent a fourth.

## Conventions

- Single quotes everywhere including JSX attributes; `.prettierrc` enforces it.
- **Server Components by default.** Add `'use client'` only for state, effects,
  event handlers, or browser APIs. It is contagious to everything the component
  imports, so keep the boundary low in the tree.
- `next/link` for internal routes; plain `<a>` for external, `mailto:`, `tel:`.
- No hex literals in component SCSS — add a token instead, named for what the
  colour *is*, not where it is used.
- `next/image` needs true intrinsic `width`/`height` and a `sizes` value. Without
  `sizes` it falls back to `100vw` and requests a 3840px render for a 32px logo.
- Decorative images: `alt=''` plus `aria-hidden='true'`. Never pair descriptive
  alt text with `role='presentation'` — they contradict and break the
  accessibility tree.
- Repeated link text ("Read More") needs a distinguishing `aria-label`.

## Gotchas

- **`public/` is the web root.** A file at the project root is never served.
- **GA4 is invisible in View Source.** `@next/third-parties` injects gtag through
  `next/script` after hydration, so it exists only in the live DOM. Anything
  needing server-rendered proof — Search Console verification, for one — cannot
  rely on it. GSC verification is a meta tag in `layout.tsx` for this reason.
- **Search Console:** use the `https://www.tripleetech.ca/` property. The apex
  property cannot inspect www URLs, and every real page is www.
- **IndexNow** is submitted manually from Ahrefs Site Audit. The key file lives in
  `public/`.
- Bing Site Scan reports `alt=''` as "missing alt". It is wrong; empty alt is the
  correct marker for a decorative image. Do not "fix" it.

## Commits

Conventional Commits. The body explains *why*, including what was wrong before.
One logical change per commit — split mixed work rather than bundling it.
