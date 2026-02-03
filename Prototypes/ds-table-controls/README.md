# Table Controls Documentation

## Overview

Table Controls provides the complete control interface for tables, combining search, filtering, tab navigation, and result count display. These components work together to allow users to refine and navigate table data.

**Component Type:** Functional Component System  
**Category:** Table / Controls  
**Token Integration:** Yes - uses input, button, pill, and tab tokens  
**Components:** 4 (Search and Filter, Applied Filters, Tabs, Result Count)

---

# Part 1: Search and Filter

## Overview

Combines a search input field with an optional filter button for comprehensive table data refinement.

**Variants:** 3 (Desktop without button, Desktop with button, Mobile)  
**Height:** 48px per element

## Design Specifications

### Desktop Without Button (1104px width)

| Element | Width | Height |
|---------|-------|--------|
| **Search Input** | 1104px (full width) | 48px |

---

### Desktop With Button (1104px width)

| Element | Width | Height | Gap |
|---------|-------|--------|-----|
| **Search Input** | Flex-grow | 48px | 16px |
| **Filter Button** | Auto (~140px) | 48px | - |

---

### Mobile (375px width)

| Element | Width | Height | Gap |
|---------|-------|--------|-----|
| **Search Input** | 375px (full) | 48px | 8px |
| **Filter Button** | 375px (full) | 48px | - |

**Layout:** Vertical stack

---

## Component Elements

### Search Input
- **Placeholder:** "Search table"
- **Icon:** Search icon (24Ã—24px, right side)
- **Component:** Standard Input component
- **Border:** `input/field/border/active` â†’ grey300
- **Surface:** `input/field/surface/active` â†’ white/canvas

### Filter Button
- **Text:** "Filters (X)" where X = active filter count
- **Icon:** Filter icon (24Ã—24px, left side)
- **Component:** Secondary Button
- **Gap:** 12px icon-to-text

## Color System

Uses standard Input and Button component tokens. See Input and Button documentation for complete specifications.

---

# Part 2: Applied Filters

## Overview

Displays active filters as removable Warning intent pills with a "Clear filters" button to remove all filters at once.

**Variants:** 2 (Desktop, Mobile)

## Design Specifications

### Desktop Layout

**Container:**
- Layout: Horizontal row
- Gap: 16px between pills
- Height: 32px

**Elements:**
- Filter Pills (left)
- Clear Filters button (right)

---

### Mobile Layout

**Container:**
- Layout: Wrapped grid
- Gap: 12px between pills
- Height: Variable (96px when wrapped)

**Elements:**
- Filter Pills (wrapped)
- Clear Filters button (below pills)

---

## Filter Pill Format

**Structure:** "**Label:** Value"

**Examples:**
- "**Status:** Quote required"
- "**Job type:** Installation"
- "**Sub type:** Standard"

**Typography:**
- Label: Roobert SemiBold
- Value: Roobert Regular
- Size: 14.22px / 18px

**Components:**
- Pill type: Warning intent
- Pill size: Small (24px height)
- Remove icon: X icon (14-15px)
- Icon gap: 2px

## Color System

### Filter Pills (Warning Intent)

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `pill/intent/warning/surface` | yellow100 | yellow900 | #FFF2C6 | #441906 |
| **Content** | `pill/intent/warning/content` | yellow900 | yellow100 | #441906 | #FFF2C6 |

---

### Clear Filters Button

Uses Tertiary Button component tokens:
- Border: Transparent
- Content: `content/primary`

---

# Part 3: Tabs (Table Segmentation)

## Overview

Tab navigation for segmenting table data into categories (All, Messages, Flagged, etc.). Each tab shows an optional icon, label, and count with semantic color coding.

**Variants:** Multiple tabs with selection state  
**Height:** 40px

## Design Specifications

### Tab Dimensions

| Element | Height | Padding | Gap |
|---------|--------|---------|-----|
| **Tab** | 40px | 8px H, 8px V | 12px between icon/label/count |
| **Selected Border** | 3px bottom | - | - |

### Tab Elements

**Icon (Optional):**
- Size: 24Ã—24px
- Color: `content/primary`

**Label:**
- Typography: Roobert SemiBold, 18px / 24px
- Color: `content/primary`

**Count:**
- Typography: Roobert SemiBold, 18px / 24px
- Color: Varies by intent (Teal, Black, Red)

## Tab States

### Selected Tab

| Property | Token Reference | Value |
|----------|----------------|-------|
| **Surface** | `tab/old/state/default/surface` | white (light) / varies (dark) |
| **Bottom Border** | `tab/old/state/selected/border` | teal #0EBA9E |
| **Border Width** | 3px | Thick |

---

### Unselected Tab

| Property | Value |
|----------|-------|
| **Surface** | white (light) / varies (dark) |
| **Bottom Border** | None |

---

## Count Colors

| Color Type | Token Reference | Hex Value | Use Case |
|------------|----------------|-----------|----------|
| **Teal** | `tab/old/count-colour/green` | #0EBA9E | Default, neutral counts |
| **Black** | `tab/old/count-colour/black` â†’ `content/primary` | #032536 (light) / white (dark) | Standard counts |
| **Red** | `tab/old/count-colour/red` | #580202 | Alert counts, flagged items |

---

# Part 4: Result Count

## Overview

Simple text display showing the number of results currently visible out of the total.

**Format:** "Showing **X** jobs out of **Y**"

## Specifications

**Typography:**
- Regular text: Roobert Regular, 16px / 24px
- Bold numbers: Roobert SemiBold for X and Y values
- Color: `content/primary`

**Example:** "Showing **10** jobs out of **29**"

---

# Complete Token Mapping

## Tier 3 Component Tokens

```css
/* Search and Filter */
--search-filter-gap-desktop: 16px;
--search-filter-gap-mobile: 8px;
--search-filter-height: 48px;
--search-filter-width-desktop: 1104px;
--search-filter-width-mobile: 375px;

/* Applied Filters */
--applied-filters-gap-desktop: 16px;
--applied-filters-gap-mobile: 12px;
--applied-filters-height: 32px;
--filter-pill-size: small;

/* Tabs */
--tab-height: 40px;
--tab-padding-inline: 8px;
--tab-padding-stack: 8px;
--tab-gap: 12px;
--tab-selected-border-width: 3px;
--tab-selected-border-color: var(--tab-old-state-selected-border);
--tab-surface: var(--tab-old-state-default-surface);

/* Tab Typography */
--tab-font-family: var(--typography-font-family-Roobert);
--tab-font-size: var(--typography-font-size-18);
--tab-font-weight: var(--typography-font-weight-semibold);
--tab-line-height: var(--typography-line-height-24);
--tab-letter-spacing: var(--typography-letter-spacing-0dot2);
--tab-color: var(--color-content-primary);

/* Result Count */
--result-count-font-family: var(--typography-font-family-Roobert);
--result-count-font-size: var(--typography-font-size-16);
--result-count-line-height: var(--typography-line-height-24);
--result-count-color: var(--color-content-primary);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `tab/old/state/selected/border` | teal300 | teal300 | #0EBA9E | #0EBA9E |
| `tab/old/count-colour/green` | teal300 | teal300 | #0EBA9E | #0EBA9E |
| `tab/old/count-colour/black` | `content/primary` | `content/primary` | #032536 | #FFFFFF |
| `tab/old/count-colour/red` | red900 | red100 | #580202 | #FFE1E1 |

---

## Component Properties

### Search and Filter

```typescript
type SearchAndFilterProps = {
  className?: string;
  mobile?: boolean;
  showFilterButton?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  filterCount?: number;
  onFilterClick?: () => void;
  searchPlaceholder?: string;
};
```

### Applied Filters

```typescript
type AppliedFiltersProps = {
  className?: string;
  mobile?: boolean;
  filters: AppliedFilter[];
  onRemove?: (filterId: string) => void;
  onClearAll?: () => void;
};

type AppliedFilter = {
  id: string;
  label: string;
  value: string;
};
```

### Tabs

```typescript
type TabsProps = {
  className?: string;
  mobile?: boolean;
  tabs: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
};

type Tab = {
  id: string;
  label: string;
  icon?: React.ReactNode | string;
  count?: number;
  countColor?: "Teal" | "Black" | "Red";
};
```

### Result Count

```typescript
type ResultCountProps = {
  className?: string;
  showing: number;
  total: number;
  label?: string; // "jobs", "users", "items"
};
```

---

# Implementation Examples

## Search and Filter Component

```tsx
import SearchAndFilter from '@/components/table/SearchAndFilter';

const [searchQuery, setSearchQuery] = useState('');
const [filterOpen, setFilterOpen] = useState(false);
const [activeFilterCount, setActiveFilterCount] = useState(0);

// Desktop with filter button
<SearchAndFilter
  mobile={false}
  showFilterButton={true}
  searchValue={searchQuery}
  onSearchChange={setSearchQuery}
  filterCount={activeFilterCount}
  onFilterClick={() => setFilterOpen(true)}
  searchPlaceholder="Search jobs..."
/>

// Mobile (stacked)
<SearchAndFilter
  mobile={true}
  showFilterButton={true}
  searchValue={searchQuery}
  onSearchChange={setSearchQuery}
  filterCount={activeFilterCount}
  onFilterClick={() => setFilterOpen(true)}
/>
```

## Applied Filters Component

```tsx
import AppliedFilters from '@/components/table/AppliedFilters';

const [filters, setFilters] = useState<AppliedFilter[]>([
  { id: 'status', label: 'Status', value: 'Quote required' },
  { id: 'jobType', label: 'Job type', value: 'Installation' },
  { id: 'subType', label: 'Sub type', value: 'Standard' }
]);

const handleRemoveFilter = (filterId: string) => {
  setFilters(prev => prev.filter(f => f.id !== filterId));
};

const handleClearAll = () => {
  setFilters([]);
};

<AppliedFilters
  filters={filters}
  onRemove={handleRemoveFilter}
  onClearAll={handleClearAll}
  mobile={false}
/>
```

## Tabs Component

```tsx
import Tabs from '@/components/table/Tabs';

const [activeTab, setActiveTab] = useState('all');

const tabConfig: Tab[] = [
  {
    id: 'all',
    label: 'All',
    icon: 'List',
    count: 82,
    countColor: 'Teal'
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: 'Mail',
    count: 17,
    countColor: 'Black'
  },
  {
    id: 'flagged',
    label: 'Flagged',
    icon: 'Flag',
    count: 17,
    countColor: 'Red'
  }
];

<Tabs
  tabs={tabConfig}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  mobile={false}
/>
```

## Result Count Component

```tsx
import ResultCount from '@/components/table/ResultCount';

// Basic usage
<ResultCount
  showing={10}
  total={29}
  label="jobs"
/>
// Displays: "Showing 10 jobs out of 29"

// With filtered results
<ResultCount
  showing={filteredData.length}
  total={allData.length}
  label="installations"
/>
```

## Complete Table Controls

```tsx
const TableControls = ({
  searchQuery,
  onSearchChange,
  filters,
  onRemoveFilter,
  onClearFilters,
  onFilterClick,
  tabs,
  activeTab,
  onTabChange,
  resultCount
}) => {
  return (
    <div className="table-controls">
      {/* Search and Filter */}
      <SearchAndFilter
        searchValue={searchQuery}
        onSearchChange={onSearchChange}
        filterCount={filters.length}
        onFilterClick={onFilterClick}
        showFilterButton={true}
      />

      {/* Applied Filters (conditional) */}
      {filters.length > 0 && (
        <AppliedFilters
          filters={filters}
          onRemove={onRemoveFilter}
          onClearAll={onClearFilters}
        />
      )}

      {/* Tabs */}
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={onTabChange}
      />

      {/* Result Count */}
      <ResultCount
        showing={resultCount.showing}
        total={resultCount.total}
        label={resultCount.label}
      />
    </div>
  );
};
```

---

# CSS Implementation

## Search and Filter

```css
.searchAndFilter {
  display: flex;
  gap: var(--search-filter-gap-desktop);
  align-items: center;
}

.searchAndFilter--mobile {
  flex-direction: column;
  gap: var(--search-filter-gap-mobile);
}

.searchAndFilter__input {
  flex: 1;
  /* Uses Input component styles */
}

.searchAndFilter--mobile .searchAndFilter__input,
.searchAndFilter--mobile .searchAndFilter__button {
  width: 100%;
}
```

## Applied Filters

```css
.appliedFilters {
  display: flex;
  gap: var(--applied-filters-gap-desktop);
  align-items: center;
  flex-wrap: wrap;
}

.appliedFilters--mobile {
  gap: var(--applied-filters-gap-mobile);
}

.appliedFilters__pills {
  display: flex;
  gap: inherit;
  flex-wrap: wrap;
  flex: 1;
}

.appliedFilters__clearButton {
  flex-shrink: 0;
  /* Uses Tertiary Button component */
}
```

## Tabs

```css
.tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--color-border-subtle);
}

.tab {
  display: flex;
  align-items: center;
  gap: var(--tab-gap);
  padding: var(--tab-padding-stack) var(--tab-padding-inline);
  height: var(--tab-height);
  background: var(--tab-surface);
  border: none;
  border-bottom: var(--tab-selected-border-width) solid transparent;
  cursor: pointer;
  transition: border-color 200ms ease;
  
  font-family: var(--tab-font-family);
  font-size: var(--tab-font-size);
  font-weight: var(--tab-font-weight);
  line-height: var(--tab-line-height);
  letter-spacing: var(--tab-letter-spacing);
  color: var(--tab-color);
}

.tab--selected {
  border-bottom-color: var(--tab-selected-border-color);
}

.tab:hover:not(.tab--selected) {
  opacity: 0.7;
}

.tab__icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.tab__count--teal {
  color: var(--tab-old-count-colour-green);
}

.tab__count--black {
  color: var(--tab-old-count-colour-black);
}

.tab__count--red {
  color: var(--tab-old-count-colour-red);
}
```

## Result Count

```css
.resultCount {
  font-family: var(--result-count-font-family);
  font-size: var(--result-count-font-size);
  line-height: var(--result-count-line-height);
  color: var(--result-count-color);
}

.resultCount__number {
  font-weight: var(--typography-font-weight-semibold);
}
```

---

# Advanced Patterns

## Integrated Table Controls

```tsx
const IntegratedTableControls = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [activeTab, setActiveTab] = useState('all');
  const [data, setData] = useState(allData);

  // Compute filtered data
  const filteredData = useMemo(() => {
    let result = allData;

    // Apply search
    if (searchQuery) {
      result = result.filter(item =>
        Object.values(item).some(val =>
          String(val).toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        result = result.filter(item => item[key] === value);
      }
    });

    // Apply tab filter
    if (activeTab !== 'all') {
      result = result.filter(item => item.category === activeTab);
    }

    return result;
  }, [allData, searchQuery, filters, activeTab]);

  // Build applied filters array
  const appliedFilters = Object.entries(filters)
    .filter(([_, value]) => value)
    .map(([key, value]) => ({
      id: key,
      label: formatLabel(key),
      value: String(value)
    }));

  return (
    <div className="table-controls">
      <SearchAndFilter
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        filterCount={appliedFilters.length}
        onFilterClick={() => setFilterModalOpen(true)}
        showFilterButton={true}
      />

      {appliedFilters.length > 0 && (
        <AppliedFilters
          filters={appliedFilters}
          onRemove={(id) => {
            setFilters(prev => {
              const updated = { ...prev };
              delete updated[id];
              return updated;
            });
          }}
          onClearAll={() => setFilters({})}
        />
      )}

      <Tabs
        tabs={[
          { id: 'all', label: 'All', count: allData.length, icon: 'List', countColor: 'Teal' },
          { id: 'messages', label: 'Messages', count: messageCount, icon: 'Mail', countColor: 'Black' },
          { id: 'flagged', label: 'Flagged', count: flaggedCount, icon: 'Flag', countColor: 'Red' }
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <ResultCount
        showing={filteredData.length}
        total={allData.length}
        label="jobs"
      />
    </div>
  );
};
```

## URL-Synced Controls

```tsx
const URLSyncedControls = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('search') || '';
  const activeTab = searchParams.get('tab') || 'all';
  const filters = Object.fromEntries(
    Array.from(searchParams.entries())
      .filter(([key]) => !['search', 'tab', 'page'].includes(key))
  );

  const updateSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }
    params.delete('page'); // Reset to page 1
    setSearchParams(params);
  };

  const updateTab = (tab: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', tab);
    params.delete('page'); // Reset to page 1
    setSearchParams(params);
  };

  return (
    <div className="table-controls">
      <SearchAndFilter
        searchValue={searchQuery}
        onSearchChange={updateSearch}
        {...props}
      />
      
      <Tabs
        activeTab={activeTab}
        onTabChange={updateTab}
        {...props}
      />
    </div>
  );
};
```

## Responsive Table Controls

```tsx
const ResponsiveTableControls = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <div className="table-controls">
      <SearchAndFilter
        mobile={isMobile}
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        showFilterButton={true}
        filterCount={filters.length}
        onFilterClick={() => setFilterOpen(true)}
      />

      {filters.length > 0 && (
        <AppliedFilters
          mobile={isMobile}
          filters={filters}
          onRemove={removeFilter}
          onClearAll={clearAllFilters}
        />
      )}

      <Tabs
        mobile={isMobile}
        tabs={tabConfig}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <ResultCount
        showing={showing}
        total={total}
        label="jobs"
      />
    </div>
  );
};
```

---

# Testing Checklist

## Visual Testing - Search and Filter
- [ ] Desktop: Input flex-grow, button auto width
- [ ] Desktop: 16px gap between elements
- [ ] Mobile: Full width, vertical stack, 8px gap
- [ ] Search icon: 24Ã—24px right side
- [ ] Filter button: Icon + "Filters (X)" text
- [ ] Height: 48px for both elements

## Visual Testing - Applied Filters
- [ ] Pills: Warning intent, small size (24px)
- [ ] Format: "Label: Value" (SemiBold + Regular)
- [ ] X icon: 14-15px
- [ ] Desktop gap: 16px
- [ ] Mobile gap: 12px
- [ ] Mobile: Wraps to multiple rows
- [ ] Clear button: Tertiary style

## Visual Testing - Tabs
- [ ] Height: 40px
- [ ] Padding: 8px
- [ ] Gap: 12px between icon/label/count
- [ ] Selected: 3px teal bottom border
- [ ] Unselected: No bottom border
- [ ] Icon: 24Ã—24px (when present)
- [ ] Count colors: Teal, Black, or Red
- [ ] Typography: SemiBold 18px

## Visual Testing - Result Count
- [ ] Format: "Showing X jobs out of Y"
- [ ] Numbers: Bold/SemiBold
- [ ] Text: Regular
- [ ] Typography: 16px / 24px
- [ ] Color adapts to mode

## Functional Testing
- [ ] Search input updates on typing
- [ ] Search filters table immediately
- [ ] Filter button opens filter modal
- [ ] Filter count updates
- [ ] Applied filter pills display
- [ ] Filter removal works
- [ ] Clear all removes all filters
- [ ] Tab selection changes active tab
- [ ] Tab changes filter table data
- [ ] Result count updates dynamically

## Accessibility Testing
- [ ] Search input has label
- [ ] Filter button has aria-label with count
- [ ] Filter pills have aria-label for removal
- [ ] Clear button clearly labeled
- [ ] Tabs have role="tablist"
- [ ] Tab items have role="tab"
- [ ] Selected tab has aria-selected="true"
- [ ] Result count has aria-live
- [ ] All keyboard accessible

## Mode Testing
- [ ] All text adapts to mode
- [ ] Search input adapts
- [ ] Filter button adapts
- [ ] Filter pills adapt (warning intent)
- [ ] Tab selected border remains teal
- [ ] Tab counts adapt based on color type
- [ ] Smooth transitions

---

# Related Components

- **Input** - Search field
- **Button** - Filter and Clear buttons
- **Pill** - Applied filter pills
- **Filter Modal** - Opened by filter button
- **Icon** - Search, filter, tab icons

---

# Common Patterns

## Complete Controls with State Management

```tsx
const TableWithControls = ({ data }) => {
  // State
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [activeTab, setActiveTab] = useState('all');
  const [page, setPage] = useState(1);

  // Compute filtered data
  const filteredData = useMemo(() => {
    let result = data;
    
    if (search) {
      result = result.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) result = result.filter(item => item[key] === value);
    });
    
    if (activeTab !== 'all') {
      result = result.filter(item => item.category === activeTab);
    }
    
    return result;
  }, [data, search, filters, activeTab]);

  // Applied filters for display
  const appliedFilters = Object.entries(filters)
    .filter(([_, value]) => value)
    .map(([key, value]) => ({
      id: key,
      label: formatLabel(key),
      value: String(value)
    }));

  // Result count
  const pageSize = 10;
  const start = (page - 1) * pageSize;
  const showing = Math.min(filteredData.length, pageSize);

  return (
    <div className="table-container">
      {/* Controls */}
      <div className="table-controls">
        <SearchAndFilter
          searchValue={search}
          onSearchChange={(val) => {
            setSearch(val);
            setPage(1); // Reset to page 1
          }}
          filterCount={appliedFilters.length}
          onFilterClick={() => setFilterOpen(true)}
          showFilterButton={true}
        />

        {appliedFilters.length > 0 && (
          <AppliedFilters
            filters={appliedFilters}
            onRemove={(id) => {
              setFilters(prev => {
                const updated = { ...prev };
                delete updated[id];
                return updated;
              });
              setPage(1);
            }}
            onClearAll={() => {
              setFilters({});
              setPage(1);
            }}
          />
        )}

        <Tabs
          tabs={tabConfig}
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            setPage(1);
          }}
        />

        <ResultCount
          showing={showing}
          total={filteredData.length}
          label="jobs"
        />
      </div>

      {/* Table */}
      <Table data={filteredData.slice(start, start + pageSize)} />

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(filteredData.length / pageSize)}
        onPageChange={setPage}
      />
    </div>
  );
};
```

---

# Version History

- **v1.0** - Initial table controls system with search, filters, tabs, and result count

---

*Component Documentation - Ohme Design System*  
*Table System - Control Components*  
*Last Updated: January 2025*
