---
name: school-shadcn-ui
description: shadcn/ui Design School. Expert-level heuristic for pragmatic, copy-paste ownership, Radix + Tailwind architecture.
---

# shadcn/ui Design School

## 1. Philosophy
"You own the code." shadcn/ui rejects the NPM package model in favor of copy-paste ownership. The philosophy blends the accessibility of Radix UI with the developer ergonomics of Tailwind CSS, resulting in a stark, clean, Vercel-like aesthetic. It is brutally pragmatic.

## 2. Exact CSS Design Tokens
- **Fonts:** Inter, frequently swapped for Geist in modern implementations.
- **Variables:** Deeply integrated CSS variables mapped to Tailwind configuration.
- **Base (Light):** `--background: 0 0% 100%;`, `--foreground: 222.2 84% 4.9%;`.
- **Primary:** `--primary: 222.2 47.4% 11.2%;` (Dark charcoal/near black).
- **Muted:** `--muted: 210 40% 96.1%;`.
- **Borders:** `--border: 214.3 31.8% 91.4%;`.
- **Radius:** `--radius: 0.5rem;`.

## 3. Spatial Reasoning & Grid
- **Scale:** Inherits standard Tailwind rem-based spacing.
- **Layout:** heavily utilizes grid structures with standardized gaps (`gap-4`, `gap-8`) for card layouts and forms.
- **Alignment:** Relies on utility classes to enforce vertical rhythms, specifically keeping form labels, inputs, and helper texts strictly aligned.

## 4. Component Architecture & Physics
- **Architecture:** Radix Primitives + Tailwind CSS + `class-variance-authority` (CVA).
- **Variants:** Component props map directly to Tailwind class strings via CVA, keeping style logic extremely readable and extensible.
- **Motion:** Snappy, minimal `tailwindcss-animate` utilities (`animate-in fade-in zoom-in`).

## 5. Anti-Slop Validation Checklist
- [ ] Is `cn()` (clsx + tailwind-merge) used for all dynamic class merging to prevent class collisions?
- [ ] Are HSL CSS variables strictly maintained for theming instead of hardcoded Tailwind hexes?
- [ ] Have you customized the pasted components to fit your specific domain, rather than leaving them purely default?
- [ ] Are form validation states piped correctly into the component’s destructive variants?
