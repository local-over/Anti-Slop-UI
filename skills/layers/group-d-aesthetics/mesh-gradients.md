---
name: layer-mesh-gradients
description: Expert-level implementation of Mesh Gradients.
---

# Mesh Gradients

## 1. Core Philosophy
Organic, fluid color fields created by blending multiple radial gradients. This creates a more dynamic and modern aesthetic than traditional linear gradients.

## 2. Exact CSS Token Implementation
```css
:root {
  --mesh-base: #ffb199;
  --mesh-blob-1: radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%);
  --mesh-blob-2: radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%);
  --mesh-blob-3: radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
}
/* Applied via background-image chaining */
```

## 3. Strict Application Rules
- Must use `radial-gradient` overlapping for a fluid look.
- Keep to 3-5 color blobs; more causes visual clutter and performance issues.
- Animate subtly using CSS `@keyframes` on `background-position` if desired, but keep movement slow.

## 4. Anti-Slop Validation Checklist
- [ ] Gradient uses overlapping radial stops.
- [ ] Colors blend organically without harsh edges.
- [ ] Performance isn't degraded on low-end devices.
