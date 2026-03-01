## 2025-01-24 - [Accessibility] Contrast on Muted Backgrounds
**Learning:** Secondary background colors like `--surface-muted` (#f3f5f8) can cause "muted" text colors that pass on white to fail accessibility checks.
**Action:** Always verify text contrast against all potential background colors it might be used on, not just the default white.
