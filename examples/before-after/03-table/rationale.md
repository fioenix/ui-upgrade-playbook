# Table Transformation Rationale

## Overview

This example shows the transformation from basic HTML tables to a feature-rich, accessible Table component with sorting, selection, pagination, loading, and empty states.

---

## Changes Made

### 1. Added Sorting

**Before:**
```tsx
<th>Name</th>
<th>Email</th>
// No sorting - data always in same order
```

**After:**
```tsx
<Table
  columns={[
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
  ]}
  sortable
  onSort={(column, direction) => {}}
/>
// Click headers to sort, arrows indicate direction
```

**Why:**
- **UX:** Users can organize data
- **Functionality:** Find top/bottom values quickly
- **Visual:** Sort indicators (↑↓⇅)

---

### 2. Added Row Selection

**Before:**
```tsx
// No selection - can't batch actions
<table>...</table>
```

**After:**
```tsx
<Table
  selectable
  onSelectionChange={(selected) => console.log(selected)}
/>
// Checkboxes for individual and bulk selection
```

**Why:**
- **Batch actions:** Delete multiple, export selected
- **UX:** Clear visual feedback on selected rows
- **Accessibility:** Proper checkbox labels

---

### 3. Added Pagination

**Before:**
```tsx
// All 1000 rows rendered at once
{data.map(row => <tr>{row}</tr>)}
// Page loads slowly...
```

**After:**
```tsx
<Table
  pagination={{
    page: 1,
    pageSize: 20,
    total: 1000,
    onChange: setPage,
  }}
/>
// Only 20 rows rendered, navigation controls
```

**Why:**
- **Performance:** Render only visible rows
- **UX:** Easier to navigate large datasets
- **Info:** Shows current range (1-20 of 1000)

---

### 4. Added Loading State

**Before:**
```tsx
// Table empty while loading - user confused
<table>{/* nothing */}</table>
```

**After:**
```tsx
<Table loading data={[]} />
// Shows skeleton rows
```

**Why:**
- **UX:** User knows data is loading
- **Professional:** No blank space
- **Perceived performance:** Skeleton feels faster

---

### 5. Added Empty State

**Before:**
```tsx
// Empty table - just headers
<table>
  <thead>...</thead>
  <tbody>{/* empty */}</tbody>
</table>
```

**After:**
```tsx
<Table data={[]} emptyMessage="No users found" />
// Shows icon, title, helpful message
```

**Why:**
- **Clarity:** User knows it's not broken
- **Guidance:** Message can suggest actions
- **Polish:** Professional appearance

---

### 6. Consistent Styling

**Before:**
```tsx
// Different styles per table
<th style={{ background: '#f5f5f5' }}>
<th style={{ background: '#3B82F6', color: 'white' }}>
```

**After:**
```tsx
// All use design tokens
<th className="table-header-cell">
// background: var(--color-background-secondary)
```

**Why:**
- **Visual consistency:** All tables look same
- **Maintainability:** Change token, all update
- **Professional:** Cohesive design

---

### 7. Accessibility

**Before:**
```tsx
// No accessibility
<table><tr><td>Data</td></tr></table>
```

**After:**
```tsx
<th aria-sort="ascending">Name</th>
<input type="checkbox" aria-label="Select row 1" />
```

**Why:**
- **WCAG:** Meets standards
- **Screen readers:** Proper announcements
- **Inclusive:** Works for all users

---

## Impact Summary

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Sorting | None | Built-in | ✅ Added |
| Selection | None | Built-in | ✅ Added |
| Pagination | None | Built-in | ✅ Added |
| Loading state | None | Skeleton | ✅ Added |
| Empty state | None | Helpful message | ✅ Added |
| Hardcoded styles | 20+ | 0 | 100% eliminated |
| Accessibility | Poor | Full support | ✅ Improved |
| Performance | All rows | Paginated | ✅ Optimized |

---

## Quality Bar

This transformation demonstrates:

1. **Features:** Sort, select, paginate built-in
2. **States:** Loading, empty, selected, hover
3. **Accessibility:** ARIA, labels, keyboard
4. **Performance:** Pagination, virtualization-ready
5. **API:** Clear columns + data structure
6. **Flexibility:** Custom render functions
7. **UX:** Helpful empty states, clear feedback

---

## Next Steps

After this transformation:

1. Replace all table instances
2. Add virtualization for huge datasets
3. Add column resizing
4. Add column visibility toggles
5. Add export functionality

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
