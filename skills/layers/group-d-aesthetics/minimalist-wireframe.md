---
name: layer-minimalist-wireframe
description: Minimalist wireframe layer heuristic.
---

# 1. Core Philosophy
Minimalist wireframe strips the interface down to its raw skeletal structure. It relies purely on outlines, thin strokes, high negative space, and absolute monochrome. It emphasizes function and structural layout above all decoration.

## 2. Exact CSS Token Implementation
```css
:root {
  --wire-stroke: 1px solid #000;
  --wire-bg: #fff;
  --wire-text: #000;
  --wire-font: 'Courier New', monospace;
  --wire-padding: 1rem;
}
```

## 3. Strict Application Rules
- Absolutely no background colors or fills except white or transparent.
- All structural elements (divs, sections) must have a 1px solid border.
- Icons should be strictly line-art (no filled vectors).

## 4. Anti-Slop Validation Checklist
- [ ] 100% monochrome (black on white).
- [ ] No drop shadows or gradients of any kind.
- [ ] Relies entirely on spatial proximity for grouping.
