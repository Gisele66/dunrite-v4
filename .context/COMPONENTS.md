# Dunrite Dave – Component Inventory

## Overview

This document catalogs all reusable UI components in the Dunrite Dave website, where they appear, and their CSS class names.

**Purpose:** Quickly locate components for editing, ensure consistency, prevent duplication.

---

## Global Components

### Header / Navigation
**Location:** All pages (identical)  
**HTML Structure:** Lines 16-42 in all pages  
**CSS:** Lines 115-158 in `styles.css`

**Key Classes:**
- `.site-header` - Fixed header container
- `.site-header.is-stuck` - Scrolled state (added by JS)
- `.nav` - Navigation flex container
- `.nav__logo` - Logo wrapper with light/dark variants
- `.nav__links` - Main navigation links
- `.nav__cta` - Right-side phone + button
- `.nav__phone` - Phone number link
- `.nav__toggle` - Mobile hamburger (hidden on desktop)

**Behavior:**
- Fixed position, becomes sticky with backdrop blur on scroll
- Logo switches from light to dark on scroll
- Collapses to hamburger menu at 820px breakpoint

---

### Footer
**Location:** All pages (identical)  
**HTML Structure:** Lines 289-336 in `index.html` (similar in all)  
**CSS:** Lines 338-351 in `styles.css`

**Key Classes:**
- `.footer` - Dark navy footer container
- `.footer__grid` - 4-column grid (1.5fr 1fr 1fr 1.2fr)
- `.footer__logo` - Logo image wrapper
- `.footer__social` - Social icon row
- `.footer__bottom` - Copyright bar at bottom

**Content Sections:**
1. Brand column (logo, tagline, social)
2. Services links
3. Company links
4. Contact info

**Note:** Phone, email, hours appear here on every page.

---

## Hero Components

### Homepage Hero
**Location:** `index.html` only  
**HTML:** Lines 46-79  
**CSS:** Lines 159-206

**Structure:**
- `.hero` - Full-width dark gradient background
- `.hero__grid` - Two-column layout (1fr 1fr)
- `.hero__copy` - Left column with text
- `.hero__badge` - "Est. 1993" pill badge
- `.hero__sub` - Subheading paragraph
- `.hero__trust` - Three stat cards
- `.hero__art` - Right column with image
- `.hero__chip` - Floating "Fully insured" card overlay
- `.hero__wave` - Curved SVG divider at bottom

**Special Effects:**
- Radial gradient overlays for atmosphere
- Gradient text on "done right" using background-clip

---

### Interior Page Hero
**Location:** `moving.html`, `washing.html`, `about.html`, `franchise.html`, `contact.html`  
**CSS:** Lines 329-336

**Key Classes:**
- `.page-hero` - Simpler dark header with breadcrumb
- `.page-hero__inner` - Max-width 760px content wrapper
- `.breadcrumb` - Small text navigation trail

**Content:**
- Eyebrow label
- H1 heading
- Lead paragraph
- No image or complex layout

---

## Section Components

### Section Headers
**Location:** Most sections across all pages  
**CSS:** Lines 86-89

**Structure:**
```html
<div class="section-head center">
  <span class="eyebrow">Label</span>
  <h2 class="h2">Heading</h2>
  <p>Description paragraph</p>
</div>
```

**Modifiers:**
- `.center` - Centers text (use with `.section-head`)
- No modifier: left-aligned

**Spacing:** 48px margin-bottom

---

### Eyebrow Labels
**Location:** Above headings throughout site  
**CSS:** Lines 69-76

**Class:** `.eyebrow`

**Styling:**
- All caps, 12.5px, 700 weight
- Teal color with gradient bar before text
- Letter-spacing: 0.18em

**Usage:** Signals section category or context

---

## Card Components

### Service Pillar Cards
**Location:** `index.html` (services section), `moving.html`, `washing.html`  
**HTML:** Lines 98-115 in `index.html`  
**CSS:** Lines 221-234

**Structure:**
```html
<article class="pillar">
  <div class="pillar__bg"><img src="..." /></div>
  <span class="tag">Category</span>
  <h3>Title</h3>
  <p>Description</p>
  <a class="link" href="...">Link text</a>
</article>
```

**Features:**
- Full-height background image with gradient overlay
- Content anchored to bottom
- Hover effect on arrow link
- Min-height: 440px

**Used In:** Homepage services section (2 cards)

---

### Info Cards
**Location:** Throughout service pages  
**CSS:** Lines 236-250

**Class:** `.card`

**Structure:**
- Icon container `.ic` (54×54px, teal gradient bg)
- H3 heading
- Paragraph description

**Behavior:**
- Subtle lift on hover (`translateY(-4px)`)
- Shadow increases
- Border color lightens

---

### Team Cards
**Location:** `index.html` (team preview), `about.html` (full team)  
**CSS:** Lines 278-286

**Key Classes:**
- `.team-card` - Outer container
- `.team-card__photo` - Square photo (1:1 aspect ratio)
- `.team-card__body` - Text content area
- `.team-card__role` - Small caps role label (teal)

**Content:**
- Photo
- Name (H3)
- Role
- Short bio paragraph

---

### Review Cards
**Location:** `index.html` (reviews section)  
**CSS:** Lines 288-295

**Structure:**
```html
<div class="review">
  <div class="stars">★★★★★</div>
  <p>Quote text</p>
  <div class="who">
    <span class="avatar">Letter</span>
    <div><b>Name</b><span>Context</span></div>
  </div>
</div>
```

**Features:**
- Gold stars at top
- Flex column layout (quote expands)
- Avatar circle with initial
- Author name + context at bottom

---

### Info Cards (Contact)
**Location:** `contact.html`  
**CSS:** Lines 321-327

**Class:** `.info-card`

**Structure:**
- Icon box `.ic` (teal gradient)
- Label + value text

**Usage:** Phone, email, hours, location display

---

## Layout Components

### Grid Systems
**CSS:** Lines 216-219

**Classes:**
- `.grid` - Base grid (32px gap)
- `.grid--2` - 2 equal columns
- `.grid--3` - 3 equal columns
- `.grid--4` - 4 equal columns

**Responsive:**
- `--2` → 1 column at 720px
- `--3` → 1 column at 720px
- `--4` → 2 columns at 980px, 1 at 480px

---

### Split Layout
**Location:** "Why Dunrite" and "Service Area" sections  
**CSS:** Lines 266-270

**Class:** `.split`

**Structure:**
- Two columns (1fr 1fr, 52px gap)
- `.split__media` - Image side (rounded, shadowed)
- Content side (no wrapper class needed)

**Modifier:**
- `.split--rev` - Reverses order on desktop

**Responsive:** Single column at 720px

---

### Stats Band
**Location:** `index.html` (line 147-155)  
**CSS:** Lines 259-264

**Structure:**
```html
<section class="section--tight section--ink">
  <div class="container">
    <div class="stats">
      <div class="stat"><b>Number</b><span>Label</span></div>
      <!-- repeat -->
    </div>
  </div>
</section>
```

**Features:**
- Dark gradient background
- 4 equal columns (→ 2 at 980px)
- Large gradient numbers
- Muted labels

---

### Check Lists
**Location:** Multiple sections (Why Dunrite, Service benefits, Franchise)  
**CSS:** Lines 252-257

**Class:** `.checks`

**Structure:**
```html
<ul class="checks">
  <li>
    <svg>...</svg> <!-- checkmark icon -->
    List item text
  </li>
</ul>
```

**Styling:**
- Teal checkmark icons (22×22px)
- 11px gap between items
- Left-aligned with icon flex-start

---

### Area List (Service Area)
**Location:** `index.html` service area section  
**CSS:** Lines 272-276

**Class:** `.area__list`

**Features:**
- 2-column grid (28px column gap, 10px row gap)
- Pin icons (20×20px teal)
- Bottom border on each item

**Responsive:** Single column at 720px

---

## Special Components

### Marquee Strip
**Location:** `index.html` (line 82-87)  
**CSS:** Lines 208-213

**Classes:**
- `.strip` - Dark container
- `.strip__track` - Animated content row

**Content:** Location names separated by bullet points  
**Animation:** Infinite horizontal scroll (26s linear)

**Note:** Content duplicated for seamless loop

---

### Franchise Teaser
**Location:** `index.html` only (line 250-268)  
**CSS:** Lines 304-306

**Class:** `.franchise-teaser`

**Layout:**
- Grid 1fr 1fr (44px gap)
- White card with border/shadow
- Badge, heading, paragraph, button on left
- Check list on right

**Badge:** `.badge-soft` (gold tint, all-caps)

---

### CTA Band
**Location:** `index.html` (line 272-286), other pages  
**CSS:** Lines 297-302

**Class:** `.cta-band`

**Features:**
- Dark gradient background
- Radial overlay effect
- Center-aligned content
- Max-width constraint on paragraph (560px)
- Button row centered

**Usage:** Final conversion section on pages

---

## Button Components

### Button Variants
**CSS:** Lines 92-112

**Base:** `.btn`

**Modifiers:**
| Class | Use Case |
|-------|----------|
| `.btn--primary` | Gradient teal, primary CTAs |
| `.btn--gold` | Gold background, high-emphasis |
| `.btn--ghost` | Transparent with border, secondary |
| `.btn--light` | Semi-transparent white on dark backgrounds |
| `.btn--lg` | Larger size (17px/32px padding) |
| `.btn--block` | Full width |

**Button Row:** `.btn-row` - Flex wrapper with 12px gap

---

## Form Components

### Form Structure
**Location:** `contact.html`, `franchise.html`  
**CSS:** Lines 308-319

**Classes:**
- `.form` - Form grid container (16px gap)
- `.form .row` - Two-column row for grouped fields
- `.field` - Individual field wrapper
- `label`, `input`, `textarea`, `select` - Styled form elements

**Field Types:**
- Text inputs
- Email inputs
- Phone inputs
- Select dropdowns
- Textarea (min-height 130px)

**Focus State:** Teal border + shadow ring

---

## Icon Usage Patterns

### SVG Icons
Icons are inline SVG with consistent sizing:

| Context | Size | Stroke |
|---------|------|--------|
| Buttons | 18×18px | 2px |
| Cards | 26×26px | 2px |
| Check lists | 22×22px | 2px |
| Location pins | 20×20px | 2px |
| Nav phone | 18×18px | 2px |

**Color:** `currentColor` (inherits from parent)

**Source:** Feather Icons style (stroke-based, rounded caps)

---

## Animation Components

### Reveal Animation
**CSS:** Lines 358-363

**Class:** `.reveal`

**Behavior:**
- Starts with `opacity: 0` and `translateY(24px)`
- JS adds `.in` class when scrolled into view
- Smooth fade-up transition (0.7s)

**Delay Modifiers:**
- `data-delay="1"` - 0.08s delay
- `data-delay="2"` - 0.16s delay
- `data-delay="3"` - 0.24s delay

**Usage:** Applied to most sections, cards, and content blocks

---

## Component Reusability

### Shared Across Pages
✅ Header/nav  
✅ Footer  
✅ Section headers (`.section-head`)  
✅ Buttons (all variants)  
✅ Eyebrow labels  
✅ Info cards  
✅ Forms

### Page-Specific
❌ Homepage hero (complex, unique)  
❌ Marquee strip (homepage only)  
❌ Franchise teaser card (homepage only)  
❌ Service pillar cards (homepage + service pages)  
❌ Stats band (homepage only)

### Modifiers for Context
- `.section--mist` - Light background
- `.section--ink` - Dark background
- `.center` - Center text alignment
- `.reveal` - Scroll animation
- `data-delay` - Stagger animation

---

## Maintenance Notes

### Adding a New Component
1. Check this inventory - does something similar exist?
2. If yes, reuse existing component with modifier
3. If no, add to `styles.css` in logical section
4. Document here with location, usage, modifiers
5. Test on all breakpoints (980px, 820px, 720px, 480px)

### Modifying an Existing Component
1. Locate component in this document
2. Check CSS location in `styles.css`
3. Note where it's used (affects multiple pages?)
4. Make change and test all instances
5. Update this document if structure changes

### Component Naming Convention
- Block: `.component-name` (e.g., `.team-card`)
- Element: `.component-name__element` (e.g., `.team-card__photo`)
- Modifier: `.component-name--modifier` (e.g., `.btn--primary`)

**Pattern:** BEM-inspired (Block Element Modifier)

---

## Quick Reference

**Most frequently used:**
- Buttons: `.btn`, `.btn--primary`, `.btn--gold`
- Cards: `.card`, `.team-card`, `.review`
- Layout: `.grid`, `.split`, `.section-head`
- Typography: `.eyebrow`, `.h2`, `.lead`
- Animations: `.reveal`, `data-delay`

**For new sections:**
1. Use `.section` wrapper
2. Add `.container` inside
3. Start with `.section-head.center` if needed
4. Use `.grid--2` or `.split` for layouts
5. Add `.reveal` for animations

---

**Last Updated:** 2026-05-29  
**Source:** All HTML pages + `assets/css/styles.css`
