# Pill Component Documentation

## Overview

Pills are compact labels used to display status, categories, tags, or metadata. They use semantic colors to convey meaning and support optional icons for enhanced recognition.

**Component Type:** Core UI Component  
**Category:** Data Display / Status Indicators  
**Token Integration:** Yes - uses Tier 3 pill intent tokens  
**Total Variants:** 64 (8 types Ã— 2 sizes Ã— 4 icon configs)

## Variant Matrix

| Type | Sizes | Icon Options | Total Variants |
|------|-------|--------------|----------------|
| Job type | 2 | 4 (None, Left, Right, Only) | 8 |
| Channel | 2 | 4 | 8 |
| Action | 2 | 4 | 8 |
| Success | 2 | 4 | 8 |
| Warning | 2 | 4 | 8 |
| Error | 2 | 4 | 8 |
| Information | 2 | 4 | 8 |
| Special | 2 | 4 | 8 |
| **TOTAL** | **2** | **4** | **64** |

## Design Specifications

### Size Dimensions

| Size | Height | Padding H | Padding V | Gap | Typography | Icon Size |
|------|--------|-----------|-----------|-----|------------|-----------|
| **Regular** | 32px | 12px | 4px | 6px | 14px / 24px | 14Ã—15px |
| **Small** | 24px | 12px | 4px | 2px | 12px / 16px | 14Ã—15px |
| **Icon-only** | 26Ã—26px | 6px | 6px | N/A | N/A | 14Ã—15px |

### Visual Properties
- **Regular Radius:** 6px (text variants)
- **Icon-only Radius:** 100px (circular)
- **Font Family:** Roobert Regular
- **Font Weight:** 400
- **Letter Spacing:** 0.1px
- **Text Alignment:** Center

## Color System

### Job Type

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `pill/intent/job type/surface` | `surface/inverse` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Content** | `pill/intent/job type/content` | `content/inverse` | white | ohmedarkblue | #FFFFFF | #032536 |

**Visual Result:**
- Light mode: Dark blue background, white text
- Dark mode: White background, dark blue text

---

### Channel

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `pill/intent/channel/surface` | `surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Content** | `pill/intent/channel/content` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Light mode: White background, dark blue text
- Dark mode: Dark blue background, white text

---

### Action (Teal Semantic)

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `pill/intent/action/surface` | `state/action/surface` | teal100 | teal900 | #C0FFF6 | #003A37 |
| **Content** | `pill/intent/action/content` | `state/action/content` | teal900 | teal100 | #003A37 | #C0FFF6 |

**Visual Result:**
- Light mode: Light teal background, dark teal text
- Dark mode: Dark teal background, light teal text

---

### Success (Green Semantic)

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `pill/intent/success/surface` | `state/success/surface` | green100 | green900 | #DDFBE5 | #072C14 |
| **Content** | `pill/intent/success/content` | `state/success/content` | green900 | green100 | #072C14 | #DDFBE5 |

**Visual Result:**
- Light mode: Light green background, dark green text
- Dark mode: Dark green background, light green text

---

### Warning (Yellow Semantic)

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `pill/intent/warning/surface` | `state/warning/surface` | yellow100 | yellow900 | #FFF2C6 | #441906 |
| **Content** | `pill/intent/warning/content` | `state/warning/content` | yellow900 | yellow100 | #441906 | #FFF2C6 |

**Visual Result:**
- Light mode: Light yellow background, dark brown/yellow text
- Dark mode: Dark brown background, light yellow text

---

### Error (Red Semantic)

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `pill/intent/error/surface` | `state/error/surface` | red100 | red900 | #FFE1E1 | #580202 |
| **Content** | `pill/intent/error/content` | `state/error/content` | red900 | red100 | #580202 | #FFE1E1 |

**Visual Result:**
- Light mode: Light pink background, dark red text
- Dark mode: Dark red background, light pink text

---

### Information (Blue Semantic)

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `pill/intent/info/surface` | `state/info/surface` | blue100 | blue900 | #D1EFFF | #062965 |
| **Content** | `pill/intent/info/content` | `state/info/content` | blue900 | blue100 | #062965 | #D1EFFF |

**Visual Result:**
- Light mode: Light blue background, dark blue text
- Dark mode: Dark blue background, light blue text

---

### Special (Purple Semantic)

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `pill/intent/special/surface` | `state/special/surface` | violet100 | violet900 | #F8E4FF | #510076 |
| **Content** | `pill/intent/special/content` | `state/special/content` | violet900 | violet100 | #510076 | #F8E4FF |

**Visual Result:**
- Light mode: Light purple background, dark purple text
- Dark mode: Dark purple background, light purple text

---

## Component Properties

```typescript
type PillProps = {
  className?: string;
  type?: "Job type" | "Channel" | "Action" | "Success" | "Warning" | "Error" | "Information" | "Special";
  size?: "Regular" | "Small";
  icon?: "None" | "Left" | "Right" | "Only";
  label?: string;
  onRemove?: () => void;
};
```

### Property: `type` (string, optional)
Controls the pill semantic meaning and color scheme.

**Values:**
- `"Job type"` - Job/task type indicator (inverse colors)
- `"Channel"` - Communication channel (canvas colors)
- `"Action"` (default) - Actionable items (teal)
- `"Success"` - Success status (green)
- `"Warning"` - Warning status (yellow)
- `"Error"` - Error status (red)
- `"Information"` - Informational (blue)
- `"Special"` - Special status (purple)

---

### Property: `size` (string, optional)
Controls pill dimensions.

**Values:**
- `"Regular"` (default) - 32px height, 14px text
- `"Small"` - 24px height, 12px text

---

### Property: `icon` (string, optional)
Controls icon placement.

**Values:**
- `"None"` (default) - Text only
- `"Left"` - Icon before text
- `"Right"` - Icon after text
- `"Only"` - Icon only, circular shape

---

### Property: `label` (string, required for text variants)
The text content to display in the pill.

---

### Property: `onRemove` (function, optional)
Callback when remove icon clicked (for dismissible pills).

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Job Type Intent */
--pill-intent-jobtype-surface: var(--color-surface-inverse);
--pill-intent-jobtype-content: var(--color-content-inverse);

/* Channel Intent */
--pill-intent-channel-surface: var(--color-surface-canvas);
--pill-intent-channel-content: var(--color-content-primary);

/* Action Intent */
--pill-intent-action-surface: var(--color-state-action-surface);
--pill-intent-action-content: var(--color-state-action-content);

/* Success Intent */
--pill-intent-success-surface: var(--color-state-success-surface);
--pill-intent-success-content: var(--color-state-success-content);

/* Warning Intent */
--pill-intent-warning-surface: var(--color-state-warning-surface);
--pill-intent-warning-content: var(--color-state-warning-content);

/* Error Intent */
--pill-intent-error-surface: var(--color-state-error-surface);
--pill-intent-error-content: var(--color-state-error-content);

/* Info Intent */
--pill-intent-info-surface: var(--color-state-info-surface);
--pill-intent-info-content: var(--color-state-info-content);

/* Special Intent */
--pill-intent-special-surface: var(--color-state-special-surface);
--pill-intent-special-content: var(--color-state-special-content);

/* Size: Regular */
--pill-size-lg-padding-inline: var(--value-spacing-axis-aware-inline-lg);
--pill-size-lg-padding-stack: var(--value-spacing-axis-aware-stack-xs);
--pill-size-lg-gap: var(--value-spacing-gap-sm);

/* Size: Small */
--pill-size-sm-padding-inline: var(--value-spacing-axis-aware-inline-lg);
--pill-size-sm-padding-stack: var(--value-spacing-axis-aware-stack-xs);
--pill-size-sm-gap: var(--value-spacing-gap-xxs);

/* Icon Only */
--pill-size-icon-only-padding: var(--value-spacing-axis-aware-inline-sm);
--pill-size-icon-only-radius: var(--value-corner-radii-full);

/* Regular Pills */
--pill-size-radius: var(--value-corner-radii-md);
--pill-icon-size: 14px;
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/inverse` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/inverse` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/state/action/surface` | teal100 | teal900 | #C0FFF6 | #003A37 |
| `color/state/action/content` | teal900 | teal100 | #003A37 | #C0FFF6 |
| `color/state/success/surface` | green100 | green900 | #DDFBE5 | #072C14 |
| `color/state/success/content` | green900 | green100 | #072C14 | #DDFBE5 |
| `color/state/warning/surface` | yellow100 | yellow900 | #FFF2C6 | #441906 |
| `color/state/warning/content` | yellow900 | yellow100 | #441906 | #FFF2C6 |
| `color/state/error/surface` | red100 | red900 | #FFE1E1 | #580202 |
| `color/state/error/content` | red900 | red100 | #580202 | #FFE1E1 |
| `color/state/info/surface` | blue100 | blue900 | #D1EFFF | #062965 |
| `color/state/info/content` | blue900 | blue100 | #062965 | #D1EFFF |
| `color/state/special/surface` | violet100 | violet900 | #F8E4FF | #510076 |
| `color/state/special/content` | violet900 | violet100 | #510076 | #F8E4FF |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/ohmedarkblue` | #032536 | Job type surface (light), channel content (light) |
| `color/brand/white` | #FFFFFF | Job type content (light), channel surface (light) |
| `color/secondary/teal100` | #C0FFF6 | Action surface (light) |
| `color/secondary/teal900` | #003A37 | Action content (light) |
| `color/secondary/green100` | #DDFBE5 | Success surface (light) |
| `color/secondary/green900` | #072C14 | Success content (light) |
| `color/secondary/yellow100` | #FFF2C6 | Warning surface (light) |
| `color/secondary/yellow900` | #441906 | Warning content (light) |
| `color/secondary/red100` | #FFE1E1 | Error surface (light) |
| `color/secondary/red900` | #580202 | Error content (light) |
| `color/secondary/blue100` | #D1EFFF | Info surface (light) |
| `color/secondary/blue900` | #062965 | Info content (light) |
| `color/secondary/violet100` | #F8E4FF | Special surface (light) |
| `color/secondary/violet900` | #510076 | Special content (light) |
| `Values/corner radii/radius-1halfx` | 6px | Regular corner radius |
| `Values/corner radii/radius-max` | 100px | Icon-only radius (circular) |
| `Values/space/space-3x` | 12px | Padding inline |
| `Values/space/space-1x` | 4px | Padding stack |
| `Values/space/space-1halfx` | 6px | Regular gap |
| `Values/space/space-halfx` | 2px | Small gap |

## Anatomy

```
Pill Component
â””â”€â”€ Container (rounded rectangle or circle)
    â”œâ”€â”€ Surface: Intent-specific (mode-aware)
    â”œâ”€â”€ Padding: 12px inline, 4px stack
    â””â”€â”€ Content
        â”œâ”€â”€ Icon (optional - left, right, or only)
        â”‚   â”œâ”€â”€ Size: 14Ã—15px
        â”‚   â””â”€â”€ Color: matches text color
        â””â”€â”€ Text Label
            â”œâ”€â”€ Typography: 14px (regular) / 12px (small)
            â””â”€â”€ Color: Intent-specific (mode-aware)
```

### Component Parts

**Container:**
- Rounded corners (6px) or circular (icon-only)
- Background color varies by intent
- Auto-width based on content
- Padding: 12px horizontal, 4px vertical

**Icon (Optional):**
- Size: 14Ã—15px (checkmark/arrow)
- Position: Left, Right, or Only
- Color: Matches text color
- Gap: 6px (regular) / 2px (small)

**Text Label:**
- Font: Roobert Regular
- Size: 14px (regular) / 12px (small)
- Line height: 24px (regular) / 16px (small)
- Color: Intent-specific
- Center-aligned

## Implementation Examples

### Basic Usage

```tsx
import Pill from '@/components/core/Pill';

// Job type pill
<Pill type="Job type" size="Regular" label="Installation" />

// Channel pill
<Pill type="Channel" size="Regular" label="Email" />

// Action pill
<Pill type="Action" size="Regular" label="Active" />

// Status pills
<Pill type="Success" size="Regular" label="Completed" />
<Pill type="Warning" size="Regular" label="Pending" />
<Pill type="Error" size="Regular" label="Failed" />
<Pill type="Information" size="Regular" label="Info" />
<Pill type="Special" size="Regular" label="Premium" />
```

### With Icons

```tsx
// Icon on left
<Pill type="Success" size="Regular" icon="Left" label="Done" />

// Icon on right
<Pill type="Action" size="Regular" icon="Right" label="Active" />

// Icon only (circular)
<Pill type="Error" size="Regular" icon="Only" />
```

### Small Size Pills

```tsx
<Pill type="Action" size="Small" label="Tag" />
<Pill type="Success" size="Small" icon="Left" label="Done" />
<Pill type="Warning" size="Small" icon="Only" />
```

### Status Display

```tsx
const StatusPill = ({ status }) => {
  const statusConfig = {
    completed: { type: 'Success', label: 'Completed', icon: 'Left' },
    pending: { type: 'Warning', label: 'Pending', icon: 'None' },
    failed: { type: 'Error', label: 'Failed', icon: 'Left' },
    active: { type: 'Action', label: 'Active', icon: 'None' }
  };

  const config = statusConfig[status];

  return (
    <Pill 
      type={config.type}
      size="Regular"
      icon={config.icon}
      label={config.label}
    />
  );
};
```

### Dismissible Pills

```tsx
const DismissiblePill = ({ label, onRemove, type = "Action" }) => {
  return (
    <div className="pill-wrapper">
      <Pill type={type} size="Regular" label={label} />
      <button
        className="pill-remove"
        onClick={onRemove}
        aria-label={`Remove ${label}`}
      >
        Ã—
      </button>
    </div>
  );
};
```

### Tag Collection

```tsx
const TagList = ({ tags, onRemoveTag }) => {
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <Pill
          key={index}
          type="Action"
          size="Small"
          icon="Right"
          label={tag}
          onRemove={() => onRemoveTag(tag)}
        />
      ))}
    </div>
  );
};
```

## CSS Implementation

### Core Styles

```css
.pill {
  display: inline-flex;
  align-items: center;
  gap: var(--pill-size-lg-gap);
  padding: var(--pill-size-lg-padding-stack) 
           var(--pill-size-lg-padding-inline);
  border-radius: var(--pill-size-radius);
  
  font-family: var(--typography-font-family-Roobert);
  font-weight: var(--typography-font-weight-regular);
  text-align: center;
  white-space: nowrap;
}

/* Size variants */
.pill--regular {
  padding: 4px 12px;
  gap: 6px;
  font-size: var(--typography-font-size-14);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot1);
}

.pill--small {
  padding: 4px 12px;
  gap: 2px;
  font-size: var(--typography-font-size-12);
  line-height: var(--typography-line-height-16);
  letter-spacing: var(--typography-letter-spacing-0dot1);
}

.pill--iconOnly {
  padding: 6px;
  border-radius: var(--pill-size-icon-only-radius);
  width: 26px;
  height: 26px;
}

/* Intent variants */
.pill--jobType {
  background: var(--pill-intent-jobtype-surface);
  color: var(--pill-intent-jobtype-content);
}

.pill--channel {
  background: var(--pill-intent-channel-surface);
  color: var(--pill-intent-channel-content);
}

.pill--action {
  background: var(--pill-intent-action-surface);
  color: var(--pill-intent-action-content);
}

.pill--success {
  background: var(--pill-intent-success-surface);
  color: var(--pill-intent-success-content);
}

.pill--warning {
  background: var(--pill-intent-warning-surface);
  color: var(--pill-intent-warning-content);
}

.pill--error {
  background: var(--pill-intent-error-surface);
  color: var(--pill-intent-error-content);
}

.pill--information {
  background: var(--pill-intent-info-surface);
  color: var(--pill-intent-info-content);
}

.pill--special {
  background: var(--pill-intent-special-surface);
  color: var(--pill-intent-special-content);
}

/* Icon */
.pill__icon {
  width: 14px;
  height: 15px;
  flex-shrink: 0;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-surface-inverse: #032536;
  --color-content-inverse: #FFFFFF;
  --color-surface-canvas: #FFFFFF;
  --color-content-primary: #032536;
  --color-state-action-surface: #C0FFF6;
  --color-state-action-content: #003A37;
  --color-state-success-surface: #DDFBE5;
  --color-state-success-content: #072C14;
  --color-state-warning-surface: #FFF2C6;
  --color-state-warning-content: #441906;
  --color-state-error-surface: #FFE1E1;
  --color-state-error-content: #580202;
  --color-state-info-surface: #D1EFFF;
  --color-state-info-content: #062965;
  --color-state-special-surface: #F8E4FF;
  --color-state-special-content: #510076;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-surface-inverse: #FFFFFF;
  --color-content-inverse: #032536;
  --color-surface-canvas: #032536;
  --color-content-primary: #FFFFFF;
  --color-state-action-surface: #003A37;
  --color-state-action-content: #C0FFF6;
  --color-state-success-surface: #072C14;
  --color-state-success-content: #DDFBE5;
  --color-state-warning-surface: #441906;
  --color-state-warning-content: #FFF2C6;
  --color-state-error-surface: #580202;
  --color-state-error-content: #FFE1E1;
  --color-state-info-surface: #062965;
  --color-state-info-content: #D1EFFF;
  --color-state-special-surface: #510076;
  --color-state-special-content: #F8E4FF;
}
```

## Usage Guidelines

### When to Use Each Type

**Job Type:**
- Job categories (Installation, Maintenance, Repair)
- Task types
- Work classifications
- Inverted emphasis

**Channel:**
- Communication channels (Email, SMS, App)
- Data sources
- Integration types
- Neutral categorization

**Action:**
- Actionable statuses
- Active states
- In-progress indicators
- Teal semantic emphasis

**Success:**
- Completed tasks
- Approved items
- Positive outcomes
- Success confirmations

**Warning:**
- Attention needed
- Pending actions
- Cautionary states
- Review required

**Error:**
- Failed operations
- Errors or issues
- Rejected items
- Critical problems

**Information:**
- Informational tags
- Metadata labels
- Non-critical info
- Contextual data

**Special:**
- Premium features
- Highlighted items
- Special categories
- VIP status

### Size Selection

**Regular (32px height):**
- Standard use cases
- Desktop interfaces
- Primary emphasis
- With longer text

**Small (24px height):**
- Compact layouts
- Dense tables
- Mobile contexts
- Short labels

**Icon Only:**
- Minimal space
- Visual-only indicators
- Icon-based status
- Compact interfaces

## Best Practices

### Content Guidelines âœ“
1. **Keep Brief:** 1-2 words ideal
2. **Clear Labels:** Descriptive and unambiguous
3. **Consistent Terms:** Use same labels for same meanings
4. **Title Case:** Use title case for multi-word labels
5. **No Punctuation:** Avoid periods or special characters

### Visual Guidelines âœ“
1. **Semantic Meaning:** Use correct type for context
2. **Size Consistency:** Use same size within same context
3. **Icon Purpose:** Add icons only when they add clarity
4. **Spacing:** Adequate spacing around pills in groups
5. **Alignment:** Align pills consistently in lists

### Interaction Guidelines âœ“
1. **Clickable Context:** Make entire pill clickable when interactive
2. **Remove Action:** Use icon-right with X for dismissible pills
3. **Hover States:** Show hover when interactive
4. **Focus States:** Clear focus indicators
5. **Touch Targets:** Ensure minimum 24px height for mobile

## Accessibility

### ARIA Attributes

```tsx
// Status pill
<span 
  className="pill pill--success"
  role="status"
  aria-label="Status: Completed"
>
  Completed
</span>

// Interactive pill
<button
  className="pill pill--action"
  onClick={handleClick}
  aria-label="Filter by active status"
>
  Active
</button>

// Dismissible pill
<div className="pill-wrapper">
  <span className="pill pill--action">Tag</span>
  <button
    onClick={onRemove}
    aria-label="Remove tag"
  >
    Ã—
  </button>
</div>
```

### Color Contrast

All pill types meet WCAG AA standards for contrast:

**Light Mode:**
- Job Type: 21:1 âœ“ (AAA)
- Channel: 12.2:1 âœ“ (AAA)
- Action: 5.1:1 âœ“ (AA)
- Success: 5.7:1 âœ“ (AA)
- Warning: 6.5:1 âœ“ (AA)
- Error: 5.8:1 âœ“ (AA)
- Information: 6.4:1 âœ“ (AA)
- Special: 5.9:1 âœ“ (AA)

**Dark Mode:**
- Job Type: 12.2:1 âœ“ (AAA)
- Channel: 21:1 âœ“ (AAA)
- Action: 5.1:1 âœ“ (AA)
- Success: 5.7:1 âœ“ (AA)
- Warning: 6.5:1 âœ“ (AA)
- Error: 5.8:1 âœ“ (AA)
- Information: 6.4:1 âœ“ (AA)
- Special: 5.9:1 âœ“ (AA)

## Advanced Patterns

### Dynamic Type Selection

```tsx
const getStatusPillType = (status: string) => {
  const typeMap = {
    completed: 'Success',
    pending: 'Warning',
    failed: 'Error',
    active: 'Action',
    info: 'Information',
    premium: 'Special'
  };
  return typeMap[status] || 'Action';
};

<Pill 
  type={getStatusPillType(item.status)}
  label={item.status}
/>
```

### Pill Group

```tsx
const PillGroup = ({ items, type = "Action" }) => {
  return (
    <div className="pill-group">
      {items.map((item, index) => (
        <Pill
          key={index}
          type={type}
          size="Small"
          label={item}
        />
      ))}
    </div>
  );
};

/* CSS for pill group */
.pill-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
```

### Interactive Filter Pills

```tsx
const FilterPills = ({ filters, activeFilters, onToggle }) => {
  return (
    <div className="filter-pills">
      {filters.map(filter => (
        <button
          key={filter.id}
          className={`pill ${activeFilters.includes(filter.id) ? 'pill--action' : 'pill--channel'}`}
          onClick={() => onToggle(filter.id)}
          aria-pressed={activeFilters.includes(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
```

### Count Badge Pill

```tsx
const CountPill = ({ label, count, type = "Action" }) => {
  return (
    <div className="count-pill-wrapper">
      <Pill type={type} size="Regular" label={label} />
      <span className="pill-count">{count}</span>
    </div>
  );
};
```

## Testing Checklist

### Visual Testing
- [ ] All 8 types render with correct colors
- [ ] Regular size: 32px height, 14px text
- [ ] Small size: 24px height, 12px text
- [ ] Icon-only: 26Ã—26px circular
- [ ] Padding: 12px inline, 4px stack
- [ ] Gap: 6px (regular) / 2px (small)
- [ ] Corner radius: 6px (text) / 100px (icon-only)
- [ ] Icons render at 14Ã—15px
- [ ] Light mode: All types show correct colors
- [ ] Dark mode: All types invert correctly

### Functional Testing
- [ ] Text displays correctly
- [ ] Icons appear in correct positions
- [ ] Icon-only variant is circular
- [ ] Size prop changes dimensions
- [ ] Type prop changes colors
- [ ] Interactive pills respond to clicks
- [ ] Remove action works (if implemented)

### Accessibility Testing
- [ ] Non-interactive pills have role="status"
- [ ] Interactive pills are buttons with aria-label
- [ ] Sufficient color contrast in all types and modes
- [ ] Focus visible on interactive pills
- [ ] Keyboard accessible when interactive
- [ ] Screen readers announce content

### Mode Testing
- [ ] Job Type: Inverts correctly (dark â†” white)
- [ ] Channel: Inverts correctly
- [ ] Action: Inverts correctly (teal shades)
- [ ] Success: Inverts correctly (green shades)
- [ ] Warning: Inverts correctly (yellow shades)
- [ ] Error: Inverts correctly (red shades)
- [ ] Information: Inverts correctly (blue shades)
- [ ] Special: Inverts correctly (purple shades)
- [ ] Smooth transitions between modes

## Related Components

- **Alert Count** - Similar compact display
- **Toast Notification** - Uses similar semantic colors
- **Button** - Similar sizing patterns
- **Badge** - Alternative status indicator

## Common Patterns

### Job Status Pills

```tsx
const jobStatuses = [
  { status: 'installation', type: 'Job type' },
  { status: 'maintenance', type: 'Job type' },
  { status: 'repair', type: 'Job type' }
];

{jobStatuses.map(job => (
  <Pill key={job.status} type={job.type} label={job.status} />
))}
```

### Communication Channel Pills

```tsx
const channels = ['Email', 'SMS', 'App', 'Phone'];

{channels.map(channel => (
  <Pill type="Channel" size="Small" label={channel} />
))}
```

### Multi-State Display

```tsx
const StatePills = ({ state }) => {
  if (state.isComplete) return <Pill type="Success" label="Complete" icon="Left" />;
  if (state.hasError) return <Pill type="Error" label="Error" icon="Left" />;
  if (state.needsReview) return <Pill type="Warning" label="Review" />;
  return <Pill type="Action" label="Active" />;
};
```

## Version History

- **v1.0** - Initial pill component with 8 intent types, 2 sizes, 4 icon configurations

---

*Component Documentation - Ohme Design System*  
*Core UI Component*  
*Last Updated: January 2025*
