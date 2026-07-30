---
name: school-openai
description: OpenAI Design System. Expert-level heuristic for AI interfaces, soft transitions, and focus on conversational flow.
---

# 1. Philosophy
The interface should dissolve, leaving only the conversation. OpenAI's design is heavily subdued, using off-whites, neutral grays, and soft transitions to prioritize the textual or multimodal content being generated.

## 2. Exact CSS Design Tokens
```css
:root {
  --font-sans: 'Söhne', -apple-system, sans-serif;
  --font-mono: 'Söhne Mono', ui-monospace, monospace;
  --color-bg: #FFFFFF;
  --color-bg-alt: #F9F9F9;
  --color-text-primary: #0D0D0D;
  --color-text-secondary: #666666;
  --color-accent: #10A37F; /* OpenAI Green */
}
```

## 3. Spatial Reasoning & Grid
- Single-column layout, perfectly centered with a max-width (often 768px or 800px) for optimal reading length.
- Distinct spatial separation between user inputs (often right-aligned bubbles or plain text) and AI outputs.

## 4. Component Architecture & Physics
- Streaming text reveals are purely CSS/JS driven without jumping layout (preserve scroll position).
- Hover states on action buttons (copy, regenerate) are extremely subtle (`opacity: 0.5` to `opacity: 1`).

## 5. Anti-Slop Validation Checklist
- [x] No "seamless" or "revolutionary".
- [x] Direct, practical definitions for AI conversational flow.
- [x] Söhne font family strictly required if available.
