---
name: layer-pill-radius
description: Expert-level implementation of Pill Radius.
---

# Pill Radius

## 1. Core Philosophy
Pill radii create friendly, highly approachable interfaces. The goal is to maximize the border-radius to create a perfect semi-circle at the edges, avoiding awkward "squircle" in-between states.

## 2. Exact CSS Token Implementation
```css
:root {
  --radius-pill: 9999px;
  --radius-pill-sm: 999px;
}
```

## 3. Strict Application Rules
- ONLY apply to fully contained interactive elements (buttons, badges, chips).
- NEVER apply to containers, cards, or structural layout elements.
- Height must be explicitly defined or padded symmetrically to ensure a perfect pill shape.

## 4. Anti-Slop Validation Checklist
- [ ] Element is a button, tag, or chip.
- [ ] Border radius evaluates to effectively infinity (e.g., 9999px).
- [ ] Left and right edges are perfectly semi-circular without straight line artifacts.
