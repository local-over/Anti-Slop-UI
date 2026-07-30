---
name: school-slack
description: Slack Design System. Expert-level heuristic for enterprise accessibility, left-to-right hierarchy, and high-contrast organization.
---

# Slack Design System

## 1. Philosophy
Slack’s internal "Slack Kit" focuses on "Don't make me think." The design is high-contrast, accessible, and structured to organize enterprise communication without cognitive overload.

## 2. Exact CSS Design Tokens
- **Fonts:** `Lato` (Headings) / System UI fonts (Body).
- **Brand Aubergine:** `#4A154B`
- **Brand Secondary (Gold):** `#ECB22E`
- **Ink (Text Primary):** `#1D1C1D`
- **Ink Muted:** `#616061`
- **Surface 1:** `#F8F8F8`
- **Destructive:** `#E01E5A`

## 3. Spatial Reasoning & Grid
- Clear, distinct boundaries between navigation (often dark/aubergine) and content (pure white).
- Spacing is generous compared to consumer apps to ensure accessibility and clickability on desktop and mobile.
- **Border Radius:** Soft but professional (typically 4px - 8px).

## 4. Component Architecture & Physics
- **Left-to-Right Hierarchy:** Strict column-based layout (Workspaces -> Channels -> Chat -> Thread).
- **Modals:** Heavy use of central modal overlays for complex interactions (settings, heavy file uploads).

## 5. Anti-Slop Validation Checklist
- [ ] Is the contrast between text and background mathematically verified for accessibility?
- [ ] Is Aubergine used strategically to anchor navigation without overwhelming the content?
- [ ] Are system fonts utilized for body text to maximize readability?
- [ ] Does the layout follow a strict, predictable left-to-right hierarchical flow?
