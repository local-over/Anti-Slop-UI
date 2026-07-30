---
name: school-ant-design
description: Ant Design School. Expert-level heuristic for data density, deterministic interactions, and enterprise layouts.
---

# Ant Design School

## 1. Philosophy
"Certainty, Meaningfulness, Growth, Elegance." Ant Design is the premier B2B and enterprise application framework. It prioritizes data density, deterministic interactions, and rigorous form management over expressive aesthetics. The design language is objective, predictable, and highly localized.

## 2. Exact CSS Design Tokens
- **Fonts:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`.
- **Primary Brand:** `#1677ff` (Daybreak Blue).
- **Success:** `#52c41a` (Green).
- **Warning:** `#faad14` (Gold).
- **Error:** `#ff4d4f` (Dust Red).
- **Neutral:** `#000000D9` (85% black for primary text).

## 3. Spatial Reasoning & Grid
- **Scale:** 8px base unit.
- **Layout Grids:** A 24-column grid system (unlike the standard 12) for extreme granularity in complex dashboard layouts.
- **Density:** Compact mode tokens structurally reduce padding and font sizes globally for data-heavy internal tools.

## 4. Component Architecture & Physics
- **CSS-in-JS:** (As of v5) Deeply integrated token-based CSS-in-JS for dynamic theming without runtime penalty.
- **Data-Driven:** Components like `Table` and `Form` dictate architecture—they are heavily stateful, managing complex validation and sorting internally.
- **Motion:** Motion is purposeful and smooth, using predefined algorithms (e.g., `ease-in-out-circ`) for modal popups and drawer slides.

## 5. Anti-Slop Validation Checklist
- [ ] Is the 24-column grid utilized properly to align all form labels and input fields?
- [ ] Are status colors strictly adhering to semantic meanings (blue = info, green = success, red = error)?
- [ ] Are bespoke UI patterns removed in favor of standard Ant Design component APIs?
- [ ] Is data density maximized without sacrificing the 8px alignment rules?
