---
name: school-gov-uk
description: GOV.UK Design School. Expert-level heuristic for radical accessibility, high contrast, and democratic design.
---

# GOV.UK Design School

## 1. Philosophy
Radical accessibility, extreme clarity, and user-centered design stripped of all non-essential elements. The UK Government Digital Service (GDS) pioneered a design language built on the premise that users are visiting the site to complete a specific task as quickly as possible. It is democratic design: it must work for everyone, regardless of device, connection speed, or cognitive/physical ability.

## 2. Exact CSS Design Tokens
**Fonts:**
- Primary: `GDS Transport, Helvetica, Arial, sans-serif`
- Font Weight: Regular (400) and Bold (700)

**Hex Colors:**
- Background: `#FFFFFF` (White) or `#F3F2F1` (Light Grey for offset sections)
- Text: `#0B0C0C` (Off-black for readability, avoiding #000 for dyslexia)
- Interactive/Link: `#1D70B8` (Blue)
- Focus State: `#FFDD00` (Yellow background) with `#0B0C0C` text
- Error/Destructive: `#D4351C` (Red)
- Success: `#00703C` (Green)

## 3. Spatial Reasoning & Grid
- **Grid System:** Responsive, single-column focus for forms and transactions. Simple 2/3 and 1/3 columns for content.
- **Spacing:** Large, proportional spacing (using a 5px/15px/30px scale).
- **Layout:** Top-down, linear flow.

## 4. Component Architecture & Physics
- **Components:** Huge hit areas, heavy borders, highly visible form inputs.
- **Physics:** Static, solid. Hover states exist but are secondary to focus states. No decorative transitions.

## 5. Anti-Slop Validation Checklist
- [ ] Is the reading age of the text below 9 years old?
- [ ] Are focus states blindingly obvious (yellow block with black text)?
- [ ] Is it fully functional without JavaScript?
- [ ] Are all elements meeting WCAG AAA contrast ratios?
- [ ] Is there a complete absence of unnecessary "delight" features?
