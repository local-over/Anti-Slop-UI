---
name: school-github-primer
description: GitHub Primer Design School. Expert-level heuristic for extreme information density, accessibility, and utility-first design.
---

# GitHub Primer Design School

## 1. Philosophy
Primer is an open-source, utility-first design system built for immense scale, extreme information density, and absolute accessibility. It embraces an asymmetric flexibility that favors functional utility over pure aesthetic minimalism, prioritizing developer ergonomics and robust thematic awareness (light, dark, high contrast).

## 2. Exact CSS Design Tokens
- **Fonts:** System UI (`-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif`).
- **Backgrounds:** `--color-canvas-default` (`#0d1117` in Dark), `--color-canvas-subtle` (`#161b22` in Dark).
- **Foregrounds:** `--color-fg-default` (`#c9d1d9`), `--color-fg-muted` (`#8b949e`).
- **Accents:** `--color-accent-fg` (`#2f81f7` Blue), `--color-success-fg` (`#238636` Green).
- **Borders:** `--color-border-default` (`#30363d`).

## 3. Spatial Reasoning & Grid
- **Scale:** 8px base scale (with 4px half-steps for micro-adjustments).
- **Stacking Contexts:** Semantic z-index variables (e.g., `--z-index-dropdown`, `--z-index-sticky`) govern the 3D space of the document to prevent overlapping slop.
- **Padding:** Density is managed through functional spacing tokens (`spacer-1` through `spacer-12`).

## 4. Component Architecture & Physics
- **Architecture:** Token-first components layered over foundational utility classes (Primer CSS) and encapsulated in ViewComponents (Rails) or React.
- **Behavior:** Minimal animation. Transitions are primarily utilized for state changes (hover, focus) via strict CSS variable swapping rather than keyframe motion.
- **Hierarchy:** Deep reliance on control stack tokens to maintain alignment across vastly different input types.

## 5. Anti-Slop Validation Checklist
- [ ] Are all hex codes replaced by multi-tier semantic tokens (e.g., `var(--color-fg-default)`)?
- [ ] Is layout managed by standardized flex/grid utility classes rather than custom CSS?
- [ ] Does the UI gracefully handle user-overridden fonts and zoom accessibility features?
- [ ] Are custom z-indexes removed in favor of Primer’s predefined stacking context scale?
