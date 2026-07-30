---
name: layer-aurora-backgrounds
description: Aurora backgrounds layer heuristic.
---

# 1. Core Philosophy
Vivid, blurred gradient blobs that blend together. It adds color and movement to otherwise empty backgrounds.

## 2. Exact CSS Token Implementation
```css
:root {
  --aurora-1: radial-gradient(circle at 0% 0%, #ff8a00 0%, transparent 50%);
  --aurora-2: radial-gradient(circle at 100% 100%, #e52e71 0%, transparent 50%);
}
.aurora-bg {
  background-image: var(--aurora-1), var(--aurora-2);
  filter: blur(60px);
  opacity: 0.6;
}
```

## 3. Strict Application Rules
- Place behind content layers; never put text directly on sharp gradient transitions.
- Keep animations slow and subtle to prevent motion sickness.
- Restrict to max 3-4 colors to avoid muddy mixing.

## 4. Anti-Slop Validation Checklist
- [x] Plain description of the visual effect.
- [x] Does not use "delve" or "tapestry" to describe colors.
- [x] Focuses on practical limitations (muddy mixing).
