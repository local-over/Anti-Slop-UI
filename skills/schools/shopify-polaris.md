---
name: school-shopify-polaris
description: Shopify Polaris Design System. Expert-level heuristic for merchant-focused UI, structured elevation, and precise spacing tokens.
---

# Design School: Shopify Polaris - Expert Level

You are operating under the Shopify Polaris constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Merchant Empowerment, Clarity, Utility
Polaris is built to help merchants get work done. It avoids flashy, distracting UI in favor of highly legible, structured, and predictable interfaces.

## 2. CSS Design Tokens & Typography
Polaris relies heavily on CSS custom properties prefixed with `--p-`. You must emulate this namespace.

### Typography
*   **System Stack:** Polaris defaults to system sans-serifs to maximize performance and familiarity. `font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif;`
*   **Token Scales:**
    *   `--p-font-size-75`: `12px` (Caption)
    *   `--p-font-size-100`: `14px` (Standard Body)
    *   `--p-font-size-200`: `16px`
    *   `--p-font-size-300`: `20px` (H3)
    *   `--p-font-size-400`: `24px` (H2)
*   **Line Heights:** Handled via semantic tokens like `--p-line-height-100` through `300` to maintain vertical rhythm.

### Color Palette
*   **Action/Interactive:**
    *   `--p-interactive`: `#2c6ecb` (Primary blue link/button color).
    *   `--p-interactive-hover`: `#1f5199`.
*   **Surfaces & Borders:**
    *   `--p-surface`: `#ffffff` (Card background).
    *   `--p-surface-neutral`: `#f4f6f8` (Page background).
    *   `--p-border`: `#c4cdd5` (Standard subtle border color for inputs and dividers).
*   **Text:**
    *   `--p-text`: `#212b36` (Primary text, a deep slate, never pure black).
    *   `--p-text-subdued`: `#637381`.

## 3. Spatial Reasoning & Grid
Polaris operates on a strict **4px base unit**.
*   **Spacing Tokens:**
    *   `--p-space-1`: `4px` (Extra tight)
    *   `--p-space-2`: `8px` (Tight)
    *   `--p-space-3`: `12px`
    *   `--p-space-4`: `16px` (Base padding)
    *   `--p-space-5`: `20px`
    *   `--p-space-6`: `24px` (Loose)
    *   `--p-space-8`: `32px` (Extra loose)

## 4. Component Architecture & Physics
*   **Borders & Radius:**
    *   `--p-border-radius-1`: `3px` (Small elements like checkboxes).
    *   `--p-border-radius-2`: `4px` (Standard inputs and buttons).
    *   `--p-border-radius-3`: `8px` (Large cards).
*   **Shadows (Elevation):** Polaris uses very soft, multi-layered shadows to separate cards from the page background.
    *   `--p-shadow-transparent`: `0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15);` (Standard Card Elevation).
*   **Motion:** Polaris minimizes motion. Animations are reserved strictly for feedback (like a save state), not for decorative entrance effects.

## 5. Anti-Slop Validation (Shopify Polaris Specific)
*   [ ] Did you use a massive, bold display font (e.g., 48px+)? (If yes -> FAIL. Polaris UI is dense and utilitarian, relying on 20px-24px headers).
*   [ ] Is the page background pure white (`#fff`) with floating cards? (If yes -> FAIL. Polaris uses `--p-surface-neutral` (`#f4f6f8`) for the page, and `#fff` for the cards).
*   [ ] Did you use arbitrary padding (e.g., `15px` or `10px`) instead of the 4px base multiplier? (If yes -> FAIL).
