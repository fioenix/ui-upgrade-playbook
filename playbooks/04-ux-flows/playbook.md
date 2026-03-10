# Playbook 04: UX Flows

**Fix navigation patterns and user flows for consistency**

---

## 🎯 Goal

Improve user experience by standardizing:
- Navigation structure
- Common user flows (login, create, edit, delete)
- Feedback patterns (loading, success, error)
- Empty states
- Mobile/responsive behavior

**Output:** Consistent, intuitive UX throughout the application

---

## ⏱️ Estimated Time

- Small app: 1-2 hours
- Medium app: 2-4 hours
- Large app: 4-8 hours

---

## 📋 Prerequisites

- [ ] Playbook 01 (Audit) complete
- [ ] Playbook 02 (Foundation) complete
- [ ] Playbook 03 (Components) complete (or in progress)
- [ ] Core components working

---

## 🚀 Execution Steps

### Step 1: Map Current Navigation

**Goal:** Understand current navigation structure.

**Actions:**
1. Document current navigation hierarchy
2. Identify navigation patterns (sidebar, top nav, breadcrumbs)
3. Note inconsistencies

**Output:**
```markdown
## Current Navigation

### Primary Navigation
- Location: [Sidebar/Top bar]
- Items: [list]
- Active state: [how indicated]

### Secondary Navigation
- Location: [Submenu/Tabs]
- Items: [list]

### Breadcrumbs
- Present: Yes/No
- Format: [description]

### Issues Found
- [list inconsistencies]
```

---

### Step 2: Standardize Navigation Pattern

**Goal:** Consistent navigation across all pages.

**Decision Points:**

#### Navigation Type
- **Sidebar** — Best for admin dashboards with many sections
- **Top Nav** — Best for simple apps, more content space
- **Hybrid** — Top nav + sidebar for complex apps

**Recommendation for Admin Dashboards:**
```
┌─────────────────────────────────────┐
│ Logo              User Menu         │ ← Header (64px)
├─────────┬───────────────────────────┤
│ Section │  Page Content             │
│ Nav     │  - Breadcrumbs            │
│         │  - Page Title             │
│         │  - Content                │
└─────────┴───────────────────────────┘
```

**Actions:**
1. Choose navigation pattern
2. Create navigation component spec
3. Implement/update navigation
4. Apply to all pages

---

### Step 3: Standardize Common Flows

**Goal:** Consistent patterns for common actions.

#### Flow 1: Create New Item

**Pattern:**
```
1. User clicks "Create" button
2. Modal/Slide-over/Page opens with form
3. User fills form
4. User clicks "Save"
5. Loading state shown
6. Success: Close + toast notification + refresh list
7. Error: Show inline errors, keep form open
```

**Components:**
- Trigger: Button (primary)
- Form: Input components
- Feedback: Loading spinner, toast
- Actions: Save (primary), Cancel (secondary)

---

#### Flow 2: Edit Existing Item

**Pattern:**
```
1. User clicks "Edit" on item
2. Modal/Slide-over opens with pre-filled form
3. User modifies fields
4. User clicks "Save"
5. Loading → Success/Error (same as create)
```

**Differences from Create:**
- Form pre-filled
- Title says "Edit [Item]"
- May have "Delete" option

---

#### Flow 3: Delete Item

**Pattern:**
```
1. User clicks "Delete" on item
2. Confirmation dialog opens
   - Title: "Delete [item name]?"
   - Warning: "This action cannot be undone"
   - Actions: Cancel (secondary), Delete (danger)
3. User confirms
4. Loading → Success (remove from list) / Error (keep item)
```

**Requirements:**
- Always confirm destructive actions
- Clear warning message
- Danger button for delete

---

#### Flow 4: View Details

**Pattern:**
```
1. User clicks item row/card
2. Navigate to detail page OR open slide-over
3. Show full information
4. Actions available: Edit, Delete, [contextual]
5. Back navigation clear
```

---

### Step 4: Standardize Feedback Patterns

**Goal:** Consistent feedback for all user actions.

#### Loading States

**Types:**
| Type | When | Component |
|------|------|-----------|
| Page load | Initial load | Full screen spinner |
| Form submit | Saving data | Button spinner + disabled |
| Data refresh | Pull to refresh | Inline spinner |
| Navigation | Route change | Progress bar (top) |

**Rules:**
- Always show loading for async actions > 200ms
- Disable form during submit
- Show what's loading (skeleton for content)

---

#### Success Feedback

**Types:**
| Type | When | Component |
|------|------|-----------|
| Toast | Form submit, action complete | Toast notification |
| Inline | Item created, shows in list | Highlight/new badge |
| Redirect | After create, go to detail | Navigate + toast |

**Toast Guidelines:**
- Success: Green, auto-dismiss 3s
- Position: Top-right or top-center
- Action: Optional (Undo, View)

---

#### Error Feedback

**Types:**
| Type | When | Component |
|------|------|-----------|
| Inline | Form validation | Red border + message |
| Toast | Action failed | Red toast |
| Page | API down, critical | Full page error |

**Error Message Format:**
```
[What went wrong]
[How to fix it]
[Retry option if applicable]
```

**Example:**
```
❌ Could not save changes
The server returned an error. Please check your connection and try again.
[Retry] [Cancel]
```

---

### Step 5: Create Empty States

**Goal:** Helpful states when no data exists.

**Pattern:**
```
┌─────────────────────────────┐
│      [Illustration]         │
│                             │
│    [Title - What's empty]   │
│    [Description - Why]      │
│                             │
│    [Primary Action]         │
│    [Secondary Action]       │
└─────────────────────────────┘
```

**Examples:**

#### Empty List
```
📭
No notifications yet
When you have notifications, they'll appear here.
[Dismiss All] [Go to Settings]
```

#### Empty Search
```
🔍
No results found
Try adjusting your search or filters.
[Clear Filters]
```

#### Empty Dashboard
```
📊
No data available
Connect a data source to see your dashboard.
[Connect Data Source] [Learn More]
```

**Actions:**
1. Audit all empty states
2. Create consistent pattern
3. Add illustrations/icons
4. Include helpful actions

---

### Step 6: Mobile/Responsive Behavior

**Goal:** App works on all screen sizes.

**Breakpoints:**
```
Mobile:  < 768px
Tablet:  768px - 1024px
Desktop: > 1024px
```

**Adaptation Rules:**

#### Navigation
- Mobile: Hamburger menu, slide-out sidebar
- Tablet: Collapsed sidebar or top nav
- Desktop: Full sidebar

#### Tables
- Mobile: Card view or horizontal scroll
- Tablet: Condensed columns
- Desktop: Full table

#### Forms
- Mobile: Single column, full-width inputs
- Tablet: 2 columns where appropriate
- Desktop: Multi-column if logical

#### Actions
- Mobile: Primary action fixed at bottom
- Tablet/Desktop: Actions in content

**Actions:**
1. Test each page on mobile
2. Fix navigation for mobile
3. Adapt tables for mobile
4. Ensure touch targets 44px+

---

## ✅ Validation Checklist

### Navigation
- [ ] Navigation consistent across all pages
- [ ] Active page clearly indicated
- [ ] Breadcrumbs present (if deep hierarchy)
- [ ] Mobile navigation works
- [ ] Keyboard navigation works

### Common Flows
- [ ] Create flow works end-to-end
- [ ] Edit flow pre-fills correctly
- [ ] Delete confirmation shows
- [ ] View details accessible
- [ ] Back navigation clear

### Feedback
- [ ] Loading states on all async actions
- [ ] Success toasts show
- [ ] Error messages helpful
- [ ] Inline validation works
- [ ] Network errors handled

### Empty States
- [ ] All empty states have content
- [ ] Helpful actions provided
- [ ] Consistent visual style
- [ ] Illustrations/icons used

### Responsive
- [ ] Works on mobile (320px+)
- [ ] Works on tablet (768px+)
- [ ] Works on desktop (1024px+)
- [ ] Touch targets 44px+ minimum
- [ ] No horizontal scroll (except tables)

---

## 📝 Output Files

```
src/
├── components/
│   ├── Navigation/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── Breadcrumbs.tsx
│   ├── Feedback/
│   │   ├── Toast.tsx
│   │   ├── Loading.tsx
│   │   └── EmptyState.tsx
│   └── ConfirmDialog/
│       └── ConfirmDialog.tsx
├── hooks/
│   ├── useToast.ts
│   └── useLoading.ts
└── styles/
    └── flows.css
```

---

## 🆘 Common Issues

### Issue: Navigation breaks on mobile
**Solution:** Use hamburger menu, slide-out pattern

### Issue: Tables unreadable on mobile
**Solution:** Card view or horizontal scroll with sticky first column

### Issue: Forms too wide on mobile
**Solution:** Single column, full-width inputs

---

## 📚 Related Documents

- `prompts.md` — Prompts to execute this playbook
- `../../design-system/guidelines.md` — Layout patterns
- `../../validation/checklist.md` — Validation criteria
- `../../examples/before-after/` — Example transformations

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
