---
name: layer-flat
description: Enforces an absolute 2D flat Z-axis with zero depth.
---

# Layer 3: Absolute Flatness

When this heuristic is loaded, the UI exists purely on a 2D plane.

## Constraints
1.  **No Shadows:** `box-shadow` is strictly banned for indicating depth.
2.  **Separation:** Use 1px solid borders or distinct background color changes to separate overlapping elements.
3.  **Z-Index:** While `z-index` can be used for technical stacking (modals), do not attempt to visually represent physical distance between layers.
