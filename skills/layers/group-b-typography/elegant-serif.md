---
name: layer-elegant-serif
description: Expert-level implementation of high-contrast Serif typography for editorial or luxury interfaces.
---

# Layer 11: Elegant Serif Typography (Expert Architecture)

When this heuristic is loaded, the aesthetic relies on the sophistication and historical weight of high-contrast Serif typefaces.

## 1. The Core Philosophy
Serifs convey authority, luxury, and editorial depth. However, using them incorrectly (poor line-height, wrong font pairings, bad tracking) instantly looks like a default unstyled HTML document.

## 2. CSS Token Implementation
You must define the typography stacks carefully to ensure elegant fallbacks.

```css
:root {
  /* Primary Display Serif - High Contrast */
  --font-serif-display: 'Playfair Display', 'Didot', 'Bodoni MT', 'Times New Roman', serif;
  
  /* Secondary Body Serif - High Legibility */
  --font-serif-body: 'Merriweather', 'Libre Baskerville', 'Georgia', serif;
  
  /* Optional Utility Sans (for tiny UI elements like dates or tags) */
  --font-sans-utility: 'Inter', -apple-system, sans-serif;
}
```

## 3. Strict Application Rules
*   **Font Weights:** Serifs look best at their extremes. Use `font-weight: 400` (Regular) for body text and `font-weight: 700` (Bold) or `font-weight: 900` (Black) for display headers. Do not use intermediate weights like 500 or 600.
*   **Tracking (Letter-Spacing):**
    *   For massive Display headers (e.g., `48px+`), the tracking must be tightened: `letter-spacing: -0.02em;` to `-0.05em;`.
    *   For body text, tracking should remain at `0` or slightly loosened `0.01em`.
*   **Italics as Accents:** Use `font-style: italic` strategically on conjunctions (and, or, with) or specific emphasis words within a large header. This is a hallmark of high-end editorial design.

## 4. Anti-Slop Validation
*   [ ] Are you using `Inter` or `Roboto` for the primary H1 header? (If yes -> **FAIL**. Must use the `--font-serif-display` stack).
*   [ ] Is the line-height for the body serif too tight (e.g., `1.2`)? (If yes -> **FAIL**. Serifs require more breathing room. Use `line-height: 1.6` or `1.8`).
