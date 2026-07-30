---
name: school-pinterest-gestalt
description: Pinterest Gestalt Design School. Expert-level heuristic for systematic layout boxes, accessibility, and masonry content discovery.
---

# Pinterest Gestalt Design School

## 1. Philosophy
Gestalt is a highly systematic, multi-platform design language focused on visual consistency, rigorous accessibility, and masonry-driven content discovery. The system restricts custom layouts, forcing developers to use low-level structural components. Its philosophy is: "Do not invent layout; use the Box."

## 2. Exact CSS Design Tokens
- **Fonts:** System fallback fonts favoring legibility.
- **Colors:**
  - Brand: `#E60023` (Pinterest Red).
  - Backgrounds: Pure White `#FFFFFF`, Wash `#E9E9E9`.
  - Text: Dark Gray `#111111`.
- **Tokens:** Managed via Style Dictionary, utilizing a 3-tier system (Base -> Semantic -> Component).

## 3. Spatial Reasoning & Grid
- **Scale:** 4px baseline, manifesting in a strict 8px layout grid.
- **The Box:** The `Box` component is the absolute dictator of space. All padding, margins, and alignments are governed by passing standard props to `Box`.
- **Masonry:** The grid is inherently vertical-first and variable-height, accommodating dense image-heavy discovery feeds.

## 4. Component Architecture & Physics
- **Strict Typing:** React components have aggressively strict Flow/TypeScript interfaces to prevent "slop" or off-system hacks.
- **BEM-Like Scoping:** Internally uses scoped, highly predictable CSS class naming.
- **Accessibility:** 100% WCAG compliance is enforced at the component level; a component cannot be merged if it fails screen reader or contrast checks.

## 5. Anti-Slop Validation Checklist
- [ ] Are all custom margins and paddings removed, replacing layout entirely with `Box` and `Flex` components?
- [ ] Is Pinterest Red (`#E60023`) used exclusively for primary brand CTAs and not as a generic highlight?
- [ ] Are image aspect ratios standardized to prevent masonry grid reflows during load?
- [ ] Are all interactive elements wrapped in Gestalt’s strictly typed `TapArea`?
