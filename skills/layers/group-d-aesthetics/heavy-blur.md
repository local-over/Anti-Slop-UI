---
name: layer-heavy-blur
description: Expert-level implementation of glassmorphism (heavy blur) physics and styling.
---

# Layer 33: Heavy Glassmorphism (Expert Architecture)

When this heuristic is loaded, depth is conveyed through frosted glass effects rather than opaque dropshadows.

## 1. The Core Philosophy
Glassmorphism simulates physical sheets of frosted glass placed over vibrant content. To be effective, the content *behind* the glass must be colorful or dynamic; otherwise, the blur has no visual effect.

## 2. CSS Token Implementation
You must use a precise combination of `backdrop-filter`, `background-color` (with low opacity), and a `1px` border to simulate the physical edge of the glass.

```css
.glass-panel-light {
  /* The Glass Body */
  background: rgba(255, 255, 255, 0.4); /* High transparency white */
  
  /* The Frost Physics */
  backdrop-filter: blur(24px) saturate(150%);
  -webkit-backdrop-filter: blur(24px) saturate(150%); /* Safari support */
  
  /* The Physical Edge */
  border: 1px solid rgba(255, 255, 255, 0.6);
  
  /* The Shadow (Optional, keeps it separated from background) */
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
}

.glass-panel-dark {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(24px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
```

## 3. Strict Application Rules
*   **The Saturation Boost:** `saturate(150%)` is critical. Blurring desaturates the colors behind the glass. Boosting saturation restores the vibrancy of the background, mimicking real frosted acrylic.
*   **The Environment:** This heuristic is USELESS on a plain white or plain black background. It MUST be placed over gradients, images, or moving elements.
*   **Text Contrast:** Text placed on top of glassmorphism must be highly legible. Use solid, high-contrast colors for text. Never apply a blur to the text itself.

## 4. Anti-Slop Validation
*   [ ] Did you apply `backdrop-filter: blur` without an accompanying low-opacity `background` color? (If yes -> **FAIL**. The browser will render a bug or it will look incorrect).
*   [ ] Did you forget the 1px semi-transparent border? (If yes -> **FAIL**. The border is required to create the illusion of a physical glass edge).
