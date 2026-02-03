# Status Bar Component Documentation

## Overview

The Status Bar component displays below the header to provide at-a-glance information about the current page context. It shows the primary status (as a pill), optional alert flags, last update timestamps, and job instructions/notes in a horizontal bar layout.

**Component Type:** Functional Component  
**Category:** Status Display / Information Bar  
**Token Integration:** Yes - uses surface, content, and pill tokens  
**Variants:** 8 configurations (flag Ã— last update time Ã— note combinations)

## Configuration Matrix

| Flag | Last Update | Note | Elements Displayed |
|------|-------------|------|-------------------|
| âœ— | âœ— | âœ— | Status pill only |
| âœ— | âœ“ | âœ— | Status pill + Timestamp |
| âœ— | âœ— | âœ“ | Status pill + Note text |
| âœ— | âœ“ | âœ“ | Status pill + Timestamp + Note text |
| âœ“ | âœ— | âœ— | Status pill + Flag pill |
| âœ“ | âœ“ | âœ— | Status pill + Flag pill + Timestamp |
| âœ“ | âœ— | âœ“ | Status pill + Flag pill + Note text |
| âœ“ | âœ“ | âœ“ | Status pill + Flag pill + Timestamp + Note text |

## Design Specifications

### Dimensions

| Element | Width | Height | Padding H | Padding V | Gap |
|---------|-------|--------|-----------|-----------|-----|
| **Status Bar** | 1412px | 48px (auto-height) | 16px | 8px | - |
| **Status Section** | Auto | - | - | - | 12px from details |
| **Status Messages** | Auto | - | - | - | 16px between pills |
| **Status Details** | Auto | - | - | - | 16px between items |
| **Section Gap** | - | - | - | - | 55px main sections |

### Visual Properties
- **Background:** White (light mode) / Dark blue (dark mode)
- **Layout:** Horizontal flex
- **Alignment:** Vertically centered
- **Status Pill:** Standard status pill (32px height)
- **Flag Pill:** Error intent pill with flag icon (32px height)
- **Text:** Plain text for timestamps and notes

## Status Bar Elements

### 1. Status Pill (Always Present)

Uses standard Status Pill component showing current job/entity status.

**Examples:**
- "Awaiting install date" (Warning intent)
- "Scheduled on 10/04/25" (Success intent)
- "Completion pending" (Information intent)
- "Cancelled" (Error intent)

**Specifications:**
- Height: 32px
- Uses semantic pill intents
- Positioned first in bar

---

### 2. Flag Pill (Optional - Alerts)

Error intent pill with flag icon indicating urgent issues or overdue items.

**Specifications:**
- **Intent:** Error (red/pink background)
- **Icon:** Flag icon (14Ã—14px, left side)
- **Icon Gap:** 6px
- **Height:** 32px
- **Common Text:** "2 days overdue", "X days overdue", "Action required"

**Colors (Filled):**
- Surface: `pill/intent/error/surface` â†’ red100 #FFE1E1 (light) / red900 #580202 (dark)
- Content: `pill/intent/error/content` â†’ red900 #580202 (light) / red100 #FFE1E1 (dark)
- Icon: Matches content color

**Visual Result:**
- Light mode: Light red background, dark red text/icon
- Dark mode: Dark red background, light red text/icon

---

### 3. Last Update Time (Optional)

Plain text timestamp showing when status was last updated.

**Format Examples:**
- "12 Mar 2025, 10:14 AM"
- "15 Jan 2026, 3:45 PM"

**Specifications:**
- Typography: Roobert Regular, 16px / 24px
- Letter Spacing: 0.2px
- Color: `content/primary` (mode-aware)

---

### 4. Note Text (Optional)

Plain text displaying job instructions or contextual information.

**Examples:**
- "Client confirming availability"
- "Awaiting customer response"
- "Special access required"

**Specifications:**
- Typography: Roobert Regular, 16px / 24px
- Letter Spacing: 0.2px
- Color: `content/primary` (mode-aware)

---

## Color System

### Status Bar Container

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |

**Visual Result:**
- Light mode: White background
- Dark mode: Dark blue background

---

### Text Elements (Timestamp, Note)

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Content** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** Roobert Regular, 16px / 24px, 0.2px letter-spacing

---

### Status Pill

Uses standard Status Pill component tokens (see Status Pill documentation).

---

### Flag Pill

Uses Error intent pill tokens:

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `pill/intent/error/surface` | `state/error/surface` | red100 | red900 | #FFE1E1 | #580202 |
| **Content** | `pill/intent/error/content` | `state/error/content` | red900 | red100 | #580202 | #FFE1E1 |
| **Icon** | Same as content | Same as content | red900 | red100 | #580202 | #FFE1E1 |

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Status Bar Container */
--status-bar-surface: var(--color-surface-canvas);
--status-bar-height: 48px; /* auto-height based on content */
--status-bar-padding-inline: 16px;
--status-bar-padding-stack: 8px;
--status-bar-width: 1412px;

/* Status Bar Layout */
--status-bar-section-gap: 55px;
--status-bar-message-gap: var(--primitive-values-space-space-medium); /* 16px */
--status-bar-detail-gap: var(--primitive-values-space-space-medium); /* 16px */
--status-bar-container-gap: var(--primitive-values-space-space-small); /* 12px */

/* Status Bar Text */
--status-bar-text-font-family: var(--typography-font-family-Roobert);
--status-bar-text-font-size: var(--typography-font-size-16);
--status-bar-text-font-weight: var(--typography-font-weight-regular);
--status-bar-text-line-height: var(--typography-line-height-24);
--status-bar-text-letter-spacing: var(--typography-letter-spacing-0dot2);
--status-bar-text-color: var(--color-content-primary);

/* Flag Pill */
--status-bar-flag-icon-size: 14px;
--status-bar-flag-surface: var(--pill-intent-error-surface);
--status-bar-flag-content: var(--pill-intent-error-content);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `pill/intent/error/surface` | red100 | red900 | #FFE1E1 | #580202 |
| `pill/intent/error/content` | red900 | red100 | #580202 | #FFE1E1 |
| `primitive/values/space/space-small` | - | - | 12px | 12px |
| `primitive/values/space/space-medium` | - | - | 16px | 16px |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/white` | #FFFFFF | Bar surface (light) |
| `color/brand/ohmedarkblue` | #032536 | Bar surface (dark), text (light) |
| `color/secondary/red100` | #FFE1E1 | Flag pill surface (light) |
| `color/secondary/red900` | #580202 | Flag pill surface (dark), content (light) |
| `Values/space/space-3x` | 12px | Container gap |
| `Values/space/space-4x` | 16px | Message/detail gaps |
| `Values/space/space-2x` | 8px | Vertical padding |

## Anatomy

```
Status Bar Component
â””â”€â”€ Container (1412px Ã— 48px)
    â”œâ”€â”€ Surface: surface/canvas (mode-aware)
    â”œâ”€â”€ Padding: 16px horizontal, 8px vertical
    â””â”€â”€ Content (55px section gap)
        â”œâ”€â”€ Status Messages Section (16px gap between)
        â”‚   â”œâ”€â”€ Status Pill (always present)
        â”‚   â”‚   â””â”€â”€ Uses Status Pill component
        â”‚   â””â”€â”€ Flag Pill (optional)
        â”‚       â”œâ”€â”€ Icon: Flag (14Ã—14px)
        â”‚       â”œâ”€â”€ Gap: 6px
        â”‚       â””â”€â”€ Text: "[X] days overdue"
        â””â”€â”€ Status Details Section (16px gap between)
            â”œâ”€â”€ Last Update Time (optional)
            â”‚   â”œâ”€â”€ Typography: 16px / 24px
            â”‚   â””â”€â”€ Format: "DD MMM YYYY, HH:MM AM/PM"
            â””â”€â”€ Note Text (optional)
                â”œâ”€â”€ Typography: 16px / 24px
                â””â”€â”€ Content: Job instructions/context
```

## Component Properties

```typescript
type StatusBarProps = {
  className?: string;
  status: string; // Status pill text
  statusIntent?: "information" | "warning" | "success" | "error";
  flag?: {
    text: string;
    icon?: React.ReactNode;
  };
  lastUpdateTime?: string | Date;
  note?: string;
  onStatusClick?: () => void;
  onFlagClick?: () => void;
};
```

### Property: `status` (string, required)
The primary status to display in the status pill.

**Examples:**
- "Awaiting install date"
- "Scheduled on 10/04/25"
- "Completion pending"
- "Completed"

**Display:** Uses Status Pill component with appropriate intent

---

### Property: `statusIntent` (string, optional)
The semantic intent for the status pill.

**Values:**
- `"information"` - Blue (in-progress, pending)
- `"warning"` - Yellow (attention needed)
- `"success"` - Green (completed, scheduled)
- `"error"` - Red (cancelled, on hold)

**Auto-Detection:** Can be inferred from status text if not provided

---

### Property: `flag` (object, optional)
Alert flag for urgent issues or overdue items.

**Structure:**
```typescript
{
  text: "2 days overdue",
  icon?: <FlagIcon />
}
```

**Default Icon:** Flag icon (14Ã—14px)

---

### Property: `lastUpdateTime` (string or Date, optional)
When the status was last updated.

**Format:** "DD MMM YYYY, HH:MM AM/PM"  
**Example:** "12 Mar 2025, 10:14 AM"

---

### Property: `note` (string, optional)
Job instruction or contextual note text.

**Examples:**
- "Client confirming availability"
- "Awaiting customer response"
- "Special access instructions provided"

---

## Implementation Examples

### Basic Status Bar

```tsx
import StatusBar from '@/components/functional/StatusBar';

// Status only
<StatusBar
  status="Awaiting install date"
  statusIntent="warning"
/>

// Status + Timestamp
<StatusBar
  status="Awaiting install date"
  statusIntent="warning"
  lastUpdateTime="12 Mar 2025, 10:14 AM"
/>

// Status + Flag
<StatusBar
  status="Awaiting install date"
  statusIntent="warning"
  flag={{
    text: "2 days overdue"
  }}
/>

// Status + Note
<StatusBar
  status="Awaiting install date"
  statusIntent="warning"
  note="Client confirming availability"
/>

// All elements
<StatusBar
  status="Awaiting install date"
  statusIntent="warning"
  flag={{
    text: "2 days overdue"
  }}
  lastUpdateTime="12 Mar 2025, 10:14 AM"
  note="Client confirming availability"
/>
```

### Job Details Status Bar

```tsx
const JobDetailsStatusBar = ({ job }) => {
  const getOverdueDays = () => {
    if (!job.scheduledDate) return null;
    const scheduled = new Date(job.scheduledDate);
    const today = new Date();
    const diffDays = Math.floor((today - scheduled) / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : null;
  };

  const overdueDays = getOverdueDays();

  return (
    <StatusBar
      status={job.status}
      statusIntent={getStatusIntent(job.status)}
      flag={overdueDays ? {
        text: `${overdueDays} days overdue`
      } : undefined}
      lastUpdateTime={job.lastUpdated}
      note={job.engineerNote}
    />
  );
};
```

### Dynamic Status Bar

```tsx
const DynamicStatusBar = ({ entity }) => {
  const shouldShowFlag = () => {
    // Show flag for overdue items
    if (entity.isOverdue) {
      return {
        text: `${entity.overdueDays} days overdue`
      };
    }
    
    // Show flag for urgent items
    if (entity.priority === 'urgent') {
      return {
        text: 'Urgent attention required'
      };
    }
    
    return undefined;
  };

  const shouldShowUpdate = () => {
    // Show update time if recent (within 24 hours)
    const lastUpdate = new Date(entity.lastUpdated);
    const hoursSince = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60);
    return hoursSince < 24;
  };

  return (
    <StatusBar
      status={entity.status}
      statusIntent={entity.statusIntent}
      flag={shouldShowFlag()}
      lastUpdateTime={shouldShowUpdate() ? entity.lastUpdated : undefined}
      note={entity.currentNote}
    />
  );
};
```

### Installation Status Bar

```tsx
const InstallationStatusBar = ({ installation }) => {
  const formatUpdateTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  return (
    <StatusBar
      status={installation.status}
      statusIntent="warning"
      flag={installation.isOverdue ? {
        text: `${installation.daysOverdue} days overdue`
      } : undefined}
      lastUpdateTime={formatUpdateTime(installation.statusUpdatedAt)}
      note={installation.specialInstructions}
    />
  );
};
```

## CSS Implementation

### Status Bar Container

```css
.statusBar {
  background: var(--status-bar-surface);
  padding: var(--status-bar-padding-stack) 
           var(--status-bar-padding-inline);
  width: var(--status-bar-width);
  display: flex;
  align-items: center;
  min-height: var(--status-bar-height);
}

/* Main container */
.statusBar__container {
  display: flex;
  gap: var(--status-bar-section-gap);
  align-items: center;
}

/* Status container (left section) */
.statusBar__statusContainer {
  display: flex;
  gap: var(--status-bar-container-gap);
  align-items: center;
}

/* Status messages (pills) */
.statusBar__messages {
  display: flex;
  gap: var(--status-bar-message-gap);
  align-items: center;
}

/* Status details (timestamp, note) */
.statusBar__details {
  display: flex;
  gap: var(--status-bar-detail-gap);
  align-items: center;
}

/* Text elements */
.statusBar__text {
  font-family: var(--status-bar-text-font-family);
  font-size: var(--status-bar-text-font-size);
  font-weight: var(--status-bar-text-font-weight);
  line-height: var(--status-bar-text-line-height);
  letter-spacing: var(--status-bar-text-letter-spacing);
  color: var(--status-bar-text-color);
  white-space: nowrap;
}

/* Last update */
.statusBar__lastUpdate {
  /* Uses statusBar__text styles */
}

/* Note */
.statusBar__note {
  /* Uses statusBar__text styles */
}

/* Flag pill */
.statusBar__flag {
  /* Uses Error intent Pill component */
}

.statusBar__flagIcon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-surface-canvas: #FFFFFF;
  --color-content-primary: #032536;
  --status-bar-height: 48px;
  --status-bar-padding-inline: 16px;
  --status-bar-padding-stack: 8px;
  --status-bar-width: 1412px;
  --status-bar-section-gap: 55px;
  --status-bar-message-gap: 16px;
  --status-bar-detail-gap: 16px;
  --status-bar-container-gap: 12px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-surface-canvas: #032536;
  --color-content-primary: #FFFFFF;
  /* Spacing remains constant */
}
```

## Usage Guidelines

### When to Use Status Bar

**Job Details Pages:**
- Display current job status
- Show overdue alerts
- Display last status update
- Show engineer instructions

**Installation Pages:**
- Installation status
- Schedule alerts
- Update timestamps
- Special instructions

**Entity Detail Views:**
- Current entity state
- Alert conditions
- Last modified time
- Contextual notes

### Element Selection Guide

**Status Pill (Required):**
- Always show primary status
- Use appropriate semantic intent
- Keep label concise

**Flag Pill (Show When):**
- Item is overdue
- Urgent action required
- Critical alert condition
- Important deadline passed

**Last Update Time (Show When):**
- Recent status change (< 24 hours)
- Status history important
- Time-sensitive workflows
- Audit trail needed

**Note Text (Show When):**
- Engineer instructions exist
- Special context needed
- Important information for user
- Job-specific requirements

## Best Practices

### Content Guidelines âœ“
1. **Concise Status:** Clear, brief status labels
2. **Specific Flags:** Exact overdue days, not "overdue"
3. **Consistent Format:** Standard timestamp format
4. **Actionable Notes:** Instructions user can act on
5. **Priority Order:** Status â†’ Flag â†’ Time â†’ Note

### Visual Guidelines âœ“
1. **Horizontal Layout:** All elements in single row
2. **Left Alignment:** Status elements left-aligned
3. **Adequate Spacing:** 16px between messages/details
4. **Section Separation:** 55px gap between main sections
5. **Color Coding:** Use semantic intents appropriately

### Interaction Guidelines âœ“
1. **Static Display:** Typically read-only
2. **Click to Filter:** Can make status clickable to filter
3. **Tooltip Context:** Add tooltips for status definitions
4. **Flag Emphasis:** Red flag draws immediate attention
5. **Update Feedback:** Refresh on status change

## Accessibility

### ARIA Attributes

```tsx
<div 
  className="statusBar"
  role="status"
  aria-label="Job status information"
>
  {/* Status pill */}
  <div role="status" aria-label={`Current status: ${status}`}>
    <StatusPill status={status} intent={statusIntent} />
  </div>

  {/* Flag pill */}
  {flag && (
    <div 
      role="alert" 
      aria-label={`Alert: ${flag.text}`}
      className="statusBar__flag"
    >
      <Pill
        type="Error"
        icon={<FlagIcon />}
        label={flag.text}
      />
    </div>
  )}

  {/* Last update */}
  {lastUpdateTime && (
    <time 
      dateTime={lastUpdateTime}
      className="statusBar__lastUpdate"
    >
      {formatDateTime(lastUpdateTime)}
    </time>
  )}

  {/* Note */}
  {note && (
    <p className="statusBar__note">
      {note}
    </p>
  )}
</div>
```

### Screen Reader Announcements

```tsx
const StatusBarWithAnnouncement = ({ status, flag, note }) => {
  const [previousStatus, setPreviousStatus] = useState(status);

  useEffect(() => {
    if (status !== previousStatus) {
      // Announce status change to screen readers
      announceToScreenReader(
        `Status changed to ${status}${flag ? `. Alert: ${flag.text}` : ''}`
      );
      setPreviousStatus(status);
    }
  }, [status, flag, previousStatus]);

  return (
    <StatusBar
      status={status}
      flag={flag}
      note={note}
    />
  );
};
```

## Advanced Patterns

### Auto-Calculating Overdue Flag

```tsx
const StatusBarWithAutoFlag = ({ job }) => {
  const calculateOverdue = () => {
    if (!job.dueDate || job.status === 'Completed') return null;
    
    const due = new Date(job.dueDate);
    const today = new Date();
    const diffTime = today - due;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 0) {
      return {
        text: `${diffDays} ${diffDays === 1 ? 'day' : 'days'} overdue`
      };
    }
    
    return null;
  };

  return (
    <StatusBar
      status={job.status}
      statusIntent={getStatusIntent(job.status)}
      flag={calculateOverdue()}
      lastUpdateTime={job.statusUpdatedAt}
      note={job.engineerNote}
    />
  );
};
```

### Relative Time Display

```tsx
const StatusBarWithRelativeTime = ({ entity }) => {
  const formatRelativeTime = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 7) return `${days} days ago`;
    
    // Otherwise show full date
    return formatDateTime(timestamp);
  };

  return (
    <StatusBar
      status={entity.status}
      lastUpdateTime={formatRelativeTime(entity.lastUpdated)}
      {...props}
    />
  );
};
```

### Multi-Flag Support

```tsx
const StatusBarWithMultipleFlags = ({ job }) => {
  const getFlags = () => {
    const flags = [];
    
    if (job.isOverdue) {
      flags.push({
        text: `${job.overdueDays} days overdue`,
        intent: 'error'
      });
    }
    
    if (job.requiresAttention) {
      flags.push({
        text: 'Attention required',
        intent: 'warning'
      });
    }
    
    return flags;
  };

  const flags = getFlags();

  return (
    <div className="statusBar">
      <StatusPill status={job.status} />
      
      {flags.map((flag, index) => (
        <Pill
          key={index}
          type={flag.intent === 'error' ? 'Error' : 'Warning'}
          icon={<FlagIcon />}
          label={flag.text}
        />
      ))}
      
      {job.lastUpdated && (
        <time>{formatDateTime(job.lastUpdated)}</time>
      )}
      
      {job.note && (
        <p>{job.note}</p>
      )}
    </div>
  );
};
```

### Sticky Status Bar

```tsx
const StickyStatusBar = ({ job }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 68; // Header component height
      setIsSticky(window.scrollY > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`status-bar-wrapper ${isSticky ? 'sticky' : ''}`}
      style={{
        position: isSticky ? 'sticky' : 'relative',
        top: isSticky ? 68 : 0,
        zIndex: isSticky ? 40 : 1
      }}
    >
      <StatusBar
        status={job.status}
        flag={job.flag}
        lastUpdateTime={job.lastUpdated}
        note={job.note}
      />
    </div>
  );
};
```

## Testing Checklist

### Visual Testing
- [ ] Container: 1412px width, 48px height
- [ ] Background: White (light) / dark blue (dark)
- [ ] Padding: 16px horizontal, 8px vertical
- [ ] Status pill: Standard height (32px)
- [ ] Flag pill: Error intent, 14Ã—14px flag icon
- [ ] Text: 16px / 24px, dark blue (light) / white (dark)
- [ ] Gap: 12px status to details
- [ ] Gap: 16px between messages
- [ ] Gap: 16px between details
- [ ] Gap: 55px between sections
- [ ] All elements vertically centered

### Functional Testing
- [ ] Status pill displays correctly
- [ ] Flag shows when provided
- [ ] Flag icon displays correctly
- [ ] Timestamp shows when provided
- [ ] Note text shows when provided
- [ ] All 8 configurations render correctly
- [ ] Status pill clickable (if interactive)
- [ ] Flag pill clickable (if interactive)
- [ ] Text wraps appropriately (or truncates)

### Accessibility Testing
- [ ] Status bar has role="status"
- [ ] Status bar has aria-label
- [ ] Status pill has role="status"
- [ ] Flag pill has role="alert"
- [ ] Timestamp uses <time> element
- [ ] Timestamp has dateTime attribute
- [ ] Note has proper text semantics
- [ ] Keyboard accessible when interactive
- [ ] Screen reader announces all elements

### Mode Testing
- [ ] Container surface adapts to mode
- [ ] Text color adapts to mode
- [ ] Status pill adapts per component tokens
- [ ] Flag pill adapts per component tokens
- [ ] Smooth transitions between modes

## Related Components

### Composed From:
- **Status Pill** - Primary status indicator
- **Pill (Error)** - Flag alert pill
- **Icon** - Flag icon (14Ã—14px)

### Works With:
- **Header** - Positioned below header
- **Job Details** - Displays job status context
- **Installation Details** - Installation status info
- **Table Detail Views** - Entity status display

## Common Patterns

### Job Detail Page Status

```tsx
const JobDetailPage = ({ job }) => {
  return (
    <div className="job-detail-page">
      <Header {...headerProps} />
      
      <StatusBar
        status={job.status}
        statusIntent="warning"
        flag={job.daysOverdue > 0 ? {
          text: `${job.daysOverdue} days overdue`
        } : undefined}
        lastUpdateTime={job.lastStatusChange}
        note={job.engineerInstructions}
      />
      
      <div className="job-content">
        {/* Job details */}
      </div>
    </div>
  );
};
```

### Installation with Status Tracking

```tsx
const InstallationView = ({ installation }) => {
  const getStatusBarProps = () => {
    const props = {
      status: installation.status,
      statusIntent: getStatusIntent(installation.status)
    };

    // Add flag if delayed
    if (installation.isDelayed) {
      props.flag = {
        text: `${installation.delayDays} days delayed`
      };
    }

    // Show timestamp for recent updates
    const hoursSinceUpdate = getHoursSince(installation.statusUpdatedAt);
    if (hoursSinceUpdate < 48) {
      props.lastUpdateTime = installation.statusUpdatedAt;
    }

    // Include note if exists
    if (installation.installationNote) {
      props.note = installation.installationNote;
    }

    return props;
  };

  return (
    <div className="installation-view">
      <Header />
      <StatusBar {...getStatusBarProps()} />
      <InstallationDetails installation={installation} />
    </div>
  );
};
```

### Status Bar with Live Updates

```tsx
const LiveStatusBar = ({ jobId }) => {
  const { data: job, isLoading } = useJobQuery(jobId, {
    refetchInterval: 30000 // Refresh every 30 seconds
  });

  if (isLoading) return <StatusBarSkeleton />;

  return (
    <StatusBar
      status={job.status}
      statusIntent={job.statusIntent}
      flag={job.flag}
      lastUpdateTime={job.lastUpdated}
      note={job.note}
    />
  );
};
```

## Version History

- **v1.0** - Initial status bar component with 8 configuration variants

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
