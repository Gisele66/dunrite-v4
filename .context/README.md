# Dunrite Dave – Context File Index

## Welcome

This folder contains comprehensive project documentation to help maintain, update, and understand the Dunrite Dave website mockup.

**Last Updated:** 2026-05-29

---

## Quick Start

**New to this project?** Read files in this order:

1. **PROJECT-MASTER.md** ← Start here (project overview, goals, rules)
2. **DESIGN-SYSTEM.md** ← Visual language reference
3. **COMPONENTS.md** ← What exists and where
4. **CONTENT-GUIDELINES.md** ← Tone and messaging
5. **MAINTENANCE.md** ← How to make changes
6. **BACKEND-READINESS.md** ← Form hooks and future API prep (if adding backend later)

---

## File Guide

### 📋 [PROJECT-MASTER.md](./PROJECT-MASTER.md)
**Purpose:** Main project overview and working rules

**Read this for:**
- Project goals and current stage
- Client situation and expectations
- Critical do's and don'ts
- Franchise messaging rules
- Recent changes log
- Emergency context reset

**Read first if:** You're new to the project or returning after time away.

---

### 🎨 [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)
**Purpose:** Complete visual design reference

**Read this for:**
- Color palette (brand colors, neutrals, gradients)
- Typography (fonts, sizes, weights)
- Spacing system (containers, sections, components)
- Border radius values
- Shadows and effects
- Button variants
- Responsive breakpoints
- Grid systems

**Read first if:** Making visual/style changes, adjusting spacing, or changing colors.

---

### 🧩 [COMPONENTS.md](./COMPONENTS.md)
**Purpose:** Inventory of all UI components

**Read this for:**
- Complete component catalog
- Component locations (which pages)
- HTML structure examples
- CSS class names
- Reusability patterns
- Component modifiers
- Animation patterns

**Read first if:** Adding new sections, editing layouts, or wondering what components exist.

---

### ✍️ [CONTENT-GUIDELINES.md](./CONTENT-GUIDELINES.md)
**Purpose:** Writing, tone, and messaging rules

**Read this for:**
- Brand voice and tone
- Messaging hierarchy
- Franchise positioning rules
- Service descriptions
- CTA best practices
- SEO guidance
- Content update checklist

**Read first if:** Writing or editing copy, adding content, or ensuring consistent messaging.

---

### 🔌 [BACKEND-READINESS.md](./BACKEND-READINESS.md)
**Purpose:** Structure for future API/backend without building it yet

**Read this for:**
- Form IDs, `name`, and `data-form` hooks
- Asset folder layout
- Dynamic-section IDs (`#client-reviews`, etc.)
- What not to build until requested

**Read first if:** Connecting forms to an API or planning database work.

---

### 🔧 [MAINTENANCE.md](./MAINTENANCE.md)
**Purpose:** Step-by-step recipes for common tasks

**Read this for:**
- How to update contact info
- How to change colors
- How to adjust spacing
- How to add photos
- How to add team members
- How to connect forms to email
- How to add new pages
- Troubleshooting common issues

**Read first if:** You need to make a specific change and want a quick recipe.

---

## When to Use Each File

| I need to... | Read this file... |
|--------------|-------------------|
| Understand project goals | PROJECT-MASTER.md |
| Know what NOT to do | PROJECT-MASTER.md |
| Change a color | DESIGN-SYSTEM.md |
| Adjust spacing | DESIGN-SYSTEM.md |
| Find a component | COMPONENTS.md |
| Edit copy/content | CONTENT-GUIDELINES.md |
| Update phone number | MAINTENANCE.md |
| Add a photo | MAINTENANCE.md |
| Fix something broken | MAINTENANCE.md |
| Add a new page | MAINTENANCE.md |

---

## Golden Rules (From All Contexts)

### Project Rules
1. ❌ Do NOT rebuild or reinvent what already works
2. ✅ Inspect existing files first; read only files needed for the task
3. ✅ Polish one section at a time; stay on task
4. ✅ Keep changes small and reversible
5. ❌ Do NOT make franchising primary message
6. ✅ Use plain, simple language; explain files before editing

### Design Rules
1. ✅ Always use CSS variables (not hardcoded values)
2. ✅ Test all responsive breakpoints
3. ✅ Maintain equal grid ratios (1:1)
4. ❌ Do NOT create duplicate CSS

### Content Rules
1. ✅ Professional but approachable tone
2. ✅ Specific details (routes, years, services)
3. ❌ Avoid corporate jargon
4. ❌ Never keyword-stuff for SEO

### Maintenance Rules
1. ✅ Keep backups before major changes
2. ✅ Test on one page first
3. ✅ Preserve what's working
4. ❌ Do NOT change multiple things at once

---

## Project Structure Recap

```
dunrite-dave/
├── .context/              ← YOU ARE HERE
│   ├── README.md          ← This index file
│   ├── PROJECT-MASTER.md  ← Project overview & rules
│   ├── DESIGN-SYSTEM.md   ← Visual design reference
│   ├── COMPONENTS.md      ← UI component inventory
│   ├── CONTENT-GUIDELINES.md ← Writing & messaging
│   └── MAINTENANCE.md     ← How-to recipes
│
├── index.html             ← Homepage
├── moving.html            ← Moving & Delivery page
├── washing.html           ← Window & Power Washing page
├── about.html             ← About & Team page
├── franchise.html         ← Franchise Opportunities page
├── contact.html           ← Contact & Estimate Form page
│
├── assets/
│   ├── css/
│   │   └── styles.css     ← All styles (single file)
│   ├── js/
│   │   └── main.js        ← Navigation, reveals, form UX
│   └── img/
│       ├── logo.svg           ← Dark logo
│       ├── logo-light.svg     ← Light logo
│       ├── favicon.svg        ← Browser icon
│       └── photos/            ← Drop photos here
│           └── README-PHOTOS.md
│
└── README.md              ← Technical deployment info
```

---

## Quick Access

### Need to Make a Change?

**Common tasks with direct links:**

- Update phone number → [MAINTENANCE.md - Contact Info](./MAINTENANCE.md#updating-contact-information)
- Change brand colors → [MAINTENANCE.md - Colors](./MAINTENANCE.md#changing-colors)
- Adjust spacing → [MAINTENANCE.md - Spacing](./MAINTENANCE.md#adjusting-spacing)
- Add team member → [MAINTENANCE.md - Team](./MAINTENANCE.md#adding-team-members)
- Edit page content → [MAINTENANCE.md - Content](./MAINTENANCE.md#editing-content)
- Add photos → [MAINTENANCE.md - Photos](./MAINTENANCE.md#adding-photos)

### Need Context?

- What are the project goals? → [PROJECT-MASTER.md](./PROJECT-MASTER.md#primary-goal)
- What colors are used? → [DESIGN-SYSTEM.md - Color Palette](./DESIGN-SYSTEM.md#color-palette)
- What components exist? → [COMPONENTS.md - Overview](./COMPONENTS.md#overview)
- How should content sound? → [CONTENT-GUIDELINES.md - Voice](./CONTENT-GUIDELINES.md#brand-voice--tone)

### Troubleshooting

- Something broke → [MAINTENANCE.md - Common Issues](./MAINTENANCE.md#common-issues--fixes)
- Images not showing → [MAINTENANCE.md - Images](./MAINTENANCE.md#issue-images-not-showing)
- Colors not updating → [MAINTENANCE.md - Colors](./MAINTENANCE.md#issue-colors-not-updating)

---

## Context File Maintenance

### Updating These Docs

**When to update:**
- After making significant project changes
- When adding new components
- When changing design system values
- When establishing new content patterns
- After client feedback requires rule changes

**What to update:**
- Affected context file(s)
- "Last Updated" date in that file
- Recent changes in PROJECT-MASTER.md
- This index if adding new files

### Adding New Context Files

**If project grows, consider:**
- DEPLOYMENT.md (if deployment becomes complex)
- API-INTEGRATION.md (if connecting to backend)
- ANALYTICS.md (if adding tracking/analytics)
- SEO-CHECKLIST.md (if SEO becomes priority)

**Place new files in `.context/` folder and update this index.**

---

## Emergency Quick Reference

### Lost Context?
Read PROJECT-MASTER.md from the top.

### Need to Make a Change Fast?
Check MAINTENANCE.md quick recipe index.

### Client Meeting Prep?
Review:
1. PROJECT-MASTER.md (what we're doing and why)
2. Recent changes section
3. Current stage and next steps

### Something Broke?
1. Check MAINTENANCE.md common issues
2. Restore from backup
3. Verify file paths and CSS classes

---

## Contact & Support

**For project questions:**
- Client: Dave (Dunrite owner)
- All decisions about content, services, and business direction should be confirmed with client

**For technical issues:**
- Reference these context files
- Check existing code for patterns
- Test changes on one page first
- Keep backups

---

## Version History

**2026-05-29:** Initial context file system created
- PROJECT-MASTER.md established
- DESIGN-SYSTEM.md documented current styles
- COMPONENTS.md inventoried all components
- CONTENT-GUIDELINES.md defined voice and messaging
- MAINTENANCE.md provided change recipes

**Previous major change:**
- 2026-05-28: Spacing and alignment polish (container width, padding, gaps)

---

**Welcome to the Dunrite Dave project. These context files are your guide.**

**Remember:** Preserve what works, polish one section at a time, and always keep the client's needs in focus.
