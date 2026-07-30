<p align="center">
  <img src="logo.svg" alt="Anti-Slop UI Logo" width="150">
</p>

# Anti-Slop UI: The 50-Layer UI Architecture

Welcome to the Anti-Slop UI framework. This open-source system forces AI coding assistants (like Cursor, Claude, and Antigravity) to build strict, human-grade user interfaces. It stops them from generating default, generic "vibe-coded" layouts.

## 🌐 Live Interactive Viewer
Explore the 61 Design Schools and 50 Heuristic Layers on our formal viewer built using the framework's own Vercel Minimalism logic: 
**[https://local-over.github.io/Anti-Slop-UI/](https://local-over.github.io/Anti-Slop-UI/)**

## 🚀 Quick Start: The Magic Install Prompt

You can instantly upgrade your AI assistant (Cursor, Claude, Antigravity) by simply pasting the following one-line prompt into it. The AI will automatically clone the repository and install the skill for you:

> **"Please run this exact command to clone the Anti-Slop UI framework: `git clone https://github.com/local-over/Anti-Slop-UI.git`. Then, read the `Anti-Slop-UI/README.md` file and copy the contents of `Anti-Slop-UI/public-skills/SKILL.md` into your global skills configuration or workspace instructions to cure AI UI slop."**

Alternatively, you can manually install it:
1. Copy the `SKILL.md` file from `/public-skills/SKILL.md`.
2. Place it in your AI's global prompt configuration (e.g. `~/.gemini/config/skills/anti-slop-ui/SKILL.md` or your project's `.cursorrules`).
3. The AI will now act as a strict state-machine, read the heuristics, and ban all generic 8px rounded corners and default drop-shadows.

## The Philosophy

When left alone, LLMs output the "average" of their training data. In UI design, this average results in "slop"—predictable, safe, and boring interfaces marked by standard fonts, random lavender gradients, repetitive 3-column feature cards, and weak copywriting.

To fix this, we constrain the AI. We force the AI through a massive **50-Layer Routing Architecture**, mapped to specific heuristic rules and real-world Design Schools.

## The Architecture

This framework divides UI generation into 5 computational groups:

1.  **Group A: Structure** (Grid math, alignment, layout matrices).
2.  **Group B: Typography** (Type scales, font pairing, tracking logic).
3.  **Group C: Components** (Border radii constraints, input physics).
4.  **Group D: Aesthetics** (Color theory, gradients, shadows).
5.  **Group E: Advanced Physics** (Motion curves, 3D contexts).

By forcing the AI to load exactly 1 Design School and 1 Layer from each group, it mathematically guarantees a unique, deterministic, and premium UI.

## Directory Structure

*   `/public-skills/` - The ready-to-use AI `SKILL.md` prompt instruction file.
*   `/skills/schools/` - 61 specific heuristic rules for major Design Systems (e.g. Linear, Vercel, Apple, IBM).
*   `/skills/layers/` - 50 multiple-choice `.md` heuristic layer files.
*   `/website/` - The interactive viewer built strictly using the framework's logic (Vercel Minimalism + Dark Mode + Glassmorphism).
*   `research_paper.md` - The formal research paper supporting this framework by Hassan Elkady (AAST).
