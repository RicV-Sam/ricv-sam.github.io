# UX & Accessibility Journal - Palette 🎨

## 2026-02-12 - Site-wide Consistency & SEO Transitions
**Learning:** When refactoring a static site from a flat structure to a nested one, maintaining visual consistency across pages is crucial for the "app-like" feel. Using Meta Refresh + Canonical links is the best way to handle SEO during such transitions when a backend redirect (301) isn't available.
**Action:** Always check for existing indexing (Google verification) and implement a transition strategy (redirects + sitemap update) when changing file structures.

## 2026-02-11 - Speculative Prefetching
**Learning:** For static sites, `link rel="prefetch"` significantly reduces perceived latency for navigation between pages.
**Action:** Keep prefetch links updated when reorganizing file structures.

## 2026-02-13 - Specificity in Semantic Nav Elements
**Learning:** When using multiple semantic `<nav>` elements on a single page (e.g., Main Navigation and Breadcrumbs), generic `nav` CSS selectors can cause unintended side effects like unwanted backgrounds or text alignment.
**Action:** Always use specific attribute selectors like `nav[aria-label="Main navigation"]` or classes to isolate styles for different navigation components.
