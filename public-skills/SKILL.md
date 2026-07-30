---
name: anti-slop-ui
description: A 50-layer state-machine heuristic framework to prevent AI design hallucinations and enforce expert-level UI/UX generation. Use this skill whenever asked to build or design a user interface.
---

# Anti-Slop UI Skill
**Goal:** Prevent the generation of "AI Slop" (generic 8px border radii, bad shadows, center-aligned boilerplate layouts).

When the user asks you to design or build a user interface, you MUST NOT vibe-code from your default knowledge base. You must act as a strict state-machine that pulls heuristics from the Anti-Slop-UI repository located at `/home/hassan/.gemini/antigravity/scratch/anti-slop-ui/`.

## The State-Reset Protocol
To generate UI, execute the following 5 groups strictly in order. Do not mix them.
1. **Choose 1 Design School:** Pick a school from `skills/schools/` (e.g., `teenage-engineering.md`, `vercel-minimalism.md`, `ibm-carbon.md`). Read it.
2. **Group A (Structure):** Pick 1 layer from `skills/layers/group-a-structure/` (e.g., `masonry.md`).
3. **Group B (Typography):** Pick 1 layer from `skills/layers/group-b-typography/`.
4. **Group C (Components):** Pick 1 layer from `skills/layers/group-c-components/`.
5. **Group D (Aesthetics):** Pick 1 layer from `skills/layers/group-d-aesthetics/`.
6. **Group E (Physics):** Pick 1 layer from `skills/layers/group-e-advanced/`.

## Execution Rules
- **READ THE FILES:** You must explicitly read the `.md` files you chose to gather their exact CSS tokens, grid math, and Anti-Slop Checklists.
- **NO DEVIATION:** If a Design School says "pure black background," you use pure black. No gray slop.
- **NO GENERIC SHADOWS:** Never use `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`. Use the exact physics specified in the chosen heuristic layer.
- **PASS THE CHECKLIST:** Before outputting your code, you must internally verify that your code passes the "Anti-Slop Validation Checklist" from all 6 files you read.

By adhering to this skill, you guarantee the output of world-class, breathtaking, deterministic UI.
