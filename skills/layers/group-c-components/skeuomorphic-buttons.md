---
name: layer-skeuomorphic-buttons
description: Skeuomorphic buttons layer heuristic.
---

# 1. Core Philosophy
Buttons designed to look like real-world, physical switches. They use highlights, gradients, and distinct shadows to imply pressability.

## 2. Exact CSS Token Implementation
```css
.skeuo-btn {
  background: linear-gradient(to bottom, #f9f9f9, #e0e0e0);
  border: 1px solid #a0a0a0;
  border-bottom-color: #606060;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.2);
  border-radius: 4px;
}
.skeuo-btn:active {
  background: #e0e0e0;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
  border-bottom-color: #a0a0a0;
}
```

## 3. Strict Application Rules
- The active state must visually depress the button via inverted shadows.
- Include a subtle top inner highlight to simulate a light source.
- Avoid using on flat, modern layouts where it clashes visually.

## 4. Anti-Slop Validation Checklist
- [x] Physical mechanism explained without flowery language.
- [x] Excludes words like "cutting-edge" (it's an older technique anyway).
- [x] Straight to the point on implementation.
