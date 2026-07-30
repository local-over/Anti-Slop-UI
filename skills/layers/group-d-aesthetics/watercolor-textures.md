---
name: layer-watercolor-textures
description: Watercolor textures layer heuristic.
---

# 1. Core Philosophy
Watercolor UI leverages soft, bleeding edges and translucent layers of color. It creates a calming, fluid, and artistic interface where sections blend gently rather than stopping at harsh mathematical grid lines.

## 2. Exact CSS Token Implementation
```css
:root {
  --wc-color-1: rgba(135, 206, 235, 0.4);
  --wc-color-2: rgba(255, 182, 193, 0.4);
  --wc-blend-mode: multiply;
  --wc-filter: blur(20px);
  --wc-bg-gradient: radial-gradient(circle at top left, var(--wc-color-1), transparent),
                    radial-gradient(circle at bottom right, var(--wc-color-2), transparent);
}
```

## 3. Strict Application Rules
- Stack multiple soft, highly blurred radial gradients or semi-transparent SVGs.
- Use `mix-blend-mode: multiply` for overlapping color blobs to simulate wet paint layers.
- Text must sit on solid, readable areas or have subtle white underpainting.

## 4. Anti-Slop Validation Checklist
- [ ] Blends do not severely hinder text contrast.
- [ ] Gradients use transparency to simulate edge bleeding.
- [ ] Avoids harsh geometric breaks inside textured areas.
