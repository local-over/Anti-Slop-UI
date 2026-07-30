---
name: layer-masonry
description: Expert-level implementation of Masonry layout architectures using CSS columns and grid logic.
---

# Layer 2: Masonry Grid Structure (Expert Architecture)

When this heuristic is loaded, standard row-locked CSS grids are banned. The UI must flow vertically into columns, packing items tightly regardless of their height.

## 1. The Core Philosophy
Masonry layouts (popularized by Pinterest) are essential for heterogeneous content—user-generated imagery, cards of varying text length, or dynamic widgets. A standard CSS Grid forces rows to be the height of their tallest element, creating ugly dead space. Masonry eliminates this dead space by stacking items on the Y-axis first.

## 2. CSS Implementation Techniques
True masonry often requires JavaScript, but modern CSS provides two robust approximations. You must use one of these.

### Method A: CSS Multi-Column Layout (Best for simple cards/images)
```css
.masonry-container {
  column-count: 3; /* Adjust based on breakpoints */
  column-gap: var(--space-4); /* Ensure 8pt grid gap */
  width: 100%;
}

.masonry-item {
  break-inside: avoid; /* CRITICAL: Prevents a card from splitting across columns */
  margin-bottom: var(--space-4); 
  display: inline-block;
  width: 100%;
}
```

### Method B: CSS Grid Dense Packing (For mixed-size widgets)
If the items have specific aspect ratios you want to maintain across a grid:
```css
.masonry-grid-dense {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 20px; /* Micro-rows */
  grid-auto-flow: row dense; /* The magic property */
  gap: var(--space-3);
}

.masonry-item-tall {
  grid-row: span 3; /* Spans 3 micro-rows */
}
```

## 3. Strict Application Rules
*   **Image Handling:** In a masonry layout, images MUST have `height: auto` and `width: 100%` so they dictate the height of their respective card. Do not use fixed aspect ratios (`aspect-ratio: 16/9`) unless you want a standard grid.
*   **DOM Order:** Be aware that CSS columns order items vertically (top-to-bottom) before moving left-to-right.

## 4. Anti-Slop Validation
*   [ ] Did you use standard `display: flex; flex-wrap: wrap;` for cards of varying heights? (If yes -> **FAIL**. This creates horizontal gaps. You must use `column-count` or `grid-auto-flow: dense`).
*   [ ] Did you forget `break-inside: avoid;` on the child elements? (If yes -> **FAIL**. The cards will slice in half visually across columns).
