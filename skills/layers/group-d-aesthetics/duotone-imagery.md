---
name: layer-duotone-imagery
description: Duotone imagery layer heuristic.
---

# 1. Core Philosophy
Duotone restricts all imagery to exactly two colors, unifying disparate photos into a cohesive brand aesthetic. It creates high-impact visuals that integrate perfectly with the UI palette while stripping away distracting natural colors.

## 2. Exact CSS Token Implementation
```css
:root {
  --duo-highlight: #ff5722;
  --duo-shadow: #1a237e;
  /* SVG Filter usage is best, but CSS fallback can use blending */
  --duo-filter-fallback: grayscale(100%) sepia(100%) hue-rotate(340deg) saturate(300%);
}
```
*(Note: True duotone is best implemented via SVG `<feColorMatrix>` applied to image tags).*

## 3. Strict Application Rules
- Apply strictly to photography and complex illustrations.
- Shadow colors must be deeply dark, and highlight colors bright enough to map to white/light tones.
- Do not apply duotone to critical UI elements or user-generated profile photos unless purely stylistic.

## 4. Anti-Slop Validation Checklist
- [ ] Photos map perfectly to the defined shadow/highlight hex codes.
- [ ] Contrast remains acceptable within the photo details.
- [ ] No stray true colors bleeding through the filter.
