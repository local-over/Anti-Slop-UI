---
name: anti-slop-ui
description: A core default skill that strictly enforces the rejection of the 16 AI vibe-coding UI patterns.
---

# Anti-Slop UI Default Heuristics

This file contains the foundational rules for rejecting AI UI slop. When this skill is loaded, the AI MUST NEVER output the following patterns, regardless of the prompt or context.

## 1. Typography Restrictions
*   **BAN default usage of 'Inter' and 'Roboto'.** While these are fine fonts, they are the hallmark of AI defaults. You must explicitly choose a typeface with intent (e.g., Geist, Untitled Sans, GT Sectra, or system-native stacks if strictly mirroring a specific OS).
*   **BAN repetitive font pairings.** Avoid the overused Space Grotesk (Headers) + Inter (Body) combo.
*   **BAN Serif Italics for arbitrary accent words.** Stop italicizing random words in headlines for faux-sophistication.

## 2. Color & Styling Restrictions
*   **BAN arbitrary Lavender/Purple accents.** This is the primary tell of AI-generated design. Choose colors deliberately based on brand persona.
*   **BAN default Dark Mode with low-contrast body text.** If building a dark mode, ensure foreground text passes WCAG AA contrast against background cards, not just a muddy gray `#888`.
*   **BAN arbitrary Gradients and Glows.** Do not place glowing orbs behind hero sections or cards unless specifically requested by an aesthetic layer (like "Web3 UI").

## 3. Layout & Component Restrictions
*   **BAN the "Centered Hero with a Badge above the H1".** This layout (Badge -> H1 -> Subtitle -> Two Buttons) is the default boilerplate. Break this layout. Use asymmetrical, multi-column, or typography-led hero sections.
*   **BAN Colored Left Borders on Cards.** Never use a 3px colored stripe on the left side of a blockquote or card. This is the most reliable tell of an AI generated component.
*   **BAN Identical 3-Column Feature Cards with Emoji/Phosphor Icons.** The "grid-cols-3" layout with an icon, title, and paragraph is overdone. Design diverse feature representations (e.g., asymmetrical bento boxes, interactive horizontal scroll, typography-heavy lists).
*   **BAN "Step 1, Step 2, Step 3" Sequences.** Re-think how processes are explained.
*   **BAN Stat Banners.** Arbitrary banners displaying "1M+ Users | 99% Uptime" are lazy. Integrate social proof contextually.
*   **BAN Sidebar with Emoji Icons.** 
*   **BAN All-Caps Section Labels.** For example, placing "FEATURES" or "ABOUT US" in tracking-wide, 12px all-caps text above sections.

**Execution Rule:** If any of the above patterns appear in the output code, the generation is considered a failure.
