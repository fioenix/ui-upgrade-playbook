/**
 * BEFORE: Inconsistent Form implementation
 * 
 * Problems:
 * - No label association
 * - Inconsistent input styling
 * - No error handling
 * - No validation feedback
 * - Hardcoded spacing
 * - No helper text
 * - Inconsistent required indicators
 */

import React from 'react';

// ❌ Form 1: No labels, no validation
function LoginForm() {
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        style={{ padding: '8px', border: '1px solid #ccc', marginBottom: '15px' }}
      />
      <input
        type="password"
        placeholder="Password"
        style={{ padding: '10px', border: '1px solid #999', marginBottom: '15px' }}
      />
      <button
        onClick={handleLogin}
        style={{ padding: '12px 24px', background: '#3B82F6', color: 'white', border: 'none' }}
      >
        Login
      </button>
    </div>
  );
}

// ❌ Form 2: Labels but not associated
function RegisterForm() {
  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Name</div>
      <input
        type="text"
        style={{ padding: '8px', border: '1px solid #ddd', width: '100%' }}
      />
      
      <div style={{ fontWeight: 'bold', marginTop: '15px', marginBottom: '5px' }}>Email</div>
      <input
        type="email"
        style={{ padding: '10px', border: '1px solid #ddd', width: '100%' }}
      />
      
      <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>Required</div>
      
      <button
        style={{ marginTop: '20px', padding: '10px 20px', background: 'green', color: 'white' }}
      >
        Register
      </button>
    </div>
  );
}

// ❌ Form 3: No error states
function ContactForm() {
  const [email, setEmail] = React.useState('');
  
  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(email); }}>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      {/* No error message display */}
      <button type="submit">Send</button>
    </form>
  );
}

export default function BeforeForms() {
  return (
    <div style={{ padding: '24px' }}>
      <h2>Login Form</h2>
      <LoginForm />
      
      <h2>Register Form</h2>
      <RegisterForm />
      
      <h2>Contact Form</h2>
      <ContactForm />
    </div>
  );
}
