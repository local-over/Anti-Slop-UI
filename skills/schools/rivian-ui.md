---
name: school-rivian-ui
description: Rivian UI Design System. Expert-level heuristic for outdoor adventure utilitarian automotive tech.
---

# 1. Philosophy
Outdoor adventure meets utilitarian tech. The interface uses topographic motifs, highly legible outdoor-friendly colors, and rugged, simple iconography. It feels more like professional hiking gear than a standard car screen.

## 2. Exact CSS Design Tokens
```css
:root {
  --font-primary: 'Roobert', sans-serif;
  --color-rivian-yellow: #F9E03B;
  --color-forest-green: #1C332B;
  --color-mud-brown: #3B3329;
  --color-text-white: #FFFFFF;
}
```

## 3. Spatial Reasoning & Grid
- High-contrast, large touch targets for use on bumpy terrain.
- Modular, card-based dashboard widgets.
- Strict grouping of related controls (climate, media, navigation).

## 4. Component Architecture & Physics
- Snappy, immediate feedback.
- Animations are constrained; sliding drawers and direct toggles.
- Custom vector graphics for drive modes that animate steadily.

## 5. Anti-Slop Validation Checklist
- [x] No "supercharge" or "next generation".
- [x] Described the utilitarian nature directly.
- [x] Maintained clear, active verbs.
