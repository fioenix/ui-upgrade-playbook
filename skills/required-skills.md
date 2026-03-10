# Required Agent Skills

**Install these skills before starting the UI Upgrade Playbooks**

---

## 🎯 Core Skills (Mandatory)

These skills are required for all UI upgrade work:

### 1. `frontend-design`
**Purpose:** Create distinctive, production-grade frontend interfaces

**Install:**
```bash
# Using npx skills add (recommended)
npx skills add frontend-design

# Or from ClawHub registry
npx skills add registry:frontend-design

# Verify installation
npx skills list | grep frontend-design
```

**Triggers:**
- Building web components, pages, applications
- Styling/beautifying any web UI
- Creating React/Vue/Svelte components

**Capabilities:**
- Creative, polished code generation
- Avoids generic AI aesthetics
- Production-ready implementations

---

### 2. `ui-ux-pro-max`
**Purpose:** UI/UX design intelligence with 50+ styles, palettes, font pairings

**Install:**
```bash
# Using npx skills add
npx skills add ui-ux-pro-max

# Or from workspace (if already available)
# Already in ~/.openclaw/workspace/skills/

# Verify installation
npx skills list | grep ui-ux-pro-max
```

**Triggers:**
- UI/UX code review, fix, improve, optimize
- Design system creation
- Component library design

**Capabilities:**
- 50 design styles (glassmorphism, brutalism, minimalism, etc.)
- 21 color palettes
- 50 font pairings
- 20 chart types
- 9 framework stacks (React, Next.js, Vue, Tailwind, shadcn/ui)

---

### 3. `vercel-react-best-practices`
**Purpose:** React and Next.js performance optimization guidelines

**Install:**
```bash
# Using npx skills add
npx skills add vercel-react-best-practices

# Verify installation
npx skills list | grep vercel-react
```

**Triggers:**
- Writing/reviewing React/Next.js code
- Data fetching patterns
- Bundle optimization
- Performance improvements

**Capabilities:**
- Vercel Engineering best practices
- Component architecture patterns
- Performance optimization

---

### 4. `web-design-guidelines`
**Purpose:** Web Interface Guidelines compliance review

**Install:**
```bash
# Using npx skills add
npx skills add web-design-guidelines

# Verify installation
npx skills list | grep web-design
```

**Triggers:**
- "Review my UI"
- "Check accessibility"
- "Audit design"
- "Review UX"

**Capabilities:**
- Accessibility audit
- Design best practices
- WCAG compliance checking

---

## 🔧 Optional Skills (Recommended)

### 5. `skill-creator`
**Purpose:** Create custom skills if needed

**Use when:**
- Need to create project-specific design skills
- Want to codify team-specific patterns

---

### 6. `agent-browser`
**Purpose:** Browser automation for visual testing

**Use when:**
- Need to capture screenshots
- Automate visual regression testing
- Test interactive flows

---

## ✅ Skills Verification

After installation, verify skills are ready:

```bash
# List all installed skills
npx skills list

# Filter for required skills
npx skills list | grep -E "frontend-design|ui-ux-pro-max|vercel-react|web-design"
```

Expected output:
```
✓ frontend-design
✓ ui-ux-pro-max
✓ vercel-react-best-practices
✓ web-design-guidelines
```

**Alternative verification:**
```bash
# Check skill directory
ls ~/.agents/skills/ | grep -E "frontend-design|ui-ux-pro-max|vercel-react|web-design"
```

---

## 🧪 Test Prompts

Verify skills are working with these test prompts:

### Test frontend-design
```
Using frontend-design skill, create a Button component with:
- Primary variant with blue color
- Secondary variant with gray border
- Disabled state
- Loading state with spinner
```

### Test ui-ux-pro-max
```
Using ui-ux-pro-max, review this component and suggest improvements:
[paste component code]
```

### Test vercel-react-best-practices
```
Review this React component for performance issues:
[paste component code]
```

### Test web-design-guidelines
```
Audit this page for accessibility issues:
[paste page URL or code]
```

---

## 📋 Pre-Flight Checklist

Before starting Playbook 01:

- [ ] All 4 core skills installed and ready
- [ ] Skills verified with test prompts
- [ ] Agent has access to project codebase
- [ ] Git initialized for change tracking
- [ ] Development server can be started

---

## 🆘 Troubleshooting

### Skill not found
```bash
# Search registry
npx skills search skill-name

# Check installed skills
npx skills list | grep skill-name

# Check skill directory
ls ~/.agents/skills/ | grep skill-name
```

### Skill installation fails
```bash
# Clear cache and retry
npx skills add skill-name --force

# Check network connection
ping registry.skills.sh
```

### Skill not triggering
- Check skill description matches your prompt
- Use explicit skill name in prompt
- Ensure skill is not disabled

### Permission issues
```bash
# Fix skill file permissions
chmod -R 755 ~/.agents/skills/skill-name/

# Verify ownership
chown -R $(whoami) ~/.agents/skills/skill-name/
```

---

**Next:** After skills are ready, proceed to `playbooks/01-audit/playbook.md`
