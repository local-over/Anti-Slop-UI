---
name: layer-material-depth
description: Enforces a Z-axis logic based on physical paper and light.
---

# Layer 3: Material Depth

When this heuristic is loaded, the Z-axis is governed by physical shadows.

## Constraints
1.  **Elevation Levels:** Define strict elevation levels (e.g., `dp0` to `dp24`). 
2.  **Shadow Physics:** Shadows must grow softer and wider as the element "rises" higher on the Z-axis. Do not use harsh, tight shadows on floating elements.
3.  **Light Source:** Assume a consistent top-down light source. The shadow should fall below the element (`box-shadow: 0px 4px ...`).
