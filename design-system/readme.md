# Fort Worth Botanic Garden — Design System

The design guide and manifest for FWBG. Everything here is derived from two sources of truth: the
official brand guidelines PDF and the live production website.

## Sources

| Source | What it gave us |
| --- | --- |
| `uploads/1. FWBG-brand-guidelines-June-2025.pdf` (v1.0, June 2025, 54pp) | Brand foundation, voice, logo rules, primary + four seasonal palettes with Pantone/CMYK/RGB and contrast ratios, typography rules, photography direction, event branding, directional signage |
| [fwbg.org](https://fwbg.org) — WordPress, theme `habitat-bootstrap` (CodyHouse-derived) | Every token value, the production component CSS (buttons, badges, chips, form controls, cards, mega-nav, accordion), the logo SVGs, the icon set, and the photography library |
| Extracted working notes | `research/brand-guidelines.txt`, `research/theme-style.css`, `research/theme-seasons.css`, `research/typekit.css` |

No Figma file or code repository was supplied. If either exists, hand it over — the component
inventory below was reconstructed from shipped CSS, not from a component library manifest.

## The organisation

The **Fort Worth Botanic Garden (FWBG)** is the oldest major botanic garden in Texas: 120 acres and
23 specialty gardens at 3220 Botanic Garden Blvd, Fort Worth. It operates in partnership with the
**Botanical Research Institute of Texas (BRIT)**, its scientific arm (1700 University Drive), which
runs the herbarium, library, press and conservation programmes. In July 2026 FWBG received the
National Medal for Museum and Library Service.

**Naming hierarchy** (from the guidelines, and it is a hard rule): first mention is always "the Fort
Worth Botanic Garden (FWBG)", then "FWBG", then "the Garden". "FWBG" must be introduced before "the
Garden" is used. The exception is when "the Garden" is part of an event name — *Christmas at the
Garden*.

**Mission.** To explore the critically important world of plants, collaborate to discover the role
they play in our cultural and natural environments, and engage people to conserve nature and improve
the human experience.

**Tagline.** Explore, Discover & Engage.

**Brand pillars.** Ever-Blooming Inspiration · Rooted in Community · Nature as a Living Classroom ·
Science that Sustains.

### Surfaces represented here

1. **fwbg.org** — the public marketing and ticketing website. Rebuilt from the ground up in 2025.
   This is the primary UI kit (`ui_kits/website/`).
2. **Event & print creative** — the modular event layout system from the guidelines: billboards,
   web banners, social posts, rack cards, email. Recreated in `ui_kits/event_creative/`.
3. **Directional signage** — documented in the guidelines (Satoshi ALL CAPS exterior, New Kansas
   Thin interior, 6.5:1 minimum contrast, 1" cap height) but not built as a kit; it is a fabrication
   spec, not a screen surface.

---

## Content fundamentals

**Voice.** Welcoming, educational, community-focused, inspired by nature — with a "storyteller's
soul". Descriptive where it earns the reader's attention, then out of the way. The guidelines are
explicit: *"pictures are worth a thousand words. Simplify the copy where possible, and let the beauty
of the Garden speak for itself."*

**Reading level.** Target 8th grade. This is a real constraint, not a suggestion.

**Person.** Second person for the visitor ("your very first visit", "Plan Your Visit"), first person
plural for the institution ("We are welcoming", "our living collections"). Never "I". Never
address the reader as "users" or "customers" — they are guests, members, volunteers, visitors.

**Casing.** Title Case for headlines and buttons. ALL CAPS reserved for eyebrows, sponsor descriptor
lines ("PRESENTED BY", "SUPPORTED BY", "IN PARTNERSHIP WITH") and exterior signage. Sentence case for
body copy and UI labels.

**Sentence rhythm.** Short declaratives stacked into a scene, then one longer sentence that lands the
idea. From the brand story: *"Every day brings a new adventure when you step into nature. Each path
invites discovery. Every season tells a different story at FWBG."*

**Headline pattern.** The approved headline bank leans on three shapes:
- *"X. It's in our Nature"* — Beauty / Science / Education
- *"Where …"* — "Where nature tells the story", "Where science blooms and curiosity grows",
  "Where every visit plants a memory"
- Botanical present-continuous — "The Garden never stops blooming", "Forever in Bloom",
  "Always blooming, always evolving"

Other approved lines: Step into nature · Between soil and sky · Together, We Grow · Rooted in beauty
since 1934 · A garden for all seasons · Come see what's in season · More than a garden. A living
legacy.

**Calls to action.** Short verb phrases, Title Case: Get Tickets · Buy Tickets · Plan Your Visit ·
Learn More · Become a Member · View Map · Register Now · Let's Go.

**Emoji.** Not used. Nothing in the guidelines, the site, or the print system uses emoji. Do not
introduce them.

**Unicode as decoration.** Only the ampersand in "Explore, Discover & Engage" and en dashes in date
ranges ("May 22 – Sept 7"). No arrows, checkmarks or bullets typed as characters — bullets are drawn
as small Meadow dots.

**Things the brand does not say.** No urgency marketing ("Don't miss out!"), no exclamation stacking,
no corporate abstraction ("leverage", "solutions", "experiences that delight"). Sponsor recognition
is always factual and never effusive.

---

## Visual foundations

### Colour

The palette is warm, earthed and low-saturation, with one hot accent. Limestone (`#F2EDE7`) is the
page — not white. Every surface is a tint of it.

- **Primary / institutional:** Evergreen `#293A2E` · Meadow `#8EA937` · Sunstone `#F68A3D` ·
  Limestone `#F2EDE7`.
- **Four seasonal palettes** swap the dark anchor and the two supporting hues while Sunstone stays
  constant: Spring (Riverleaf `#004A4A`, Petal Pink, Citrus) · Summer (Evergreen, Meadow, Mist) ·
  Autumn (Red Oak `#380808`, Honey, Koi) · Winter (Solstice `#2B1F4A`, Frost, Lilac). Set
  `data-season="spring|summer|fall|winter"` on any ancestor. Only the website navigation logo changes
  colour seasonally; the logo is otherwise fixed.
- **Two background colours per piece, maximum.** The guidelines' contrast floor is 4.5:1 for
  everything and 6.5:1 for signage; every palette page in the PDF prints its measured ratio.
- Feedback colours (success / warning / error) exist in the production CSS for UI only. They are not
  brand colours and should never appear in campaign creative.

### Type

Two families, strictly divided.

- **New Kansas** (Adobe Fonts, family name `new-kansas`) — display only. Thin (100) is the default;
  Medium (500) weights one or two key words inside a headline. Used **no more than once per printed
  side or digital block**. Fallback: Georgia.
- **Satoshi** — eyebrows, subheads, body, UI, buttons. Medium (500) is the body weight; Black (900)
  for emphasis. Fallback: Arial.

Scale: 18px base, 1.215 modular ratio. Headlines 24–36pt for brochures/email/web, larger for
signage. Subheads one-third to one-half the headline size. Body 8–10pt print, 14–18px digital.
Leading: 1.2× for headlines and body, 1.0× for subheads. Tracking 0 everywhere except ALL CAPS,
which gets a light open-out. Space below a headline ≥ half the headline's height; space between
paragraphs = one line-height.

### Layout & spacing

Non-linear spacing scale on a 1rem unit (`--space-xxxxs` 3px → `--space-xxxxl` 344px). Content max
width 80rem for editorial, 100rem for the header and full-bleed sections. Section padding is
`--space-xl` (82px) vertically. Header is a fixed 85px bar with a hairline bottom rule; the
announcement bar sits above it and is dismissible.

### Backgrounds

Photography-first. Full-bleed hero images with a protection gradient; flat Limestone or Evergreen
slabs everywhere else. The one recurring graphic device is the **skeletal-leaf watermark** —
the leaf from the logo, drawn as veins, scaled to 300–440px, set at 10–20% opacity in
`--color-bg-dark` with `mix-blend-mode: multiply`, and bled off an edge. No gradients as decoration
(the only gradient in the production CSS is the white-to-Limestone wash behind the newsletter block
and the black protection gradient on image captions). No repeating patterns. No noise or grain.

### Photography

Natural light, no heavy filters, no stylised grading. Warm and green — Texas sun, deep foliage,
limestone paths. A mix of wide landscape shots, mid-range candids of real guests, and macro plant
detail. Diverse in ethnicity, age and family shape. Genuine expressions: joy, wonder, reflection,
curiosity. Nothing posed, commercial or clinical.

### Corners, borders, shadows

- Radius base `0.375em`; cards use `--radius-xl` (≈18px at 16px root). Buttons and badges are always
  full pills (`30px` / `--radius-full`) — never squared.
- Borders are almost always `inset 0 0 0 1px` box-shadows rather than real borders, so they do not
  affect layout. Hairline rules in `--color-contrast-lower` separate accordion rows.
- Shadows are broad and very soft, five-stop stacks. Cards rest at `--shadow-xs` and lift to
  `--shadow-md` on hover. There is no heavy drop shadow anywhere in the system.
- Colour blocks (the event-branding device) have no border and no shadow — they read as slabs.

### Motion & states

- Everything transitions at `all .2s ease`. Movement uses `--ease-out`
  `cubic-bezier(0.215, 0.61, 0.355, 1)`; `--ease-out-back` exists for the rare overshoot but is
  barely used. No bounce, no spring, no parallax.
- **Hover:** solid buttons step one shade along their ramp (primary → primary-dark; accent →
  accent-light). Outline buttons darken their 1px ring. Cards raise their shadow and scale their
  image to 1.04 over 0.5s. Links underline.
- **Press:** colour only. Nothing scales or shrinks on press.
- **Focus:** a 2px outer ring in `--color-bg-darker`, with the inset border faded out so the two do
  not double up. Never the browser default outline.
- **Disabled:** `opacity: .6` and `cursor: not-allowed`. No greying of the fill.

### Transparency & blur

Used sparingly and always over photography or colour: the newsletter form controls use a 10%
primary-tinted fill with `backdrop-filter: blur(10px)`; the blurred card caption variant uses an 80%
black panel with the same blur. Elsewhere transparency appears as `hsla(var(--color-x-h), …, .2)`
tint fills on badges. Never blur over flat Limestone.

### Protection gradients vs capsules

Caption text over imagery always sits on a linear black-to-transparent protection gradient, never on
a capsule or scrim box. Capsules (pills) are reserved for buttons, badges and chips.

---

## Iconography

**The set shipped here is FWBG's own**, extracted from the production site as inline SVG and saved to
`assets/icons/`. There is no icon font and no third-party icon library on the site — icons are hand-
placed inline SVGs. Nothing has been substituted from a CDN.

- **Style:** minimal line icons on a 16/20/24px grid, 1–2px stroke, `stroke="currentColor"`,
  `fill="none"`, mostly square or round caps. They are deliberately plain — the leaf mark carries all
  the brand personality, so the UI glyphs stay neutral.
- **UI glyphs:** `chevron-left` / `chevron-right` / `chevron-down` (plus thin and plain weights for
  slideshow arrows), `close` in five sizes, `menu`, `arrow-right`, `arrow-slide-prev` /
  `arrow-slide-next`.
- **Weather glyphs:** `weather-clear-day`, `weather-rain`, `weather-wind`, `weather-precipitation` —
  the homepage runs a live "Today's Weather" panel, which is a genuinely distinctive part of this
  product.
- **Social marks:** solid, brand-accurate glyphs for Facebook, Instagram, LinkedIn, TikTok, X and
  YouTube.
- **Brand graphics:** `promo-badge-starburst` (a 379px scalloped medallion used for promotional
  overlays on carousel cards), `logo-leaf.svg` (the large skeletal-leaf watermark), and the three
  logo lockups.
- **Wayfinding icons** for the printed park map (parking, restroom, gift shop, restaurant, water
  fountain, picnic area, shuttle stop) are described in the guidelines but were **not obtainable** —
  they live in the print map artwork, not on the website. If you need them, send the map source file.
- **Emoji are never used.** Unicode characters are not used as icons.
- The `Icon` component masks these SVGs with `currentColor` so they inherit text colour. Set its
  `base` prop to the relative path of `assets/icons`.

---

## Index

### Root
- `styles.css` — the single entry point consumers link. `@import` list only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills wrapper so this folder works as a Claude Code skill.
- `thumbnail.html` — homepage tile.

### `tokens/`
`fonts.css` (Typekit import + self-hosted Satoshi `@font-face`) · `colors.css` · `seasons.css`
(the four seasonal scopes + `[data-theme="dark"]`) · `typography.css` · `spacing.css` · `shape.css`
(radius, shadow, easing, icon sizes) · `base.css` (element defaults).

### `assets/`
- `logo-primary.svg`, `logo-reversed.svg`, `logo-mark.svg` (duo-leaf bug), `logo-leaf.svg`
  (skeletal-leaf watermark)
- `fonts/` — Satoshi Light/Regular/Italic/Medium/MediumItalic/Bold/Black/Variable (woff2)
- `icons/` — 29 SVGs, listed under Iconography above
- `images/` — 18 production photographs from fwbg.org

### `components/`
**core/** — `Button`, `IconButton`, `Icon`, `Logo`, `LeafMotif`, `Eyebrow`, `SectionHeading`,
`Badge`, `Chip`
**cards/** — `MediaCard`, `EventCard`, `PriceCard`
**forms/** — `Input`, `Select`, `Textarea`, `Checkbox`, `Radio`
**navigation/** — `AnnouncementBar`, `SiteHeader`, `Accordion`
**layout/** — `Section`, `ColorBlock`

Each directory has a `@dsCard` HTML showing its variants. Each component has a `.d.ts` props
contract and a `.prompt.md` usage note.

**Intentional additions** (no direct counterpart in the source, added because the source's approach
does not survive reuse):
- `Icon` — the site hand-inlines SVG per use; a wrapper was needed so the shipped set is reachable.
- `LeafMotif` — the watermark is applied ad hoc as `.bg-leaf` in several places; wrapped for reuse.
- `SectionHeading` and `Eyebrow` — the eyebrow/headline/standfirst stack is a hard-coded pattern
  repeated across the site rather than a named component.
- `ColorBlock` — the event-branding colour block is defined in the guidelines as a layout device but
  has no web implementation.

### `guidelines/`
22 specimen cards covering the primary and four seasonal palettes, semantic ramps, surfaces, text
ramp, feedback colours, display and body type, the type scale, the eyebrow stack, spacing scale and
spacing in use, radii, elevation, logo lockups, the leaf watermark, the icon set, photography, and
interaction states.

### `ui_kits/`
- `website/` — click-through recreation of fwbg.org: homepage, gardens listing, event detail,
  membership.
- `event_creative/` — the modular event layout system: billboard, social post, rack card, email.

---

## Known gaps

- **New Kansas** is served from FWBG's Adobe Fonts kit (`https://use.typekit.net/pgm0cqm.css`), which
  is domain-restricted by Adobe. It renders here and on fwbg.org; it may fall back to Georgia in other
  contexts. Licensed font files cannot be self-hosted. **Anyone generating an asset with this system
  should flag the Georgia fallback to the requester** — see `CLAUDE.md`.
- The **primary stacked** and **single-colour / embroidery** logo lockups shown in the guidelines were
  not published to the website and could not be extracted from the PDF (they are vector artwork with
  no embedded raster). Only horizontal primary, reversed and the leaf bug are here.
- **Departmental logo lockups** (BRIT, Giving Circle) follow a fixed architecture described in the
  guidelines; request them from marketing@fwbg.org rather than constructing them.
- The **park map wayfinding icon set** is not included (see Iconography).
