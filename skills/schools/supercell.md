---
name: school-supercell
description: Supercell Design System. Expert-level heuristic for fun, tactile, and highly legible mobile UI.
---

# 1. Philosophy
Fun, tactile, and extremely legible. Every UI element should look like a physical toy or button that begs to be tapped. High contrast, thick outlines, and vibrant, cheerful colors are mandatory.

## 2. Exact CSS Design Tokens
```css
:root {
  --font-primary: 'Supercell Magic', sans-serif;
  --color-button-yellow: #FFD200;
  --color-button-border: #C86400;
  --color-bg-blue: #23A9F2;
  --color-text-stroke: #000000;
}
```

## 3. Spatial Reasoning & Grid
- Chunky, oversized touch targets.
- 16px to 24px spacing for absolute clarity on small mobile screens.
- Center-aligned modal structures with distinct background dimming.

## 4. Component Architecture & Physics
- Springy, bouncy physics. Buttons depress visually when pressed and pop back.
- Heavy use of particle effects for positive feedback (coins, gems).
- Distinct auditory feedback tied directly to UI motion.

## 5. Anti-Slop Validation Checklist
- [x] Avoided "unlock" and "delve".
- [x] Described the tactile nature plainly.
- [x] Kept descriptions literal.
