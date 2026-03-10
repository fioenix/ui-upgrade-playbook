# Playbook 01: Audit Prompts

**Copy-paste prompts for executing the UI Audit playbook**

---

## 📋 How to Use

1. Read `playbook.md` first to understand the steps
2. Execute prompts in order
3. Capture all outputs
4. Compile into audit report

---

## Step 1: Discover Application Structure

### Prompt: Find Routes
```
Analyze the codebase and identify all routes/pages in this React application.

Look for:
1. React Router configuration (routes, Route components)
2. Page components (files with "Page" or "Screen" in name)
3. Navigation components

Output format:
| Route Path | Component File | Description |
|------------|----------------|-------------|
| / | src/pages/Home.tsx | Landing page |
| /dashboard | src/pages/Dashboard.tsx | Main dashboard |

Include:
- Total page count
- Any nested routes
- Any route guards or auth requirements
```

### Prompt: Map Navigation
```
Find the main navigation structure of this application.

Look for:
1. Navigation menu components
2. Sidebar components
3. Header/navigation bars
4. Breadcrumbs

Output:
- Navigation hierarchy (tree structure)
- Which pages are in main nav
- Which pages are secondary
- Any hidden/internal pages
```

---

## Step 2: Inventory Components

### Prompt: Component Inventory
```
Create a comprehensive inventory of all UI components in this codebase.

Search for:
1. Component files (.tsx, .jsx files with component definitions)
2. Component imports and usage
3. Any component library (MUI, Chakra, Ant Design, etc.)

Categorize:
- **Core Components:** Button, Input, Card, Table, etc.
- **Layout Components:** Header, Sidebar, Container, etc.
- **Feature Components:** UserList, ProductCard, etc.
- **Library Components:** From external packages

Output format:
| Category | Component | File Path | Usage Count | Notes |
|----------|-----------|-----------|-------------|-------|
| Core | Button | src/components/Button.tsx | 45 | Custom |
| Core | Input | src/components/Input.tsx | 32 | Custom |
| Library | MUI Button | @mui/material | 12 | External |

Also report:
- Total custom components
- Total library components
- Styling approach (CSS modules, Tailwind, styled-components, etc.)
```

### Prompt: Styling Analysis
```
Analyze the styling approach used in this application.

Identify:
1. CSS files (global, modular, etc.)
2. CSS-in-JS (styled-components, emotion, etc.)
3. Utility classes (Tailwind, etc.)
4. Inline styles

For each approach found:
- File locations
- Usage patterns
- Pros/cons observed

Output:
## Styling Approaches Found

### CSS Modules
- Location: src/styles/*.module.css
- Usage: Imported in components
- Count: N files

### Tailwind
- Location: className="..."
- Usage: Throughout codebase
- Config: tailwind.config.js exists: yes/no

### Inline Styles
- Location: style={{ }}
- Usage: N instances
- Common patterns: [list]

Recommendation: [which approach to standardize on]
```

---

## Step 3: Analyze Design Tokens

### Prompt: Color Analysis
```
Find all color values used in this codebase.

Search for:
1. Hex colors (#FFFFFF, #3B82F6, etc.)
2. RGB/RGBA colors
3. Named colors (red, blue, etc.)
4. CSS custom properties for colors (--color-*)

Group by:
- Blues (all shades)
- Grays (all shades)
- Semantic colors (success, warning, error)
- Others

Output:
## Color Inventory

### Blues Found
| Hex | Usage | Count | Should Be |
|-----|-------|-------|-----------|
| #3B82F6 | Primary buttons | 23 | primary-500 |
| #2563EB | Links | 15 | primary-600 |

### Grays Found
| Hex | Usage | Count | Should Be |
|-----|-------|-------|-----------|
| #6B7280 | Muted text | 45 | neutral-500 |
| #9CA3AF | Borders | 32 | neutral-300 |

Summary:
- Total unique colors: N
- Recommended primary: [hex]
- Recommended secondary: [hex]
- Recommended neutrals: [list]
```

### Prompt: Spacing Analysis
```
Find all spacing values (margin, padding, gap) in the codebase.

Search for:
1. pixel values (margin: 16px, padding: 24px)
2. rem/em values
3. Tailwind spacing classes (p-4, m-2, gap-4)
4. CSS custom properties for spacing

Output:
## Spacing Inventory

### Margin Values
| Value | Count | Common Usage |
|-------|-------|--------------|
| 16px | 45 | Card padding |
| 24px | 32 | Section spacing |
| 8px | 28 | Element gap |

### Padding Values
| Value | Count | Common Usage |
|-------|-------|--------------|
| 12px 16px | 34 | Button padding |
| 16px | 28 | Input padding |

### Gap Values
| Value | Count | Common Usage |
|-------|-------|--------------|
| 16px | 23 | Flex gap |
| 8px | 19 | Icon-text gap |

Recommendation:
- Base unit: 4px (0.25rem)
- Scale: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64
```

### Prompt: Typography Analysis
```
Analyze typography usage in this codebase.

Search for:
1. Font family declarations
2. Font size values
3. Font weight values
4. Line height values

Output:
## Typography Inventory

### Font Families
| Font | Usage | Count |
|------|-------|-------|
| Inter | Body text | 45 |
| system-ui | Fallback | 32 |

### Font Sizes
| Size | Usage | Count | Should Be |
|------|-------|-------|-----------|
| 14px | Body | 56 | base (16px) |
| 12px | Caption | 34 | sm (14px) |
| 24px | Headings | 23 | 2xl (24px) |

### Font Weights
| Weight | Usage | Count |
|--------|-------|-------|
| 400 | Body | 67 |
| 600 | Headings | 45 |
| 700 | Emphasis | 23 |

Recommendation:
- Primary font: [font]
- Type scale: xs(12), sm(14), base(16), lg(18), xl(20), 2xl(24)
```

---

## Step 4: Identify Inconsistencies

### Prompt: Button Variations
```
Find all button implementations in the codebase.

Search for:
1. <Button> component usage
2. <button> elements
3. Elements with button-like styling

For each, note:
- Styling approach
- Colors used
- Sizes
- Variants (primary, secondary, etc.)

Output:
## Button Analysis

### Button Component Usage
| Location | Variant | Styling | Issues |
|----------|---------|---------|--------|
| src/pages/Login.tsx | Primary | className="btn-primary" | None |
| src/pages/Dashboard.tsx | Custom | inline styles | Inconsistent |

### Native Button Elements
| Location | Styling | Should Use |
|----------|---------|------------|
| src/components/Form.tsx | Basic | Button component |

Found:
- N different button styles
- N using custom Button component
- N using native buttons
- N with inline styles

Recommendation: Consolidate to 3 variants (primary, secondary, tertiary)
```

### Prompt: Card Variations
```
Find all card-like containers in the codebase.

Search for:
1. <Card> component usage
2. Divs with card styling (border, shadow, padding)
3. Panel, container, box components

Output:
## Card Analysis

### Card Component Usage
| Location | Variant | Styling | Issues |
|----------|---------|---------|--------|
| src/Dashboard.tsx | Default | <Card> | None |
| src/Widgets.tsx | Custom | div.card-custom | Inconsistent shadow |

### Custom Card-like Divs
| Location | Styling | Should Use |
|----------|---------|------------|
| src/Stats.tsx | border + shadow | Card component |

Found:
- N using Card component
- N using custom styling
- Inconsistencies: [list]

Recommendation: Create standard Card component with variants
```

---

## Step 5: Accessibility Check

### Prompt: Accessibility Audit
```
Perform an accessibility audit of the codebase.

Check for:
1. Images without alt text
2. Inputs without labels
3. Buttons without accessible names
4. Missing heading hierarchy
5. Missing ARIA attributes
6. Color-only indicators

Commands to run:
grep -rn "<img" src/ | grep -v "alt="
grep -rn "<input" src/ | grep -v "aria-label\|id="
grep -rn "<button" src/ | grep -v ">"

Output:
## Accessibility Issues

### Missing Alt Text
| File | Line | Image | Impact |
|------|------|-------|--------|
| src/Header.tsx | 23 | Logo | Screen readers skip |

### Missing Labels
| File | Line | Input | Impact |
|------|------|-------|--------|
| src/Login.tsx | 45 | Email | Can't identify field |

### Button Issues
| File | Line | Button | Issue |
|------|------|--------|-------|
| src/Table.tsx | 78 | IconButton | No accessible name |

### Heading Hierarchy
| File | Issue |
|------|-------|
| src/Dashboard.tsx | Jumps from h1 to h3 |

Summary:
- Total issues: N
- High severity: N
- Medium severity: N
- Low severity: N
```

---

## Step 6: Compile Audit Report

### Prompt: Generate Report
```
Using all the analysis above, compile a comprehensive UI Audit Report.

Structure:
1. Executive Summary (3-5 sentences)
2. Application Structure (pages, navigation)
3. Component Inventory
4. Design Analysis (colors, typography, spacing)
5. Component Analysis (buttons, cards, forms)
6. Accessibility Issues
7. Priority Recommendations (P0/P1/P2)

Format: Markdown
Tone: Objective, actionable
Length: 2000-4000 words

Include:
- Tables for data
- Specific file references
- Clear recommendations
- Estimated effort for each fix
```

---

## 📚 Related Documents

- `playbook.md` — Full playbook with steps
- `../../design-system/tokens.json` — Target token structure
- `../../validation/checklist.md` — Validation criteria

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
