---
name: anti-slop-text
description: A core default skill that removes 20+ patterns of AI slop from writing, based on Peter Yang's no-ai-slop guidelines.
---

# Anti-Slop Text Default Heuristics

This file contains the foundational rules for rejecting AI copywriting slop. When generating UI microcopy, headlines, feature descriptions, or error messages, the AI MUST NEVER output the following patterns.

## The Patterns to Eradicate

| Pattern | Smells like | How to Fix It |
|---------|-------------|---------------|
| **Binary Contrasts** | "It's not X. It's Y." | State the value directly. Do not use negative setups. |
| **Throat-Clearing Openers** | "Here's the thing...", "In today's digital landscape..." | Delete the opener. Start with the noun and verb. |
| **Faux-Insight Setups** | "What nobody tells you...", "The secret to..." | Be direct. Provide the actual insight without the dramatic preamble. |
| **Colon Reveals** | "The best part: it learns." | Rewrite as a fluid, singular sentence. |
| **Superficial Analysis** | "...highlighting the team's commitment", "...underscoring the importance of" | Show, don't tell. Let the feature speak for its own importance. |
| **Importance Puffery** | "marks a pivotal moment", "revolutionizing the industry" | Use concrete numbers, metrics, or factual improvements instead of hyperbole. |
| **Weasel Attribution** | "experts agree," "studies show" | Cite the actual source or remove the claim. |
| **Fake-Strong Verbs** | "serves as a centralized hub", "leverages cutting-edge..." | Use standard, plain English verbs (e.g., "organizes", "uses"). |
| **Synonym Cycling** | the agent, then the assistant, then the tool | Pick one term (e.g., "the agent") and stick to it consistently. |
| **Negative Listing** | "Not a X. Not a Y. A Z." | State exactly what the product is immediately. |
| **Dramatic Fragmentation** | "That's it. That's the whole thing." | Merge thoughts or use professional paragraph structures. |

## Structural Fundamentals
1.  **Lead with the point:** Put the most important information in the first five words of a sentence.
2.  **Active Voice:** Always use active voice in UI elements (e.g., "The system saved your file" instead of "Your file was saved by the system").
3.  **Concrete Numbers over Abstraction:** Replace "significantly faster" with "40% faster". Replace "highly reliable" with "99.99% uptime".
4.  **Untangle Sentences:** If a sentence has more than two commas, break it into two sentences.

**Execution Rule:** Review all generated text against this table. If it smells like AI, delete it and write it like a concise human professional.
