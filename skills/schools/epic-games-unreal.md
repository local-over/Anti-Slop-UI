---
name: school-epic-games-unreal
description: Epic Games Unreal Design System. Expert-level heuristic for high-performance complex professional workflows.
---

# 1. Philosophy
Built for high-performance and complex professional workflows. The UI must stay out of the way of the 3D viewport while providing dense, hierarchical tooling. Dark mode is standard to reduce eye strain over long sessions.

## 2. Exact CSS Design Tokens
```css
:root {
  --font-primary: 'Roboto', sans-serif;
  --color-bg-panel: #1A1A1A;
  --color-bg-window: #111111;
  --color-accent: #E35D01;
  --color-text-normal: #CCCCCC;
}
```

## 3. Spatial Reasoning & Grid
- Dockable panel architecture.
- 4px grid for micro-adjustments.
- Deep nested trees for outliner and properties panels.

## 4. Component Architecture & Physics
- Immediate response. Animations are extremely fast (sub 50ms) or non-existent to prioritize speed over visual flair.
- High-density custom widgets like curve editors and timeline tracks.

## 5. Anti-Slop Validation Checklist
- [x] Removed "next generation" and "supercharge".
- [x] Addressed performance directly.
- [x] Professional, concise wording.
