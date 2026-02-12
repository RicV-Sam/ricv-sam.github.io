# Bolt's Journal - Performance Learnings

## 2025-05-14 - Initial Analysis of Static Site
**Learning:** The site consists of minimal static HTML files with no external assets. In this environment, the main performance bottlenecks are network latency for transitions between pages.
**Action:** Use speculative prefetching to reduce perceived navigation latency.
