---
name: layer-retro-wave
description: Retro-wave layer heuristic.
---

# 1. Core Philosophy
Retro-wave (or synthwave) aesthetics combine 80s neon color palettes, glowing grids, and stark contrast. It creates a highly stylized, energetic atmosphere based on retro-futuristic sci-fi.

## 2. Exact CSS Token Implementation
```css
:root {
  --rw-neon-pink: #ff00ff;
  --rw-neon-cyan: #00ffff;
  --rw-dark-bg: #090014;
  --rw-grid-color: rgba(255, 0, 255, 0.3);
  --rw-text-glow: 0 0 10px var(--rw-neon-pink), 0 0 20px var(--rw-neon-pink);
  --rw-bg-grid: linear-gradient(transparent 95%, var(--rw-grid-color) 100%);
}
```

## 3. Strict Application Rules
- Background must be deeply dark (near-black purple or blue) for neon to pop.
- Apply high-blur `text-shadow` or `box-shadow` to simulate light emission.
- Implement repeating linear gradients to simulate perspective grids.

## 4. Anti-Slop Validation Checklist
- [ ] Contrast meets accessibility standards despite glowing effects.
- [ ] Glows do not cause horizontal scrolling (manage blur spread).
- [ ] Color palette is strictly constrained to cyan, magenta, purple, and dark blue.
