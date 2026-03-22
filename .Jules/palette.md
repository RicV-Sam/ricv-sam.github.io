## 2025-01-24 - [Accessibility] Contrast on Muted Backgrounds
**Learning:** Secondary background colors like `--surface-muted` (#f3f5f8) can cause "muted" text colors that pass on white to fail accessibility checks.
**Action:** Always verify text contrast against all potential background colors it might be used on, not just the default white.

## 2025-05-22 - [Interaction] Interactive Card Accessibility
**Learning:** For interactive cards (like `.guide-card`), using `:focus-visible` ensures that keyboard users receive the same visual feedback (elevation/shadow) as mouse users without cluttering the UI for click interactions.
**Action:** Always pair hover effects with `:focus-visible` for cards and complex interactive elements to maintain accessibility parity.

## 2025-05-23 - [Interaction] Tactile Feedback for Primary CTAs
**Learning:** Adding an `:active` state (e.g., `transform: scale(0.98)`) to primary call-to-action buttons provides a satisfying "pressed" feeling that confirms user intent. However, when using CSS transitions, avoid transitioning `linear-gradient` backgrounds as they do not interpolate smoothly; focus on transforming the element or changing solid colors instead.
**Action:** Include tactile `:active` states for key interaction points and ensure transitions are limited to properties that interpolate cleanly (transform, opacity, color).

## 2025-05-24 - [UX] Scanable Data Tables
**Learning:** Data tables within content cards (like 'Quick Facts') require explicit styling to maintain scanability. Using a fixed percentage width for the label column (e.g., 40%) ensures a consistent vertical alignment for values across different guides, even on mobile, preventing jagged reading lines.
**Action:** Style `.card table` with `width: 100%`, `border-collapse: collapse`, and apply `border-bottom` to `tr` elements. Use `font-weight: 600` and `var(--muted)` for the first column to create a clear visual hierarchy.

## 2026-03-16 - [UX] Standardized Data Tables
**Learning:** Moving repetitive inline styles from complex data tables to a global CSS system improves maintainability and consistency. Using semantic `<thead>` and `<tbody>` tags allows for targeted styling, such as themed headers and row hover highlights (`rgba(10, 77, 163, 0.04)`), which significantly improves scanability for multi-column data.
**Action:** Implement global table styles for `.card` components using `thead` for headers and `tbody tr:hover` for row tracking. Use CSS specificity (e.g., `section.card table`) to handle simpler key-value tables that require a more minimalist appearance.

## 2026-03-17 - [UX] Standardized Quick Navigation
**Learning:** Refactoring inline-styled navigation blocks into a standardized global component (like `.quick-nav`) ensures consistent application of themed variables (e.g., `var(--surface-soft)`) and tactile feedback states across the repository.
**Action:** Implement `.quick-nav` with `var(--surface-soft)` background, `1.25rem` padding, and `:active { transform: scale(0.98); }` for all in-article navigation links to provide a cohesive interactive experience.

## 2026-03-18 - [Accessibility] Full ARIA Tab Pattern
**Learning:** Simply adding `role="tab"` and `aria-selected` is insufficient for accessibility; users expect keyboard navigation (Arrow keys, Home, End) to move focus between tabs in a `tablist`. Additionally, when using multiple filter categories (e.g., Region and Type), filter logic should use intersection (AND) to provide the most intuitive results.
**Action:** Always include keyboard event listeners for `[role="tablist"]` to manage focus, and ensure filter functions can handle multiple active criteria from different categories.
