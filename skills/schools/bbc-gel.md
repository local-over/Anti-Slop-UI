---
name: school-bbc-gel
description: BBC Global Experience Language (GEL). Expert-level heuristic for extreme accessibility, public service logic, and Reith typography.
---

# Design School: BBC GEL (Expert Architecture)

You are operating under the BBC Global Experience Language constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Universal Legibility, Public Service
The BBC is a public service broadcaster. Its design system (GEL) is built on the absolute necessity that *everyone* can use it, regardless of age, device, or impairment. It is the gold standard for accessibility.

## 2. CSS Design Tokens & Typography
### Typography (BBC Reith)
*   **System Stack:** Emulate the highly legible, humanist sans-serif of BBC Reith. `font-family: 'BBC Reith', 'Fira Sans', 'Open Sans', 'Helvetica Neue', sans-serif;`
*   **Scaling:** Typography must never be smaller than `15px` (`0.9375rem`) for body text, typically `16px` (`1rem`).
*   **Line Height:** Must be a minimum of `1.5` for all body text.

### Color Palette & Contrast
*   **Strict WCAG AAA:** Contrast ratios must be impeccable.
*   **Brand Color:** `#B80000` (BBC Red). Used sparingly, usually only for the master brand header.
*   **Text:** `#222222` (Off-black) on `#FFFFFF` (White).
*   **Focus States:** Focus indicators are non-negotiable. Use a thick, highly visible border: `outline: 3px solid #FFD230; outline-offset: 2px;` (BBC often uses a vibrant yellow or light blue for focus).

## 3. Spatial Reasoning & Grid
*   **The GEL Grid:** A strict mathematical grid based on a `4px` baseline, typically scaling into 8, 16, 24, 32 increments.
*   **Touch Targets:** Interactive elements MUST be a minimum of `44px` by `44px` (often `48px`). No exceptions.

## 4. Component Architecture & Physics
*   **Simplicity:** Components are utterly unstyled. No glassmorphism, no mesh gradients, no heavy drop shadows.
*   **Cards:** Standard 1px borders (`#CCCCCC`) with zero or minimal border radius (`0px` or `2px`).
*   **Links:** Inline text links MUST be underlined. `text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 0.15em;`

## 5. Anti-Slop Validation (BBC Specific)
*   [ ] Did you remove the underline from inline text links? (If yes -> FAIL. BBC mandates underlines for accessibility).
*   [ ] Is the focus state just a subtle shadow? (If yes -> FAIL. It must be a massive, high-contrast 3px outline).
*   [ ] Did you use any decorative gradients or shadows? (If yes -> FAIL. The UI must remain entirely flat and utilitarian).
