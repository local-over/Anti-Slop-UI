---
name: school-mailchimp
description: Mailchimp Design System. Expert-level heuristic for editorial playfulness, cavendish yellow, and hand-drawn contrast.
---

# Design School: Mailchimp (Expert Architecture)

You are operating under the Mailchimp constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Expert Friendliness, Editorial Expression
Mailchimp breaks the mold of standard, sterile SaaS. It leans heavily into an editorial, magazine-like aesthetic that feels highly professional yet approachable and quirky.

## 2. CSS Design Tokens & Typography
### Typography (The Dual Stack)
Mailchimp's defining characteristic is the stark contrast between its playful display serif and its hyper-legible body sans-serif.
*   **Display (Headers):** Emulate Cooper Light. `font-family: 'Cooper Black', 'Recoleta', 'Georgia', serif; font-weight: 300;`
*   **Body (Utility):** `font-family: 'Graphik', 'Inter', -apple-system, sans-serif;`

### Color Palette
*   **The Anchor (Cavendish Yellow):** `#FFE01B`. This is used aggressively for primary actions, banners, and hero backgrounds.
*   **The Canvas:** `#F6F6F4` (Alabaster) for backgrounds, providing a softer, warmer base than pure white.
*   **Text:** `#241C15` (A very deep, warm brown/black).

## 3. Spatial Reasoning & Grid
*   **Asymmetry & Loose Grids:** Mailchimp often eschews perfect 50/50 splits for 60/40 splits, creating an editorial feel.
*   **Padding:** Whitespace is generous and unhurried. Use massive paddings (`80px+`) between major sections.

## 4. Component Architecture & Physics
*   **Buttons:** Standard, slightly rounded buttons (`border-radius: 4px`), but they often feature stark black borders regardless of the background color (e.g., Yellow button, Black text, Black border).
*   **Illustrations:** Vector graphics are banned. If images are used, they should emulate hand-drawn, slightly imperfect sketches or high-fashion photography.
*   **Shadows:** Shadows are rarely used. Mailchimp prefers flat, graphic-design style layouts with solid color blocks and borders.

## 5. Anti-Slop Validation (Mailchimp Specific)
*   [ ] Did you use a Sans-Serif font for the main H1? (If yes -> FAIL. Mailchimp's identity relies on a playful Serif for headers).
*   [ ] Did you use soft drop shadows? (If yes -> FAIL. The UI must remain flat and graphic).
*   [ ] Is the background pure `#FFFFFF`? (If yes -> FAIL. Use the warm Alabaster `#F6F6F4`).
