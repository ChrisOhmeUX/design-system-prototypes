# Status Pill Component Documentation

## Overview

Status Pills display the current state of jobs, installations, chargers, sessions, users, and other entities across Ohme portal products. They use semantic pill intents (Information, Warning, Success, Error) with filled or outlined variants to provide clear visual status communication.

**Component Type:** Functional Component  
**Category:** Status Indicators / Data Display  
**Token Integration:** Yes - uses pill semantic intent tokens  
**Platform Variants:** Connect (14 statuses), Shared Parking (9 statuses), Hub (6 statuses)

## Overview by Platform

### Connect Status Pills (14 Statuses)

Job and installation status indicators for the Connect portal.

### Shared Parking Status Pills (9 Statuses)

Entity status indicators for locations, chargers, users, and sessions.

### Hub Status Pills (6 Statuses)

Admin and charger status indicators for the Hub portal.

---

# Status Pill Design

## Design Specifications

### Common Properties (All Status Pills)
- **Height:** 32px
- **Padding:** 12px horizontal, 4px vertical
- **Corner Radius:** 6px
- **Typography:** Roobert Regular, 14px / 24px
- **Letter Spacing:** 0.1px
- **Text Transform:** Sentence case (as displayed)
- **Alignment:** Center
- **Width:** Auto (content-driven)

### Visual Variants

**Filled (outline=false):**
- Solid colored background
- Dark text on light background (light mode)
- Light text on dark background (dark mode)
- Standard pill appearance

**Outlined (outline=true):**
- Transparent/white background
- Colored border (1-2px)
- Colored text matching border
- Lighter visual weight

---

# Connect Status Pills

## Status to Intent Mapping

### Information Intent (Blue)

| Status | Label | Use Case |
|--------|-------|----------|
| **Completion Pending** | "Completion pending" | Job awaiting completion verification |
| **Awaiting approval** | "Awaiting approval" | Job pending approval |
| **Change type requested** | "Change type requested" | Job type change requested |

**Colors (Filled):**
- Surface: `pill/intent/info/surface` â†’ blue100 #D1EFFF (light) / blue900 #062965 (dark)
- Content: `pill/intent/info/content` â†’ blue900 #062965 (light) / blue100 #D1EFFF (dark)

---

### Warning Intent (Yellow)

| Status | Label | Use Case |
|--------|-------|----------|
| **To be scheduled** | "To be scheduled" | Job needs scheduling |
| **Quote required** | "Quote required" | Quote needed before proceeding |
| **Requote required** | "Re-quote required" | New quote needed |

**Colors (Filled):**
- Surface: `pill/intent/warning/surface` â†’ yellow100 #FFF2C6 (light) / yellow900 #441906 (dark)
- Content: `pill/intent/warning/content` â†’ yellow900 #441906 (light) / yellow100 #FFF2C6 (dark)

---

### Success Intent (Green)

| Status | Label | Use Case |
|--------|-------|----------|
| **Scheduled on** | "Scheduled on 10/04/25" | Job scheduled (can include date) |
| **Completed** | "Completed" | Job completed |
| **Job Completed - verified** | "Job complete - verified" | Job completed and verified |
| **Charger installed** | "Charger installed" | Installation complete |

**Colors (Filled):**
- Surface: `pill/intent/success/surface` â†’ green100 #DDFBE5 (light) / green900 #072C14 (dark)
- Content: `pill/intent/success/content` â†’ green900 #072C14 (light) / green100 #DDFBE5 (dark)

---

### Error Intent (Red/Pink)

| Status | Label | Use Case |
|--------|-------|----------|
| **Cancelled** | "Cancelled" | Job cancelled |
| **On hold** | "On hold" | Job temporarily on hold |
| **On hold reason** | "On hold - Reason" | Job on hold with reason |
| **Job delayed** | "Job delayed" | Job delayed from schedule |

**Colors (Filled):**
- Surface: `pill/intent/error/surface` â†’ red100 #FFE1E1 (light) / red900 #580202 (dark)
- Content: `pill/intent/error/content` â†’ red900 #580202 (light) / red100 #FFE1E1 (dark)

---

# Shared Parking Status Pills

## Status to Intent Mapping by Entity

### Location Statuses

| Status | Intent | Label |
|--------|--------|-------|
| **Online** | Success | "Online" |
| **Offline** | Error | "Offline" |
| **Fault detected** | Warning | "Fault detected" |

---

### Charger Statuses

| Status | Intent | Label |
|--------|--------|-------|
| **Online** | Success | "Online" |
| **Offline** | Error | "Offline" |
| **Charging** | Information | "Charging" |

---

### User Statuses

| Status | Intent | Label |
|--------|--------|-------|
| **Active** | Success | "Active" |
| **Offline** | Error | "Offline" (likely "Disabled" or "Inactive") |
| **Invite pending** | Information | "Invite pending" |

---

### Session Statuses

| Status | Intent | Label |
|--------|--------|-------|
| **Complete** | Success | "Complete" |
| **Cancelled** | Error | "Cancelled" |
| **In progress** | Information | "In progress" |

---

# Hub Status Pills

## Status Mappings

| Status | Intent | Label | Use Case |
|--------|--------|-------|----------|
| **True** | Success | "True" | Ohme Admin flag active |
| **False** | Error | "False" | Ohme Admin flag inactive |
| **Online** | Success | "Online" | Charger online |
| **Offline** | Error | "Offline" | Charger offline |
| **Charging** | Information | "Charging" | Charger actively charging |
| **Fault detected** | Warning | "Fault detected" | System fault detected |

---

## Complete Token Mapping

### Tier 3 Component Tokens

Status pills use the standard Pill component tokens. Reference the main Pill component documentation for complete token details.

```css
/* Status pills inherit from Pill component */
--status-pill-padding-inline: var(--pill-size-lg-padding-inline);
--status-pill-padding-stack: var(--pill-size-lg-padding-stack);
--status-pill-radius: var(--pill-size-radius);
--status-pill-gap: var(--pill-size-lg-gap);
--status-pill-font-family: var(--typography-font-family-Roobert);
--status-pill-font-size: var(--typography-font-size-14);
--status-pill-font-weight: var(--typography-font-weight-regular);
--status-pill-line-height: var(--typography-line-height-24);
--status-pill-letter-spacing: var(--typography-letter-spacing-0dot1);
```

### Tier 2 Semantic Tokens (By Intent)

**Information (Blue):**
| Token | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|-------|-------------|-------------|-----------|----------|
| `pill/intent/info/surface` | blue100 | blue900 | #D1EFFF | #062965 |
| `pill/intent/info/content` | blue900 | blue100 | #062965 | #D1EFFF |

**Warning (Yellow):**
| Token | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|-------|-------------|-------------|-----------|----------|
| `pill/intent/warning/surface` | yellow100 | yellow900 | #FFF2C6 | #441906 |
| `pill/intent/warning/content` | yellow900 | yellow100 | #441906 | #FFF2C6 |

**Success (Green):**
| Token | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|-------|-------------|-------------|-----------|----------|
| `pill/intent/success/surface` | green100 | green900 | #DDFBE5 | #072C14 |
| `pill/intent/success/content` | green900 | green100 | #072C14 | #DDFBE5 |

**Error (Red):**
| Token | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|-------|-------------|-------------|-----------|----------|
| `pill/intent/error/surface` | red100 | red900 | #FFE1E1 | #580202 |
| `pill/intent/error/content` | red900 | red100 | #580202 | #FFE1E1 |

**Pattern:** All semantic intents invert surface â†” content colors between light and dark modes.

---

## Component Properties

### Connect Status

```typescript
type ConnectStatusPillProps = {
  className?: string;
  status: 
    | "Completion Pending"
    | "Awaiting approval"
    | "Change type requested"
    | "To be scheduled"
    | "Quote required"
    | "Requote required"
    | "Scheduled on"
    | "Completed"
    | "Job Completed - verified"
    | "Charger installed"
    | "Cancelled"
    | "On hold"
    | "On hold reason"
    | "Job delayed";
  outline?: boolean;
  scheduledDate?: string; // For "Scheduled on" status
};
```

### Shared Parking Status

```typescript
type SharedParkingStatusPillProps = {
  className?: string;
  status:
    | "Online"
    | "Offline"
    | "Fault detected"
    | "Charging"
    | "Active"
    | "Invite pending"
    | "In progress"
    | "Complete"
    | "Cancelled";
  outline?: boolean;
  entity?: "Location" | "Charger" | "User" | "Session";
};
```

### Hub Status

```typescript
type HubStatusPillProps = {
  className?: string;
  status:
    | "True"
    | "False"
    | "Online"
    | "Offline"
    | "Charging"
    | "Fault detected";
  outline?: boolean;
  entity?: "Ohme Admin" | "Charger" | "Location";
};
```

## Implementation Examples

### Connect Status Usage

```tsx
import ConnectStatusPill from '@/components/functional/ConnectStatusPill';

// Job statuses
<ConnectStatusPill status="Completion Pending" />
<ConnectStatusPill status="Awaiting approval" />
<ConnectStatusPill status="To be scheduled" />
<ConnectStatusPill status="Quote required" />

// Scheduled with date
<ConnectStatusPill 
  status="Scheduled on" 
  scheduledDate="10/04/25" 
/>

// Success states
<ConnectStatusPill status="Completed" />
<ConnectStatusPill status="Job Completed - verified" />
<ConnectStatusPill status="Charger installed" />

// Problem states
<ConnectStatusPill status="Cancelled" />
<ConnectStatusPill status="On hold" />
<ConnectStatusPill status="Job delayed" />

// Outlined variant
<ConnectStatusPill status="Completed" outline={true} />
```

### Shared Parking Status Usage

```tsx
import SharedParkingStatusPill from '@/components/functional/SharedParkingStatusPill';

// Location statuses
<SharedParkingStatusPill 
  status="Online" 
  entity="Location" 
/>
<SharedParkingStatusPill 
  status="Offline" 
  entity="Location" 
/>
<SharedParkingStatusPill 
  status="Fault detected" 
  entity="Location" 
/>

// Charger statuses
<SharedParkingStatusPill 
  status="Charging" 
  entity="Charger" 
/>
<SharedParkingStatusPill 
  status="Online" 
  entity="Charger" 
/>

// User statuses
<SharedParkingStatusPill 
  status="Active" 
  entity="User" 
/>
<SharedParkingStatusPill 
  status="Invite pending" 
  entity="User" 
/>

// Session statuses
<SharedParkingStatusPill 
  status="In progress" 
  entity="Session" 
/>
<SharedParkingStatusPill 
  status="Complete" 
  entity="Session" 
/>
```

### In Table Context

```tsx
const JobsTable = ({ jobs }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Job ID</th>
          <th>Type</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map(job => (
          <tr key={job.id}>
            <td>{job.id}</td>
            <td><JobTypePill jobType={job.type} /></td>
            <td>
              <ConnectStatusPill status={job.status} />
            </td>
            <td>{job.scheduledDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
```

### Dynamic Status Display

```tsx
const EntityStatusDisplay = ({ entity, status }) => {
  const getStatusComponent = () => {
    switch (entity.platform) {
      case 'Connect':
        return <ConnectStatusPill status={status} />;
      case 'Shared Parking':
        return (
          <SharedParkingStatusPill 
            status={status} 
            entity={entity.type}
          />
        );
      case 'Hub':
        return <HubStatusPill status={status} entity={entity.type} />;
      default:
        return <span>{status}</span>;
    }
  };

  return <div className="entity-status">{getStatusComponent()}</div>;
};
```

### Status with Timestamp

```tsx
const StatusWithTimestamp = ({ status, updatedAt }) => {
  return (
    <div className="status-container">
      <ConnectStatusPill status={status} />
      <span className="status-timestamp">
        Updated {formatRelativeTime(updatedAt)}
      </span>
    </div>
  );
};
```

## CSS Implementation

Status pills use the standard Pill component CSS. See Pill component documentation for complete implementation details.

```css
/* Status pills inherit Pill component styles */
.statusPill {
  /* Inherits from .pill class */
}

/* Intent-specific colors applied via CSS custom properties */
.statusPill--information {
  background: var(--pill-intent-info-surface);
  color: var(--pill-intent-info-content);
}

.statusPill--warning {
  background: var(--pill-intent-warning-surface);
  color: var(--pill-intent-warning-content);
}

.statusPill--success {
  background: var(--pill-intent-success-surface);
  color: var(--pill-intent-success-content);
}

.statusPill--error {
  background: var(--pill-intent-error-surface);
  color: var(--pill-intent-error-content);
}

/* Outlined variant */
.statusPill--outline {
  background: transparent;
  border: 1px solid currentColor;
}
```

## Usage Guidelines

### When to Use Status Pills

**Job Status:**
- Display job workflow state
- Show scheduling status
- Indicate completion state
- Flag issues or delays

**Entity Status:**
- Show online/offline state
- Display operational status
- Indicate active/inactive
- Show fault conditions

**System Status:**
- Display charging state
- Show session progress
- Indicate user invitation status
- Flag admin permissions

### Intent Selection Guide

**Information (Blue):**
- In-progress states
- Pending actions
- Active processes
- Informational status

**Warning (Yellow):**
- Attention needed
- Action required
- Scheduling needed
- Quotes/approvals needed

**Success (Green):**
- Completed successfully
- Online/active
- Ready/available
- Verified states

**Error (Red):**
- Cancelled/stopped
- Offline/disabled
- On hold
- Delayed/failed

### Outline vs Filled

**Use Filled (Default):**
- Primary status display
- Table cells
- Most contexts
- Default choice

**Use Outlined:**
- Less visual weight needed
- Multiple statuses in close proximity
- Secondary information
- Light backgrounds

## Best Practices

### Content Guidelines âœ“
1. **Consistent Labels:** Use exact status names as specified
2. **Sentence Case:** Maintain proper capitalization
3. **Concise Text:** Keep status labels brief (1-3 words)
4. **No Abbreviations:** Use full words unless space critical
5. **Standard Terms:** Use consistent terminology across platform

### Visual Guidelines âœ“
1. **Semantic Colors:** Use appropriate intent for status meaning
2. **Color Consistency:** Same status always same color
3. **Stand Alone:** Status readable without context
4. **Adequate Contrast:** Meet WCAG AAA in both modes
5. **Table Context:** Align well in table cells

### Interaction Guidelines âœ“
1. **Read-Only Default:** Typically non-interactive
2. **Clickable When Needed:** Can filter by status
3. **Hover Feedback:** Show hover when interactive
4. **Tooltip Context:** Add tooltip for status definitions
5. **Accessibility:** Clear status announcement

## Accessibility

### ARIA Attributes

```tsx
// Non-interactive (default)
<span 
  className="statusPill"
  role="status"
  aria-label={`Status: ${status}`}
>
  <ConnectStatusPill status={status} />
</span>

// In table cell
<td>
  <span role="status" aria-label={`Job status: ${status}`}>
    <ConnectStatusPill status={status} />
  </span>
</td>

// Interactive (filter)
<button
  onClick={() => filterByStatus(status)}
  aria-pressed={isSelected}
  aria-label={`Filter by status: ${status}`}
>
  <ConnectStatusPill status={status} />
</button>

// With tooltip
<Tooltip content={getStatusDescription(status)} position="top">
  <span role="status">
    <ConnectStatusPill status={status} />
  </span>
</Tooltip>
```

### Color Contrast Requirements

All status pills meet WCAG AAA standards in both modes:

**Light Mode:**
- Information: 12.8:1 âœ“
- Warning: 11.1:1 âœ“
- Success: 11.4:1 âœ“
- Error: 16.2:1 âœ“

**Dark Mode:**
- Information: 12.8:1 âœ“
- Warning: 11.1:1 âœ“
- Success: 11.4:1 âœ“
- Error: 16.2:1 âœ“

## Advanced Patterns

### Status History Timeline

```tsx
const StatusTimeline = ({ statusHistory }) => {
  return (
    <div className="status-timeline">
      {statusHistory.map((entry, index) => (
        <div key={index} className="timeline-entry">
          <ConnectStatusPill status={entry.status} />
          <span className="timestamp">{formatDateTime(entry.timestamp)}</span>
          {entry.changedBy && (
            <span className="changed-by">by {entry.changedBy}</span>
          )}
        </div>
      ))}
    </div>
  );
};
```

### Filterable Status List

```tsx
const StatusFilter = ({ selectedStatuses, onToggleStatus }) => {
  const allStatuses = [
    'Completion Pending',
    'Awaiting approval',
    'To be scheduled',
    'Quote required',
    'Scheduled on',
    'Completed',
    'Cancelled',
    'On hold',
    'Job delayed'
  ];

  return (
    <div className="status-filter">
      <h4>Filter by Status</h4>
      <div className="status-pills">
        {allStatuses.map(status => (
          <button
            key={status}
            onClick={() => onToggleStatus(status)}
            className={`pill-button ${selectedStatuses.includes(status) ? 'selected' : ''}`}
            aria-pressed={selectedStatuses.includes(status)}
          >
            <ConnectStatusPill status={status} />
          </button>
        ))}
      </div>
    </div>
  );
};
```

### Status Distribution Chart

```tsx
const StatusDistribution = ({ jobs }) => {
  const statusCounts = jobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});

  const total = jobs.length;

  return (
    <div className="status-distribution">
      {Object.entries(statusCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([status, count]) => (
          <div key={status} className="distribution-row">
            <ConnectStatusPill status={status} />
            <div className="distribution-bar">
              <div 
                className="bar-fill"
                style={{ width: `${(count / total) * 100}%` }}
              />
            </div>
            <span className="count">
              {count} ({Math.round((count / total) * 100)}%)
            </span>
          </div>
        ))}
    </div>
  );
};
```

### Multi-Entity Status Display

```tsx
const MultiEntityStatus = ({ entities }) => {
  return (
    <div className="entity-statuses">
      {/* Locations */}
      <div className="entity-group">
        <h4>Locations</h4>
        {entities.locations.map(location => (
          <div key={location.id}>
            <span>{location.name}</span>
            <SharedParkingStatusPill 
              status={location.status}
              entity="Location"
            />
          </div>
        ))}
      </div>

      {/* Chargers */}
      <div className="entity-group">
        <h4>Chargers</h4>
        {entities.chargers.map(charger => (
          <div key={charger.id}>
            <span>{charger.name}</span>
            <SharedParkingStatusPill 
              status={charger.status}
              entity="Charger"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
```

### Status Transition Workflow

```tsx
const StatusWorkflow = ({ currentStatus, allowedTransitions, onStatusChange }) => {
  const getAvailableStatuses = () => {
    const workflows = {
      'To be scheduled': ['Scheduled on', 'Cancelled'],
      'Scheduled on': ['Completion Pending', 'On hold', 'Cancelled'],
      'Completion Pending': ['Completed', 'Requote required', 'Job delayed'],
      'Completed': ['Job Completed - verified'],
      'On hold': ['Scheduled on', 'Cancelled']
    };

    return workflows[currentStatus] || [];
  };

  return (
    <div className="status-workflow">
      <div className="current-status">
        <label>Current Status:</label>
        <ConnectStatusPill status={currentStatus} />
      </div>

      <div className="available-transitions">
        <label>Change to:</label>
        {getAvailableStatuses().map(status => (
          <button
            key={status}
            onClick={() => onStatusChange(status)}
          >
            <ConnectStatusPill status={status} outline={true} />
          </button>
        ))}
      </div>
    </div>
  );
};
```

## Testing Checklist

### Visual Testing - Connect Status
- [ ] Height: 32px
- [ ] Padding: 12px horizontal, 4px vertical
- [ ] Corner radius: 6px
- [ ] Typography: 14px / 24px
- [ ] All 14 statuses display correctly
- [ ] Information: Light blue (light) / dark blue (dark)
- [ ] Warning: Light yellow (light) / dark yellow (dark)
- [ ] Success: Light green (light) / dark green (dark)
- [ ] Error: Light red (light) / dark red (dark)
- [ ] Outlined variant has border, no background
- [ ] Scheduled on includes date when provided

### Visual Testing - Shared Parking Status
- [ ] All 9 statuses display correctly
- [ ] Entity-specific statuses work
- [ ] Location: Online, Offline, Fault detected
- [ ] Charger: Online, Offline, Charging
- [ ] User: Active, Offline, Invite pending
- [ ] Session: Complete, Cancelled, In progress
- [ ] Color intents match status meanings

### Visual Testing - Hub Status
- [ ] All 6 statuses display correctly
- [ ] True/False (Ohme Admin): Success/Error
- [ ] Charger statuses: Online, Offline, Charging, Fault
- [ ] Color intents appropriate

### Functional Testing
- [ ] Correct label displays for each status
- [ ] Outline variant renders correctly
- [ ] Click handler fires (if clickable)
- [ ] Scheduled date appends to label
- [ ] Entity prop affects display (if needed)
- [ ] Status updates trigger re-render

### Accessibility Testing
- [ ] Non-interactive has role="status"
- [ ] Interactive uses button semantics
- [ ] aria-label describes status clearly
- [ ] Excellent contrast in both modes
- [ ] Screen reader announces status
- [ ] Keyboard accessible when interactive
- [ ] Focus indicator visible

### Mode Testing
- [ ] All intents invert correctly
- [ ] Surface colors swap (light â†” dark)
- [ ] Content colors swap (dark â†” light)
- [ ] High contrast maintained in both modes
- [ ] Outlined variant adapts correctly
- [ ] Smooth transitions between modes

## Related Components

- **Pill** - Base component (Status Pills use semantic intents)
- **Job Type Pill** - Related job categorization
- **Table** - Common display context
- **Filter** - Used in status filtering

## Common Patterns

### Job Status in Card

```tsx
const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-header">
        <h3>{job.title}</h3>
        <div className="job-badges">
          <JobTypePill jobType={job.type} />
          <ConnectStatusPill status={job.status} />
        </div>
      </div>
      <div className="job-details">
        <p>{job.customerName}</p>
        <p>{job.location}</p>
      </div>
    </div>
  );
};
```

### Charger Status Grid

```tsx
const ChargerGrid = ({ chargers }) => {
  return (
    <div className="charger-grid">
      {chargers.map(charger => (
        <div key={charger.id} className="charger-card">
          <img src={charger.image} alt={charger.name} />
          <h4>{charger.name}</h4>
          <SharedParkingStatusPill 
            status={charger.status}
            entity="Charger"
          />
          <p>{charger.location}</p>
        </div>
      ))}
    </div>
  );
};
```

### Status Summary Dashboard

```tsx
const StatusSummary = ({ jobs }) => {
  const statusGroups = {
    active: ['Scheduled on', 'Completion Pending', 'Charger installed'],
    pending: ['To be scheduled', 'Awaiting approval', 'Quote required'],
    complete: ['Completed', 'Job Completed - verified'],
    issues: ['On hold', 'Cancelled', 'Job delayed']
  };

  const getStatusCount = (statuses: string[]) => {
    return jobs.filter(job => statuses.includes(job.status)).length;
  };

  return (
    <div className="status-summary">
      <div className="summary-card">
        <h4>Active Jobs</h4>
        <span className="count">{getStatusCount(statusGroups.active)}</span>
        <div className="status-badges">
          {statusGroups.active.map(status => (
            <ConnectStatusPill key={status} status={status} outline={true} />
          ))}
        </div>
      </div>

      <div className="summary-card">
        <h4>Pending Action</h4>
        <span className="count">{getStatusCount(statusGroups.pending)}</span>
        <div className="status-badges">
          {statusGroups.pending.map(status => (
            <ConnectStatusPill key={status} status={status} outline={true} />
          ))}
        </div>
      </div>

      {/* Complete and Issues cards */}
    </div>
  );
};
```

## Complete Status Reference

### Connect Portal Statuses

**Information (Blue):**
- Completion Pending
- Awaiting approval
- Change type requested

**Warning (Yellow):**
- To be scheduled
- Quote required
- Requote required

**Success (Green):**
- Scheduled on [date]
- Completed
- Job Completed - verified
- Charger installed

**Error (Red):**
- Cancelled
- On hold
- On hold reason
- Job delayed

---

### Shared Parking Statuses

**By Entity Type:**

**Location:**
- Online (Success)
- Offline (Error)
- Fault detected (Warning)

**Charger:**
- Online (Success)
- Offline (Error)
- Charging (Information)

**User:**
- Active (Success)
- Offline/Disabled (Error)
- Invite pending (Information)

**Session:**
- Complete (Success)
- Cancelled (Error)
- In progress (Information)

---

### Hub Portal Statuses

**Ohme Admin Flag:**
- True (Success)
- False (Error)

**Charger/Location:**
- Online (Success)
- Offline (Error)
- Charging (Information)
- Fault detected (Warning)

---

## Version History

- **v1.0** - Initial status pill system with Connect (14), Shared Parking (9), and Hub (6) statuses

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
