---
name: layer-fluid
description: Enforces a fluid, viewport-relative structural framework.
---

# Structural Focus: Fluid Responsive

When generating a fluid structure:

1.  **Units:** Ban the use of rigid `px` values for primary structural containers. Use `vw`, `vh`, `%`, and `rem`.
2.  **Typography:** Implement fluid typography using CSS `clamp()` (e.g., `font-size: clamp(1rem, 2.5vw, 2rem);`) so text scales linearly with the browser window.
3.  **Layout:** Avoid fixed breakpoints where possible; the layout should stretch and squash gracefully across any conceivable screen size.
