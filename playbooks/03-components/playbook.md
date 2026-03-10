# Playbook 03: Components

**Refactor/rebuild core component library using design tokens**

---

## 🎯 Goal

Create/refactor core UI components to use design tokens consistently:
- Button (all variants)
- Input (all states)
- Card (all variants)
- Table (with sorting, pagination)

**Output:** Reusable component library with consistent API and styling

---

## ⏱️ Estimated Time

- Small app: 2-4 hours
- Medium app: 4-8 hours
- Large app: 1-2 days

---

## 📋 Prerequisites

- [ ] Playbook 01 (Audit) complete
- [ ] Playbook 02 (Foundation) complete
- [ ] Design tokens working
- [ ] CSS variables accessible

---

## 🚀 Execution Steps

### Step 1: Component Priority Order

**Refactor in this order:**

1. **Button** — Most used, highest impact
2. **Input** — Forms everywhere
3. **Card** — Content containers
4. **Table** — Data display
5. **Additional** — Based on audit findings

---

### Step 2: Button Component

**Goal:** Single Button component with all variants.

**Variants to support:**
- Primary (filled, main actions)
- Secondary (outline, supporting actions)
- Tertiary (text only, low emphasis)
- Danger (destructive actions)

**Sizes:**
- sm (32px height)
- md (40px height)
- lg (48px height)

**States:**
- Default
- Hover
- Active
- Disabled
- Loading

**Actions:**
1. Audit current button usage (from Playbook 01)
2. Create Button component spec
3. Implement with tokens
4. Replace old button instances

**Reference:** `../../design-system/components/Button.md`

---

### Step 3: Input Component

**Goal:** Single Input component with all states.

**Variants to support:**
- Default text input
- Email input
- Password input (with toggle)
- Number input
- Search input (with icon)

**States:**
- Default
- Focus
- Error
- Disabled
- With value

**Features:**
- Label (optional)
- Helper text
- Error message
- Left icon
- Right action

**Actions:**
1. Audit current input usage
2. Create Input component spec
3. Implement with tokens
4. Replace old input instances

**Reference:** `../../design-system/components/Input.md`

---

### Step 4: Card Component

**Goal:** Single Card component for content containers.

**Variants to support:**
- Default (border + subtle shadow)
- Interactive (clickable, hover effects)
- Elevated (prominent shadow)
- Outline (border only)

**Structure:**
- Header (title, subtitle, actions)
- Content (flexible)
- Footer (actions, metadata)

**Actions:**
1. Audit current card usage
2. Create Card component spec
3. Implement with tokens
4. Replace old card instances

**Reference:** `../../design-system/components/Card.md`

---

### Step 5: Table Component

**Goal:** Flexible table for data display.

**Features:**
- Sortable columns
- Selectable rows
- Pagination
- Loading state
- Empty state

**Structure:**
- Toolbar (filters, actions)
- Header (sortable)
- Body (data rows)
- Footer (pagination)

**Actions:**
1. Audit current table usage
2. Create Table component spec
3. Implement with tokens
4. Replace old table instances

**Reference:** `../../design-system/components/Table.md`

---

### Step 6: Component Documentation

**For each component, create:**

```markdown
# Component Name

## Overview
- Purpose
- When to use
- When not to use

## Props API
- All props with types
- Required vs optional
- Default values

## Variants
- Visual examples
- Use cases

## Examples
- Basic usage
- Common patterns
- Edge cases

## Accessibility
- ARIA attributes
- Keyboard navigation
- Screen reader support

## Code
- Component implementation
- Styles (CSS/styled-components)
```

---

### Step 7: Component Migration

**For each old component instance:**

1. Find usage (grep/search)
2. Identify current props/styling
3. Map to new component API
4. Update code
5. Test functionality
6. Verify visual consistency

**Migration Script Template:**
```bash
# Find old button usage
grep -rn "className=.*btn" src/

# Find old Input usage
grep -rn "<input" src/ | grep -v "type=\"checkbox\""

# Find old Card usage
grep -rn "className=.*card" src/
```

---

## ✅ Validation Checklist

Before proceeding to Playbook 04:

### Button
- [ ] All variants render correctly
- [ ] All sizes work
- [ ] Loading state shows spinner
- [ ] Disabled state prevents interaction
- [ ] Focus styles visible
- [ ] Keyboard accessible
- [ ] Screen reader friendly

### Input
- [ ] All types work (text, email, password, number)
- [ ] Label associated correctly
- [ ] Error state displays properly
- [ ] Focus state visible
- [ ] Disabled state works
- [ ] Helper text shows
- [ ] Icons render correctly

### Card
- [ ] Header displays properly
- [ ] Content area flexible
- [ ] Footer actions work
- [ ] Interactive variant clickable
- [ ] Hover effects smooth
- [ ] Responsive on mobile

### Table
- [ ] Columns render correctly
- [ ] Data displays properly
- [ ] Sorting works
- [ ] Selection works
- [ ] Pagination works
- [ ] Loading state shows
- [ ] Empty state shows

---

## 📝 Output Files

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── Button.stories.tsx (if using Storybook)
│   ├── Input/
│   │   ├── Input.tsx
│   │   ├── Input.test.tsx
│   │   └── Input.stories.tsx
│   ├── Card/
│   │   ├── Card.tsx
│   │   ├── Card.Header.tsx
│   │   ├── Card.Content.tsx
│   │   ├── Card.Footer.tsx
│   │   └── Card.test.tsx
│   └── Table/
│       ├── Table.tsx
│       ├── Table.Header.tsx
│       ├── Table.Body.tsx
│       ├── Table.Row.tsx
│       ├── Table.Cell.tsx
│       └── Table.test.tsx
└── styles/
    ├── components/
    │   ├── Button.css
    │   ├── Input.css
    │   ├── Card.css
    │   └── Table.css
```

---

## 🆘 Common Issues

### Issue: Old styles conflicting
**Solution:** Remove old CSS classes, ensure only new tokens used

### Issue: Component API too different
**Solution:** Add prop aliases for backward compatibility

### Issue: Visual regression
**Solution:** Compare screenshots, adjust token values if needed

---

## 📚 Related Documents

- `prompts.md` — Prompts to execute this playbook
- `../../design-system/components/` — Component specifications
- `../04-ux-flows/playbook.md` — Next step
- `../../validation/checklist.md` — Validation criteria

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
