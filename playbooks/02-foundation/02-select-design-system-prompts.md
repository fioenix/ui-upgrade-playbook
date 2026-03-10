# Design System Selection Prompts

**Copy-paste prompts to help users select a UI library**

---

## 📋 How to Use

1. Read `02-select-design-system.md` first
2. Execute prompts in order
3. Capture user responses
4. Make recommendation based on answers

---

## Phase 1: Discovery Questions

### Prompt: Ask Use Case
```
To recommend the best UI component library for your project, I need to understand your needs.

**Question 1: What type of application are you building?**

A. **Enterprise SaaS** — Data-heavy, complex tables, forms, many users
B. **Startup MVP** — Need to ship fast, modern look, iterate quickly
C. **Internal Tools** — Admin panels, dashboards, used by team only
D. **Custom Brand** — Unique design identity is important
E. **Design-Forward** — Beautiful, impressive UI is a key feature
F. **Other** — Describe your use case

Please select one option (A-F) or describe your situation.
```

---

### Prompt: Ask Design Preference
```
**Question 2: What design style do you prefer?**

A. **Minimal & Clean** — Simple, lots of whitespace, subtle (like shadcn/ui)
B. **Professional & Dense** — Information-rich, enterprise look (like Ant Design)
C. **Material Design** — Google-style, card-based, shadows (like MUI)
D. **Modern & Trendy** — Beautiful animations, glassmorphism (like NextUI)
E. **No Preference** — Just need something that works

Please select one option (A-E).
```

---

### Prompt: Ask Technical Priorities
```
**Question 3: What's your top technical priority?** (Select up to 2)

A. **Small Bundle Size** — Keep app lightweight
B. **High Customization** — Full control over design
C. **Rich Features** — Many pre-built components
D. **Fast Development** — Developer experience is key
E. **Accessibility** — WCAG compliance is critical
F. **Easy Learning** — Low learning curve for team

Please select 1-2 options.
```

---

### Prompt: Ask Current Setup
```
**Question 4: What's your current technical setup?**

1. **Styling:** Are you using any CSS framework?
   - Tailwind CSS
   - CSS Modules
   - Styled Components
   - Plain CSS
   - None yet

2. **TypeScript:** Using TypeScript?
   - Yes
   - No

3. **Existing UI Library:** Already using any UI library?
   - Yes (which one?)
   - No

Please answer each question.
```

---

## Phase 2: Make Recommendation

### Prompt: Generate Recommendation
```
Based on user's answers:

**Use Case:** [paste answer]
**Design Preference:** [paste answer]
**Technical Priorities:** [paste answer]
**Current Setup:** [paste answer]

Generate a UI library recommendation with:

1. **Top Recommendation** — Best fit overall
2. **Alternative** — Second choice if first doesn't work
3. **Why** — Explain reasoning based on their answers
4. **Trade-offs** — What they gain and lose
5. **Setup Commands** — Exact install commands
6. **Next Steps** — What to do after installation

Format as a clear, actionable recommendation.
```

---

### Prompt: Generate Comparison (If User Unsure)
```
User is unsure between multiple libraries.

Generate a focused comparison table for these libraries:
[List libraries user is considering]

Compare on:
1. Bundle size (KB)
2. Customization level (1-5 stars)
3. Component count
4. Learning curve (Low/Medium/High)
5. Best for [user's use case]
6. Not recommended when...

Then make a clear recommendation with reasoning.
```

---

## Phase 3: Setup & Integration

### Prompt: Generate Setup Guide
```
User selected: [Library Name]

Generate a step-by-step setup guide:

1. **Installation** — Exact npm/yarn/pnpm commands
2. **Configuration** — Config files to create/modify
3. **Theme Setup** — How to customize theme/colors
4. **Test Component** — Simple component to verify it works
5. **Common Issues** — Gotchas specific to this library
6. **Resources** — Links to docs, component gallery, examples

Include code snippets for each step.
```

---

### Prompt: Generate Migration Plan (If Existing Library)
```
User is migrating from: [Old Library]
User is migrating to: [New Library]

Generate a migration plan:

1. **Audit** — Find all components using old library
2. **Mapping** — Map old components to new equivalents
3. **Step-by-Step** — Migration order (what to migrate first)
4. **Code Changes** — Before/after examples for common components
5. **Testing** — What to test after migration
6. **Rollback Plan** — How to revert if issues

Include a component mapping table:
| Old Component | New Component | Notes |
|---------------|---------------|-------|
| OldButton | NewButton | Props similar |
```

---

## Phase 4: Decision Helper

### Prompt: Decision Matrix Calculator
```
Help user decide using a weighted decision matrix.

Criteria to score (user assigns weights 1-5):
- Bundle Size
- Customization
- Features
- Developer Experience
- Accessibility
- Design Quality

Libraries to compare:
[List 3-5 libraries user is considering]

Generate a scoring table:
| Criteria | Weight | Lib A | Lib B | Lib C |
|----------|--------|-------|-------|-------|
| Bundle | 5 | 4 | 2 | 5 |
| ... | ... | ... | ... | ... |
| **Total** | | **XX** | **XX** | **XX** |

Calculate weighted scores and declare winner.
```

---

### Prompt: Quick Decision (TL;DR)
```
User wants a quick answer without detailed analysis.

Based on their use case: [paste use case]

Give a one-paragraph recommendation:

"**Use [Library Name]** — [One sentence why]

**Install:** `npm install [package]`

**Start with:** [First 3 components to use]

**Docs:** [Link]"

Keep it under 100 words.
```

---

## 📚 Common Scenarios & Recommendations

### Scenario: Enterprise Dashboard
**Answers:** Use Case=A, Design=B, Priority=C or F
**Recommendation:** Ant Design or MUI

---

### Scenario: Startup MVP
**Answers:** Use Case=B, Design=A or D, Priority=D
**Recommendation:** shadcn/ui or Mantine

---

### Scenario: Custom Brand
**Answers:** Use Case=D, Design=A, Priority=B
**Recommendation:** shadcn/ui or Radix UI

---

### Scenario: Internal Tools
**Answers:** Use Case=C, Priority=D or F
**Recommendation:** Chakra UI or Mantine

---

### Scenario: Design-Forward
**Answers:** Use Case=E, Design=D, Priority=A or E
**Recommendation:** NextUI or shadcn/ui

---

### Scenario: Tailwind Shop
**Answers:** Setup=Tailwind, Priority=B or A
**Recommendation:** shadcn/ui or DaisyUI

---

## 🆘 Handling Objections

### Objection: "I've heard shadcn/ui is complex"
**Response:**
```
shadcn/ui has a learning curve if you're new to Tailwind, but:
- You only learn Tailwind once
- Components are copy-paste (no black box)
- Great docs with examples
- Community is very active

Alternative: Mantine has easier setup with similar modern look.
```

### Objection: "Ant Design bundle is too large"
**Response:**
```
You're right — AntD is ~300KB. Options:
1. Tree-shake: Import only what you use
2. Use AntD for complex components (Table, Form) + lighter library for rest
3. Consider MUI (smaller) or shadcn/ui (much smaller)

What components do you absolutely need?
```

### Objection: "We need to decide today"
**Response:**
```
Quick decision framework:

**Need enterprise features NOW?** → Ant Design
**Want modern + customizable?** → shadcn/ui
**Just ship fast?** → Mantine or Chakra UI

All three are solid. You can't go wrong. Pick one and start building.
```

---

## ✅ Output Template

After recommendation, generate:

```markdown
## UI Library Selection

**Selected:** [Library Name]

**Why:**
- [Reason 1]
- [Reason 2]
- [Reason 3]

**Installation:**
```bash
npm install [packages]
```

**First Steps:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Resources:**
- Docs: [URL]
- Components: [URL]
- Examples: [URL]

**Next:** Proceed to Playbook 02 (Foundation) or 03 (Components)
```

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
