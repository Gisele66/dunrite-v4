# Dunrite Dave – Backend Readiness

## Purpose

The site may stay static for now. Structure it so a backend can be added later **without redesigning the front end**.

**Do not build yet:** login, database, admin panels, server routes, or authentication — unless explicitly requested.

---

## Asset folders (current layout)

| Path | Role |
|------|------|
| `assets/css/styles.css` | All styles (single file; split later if needed) |
| `assets/js/main.js` | All client scripts (nav, reveals, form UX, image fallback) |
| `assets/img/` | Logos, favicon, brand SVGs |
| `assets/img/photos/` | Page photos (see `README-PHOTOS.md`) |

Keep new assets in these folders. Do not introduce a parallel folder structure unless migrating with a clear plan.

---

## Forms (API-ready hooks)

### Quote / contact estimate

| Attribute | Value |
|-----------|--------|
| Page | `contact.html` |
| Wrapper | `#estimate` |
| Form `id` | `quote-request-form` |
| Form `name` | `quote-request` |
| `data-form` | `quote` |
| Method | `POST` (wire `action` to API when ready) |

**Field `name` attributes:** `name`, `phone`, `email`, `service`, `route`, `message`

### Franchise inquiry

| Attribute | Value |
|-----------|--------|
| Page | `franchise.html` |
| Section | `#franchise-form` |
| Form `id` | `franchise-inquiry-form` |
| Form `name` | `franchise-inquiry` |
| `data-form` | `franchise` |
| Method | `POST` |

**Field `name` attributes:** `name`, `phone`, `email`, `region`, `capital`, `message`

### Connecting later

1. Set `action` to API endpoint (e.g. `/api/quote`, `/api/franchise-inquiry`)
2. Keep `method="post"` and existing `name` attributes
3. Add CSRF or API key handling in backend; optional `data-api-endpoint` on form if needed
4. Replace front-end-only success UX in `main.js` with real response handling

**Current behavior:** `main.js` prevents default submit and shows `[data-form-note]` — remove or extend when API exists.

---

## Dynamic sections (future data)

Use stable **IDs** and **`data-*` attributes** so templates can be swapped for API/JSON later without changing CSS.

| Area | Location | Hook |
|------|----------|------|
| Service pillars | `index.html` `#services` | `.pillar[data-service]` |
| Client reviews | `index.html` `#client-reviews` | `.review[data-testimonial]` |
| Franchise teaser | `index.html` `#franchise-teaser` | Section wrapper only |
| Team cards | `about.html`, `index.html` | `.team-card` (candidate for CMS) |
| Stats band | `index.html` | `.stat` items |

**Avoid:** Copy-pasting the same section HTML across pages when it will become dynamic — prefer one source (include, template, or JSON) when a backend exists.

---

## JavaScript rules

- Keep behavior in `assets/js/main.js` (or split later: `nav.js`, `forms.js`, `reveals.js`)
- **No inline JavaScript** in HTML for new work
- Form handling: select via `form[data-form]`, not one-off inline handlers
- Image fallback: `img[data-fallback]` pattern is already API-friendly

---

## Content that may move to JSON / database

| Content | Suggested future source |
|---------|-------------------------|
| Team members | `data/team.json` or DB table |
| Reviews / testimonials | `data/testimonials.json` |
| Service areas / routes | `data/routes.json` |
| Stats (1993, 30+, etc.) | `data/stats.json` or site config |
| Franchise checklist bullets | CMS or static JSON |

Keep copy in HTML for now; use consistent class names so a renderer can replace inner HTML later.

---

## Future backend features (not in scope now)

- Quote request submissions
- Email notifications
- Admin review of inquiries
- Franchise inquiry submissions
- Customer move tracking
- Authentication
- Database storage

When any of these are requested, extend structure — do not redesign the front end.

---

## Checklist before adding a backend

- [ ] Forms have `id`, `name`, `data-form`, and field `name` attributes
- [ ] Select options use `value` attributes (not display text only)
- [ ] No new inline `<script>` blocks in HTML
- [ ] New pages follow `assets/css` + `assets/js` + `assets/img` layout
- [ ] Dynamic-ready sections have IDs / `data-*` hooks documented here
- [ ] PROJECT-MASTER.md and this file updated if hooks change

---

**Last updated:** 2026-05-29
