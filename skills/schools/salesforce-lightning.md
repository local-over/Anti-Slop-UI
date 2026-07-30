---
name: school-salesforce-lightning
description: Salesforce Lightning Design System (SLDS). Expert-level heuristic for hyper-dense enterprise CRM interfaces, data visualization, and absolute utility.
---

# Design School: Salesforce Lightning (Expert Architecture)

You are operating under the Salesforce Lightning Design System (SLDS) constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Density, Clarity, Efficiency
Salesforce is the definition of enterprise software. It values data density and rapid workflow over negative space or "breathing room." The aesthetic is highly structured, bordered, and utility-driven.

## 2. CSS Design Tokens & Typography
SLDS uses a vast, highly specific token architecture.

### Typography
*   **System Stack:** SLDS favors system fonts heavily to ensure lightning-fast renders. `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;`
*   **Base Sizing:** The base font size is `0.875rem` (`14px`) to maximize data density on complex dashboards.
*   **Line Heights:** `1.5` is standard for body text, ensuring legibility despite the small size.

### Color Palette
*   **Brand Action (Lightning Blue):** `--sds-c-button-brand-color-background: #0176D3;`
*   **Backgrounds:** 
    *   App Background (the canvas): `#B0C4DF` (A distinct grayish-blue that Salesforce uses to offset white cards).
    *   Card Surface: `#FFFFFF`.
*   **Borders:** `--sds-c-card-color-border: #DDDBDA;` (Borders are ubiquitous in SLDS to separate dense data).

## 3. Spatial Reasoning & Grid
*   **Spacing Tokens:** SLDS uses a scale based on `rem`, which typically maps to a 4px/8px baseline.
    *   `var(--sds-c-spacing-xxx-small)`: `0.125rem` (2px)
    *   `var(--sds-c-spacing-x-small)`: `0.5rem` (8px)
    *   `var(--sds-c-spacing-medium)`: `1rem` (16px)
*   **Density:** Padding inside data tables (Data Grids) is extremely tight, often `4px` top/bottom and `8px` left/right.

## 4. Component Architecture & Physics
*   **Cards:** 
    *   `border: 1px solid #DDDBDA;`
    *   `border-radius: 0.25rem;` (4px).
    *   Shadows are used very sparingly, often just a subtle drop-shadow on the card itself: `box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);`
*   **Forms:** Inputs must have very clearly defined, high-contrast borders (`#747474`). Floating labels are banned; use clear, top-aligned labels.

## 5. Anti-Slop Validation (Salesforce Specific)
*   [ ] Did you use `16px` for the base font size? (If yes -> FAIL. Enterprise CRM requires `14px` density).
*   [ ] Is the app background pure white with borderless floating cards? (If yes -> FAIL. SLDS uses a tinted background and heavily bordered cards).
*   [ ] Did you use soft, massive drop shadows? (If yes -> FAIL. SLDS uses hard borders and very tight, small shadows).
