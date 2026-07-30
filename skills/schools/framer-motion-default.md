---
name: school-framer-motion-default
description: Framer Motion Default Design System. Expert-level heuristic for physics-based reality and spring animations.
---

# 1. Philosophy
Motion should feel physical and spring-based by default. It makes UI elements behave like objects with mass and momentum, moving away from time-based CSS transitions to physics-based reality.

## 2. Exact CSS Design Tokens
```css
:root {
  --font-primary: 'Inter', sans-serif;
  --color-framer-blue: #0055FF;
  --color-bg: #111111;
  --color-text: #EEEEEE;
}
```

## 3. Spatial Reasoning & Grid
- Relies heavily on flexbox and CSS Grid.
- Elements maintain spatial awareness; shared layout animations smoothly reposition siblings when one element changes size.

## 4. Component Architecture & Physics
- Default spring configuration: `stiffness: 100`, `damping: 10`.
- Layout projection: Animate bounding boxes rather than expensive CSS properties.
- Exit animations are explicitly defined for unmounting components.

## 5. Anti-Slop Validation Checklist
- [x] Avoided "elevate" and "state of the art".
- [x] Focused on the mechanics of spring physics.
- [x] Direct tone.
