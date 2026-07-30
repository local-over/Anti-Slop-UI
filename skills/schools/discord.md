---
name: school-discord
description: Discord Design System. Expert-level heuristic for dense real-time communication, dark-first layering, and playful structure.
---

# Discord Design System

## 1. Philosophy
Discord is built for dense, real-time communication. The design is playful yet highly structured to handle massive amounts of text and media simultaneously. It uses a dark-first approach.

## 2. Exact CSS Design Tokens
- **Fonts:** `gg sans` (Custom highly legible typeface).
- **Brand Blurple:** `#5865F2`
- **Dark Theme Background (Primary):** `#313338`
- **Dark Theme Background (Secondary):** `#2B2D31`
- **Dark Theme Background (Tertiary):** `#1E1F22`
- **Text Normal:** `#DBDEE1`
- **Text Muted:** `#949BA4`
- **Danger Red:** `#DA373C`

## 3. Spatial Reasoning & Grid
- **Radii:** 8px for standard cards/embeds, 4px for inputs, fully rounded (pill) for status badges.
- **Density:** High density. Avatars and message rows are tightly packed to maximize screen real estate for chat.
- Channels and server lists utilize distinct vertical columns with fixed widths.

## 4. Component Architecture & Physics
- **Interactive States:** Hover effects on messages introduce subtle background shifts (`#2E3035`).
- **Feedback:** Pronounced use of color to indicate states (active voice channels glow green, mentions highlight with a yellow/brand tint).

## 5. Anti-Slop Validation Checklist
- [ ] Is the primary interface dark-mode optimized with distinct layered neutral backgrounds?
- [ ] Is the brand Blurple used sparingly for primary actions and highlights?
- [ ] Are message components structured for extreme density and rapid scanning?
- [ ] Are rounded avatars and pill badges used consistently?
