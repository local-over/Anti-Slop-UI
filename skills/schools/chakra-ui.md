---
name: school-chakra-ui
description: Chakra UI Design School. Expert-level heuristic for prop-based styling, accessibility, and modular primitives.
---

# Chakra UI Design School

## 1. Philosophy
Simplicity, modularity, and out-of-the-box accessibility. Chakra UI treats design as a composition of primitive layout blocks (`Box`, `Flex`, `Stack`). It is fundamentally developer-centric, trading visual uniqueness for extreme velocity and prop-based styling.

## 2. Exact CSS Design Tokens
- **Fonts:** System fonts for body, often standardizing on Helvetica/Arial or system UI.
- **Brand Colors:** Heavily utilizes a 50-900 color scale. Teal is the canonical default (e.g., `#319795` teal.500).
- **Dark Mode:** Inverts the 50-900 scale, pulling from 200/300 weights for text and 800/900 for backgrounds.
- **Shadows:** Standardized soft shadows (`sm`, `md`, `lg`, `xl`).

## 3. Spatial Reasoning & Grid
- **Scale:** 4px absolute scale passed via props (e.g., `p={4}` means 16px).
- **Stacking:** `VStack` and `HStack` components dictate spatial reasoning, enforcing consistent gaps (`spacing={4}`) rather than manual margins.
- **Flexibility:** Grid is secondary to Flexbox; responsive arrays (`w={[ '100%', '50%', '25%' ]}`) manage layout shifts.

## 4. Component Architecture & Physics
- **Prop-Driven Styling:** Styles are passed directly as React props to primitives (historically via Emotion/styled-system, transitioning to zero-runtime setups).
- **Modularity:** Highly composed. A `Button` is just a `Box` with preset interaction styles and an accessible `as="button"` tag.
- **Motion:** Built-in `Collapse`, `Fade`, and `Slide` transitions relying on Framer Motion for fluid, physics-based springs.

## 5. Anti-Slop Validation Checklist
- [ ] Are raw CSS files or `style={}` objects eliminated in favor of Chakra’s style props?
- [ ] Is spatial alignment governed exclusively by `Stack`, `HStack`, or `VStack` gaps rather than manual margins?
- [ ] Are semantic tokens (e.g., `color="gray.600"`) used instead of hardcoded hex values?
- [ ] Is dark mode explicitly tested and supported via `useColorModeValue`?
