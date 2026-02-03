# Table Column Sort System Documentation

## Overview

The Column Sort system provides visual sorting controls for table columns through sort indicators and clickable column headers. It consists of two components: Column Sort (the arrow indicator) and Cell Description (column header with optional sort).

**Component Type:** Functional Component  
**Category:** Table / Sorting Controls  
**Token Integration:** Yes - uses content tokens  
**Components:** 2 (Column Sort, Cell Description)

---

# Part 1: Column Sort (Sort Indicator)

## Overview

Column Sort displays stacked up/down chevron arrows that indicate the current sort state of a column. The active sort direction is highlighted while inactive direction remains muted.

**Variants:** 3 sort states  
**Size:** 16px Ã— 21px

## Sort State Matrix

| State | Up Chevron (â†‘) | Down Chevron (â†“) | User Action | Data Order |
|-------|----------------|------------------|-------------|------------|
| **Unsorted** | Grey #ADB3B1 | Grey #ADB3B1 | Click to sort ascending | Original order |
| **Ascending** | **Dark blue** #032536 (light) / white (dark) | Grey #ADB3B1 | Click to sort descending | Aâ†’Z, 0â†’9, Oldâ†’New |
| **Descending** | Grey #ADB3B1 | **Dark blue** #032536 (light) / white (dark) | Click to clear/unsort | Zâ†’A, 9â†’0, Newâ†’Old |

## Design Specifications

### Dimensions
- **Width:** 16px
- **Height:** 21px (total)
- **Up Chevron:** 4.8px height (top section, 0-76.19%)
- **Down Chevron:** 4.8px height (bottom section, 23.81-100%)
- **Chevron Width:** 7.467px

### Visual Properties
- **Shape:** Two chevron arrows stacked vertically
- **Active Chevron:** Filled with primary content color
- **Inactive Chevron:** Filled with grey300
- **Gap:** Minimal spacing between chevrons
- **Position:** Right side of column header text

## Color System

### Active Chevron (Currently Sorting)

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Fill** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

---

### Inactive Chevron (Not Sorting This Direction)

| Property | Value | Mode Behavior |
|----------|-------|---------------|
| **Fill** | grey300 | #ADB3B1 (constant both modes) |

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Column Sort */
--column-sort-width: 16px;
--column-sort-height: 21px;
--column-sort-chevron-width: 7.467px;
--column-sort-chevron-height: 4.8px;
--column-sort-active-color: var(--color-content-primary);
--column-sort-inactive-color: var(--color-secondary-grey300);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/ohmedarkblue` | #032536 | Active chevron (light) |
| `color/brand/white` | #FFFFFF | Active chevron (dark) |
| `color/secondary/grey300` | #ADB3B1 | Inactive chevron (both modes) |

---

## Component Properties

```typescript
type ColumnSortProps = {
  className?: string;
  sorting?: "Unsorted" | "Ascending" | "Descending";
  onClick?: () => void;
  ariaLabel?: string;
};
```

### Property: `sorting` (string, optional)
The current sort state of the column.

**Values:**
- `"Unsorted"` (default) - No sort applied, both arrows grey
- `"Ascending"` - Sorting Aâ†’Z, up arrow active
- `"Descending"` - Sorting Zâ†’A, down arrow active

---

## Implementation Examples

### Basic Column Sort

```tsx
import ColumnSort from '@/components/table/ColumnSort';

// Unsorted
<ColumnSort sorting="Unsorted" onClick={handleSort} />

// Ascending
<ColumnSort sorting="Ascending" onClick={handleSort} />

// Descending
<ColumnSort sorting="Descending" onClick={handleSort} />
```

### Sortable Column Implementation

```tsx
const SortableColumn = ({ columnKey, label, currentSort, onSort }) => {
  const getSortState = () => {
    if (currentSort.column !== columnKey) return 'Unsorted';
    return currentSort.direction === 'asc' ? 'Ascending' : 'Descending';
  };

  return (
    <button
      onClick={() => onSort(columnKey)}
      className="column-header-button"
      aria-label={`Sort by ${label}`}
    >
      {label}
      <ColumnSort sorting={getSortState()} />
    </button>
  );
};
```

### Three-State Sort Cycle

```tsx
const ThreeStateSort = ({ column }) => {
  const [sortState, setSortState] = useState<'Unsorted' | 'Ascending' | 'Descending'>('Unsorted');

  const handleSort = () => {
    if (sortState === 'Unsorted') {
      setSortState('Ascending');
    } else if (sortState === 'Ascending') {
      setSortState('Descending');
    } else {
      setSortState('Unsorted');
    }
  };

  return (
    <ColumnSort
      sorting={sortState}
      onClick={handleSort}
    />
  );
};
```

---

# Part 2: Cell Description (Column Header)

## Overview

Cell Description combines a column title with optional Column Sort controls to create sortable, accessible table headers.

**Variants:** 3 (based on sort state)  
**Height:** 32px header row

## Design Specifications

### Dimensions
- **Height:** 32px
- **Layout:** Horizontal flex
- **Gap:** 8px between title and sort indicator
- **Alignment:** Left (typically, varies by column type)

### Visual Properties
- **Title:** UPPERCASE text
- **Sort Indicator:** Right of title
- **Interactive:** Entire header clickable for sorting
- **Hover State:** Slight opacity change

## Color System

### Column Title

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Text** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** Roobert Regular, 14px / 18px, 0px letter-spacing, UPPERCASE

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Cell Description */
--cell-description-height: 32px;
--cell-description-gap: 8px;
--cell-description-font-family: var(--typography-font-family-Roobert);
--cell-description-font-size: var(--typography-font-size-14);
--cell-description-font-weight: var(--typography-font-weight-regular);
--cell-description-line-height: var(--typography-line-height-18);
--cell-description-letter-spacing: 0px;
--cell-description-text-transform: uppercase;
--cell-description-color: var(--color-content-primary);
```

---

## Component Properties

```typescript
type CellDescriptionProps = {
  className?: string;
  title: string;
  sortable?: boolean;
  sorting?: "Unsorted" | "Ascending" | "Descending";
  onSort?: () => void;
  align?: "left" | "right";
};
```

### Property: `title` (string, required)
The column header text.

**Examples:**
- "CUSTOMER NAME"
- "STATUS"
- "JOB TYPE"
- "POSTCODE"

**Format:** Should be provided in UPPERCASE

---

### Property: `sortable` (boolean, optional)
Whether the column can be sorted.

**Default:** `false`  
**When true:** Displays Column Sort indicator and makes header clickable

---

### Property: `sorting` (string, optional)
Current sort state for this column (ignored if not sortable).

**Values:** "Unsorted", "Ascending", "Descending"

---

### Property: `align` (string, optional)
Text alignment for the header.

**Values:** "left" (default), "right"  
**Usage:** Typically aligns with cell content (right for numbers/currency)

---

## Implementation Examples

### Basic Cell Description

```tsx
import CellDescription from '@/components/table/CellDescription';

// Non-sortable header
<CellDescription title="JOB TYPE" />

// Sortable header (unsorted)
<CellDescription
  title="CUSTOMER NAME"
  sortable={true}
  sorting="Unsorted"
  onSort={handleSort}
/>

// Sortable header (ascending)
<CellDescription
  title="STATUS"
  sortable={true}
  sorting="Ascending"
  onSort={handleSort}
/>

// Right-aligned header (for numbers)
<CellDescription
  title="LEAD ID"
  sortable={true}
  sorting="Descending"
  align="right"
  onSort={handleSort}
/>
```

### Table Header Row

```tsx
const TableHeader = ({ sortColumn, sortDirection, onSort }) => {
  const getSortState = (column: string) => {
    if (sortColumn !== column) return 'Unsorted';
    return sortDirection === 'asc' ? 'Ascending' : 'Descending';
  };

  return (
    <thead>
      <tr>
        <th>
          <CellDescription
            title="CUSTOMER NAME"
            sortable={true}
            sorting={getSortState('customerName')}
            onSort={() => onSort('customerName')}
            align="left"
          />
        </th>
        <th>
          <CellDescription
            title="STATUS"
            sortable={true}
            sorting={getSortState('status')}
            onSort={() => onSort('status')}
          />
        </th>
        <th>
          <CellDescription
            title="JOB TYPE"
            sortable={false}
          />
        </th>
        <th>
          <CellDescription
            title="POSTCODE"
            sortable={true}
            sorting={getSortState('postcode')}
            onSort={() => onSort('postcode')}
          />
        </th>
        <th>
          <CellDescription
            title="LEAD ID"
            sortable={true}
            sorting={getSortState('leadId')}
            onSort={() => onSort('leadId')}
            align="right"
          />
        </th>
      </tr>
    </thead>
  );
};
```

### Column Configuration System

```tsx
type ColumnConfig = {
  key: string;
  title: string;
  sortable: boolean;
  align?: 'left' | 'right';
  width?: string;
};

const columns: ColumnConfig[] = [
  { key: 'customerName', title: 'CUSTOMER NAME', sortable: true, width: '200px' },
  { key: 'status', title: 'STATUS', sortable: true, width: '180px' },
  { key: 'jobType', title: 'JOB TYPE', sortable: false, width: '150px' },
  { key: 'postcode', title: 'POSTCODE', sortable: true, width: '120px' },
  { key: 'leadId', title: 'LEAD ID', sortable: true, align: 'right', width: '140px' }
];

const ConfigurableHeader = ({ columns, sortState, onSort }) => {
  return (
    <thead>
      <tr>
        {columns.map(col => (
          <th key={col.key} style={{ width: col.width }}>
            <CellDescription
              title={col.title}
              sortable={col.sortable}
              sorting={
                sortState.column === col.key
                  ? sortState.direction === 'asc'
                    ? 'Ascending'
                    : 'Descending'
                  : 'Unsorted'
              }
              onSort={col.sortable ? () => onSort(col.key) : undefined}
              align={col.align}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
};
```

---

# CSS Implementation

## Column Sort

```css
.columnSort {
  display: inline-flex;
  flex-direction: column;
  width: var(--column-sort-width);
  height: var(--column-sort-height);
  position: relative;
}

.columnSort__chevronUp {
  width: var(--column-sort-chevron-width);
  height: var(--column-sort-chevron-height);
  transform: scaleY(-1); /* Flip to point up */
}

.columnSort__chevronDown {
  width: var(--column-sort-chevron-width);
  height: var(--column-sort-chevron-height);
}

/* State-based colors */
.columnSort--unsorted .columnSort__chevronUp,
.columnSort--unsorted .columnSort__chevronDown {
  fill: var(--column-sort-inactive-color);
}

.columnSort--ascending .columnSort__chevronUp {
  fill: var(--column-sort-active-color);
}

.columnSort--ascending .columnSort__chevronDown {
  fill: var(--column-sort-inactive-color);
}

.columnSort--descending .columnSort__chevronUp {
  fill: var(--column-sort-inactive-color);
}

.columnSort--descending .columnSort__chevronDown {
  fill: var(--column-sort-active-color);
}
```

## Cell Description

```css
.cellDescription {
  display: flex;
  align-items: center;
  gap: var(--cell-description-gap);
  height: var(--cell-description-height);
  
  font-family: var(--cell-description-font-family);
  font-size: var(--cell-description-font-size);
  font-weight: var(--cell-description-font-weight);
  line-height: var(--cell-description-line-height);
  letter-spacing: var(--cell-description-letter-spacing);
  text-transform: var(--cell-description-text-transform);
  color: var(--cell-description-color);
}

/* Sortable header */
.cellDescription--sortable {
  cursor: pointer;
  user-select: none;
  transition: opacity 200ms ease;
}

.cellDescription--sortable:hover {
  opacity: 0.7;
}

/* Alignment variants */
.cellDescription--left {
  justify-content: flex-start;
}

.cellDescription--right {
  justify-content: flex-end;
  flex-direction: row-reverse; /* Put sort indicator on left when right-aligned */
}

/* Title */
.cellDescription__title {
  flex: 1;
}

/* Sort indicator container */
.cellDescription__sort {
  flex-shrink: 0;
}
```

---

# Usage Guidelines

## When to Make Columns Sortable

**Good Candidates for Sorting:**
- Names (alphabetical)
- Dates and times (chronological)
- Status (alphabetical or custom order)
- Numbers and currencies (numerical)
- Reference IDs (alphanumeric)

**Not Sortable:**
- Action columns (buttons)
- Complex multi-element cells
- Non-comparable data
- Single-value columns

## Sort Behavior Standards

**Default State:**
- All columns start "Unsorted"
- User must click to initiate sort

**Sort Cycle:**
1. **Unsorted â†’ Ascending** (first click)
2. **Ascending â†’ Descending** (second click)
3. **Descending â†’ Unsorted** (third click, optional)

**Alternative Cycle (Two-State):**
1. **Unsorted â†’ Ascending** (first click)
2. **Ascending â†’ Descending** (second click)
3. **Descending â†’ Ascending** (third click, toggle)

**Multi-Column:**
- Only one column sorted at a time
- Clicking new column clears previous sort

## Best Practices

### Content Guidelines âœ“
1. **UPPERCASE Headers:** All column titles in caps
2. **Concise Labels:** Brief column names (1-3 words)
3. **Clear Meaning:** Column purpose obvious from title
4. **Consistent Naming:** Use same terms across tables
5. **Sortable Indication:** Sort arrows show sortability

### Visual Guidelines âœ“
1. **Active Contrast:** Active arrow clearly visible
2. **Inactive Subtle:** Inactive arrow muted
3. **Consistent Position:** Sort indicator always in same spot
4. **Adequate Gap:** 8px between title and sort
5. **Alignment:** Match column content alignment

### Interaction Guidelines âœ“
1. **Click Anywhere:** Entire header cell clickable
2. **Visual Feedback:** Hover state on sortable headers
3. **Immediate Update:** Sort applies instantly
4. **State Persistence:** Maintain sort during pagination
5. **Keyboard Access:** Enter/Space activates sort

---

# Accessibility

## ARIA Attributes

```tsx
<th
  role="columnheader"
  aria-sort={
    sorting === 'Ascending'
      ? 'ascending'
      : sorting === 'Descending'
      ? 'descending'
      : 'none'
  }
>
  <button
    onClick={onSort}
    aria-label={`Sort by ${title} ${
      sorting === 'Ascending'
        ? 'descending'
        : sorting === 'Descending'
        ? 'none'
        : 'ascending'
    }`}
    className="cell-description-button"
  >
    <span className="title">{title}</span>
    {sortable && (
      <ColumnSort
        sorting={sorting}
        aria-hidden="true" // Decorative, info conveyed by aria-sort
      />
    )}
  </button>
</th>
```

## Keyboard Navigation

```tsx
const SortableHeader = ({ title, sorting, onSort }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSort();
    }
  };

  return (
    <th>
      <div
        role="button"
        tabIndex={0}
        onClick={onSort}
        onKeyDown={handleKeyDown}
        aria-sort={
          sorting === 'Ascending' ? 'ascending' :
          sorting === 'Descending' ? 'descending' : 'none'
        }
      >
        <CellDescription
          title={title}
          sorting={sorting}
          sortable={true}
        />
      </div>
    </th>
  );
};
```

---

# Advanced Patterns

## Multi-Column Sort (Advanced)

```tsx
const MultiColumnSort = () => {
  const [sortColumns, setSortColumns] = useState<Array<{
    column: string;
    direction: 'asc' | 'desc';
  }>>([]);

  const handleSort = (column: string, withShift: boolean) => {
    if (withShift) {
      // Add to sort stack
      setSortColumns(prev => {
        const existing = prev.findIndex(s => s.column === column);
        if (existing >= 0) {
          // Toggle direction
          const updated = [...prev];
          updated[existing].direction = updated[existing].direction === 'asc' ? 'desc' : 'asc';
          return updated;
        }
        return [...prev, { column, direction: 'asc' }];
      });
    } else {
      // Single column sort
      setSortColumns([{ column, direction: 'asc' }]);
    }
  };

  // Note: This is advanced functionality not in base design system
};
```

## Sort with URL Sync

```tsx
const SortWithURL = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortColumn = searchParams.get('sort');
  const sortDirection = searchParams.get('dir') as 'asc' | 'desc' | null;

  const handleSort = (column: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        params.set('dir', 'desc');
      } else {
        // Clear sort
        params.delete('sort');
        params.delete('dir');
      }
    } else {
      params.set('sort', column);
      params.set('dir', 'asc');
    }
    
    setSearchParams(params);
  };

  return (
    <thead>
      {columns.map(col => (
        <th key={col.key}>
          <CellDescription
            title={col.title}
            sortable={col.sortable}
            sorting={
              sortColumn === col.key
                ? sortDirection === 'asc'
                  ? 'Ascending'
                  : 'Descending'
                : 'Unsorted'
            }
            onSort={() => handleSort(col.key)}
          />
        </th>
      ))}
    </thead>
  );
};
```

## Custom Sort Logic

```tsx
const CustomSortTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ column: null, direction: null });

  const sortData = (data: any[]) => {
    if (!sortConfig.column) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.column];
      const bVal = b[sortConfig.column];

      // Custom comparisons
      if (sortConfig.column === 'status') {
        // Custom status order
        const statusOrder = {
          'Completed': 1,
          'In Progress': 2,
          'Pending': 3,
          'Cancelled': 4
        };
        const comparison = statusOrder[aVal] - statusOrder[bVal];
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      }

      // Default comparison
      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  return (
    <table>
      <thead>
        {/* Headers with sort */}
      </thead>
      <tbody>
        {sortData(data).map(row => (
          <tr key={row.id}>
            {/* Row cells */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
```

---

# Testing Checklist

## Visual Testing - Column Sort
- [ ] Width: 16px
- [ ] Height: 21px
- [ ] Chevrons: 7.467px Ã— 4.8px each
- [ ] Unsorted: Both arrows grey #ADB3B1
- [ ] Ascending: Up dark blue/white, down grey
- [ ] Descending: Up grey, down dark blue/white
- [ ] Chevrons properly positioned and stacked

## Visual Testing - Cell Description
- [ ] Height: 32px
- [ ] Typography: 14px / 18px UPPERCASE
- [ ] Gap: 8px between title and sort
- [ ] Text color: Dark blue (light) / white (dark)
- [ ] Sort indicator displays when sortable
- [ ] Hover state shows on sortable headers
- [ ] Right-aligned headers work correctly

## Functional Testing
- [ ] Click toggles sort state
- [ ] Unsorted â†’ Ascending â†’ Descending cycle
- [ ] Sort indicator updates immediately
- [ ] Table data resorts correctly
- [ ] Non-sortable headers don't show indicator
- [ ] Sorting one column clears others
- [ ] Hover feedback on sortable headers

## Accessibility Testing
- [ ] Header has role="columnheader"
- [ ] aria-sort reflects current state
- [ ] Click/keyboard activates sort
- [ ] aria-label describes sort action
- [ ] Focus indicator visible
- [ ] Screen reader announces sort changes
- [ ] Enter and Space activate sort

## Mode Testing
- [ ] Active arrow adapts to mode
- [ ] Inactive arrow remains grey (constant)
- [ ] Header text adapts to mode
- [ ] Hover states work in both modes
- [ ] Smooth transitions between modes

---

# Related Components

- **Table Cell** - Paired with headers for data display
- **Table Header** - Contains multiple cell descriptions
- **Icon System** - Chevron arrows from Radix

---

# Common Patterns

## Complete Sortable Table

```tsx
const SortableJobsTable = ({ jobs }) => {
  const [sortState, setSortState] = useState<{
    column: string | null;
    direction: 'asc' | 'desc' | null;
  }>({ column: null, direction: null });

  const handleSort = (column: string) => {
    setSortState(prev => {
      if (prev.column === column) {
        // Toggle direction
        if (prev.direction === 'asc') {
          return { column, direction: 'desc' };
        } else if (prev.direction === 'desc') {
          return { column: null, direction: null };
        }
      }
      return { column, direction: 'asc' };
    });
  };

  const sortedJobs = useMemo(() => {
    if (!sortState.column) return jobs;

    return [...jobs].sort((a, b) => {
      const aVal = a[sortState.column];
      const bVal = b[sortState.column];
      const modifier = sortState.direction === 'asc' ? 1 : -1;
      
      if (aVal < bVal) return -1 * modifier;
      if (aVal > bVal) return 1 * modifier;
      return 0;
    });
  }, [jobs, sortState]);

  return (
    <table>
      <thead>
        <tr>
          <th>
            <CellDescription
              title="CUSTOMER NAME"
              sortable={true}
              sorting={
                sortState.column === 'customerName'
                  ? sortState.direction === 'asc'
                    ? 'Ascending'
                    : 'Descending'
                  : 'Unsorted'
              }
              onSort={() => handleSort('customerName')}
            />
          </th>
          {/* More headers */}
        </tr>
      </thead>
      <tbody>
        {sortedJobs.map(job => (
          <tr key={job.id}>
            <td><Cell type="Text" content={job.customerName} /></td>
            {/* More cells */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
```

---

# Version History

- **v1.0** - Initial column sort system with three-state cycling

---

*Component Documentation - Ohme Design System*  
*Table System - Column Sort Components*  
*Last Updated: January 2025*
