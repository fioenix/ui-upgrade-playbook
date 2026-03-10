# Alert Component

**Feedback messages for user actions and system status**

---

## 📐 Purpose

Communicate important information about system status, user actions, or required attention. Use for:
- Success messages (form submitted)
- Error messages (action failed)
- Warnings (potential issues)
- Info messages (helpful notices)

---

## 🎨 Variants

| Variant | Use Case | Icon | Background | Border |
|---------|----------|------|------------|--------|
| **info** | General information | ℹ️ | --color-primary-50 | --color-primary-200 |
| **success** | Positive feedback | ✓ | --color-success-50 | --color-success-200 |
| **warning** | Caution needed | ⚠️ | --color-warning-50 | --color-warning-200 |
| **error** | Errors, failures | ✕ | --color-danger-50 | --color-danger-200 |

---

## 📏 Sizes

| Size | Padding | Icon Size | Font Size | Use Case |
|------|---------|-----------|-----------|----------|
| **sm** | 8px 12px | 16px | 13px | Inline alerts, compact spaces |
| **md** | 12px 16px | 20px | 14px | Default, most use cases |
| **lg** | 16px 20px | 24px | 16px | Prominent alerts, page-level |

---

## 🎯 Anatomy

```
┌─────────────────────────────────────────────────────────┐
│ [Icon]  Title (optional)                         [✕]   │
│         Description text goes here...                   │
│         [Action Link] [Secondary Action]                │
└─────────────────────────────────────────────────────────┘
```

**Parts:**
- Icon (variant-specific)
- Title (optional, bold)
- Description (required)
- Actions (optional)
- Close button (optional)

---

## 🧩 Props Interface

```typescript
interface AlertProps {
  // Content
  title?: string;
  children: React.ReactNode; // Description
  
  // Appearance
  variant?: 'info' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode; // Custom icon
  showIcon?: boolean;
  
  // Behavior
  closable?: boolean;
  onClose?: () => void;
  
  // Actions
  action?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  
  // Accessibility
  role?: 'alert' | 'status' | 'alertdialog';
  ariaLabel?: string;
}
```

---

## 🎯 States

| State | Behavior |
|-------|----------|
| **visible** | Fully shown |
| **closing** | Fade out animation |
| **closed** | Hidden, unmounted |

---

## 📝 Usage Examples

### Info Alert
```tsx
<Alert variant="info" title="New Feature Available">
  We've added a new dashboard. <a href="/new-dashboard">Check it out</a>
</Alert>
```

### Success Alert
```tsx
<Alert variant="success" title="Changes Saved">
  Your profile has been updated successfully.
</Alert>
```

### Warning Alert
```tsx
<Alert 
  variant="warning" 
  title="Storage Almost Full"
  action={{
    label: 'Upgrade Plan',
    onClick: handleUpgrade
  }}
>
  You're using 90% of your storage. Consider upgrading to avoid interruptions.
</Alert>
```

### Error Alert
```tsx
<Alert 
  variant="error" 
  title="Payment Failed"
  action={{
    label: 'Retry',
    onClick: handleRetry
  }}
  secondaryAction={{
    label: 'Contact Support',
    onClick: handleSupport
  }}
>
  We couldn't process your payment. Please try again or contact support.
</Alert>
```

### Closable Alert
```tsx
<Alert 
  variant="info"
  closable
  onClose={() => setAlertClosed(true)}
>
  This is a dismissible message.
</Alert>
```

### Without Icon
```tsx
<Alert variant="info" showIcon={false}>
  Simple message without icon.
</Alert>
```

---

## ♿ Accessibility

### Requirements
- [ ] role="alert" for important, time-sensitive messages
- [ ] role="status" for less urgent messages
- [ ] Icon has aria-hidden="true"
- [ ] Close button has aria-label="Close"
- [ ] Color contrast ≥ 4.5:1
- [ ] Not relying on color alone

### Implementation
```tsx
<Alert 
  variant="error"
  role="alert"
  ariaLabel="Error: Payment failed"
>
  <span>Payment failed. Please try again.</span>
</Alert>
```

---

## 🎨 CSS Implementation

### Base Styles
```css
.alert {
  display: flex;
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-md);
  border-left: 4px solid;
}

.alert-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-1);
}

.alert-description {
  color: var(--color-neutral-700);
}

.alert-close {
  background: transparent;
  border: none;
  padding: var(--spacing-1);
  cursor: pointer;
  opacity: 0.6;
  border-radius: var(--radius-sm);
}

.alert-close:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.05);
}

.alert-actions {
  display: flex;
  gap: var(--spacing-2);
  margin-top: var(--spacing-2);
}
```

### Variant Styles
```css
.alert-info {
  background: var(--color-primary-50);
  border-left-color: var(--color-primary-500);
  color: var(--color-primary-900);
}

.alert-success {
  background: var(--color-success-50);
  border-left-color: var(--color-success-500);
  color: var(--color-success-900);
}

.alert-warning {
  background: var(--color-warning-50);
  border-left-color: var(--color-warning-500);
  color: var(--color-warning-900);
}

.alert-error {
  background: var(--color-danger-50);
  border-left-color: var(--color-danger-500);
  color: var(--color-danger-900);
}
```

### Size Styles
```css
.alert-sm {
  padding: var(--spacing-2) var(--spacing-3);
  font-size: 13px;
}

.alert-md {
  padding: var(--spacing-3) var(--spacing-4);
  font-size: 14px;
}

.alert-lg {
  padding: var(--spacing-4) var(--spacing-5);
  font-size: 16px;
}
```

---

## 🧪 Testing Checklist

- [ ] Renders with correct variant color
- [ ] Title displays when provided
- [ ] Description displays
- [ ] Icon displays (when showIcon=true)
- [ ] Close button fires onClose
- [ ] Action button fires onClick
- [ ] Secondary action fires onClick
- [ ] role attribute correct
- [ ] aria-label present
- [ ] Color contrast passes WCAG
- [ ] Responsive on mobile

---

## 🚫 Anti-Patterns

### Don't:
```tsx
// ❌ Alert without clear message
<Alert variant="info">
  Something happened.
</Alert>

// ✅ Be specific
<Alert variant="info">
  Your session will expire in 5 minutes.
</Alert>

// ❌ Using alert for critical actions
<Alert variant="error">
  Delete your account?
  <Button onClick={handleDelete}>Delete</Button>
</Alert>

// ✅ Use Modal for confirmations
<Modal title="Delete Account">
  <p>Are you sure?</p>
  <Button onClick={handleDelete}>Delete</Button>
</Modal>

// ❌ Too many alerts stacked
<Alert variant="info">Info 1</Alert>
<Alert variant="success">Success</Alert>
<Alert variant="warning">Warning</Alert>
<Alert variant="error">Error</Alert>

// ✅ Consolidate or prioritize
<Alert variant="error">
  Payment failed. Please update your payment method.
</Alert>
```

---

## 📚 Related Components

- [Modal](./Modal.md) — For confirmations
- [Toast](./Toast.md) — For brief notifications
- [Badge](./Badge.md) — For inline status
- [Button](./Button.md) — Alert actions

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
