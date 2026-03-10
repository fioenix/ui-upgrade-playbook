/**
 * AFTER: Consistent Button component using design tokens
 * 
 * Improvements:
 * ✅ Single Button component with variants
 * ✅ Design tokens for all values (--color-*, --spacing-*, etc.)
 * ✅ Hover, focus, active states
 * ✅ Disabled state with proper styling
 * ✅ Loading state with spinner
 * ✅ Accessible (keyboard, ARIA)
 * ✅ Icon support
 * ✅ Consistent API
 */

import React from 'react';
import './Button.css'; // Uses design tokens

// ✅ Single Button component with all variants
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  onClick,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        btn
        btn-${variant}
        btn-${size}
        ${fullWidth ? 'btn-full-width' : ''}
        ${loading ? 'btn-loading' : ''}
      `}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {loading ? (
        <span className="btn-spinner" aria-hidden="true" />
      ) : (
        leftIcon && <span className="btn-icon-left">{leftIcon}</span>
      )}
      <span className="btn-label">{children}</span>
      {!loading && rightIcon && (
        <span className="btn-icon-right">{rightIcon}</span>
      )}
    </button>
  );
}

// ✅ Usage examples with consistent API
export default function AfterButtons() {
  return (
    <div className="p-6 flex gap-4 flex-wrap">
      {/* Primary variants */}
      <Button variant="primary" onClick={handleSave}>
        Save Changes
      </Button>
      
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
      
      <Button variant="primary" onClick={handleClick}>
        Click Me
      </Button>
      
      {/* Disabled state */}
      <Button variant="primary" disabled>
        Cannot Click
      </Button>
      
      {/* Loading state */}
      <Button variant="primary" loading>
        Saving...
      </Button>
      
      {/* Secondary variant */}
      <Button variant="secondary" onClick={handleCancel}>
        Cancel
      </Button>
      
      {/* Danger variant */}
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
      
      {/* With icons */}
      <Button 
        variant="primary" 
        leftIcon={<SaveIcon />}
        onClick={handleSave}
      >
        Save
      </Button>
      
      {/* Icon only */}
      <Button 
        variant="tertiary"
        ariaLabel="Settings"
        onClick={handleSettings}
      >
        <SettingsIcon />
      </Button>
      
      {/* Different sizes */}
      <Button variant="primary" size="sm">
        Small
      </Button>
      
      <Button variant="primary" size="md">
        Medium
      </Button>
      
      <Button variant="primary" size="lg">
        Large
      </Button>
    </div>
  );
}

// ✅ Button CSS using design tokens
/*
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  font-family: var(--font-sans);
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-primary {
  background: var(--color-primary-600);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: var(--color-primary-700);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

.btn-secondary {
  background: transparent;
  color: var(--color-neutral-700);
  border: 1px solid var(--color-neutral-300);
}

.btn-secondary:hover:not(:disabled) {
  background: var(--color-background-secondary);
}

.btn-danger {
  background: var(--color-danger-600);
  color: white;
}

.btn-danger:hover:not(:disabled) {
  background: var(--color-danger-700);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-loading {
  position: relative;
  color: transparent;
}

.btn-spinner {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.btn-sm {
  height: 32px;
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--font-size-sm);
}

.btn-md {
  height: 40px;
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-base);
}

.btn-lg {
  height: 48px;
  padding: var(--spacing-3) var(--spacing-5);
  font-size: var(--font-size-lg);
}
*/
