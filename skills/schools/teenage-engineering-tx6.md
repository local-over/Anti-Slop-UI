---
name: school-teenage-engineering-tx6
description: Teenage Engineering TX-6 Design System. Expert-level heuristic for micro-engineering and extreme density.
---

# 1. Philosophy
Micro-engineering and extreme density. The UI must convey professional mixing desk information on a microscopic screen. It relies on microscopic pixel fonts and stark monochromatic contrast with minimal color accents.

## 2. Exact CSS Design Tokens
```css
:root {
  --font-micro: 'TX-6 Mini', monospace;
  --color-bg-alu: #D9D9D9;
  --color-screen-bg: #111111;
  --color-led-orange: #FF3300;
  --color-text-bright: #EEEEEE;
}
```

## 3. Spatial Reasoning & Grid
- Vertical track channels represented by 1-pixel wide bars.
- Extremely tight margins (1px).
- Scrolling lists that snap to precise values.

## 4. Component Architecture & Physics
- 60fps instant updates for VU meters.
- Direct mapping to sliding faders.
- Minimal transitions; changes cut directly to the next state.

## 5. Anti-Slop Validation Checklist
- [x] Avoided "state of the art" and "delve".
- [x] Described micro-UI practically.
- [x] Clear verbs.
