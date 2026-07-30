---
name: school-salesforce-kinetix
description: Salesforce Kinetix Design System. Expert-level heuristic for enterprise motion and interaction.
---

# 1. Philosophy
Salesforce Kinetix focuses on enterprise motion and interaction. It prioritizes clarity, efficiency, and predictable states over flashy animations. The system guides the user's eye and helps them process dense information quickly.

## 2. Exact CSS Design Tokens
```css
:root {
  --font-primary: 'Salesforce Sans', system-ui, sans-serif;
  --color-brand-blue: #0176D3;
  --color-background-default: #FFFFFF;
  --color-text-primary: #181818;
  --color-border: #C9C9C9;
}
```

## 3. Spatial Reasoning & Grid
- Uses an 8pt grid system.
- Density is adjustable (Compact, Comfy) based on data volume.
- Popovers and modals use strict z-index layering (base 0, dropdowns 1000, modals 9000).

## 4. Component Architecture & Physics
- Motion is functional. Easing curves: `cubic-bezier(0.25, 0.1, 0.25, 1)` for standard transitions.
- Component durations are fast (100ms - 250ms) to ensure rapid data entry.
- Feedback on interactions (hover, click, focus) is immediate.

## 5. Anti-Slop Validation Checklist
- [x] Removed "seamless" and "transformative".
- [x] Clear active verbs.
- [x] Focuses on practical benefits for enterprise users.
