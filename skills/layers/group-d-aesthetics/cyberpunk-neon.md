---
name: layer-cyberpunk-neon
description: Cyberpunk neon layer heuristic.
---

# 1. Core Philosophy
Cyberpunk neon emphasizes high-tech, low-life grit. It uses asymmetrical borders, harsh neon yellow/blue accents, glitches, and terminal-like monospaced data readouts to create a dystopian, hacker-centric UI.

## 2. Exact CSS Token Implementation
```css
:root {
  --cp-yellow: #fcee0a;
  --cp-cyan: #00f0ff;
  --cp-dark: #050a0e;
  --cp-border-clip: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
  --cp-font: 'Rajdhani', monospace;
}
```

## 3. Strict Application Rules
- Use harsh yellow backgrounds with dark text for primary calls to action.
- Apply `clip-path` for chamfered, angled corners instead of `border-radius`.
- Borders should sometimes appear broken or dashed.

## 4. Anti-Slop Validation Checklist
- [ ] No rounded corners (`border-radius: 0`).
- [ ] Yellow/cyan colors strictly matched to exact hex codes.
- [ ] Fonts are industrial/monospaced.
