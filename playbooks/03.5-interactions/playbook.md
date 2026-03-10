# Playbook 03.5: Micro-interactions

**Add polish and feedback through animations**

---

## 🎯 Goal

Implement micro-interactions for:
- Hover effects
- Loading states
- Success/error feedback
- Transitions
- Empty states

**Output:** Polished, responsive UI with delightful feedback

---

## ⏱️ Estimated Time

- 30-45 minutes

---

## 📋 Prerequisites

- [ ] Playbook 03 (Components) complete
- [ ] Core components working
- [ ] CSS tokens set up

---

## 🚀 Execution Steps

### Step 1: Review Micro-interactions Guide

Read `guide.md` and understand:
- Animation timing
- Easing functions
- Loading patterns
- Feedback patterns

---

### Step 2: Add Hover Effects

**Goal:** Interactive elements feel responsive.

**Actions:**
1. Add hover to buttons
2. Add hover to cards
3. Add hover to links

**Before:**
```css
.btn {
  background: var(--color-primary-600);
}
```

**After:**
```css
.btn {
  background: var(--color-primary-600);
  transition: transform 150ms ease, box-shadow 150ms ease;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
```

---

### Step 3: Add Loading States

**Goal:** Users know when action is in progress.

**Actions:**
1. Add skeleton to content loading
2. Add spinner to button actions
3. Add progress bar to uploads

**Pattern:**
```tsx
{isLoading ? (
  <div className="skeleton">
    <div className="skeleton-text" />
  </div>
) : (
  <Content />
)}
```

---

### Step 4: Add Success Feedback

**Goal:** Users know when action succeeded.

**Actions:**
1. Add toast notifications
2. Add optimistic UI updates
3. Add checkmark animations

**Pattern:**
```tsx
toast.success('Saved!', {
  duration: 3000,
  icon: <CheckIcon className="animate-bounce" />
});
```

---

### Step 5: Add Error Feedback

**Goal:** Users know what went wrong.

**Actions:**
1. Add inline error states
2. Add toast errors with retry
3. Add input shake animation

**Pattern:**
```tsx
<Input
  error={error}
  className={error ? 'animate-shake' : ''}
/>
```

---

### Step 6: Add Transitions

**Goal:** Smooth state changes.

**Actions:**
1. Add fade to modals
2. Add slide to dropdowns
3. Add scale to dialogs

**Pattern:**
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

### Step 7: Add Empty States

**Goal:** Helpful when no data.

**Actions:**
1. Add icon + title + message
2. Add CTA button
3. Add helpful guidance

**Pattern:**
```tsx
{data.length === 0 ? (
  <EmptyState
    icon="📭"
    title="No items"
    message="Create your first item to get started."
    action={{ label: 'Create', onClick: handleCreate }}
  />
) : (
  <List data={data} />
)}
```

---

### Step 8: Respect Accessibility

**Goal:** Animations don't cause issues.

**Actions:**
1. Check prefers-reduced-motion
2. Reduce animation duration
3. Ensure feedback isn't animation-only

**CSS:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## ✅ Validation Checklist

- [ ] Hover effects feel responsive (150ms)
- [ ] Loading states show within 200ms
- [ ] Success feedback is clear
- [ ] Error states are noticeable
- [ ] Transitions are smooth (no jank)
- [ ] Empty states are helpful
- [ ] Respects prefers-reduced-motion
- [ ] Performance is good (60fps)

---

## 📚 Related Documents

- `guide.md` — Micro-interactions reference
- `../../design-system/tokens.json` — Token values
- `../../validation/checklist.md` — Validation criteria

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
