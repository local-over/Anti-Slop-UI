---
name: school-duolingo
description: Duolingo Design System. Expert-level heuristic for extreme approachability, bouncy gamification, and collapsible 3D borders.
---

# Duolingo Design System

## 1. Philosophy
Gamification and absolute approachability. The design system uses atomic principles to build a UI that feels tactile, bouncy, and forgiving, encouraging daily habit formation.

## 2. Exact CSS Design Tokens
- **Fonts:** `Feather Bold` (Headlines, bespoke), `DIN Next Rounded` (Body).
- **Feather Green (Brand):** `#58CC02`
- **Mask Green (Secondary):** `#89E219`
- **Eel (Text Primary):** `#4B4B4B`
- **Snow (Background):** `#FFFFFF`
- **Cardinal (Red):** `#FF4B4B`
- **Macaw (Blue):** `#1CB0F6`

## 3. Spatial Reasoning & Grid
- **Spacing:** Built on strict 10px increments.
- **Radii:** Extremely rounded. Buttons and cards utilize heavy pill shapes and large border radii (16px+).
- High visual weight and thick structural borders.

## 4. Component Architecture & Physics
- **Tactile Buttons:** Buttons have a distinctive 3D effect created by a thick, dark bottom border (e.g., `border-bottom: 4px solid #58A700` on the green button) that collapses on `:active` to simulate a physical press.
- **Animation:** Bouncy, exaggerated physics for mascots and progress bars.

## 5. Anti-Slop Validation Checklist
- [ ] Do primary buttons have the signature 3D "collapsible bottom border" physics?
- [ ] Are typefaces rounded and friendly (DIN Next Rounded)?
- [ ] Is the spacing consistently adhering to a 10px grid system?
- [ ] Is the color palette highly saturated and gamified?
