---
name: layer-variable-fonts
description: Variable fonts layer heuristic.
---

# 1. Core Philosophy
Variable fonts contain an entire font family within a single file. They allow infinite adjustments of weight, width, and slant, enabling micro-typography tweaks for improved legibility and smooth, performant hover animations.

## 2. Exact CSS Token Implementation
```css
:root {
  --vf-font: 'Inter Variable', sans-serif;
  --vf-weight-normal: "wght" 400;
  --vf-weight-bold: "wght" 700;
  --vf-slant-italic: "slnt" -10;
  --vf-transition: font-variation-settings 0.2s ease;
}
.vf-hover:hover {
  font-variation-settings: "wght" 800, "wdth" 110;
}
```

## 3. Strict Application Rules
- Consolidate all web font loading into a single variable font file.
- Use `font-variation-settings` for precise control over axes.
- Ensure fallback fonts match the base metrics of the variable font.

## 4. Anti-Slop Validation Checklist
- [ ] Only one font file requested from the server.
- [ ] Fallbacks are defined and metric-matched.
- [ ] Axis variations are not abused (keep readability first).
