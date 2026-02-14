# UX & Accessibility Journal - Palette 🎨

## 2026-02-12 - Site-wide Consistency & SEO Transitions
**Learning:** When refactoring a static site from a flat structure to a nested one, maintaining visual consistency across pages is crucial for the "app-like" feel. Using Meta Refresh + Canonical links is the best way to handle SEO during such transitions when a backend redirect (301) isn't available.
**Action:** Always check for existing indexing (Google verification) and implement a transition strategy (redirects + sitemap update) when changing file structures.

## 2026-02-11 - Speculative Prefetching
**Learning:** For static sites, `link rel="prefetch"` significantly reduces perceived latency for navigation between pages.
**Action:** Keep prefetch links updated when reorganizing file structures.

## 2026-02-14 - Semantic Breadcrumbs and Scoped Navigation
**Learning:** Implementing breadcrumbs as a semantic `<nav aria-label="Breadcrumb">` with an `<ol>` improves accessibility for screen readers. Using attribute selectors like `nav[aria-label="Main navigation"]` in CSS ensures that styles are scoped correctly when multiple navigation elements exist on a page, preventing style leakage.
**Action:** Always use semantic lists for breadcrumbs and scope navigation styles using `aria-label` attributes.
