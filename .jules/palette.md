# UX & Accessibility Journal - Palette 🎨

## 2026-02-12 - Site-wide Consistency & SEO Transitions
**Learning:** When refactoring a static site from a flat structure to a nested one, maintaining visual consistency across pages is crucial for the "app-like" feel. Using Meta Refresh + Canonical links is the best way to handle SEO during such transitions when a backend redirect (301) isn't available.
**Action:** Always check for existing indexing (Google verification) and implement a transition strategy (redirects + sitemap update) when changing file structures.

## 2026-02-11 - Speculative Prefetching
**Learning:** For static sites, `link rel="prefetch"` significantly reduces perceived latency for navigation between pages.
**Action:** Keep prefetch links updated when reorganizing file structures.

## 2026-02-13 - Semantic Breadcrumbs & Specific Nav Selectors
**Learning:** When adding breadcrumbs using a `<nav>` element, use specific attribute selectors like `nav[aria-label="Main navigation"]` in CSS to prevent style inheritance from the main navigation. Using an ordered list and `aria-current="page"` for breadcrumbs is the standard accessible pattern.
**Action:** Always verify that the expected ARIA labels exist in the HTML before refactoring CSS to use attribute selectors.
