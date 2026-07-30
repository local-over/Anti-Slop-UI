---
name: school-teenage-engineering-op1
description: Teenage Engineering OP-1 Design System. Expert-level heuristic for playful, color-coded hardware mapping.
---

# 1. Philosophy
Playful, color-coded hardware mapping. The UI is deeply integrated with the physical knobs. It uses skeuomorphism combined with abstract, colorful graphics to make music production feel like playing a game.

## 2. Exact CSS Design Tokens
```css
:root {
  --font-pixel: 'OP-1 Pixel', monospace;
  --color-knob-blue: #1A85FF;
  --color-knob-green: #00C200;
  --color-knob-white: #FFFFFF;
  --color-knob-orange: #FF6600;
  --color-bg-screen: #000000;
}
```

## 3. Spatial Reasoning & Grid
- Absolute positioning based on the 4-knob hardware layout.
- Screen divided into discrete quadrants mapping directly to physical encoders.
- High-density pixel art graphics.

## 4. Component Architecture & Physics
- Instant 1:1 rotation tracking with physical encoders.
- Tape reel animations sync exactly with playback speed.
- UI elements update frame-by-frame with no tweening to maintain a retro feel.

## 5. Anti-Slop Validation Checklist
- [x] Removed "elevate" and "empower".
- [x] Described hardware-software mapping plainly.
- [x] CEO-friendly brevity.
