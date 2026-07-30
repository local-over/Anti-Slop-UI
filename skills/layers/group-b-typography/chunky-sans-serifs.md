---
name: layer-chunky-sans-serifs
description: Chunky sans-serifs layer heuristic.
---

# 1. Core Philosophy
Chunky sans-serifs communicate confidence, playfulness, and immediate impact. By utilizing high-weight typography with tight kerning, headers become structural elements of the layout rather than just information carriers.

## 2. Exact CSS Token Implementation
```css
:root {
  --font-chunky: 'Impact', 'Arial Black', sans-serif;
  --chunky-weight: 900;
  --chunky-letter-spacing: -0.05em;
  --chunky-line-height: 0.9;
  --chunky-text-transform: uppercase;
}
```

## 3. Strict Application Rules
- Use only for short headings (1-5 words max).
- Never apply to body copy or secondary text.
- Maintain tight letter spacing (negative kerning) to create block-like visual weight.

## 4. Anti-Slop Validation Checklist
- [ ] Used strictly as a display font.
- [ ] No usage of this token for paragraphs or form inputs.
- [ ] Avoids words like "dynamic" or "robust" when describing its implementation.
