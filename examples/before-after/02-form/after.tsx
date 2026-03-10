/**
 * AFTER: Consistent Form with Input component
 * 
 * Improvements:
 * ✅ Single Input component with all states
 * ✅ Label association (htmlFor)
 * ✅ Error handling with messages
 * ✅ Helper text support
 * ✅ Required indicator
 * ✅ Design tokens for all values
 * ✅ Accessible (ARIA, keyboard)
 * ✅ Validation feedback
 */

import React from 'react';
import './Input.css'; // Uses design tokens

// ✅ Input component interface
interface InputProps {
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
  helperText,
  required,
  disabled,
  id,
  name,
}: InputProps) {
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;
  
  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="required-indicator" aria-hidden="true">*</span>}
        </label>
      )}
      
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`input-field ${error ? 'input-error' : ''}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
      />
      
      {error && (
        <div id={errorId} className="input-error-message" role="alert">
          {error}
        </div>
      )}
      
      {!error && helperText && (
        <div id={helperId} className="input-helper-text">
          {helperText}
        </div>
      )}
    </div>
  );
}

// ✅ Usage examples
export default function AfterForms() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState({});
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit...
  };
  
  return (
    <div className="p-6 max-w-md">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      
      <form onSubmit={handleLogin} className="space-y-4">
        {/* Email with validation */}
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          error={errors.email}
          required
        />
        
        {/* Password with helper text */}
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          error={errors.password}
          helperText={!errors.password ? 'Must be at least 8 characters' : undefined}
          required
        />
        
        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <Button type="submit" variant="primary" fullWidth>
            Login
          </Button>
          <Button type="button" variant="secondary">
            Cancel
          </Button>
        </div>
      </form>
      
      <h2 className="text-2xl font-semibold mt-8 mb-6">Register</h2>
      
      <form className="space-y-4">
        <Input
          label="Full Name"
          placeholder="John Doe"
          required
        />
        
        <Input
          label="Email"
          type="email"
          placeholder="john@example.com"
          helperText="We'll never share your email"
          required
        />
        
        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
          helperText="Use 8+ characters with a mix of letters, numbers & symbols"
          required
        />
        
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          required
        />
        
        <Button type="submit" variant="primary" fullWidth>
          Create Account
        </Button>
      </form>
    </div>
  );
}

// ✅ Input CSS using design tokens
/*
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
}

.input-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-700);
}

.required-indicator {
  color: var(--color-danger-600);
  margin-left: var(--spacing-1);
}

.input-field {
  padding: var(--spacing-2) var(--spacing-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  color: var(--color-neutral-900);
  background: var(--color-background-primary);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.input-field:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px var(--color-primary-100);
}

.input-field.input-error {
  border-color: var(--color-danger-500);
}

.input-field.input-error:focus {
  box-shadow: 0 0 0 3px var(--color-danger-100);
}

.input-field:disabled {
  background: var(--color-background-secondary);
  cursor: not-allowed;
  opacity: 0.6;
}

.input-error-message {
  font-size: var(--font-size-sm);
  color: var(--color-danger-600);
}

.input-helper-text {
  font-size: var(--font-size-sm);
  color: var(--color-neutral-500);
}
*/
