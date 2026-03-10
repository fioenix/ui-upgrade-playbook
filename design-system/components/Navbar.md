# Navbar Component

**Top navigation bar for applications**

---

## 📐 Purpose

Provide top-level navigation and actions. Use for:
- App header with logo
- Global search
- User menu
- Notifications
- Breadcrumbs

---

## 🎨 Variants

| Variant | Use Case | Height | Features |
|---------|----------|--------|----------|
| **default** | Standard apps | 64px | Logo, nav, user |
| **compact** | Content-heavy | 56px | Minimal |
| **extended** | Complex apps | 72px | Search, actions |
| **sticky** | Long pages | 64px | Fixed on scroll |

---

## 📏 Anatomy

```
┌─────────────────────────────────────────────────────────┐
│ Logo  [Nav Items]              Search    [Actions] 👤  │
├─────────────────────────────────────────────────────────┤
│ [Breadcrumbs] (optional)                                │
└─────────────────────────────────────────────────────────┘
```

**Parts:**
- Logo/Brand
- Navigation items
- Search (optional)
- Actions (notifications, settings)
- User menu
- Breadcrumbs (optional)

---

## 🧩 Props Interface

```typescript
interface NavbarProps {
  // Content
  logo?: React.ReactNode;
  children?: React.ReactNode;
  
  // Features
  showSearch?: boolean;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  
  showBreadcrumbs?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  
  // Appearance
  variant?: 'default' | 'compact' | 'extended' | 'sticky';
  height?: number;
  
  // Behavior
  stickyOffset?: number;
  
  // Actions
  actions?: React.ReactNode;
  userMenu?: React.ReactNode;
  
  // Accessibility
  ariaLabel?: string;
  role?: 'navigation' | 'banner';
}

interface NavItemProps {
  href?: string;
  children: React.ReactNode;
  active?: boolean;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  onClick?: () => void;
}
```

---

## 📝 Usage Examples

### Basic Navbar
```tsx
<Navbar
  logo={<Logo />}
  userMenu={<UserMenu user={currentUser} />}
>
  <Navbar.Nav>
    <Navbar.NavItem href="/dashboard" active>
      Dashboard
    </Navbar.NavItem>
    <Navbar.NavItem href="/projects">
      Projects
    </Navbar.NavItem>
    <Navbar.NavItem href="/settings">
      Settings
    </Navbar.NavItem>
  </Navbar.Nav>
</Navbar>
```

### Navbar with Search
```tsx
<Navbar
  logo={<Logo />}
  showSearch
  searchPlaceholder="Search..."
  onSearch={handleSearch}
  actions={
    <>
      <IconButton icon={<NotificationIcon />} badge={3} />
      <IconButton icon={<SettingsIcon />} />
    </>
  }
  userMenu={<UserMenu user={currentUser} />}
/>
```

### Navbar with Breadcrumbs
```tsx
<Navbar
  logo={<Logo />}
  showBreadcrumbs
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Project Alpha' },
  ]}
  userMenu={<UserMenu user={currentUser} />}
/>
```

### Sticky Navbar
```tsx
<Navbar
  logo={<Logo />}
  variant="sticky"
  stickyOffset={0}
  userMenu={<UserMenu user={currentUser} />}
>
  <Navbar.Nav>
    <Navbar.NavItem href="/docs">Docs</Navbar.NavItem>
    <Navbar.NavItem href="/api">API</Navbar.NavItem>
    <Navbar.NavItem href="/examples">Examples</Navbar.NavItem>
  </Navbar.Nav>
</Navbar>
```

### Mobile Navbar
```tsx
<Navbar
  logo={<Logo />}
  mobileBreakpoint={768}
  mobileMenu={
    <MobileMenu>
      <MobileMenu.Item href="/dashboard">Dashboard</MobileMenu.Item>
      <MobileMenu.Item href="/projects">Projects</MobileMenu.Item>
    </MobileMenu>
  }
  userMenu={<UserMenu user={currentUser} />}
/>
```

---

## ♿ Accessibility

### Requirements
- [ ] role="navigation" or role="banner"
- [ ] aria-label for navbar
- [ ] aria-current="page" for active item
- [ ] Keyboard navigation
- [ ] Focus visible
- [ ] Mobile menu accessible

---

## 🎨 CSS Implementation

### Base Styles
```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-background-primary);
  border-bottom: 1px solid var(--color-border);
  padding: 0 var(--spacing-6);
  height: 64px;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
}

.navbar-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-3);
  color: var(--color-neutral-600);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.navbar-item:hover {
  background: var(--color-background-secondary);
  color: var(--color-neutral-900);
}

.navbar-item.active {
  background: var(--color-primary-50);
  color: var(--color-primary-600);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.navbar-breadcrumbs {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  font-size: var(--font-size-sm);
  color: var(--color-neutral-500);
}
```

### Sticky
```css
.navbar-sticky {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
}
```

### Mobile
```css
@media (max-width: 768px) {
  .navbar-nav {
    display: none;
  }
  
  .navbar-mobile-toggle {
    display: block;
  }
}
```

---

## 🧪 Testing Checklist

- [ ] Renders with correct height
- [ ] Logo displays
- [ ] Nav items display
- [ ] Active state works
- [ ] Search works (if enabled)
- [ ] Actions display
- [ ] User menu works
- [ ] Breadcrumbs display
- [ ] Sticky works
- [ ] Mobile menu works
- [ ] Keyboard navigation
- [ ] aria-label present

---

## 📚 Related Components

- [Sidebar](./Sidebar.md) — Side navigation
- [Breadcrumbs](./Breadcrumbs.md) — Breadcrumb navigation
- [Dropdown](./Dropdown.md) — User menu
- [Avatar](./Avatar.md) — User avatar

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
