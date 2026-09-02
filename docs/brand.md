# Triple E Technology Solutions — brand reference

The working record of how this brand looks and sounds. It documents what the
site _already does_, so new pages match without archaeology. Where the site is
internally inconsistent, that is called out rather than smoothed over.

Nothing here is a second source of truth. Every value lives in code; this file
says which file and why. See [Where the data lives](#where-the-data-lives).

---

## 1. Identity

|                           |                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------- |
| **Trading name**          | Triple E Technology Solutions                                                     |
| **Legal name**            | Triple E Technology Solutions Incorporated                                        |
| **What "Triple E" means** | Efficiency, Effectiveness, Excellence                                             |
| **Where**                 | 535 Main Street, Kentville, NS — serving the Annapolis Valley and Atlantic Canada |

**The two names are deliberate and must not be merged.** The trading name is
what appears on the Google Business Profile, and Google cross-references it
against the site. The legal name appears only as `legalName` in the
`LocalBusiness` structured data. Using "Incorporated" in visible copy or in
`BUSINESS.name` would break the GBP match.

The three E's are the origin of both the name and the logo mark, and the
`efficiency` / `effectiveness` / `excellence` icons in `public/icons/` exist to
carry that idea visually.

---

## 2. Logo and mark

**Primary logo:** `public/icons/logo-sm.svg` — a cube whose visible faces each
carry an **E**, drawn as an isometric solid.

**Generated mark:** `src/lib/brand-mark.tsx` renders a flat geometric **E** on a
brand gradient, used by the `icon`, `apple-icon` and `og.png` routes. It is
drawn from positioned bars rather than a text glyph because Satori — the
renderer behind `ImageResponse` — has no bold face available, so real text
renders thin and illegible at favicon sizes. All values are percentages, so one
definition scales from 32px to 180px.

> **Known inconsistency — the logo and the palette are near-misses, not matches.**
>
> | Role       | Logo SVG  | Design token                 |                   |
> | ---------- | --------- | ---------------------------- | ----------------- |
> | Mid blue   | `#0183bf` | `$light-secondary` `#0082c9` | off by a hair     |
> | Light blue | `#51b1df` | `$light-accent` `#2ecfd8`    | visibly different |
> | Deep blue  | `#0099d4` | `$light-primary` `#104e73`   | different colour  |
> | Near-black | `#272324` | `$gray-900` `#111827`        | warm vs cool      |
>
> The logo predates the token set. Since the logo is a fixed asset and the
> tokens drive everything else, treat the tokens as authoritative for UI and
> leave the SVG alone — but do not describe them as "the same blue", because
> they are not.

---

## 3. Colour

All colours are tokens in `src/styles/abstracts/_variables.scss`, surfaced as
CSS custom properties in `src/styles/base/_base.scss`. **No hex literals in
component SCSS** — add a token instead, named for what the colour _is_, not
where it is used.

### Core brand

| Token               | Light     | Dark      | Use                                                                |
| ------------------- | --------- | --------- | ------------------------------------------------------------------ |
| `--color-primary`   | `#104e73` | `#2685c3` | Primary actions, headings-on-brand, the deep end of hero gradients |
| `--color-secondary` | `#0082c9` | `#1a9dd9` | Secondary actions, links, the bright end of gradients              |
| `--color-accent`    | `#2ecfd8` | `#52dae0` | Rules, borders, small flourishes, icon fills                       |
| `$brand-navy`       | `#0d2d44` | —         | Darker companion to primary; mid stop of the dark hero gradient    |

### Surfaces

| Token                | Light     | Dark      |
| -------------------- | --------- | --------- |
| `--color-background` | `#f1f1f1` | `#0a0a0a` |
| `--color-foreground` | `#111827` | `#f9fafb` |
| `--color-card-bg`    | `#d1d5db` | `#1f2937` |
| `--color-border`     | `#e5e7eb` | `#374151` |

Theme switching keys off `:root[style*='color-scheme: dark']`, set by the
`Widget` toggle, which respects `prefers-color-scheme` and persists to
`localStorage`.

### Contrast rules — read before colouring text

Measured against the real token pairs (WCAG 2.1; normal text needs **4.5:1**,
large text 3:1). The site's body copy is mostly 14px, which is _normal_ text.

**The accent is not a text colour in light mode.**

| Pair                                  | Ratio    |                                           |
| ------------------------------------- | -------- | ----------------------------------------- |
| accent `#2ecfd8` on card `#d1d5db`    | **1.29** | fails badly — effectively invisible       |
| accent `#2ecfd8` on page `#f1f1f1`    | **1.69** | fails badly                               |
| accent `#2ecfd8` on `$gray-900`       | 9.32     | fine — this is why it works in the footer |
| secondary `#0082c9` on page `#f1f1f1` | 3.69     | large text only                           |
| secondary `#0082c9` on card `#d1d5db` | 2.83     | fails                                     |
| primary `#104e73` on page `#f1f1f1`   | 7.88     | safe                                      |

So: **accent and secondary are safe as text only on dark surfaces.** On light
surfaces use `--color-primary` or `--color-foreground`. Accent is for borders,
rules and fills, where contrast minimums do not apply the same way.

**Dimming by opacity has a floor.** Foreground text at reduced opacity, measured:

| Opacity | Light on page | Light on card | Dark on page |
| ------- | ------------- | ------------- | ------------ |
| 0.85    | 10.26         | 8.45          | 13.60        |
| 0.80    | 8.77          | 7.30          | 12.06        |
| 0.75    | 7.38          | 6.32          | 10.64        |
| 0.70    | 6.22          | 5.41          | 9.32         |
| 0.60    | **4.46**      | **4.04**      | 7.02         |

**`opacity: 0.7` is the floor for body text.** 0.6 fails AA in light mode on
both surfaces. Dark mode is forgiving because the foreground is near-white on
near-black; light mode is the binding constraint, so check there first.

### Buttons

White text needs a dark enough fill. `white on #104e73` is 8.90 — safe.
`white on #0082c9` is 4.17 and `white on #2ecfd8` is 1.90 — **do not put white
text on secondary or accent fills.**

---

## 4. Typography

**Inter**, self-hosted via `next/font/google` (`src/app/fonts/index.ts`) with
`display: 'swap'` and weights 300/400/500/600/700. Exposed as `--font-inter`
and consumed through `$font-stack`.

In practice the site uses three weights: **700** for headings, **600** for
subheadings and emphasis, **400** for body. 500 appears only on buttons
(`$btn-font-weight`).

Headings are fluid, body is fixed:

| Role                | Value                         |
| ------------------- | ----------------------------- |
| Page `h1`           | `clamp(1.75rem, 5vw, 3.5rem)` |
| Section `h2`        | `clamp(1.75rem, 4vw, 2.5rem)` |
| Lead paragraph      | `clamp(1rem, 2vw, 1.25rem)`   |
| Body                | `1rem` / `1.125rem`           |
| Small print, labels | `0.875rem`                    |
| Micro-labels        | `0.75rem`                     |

Base line height is `1.5`; headings tighten to `1.2`.

> **Known inconsistency — there is no type scale.** Component SCSS contains
> **24 distinct `font-size` values**, including near-duplicates that no one can
> tell apart: `0.95rem`, `0.9rem`, `0.9375rem`, `0.875rem`, `0.85rem`,
> `0.8125rem`. They are all "small text" and should collapse to one or two
> tokens. Until they do, **prefer an existing value over inventing a new one** —
> `0.875rem` for small text, `1rem` for body.

---

## 5. Voice and tone

The copy is **plain, outcome-led and local**. It sells the result, not the
technology, and it never uses fear as the hook — even the cybersecurity page
leads with confidence rather than threat.

Headlines are declarative sentences about the customer's business:

> Empowering Businesses To Reach Their Potential Through Technology Solutions
> Technology That Moves Your Business Forward
> Technology That Works For Your Business
> Build Your Security Foundation with Confidence
> Let's Start a Conversation

**Rules that the existing copy already follows:**

- **Lead with the customer's outcome, not the service.** "Technology that works
  for your business", not "Managed service provision".
- **Name the place.** "Annapolis Valley", "Kentville", "Atlantic Canada" appear
  in nearly every meta description. This is both brand and local SEO.
- **"Locally owned" is a core claim.** It is the main differentiator against
  national MSPs and should survive any rewrite.
- **Plain words over jargon.** "Enterprise-level cybersecurity _without the
  complexity_" is the house move: acknowledge the scary version, then defuse it.
- **Title case for headings, sentence case for everything else.**
- **Canadian English** (`en_CA`), and the Oxford comma _is_ used, consistently:
  "efficiency, effectiveness, and excellence"; "threat detection, 24/7
  monitoring, and rapid response".

Page titles follow `Specific Thing | Triple E Technology Solutions`. The
homepage is the bare site name.

---

## 6. Where the data lives

Never hardcode any of this in a component.

| File                                             | Owns                                                            |
| ------------------------------------------------ | --------------------------------------------------------------- |
| `src/lib/metadata.ts`                            | `SITE_NAME`, `SITE_URL`, `GA_MEASUREMENT_ID`, `buildMetadata()` |
| `src/lib/business.tsx`                           | `BUSINESS` (NAP, hours, geo, social) and `BusinessJsonLd`       |
| `src/lib/breadcrumbs.tsx`, `src/lib/service.tsx` | Per-page structured data                                        |
| `src/lib/brand-mark.tsx`                         | The generated E mark                                            |
| `src/app/sitemap.ts`                             | The `routes` array                                              |
| `src/styles/abstracts/_variables.scss`           | Every colour                                                    |

`BUSINESS.phone` has three deliberate forms — `href` (E.164, for `tel:`),
`display` (what visitors read), `schema` (hyphenated, for JSON-LD). Use the
right one; do not invent a fourth. The same discipline applies to
`BUSINESS.hours`, which has a `display` string and a `schema` array.

NAP consistency is a local search ranking signal: search engines cross-reference
the site against directory listings, and inconsistent formatting weakens the
match. That is the reason for the single source, not tidiness.
