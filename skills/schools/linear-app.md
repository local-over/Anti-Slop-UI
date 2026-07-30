---
name: school-linear-app
description: Linear App Design School. Expert-level heuristic for dark-mode-first minimalism, strict constraints, and high-density layouts.
---

# Linear App Design School

## 1. Philosophy
Linear’s design language (often called Orbiter) is defined by constraints, minimalism, and a "dark-mode-first" luxury aesthetic. It rejects excessive decorative elements in favor of absolute functional clarity. The philosophy relies on "near-black" canvases, high information density managed by precise spacing, and an absence of standard skeuomorphic depth.

## 2. Exact CSS Design Tokens
- **Fonts:** Inter (strictly restricted to weights between 400 and 510; bold is avoided). Tracking tightens mathematically as font size increases.
- **Canvas/Background:** `#010102` to `#08090a` (Deepest background layer).
- **Surface:** `#0f1011` (Elevated cards and sidebars).
- **Ink/Text:** `#f7f8f8` (Primary text), `#d0d6e0` (Secondary/Muted).
- **Accent:** `#5e6ad2` (Signature Lavender-Blue, used strictly for focus rings and active states).
- **Borders:** `#ffffff1a` (10% white for hairline dividers instead of box-shadows).

## 3. Spatial Reasoning & Grid
- **Scale:** Strict 4px baseline grid.
- **Elevation:** Relies on 1px translucent "hairline" borders and subtle lighting gradients rather than heavy drop shadows.
- **Density:** High-density layouts organized into modular panels, utilizing whitespace as the primary separator over visible lines.

## 4. Component Architecture & Physics
- **Foundation:** Built on headless Radix UI primitives.
- **Motion:** Micro-interactions are instant or use highly damped spring physics (low duration, high tension) to feel "snappy" and technical, never floaty.
- **Modularity:** Highly composable API where layout structures (Sidebar, Header, Main) are strictly isolated.

## 5. Anti-Slop Validation Checklist
- [ ] Are bold font weights (600+) completely eliminated in favor of 500-weight with tightened tracking?
- [ ] Are generic drop shadows removed and replaced with hairline borders (e.g., `border: 1px solid rgba(255,255,255,0.1)`)?
- [ ] Is the primary accent color applied only to interactive/focused states rather than decorative elements?
- [ ] Are background colors strictly monochromatic (pure grays or blue-tinted blacks)?
