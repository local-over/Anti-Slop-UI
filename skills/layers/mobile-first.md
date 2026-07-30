---
name: layer-mobile-first
description: Routing skill for Mobile-first structural focus.
---

# Structural Focus: Mobile-First

When generating mobile-first structure:

1.  **DOM Order:** The HTML structure must reflect the mobile layout linearly. Do not use CSS to arbitrarily reorder major structural blocks unless absolutely necessary for accessibility.
2.  **Navigation:** Default to a bottom navigation bar or a full-screen hamburger menu overlay. Do not attempt to squeeze a horizontal navbar into a mobile viewport.
3.  **Touch Targets:** Every interactive element must be at least 48x48 pixels. No exceptions.
4.  **Full-Bleed:** On mobile, cards and images should often bleed to the edges of the screen to maximize screen real estate, rather than being trapped in a narrow padded container.
