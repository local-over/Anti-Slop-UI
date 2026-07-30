---
name: school-revolut
description: Revolut Design System. Expert-level heuristic for superapp density, strict 4px scales, and mechanical contrast.
---

# Revolut Design System

## 1. Philosophy
Fintech-first, mechanical precision, and "Superapp" scalability. Revolut's design is stark, heavily reliant on black-and-white contrast, and engineered to support dozens of distinct financial products within a single interface.

## 2. Exact CSS Design Tokens
- **Fonts:** `Aeonik Pro` (Weight 500 for Display), `Inter` (Weight 400 for Body).
- **Primary Cobalt:** `#494FDF`
- **Dark Surface / Ink:** `#191C1F`
- **Light Surface:** `#FFFFFF`
- **Muted Slate:** `#505A63`
- **Border / Divider:** `#C9C9CD`
- **Success Teal:** `#00A87E`
- **Critical Red:** `#E61E49`

## 3. Spatial Reasoning & Grid
- **Typography Scale:** Massive structural contrast. Headlines can reach 136px with tight tracking (-2.72px), while body text uses positive tracking (+0.2px) for mechanical readability.
- **Grid:** Strict 4px increment scale (4, 8, 12, 16, 20).
- **Radii:** 12px to 20px for cards. 9999px for pill buttons.

## 4. Component Architecture & Physics
- **Two-Mode Rhythm:** High contrast layouts that juxtapose pure white sections with pure black sections to delineate different financial sub-apps.
- **Interactive States:** Utilitarian, fast state changes. Less emphasis on bounce, more on immediate mechanical feedback.
- **Navigation:** Highly compact, scrollable horizontal pills and dense bottom tab bars to handle superapp complexity.

## 5. Anti-Slop Validation Checklist
- [ ] Is Aeonik Pro used for high-impact, tight-tracked headlines?
- [ ] Does the spacing adhere strictly to a 4px mathematical scale?
- [ ] Is the primary aesthetic stark (black and white) with Cobalt used only for primary actions?
- [ ] Are buttons pill-shaped (`9999px` radius)?
