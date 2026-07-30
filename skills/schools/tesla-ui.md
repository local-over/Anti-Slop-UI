---
name: school-tesla-ui
description: Tesla In-Car UI Design School. Expert-level heuristic for dark mode safety, fast touch targets, and automotive minimalism.
---

# Tesla In-Car UI Design School

## 1. Philosophy
Futuristic minimalism, spatial awareness, and driver-centric safety. The interface must communicate complex vehicle physics and environmental data instantly without distracting the driver. It bridges automotive reliability with tablet-era touch paradigms.

## 2. Exact CSS Design Tokens
**Fonts:**
- Primary: `Gotham, Montserrat, sans-serif` (Clean, geometric, easily readable at a glance).
- Font Weights: Light (300) for large numbers, Medium (500) for UI labels.

**Hex Colors (Dark Mode Default):**
- Background: `#111111` to `#1C1C1C` (Deep Greys/Black)
- Panels/Cards: `#2A2A2A` (Slight elevation)
- Text: `#FFFFFF` (White)
- Primary Accent (Active/Speed): `#3E6AE1` (Tesla Blue)
- Warnings: `#E32929` (Red)
- Autopilot State: `#33A8FF` (Cyan/Light Blue)

## 3. Spatial Reasoning & Grid
- **Grid System:** Zonal layout (e.g., left third for driving visualization, right two-thirds for maps/media).
- **Spacing:** Large tap targets (minimum 48x48px equivalents) for use while driving.
- **Layout:** Anchored bottom dock for climate/controls, floating transient panels above.

## 4. Component Architecture & Physics
- **Components:** 3D environmental visualizations, frosted glass overlays (blur), large slider controls.
- **Physics:** Fluid, responsive 60fps+ animations. Real-time physics rendering for the car avatar.

## 5. Anti-Slop Validation Checklist
- [ ] Are tap targets large enough to hit while moving?
- [ ] Is critical information (speed, gear) anchored and never obscured?
- [ ] Does the UI use geometric sans-serifs for instant legibility?
- [ ] Are background layers dark/subdued to prevent night glare?
- [ ] Are transitions ultra-smooth and hardware-accelerated?
