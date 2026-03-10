# Sidebar Component

**Primary navigation container for applications**

---

## 📐 Purpose

Provide main navigation structure for applications. Use for:
- Main app navigation
- Dashboard navigation
- Settings navigation
- Documentation navigation

---

## 🎨 Variants

| Variant | Use Case | Width | Behavior |
|---------|----------|-------|----------|
| **fixed** | Standard apps | 256px | Always visible |
| **collapsible** | Content-heavy apps | 64px / 256px | Toggle expand |
| **overlay** | Mobile-first | 280px | Slide over content |
| **floating** | Modern design | 256px | Detached from edge |

---

## 📏 Sizes

| Size | Width | Collapsed Width | Use Case |
|------|-------|-----------------|----------|
| **sm** | 200px | 56px | Compact apps |
| **md** | 256px | 64px | Default |
| **lg** | 320px | 80px | Content-rich nav |

---

## 🎯 Anatomy

```
┌─────────────────────────────────────────┐
│ Logo / Brand                            │
├─────────────────────────────────────────┤
│ Search (optional)                       │
├─────────────────────────────────────────┤
│ Section Title                           │
│ ┌─────────────────────────────────────┐ │
│ │ Nav Item 1  [icon]                  │ │
│ │ Nav Item 2  [icon]                  │ │
│ │ Nav Item 3  [icon]                  │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│ User Menu (bottom)                      │
│ ┌─────────────────────────────────────┐ │
│ │ [Avatar] Name                       │ │
│ │ Settings  Logout                    │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

**Parts:**
- Header (logo, brand)
- Search (optional)
- Navigation sections
- Nav items (with icons)
- Footer (user menu)

---

## 🧩 Props Interface

```typescript
interface SidebarProps {
  // Content
  children: React.ReactNode;
  logo?: React.ReactNode;
  
  // Behavior
  collapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
  collapsible?: boolean;
  
  // Appearance
  variant?: 'fixed' | 'collapsible' | 'overlay' | 'floating';
  size?: 'sm' | 'md' | 'lg';
  position?: 'left' | 'right';
  
  // Mobile
  mobileBreakpoint?: number; // Default: 768
  isOpen?: boolean; // For overlay mode
  onOpenChange?: (open: boolean) => void;
  
  // Accessibility
  ariaLabel?: string;
}

interface SidebarSectionProps {
  title?: string;
  children: React.ReactNode;
  collapsible?: boolean;
}

interface SidebarNavItemProps {
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
  badge?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}
```

---

## 🎯 States

| State | Behavior |
|-------|----------|
| **expanded** | Full width, labels visible |
| **collapsed** | Icon-only, minimal width |
| **mobile-open** | Overlay visible (mobile) |
| **mobile-closed** | Hidden (mobile) |

---

## 📝 Usage Examples

### Basic Sidebar
```tsx
<Sidebar>
  <Sidebar.Header>
    <Logo />
  </Sidebar.Header>
  
  <Sidebar.Content>
    <Sidebar.Section title="Main">
      <Sidebar.NavItem href="/dashboard" icon={<DashboardIcon />}>
        Dashboard
      </Sidebar.NavItem>
      <Sidebar.NavItem href="/projects" icon={<ProjectsIcon />}>
        Projects
      </Sidebar.NavItem>
      <Sidebar.NavItem href="/tasks" icon={<TasksIcon />}>
        Tasks
      </Sidebar.NavItem>
    </Sidebar.Section>
    
    <Sidebar.Section title="Settings">
      <Sidebar.NavItem href="/settings" icon={<SettingsIcon />}>
        Settings
      </Sidebar.NavItem>
    </Sidebar.Section>
  </Sidebar.Content>
  
  <Sidebar.Footer>
    <UserMenu user={currentUser} />
  </Sidebar.Footer>
</Sidebar>
```

### Collapsible Sidebar
```tsx
const [collapsed, setCollapsed] = useState(false);

<Sidebar 
  collapsed={collapsed}
  onCollapseChange={setCollapsed}
  collapsible
>
  <Sidebar.Header>
    <Logo />
    {collapsed || <CollapseButton onClick={() => setCollapsed(!collapsed)} />}
  </Sidebar.Header>
  
  <Sidebar.Content>
    <Sidebar.Section>
      <Sidebar.NavItem icon={<HomeIcon />}>
        {!collapsed && 'Home'}
      </Sidebar.NavItem>
      <Sidebar.NavItem icon={<SettingsIcon />}>
        {!collapsed && 'Settings'}
      </Sidebar.NavItem>
    </Sidebar.Section>
  </Sidebar.Content>
</Sidebar>
```

### Sidebar with Badge
```tsx
<Sidebar>
  <Sidebar.Content>
    <Sidebar.Section>
      <Sidebar.NavItem 
        icon={<InboxIcon />}
        badge={5}
      >
        Inbox
      </Sidebar.NavItem>
      <Sidebar.NavItem 
        icon={<MessageIcon />}
        badge={12}
      >
        Messages
      </Sidebar.NavItem>
    </Sidebar.Section>
  </Sidebar.Content>
</Sidebar>
```

### Mobile Overlay Sidebar
```tsx
const [mobileOpen, setMobileOpen] = useState(false);

<>
  {/* Toggle button for mobile */}
  <Button onClick={() => setMobileOpen(true)} className="md:hidden">
    <MenuIcon />
  </Button>
  
  <Sidebar
    variant="overlay"
    isOpen={mobileOpen}
    onOpenChange={setMobileOpen}
  >
    <Sidebar.Content>
      <Sidebar.Section>
        <Sidebar.NavItem href="/dashboard">Dashboard</Sidebar.NavItem>
        <Sidebar.NavItem href="/settings">Settings</Sidebar.NavItem>
      </Sidebar.Section>
    </Sidebar.Content>
  </Sidebar>
  
  {/* Backdrop */}
  {mobileOpen && (
    <div 
      className="fixed inset-0 bg-black/50 z-40"
      onClick={() => setMobileOpen(false)}
    />
  )}
</>
```

### Active State
```tsx
const location = useLocation();

<Sidebar>
  <Sidebar.Content>
    <Sidebar.Section>
      <Sidebar.NavItem 
        href="/dashboard"
        icon={<DashboardIcon />}
        active={location.pathname === '/dashboard'}
      >
        Dashboard
      </Sidebar.NavItem>
      <Sidebar.NavItem 
        href="/settings"
        icon={<SettingsIcon />}
        active={location.pathname === '/settings'}
      >
        Settings
      </Sidebar.NavItem>
    </Sidebar.Section>
  </Sidebar.Content>
</Sidebar>
```

---

## ♿ Accessibility

### Requirements
- [ ] role="navigation"
- [ ] aria-label for sidebar
- [ ] aria-current="page" for active item
- [ ] Keyboard navigation (Tab, Arrow keys)
- [ ] Focus visible
- [ ] Screen reader announces collapsed state

### Keyboard Navigation
- **Tab** — Navigate through items
- **Enter/Space** — Activate item
- **Escape** — Close mobile sidebar

---

## 🎨 CSS Implementation

### Base Styles
```css
.sidebar {
  display: flex;
  flex-direction: column;
  background: var(--color-background-primary);
  border-right: 1px solid var(--color-border);
  height: 100vh;
  transition: width var(--transition-normal);
}

.sidebar-header {
  padding: var(--spacing-4);
  border-bottom: 1px solid var(--color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-4) 0;
}

.sidebar-footer {
  padding: var(--spacing-4);
  border-top: 1px solid var(--color-border-subtle);
}

.sidebar-section {
  margin-bottom: var(--spacing-6);
}

.sidebar-section-title {
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.sidebar-nav-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-2) var(--spacing-4);
  color: var(--color-neutral-600);
  text-decoration: none;
  border-radius: var(--radius-md);
  margin: var(--spacing-1) var(--spacing-2);
  transition: all var(--transition-fast);
}

.sidebar-nav-item:hover {
  background: var(--color-background-secondary);
  color: var(--color-neutral-900);
}

.sidebar-nav-item.active {
  background: var(--color-primary-50);
  color: var(--color-primary-600);
}

.sidebar-nav-item:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: -2px;
}
```

### Collapsed State
```css
.sidebar-collapsed {
  width: 64px;
}

.sidebar-collapsed .sidebar-section-title,
.sidebar-collapsed .sidebar-nav-item > span {
  display: none;
}

.sidebar-collapsed .sidebar-nav-item {
  justify-content: center;
  padding: var(--spacing-2);
}
```

### Mobile Overlay
```css
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--z-modal);
  transform: translateX(-100%);
  transition: transform var(--transition-normal);
}

.sidebar-overlay.open {
  transform: translateX(0);
}
```

---

## 🧪 Testing Checklist

- [ ] Renders with correct width
- [ ] Navigation items display
- [ ] Active state works
- [ ] Collapsible works
- [ ] Mobile overlay works
- [ ] Keyboard navigation works
- [ ] aria-label present
- [ ] aria-current on active item
- [ ] Logo displays
- [ ] User menu displays
- [ ] Badge displays correctly
- [ ] Responsive on mobile

---

## 📚 Related Components

- [Navbar](./Navbar.md) — Top navigation
- [Dropdown](./Dropdown.md) — User menu
- [Avatar](./Avatar.md) — User avatar
- [Button](./Button.md) — Toggle button

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
