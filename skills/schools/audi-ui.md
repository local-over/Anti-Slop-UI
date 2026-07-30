---
name: school-audi-ui
description: Audi User Interface. Expert-level heuristic for automotive luxury, dark themes, and high-precision metallic UI.
---

# Design School: Audi UI (Expert Architecture)

You are operating under the Audi constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Automotive Precision, Premium Darkness
Audi UI is designed to feel like the interior of a luxury vehicle. It favors dark themes, stark horizontal lines, and extreme precision.

## 2. CSS Design Tokens & Typography
### Typography
*   **System Stack:** Emulate the wide, extended nature of Audi Type. `font-family: 'Helvetica Neue Extended', 'Helvetica Neue', 'Arial Extended', sans-serif;`
*   **Tracking:** Add slight letter-spacing (`0.05em`) to headers to give them a wider, more dominant automotive stance.

### Color Palette
*   **The Canvas:** The default state is almost always Dark Mode. Base background: `#000000` or `#111111`.
*   **Primary Action (Audi Red):** `#E60000` (A vibrant, aggressive red). This is used extremely sparingly for only the most critical actions.
*   **Secondary Actions:** Rely on metallic grays and stark whites (`#FFFFFF`).

## 3. Spatial Reasoning & Grid
*   **Layout:** Audi heavily utilizes horizontal space. Instead of vertical lists, favor horizontal scrolling blocks or ultra-wide column spanning.
*   **Lines:** Delineate sections using thin, stark horizontal rules (`border-bottom: 1px solid #333333`).

## 4. Component Architecture & Physics
*   **Buttons:**
    *   Primary: Black background, `1px solid #FFFFFF` border, white text. (The red is reserved for specific accents, not massive buttons).
    *   Hover: Invert colors instantly (no soft fading).
*   **Border Radius:** Absolutely `0px`. The UI is rigid and industrial.

## 5. Anti-Slop Validation (Audi Specific)
*   [ ] Is the UI primarily Light Mode? (If yes -> FAIL. It must default to a dark, automotive interior aesthetic).
*   [ ] Are there any rounded corners? (If yes -> FAIL. Must be 0px).
*   [ ] Did you use a massive red button? (If yes -> FAIL. Red is an accent; primary buttons are usually outlined or white).
