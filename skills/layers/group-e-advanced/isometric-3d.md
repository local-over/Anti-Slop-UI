---
name: layer-isometric-3d
description: Isometric 3D layer heuristic.
---

# 1. Core Philosophy
Isometric UI elements bring depth and structure without true perspective distortion. By rotating items along the X and Z axes, the interface gains a tactile, block-based spatial hierarchy resembling architectural diagrams or classic strategy games.

## 2. Exact CSS Token Implementation
```css
:root {
  --iso-rotate-x: 60deg;
  --iso-rotate-z: -45deg;
  --iso-transform: rotateX(var(--iso-rotate-x)) rotateZ(var(--iso-rotate-z));
  --iso-shadow-color: rgba(0,0,0,0.2);
  --iso-shadow: -10px 10px 20px var(--iso-shadow-color);
}
```

## 3. Strict Application Rules
- Maintain identical rotation degrees across all isometric elements to preserve the grid.
- Apply realistic drop shadows to sell the 3D effect.
- Interactions (like hover) should adjust the translate axis, moving elements "up" (Z-axis relative).

## 4. Anti-Slop Validation Checklist
- [ ] Angles strictly adhere to isometric geometry (60/-45 or similar standards).
- [ ] Hover states do not break perspective.
- [ ] Contrast ratios on "extruded" sides remain accessible.
