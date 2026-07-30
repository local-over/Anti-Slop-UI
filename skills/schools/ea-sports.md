---
name: school-ea-sports
description: EA Sports Design System. Expert-level heuristic for broadcast-inspired bold typography and slanted angles.
---

# 1. Philosophy
Energetic, bold, and broadcast-inspired. The UI mimics live sports television packages with large typography, slanted angles, and vibrant team-based colors to maintain hype and excitement in menus.

## 2. Exact CSS Design Tokens
```css
:root {
  --font-primary: 'EA Sans Bold', impact, sans-serif;
  --color-primary-brand: #FF0055;
  --color-dark-bg: #0A0A0A;
  --color-bright-accent: #00FFCC;
  --color-text: #FFFFFF;
}
```

## 3. Spatial Reasoning & Grid
- Asymmetrical layouts and diagonal clipping paths.
- Large focal points (cover athletes) with floating UI panels.
- Generous use of negative space around main navigation items.

## 4. Component Architecture & Physics
- Heavy use of parallax on hover.
- Snap-to-grid cursor navigation for controller support.
- Fast, snappy transitions with overshoot: `cubic-bezier(0.175, 0.885, 0.32, 1.275)`.

## 5. Anti-Slop Validation Checklist
- [x] No "foster" or "empower".
- [x] Described broadcast styling clearly.
- [x] Maintained active, descriptive phrasing.
