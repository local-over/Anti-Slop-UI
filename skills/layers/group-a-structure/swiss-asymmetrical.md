---
name: layer-swiss-asymmetrical
description: Expert-level implementation of Swiss Modernist asymmetrical layout principles, enforcing tension and active whitespace.
---

# Layer 2: Swiss Asymmetrical Grid (Expert Architecture)

When this heuristic is loaded, the AI must abandon symmetrical, centered "vibe-coding" in favor of strict, mathematically tense asymmetry.

## 1. The Core Philosophy
Swiss design (International Typographic Style) relies on objective photography, highly structured grid systems, and asymmetrical layouts to guide the eye. Symmetrical layouts (like centered headers over centered paragraphs) are considered passive and boring. Asymmetry creates visual tension and movement.

## 2. CSS Grid Implementation
You must use a strict CSS Grid to enforce the asymmetry. Do not rely on Flexbox for primary structural columns.

```css
.swiss-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr); /* The 12-column foundation */
  gap: var(--space-4); /* Align to the 8pt grid */
}
```

## 3. Strict Application Rules
*   **The "Active Whitespace" Rule:** You must deliberately leave columns empty. Do not span elements across all 12 columns. 
    *   *Example:* Text block spans columns 2 through 6 (`grid-column: 2 / 7`). Image block spans columns 8 through 12 (`grid-column: 8 / 13`). Column 7 is left entirely blank to create a visual fault line.
*   **Alignment:** 
    *   `text-align: left;` is mandatory for 99% of text.
    *   `text-align: center;` is strictly banned for hero headers and body paragraphs.
*   **Typographic Hierarchy:** Swiss design uses extreme typographic contrast. A massive, heavy `H1` placed asymmetrically against a very small, tightly tracked body paragraph.

## 4. Anti-Slop Validation
*   [ ] Does the hero section use `text-align: center`, `margin: 0 auto`, and a centered badge? (If yes -> **FAIL**. This is standard AI slop. It must be heavily left-aligned or placed asymmetrically on the grid).
*   [ ] Is the content perfectly balanced on the left and right sides? (If yes -> **FAIL**. Introduce a blank column or span the image across 7 columns and the text across 4 columns).
