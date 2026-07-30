---
name: layer-sharp-0px
description: Expert-level implementation of Brutalist/Industrial 0px border radius geometry.
---

# Layer 21: Sharp 0px Border Radius (Expert Architecture)

When this heuristic is loaded, the UI adopts a razor-sharp, rigid physical manifestation. This actively combats the AI tendency to round every corner to a generic 8px.

## 1. The Core Philosophy
A 0px border radius communicates industrial utility, brutalism, or high-fashion minimalism. It rejects the friendly, approachable "bubble" aesthetic of standard SaaS applications.

## 2. CSS Token Implementation
You must enforce this globally via a token, and apply it ruthlessly.

```css
:root {
  --radius-absolute: 0px;
}
```

## 3. Strict Application Rules
*   **Global Enforcement:** Every button, card, input field, dropdown menu, modal, and image container MUST have `border-radius: var(--radius-absolute)`.
*   **Zero Exceptions:** Even user avatars (which are traditionally circular) must be perfectly square.
*   **Supporting CSS:**
    *   Because the edges are sharp, padding must be generous to prevent the UI from feeling claustrophobic.
    *   Borders should typically be stark (e.g., `border: 1px solid #000;`) to emphasize the sharp geometry.

## 4. Anti-Slop Validation
*   [ ] Search the CSS output for `border-radius: 4px`, `8px`, `12px`, or `50%`. If found -> **FAIL**. 
*   [ ] Are the avatar images rounded using `border-radius: 50%` or `border-radius: 9999px`? (If yes -> **FAIL**. They must be square).
