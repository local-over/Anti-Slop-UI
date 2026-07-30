---
name: school-nytimes
description: New York Times Design School. Expert-level heuristic for editorial typography, masonry layouts, and journalistic authority.
---

# New York Times Design School

## 1. Philosophy
Modern traditionalism, journalistic authority, and editorial rhythm. The NYT translates the dense, structured layout of a classic newspaper broadsheet into a dynamic digital format. It balances typographic elegance with a strict hierarchy that guides the reader through complex, multi-faceted news stories.

## 2. Exact CSS Design Tokens
**Fonts:**
- Headlines: `Cheltenham, Georgia, serif`
- Body Text: `Imperial, Georgia, serif`
- UI/Byline/Metadata: `Franklin Gothic, Arial, sans-serif`

**Hex Colors:**
- Background: `#FFFFFF` (White)
- Text (Primary): `#121212` (Near Black)
- Text (Secondary): `#5A5A5A` (Dark Grey)
- Accent/Borders: `#E2E2E2` (Light Grey)
- Links/Interactive: `#326891` (Subdued Blue)
- Breaking News: `#CC0000` (Classic Red)

## 3. Spatial Reasoning & Grid
- **Grid System:** Complex multi-column grid (often 6 to 12 columns) that scales gracefully. Use of subtle vertical rules (1px lines) to separate columns.
- **Spacing:** Tight column gaps, generous vertical whitespace between story clusters to create editorial pacing.
- **Layout:** Masonry-lite structure, anchored by a prominent central visual or lead story.

## 4. Component Architecture & Physics
- **Components:** Dense typography blocks, delicate 1px borders, carefully cropped imagery.
- **Physics:** Subtle, refined. Hover states are usually just underlines on text or slight opacity drops on images.

## 5. Anti-Slop Validation Checklist
- [ ] Does it use a strict Serif (Headlines) and Sans-Serif (Metadata) pairing?
- [ ] Are articles separated by thin, elegant 1px borders?
- [ ] Is the primary focus on typographic hierarchy rather than colored blocks?
- [ ] Does the layout resemble a digital broadsheet with distinct column structures?
- [ ] Is whitespace used strategically to signify editorial importance?
