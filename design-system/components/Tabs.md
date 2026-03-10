# Tabs Component

**Organize content into selectable panels**

---

## 📐 Purpose

Allow users to navigate between related content sections within the same context. Use for:
- Settings pages (Profile, Security, Notifications)
- Data views (List, Grid, Timeline)
- Form sections (Details, Advanced, Review)
- Content organization (Overview, Features, Reviews)

---

## 🎨 Variants

| Variant | Use Case | Style |
|---------|----------|-------|
| **line** | Default, content sections | Underline indicator |
| **pills** | Filters, views | Rounded pills |
| **enclosed** | Forms, settings | Box container |
| **vertical** | Sidebar navigation | Vertical list |

---

## 📏 Sizes

| Size | Height | Font Size | Padding | Use Case |
|------|--------|-----------|---------|----------|
| **sm** | 36px | 13px | 8px 12px | Compact spaces |
| **md** | 44px | 14px | 12px 16px | Default |
| **lg** | 52px | 16px | 16px 20px | Prominent tabs |

---

## 🎯 Anatomy

```
┌─────────────────────────────────────────────────────────┐
│ [Tab 1]  [Tab 2]  [Tab 3]  [Tab 4]                     │
│ ──────                                                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Tab Panel Content                                      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Parts:**
- Tab List (container for tabs)
- Tab (individual tab button)
- Tab Indicator (active state marker)
- Tab Panel (content area)

---

## 🧩 Props Interface

```typescript
interface TabsProps {
  // Content
  children: React.ReactNode; // Tab.List + Tab.Panels
  defaultValue?: string;
  value?: string; // Controlled mode
  
  // Appearance
  variant?: 'line' | 'pills' | 'enclosed' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  justify?: 'start' | 'center' | 'end';
  
  // Behavior
  onChange?: (value: string) => void;
  lazy?: boolean; // Render panels on demand
  
  // Accessibility
  ariaLabel?: string;
}

interface TabListProps {
  children: React.ReactNode; // Tab[]
}

interface TabProps {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  badge?: React.ReactNode; // Count indicator
}

interface TabPanelsProps {
  children: React.ReactNode; // Tab.Panel[]
}

interface TabPanelProps {
  value: string;
  children: React.ReactNode;
}
```

---

## 🎯 States

| State | Visual Treatment |
|-------|------------------|
| **default** | Normal text color |
| **hover** | Background/color change |
| **active** | Indicator + primary color |
| **disabled** | Muted, no interaction |
| **focus** | Focus ring (keyboard) |

---

## 📝 Usage Examples

### Basic Tabs
```tsx
<Tabs defaultValue="profile">
  <Tabs.List>
    <Tabs.Tab value="profile">Profile</Tabs.Tab>
    <Tabs.Tab value="security">Security</Tabs.Tab>
    <Tabs.Tab value="notifications">Notifications</Tabs.Tab>
  </Tabs.List>
  
  <Tabs.Panels>
    <Tabs.Panel value="profile">
      <ProfileSettings />
    </Tabs.Panel>
    <Tabs.Panel value="security">
      <SecuritySettings />
    </Tabs.Panel>
    <Tabs.Panel value="notifications">
      <NotificationSettings />
    </Tabs.Panel>
  </Tabs.Panels>
</Tabs>
```

### Tabs with Icons
```tsx
<Tabs defaultValue="list">
  <Tabs.List>
    <Tabs.Tab value="list" icon={<ListIcon />}>
      List
    </Tabs.Tab>
    <Tabs.Tab value="grid" icon={<GridIcon />}>
      Grid
    </Tabs.Tab>
    <Tabs.Tab value="timeline" icon={<TimelineIcon />}>
      Timeline
    </Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel value="list"><ListView /></Tabs.Panel>
    <Tabs.Panel value="grid"><GridView /></Tabs.Panel>
    <Tabs.Panel value="timeline"><TimelineView /></Tabs.Panel>
  </Tabs.Panels>
</Tabs>
```

### Tabs with Badge
```tsx
<Tabs defaultValue="all">
  <Tabs.List>
    <Tabs.Tab value="all">All</Tabs.Tab>
    <Tabs.Tab value="pending" badge={5}>
      Pending
    </Tabs.Tab>
    <Tabs.Tab value="completed" badge={12}>
      Completed
    </Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel value="all"><AllTasks /></Tabs.Panel>
    <Tabs.Panel value="pending"><PendingTasks /></Tabs.Panel>
    <Tabs.Panel value="completed"><CompletedTasks /></Tabs.Panel>
  </Tabs.Panels>
</Tabs>
```

### Pills Variant
```tsx
<Tabs defaultValue="all" variant="pills">
  <Tabs.List>
    <Tabs.Tab value="all">All</Tabs.Tab>
    <Tabs.Tab value="active">Active</Tabs.Tab>
    <Tabs.Tab value="archived">Archived</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel value="all"><AllItems /></Tabs.Panel>
    <Tabs.Panel value="active"><ActiveItems /></Tabs.Panel>
    <Tabs.Panel value="archived"><ArchivedItems /></Tabs.Panel>
  </Tabs.Panels>
</Tabs>
```

### Controlled Tabs
```tsx
const [activeTab, setActiveTab] = useState('overview');

<Tabs value={activeTab} onChange={setActiveTab}>
  <Tabs.List>
    <Tabs.Tab value="overview">Overview</Tabs.Tab>
    <Tabs.Tab value="analytics">Analytics</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel value="overview"><Overview /></Tabs.Panel>
    <Tabs.Panel value="analytics"><Analytics /></Tabs.Panel>
  </Tabs.Panels>
</Tabs>
```

### Disabled Tab
```tsx
<Tabs defaultValue="free">
  <Tabs.List>
    <Tabs.Tab value="free">Free Plan</Tabs.Tab>
    <Tabs.Tab value="pro">Pro Plan</Tabs.Tab>
    <Tabs.Tab value="enterprise" disabled>
      Enterprise (Coming Soon)
    </Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel value="free"><FreePlan /></Tabs.Panel>
    <Tabs.Panel value="pro"><ProPlan /></Tabs.Panel>
    <Tabs.Panel value="enterprise"><EnterprisePlan /></Tabs.Panel>
  </Tabs.Panels>
</Tabs>
```

---

## ♿ Accessibility

### Requirements
- [ ] role="tablist" on tab list
- [ ] role="tab" on each tab
- [ ] role="tabpanel" on each panel
- [ ] aria-selected on tabs
- [ ] aria-controls pointing to panel
- [ ] aria-labelledby on panels
- [ ] Keyboard navigation (Arrow keys)
- [ ] Home/End keys support

### Keyboard Navigation
- **Arrow Left/Right** — Navigate between tabs
- **Arrow Up/Down** — Vertical tabs only
- **Home** — First tab
- **End** — Last tab
- **Enter/Space** — Activate tab (manual mode)

---

## 🎨 CSS Implementation

### Base Styles
```css
.tabs {
  display: flex;
  flex-direction: column;
}

.tabs-list {
  display: flex;
  gap: var(--spacing-1);
  border-bottom: 1px solid var(--color-border);
}

.tab {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-base);
  color: var(--color-neutral-600);
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: all var(--transition-fast);
}

.tab:hover {
  color: var(--color-neutral-900);
  background: var(--color-background-secondary);
}

.tab:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: -2px;
}

.tab[aria-selected="true"] {
  color: var(--color-primary-600);
  border-bottom-color: var(--color-primary-600);
}

.tab:disabled {
  color: var(--color-neutral-400);
  cursor: not-allowed;
}

.tab-panel {
  padding: var(--spacing-4) 0;
  outline: none;
}
```

### Variant Styles
```css
/* Pills */
.tabs-pills .tabs-list {
  border-bottom: none;
  gap: var(--spacing-2);
}

.tabs-pills .tab {
  border-radius: var(--radius-full);
  border-bottom: none;
  background: var(--color-background-secondary);
}

.tabs-pills .tab[aria-selected="true"] {
  background: var(--color-primary-600);
  color: white;
}

/* Enclosed */
.tabs-enclosed .tabs-list {
  background: var(--color-background-secondary);
  border-radius: var(--radius-md) var(--radius-md) 0 0;
  padding: var(--spacing-2);
  border-bottom: none;
}

.tabs-enclosed .tab {
  border-radius: var(--radius-sm);
}

.tabs-enclosed .tab[aria-selected="true"] {
  background: white;
  box-shadow: var(--shadow-sm);
}

/* Vertical */
.tabs-vertical {
  flex-direction: row;
}

.tabs-vertical .tabs-list {
  flex-direction: column;
  border-bottom: none;
  border-right: 1px solid var(--color-border);
}

.tabs-vertical .tab {
  border-bottom: none;
  border-left: 2px solid transparent;
  margin-bottom: 0;
}

.tabs-vertical .tab[aria-selected="true"] {
  border-left-color: var(--color-primary-600);
}
```

---

## 🧪 Testing Checklist

- [ ] Renders all tabs
- [ ] Active tab displays correctly
- [ ] Tab switching works
- [ ] onChange callback fires
- [ ] Controlled mode works
- [ ] Disabled tab not clickable
- [ ] Keyboard navigation works
- [ ] Arrow keys navigate tabs
- [ ] Home/End keys work
- [ ] aria-selected correct
- [ ] aria-controls correct
- [ ] Focus visible on keyboard nav
- [ ] Badge displays correctly
- [ ] Icon displays correctly

---

## 🚫 Anti-Patterns

### Don't:
```tsx
// ❌ Too many tabs
<Tabs.List>
  <Tabs.Tab>One</Tabs.Tab>
  <Tabs.Tab>Two</Tabs.Tab>
  {/* ... 15 more tabs */}
  <Tabs.Tab>Sixteen</Tabs.Tab>
</Tabs.List>

// ✅ Use 2-7 tabs max, or use navigation
<Navigation />

// ❌ Nested tabs
<Tabs>
  <Tabs.Panel>
    <Tabs> {/* Don't do this */}
      {/* Nested tabs */}
    </Tabs>
  </Tabs.Panel>
</Tabs>

// ✅ Use accordion or separate sections
<Accordion />

// ❌ Tabs with different content types
<Tabs>
  <Tabs.Panel value="list"><DataTable /></Tabs.Panel>
  <Tabs.Panel value="settings"><SettingsForm /></Tabs.Panel>
</Tabs>

// ✅ Keep content related
<Tabs>
  <Tabs.Panel value="list"><DataTable /></Tabs.Panel>
  <Tabs.Panel value="grid"><DataGrid /></Tabs.Panel>
</Tabs>
```

---

## 📚 Related Components

- [Card](./Card.md) — Tab content containers
- [Navigation](./Sidebar.md) — For main navigation
- [Accordion](./Accordion.md) — Alternative for sections

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
