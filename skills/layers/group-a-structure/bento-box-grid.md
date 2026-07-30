---
name: layer-bento-box-grid
description: Bento box grid layer heuristic.
---

# 1. Core Philosophy
Content organized into a tight, irregular grid of cards. It groups dense information into clear, digestible compartments.

## 2. Exact CSS Token Implementation
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;
}
.bento-item-large {
  grid-column: span 2;
  grid-row: span 2;
  border-radius: 16px;
  background: #f5f5f5;
}
```

## 3. Strict Application Rules
- Maintain identical gaps (gutters) between all boxes.
- Use uniform border radii on all external corners.
- Avoid nesting grids deeply to keep the hierarchy flat.

## 4. Anti-Slop Validation Checklist
- [x] Functional description (groups dense information).
- [x] Refrains from using "seamlessly organized".
- [x] Direct structural rules.
