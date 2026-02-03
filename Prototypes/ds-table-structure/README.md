# Table Structure Documentation

## Overview

Table Structure components assemble the complete table display from individual cells and controls. This includes Header (column headers), Row (data rows), Table Results (header + rows + pagination), and Full Table (complete system).

**Component Type:** Functional Component System  
**Category:** Table / Layout  
**Token Integration:** Yes - uses surface, border, and spacing tokens  
**Components:** 4 (Header, Row, Table Results, Full Table)

---

# Part 1: Header (Table Header Row)

## Overview

The table header row contains Cell Description components for each column, providing column labels and optional sorting controls.

**Variants:** Platform-specific (Connect, Shared Parking, Hub, Dealer Portal, Scheduling)  
**Height:** 32px

## Design Specifications

### Dimensions
- **Height:** 32px (header row)
- **Layout:** Horizontal grid matching column widths
- **Cell Padding:** Varies by column

### Visual Properties
- **Background:** Transparent or subtle surface
- **Border:** Optional bottom border
- **Typography:** 14px / 18px UPPERCASE
- **Sort Controls:** Integrated into sortable columns

## Platform-Specific Columns

### Connect Table Header

**Columns:**
1. CUSTOMER NAME (sortable)
2. STATUS (sortable)
3. JOB TYPE (sortable)
4. POSTCODE (sortable)
5. ENTERED STATUS (sortable)
6. LEAD ID (sortable)
7. ASSIGNED TO (sortable)

---

### Shared Parking Headers

**Location Entity:**
- NAME, POSTCODE, AVAILABLE CHARGERS, USERS, STATUS

**Charger Entity:**
- NAME, LOCATION, STATUS, SESSIONS, ENERGY SUPPLIED

**User Entity:**
- NAME, EMAIL, PHONE, CHARGER, STATUS

**Session Entity:**
- USER, START TIME, END TIME, DURATION, ENERGY, COST, STATUS

---

### Hub Headers

**User Entity:**
- NAME, EMAIL, COMPANY, OHME ADMIN, STATUS

**Company Entity:**
- NAME, ADMIN CONTACT, USERS, CREATED

---

## Color System

### Header Row

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Text** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Border** | `color/border/subtle` | grey200 | grey800 | #E5E8E8 | #3D4A4E |

**Typography:** Roobert Regular, 14px / 18px, 0px letter-spacing, UPPERCASE

---

# Part 2: Row (Table Data Row)

## Overview

Table row contains Cell components for each column, displaying actual data with appropriate formatting and components.

**Variants:** Platform-specific  
**Height:** 72px standard

## Design Specifications

### Dimensions
- **Height:** 72px (standard data row)
- **Layout:** Horizontal grid matching header column widths
- **Padding:** Varies by cell type

### Visual Properties
- **Background:** `surface/canvas` â†’ white (light) / dark blue (dark)
- **Border:** Bottom border 1px solid
- **Hover State:** `surface/base` background
- **Click State:** Cursor pointer (if clickable)

## Row States

### Default State

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Border** | `color/border/subtle` | grey200 | grey800 | #E5E8E8 | #3D4A4E |

---

### Hover State

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/surface/base` | smokeyblue | lakeblue | #F5F8FA | #0B2539 |

---

### Selected State (Optional)

| Property | Value |
|----------|-------|
| **Surface** | Distinct background (accent tint) |
| **Border** | Accent color border |

---

## Example Row Structure (Connect)

```tsx
<Row>
  <Cell type="Namegroup">
    <NameGroup name="Francis Duperee" avatar="/avatar.jpg" />
  </Cell>
  <Cell type="Status">
    <ConnectStatusPill status="Completion pending" />
  </Cell>
  <Cell type="Text">
    <JobTypePill jobType="Standard Installation" />
  </Cell>
  <Cell type="Text" content="SW19 7HX" />
  <Cell type="Text" content="24/06/2025" />
  <Cell type="Text" content="BC00QD047N" />
  <Cell type="Text" content="Mike B+ 2" />
</Row>
```

---

# Part 3: Table Results

## Overview

Combines Result Count, Header, Rows, and Pagination into the complete table display section.

**Layout (Vertical):**
1. Result Count (24px height)
2. Table (Header + Rows)
3. Pagination (bottom)

## Design Specifications

### Dimensions
- **Width:** 1104px (desktop)
- **Height:** Variable based on rows
- **Gap:** 16px between result count and table

### Components
- **Result Count:** Above table
- **Header:** First row (32px)
- **Data Rows:** Multiple (72px each)
- **Pagination:** Below table

---

# Part 4: Full Table

## Overview

Complete table system combining Table Controls and Table Results.

**Variants:** 2 (Desktop, Mobile)

## Desktop Layout (1192px Ã— 763px)

**Structure (Vertical):**
1. **Table Controls** (216px height)
   - Search and Filter (48px)
   - Applied Filters (32px, when present)
   - Tabs (40px)
   - Gap: 16-32px between elements

2. **Table Results** (Variable height)
   - Result Count (24px)
   - Table (Header + Rows)
   - Pagination (48px)

**Total Width:** 1192px  
**Typical Height:** 763px (varies by row count)

---

## Mobile Layout (375px Ã— 1284px)

**Structure (Vertical):**
1. **Table Controls** (336px height)
   - Search input (48px)
   - Filter button (48px)
   - Applied Filters (96px, when wrapped)
   - Tabs (40px)

2. **Table Cards** (Instead of rows)
   - Uses card layout instead of table rows
   - One card per data item
   - Scrollable

**Total Width:** 375px  
**Typical Height:** 1284px (varies)

---

# Complete Token Mapping

## Tier 3 Component Tokens

```css
/* Table Header */
--table-header-height: 32px;
--table-header-font-size: var(--typography-font-size-14);
--table-header-line-height: var(--typography-line-height-18);
--table-header-letter-spacing: 0px;
--table-header-text-transform: uppercase;
--table-header-color: var(--color-content-primary);
--table-header-border: 1px solid var(--color-border-subtle);

/* Table Row */
--table-row-height: 72px;
--table-row-surface: var(--color-surface-canvas);
--table-row-surface-hover: var(--color-surface-base);
--table-row-border: 1px solid var(--color-border-subtle);

/* Table Results */
--table-results-gap: 16px;
--table-results-width-desktop: 1104px;

/* Full Table */
--full-table-width-desktop: 1192px;
--full-table-width-mobile: 375px;
--full-table-controls-gap: 32px;
```

---

## Component Properties

### Header

```typescript
type HeaderProps = {
  className?: string;
  platform?: "Connect" | "Shared parking" | "Hub" | "Dealer portal";
  columns: ColumnConfig[];
  sortColumn?: string;
  sortDirection?: "asc" | "desc" | null;
  onSort?: (column: string) => void;
};

type ColumnConfig = {
  key: string;
  title: string;
  sortable: boolean;
  width?: string;
  align?: "left" | "right";
};
```

### Row

```typescript
type RowProps = {
  className?: string;
  platform?: "Connect" | "Shared parking" | "Hub" | "Dealer portal";
  data: any;
  columns: ColumnConfig[];
  onClick?: (data: any) => void;
  isSelected?: boolean;
};
```

### Table Results

```typescript
type TableResultsProps = {
  className?: string;
  data: any[];
  columns: ColumnConfig[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
  sortColumn?: string;
  sortDirection?: "asc" | "desc" | null;
  onSort?: (column: string) => void;
  onRowClick?: (row: any) => void;
  onPageChange?: (page: number) => void;
  resultLabel?: string;
};
```

### Full Table

```typescript
type FullTableProps = {
  className?: string;
  platform?: "Connect" | "Shared parking" | "Hub" | "Dealer portal";
  mobile?: boolean;
  
  // Data
  data: any[];
  columns: ColumnConfig[];
  
  // Search
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  
  // Filters
  filters?: Record<string, any>;
  onFiltersChange?: (filters: Record<string, any>) => void;
  
  // Tabs
  tabs?: Tab[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  
  // Sort
  sortColumn?: string;
  sortDirection?: "asc" | "desc" | null;
  onSort?: (column: string) => void;
  
  // Pagination
  currentPage?: number;
  pageSize?: number;
  onPageChange?: (page: number) => void;
  
  // Row interaction
  onRowClick?: (row: any) => void;
};
```

---

# Implementation Examples

## Basic Table Header

```tsx
import Header from '@/components/table/Header';

const columnConfig = [
  { key: 'customerName', title: 'CUSTOMER NAME', sortable: true, width: '200px' },
  { key: 'status', title: 'STATUS', sortable: true, width: '180px' },
  { key: 'jobType', title: 'JOB TYPE', sortable: false, width: '150px' },
  { key: 'postcode', title: 'POSTCODE', sortable: true, width: '120px' },
  { key: 'leadId', title: 'LEAD ID', sortable: true, align: 'right', width: '140px' }
];

<table>
  <Header
    platform="Connect"
    columns={columnConfig}
    sortColumn="customerName"
    sortDirection="asc"
    onSort={handleSort}
  />
</table>
```

## Basic Table Row

```tsx
import Row from '@/components/table/Row';

const job = {
  id: '123',
  customerName: 'Francis Duperee',
  customerAvatar: '/avatars/francis.jpg',
  status: 'Completion pending',
  jobType: 'Standard Installation',
  postcode: 'SW19 7HX',
  enteredStatus: '24/06/2025',
  leadId: 'BC00QD047N',
  assignedTo: 'Mike B+ 2'
};

<Row
  platform="Connect"
  data={job}
  columns={columnConfig}
  onClick={(data) => navigate(`/jobs/${data.id}`)}
/>
```

## Complete Table Results

```tsx
import TableResults from '@/components/table/TableResults';

const [sortState, setSortState] = useState({ column: null, direction: null });
const [page, setPage] = useState(1);

<TableResults
  data={filteredJobs}
  columns={columnConfig}
  currentPage={page}
  pageSize={10}
  totalCount={filteredJobs.length}
  sortColumn={sortState.column}
  sortDirection={sortState.direction}
  onSort={(col) => handleSort(col)}
  onRowClick={(job) => navigate(`/jobs/${job.id}`)}
  onPageChange={setPage}
  resultLabel="jobs"
/>
```

## Full Table Implementation

```tsx
import FullTable from '@/components/table/FullTable';

const JobsFullTable = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [activeTab, setActiveTab] = useState('all');
  const [sortState, setSortState] = useState({ column: null, direction: null });
  const [page, setPage] = useState(1);

  const tabConfig = [
    { id: 'all', label: 'All', count: 82, icon: 'List', countColor: 'Teal' },
    { id: 'messages', label: 'Messages', count: 17, icon: 'Mail', countColor: 'Black' },
    { id: 'flagged', label: 'Flagged', count: 17, icon: 'Flag', countColor: 'Red' }
  ];

  const columnConfig = [
    { key: 'customerName', title: 'CUSTOMER NAME', sortable: true, width: '200px' },
    { key: 'status', title: 'STATUS', sortable: true, width: '180px' },
    { key: 'jobType', title: 'JOB TYPE', sortable: false, width: '150px' },
    { key: 'postcode', title: 'POSTCODE', sortable: true, width: '120px' },
    { key: 'enteredStatus', title: 'ENTERED STATUS', sortable: true, width: '140px' },
    { key: 'leadId', title: 'LEAD ID', sortable: true, align: 'right', width: '140px' },
    { key: 'assignedTo', title: 'ASSIGNED TO', sortable: false, width: '140px' }
  ];

  return (
    <FullTable
      platform="Connect"
      mobile={isMobile}
      data={jobs}
      columns={columnConfig}
      
      // Search
      searchValue={search}
      onSearchChange={setSearch}
      
      // Filters
      filters={filters}
      onFiltersChange={setFilters}
      
      // Tabs
      tabs={tabConfig}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      
      // Sort
      sortColumn={sortState.column}
      sortDirection={sortState.direction}
      onSort={(col) => handleSort(col)}
      
      // Pagination
      currentPage={page}
      pageSize={10}
      onPageChange={setPage}
      
      // Row interaction
      onRowClick={(job) => navigate(`/jobs/${job.id}`)}
    />
  );
};
```

---

# CSS Implementation

## Table Header

```css
.tableHeader {
  display: grid;
  grid-template-columns: var(--table-column-template);
  height: var(--table-header-height);
  border-bottom: var(--table-header-border);
}

.tableHeader th {
  display: flex;
  align-items: center;
  padding: 0 16px;
  
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--table-header-font-size);
  line-height: var(--table-header-line-height);
  letter-spacing: var(--table-header-letter-spacing);
  text-transform: var(--table-header-text-transform);
  color: var(--table-header-color);
}
```

## Table Row

```css
.tableRow {
  display: grid;
  grid-template-columns: var(--table-column-template);
  height: var(--table-row-height);
  background: var(--table-row-surface);
  border-bottom: var(--table-row-border);
  cursor: pointer;
  transition: background-color 200ms ease;
}

.tableRow:hover {
  background: var(--table-row-surface-hover);
}

.tableRow--selected {
  background: var(--color-surface-accent-subtle);
  border-left: 3px solid var(--color-surface-accent);
}

.tableRow td {
  display: flex;
  align-items: center;
  padding: 0 16px;
}
```

## Table Results

```css
.tableResults {
  display: flex;
  flex-direction: column;
  gap: var(--table-results-gap);
  width: var(--table-results-width-desktop);
}

.tableResults__count {
  /* Result count component */
}

.tableResults__table {
  width: 100%;
  border-collapse: collapse;
}

.tableResults__pagination {
  margin-top: auto;
}
```

## Full Table

```css
.fullTable {
  display: flex;
  flex-direction: column;
  gap: var(--full-table-controls-gap);
}

.fullTable--desktop {
  width: var(--full-table-width-desktop);
}

.fullTable--mobile {
  width: var(--full-table-width-mobile);
}

.fullTable__controls {
  /* Table Controls component */
}

.fullTable__results {
  /* Table Results component */
}

/* Mobile uses cards instead of table rows */
.fullTable--mobile .tableRow {
  display: block;
  height: auto;
  border: 1px solid var(--color-border-subtle);
  border-radius: 6px;
  margin-bottom: 16px;
  padding: 16px;
}
```

---

# Advanced Patterns

## Server-Side Table

```tsx
const ServerSideTable = ({ endpoint }) => {
  const [params, setParams] = useState({
    search: '',
    filters: {},
    sort: { column: null, direction: null },
    page: 1,
    pageSize: 10
  });

  const { data, isLoading } = useQuery({
    queryKey: ['table-data', params],
    queryFn: () => fetchTableData(endpoint, params)
  });

  return (
    <FullTable
      data={data?.items || []}
      columns={columnConfig}
      searchValue={params.search}
      onSearchChange={(search) => setParams(p => ({ ...p, search, page: 1 }))}
      filters={params.filters}
      onFiltersChange={(filters) => setParams(p => ({ ...p, filters, page: 1 }))}
      sortColumn={params.sort.column}
      sortDirection={params.sort.direction}
      onSort={(col) => handleSort(col)}
      currentPage={params.page}
      pageSize={params.pageSize}
      onPageChange={(page) => setParams(p => ({ ...p, page }))}
      totalCount={data?.totalCount}
    />
  );
};
```

## Expandable Rows

```tsx
const TableWithExpandableRows = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    setExpandedRows(prev => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  return (
    <table>
      <Header columns={columnConfig} />
      <tbody>
        {data.map(row => (
          <>
            <Row
              key={row.id}
              data={row}
              columns={columnConfig}
              onClick={() => toggleRow(row.id)}
            />
            {expandedRows.has(row.id) && (
              <tr className="expanded-content">
                <td colSpan={columnConfig.length}>
                  <ExpandedRowContent data={row} />
                </td>
              </tr>
            )}
          </>
        ))}
      </tbody>
    </table>
  );
};
```

## Multi-Select Table

```tsx
const MultiSelectTable = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    setSelectedRows(prev => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  const selectAll = () => {
    setSelectedRows(new Set(data.map(row => row.id)));
  };

  const deselectAll = () => {
    setSelectedRows(new Set());
  };

  return (
    <>
      <div className="selection-toolbar">
        <Checkbox
          checked={selectedRows.size === data.length}
          indeterminate={selectedRows.size > 0 && selectedRows.size < data.length}
          onChange={() => {
            if (selectedRows.size === data.length) {
              deselectAll();
            } else {
              selectAll();
            }
          }}
          label="Select all"
        />
        {selectedRows.size > 0 && (
          <span>{selectedRows.size} selected</span>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th><Checkbox /></th>
            <Header columns={columnConfig} />
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id} className={selectedRows.has(row.id) ? 'selected' : ''}>
              <td>
                <Checkbox
                  checked={selectedRows.has(row.id)}
                  onChange={() => toggleRow(row.id)}
                />
              </td>
              <Row data={row} columns={columnConfig} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
```

## Infinite Scroll Table

```tsx
const InfiniteScrollTable = ({ fetchMore }) => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef();

  const loadMore = async () => {
    const newData = await fetchMore(data.length);
    if (newData.length === 0) {
      setHasMore(false);
    } else {
      setData(prev => [...prev, ...newData]);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <>
      <table>
        <Header columns={columnConfig} />
        <tbody>
          {data.map(row => (
            <Row key={row.id} data={row} columns={columnConfig} />
          ))}
        </tbody>
      </table>
      <div ref={observerRef} className="load-more-trigger">
        {hasMore && <span>Loading more...</span>}
      </div>
    </>
  );
};
```

---

# Testing Checklist

## Visual Testing - Header
- [ ] Height: 32px
- [ ] Typography: 14px UPPERCASE
- [ ] Sort indicators on sortable columns
- [ ] Column widths match configuration
- [ ] Border: Bottom 1px
- [ ] Text: Dark blue (light) / white (dark)

## Visual Testing - Row
- [ ] Height: 72px
- [ ] Cells aligned correctly
- [ ] Border: Bottom 1px
- [ ] Default: White (light) / dark blue (dark)
- [ ] Hover: Light blue/grey background
- [ ] Selected: Distinct background
- [ ] Cell content displays correctly

## Visual Testing - Table Results
- [ ] Result count above table
- [ ] Header row first
- [ ] Data rows below header
- [ ] Pagination below rows
- [ ] Gap: 16px between count and table
- [ ] Width: 1104px desktop

## Visual Testing - Full Table
- [ ] Desktop: 1192px width
- [ ] Mobile: 375px width
- [ ] Controls section at top
- [ ] Results section below
- [ ] Gap: 32px between sections
- [ ] Mobile: Uses cards not rows

## Functional Testing
- [ ] Header renders all columns
- [ ] Rows render all data
- [ ] Row hover state shows
- [ ] Row click triggers action
- [ ] Sorting updates header arrows
- [ ] Pagination works
- [ ] Result count updates
- [ ] Search filters data
- [ ] Filters apply correctly
- [ ] Tabs switch views
- [ ] Mobile cards display correctly

## Accessibility Testing
- [ ] Table has proper semantics
- [ ] Headers have role="columnheader"
- [ ] Rows have role="row"
- [ ] Cells have role="cell"
- [ ] Sortable headers have aria-sort
- [ ] Clickable rows have keyboard access
- [ ] Result count has aria-live
- [ ] All controls keyboard accessible

## Mode Testing
- [ ] All components adapt to mode
- [ ] Row backgrounds adapt
- [ ] Row hover states adapt
- [ ] Borders visible in both modes
- [ ] Text content readable
- [ ] Smooth transitions

---

# Related Components

- **Table Cell System** - Provides cell types
- **Column Sort** - Sorting indicators
- **Table Controls** - Control components
- **Pagination** - Navigation
- **No Results** - Empty state

---

# Common Patterns

## Production-Ready Table

```tsx
const ProductionTable = ({ entityType }) => {
  // All state management
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [activeTab, setActiveTab] = useState('all');
  const [sort, setSort] = useState({ column: null, direction: null });
  const [page, setPage] = useState(1);

  // Fetch data with all params
  const { data, isLoading, error } = useTableData({
    entityType,
    search,
    filters,
    tab: activeTab,
    sort,
    page,
    pageSize: 10
  });

  if (isLoading) return <TableSkeleton />;
  if (error) return <TableError error={error} />;
  if (!data || data.items.length === 0) return <NoResults />;

  return (
    <FullTable
      platform={getPlatform(entityType)}
      data={data.items}
      columns={getColumnConfig(entityType)}
      searchValue={search}
      onSearchChange={(val) => { setSearch(val); setPage(1); }}
      filters={filters}
      onFiltersChange={(f) => { setFilters(f); setPage(1); }}
      tabs={getTabConfig(entityType, data.counts)}
      activeTab={activeTab}
      onTabChange={(t) => { setActiveTab(t); setPage(1); }}
      sortColumn={sort.column}
      sortDirection={sort.direction}
      onSort={handleSort}
      currentPage={page}
      pageSize={10}
      onPageChange={setPage}
      totalCount={data.totalCount}
      onRowClick={(row) => navigate(`/${entityType}/${row.id}`)}
    />
  );
};
```

---

# Version History

- **v1.0** - Initial table structure components with platform-specific variants

---

*Component Documentation - Ohme Design System*  
*Table System - Structure Components*  
*Last Updated: January 2025*
