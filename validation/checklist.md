# Validation Checklist

**Success criteria for each playbook**

---

## 📋 How to Use

Run these checklists after completing each playbook. All items must pass before proceeding to the next playbook.

---

## ✅ Playbook 01: Audit Validation

### Coverage
- [ ] All pages/screens documented
- [ ] Component inventory complete (≥90% of components)
- [ ] Navigation structure mapped
- [ ] Styling approach identified

### Analysis
- [ ] Color inventory complete (all hex values found)
- [ ] Typography inventory complete
- [ ] Spacing inventory complete
- [ ] Component variations documented

### Findings
- [ ] Inconsistencies identified
- [ ] Accessibility issues noted
- [ ] Priority levels assigned (P0/P1/P2)
- [ ] Effort estimates provided

### Output
- [ ] `audit-report.md` created
- [ ] Report reviewed by team
- [ ] Priority list approved
- [ ] Before screenshots captured

### Quality Bar
- [ ] Report is actionable (clear what to fix)
- [ ] Estimates are realistic
- [ ] No major pages missed
- [ ] Accessibility audit thorough

---

## ✅ Playbook 02: Foundation Validation

### Design Tokens
- [ ] `tokens.json` created with all categories
- [ ] Colors include primary, neutral, semantic (50-900 scales)
- [ ] Typography includes font family, size, weight, line height
- [ ] Spacing scale based on 4px unit
- [ ] Border radius values defined
- [ ] Shadow values defined
- [ ] Transition durations defined
- [ ] Breakpoints defined
- [ ] Z-index scale defined

### CSS Variables
- [ ] `variables.css` created
- [ ] All tokens converted to CSS custom properties
- [ ] Naming convention consistent (--category-property-value)
- [ ] Variables accessible in browser DevTools

### Global Styles
- [ ] `global.css` created
- [ ] Reset/normalize applied
- [ ] Base element styles defined
- [ ] Typography hierarchy set
- [ ] Focus styles visible
- [ ] Imported in app entry point

### Utilities (Optional)
- [ ] `utilities.css` created (if using)
- [ ] Common patterns covered
- [ ] Not duplicating Tailwind (if project uses it)

### Verification
- [ ] TokenTest component renders
- [ ] All colors display correctly
- [ ] Typography scale works
- [ ] Spacing values feel right
- [ ] No console errors
- [ ] Fonts load correctly

### Output
- [ ] `src/design/tokens.json` exists
- [ ] `src/styles/variables.css` exists
- [ ] `src/styles/global.css` exists
- [ ] Test component verified in browser

### Quality Bar
- [ ] Token values match design intent
- [ ] No hardcoded values in components
- [ ] Variables work across all browsers used by team
- [ ] Team approved token values

---

## ✅ Playbook 03: Components Validation

### Button Component
- [ ] Variants: primary, secondary, tertiary, danger
- [ ] Sizes: sm, md, lg
- [ ] States: default, hover, active, disabled, loading
- [ ] Props: children, variant, size, disabled, loading, onClick, type, icon, iconPosition, fullWidth
- [ ] Uses design tokens for all values
- [ ] Focus styles visible
- [ ] Keyboard accessible (Enter, Space)
- [ ] Loading spinner shows
- [ ] Tests pass (≥90% coverage)

### Input Component
- [ ] Types: text, email, password, number, tel, url, search
- [ ] Sizes: sm, md, lg
- [ ] States: default, focus, error, disabled
- [ ] Features: label, helperText, error, icon, rightAction
- [ ] Label associated correctly (htmlFor)
- [ ] Error state displays properly
- [ ] Password toggle works
- [ ] Accessibility (aria attributes)
- [ ] Tests pass

### Card Component
- [ ] Variants: default, interactive, elevated, outline
- [ ] Sizes: sm, md, lg, full
- [ ] Sub-components: Card, Card.Header, Card.Content, Card.Footer
- [ ] Interactive variant clickable
- [ ] Hover effects smooth
- [ ] Keyboard navigation for interactive
- [ ] Tests pass

### Table Component
- [ ] Features: sortable, selectable, pagination
- [ ] States: default, loading, empty
- [ ] Sub-components: Table, Header, Body, Row, Cell, Toolbar, Pagination
- [ ] Sorting works
- [ ] Selection works
- [ ] Pagination works
- [ ] Loading skeleton shows
- [ ] Empty state shows
- [ ] Tests pass

### Migration
- [ ] Old button instances migrated (≥90%)
- [ ] Old input instances migrated (≥90%)
- [ ] Old card instances migrated (≥90%)
- [ ] Old table instances migrated (≥90%)
- [ ] No visual regressions
- [ ] No functionality broken

### Documentation
- [ ] Button.md created
- [ ] Input.md created
- [ ] Card.md created
- [ ] Table.md created
- [ ] Props API documented
- [ ] Examples provided
- [ ] Accessibility notes included

### Output
- [ ] `src/components/Button/` exists with all files
- [ ] `src/components/Input/` exists with all files
- [ ] `src/components/Card/` exists with all files
- [ ] `src/components/Table/` exists with all files
- [ ] Component docs in `docs/components/`

### Quality Bar
- [ ] Components feel consistent
- [ ] API is intuitive
- [ ] No prop drilling for common patterns
- [ ] Team can use components without confusion

---

## ✅ Playbook 04: UX Flows Validation

### Navigation
- [ ] Navigation consistent across all pages
- [ ] Active page clearly indicated
- [ ] Breadcrumbs present (if deep hierarchy)
- [ ] Mobile navigation works (hamburger menu)
- [ ] Keyboard navigation works
- [ ] Sidebar/Header components created

### Common Flows
- [ ] Create flow works end-to-end
- [ ] Edit flow pre-fills correctly
- [ ] Delete confirmation dialog works
- [ ] View details accessible
- [ ] Back navigation clear
- [ ] ConfirmDialog component created

### Feedback
- [ ] Loading states on all async actions
- [ ] Success toasts show and auto-dismiss
- [ ] Error messages helpful (what + how to fix)
- [ ] Inline validation works
- [ ] Network errors handled gracefully
- [ ] Toast system created
- [ ] Loading components created

### Empty States
- [ ] All empty states have content (no blank screens)
- [ ] Helpful actions provided
- [ ] Consistent visual style
- [ ] Icons/illustrations used
- [ ] EmptyState component created

### Responsive
- [ ] Works on mobile (320px+)
- [ ] Works on tablet (768px+)
- [ ] Works on desktop (1024px+)
- [ ] Touch targets 44px+ minimum
- [ ] No horizontal scroll (except tables)
- [ ] Tables adapt for mobile (card view or scroll)

### Documentation
- [ ] Navigation patterns documented
- [ ] Common flows documented
- [ ] Feedback patterns documented
- [ ] Empty state guidelines documented
- [ ] Responsive guidelines documented

### Output
- [ ] `src/components/Navigation/` exists
- [ ] `src/components/Feedback/` exists
- [ ] `src/components/ConfirmDialog/` exists
- [ ] `docs/ux-patterns.md` exists

### Quality Bar
- [ ] Flows feel smooth and consistent
- [ ] Users always know where they are
- [ ] Feedback is timely and helpful
- [ ] Mobile experience acceptable

---

## 🏁 Final Validation (All Playbooks Complete)

### Visual Consistency
- [ ] Colors consistent throughout app
- [ ] Typography consistent throughout app
- [ ] Spacing consistent throughout app
- [ ] Components look cohesive

### Developer Experience
- [ ] Components easy to use
- [ ] Documentation clear
- [ ] Migration path documented
- [ ] Team trained on new system

### User Experience
- [ ] Navigation intuitive
- [ ] Common flows smooth
- [ ] Feedback timely
- [ ] Mobile usable
- [ ] Accessibility improved

### Technical Quality
- [ ] No console errors
- [ ] No visual regressions
- [ ] Performance acceptable (no new lag)
- [ ] Tests passing (≥90%)
- [ ] Code reviewed

### Business Value
- [ ] P0 issues fixed
- [ ] P1 issues fixed (≥80%)
- [ ] P2 issues addressed (≥50%)
- [ ] Team velocity improved
- [ ] User feedback positive

---

## 📊 Scoring System

Use this to track progress:

| Score | Meaning | Action |
|-------|---------|--------|
| ✅ Pass | All items checked | Proceed to next playbook |
| ⚠️ Partial | 70-90% checked | Fix remaining items, then proceed |
| ❌ Fail | <70% checked | Re-do playbook |

---

## 📝 Validation Report Template

```markdown
# Validation Report: [Playbook Name]

**Date:** YYYY-MM-DD
**Validator:** [Name]

## Summary
- Total items: N
- Passed: N
- Failed: N
- Score: N%

## Failed Items
| Item | Reason | Fix Plan | ETA |
|------|--------|----------|-----|
| ... | ... | ... | ... |

## Notes
[Any additional observations]

## Recommendation
[ ] Proceed to next playbook
[ ] Fix items first
[ ] Re-do playbook
```

---

**Version:** 1.0.0 | **Last Updated:** 2026-03-10
