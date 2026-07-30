---
name: layer-linear-harsh-gradients
description: Expert-level implementation of Linear Harsh Gradients.
---

# Linear Harsh Gradients

## 1. Core Philosophy
Brutal, high-contrast, non-blended color stops. Used for striking, unapologetic design statements (Brutalism/Cyberpunk).

## 2. Exact CSS Token Implementation
```css
:root {
  --grad-harsh-stripe: linear-gradient(90deg, #000 0%, #000 50%, #fff 50%, #fff 100%);
  --grad-harsh-cyber: linear-gradient(45deg, #ff003c 0%, #ff003c 49%, #fcee0a 50%, #fcee0a 100%);
}
```

## 3. Strict Application Rules
- Stops must be hard (e.g., 50% and 50% overlapping) to prevent smooth blending.
- Use only highly contrasting or clashing colors.
- Use sparingly—only for primary calls to action or distinct decorative borders.

## 4. Anti-Slop Validation Checklist
- [ ] Transition between colors is an instant pixel edge, not a blur.
- [ ] Colors are high-chroma / high-contrast.
- [ ] Conveys an intentional brutalist aesthetic.
