---
name: layer-split-screen-layout
description: Split screen layout layer heuristic.
---

# 1. Core Philosophy
Divides the viewport into two distinct vertical panels. It presents equal-weight options or pairs visual media directly with text.

## 2. Exact CSS Token Implementation
```css
.split-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
.split-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
```

## 3. Strict Application Rules
- Collapse to a single column (stacked) on mobile devices (`max-width: 768px`).
- Ensure distinct visual contrast between the two panels.
- Do not add complex inner layouts that break the 50/50 balance.

## 4. Anti-Slop Validation Checklist
- [x] Explains the responsive necessity immediately.
- [x] No mention of "fostering" engagement.
- [x] Short, punchy sentences.
