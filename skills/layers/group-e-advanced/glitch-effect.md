---
name: layer-glitch-effect
description: Glitch effect layer heuristic.
---

# 1. Core Philosophy
Glitch effects simulate hardware malfunction, signal interference, or digital corruption. It is used as a highly aggressive transition or hover state to draw immediate attention, fitting perfectly with brutalist or cyberpunk themes.

## 2. Exact CSS Token Implementation
```css
:root {
  --glitch-offset-1: 2px;
  --glitch-offset-2: -2px;
  --glitch-color-1: rgba(255,0,0,0.8);
  --glitch-color-2: rgba(0,255,255,0.8);
}
.glitch:hover {
  animation: glitch-anim 0.2s linear infinite;
  text-shadow: var(--glitch-offset-1) 0 var(--glitch-color-1),
               var(--glitch-offset-2) 0 var(--glitch-color-2);
}
```

## 3. Strict Application Rules
- Use exclusively for interactions (hover/active) or specific, rare alerts.
- Do not apply to long reading blocks; it causes immediate eye strain.
- Animate `clip-path` and `transform: translate` for a true tearing effect.

## 4. Anti-Slop Validation Checklist
- [ ] Effect stops when interaction stops.
- [ ] Does not trigger continuous layout thrashing (use transforms/clip-paths).
- [ ] Colors strictly split into RGB or Cyan/Magenta channels.
