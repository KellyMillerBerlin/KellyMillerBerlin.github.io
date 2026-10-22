# Design spec — Kelly Marie Miller portfolio
*Last updated: end of initial design sprint. All decisions below are locked and implemented in demo v28.*

---

## Locked decisions

### Layout
- Single-page scroll, no separate pages
- Right-side sticky scroll-spy nav: Top / About / Work / Project / Contact
- Nav highlights current section with accent-1 color + left border (dual signal for color-blind users)
- Max content width: 680px, layout wrap: 900px
- Side nav hidden on mobile (≤760px) — mobile nav solution TBD before launch

### Typography
- **Display font:** DM Serif Display (headers, section eyebrows, case titles, project title, sub-headers)
- **Body font:** Karla (all prose, tags, context lines, nav, footer)
- No third typeface

**Desktop type scale (body bumped one step from original):**
| Element | Size |
|---|---|
| Hero name | 44px (unchanged) |
| Hero tagline | 20.5px |
| Hero identity line | 15.5px |
| Section eyebrows | 14.5px |
| About paragraphs | 18px |
| Sub-headers (What I do etc.) | 16.5px |
| Case title | 21px |
| Case outcome | 16.5px |
| Project title | 24px |
| Footer links | 16px |

**Mobile (≤760px):** sizes held close to original desktop values, minimal increase.

### Color system
Three-tier hierarchy. Color encodes structure, not decoration.

| Token | Hex | Role | Contrast on #FAFAF8 |
|---|---|---|---|
| `--accent-1` | `#A8174A` | Top-level headers, active nav, project border, accent word | 5.76:1 ✓ AA |
| `--accent-2` | `#C2305C` | Nested headers, case titles, project title, hero identity | 4.55:1 ✓ AA |
| `--accent-3` | `#5C6225` | Sub-headers, inline keywords, tags | 6.22:1 ✓ AA |
| `--text` | `#1A1A1A` | All body prose | 16.65:1 ✓ AAA |
| `--text-muted` | `#6B6A64` | Context lines, nav default, footer note | 5.19:1 ✓ AA |
| `--hairline` | `#E5E1D8` | Borders, dividers, dot separators | decorative only |
| `--bg` | `#FAFAF8` | Page background | — |
| `--card-bg` | `#FFFFFF` | Card and modal backgrounds | — |

**Color-as-signal rules:**
- accent-1: top-level section headers only (About, Selected work, Right now)
- accent-2: headers nested inside a section (case titles, project title)
- accent-3: sub-level headers and standalone keywords/tags not directly beneath a parent header
- Body prose is always `--text` (near-black), never colored
- Color is never the only interactive signal — always paired with a second cue (border, underline, weight)
- Before adding any new colored element: assign it to an existing tier or leave it uncolored

### Rose ornament
- Source: Gemini-generated line art, Image 1 (clean single-color line art, transparent background)
- File: `assets/images/rose-divider.png`
- Usage: section divider, centered between two hairline rules
- Size: 48px tall, auto width
- Opacity: 70%
- Background stripped programmatically (brightness threshold >240 → transparent)

### Hero animation
- Dot-connect: 9 dots of varying sizes, always visible on load, in all three accent colors
- Connecting line draws in on scroll (stroke-dashoffset technique), completes by ~220px scroll
- Positioned right side of hero, 160×150px viewbox
- Hidden on mobile (≤760px)
- Respects `prefers-reduced-motion`: line renders fully resolved immediately when set

### Case study cards
- Layout: full-width top image (200px tall), text below (vertical stack, not horizontal)
- Image slot: `object-fit: contain` with 12px padding — accommodates diagrams at any aspect ratio
- Click anywhere on card opens modal
- Modal: title, context, outcome paragraph, 4 bullet points, tags
- Modal image: 260px tall, same diagram, with zoom (magnifying glass) button in bottom-right corner
- Zoom opens lightbox: full-screen, warm paper background (#FAFAF8 at 96% opacity), subtle shadow on image
- Lightbox dismisses on click, Escape, or × button
- No pill/button styling on tags — plain text with · separator

### Diagram guidance (Excalidraw)
- Target aspect ratio: ~3:1 to 4:1 (wide landscape), set canvas before drawing
- Two-color semantic system: raspberry for problem/constraint phase, muted olive for resolution/delivery phase
- Export at 2× or higher resolution
- White background stripped on import

### Footer
- Email: `kelly.m.miller0@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/kelmariemiller/`
- No resume link (one source of truth principle)
- Location note: Portland, Oregon · open to remote

### Accessibility
- All accent colors verified ≥4.5:1 against `#FAFAF8` (full AA at any text size)
- Focus states: `:focus-visible` on all interactive elements
- `prefers-reduced-motion` respected on all scroll animations
- `aria-hidden="true"` on decorative elements (rose divider, hero animation)
- Modal: `role="dialog"`, `aria-modal="true"`, focus moves to close button on open

---

## File structure (scaffold as of end of design sprint)

```
index.html          ← HTML shell, rarely needs editing
css/
  tokens.css        ← All design tokens: edit here to retheme
  styles.css        ← Component styles, do not edit for content changes
js/
  content.js        ← All copy, links, case study content — edit here
  main.js           ← Rendering, nav, animation, modal logic
assets/
  images/
    rose-divider.png
    case-migration.png   ← landscape diagram, raspberry/olive two-color
```

---

## Content status (as of end of design sprint)

All copy in `content.js` is **placeholder text** pending rewrite. Copy rewrite in progress in a separate Google Doc, to be transferred into `content.js` once finalized.

**Sections needing real copy:**
- Hero tagline and keywords
- About: What I do / My journey / Off work (~6-7 sentences total)
- Case study 1: title, outcome, 4 bullets, tags (Standing up a cross-team delivery model)
- Case study 2: title, outcome, 4 bullets, tags (Untangling a stalled platform migration) — diagram done
- Case study 3: title, outcome, 4 bullets, tags (Designing a rollout for a skeptical org)
- Right now: project description

**Images needed:**
- Case study 1 diagram (wide landscape, Excalidraw)
- Case study 3 diagram (wide landscape, Excalidraw)
- Case study 2 diagram: ✓ complete (`case-migration.png`)

---

## Next steps

1. Copy rewrite in Google Doc → transfer to `content.js`
2. Create diagrams for case studies 1 and 3 in Excalidraw (wide landscape format, raspberry/olive palette)
3. Set up GitHub repo and clone locally
4. Drop scaffold files into repo
5. Save rose PNG as `assets/images/rose-divider.png`
6. Open `index.html` locally, confirm it renders from `content.js`
7. Push to `main` → GitHub Pages deploys
8. Begin Phase 1 civic tech discovery (mid-July after vacation)
