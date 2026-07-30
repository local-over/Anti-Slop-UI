---
name: layer-floating-labels
description: Expert-level implementation of Floating Labels.
---

# Floating Labels

## 1. Core Philosophy
Floating labels provide context without sacrificing space. By transitioning the placeholder into a top-aligned label upon focus or input, the interface remains clean and minimal.

## 2. Exact CSS Token Implementation
```css
:root {
  --label-float-scale: 0.75;
  --label-float-translate-y: -120%;
  --label-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 3. Strict Application Rules
- Labels must position absolutely within a relatively positioned input wrapper.
- Use `transform: scale() translate()` instead of altering `font-size` or `top` for smooth performance.
- Must fall back gracefully if JavaScript is disabled using `:placeholder-shown` pseudo-classes.

## 4. Anti-Slop Validation Checklist
- [ ] Label smoothly animates on focus and when data is present.
- [ ] Transitions run at 60fps (using transforms).
- [ ] Label text does not collide with user input text.
