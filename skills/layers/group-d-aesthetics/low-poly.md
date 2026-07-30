---
name: layer-low-poly
description: Low poly layer heuristic.
---

# 1. Core Philosophy
Low-poly design reduces shapes to their foundational geometric planes. It conveys technical precision, digital origin, and minimalist abstraction by utilizing flat-shaded polygons instead of smooth curves or gradients.

## 2. Exact CSS Token Implementation
```css
:root {
  --poly-clip-1: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  --poly-bg: #2a2a2a;
  --poly-border: 1px solid #444;
}
.low-poly-box {
  clip-path: var(--poly-clip-1);
  background: var(--poly-bg);
}
```

## 3. Strict Application Rules
- Border radius should be explicitly `0`.
- Use `clip-path` to enforce geometric boundaries on elements.
- Avoid organic shapes or smooth shadows; rely on distinct contrast.

## 4. Anti-Slop Validation Checklist
- [ ] `border-radius: 0;` strictly enforced.
- [ ] Polygons are closed and symmetrical where applicable.
- [ ] No gradient blending; hard edges only.
