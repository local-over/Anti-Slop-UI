---
name: layer-pixel-art-ui
description: Pixel art UI layer heuristic.
---

# 1. Core Philosophy
Pixel art UI evokes nostalgia, raw computing power, and gamification. It mandates hard edges, blocky fonts, thick borders, and primary colors to mimic low-resolution raster graphics of early computing eras.

## 2. Exact CSS Token Implementation
```css
:root {
  --pixel-border-size: 4px;
  --pixel-border-color: #000;
  --pixel-shadow: 
    var(--pixel-border-size) var(--pixel-border-size) 0 0 var(--pixel-border-color);
  --pixel-font: 'Press Start 2P', monospace;
  --pixel-rendering: crisp-edges;
}
```

## 3. Strict Application Rules
- All images and canvas elements must use `image-rendering: pixelated` or `crisp-edges`.
- Borders must be absolute pixel values (e.g., 2px, 4px) and never percentages or rems.
- Avoid anti-aliasing on fonts and edges.

## 4. Anti-Slop Validation Checklist
- [ ] `image-rendering` set to `pixelated` globally for assets.
- [ ] Box shadows used to create hard, non-blurred borders.
- [ ] No soft gradients or feathering.
