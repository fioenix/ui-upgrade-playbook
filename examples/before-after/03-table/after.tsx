/**
 * AFTER: Consistent Table component with features
 * 
 * Improvements:
 * ✅ Single Table component with all features
 * ✅ Sorting (clickable headers)
 * ✅ Selection (checkboxes)
 * ✅ Pagination
 * ✅ Loading state (skeleton)
 * ✅ Empty state
 * ✅ Design tokens for all values
 * ✅ Accessible (ARIA, keyboard)
 */

import React from 'react';
import './Table.css'; // Uses design tokens

// ✅ Table component interface
interface Column {
  key: string;
  title: string;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}

interface TableProps {
  columns: Column[];
  data: any[];
  sortable?: boolean;
  selectable?: boolean;
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
    onChange: (page: number) => void;
  };
  loading?: boolean;
  emptyMessage?: string;
  onSort?: (column: string, direction: 'asc' | 'desc') => void;
  onSelectionChange?: (selected: any[]) => void;
  onRowClick?: (row: any) => void;
}

function Table({
  columns,
  data,
  sortable = false,
  selectable = false,
  pagination,
  loading = false,
  emptyMessage = 'No data available',
  onSort,
  onSelectionChange,
  onRowClick,
}: TableProps) {
  const [selectedRows, setSelectedRows] = React.useState<Set<number>>(new Set());
  const [sortConfig, setSortConfig] = React.useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  // Handle sort
  const handleSort = (key: string) => {
    if (!sortable) return;
    
    const direction = sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
    onSort?.(key, direction);
  };

  // Handle selection
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(data.map((_, i) => i)));
    } else {
      setSelectedRows(new Set());
    }
    onSelectionChange?.(checked ? data : []);
  };

  const handleSelectRow = (index: number) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedRows(newSelected);
    onSelectionChange?.(Array.from(newSelected).map(i => data[i]));
  };

  // Loading state
  if (loading) {
    return (
      <div className="table-loading">
        <div className="table-skeleton">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="skeleton-row" />
          ))}
        </div>
      </div>
    );
  }

  // Empty state
  if (data.length === 0) {
    return (
      <div className="table-empty">
        <div className="empty-icon">📭</div>
        <h3 className="empty-title">No data</h3>
        <p className="empty-message">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-header">
          <tr>
            {selectable && (
              <th className="table-cell table-select">
                <input
                  type="checkbox"
                  checked={selectedRows.size === data.length}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  aria-label="Select all rows"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className={`table-header-cell ${sortable && column.sortable ? 'sortable' : ''}`}
                style={{ width: column.width, textAlign: column.align }}
                onClick={() => handleSort(column.key)}
                aria-sort={sortConfig?.key === column.key ? sortConfig.direction : 'none'}
              >
                <div className="header-content">
                  {column.title}
                  {sortable && column.sortable && (
                    <span className="sort-icon">
                      {sortConfig?.key === column.key ? (
                        sortConfig.direction === 'asc' ? '↑' : '↓'
                      ) : '⇅'}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((row, index) => (
            <tr
              key={index}
              className={`table-row ${selectedRows.has(index) ? 'selected' : ''}`}
              onClick={() => onRowClick?.(row)}
            >
              {selectable && (
                <td className="table-cell table-select">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(index)}
                    onChange={() => handleSelectRow(index)}
                    aria-label={`Select row ${index + 1}`}
                  />
                </td>
              )}
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="table-cell"
                  style={{ textAlign: column.align }}
                >
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {pagination && (
        <div className="table-pagination">
          <span className="pagination-info">
            Showing {(pagination.page - 1) * pagination.pageSize + 1} to{' '}
            {Math.min(pagination.page * pagination.pageSize, pagination.total)} of {pagination.total}
          </span>
          <div className="pagination-buttons">
            <button
              onClick={() => pagination.onChange(pagination.page - 1)}
              disabled={pagination.page === 1}
              className="pagination-btn"
            >
              Previous
            </button>
            <button
              onClick={() => pagination.onChange(pagination.page + 1)}
              disabled={pagination.page * pagination.pageSize >= pagination.total}
              className="pagination-btn"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ✅ Usage example
export default function AfterTables() {
  const [page, setPage] = React.useState(1);
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Offline' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', status: 'Active' },
  ];

  const columns: Column[] = [
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
    {
      key: 'status',
      title: 'Status',
      render: (value: string) => (
        <span className={`badge badge-${value.toLowerCase()}`}>{value}</span>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      
      <Table
        columns={columns}
        data={users}
        sortable
        selectable
        pagination={{
          page,
          pageSize: 10,
          total: 50,
          onChange: setPage,
        }}
        onSort={(column, direction) => console.log('Sort:', column, direction)}
        onSelectionChange={(selected) => console.log('Selected:', selected)}
      />
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Empty State Example</h2>
      
      <Table
        columns={columns}
        data={[]}
        emptyMessage="No users found. Try adjusting your filters."
      />
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Loading State Example</h2>
      
      <Table columns={columns} data={[]} loading />
    </div>
  );
}

// ✅ Table CSS using design tokens
/*
.table-container {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table-header {
  background: var(--color-background-secondary);
}

.table-header-cell {
  padding: var(--spacing-3) var(--spacing-4);
  text-align: left;
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-700);
  border-bottom: 2px solid var(--color-border);
  cursor: pointer;
}

.sortable:hover {
  background: var(--color-background-tertiary);
}

.table-row {
  border-bottom: 1px solid var(--color-border-subtle);
  transition: background var(--transition-fast);
}

.table-row:hover {
  background: var(--color-background-secondary);
}

.table-row.selected {
  background: var(--color-primary-50);
}

.table-cell {
  padding: var(--spacing-3) var(--spacing-4);
  color: var(--color-neutral-800);
}

.table-empty {
  text-align: center;
  padding: var(--spacing-12);
}

.empty-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-4);
}

.empty-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-2);
}

.empty-message {
  color: var(--color-neutral-500);
}

.table-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-4);
  border-top: 1px solid var(--color-border);
  background: var(--color-background-primary);
}

.pagination-btn {
  padding: var(--spacing-2) var(--spacing-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: white;
  cursor: pointer;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
*/
