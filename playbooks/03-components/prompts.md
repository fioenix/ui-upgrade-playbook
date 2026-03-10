# Playbook 03: Components Prompts

**Copy-paste prompts for executing the Components playbook**

---

## 📋 How to Use

1. Read `playbook.md` first to understand the steps
2. Execute prompts in order (Button → Input → Card → Table)
3. Test each component before moving to next
4. Document as you go

---

## Step 2: Button Component

### Prompt: Audit Button Usage
```
Audit all Button usage in this codebase.

From Playbook 01 audit, we found:
[Paste button audit findings]

Search for additional:
1. <Button> component usage
2. <button> elements
3. Elements with button-like className
4. IconButton usage

For each usage, note:
- File location
- Current variant/style
- Props used
- Context (form, card, table, etc.)

Output table:
| File | Line | Current | Should Be | Notes |
|------|------|---------|-----------|-------|
| src/Login.tsx | 45 | className="btn-primary" | Button variant="primary" | Form submit |
| src/Dashboard.tsx | 23 | <button> | Button | Native button |

Summary:
- Total button instances: N
- Using custom Button: N
- Using native button: N
- Unique styles found: N
```

### Prompt: Create Button Component
```
Create a complete Button component using design tokens.

Requirements:
1. Variants: primary, secondary, tertiary, danger
2. Sizes: sm, md, lg
3. States: default, hover, active, disabled, loading
4. Props: children, variant, size, disabled, loading, onClick, type, icon, iconPosition, fullWidth
5. Accessibility: proper button element, focus styles, aria attributes
6. TypeScript types

Styling approach: [CSS modules / Tailwind / styled-components - based on project]

Use design tokens:
- Colors: var(--color-primary-600), etc.
- Spacing: var(--spacing-2), var(--spacing-4)
- Typography: var(--font-size-base), var(--font-weight-medium)
- Radius: var(--radius-md)
- Transition: var(--transition-fast)

Output: Complete Button.tsx with:
- Component implementation
- TypeScript interface
- CSS styles
- Default props
```

### Prompt: Create Button Tests
```
Create test cases for the Button component.

Test scenarios:
1. Renders with correct text
2. onClick fires on click
3. Disabled button not clickable
4. Loading state shows spinner
5. Keyboard navigation (Enter, Space)
6. Focus styles visible
7. All variants render
8. All sizes render
9. Icon positioning works
10. Full width works

Output: Complete Button.test.tsx with:
- Render tests
- Interaction tests
- Accessibility tests
- Visual tests (if using snapshot)
```

### Prompt: Migrate Button Usage
```
Create a migration plan for all Button instances.

From audit:
[Paste button audit table]

For each instance:
1. Current code
2. New code with Button component
3. Props mapping
4. Any gotchas

Output table:
| File | Old Code | New Code | Notes |
|------|----------|----------|-------|
| src/Login.tsx:45 | <button className="btn-primary"> | <Button variant="primary" type="submit"> | Form submit |

Also provide:
- sed/regex commands for bulk replacements (if safe)
- Manual changes needed
- Files to review after migration
```

---

## Step 3: Input Component

### Prompt: Audit Input Usage
```
Audit all Input usage in this codebase.

Search for:
1. <input> elements
2. <Input> component usage
3. Form field patterns

For each usage, note:
- File location
- Input type (text, email, password, etc.)
- Current styling
- Has label?
- Has error handling?
- Context (form, search, filter)

Output table:
| File | Line | Type | Has Label | Has Error | Should Be |
|------|------|------|-----------|-----------|-----------|
| src/Login.tsx | 34 | email | No | No | Input type="email" label="Email" |

Summary:
- Total input instances: N
- Missing labels: N
- Missing error handling: N
```

### Prompt: Create Input Component
```
Create a complete Input component using design tokens.

Requirements:
1. Types: text, email, password, number, tel, url, search
2. Sizes: sm, md, lg
3. States: default, focus, error, disabled
4. Features: label, helperText, error, icon (left), rightAction
5. Props: label, value, onChange, placeholder, type, disabled, error, helperText, icon, rightAction, required, ariaLabel
6. Accessibility: label association, aria attributes, focus styles
7. TypeScript types

Styling approach: [based on project]

Use design tokens for:
- Border colors
- Focus ring
- Typography
- Spacing
- Radius

Output: Complete Input.tsx with:
- Component implementation
- TypeScript interface
- CSS styles
- Default props
- Password toggle (if type="password")
```

### Prompt: Create Input Tests
```
Create test cases for the Input component.

Test scenarios:
1. Renders with label
2. Value updates on change
3. onChange callback fires
4. onFocus/onBlur callbacks
5. Error state displays
6. Disabled state prevents input
7. Required validation
8. Password toggle works
9. Icon displays correctly
10. Right action works
11. Accessibility (label, aria)

Output: Complete Input.test.tsx
```

---

## Step 4: Card Component

### Prompt: Audit Card Usage
```
Audit all Card-like containers in this codebase.

Search for:
1. <Card> component usage
2. Divs with card styling (border, shadow, padding)
3. Panel, container, box patterns

For each usage, note:
- File location
- Current structure
- Has header?
- Has footer?
- Interactive?

Output table:
| File | Current | Has Header | Has Footer | Interactive |
|------|---------|------------|------------|-------------|
| src/Dashboard.tsx:12 | div.card | Yes | No | No |

Summary:
- Total card instances: N
- Using Card component: N
- Using custom divs: N
```

### Prompt: Create Card Component
```
Create a complete Card component with sub-components.

Structure:
- Card (container)
- Card.Header (title, subtitle, action)
- Card.Content (flexible content area)
- Card.Footer (actions, metadata)

Variants:
- default (border + subtle shadow)
- interactive (clickable, hover)
- elevated (prominent shadow)
- outline (border only)

Sizes: sm, md, lg, full

Props:
- variant, size, interactive, onClick, selected, children
- title, subtitle, headerAction (for Header)

Accessibility:
- Role for interactive cards
- Keyboard navigation
- Focus styles

Output: Complete Card.tsx, Card.Header.tsx, Card.Content.tsx, Card.Footer.tsx with styles
```

### Prompt: Create Card Tests
```
Create test cases for the Card component.

Test scenarios:
1. Renders with title
2. Header displays correctly
3. Content area flexible
4. Footer actions work
5. Interactive variant clickable
6. Keyboard navigation
7. Focus styles
8. Selected state
9. All variants render
10. Responsive behavior

Output: Complete Card.test.tsx
```

---

## Step 5: Table Component

### Prompt: Audit Table Usage
```
Audit all Table usage in this codebase.

Search for:
1. <table> elements
2. <Table> component usage
3. Data grid patterns
4. List views that should be tables

For each usage, note:
- File location
- Columns count
- Has sorting?
- Has pagination?
- Has selection?
- Data source

Output table:
| File | Columns | Sort | Pagination | Selection | Should Be |
|------|---------|------|------------|-----------|-----------|
| src/Users.tsx | 5 | No | No | No | Table with sort + pagination |

Summary:
- Total table instances: N
- Need sorting: N
- Need pagination: N
- Need selection: N
```

### Prompt: Create Table Component
```
Create a complete Table component system.

Structure:
- Table (container with columns, data props)
- Table.Header (sortable columns)
- Table.Body (data rows)
- Table.Row (individual row)
- Table.Cell (cell content)
- Table.Toolbar (filters, actions)
- Table.Pagination (footer)

Features:
- Sortable columns
- Selectable rows (checkbox)
- Row click handling
- Loading state (skeleton)
- Empty state
- Pagination

Props:
- columns: Column[] (key, title, width, align, sortable, render)
- data: any[]
- sortable: boolean
- selectable: boolean
- pagination: PaginationConfig
- loading: boolean
- emptyMessage: string
- onSort, onSelectionChange, onRowClick

Output: Complete Table.tsx and sub-components with styles
```

### Prompt: Create Table Tests
```
Create test cases for the Table component.

Test scenarios:
1. Renders all columns
2. Renders all rows
3. Custom column render functions work
4. Sorting works (click header)
5. Selection works (checkboxes)
6. Pagination works
7. Loading state shows skeleton
8. Empty state shows message
9. Row click works
10. Accessibility (table structure, aria)

Output: Complete Table.test.tsx
```

---

## Step 6: Documentation

### Prompt: Generate Component Documentation
```
Generate documentation for [Component Name].

Structure:
1. Overview
   - Purpose
   - When to use
   - When not to use

2. Props API
   - Table with all props
   - Type, Required, Default, Description

3. Variants
   - Visual description
   - Use case for each

4. Examples
   - Basic usage
   - Common patterns
   - Edge cases

5. Accessibility
   - ARIA attributes
   - Keyboard navigation
   - Screen reader notes

6. Code Examples
   - Import statement
   - Basic example
   - Advanced example

Output: Markdown documentation for docs/components/[Component].md
```

---

## Step 7: Migration

### Prompt: Create Migration Script
```
Create a migration script for [Component Name].

Current instances:
[Paste audit table]

For safe automated migration:
1. Identify patterns that can be regex-replaced
2. Identify patterns needing manual review
3. Create sed/replace commands
4. Create review checklist

Output:
- Automated migration commands
- Manual migration list
- Post-migration review steps
- Rollback plan if needed
```

---

## 📚 Related Documents

- `playbook.md` — Full playbook with steps
- `../../design-system/components/` — Component specifications
- `../04-ux-flows/playbook.md` — Next step
- `../../validation/checklist.md` — Validation criteria

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
