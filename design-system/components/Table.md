# Table Component

**Display tabular data efficiently**

---

## 📐 Anatomy

```
┌─────────────────────────────────────────────────────────┐
│ [Filters/Actions]                          [Pagination] │
├─────────────────────────────────────────────────────────┤
│ ┌───┬─────────────┬──────────────┬──────────┬────────┐ │
│ │ ☐ │ Name ↑      │ Email        │ Status   │ Action │ │ ← Header
│ ├───┼─────────────┼──────────────┼──────────┼────────┤ │
│ │ ☐ │ John Doe    │ john@ex.com  │ ● Active │ [⋮]    │ │ ← Row
│ │ ☐ │ Jane Smith  │ jane@ex.com  │ ○ Offline│ [⋮]    │ │
│ │ ☐ │ Bob Wilson  │ bob@ex.com   │ ● Active │ [⋮]    │ │
│ └───┴─────────────┴──────────────┴──────────┴────────┘ │
│                                          Page 1 of 10   │
└─────────────────────────────────────────────────────────┘
```

**Parts:**
- Toolbar (filters, actions, search)
- Header row (sortable columns)
- Body rows (data)
- Pagination (footer)

---

## 🎨 Variants

### Default
**Use:** Standard data display

```tsx
<Table columns={columns} data={data} />
```

---

### Selectable
**Use:** Bulk actions

```tsx
<Table 
  columns={columns} 
  data={data}
  selectable
  onSelectionChange={handleSelection}
/>
```

---

### Sortable
**Use:** Column sorting

```tsx
<Table 
  columns={columns} 
  data={data}
  sortable
  onSort={handleSort}
/>
```

---

### With Pagination
**Use:** Large datasets

```tsx
<Table 
  columns={columns} 
  data={data}
  pagination={{
    page: currentPage,
    pageSize: 20,
    total: totalItems
  }}
/>
```

---

## 📏 Sizes

| Size | Row Height | Padding | Font Size |
|------|------------|---------|-----------|
| sm | 40px | 8px 12px | 0.875rem (sm) |
| md | 48px | 12px 16px | 1rem (base) |
| lg | 56px | 16px 20px | 1.125rem (lg) |

---

## 🎯 States

### Default
- Row background: white
- Border: bottom only

### Hover
- Background: `--color-background-secondary`

### Selected
- Background: `--color-primary-50`
- Border-left: 2px solid `--color-primary`

### Loading
- Show skeleton rows
- Or spinner in center

### Empty
- Show empty state message
- Optional illustration

---

## 🧩 Props API

```typescript
interface TableProps {
  // Data
  columns: Column[];
  data: any[];
  
  // Features
  selectable?: boolean;
  sortable?: boolean;
  pagination?: PaginationConfig;
  
  // Behavior
  onSelectionChange?: (selected: any[]) => void;
  onSort?: (column: string, direction: 'asc' | 'desc') => void;
  onPageChange?: (page: number) => void;
  onRowClick?: (row: any) => void;
  
  // Appearance
  size?: 'sm' | 'md' | 'lg';
  striped?: boolean;
  compact?: boolean;
  fullWidth?: boolean;
  
  // State
  loading?: boolean;
  emptyMessage?: string;
  
  // Accessibility
  ariaLabel?: string;
  caption?: string;
}

interface Column {
  key: string;
  title: string;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}
```

---

## 📝 Usage Examples

### Basic Table
```tsx
const columns = [
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
  { key: 'status', title: 'Status' },
];

const data = [
  { name: 'John', email: 'john@example.com', status: 'Active' },
  { name: 'Jane', email: 'jane@example.com', status: 'Offline' },
];

<Table columns={columns} data={data} />
```

### Custom Column Rendering
```tsx
const columns = [
  { 
    key: 'name', 
    title: 'Name',
    render: (value, row) => (
      <div className="flex items-center gap-2">
        <Avatar src={row.avatar} />
        <span>{value}</span>
      </div>
    )
  },
  {
    key: 'status',
    title: 'Status',
    render: (value) => (
      <Badge color={value === 'Active' ? 'success' : 'neutral'}>
        {value}
      </Badge>
    )
  },
  {
    key: 'actions',
    title: 'Actions',
    render: (_, row) => (
      <IconButton icon={<MoreIcon />} onClick={() => handleAction(row)} />
    )
  },
];
```

### Selectable Table
```tsx
<Table
  columns={columns}
  data={data}
  selectable
  onSelectionChange={(selected) => {
    console.log('Selected:', selected);
  }}
/>

// Bulk actions
{selectedRows.length > 0 && (
  <div className="bulk-actions">
    <span>{selectedRows.length} selected</span>
    <Button onClick={handleDelete}>Delete</Button>
  </div>
)}
```

### Sortable Table
```tsx
<Table
  columns={columns}
  data={sortedData}
  sortable
  sortConfig={{ column: 'name', direction: 'asc' }}
  onSort={(column, direction) => {
    setSortedData(sortData(data, column, direction));
  }}
/>
```

### Paginated Table
```tsx
<Table
  columns={columns}
  data={currentPageData}
  pagination={{
    page: currentPage,
    pageSize: 20,
    total: totalItems,
    onChange: (page) => setCurrentPage(page)
  }}
/>
```

---

## ♿ Accessibility

### Requirements
- [ ] Semantic `<table>` element
- [ ] `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
- [ ] Column headers with scope="col"
- [ ] Caption or aria-label
- [ ] Keyboard navigation for interactive cells
- [ ] Sort direction announced to screen readers
- [ ] Row selection announced

### Implementation
```tsx
<table aria-label="User list">
  <caption>All registered users</caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending">
        <button aria-label="Sort by name">Name</button>
      </th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>john@example.com</td>
    </tr>
  </tbody>
</table>
```

---

## 🎨 CSS Implementation

### Base Styles
```css
.table-container {
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-base);
}

.table-header {
  background: var(--color-background-secondary);
  border-bottom: 2px solid var(--color-border);
}

.table-header th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: var(--color-neutral-700);
}

.table-row {
  border-bottom: 1px solid var(--color-border-subtle);
  transition: background var(--transition-fast);
}

.table-row:hover {
  background: var(--color-background-secondary);
}

.table-row.selected {
  background: var(--color-primary-50);
}

.table-cell {
  padding: 12px 16px;
  color: var(--color-neutral-800);
}
```

### Column Alignment
```css
.table-cell.align-left { text-align: left; }
.table-cell.align-center { text-align: center; }
.table-cell.align-right { text-align: right; }
```

### Striped Rows
```css
.table-striped .table-row:nth-child(even) {
  background: var(--color-background-secondary);
}
```

---

## 🧪 Testing Checklist

- [ ] Renders all columns
- [ ] Renders all rows
- [ ] Custom render functions work
- [ ] Selection works
- [ ] Sort works
- [ ] Pagination works
- [ ] Empty state shows
- [ ] Loading state shows
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly

---

## 🚫 Anti-Patterns

### Don't:
```tsx
// ❌ Too many columns
<Table columns={20} /> // Hard to scan

// ✅ Show essential columns, details on click
<Table columns={6}>
  <Table.Column key="actions" render={() => <DetailsButton />} />
</Table>

// ❌ No pagination for large data
<Table data={10000 rows} />

// ✅ Paginate or virtualize
<Table 
  data={paginatedData}
  pagination={{ page, pageSize, total }}
/>

// ❌ Inconsistent column widths
// ✅ Set explicit widths for important columns
const columns = [
  { key: 'id', title: 'ID', width: 80 },
  { key: 'name', title: 'Name', width: 200 },
  { key: 'actions', title: '', width: 100, align: 'right' },
];

// ❌ Nested tables
<Table>
  <Table /> {/* Don't do this */}
</Table>

// ✅ Use expandable rows instead
<Table
  expandable={{
    render: (row) => <DetailsContent data={row} />
  }}
/>
```

---

## 📚 Related Components

- [Pagination](./Pagination.md) — Page navigation
- [Checkbox](./Checkbox.md) — Row selection
- [Badge](./Badge.md) — Status display
- [EmptyState](./EmptyState.md) — No data state

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
