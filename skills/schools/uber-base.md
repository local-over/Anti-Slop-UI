---
name: school-uber-base
description: Uber Base Design System. Expert-level heuristic for stark mobility design, high contrast, and rapid scanning.
---

# Design School: Uber Base (Expert Architecture)

You are operating under the Uber Base constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Movement, Contrast, Legibility
Uber's design language is built for people on the move. It must be instantly scannable in direct sunlight or the dark of a cab. It relies on brutal contrast (black and white) and sharp geometry.

## 2. CSS Design Tokens & Typography
### Typography
*   **System Stack:** Uber utilizes custom typography (Uber Move), but you must emulate its stark, geometric sans-serif nature. `font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`
*   **Sizing & Weights:** 
    *   Use extreme contrast. H1 headers should be massive (e.g., `40px` to `52px`) and heavy (`font-weight: 700`).
    *   Body text must remain standard (`16px`, `font-weight: 400`).

### Color Palette (Maximum Contrast)
*   Uber is famously devoid of color for primary UI structures.
*   **Primary Background:** `#FFFFFF` (Light) / `#000000` (Dark).
*   **Primary Text:** `#000000` (Light) / `#FFFFFF` (Dark).
*   **Primary Action (Button):** Black background with white text (Light mode), or White background with black text (Dark mode).
*   **Brand Accent:** Only use color for maps, status (green/red), or specific safety features (Uber Blue).

## 3. Spatial Reasoning & Grid
*   **The Grid:** Use an 8px base grid, but the layout is characterized by massive, chunky blocks rather than delicate spacing.
*   **Padding:** Buttons and inputs are typically taller than average.
    *   Button padding: `16px 24px`.
    *   Input padding: `16px`.

## 4. Component Architecture & Physics
*   **Borders & Radius:**
    *   Uber famously oscillates between sharp 0px corners and slight rounding depending on the exact sub-brand. For Base, use `border-radius: 8px` consistently for standard components, but `0px` for edge-to-edge list items.
*   **Shadows:** Shadows are almost entirely banned. Separation is achieved through `1px` solid borders (e.g., `#E2E2E2`) or stark changes in background color (e.g., switching from `#FFFFFF` to `#F3F3F3`).

## 5. Anti-Slop Validation (Uber Specific)
*   [ ] Did you use a blue or purple primary button? (If yes -> FAIL. The primary call-to-action must be high-contrast Black or White depending on the theme).
*   [ ] Are you using soft drop shadows to separate cards? (If yes -> FAIL. Uber uses flat colors and borders for separation).
