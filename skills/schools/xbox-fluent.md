---
name: school-xbox-fluent
description: Xbox Fluent Design School. Expert-level heuristic for structured modularity, bold typography, and D-pad grids.
---

# Xbox Fluent Design School

## 1. Philosophy
Structured modularity, bold typography, and multi-surface scalability. Based on Microsoft's Fluent Design system, the Xbox UI is a dense dashboard that balances rich media with complex ecosystem features (Game Pass, Store, Social). It is highly customizable and blocky.

## 2. Exact CSS Design Tokens
**Fonts:**
- Primary: `Segoe UI, sans-serif`
- Typography Scale: Massive, bold headers (Dashboard titles) down to dense metadata.

**Hex Colors:**
- Background: `#1A1A1A` to `#101010` (Dark greys)
- Brand Accent: `#107C10` (Xbox Green)
- Focus State: `#FFFFFF` (Thick white border around selected tiles)
- Secondary Elements: `#3A3A3A` (Dark Grey cards)

## 3. Spatial Reasoning & Grid
- **Grid System:** Metro/Live-Tile evolution. A rigid masonry grid of varying sized rectangles (1x1, 2x1, 2x2).
- **Spacing:** Tight gutters between tiles to create a unified mosaic.
- **Layout:** Vertically scrolling dashboard with distinct horizontal sections.

## 4. Component Architecture & Physics
- **Components:** Hard-edged rectangles, acrylic blur backgrounds, reveal highlight effects on hover/focus.
- **Physics:** Fast, directional. Focus moves in strict X/Y axes. "Reveal" lighting follows the cursor/controller input.

## 5. Anti-Slop Validation Checklist
- [ ] Is the interface built primarily out of tight, interlocking rectangles?
- [ ] Does it use Segoe UI with bold, capitalized headers?
- [ ] Are focus states clear, utilizing directional lighting/borders?
- [ ] Does it integrate 'Acrylic' style blur behind overlapping menus?
- [ ] Is it optimized for D-pad/stick grid navigation?
