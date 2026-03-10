# Modal Component

**Overlay dialog for focused tasks and confirmations**

---

## 📐 Purpose

Display content that requires user attention without leaving the current context. Use for:
- Confirmations (delete, submit)
- Forms (create, edit)
- Detailed views
- Alerts and warnings

---

## 🎨 Variants

| Variant | Use Case | Header Style | Actions |
|---------|----------|--------------|---------|
| **default** | General content | Title + close button | Footer actions |
| **confirmation** | Confirm actions | Warning icon + title | Cancel + Confirm |
| **form** | Data entry | Title + close | Cancel + Submit |
| **alert** | Important notices | Icon + title | Single action |
| **fullscreen** | Complex content | Full header | As needed |

---

## 📏 Sizes

| Size | Width | Max Height | Use Case |
|------|-------|------------|----------|
| **sm** | 400px | auto | Confirmations, alerts |
| **md** | 560px | auto | Standard forms |
| **lg** | 768px | 80vh | Complex forms, details |
| **xl** | 1024px | 80vh | Rich content |
| **fullscreen** | 100% | 100% | Complex editors |

---

## 🎯 Anatomy

```
┌─────────────────────────────────────┐
│ [Overlay/Backdrop]                  │
│   ┌─────────────────────────────┐   │
│   │ Header                      │   │
│   │ ┌─────────────────────┐     │   │
│   │ │ Title      [✕ Close]│     │   │
│   │ │ Subtitle (optional) │     │   │
│   │ └─────────────────────┘     │   │
│   ├─────────────────────────────┤   │
│   │ Body                        │   │
│   │                             │   │
│   │ [Content goes here]         │   │
│   │                             │   │
│   ├─────────────────────────────┤   │
│   │ Footer                      │   │
│   │ [Cancel]  [Confirm]         │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

---

## 🧩 Props Interface

```typescript
interface ModalProps {
  // Content
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  icon?: React.ReactNode; // For confirmation/alert
  
  // Behavior
  isOpen: boolean;
  onClose: () => void;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  trapFocus?: boolean;
  
  // Appearance
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
  variant?: 'default' | 'confirmation' | 'form' | 'alert' | 'fullscreen';
  showCloseButton?: boolean;
  showFooter?: boolean;
  
  // Actions
  primaryAction?: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
    variant?: 'primary' | 'danger';
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
    variant?: 'secondary' | 'ghost';
  };
  
  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;
}
```

---

## 🎯 States

| State | Behavior |
|-------|----------|
| **closed** | Not visible, content not rendered |
| **opening** | Fade/slide animation in progress |
| **open** | Fully visible, focus trapped |
| **closing** | Fade/slide animation out |
| **loading** | Actions disabled, spinner shown |

---

## ♿ Accessibility

### Requirements
- [ ] Focus trapped when open
- [ ] Return focus to trigger element on close
- [ ] Close on Escape key
- [ ] aria-modal="true"
- [ ] aria-labelledby points to title
- [ ] aria-describedby for description
- [ ] Role="dialog"
- [ ] Overlay has aria-hidden="true"

### Keyboard Navigation
- **Escape** — Close modal
- **Tab** — Cycle through focusable elements
- **Shift+Tab** — Reverse cycle

---

## 📝 Usage Examples

### Basic Modal
```tsx
<Modal
  title="Edit Profile"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="md"
>
  <Modal.Body>
    <p>Modal content goes here...</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleSave}>
      Save
    </Button>
  </Modal.Footer>
</Modal>
```

### Confirmation Modal
```tsx
<Modal
  variant="confirmation"
  title="Delete Account"
  icon={<WarningIcon className="text-warning-500" />}
  isOpen={showDeleteModal}
  onClose={() => setShowDeleteModal(false)}
  size="sm"
  primaryAction={{
    label: 'Delete',
    onClick: handleDelete,
    variant: 'danger',
    loading: isDeleting
  }}
  secondaryAction={{
    label: 'Cancel',
    onClick: () => setShowDeleteModal(false),
    variant: 'secondary'
  }}
>
  <p>Are you sure you want to delete your account? This action cannot be undone.</p>
</Modal>
```

### Form Modal
```tsx
<Modal
  title="Create User"
  isOpen={isCreateModalOpen}
  onClose={() => setIsCreateModalOpen(false)}
  size="lg"
  closeOnOverlayClick={false}
  primaryAction={{
    label: 'Create User',
    onClick: handleCreate,
    loading: isCreating
  }}
  secondaryAction={{
    label: 'Cancel',
    onClick: () => setIsCreateModalOpen(false),
    variant: 'secondary'
  }}
>
  <form onSubmit={handleCreate}>
    <Input label="Name" required />
    <Input label="Email" type="email" required />
    <Input label="Password" type="password" required />
  </form>
</Modal>
```

### Fullscreen Modal
```tsx
<Modal
  title="Settings"
  isOpen={isSettingsOpen}
  onClose={() => setIsSettingsOpen(false)}
  size="fullscreen"
  variant="fullscreen"
>
  <SettingsContent />
</Modal>
```

---

## 🎨 CSS Implementation

### Base Styles
```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.modal-overlay.open {
  opacity: 1;
}

.modal-container {
  background: var(--color-background-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: scale(0.95);
  transition: transform var(--transition-normal);
}

.modal-overlay.open .modal-container {
  transform: scale(1);
}

.modal-header {
  padding: var(--spacing-4) var(--spacing-6);
  border-bottom: 1px solid var(--color-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.modal-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-900);
  margin: 0;
}

.modal-subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-neutral-500);
  margin-top: var(--spacing-1);
}

.modal-close {
  background: transparent;
  border: none;
  padding: var(--spacing-2);
  cursor: pointer;
  color: var(--color-neutral-400);
  border-radius: var(--radius-md);
}

.modal-close:hover {
  background: var(--color-background-secondary);
  color: var(--color-neutral-600);
}

.modal-body {
  padding: var(--spacing-6);
  overflow-y: auto;
  flex: 1;
}

.modal-footer {
  padding: var(--spacing-4) var(--spacing-6);
  border-top: 1px solid var(--color-border-subtle);
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-3);
  background: var(--color-background-secondary);
}
```

### Size Variants
```css
.modal-sm { width: 400px; }
.modal-md { width: 560px; }
.modal-lg { width: 768px; }
.modal-xl { width: 1024px; }
.modal-fullscreen {
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  border-radius: 0;
}
```

---

## 🧪 Testing Checklist

- [ ] Opens when isOpen=true
- [ ] Closes on close button click
- [ ] Closes on overlay click (if enabled)
- [ ] Closes on Escape key
- [ ] Focus trapped inside modal
- [ ] Focus returns to trigger on close
- [ ] Primary action fires callback
- [ ] Secondary action fires callback
- [ ] Loading state disables actions
- [ ] Scroll locked on body when open
- [ ] aria-modal attribute present
- [ ] Title referenced by aria-labelledby

---

## 🚫 Anti-Patterns

### Don't:
```tsx
// ❌ Modal with no close mechanism
<Modal isOpen={true} title="No Escape">
  <p>Stuck!</p>
</Modal>

// ✅ Always provide close option
<Modal 
  isOpen={true} 
  onClose={() => setIsOpen(false)}
  closeOnEsc={true}
  closeOnOverlayClick={true}
>
  <p>Can escape!</p>
</Modal>

// ❌ Nesting modals
<Modal isOpen={modal1}>
  <Modal isOpen={modal2}> {/* Don't do this */}
    Content
  </Modal>
</Modal>

// ✅ Use a single modal with dynamic content
<Modal isOpen={currentModal} onClose={closeModal}>
  {currentModal === 'step1' && <Step1Content />}
  {currentModal === 'step2' && <Step2Content />}
</Modal>

// ❌ Too much content without scroll
<Modal size="sm">
  <VeryLongForm /> {/* Overflows */}
</Modal>

// ✅ Use appropriate size or fullscreen
<Modal size="lg" or <Modal size="fullscreen">
  <VeryLongForm />
</Modal>
```

---

## 📚 Related Components

- [Button](./Button.md) — Modal actions
- [Input](./Input.md) — Form inputs in modals
- [Alert](./Alert.md) — Inline alerts
- [Dropdown](./Dropdown.md) — Alternative for simple menus

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
