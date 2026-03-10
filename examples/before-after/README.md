# Before & After Examples

**Visual transformations showing upgrade quality**

---

## 📋 How to Use

These examples show typical "before" (ugly/inconsistent) and "after" (polished/consistent) transformations. Use as reference for expected quality.

---

## 🎨 Example 1: Button Transformation

### Before
```tsx
// Inconsistent button styles throughout app
<button className="btn-primary" style={{ background: '#3B82F6' }}>
  Save
</button>

<button className="btn" style={{ background: '#2563eb', padding: '8px 16px' }}>
  Submit
</button>

<button onClick={handleClick} style={{ padding: '10px 20px', background: 'blue' }}>
  Click me
</button>
```

**Issues:**
- ❌ 3 different blue colors
- ❌ Inconsistent padding
- ❌ No hover states
- ❌ No disabled state
- ❌ No loading state

### After
```tsx
// Consistent Button component
<Button variant="primary" onClick={handleSave}>
  Save
</Button>

<Button variant="primary" type="submit" loading={isSaving}>
  Submit
</Button>

<Button variant="secondary" onClick={handleClick}>
  Click me
</Button>
```

**Improvements:**
- ✅ Single primary color (token: `--color-primary-600`)
- ✅ Consistent padding (token: `--spacing-2 --spacing-4`)
- ✅ Hover, active states built-in
- ✅ Disabled state with proper styling
- ✅ Loading state with spinner

---

## 📝 Example 2: Form Transformation

### Before
```tsx
// Inconsistent form styling
<div>
  <label>Email</label>
  <input type="email" style={{ padding: '8px', border: '1px solid #ccc' }} />
</div>

<div style={{ marginTop: '15px' }}>
  <label style={{ fontWeight: 'bold' }}>Password</label>
  <input type="password" style={{ padding: '10px', border: '1px solid #999' }} />
  <span style={{ color: 'red', fontSize: '12px' }}>Required</span>
</div>
```

**Issues:**
- ❌ Inconsistent label styling
- ❌ Different input padding
- ❌ Different border colors
- ❌ Inconsistent spacing
- ❌ Error message not structured

### After
```tsx
// Consistent Input component
<Input
  label="Email"
  type="email"
  placeholder="you@example.com"
/>

<Input
  label="Password"
  type="password"
  required
  error={passwordError}
  helperText="Must be at least 8 characters"
/>
```

**Improvements:**
- ✅ Consistent label style (token: `--font-size-xs`, `--font-weight-semibold`)
- ✅ Consistent input padding (token: `--spacing-2 --spacing-4`)
- ✅ Consistent border (token: `--color-border`)
- ✅ Consistent spacing (token: `--spacing-4` gap)
- ✅ Structured error/helper text

---

## 📦 Example 3: Card Transformation

### Before
```tsx
// Inconsistent card containers
<div style={{ border: '1px solid #e0e0e0', padding: '16px', borderRadius: '4px' }}>
  <h3>User Info</h3>
  <p>Content here</p>
</div>

<div style={{ border: '1px solid #ddd', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
  <h4>Settings</h4>
  <p>Different content</p>
</div>
```

**Issues:**
- ❌ Different border colors
- ❌ Different padding
- ❌ Different border radius
- ❌ Inconsistent shadows
- ❌ No structure (header/content/footer)

### After
```tsx
// Consistent Card component
<Card>
  <Card.Header title="User Info" />
  <Card.Content>
    <p>Content here</p>
  </Card.Content>
</Card>

<Card variant="elevated">
  <Card.Header title="Settings" />
  <Card.Content>
    <p>Different content</p>
  </Card.Content>
  <Card.Footer>
    <Button variant="primary">Save</Button>
  </Card.Footer>
</Card>
```

**Improvements:**
- ✅ Consistent border (token: `--color-border`)
- ✅ Consistent padding (token: `--spacing-4`)
- ✅ Consistent radius (token: `--radius-md`)
- ✅ Consistent shadows (token: `--shadow-sm`, `--shadow-md`)
- ✅ Clear structure with Header/Content/Footer

---

## 📊 Example 4: Table Transformation

### Before
```tsx
// Basic HTML table, no features
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>john@example.com</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>
```

**Issues:**
- ❌ No sorting
- ❌ No pagination
- ❌ No selection
- ❌ Basic styling
- ❌ No loading state
- ❌ No empty state

### After
```tsx
// Full-featured Table component
<Table
  columns={[
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
    { key: 'status', title: 'Status', render: (value) => <Badge>{value}</Badge> },
    { key: 'actions', title: 'Actions', render: (_, row) => <ActionsMenu row={row} /> },
  ]}
  data={users}
  sortable
  selectable
  pagination={{ page, pageSize, total, onChange: setPage }}
  loading={isLoading}
  emptyMessage="No users found"
/>
```

**Improvements:**
- ✅ Sortable columns
- ✅ Selectable rows
- ✅ Pagination built-in
- ✅ Consistent styling (tokens)
- ✅ Loading skeleton
- ✅ Empty state message

---

## 🧭 Example 5: Navigation Transformation

### Before
```tsx
// Inconsistent navigation
<nav>
  <a href="/">Home</a>
  <a href="/dashboard" style={{ fontWeight: 'bold' }}>Dashboard</a>
  <a href="/users">Users</a>
</nav>
```

**Issues:**
- ❌ No active state indication
- ❌ Inconsistent styling
- ❌ No mobile support
- ❌ No structure

### After
```tsx
// Structured navigation
<Sidebar>
  <Sidebar.Header>
    <Logo />
  </Sidebar.Header>
  <Sidebar.Section title="Main">
    <Sidebar.NavItem 
      icon={<HomeIcon />} 
      route="/" 
      active={location.pathname === '/'}
    >
      Home
    </Sidebar.NavItem>
    <Sidebar.NavItem 
      icon={<DashboardIcon />} 
      route="/dashboard"
      active={location.pathname === '/dashboard'}
    >
      Dashboard
    </Sidebar.NavItem>
  </Sidebar.Section>
</Sidebar>

<Breadcrumbs items={[
  { label: 'Home', route: '/' },
  { label: 'Users', route: '/users' },
  { label: 'John Doe' },
]} />
```

**Improvements:**
- ✅ Clear active state (background + indicator)
- ✅ Consistent styling (tokens)
- ✅ Mobile responsive (hamburger menu)
- ✅ Structured with sections
- ✅ Breadcrumbs for deep pages

---

## 📱 Example 6: Mobile Transformation

### Before
```tsx
// Desktop-only, breaks on mobile
<div style={{ display: 'flex', gap: '16px' }}>
  <Sidebar style={{ width: '256px' }} />
  <Main style={{ flex: 1 }} />
</div>
```

**Issues:**
- ❌ Sidebar too wide on mobile
- ❌ Horizontal scroll
- ❌ Content unreadable
- ❌ Touch targets too small

### After
```tsx
// Responsive layout
<div className="layout">
  <Sidebar 
    collapsed={isMobile}
    isOpen={sidebarOpen}
    onClose={() => setSidebarOpen(false)}
  />
  <Main>
    <Breadcrumbs />
    <PageContent />
  </Main>
</div>

/* CSS */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    transform: translateX(-100%);
    transition: transform 0.3s;
  }
  .sidebar.isOpen {
    transform: translateX(0);
  }
}
```

**Improvements:**
- ✅ Sidebar collapses on mobile
- ✅ Slide-out menu pattern
- ✅ No horizontal scroll
- ✅ Touch targets 44px+
- ✅ Content adapts to screen

---

## 🎯 Quality Bar

Use these examples to understand expected quality:

| Aspect | Before | After |
|--------|--------|-------|
| **Colors** | Multiple variations | Single token source |
| **Spacing** | Random px values | Consistent scale |
| **Typography** | Mixed sizes/weights | Type scale |
| **Components** | Inline styles | Reusable components |
| **States** | Missing | Complete (hover, active, disabled, loading) |
| **Accessibility** | Not considered | Built-in |
| **Mobile** | Not supported | Responsive |
| **Consistency** | Every page different | Unified system |

---

## 📸 Visual Examples

To add visual before/after screenshots:

1. Capture "before" state of your app
2. Apply transformations using this framework
3. Capture "after" state
4. Add to this directory with naming:
   - `button-before.png`
   - `button-after.png`
   - `form-before.png`
   - `form-after.png`

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
