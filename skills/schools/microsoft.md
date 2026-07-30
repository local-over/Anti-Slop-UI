---
name: school-microsoft-fluent
description: The Microsoft Fluent Design System. Expert-level heuristic for lighting, depth, material (Mica/Acrylic), and token architecture.
---

# Design School: Microsoft Fluent Design System - Expert Level

You are operating under the Microsoft Fluent Design System constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Light, Depth, Motion, Material, and Scale
Fluent relies on translating physical world properties into digital spaces. It heavily emphasizes subtle lighting, Z-axis elevation, and specialized transluscent materials.

## 2. CSS Design Tokens & Typography (Fluent v9 Architecture)
Fluent uses a strict semantic alias token system. You must NOT hardcode hex values. You must emulate the Fluent token structure.

### Typography
*   **System Stack:** `font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;`
*   **Semantic Tokens (Emulation):**
    *   `--fontSizeBase300`: `14px` (The standard body size).
    *   `--lineHeightBase300`: `20px` (Line height for standard body).
    *   `--fontWeightRegular`: `400`.
    *   `--fontWeightSemibold`: `600`.
*   **Headings:** Use `--fontSizeHero900` (`40px`), `--fontSizeHero800` (`32px`), or `--fontSizeHero700` (`28px`).

### Color & Themes
*   **Semantic Foreground/Background:**
    *   `--colorNeutralBackground1`: Base canvas color (e.g., `#ffffff` in light, `#292929` in dark).
    *   `--colorNeutralForeground1`: Base text color (e.g., `#242424` in light, `#ffffff` in dark).
*   **Brand Action:**
    *   `--colorBrandBackground`: The primary Microsoft/Brand blue (e.g., `#0078d4`).
    *   `--colorBrandBackgroundHover`: `#106ebe`.

## 3. Spatial Reasoning & Grid
*   **The Spacing Scale:** Fluent uses a specialized token scale, often mapping to multiples of 4 and 8.
    *   `--spacingHorizontalS`: `8px`
    *   `--spacingHorizontalM`: `12px`
    *   `--spacingHorizontalL`: `16px`
    *   `--spacingVerticalM`: `12px`
*   **Border Radius:** Fluent moved to slightly softer corners in Windows 11.
    *   `--borderRadiusMedium`: `4px` (Used for most buttons and inputs).
    *   `--borderRadiusLarge`: `8px` (Used for cards and dialogs).

## 4. Component Architecture & Physics
*   **Materials (Mica and Acrylic):**
    *   *Acrylic* is a highly blurred, slightly noisy translucent texture used for transient UI (flyouts, context menus).
    *   *Mica* is an opaque, tinted material that incorporates the user's desktop wallpaper, used for long-lived application windows.
    *   **CSS Emulation of Acrylic:** `background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(30px) saturate(125%);` (plus an SVG noise overlay if possible).
*   **Elevation (Shadow Tokens):**
    *   `--shadow2`: Used for hovering components.
    *   `--shadow4`: `0 2px 4px rgba(0,0,0,0.14)` (Used for cards).
    *   `--shadow16`: `0 8px 16px rgba(0,0,0,0.14)` (Used for dialogs and popovers).

## 5. Anti-Slop Validation (Fluent Specific)
*   [ ] Did you hardcode `#000000` or `#ffffff` for text instead of using a semantic token like `--colorNeutralForeground1`? (If yes -> FAIL).
*   [ ] Are border radii larger than 8px on standard inputs? (If yes -> FAIL. Fluent relies on 4px (`borderRadiusMedium`) for precision elements).
