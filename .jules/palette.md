# UX & Accessibility Journal - Palette 🎨

## 2026-02-12 - Site-wide Consistency & SEO Transitions
**Learning:** When refactoring a static site from a flat structure to a nested one, maintaining visual consistency across pages is crucial for the "app-like" feel. Using Meta Refresh + Canonical links is the best way to handle SEO during such transitions when a backend redirect (301) isn't available.
**Action:** Always check for existing indexing (Google verification) and implement a transition strategy (redirects + sitemap update) when changing file structures.

## 2026-02-11 - Speculative Prefetching
**Learning:** For static sites, `link rel="prefetch"` significantly reduces perceived latency for navigation between pages.
**Action:** Keep prefetch links updated when reorganizing file structures.

## 2026-02-13 - Semantic Breadcrumbs & Theme Color
**Learning:** For static sites, using a semantic `<nav aria-label="Breadcrumb">` with an `<ol>` and CSS-based separators (`::after`) provides the best balance of accessibility and clean markup. Adding a `theme-color` meta tag is a high-impact, low-effort micro-UX for mobile users.
**Action:** Always prefer CSS pseudo-elements for breadcrumb separators to avoid screen readers announcing the slash. Add `theme-color` to all pages to match the site's primary branding.
