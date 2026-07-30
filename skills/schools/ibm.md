---
name: school-ibm-carbon
description: IBM Carbon Design System. Expert-level heuristic for industrial grid precision, Plex typography, and modular UI scales.
---

# Design School: IBM Carbon Design System - Expert Level

You are operating under the IBM Carbon constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Industrial, Rational, Open
Carbon is built for immense, data-heavy enterprise applications. Every margin, color, and typographic choice must have a strict mathematical justification. Aesthetics derive from absolute structural perfection.

## 2. CSS Design Tokens & Typography
Carbon uses a sophisticated prefixing system (`$`, often compiled to `--cds-`).

### Typography (IBM Plex)
*   **System Stack:** `font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;` (Also uses `IBM Plex Mono` for data/code).
*   **The Scale:** Carbon splits type into 'Productive' (dense UI) and 'Expressive' (editorial).
    *   `--cds-productive-heading-01`: `14px`, `1.4` line-height, `600` weight.
    *   `--cds-productive-heading-03`: `20px`, `1.4` line-height, `400` weight.
    *   `--cds-body-short-01`: `14px`, `1.285` line-height.
    *   `--cds-body-long-01`: `14px`, `1.43` line-height.

### The Color Matrix
Carbon relies on thematic scales (White, Gray 10, Gray 90, Gray 100) rather than fixed colors.
*   **Blue (Action):** The universal action color is Blue 60 (`#0f62fe`).
*   **Layering Logic:** In the 'White' theme, the base background is `$ui-background` (`#ffffff`). The first elevated layer is `$ui-01` (`#f4f4f4` / Gray 10).
*   **Text Semantics:** `$text-primary` (`#161616` in light), `$text-secondary` (`#525252`).

## 3. Spatial Reasoning & Grid
Carbon's spacing is the most mathematically rigorous part of the system.

*   **The 2/4/8 Scale:**
    *   `$spacing-01`: `2px`
    *   `$spacing-02`: `4px`
    *   `$spacing-03`: `8px`
    *   `$spacing-04`: `12px`
    *   `$spacing-05`: `16px`
    *   `$spacing-06`: `24px`
    *   `$spacing-07`: `32px`
*   **The Grid:** Carbon strictly uses a 16-column grid for desktop views (rather than the standard 12). This allows for much finer data table division.

## 4. Component Architecture & Physics
*   **Geometry:** Carbon is famously sharp.
    *   `border-radius`: **0px**. Absolutely no rounded corners on buttons, inputs, or standard cards. This is a defining characteristic of the industrial aesthetic.
*   **Motion:** Focus on snappy, productive transitions.
    *   `$transition-base`: `0.11s` or `0.24s`.
    *   `$carbon--ease-in-out`: `cubic-bezier(0.2, 0.2, 0.38, 0.9)`.
*   **Focus States:** Accessibility is paramount. Focus rings must be a 2px solid border (`#0f62fe`) offset from the element, never an inner box-shadow.

## 5. Anti-Slop Validation (IBM Carbon Specific)
*   [ ] Did you use `border-radius: 4px` or `8px` anywhere? (If yes -> FAIL. Carbon relies on brutal 0px corners).
*   [ ] Is the primary action color something other than IBM Blue 60 (`#0f62fe`)? (If yes -> FAIL).
*   [ ] Are you using a generic 12-column grid instead of Carbon's 16-column matrix for complex layouts? (If yes -> FAIL).
