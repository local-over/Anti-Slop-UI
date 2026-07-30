---
name: school-spotify-encore
description: Spotify Encore Design System. Expert-level heuristic for dark mode immersion, neon vibrancy, and circular audio motifs.
---

# Design School: Spotify Encore (Expert Architecture)

You are operating under the Spotify constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Audio Immersion, Darkness, Neon Pop
Spotify is designed to disappear while you listen to music. The UI is fundamentally a dark theater that allows the vibrant album art to act as the primary light source.

## 2. CSS Design Tokens & Typography
### Typography
*   **System Stack:** Spotify uses Spotify Circular. Emulate this geometric, friendly sans-serif. `font-family: 'Circular Std', 'Montserrat', 'Proxima Nova', -apple-system, sans-serif;`
*   **Display Sizes:** Spotify is famous for massive, aggressive header sizes for artist names and playlists (e.g., `96px` on desktop) with `font-weight: 900` (Black).
*   **Body Text:** Extremely legible, usually `14px` or `16px` with a `400` weight.

### Color Palette
*   **The Canvas (Deep Space):**
    *   Base Background: `#121212`.
    *   Elevated Surface (Cards, Menus): `#181818` or `#282828`.
*   **Primary Action (Spotify Green):** `#1DB954`. Hover state: `#1ED760`.
*   **Text Contrast:**
    *   Primary Text: `#FFFFFF`.
    *   Secondary Text (Highly used): `#B3B3B3`.

## 3. Spatial Reasoning & Grid
*   **Dense Packing:** While margins exist, Spotify packs a lot of items (albums) into horizontal scroll rows.
*   **Grid:** Typically a standard 12-column grid, but highly responsive to create 2, 3, 4, 5, or 6 column album layouts depending on width.

## 4. Component Architecture & Physics
*   **The Shape Rules (Critical):**
    *   **Artists / People:** Must ALWAYS be perfectly circular (`border-radius: 50%`).
    *   **Albums / Playlists:** Must ALWAYS be perfectly square with zero or minimal rounding (`border-radius: 0px` or `4px`).
*   **Buttons:** Primary action buttons (like the Play button) are massive, circular (`border-radius: 500px`), and Spotify Green.
*   **Glows & Gradients:**
    *   Backgrounds behind albums often feature a subtle, low-opacity radial gradient pulled from the album art's dominant color.

## 5. Anti-Slop Validation (Spotify Specific)
*   [ ] Did you use a Light Mode background? (If yes -> FAIL. Spotify UI is fundamentally dark mode `#121212`).
*   [ ] Did you use a circle for an Album or a square for an Artist? (If yes -> FAIL. Shapes have strict semantic audio meaning).
*   [ ] Is the secondary text `#888888`? (If yes -> FAIL. Spotify uses `#B3B3B3` for secondary text against its `#121212` background).
