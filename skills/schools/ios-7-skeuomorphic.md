---
name: school-ios-7-skeuomorphic
description: Apple Classic Skeuomorphic Design School. Expert-level heuristic for digital realism, textures, and heavy 3D bevels.
---

# Apple Classic Skeuomorphic Design School (pre-iOS 7)

## 1. Philosophy
Digital realism, physical metaphors, and tactile familiarity. The interface relies on mimicking real-world textures, lighting, and materials (leather, felt, linen, brushed metal) to help users intuitively understand how to interact with a novel touch screen.

## 2. Exact CSS Design Tokens
**Fonts:**
- Primary: `Helvetica Neue, Helvetica, sans-serif`
- Features: Heavy use of inset text shadows (`text-shadow: 0 -1px 1px rgba(0,0,0,0.5)`).

**Hex Colors & Textures:**
- Metal: `#D6D6D6` to `#E4E4E4` (with linear gradients mimicking gloss)
- Linen (Backgrounds): `#5A5E6B` (Patterned)
- Leather (Calendar): `#8C3A24`
- Buttons (Glossy Blue): Linear gradient from `#7FB0E3` to `#3B5998`
- Text: Deep blacks or stark whites with contrasting drop shadows.

## 3. Spatial Reasoning & Grid
- **Grid System:** Rigid icon grid (4x4 on iPhone) with a distinct glossy glass dock at the bottom.
- **Spacing:** Elements are spaced to mimic physical objects; buttons look like they have physical depth and bezels.
- **Layout:** Confined to the screen edges, heavy borders, highly defined structural containers.

## 4. Component Architecture & Physics
- **Components:** Glossy glass buttons (using heavy inner shadows, top highlights, and drop shadows), toggle switches with metallic ridges.
- **Physics:** Inertial scrolling with a hard rubber-band bounce at the edges.

## 5. Anti-Slop Validation Checklist
- [ ] Does every button have a specular highlight (glossy top curve)?
- [ ] Are textures like linen, wood, or brushed metal present?
- [ ] Do text elements use 1px inset shadows to look stamped into the background?
- [ ] Is there a prominent use of 3D bevels on all interactive elements?
- [ ] Do switches and dials mimic physical real-world counterparts perfectly?
