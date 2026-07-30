---
name: layer-hand-drawn-elements
description: Hand-drawn elements layer heuristic.
---

# 1. Core Philosophy
Hand-drawn UI injects humanity, warmth, and imperfection into digital spaces. By using organic lines, slightly off-kilter text, and rough borders, it creates an approachable, bespoke, and non-corporate user experience.

## 2. Exact CSS Token Implementation
```css
:root {
  --hd-font: 'Caveat', cursive;
  --hd-border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
  --hd-border: 2px solid #2c2c2c;
  --hd-bg: #faf8f5;
}
```

## 3. Strict Application Rules
- Emulate drawn boxes using complex, asymmetrical `border-radius` values.
- Typography should be legible but visibly organic or cursive.
- Borders should be slightly thick to simulate pen strokes.

## 4. Anti-Slop Validation Checklist
- [ ] `border-radius` variables use 8-point coordinates to avoid perfect circles.
- [ ] Colors are slightly muted, simulating ink and paper.
- [ ] No crisp vector lines or perfect geometry.
