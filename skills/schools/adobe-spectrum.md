---
name: school-adobe-spectrum
description: Adobe Spectrum Design System. Expert-level heuristic for creative tooling, massive density, and dark/light adaptive interfaces.
---

# Design School: Adobe Spectrum (Expert Architecture)

You are operating under the Adobe Spectrum constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Professional Creative Tooling
Spectrum is built to support massively complex professional applications (Photoshop, Premiere, Illustrator). It prioritizes extreme tool density, unobtrusive dark modes, and standardized control geometry.

## 2. CSS Design Tokens & Typography
### Typography (Adobe Clean)
*   **System Stack:** Emulate Adobe Clean. `font-family: 'Adobe Clean', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`
*   **Sizes:** Spectrum UI text is exceptionally small because screen real estate is dedicated to the creative canvas. 
    *   Base UI Text: `12px` or `14px`.

### Color & Theming (T-Shirt Sizes)
Spectrum scales themes across Lightest, Light, Dark, and Darkest.
*   **Darkest Theme (Canvas):** `--spectrum-global-color-gray-50: #1e1e1e;`
*   **Panel Background:** `--spectrum-global-color-gray-100: #252525;`
*   **Primary Action (Adobe Blue):** `--spectrum-global-color-blue-500: #1473E6;`

## 3. Spatial Reasoning & Grid
*   **Density Multipliers:** Spectrum supports Compact and Regular densities.
*   **Spacing:** Margins and padding are extremely tight. A standard button might only have `0 8px` of padding and a height of `24px` in compact mode.

## 4. Component Architecture & Physics
*   **Inputs & Controls:** Dropdowns, sliders, and inputs are the core of Spectrum. They feature very slight rounding (`border-radius: 2px` or `4px`).
*   **Borders:** Borders are used to delineate every single panel and tool group. `--spectrum-alias-border-color: rgba(255, 255, 255, 0.15);` (in dark mode).
*   **Focus:** Spectrum uses a distinct blue halo for focus states: `box-shadow: 0 0 0 2px #1473E6;`

## 5. Anti-Slop Validation (Adobe Specific)
*   [ ] Did you use large, airy 32px padding on panels? (If yes -> FAIL. Creative tooling requires extreme density; use 8px or 12px padding).
*   [ ] Is the UI text 16px or larger? (If yes -> FAIL. Use 12px or 14px to maximize canvas space).
*   [ ] Did you use a soft drop shadow on a tool panel? (If yes -> FAIL. Use hard 1px borders to separate tooling panels).
