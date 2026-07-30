---
name: school-tailwind-ui
description: Tailwind UI Design School. Expert-level heuristic for utility-first responsive web design.
---

# Tailwind UI Design School

## 1. Philosophy
Tailwind UI champions a utility-first, visually rich but unopinionated framework. It thrives on extraction and composition—encouraging developers to build bespoke interfaces rapidly without context-switching. The aesthetic is heavily polished, commercial, and highly responsive, representing the modern standard of "good default web design."

## 2. Exact CSS Design Tokens
- **Fonts:** Inter (sans-serif default).
- **Colors (Slate Theme defaults):** `#0f172a` (slate-900 for dark backgrounds/text), `#f8fafc` (slate-50 for light backgrounds).
- **Primary Accent:** `#4f46e5` (indigo-600), `#6366f1` (indigo-500).
- **Shadows:** Highly calibrated multi-layered box shadows (`shadow-sm`, `shadow-md`, `shadow-xl`) that emulate realistic ambient light occlusion.
- **Rings:** Extensive use of `ring` utilities for focus states (e.g., `ring-2 ring-indigo-500 ring-offset-2`).

## 3. Spatial Reasoning & Grid
- **Scale:** Strict rem-based spacing system where 1 unit = 0.25rem = 4px (e.g., `p-4` = 16px).
- **Grid:** Heavily relies on 12-column CSS Grids and robust Flexbox wrappers.
- **Responsiveness:** Mobile-first spatial design using arbitrary breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`).

## 4. Component Architecture & Physics
- **Headless:** Relies on Headless UI (or Radix) for unstyled, accessible logic, completely divorcing state management from style.
- **Markup:** "Zero-runtime" architecture where classes are baked directly into the HTML markup.
- **Transitions:** Standardized utility transitions (`transition-all duration-200 ease-in-out`).

## 5. Anti-Slop Validation Checklist
- [ ] Are arbitrary magic numbers (e.g., `w-[311px]`) eliminated in favor of standard scale utilities?
- [ ] Is standard Tailwind layering applied (no messy custom CSS classes paired with utility classes)?
- [ ] Are focus states robustly handled using `focus:ring` utilities for accessibility?
- [ ] Are shadows appropriately layered to simulate realistic light rather than harsh borders?
