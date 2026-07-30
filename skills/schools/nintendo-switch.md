---
name: school-nintendo-switch
description: Nintendo Switch OS Design School. Expert-level heuristic for joyful utility, bold focus states, and horizontal navigation.
---

# Nintendo Switch OS Design School

## 1. Philosophy
Joyful utility, hyper-responsiveness, and sonic/visual harmony. The Switch UI is designed to be instantly understandable by users of all ages, getting them into games as quickly as possible. It is characterized by satisfying micro-interactions and a playful yet constrained aesthetic.

## 2. Exact CSS Design Tokens
**Fonts:**
- Primary: `UD Shin Go, Nintendo Sans, sans-serif` (Rounded, highly legible).

**Hex Colors:**
- Background (Light Mode): `#EBEBEB` (Soft White)
- Background (Dark Mode): `#2D2D2D` (Soft Dark Grey)
- Accent/Brand: `#E60012` (Nintendo Red)
- Focus State: `#00C3E3` (Cyan/Teal bounding box)
- Text: `#333333` or `#FFFFFF`

## 3. Spatial Reasoning & Grid
- **Grid System:** Horizontal carousel dominance. Simple, blocky grid for game tiles.
- **Spacing:** Generous padding. Elements are distinct and chunky.
- **Layout:** Center-aligned focus. The active element is always visually dominant.

## 4. Component Architecture & Physics
- **Components:** Rounded squares, thick focus borders, bubbly modal dialogues.
- **Physics:** Snappy, bounce-back physics. When an item is selected, it physically "pops" forward. Audio feedback is tightly coupled with every visual state change.

## 5. Anti-Slop Validation Checklist
- [ ] Does the UI rely on a horizontal carousel for primary navigation?
- [ ] Is the focus state blindingly obvious (thick cyan border)?
- [ ] Do interactions have a bouncy, snappy physical response?
- [ ] Is the design entirely flat, relying on scale rather than shadows for depth?
- [ ] Is it completely intuitive for a child to navigate?
