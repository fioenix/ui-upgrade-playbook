# Badge Component

**Small status indicators and labels**

---

## 📐 Purpose

Display status, counts, or labels inline with content. Use for:
- Status indicators (Active, Offline, Pending)
- Counts (notifications, items)
- Labels (tags, categories)
- Notifications (unread count)

---

## 🎨 Variants

| Variant | Use Case | Background | Text | Border |
|---------|----------|------------|------|--------|
| **default** | General labels | --color-neutral-100 | --color-neutral-700 | transparent |
| **primary** | Primary items | --color-primary-100 | --color-primary-700 | transparent |
| **success** | Positive status | --color-success-100 | --color-success-700 | transparent |
| **warning** | Caution status | --color-warning-100 | --color-warning-700 | transparent |
| **danger** | Error/danger | --color-danger-100 | --color-danger-700 | transparent |
| **info** | Informational | --color-info-100 | --color-info-700 | transparent |
| **outline** | Subtle emphasis | transparent | --color-neutral-600 | --color-neutral-300 |

---

## 📏 Sizes

| Size | Height | Padding | Font Size | Use Case |
|------|--------|---------|-----------|----------|
| **sm** | 20px | 4px 8px | 11px | Compact lists, dense tables |
| **md** | 24px | 6px 10px | 12px | Default, most use cases |
| **lg** | 28px | 8px 12px | 14px | Prominent displays |

---

## 🎯 States

| State | Visual Treatment |
|-------|------------------|
| **default** | Standard appearance |
| **dot** | Small circle (8px) for status |
| **with-icon** | Icon + text |
| **clickable** | Hover effect, cursor pointer |

---

## 🧩 Props Interface

```typescript
interface BadgeProps {
  // Content
  children: React.ReactNode;
  icon?: React.ReactNode;
  dot?: boolean; // Show only dot indicator
  
  // Appearance
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  
  // Behavior
  clickable?: boolean;
  onClick?: () => void;
  
  // Accessibility
  ariaLabel?: string;
}
```

---

## 📝 Usage Examples

### Status Badge
```tsx
<Badge variant="success">Active</Badge>
<Badge variant="danger">Offline</Badge>
<Badge variant="warning">Pending</Badge>
```

### Count Badge
```tsx
<Badge variant="primary">
  <span>Notifications</span>
  <Badge variant="danger" size="sm">5</Badge>
</Badge>
```

### Dot Indicator
```tsx
<div className="flex items-center gap-2">
  <Badge variant="success" dot />
  <span>Online</span>
</div>
```

### Badge with Icon
```tsx
<Badge variant="info" icon={<CheckIcon />}>
  Verified
</Badge>
```

### Clickable Badge
```tsx
<Badge 
  variant="outline" 
  clickable
  onClick={() => filterByTag('react')}
>
  #react
</Badge>
```

### In Table
```tsx
<Table columns={[
  { 
    key: 'status', 
    title: 'Status',
    render: (status) => (
      <Badge variant={status === 'active' ? 'success' : 'danger'}>
        {status}
      </Badge>
    )
  }
]} />
```

---

## ♿ Accessibility

### Requirements
- [ ] Meaningful text content (not just color)
- [ ] aria-label for icon-only badges
- [ ] Color contrast ≥ 4.5:1
- [ ] Not used for critical information alone

### Best Practices
```tsx
// ❌ Bad: Color-only status
<Badge variant="success" /> {/* What does green mean? */}

// ✅ Good: Color + text
<Badge variant="success">Active</Badge>

// ✅ Good: Icon + aria-label
<Badge variant="success" aria-label="Verified">
  <CheckIcon />
</Badge>
```

---

## 🎨 CSS Implementation

### Base Styles
```css
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  padding: 0;
}
```

### Variant Styles
```css
.badge-default {
  background: var(--color-neutral-100);
  color: var(--color-neutral-700);
}

.badge-primary {
  background: var(--color-primary-100);
  color: var(--color-primary-700);
}

.badge-success {
  background: var(--color-success-100);
  color: var(--color-success-700);
}

.badge-warning {
  background: var(--color-warning-100);
  color: var(--color-warning-700);
}

.badge-danger {
  background: var(--color-danger-100);
  color: var(--color-danger-700);
}

.badge-outline {
  background: transparent;
  color: var(--color-neutral-600);
  border: 1px solid var(--color-neutral-300);
}
```

### Size Styles
```css
.badge-sm {
  height: 20px;
  padding: 4px 8px;
  font-size: 11px;
}

.badge-md {
  height: 24px;
  padding: 6px 10px;
  font-size: 12px;
}

.badge-lg {
  height: 28px;
  padding: 8px 12px;
  font-size: 14px;
}

.badge-clickable {
  cursor: pointer;
  transition: all var(--transition-fast);
}

.badge-clickable:hover {
  opacity: 0.8;
  transform: translateY(-1px);
}
```

---

## 🧪 Testing Checklist

- [ ] Renders with correct text
- [ ] Variant colors display correctly
- [ ] Size variants render correctly
- [ ] Dot indicator shows
- [ ] Icon displays correctly
- [ ] Clickable badge fires onClick
- [ ] Hover effect on clickable
- [ ] Color contrast passes WCAG
- [ ] aria-label present when needed

---

## 🚫 Anti-Patterns

### Don't:
```tsx
// ❌ Too much text
<Badge variant="primary">
  This is a very long status message that should not be in a badge
</Badge>

// ✅ Keep it short
<Badge variant="primary">Active</Badge>

// ❌ Using badge for actions
<Badge clickable onClick={handleDelete}> {/* Don't */}
  Delete
</Badge>

// ✅ Use Button for actions
<Button size="sm" onClick={handleDelete}>
  Delete
</Button>

// ❌ Color-only status
<Badge variant="success" /> {/* Unclear meaning */}

// ✅ Add text or icon
<Badge variant="success" aria-label="Active">
  <CheckIcon />
</Badge>
```

---

## 📚 Related Components

- [Button](./Button.md) — For actions
- [Avatar](./Avatar.md) — With status indicator
- [Table](./Table.md) — Status column
- [Alert](./Alert.md) — For important notices

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
