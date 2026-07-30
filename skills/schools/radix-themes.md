---
name: school-radix-themes
description: Radix Themes Design School. Expert-level heuristic for accessible, unstyled primitives with high-density polish.
---

# Radix Themes Design School

## 1. Philosophy
Radix Themes sits precisely at the intersection of native-feeling UI and rapid web composition. It is unapologetically opinionated about accessibility and typography while leaving structural layout open. The philosophy emphasizes visual perfection out-of-the-box, optimized for dense, app-like experiences rather than marketing sites.

## 2. Exact CSS Design Tokens
- **Fonts:** System fonts, but highly tuned. Automatically maps to `-apple-system, BlinkMacSystemFont...`
- **Colors (Radix Colors):** 9-step scale tailored for perfect contrast. 
  - Backgrounds: Steps 1-2.
  - Interactive/Hover: Steps 3-5.
  - Borders: Steps 6-8.
  - Solid Accents: Step 9 (e.g., `#0090FF` Blue 9).
  - Text: Steps 11-12.
- **Translucency:** Alpha channel scales (e.g., `blueA`) used for overlaid elements.

## 3. Spatial Reasoning & Grid
- **Scale:** Density-aware 9-step spatial scale (`space-1` to `space-9`).
- **Scaling:** Uses a `scaling` variable to proportionally increase/decrease UI density globally (e.g., scaling up to 110% for accessibility or down to 90% for dashboards).
- **Radii:** 6-step radius scale strictly applied via `--radius`.

## 4. Component Architecture & Physics
- **Architecture:** A beautifully styled thin layer built directly on top of the unstyled Radix UI primitives.
- **DOM Purity:** Output HTML is semantic and free of bloated utility classes; heavily utilizes custom data attributes (e.g., `data-accent-color="blue"`).
- **Motion:** Instant or strictly native-feeling transitions; deliberately avoids bouncy or overly expressive animations.

## 5. Anti-Slop Validation Checklist
- [ ] Are Radix standard color steps applied correctly (e.g., Step 9 for primary buttons, Step 11 for low-contrast text)?
- [ ] Is layout density controlled globally via the `Theme` provider rather than localized hacks?
- [ ] Are custom `aria-*` tags absent (relying on Radix primitive’s baked-in accessibility)?
- [ ] Are alpha colors used for focus rings and modal overlays instead of opaque hexes?
