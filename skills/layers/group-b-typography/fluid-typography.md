---
name: layer-fluid-typography
description: Fluid typography layer heuristic.
---

# 1. Core Philosophy
Fluid typography ensures text scales smoothly between a minimum and maximum viewport width, acting like a liquid rather than stepping discretely at arbitrary breakpoints. This guarantees optimal readability on any device size.

## 2. Exact CSS Token Implementation
```css
:root {
  --fluid-min-width: 320;
  --fluid-max-width: 1200;
  --fluid-min-size: 16;
  --fluid-max-size: 24;
  --fluid-typography: clamp(
    calc(var(--fluid-min-size) * 1px),
    calc(var(--fluid-min-size) * 1px + (var(--fluid-max-size) - var(--fluid-min-size)) * ((100vw - calc(var(--fluid-min-width) * 1px)) / (var(--fluid-max-width) - var(--fluid-min-width)))),
    calc(var(--fluid-max-size) * 1px)
  );
}
```

## 3. Strict Application Rules
- Always use `clamp()` for fluid definitions.
- Provide sensible minimums (never below 12px) and maximums.
- Avoid using media queries just to adjust `font-size` on body text.

## 4. Anti-Slop Validation Checklist
- [ ] Text never scales down to an unreadable size.
- [ ] No complex `@media` breakpoints just for font scaling.
- [ ] Clear documentation of viewport limits.
