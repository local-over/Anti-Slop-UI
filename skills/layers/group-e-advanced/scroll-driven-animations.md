---
name: layer-scroll-driven-animations
description: Expert-level implementation of Scroll Driven Animations.
---

# Scroll Driven Animations

## 1. Core Philosophy
Tie element transformations directly to the user's scroll position. This creates a tactile, connected experience where the user dictates the pace of the interface timeline.

## 2. Exact CSS Token Implementation
```css
@supports (animation-timeline: scroll()) {
  .scroll-fade {
    animation: fade-in linear;
    animation-timeline: scroll(nearest block);
  }
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## 3. Strict Application Rules
- Only use native CSS `animation-timeline` (where supported) to prevent main-thread jank.
- Fallback gracefully for browsers without scroll-timeline support (just show the element).
- Do not manipulate `top`/`left`—only use hardware-accelerated `transform` and `opacity`.

## 4. Anti-Slop Validation Checklist
- [ ] Uses modern CSS scroll-timeline API.
- [ ] Includes `@supports` fallback.
- [ ] Animation is directly mapped to scroll progress, not a triggered time-based animation.
