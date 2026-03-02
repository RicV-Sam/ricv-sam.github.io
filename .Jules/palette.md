## 2025-01-24 - [Accessibility] Contrast on Muted Backgrounds
**Learning:** Secondary background colors like `--surface-muted` (#f3f5f8) can cause "muted" text colors that pass on white to fail accessibility checks.
**Action:** Always verify text contrast against all potential background colors it might be used on, not just the default white.

## 2025-05-22 - [Interaction] Interactive Card Accessibility
**Learning:** For interactive cards (like `.guide-card`), using `:focus-visible` ensures that keyboard users receive the same visual feedback (elevation/shadow) as mouse users without cluttering the UI for click interactions.
**Action:** Always pair hover effects with `:focus-visible` for cards and complex interactive elements to maintain accessibility parity.
