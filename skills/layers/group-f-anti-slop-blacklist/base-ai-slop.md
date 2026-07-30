# Base AI Slop Blacklist

## Core Philosophy
This layer serves as the absolute baseline definition of "AI Slop." It acts as a hard blacklist. You must actively remove or never generate these elements, as they immediately betray the UI as lazy, generic AI output.

## Blacklisted Elements (NEVER DO THIS)
Based on industry standards and [Promptacore's Vibecoding Guide](https://www.promptacore.com/en/blog/vibecoding-101-how-to-prevent-your-app-from-looking-like-ai-slop), the following are strictly forbidden:

1. **The "AI Purple" Gradient:**
   - **Forbidden Token:** `bg-gradient-to-r from-purple-500 to-indigo-500` or any generic neon purple/indigo mix.
   - **Reason:** This is the most overused AI default aesthetic.

2. **Generic 8px Border Radii Everywhere:**
   - **Forbidden Token:** Unintentional, blanket use of `border-radius: 8px` on every single card and button without hierarchical intent.
   
3. **Inconsistent Spacing (Vibe-spacing):**
   - **Forbidden:** Mixing rem, em, and px arbitrarily (e.g., `margin-top: 17px`, `padding: 1.2rem`). 
   - **Reason:** Lack of a strict mathematical grid (like 4px/8px) screams "AI generated."

4. **The Boilerplate SaaS Drop Shadow:**
   - **Forbidden Token:** `box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);` or default Tailwind `shadow-md`.
   - **Reason:** Generic and lacks intentional light physics.

5. **Non-Intuitive Navigation & Hallucinated Flows:**
   - **Forbidden:** Building the "whole app at once" without a User Flow Document, leading to hallucinated, broken, or logically inconsistent navigation.

## Strict Application Rules
- When editing a file, proactively scan for the forbidden tokens above.
- If you find an "AI Purple" gradient, instantly remove it and replace it with a monochromatic or curated Design School token.
- If you find inconsistent spacing, snap it to an 8px grid.

## Anti-Slop Validation Checklist
- [ ] No neon purple/indigo generic gradients exist.
- [ ] Shadows have been mathematically defined, not copied from boilerplate templates.
- [ ] Spacing adheres to a strict grid (no 13px, 17px, etc).
- [ ] The UI does not look like a default AI template.
