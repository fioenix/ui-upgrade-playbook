# Button Component

**Primary interactive element for user actions**

---

## 📐 Anatomy

```
┌─────────────────────────────┐
│  [icon]  Button Text  [↑]  │
│  ← Left  Center     Right →│
└─────────────────────────────┘
```

**Parts:**
- Container (with background/border)
- Label (text content)
- Icon (optional, left or right)
- Loading indicator (replaces label when loading)

---

## 🎨 Variants

### Primary
**Use:** Main call-to-action, form submissions

```tsx
<Button variant="primary">Save Changes</Button>
```

**Styling:**
- Background: `--color-primary`
- Text: white
- Border: none
- Hover: `--color-primary-hover` (darker)

---

### Secondary
**Use:** Supporting actions, cancel buttons

```tsx
<Button variant="secondary">Cancel</Button>
```

**Styling:**
- Background: transparent
- Text: `--color-secondary-600`
- Border: `--color-border`
- Hover: background `--color-background-secondary`

---

### Tertiary
**Use:** Low-emphasis actions, links

```tsx
<Button variant="tertiary">Learn more</Button>
```

**Styling:**
- Background: transparent
- Text: `--color-primary`
- Border: none
- Hover: underline

---

### Danger
**Use:** Destructive actions (delete, remove)

```tsx
<Button variant="danger">Delete Account</Button>
```

**Styling:**
- Background: `--color-danger`
- Text: white
- Border: none
- Hover: `--color-danger-hover` (darker)

---

## 📏 Sizes

| Size | Height | Padding | Font Size | Icon Size |
|------|--------|---------|-----------|-----------|
| sm | 32px | 8px 12px | 0.875rem (sm) | 16px |
| md | 40px | 10px 16px | 1rem (base) | 18px |
| lg | 48px | 12px 20px | 1.125rem (lg) | 20px |

---

## 🎯 States

### Default
```tsx
<Button>Click me</Button>
```

### Hover
- Background darkens by 10%
- Cursor: pointer

### Active (Pressed)
- Background darkens by 20%
- Transform: scale(0.98)

### Disabled
```tsx
<Button disabled>Cannot click</Button>
```
- Opacity: 0.5
- Cursor: not-allowed
- No hover effects

### Loading
```tsx
<Button loading>Loading...</Button>
```
- Show spinner (16px)
- Disable interactions
- Keep button width stable

---

## 🧩 Props API

```typescript
interface ButtonProps {
  // Content
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  
  // Appearance
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  
  // Behavior
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: MouseEvent) => void;
  
  // Accessibility
  ariaLabel?: string;
  ariaDisabled?: boolean;
}
```

---

## 📝 Usage Examples

### Form Submission
```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" variant="primary">
    Save Changes
  </Button>
  <Button type="button" variant="secondary">
    Cancel
  </Button>
</form>
```

### Icon Button
```tsx
<Button icon={<TrashIcon />} variant="danger" size="sm">
  Delete
</Button>

// Icon only
<Button icon={<SettingsIcon />} ariaLabel="Settings">
  {/* Text hidden, icon shown */}
</Button>
```

### Loading State
```tsx
<Button 
  loading={isSaving} 
  onClick={handleSave}
>
  {isSaving ? 'Saving...' : 'Save'}
</Button>
```

### Full Width
```tsx
<div className="mobile-actions">
  <Button fullWidth variant="primary">
    Continue
  </Button>
</div>
```

---

## ♿ Accessibility

### Requirements
- [ ] Semantic `<button>` element
- [ ] Focus indicator (2px outline)
- [ ] Keyboard accessible (Enter/Space)
- [ ] aria-label for icon-only buttons
- [ ] aria-busy="true" when loading
- [ ] aria-disabled for disabled state

### Focus Style
```css
button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

## 🎨 CSS Implementation

### Base Styles
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  cursor: pointer;
  white-space: nowrap;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

### Variant Styles
```css
.btn-primary {
  background: var(--color-primary);
  color: white;
  border: none;
}

.btn-primary:hover:not(:disabled) {
  background: var(--color-primary-600);
}

.btn-secondary {
  background: transparent;
  color: var(--color-secondary-600);
  border: 1px solid var(--color-border);
}

.btn-secondary:hover:not(:disabled) {
  background: var(--color-background-secondary);
}

.btn-danger {
  background: var(--color-danger);
  color: white;
  border: none;
}

.btn-danger:hover:not(:disabled) {
  background: var(--color-danger-600);
}
```

### Size Styles
```css
.btn-sm {
  height: 32px;
  padding: 8px 12px;
  font-size: var(--font-size-sm);
}

.btn-md {
  height: 40px;
  padding: 10px 16px;
  font-size: var(--font-size-base);
}

.btn-lg {
  height: 48px;
  padding: 12px 20px;
  font-size: var(--font-size-lg);
}

.btn-full-width {
  width: 100%;
}
```

---

## 🧪 Testing Checklist

- [ ] Renders with correct text
- [ ] onClick fires on click
- [ ] Disabled button not clickable
- [ ] Loading state shows spinner
- [ ] Keyboard navigation works
- [ ] Focus styles visible
- [ ] Hover styles apply
- [ ] Full width works on mobile
- [ ] Icon positioning correct
- [ ] Screen reader announces correctly

---

## 🚫 Anti-Patterns

### Don't:
```tsx
// ❌ Using button for navigation
<Button onClick={() => navigate('/page')}>Go</Button>

// ✅ Use Link component
<Link to="/page"><Button>Go</Button></Link>

// ❌ Too many primary buttons
<Button variant="primary">Save</Button>
<Button variant="primary">Cancel</Button>
<Button variant="primary">Delete</Button>

// ✅ One primary per section
<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="danger">Delete</Button>

// ❌ Vague labels
<Button>Click here</Button>

// ✅ Descriptive labels
<Button>Download Report</Button>
```

---

## 📚 Related Components

- [Link](./Link.md) — Navigation actions
- [IconButton](./IconButton.md) — Icon-only actions
- [ButtonGroup](./ButtonGroup.md) — Grouped buttons
- [Dropdown](./Dropdown.md) — Menu actions

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
