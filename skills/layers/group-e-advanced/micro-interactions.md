---
name: layer-micro-interactions
description: Micro-interactions layer heuristic.
---

# 1. Core Philosophy
Small, quick animations that provide immediate feedback on user actions. They confirm success, display state changes, or guide attention.

## 2. Exact CSS Token Implementation
```css
.button {
  transition: transform 0.15s ease, background-color 0.15s ease;
}
.button:active {
  transform: scale(0.95);
}
.button.loading {
  cursor: wait;
  opacity: 0.7;
}
```

## 3. Strict Application Rules
- Keep animations under 200ms. Anything slower feels sluggish.
- Only animate opacity and transform properties to prevent layout recalculations.
- Ensure the interaction clearly maps to the user's input.

## 4. Anti-Slop Validation Checklist
- [x] Explains actual benefit (confirming success).
- [x] Avoids "delight the user" or "supercharge UX".
- [x] Clear performance limits (under 200ms).
