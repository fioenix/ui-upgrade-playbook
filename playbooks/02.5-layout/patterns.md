# Layout Patterns

**Consistent spacing, hierarchy, and composition patterns**

---

## 🎯 Purpose

Provide agents with clear layout patterns to ensure visual consistency across all pages and components.

---

## 📐 Visual Hierarchy

### Typography Hierarchy

| Level | Element | Font Size | Weight | Line Height | Spacing Below |
|-------|---------|-----------|--------|-------------|---------------|
| **H1** | Page title | 32px (2xl) | 700 | 1.25 | 24px |
| **H2** | Section | 24px (xl) | 600 | 1.25 | 16px |
| **H3** | Card title | 18px (lg) | 600 | 1.5 | 12px |
| **H4** | Subsection | 16px (base) | 600 | 1.5 | 8px |
| **Body** | Content | 16px (base) | 400 | 1.5 | - |
| **Small** | Meta, captions | 14px (sm) | 400 | 1.5 | - |
| **Tiny** | Labels, hints | 12px (xs) | 500 | 1.25 | - |

### Spacing Scale

**Base unit:** 4px (0.25rem)

| Token | Value | Use Case |
|-------|-------|----------|
| `--spacing-0` | 0 | No spacing |
| `--spacing-1` | 4px | Tight gaps |
| `--spacing-2` | 8px | Icon-text gap |
| `--spacing-3` | 12px | Element gap |
| `--spacing-4` | 16px | Card padding |
| `--spacing-5` | 20px | Component gap |
| `--spacing-6` | 24px | Section padding |
| `--spacing-8` | 32px | Page padding |
| `--spacing-10` | 40px | Large sections |
| `--spacing-12` | 48px | Hero sections |

---

## 🏠 Common Layouts

### Dashboard (Sidebar + Main)

```
┌─────────────────────────────────────────────────────────┐
│ Header (64px)                                           │
│ Logo                          Nav Items    [User Menu]  │
├─────────────┬───────────────────────────────────────────┤
│ Sidebar     │ Main Content                              │
│ (256px)     │ ┌─────────────────────────────────────┐   │
│             │ │ Breadcrumbs                         │   │
│ - Logo      │ ├─────────────────────────────────────┤   │
│ - Nav Items │ │ Page Title (H1)                     │   │
│ - User Menu │ │                                     │   │
│             │ │ [Content Area]                      │   │
│             │ │ padding: 24px                       │   │
│             │ │ max-width: 1440px                   │   │
│             │ └─────────────────────────────────────┘   │
└─────────────┴───────────────────────────────────────────┘
```

**CSS:**
```css
.dashboard-layout {
  display: grid;
  grid-template-columns: 256px 1fr;
  grid-template-rows: 64px 1fr;
  min-height: 100vh;
}

.dashboard-sidebar {
  grid-row: 1 / -1;
  border-right: 1px solid var(--color-border);
}

.dashboard-header {
  height: 64px;
  border-bottom: 1px solid var(--color-border);
}

.dashboard-main {
  padding: var(--spacing-6);
  max-width: 1440px;
}
```

---

### Form (Centered, Max 600px)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                    ┌─────────────────┐                  │
│                    │   Page Title    │                  │
│                    └─────────────────┘                  │
│                                                         │
│              ┌───────────────────────────┐              │
│              │                           │              │
│              │   Form Container          │              │
│              │   (max-width: 600px)      │              │
│              │   padding: 32px           │              │
│              │   background: white       │              │
│              │   border-radius: 8px      │              │
│              │   box-shadow: sm          │              │
│              │                           │              │
│              │   [Form Fields]           │              │
│              │                           │              │
│              │   [Actions]               │              │
│              └───────────────────────────┘              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**CSS:**
```css
.form-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-12);
  min-height: 100vh;
  background: var(--color-background-secondary);
}

.form-container {
  width: 100%;
  max-width: 600px;
  padding: var(--spacing-8);
  background: var(--color-background-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.form-title {
  text-align: center;
  margin-bottom: var(--spacing-6);
}

.form-actions {
  display: flex;
  gap: var(--spacing-3);
  justify-content: flex-end;
  margin-top: var(--spacing-6);
  padding-top: var(--spacing-6);
  border-top: 1px solid var(--color-border);
}
```

---

### Table (Full Width, Sticky Header)

```
┌─────────────────────────────────────────────────────────┐
│ Page Title (H1)                                         │
├─────────────────────────────────────────────────────────┤
│ [Filters/Actions]                          [Pagination] │
├─────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Header (sticky)                                     │ │
│ │ Name ↑  │  Email  │  Status  │  Actions            │ │
│ ├─────────────────────────────────────────────────────┤ │
│ │ Row 1                                               │ │
│ │ Row 2                                               │ │
│ │ Row 3                                               │ │
│ │ ...                                                 │ │
│ └─────────────────────────────────────────────────────┘ │
│                                          Page 1 of 10   │
└─────────────────────────────────────────────────────────┘
```

**CSS:**
```css
.table-layout {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.table-header {
  position: sticky;
  top: 0;
  background: var(--color-background-secondary);
  z-index: var(--z-sticky);
}

.table-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-4);
  border-bottom: 1px solid var(--color-border);
}

.table-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-4);
  border-top: 1px solid var(--color-border);
  background: var(--color-background-secondary);
}
```

---

### Detail View (Two Column)

```
┌─────────────────────────────────────────────────────────┐
│ ← Back    Item Title                    [Edit] [Delete] │
├───────────────────────────┬─────────────────────────────┤
│ Left Panel (33%)          │ Right Panel (67%)           │
│ ┌─────────────────────┐   │ ┌─────────────────────────┐ │
│ │ Image / Avatar      │   │ │ Details                 │ │
│ │                     │   │ │                         │ │
│ │ [300x300]           │   │ │ Label: Value            │ │
│ │                     │   │ │ Label: Value            │ │
│ └─────────────────────┘   │ │ Label: Value            │ │
│                           │ │                         │ │
│ Metadata                  │ │ Description             │ │
│ - Created: Date           │ │ Long text content...    │ │
│ - Updated: Date           │ │                         │ │
│ - Author: Name            │ └─────────────────────────┘ │
└───────────────────────────┴─────────────────────────────┘
```

**CSS:**
```css
.detail-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-8);
  padding: var(--spacing-6);
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-6);
}

.detail-panel {
  background: var(--color-background-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-6);
}

@media (max-width: 768px) {
  .detail-layout {
    grid-template-columns: 1fr;
  }
}
```

---

### Card Grid

```
┌─────────────────────────────────────────────────────────┐
│ Section Title (H2)                                      │
├───────────┬───────────┬───────────┬───────────┐         │
│ ┌───────┐ │ ┌───────┐ │ ┌───────┐ │ ┌───────┐ │         │
│ │ Card  │ │ │ Card  │ │ │ Card  │ │ │ Card  │ │         │
│ │       │ │ │       │ │ │       │ │ │       │ │         │
│ │       │ │ │       │ │ │       │ │ │       │ │         │
│ └───────┘ │ └───────┘ │ └───────┘ │ └───────┘ │         │
│           │           │           │           │         │
│ ┌───────┐ │ ┌───────┐ │ ┌───────┐ │ ┌───────┐ │         │
│ │ Card  │ │ │ Card  │ │ │ Card  │ │ │ Card  │ │         │
│ └───────┘ │ └───────┘ │ └───────┘ │ └───────┘ │         │
└───────────┴───────────┴───────────┴───────────┘         │
```

**CSS:**
```css
.card-grid {
  display: grid;
  gap: var(--spacing-6);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.card-grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.card-grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.card-grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 📏 Spacing Rules

### Between Elements

| Relationship | Spacing | Example |
|--------------|---------|---------|
| Related items | 8px (spacing-2) | Icon + text |
| Related group | 16px (spacing-4) | Form fields |
| Unrelated groups | 24px (spacing-6) | Form sections |
| Page sections | 32px (spacing-8) | Page areas |
| Major divisions | 48px (spacing-12) | Hero sections |

### Component Padding

| Component | Padding | Use Case |
|-----------|---------|----------|
| Button | 8px 16px | Default |
| Input | 10px 16px | Default |
| Card | 16-24px | Content area |
| Modal | 24px | Body content |
| Page | 24px | Main container |
| Section | 32px | Page sections |

---

## 🎯 Alignment Rules

### Text Alignment

| Content Type | Alignment |
|--------------|-----------|
| Body text | Left |
| Headings | Left |
| Numbers (tables) | Right |
| Actions (tables) | Right |
| Status badges | Center |
| Navigation | Left or Center |

### Vertical Alignment

| Context | Alignment |
|---------|-----------|
| Button content | Center |
| Table cells | Top |
| Form labels | Top |
| Card headers | Center |
| Modal headers | Center |

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout Change |
|------------|-------|---------------|
| Mobile | < 768px | Single column, hamburger menu |
| Tablet | 768px - 1024px | 2 columns, condensed nav |
| Desktop | > 1024px | Full layout, sidebar visible |

### Mobile Adaptations

```css
/* Sidebar → Hamburger menu */
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    position: fixed;
    z-index: var(--z-modal);
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
}

/* Tables → Card view */
@media (max-width: 768px) {
  .table-layout {
    overflow-x: auto;
  }
  
  /* Or convert to cards */
  .table-row {
    display: block;
    border: 1px solid var(--color-border);
    margin-bottom: var(--spacing-4);
    padding: var(--spacing-4);
  }
  
  .table-cell {
    display: flex;
    justify-content: space-between;
    padding: var(--spacing-2) 0;
  }
}

/* Forms → Full width inputs */
@media (max-width: 768px) {
  .form-container {
    padding: var(--spacing-4);
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .form-actions button {
    width: 100%;
  }
}
```

---

## ✅ Validation Checklist

After implementing layouts:

- [ ] Typography uses defined scale (xs, sm, base, lg, xl, 2xl)
- [ ] Spacing uses token scale (spacing-0 through spacing-12)
- [ ] No hardcoded pixel values for spacing
- [ ] Headings follow hierarchy (H1 → H2 → H3)
- [ ] Related items have consistent spacing
- [ ] Unrelated groups have clear separation
- [ ] Responsive breakpoints tested
- [ ] Mobile layout functional
- [ ] Touch targets 44px minimum

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
