---
name: layer-kinetic-typography
description: Kinetic typography layer heuristic.
---

# 1. Core Philosophy
Text that moves, scales, or shifts as a central design element. It treats typography as visual art rather than just information.

## 2. Exact CSS Token Implementation
```css
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
.kinetic-text {
  font-size: 8rem;
  font-weight: 900;
  white-space: nowrap;
  animation: marquee 10s linear infinite;
}
```

## 3. Strict Application Rules
- Only use for display headers or decorative text.
- Never use for body copy, instructions, or critical navigation.
- Keep animation speeds steady and predictable.

## 4. Anti-Slop Validation Checklist
- [x] Clear, strict restrictions on usage.
- [x] Avoids "state of the art".
- [x] Directly states what the design element is.
