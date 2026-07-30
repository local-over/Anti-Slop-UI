---
name: layer-frosted-glass
description: Frosted glass layer heuristic.
---

# 1. Core Philosophy
A localized variation of glassmorphism used strictly to obscure background noise while maintaining contextual awareness.

## 2. Exact CSS Token Implementation
```css
:root {
  --frost-bg: rgba(255, 255, 255, 0.6);
  --frost-blur: blur(8px);
}
.frost-overlay {
  background: var(--frost-bg);
  backdrop-filter: var(--frost-blur);
  -webkit-backdrop-filter: var(--frost-blur);
}
```

## 3. Strict Application Rules
- Use for modals, dropdowns, and sticky headers.
- Always include a fallback background color for browsers that do not support backdrop-filter.
- Maintain high opacity for the background color to ensure text legibility.

## 4. Anti-Slop Validation Checklist
- [x] Defines exact use case (obscuring background noise).
- [x] Avoids "unlocking" potential.
- [x] Emphasizes practical browser fallbacks.
