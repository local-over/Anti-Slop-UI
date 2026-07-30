---
name: school-arc-browser
description: Arc Browser Design System. Expert-level heuristic for calm interfaces, vertical sidebars, and dynamic translucent theming.
---

# Arc Browser Design System

## 1. Philosophy
Arc treats the browser as a personalized, editorial operating system. It emphasizes a "calm" internet, dynamic themeing driven by user choices, and a vertical sidebar architecture that redefines spatial hierarchy.

## 2. Exact CSS Design Tokens
- **Fonts:** Variable-weight display typefaces like `Monument Grotesk` paired with system sans-serifs.
- **Canvas Background:** `#FAFAF8`
- **Ink (Foreground text):** `#1A1A1A`
- **Primary Accent:** `#8E5FEB` (Purple)
- **Secondary Accent:** `#F0845A` (Orange)
- **Border Neutral:** `#D8D5CC`

## 3. Spatial Reasoning & Grid
- **Spacing Scale:** Employs distinctive spacing increments: 2, 32, 48, 64.
- **Radii:** Signature rounded aesthetic with `--radius: 0.625rem` (10px) on inner elements and larger radii for the main browser chrome.
- Layouts are heavily vertical-first due to the sidebar paradigm.

## 4. Component Architecture & Physics
- **Dynamic Theming:** Heavy use of injected CSS variables (`--arc-palette-background`, `--arc-palette-foregroundPrimary`) to allow sites to inherit user space themes.
- **Translucency:** Frosted glass effects on sidebars and floating command bars.

## 5. Anti-Slop Validation Checklist
- [ ] Is the UI capable of receiving dynamic color injections via CSS variables?
- [ ] Does the layout prioritize vertical real estate and sidebar navigation?
- [ ] Are the border radii consistently set to create a soft, calm interface?
- [ ] Is the canvas color warm (off-white) rather than clinical pure white?
