# Anti-AI-Slop: The 50-Layer UI/UX Architecture

Welcome to the Anti-AI-Slop framework. This open-source system is designed to stop AI (like Cursor, Claude, or autonomous agents) from generating default, generic, "vibe-coded" user interfaces. It forces the AI to break the algorithmic average and produce intentional, high-end, human-grade design.

## The Philosophy

When left to their own devices, LLMs output the "average" of their training data. In UI/UX, this average results in "slop"—predictable, safe, and uninspired interfaces characterized by standard Inter fonts, arbitrary lavender gradients, repetitive 3-column feature cards with emoji icons, and binary contrast copywriting.

To eradicate this slop, we do not just tell the AI to "be creative." We constrain it. We force the AI through a massive **50-Layer Routing Architecture**, mapped to deep heuristic rules and real-world Design Schools.

## The Architecture

This framework operates on three primary axes:

1.  **The Base Design School:** The AI is forced to select *exactly one* primary design system (e.g., Apple HIG, Google Material 3, Microsoft Fluent, Vercel/Linear Minimalism). It must adhere strictly to this school's spacing, typography, and component logic.
2.  **The Defaults (Anti-Slop):** Two layers are universally applied:
    *   **Anti-Slop UI:** Strictly bans the 16 recognized patterns of AI UI slop.
    *   **Anti-Slop Text:** Integrates Peter Yang's `no-ai-slop` repository to enforce crisp, active-voice copywriting.
3.  **The 50-Question Routing System:** A 50-layer questionnaire that dynamically dictates the spatial reasoning, typography, interaction paradigms, and aesthetic polish.

## The State-Reset Workflow (How to run this framework)

LLMs cannot process 50 complex architectural rulesets simultaneously without hallucinating. To implement this framework, you must run your AI agent as a **State Machine**, executing the UI generation in grouped batches and resetting its context window between steps.

**The Workflow:**
1.  **Step 1: Foundation & Layout (Questions 1-15).** Load your chosen Design School, the Default Anti-Slop layers, and the skill files for Q1-15. Command the AI to generate the core HTML structure, semantic layout, and spatial grid.
2.  **RESET STATE.** (Clear the AI's context).
3.  **Step 2: Typography & Voice (Questions 16-30).** Load the generated layout, the Anti-Slop Text defaults, and the skill files for Q16-30. Command the AI to populate the typography, establish the hierarchy, and write the microcopy.
4.  **RESET STATE.**
5.  **Step 3: Components & Interaction (Questions 31-40).** Load the current code, the chosen Design School interaction docs, and the skill files for Q31-40. Command the AI to build component states (hover, active, disabled) and micro-interactions.
6.  **RESET STATE.**
7.  **Step 4: Aesthetic Polish & Final Assembly (Questions 41-50).** Load the current code and the advanced skill files (e.g., WebGL shaders, scroll-triggers, lighting models). Command the AI to apply the final polish, ensuring absolutely zero AI-slop patterns slipped through.

## Directory Structure

*   `/skills/defaults/` - Core anti-slop rules for UI and Text.
*   `/skills/schools/` - Detailed heuristic rules for major Design Systems.
*   `/skills/layers/` - The massive library of multiple-choice `.md` files mapped to the 50-question routing tree.
*   `routing.md` - The master 50-question tree that orchestrates the entire process.
*   `paper.md` - The academic research supporting this framework.
