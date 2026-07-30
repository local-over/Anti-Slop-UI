---
name: layer-typewriter-effect
description: Typewriter effect layer heuristic.
---

# 1. Core Philosophy
The typewriter effect reveals text sequentially, mimicking terminal output or physical typing. It commands user pacing, forcing them to read at the speed of the output, building anticipation and narrative focus.

## 2. Exact CSS Token Implementation
```css
:root {
  --type-speed: 2s;
  --type-steps: 40;
  --type-cursor: block;
  --type-cursor-color: #000;
}
.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.15em solid var(--type-cursor-color);
  animation: typing var(--type-speed) steps(var(--type-steps), end),
             blink-caret 0.75s step-end infinite;
}
```

## 3. Strict Application Rules
- Only apply to single-line text elements (multi-line requires JS).
- The `steps()` count in the animation must match the character count of the string.
- Provide a persistent blinking cursor after typing completes to indicate readiness.

## 4. Anti-Slop Validation Checklist
- [ ] Text is not hidden from screen readers.
- [ ] Animation respects `prefers-reduced-motion` media queries.
- [ ] Step count mathematically matches character length to avoid jumping halves of characters.
