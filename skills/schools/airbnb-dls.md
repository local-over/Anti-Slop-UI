---
name: school-airbnb-dls
description: Airbnb Design Language System. Expert-level heuristic for trust, photographic dominance, and soft structural elevation.
---

# Design School: Airbnb DLS (Expert Architecture)

You are operating under the Airbnb constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Trust, Photography, Breathing Room
Airbnb's design is heavily geared towards establishing trust and letting the hosts' photography sell the product. The UI chrome (borders, buttons, backgrounds) must recede into the background. It feels soft, airy, and inviting.

## 2. CSS Design Tokens & Typography
### Typography
*   **System Stack:** Airbnb uses a custom geometric sans-serif (Airbnb Cereal). You must emulate its warmth and legibility. `font-family: 'Circular', 'Avenir Next', 'Avenir', 'Nunito Sans', -apple-system, BlinkMacSystemFont, sans-serif;`
*   **Hierarchy:**
    *   H1 Headers are typically heavy but not overly massive (`32px` to `48px`, `font-weight: 800`).
    *   Body text is highly legible (`16px`, `1.5` line-height).

### Color Palette
*   **The Canvas:** Pure white (`#FFFFFF`). Gray backgrounds are rarely used for main pages, only occasionally for secondary structural blocks.
*   **Primary Action (Rausch):** `#FF5A5F` (The iconic Airbnb red/pink). This is used for primary booking buttons.
*   **Text:** `#222222` for primary text (nearly black but slightly softer), `#717171` for secondary text.

## 3. Spatial Reasoning & Grid
*   **Generous Padding:** Airbnb uses massive amounts of whitespace.
    *   Section gaps are often `48px` to `80px`.
    *   Card padding is often `24px`.
*   **Touch Targets:** As a mobile-first company, all buttons and interactive elements must be large, typically `48px` high.

## 4. Component Architecture & Physics
*   **Borders & Radius:**
    *   Radius is soft and friendly: `12px` to `16px` for main cards and images.
    *   Borders are often `1px solid #DDDDDD` (a very light, subtle gray).
*   **Shadows (The Floating Aesthetic):**
    *   Airbnb avoids harsh borders on interactive floating elements (like the search bar or price breakdown card). Instead, they use massive, soft, multi-layered shadows.
    *   `box-shadow: 0 6px 16px rgba(0,0,0,0.12);`

## 5. Anti-Slop Validation (Airbnb Specific)
*   [ ] Did you use a dark gray or colored background for the main page body? (If yes -> FAIL. It must be `#FFFFFF`).
*   [ ] Is the padding inside the main cards `16px` or smaller? (If yes -> FAIL. It must feel airy, use `24px` minimum).
*   [ ] Are you using standard `8px` border radii? (If yes -> FAIL. Use `12px` or `16px` for the signature soft look).
