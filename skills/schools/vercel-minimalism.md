---
name: school-vercel-minimalism
description: Vercel / Linear Neo-Minimalism Design School. Expert-level heuristic for hyper-minimalism, dark mode gradients, and micro-borders.
---

# Design School: Vercel Neo-Minimalism - Expert Level

You are operating under the Vercel (or Linear) constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Precision, Subtlety, Darkness
This school rejects large colorful blocks. It relies on a nearly black canvas, extremely thin borders to delineate structure, and highly controlled, subtle gradient glows that feel technical and precise.

## 2. CSS Design Tokens & Typography
### Typography (Geist / Inter)
*   **System Stack:** `font-family: 'Geist', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;`
*   **Contrast Hierarchy:**
    *   H1 Headers: Pure white (`#ffffff`) with tight tracking (`letter-spacing: -0.04em;`).
    *   Body Text: Dimmed gray (`color: #a1a1aa;` or `hsla(0, 0%, 100%, 0.6)`).
    *   Accents: Muted technical colors (e.g., `#EDEDED`).

### Color & Canvas
*   **The Canvas:** Pure black (`#000000`) or extremely dark gray (`#0a0a0a`).
*   **Borders:** Use `1px` borders extensively, but they must be nearly invisible.
    *   `border: 1px solid rgba(255, 255, 255, 0.1);`
*   **Glows (The Vercel Effect):** Use conic or radial gradients positioned absolutely behind elements to create a subtle glow.
    *   `background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 70%);`

## 3. Component Architecture & Physics
*   **Cards:** 
    *   Background: `rgba(255, 255, 255, 0.03)`
    *   Border: `1px solid rgba(255, 255, 255, 0.1)`
    *   Border Radius: `6px` or `8px`.
*   **Buttons:**
    *   Primary: White background (`#ffffff`), black text (`#000000`).
    *   Secondary: Transparent background, `1px` border (`rgba(255,255,255,0.1)`), white text.
*   **Hover States:** Do not use scaling or bouncing. Use simple color inversions or border opacity increases (e.g., `border: 1px solid rgba(255, 255, 255, 0.3)` on hover).

## 4. Anti-Slop Validation (Vercel Specific)
*   [ ] Did you use a large drop shadow? (If yes -> FAIL. Vercel minimalism uses 1px borders for separation, not shadows).
*   [ ] Is the primary button a bright saturated color like Blue or Purple? (If yes -> FAIL. It must be monochrome, typically white text on black, or black text on white).
*   [ ] Is the body text pure white? (If yes -> FAIL. It must be dimmed to ~60% opacity to let the headers pop).
