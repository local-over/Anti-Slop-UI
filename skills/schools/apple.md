---
name: school-apple-hig
description: The Apple Human Interface Guidelines design school. Expert-level heuristic for spatial reasoning, deference, and depth.
---

# Design School: Apple Human Interface Guidelines (HIG) - Expert Level

You are operating under the Apple Design School constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Clarity, Deference, Depth
*   **Clarity:** The interface must use negative space and precise typography to remain strictly legible.
*   **Deference:** The UI is a frame. It must not compete with user content. Use subtle grays and transluscent materials.
*   **Depth:** Do not use harsh black drop shadows. Depth is achieved via layering and contextual blurs.

## 2. CSS Design Tokens & Typography
Apple does not use static CSS tokens; it uses adaptive system variables. You must emulate this logic.

### Typography (SF Pro Emulation)
*   **System Stack:** `font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;`
*   **Base Body Size:** `17px` (or `1.0625rem`) with a `line-height` of `1.2` to `1.3` (e.g., 22px).
*   **Tracking (Letter Spacing):** Apple dynamically adjusts tracking. For 17px body text, use `letter-spacing: -0.43px;`. For massive Display headers (e.g., 34px+), tighten tracking to `letter-spacing: -1px;`.
*   **Hierarchy Weights:** Use `400` (Regular) for body, `600` (Semibold) for primary headers, and `700` (Bold) for large display titles. Never use `900` (Black).

### Color Palette (Adaptive System Colors)
*   **Primary Action (Apple Blue):** `#007AFF` (Light Mode) / `#0A84FF` (Dark Mode).
*   **Success (Green):** `#34C759` (Light) / `#30D158` (Dark).
*   **Error (Red):** `#FF3B30` (Light) / `#FF453A` (Dark).
*   **Surface Grays:**
    *   System Gray 1: `#8E8E93`
    *   System Gray 6 (Backgrounds): `#F2F2F7` (Light) / `#1C1C1E` (Dark).

## 3. Spatial Reasoning & Grid
*   **Tap Targets:** Any interactive element MUST have a minimum hit area of `44px` by `44px`.
*   **Padding Multipliers:** Use a base-8 or base-4 system, but Apple favors generous margins. Standard container padding should be `16px` (mobile) to `32px` (desktop).

## 4. Component Architecture & Physics
*   **Continuous Curves (Squircles):** Standard CSS `border-radius: 12px` looks cheap compared to Apple's squircle. Emulate it by avoiding harsh borders. Use `12px` to `16px` for cards.
*   **The "Liquid Glass" Material (Glassmorphism):**
    *   Implementation: `background: rgba(255, 255, 255, 0.65);` + `backdrop-filter: blur(20px) saturate(180%);`
    *   Use this exclusively for fixed Navigation Bars or floating toolbars to show content scrolling beneath.
*   **Shadow Physics:**
    *   Never use `box-shadow: 0 4px 6px rgba(0,0,0,0.5);`.
    *   Use highly layered, low-opacity shadows: `box-shadow: 0 1px 2px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.05);`.

## 5. Anti-Slop Validation (Apple Specific)
*   [ ] Is the primary action color an arbitrary purple? (If yes -> FAIL. Must be Apple Blue or a strictly defined brand color).
*   [ ] Is the body font `Inter`? (If yes -> FAIL. Must use the `-apple-system` stack).
*   [ ] Are the drop shadows harsh and dark? (If yes -> FAIL. Shadows must be max 5-10% opacity).
