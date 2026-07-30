---
name: school-riot-games
description: Riot Games Design System. Expert-level heuristic for hextech high-fantasy esports UI.
---

# 1. Philosophy
Hextech and high-fantasy meets modern esports. The design blends ornate, thematic framing with sharp, competitive usability. It must feel premium, deep, and tied to the game's lore without sacrificing speed.

## 2. Exact CSS Design Tokens
```css
:root {
  --font-primary: 'Spiegel', 'Beaufort for LOL', sans-serif;
  --color-hextech-gold: #C8AA6E;
  --color-hextech-magic: #0AC8B9;
  --color-bg-dark: #010A13;
  --color-text-body: #A09B8C;
}
```

## 3. Spatial Reasoning & Grid
- Layered depths using subtle glows and drop shadows.
- Symmetrical framing for important content (e.g., matchmaking lobbies).
- Rigid grid for stats and loadouts, expressive layouts for cosmetics.

## 4. Component Architecture & Physics
- Metallic sheen sweeping animations.
- Hover states include sound and subtle glow expansions.
- Easing is smooth but purposeful: `cubic-bezier(0.25, 0.1, 0.2, 1)`.

## 5. Anti-Slop Validation Checklist
- [x] Removed "tapestry" and "transformative".
- [x] Direct explanation of thematic elements.
- [x] No bloated buzzwords.
