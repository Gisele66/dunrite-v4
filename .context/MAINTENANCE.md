# Dunrite Dave – Maintenance Guide

## Overview

This document provides step-by-step recipes for common changes, updates, and maintenance tasks on the Dunrite Dave website.

**Purpose:** Enable quick, safe updates without breaking existing functionality.

---

## Quick Reference

| Task | Complexity | File(s) | Section |
|------|------------|---------|---------|
| Update phone number | Easy | All HTML | [Contact Info](#updating-contact-information) |
| Change colors | Easy | styles.css | [Colors](#changing-colors) |
| Add team member | Easy | about.html | [Team](#adding-team-members) |
| Edit service copy | Easy | Any page | [Content](#editing-content) |
| Add new page | Medium | New HTML | [New Pages](#adding-new-pages) |
| Adjust spacing | Medium | styles.css | [Spacing](#adjusting-spacing) |
| Connect forms | Medium | contact/franchise | [Forms](#connecting-forms-to-email) |
| Add photos | Easy | assets/img/photos | [Photos](#adding-photos) |

---

## Updating Contact Information

### Phone Number

**Files to update:** All 6 HTML files  
**Locations per file:**
1. Header navigation (nav__phone)
2. Footer (contact section)
3. CTA sections (on some pages)
4. Contact page (info-card)

**Steps:**
1. Search for current phone: `(250) 649-0006`
2. Replace in all locations
3. Also update `href="tel:+12506490006"` links
4. Test all phone links click-to-call on mobile

**Example:**
```html
<!-- Navigation -->
<a class="nav__phone" href="tel:+12501234567">
  <svg>...</svg>
  (250) 123-4567
</a>
```

### Email Addresses

**Current emails:**
- `dunritedavedelivery@gmail.com` (delivery)
- `dunritedave@gmail.com` (washing)

**Files to update:**
- All HTML footers
- contact.html (info-cards and form action)
- franchise.html (form action)

**Steps:**
1. Search for email addresses
2. Replace in footer links: `<a href="mailto:...">...</a>`
3. Update form `action` attributes if using email handler
4. Keep email context labels consistent

### Hours & Availability

**Current:** Mon–Fri 9:30–5 · Closed holidays

**Files:** All HTML footers

**Format:**
```html
<li><span>Mon–Fri 9:30–5 · Closed holidays</span></li>
```

---

## Changing Colors

### Method 1: CSS Variables (Recommended)

**File:** `assets/css/styles.css`  
**Location:** Lines 6-35 (`:root` block)

**To change a color:**
1. Locate variable (e.g., `--teal: #0e8f9e`)
2. Replace hex value
3. Save and test across all pages

**Example - Change teal:**
```css
:root {
  --teal: #0e8f9e;  /* Change this */
  --teal-bright: #19c6c2;  /* And this if needed */
}
```

**This automatically updates:**
- Buttons
- Links
- Icons
- Eyebrow labels
- Hover states
- Everything using `var(--teal)`

### Method 2: Brand Colors Only

**To change entire brand:**

1. Update primary colors:
   - `--ink` (navy - headings, text)
   - `--teal` (primary brand color)
   - `--gold` (accent CTAs)

2. Update gradients:
   - `--grad-teal`
   - `--grad-ink`

3. Test all pages in both light and dark sections

### Testing After Color Changes

- [ ] Check button contrast (readable text)
- [ ] Review dark sections (hero, footer, CTA bands)
- [ ] Verify link colors in footer
- [ ] Test hover states
- [ ] Check icon colors
- [ ] Review forms (focus states)

---

## Adjusting Spacing

### Container Width

**File:** `styles.css` line 30  
**Current:** `--container: 1140px;`

**To adjust:**
```css
:root {
  --container: 1200px;  /* Make wider */
}
```

**Affects:** All content max-width on desktop

### Section Padding (Vertical Spacing)

**File:** `styles.css` lines 58-59

**Current values:**
```css
.section { padding: 80px 0; }
.section--tight { padding: 56px 0; }
```

**To increase/decrease space between sections:**
- Change both top and bottom values equally
- Maintain proportional relationship (tight = ~70% of normal)

### Component Gaps

**Common gap values:**
```css
.grid { gap: 32px; }           /* Standard grid */
.split { gap: 52px; }          /* Two-column features */
.hero__grid { gap: 48px; }     /* Hero layout */
.btn-row { gap: 12px; }        /* Button groups */
```

**To adjust:**
1. Locate component in `styles.css`
2. Adjust `gap` property
3. Test responsive breakpoints

### Side Margins (Container Padding)

**File:** `styles.css` line 57

**Desktop:**
```css
.container { padding-inline: 32px; }
```

**Mobile (line 389):**
```css
@media (max-width: 720px) {
  .container { padding-inline: 24px; }
}
```

---

## Editing Content

### Changing Page Text

**Steps:**
1. Open relevant HTML file
2. Find text between tags (ignore HTML tags themselves)
3. Edit text only, preserve tags
4. Save and refresh browser

**Example:**
```html
<!-- BEFORE -->
<h2>Moving, delivery & washing — done right.</h2>

<!-- AFTER -->
<h2>Your trusted moving partner since 1993.</h2>
```

### Adding Bullet Points

**Use existing `.checks` list:**
```html
<ul class="checks">
  <li>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
    New bullet point text here
  </li>
</ul>
```

**Copy the entire `<li>` block and modify text.**

### Editing Headings

**Class reference:**
- `.h2` - Main section headings
- `.h3` - Subsection headings
- `.eyebrow` - Small labels above headings

**Keep structure:**
```html
<div class="section-head center">
  <span class="eyebrow">Label</span>
  <h2 class="h2">Main Heading</h2>
  <p>Description paragraph</p>
</div>
```

---

## Adding Photos

### Required Photos

**List:** See `assets/img/photos/README-PHOTOS.md`

**Key filenames:**
- `dave.jpg` - Dave's portrait
- `dave-michelle.jpg` - Michelle's portrait
- `melina.jpg` - Melina's portrait
- `fleet-1.jpg` - Hero image
- `fleet-2.jpg` - Service area image
- `pickup.jpg` - Moving pillar card
- `washing.jpg` - Washing pillar card

### Adding a Photo

**Steps:**
1. Save image to `assets/img/photos/`
2. Use exact filename from list
3. Recommended format: JPG (optimized for web)
4. Recommended size: 1200-2000px wide
5. Refresh page - image appears automatically

**No code changes needed** - images use `data-fallback` attribute that shows placeholder until photo exists.

### Replacing Logos

**Files:**
- `assets/img/logo.svg` (dark logo, light backgrounds)
- `assets/img/logo-light.svg` (light logo, dark backgrounds)
- `assets/img/favicon.svg` (browser tab icon)

**Replace SVG files with same filenames. All pages update automatically.**

---

## Adding Team Members

### Homepage Team Preview

**File:** `index.html` lines 190-215  
**Limit:** 3 members (fits grid--3)

**Template:**
```html
<article class="team-card reveal">
  <div class="team-card__photo">
    <img src="assets/img/photos/name.jpg" alt="Name, Role" data-fallback />
  </div>
  <div class="team-card__body">
    <h3>Name</h3>
    <span class="team-card__role">Role Title</span>
    <p>Short bio describing their role and contribution.</p>
  </div>
</article>
```

### Full Team Page

**File:** `about.html`  
**Grid:** Can expand to more members

**Steps:**
1. Copy existing `<article class="team-card">` block
2. Paste within `.grid` container
3. Update:
   - Photo filename
   - Name
   - Role
   - Bio paragraph
4. Add photo file to `/photos/` folder
5. Adjust grid class if needed (`grid--3` to `grid--4`)

---

## Connecting Forms to Email

### Current State
Forms have UX (validation, success message) but don't send email yet.

### Option 1: Form Service (Easiest)

**Services:** Formspree, Web3Forms, Basin

**Steps:**
1. Create account and get endpoint URL
2. Open `contact.html` (line 272) or `franchise.html` (line 180)
3. Find `#quote-request-form` (`data-form="quote"`) or `#franchise-inquiry-form` (`data-form="franchise"`)
4. Update form attributes:

```html
<!-- BEFORE -->
<form id="quote-request-form" data-form="quote">

<!-- AFTER -->
<form id="quote-request-form" data-form="quote" action="https://formspree.io/f/YOUR_ID" method="POST">
```

5. Keep `id`, `name`, and `data-form` attributes; update `main.js` when API returns real responses (see BACKEND-READINESS.md)
6. Keep all input `name` attributes (needed for submission)
7. Test form submission

**Email destination:** Configure in form service dashboard

### Option 2: Self-Hosted Script

**Requires:** PHP or Node.js backend

**Steps:**
1. Create server-side script to send email
2. Update form `action` to script path:

```html
<form action="/php/send-email.php" method="POST">
```

3. Script should:
   - Validate inputs
   - Send email to `dunritedavedelivery@gmail.com`
   - Return success/error response
   - Handle spam protection

### Preserving Current UX

**If keeping data attributes for custom JS:**
- Form validation still works
- Success message animation still works
- Keep structure as-is

**For simple approach:**
- Use form service
- Remove custom JS handling
- Let service handle success message

---

## Adding New Pages

### Steps

1. **Duplicate existing page:**
   ```
   Copy contact.html → new-page.html
   ```

2. **Update page content:**
   - Change `<title>` tag
   - Update breadcrumb navigation
   - Replace page-specific content
   - Keep header/footer intact

3. **Add to navigation:**
   - Open all 6 HTML files
   - Find `<ul class="nav__links">` (line ~24)
   - Add new `<li><a href="new-page.html">Page Name</a></li>`
   - Update footer links if appropriate

4. **Set active state:**
   - On new page, add `class="is-active"` to its nav link
   - Remove from other pages' matching links

**Template structure to preserve:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags -->
  <link rel="stylesheet" href="assets/css/styles.css" />
</head>
<body>
  <header class="site-header">...</header>
  
  <main>
    <section class="page-hero">...</section>
    <!-- Page content sections -->
  </main>
  
  <footer class="footer">...</footer>
  
  <script src="assets/js/main.js" defer></script>
</body>
</html>
```

---

## Responsive Testing

### Breakpoints to Test

| Width | Target | What Changes |
|-------|--------|--------------|
| 1440px+ | Large desktop | Max-width container |
| 980px | Tablet | Grids collapse, 2-column stats |
| 820px | Small tablet | Mobile nav, hide phone link |
| 720px | Mobile | All grids single column |
| 480px | Small mobile | 4-col grids to 1 column |

### Testing Checklist

- [ ] Navigation (hamburger menu works at 820px)
- [ ] Hero layout (single column at 980px)
- [ ] Service cards (stack properly)
- [ ] Forms (fields don't overflow)
- [ ] Buttons (readable, tappable size)
- [ ] Images (no overflow or distortion)
- [ ] Footer (readable columns)
- [ ] Spacing (not too cramped on mobile)

### How to Test

**Browser DevTools:**
1. Open page in Chrome/Firefox
2. Press F12 for DevTools
3. Click device icon (responsive mode)
4. Test each breakpoint
5. Check both portrait and landscape

---

## Performance Optimization

### Images

**Current photos should be:**
- 1200-2000px wide max
- JPG format (better compression than PNG for photos)
- Optimized (80-85% quality)
- Under 500KB each if possible

**To optimize:**
1. Use tool like TinyJPG or Squoosh
2. Export at 85% quality
3. Resize to 2000px max width
4. Save to `/photos/` folder

### Fonts

**Current:** Google Fonts (Sora, Inter)

**Already optimized:**
- Preconnect to fonts.googleapis.com
- Only loading needed weights (400, 500, 600, 700, 800)
- Display swap for faster render

**No action needed** unless switching fonts.

### CSS & JS

**Single file approach:**
- All CSS in one file (easier to maintain, one HTTP request)
- Minimal JavaScript (just essentials)

**No build tools needed** - already optimized for static hosting.

---

## Backup & Version Control

### Before Major Changes

1. **Duplicate entire folder:**
   ```
   Copy: dunrite-dave → dunrite-dave-backup-2026-05-29
   ```

2. **Or use Git (if set up):**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

### Rolling Back Changes

**If something breaks:**
1. Locate backup folder
2. Copy working file back
3. Or use Git:
   ```bash
   git checkout -- filename.html
   ```

---

## Common Issues & Fixes

### Issue: Images Not Showing

**Check:**
- [ ] File exists in `assets/img/photos/`
- [ ] Filename matches exactly (case-sensitive)
- [ ] Image format is supported (jpg, png, svg)
- [ ] Path in `src` attribute is correct

**Fix:** Verify file path and name, re-save image if needed.

---

### Issue: Spacing Looks Wrong

**Check:**
- [ ] Container class present: `<div class="container">`
- [ ] Section class correct: `<section class="section">`
- [ ] No extra padding added inline

**Fix:** Remove inline styles, use CSS classes only.

---

### Issue: Colors Not Updating

**Check:**
- [ ] Updated CSS variable in `:root` block
- [ ] Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- [ ] No inline `style=""` attributes overriding

**Fix:** Clear browser cache, ensure CSS variable is updated.

---

### Issue: Form Not Submitting

**Check:**
- [ ] Form has `action` attribute
- [ ] Form has `method="POST"` (if using service)
- [ ] All inputs have `name` attributes
- [ ] Form service/endpoint is active

**Fix:** Check form service configuration, test endpoint directly.

---

### Issue: Navigation Not Working on Mobile

**Check:**
- [ ] JavaScript file loaded: `<script src="assets/js/main.js" defer></script>`
- [ ] No JavaScript errors in browser console (F12)
- [ ] Nav toggle button exists

**Fix:** Verify JS file path, check console for errors.

---

## Emergency Contacts

### Project Files
- Main context: `.context/PROJECT-MASTER.md`
- Design reference: `.context/DESIGN-SYSTEM.md`
- Component list: `.context/COMPONENTS.md`
- Content rules: `.context/CONTENT-GUIDELINES.md`

### When Stuck

1. Check relevant context file
2. Look for similar existing code
3. Test change on one page first
4. Keep backups before major edits
5. Preserve what's working

---

## Deployment

### To Live Server

**Requirements:**
- Web server (Nginx, Apache, IIS, etc.)
- HTTPS (recommended)
- No special server config needed

**Steps:**
1. Upload entire folder contents to web root
2. Point domain to folder
3. Test all pages
4. Verify forms (if connected)
5. Check images load

**Server location examples:**
- `/var/www/dunrite/`
- `/public_html/`
- `C:\inetpub\wwwroot\`

### Testing After Deploy

- [ ] All pages load
- [ ] Navigation works
- [ ] Images appear
- [ ] Forms submit (if connected)
- [ ] Phone/email links work
- [ ] SSL certificate active
- [ ] Mobile responsive

---

## Maintenance Schedule

### Monthly
- Check for broken links
- Test form submissions
- Review photos load correctly
- Verify contact info still accurate

### Quarterly
- Review content for accuracy
- Update any changed services/routes
- Check for browser compatibility
- Test on new devices

### Annually
- Update copyright year (footer)
- Review full site for outdated info
- Consider minor design refresh
- Optimize images if new ones added

---

## Quick Recipe Index

**Content Updates:**
- [Edit text](#editing-content)
- [Update contact info](#updating-contact-information)
- [Add team member](#adding-team-members)

**Visual Changes:**
- [Change colors](#changing-colors)
- [Adjust spacing](#adjusting-spacing)
- [Add photos](#adding-photos)

**Structural Changes:**
- [Add new page](#adding-new-pages)
- [Connect forms](#connecting-forms-to-email)

**Troubleshooting:**
- [Common issues](#common-issues--fixes)
- [Responsive testing](#responsive-testing)

---

**Last Updated:** 2026-05-29  
**For Complex Changes:** Refer to full context files in `.context/` folder  
**Golden Rule:** Test changes, keep backups, preserve what works
