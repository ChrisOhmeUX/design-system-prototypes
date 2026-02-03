# Config Panel System Documentation

## Overview

The Config Panel system provides a structured way to display and edit project properties, metadata, and related links. It consists of individual Config Options (various display/edit types) grouped within Config Panel containers that adapt between desktop and mobile layouts.

**Component Type:** Functional Component  
**Category:** Data Display / Forms  
**Token Integration:** Yes - uses content, button, and pill tokens  
**System Components:** Config Options (individual rows), Config Panel (container)

---

# Part 1: Config Options (Individual Row)

## Overview

Config Options are individual property rows within a config panel. Each displays a label and corresponding value/action in various formats to suit different data types and interaction needs.

**Variants:** 14 types Ã— 2 sizes (desktop/mobile) = 28 configurations  
**Layout:** Two-column (desktop) or stacked (mobile)

## Config Option Types

| Type | Components Used | Use Case |
|------|----------------|----------|
| **External link button** | Button (secondary with icon) | Navigate to external resource |
| **Text only** | Label + text value | Display read-only information |
| **Button** | Label + primary button | Trigger actions (e.g., "View report") |
| **Icon Link** | Label + icon + underlined link | Date/time with calendar icon |
| **Pill** | Label + pill component | Display assigned users, tags |
| **Pill - editable** | Label + pill + edit icon | Editable pill values |
| **Pill w hover** | Label + pill with hover state | Interactive pill display |
| **Pill w hover - editable** | Pill + hover + edit | Interactive editable pills |
| **Switch** | Label + toggle switch | Binary on/off settings |
| **Text with edit** | Label + text + edit icon | Editable text fields |
| **Button + text** | Label + text + button | Text display with action |
| **Link with edit + status text** | Link + status + edit | Links with completion dates |
| **Scheduled Date** | Label + calendar icon + date link | Date/time display with icon |

## Design Specifications

### Desktop Layout

| Element | Width | Height | Padding V | Alignment | Border |
|---------|-------|--------|-----------|-----------|--------|
| **Row** | 714px (full) | Auto | 16px | Horizontal | 1px dashed bottom |
| **Label** | ~92px-150px | Auto | - | Left | - |
| **Value** | Flex (remaining) | Auto | - | Right | - |

### Mobile Layout

| Element | Width | Height | Padding V | Gap | Border |
|---------|-------|--------|-----------|-----|--------|
| **Row** | 288px (full) | Auto | 16px | 12px | 1px dashed bottom |
| **Label** | Full width | Auto | - | - | - |
| **Value** | Full width | Auto | - | - | - |

### Visual Properties
- **Label Typography:** Roobert Regular, 14px / 21px (desktop), 14px / 16px (mobile)
- **Label Spacing:** 1px letter-spacing (desktop), 0.1px (mobile)
- **Label Transform:** UPPERCASE
- **Value Typography:** Varies by type (18px typical, some 14px)
- **Border:** 1px dashed, smokeygrey (#D1D1D1)
- **Gap:** 16px (desktop between label/value elements)

## Color System - Config Options

### Label

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Content** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** 14px / 21px (desktop), 14px / 16px (mobile), UPPERCASE, 1px spacing (desktop)

---

### Text Value

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Content** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** 18px / 24px, 0.2px letter-spacing

---

### Link Text (Icon Link, External Link)

| Property | Token Reference | Resolves To | Hex Value |
|----------|----------------|-------------|-----------|
| **Content** | `color/tertiary/Darkteal` | Darkteal | #0AB4A8 |
| **Decoration** | Underline | - | - |

**Typography:** Roobert Medium, 18px / 24px, 0.2px letter-spacing

**Visual Result:** Teal underlined text (constant both modes)

---

### Status Text (Secondary Information)

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Content** | `color/content/secondary` | grey700 | grey300 | #647882 | #ADB3B1 |

**Typography:** 14px / 18px

---

### Divider Border

| Property | Value | Mode Behavior |
|----------|-------|---------------|
| **Color** | smokeygrey | #D1D1D1 (constant) |
| **Style** | Dashed | - |
| **Width** | 1px | - |
| **Position** | Bottom of each row | - |

---

### Button Components

Config Options use standard Button component tokens:
- **Primary Button:** Teal background, dark blue content
- **Secondary Button:** White/dark blue background, primary content border

### Pill Components

Config Options use standard Pill component tokens:
- **Action Pills:** Teal100/Teal900 surfaces with inverted content

---

# Part 2: Config Panel (Container)

## Overview

Config Panel is a container that groups multiple Config Options into an organized panel for displaying and managing project properties.

**Variants:** 3 platform/page combinations Ã— 2 sizes = 6 configurations  
**Width:** 714px (desktop), 288px (mobile)

## Panel Specifications

### Desktop Panel
- **Width:** 714px
- **Layout:** Vertical stack of Config Options
- **Row Gap:** 0px (borders create visual separation)
- **Row Padding:** 16px vertical, 0px horizontal
- **Border Pattern:** Dashed 1px smokeygrey between rows

### Mobile Panel
- **Width:** 288px
- **Layout:** Vertical stack with internal vertical layout
- **Row Gap:** 16px between rows
- **Row Padding:** 16px vertical, 0px horizontal
- **Border Pattern:** Same as desktop

## Component Properties

### Config Options

```typescript
type ConfigOptionsProps = {
  className?: string;
  type?: 
    | "External link button"
    | "Text only"
    | "Button"
    | "Icon Link"
    | "Pill"
    | "Pill - editable"
    | "Pill w hover"
    | "Pill w hover - editable"
    | "Switch"
    | "Text with edit"
    | "Button + text"
    | "Link with edit + status text"
    | "Scheduled Date";
  mobile?: boolean;
  label: string;
  value?: string | React.ReactNode;
  onEdit?: () => void;
  onClick?: () => void;
};
```

### Config Panel

```typescript
type ConfigPanelProps = {
  mobile?: boolean;
  platform?: "Default" | "Connect";
  page?: "Default" | "Installation" | "SERVICE VISIT";
  options: ConfigOptionConfig[];
};

type ConfigOptionConfig = {
  type: ConfigOptionsProps['type'];
  label: string;
  value?: any;
  onClick?: () => void;
  onEdit?: () => void;
};
```

## Implementation Examples

### Basic Config Panel

```tsx
import ConfigPanel from '@/components/functional/ConfigPanel';
import ConfigOptions from '@/components/functional/ConfigOptions';

const ProjectConfigPanel = ({ projectData }) => {
  return (
    <ConfigPanel
      mobile={false}
      platform="Default"
      page="Default"
      options={[
        {
          type: 'External link button',
          label: 'Home survey',
          onClick: () => window.open('/survey', '_blank')
        },
        {
          type: 'Text only',
          label: 'Issue reported',
          value: 'CT Clamp - Missing'
        },
        {
          type: 'Button',
          label: 'Fault finding report',
          onClick: () => viewReport()
        },
        {
          type: 'Icon Link',
          label: 'Scheduled Date',
          value: '10/03/2024 (1 hours)',
          onClick: () => editSchedule()
        },
        {
          type: 'Pill',
          label: 'Assigned to',
          value: 'Sam Brown +2'
        }
      ]}
    />
  );
};
```

### Individual Config Options

```tsx
// External link button
<ConfigOptions
  type="External link button"
  mobile={false}
  label="Home survey"
  onClick={() => navigateToSurvey()}
/>

// Text only
<ConfigOptions
  type="Text only"
  mobile={false}
  label="Issue reported"
  value="CT Clamp - Missing"
/>

// Button with action
<ConfigOptions
  type="Button"
  mobile={false}
  label="Fault finding report"
  onClick={() => viewReport()}
/>

// Icon link with date
<ConfigOptions
  type="Icon Link"
  mobile={false}
  label="Scheduled Date"
  value="10/03/2024 (1 hours)"
  onClick={() => editDate()}
/>

// Pill display
<ConfigOptions
  type="Pill"
  mobile={false}
  label="Assigned to"
  value="Sam Brown +2"
/>

// Switch control
<ConfigOptions
  type="Switch"
  mobile={false}
  label="Auto-assign"
  value={isAutoAssign}
  onChange={setIsAutoAssign}
/>
```

### Responsive Config Panel

```tsx
const ResponsiveConfigPanel = ({ data }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <ConfigPanel
      mobile={isMobile}
      platform="Connect"
      page="Installation"
      options={[
        {
          type: 'External link button',
          label: 'Home survey',
          onClick: () => viewSurvey()
        },
        {
          type: 'Text only',
          label: 'Issue reported',
          value: data.issue
        },
        {
          type: 'Icon Link',
          label: 'Scheduled Date',
          value: formatDate(data.scheduledDate),
          onClick: () => editSchedule()
        },
        {
          type: 'Pill',
          label: 'Assigned to',
          value: data.assignedTo
        }
      ]}
    />
  );
};
```

### With Dynamic Options

```tsx
const DynamicConfigPanel = ({ job }) => {
  const options = [];

  // Add survey link if available
  if (job.surveyUrl) {
    options.push({
      type: 'External link button',
      label: 'Home survey',
      onClick: () => window.open(job.surveyUrl, '_blank')
    });
  }

  // Add issue if reported
  if (job.issue) {
    options.push({
      type: 'Text only',
      label: 'Issue reported',
      value: job.issue
    });
  }

  // Add report button if available
  if (job.reportAvailable) {
    options.push({
      type: 'Button',
      label: 'Fault finding report',
      onClick: () => viewReport(job.id)
    });
  }

  // Add scheduled date
  options.push({
    type: 'Icon Link',
    label: 'Scheduled Date',
    value: formatSchedule(job.scheduledDate, job.duration),
    onClick: () => editSchedule(job.id)
  });

  // Add assignments
  if (job.assignedEngineers.length > 0) {
    options.push({
      type: 'Pill',
      label: 'Assigned to',
      value: formatAssignees(job.assignedEngineers)
    });
  }

  return <ConfigPanel options={options} />;
};
```

## CSS Implementation

### Config Options

```css
.configOptions {
  display: flex;
  padding: 16px 0;
  border-bottom: 1px dashed var(--color-border-divider);
  width: 100%;
}

/* Desktop layout */
.configOptions--desktop {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

/* Mobile layout */
.configOptions--mobile {
  flex-direction: column;
  gap: var(--value-spacing-gap-lg);
  align-items: flex-start;
  min-width: 290px;
}

/* Label */
.configOptions__label {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-14);
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-primary);
  text-transform: uppercase;
}

.configOptions__label--desktop {
  line-height: 21px;
  letter-spacing: 1px;
  min-width: 92px;
}

.configOptions__label--mobile {
  line-height: 16px;
  letter-spacing: 0.1px;
}

/* Value container */
.configOptions__value {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.configOptions--mobile .configOptions__value {
  width: 100%;
  justify-content: flex-start;
}

/* Text value */
.configOptions__text {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-18);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
  color: var(--color-content-primary);
}

/* Link value */
.configOptions__link {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-18);
  font-weight: var(--typography-font-weight-medium);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
  color: var(--color-tertiary-Darkteal);
  text-decoration: underline;
  cursor: pointer;
}

.configOptions__link:hover {
  opacity: 0.8;
}

/* Status text */
.configOptions__status {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-14);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--typography-line-height-18);
  color: var(--color-content-secondary);
}

/* Icon */
.configOptions__icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
```

### Config Panel

```css
.configPanel {
  display: flex;
  flex-direction: column;
  gap: 0; /* Borders create separation */
}

.configPanel--desktop {
  width: 714px;
}

.configPanel--mobile {
  width: 288px;
  gap: 16px; /* Mobile has explicit gap */
}

/* Remove border from last item */
.configPanel .configOptions:last-child {
  border-bottom: none;
}

/* Divider */
.configOptions__divider {
  border-bottom: 1px dashed #D1D1D1;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-content-primary: #032536;
  --color-content-secondary: #647882;
  --color-tertiary-Darkteal: #0AB4A8;
  --color-border-divider: #D1D1D1;
  --value-spacing-gap-lg: 12px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-content-primary: #FFFFFF;
  --color-content-secondary: #ADB3B1;
  /* Darkteal and divider remain constant */
}
```

## Usage Guidelines

### When to Use Config Panel

**Project Properties:**
- Job details and metadata
- Installation information
- Service visit data
- User assignments

**Structured Data Display:**
- Property-value pairs
- Configuration settings
- Related links and actions
- Status information

**Edit Workflows:**
- View and edit properties
- Quick access to related resources
- Status tracking
- Assignment management

### Type Selection Guide

**External Link Button:**
- Navigate to related pages
- Open external resources
- Secondary actions

**Text Only:**
- Read-only information
- Static metadata
- Non-editable fields

**Button:**
- Primary actions (View, Download)
- Trigger workflows
- Open modals/dialogs

**Icon Link:**
- Date/time information
- Scheduled events
- Calendar integration

**Pill:**
- User assignments
- Tags and categories
- Multi-value displays

**Switch:**
- Binary settings
- Feature toggles
- On/off preferences

**Button + Text:**
- Display info with action
- "No data" states with CTA
- Status with resolution action

**Link with Edit + Status:**
- Related job links
- Completion status
- Historical records

## Best Practices

### Content Guidelines âœ“
1. **Clear Labels:** Use descriptive, consistent labels
2. **Uppercase Labels:** Maintain UPPERCASE for labels
3. **Concise Values:** Keep values brief and scannable
4. **Consistent Format:** Use same format for similar data
5. **Action Clarity:** Button text should be clear and specific

### Visual Guidelines âœ“
1. **Alignment:** Desktop - left/right, Mobile - stacked
2. **Spacing:** Consistent 16px vertical padding
3. **Borders:** Dashed dividers between rows
4. **Visual Hierarchy:** Labels less prominent than values
5. **Responsive:** Stack on mobile for readability

### Interaction Guidelines âœ“
1. **Click Targets:** Make entire row clickable when interactive
2. **Edit Affordance:** Show edit icons for editable fields
3. **External Links:** Use icons to indicate external navigation
4. **Immediate Updates:** Switches update immediately
5. **Loading States:** Show loading for async actions

## Accessibility

### ARIA Attributes

```tsx
<div className="config-panel" role="region" aria-label="Project configuration">
  {/* External link button */}
  <div className="config-options">
    <span className="config-label">Home survey</span>
    <button
      onClick={openSurvey}
      aria-label="View home survey (opens in new window)"
    >
      <IconRadixObjects iconRadix="Home" />
      View home survey
    </button>
  </div>

  {/* Text only */}
  <div className="config-options">
    <span className="config-label">Issue reported</span>
    <span className="config-value">CT Clamp - Missing</span>
  </div>

  {/* Switch */}
  <div className="config-options">
    <label htmlFor="auto-assign-switch">Auto-assign</label>
    <ToggleSwitch
      id="auto-assign-switch"
      state={isAutoAssign}
      onChange={setIsAutoAssign}
      aria-label="Enable auto-assignment"
    />
  </div>
</div>
```

### Keyboard Navigation

- **Tab:** Navigate between interactive elements
- **Enter/Space:** Activate buttons, switches
- **Arrow Keys:** Navigate within multi-option controls

## Advanced Patterns

### Editable Config Panel

```tsx
const EditableConfigPanel = ({ data, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [values, setValues] = useState(data);

  const handleSave = async () => {
    await onUpdate(values);
    setEditMode(false);
  };

  return (
    <div>
      <ConfigPanel
        options={[
          {
            type: editMode ? 'Text with edit' : 'Text only',
            label: 'Job Type',
            value: values.jobType,
            onEdit: () => setEditMode(true)
          },
          {
            type: 'Pill - editable',
            label: 'Assigned to',
            value: values.assignedTo,
            onEdit: () => openAssignDialog()
          },
          {
            type: 'Switch',
            label: 'Auto-schedule',
            value: values.autoSchedule,
            onChange: (val) => setValues({...values, autoSchedule: val})
          }
        ]}
      />
      {editMode && (
        <div className="edit-actions">
          <Button type="Primary" onClick={handleSave}>Save</Button>
          <Button type="tertiary" onClick={() => setEditMode(false)}>Cancel</Button>
        </div>
      )}
    </div>
  );
};
```

### Platform-Specific Config

```tsx
const PlatformConfigPanel = ({ platform, page, data }) => {
  const getOptions = () => {
    if (platform === 'Connect' && page === 'Installation') {
      return [
        { type: 'External link button', label: 'Home survey', ... },
        { type: 'Text only', label: 'Issue reported', ... },
        { type: 'Button', label: 'Fault finding report', ... },
        { type: 'Scheduled Date', label: 'Scheduled Date', ... },
        { type: 'Button + text', label: 'Engineers', ... },
        { type: 'Link with edit + status text', label: 'Related jobs', ... }
      ];
    }
    
    // Default options
    return [
      { type: 'External link button', label: 'Home survey', ... },
      { type: 'Text only', label: 'Issue reported', ... },
      ...
    ];
  };

  return (
    <ConfigPanel
      platform={platform}
      page={page}
      options={getOptions()}
    />
  );
};
```

### With Loading States

```tsx
const ConfigPanelWithLoading = ({ jobId }) => {
  const { data, isLoading } = useJobData(jobId);

  if (isLoading) {
    return <ConfigPanelSkeleton />;
  }

  return (
    <ConfigPanel
      options={[
        {
          type: 'Text only',
          label: 'Status',
          value: data.status
        },
        {
          type: 'Icon Link',
          label: 'Scheduled Date',
          value: data.scheduledDate,
          onClick: () => editSchedule(jobId)
        },
        {
          type: 'Pill',
          label: 'Assigned to',
          value: data.assignedEngineers.map(e => e.name).join(', ')
        }
      ]}
    />
  );
};
```

## Testing Checklist

### Visual Testing - Config Options
- [ ] Desktop: Horizontal layout, label left, value right
- [ ] Mobile: Vertical stack, label top, value bottom
- [ ] Label: 14px UPPERCASE with correct spacing
- [ ] Value: 18px (or type-specific size)
- [ ] Link: Teal color (#0AB4A8), underlined
- [ ] Status: Grey secondary color
- [ ] Row padding: 16px vertical
- [ ] Divider: 1px dashed smokeygrey
- [ ] All component types render correctly
- [ ] Icons: 24Ã—24px

### Visual Testing - Config Panel
- [ ] Desktop width: 714px
- [ ] Mobile width: 288px
- [ ] Rows stack vertically
- [ ] Borders between all rows except last
- [ ] Gap: 0px (desktop), 16px (mobile)
- [ ] All config option types display correctly
- [ ] Responsive switching works

### Functional Testing
- [ ] Buttons trigger onClick callbacks
- [ ] Links navigate correctly
- [ ] Switches toggle state
- [ ] Edit icons trigger edit mode
- [ ] Pills display correctly
- [ ] External links open in new window
- [ ] Platform/page variants load correct options

### Accessibility Testing
- [ ] Config panel has role="region"
- [ ] Panel has aria-label
- [ ] Labels properly associated
- [ ] Buttons have aria-label
- [ ] Links have descriptive text
- [ ] Switches have role="switch"
- [ ] Keyboard navigation works
- [ ] Focus indicators visible

### Mode Testing
- [ ] Labels adapt to mode
- [ ] Text values adapt to mode
- [ ] Links remain teal (constant)
- [ ] Status text adapts to mode
- [ ] Divider remains constant
- [ ] Buttons adapt per their tokens
- [ ] Pills adapt per their tokens
- [ ] Smooth transitions between modes

## Related Components

### Composed From:
- **Button** - Primary and secondary buttons
- **Pill** - Assignment and tag displays
- **Toggle Switch** - Binary controls
- **Icon Components** - Calendar, external link icons

### Works With:
- **Modal** - Edit dialogs triggered from options
- **Dropdown** - Alternative for editable fields
- **Input** - Edit mode for text fields

## Common Patterns

### Job Details Panel

```tsx
const JobDetailsPanel = ({ job }) => {
  return (
    <ConfigPanel
      platform="Connect"
      page="Installation"
      options={[
        {
          type: 'External link button',
          label: 'Home survey',
          onClick: () => window.open(job.surveyUrl, '_blank')
        },
        {
          type: 'Text only',
          label: 'Issue reported',
          value: job.issueDescription
        },
        {
          type: 'Button',
          label: 'Fault finding report',
          onClick: () => downloadReport(job.id)
        },
        {
          type: 'Scheduled Date',
          label: 'Scheduled Date',
          value: `${formatDate(job.date)} (${job.duration} hours)`,
          onClick: () => reschedule(job.id)
        },
        {
          type: 'Pill',
          label: 'Assigned to',
          value: job.engineers.map(e => e.name).join(', ')
        }
      ]}
    />
  );
};
```

### Installation Config Panel

```tsx
const InstallationConfig = ({ installation }) => {
  return (
    <ConfigPanel
      platform="Connect"
      page="Installation"
      options={[
        {
          type: 'Text only',
          label: 'Customer',
          value: installation.customerName
        },
        {
          type: 'Icon Link',
          label: 'Scheduled Date',
          value: installation.scheduledDate,
          onClick: () => editDate()
        },
        {
          type: 'Button + text',
          label: 'Engineers',
          value: installation.engineerCount > 0 
            ? `${installation.engineerCount} assigned`
            : 'No assigned engineers',
          onClick: () => assignEngineers()
        },
        {
          type: 'Link with edit + status text',
          label: 'Related jobs',
          value: installation.relatedJob,
          status: `Completed ${installation.completedDate}`,
          onClick: () => viewRelatedJob()
        }
      ]}
    />
  );
};
```

## Version History

- **v1.0** - Initial config panel system with Config Options (14 types) and Config Panel container

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
