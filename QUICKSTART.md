# Quick Start Guide

**Get started with UI Upgrade Playbook in 5 minutes**

---

## 🎯 What This Framework Does

Helps AI agents systematically upgrade React dashboard UIs from "xấu" (ugly/inconsistent) to professional, consistent, and usable.

---

## 📦 What You Get

```
ui-upgrade-playbook/
├── 5 Playbooks (Audit → Select → Foundation → Components → UX)
├── Design tokens (colors, typography, spacing)
├── Component specs (Button, Input, Card, Table)
├── Prompts for each step (copy-paste ready)
└── Validation checklists
```

---

## 🚀 Quick Start (Agent Workflow)

### Step 1: Install Required Skills (2 min)

Ensure these skills are available:
- `frontend-design`
- `ui-ux-pro-max`
- `vercel-react-best-practices`
- `web-design-guidelines`

See `skills/required-skills.md` for installation.

**First-time setup:**
1. Read `AGENTS.md` — Understand agent protocol
2. Verify skills are ready
3. Start with Playbook 01

---

### Step 2: Run Playbook 01 - Audit (15-30 min)

```bash
# 1. Read playbook
cat playbooks/01-audit/playbook.md

# 2. Execute prompts
cat playbooks/01-audit/prompts.md

# 3. Generate audit report
# Output: audit-report.md
```

**Key prompts:**
- "Find all routes/pages"
- "Inventory all components"
- "Analyze color usage"
- "Identify inconsistencies"

---

### Step 2.5: Select Design System (Optional, 15-30 min)

**Decision:** Use existing UI library or build custom?

```bash
# Read selection guide
cat playbooks/02-foundation/02-select-design-system.md

# Execute selection prompts
cat playbooks/02-foundation/02-select-design-system-prompts.md
```

**Top Library Picks:**
| Use Case | Recommended |
|----------|-------------|
| Enterprise SaaS | Ant Design, MUI |
| Startup MVP | shadcn/ui, Mantine |
| Custom Brand | shadcn/ui, Radix UI |
| Internal Tools | Chakra UI, Mantine |
| Design-Forward | NextUI, shadcn/ui |
| Tailwind Shop | shadcn/ui, DaisyUI |

**Key prompts:**
- "Ask use case questions"
- "Generate library recommendation"
- "Setup guide for selected library"

---

### Step 3: Run Playbook 02 - Foundation (30-60 min)

```bash
# 1. Create design tokens
# 2. Generate CSS variables
# 3. Setup global styles
# Output: src/design/tokens.json, src/styles/*.css
```

**Key prompts:**
- "Generate design tokens from audit"
- "Convert tokens to CSS variables"
- "Create global styles"

---

### Step 4: Run Playbook 03 - Components (2-4 hours)

```bash
# 1. Create Button component
# 2. Create Input component
# 3. Create Card component
# 4. Create Table component
# Output: src/components/Button/, Input/, Card/, Table/
```

**Key prompts:**
- "Create Button component with variants"
- "Create Input component with states"
- "Migrate old button instances"

---

### Step 5: Run Playbook 04 - UX Flows (1-2 hours)

```bash
# 1. Standardize navigation
# 2. Create common flows (create, edit, delete)
# 3. Add feedback patterns (loading, success, error)
# 4. Fix mobile responsive
# Output: src/components/Navigation/, Feedback/
```

**Key prompts:**
- "Create navigation component spec"
- "Create toast notification system"
- "Fix mobile navigation"

---

## ✅ Validation

After each playbook, run validation:

```bash
cat validation/checklist.md
# Check all items for current playbook
# Must pass before proceeding
```

---

## 📚 Reference Documents

| Document | When to Use |
|----------|-------------|
| `AGENTS.md` | First time setup, agent protocol |
| `skills/required-skills.md` | Before starting |
| `design-system/tokens.json` | Reference token values |
| `design-system/guidelines.md` | Design decisions |
| `design-system/components/*.md` | Component specs |
| `validation/checklist.md` | After each playbook |
| `examples/before-after/` | Quality reference |

---

## 🎯 Typical Timeline

| App Size | Total Time |
|----------|------------|
| Small (< 20 screens) | 4-6 hours |
| Medium (20-50 screens) | 8-12 hours |
| Large (> 50 screens) | 2-3 days |

---

## 🆘 Need Help?

1. Re-read the playbook
2. Check validation checklist
3. Review examples/before-after/
4. Ask human for clarification

---

## 📝 Output Summary

After completing all playbooks:

```
src/
├── design/
│   └── tokens.json          # Design token source
├── styles/
│   ├── variables.css        # CSS custom properties
│   ├── global.css           # Base styles
│   └── utilities.css        # Utility classes
├── components/
│   ├── Button/              # Button component
│   ├── Input/               # Input component
│   ├── Card/                # Card component
│   ├── Table/               # Table component
│   ├── Navigation/          # Sidebar, Header, Breadcrumbs
│   └── Feedback/            # Toast, Loading, EmptyState
└── docs/
    ├── components/          # Component documentation
    └── ux-patterns.md       # UX patterns guide
```

---

## 🎉 Success Criteria

You're done when:
- ✅ All validation checklists pass
- ✅ No hardcoded values remain
- ✅ Components used consistently
- ✅ Navigation works on mobile
- ✅ Team can use components without confusion

---

**Ready? Start with `playbooks/01-audit/playbook.md`**

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
