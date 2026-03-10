# Design Guidelines

**Visual Design Principles for Internal Dashboards**

---

## 🎨 Design Philosophy

### For Internal Admin Tools

> **Clarity > Creativity**
> **Consistency > Uniqueness**
> **Speed > Beauty**

Internal dashboards serve a purpose: help users complete tasks efficiently. Design should support this goal, not distract from it.

---

## 📐 Core Principles

### 1. Visual Hierarchy

**Goal:** Users should know where to look first, second, third.

**How:**
- **Size:** Important elements are larger (headings, primary actions)
- **Color:** Use color sparingly for emphasis (primary actions, alerts)
- **Spacing:** Group related items, separate unrelated ones
- **Weight:** Bold for importance, regular for content

**Example:**
```
Page Title (2xl, bold)
├── Section Heading (lg, semibold)
│   ├── Card Title (base, medium)
│   └── Card Content (base, normal)
└── Action Button (primary color, medium weight)
```

---

### 2. Color Usage

**Goal:** Color communicates meaning, not decoration.

**Rules:**
1. **Primary color** = Main actions, active states, links
2. **Secondary color** = Supporting elements, borders, icons
3. **Success/Warning/Danger** = Status only (don't use for decoration)
4. **Neutral colors** = Text, backgrounds, borders

**Do's:**
- ✅ Use primary color for main CTA buttons
- ✅ Use danger color only for destructive actions
- ✅ Use consistent color for same meaning across app

**Don'ts:**
- ❌ Don't use more than 3 colors per screen
- ❌ Don't use red/green as only differentiator (accessibility)
- ❌ Don't use bright colors for backgrounds

---

### 3. Typography

**Goal:** Text is easy to read and scan.

**Font Stack:**
```css
/* Primary font for UI */
font-family: 'Inter', system-ui, -apple-system, sans-serif;

/* Monospace for code, data, IDs */
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```

**Type Scale:**
| Use Case | Size | Weight | Example |
|----------|------|--------|---------|
| Page Title | 1.875rem (3xl) | 700 | Dashboard |
| Section | 1.25rem (xl) | 600 | User Management |
| Card Title | 1rem (base) | 600 | User List |
| Body | 1rem (base) | 400 | Regular text |
| Caption | 0.875rem (sm) | 400 | Helper text |
| Label | 0.75rem (xs) | 600 | Form labels |

**Line Height:**
- Headings: 1.25
- Body: 1.5
- Dense (tables, lists): 1.25

---

### 4. Spacing System

**Goal:** Consistent rhythm throughout the UI.

**Base Unit:** 4px (0.25rem)

**Spacing Scale:**
```
0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96 (pixels)
0, 1, 2, 3,  4,  5,  6,  8,  10, 12, 16, 20, 24 (rem units)
```

**Common Patterns:**
```css
/* Card padding */
padding: 16px; /* p-4 */

/* Gap between elements */
gap: 12px; /* gap-3 */

/* Section spacing */
margin-bottom: 24px; /* mb-6 */

/* Page padding */
padding: 24px; /* p-6 */
```

**Component Spacing:**
- Inside buttons: 8px horizontal, 12px vertical
- Form field gap: 16px
- Card internal padding: 16-24px
- Between cards: 16-24px

---

### 5. Component Styling

#### Buttons

**Hierarchy:**
1. **Primary** — Main action (filled, primary color)
2. **Secondary** — Supporting action (outline, border)
3. **Tertiary** — Low emphasis (text only, no border)
4. **Danger** — Destructive action (filled, danger color)

**States:**
- Default → Hover → Active → Disabled
- Use opacity for disabled (0.5), not color change

**Sizing:**
- Small: 32px height, sm text
- Medium: 40px height, base text (default)
- Large: 48px height, lg text

#### Cards

**Structure:**
```
┌─────────────────────────┐
│ Header (optional)       │
│ - Title                 │
│ - Actions (right)       │
├─────────────────────────┤
│ Content                 │
│ - Flexible layout       │
├─────────────────────────┤
│ Footer (optional)       │
│ - Actions, metadata     │
└─────────────────────────┘
```

**Styling:**
- Background: white
- Border: 1px solid border-default
- Radius: 8px (md)
- Shadow: sm (default), md (elevated)
- Padding: 16-24px

#### Tables

**Rules:**
- Header: semibold, background-secondary
- Row hover: subtle background change
- Striped: optional for dense data
- Border: bottom only between rows
- Padding: 12px vertical, 16px horizontal

**Alignment:**
- Text: left
- Numbers: right
- Actions: right
- Status badges: center

#### Forms

**Layout:**
- Labels above inputs (not left-aligned)
- Required indicator: red asterisk (*)
- Helper text below input, 12px, muted color
- Error text below input, 12px, danger color

**Input Styling:**
- Height: 40px (medium)
- Border: 1px solid border-default
- Focus: 2px solid primary color
- Error: 2px solid danger color
- Radius: 6px

---

### 6. Layout Patterns

#### Page Layout

```
┌────────────────────────────────────┐
│ Header (64px)                      │
├─────────┬──────────────────────────┤
│ Sidebar │ Main Content             │
│ (256px) │ - Page Title             │
│         │ - Content Area           │
│         │ - Max width: 1440px      │
└─────────┴──────────────────────────┘
```

#### Dashboard Grid

```
┌──────────┬──────────┬──────────┐
│ Metric 1 │ Metric 2 │ Metric 3 │
│ Card     │ Card     │ Card     │
├──────────┴──────────┼──────────┤
│ Main Chart          │ Side     │
│ (2/3 width)         │ Panel    │
│                     │ (1/3)    │
├─────────────────────┼──────────┤
│ Data Table          │ Activity │
│ (recent items)      │ Feed     │
└─────────────────────┴──────────┘
```

---

### 7. States & Feedback

#### Loading States

**Types:**
- **Skeleton** — For content loading (preferred)
- **Spinner** — For actions, buttons
- **Progress bar** — For multi-step processes

**Rules:**
- Always show loading state for async actions
- Skeleton should match content shape
- Spinner for waits < 2 seconds
- Progress for known duration

#### Empty States

**Components:**
1. Icon or illustration
2. Title (what's empty)
3. Description (why it's empty)
4. Action (how to add content)

**Example:**
```
📭
No notifications yet
When you have notifications, they'll appear here
[Dismiss All]
```

#### Error States

**Inline Errors:**
- Red border on input
- Error message below input
- Icon (optional)

**Page Errors:**
- Clear error title
- What went wrong
- How to fix it
- Retry action

---

### 8. Accessibility

#### Color Contrast

**Minimum Ratios:**
- Normal text: 4.5:1
- Large text (18px+): 3:1
- UI components: 3:1

**Check:**
```bash
# Use tools like:
- WebAIM Contrast Checker
- Stark (Figma plugin)
- axe DevTools
```

#### Keyboard Navigation

**Requirements:**
- All interactive elements focusable
- Visible focus indicator (2px outline)
- Logical tab order
- Skip links for main content

#### Screen Readers

**Best Practices:**
- Semantic HTML (button, nav, main)
- ARIA labels for icons
- Alt text for images
- Heading hierarchy (h1 → h2 → h3)

---

### 9. Responsive Design

**Breakpoints:**
```
Mobile:  < 768px
Tablet:  768px - 1024px
Desktop: > 1024px
```

**Adaptation Strategy:**
- Mobile: Stack vertically, hide secondary elements
- Tablet: 2-column layout, condensed navigation
- Desktop: Full layout, all features visible

**Touch Targets:**
- Minimum: 44x44px
- Recommended: 48x48px

---

## 📋 Quick Reference

### Color Do's and Don'ts

| Do | Don't |
|-----|-------|
| Use primary for main actions | Use more than 3 colors per screen |
| Use semantic colors for status | Use red/green as only indicator |
| Keep backgrounds neutral | Use bright colors for large areas |

### Typography Quick Guide

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 / Page Title | 3xl | 700 | 1.25 |
| H2 / Section | xl | 600 | 1.25 |
| H3 / Card Title | base | 600 | 1.5 |
| Body | base | 400 | 1.5 |
| Caption | sm | 400 | 1.5 |
| Label | xs | 600 | 1.25 |

### Spacing Cheat Sheet

| Use Case | Spacing |
|----------|---------|
| Inside button | 8px (h) × 12px (v) |
| Form field gap | 16px |
| Card padding | 16-24px |
| Between sections | 24-32px |
| Page padding | 24px |

---

## 🔧 Implementation

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Spacing */
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  
  /* Border Radius */
  --radius-md: 0.5rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}
```

### Usage Example

```tsx
// Button component using tokens
const Button = ({ variant = 'primary', size = 'md' }) => {
  return (
    <button
      className={`
        btn btn-${variant} btn-${size}
        font-medium rounded-md
        transition-colors duration-200
      `}
      style={{
        backgroundColor: 'var(--color-primary)',
        padding: 'var(--spacing-2) var(--spacing-4)',
      }}
    >
      Click me
    </button>
  );
};
```

---

**Next:** See `components/` for detailed component specifications.
