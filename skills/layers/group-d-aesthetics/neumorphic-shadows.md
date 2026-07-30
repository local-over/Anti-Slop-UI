---
name: layer-neumorphic-shadows
description: Expert-level implementation of Neumorphic Shadows.
---

# Neumorphic Shadows

## 1. Core Philosophy
Elements should appear extruded from the background material. Neumorphism uses dual shadows (one light, one dark) to simulate physical depth without harsh borders.

## 2. Exact CSS Token Implementation
```css
:root {
  --neu-bg: #e0e5ec;
  --neu-shadow-light: -6px -6px 12px rgba(255,255,255, 0.8);
  --neu-shadow-dark: 6px 6px 12px rgba(163,177,198, 0.6);
  --neu-shadow-inset: inset 4px 4px 8px rgba(163,177,198, 0.6), inset -4px -4px 8px rgba(255,255,255, 0.8);
}
```

## 3. Strict Application Rules
- Element background MUST match the parent container background perfectly.
- Inset shadows should be used for pressed states or input wells.
- Do not use for text-heavy content areas (poor accessibility).

## 4. Anti-Slop Validation Checklist
- [ ] Backgrounds of element and parent are identical.
- [ ] Dual shadows (light top-left, dark bottom-right) are applied.
- [ ] Pressed states correctly invert to inset shadows.
