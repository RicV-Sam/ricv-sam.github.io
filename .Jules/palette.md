
## SEO and Navigation Enhancements - October 2023

- **Keyword Targeting:** Updated homepage H1 to "Cheap Holidays From The UK – Budget Travel Guides & Deals" for high-intent search volume.
- **Breadcrumb Consistency:** Ensured breadcrumb text exactly matches the page's <h1> title to provide consistent navigational cues and SEO relevance.
- **Internal Linking Strategy:** Added "Related guides" sections to all articles to create topical clusters, improving crawlability and user engagement.
- **Canonical Tags:** Implemented self-referencing canonical tags on all guide pages to prevent potential duplicate content issues in search engines.
- **Visual Consistency in Navigation:** When updating breadcrumbs, used a semantic structure (`<nav aria-label="Breadcrumb"><ol>`) to balance accessibility with SEO requirements.
- **Micro-UX Refinement:** Removed emoji icons from guide cards to maintain a more professional, "trusted travel advisor" aesthetic as per user feedback.

## 2024-05-14 - Animation Performance and Affordance
**Learning:** Transitioning `text-decoration` is ineffective as it is a discrete property in most browsers; focus transitions on continuous properties like `transform` and `color`. Additionally, always preserve `text-decoration: underline` on links to maintain accessibility affordance, even when adding directional animations like `translateX`.
**Action:** Exclude `text-decoration` from CSS transition lists and ensure directional cues (like "Back" links) use `display: inline-block` to support transforms.
