---
name: layer-spring-physics
description: Expert-level implementation of realistic spring physics for UI motion.
---

# Layer 42: Spring Physics Motion (Expert Architecture)

When this heuristic is loaded, traditional linear or simple CSS ease animations are banned. All motion must simulate mass, tension, and friction.

## 1. The Core Philosophy
In the real world, objects do not instantly accelerate to top speed and instantly stop. They have momentum. Spring physics mimics this by allowing an element to slightly overshoot its target destination and bounce back, settling into place.

## 2. CSS Implementation (Bezier Approximation)
While true spring physics requires JavaScript (e.g., Framer Motion, React Spring), you can approximate it in CSS using complex `cubic-bezier` curves that dip below 0 or rise above 1.

```css
:root {
  /* A stiff, fast spring */
  --spring-stiff: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  /* A loose, wobbly spring (use sparingly) */
  --spring-wobbly: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  /* Standard duration for a spring */
  --spring-duration: 0.4s;
}

/* Example Usage on Hover */
.button-spring {
  transition: transform var(--spring-duration) var(--spring-stiff);
}

.button-spring:hover {
  transform: scale(1.05); /* Will overshoot to ~1.08, then settle at 1.05 */
}
```

## 3. Strict Application Rules
*   **Banned Curves:** `ease`, `ease-in`, `ease-out`, `linear`.
*   **Properties to Animate:** Spring physics looks best on `transform` (scale, translate) and `opacity`. 
*   **Do Not Animate Dimensions:** Never apply spring physics to `width`, `height`, `margin`, or `padding`, as this will cause layout thrashing and severe performance issues.
*   **Exit Animations:** If an element is disappearing from the screen (e.g., a modal closing), do not use an overshooting spring. Use a standard ease-in, because an object leaving the screen does not need to settle.

## 4. Anti-Slop Validation
*   [ ] Search the CSS for `transition: all 0.3s ease;`. If found -> **FAIL**. This is the ultimate AI slop animation. Replace it with targeted properties (e.g., `transition: transform...`) and a `--spring-stiff` bezier curve.
