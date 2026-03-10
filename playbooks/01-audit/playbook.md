# Playbook 01: UI Audit

**Assess current UI state and identify improvement opportunities**

---

## 🎯 Goal

Create a comprehensive audit report of the current UI state, identifying:
- Visual inconsistencies
- Component variations
- UX pain points
- Priority fixes (P0/P1/P2)

**Output:** `audit-report.md` with findings and recommendations

---

## ⏱️ Estimated Time

- Small app (< 20 screens): 15-30 minutes
- Medium app (20-50 screens): 30-60 minutes
- Large app (> 50 screens): 1-2 hours

---

## 📋 Prerequisites

- [ ] Access to running application
- [ ] Access to source code
- [ ] Screenshot tool ready
- [ ] This playbook + prompts loaded

---

## 🚀 Execution Steps

### Step 1: Discover Application Structure

**Goal:** Understand the app's pages and routes.

**Actions:**
1. Find routing configuration
2. List all pages/screens
3. Note navigation structure

**Commands:**
```bash
# Find routes (React Router)
find src -name "*route*" -o -name "*router*"

# Find page components
find src -name "*Page*" -o -name "*Screen*"

# Check package.json for routing library
cat package.json | grep -i router
```

**Output:** List of all pages with file paths

---

### Step 2: Inventory Components

**Goal:** Catalog all UI components in use.

**Actions:**
1. Find component directory
2. List all components
3. Note styling approach (CSS, Tailwind, styled-components)

**Commands:**
```bash
# Find components
find src -name "*.tsx" -o -name "*.jsx" | xargs grep -l "function.*Component\|const.*=.*=>"

# Find styled components
find src -name "*.tsx" | xargs grep -l "styled\|css\|className"

# Check for component library
cat package.json | grep -E "@mui|@chakra|antd|@headlessui"
```

**Output:** Component inventory spreadsheet

---

### Step 3: Capture Visual State

**Goal:** Document current visual state with screenshots.

**Actions:**
1. Navigate to each page
2. Capture full-page screenshot
3. Note first impressions

**Template:**
```markdown
## Page: /dashboard

**Screenshot:** [dashboard.png]

**First Impressions:**
- Colors: [consistent/inconsistent]
- Spacing: [consistent/inconsistent]
- Typography: [consistent/inconsistent]

**Issues Noticed:**
1. ...
```

---

### Step 4: Analyze Design Tokens

**Goal:** Identify hardcoded values that should be tokens.

**Actions:**
1. Search for color literals
2. Search for spacing values
3. Search for font sizes

**Commands:**
```bash
# Find color literals
grep -rn "#[0-9a-fA-F]\{3,6\}" src/ | head -50

# Find hardcoded spacing (px values)
grep -rn "margin.*[0-9]px\|padding.*[0-9]px" src/ | head -50

# Find font sizes
grep -rn "font-size.*[0-9]px\|fontSize.*[0-9]" src/ | head -50
```

**Output:** List of values to tokenize

---

### Step 5: Identify Inconsistencies

**Goal:** Find variations of the same pattern.

**Look for:**
- Multiple button styles
- Multiple card styles
- Inconsistent form inputs
- Varying gap/margin values

**Commands:**
```bash
# Find button variations
grep -rn "className=.*btn\|<Button" src/ | head -30

# Find card variations
grep -rn "className=.*card\|<Card" src/ | head -30

# Find form inputs
grep -rn "<input\|<Input" src/ | head -30
```

---

### Step 6: Assess Accessibility

**Goal:** Identify accessibility issues.

**Check:**
- [ ] Alt text on images
- [ ] Labels on form inputs
- [ ] Button text is descriptive
- [ ] Color contrast (manual check)
- [ ] Keyboard navigation works

**Commands:**
```bash
# Find images without alt
grep -rn "<img" src/ | grep -v "alt="

# Find inputs without labels
grep -rn "<input" src/ | grep -v "aria-label"
```

---

### Step 7: Prioritize Findings

**Goal:** Create prioritized action list.

**Priority Levels:**
- **P0 (Critical):** Broken UX, accessibility blockers
- **P1 (High):** Major inconsistencies, confusing flows
- **P2 (Medium):** Visual polish, nice-to-have

**Template:**
```markdown
## Priority Findings

### P0 - Critical
| Issue | Location | Impact | Fix |
|-------|----------|--------|-----|
| Form submit button not visible | /login | Users can't login | Add primary button style |

### P1 - High
| Issue | Location | Impact | Fix |
|-------|----------|--------|-----|
| 5 different button styles | Throughout | Inconsistent UX | Standardize to 3 variants |

### P2 - Medium
| Issue | Location | Impact | Fix |
|-------|----------|--------|-----|
| Inconsistent card shadows | Dashboard | Looks unpolished | Use design tokens |
```

---

## 📝 Output: Audit Report

Create `audit-report.md` with:

```markdown
# UI Audit Report

**Date:** YYYY-MM-DD
**Auditor:** [Agent Name]
**Application:** [App Name]

## Executive Summary

Brief overview of current state and top 3 recommendations.

## Application Structure

### Pages/Routes
| Path | Component | Notes |
|------|-----------|-------|
| / | HomePage | Landing page |
| /dashboard | Dashboard | Main view |

### Components Found
- Total: N components
- Custom: N
- Library: N (which library?)

## Design Analysis

### Colors
- Primary colors found: N variations
- Should be: 1 primary, 1 secondary, semantic colors
- Recommendation: Consolidate to design tokens

### Typography
- Font families: N
- Font sizes: N variations
- Recommendation: Standardize to type scale

### Spacing
- Unique margin values: N
- Unique padding values: N
- Recommendation: Use spacing scale

## Component Analysis

### Buttons
- Variations found: N
- Issues: [list]
- Recommendation: [consolidate to 3 variants]

### Cards
- Variations found: N
- Issues: [list]
- Recommendation: [create standard Card component]

### Forms
- Input styles: N variations
- Issues: [list]
- Recommendation: [standardize Input component]

## Accessibility

### Issues Found
| Issue | Count | Severity |
|-------|-------|----------|
| Missing alt text | N | High |
| Missing labels | N | High |
| Low contrast | N | Medium |

## Priority Recommendations

### P0 - Critical (Do First)
1. ...

### P1 - High (Do Second)
1. ...

### P2 - Medium (Do Later)
1. ...

## Next Steps

1. Review audit report with team
2. Approve priority list
3. Proceed to Playbook 02: Foundation
```

---

## ✅ Validation Checklist

Before proceeding to Playbook 02:

- [ ] All pages documented
- [ ] Component inventory complete
- [ ] Screenshots captured
- [ ] Hardcoded values identified
- [ ] Inconsistencies documented
- [ ] Accessibility issues noted
- [ ] Priorities assigned (P0/P1/P2)
- [ ] Audit report saved

---

## 🆘 Common Issues

### Issue: Too many pages to audit
**Solution:** Sample representative pages (home, detail, form, list)

### Issue: Can't access running app
**Solution:** Audit code only, note assumptions

### Issue: Unclear what's "inconsistent"
**Solution:** Compare similar elements side-by-side

---

## 📚 Related Documents

- `prompts.md` — Prompts to execute this playbook
- `../02-foundation/playbook.md` — Next step after audit
- `../../validation/checklist.md` — Validation criteria

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
