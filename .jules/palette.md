# UX & Accessibility Journal - Palette 🎨

## 2026-02-12 - Site-wide Consistency & SEO Transitions
**Learning:** When refactoring a static site from a flat structure to a nested one, maintaining visual consistency across pages is crucial for the "app-like" feel. Using Meta Refresh + Canonical links is the best way to handle SEO during such transitions when a backend redirect (301) isn't available.
**Action:** Always check for existing indexing (Google verification) and implement a transition strategy (redirects + sitemap update) when changing file structures.

## 2026-02-11 - Speculative Prefetching
**Learning:** For static sites, `link rel="prefetch"` significantly reduces perceived latency for navigation between pages.
**Action:** Keep prefetch links updated when reorganizing file structures.

## 2026-02-18 - Semantic Breadcrumbs and Focus Visibility
**Learning:** Using `<nav aria-label="Breadcrumb">` with an `<ol>` is the gold standard for accessible breadcrumbs. Combined with `aria-current="page"` and CSS-based separators, it provides a clean, screen-reader-friendly experience without cluttering the UI. Additionally, always ensuring `a:focus-visible` is styled with enough `outline-offset` (4px+) prevents focus rings from overlapping with other visual cues like active state borders.
**Action:** Always prefer semantic `<nav>` for breadcrumbs and avoid `outline: none` on interactive elements.

## 2026-02-19 - Heading Hierarchy and Semantic Lists
**Learning:** For static sites, maintaining a single `<h1>` per page is crucial for accessibility. On subpages, the site title in the header should be a `<div>` (styled to match the home `<h1>`) so that the article title can be the primary heading. Additionally, itemized content should always use semantic `<ul>` lists instead of formatted `<p>` tags for better screen reader support.
**Action:** Always audit heading levels on subpages and use semantic lists for group items.
