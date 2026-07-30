---
name: school-windows-95
description: Windows 95 Design School. Expert-level heuristic for utilitarian desktop computing, 3D bevels, and pixelation.
---

# Windows 95 Design School

## 1. Philosophy
Utilitarian desktop computing, standard GUI paradigms, and uncompromising pixel-perfect consistency. It established the rules for windowing systems—gray backgrounds, 3D beveled borders, and absolute predictability. It is function over form, built for a world of CRT monitors and mouse-driven interfaces.

## 2. Exact CSS Design Tokens
**Fonts:**
- Primary: `MS Sans Serif, Tahoma, sans-serif` (Un-antialiased, strictly pixelated)
- Font Size: `11px` or `8pt`.

**Hex Colors:**
- Background (Desktop): `#008080` (Classic Teal)
- UI Base (Windows): `#C0C0C0` (Standard Grey)
- Title Bars (Active): `#000080` (Navy Blue)
- Title Bars (Inactive): `#808080` (Dark Grey)
- Text: `#000000` (Black)
- 3D Highlights: `#FFFFFF` (White)
- 3D Shadows: `#808080` (Dark Grey) and `#000000` (Black)

## 3. Spatial Reasoning & Grid
- **Grid System:** Overlapping window management. No responsive flow; elements are absolutely positioned.
- **Spacing:** Extremely tight. 2px - 4px padding max.
- **Layout:** Bottom taskbar anchor, floating modal windows with rigid toolbars.

## 4. Component Architecture & Physics
- **Components:** Classic 3D beveled buttons (white top/left border, dark gray bottom/right border), indented sunken panels for inputs.
- **Physics:** Instantaneous. No animations. Windows open instantly. Buttons visually depress by shifting contents 1px down and right.

## 5. Anti-Slop Validation Checklist
- [ ] Are fonts rendered without anti-aliasing (pixelated)?
- [ ] Do all interactive elements use classic 2px 3D bevels (white top/left, gray bottom/right)?
- [ ] Is the primary UI background strictly `#C0C0C0`?
- [ ] Is the active title bar Navy Blue with a linear gradient (Win 98) or solid (Win 95)?
- [ ] Are transitions and animations completely absent?
