---
name: layer-golden-ratio-typography
description: Golden ratio typography layer heuristic.
---

# 1. Core Philosophy
Golden ratio typography bases font sizing, line height, and spacing on the mathematical ratio of 1.618. This approach creates an inherently pleasing, naturally balanced reading experience by ensuring that headers and body text scale proportionally according to a universal mathematical constant.

## 2. Exact CSS Token Implementation
```css
:root {
  --gr-base: 1rem;
  --gr-ratio: 1.618;
  --gr-text-sm: calc(var(--gr-base) / var(--gr-ratio));
  --gr-text-base: var(--gr-base);
  --gr-text-md: calc(var(--gr-base) * var(--gr-ratio));
  --gr-text-lg: calc(var(--gr-text-md) * var(--gr-ratio));
  --gr-text-xl: calc(var(--gr-text-lg) * var(--gr-ratio));
  --gr-line-height: var(--gr-ratio);
}
```

## 3. Strict Application Rules
- Do not mix arbitrary font sizes; strict adherence to the golden ratio scale is required.
- Line heights for body text must default to `1.618`.
- Margins and padding between text blocks should map to the ratio scale.

## 4. Anti-Slop Validation Checklist
- [ ] No manual px overrides for text sizing.
- [ ] Ratio variable strictly set to 1.618.
- [ ] No generic adjectives like "beautiful" or "stunning" in the typography component documentation.
