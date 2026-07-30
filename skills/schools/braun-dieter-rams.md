---
name: school-braun-dieter-rams
description: Braun (Dieter Rams) Design School. Expert-level heuristic for functionalism, hardware-inspired layouts, and minimal accents.
---

# Braun (Dieter Rams) Design School

## 1. Philosophy
"Weniger, aber besser" (Less, but better). Dieter Rams’ philosophy for Braun defines modern industrial design. In UI, this translates to extreme functionalism, stripping away anything that does not serve a purpose. It champions honesty, longevity, and unobtrusiveness. The UI must act as an invisible tool, not an art piece.

## 2. Exact CSS Design Tokens
- **Fonts:** Akzidenz-Grotesk, Helvetica, or strict, unadorned neo-grotesque sans-serifs.
- **Backgrounds:** `#f4f4f4` (Off-white/Bone), `#e0e0e0` (Light aluminum grey).
- **Surfaces/Text:** `#111111` (Matte black), `#333333` (Charcoal).
- **Accents:** `#e85d04` (Tactile Orange, exclusively for primary triggers/power), `#4a7c59` (Muted Green).
- **Shadows:** Hard, short drop shadows simulating physical hardware gaps (`box-shadow: 0 1px 2px rgba(0,0,0,0.3)`).

## 3. Spatial Reasoning & Grid
- **Scale:** Mathematical harmony, heavily reliant on the Golden Ratio and rule of thirds.
- **Grouping:** Controls are spatially grouped by function. If actions are related, they sit within the same defined boundary or physical "well."
- **Symmetry:** Layouts favor strict geometric alignment and stark, balanced whitespace.

## 4. Component Architecture & Physics
- **Affordance:** Components must visually explain how they are used. Buttons look tactile; switches look like they toggle physical state.
- **Modularity:** UI sections are divided into distinct "hardware" modules, separated by thin, inset borders resembling physical panel gaps.
- **Motion:** Linear, mechanical, and instantaneous. No bouncy springs.

## 5. Anti-Slop Validation Checklist
- [ ] Is every single visual element functionally necessary (zero purely decorative elements)?
- [ ] Is the primary accent color reserved strictly for the single most important action (e.g., the "power" button)?
- [ ] Does the spatial grouping instantly communicate the relationship between controls?
- [ ] Is the typography starkly neutral and easily legible without expressive weights?
