# Micro-interactions Guide

**Delightful, functional animations and feedback**

---

## 🎯 Purpose

Micro-interactions enhance UX by providing:
- **Feedback** — Confirm actions
- **Guidance** — Show what's possible
- **Delight** — Make app feel polished
- **Continuity** — Smooth transitions

---

## ⚡ Animation Principles

### 1. Timing

| Duration | Use Case | Feeling |
|----------|----------|---------|
| **100ms** | Simple state changes | Instant, snappy |
| **150ms** | Hover effects | Quick, responsive |
| **200ms** | Button clicks, toggles | Natural |
| **300ms** | Modals, panels | Smooth, deliberate |
| **500ms** | Page transitions | Grand, noticeable |

**CSS:**
```css
/* Fast - hover states */
.btn {
  transition: all 150ms ease;
}

/* Normal - buttons, toggles */
.modal {
  transition: opacity 300ms ease;
}

/* Slow - page transitions */
.page {
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

### 2. Easing

| Easing | CSS | Use Case |
|--------|-----|----------|
| **Ease** | `ease` | General purpose |
| **Ease In** | `cubic-bezier(0.4, 0, 1, 1)` | Entering (fade in) |
| **Ease Out** | `cubic-bezier(0, 0, 0.2, 1)` | Exiting (fade out) |
| **Ease In Out** | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard transitions |
| **Spring** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful, bouncy |

---

## 🎨 Hover Effects

### Button Hover

```css
.btn {
  transform: translateY(0);
  transition: transform 150ms ease, box-shadow 150ms ease;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
```

### Card Hover

```css
.card {
  transform: translateY(0);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

### Link Hover

```css
.link {
  position: relative;
  color: var(--color-primary-600);
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 200ms ease;
}

.link:hover::after {
  width: 100%;
}
```

---

## ⏳ Loading States

### 1. Skeleton Loading

**Use for:** Content loading (lists, feeds, cards)

```tsx
<div className="skeleton">
  <div className="skeleton-avatar" />
  <div className="skeleton-text" />
  <div className="skeleton-text short" />
</div>
```

**CSS:**
```css
.skeleton {
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-neutral-200);
  margin-bottom: var(--spacing-3);
}

.skeleton-text {
  height: 16px;
  background: var(--color-neutral-200);
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-2);
}

.skeleton-text.short {
  width: 60%;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

---

### 2. Button Spinner

**Use for:** Form submissions, actions

```tsx
<Button loading>
  <span className="spinner" />
  Saving...
</Button>
```

**CSS:**
```css
.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

---

### 3. Progress Bar

**Use for:** Uploads, multi-step processes

```tsx
<div className="progress-bar">
  <div className="progress-fill" style={{ width: '60%' }} />
</div>
```

**CSS:**
```css
.progress-bar {
  width: 100%;
  height: 4px;
  background: var(--color-neutral-200);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--color-primary-600);
  transition: width 300ms ease;
}
```

---

## ✅ Success Feedback

### 1. Toast with Checkmark

```tsx
<Toast variant="success">
  <CheckmarkIcon className="animate-bounce" />
  Saved successfully!
</Toast>
```

**CSS:**
```css
@keyframes bounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.animate-bounce {
  animation: bounce 200ms ease;
}
```

---

### 2. Optimistic UI Update

**Pattern:**
```tsx
// Update UI immediately
setItems([...items, newItem]);

// Then submit to server
await api.createItem(newItem);

// If fails, rollback
if (error) {
  setItems(items.filter(i => i.id !== newItem.id));
  toast.error('Failed to create');
}
```

---

## ❌ Error States

### 1. Input Shake

**Use for:** Invalid form submission

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
}

.input-error {
  animation: shake 400ms ease;
}
```

---

### 2. Toast Error

```tsx
<Toast variant="error" action={{ label: 'Retry', onClick: retry }}>
  Failed to save. Please try again.
</Toast>
```

**CSS:**
```css
.toast-error {
  background: var(--color-danger-50);
  border-left: 4px solid var(--color-danger-500);
  color: var(--color-danger-900);
}
```

---

## 📭 Empty States

### Structure

```tsx
<div className="empty-state">
  <div className="empty-icon">📭</div>
  <h3 className="empty-title">No notifications</h3>
  <p className="empty-message">
    When you have notifications, they'll appear here.
  </p>
  <Button onClick={handleAction}>Create First Item</Button>
</div>
```

**CSS:**
```css
.empty-state {
  text-align: center;
  padding: var(--spacing-12);
}

.empty-icon {
  font-size: 64px;
  margin-bottom: var(--spacing-4);
  opacity: 0.5;
}

.empty-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-2);
}

.empty-message {
  color: var(--color-neutral-500);
  margin-bottom: var(--spacing-6);
}
```

---

## 🔄 Transitions

### 1. Fade In/Out

```css
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms ease;
}

.fade-exit {
  opacity: 1;
}

.fade-exit-active {
  opacity: 0;
  transition: opacity 300ms ease;
}
```

---

### 2. Slide In/Out

```css
.slide-enter {
  transform: translateY(20px);
  opacity: 0;
}

.slide-enter-active {
  transform: translateY(0);
  opacity: 1;
  transition: transform 300ms ease, opacity 300ms ease;
}
```

---

### 3. Scale In/Out

```css
.scale-enter {
  transform: scale(0.95);
  opacity: 0;
}

.scale-enter-active {
  transform: scale(1);
  opacity: 1;
  transition: transform 200ms ease, opacity 200ms ease;
}
```

---

## 🎯 Component-Specific Patterns

### Modal

| State | Animation | Duration |
|-------|-----------|----------|
| Enter | Fade + Scale | 300ms |
| Exit | Fade + Scale | 200ms |
| Overlay | Fade only | 200ms |

```css
.modal-enter {
  opacity: 0;
  transform: scale(0.95);
}

.modal-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: all 300ms ease;
}
```

---

### Dropdown

| State | Animation | Duration |
|-------|-----------|----------|
| Enter | Fade + Slide down | 150ms |
| Exit | Fade + Slide up | 100ms |

```css
.dropdown-enter {
  opacity: 0;
  transform: translateY(-8px);
}

.dropdown-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 150ms ease;
}
```

---

### Accordion

| State | Animation | Duration |
|-------|-----------|----------|
| Expand | Height + Fade | 300ms |
| Collapse | Height + Fade | 300ms |

```css
.accordion-content {
  overflow: hidden;
  transition: height 300ms ease;
}
```

---

## ♿ Accessibility

### Respect User Preferences

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### JavaScript Check

```tsx
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (!prefersReducedMotion) {
  // Enable animations
}
```

---

## 🧪 Testing Checklist

- [ ] Hover effects feel responsive (not laggy)
- [ ] Loading states show within 200ms
- [ ] Success feedback is clear and brief
- [ ] Error states are noticeable but not jarring
- [ ] Transitions are smooth (no jank)
- [ ] Animations respect prefers-reduced-motion
- [ ] Performance is good (60fps)
- [ ] Animations enhance, not distract

---

## 📚 Resources

- [Easing Cheat Sheet](https://easings.net)
- [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
