# Dunrite Dave – Design System Reference

## Overview

This document defines all visual design tokens used across the Dunrite Dave website. All values are defined as CSS custom properties in `assets/css/styles.css` (lines 6-35).

**Important:** Do not create duplicate values. Always reference these existing variables.

---

## Color Palette

### Brand Colors

| Variable | Hex | Usage |
|----------|-----|-------|
| `--ink-900` | `#081b33` | Darkest navy (footer, strips) |
| `--ink` | `#0b2545` | Primary navy (headings, dark sections) |
| `--ink-700` | `#14365c` | Lighter navy accent |
| `--teal` | `#0e8f9e` | Primary teal (buttons, links, accents) |
| `--teal-bright` | `#19c6c2` | Bright teal (hovers, highlights) |
| `--gold` | `#f4b740` | Warm gold (CTAs, stars, badges) |

### Neutral Colors

| Variable | Hex | Usage |
|----------|-----|-------|
| `--paper` | `#ffffff` | White background |
| `--mist` | `#f4f7fa` | Light gray background (alternating sections) |
| `--cloud` | `#e6edf4` | Subtle borders/dividers |
| `--line` | `#dbe4ee` | Default borders |
| `--slate` | `#5b6b7b` | Muted text, secondary copy |
| `--text` | `#15263d` | Primary body text |

### Gradients

| Variable | Value |
|----------|-------|
| `--grad-teal` | `linear-gradient(135deg, var(--teal-bright), var(--teal))` |
| `--grad-ink` | `linear-gradient(160deg, #0e2b50 0%, #081b33 100%)` |

**Usage:**
- `--grad-teal`: Primary buttons, accent text (via background-clip)
- `--grad-ink`: Hero backgrounds, dark sections, CTA bands

---

## Typography

### Font Families

```css
--heading-font: 'Sora', system-ui, sans-serif;
--body-font: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
```

**Source:** Google Fonts (see `<head>` in all HTML files)

### Heading Styles

| Element | Font Size | Weight | Line Height | Letter Spacing |
|---------|-----------|--------|-------------|----------------|
| `h1` (hero) | `clamp(2.6rem, 5.6vw, 4.3rem)` | 800 | 1.12 | -0.02em |
| `.display` | `clamp(2.4rem, 5.4vw, 4.1rem)` | 800 | 1.12 | -0.02em |
| `h2` / `.h2` | `clamp(1.9rem, 3.6vw, 2.8rem)` | 800 | 1.12 | -0.02em |
| `h3` / `.h3` | `clamp(1.25rem, 2vw, 1.5rem)` | 800 | 1.12 | -0.02em |

**Font:** Sora, 800 weight  
**Color:** `var(--ink)` or white on dark backgrounds

### Body Text

| Class | Size | Usage |
|-------|------|-------|
| Base body | `17px` | Default paragraph text |
| `.lead` | `1.18rem` | Emphasized intro text |
| `.muted` | `17px` (color: `--slate`) | De-emphasized text |
| `.eyebrow` | `12.5px` | All-caps labels above headings |

**Line Height:** `1.65` (body text)

---

## Spacing System

### Container & Layout

| Property | Value | Usage |
|----------|-------|-------|
| `--container` | `1280px` | Max content width |
| Container padding | `32px` horizontal | Side margins (desktop) |
| Container padding | `24px` horizontal | Side margins (mobile <720px) |

### Section Spacing

| Class | Padding | Usage |
|-------|---------|-------|
| `.section` | `80px 0` | Standard section |
| `.section--tight` | `56px 0` | Compact section (stats band) |
| `.section--mist` | `80px 0` + `background: var(--mist)` | Alternating background |

**Recent Change (2026-05-28):** Reduced from 96px/64px to 80px/56px for tighter feel.

### Component Spacing

| Component | Gap/Spacing | Notes |
|-----------|-------------|-------|
| `.grid` | `32px` gap | Standard grid gap |
| `.split` | `52px` gap | Two-column feature layouts |
| `.hero__grid` | `48px` gap | Hero two-column |
| `.stats` | `32px` gap | Stat cards |
| `.section-head` | `48px` margin-bottom | Space below section headers |
| `.btn-row` | `12px` gap | Button groups |
| `.checks` | `11px` gap | Check list items |

---

## Border Radius

| Variable | Value | Usage |
|----------|-------|-------|
| `--radius-sm` | `12px` | Form inputs, small cards |
| `--radius` | `18px` | Default cards, buttons (999px for pills) |
| `--radius-lg` | `28px` | Large cards, hero frames, sections |

**Buttons:** Always `999px` (full pill shape)

---

## Shadows

| Variable | Value | Usage |
|----------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(11,37,69,.06), 0 2px 8px rgba(11,37,69,.05)` | Subtle cards |
| `--shadow` | `0 12px 30px rgba(11,37,69,.10), 0 4px 10px rgba(11,37,69,.06)` | Elevated cards |
| `--shadow-lg` | `0 30px 70px rgba(11,37,69,.20)` | Hero images, popovers |

---

## Motion & Easing

| Property | Value |
|----------|-------|
| `--ease` | `cubic-bezier(.22,.61,.36,1)` |
| Scroll behavior | `smooth` |

**Animation durations:**
- Hover states: `0.25s` - `0.35s`
- Reveal animations: `0.7s`
- Marquee: `26s linear infinite`

---

## Buttons

### Variants

| Class | Background | Text Color | Usage |
|-------|------------|------------|-------|
| `.btn` | `var(--teal)` | White | Default |
| `.btn--primary` | `var(--grad-teal)` | White | Primary CTAs |
| `.btn--gold` | `var(--gold)` | `var(--ink-900)` | High-emphasis CTAs |
| `.btn--ghost` | Transparent | `var(--ink)` | Secondary actions |
| `.btn--light` | `rgba(255,255,255,.12)` | White | On dark backgrounds |

### Sizing

| Class | Padding | Font Size |
|-------|---------|-----------|
| `.btn` (default) | `15px 26px` | `15px` |
| `.btn--lg` | `17px 32px` | `16px` |

**Font:** Sora, 700 weight  
**Shape:** `border-radius: 999px` (full pill)  
**Hover:** `translateY(-2px)` + shadow increase

---

## Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| `980px` | Hero/split → single column, stats → 2 columns |
| `820px` | Mobile nav toggle, hide phone link |
| `720px` | All grids → single column, reduce section padding to 64px |
| `480px` | 4-column grids → single column |

---

## Grid Systems

### Column Counts

| Class | Columns | Gap |
|-------|---------|-----|
| `.grid--2` | 2 equal | 32px |
| `.grid--3` | 3 equal | 32px |
| `.grid--4` | 4 equal | 32px |
| `.split` | 1fr 1fr | 52px |
| `.hero__grid` | 1fr 1fr | 48px |
| `.stats` | 4 equal | 32px |

**Recent Change:** All grids now use equal ratios (1:1) instead of asymmetric (1.05:0.95).

---

## Special Effects

### Section Backgrounds

| Class | Background | Usage |
|-------|------------|-------|
| `.section--mist` | `var(--mist)` | Alternating light sections |
| `.section--ink` | `var(--grad-ink)` | Dark dramatic sections |

### Hero Overlays

Hero sections use radial gradients for atmospheric effects:
```css
radial-gradient(900px 500px at 78% -10%, rgba(25,198,194,.22), transparent 60%)
```

### Text Effects

**Gradient text (accent color):**
```css
background: var(--grad-teal);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
```

Used in: Hero headlines, stat numbers

---

## Component-Specific Spacing

### Cards

| Component | Padding | Border |
|-----------|---------|--------|
| `.card` | `28px` | `1px solid var(--line)` |
| `.review` | `28px` | `1px solid var(--line)` |
| `.pillar` | `32px` | None (image background) |
| `.team-card__body` | `20px 24px 24px` | None |
| `.info-card` | `20px` | `1px solid var(--line)` |

### Forms

| Element | Padding | Border |
|---------|---------|--------|
| `input`, `textarea` | `14px 16px` | `1px solid var(--line)` |
| `.form` gap | `16px` | — |
| `.form .row` gap | `16px` | — |

---

## Icon Sizes

| Context | Size |
|---------|------|
| Button icons | `18px × 18px` |
| Nav icons | `18px × 18px` |
| Card icons | `26px × 26px` |
| Check list icons | `22px × 22px` |
| Location icons | `20px × 20px` |

---

## Reference

**Source of truth:** `assets/css/styles.css` (lines 1-408)  
**Last updated:** 2026-05-28 (spacing polish)

**To modify design system:**
1. Update CSS custom properties in `styles.css` `:root` block
2. Update this document to match
3. Test across all 6 pages
4. Document change in PROJECT-MASTER.md

**Golden Rule:** Never hardcode colors or spacing. Always use CSS variables.
