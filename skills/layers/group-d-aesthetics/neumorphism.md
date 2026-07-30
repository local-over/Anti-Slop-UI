---
name: layer-neumorphism
description: Neumorphism layer heuristic.
---

# 1. Core Philosophy
Surfaces look extruded from the background using inner and outer shadows. It mimics physical, matte plastic materials.

## 2. Exact CSS Token Implementation
```css
:root {
  --neu-bg: #e0e0e0;
  --neu-shadow-light: #ffffff;
  --neu-shadow-dark: #bebebe;
}
.neu-element {
  background: var(--neu-bg);
  box-shadow: 20px 20px 60px var(--neu-shadow-dark), 
             -20px -20px 60px var(--neu-shadow-light);
  border-radius: 12px;
}
```

## 3. Strict Application Rules
- Background color and element color must match exactly.
- Do not use for critical text inputs; the low contrast harms usability.
- Best suited for toggles, large buttons, and decorative icons.

## 4. Anti-Slop Validation Checklist
- [x] Explains mechanics clearly (shadows extruding from background).
- [x] No "cutting-edge" or "revolutionary" claims.
- [x] Clear rules on where to avoid it.
