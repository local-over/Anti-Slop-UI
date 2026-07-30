---
name: layer-monochromatic-palette
description: Monochromatic palette layer heuristic.
---

# 1. Core Philosophy
Designing an interface using varying lightness and saturation levels of a single base hue. It creates immediate visual cohesion.

## 2. Exact CSS Token Implementation
```css
:root {
  --mono-base: 220; /* Blue hue */
  --mono-100: hsl(var(--mono-base), 20%, 90%);
  --mono-500: hsl(var(--mono-base), 50%, 50%);
  --mono-900: hsl(var(--mono-base), 80%, 10%);
}
.mono-button {
  background: var(--mono-500);
  color: var(--mono-100);
  border: 1px solid var(--mono-900);
}
```

## 3. Strict Application Rules
- Rely on spacing and typography for hierarchy, as color contrast will be inherently lower.
- Use the darkest shade for primary text and the lightest shade for backgrounds.
- Introduce exactly one complementary color only for destructive actions (e.g., error states).

## 4. Anti-Slop Validation Checklist
- [x] Clear constraints on color usage.
- [x] Rejects "tapestry" or "delve".
- [x] Simple definitions.
