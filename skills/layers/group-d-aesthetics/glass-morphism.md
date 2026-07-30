---
name: layer-glass-morphism
description: Glass morphism layer heuristic.
---

# 1. Core Philosophy
Layering translucent objects creates depth and hierarchy. It uses background blurring to simulate frosted glass over vibrant or dynamic backgrounds.

## 2. Exact CSS Token Implementation
```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-blur: blur(16px);
  --glass-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
.glass-panel {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}
```

## 3. Strict Application Rules
- Require an underlying vivid background or image to make the blur effect visible.
- Limit usage to floating elements (cards, modals, navigation bars).
- Ensure text contrast passes WCAG AA standards. 

## 4. Anti-Slop Validation Checklist
- [x] Defines actual benefit (visual depth) without hyperbole.
- [x] Avoids words like "seamless" and "elevate".
- [x] Direct instructions without metaphorical fluff.
