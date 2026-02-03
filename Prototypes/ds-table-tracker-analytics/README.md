# Table Tracker and Analytics Filter Documentation

## Overview

The Tracker and Analytics Filter components provide metric visualization and filtering capabilities for tables. Tracker shows change indicators with directional arrows and color coding. Analytics Filter displays clickable metric cards that filter table data based on status or category.

**Component Type:** Functional Component  
**Category:** Table / Analytics / Metrics  
**Token Integration:** Yes - uses state success/error tokens  
**Components:** 2 (Tracker, Analytics Filter)

---

# Part 1: Tracker (Change Indicator)

## Overview

Tracker displays numerical changes with directional arrows and semantic color coding to indicate positive or negative trends. Used in analytics cards to show metric changes over time.

**Variants:** 4 (2 directions Ã— 2 sentiments)  
**Size:** 22px icon + percentage text

## Variant Matrix

| Arrow Direction | Positive | Icon Color | Text Color | Use Case |
|----------------|----------|------------|------------|----------|
| **â†‘ Up** | âœ— No | Red #FFE1E1 | Red #580202 | Bad increase (costs up, errors up) |
| **â†‘ Up** | âœ“ Yes | Green #DDFBE5 | Green #072C14 | Good increase (revenue up, completion up) |
| **â†“ Down** | âœ— No | Red #FFE1E1 | Red #580202 | Bad decrease (revenue down, activity down) |
| **â†“ Down** | âœ“ Yes | Green #DDFBE5 | Green #072C14 | Good decrease (costs down, errors down) |

## Design Specifications

### Dimensions
- **Icon:** 22Ã—22px circular background
- **Arrow:** Chevron inside circle
- **Gap:** 6px between icon and text
- **Text:** Auto-width based on percentage

### Visual Properties
- **Icon Background:** Filled circle with success/error surface color
- **Arrow:** Directional chevron (up or down)
- **Typography:** Roobert Regular, 16px / 24px
- **Text Color:** Matches semantic intent (green or red)

## Color System

### Positive Change (Green)

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Icon Surface** | `color/state/success/surface` | green100 | green900 | #DDFBE5 | #072C14 |
| **Text** | `color/state/success/icon` | green900 | green100 | #072C14 | #DDFBE5 |

**Visual Result:**
- Light mode: Light green circle, dark green text
- Dark mode: Dark green circle, light green text

---

### Negative Change (Red)

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Icon Surface** | `color/state/error/surface` | red100 | red900 | #FFE1E1 | #580202 |
| **Text** | `color/state/error/content` | red900 | red100 | #580202 | #FFE1E1 |

**Visual Result:**
- Light mode: Light red circle, dark red text
- Dark mode: Dark red circle, light red text

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Tracker */
--tracker-icon-size: 22px;
--tracker-gap: 6px;
--tracker-font-family: var(--typography-font-family-Roobert);
--tracker-font-size: var(--typography-font-size-16);
--tracker-font-weight: var(--typography-font-weight-regular);
--tracker-line-height: var(--typography-line-height-24);

/* Tracker Positive */
--tracker-positive-icon-surface: var(--color-state-success-surface);
--tracker-positive-text: var(--color-state-success-icon);

/* Tracker Negative */
--tracker-negative-icon-surface: var(--color-state-error-surface);
--tracker-negative-text: var(--color-state-error-content);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/state/success/surface` | green100 | green900 | #DDFBE5 | #072C14 |
| `color/state/success/icon` | green900 | green100 | #072C14 | #DDFBE5 |
| `color/state/error/surface` | red100 | red900 | #FFE1E1 | #580202 |
| `color/state/error/content` | red900 | red100 | #580202 | #FFE1E1 |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/secondary/green100` | #DDFBE5 | Positive icon (light), text (dark) |
| `color/secondary/green900` | #072C14 | Positive icon (dark), text (light) |
| `color/secondary/red100` | #FFE1E1 | Negative icon (light), text (dark) |
| `color/secondary/red900` | #580202 | Negative icon (dark), text (light) |
| `Values/space/space-1halfx` | 6px | Icon-to-text gap |

---

## Component Properties

```typescript
type TrackerProps = {
  className?: string;
  arrowDirection?: "â†‘" | "â†“";
  positive?: boolean;
  value: number;
  format?: (num: number) => string;
};
```

### Property: `arrowDirection` (string, optional)
Direction of the arrow indicator.

**Values:**
- `"â†‘"` - Upward arrow (increase)
- `"â†“"` - Downward arrow (decrease)

**Default:** `"â†‘"`

---

### Property: `positive` (boolean, optional)
Whether the change is positive (good) or negative (bad).

**Values:**
- `true` - Green color (good change)
- `false` - Red color (bad change)

**Default:** `false`

**Context Matters:**
- Revenue â†‘ = positive
- Costs â†‘ = negative
- Errors â†“ = positive
- Completion â†“ = negative

---

### Property: `value` (number, required)
The percentage or numeric change value.

**Format:** Typically displayed as percentage  
**Example:** 10 (displayed as "10%")

---

## Implementation Examples

### Basic Tracker Usage

```tsx
import Tracker from '@/components/table/Tracker';

// Positive increase (green up arrow)
<Tracker
  arrowDirection="â†‘"
  positive={true}
  value={10}
/>

// Negative increase (red up arrow)
<Tracker
  arrowDirection="â†‘"
  positive={false}
  value={10}
/>

// Positive decrease (green down arrow)
<Tracker
  arrowDirection="â†“"
  positive={true}
  value={10}
/>

// Negative decrease (red down arrow)
<Tracker
  arrowDirection="â†“"
  positive={false}
  value={10}
/>
```

### Tracker with Custom Formatting

```tsx
const FormattedTracker = ({ change, isPositive }) => {
  const formatPercentage = (num: number) => {
    return `${num.toFixed(1)}%`;
  };

  return (
    <Tracker
      arrowDirection={change > 0 ? "â†‘" : "â†“"}
      positive={isPositive}
      value={Math.abs(change)}
      format={formatPercentage}
    />
  );
};

// Usage
<FormattedTracker change={12.5} isPositive={true} />
// Displays: Green up arrow "12.5%"
```

### Context-Aware Tracker

```tsx
const ContextAwareTracker = ({ metricType, change }) => {
  const isPositiveChange = (type: string, changeValue: number) => {
    const positiveIncrease = ['revenue', 'sessions', 'completion'];
    const positiveDecrease = ['costs', 'errors', 'delays'];
    
    if (changeValue > 0) {
      return positiveIncrease.includes(type);
    } else {
      return positiveDecrease.includes(type);
    }
  };

  return (
    <Tracker
      arrowDirection={change > 0 ? "â†‘" : "â†“"}
      positive={isPositiveChange(metricType, change)}
      value={Math.abs(change)}
    />
  );
};
```

---

# Part 2: Analytics Filter (Metric Cards)

## Overview

Analytics Filter displays key metrics as clickable cards with values and optional change tracking. Used for both data visualization and table filtering by clicking metric cards to filter by that status/category.

**Platforms:** Connect, Shared Parking, Dealer Portal  
**Layout:** Horizontal scrollable grid of metric cards

## Design Specifications

### Card Dimensions

| Element | Width | Height | Padding | Gap |
|---------|-------|--------|---------|-----|
| **Card** | 242-254px | 89px | 20px H, 10px V | 10px label-to-value |
| **Card Grid** | Auto (wraps) | 89px | - | 16px between cards |

### Visual Properties
- **Background:** White (light) / dark blue (dark)
- **Shadow:** 0px 1px 5.3px rgba(72,70,70,0.07)
- **Corner Radius:** 6px
- **Clickable:** Entire card is interactive
- **Hover:** Subtle elevation increase

## Card Anatomy

```
Analytics Card
â””â”€â”€ Container (242-254px Ã— 89px)
    â”œâ”€â”€ Surface: surface/canvas
    â”œâ”€â”€ Shadow: Elevation 100
    â”œâ”€â”€ Padding: 20px H, 10px V
    â”œâ”€â”€ Radius: 6px
    â””â”€â”€ Content (10px gap)
        â”œâ”€â”€ Label
        â”‚   â”œâ”€â”€ Typography: 18px / 23px
        â”‚   â”œâ”€â”€ Color: Green (success/content)
        â”‚   â””â”€â”€ Text: Metric name
        â””â”€â”€ Value Row (10px gap)
            â”œâ”€â”€ Value
            â”‚   â”œâ”€â”€ Typography: 28.83px / 36px, Medium
            â”‚   â”œâ”€â”€ Color: content/primary
            â”‚   â”œâ”€â”€ Unit: 22.78px / 29px (if present)
            â”‚   â””â”€â”€ Format: Varies by metric type
            â””â”€â”€ Tracker (optional)
                â””â”€â”€ Shows change percentage
```

## Color System

### Analytics Card

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Shadow** | Elevation 100 | rgba(72,70,70,0.07) | rgba(72,70,70,0.07) | - | - |

---

### Metric Label

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Text** | `color/state/success/content` | green900 | green100 | #072C14 | #DDFBE5 |

**Typography:** Roobert Regular, 18px / 23px, 0.2px letter-spacing

---

### Metric Value

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Number** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** Roobert Medium, 28.83px / 36px, 0.5px letter-spacing

**Unit (when present):**
- Typography: Roobert Regular, 22.78px / 29px, 0.2px letter-spacing
- Color: Same as number

---

## Platform-Specific Metrics

### Shared Parking Metrics

| Metric | Value Example | Tracker | Clickable Action |
|--------|---------------|---------|------------------|
| **Active Chargers** | 8 | â†“10% (negative) | Filter to active chargers |
| **Available chargers** | 22 | â†“10% (positive) | Filter to available chargers |
| **Average session** | 12h 10m | â†“10% (positive) | Show session details |
| **Energy supplied** | 115.812kw | â†“10% (positive) | Energy analytics |
| **Sessions** | 243 | â†‘10% (positive) | Filter to sessions |
| **Average session price** | Â£3.25 | â†“10% (positive) | Pricing analytics |

---

### Connect Metrics

| Metric | Value Example | Tracker | Clickable Action |
|--------|---------------|---------|------------------|
| **Completion pending** | 8 | â†“10% (varies) | Filter to completion pending jobs |
| **To be scheduled** | 22 | â†“10% (varies) | Filter to unscheduled jobs |
| **Quote required** | 45 | â†“10% (varies) | Filter to jobs needing quotes |
| **On hold** | 21 | â†“10% (varies) | Filter to on-hold jobs |
| **Scheduled** | 35 | â†‘10% (positive) | Filter to scheduled jobs |
| **Awaiting approval** | 19 | â†“10% (varies) | Filter to approval queue |

---

### Dealer Portal Metrics

| Metric | Value Example | Tracker | Clickable Action |
|--------|---------------|---------|------------------|
| **Total orders** | 8 | None | Filter to all orders |
| **Total new leads** | 22 | None | Filter to new leads |
| **Payments complete** | 45 | None | Filter to completed payments |
| **Scheduled** | 35 | None | Filter to scheduled items |
| **Completed** | 19 | None | Filter to completed items |

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Analytics Card */
--analytics-card-width: 242px;
--analytics-card-height: 89px;
--analytics-card-padding-inline: 20px;
--analytics-card-padding-stack: 10px;
--analytics-card-gap: 10px;
--analytics-card-radius: 6px;
--analytics-card-surface: var(--color-surface-canvas);
--analytics-card-shadow: 0px 1px 5.3px rgba(72, 70, 70, 0.07);

/* Analytics Label */
--analytics-label-font-family: var(--typography-font-family-Roobert);
--analytics-label-font-size: var(--typography-font-size-18);
--analytics-label-font-weight: var(--typography-font-weight-regular);
--analytics-label-line-height: 23px;
--analytics-label-letter-spacing: var(--typography-letter-spacing-0dot2);
--analytics-label-color: var(--color-state-success-content);

/* Analytics Value */
--analytics-value-font-family: var(--typography-font-family-Roobert);
--analytics-value-font-size: 28.83px;
--analytics-value-font-weight: var(--typography-font-weight-medium);
--analytics-value-line-height: 36px;
--analytics-value-letter-spacing: 0.5px;
--analytics-value-color: var(--color-content-primary);

/* Analytics Unit */
--analytics-unit-font-size: 22.78px;
--analytics-unit-line-height: 29px;
--analytics-unit-letter-spacing: var(--typography-letter-spacing-0dot2);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/state/success/content` | green900 | green100 | #072C14 | #DDFBE5 |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

---

## Component Properties

### Tracker

```typescript
type TrackerProps = {
  className?: string;
  arrowDirection?: "â†‘" | "â†“";
  positive?: boolean;
  value: number;
  suffix?: string; // Default: "%"
};
```

### Analytics Filter

```typescript
type AnalyticsFilterProps = {
  className?: string;
  platform?: "Connect" | "Shared parking" | "Dealer";
  cards: MetricCard[];
  onCardClick?: (metric: string) => void;
};

type MetricCard = {
  id: string;
  label: string;
  value: number | string | ComplexValue;
  tracker?: {
    direction: "â†‘" | "â†“";
    positive: boolean;
    percent: number;
  };
  onClick?: () => void;
};

type ComplexValue = {
  number: number;
  unit?: string; // "kw", "m", "h"
  currency?: string; // "Â£", "$"
};
```

---

## Implementation Examples

### Basic Tracker Usage

```tsx
import Tracker from '@/components/table/Tracker';

// Revenue increased (good)
<Tracker
  arrowDirection="â†‘"
  positive={true}
  value={10}
/>

// Costs increased (bad)
<Tracker
  arrowDirection="â†‘"
  positive={false}
  value={15}
/>

// Errors decreased (good)
<Tracker
  arrowDirection="â†“"
  positive={true}
  value={25}
/>

// Sessions decreased (bad)
<Tracker
  arrowDirection="â†“"
  positive={false}
  value={8}
/>
```

### Analytics Filter - Shared Parking

```tsx
import AnalyticsFilter from '@/components/table/AnalyticsFilter';

const SharedParkingAnalytics = ({ onFilterByMetric }) => {
  const metrics: MetricCard[] = [
    {
      id: 'active-chargers',
      label: 'Active Chargers',
      value: 8,
      tracker: { direction: 'â†“', positive: false, percent: 10 }
    },
    {
      id: 'available-chargers',
      label: 'Available chargers',
      value: 22,
      tracker: { direction: 'â†“', positive: true, percent: 10 }
    },
    {
      id: 'avg-session',
      label: 'Average session',
      value: { number: 12, unit: 'h 10m' },
      tracker: { direction: 'â†“', positive: true, percent: 10 }
    },
    {
      id: 'energy',
      label: 'Energy supplied',
      value: { number: 115.812, unit: 'kw' },
      tracker: { direction: 'â†“', positive: true, percent: 10 }
    },
    {
      id: 'sessions',
      label: 'Sessions',
      value: 243,
      tracker: { direction: 'â†‘', positive: true, percent: 10 }
    },
    {
      id: 'avg-price',
      label: 'Average session price',
      value: { currency: 'Â£', number: 3.25 },
      tracker: { direction: 'â†“', positive: true, percent: 10 }
    }
  ];

  return (
    <AnalyticsFilter
      platform="Shared parking"
      cards={metrics}
      onCardClick={(metricId) => {
        onFilterByMetric(metricId);
      }}
    />
  );
};
```

### Analytics Filter - Connect

```tsx
const ConnectAnalytics = ({ jobs, onFilterByStatus }) => {
  const statusCounts = jobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});

  const metrics: MetricCard[] = [
    {
      id: 'completion-pending',
      label: 'Completion pending',
      value: statusCounts['Completion Pending'] || 0,
      tracker: { direction: 'â†“', positive: false, percent: 10 }
    },
    {
      id: 'to-schedule',
      label: 'To be scheduled',
      value: statusCounts['To be scheduled'] || 0,
      tracker: { direction: 'â†“', positive: false, percent: 10 }
    },
    {
      id: 'quote-required',
      label: 'Quote required',
      value: statusCounts['Quote required'] || 0,
      tracker: { direction: 'â†“', positive: true, percent: 10 }
    },
    {
      id: 'on-hold',
      label: 'On hold',
      value: statusCounts['On hold'] || 0,
      tracker: { direction: 'â†“', positive: false, percent: 10 }
    },
    {
      id: 'scheduled',
      label: 'Scheduled',
      value: statusCounts['Scheduled on'] || 0,
      tracker: { direction: 'â†‘', positive: true, percent: 10 }
    },
    {
      id: 'awaiting-approval',
      label: 'Awaiting approval',
      value: statusCounts['Awaiting approval'] || 0,
      tracker: { direction: 'â†“', positive: false, percent: 10 }
    }
  ];

  return (
    <AnalyticsFilter
      platform="Connect"
      cards={metrics}
      onCardClick={(statusId) => {
        const statusMap = {
          'completion-pending': 'Completion Pending',
          'to-schedule': 'To be scheduled',
          // ... etc
        };
        onFilterByStatus(statusMap[statusId]);
      }}
    />
  );
};
```

---

# CSS Implementation

## Tracker Styles

```css
.tracker {
  display: flex;
  align-items: center;
  gap: var(--tracker-gap);
}

.tracker__icon {
  width: var(--tracker-icon-size);
  height: var(--tracker-icon-size);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Positive tracker */
.tracker--positive .tracker__icon {
  background: var(--tracker-positive-icon-surface);
}

.tracker--positive .tracker__value {
  color: var(--tracker-positive-text);
}

/* Negative tracker */
.tracker--negative .tracker__icon {
  background: var(--tracker-negative-icon-surface);
}

.tracker--negative .tracker__value {
  color: var(--tracker-negative-text);
}

/* Arrow rotations */
.tracker__arrow--up {
  transform: rotate(0deg);
}

.tracker__arrow--down {
  transform: rotate(180deg);
}

/* Value text */
.tracker__value {
  font-family: var(--tracker-font-family);
  font-size: var(--tracker-font-size);
  font-weight: var(--tracker-font-weight);
  line-height: var(--tracker-line-height);
  white-space: nowrap;
}
```

## Analytics Card Styles

```css
.analyticsCard {
  display: flex;
  flex-direction: column;
  gap: var(--analytics-card-gap);
  width: var(--analytics-card-width);
  height: var(--analytics-card-height);
  padding: var(--analytics-card-padding-stack) 
           var(--analytics-card-padding-inline);
  background: var(--analytics-card-surface);
  border-radius: var(--analytics-card-radius);
  box-shadow: var(--analytics-card-shadow);
  cursor: pointer;
  transition: box-shadow 200ms ease, transform 200ms ease;
}

.analyticsCard:hover {
  box-shadow: 0px 2px 8px rgba(72, 70, 70, 0.12);
  transform: translateY(-2px);
}

.analyticsCard:active {
  transform: translateY(0);
}

/* Label */
.analyticsCard__label {
  font-family: var(--analytics-label-font-family);
  font-size: var(--analytics-label-font-size);
  font-weight: var(--analytics-label-font-weight);
  line-height: var(--analytics-label-line-height);
  letter-spacing: var(--analytics-label-letter-spacing);
  color: var(--analytics-label-color);
}

/* Value row */
.analyticsCard__valueRow {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

/* Value */
.analyticsCard__value {
  font-family: var(--analytics-value-font-family);
  font-size: var(--analytics-value-font-size);
  font-weight: var(--analytics-value-font-weight);
  line-height: var(--analytics-value-line-height);
  letter-spacing: var(--analytics-value-letter-spacing);
  color: var(--analytics-value-color);
}

.analyticsCard__unit {
  font-size: var(--analytics-unit-font-size);
  line-height: var(--analytics-unit-line-height);
  letter-spacing: var(--analytics-unit-letter-spacing);
  font-weight: var(--typography-font-weight-regular);
}

/* Grid layout */
.analyticsFilter {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  overflow-x: auto;
}
```

---

# Advanced Patterns

## Time-Based Tracker Calculation

```tsx
const TimeBasedTracker = ({ currentValue, previousValue, metricType }) => {
  const calculateChange = () => {
    const diff = currentValue - previousValue;
    const percent = (diff / previousValue) * 100;
    return {
      direction: diff > 0 ? 'â†‘' : 'â†“',
      percent: Math.abs(percent),
      positive: isPositiveChange(metricType, diff)
    };
  };

  const change = calculateChange();

  return (
    <Tracker
      arrowDirection={change.direction}
      positive={change.positive}
      value={change.percent}
    />
  );
};
```

## Dynamic Analytics Dashboard

```tsx
const DynamicAnalyticsDashboard = ({ platform, data, onFilter }) => {
  const calculateMetrics = () => {
    switch (platform) {
      case 'Shared parking':
        return [
          {
            id: 'active',
            label: 'Active Chargers',
            value: data.chargers.filter(c => c.status === 'Active').length,
            tracker: calculateChangeTracker(data.activeChargers, data.previousActiveChargers, true)
          },
          // ... more metrics
        ];
      case 'Connect':
        return [
          {
            id: 'pending',
            label: 'Completion pending',
            value: data.jobs.filter(j => j.status === 'Completion Pending').length,
            tracker: calculateChangeTracker(data.pending, data.previousPending, false)
          },
          // ... more metrics
        ];
      default:
        return [];
    }
  };

  return (
    <AnalyticsFilter
      platform={platform}
      cards={calculateMetrics()}
      onCardClick={onFilter}
    />
  );
};
```

## Analytics with Real-Time Updates

```tsx
const LiveAnalytics = ({ platformData }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['analytics', platformData.id],
    queryFn: () => fetchAnalytics(platformData.id),
    refetchInterval: 60000 // Update every minute
  });

  if (isLoading) return <AnalyticsFilterSkeleton />;

  return (
    <AnalyticsFilter
      platform={platformData.platform}
      cards={data.metrics}
      onCardClick={(metricId) => {
        filterTableByMetric(metricId);
      }}
    />
  );
};
```

---

# Testing Checklist

## Visual Testing - Tracker
- [ ] Icon: 22Ã—22px circle
- [ ] Gap: 6px to percentage
- [ ] Typography: 16px / 24px
- [ ] Up arrow positive: Green icon/text
- [ ] Up arrow negative: Red icon/text
- [ ] Down arrow positive: Green icon/text
- [ ] Down arrow negative: Red icon/text
- [ ] Arrow rotation correct (down = 180Â°)

## Visual Testing - Analytics Card
- [ ] Width: 242-254px
- [ ] Height: 89px
- [ ] Padding: 20px H, 10px V
- [ ] Radius: 6px
- [ ] Shadow: Subtle elevation
- [ ] Label: 18px green text
- [ ] Value: 28.83px bold, dark blue/white
- [ ] Unit: 22.78px regular (when present)
- [ ] Tracker: Displays when provided
- [ ] Gap: 10px between elements
- [ ] Hover elevation increase

## Functional Testing
- [ ] Tracker direction displays correctly
- [ ] Tracker color matches sentiment
- [ ] Card click triggers action
- [ ] Hover state shows
- [ ] All platform metrics display
- [ ] Complex values format correctly (time, currency, units)
- [ ] Tracker optional (some metrics don't have)

## Accessibility Testing
- [ ] Cards have role="button"
- [ ] Cards have aria-label
- [ ] Tracker has aria-label for screen readers
- [ ] Keyboard accessible (Enter/Space)
- [ ] Focus indicators visible
- [ ] Screen reader announces metric and change

## Mode Testing
- [ ] Card surface adapts
- [ ] Label adapts (green inverts)
- [ ] Value adapts
- [ ] Tracker colors adapt (invert)
- [ ] Shadow visible in both modes
- [ ] Smooth transitions

---

# Related Components

- **Tracker** - Used within Analytics Cards
- **Table** - Analytics Filter typically above table
- **Filter** - Cards filter table data when clicked

---

# Common Patterns

## Complete Analytics Dashboard

```tsx
const AnalyticsDashboard = ({ platform, data, tableFilters, setTableFilters }) => {
  return (
    <div className="analytics-dashboard">
      <AnalyticsFilter
        platform={platform}
        cards={data.metrics}
        onCardClick={(metricId) => {
          // Filter table by this metric
          setTableFilters({
            ...tableFilters,
            status: getStatusFromMetric(metricId)
          });
        }}
      />
      
      <Table
        data={filterDataByMetrics(data.items, tableFilters)}
        {...tableProps}
      />
    </div>
  );
};
```

---

# Version History

- **v1.0** - Initial tracker and analytics filter components

---

*Component Documentation - Ohme Design System*  
*Table System - Tracker and Analytics Components*  
*Last Updated: January 2025*
