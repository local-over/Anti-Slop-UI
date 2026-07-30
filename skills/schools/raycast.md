---
name: school-raycast
description: Raycast Design System. Expert-level heuristic for keyboard-first navigation, deep shadow layering, and native macOS feel.
---

# Raycast Design System

## 1. Philosophy
Raycast prioritizes keyboard-first navigation, native macOS feel, and absolute minimalism. The design is utilitarian, lightning-fast, and relies heavily on deep, layered shadows to establish visual hierarchy without clutter.

## 2. Exact CSS Design Tokens
- **Fonts:** `Inter`, with OpenType features (`calt`, `kern`, `liga`, `ss03`)
- **App Background:** `#1A1A2E` (Dark Chrome) / `#07080a` (Deep Space)
- **Input Surface:** `#2A2A3E`
- **Brand Accent (Red):** `#FF6363`
- **Text Primary:** `#FFFFFF`
- **Text Secondary:** `#E4E4E4`
- **Text Muted:** `#888899`

## 3. Spatial Reasoning & Grid
- Relies on tight, compact spacing scales (4px, 8px, 12px).
- **Border Radius:** `10px` to `14px` for major containers (command palette window).
- **Borders:** Subtle white borders at very low opacity (`rgba(255, 255, 255, 0.08)`) to define edges on dark surfaces.

## 4. Component Architecture & Physics
- **Elevation Physics:** Emulates macOS native windows using layered box-shadows (e.g., `box-shadow: 0 20px 60px rgba(0,0,0,0.6)`).
- **Focus Rings:** High-contrast, sharp focus rings to immediately orient keyboard users.
- **Micro-interactions:** Instantaneous response times; animations are snappy (under 150ms).

## 5. Anti-Slop Validation Checklist
- [ ] Are all animations under 150ms duration?
- [ ] Is the primary typeface Inter with appropriate OpenType features enabled?
- [ ] Are borders using ultra-low opacity white instead of solid grays?
- [ ] Does the UI feel natively integrated (heavy drop shadows, translucent materials)?
