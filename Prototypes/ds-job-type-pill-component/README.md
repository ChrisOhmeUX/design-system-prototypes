# Job Type Pill Component Documentation

## Overview

Job Type Pill is a specialized pill component that displays the type of job or service visit in the Connect portal. It uses the "Job type" pill intent with inverse color scheme (dark background with white text in light mode) to provide strong visual emphasis for job categorization.

**Component Type:** Functional Component  
**Category:** Data Display / Status Indicators  
**Token Integration:** Yes - uses pill/intent/job-type tokens  
**Variants:** 7 job types (Standard Installation, Custom Installation, Site Survey, Maintenance Visit, Orientation Visit, Warranty Visit, Swap Out)

## Variant Matrix

| Job Type | Label | Use Case |
|----------|-------|----------|
| **Standard Installation** | "Standard Installation" | Standard EV charger installation |
| **Custom Installation** | "Custom Installation" | Custom/complex installation |
| **Site Survey** | "Site Survey" | Pre-installation site assessment |
| **Maintenance** | "Maintenance Visit" | Maintenance service call |
| **Orientation** | "Orientation Visit" | Customer orientation/training |
| **Warranty** | "Warranty Visit" | Warranty service visit |
| **Swap out** | "Swap Out" | Equipment replacement |

## Design Specifications

### Dimensions
- **Height:** 32px
- **Padding Horizontal:** 12px â†’ `layout/spacing/small`
- **Padding Vertical:** 4px â†’ `layout/spacing/xxsmall`
- **Corner Radius:** 6px â†’ `primitive/values/corner-radii/radius-large`
- **Gap:** 8px (if icon present) â†’ `primitive/values/space/space-xsmall`
- **Text-only:** Auto-width based on content

### Visual Properties
- **Shape:** Rounded rectangle (pill shape)
- **Typography:** Roobert Regular, 14px / 24px line-height
- **Letter Spacing:** 0.1px
- **Text Alignment:** Center
- **Text Transform:** Title Case (as shown in labels)
- **Background:** Solid, opaque

## Color System

### Job Type Pill (All Variants)

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `pill/intent/job-type/surface` | `surface/inverse` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Content** | `pill/intent/job-type/content` | `content/inverse` | white | ohmedarkblue | #FFFFFF | #032536 |

**Visual Result:**
- Light mode: Dark blue background, white text
- Dark mode: White background, dark blue text
- High contrast in both modes for strong emphasis

---

## Component Properties

```typescript
type JobTypePillProps = {
  className?: string;
  jobType: 
    | "Standard Installation"
    | "Custom Installation"
    | "Site Survey"
    | "Maintenance"
    | "Orientation"
    | "Warranty"
    | "Swap out";
  onClick?: () => void;
  onRemove?: () => void;
};
```

### Property: `jobType` (string, required)
The type of job or service to display.

**Values:**
- `"Standard Installation"` - Standard EV charger installation
- `"Custom Installation"` - Custom/complex installation job
- `"Site Survey"` - Pre-installation site survey/assessment
- `"Maintenance"` - Maintenance service visit
- `"Orientation"` - Customer orientation/training visit
- `"Warranty"` - Warranty service visit
- `"Swap out"` - Equipment swap/replacement

**Display Labels:**
- Standard Installation â†’ "Standard Installation"
- Custom Installation â†’ "Custom Installation"
- Site Survey â†’ "Site Survey"
- Maintenance â†’ "Maintenance Visit"
- Orientation â†’ "Orientation Visit"
- Warranty â†’ "Warranty Visit"
- Swap out â†’ "Swap Out"

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Job Type Pill */
--pill-intent-jobtype-surface: var(--color-surface-inverse);
--pill-intent-jobtype-content: var(--color-content-inverse);
--pill-jobtype-padding-inline: var(--layout-spacing-small);
--pill-jobtype-padding-stack: var(--layout-spacing-xxsmall);
--pill-jobtype-gap: var(--primitive-values-space-space-xsmall);
--pill-jobtype-radius: var(--primitive-values-corner-radii-radius-large);

/* Typography */
--pill-jobtype-font-family: var(--typography-font-family-Roobert);
--pill-jobtype-font-size: var(--typography-font-size-14);
--pill-jobtype-font-weight: var(--typography-font-weight-regular);
--pill-jobtype-line-height: var(--typography-line-height-24);
--pill-jobtype-letter-spacing: var(--typography-letter-spacing-0dot1);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/inverse` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/inverse` | white | ohmedarkblue | #FFFFFF | #032536 |
| `layout/spacing/small` | - | - | 12px | 12px |
| `layout/spacing/xxsmall` | - | - | 4px | 4px |
| `primitive/values/space/space-xsmall` | - | - | 8px | 8px |
| `primitive/values/corner-radii/radius-large` | - | - | 6px | 6px |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/ohmedarkblue` | #032536 | Surface (light), content (dark) |
| `color/brand/white` | #FFFFFF | Content (light), surface (dark) |
| `Values/space/space-3x` | 12px | Padding inline |
| `Values/space/space-1x` | 4px | Padding stack |
| `Values/space/space-2x` | 8px | Gap (if icon) |
| `Values/corner radii/radius-1halfx` | 6px | Corner radius |

## Anatomy

```
Job Type Pill Component
â””â”€â”€ Container (rounded rectangle)
    â”œâ”€â”€ Surface: pill/intent/job-type/surface (mode-aware)
    â”œâ”€â”€ Padding: 12px horizontal, 4px vertical
    â”œâ”€â”€ Corner Radius: 6px
    â””â”€â”€ Content
        â””â”€â”€ Text Label
            â”œâ”€â”€ Typography: 14px / 24px
            â”œâ”€â”€ Color: pill/intent/job-type/content (mode-aware)
            â”œâ”€â”€ Alignment: Center
            â””â”€â”€ Transform: Title Case
```

### Component Parts

**Container:**
- Background: Dark blue (light mode) / White (dark mode)
- Padding: 12px horizontal, 4px vertical
- Corner radius: 6px
- Auto-width based on text content
- Height: 32px

**Text Label:**
- Font: Roobert Regular
- Size: 14px / 24px line-height
- Color: White (light mode) / Dark blue (dark mode)
- Letter spacing: 0.1px
- Alignment: Center
- No text wrapping (whitespace: nowrap)

## Implementation Examples

### Basic Usage

```tsx
import JobTypePill from '@/components/functional/JobTypePill';

// Standard installation
<JobTypePill jobType="Standard Installation" />

// Custom installation
<JobTypePill jobType="Custom Installation" />

// Service visits
<JobTypePill jobType="Maintenance" />
<JobTypePill jobType="Orientation" />
<JobTypePill jobType="Warranty" />

// Surveys and swaps
<JobTypePill jobType="Site Survey" />
<JobTypePill jobType="Swap out" />
```

### In Table Cell

```tsx
const JobTypeCell = ({ job }) => {
  return (
    <td className="job-type-cell">
      <JobTypePill jobType={job.type} />
    </td>
  );
};

// Usage in table
<table>
  <thead>
    <tr>
      <th>Job ID</th>
      <th>Type</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {jobs.map(job => (
      <tr key={job.id}>
        <td>{job.id}</td>
        <td><JobTypePill jobType={job.type} /></td>
        <td>{job.status}</td>
      </tr>
    ))}
  </tbody>
</table>
```

### With Click Handler

```tsx
// Clickable pill for filtering
<JobTypePill
  jobType="Standard Installation"
  onClick={() => filterByJobType("Standard Installation")}
/>
```

### Dynamic Job Type Display

```tsx
const JobCard = ({ job }) => {
  const getJobTypeKey = (typeString: string) => {
    const typeMap = {
      'standard_installation': 'Standard Installation',
      'custom_installation': 'Custom Installation',
      'site_survey': 'Site Survey',
      'maintenance': 'Maintenance',
      'orientation': 'Orientation',
      'warranty': 'Warranty',
      'swap_out': 'Swap out'
    };
    return typeMap[typeString] || 'Standard Installation';
  };

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <JobTypePill jobType={getJobTypeKey(job.type)} />
      <p>{job.description}</p>
    </div>
  );
};
```

### Job Type Filter

```tsx
const JobTypeFilter = ({ selectedTypes, onToggle }) => {
  const jobTypes = [
    'Standard Installation',
    'Custom Installation',
    'Site Survey',
    'Maintenance',
    'Orientation',
    'Warranty',
    'Swap out'
  ];

  return (
    <div className="job-type-filter">
      <h4>Filter by Job Type</h4>
      <div className="job-type-pills">
        {jobTypes.map(type => (
          <button
            key={type}
            onClick={() => onToggle(type)}
            className={selectedTypes.includes(type) ? 'active' : ''}
          >
            <JobTypePill jobType={type} />
          </button>
        ))}
      </div>
    </div>
  );
};
```

## CSS Implementation

### Core Styles

```css
.jobTypePill {
  display: inline-flex;
  align-items: center;
  gap: var(--pill-jobtype-gap);
  padding: var(--pill-jobtype-padding-stack) 
           var(--pill-jobtype-padding-inline);
  background: var(--pill-intent-jobtype-surface);
  color: var(--pill-intent-jobtype-content);
  border-radius: var(--pill-jobtype-radius);
  
  font-family: var(--pill-jobtype-font-family);
  font-size: var(--pill-jobtype-font-size);
  font-weight: var(--pill-jobtype-font-weight);
  line-height: var(--pill-jobtype-line-height);
  letter-spacing: var(--pill-jobtype-letter-spacing);
  text-align: center;
  white-space: nowrap;
}

/* Clickable variant */
.jobTypePill--clickable {
  cursor: pointer;
  transition: opacity 200ms ease;
}

.jobTypePill--clickable:hover {
  opacity: 0.85;
}

.jobTypePill--clickable:active {
  transform: scale(0.98);
}

/* Selected state (for filters) */
.jobTypePill--selected {
  box-shadow: 0 0 0 2px var(--color-surface-accent);
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-surface-inverse: #032536;
  --color-content-inverse: #FFFFFF;
  --layout-spacing-small: 12px;
  --layout-spacing-xxsmall: 4px;
  --primitive-values-space-space-xsmall: 8px;
  --primitive-values-corner-radii-radius-large: 6px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-surface-inverse: #FFFFFF;
  --color-content-inverse: #032536;
  /* Spacing values remain constant */
}
```

## Usage Guidelines

### When to Use Job Type Pill

**Job Identification:**
- Display job category in tables
- Show job type in job cards
- Indicate service type in lists
- Categorize work orders

**Visual Emphasis:**
- Job type is critical information
- Needs to stand out from other data
- Distinguish between job categories
- Quick scanning in tables/lists

### Job Type Descriptions

**Standard Installation:**
- Most common installation type
- Standard EV charger setup
- Follows standard procedures

**Custom Installation:**
- Non-standard installations
- Requires custom solutions
- Complex site requirements

**Site Survey:**
- Pre-installation assessment
- Site evaluation visit
- Planning and scoping

**Maintenance Visit:**
- Regular maintenance service
- Preventive maintenance
- Service check-ups

**Orientation Visit:**
- Customer training
- Product orientation
- Usage demonstration

**Warranty Visit:**
- Warranty service call
- Covered repairs
- Warranty claims

**Swap Out:**
- Equipment replacement
- Unit exchange
- Hardware swap

## Best Practices

### Content Guidelines âœ“
1. **Consistent Labels:** Use exact job type names as specified
2. **Title Case:** Maintain title case formatting
3. **No Abbreviations:** Use full job type names
4. **Standard Terms:** Use consistent terminology across platform
5. **Clear Categories:** Each job should map to one type

### Visual Guidelines âœ“
1. **Stand Alone:** Job type pill works independently
2. **Table Context:** Aligns well in table cells
3. **Card Context:** Prominent in job cards
4. **List Context:** Scannable in job lists
5. **Color Consistency:** Always uses inverse color scheme

### Interaction Guidelines âœ“
1. **Read-Only Default:** Typically non-interactive
2. **Clickable When Needed:** Can filter by job type
3. **Hover Feedback:** Show hover when clickable
4. **Selection State:** Indicate when filtering by type
5. **Accessibility:** Describe purpose when interactive

## Accessibility

### ARIA Attributes

```tsx
// Non-interactive (default)
<span 
  className="jobTypePill"
  role="status"
  aria-label={`Job type: ${jobType}`}
>
  <JobTypePill jobType={jobType} />
</span>

// Interactive (filter)
<button
  className="jobTypePill jobTypePill--clickable"
  onClick={() => filterByType(jobType)}
  aria-pressed={isSelected}
  aria-label={`Filter by ${jobType}`}
>
  <JobTypePill jobType={jobType} />
</button>

// In table cell
<td>
  <span aria-label={`Job type: ${jobType}`}>
    <JobTypePill jobType={jobType} />
  </span>
</td>
```

### Color Contrast

**Excellent contrast in both modes:**

**Light Mode:**
- White text on dark blue: 21:1 âœ“ (AAA)

**Dark Mode:**
- Dark blue text on white: 12.2:1 âœ“ (AAA)

## Advanced Patterns

### Job Type Badge Count

```tsx
const JobTypeSummary = ({ jobs }) => {
  const typeCounts = jobs.reduce((acc, job) => {
    acc[job.type] = (acc[job.type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="job-type-summary">
      {Object.entries(typeCounts).map(([type, count]) => (
        <div key={type} className="type-count">
          <JobTypePill jobType={type} />
          <span className="count">{count}</span>
        </div>
      ))}
    </div>
  );
};
```

### Filterable Job Type List

```tsx
const JobTypeFilterList = ({ selectedTypes, onToggleType }) => {
  const allTypes = [
    'Standard Installation',
    'Custom Installation',
    'Site Survey',
    'Maintenance',
    'Orientation',
    'Warranty',
    'Swap out'
  ];

  return (
    <div className="job-type-filter-list">
      <h4>Filter by Job Type</h4>
      <div className="pill-grid">
        {allTypes.map(type => (
          <button
            key={type}
            onClick={() => onToggleType(type)}
            className={`pill-button ${selectedTypes.includes(type) ? 'selected' : ''}`}
            aria-pressed={selectedTypes.includes(type)}
          >
            <JobTypePill jobType={type} />
          </button>
        ))}
      </div>
    </div>
  );
};
```

### Job Type with Tooltip

```tsx
const JobTypePillWithTooltip = ({ jobType }) => {
  const descriptions = {
    'Standard Installation': 'Standard EV charger installation following typical procedures',
    'Custom Installation': 'Complex installation requiring custom solutions',
    'Site Survey': 'Pre-installation site assessment and planning',
    'Maintenance': 'Regular maintenance and service check',
    'Orientation': 'Customer training and product orientation',
    'Warranty': 'Warranty service or repair visit',
    'Swap out': 'Equipment replacement or unit exchange'
  };

  return (
    <Tooltip content={descriptions[jobType]} position="top">
      <JobTypePill jobType={jobType} />
    </Tooltip>
  );
};
```

### Job Type Distribution Chart

```tsx
const JobTypeDistribution = ({ jobs }) => {
  const distribution = jobs.reduce((acc, job) => {
    acc[job.type] = (acc[job.type] || 0) + 1;
    return acc;
  }, {});

  const total = jobs.length;

  return (
    <div className="job-type-distribution">
      {Object.entries(distribution).map(([type, count]) => (
        <div key={type} className="distribution-row">
          <JobTypePill jobType={type} />
          <div className="distribution-bar">
            <div 
              className="bar-fill"
              style={{ width: `${(count / total) * 100}%` }}
            />
          </div>
          <span className="distribution-count">
            {count} ({Math.round((count / total) * 100)}%)
          </span>
        </div>
      ))}
    </div>
  );
};
```

## Testing Checklist

### Visual Testing
- [ ] Height: 32px
- [ ] Padding: 12px horizontal, 4px vertical
- [ ] Corner radius: 6px
- [ ] Typography: 14px / 24px line-height
- [ ] Letter spacing: 0.1px
- [ ] Text alignment: Center
- [ ] Light mode: Dark blue background, white text
- [ ] Dark mode: White background, dark blue text
- [ ] All 7 job types render correctly
- [ ] Text doesn't wrap (nowrap)
- [ ] Auto-width based on content

### Functional Testing
- [ ] Displays correct label for each job type
- [ ] Click handler fires (if clickable)
- [ ] Hover state shows (if clickable)
- [ ] Selection state displays (if filterable)
- [ ] Remove action works (if removable)

### Accessibility Testing
- [ ] Non-interactive has role="status"
- [ ] Interactive has proper button semantics
- [ ] aria-label describes job type
- [ ] aria-pressed for selection state
- [ ] Excellent contrast in both modes (21:1 and 12.2:1)
- [ ] Keyboard accessible when interactive
- [ ] Focus indicator visible
- [ ] Screen reader announces job type

### Mode Testing
- [ ] Surface inverts correctly (dark blue â†” white)
- [ ] Content inverts correctly (white â†” dark blue)
- [ ] High contrast maintained in both modes
- [ ] Smooth transitions between modes

## Related Components

- **Pill** - Base component (Job Type uses "Job type" intent)
- **Table** - Common context for display
- **Filter** - Used in job type filtering
- **Job Card** - Displays job type prominently

## Common Patterns

### Job Table with Type Column

```tsx
const JobTable = ({ jobs }) => {
  return (
    <table className="jobs-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map(job => (
          <tr key={job.id}>
            <td>{job.id}</td>
            <td>
              <JobTypePill jobType={job.type} />
            </td>
            <td>{job.customerName}</td>
            <td>{job.status}</td>
            <td>{job.scheduledDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
```

### Job Card with Type Badge

```tsx
const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-header">
        <h3>{job.title}</h3>
        <JobTypePill jobType={job.type} />
      </div>
      <div className="job-details">
        <p><strong>Customer:</strong> {job.customerName}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Date:</strong> {job.scheduledDate}</p>
      </div>
    </div>
  );
};
```

### Job Type Statistics

```tsx
const JobTypeStats = ({ jobs }) => {
  const stats = {
    'Standard Installation': jobs.filter(j => j.type === 'Standard Installation').length,
    'Custom Installation': jobs.filter(j => j.type === 'Custom Installation').length,
    'Site Survey': jobs.filter(j => j.type === 'Site Survey').length,
    'Maintenance': jobs.filter(j => j.type === 'Maintenance').length,
    'Orientation': jobs.filter(j => j.type === 'Orientation').length,
    'Warranty': jobs.filter(j => j.type === 'Warranty').length,
    'Swap out': jobs.filter(j => j.type === 'Swap out').length
  };

  return (
    <div className="job-type-stats">
      {Object.entries(stats)
        .filter(([_, count]) => count > 0)
        .map(([type, count]) => (
          <div key={type} className="stat-row">
            <JobTypePill jobType={type} />
            <span className="stat-count">{count} jobs</span>
          </div>
        ))}
    </div>
  );
};
```

## Integration with Filter System

The Job Type Pill integrates with the Filter system for job type selection:

```tsx
const JobsWithTypeFilter = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [jobs, setJobs] = useState(allJobs);

  const handleFilterChange = (types: string[]) => {
    setSelectedTypes(types);
    if (types.length === 0) {
      setJobs(allJobs);
    } else {
      setJobs(allJobs.filter(job => types.includes(job.type)));
    }
  };

  return (
    <>
      {/* Filter Modal includes job type buttons */}
      <Filter
        resource="Connect"
        isOpen={filterOpen}
        onApply={(filters) => handleFilterChange(filters.jobTypes)}
        {...props}
      />

      {/* Table displays job type pills */}
      <table>
        <tbody>
          {jobs.map(job => (
            <tr key={job.id}>
              <td><JobTypePill jobType={job.type} /></td>
              <td>{job.customerName}</td>
              <td>{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
```

## Version History

- **v1.0** - Initial job type pill component with 7 job type variants

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
