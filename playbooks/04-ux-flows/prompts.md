# Playbook 04: UX Flows Prompts

**Copy-paste prompts for executing the UX Flows playbook**

---

## 📋 How to Use

1. Read `playbook.md` first to understand the steps
2. Execute prompts in order
3. Test flows in browser after implementation
4. Document patterns as you go

---

## Step 1: Map Current Navigation

### Prompt: Document Navigation Structure
```
Document the current navigation structure of this application.

Analyze:
1. Main navigation component(s)
2. Route structure
3. Active page indication
4. Mobile navigation (if exists)
5. Breadcrumbs (if exists)

Output:
## Current Navigation

### Structure
- Type: [Sidebar/Top nav/Hybrid]
- Location: [file paths]
- Items: [list with routes]

### Active State
- How indicated: [highlight, underline, color]
- Works: Yes/No

### Mobile
- Exists: Yes/No
- Pattern: [description]

### Issues
- [list inconsistencies found]
```

---

## Step 2: Standardize Navigation

### Prompt: Create Navigation Spec
```
Create a navigation component specification for this admin dashboard.

Requirements:
1. Sidebar navigation with sections
2. Header with user menu
3. Breadcrumbs for deep pages
4. Mobile responsive (hamburger menu)
5. Active state indication
6. Keyboard accessible

Design tokens to use:
- Colors: var(--color-background-secondary), var(--color-primary-600)
- Spacing: var(--spacing-4), var(--spacing-6)
- Typography: var(--font-size-base)

Output: Navigation component spec with:
- Structure diagram
- Component tree
- Props for each component
- Interaction patterns
```

### Prompt: Implement Sidebar Navigation
```
Create a Sidebar navigation component.

Features:
1. Logo area
2. Navigation sections with headers
3. Nav items with icon + label
4. Active state (background + indicator)
5. Collapsible on mobile
6. Keyboard navigation

Props:
- items: NavItem[] (label, icon, route, children?)
- activeRoute: string
- collapsed: boolean
- onNavigate: (route) => void

Output: Complete Sidebar.tsx with styles using design tokens
```

### Prompt: Implement Breadcrumbs
```
Create a Breadcrumbs component.

Features:
1. Shows current page hierarchy
2. Clickable parent items
3. Current page (not clickable, different style)
4. Responsive (collapse middle items on mobile)

Props:
- items: BreadcrumbItem[] (label, route?)
- homeLabel: string (default: "Home")
- homeRoute: string (default: "/")

Output: Complete Breadcrumbs.tsx with styles
```

---

## Step 3: Standardize Common Flows

### Prompt: Create Flow - Create Item
```
Create a "Create Item" flow pattern.

Pattern:
1. User clicks "Create" button
2. Modal opens with form
3. User fills and submits
4. Loading → Success/Error

Components needed:
- Trigger button
- Modal/Dialog
- Form with Inputs
- Loading state
- Toast notification

Output:
1. Flow diagram
2. Component code (Modal, Form wrapper)
3. Hook for create action (useCreate)
4. Example usage
```

### Prompt: Create Flow - Edit Item
```
Create an "Edit Item" flow pattern.

Pattern:
1. User clicks "Edit" on item
2. Modal opens with pre-filled form
3. User modifies and submits
4. Loading → Success/Error

Differences from Create:
- Form pre-filled with item data
- Title: "Edit [Item Name]"
- May have "Delete" option

Output:
1. Flow diagram
2. Component code (reuse Modal, Form)
3. Hook for edit action (useUpdate)
4. Example usage
```

### Prompt: Create Flow - Delete Item
```
Create a "Delete Item" confirmation flow.

Pattern:
1. User clicks "Delete"
2. Confirmation dialog:
   - Title: "Delete [item name]?"
   - Warning: "This cannot be undone"
   - Actions: Cancel, Delete (danger)
3. On confirm: Loading → Success/Error

Components needed:
- ConfirmDialog
- Danger button styling

Props for ConfirmDialog:
- isOpen: boolean
- title: string
- message: string
- confirmLabel: string (default: "Delete")
- cancelLabel: string (default: "Cancel")
- onConfirm: () => void
- onCancel: () => void
- isLoading: boolean

Output: Complete ConfirmDialog.tsx with styles
```

### Prompt: Create Flow - View Details
```
Create a "View Details" flow pattern.

Options:
1. Navigate to detail page
2. Open slide-over panel
3. Open modal

Recommendation for admin dashboard: [based on complexity]

Output:
1. Flow diagram
2. Component code (Detail view or SlideOver)
3. Navigation pattern
4. Example usage
```

---

## Step 4: Standardize Feedback

### Prompt: Create Toast Notification
```
Create a Toast notification system.

Types:
- success (green)
- error (red)
- warning (yellow)
- info (blue)

Features:
1. Auto-dismiss (configurable)
2. Position (top-right)
3. Action button (optional)
4. Close button
5. Queue multiple toasts
6. Accessible (announced to screen readers)

Hook API:
```tsx
const toast = useToast();
toast.success("Saved successfully");
toast.error("Failed to save", { action: "Retry", onAction: retry });
```

Output: Complete Toast.tsx, ToastContainer.tsx, useToast.ts hook
```

### Prompt: Create Loading States
```
Create loading state components.

Types:
1. PageLoader — Full screen, initial load
2. ButtonLoader — Spinner inside button
3. Skeleton — Content placeholder
4. InlineSpinner — For inline loading

Design tokens:
- Colors: var(--color-primary-600)
- Animation: var(--transition-normal)

Output: PageLoader.tsx, ButtonLoader.tsx, Skeleton.tsx, InlineSpinner.tsx
```

### Prompt: Create Error Handling
```
Create error handling patterns.

Types:
1. InlineError — Form field errors
2. ToastError — Action errors
3. PageError — Full page errors (API down)

Error message format:
- What went wrong
- How to fix
- Retry option

Output:
1. Error components
2. Error boundary component
3. Error message formatter utility
4. Example usage
```

---

## Step 5: Create Empty States

### Prompt: Audit Empty States
```
Find all empty states in this application.

Search for:
1. Empty list checks (length === 0)
2. No data conditions
3. Empty search results

For each, note:
- File location
- Current display
- Has helpful message?
- Has action button?

Output table:
| File | Current | Has Message | Has Action | Should Be |
|------|---------|-------------|------------|-----------|
| src/Users.tsx | "No users" | No | No | EmptyState component |
```

### Prompt: Create EmptyState Component
```
Create an EmptyState component.

Structure:
1. Icon/Illustration
2. Title (what's empty)
3. Description (why/how to fix)
4. Primary action
5. Secondary action (optional)

Props:
- icon: ReactNode
- title: string
- description: string
- primaryAction: { label, onClick }
- secondaryAction: { label, onClick }

Design tokens:
- Colors: var(--color-neutral-500)
- Spacing: var(--spacing-6), var(--spacing-8)
- Typography: var(--font-size-lg)

Output: Complete EmptyState.tsx with styles
```

### Prompt: Generate Empty State Content
```
Generate empty state content for these scenarios:

Scenarios:
1. No notifications
2. No search results
3. No dashboard data
4. No team members
5. No projects

For each, provide:
- Icon suggestion
- Title (clear, friendly)
- Description (helpful)
- Primary action
- Secondary action

Output table:
| Scenario | Icon | Title | Description | Primary | Secondary |
|----------|------|-------|-------------|---------|-----------|
| No notifications | 📭 | No notifications yet | ... | ... | ... |
```

---

## Step 6: Mobile/Responsive

### Prompt: Audit Mobile Experience
```
Audit the mobile experience of this application.

Test at breakpoints:
- 320px (small mobile)
- 375px (iPhone)
- 768px (tablet)
- 1024px (desktop)

For each breakpoint, check:
1. Navigation works
2. Tables readable
3. Forms usable
4. Touch targets 44px+
5. No horizontal scroll
6. Text readable

Output table:
| Page | 320px | 375px | 768px | 1024px | Issues |
|------|-------|-------|-------|--------|--------|
| /dashboard | ❌ | ⚠️ | ✅ | ✅ | Nav broken at 320px |
```

### Prompt: Fix Mobile Navigation
```
Fix navigation for mobile screens.

Current issue: [from audit]

Solution:
1. Hamburger menu button
2. Slide-out sidebar
3. Overlay backdrop
4. Close on route change

Implementation:
- Media query: @media (max-width: 768px)
- State: isOpen
- Animation: slide from left

Output: Updated Sidebar.tsx with mobile support
```

### Prompt: Fix Mobile Tables
```
Fix table display for mobile screens.

Options:
1. Horizontal scroll with sticky first column
2. Card view (each row becomes card)
3. Hide less important columns

Recommendation: [based on table content]

Implementation:
- Media query: @media (max-width: 768px)
- Alternative layout

Output: Updated Table.tsx with mobile support
```

---

## Step 7: Documentation

### Prompt: Generate UX Patterns Documentation
```
Generate documentation for UX patterns.

Structure:
1. Navigation patterns
2. Common flows (Create, Edit, Delete, View)
3. Feedback patterns (Loading, Success, Error)
4. Empty states
5. Responsive behavior

For each pattern:
- When to use
- Components involved
- Code example
- Do's and Don'ts

Output: Markdown documentation for docs/ux-patterns.md
```

---

## 📚 Related Documents

- `playbook.md` — Full playbook with steps
- `../../design-system/guidelines.md` — Layout patterns
- `../../validation/checklist.md` — Validation criteria
- `../../examples/before-after/` — Example transformations

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
