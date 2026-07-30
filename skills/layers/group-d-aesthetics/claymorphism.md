---
name: layer-claymorphism
description: Claymorphism layer heuristic.
---

# 1. Core Philosophy
Soft, friendly, and tactile 3D elements. Achieved through dual inner shadows and a large border radius, mimicking pliable clay.

## 2. Exact CSS Token Implementation
```css
:root {
  --clay-bg: #f0f4f8;
  --clay-shadow-out: 8px 8px 16px rgba(0, 0, 0, 0.1);
  --clay-shadow-in-light: inset -4px -4px 8px rgba(0, 0, 0, 0.1);
  --clay-shadow-in-dark: inset 4px 4px 8px rgba(255, 255, 255, 0.7);
}
.clay-card {
  background: var(--clay-bg);
  border-radius: 32px;
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in-light), var(--clay-shadow-in-dark);
}
```

## 3. Strict Application Rules
- Requires large border radii to maintain the soft look.
- Use pastel or light, friendly color palettes.
- Apply strictly to primary interactive elements or feature cards.

## 4. Anti-Slop Validation Checklist
- [x] Clear description of "tactile" and "3D" qualities.
- [x] Avoids "next generation".
- [x] Explains actual CSS mechanics (dual inner shadows).
