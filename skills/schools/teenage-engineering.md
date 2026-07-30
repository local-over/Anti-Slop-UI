---
name: school-teenage-engineering
description: Teenage Engineering Design School. Expert-level heuristic for playful brutalism, physical synthesizers, and mechanical precision.
---

# Teenage Engineering Design School

## 1. Philosophy
"Brutalist Honesty and Playful Professionalism." Teenage Engineering treats UI like an intricate, high-end synthesizer. It is defined by constraints, mechanical precision, exposed structural grids, and highly saturated, color-coded functional accents. It is anti-skeuomorphic but tactile, technical but whimsical.

## 2. Exact CSS Design Tokens
- **Fonts:** Strictly Monospaced (Courier, Roboto Mono, or custom technical faces).
- **Colors:** High-contrast, hardware-inspired palettes.
  - Base: `#000000` (Pitch Black), `#FFFFFF` (Pure White).
  - Accents: `#FF6B00` (Industrial Orange), `#FFD500` (Bright Yellow), `#00E5FF` (Cyan).
- **Borders:** Stark, high-contrast borders (e.g., `border: 2px solid #000`); no soft gradients.

## 3. Spatial Reasoning & Grid
- **Scale:** Visibly exposed grids. The interface is organized into distinct, rigid blocks resembling physical modules or screens.
- **Density:** High density of controls packed into mathematically perfect squares and rectangles.
- **Padding:** Sharp, uniform padding ensuring controls hit the precise edge of their bounding boxes.

## 4. Component Architecture & Physics
- **Tactile Brutalism:** Buttons do not use soft drop shadows; instead, they use solid block shadows (`box-shadow: 4px 4px 0px #000`) or inverse color states to indicate press.
- **Color-Coding:** Interactions and data streams are heavily color-coded (e.g., orange knob controls the orange graph).
- **Motion:** LED-like. Instant toggles, snappy step-based animations, mimicking low-refresh-rate hardware screens.

## 5. Anti-Slop Validation Checklist
- [ ] Is all typography strictly monospaced?
- [ ] Are soft shadows entirely removed in favor of sharp, solid borders and block shadows?
- [ ] Are complex functionalities mapped to clear, highly saturated color-coded systems?
- [ ] Does the UI feel like a constrained physical machine rather than an endless scrolling web page?
