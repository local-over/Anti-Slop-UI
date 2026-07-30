---
name: layer-8pt-grid
description: Expert-level implementation of the 8-point mathematical grid system for scalable UI architecture.
---

# Layer 2: 8-Point Grid System (Expert Architecture)

When this heuristic is loaded, the AI must enforce strict mathematical rigidity across the entire DOM layout. This is the primary defense against sloppy, arbitrary "vibe-coded" spacing.

## 1. The Core Mathematics
The 8pt grid system dictates that all dimensions, margins, and padding must be multiples of 8. This ensures crisp scaling across all pixel densities (1.5x, 2x, 3x) without causing half-pixel anti-aliasing blurs.

*   **The Multiplier Base:** `8px`
*   **The Valid Scale:** `8px`, `16px`, `24px`, `32px`, `40px`, `48px`, `64px`, `80px`, `96px`, `128px`.

## 2. CSS Token Implementation
You must generate and utilize a CSS Custom Property scale at the root of the document. Do not hardcode spacing values.

```css
:root {
  --space-05: 4px; /* The 4pt Exception for micro-adjustments */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
  --space-8: 64px;
  --space-10: 80px;
  --space-12: 96px;
}
```

## 3. Strict Application Rules
*   **Layout Gaps:** Flexbox and Grid `gap` properties must map directly to this scale (e.g., `gap: var(--space-3);`).
*   **Component Padding:** A standard button should use `padding: var(--space-2) var(--space-3);` (16px top/bottom, 24px left/right).
*   **The Border Box Problem:** If you add a `1px` border to an element, you must ensure `box-sizing: border-box` is applied, otherwise the element becomes `16px + 2px = 18px`, breaking the grid.

## 4. Typographic Vertical Rhythm
Font sizes do not strictly need to be multiples of 8, but the **line-height MUST be a multiple of 8** to maintain the vertical baseline rhythm.
*   **Valid:** `font-size: 15px; line-height: 24px;`
*   **Valid:** `font-size: 20px; line-height: 32px;`
*   **INVALID (Slop):** `font-size: 16px; line-height: 1.5;` (Results in 24px, which is fine, but `font-size: 18px; line-height: 1.5;` results in `27px`, which breaks the grid. Explicitly define line-height in pixels or `rem` mapped to the 8pt scale).

## 5. Anti-Slop Validation
*   [ ] Search the CSS output for values like `10px`, `15px`, `20px`, `25px`, `50px`. If found -> **FAIL**. Replace with nearest 8pt scale equivalent.
