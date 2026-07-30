---
name: layer-pastel-gradients
description: Expert-level implementation of Pastel Gradients.
---

# Pastel Gradients

## 1. Core Philosophy
Soft, low-saturation color transitions that evoke calmness. Pastel gradients should feel airy, avoiding the harsh intensity of high-saturation neon stops.

## 2. Exact CSS Token Implementation
```css
:root {
  --grad-pastel-dawn: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  --grad-pastel-cotton: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
  --grad-pastel-dream: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
}
```

## 3. Strict Application Rules
- Saturation must remain below 40% for all color stops.
- Avoid more than 2 distinct hues to prevent muddiness.
- Best used as large background washes, not on small UI components.

## 4. Anti-Slop Validation Checklist
- [ ] Colors fall within the pastel spectrum (high lightness, low saturation).
- [ ] Transition is smooth with no harsh banding.
- [ ] Text layered on top meets WCAG contrast requirements (often requires dark text).
