---
name: layer-solid-fill-inputs
description: Expert-level implementation of Solid Fill Inputs.
---

# Solid Fill Inputs

## 1. Core Philosophy
Forms should feel anchored and solid. Removing borders in favor of a strong background fill reduces visual noise and creates a definitive bounded area for text entry.

## 2. Exact CSS Token Implementation
```css
:root {
  --input-bg-default: #f3f4f6; /* Gray 100 */
  --input-bg-focus: #e5e7eb; /* Gray 200 */
  --input-border: none;
  --input-ring-focus: 0 0 0 2px rgba(59, 130, 246, 0.5);
}
```

## 3. Strict Application Rules
- Zero borders on default state.
- Focus state must rely on a background darken OR an accessibility-compliant outline/ring.
- Contrast ratio between input background and page background must be at least 1.1:1.

## 4. Anti-Slop Validation Checklist
- [ ] No default borders present.
- [ ] Clear focus state via ring or background shift.
- [ ] Input area is instantly distinguishable from the main page background.
