---
name: layer-no-gradients
description: Expert-level implementation of No Gradients.
---

# No Gradients (Flat Design)

## 1. Core Philosophy
Absolute purity of color. Gradients represent a crutch; true flat design relies on perfect layout, typography, and solid color blocks to create hierarchy.

## 2. Exact CSS Token Implementation
```css
:root {
  --flat-primary: #111111;
  --flat-secondary: #f4f4f5;
  --flat-accent: #3b82f6;
  --flat-surface: #ffffff;
}
```

## 3. Strict Application Rules
- Absolutely NO `linear-gradient`, `radial-gradient`, or `conic-gradient` allowed in the codebase.
- Depth is achieved via pure solid dropshadows (`box-shadow: 4px 4px 0px #000;`) or size variations.
- Emphasize stark color boundaries.

## 4. Anti-Slop Validation Checklist
- [ ] Zero gradient functions used in the applied element.
- [ ] Shadows, if any, are solid with 0px blur.
- [ ] Hierarchy is maintained through color blocks and typography.
