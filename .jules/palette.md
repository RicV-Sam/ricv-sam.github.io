# UX & Accessibility Journal - Palette 🎨

## 2026-02-12 - Site-wide Consistency & SEO Transitions
**Learning:** When refactoring a static site from a flat structure to a nested one, maintaining visual consistency across pages is crucial for the "app-like" feel. Using Meta Refresh + Canonical links is the best way to handle SEO during such transitions when a backend redirect (301) isn't available.
**Action:** Always check for existing indexing (Google verification) and implement a transition strategy (redirects + sitemap update) when changing file structures.

## 2026-02-11 - Speculative Prefetching
**Learning:** For static sites, `link rel="prefetch"` significantly reduces perceived latency for navigation between pages.
**Action:** Keep prefetch links updated when reorganizing file structures.

## 2026-02-15 - Semantic Breadcrumbs & Navigation Active States
**Learning:** Using semantic `<nav aria-label="Breadcrumb">` with an ordered list improves screen reader navigation. CSS pseudo-elements for separators prevent redundant announcements (like "slash") by assistive technology. Additionally, `aria-current="page"` provides a robust way to style active states in navigation without relying on custom classes.
**Action:** Always prefer semantic breadcrumbs and `aria-current` for spatial orientation in navigation.
