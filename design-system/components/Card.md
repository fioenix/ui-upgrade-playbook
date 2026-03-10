# Card Component

**Container for grouping related content**

---

## 📐 Anatomy

```
┌─────────────────────────────────────┐
│ Header (optional)                   │
│ ┌─────────────────────────────┐     │
│ │ Title              [Action] │     │
│ │ Subtitle (optional)         │     │
│ └─────────────────────────────┘     │
├─────────────────────────────────────┤
│ Content                             │
│ - Flexible layout                   │
│ - Text, images, components          │
│                                     │
├─────────────────────────────────────┤
│ Footer (optional)                   │
│ [Actions]              [Metadata]   │
└─────────────────────────────────────┘
```

**Parts:**
- Header (title, subtitle, actions)
- Content area (flexible)
- Footer (actions, metadata)

---

## 🎨 Variants

### Default
**Use:** General content container

```tsx
<Card>
  <Card.Header title="User Profile" />
  <Card.Content>
    <p>User information here</p>
  </Card.Content>
</Card>
```

---

### Interactive
**Use:** Clickable cards, navigation

```tsx
<Card interactive onClick={handleClick}>
  <Card.Content>
    <p>Click me to navigate</p>
  </Card.Content>
</Card>
```

**Styling:**
- Hover: shadow-md, slight lift
- Cursor: pointer

---

### Elevated
**Use:** Featured content, modals

```tsx
<Card elevated>
  <Card.Content>
    <p>Prominent content</p>
  </Card.Content>
</Card>
```

**Styling:**
- Shadow: lg or xl
- No border

---

### Outline
**Use:** Subtle grouping

```tsx
<Card variant="outline">
  <Card.Content>
    <p>Minimal card</p>
  </Card.Content>
</Card>
```

**Styling:**
- Border only, no shadow
- Background: transparent or white

---

## 📏 Sizes

| Size | Padding | Max Width | Use Case |
|------|---------|-----------|----------|
| sm | 12px | 320px | Sidebar, widgets |
| md | 16px | 480px | Standard cards |
| lg | 24px | 768px | Featured content |
| full | 24px | 100% | Page sections |

---

## 🎯 States

### Default
- Background: white
- Border: 1px solid `--color-border`
- Shadow: sm or none

### Hover (Interactive)
- Shadow: md
- Transform: translateY(-2px)
- Border: `--color-primary` (optional)

### Selected
- Border: 2px solid `--color-primary`
- Background: `--color-primary-50`

### Disabled
- Opacity: 0.6
- No hover effects

---

## 🧩 Props API

```typescript
interface CardProps {
  // Content
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
  
  // Appearance
  variant?: 'default' | 'outline' | 'elevated';
  size?: 'sm' | 'md' | 'lg' | 'full';
  interactive?: boolean;
  
  // Behavior
  onClick?: () => void;
  selected?: boolean;
  
  // Layout
  fullWidth?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  
  // Accessibility
  role?: string;
  ariaLabel?: string;
}

// Sub-components
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
```

---

## 📝 Usage Examples

### Basic Card
```tsx
<Card>
  <Card.Header title="Settings" />
  <Card.Content>
    <p>Manage your account settings here.</p>
  </Card.Content>
</Card>
```

### Card with Actions
```tsx
<Card>
  <Card.Header 
    title="Project" 
    headerAction={<IconButton icon={<MoreIcon />} />}
  />
  <Card.Content>
    <p>Project details...</p>
  </Card.Content>
  <Card.Footer>
    <Button variant="primary">Edit</Button>
    <Button variant="secondary">Delete</Button>
  </Card.Footer>
</Card>
```

### Interactive Card (Navigation)
```tsx
<Card 
  interactive 
  onClick={() => navigate(`/project/${id}`)}
>
  <Card.Content>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
  </Card.Content>
</Card>
```

### Card Grid
```tsx
<div className="grid grid-cols-3 gap-4">
  {projects.map(project => (
    <Card key={project.id}>
      <Card.Header title={project.name} />
      <Card.Content>
        <p>{project.status}</p>
      </Card.Content>
    </Card>
  ))}
</div>
```

### Metric Card
```tsx
<Card size="sm">
  <Card.Content>
    <div className="flex justify-between">
      <span className="text-sm text-muted">Total Users</span>
      <span className="text-2xl font-bold">1,234</span>
    </div>
    <div className="text-success text-sm mt-2">
      ↑ 12% from last month
    </div>
  </Card.Content>
</Card>
```

---

## ♿ Accessibility

### Requirements
- [ ] Semantic HTML (article or div with role)
- [ ] Interactive cards use button or role="button"
- [ ] Keyboard navigation for interactive cards
- [ ] Focus indicator visible
- [ ] aria-label for cards without visible title
- [ ] Heading hierarchy maintained

### Implementation
```tsx
// Interactive card
<Card 
  interactive
  role="button"
  tabIndex={0}
  aria-label="View project details"
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  <Card.Content>
    <h3>Project Name</h3>
  </Card.Content>
</Card>
```

---

## 🎨 CSS Implementation

### Base Styles
```css
.card {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.card-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--color-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.card-title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-neutral-800);
  margin: 0;
}

.card-subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-neutral-500);
  margin-top: 4px;
}

.card-content {
  padding: 16px 20px;
}

.card-footer {
  padding: 12px 20px;
  border-top: 1px solid var(--color-border-subtle);
  background: var(--color-background-secondary);
  display: flex;
  gap: 8px;
}
```

### Variants
```css
.card-interactive {
  cursor: pointer;
}

.card-interactive:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.card-elevated {
  border: none;
  box-shadow: var(--shadow-lg);
}

.card-outline {
  background: transparent;
  box-shadow: none;
}
```

### Sizes
```css
.card-sm {
  max-width: 320px;
}

.card-md {
  max-width: 480px;
}

.card-lg {
  max-width: 768px;
}

.card-full {
  width: 100%;
}
```

---

## 🧪 Testing Checklist

- [ ] Renders with correct structure
- [ ] Header displays title/subtitle
- [ ] Content area flexible
- [ ] Footer actions work
- [ ] Interactive card clickable
- [ ] Keyboard navigation works
- [ ] Focus styles visible
- [ ] Hover effects apply
- [ ] Selected state works
- [ ] Responsive on mobile

---

## 🚫 Anti-Patterns

### Don't:
```tsx
// ❌ Too much content in one card
<Card>
  <Card.Header title="Everything" />
  <Card.Content>
    {/* 20 different pieces of information */}
  </Card.Content>
</Card>

// ✅ Split into focused cards
<Card>
  <Card.Header title="User Info" />
  <Card.Content>...</Card.Content>
</Card>
<Card>
  <Card.Header title="Activity" />
  <Card.Content>...</Card.Content>
</Card>

// ❌ Nested cards
<Card>
  <Card.Content>
    <Card> {/* Don't do this */}
      <Card.Content>Nested</Card.Content>
    </Card>
  </Card.Content>
</Card>

// ✅ Use dividers or sections instead
<Card>
  <Card.Content>
    <Section title="Part 1">...</Section>
    <hr />
    <Section title="Part 2">...</Section>
  </Card.Content>
</Card>

// ❌ Inconsistent card heights in grid
// ✅ Use same height or stretch
<div className="grid grid-cols-3 gap-4">
  {items.map(item => (
    <Card className="h-full"> {/* Same height */}
      <Card.Content>{item.content}</Card.Content>
    </Card>
  ))}
</div>
```

---

## 📚 Related Components

- [Button](./Button.md) — Card actions
- [List](./List.md) — Alternative for simple items
- [Table](./Table.md) — For tabular data
- [Modal](./Modal.md) — Card-like overlay

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
