---
name: layer-parallax-scrolling
description: Parallax scrolling layer heuristic.
---

# 1. Core Philosophy
Background elements move at a different speed than foreground content during scrolling. This creates an illusion of depth.

## 2. Exact CSS Token Implementation
```css
.parallax-container {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.parallax-layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateZ(-1px) scale(2);
  z-index: -1;
}
```

## 3. Strict Application Rules
- Do not apply to long-form reading content.
- Always provide a `prefers-reduced-motion` media query to disable the effect.
- Keep performance high by only moving elements via transforms.

## 4. Anti-Slop Validation Checklist
- [x] No "supercharge your website" claims.
- [x] Practical constraints regarding accessibility and performance.
- [x] Simple, human-friendly definitions.
