/**
 * BEFORE: Inconsistent Table implementation
 * 
 * Problems:
 * - Basic HTML table, no features
 * - No sorting
 * - No pagination
 * - No selection
 * - Hardcoded styles
 * - No loading state
 * - No empty state
 */

import React from 'react';

// ❌ Table 1: Basic HTML, no features
function UsersTable() {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ background: '#f5f5f5' }}>
          <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Name</th>
          <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Email</th>
          <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>John</td>
          <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>john@example.com</td>
          <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Active</td>
        </tr>
      </tbody>
    </table>
  );
}

// ❌ Table 2: Different styling
function ProductsTable() {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr style={{ background: '#3B82F6', color: 'white' }}>
          <th style={{ padding: '10px' }}>Product</th>
          <th style={{ padding: '10px' }}>Price</th>
          <th style={{ padding: '10px' }}>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ background: 'white' }}>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>Widget</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>$9.99</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>100</td>
        </tr>
      </tbody>
    </table>
  );
}

// ❌ Table 3: No empty state handling
function OrdersTable({ orders }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Order</th>
          <th>Date</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.date}</td>
            <td>{order.total}</td>
          </tr>
        ))}
        {/* No empty state when orders.length === 0 */}
      </tbody>
    </table>
  );
}

export default function BeforeTables() {
  return (
    <div style={{ padding: '24px' }}>
      <h2>Users</h2>
      <UsersTable />
      
      <h2>Products</h2>
      <ProductsTable />
      
      <h2>Orders</h2>
      <OrdersTable orders={[]} />
    </div>
  );
}
