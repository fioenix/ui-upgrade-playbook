# Playbook 02.5: Layout Patterns

**Establish consistent spacing, hierarchy, and composition**

---

## 🎯 Goal

Ensure all pages follow consistent layout patterns for:
- Visual hierarchy
- Spacing
- Responsive behavior
- Common layouts (dashboard, form, table, detail)

**Output:** Consistent layouts across all pages

---

## ⏱️ Estimated Time

- 30-60 minutes

---

## 📋 Prerequisites

- [ ] Playbook 02 (Foundation) complete
- [ ] Design tokens working
- [ ] CSS variables accessible

---

## 🚀 Execution Steps

### Step 1: Review Layout Patterns

Read `patterns.md` and understand:
- Typography hierarchy
- Spacing scale
- Common layouts
- Responsive rules

---

### Step 2: Audit Current Layouts

**Goal:** Identify layout inconsistencies.

**Actions:**
1. Navigate through all pages
2. Note spacing variations
3. Identify hierarchy issues
4. Check responsive behavior

**Commands:**
```bash
# Find hardcoded spacing
grep -rn "margin.*[0-9]px\|padding.*[0-9]px" src/ | head -30

# Find font sizes
grep -rn "font-size.*[0-9]px" src/ | head -30
```

---

### Step 3: Apply Typography Hierarchy

**Goal:** Consistent heading sizes.

**Actions:**
1. Replace hardcoded font sizes with tokens
2. Ensure H1 → H2 → H3 hierarchy
3. Fix line heights

**Before:**
```tsx
<h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Title</h1>
<h2 style={{ fontSize: '22px' }}>Section</h2>
```

**After:**
```tsx
<h1 className="text-2xl font-bold">Title</h1>
<h2 className="text-xl font-semibold">Section</h2>
```

---

### Step 4: Apply Spacing Scale

**Goal:** Consistent spacing throughout.

**Actions:**
1. Replace hardcoded margins/padding with tokens
2. Use spacing rules (related vs unrelated)
3. Fix component gaps

**Before:**
```tsx
<div style={{ padding: '16px', marginTop: '24px' }}>
```

**After:**
```tsx
<div className="p-4 mt-6">
```

---

### Step 5: Apply Common Layouts

**Goal:** Use standard layout patterns.

**Actions:**
1. Dashboard pages → Dashboard layout
2. Forms → Centered form layout
3. Data pages → Table layout
4. Detail pages → Two-column layout

---

### Step 6: Test Responsive

**Goal:** Works on all screen sizes.

**Actions:**
1. Test at 320px (mobile)
2. Test at 768px (tablet)
3. Test at 1024px (desktop)
4. Fix any layout breaks

---

## ✅ Validation Checklist

- [ ] Typography uses defined scale
- [ ] Spacing uses token scale
- [ ] No hardcoded pixel values
- [ ] Headings follow hierarchy
- [ ] Related items have consistent spacing
- [ ] Responsive on all breakpoints
- [ ] Touch targets 44px+ minimum

---

## 📚 Related Documents

- `patterns.md` — Layout patterns reference
- `../../design-system/tokens.json` — Token values
- `../../design-system/guidelines.md` — Design principles

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
