---
name: layer-high-contrast-accessibility
description: High-contrast accessibility layer heuristic.
---

# 1. Core Philosophy
Prioritizes legibility above all other design concerns. Colors and text sizes strictly adhere to or exceed WCAG AAA standards.

## 2. Exact CSS Token Implementation
```css
:root {
  --hc-bg: #ffffff;
  --hc-text: #000000;
  --hc-focus: #0000ff; /* Minimum 7:1 contrast ratio */
}
*:focus {
  outline: 3px solid var(--hc-focus);
  outline-offset: 2px;
}
```

## 3. Strict Application Rules
- Text contrast ratio must be at least 7:1 for normal text and 4.5:1 for large text.
- Do not rely on color alone to convey information; use icons or underlines.
- Focus states must be highly visible, using thick outlines.

## 4. Anti-Slop Validation Checklist
- [x] No metaphorical nonsense.
- [x] Strict adherence to actual metrics (7:1 ratio).
- [x] Rejects "empower" for "prioritize legibility".
