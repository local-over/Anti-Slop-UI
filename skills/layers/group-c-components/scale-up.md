---
name: layer-scale-up
description: Enforces a physical scale-up animation on hover.
---

# Layer 22: Hover Physics - Scale Up

When this heuristic is loaded, interactive elements must respond to cursor proximity.

## Constraints
1.  **Transform:** Use `transform: scale(1.05);` or similar on hover.
2.  **Transition:** Must be paired with a smooth easing curve, e.g., `transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);`.
3.  **Shadow:** Combine scaling with an increased drop shadow to simulate the element physically lifting off the page.
