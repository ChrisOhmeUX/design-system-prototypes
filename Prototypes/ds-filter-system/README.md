# Filter System Documentation

## Overview

The Filter system provides modal-based filtering interfaces for tables and data views. It allows users to refine results by multiple criteria (dates, job types, statuses, assignments) and includes a special Partner Filter variant for viewing portals as specific partner organizations.

**Component Type:** Functional Component  
**Category:** Data Filtering / Modals  
**Token Integration:** Yes - uses modal, button, dropdown, and toggle tokens  
**System Variants:** Connect Filter, Dealer Portal Filter, Partner Filter

---

# Filter Modal Structure

## Overview

Filter modals are overlay dialogs that present various filtering options to users. They compose multiple UI components into a cohesive filtering experience.

**Variants:** 5 configurations  
- Connect (desktop/mobile)
- Dealer Portal (desktop, full/short versions)
- Partner Filter (desktop)

## Design Specifications

### Desktop Dimensions

| Element | Width | Height | Padding | Gap |
|---------|-------|--------|---------|-----|
| **Modal Container** | 643px (Connect/Dealer), 470px (Partner) | Variable | Standard modal | 16px |
| **Filter Section** | 595px (Connect), Full (Partner) | Auto | - | 24px |
| **Button Grid** | Full width | Auto | - | 24px wrap gap |

### Mobile Dimensions

| Element | Width | Height | Gap |
|---------|-------|--------|-----|
| **Modal Container** | 375px | Variable | 16px |
| **Filter Section** | Full width | Auto | 24px |

### Visual Properties
- **Modal Background:** Uses standard Modal component
- **Modal Elevation:** Level 3 shadow
- **Section Gap:** 24px between filter groups
- **Header Typography:** Roobert Regular, 31.1px / 42px (H4)
- **Section Label Typography:** Roobert SemiBold, 18px / 24px
- **Close Icon:** 24Ã—24px X icon

## Filter Components Composition

### 1. Header Section

**Components:**
- Modal title (H4 typography)
- Close button (icon button)

**Layout:** Horizontal with 24px gap, title left, close right

---

### 2. Filter Sections

Each filter section contains:
- **Section Label** (SemiBold, 18px)
- **Filter Control** (varies by type)
- **Gap:** 24px between label and control

### Filter Control Types

| Control Type | Use Case | Components Used |
|--------------|----------|----------------|
| **Toggle Button** | Date ranges, Journey types | Toggle Button (4 options typically) |
| **Multi-Select Buttons** | Job types, Sub types, Status | Secondary Buttons (grid layout) |
| **Dropdown** | Single selection (Engineer, Region, Partner) | Dropdown component |

---

### 3. Action Buttons

**Primary Button:**
- Text: "View results - {count}" or "View Jobs"
- Full width
- Primary button styling

**Tertiary Button:**
- Text: "Clear all"
- Full width
- Tertiary button styling (transparent)

**Gap:** 16px between buttons

---

## Connect Filter Configuration

### Filter Sections (Desktop: 643px Ã— ~1402px)

1. **Scheduled date** - Toggle Button (4 options)
   - Today, This week, Last week, Custom range

2. **Job type** - Multi-select Buttons (wrapped grid)
   - Assessment, Installation, Other

3. **Sub type** - Multi-select Buttons (wrapped grid)
   - Standard installation, Custom installation, Site survey
   - Virtual, Maintenance visit, Orientation visit
   - Warranty visit, Swap out

4. **Date entered status** - Toggle Button (4 options)
   - Today, Last 7 days, Last 14 days, Custom

5. **Status** - Multi-select Buttons (wrapped grid)
   - New, Unknown, To be scheduled, Scheduled on
   - Awaiting approval, Quote required, Completion pending
   - Completed, Cancelled, On hold
   - On hold requested, Cancellation requested
   - Job delayed, Change type requested

6. **Assigned to** - Dropdown (single select)
   - Placeholder: "Engineer"

### Mobile Layout (375px Ã— ~1284px)
Same sections, adapted to mobile width

---

## Dealer Portal Filter Configuration

### Filter Sections (643px Ã— ~1330px)

Similar to Connect filter but with Dealer-specific options:
- Date filters
- Status options
- Organization filters

### Short Version (643px Ã— ~970px)
Condensed variant with fewer filter options

---

## Partner Filter Configuration

### Filter Sections (470px Ã— ~610px)

Simpler filter for partner view switching:

1. **Region** - Dropdown (single select)
   - Filled example: "ðŸ‡¬ðŸ‡§ United Kingdom"

2. **Journey** - Toggle Button (3 options, equal width)
   - Unassigned, Managed, Unmanaged

3. **View as Partner** - Dropdown (single select)
   - Filled example: "PowerCorp Ltd"

**Purpose:** Allows admins to view portal as specific partner organization

---

## Color System

### Modal Header

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Title** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Close Icon** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** Roobert Regular, 31.1px / 42px, 0.2px letter-spacing

---

### Section Labels

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Label** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** Roobert SemiBold, 18px / 24px, 0.2px letter-spacing

---

### Filter Controls

**Toggle Buttons:** Use standard Toggle Button component tokens
**Secondary Buttons:** Use standard Button secondary tokens
**Dropdown:** Use standard Dropdown component tokens
**Primary Button:** Use standard Button primary tokens
**Tertiary Button:** Use standard Button tertiary tokens

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Filter Modal Container */
--filter-modal-width-connect: 643px;
--filter-modal-width-partner: 470px;
--filter-modal-padding: var(--modal-container-padding);
--filter-modal-gap: var(--primitive-values-space-space-medium);

/* Filter Sections */
--filter-section-gap: var(--primitive-values-space-space-large);
--filter-label-gap: 24px;
--filter-button-grid-gap: 24px;

/* Filter Header */
--filter-header-font-size: 31.1px;
--filter-header-line-height: 42px;
--filter-header-letter-spacing: 0.2px;
--filter-header-gap: 24px;

/* Filter Section Label */
--filter-label-font-family: var(--typography-font-family-Roobert);
--filter-label-font-size: var(--typography-font-size-18);
--filter-label-font-weight: var(--typography-font-weight-semibold);
--filter-label-line-height: var(--typography-line-height-24);
--filter-label-letter-spacing: var(--typography-letter-spacing-0dot2);
--filter-label-color: var(--color-content-primary);

/* Action Buttons */
--filter-action-gap: var(--primitive-values-space-space-medium);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `primitive/values/space/space-medium` | - | - | 16px | 16px |
| `primitive/values/space/space-large` | - | - | 24px | 24px |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/ohmedarkblue` | #032536 | Title, labels (light) |
| `color/brand/white` | #FFFFFF | Title, labels (dark) |
| `Values/space/space-4x` | 16px | Container gaps |
| `Values/space/space-6x` | 24px | Section gaps |

## Anatomy

```
Filter Modal
â”œâ”€â”€ Modal Container (standard Modal component)
â”‚   â”œâ”€â”€ Elevation: Level 3 shadow
â”‚   â”œâ”€â”€ Surface: modal/container/surface
â”‚   â””â”€â”€ Border: modal/container/border
â””â”€â”€ Content
    â”œâ”€â”€ Header Section (16px gap below)
    â”‚   â”œâ”€â”€ Title (H4)
    â”‚   â””â”€â”€ Close Button (X icon)
    â””â”€â”€ Filter Sections (24px gaps between)
        â”œâ”€â”€ Filter Section 1
        â”‚   â”œâ”€â”€ Section Label (SemiBold 18px)
        â”‚   â””â”€â”€ Toggle Button / Dropdown / Button Grid
        â”œâ”€â”€ Filter Section 2
        â”œâ”€â”€ Filter Section 3
        â”œâ”€â”€ ...
        â””â”€â”€ Action Buttons (16px gap between)
            â”œâ”€â”€ Primary: "View results - {count}" / "View Jobs"
            â””â”€â”€ Tertiary: "Clear all"
```

## Component Properties

```typescript
type FilterProps = {
  className?: string;
  mobile?: boolean;
  resource?: "Connect" | "Dealer portal" | "Dealer portal short" | "Partner filter";
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterState) => void;
  onClear: () => void;
  resultCount?: number;
  initialFilters?: FilterState;
};

type FilterState = {
  scheduledDate?: string;
  jobTypes?: string[];
  subTypes?: string[];
  dateEnteredStatus?: string;
  status?: string[];
  assignedTo?: string;
  // Partner Filter specific
  region?: string;
  journey?: string;
  viewAsPartner?: string;
};

type FilterSection = {
  label: string;
  type: 'toggle' | 'multiSelect' | 'dropdown';
  options: string[] | DropdownOption[];
  value?: any;
  onChange: (value: any) => void;
};
```

## Implementation Examples

### Basic Connect Filter

```tsx
import Filter from '@/components/functional/Filter';

const [filterOpen, setFilterOpen] = useState(false);
const [filters, setFilters] = useState<FilterState>({});
const [filteredData, setFilteredData] = useState(data);

const handleApplyFilters = (newFilters: FilterState) => {
  setFilters(newFilters);
  const filtered = applyFilters(data, newFilters);
  setFilteredData(filtered);
  setFilterOpen(false);
};

const handleClearFilters = () => {
  setFilters({});
  setFilteredData(data);
};

<>
  <Button onClick={() => setFilterOpen(true)}>
    Filter Jobs
  </Button>

  <Filter
    resource="Connect"
    mobile={false}
    isOpen={filterOpen}
    onClose={() => setFilterOpen(false)}
    onApply={handleApplyFilters}
    onClear={handleClearFilters}
    resultCount={filteredData.length}
    initialFilters={filters}
  />
</>
```

### Partner Filter Usage

```tsx
const PartnerFilterModal = ({ partners }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  const handleApply = (filters: FilterState) => {
    setSelectedPartner(filters.viewAsPartner);
    // Switch to partner view
    switchToPartnerView(filters.viewAsPartner);
    setFilterOpen(false);
  };

  return (
    <>
      <Button onClick={() => setFilterOpen(true)}>
        View as Partner
      </Button>

      <Filter
        resource="Partner filter"
        mobile={false}
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        onApply={handleApply}
        onClear={() => setSelectedPartner(null)}
        initialFilters={{ viewAsPartner: selectedPartner }}
      />
    </>
  );
};
```

### Responsive Filter

```tsx
const ResponsiveFilter = ({ data }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [filterState, setFilterState] = useState<FilterState>({});

  return (
    <Filter
      resource="Connect"
      mobile={isMobile}
      isOpen={isFilterOpen}
      onClose={() => setIsFilterOpen(false)}
      onApply={(filters) => {
        setFilterState(filters);
        applyFiltersToData(filters);
      }}
      onClear={clearAllFilters}
      resultCount={getFilteredCount(data, filterState)}
    />
  );
};
```

### Filter with URL Sync

```tsx
const FilterWithURL = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const parseFiltersFromURL = () => {
    return {
      scheduledDate: searchParams.get('date'),
      jobTypes: searchParams.get('types')?.split(','),
      status: searchParams.get('status')?.split(','),
      assignedTo: searchParams.get('engineer')
    };
  };

  const syncFiltersToURL = (filters: FilterState) => {
    const params = new URLSearchParams();
    if (filters.scheduledDate) params.set('date', filters.scheduledDate);
    if (filters.jobTypes?.length) params.set('types', filters.jobTypes.join(','));
    if (filters.status?.length) params.set('status', filters.status.join(','));
    if (filters.assignedTo) params.set('engineer', filters.assignedTo);
    setSearchParams(params);
  };

  const handleApply = (filters: FilterState) => {
    syncFiltersToURL(filters);
    applyFilters(filters);
  };

  return (
    <Filter
      resource="Connect"
      isOpen={filterOpen}
      onApply={handleApply}
      initialFilters={parseFiltersFromURL()}
      {...props}
    />
  );
};
```

## CSS Implementation

### Filter Modal Container

```css
.filter {
  /* Uses standard Modal component */
  /* Modal width varies by resource type */
}

.filter--connect {
  max-width: 643px;
}

.filter--partner {
  max-width: 470px;
}

.filter--mobile {
  max-width: 375px;
  width: 100%;
}

/* Content container */
.filter__content {
  display: flex;
  flex-direction: column;
  gap: var(--primitive-values-space-space-medium);
  width: 100%;
}
```

### Filter Sections

```css
.filter__section {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.filter__sectionLabel {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-18);
  font-weight: var(--typography-font-weight-semibold);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
  color: var(--color-content-primary);
}

/* Button grid for multi-select */
.filter__buttonGrid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
}

/* Ensures buttons wrap properly */
.filter__buttonGrid--connect {
  width: 595px;
}

.filter__buttonGrid--mobile {
  width: 100%;
}
```

### Action Buttons

```css
.filter__actions {
  display: flex;
  flex-direction: column;
  gap: var(--primitive-values-space-space-medium);
  width: 100%;
  margin-top: auto;
}

.filter__viewButton {
  /* Uses Primary Button component */
  width: 100%;
}

.filter__clearButton {
  /* Uses Tertiary Button component */
  width: 100%;
}
```

## Usage Guidelines

### When to Use Connect Filter

**Job Table Filtering:**
- Filter by scheduled dates
- Filter by job type (Assessment, Installation, Other)
- Filter by sub-type (installation variants)
- Filter by status (14+ status options)
- Filter by assigned engineer

**Use Cases:**
- Job management tables
- Installation dashboards
- Service visit lists

---

### When to Use Partner Filter

**Partner View Switching:**
- Select region (country/area)
- Choose journey type (Unassigned, Managed, Unmanaged)
- View portal as specific partner

**Use Cases:**
- Admin tools
- Partner management
- Multi-tenant views
- Support/debugging

---

### When to Use Dealer Portal Filter

**Dealer-Specific Filtering:**
- Similar to Connect but dealer-focused
- Dealer-specific job types
- Dealer-specific statuses

---

## Best Practices

### Content Guidelines âœ“
1. **Clear Labels:** Use descriptive section labels
2. **Logical Order:** Most common filters first
3. **Result Count:** Show count in apply button
4. **Reset Option:** Always provide "Clear all"
5. **Consistent Terms:** Match table column terminology

### Visual Guidelines âœ“
1. **Modal Patterns:** Follow standard modal behavior
2. **Grid Layout:** Wrap multi-select buttons at 24px gap
3. **Full Width:** Actions span full width
4. **Adequate Spacing:** 24px between sections
5. **Responsive:** Adapt to mobile widths

### Interaction Guidelines âœ“
1. **Multi-Select:** Buttons toggle on/off independently
2. **Single Select:** Toggle buttons select one option
3. **Live Count:** Update result count as filters change
4. **Apply Action:** Close modal and filter results
5. **Clear Action:** Reset all filters to default
6. **Close Options:** X button, outside click, ESC key

## Accessibility

### ARIA Attributes

```tsx
<Modal
  isOpen={isFilterOpen}
  onClose={onClose}
  role="dialog"
  aria-labelledby="filter-title"
  aria-describedby="filter-description"
>
  <h2 id="filter-title">Filter Jobs</h2>
  <p id="filter-description" className="sr-only">
    Filter job listings by date, type, status, and assignment
  </p>

  {/* Scheduled Date Section */}
  <fieldset>
    <legend className="filter-label">Scheduled date</legend>
    <ToggleButton
      options="4"
      optionLabels={['Today', 'This week', 'Last week', 'Custom range']}
      selectedIndex={dateFilter}
      onSelectionChange={setDateFilter}
      aria-label="Select date range"
    />
  </fieldset>

  {/* Job Type Multi-Select */}
  <fieldset>
    <legend className="filter-label">Job type</legend>
    <div 
      role="group" 
      aria-label="Select job types"
      className="filter-button-grid"
    >
      {jobTypes.map(type => (
        <Button
          key={type}
          type="secondary"
          onClick={() => toggleJobType(type)}
          aria-pressed={selectedTypes.includes(type)}
        >
          {type}
        </Button>
      ))}
    </div>
  </fieldset>

  {/* Actions */}
  <div className="filter-actions">
    <Button
      type="Primary"
      onClick={handleApply}
      aria-label={`View ${resultCount} filtered results`}
    >
      View results - {resultCount}
    </Button>
    <Button
      type="tertiary"
      onClick={handleClear}
    >
      Clear all
    </Button>
  </div>
</Modal>
```

### Keyboard Navigation

- **Tab:** Navigate through filter controls
- **Arrow Keys:** Navigate within toggle buttons
- **Space/Enter:** Toggle selections
- **ESC:** Close modal

## Advanced Patterns

### Filter State Management

```tsx
const useFilterState = (initialFilters: FilterState = {}) => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleMultiSelect = (key: keyof FilterState, option: string) => {
    setFilters(prev => {
      const current = (prev[key] as string[]) || [];
      const updated = current.includes(option)
        ? current.filter(item => item !== option)
        : [...current, option];
      return { ...prev, [key]: updated };
    });
  };

  const clearAll = () => {
    setFilters({});
  };

  return {
    filters,
    updateFilter,
    toggleMultiSelect,
    clearAll
  };
};

// Usage
const JobsFilter = () => {
  const { filters, updateFilter, toggleMultiSelect, clearAll } = useFilterState();
  
  return (
    <Filter
      filters={filters}
      onUpdateScheduledDate={(date) => updateFilter('scheduledDate', date)}
      onToggleJobType={(type) => toggleMultiSelect('jobTypes', type)}
      onToggleStatus={(status) => toggleMultiSelect('status', status)}
      onClear={clearAll}
    />
  );
};
```

### Active Filter Indicators

```tsx
const FilterWithIndicators = () => {
  const [filters, setFilters] = useState<FilterState>({});
  const activeFilterCount = getActiveFilterCount(filters);

  return (
    <>
      <Button onClick={() => setFilterOpen(true)}>
        Filter
        {activeFilterCount > 0 && (
          <span className="filter-badge">{activeFilterCount}</span>
        )}
      </Button>

      <Filter
        isOpen={filterOpen}
        onApply={setFilters}
        initialFilters={filters}
        resultCount={getFilteredCount(data, filters)}
      />

      {/* Show active filters */}
      {activeFilterCount > 0 && (
        <div className="active-filters">
          {filters.jobTypes?.map(type => (
            <Pill
              key={type}
              type="Action"
              label={type}
              onRemove={() => removeFilter('jobTypes', type)}
            />
          ))}
        </div>
      )}
    </>
  );
};
```

### Filter Presets

```tsx
const FilterWithPresets = () => {
  const presets = {
    today: { scheduledDate: 'today' },
    thisWeek: { scheduledDate: 'thisWeek' },
    myJobs: { assignedTo: currentUser.id },
    urgent: { status: ['New', 'To be scheduled'] }
  };

  const [filters, setFilters] = useState<FilterState>({});

  return (
    <>
      <div className="filter-presets">
        <Button onClick={() => setFilters(presets.today)}>
          Today's Jobs
        </Button>
        <Button onClick={() => setFilters(presets.myJobs)}>
          My Jobs
        </Button>
        <Button onClick={() => setFilters(presets.urgent)}>
          Urgent
        </Button>
      </div>

      <Filter
        isOpen={filterOpen}
        initialFilters={filters}
        onApply={setFilters}
      />
    </>
  );
};
```

### Server-Side Filtering

```tsx
const ServerSideFilter = () => {
  const [filters, setFilters] = useState<FilterState>({});
  const { data, isLoading, refetch } = useJobsQuery(filters);

  const handleApplyFilters = async (newFilters: FilterState) => {
    setFilters(newFilters);
    await refetch();
  };

  return (
    <Filter
      resource="Connect"
      isOpen={filterOpen}
      onApply={handleApplyFilters}
      resultCount={data?.totalCount}
      initialFilters={filters}
    />
  );
};
```

## Testing Checklist

### Visual Testing - Desktop
- [ ] Connect: Modal width 643px
- [ ] Partner: Modal width 470px
- [ ] Header: 31.1px title with close button
- [ ] Section labels: SemiBold 18px
- [ ] Section gap: 24px between sections
- [ ] Toggle buttons render correctly
- [ ] Button grid wraps at 24px gap
- [ ] Dropdown renders correctly
- [ ] Primary button: Full width, teal
- [ ] Tertiary button: Full width, transparent
- [ ] Result count shows in primary button

### Visual Testing - Mobile
- [ ] Modal width: 375px
- [ ] All sections stack properly
- [ ] Button grid adapts to mobile width
- [ ] Actions remain full width
- [ ] Touch targets adequate (44Ã—44px min)

### Functional Testing
- [ ] Modal opens on trigger
- [ ] Modal closes on X click
- [ ] Modal closes on outside click
- [ ] Modal closes on ESC key
- [ ] Toggle buttons select date range
- [ ] Multi-select buttons toggle independently
- [ ] Dropdown selects single option
- [ ] "View results" applies filters and closes
- [ ] "Clear all" resets all filters
- [ ] Result count updates dynamically
- [ ] Initial filters load correctly

### Accessibility Testing
- [ ] Modal has role="dialog"
- [ ] Title has proper heading level
- [ ] Sections use fieldset/legend
- [ ] Multi-select has role="group"
- [ ] Buttons have aria-pressed for toggle state
- [ ] Keyboard navigation works throughout
- [ ] Focus trapped within modal
- [ ] Focus returns to trigger on close
- [ ] Screen reader announces filter changes

### Mode Testing
- [ ] Title adapts to mode
- [ ] Section labels adapt to mode
- [ ] All controls adapt per component tokens
- [ ] Modal background adapts to mode
- [ ] Smooth transitions between modes

## Related Components

### Composed From:
- **Modal** - Container and overlay
- **Toggle Button** - Date range selection
- **Button (Secondary)** - Multi-select filter options
- **Dropdown** - Single-select filters
- **Button (Primary)** - Apply action
- **Button (Tertiary)** - Clear action

### Works With:
- **Table** - Filters table data
- **Pagination** - Resets to page 1 on filter
- **Search** - Can combine with search
- **Pill** - Display active filters

## Common Patterns

### Job Table Filter (Connect)

```tsx
const JobTableFilter = ({ jobs, onFilterChange }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    scheduledDate: null,
    jobTypes: [],
    subTypes: [],
    status: [],
    assignedTo: null
  });

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      if (filters.scheduledDate && !matchesDateFilter(job, filters.scheduledDate)) {
        return false;
      }
      if (filters.jobTypes?.length && !filters.jobTypes.includes(job.type)) {
        return false;
      }
      if (filters.status?.length && !filters.status.includes(job.status)) {
        return false;
      }
      if (filters.assignedTo && job.engineerId !== filters.assignedTo) {
        return false;
      }
      return true;
    });
  }, [jobs, filters]);

  return (
    <>
      <Button onClick={() => setFilterOpen(true)}>
        Filter ({getActiveFilterCount(filters)})
      </Button>

      <Filter
        resource="Connect"
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        onApply={(newFilters) => {
          setFilters(newFilters);
          onFilterChange(newFilters);
          setFilterOpen(false);
        }}
        onClear={() => {
          setFilters({});
          onFilterChange({});
        }}
        resultCount={filteredJobs.length}
        initialFilters={filters}
      />
    </>
  );
};
```

### Partner Impersonation

```tsx
const PartnerImpersonation = ({ partners, currentUser }) => {
  const [activePartner, setActivePartner] = useState<string | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const handleApplyPartnerView = (filters: FilterState) => {
    const partnerId = filters.viewAsPartner;
    setActivePartner(partnerId);
    
    // Switch user context to partner view
    switchUserContext({
      ...currentUser,
      viewAsPartner: partnerId,
      region: filters.region,
      journey: filters.journey
    });
    
    setFilterOpen(false);
  };

  return (
    <>
      <div className="partner-view-indicator">
        {activePartner ? (
          <>
            <span>Viewing as: {getPartnerName(activePartner)}</span>
            <Button onClick={() => setFilterOpen(true)}>
              Change Partner
            </Button>
          </>
        ) : (
          <Button onClick={() => setFilterOpen(true)}>
            View as Partner
          </Button>
        )}
      </div>

      <Filter
        resource="Partner filter"
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        onApply={handleApplyPartnerView}
        onClear={() => {
          setActivePartner(null);
          resetToOwnView();
        }}
        initialFilters={{
          viewAsPartner: activePartner
        }}
      />
    </>
  );
};
```

## Platform-Specific Configurations

### Connect Filter Sections

```typescript
const connectFilterSections: FilterSection[] = [
  {
    label: 'Scheduled date',
    type: 'toggle',
    options: ['Today', 'This week', 'Last week', 'Custom range']
  },
  {
    label: 'Job type',
    type: 'multiSelect',
    options: ['Assessment', 'Installation', 'Other']
  },
  {
    label: 'Sub type',
    type: 'multiSelect',
    options: [
      'Standard installation',
      'Custom installation',
      'Site survey',
      'Virtual',
      'Maintenance visit',
      'Orientation visit',
      'Warranty visit',
      'Swap out'
    ]
  },
  {
    label: 'Date entered status',
    type: 'toggle',
    options: ['Today', 'Last 7 days', 'Last 14 days', 'Custom']
  },
  {
    label: 'Status',
    type: 'multiSelect',
    options: [
      'New', 'Unknown', 'To be scheduled', 'Scheduled on',
      'Awaiting approval', 'Quote required', 'Completion pending',
      'Completed', 'Cancelled', 'On hold', 'On hold requested',
      'Cancellation requested', 'Job delayed', 'Change type requested'
    ]
  },
  {
    label: 'Assigned to',
    type: 'dropdown',
    options: [] // Populated with engineer list
  }
];
```

### Partner Filter Sections

```typescript
const partnerFilterSections: FilterSection[] = [
  {
    label: 'Region',
    type: 'dropdown',
    options: [] // Populated with regions (e.g., "ðŸ‡¬ðŸ‡§ United Kingdom")
  },
  {
    label: 'Journey',
    type: 'toggle',
    options: ['Unassigned', 'Managed', 'Unmanaged']
  },
  {
    label: 'View as Partner',
    type: 'dropdown',
    options: [] // Populated with partner organizations
  }
];
```

## Version History

- **v1.0** - Initial filter system with Connect, Dealer Portal, and Partner Filter variants

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
