---
name: layer-webgl-3d-immersive
description: Expert-level implementation of WebGL 3D Immersive.
---

# WebGL 3D Immersive

## 1. Core Philosophy
Break out of the 2D document flow. Use WebGL (Three.js/React Three Fiber) to render true 3D contexts that react to mouse position, scroll, and device orientation, creating a premium immersive layer.

## 2. Exact CSS Token Implementation
```css
/* CSS only acts as the canvas container */
:root {
  --webgl-canvas-z: -1; /* Often placed behind content */
  --webgl-pointer-events: none; /* Let clicks pass through to DOM */
}
.webgl-container {
  position: fixed;
  inset: 0;
  z-index: var(--webgl-canvas-z);
  pointer-events: var(--webgl-pointer-events);
}
```

## 3. Strict Application Rules
- The WebGL canvas must resize cleanly with the window (Debounced resize observer).
- Frame rate MUST stay at 60fps; implement automatic quality degradation if FPS drops.
- DOM content must remain fully legible and accessible over the 3D layer.

## 4. Anti-Slop Validation Checklist
- [ ] Canvas is positioned correctly without interfering with DOM interaction (unless intended).
- [ ] Performance monitoring is active (FPS checks).
- [ ] Visuals enhance the theme without overpowering the core content.
