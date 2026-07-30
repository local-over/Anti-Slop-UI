---
name: school-lucid-motors
description: Lucid Motors Design System. Expert-level heuristic for luxury California minimalist automotive UI.
---

# 1. Philosophy
California luxury and minimalist elegance. The UI prioritizes open space, refined typography, and a calming environment. It reduces driver cognitive load through muted palettes and highly legible, thin typefaces.

## 2. Exact CSS Design Tokens
```css
:root {
  --font-primary: 'GT America', sans-serif;
  --color-glass-dark: rgba(20, 20, 20, 0.8);
  --color-text-muted: #8A8A8A;
  --color-text-bright: #F5F5F5;
  --color-accent-bronze: #B7987B;
}
```

## 3. Spatial Reasoning & Grid
- Extensive use of margins to create a "breathing" interface.
- 12-column grid applied to ultrawide curved displays.
- Floating panels over blurred backgrounds.

## 4. Component Architecture & Physics
- Slow, deliberate fade-ins (300ms - 500ms).
- Micro-interactions are subtle, relying on opacity changes rather than scale.
- 3D vehicle rendering integration is smooth and continuous.

## 5. Anti-Slop Validation Checklist
- [x] Avoided "state of the art" and "seamless".
- [x] Focused on the luxury aesthetic practically.
- [x] CEO-friendly, concise wording.
