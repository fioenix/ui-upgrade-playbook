# Playbook 02: Foundation Prompts

**Copy-paste prompts for executing the Foundation playbook**

---

## 📋 How to Use

1. Read `playbook.md` first to understand the steps
2. Execute prompts in order
3. Capture all outputs
4. Verify each step before proceeding

---

## Step 1: Create Design Tokens File

### Prompt: Analyze Current Colors
```
Analyze the current color usage in this React codebase and recommend a consolidated color palette.

Search for:
1. All hex colors (#FFFFFF, #3B82F6, etc.)
2. Color usage frequency
3. Color patterns (primary, secondary, semantic)

Current audit found these colors:
[Paste color inventory from Playbook 01]

Task:
1. Recommend a primary color (50-900 scale)
2. Recommend a neutral/gray scale (50-900)
3. Identify semantic colors (success, warning, danger)
4. Map existing colors to new token names

Output format (JSON):
{
  "colors": {
    "primary": {
      "50": "#...",
      "100": "#...",
      ...
      "default": "#..."
    },
    "neutral": { ... },
    "success": { ... },
    "warning": { ... },
    "danger": { ... }
  }
}

Include mapping table:
| Old Color | New Token | Usage |
|-----------|-----------|-------|
| #3B82F6 | primary-500 | Buttons, links |
| #6B7280 | neutral-500 | Muted text |
```

### Prompt: Analyze Current Typography
```
Analyze the current typography usage and recommend a type scale.

Search for:
1. Font families in use
2. Font sizes (px, rem, em)
3. Font weights
4. Line heights

Current audit found:
[Paste typography inventory from Playbook 01]

Task:
1. Recommend primary font (sans-serif)
2. Recommend mono font (for code/data)
3. Create type scale (xs, sm, base, lg, xl, 2xl, 3xl, 4xl)
4. Define font weights (normal, medium, semibold, bold)
5. Define line heights (tight, normal, relaxed)

Output format (JSON):
{
  "typography": {
    "fontFamily": {
      "sans": "...",
      "mono": "..."
    },
    "fontSize": {
      "xs": { "value": "0.75rem", "lineHeight": "1rem" },
      ...
    },
    "fontWeight": {
      "normal": "400",
      ...
    }
  }
}
```

### Prompt: Analyze Current Spacing
```
Analyze the current spacing usage and recommend a spacing scale.

Search for:
1. All margin values (px, rem)
2. All padding values
3. All gap values

Current audit found:
[Paste spacing inventory from Playbook 01]

Task:
1. Confirm base unit (recommend 4px / 0.25rem)
2. Create spacing scale (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24)
3. Map common patterns to scale values

Output format (JSON):
{
  "spacing": {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    ...
  }
}

Include mapping table:
| Old Value | New Token | Common Usage |
|-----------|-----------|--------------|
| 16px | spacing-4 | Card padding |
| 24px | spacing-6 | Section gap |
```

### Prompt: Generate Complete Tokens File
```
Using the analysis above, generate a complete design tokens JSON file.

Base structure:
{
  "$schema": "https://design-tokens-schema.com/v1/schema.json",
  "meta": {
    "name": "[Project Name] Design Tokens",
    "version": "1.0.0",
    "description": "...",
    "created": "YYYY-MM-DD"
  },
  "colors": { ... },
  "typography": { ... },
  "spacing": { ... },
  "borderRadius": { ... },
  "boxShadow": { ... },
  "transition": { ... },
  "breakpoints": { ... },
  "zIndex": { ... }
}

Requirements:
- Use the color palette from analysis
- Use the type scale from analysis
- Use the spacing scale from analysis
- Add standard border radius values (none, sm, md, lg, xl, full)
- Add standard shadow values (none, sm, md, lg, xl)
- Add transition durations (fast, normal, slow)
- Add breakpoints (sm, md, lg, xl, 2xl)
- Add z-index scale

Output: Complete JSON ready to save as src/design/tokens.json
```

---

## Step 2: Create CSS Custom Properties

### Prompt: Generate CSS Variables
```
Convert the design tokens JSON to CSS custom properties.

Input: [Paste tokens.json content]

Generate CSS for :root with:
1. Color variables (--color-primary-50, --color-primary-100, etc.)
2. Typography variables (--font-sans, --font-size-xs, etc.)
3. Spacing variables (--spacing-0, --spacing-1, etc.)
4. Border radius variables (--radius-none, --radius-sm, etc.)
5. Shadow variables (--shadow-none, --shadow-sm, etc.)
6. Transition variables (--transition-fast, etc.)
7. Z-index variables (--z-dropdown, --z-modal, etc.)

Naming convention:
- Colors: --color-{name}-{shade}
- Typography: --font-{property}-{value}
- Spacing: --spacing-{value}
- Radius: --radius-{value}
- Shadows: --shadow-{value}

Output: Complete CSS ready to save as src/styles/variables.css
```

---

## Step 3: Create Global Styles

### Prompt: Generate Reset/Normalize CSS
```
Generate a modern CSS reset and base styles.

Requirements:
1. Box-sizing reset
2. Margin/padding reset
3. HTML font-size base
4. Body styles (font, color, background)
5. Heading styles (h1-h6 with token values)
6. Paragraph styles
7. Link styles
8. Button base styles
9. Form element styles
10. Image styles
11. Focus visible styles

Use CSS custom properties for all values.

Output: Complete CSS ready to save as src/styles/global.css
```

### Prompt: Generate Utility Classes
```
Generate minimal utility classes for common patterns.

Categories:
1. Display (flex, grid, block, hidden)
2. Flex (items-center, justify-center, gap-*)
3. Spacing (p-*, m-*, mb-*)
4. Typography (text-*, font-*)
5. Colors (text-*, bg-*)
6. Layout (container, full-width)

Requirements:
- Use CSS custom properties
- Keep minimal (don't recreate Tailwind)
- Focus on most-used patterns
- Prefix with .u- for utilities

Output: Complete CSS ready to save as src/styles/utilities.css
```

---

## Step 4: Setup Application Entry

### Prompt: Find Entry Point
```
Find the main entry point of this React application.

Look for:
1. src/main.tsx or src/main.jsx
2. src/index.tsx or src/index.jsx
3. src/App.tsx (if styles imported there)

Output:
- Entry file path
- Current imports
- Where to add style imports
```

### Prompt: Update Entry Point
```
Update the entry point to import global styles.

Current file: [path from previous prompt]

Add at the top (before any other imports):
```tsx
import './styles/global.css';
import './styles/utilities.css';
```

Show the complete updated file content.
```

---

## Step 5: Verify Token Usage

### Prompt: Create Test Component
```
Create a test component to verify design tokens are working.

Component name: TokenTest

Include tests for:
1. Primary color (text and background)
2. Neutral colors (text variations)
3. Typography scale (all font sizes)
4. Spacing scale (padding/margin examples)
5. Border radius (all sizes)
6. Box shadows (all sizes)
7. Button using tokens

Output: Complete TSX component ready to save as src/components/TokenTest.tsx
```

### Prompt: Verify in Browser
```
Instructions to verify design tokens:

1. Add TokenTest component to a test route or main App
2. Start development server
3. Navigate to the test page
4. Check:
   - Colors render correctly
   - Fonts load properly
   - Spacing feels right
   - No console errors

Report any issues found:
- Missing variables
- Wrong colors
- Font loading issues
- Any console errors
```

---

## Step 6: Documentation

### Prompt: Generate Foundation Documentation
```
Generate documentation for the foundation setup.

Structure:
1. Overview (what was created)
2. File structure
3. Design tokens summary
4. How to use tokens in components
5. Migration guide (from old values to tokens)

Include:
- Token reference table
- CSS variable reference
- Code examples
- Common patterns

Output: Markdown documentation for src/styles/README.md
```

---

## 📚 Related Documents

- `playbook.md` — Full playbook with steps
- `../../design-system/tokens.json` — Reference token structure
- `../03-components/playbook.md` — Next step
- `../../validation/checklist.md` — Validation criteria

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
