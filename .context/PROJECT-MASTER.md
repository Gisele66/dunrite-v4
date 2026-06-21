# Dunrite Dave – Master Project Context

## Project Overview

**Project Name:** Dunrite Dave Moving Company Website Mockup  
**Current Stage:** Maintenance & Polish  
**Status:** Active mockup for prospect review

## Purpose

Maintain and polish an existing static website mockup for a moving company prospect. The current site was first built with Claude Opus and should **not be rebuilt from scratch**.

## Primary Goal

Make the current site look professional, impressive, and ready to show as a mockup that could close the deal.

## Client Situation

- The prospect (Dave) does not want to commit to a full site yet
- He is still figuring out his business direction and possible franchising
- He dislikes his current site and has expressed interest in a new one
- This mockup should impress him **without** making the site feel locked-in or too final
- He may pivot business direction, so flexibility is important

## Target Audiences

### Primary Audience
Customers looking for moving services in Prince George, North Central BC, and Haida Gwaii.

### Secondary Audience  
Future business partners or franchise prospects (keep this subtle and secondary).

## Design Direction

**Tone:** Professional, clean, modern, trustworthy, service-based, polished  
**Feel:** Established and reliable, not flashy or experimental  
**Impression:** High-end but approachable, capable of handling difficult routes

## Critical Working Rules

### Do NOT:
- ❌ Replace or rebuild the existing site
- ❌ Reinvent anything that already works (components, patterns, layout, CSS)
- ❌ Code before explaining the plan
- ❌ Redesign globally without approval
- ❌ Make franchising the main message
- ❌ Create duplicate CSS or repeated layout logic
- ❌ Change working features without reason
- ❌ Drift off task or expand scope without approval

### DO:
- ✅ First inspect existing files before suggesting changes
- ✅ Polish one section at a time
- ✅ Keep changes small and reversible
- ✅ Preserve anything that is already working
- ✅ Maintain existing structure, content, and design direction
- ✅ Get specific approval before major changes
- ✅ Stay on task — complete the requested change only
- ✅ Reuse and extend what exists; do not replace with new patterns

### Communication:
- ✅ Use **plain, simple language** in plans, explanations, and summaries
- ✅ Be direct and brief — say what you will change and why
- ❌ Avoid jargon, filler, or long digressions

### Efficiency Rules:
- ✅ **Read only the files needed** for the current task
- ✅ **Do not scan the whole project** repeatedly
- ✅ **Work one section at a time** with focused edits
- ✅ **Explain which files you need** before reading/editing them
- ✅ Use context files to understand structure before reading code

## Backend Readiness

The site may stay static for now. **Prepare structure only — do not build a backend** unless requested.

- ❌ No login, database, admin panels, or server routes yet
- ✅ Forms: clear `id`, `name`, `data-form`, and field `name` attributes (see `.context/BACKEND-READINESS.md`)
- ✅ Scripts in `assets/js/`, styles in `assets/css/`, images in `assets/img/`
- ✅ Stable IDs/classes for quote forms, franchise inquiry, service cards, testimonials
- ✅ Avoid inline JavaScript; keep logic in `main.js`
- ✅ Avoid duplicating HTML for sections that may become dynamic later

**Future (not now):** quote submissions, email notifications, admin inquiry review, franchise submissions, move tracking, auth, database storage.

Full hooks and field lists: **`.context/BACKEND-READINESS.md`**

## Franchising (removed from site)

Franchise page and nav were **removed from v4**. Do not re-add franchise links, tabs, teasers, or pages unless the client explicitly requests it.

## Current Implementation

- **Technology:** Static HTML/CSS/JS (no build tools, no frameworks)
- **Pages:** 5 total (index, moving, washing, about, contact)
- **Main Stylesheet:** `assets/css/styles.css` (single file, organized by sections)
- **Script:** `assets/js/main.js` (nav, reveals, form UX)
- **Images:** `assets/img/` (SVG logos, photos in `/photos/`)

## Project Files Structure

```
dunrite-dave/
├── .context/              ← PROJECT CONTEXT (you are here)
│   ├── PROJECT-MASTER.md  ← This file
│   ├── DESIGN-SYSTEM.md   ← Colors, spacing, typography reference
│   ├── COMPONENTS.md      ← Component inventory
│   ├── CONTENT-GUIDELINES.md ← Writing & messaging rules
│   ├── BACKEND-READINESS.md ← Form hooks, future API prep
│   └── MAINTENANCE.md     ← Common change recipes
├── index.html             ← Homepage
├── moving.html
├── washing.html
├── about.html
├── contact.html
├── assets/
│   ├── css/styles.css     ← ALL styles in one file
│   ├── js/main.js
│   └── img/
└── README.md              ← Technical deployment info
```

## Recent Changes

**2026-05-28:** Spacing & alignment polish
- Reduced container max-width from 1180px to 1140px
- Increased horizontal padding from 24px to 32px
- Reduced section vertical padding from 96px to 80px
- Balanced grid ratios from asymmetric to 1:1
- Standardized gaps throughout (26px → 32px, etc.)
- Tightened internal component spacing
- **Result:** More comfortable desktop viewing, better side margins, no stretched sections

## Next Steps (If Needed)

- Continue section-by-section polish as requested
- Add real photos when client provides them
- Connect forms to email service when client is ready
- Minor content edits as client reviews
- Prepare for potential live deployment

## Emergency Contact Reset

If you need to understand this project quickly:

1. Read this file (PROJECT-MASTER.md) first
2. Review DESIGN-SYSTEM.md for visual language
3. Check COMPONENTS.md to see what exists
4. Read CONTENT-GUIDELINES.md for tone/messaging
5. Use MAINTENANCE.md for common changes

**Golden Rule:** When in doubt, preserve what exists and ask before changing.
