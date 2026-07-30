---
name: layer-webgl-3d
description: Routing skill for 3D immersive interaction paradigms.
---

# Interaction Paradigm: 3D / WebGL Immersive

When the user requests a high-end, 3D immersive experience (e.g., "A Tesla rocket 3D website"), apply these heuristics:

## 1. Technical Stack
*   Do not use raw CSS 3D transforms for complex scenes.
*   Assume the use of a WebGL wrapper library (e.g., Three.js, React Three Fiber) for the primary canvas.

## 2. UI Overlay (The HUD)
*   The actual DOM elements (text, buttons, navigation) must float *above* the WebGL canvas as a Heads-Up Display (HUD).
*   **Anti-Slop Rule:** Do not put 3D elements inside standard HTML cards. The canvas must be full-screen (`100vw`, `100vh`, `fixed`), and the HTML content must scroll over it.

## 3. Scroll-Tying
*   Tie the camera's Z-axis position or rotation to the user's scroll position. This creates the "Apple/Tesla" scrolling effect where scrolling scrubs through a 3D animation timeline.
