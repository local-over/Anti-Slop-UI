---
name: layer-brutalism
description: Brutalism layer heuristic.
---

# 1. Core Philosophy
Raw, unpolished design prioritizing function and stark aesthetics over comfort. Expect heavy typography, harsh contrasts, and visible borders.

## 2. Exact CSS Token Implementation
```css
:root {
  --brutal-bg: #ffffff;
  --brutal-border: 4px solid #000000;
  --brutal-shadow: 8px 8px 0px #000000;
}
.brutal-card {
  background: var(--brutal-bg);
  border: var(--brutal-border);
  box-shadow: var(--brutal-shadow);
  border-radius: 0;
}
```

## 3. Strict Application Rules
- Never use rounded corners (border-radius: 0).
- Use high-contrast color palettes (often black, white, and one primary color).
- Text must be large, legible, and structurally aligned to a hard grid.

## 4. Anti-Slop Validation Checklist
- [x] Directly states visual characteristics.
- [x] Excludes "transformative" or "empower".
- [x] Simple, punchy sentences.
