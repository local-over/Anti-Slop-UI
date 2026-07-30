---
name: school-wise
description: Wise Design System. Expert-level heuristic for bold fintech typography, borderless money mechanics, and thin ring shadows.
---

# Wise Design System

## 1. Philosophy
"Money without borders." Wise's design is unapologetically bold, highly readable, and globally accessible. It balances aggressive typography with a calming, trustworthy functional layer.

## 2. Exact CSS Design Tokens
- **Fonts:** `Wise Sans` (Weight 900 for Display), `Inter` (Weight 600 for Body).
- **Wise Green (Primary Action):** `#9FE870`
- **Ink (Text Primary):** `#0E0F0C`
- **Surface Muted:** `#F1F1ED`
- **Surface Pale Green:** `#E2F6D5`
- **Error:** `#CB272F`

## 3. Spatial Reasoning & Grid
- **Radii:** Large, friendly corners on cards (30px–40px). Buttons are fully pill-shaped (`9999px`).
- **Shadows:** Minimalist. Prefers thin ring shadows (`0 0 0 1px rgba(14,15,12,0.12)`) over heavy drop shadows.
- Typography is massive. Headings use tight line-heights (0.85) to create a billboard effect.

## 4. Component Architecture & Physics
- **Button Interactions:** Instead of color shifting on hover, primary buttons scale up slightly (`transform: scale(1.05)`) with a smooth, springy transition.
- **Card Layouts:** High contrast between stark backgrounds and bright green accents.

## 5. Anti-Slop Validation Checklist
- [ ] Are headings set to extreme weights (900) with tight line-heights?
- [ ] Is pure black avoided in favor of `#0E0F0C`?
- [ ] Do buttons scale on hover rather than just changing color?
- [ ] Are shadows implemented as thin 1px rings rather than soft blurs?
