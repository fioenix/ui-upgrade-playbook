# Dropdown Component

**Contextual menus for actions and options**

---

## 📐 Purpose

Display a list of actions or options in a contextual menu. Use for:
- Action menus (Edit, Delete, Share)
- Selection menus (Sort by, Filter by)
- User menus (Profile, Settings, Logout)
- Navigation menus (Sub-items)

---

## 🎨 Variants

| Variant | Use Case | Trigger | Content |
|---------|----------|---------|---------|
| **menu** | Action lists | Button, IconButton | Menu items |
| **select** | Single selection | Button | Selectable items |
| **multiselect** | Multiple selection | Button | Checkable items |
| **grouped** | Categorized items | Button | Grouped sections |

---

## 📏 Sizes

| Size | Trigger Height | Item Height | Font Size |
|------|---------------|-------------|-----------|
| **sm** | 32px | 32px | 13px |
| **md** | 40px | 40px | 14px |
| **lg** | 48px | 48px | 16px |

---

## 🎯 Anatomy

```
┌─────────────────┐
│ [Trigger Button]│
└────────┬────────┘
         │
         ▼
    ┌─────────────────┐
    │ ┌─────────────┐ │
    │ │ 🔍 Search   │ │ (optional)
    │ ├─────────────┤ │
    │ │ Item 1      │ │
    │ │ Item 2      │ │
    │ │ Item 3      │ │
    │ ├─────────────┤ │
    │ │ Item 4      │ │
    │ └─────────────┘ │
    └─────────────────┘
```

**Parts:**
- Trigger (button that opens dropdown)
- Content (dropdown container)
- Search (optional filter)
- Items (menu options)
- Divider (section separator)

---

## 🧩 Props Interface

```typescript
interface DropdownProps {
  // Content
  children: React.ReactNode; // Trigger + Content
  
  // Behavior
  isOpen?: boolean; // Controlled
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  closeOnSelect?: boolean;
  closeOnOutsideClick?: boolean;
  
  // Positioning
  align?: 'start' | 'center' | 'end';
  side?: 'bottom' | 'top' | 'left' | 'right';
  sideOffset?: number;
  
  // Accessibility
  ariaLabel?: string;
}

interface DropdownTriggerProps {
  children: React.ReactNode;
  asChild?: boolean; // Use custom trigger
}

interface DropdownContentProps {
  children: React.ReactNode;
  className?: string;
}

interface DropdownItemProps {
  children: React.ReactNode;
  onSelect?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  shortcut?: string; // Keyboard shortcut
  checked?: boolean; // For checkbox items
}

interface DropdownSeparatorProps {
  className?: string;
}
```

---

## 🎯 States

| State | Visual Treatment |
|-------|------------------|
| **closed** | Hidden |
| **opening** | Fade/scale animation |
| **open** | Visible, focus inside |
| **closing** | Fade out animation |
| **hover** | Background highlight |
| **focus** | Focus ring |
| **disabled** | Muted, no interaction |
| **checked** | Checkmark shown |

---

## 📝 Usage Examples

### Basic Dropdown Menu
```tsx
<Dropdown>
  <Dropdown.Trigger>
    <Button variant="secondary">
      Actions <ChevronDownIcon />
    </Button>
  </Dropdown.Trigger>
  
  <Dropdown.Content>
    <Dropdown.Item icon={<EditIcon />} onSelect={handleEdit}>
      Edit
    </Dropdown.Item>
    <Dropdown.Item icon={<CopyIcon />} onSelect={handleCopy}>
      Copy
    </Dropdown.Item>
    <Dropdown.Separator />
    <Dropdown.Item icon={<DeleteIcon />} onSelect={handleDelete} variant="danger">
      Delete
    </Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
```

### IconButton Trigger
```tsx
<Dropdown>
  <Dropdown.Trigger asChild>
    <IconButton icon={<MoreVerticalIcon />} />
  </Dropdown.Trigger>
  
  <Dropdown.Content>
    <Dropdown.Item>View</Dropdown.Item>
    <Dropdown.Item>Edit</Dropdown.Item>
    <Dropdown.Item>Delete</Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
```

### Dropdown with Shortcuts
```tsx
<Dropdown>
  <Dropdown.Trigger>
    <Button>File</Button>
  </Dropdown.Trigger>
  
  <Dropdown.Content>
    <Dropdown.Item shortcut="⌘N">New</Dropdown.Item>
    <Dropdown.Item shortcut="⌘O">Open</Dropdown.Item>
    <Dropdown.Separator />
    <Dropdown.Item shortcut="⌘S">Save</Dropdown.Item>
    <Dropdown.Item shortcut="⌘P">Print</Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
```

### Select Dropdown
```tsx
<Dropdown closeOnSelect>
  <Dropdown.Trigger>
    <Button variant="outline">
      {selectedSort || 'Sort by'} <ChevronDownIcon />
    </Button>
  </Dropdown.Trigger>
  
  <Dropdown.Content>
    <Dropdown.Item 
      checked={selectedSort === 'name'}
      onSelect={() => setSelectedSort('name')}
    >
      Name
    </Dropdown.Item>
    <Dropdown.Item 
      checked={selectedSort === 'date'}
      onSelect={() => setSelectedSort('date')}
    >
      Date
    </Dropdown.Item>
    <Dropdown.Item 
      checked={selectedSort === 'size'}
      onSelect={() => setSelectedSort('size')}
    >
      Size
    </Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
```

### Grouped Dropdown
```tsx
<Dropdown>
  <Dropdown.Trigger>
    <Button>More Actions</Button>
  </Dropdown.Trigger>
  
  <Dropdown.Content>
    <Dropdown.Group>
      <Dropdown.Label>File</Dropdown.Label>
      <Dropdown.Item>New File</Dropdown.Item>
      <Dropdown.Item>Open File</Dropdown.Item>
    </Dropdown.Group>
    <Dropdown.Separator />
    <Dropdown.Group>
      <Dropdown.Label>Edit</Dropdown.Label>
      <Dropdown.Item>Undo</Dropdown.Item>
      <Dropdown.Item>Redo</Dropdown.Item>
    </Dropdown.Group>
  </Dropdown.Content>
</Dropdown>
```

### User Menu
```tsx
<Dropdown align="end">
  <Dropdown.Trigger asChild>
    <Button variant="ghost">
      <Avatar src={user.avatar} />
      {user.name}
    </Button>
  </Dropdown.Trigger>
  
  <Dropdown.Content>
    <Dropdown.Item icon={<UserIcon />} onSelect={() => navigate('/profile')}>
      Profile
    </Dropdown.Item>
    <Dropdown.Item icon={<SettingsIcon />} onSelect={() => navigate('/settings')}>
      Settings
    </Dropdown.Item>
    <Dropdown.Separator />
    <Dropdown.Item 
      icon={<LogoutIcon />} 
      onSelect={handleLogout}
      variant="danger"
    >
      Logout
    </Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
```

---

## ♿ Accessibility

### Requirements
- [ ] role="menu" on content
- [ ] role="menuitem" on items
- [ ] aria-haspopup="menu" on trigger
- [ ] aria-expanded on trigger
- [ ] Keyboard navigation (Arrow keys)
- [ ] Escape closes dropdown
- [ ] Focus management

### Keyboard Navigation
- **Arrow Down** — Next item
- **Arrow Up** — Previous item
- **Home** — First item
- **End** — Last item
- **Enter/Space** — Select item
- **Escape** — Close dropdown

---

## 🎨 CSS Implementation

### Base Styles
```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  min-width: 200px;
  background: var(--color-background-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-2);
  z-index: var(--z-dropdown);
  max-height: 300px;
  overflow-y: auto;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-sm);
  cursor: pointer;
  color: var(--color-neutral-700);
  font-size: var(--font-size-sm);
  transition: all var(--transition-fast);
}

.dropdown-item:hover {
  background: var(--color-background-secondary);
}

.dropdown-item:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: -2px;
}

.dropdown-item[disabled] {
  color: var(--color-neutral-400);
  cursor: not-allowed;
}

.dropdown-item.danger {
  color: var(--color-danger-600);
}

.dropdown-item.danger:hover {
  background: var(--color-danger-50);
}

.dropdown-separator {
  height: 1px;
  background: var(--color-border);
  margin: var(--spacing-2) 0;
}

.dropdown-group-label {
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-500);
}
```

### Positioning
```css
.dropdown-content[data-side="bottom"] {
  margin-top: var(--spacing-1);
}

.dropdown-content[data-side="top"] {
  margin-bottom: var(--spacing-1);
}

.dropdown-content[data-align="start"] {
  left: 0;
}

.dropdown-content[data-align="end"] {
  right: 0;
}
```

---

## 🧪 Testing Checklist

- [ ] Opens on trigger click
- [ ] Closes on outside click
- [ ] Closes on Escape
- [ ] Closes on item select (if closeOnSelect)
- [ ] Item onSelect fires
- [ ] Disabled item not clickable
- [ ] Keyboard navigation works
- [ ] Arrow keys navigate items
- [ ] Home/End keys work
- [ ] Positioning correct
- [ ] Focus trapped in dropdown
- [ ] aria-expanded updates
- [ ] role attributes correct

---

## 🚫 Anti-Patterns

### Don't:
```tsx
// ❌ Too many items
<Dropdown.Content>
  {/* 50 items - use search or pagination */}
</Dropdown.Content>

// ✅ Limit to 5-15 items
<Dropdown.Content>
  <Dropdown.Search />
  {filteredItems}
</Dropdown.Content>

// ❌ Deep nesting
<Dropdown>
  <Dropdown.Item>
    Parent
    <Dropdown> {/* Nested dropdown - confusing */}
      <Dropdown.Item>Child</Dropdown.Item>
    </Dropdown>
  </Dropdown.Item>
</Dropdown>

// ✅ Use separate dropdowns or navigation
<Navigation />

// ❌ Mixed content types
<Dropdown.Content>
  <Dropdown.Item>Link</Dropdown.Item>
  <Button>Button</Button> {/* Don't mix */}
  <a href="#">Anchor</a>
</Dropdown.Content>

// ✅ Consistent item types
<Dropdown.Content>
  <Dropdown.Item onSelect={handleAction1}>Action 1</Dropdown.Item>
  <Dropdown.Item onSelect={handleAction2}>Action 2</Dropdown.Item>
</Dropdown.Content>
```

---

## 📚 Related Components

- [Button](./Button.md) — Dropdown trigger
- [Select](./Select.md) — For form selection
- [Popover](./Popover.md) — For arbitrary content
- [Navigation](./Sidebar.md) — For main navigation

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
