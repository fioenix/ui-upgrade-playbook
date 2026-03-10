# Playbook 02: Foundation

**Setup design tokens and base styles**

---

## 🎯 Goal

Establish the foundation for consistent design by:
- Creating design tokens (colors, typography, spacing)
- Setting up CSS custom properties
- Creating global/base styles
- Ensuring tokens are accessible throughout the app

**Output:** Working design token system ready for component styling

---

## ⏱️ Estimated Time

- Small app: 30-60 minutes
- Medium app: 1-2 hours
- Large app: 2-3 hours

---

## 📋 Prerequisites

- [ ] Playbook 01 (Audit) complete
- [ ] Audit report reviewed
- [ ] Current styling approach understood
- [ ] Team approval on token values

---

## 🚀 Execution Steps

### Step 0.5: Select Design System (Optional)

**Goal:** Help user choose a UI component library if they want one.

**Actions:**
1. Review `02-select-design-system.md`
2. Ask user selection questions
3. Recommend based on their needs
4. Install selected library

**Decision:** User can either:
- **Option A:** Use an existing UI library (shadcn/ui, Ant Design, MUI, etc.)
- **Option B:** Build custom components with design tokens (this playbook)

**If Option A:** Follow library setup guide, then adapt Playbook 03 components
**If Option B:** Continue with this playbook

---

### Step 1: Create Design Tokens File

**Goal:** Establish single source of truth for design values.

**Actions:**
1. Copy `../../design-system/tokens.json` as starting point
2. Adjust values based on audit findings
3. Save to project: `src/design/tokens.json`

**Token Categories:**
```json
{
  "colors": {
    "primary": { "50-900": "...", "default": "..." },
    "neutral": { "50-900": "...", "default": "..." },
    "semantic": { "success", "warning", "danger" }
  },
  "typography": {
    "fontFamily": { "sans", "mono" },
    "fontSize": { "xs-4xl": "..." },
    "fontWeight": { "normal", "medium", "semibold", "bold" }
  },
  "spacing": { "0-24": "..." },
  "borderRadius": { "none", "sm", "md", "lg", "xl", "full" },
  "boxShadow": { "none", "sm", "md", "lg", "xl" }
}
```

---

### Step 2: Create CSS Custom Properties

**Goal:** Make tokens available in CSS.

**Actions:**
1. Create `src/styles/variables.css`
2. Convert tokens to CSS custom properties
3. Organize by category

**Template:**
```css
:root {
  /* Colors - Primary */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  
  /* Colors - Neutral */
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f4f4f5;
  --color-neutral-500: #71717a;
  --color-neutral-700: #3f3f46;
  --color-neutral-900: #18181b;
  
  /* Colors - Semantic */
  --color-success: #16a34a;
  --color-warning: #f59e0b;
  --color-danger: #dc2626;
  
  /* Backgrounds */
  --color-background-primary: #ffffff;
  --color-background-secondary: #f8fafc;
  --color-background-tertiary: #f1f5f9;
  
  /* Borders */
  --color-border: #e2e8f0;
  --color-border-strong: #cbd5e1;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Font Sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  
  /* Spacing */
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  
  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-none: none;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  
  /* Transitions */
  --transition-fast: 150ms;
  --transition-normal: 200ms;
  --transition-slow: 300ms;
  
  /* Z-Index */
  --z-dropdown: 1000;
  --z-sticky: 1100;
  --z-fixed: 1200;
  --z-modal: 1400;
  --z-tooltip: 1600;
}
```

---

### Step 3: Create Base/Global Styles

**Goal:** Reset and normalize browser defaults.

**Actions:**
1. Create `src/styles/global.css`
2. Import variables.css first
3. Add reset/normalize styles
4. Add base element styles

**Template:**
```css
/* Import variables first */
@import './variables.css';

/* Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Base */
html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-900);
  background-color: var(--color-background-primary);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}

h1 { font-size: var(--font-size-3xl); }
h2 { font-size: var(--font-size-2xl); }
h3 { font-size: var(--font-size-xl); }
h4 { font-size: var(--font-size-lg); }

p {
  margin-bottom: var(--spacing-4);
}

/* Links */
a {
  color: var(--color-primary-600);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Buttons (base) */
button {
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

/* Forms */
input, textarea, select {
  font-family: inherit;
  font-size: inherit;
}

/* Images */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Focus styles */
:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

---

### Step 4: Setup Utility Classes (Optional)

**Goal:** Provide quick access to common token values.

**Actions:**
1. Create `src/styles/utilities.css`
2. Add commonly used utility classes
3. Keep minimal (don't recreate Tailwind)

**Template:**
```css
/* Display */
.u-flex { display: flex; }
.u-grid { display: grid; }
.u-hidden { display: none; }
.u-block { display: block; }

/* Flex */
.u-items-center { align-items: center; }
.u-justify-center { justify-content: center; }
.u-gap-2 { gap: var(--spacing-2); }
.u-gap-4 { gap: var(--spacing-4); }

/* Spacing */
.u-p-4 { padding: var(--spacing-4); }
.u-p-6 { padding: var(--spacing-6); }
.u-m-4 { margin: var(--spacing-4); }
.u-mb-4 { margin-bottom: var(--spacing-4); }

/* Typography */
.u-text-sm { font-size: var(--font-size-sm); }
.u-text-base { font-size: var(--font-size-base); }
.u-font-semibold { font-weight: var(--font-weight-semibold); }
.u-text-muted { color: var(--color-neutral-500); }

/* Colors */
.u-text-primary { color: var(--color-primary-600); }
.u-bg-primary { background-color: var(--color-primary-600); }
.u-text-success { color: var(--color-success); }
.u-text-danger { color: var(--color-danger); }

/* Layout */
.u-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--spacing-6);
}

.u-full-width { width: 100%; }
```

---

### Step 5: Import in Application Entry

**Goal:** Ensure global styles load everywhere.

**Actions:**
1. Find app entry point (`src/main.tsx`, `src/index.tsx`, `App.tsx`)
2. Import global.css at the top
3. Verify styles apply

**Code:**
```tsx
// src/main.tsx or src/index.tsx
import './styles/global.css';
import './styles/utilities.css'; // if using

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### Step 6: Verify Token Usage

**Goal:** Ensure tokens are accessible in components.

**Actions:**
1. Create test component
2. Use various tokens
3. Verify in browser

**Test Component:**
```tsx
// src/components/TokenTest.tsx
export function TokenTest() {
  return (
    <div style={{ padding: '24px' }}>
      <h2 style={{ color: 'var(--color-primary-600)' }}>
        Primary Color Test
      </h2>
      <p style={{ color: 'var(--color-neutral-700)' }}>
        Text color test
      </p>
      <button
        style={{
          backgroundColor: 'var(--color-primary-600)',
          color: 'white',
          padding: 'var(--spacing-2) var(--spacing-4)',
          borderRadius: 'var(--radius-md)',
          border: 'none',
        }}
      >
        Button Test
      </button>
      <div
        style={{
          marginTop: 'var(--spacing-4)',
          padding: 'var(--spacing-4)',
          background: 'var(--color-background-secondary)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        Card Test
      </div>
    </div>
  );
}
```

---

## ✅ Validation Checklist

Before proceeding to Playbook 03:

- [ ] tokens.json created and saved
- [ ] CSS variables.css created with all tokens
- [ ] Global styles applied
- [ ] Variables accessible in components
- [ ] Test component renders correctly
- [ ] No console errors
- [ ] Colors match design intent
- [ ] Typography scale works
- [ ] Spacing values feel right

---

## 📝 Output Files

```
src/
├── design/
│   └── tokens.json          # Design token source
├── styles/
│   ├── variables.css        # CSS custom properties
│   ├── global.css           # Base/reset styles
│   └── utilities.css        # Optional utilities
└── components/
    └── TokenTest.tsx        # Verification component
```

---

## 🆘 Common Issues

### Issue: Variables not applying
**Solution:** Check import order, ensure CSS loaded before components

### Issue: Wrong colors
**Solution:** Verify hex values in tokens.json, check for typos

### Issue: Font not loading
**Solution:** Add font import to global.css or HTML head

---

## 📚 Related Documents

- `prompts.md` — Prompts to execute this playbook
- `../../design-system/tokens.json` — Reference token structure
- `../03-components/playbook.md` — Next step
- `../../validation/checklist.md` — Validation criteria

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
