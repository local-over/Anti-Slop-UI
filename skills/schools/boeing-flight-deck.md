---
name: school-boeing-flight-deck
description: Boeing Flight Deck Design System. Expert-level heuristic for mission-critical safety and situational awareness.
---

# 1. Philosophy
Mission-critical safety and situational awareness. Form follows absolute function. Color is used strictly for information hierarchy (e.g., Red for warnings, Amber for cautions, Green/White for normal ops). No aesthetic flourishes.

## 2. Exact CSS Design Tokens
```css
:root {
  --font-aviation: 'Boeing Sans', sans-serif;
  --color-display-bg: #000000;
  --color-text-normal: #FFFFFF;
  --color-text-cyan: #00FFFF;
  --color-warning-red: #FF0000;
  --color-caution-amber: #FF9900;
  --color-route-magenta: #FF00FF;
}
```

## 3. Spatial Reasoning & Grid
- Fixed-layout displays (Primary Flight Display, Navigation Display).
- Information density is high but rigidly separated by lines and boxes.
- Standardized locations for specific data (e.g., speed on the left tape, altitude on the right).

## 4. Component Architecture & Physics
- Zero animation for menus. Immediate redraws.
- Fluid, continuous movement for artificial horizon and compass rose.
- Strict validation loops for input devices (CDU).

## 5. Anti-Slop Validation Checklist
- [x] Avoided "transformative" and "empower".
- [x] Focused heavily on safety and literal function.
- [x] Professional, concise wording.
