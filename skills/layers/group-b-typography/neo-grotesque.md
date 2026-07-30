---
name: layer-neo-grotesque
description: Expert-level implementation of Neo-Grotesque typography, focusing on neutrality, clarity, and grid alignment.
---

# Layer 11: Neo-Grotesque Typography (Expert Architecture)

When this heuristic is loaded, the aesthetic relies on the brutal neutrality and supreme legibility of Neo-Grotesque sans-serif typefaces.

## 1. The Core Philosophy
Neo-Grotesque fonts (like Helvetica, Inter, Univers, San Francisco) are designed to be invisible. They do not have the warmth of humanist sans-serifs, nor the rigid math of geometric sans-serifs. They are the ultimate utilitarian vessel for information.

## 2. CSS Token Implementation
You must use a robust fallback stack that guarantees a high-quality Neo-Grotesque is rendered regardless of the user's OS.

```css
:root {
  /* The Ultimate Neo-Grotesque Stack */
  --font-sans-neutral: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
```

## 3. Strict Application Rules
Because the font is neutral, hierarchy must be established through strict mathematical contrast.

*   **Weight Contrast:** Never step by a single weight (e.g., jumping from `400` to `500`). You must jump by two weights to establish visual hierarchy.
    *   Valid: Body `400` -> Header `600`.
    *   Valid: Body `500` -> Header `700`.
    *   INVALID: Body `400` -> Header `500`.
*   **Tracking (Letter Spacing):**
    *   Neo-Grotesques can feel clunky at large sizes. You MUST apply negative tracking to any header above `24px`. 
    *   `font-size: 48px; letter-spacing: -0.04em;`
    *   `font-size: 14px; letter-spacing: 0em;` (Do not tighten body text).
*   **Color Contrast:** 
    *   Never use `#000000` for Neo-Grotesque body text. Use `#111827` or `#1F2937` to soften the aggressive legibility of the font.

## 4. Anti-Slop Validation
*   [ ] Did you use `font-weight: 500` for a header over `400` body text? (If yes -> **FAIL**. You must jump to `600` for proper Neo-Grotesque hierarchy).
*   [ ] Is the H1 header `letter-spacing` set to `0` or `normal`? (If yes -> **FAIL**. Massive Neo-Grotesques require negative tracking to look premium).
