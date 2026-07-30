---
name: layer-dark-mode-tinted
description: Dark mode tinted layer heuristic.
---

# 1. Core Philosophy
Dark mode built with deep, saturated colors (like navy or dark charcoal) instead of pure black. It feels softer and aligns better with brand colors.

## 2. Exact CSS Token Implementation
```css
:root {
  --tinted-dark-bg: #0f172a; /* Slate 900 */
  --tinted-dark-surface: #1e293b; /* Slate 800 */
  --tinted-dark-text: #f8fafc; /* Slate 50 */
}
body {
  background-color: var(--tinted-dark-bg);
  color: var(--tinted-dark-text);
}
```

## 3. Strict Application Rules
- Maintain a single hue across background, surfaces, and borders.
- Keep the background lightness under 15%.
- Test text contrast thoroughly; tinted backgrounds lower overall contrast ratios compared to black.

## 4. Anti-Slop Validation Checklist
- [x] Explains the brand benefit without buzzwords.
- [x] No "seamless" blending mentions.
- [x] Straightforward color metrics.
