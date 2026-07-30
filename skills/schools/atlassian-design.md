---
name: school-atlassian-design
description: Atlassian Design Guidelines (ADG). Expert-level heuristic for dense data, Jira-style utility, and status colors.
---

# Design School: Atlassian Design - Expert Level

You are operating under the Atlassian constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Teamwork, Density, Utility
Atlassian UIs are built for complex project management (Jira, Confluence). They must support massive amounts of data on a single screen without feeling cluttered. The aesthetic is friendly but strictly utilitarian.

## 2. CSS Design Tokens & Typography
### Typography
*   **System Stack:** `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;`
*   **Scale:** Base font size is `14px` (to support data density) rather than the modern web standard of `16px`. Line height for body text is `20px` (`1.428`).

### Color Palette (The Status Focus)
Colors are rarely used decoratively; they are semantic indicators of status.
*   **Brand (Primary Action):** Blue (`#0052CC`). Hover state: `#0065FF`.
*   **Neutral (Canvas & Borders):**
    *   Background: `#FFFFFF`.
    *   Subtle Background (Panels): `#F4F5F7`.
    *   Borders: `#DFE1E6`.
*   **Status Indicators (Lozenge Colors):**
    *   Success (Done): `#00875A` (Text) on `#E3FCEF` (Background).
    *   In Progress: `#0052CC` (Text) on `#DEEBFF` (Background).
    *   To Do: `#42526E` (Text) on `#DFE1E6` (Background).

## 3. Spatial Reasoning & Grid
*   **The 8px Grid:** Atlassian strictly uses an 8px base grid.
    *   Padding inside a standard button: `0 12px` (Height is `32px` - a multiple of 8).
    *   Spacing between major components: `24px` or `32px`.

## 4. Component Architecture & Physics
*   **Borders & Radius:** Standard border radius is `3px`. This provides a slightly softened edge while remaining highly space-efficient for stacking cards.
*   **Avatars:** Typically use a `border-radius: 50%` with a fallback initials-based colored background.
*   **Shadows:** Shadows are used sparingly, usually only for dropdown menus or modals (e.g., `box-shadow: 0 4px 8px -2px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);`).

## 5. Anti-Slop Validation (Atlassian Specific)
*   [ ] Did you use `16px` or larger for the base body font? (If yes -> FAIL. Atlassian relies on `14px` for data density).
*   [ ] Are you using a primary action color other than Atlassian Blue `#0052CC`? (If yes -> FAIL).
*   [ ] Are the status badges (lozenges) solid colored blocks? (If yes -> FAIL. They must be light-colored backgrounds with dark-colored text for accessibility).
