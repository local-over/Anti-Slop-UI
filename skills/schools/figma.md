---
name: school-figma
description: Figma Design System. Expert-level heuristic for ultra-dense canvas-focused chrome, 1px borders, and CAD-like functionalism.
---

# Figma Design System

## 1. Philosophy
Figma's UI is designed to disappear. The canvas is the product; the surrounding chrome is purely functional, utilizing a highly dense, utility-driven aesthetic reminiscent of professional CAD software.

## 2. Exact CSS Design Tokens
- **Fonts:** `Inter` (used exclusively for a neutral, objective tone).
- **Canvas Background:** `#E5E5E5` (Light) / `#1E1E1E` (Dark).
- **Chrome Background:** `#FFFFFF` (Light) / `#2C2C2C` (Dark).
- **Accent Blue:** `#18A0FB`
- **Text Primary:** `#000000` (Light) / `#FFFFFF` (Dark).
- **Text Inactive:** `#B3B3B3`

## 3. Spatial Reasoning & Grid
- Ultra-dense layouts. Labels and inputs share extremely tight rows (e.g., 24px or 32px height).
- Micro-grids: Heavy reliance on 2px and 4px increments for internal component spacing.
- **Borders:** Crisp 1px solid borders (`#E5E5E5`) to separate panels, eschewing shadows for panel structure to keep the UI "flat".

## 4. Component Architecture & Physics
- **Scrubbable Inputs:** Input fields feature invisible drag interactions (scrubbers) to change numerical values.
- **Token Pipeline:** Deep integration of tier-based variables (Primitives -> Semantics).
- **Tooltips:** Instantaneous, highly contextual tooltips with zero animation delay.

## 5. Anti-Slop Validation Checklist
- [ ] Is the interface ultra-dense, minimizing padding to maximize canvas space?
- [ ] Are panel separators built with crisp 1px borders instead of drop shadows?
- [ ] Is Inter the sole typeface, conveying a purely utilitarian aesthetic?
- [ ] Is the Accent Blue used exclusively for active states and critical selections?
