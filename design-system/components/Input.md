# Input Component

**Form input field for text entry**

---

## 📐 Anatomy

```
┌─────────────────────────────────────┐
│ Label (optional)              *     │
├─────────────────────────────────────┤
│ [icon]  Placeholder text     [↑]   │
│  Left              Right (action)   │
├─────────────────────────────────────┤
│ Helper text / Error message         │
└─────────────────────────────────────┘
```

**Parts:**
- Label (optional, with required indicator)
- Input container
- Left icon (optional)
- Input field
- Right action (clear, toggle, etc.)
- Helper/Error text

---

## 🎨 Variants

### Default
**Use:** Standard text input

```tsx
<Input label="Email" placeholder="you@example.com" />
```

---

### With Icon
**Use:** Search, username, specialized inputs

```tsx
<Input 
  label="Search" 
  icon={<SearchIcon />} 
  placeholder="Search..."
/>
```

---

### With Action
**Use:** Password toggle, clear button

```tsx
<Input
  label="Password"
  type="password"
  rightAction={<ToggleVisibility />}
/>
```

---

### Error State
**Use:** Validation failed

```tsx
<Input
  label="Email"
  error="Invalid email format"
  value={invalidEmail}
/>
```

---

### Disabled
**Use:** Read-only, not editable

```tsx
<Input label="ID" value="12345" disabled />
```

---

## 📏 Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| sm | 32px | 8px 12px | 0.875rem (sm) |
| md | 40px | 10px 16px | 1rem (base) |
| lg | 48px | 12px 20px | 1.125rem (lg) |

---

## 🎯 States

### Default
- Border: `--color-border`
- Background: white

### Focus
```tsx
<Input label="Email" />
```
- Border: 2px solid `--color-primary`
- No outline

### Error
```tsx
<Input label="Email" error="Required" />
```
- Border: 2px solid `--color-danger`
- Error text below in danger color

### Disabled
```tsx
<Input label="ID" disabled />
```
- Background: `--color-background-tertiary`
- Text: `--color-neutral-400`
- Cursor: not-allowed

### With Value
- Show clear button (optional)
- Icon may change state

---

## 🧩 Props API

```typescript
interface InputProps {
  // Content
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  
  // Behavior
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  
  // Validation
  error?: string;
  helperText?: string;
  
  // Appearance
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  rightAction?: React.ReactNode;
  fullWidth?: boolean;
  
  // Events
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  
  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;
  id?: string;
}
```

---

## 📝 Usage Examples

### Basic Form
```tsx
<form onSubmit={handleSubmit}>
  <Input
    label="Email"
    type="email"
    placeholder="you@example.com"
    required
  />
  
  <Input
    label="Password"
    type="password"
    placeholder="••••••••"
    required
  />
  
  <Button type="submit">Sign In</Button>
</form>
```

### Search Input
```tsx
<Input
  icon={<SearchIcon />}
  placeholder="Search users..."
  value={searchQuery}
  onChange={setSearchQuery}
  rightAction={
    searchQuery && <ClearButton onClick={() => setSearchQuery('')} />
  }
/>
```

### With Validation
```tsx
<Input
  label="Email"
  value={email}
  onChange={handleEmailChange}
  error={emailError}
  helperText={!emailError ? "We'll never share your email" : undefined}
/>
```

### Number Input
```tsx
<Input
  label="Quantity"
  type="number"
  min={1}
  max={100}
  value={quantity}
  onChange={setQuantity}
/>
```

---

## ♿ Accessibility

### Requirements
- [ ] Label associated with input (htmlFor/id)
- [ ] aria-invalid when error
- [ ] aria-describedby for helper/error text
- [ ] aria-required for required fields
- [ ] Focus indicator visible
- [ ] Error announced to screen readers

### Implementation
```tsx
<Input
  id="email"
  label="Email"
  error={error}
  aria-invalid={!!error}
  aria-describedby={error ? 'email-error' : 'email-helper'}
/>

<div id="email-error" role="alert">
  {error}
</div>
```

---

## 🎨 CSS Implementation

### Base Styles
```css
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.input-label {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-neutral-600);
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: white;
  transition: border-color var(--transition-fast);
}

.input-container:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-100);
}

.input-field {
  width: 100%;
  border: none;
  outline: none;
  font-size: var(--font-size-base);
  padding: 10px 16px;
}

.input-icon {
  color: var(--color-neutral-400);
  margin: 0 8px;
}

.input-error {
  font-size: var(--font-size-sm);
  color: var(--color-danger);
}

.input-helper {
  font-size: var(--font-size-sm);
  color: var(--color-neutral-500);
}
```

### Error State
```css
.input-container.error {
  border-color: var(--color-danger);
}

.input-container.error:focus-within {
  box-shadow: 0 0 0 2px var(--color-danger-100);
}
```

### Disabled State
```css
.input-container.disabled {
  background: var(--color-background-tertiary);
  cursor: not-allowed;
}

.input-field:disabled {
  color: var(--color-neutral-400);
}
```

---

## 🧪 Testing Checklist

- [ ] Value updates on change
- [ ] onChange callback fires
- [ ] onFocus/onBlur callbacks fire
- [ ] Error state displays correctly
- [ ] Disabled state prevents input
- [ ] Required validation works
- [ ] Label correctly associated
- [ ] Screen reader announces properly
- [ ] Keyboard navigation works
- [ ] Clear button works (if present)
- [ ] Password toggle works (if present)

---

## 🚫 Anti-Patterns

### Don't:
```tsx
// ❌ Missing label
<Input placeholder="Enter email" />

// ✅ Always use label
<Input label="Email" placeholder="you@example.com" />

// ❌ Using placeholder as label
<Input placeholder="Email Address" />

// ✅ Use both
<Input label="Email" placeholder="you@example.com" />

// ❌ Vague error messages
<Input error="Invalid" />

// ✅ Specific error messages
<Input error="Please enter a valid email address" />

// ❌ Too many inputs without grouping
<Input label="First Name" />
<Input label="Last Name" />
<Input label="Email" />
<Input label="Phone" />

// ✅ Group related inputs
<fieldset>
  <legend>Contact Information</legend>
  <Input label="Email" />
  <Input label="Phone" />
</fieldset>
```

---

## 📚 Related Components

- [Textarea](./Textarea.md) — Multi-line input
- [Select](./Select.md) — Dropdown selection
- [Checkbox](./Checkbox.md) — Boolean input
- [Radio](./Radio.md) — Single choice
- [Form](./Form.md) — Form container

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
