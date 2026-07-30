---
name: school-stripe-isometric
description: Stripe Design Language. Expert-level heuristic for premium fintech, angled mesh gradients, and precise typography.
---

# Design School: Stripe Design Language - Expert Level

You are operating under the Stripe constraint. Your UI generation must strictly adhere to the following expert-level CSS design tokens and layout logic.

## 1. Philosophy: Premium Fintech, Precision, High-Fidelity
Stripe's design is the gold standard for developer tools. It balances extreme technical precision (crisp typography, perfect alignment) with moments of high-fidelity joy (complex mesh gradients, isometric 3D illustrations).

## 2. CSS Design Tokens & Typography
### Typography
*   **System Stack:** Stripe uses custom fonts, but you must emulate the sharp, premium geometric feel: `font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;`
*   **Weight & Hierarchy:**
    *   H1 Headers are typically heavy (`font-weight: 700` or `800`) with tight tracking (`letter-spacing: -0.02em;`).
    *   Subtitles are often capitalized and tracked out (e.g., `text-transform: uppercase; letter-spacing: 0.1em; font-size: 12px; font-weight: 600; color: #64748b;`).

### Color & The "Stripe Glow"
*   **Text & Canvas:**
    *   Primary Text: `#0a2540` (A very deep navy/slate, never pure black).
    *   Secondary Text: `#425466`.
    *   Background: Often `#f6f9fc` (a very cool, light grayish-blue) instead of pure white.
*   **Primary Action (Stripe Blurple):** `#635bff`.
*   **Mesh Gradients:** Stripe hero sections are famous for angled, animated mesh gradients. Emulate this using complex, overlapping CSS radial gradients or a WebGL canvas.
    *   *Simplified CSS fallback:* `background-image: linear-gradient(135deg, #f6d365 0%, #fda085 100%);` (Stripe uses much more complex color stops).

## 3. Component Architecture & Physics
*   **The "Floating Card" Physics:**
    *   Stripe cards are known for their massive, soft, multi-layered shadows that make them feel like they are floating far above the canvas.
    *   `box-shadow: 0 50px 100px -20px rgba(50,50,93,0.25), 0 30px 60px -30px rgba(0,0,0,0.3);`
    *   Border Radius: `8px` or `12px`.
*   **Buttons:**
    *   Stripe buttons often have a subtle inner shadow (inset) to give them volume, or a very slight shadow underneath.
    *   `border-radius: 999px;` (Pill shape) is common for primary calls to action.
*   **Hover States:**
    *   Buttons slide up slightly (`transform: translateY(-1px);`) and the shadow increases.

## 4. Anti-Slop Validation (Stripe Specific)
*   [ ] Is the primary text pure `#000000`? (If yes -> FAIL. It must be a deep slate like `#0a2540`).
*   [ ] Are the card drop shadows small and tight (e.g., `0 2px 4px`)? (If yes -> FAIL. Stripe cards require massive, soft, multi-layered shadows).
