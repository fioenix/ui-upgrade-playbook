/**
 * BEFORE: Inconsistent Button implementations
 * 
 * Problems:
 * - Hardcoded colors (#3B82F6, #2563eb, blue)
 * - Inconsistent padding (12px 24px, 10px 20px, 8px 16px)
 * - No hover states
 * - No focus states for accessibility
 * - No disabled state handling
 * - No loading state
 * - Multiple button styles throughout app
 */

import React from 'react';

// ❌ Button 1: Inline styles with hardcoded values
function SaveButton() {
  return (
    <button
      onClick={handleSave}
      style={{
        backgroundColor: '#3B82F6',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
      }}
    >
      Save Changes
    </button>
  );
}

// ❌ Button 2: Different hardcoded values
function SubmitButton() {
  return (
    <button
      onClick={handleSubmit}
      style={{
        background: '#2563eb',
        color: '#ffffff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '500',
      }}
    >
      Submit
    </button>
  );
}

// ❌ Button 3: Yet another style
function ClickMeButton() {
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: 'blue',
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      Click Me
    </button>
  );
}

// ❌ Button 4: No disabled state
function ActionDisabled() {
  return (
    <button
      disabled
      style={{
        backgroundColor: '#3B82F6',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '4px',
      }}
    >
      Cannot Click
    </button>
  );
}

// ❌ Button 5: Secondary button with inconsistent border
function CancelButton() {
  return (
    <button
      onClick={handleCancel}
      style={{
        backgroundColor: 'white',
        color: '#666',
        padding: '10px 20px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Cancel
    </button>
  );
}

// ❌ Button 6: No hover/focus states anywhere
function IconButton() {
  return (
    <button
      onClick={handleAction}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px',
        background: '#f5f5f5',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
      }}
    >
      <SettingsIcon />
    </button>
  );
}

export default function BeforeButtons() {
  return (
    <div style={{ padding: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <SaveButton />
      <SubmitButton />
      <ClickMeButton />
      <ActionDisabled />
      <CancelButton />
      <IconButton />
    </div>
  );
}
