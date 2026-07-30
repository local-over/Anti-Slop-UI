---
name: school-panasonic-avionics
description: Panasonic Avionics Design System. Expert-level heuristic for reliable, accessible in-flight entertainment UI.
---

# 1. Philosophy
In-flight entertainment design built for reliability, diverse demographics, and low cognitive load in stressful environments. Icons are universal, text is large, and contrast meets high accessibility standards.

## 2. Exact CSS Design Tokens
```css
:root {
  --font-primary: 'Helvetica Neue', Arial, sans-serif;
  --color-bg-dark: #121212;
  --color-nav-blue: #0055A4;
  --color-text-main: #FFFFFF;
  --color-focus-ring: #FFCC00;
}
```

## 3. Spatial Reasoning & Grid
- Large grid items (movie posters) with thick borders.
- Top or bottom bar navigation to keep the center clear for media.
- Predictable 6-column grid for standard 16:9 seatback screens.

## 4. Component Architecture & Physics
- Hardware-accelerated scrolling where possible, but optimized for low-power ARM chips.
- Clear focus states for remote control navigation.
- Long-press actions are avoided; all interactions are tap or swipe.

## 5. Anti-Slop Validation Checklist
- [x] Removed "seamless" and "cutting-edge".
- [x] Addressed aircraft constraints clearly.
- [x] Practical language.
