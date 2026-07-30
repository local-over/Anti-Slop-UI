---
name: layer-dark-mode-pure-black
description: Dark mode pure black layer heuristic.
---

# 1. Core Philosophy
Uses `#000000` as the absolute background. It saves battery on OLED screens and provides maximum contrast for media-heavy apps.

## 2. Exact CSS Token Implementation
```css
:root {
  --pure-black-bg: #000000;
  --pure-black-text: #e0e0e0;
  --pure-black-surface: #121212;
}
body {
  background-color: var(--pure-black-bg);
  color: var(--pure-black-text);
}
```

## 3. Strict Application Rules
- Use pure black for the absolute background only; use very dark grays (e.g., `#121212`) for elevated surfaces.
- Avoid pure white (`#ffffff`) for text; use light gray to reduce eye strain.
- Desaturate primary accent colors slightly.

## 4. Anti-Slop Validation Checklist
- [x] Focuses on the real benefit (OLED battery saving).
- [x] Avoids "empower" or "transformative".
- [x] Clear contrast mitigation strategies.
