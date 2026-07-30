---
name: layer-grain-noise-overlay
description: Grain noise overlay layer heuristic.
---

# 1. Core Philosophy
Grain and noise overlays break up flat digital colors, adding a tactile, film-like or paper-like texture. This prevents banding on gradients and grounds the interface in a physical, analog feeling.

## 2. Exact CSS Token Implementation
```css
:root {
  --grain-url: url('/assets/noise.png');
  --grain-opacity: 0.05;
  --grain-blend: overlay;
}
.grain-overlay {
  position: fixed;
  inset: 0;
  background-image: var(--grain-url);
  opacity: var(--grain-opacity);
  mix-blend-mode: var(--grain-blend);
  pointer-events: none;
}
```

## 3. Strict Application Rules
- Apply noise globally via an overlay element with `pointer-events: none`.
- Keep opacity very low (below 10%) so it is felt rather than explicitly seen.
- Ensure the noise tile is a lightweight, infinitely tiling graphic or SVG.

## 4. Anti-Slop Validation Checklist
- [ ] Overlay does not block pointer events (clicks/hovers pass through).
- [ ] Negligible performance/bandwidth impact from the noise image.
- [ ] Opacity is low enough to retain readability of small text.
