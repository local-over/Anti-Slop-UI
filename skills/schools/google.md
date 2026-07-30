---
name: school-google-material-3
description: The Google Material Design 3 school. Expert-level heuristic for elevation tokens, dynamic color, and M3 typography scales.
---

# Design School: Google Material Design 3 (M3) - Expert Level

You are operating under the Google Material Design 3 (Material You) constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Personalization, Adaptability, Elevation
*   **Personalization:** Color is derived dynamically (Dynamic Color) generating a full tonal palette.
*   **Elevation:** Depth is no longer just shadows; it is represented by tonal surface shifts.

## 2. CSS Design Tokens & Typography
Material 3 relies on a strict 30-style typography scale and an 8dp spatial grid.

### Typography (M3 Type Scale)
*   **Primary Font:** `Roboto` (or a specific brand font, but strictly adhering to the M3 scale).
*   **Display Large:** `57px` size, `64px` line-height, `-0.25px` tracking.
*   **Headline Large:** `32px` size, `40px` line-height, `0px` tracking.
*   **Title Large:** `22px` size, `28px` line-height, `0px` tracking.
*   **Body Large:** `16px` size, `24px` line-height, `0.5px` tracking.
*   **Label Large (Buttons):** `14px` size, `20px` line-height, `0.1px` tracking, Medium weight.

### Dynamic Tonal Color (Emulation)
You must define CSS variables that represent the tonal palette derived from a single primary seed.
*   `--md-sys-color-primary`: The main brand color (e.g., `#6750A4`).
*   `--md-sys-color-on-primary`: Text color on primary (e.g., `#FFFFFF`).
*   `--md-sys-color-primary-container`: A lighter shade for active states (e.g., `#EADDFF`).
*   `--md-sys-color-surface`: The base background (e.g., `#FEF7FF`).

## 3. Spatial Reasoning & Grid
*   **The 8dp Baseline Grid:** All margins, padding, and block dimensions MUST be multiples of 8 (e.g., 8px, 16px, 24px).
*   **The 4dp Exception:** Use 4px increments strictly for micro-adjustments (like icon padding or internal component gaps).
*   **Touch Targets:** Minimum `48px` by `48px`.

## 4. Component Architecture & Physics
*   **Elevation Levels (0 to 5):**
    *   **Level 0 (Resting):** No shadow.
    *   **Level 1 (Hover):** Implement via Tonal Surface changes in dark mode, or extremely soft shadow in light mode. `box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15);`
*   **State Layers:** Interactive elements must have a semi-transparent overlay indicating state.
    *   Hover: `opacity: 0.08` of the `on-primary` color overlay.
    *   Focus: `opacity: 0.12`.
    *   Pressed: `opacity: 0.12`.

## 5. Anti-Slop Validation (Material 3 Specific)
*   [ ] Does the button use a generic `15px` padding? (If yes -> FAIL. Must use 8dp grid, e.g., `16px 24px`).
*   [ ] Are elevations created using arbitrary black drop-shadows instead of M3 token formulas? (If yes -> FAIL).
*   [ ] Is the typography scale ignoring tracking (letter-spacing) rules? (If yes -> FAIL. M3 strictly defines tracking per role).
