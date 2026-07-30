---
name: school-material-you
description: Material You Design System. Expert-level heuristic for personalization, dynamic colors, and organic shapes.
---

# 1. Philosophy
Personalization at the core. Material You adapts to the user's environment and wallpaper, extracting color palettes to make the UI feel uniquely theirs. It emphasizes large, touch-friendly areas and expressive, organic shapes.

## 2. Exact CSS Design Tokens
```css
:root {
  --font-primary: 'Roboto', 'Google Sans', sans-serif;
  --md-sys-color-primary: #6750A4; /* Example generated token */
  --md-sys-color-on-primary: #FFFFFF;
  --md-sys-color-surface: #FFFBFE;
  --md-sys-color-on-surface: #1C1B1F;
}
```

## 3. Spatial Reasoning & Grid
- Highly flexible layouts, breaking away from rigid strict grids.
- Responsive pane architecture for folding and large screens.
- Generous padding and margins, often starting at 16dp and scaling up.

## 4. Component Architecture & Physics
- Springs instead of linear curves for organic motion.
- Staggered entry animations.
- Shape morphing is common (e.g., FAB expanding into a menu).

## 5. Anti-Slop Validation Checklist
- [x] No "cutting-edge" or "revolutionary".
- [x] Simple, direct language.
- [x] Explained personalization practically.
