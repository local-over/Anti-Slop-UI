---
name: school-notion
description: Notion Design System. Expert-level heuristic for document-driven aesthetics, block-based structures, and analog flexibility.
---

# Notion Design System

## 1. Philosophy
Notion's design is the epitome of the "digital blank canvas." It prioritizes content above chrome, using a stark, document-driven aesthetic that feels both analog (like a paper notebook) and infinitely flexible.

## 2. Exact CSS Design Tokens
- **Fonts:** `Notion Sans` (customized Inter) for sans-serif; `Lyon Text` for serif; `SF Mono` for code.
- **Background (Light):** `#FFFFFF`
- **Text Primary (Light):** `#37352F`
- **Background (Dark):** `#191919`
- **Text Primary (Dark):** `#FFFFFF` (opacity 0.9)
- **Icon Tints:** Highly saturated variations of their 10 base colors (e.g., Notion Blue `#2EAADC`).

## 3. Spatial Reasoning & Grid
- Unconstrained horizontal grids, focusing on a single central column for blocks.
- Block spacing is tight (often 2px to 4px between standard text blocks).
- Hover states add very subtle background tints (`rgba(55, 53, 47, 0.08)` in light mode) rather than structural borders.

## 4. Component Architecture & Physics
- **Block-Based Hierarchy:** Everything is a draggable block. Components lack rigid outer containers.
- **Popovers/Menus:** Simple drop shadows with zero-border rounded corners (approx 6px).
- **Physics:** Minimal animations. State changes are almost instantaneous to prioritize the feeling of writing.

## 5. Anti-Slop Validation Checklist
- [ ] Does the UI feel like a document rather than a web app?
- [ ] Are hover states utilizing low-opacity background tints instead of borders?
- [ ] Is the typography hierarchy primarily driven by size and weight rather than color?
- [ ] Are all structural elements treated as movable blocks?
