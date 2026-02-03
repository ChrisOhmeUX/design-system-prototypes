# Table Cell System Documentation

## Overview

The Cell component is the fundamental data display unit for tables. It supports 8 different data types with appropriate formatting, alignment, and visual treatment optimized for tabular display.

**Component Type:** Functional Component  
**Category:** Table / Data Display  
**Token Integration:** Yes - uses content and typography tokens  
**Variants:** 8 cell types  
**Row Height:** 72px standard

---

# Cell Type Reference

## 1. Text Cell

**Purpose:** Display single-line text content (names, labels, general text)

### Specifications
- **Typography:** Roobert Regular, 18px / 24px, 0.2px letter-spacing
- **Color:** `content/primary` â†’ ohmedarkblue (light) / white (dark)
- **Alignment:** Left
- **Overflow:** Ellipsis (...) with hidden overflow
- **White Space:** nowrap (single line)

**Example:** "Standard", "Francis Duperee", "London Office"

---

## 2. Text 2 Lines Cell

**Purpose:** Display two-line text content (addresses, multi-line data)

### Specifications
- **Typography:** Roobert Regular, 18px / 24px, 0.2px letter-spacing
- **Color:** `content/primary`
- **Alignment:** Left
- **Lines:** Maximum 2 lines
- **Overflow:** Ellipsis on second line
- **Height:** Uses 72px row height

**Example:**
```
Standard
Installation
```

---

## 3. Number Cell

**Purpose:** Display numeric values (counts, quantities, IDs)

### Specifications
- **Typography:** Roobert Regular, 18px / 24px
- **Color:** `content/primary`
- **Alignment:** Right
- **Format:** Comma-separated thousands

**Examples:**
- 100,000
- 1,234
- 42

---

## 4. Currency Cell

**Purpose:** Display monetary amounts

### Specifications
- **Typography:** Roobert Regular, 18px / 24px
- **Color:** `content/primary`
- **Alignment:** Right
- **Format:** Currency symbol + comma-separated value

**Examples:**
- $10,000
- Â£3.25
- â‚¬1,500.50

**Formatting Rules:**
- Currency symbol before number
- Comma thousands separator
- Two decimal places for cents/pence

---

## 5. Status Cell

**Purpose:** Display entity or job status using Status Pill component

### Specifications
- Uses standard Status Pill component
- Platform-specific status values (Connect, Shared Parking, Hub)
- Semantic color intents (Information, Warning, Success, Error)
- Alignment: Left (pill positioned in cell)

**Examples:**
- "Completion pending" (Information - blue)
- "Quote required" (Warning - yellow)
- "Completed" (Success - green)
- "Cancelled" (Error - red)

**See:** Status Pill Component Documentation for complete specifications

---

## 6. Action Cell

**Purpose:** Provide actionable buttons or links within table rows

### Specifications
- Uses Button component (typically Tertiary or Secondary)
- Alignment: Left
- Typical buttons: Small size for table context

**Common Actions:**
- "View" - View details
- "Edit" - Edit record
- "Assign" - Assignment action
- "Download" - Download file
- Icon-only buttons (24Ã—24px)

**Example:**
```tsx
<Cell type="Action">
  <Button type="tertiary" size="small">
    View
  </Button>
</Cell>
```

---

## 7. Namegroup Cell

**Purpose:** Display user identification with avatar and name

### Specifications
- Uses Name Group component
- Avatar: 40Ã—40px (medium size for tables)
- Gap: 12px between avatar and name
- Alignment: Left

**Layout:**
```
[Avatar] Francis Duperee
```

**See:** Name Group Component Documentation for complete specifications

---

## 8. Type8 Cell

**Purpose:** Secondary action button (alternative action cell type)

### Specifications
- Uses Button component
- Typically teal/secondary styling
- Similar to Action cell but different visual treatment

**Example:** Alternative action buttons in specific table contexts

---

# Complete Token Mapping

## Tier 3 Component Tokens

```css
/* Cell Common */
--cell-height: 72px;
--cell-padding-inline: 16px;
--cell-font-family: var(--typography-font-family-Roobert);
--cell-font-size: var(--typography-font-size-18);
--cell-font-weight: var(--typography-font-weight-regular);
--cell-line-height: var(--typography-line-height-24);
--cell-letter-spacing: var(--typography-letter-spacing-0dot2);
--cell-text-color: var(--color-content-primary);

/* Cell Alignment */
--cell-text-align-left: left;
--cell-text-align-right: right;

/* Cell Overflow */
--cell-overflow: hidden;
--cell-text-overflow: ellipsis;
--cell-white-space: nowrap;

/* Cell 2 Lines */
--cell-2line-webkit-line-clamp: 2;
--cell-2line-webkit-box-orient: vertical;
--cell-2line-display: -webkit-box;
```

## Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `typography/font-size/18` | - | - | 18px | 18px |
| `typography/line-height/24` | - | - | 24px | 24px |
| `typography/letter-spacing/0dot2` | - | - | 0.2px | 0.2px |

## Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/ohmedarkblue` | #032536 | Cell text (light) |
| `color/brand/white` | #FFFFFF | Cell text (dark) |
| `Values/space/space-4x` | 16px | Cell padding |

---

# Anatomy

```
Cell Component (72px height)
â””â”€â”€ Container
    â”œâ”€â”€ Height: 72px (row height)
    â”œâ”€â”€ Padding: 16px horizontal (varies by column)
    â”œâ”€â”€ Display: Flex
    â”œâ”€â”€ Align: Center (vertical)
    â””â”€â”€ Content
        â”œâ”€â”€ Text types: Left-aligned
        â”œâ”€â”€ Number types: Right-aligned
        â”œâ”€â”€ Status: Pill component
        â”œâ”€â”€ Action: Button component
        â””â”€â”€ Namegroup: Avatar + Name
```

---

# Component Properties

```typescript
type CellProps = {
  className?: string;
  type: 
    | "Text"
    | "Text 2 lines"
    | "Number"
    | "Currency"
    | "Status"
    | "Action"
    | "Namegroup"
    | "Type8";
  children: React.ReactNode;
  align?: "left" | "right";
};

// Type-specific props
type TextCellProps = {
  type: "Text" | "Text 2 lines";
  content: string;
};

type NumberCellProps = {
  type: "Number";
  value: number;
  format?: (num: number) => string;
};

type CurrencyCellProps = {
  type: "Currency";
  value: number;
  currency?: "Â£" | "$" | "â‚¬";
  locale?: string;
};

type StatusCellProps = {
  type: "Status";
  status: string;
  platform?: "Connect" | "Shared parking" | "Hub";
};

type ActionCellProps = {
  type: "Action";
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  onClick: () => void;
};

type NamegroupCellProps = {
  type: "Namegroup";
  name: string;
  avatar?: string;
};
```

---

# Implementation Examples

## Basic Cell Usage

```tsx
import { Cell } from '@/components/table';

// Text cell
<Cell type="Text" content="Standard Installation" />

// Number cell
<Cell type="Number" value={100000} />

// Currency cell
<Cell type="Currency" value={10000} currency="$" />

// Status cell
<Cell type="Status">
  <ConnectStatusPill status="Completion pending" />
</Cell>

// Action cell
<Cell type="Action">
  <Button type="tertiary" size="small" onClick={handleView}>
    View
  </Button>
</Cell>

// Namegroup cell
<Cell type="Namegroup">
  <NameGroup
    name="Francis Duperee"
    avatar="/avatars/francis.jpg"
  />
</Cell>
```

## Table Row with Mixed Cell Types

```tsx
const JobTableRow = ({ job, onView, onEdit }) => {
  return (
    <tr>
      <Cell type="Namegroup">
        <NameGroup
          name={job.customerName}
          avatar={job.customerAvatar}
        />
      </Cell>
      
      <Cell type="Status">
        <ConnectStatusPill status={job.status} />
      </Cell>
      
      <Cell type="Text">
        <JobTypePill jobType={job.type} />
      </Cell>
      
      <Cell type="Text" content={job.postcode} />
      
      <Cell type="Text" content={job.enteredStatus} />
      
      <Cell type="Text" content={job.leadId} />
      
      <Cell type="Text" content={job.assignedTo} />
      
      <Cell type="Action">
        <Button type="tertiary" size="small" onClick={() => onView(job.id)}>
          View
        </Button>
      </Cell>
    </tr>
  );
};
```

## Formatted Number Cell

```tsx
const FormattedNumberCell = ({ value }) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-GB').format(num);
  };

  return (
    <Cell type="Number">
      {formatNumber(value)}
    </Cell>
  );
};

// Usage
<FormattedNumberCell value={100000} />
// Displays: "100,000"
```

## Formatted Currency Cell

```tsx
const FormattedCurrencyCell = ({ value, currency = 'Â£', locale = 'en-GB' }) => {
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency === 'Â£' ? 'GBP' : currency === '$' ? 'USD' : 'EUR'
    }).format(num);
  };

  return (
    <Cell type="Currency" align="right">
      {formatCurrency(value)}
    </Cell>
  );
};

// Usage
<FormattedCurrencyCell value={10000} currency="Â£" />
// Displays: "Â£10,000"
```

## Clickable Namegroup Cell

```tsx
const ClickableNamegroupCell = ({ user, onClick }) => {
  return (
    <Cell type="Namegroup">
      <button
        onClick={() => onClick(user.id)}
        className="namegroup-button"
      >
        <NameGroup
          name={user.name}
          avatar={user.avatar}
        />
      </button>
    </Cell>
  );
};
```

---

# CSS Implementation

## Base Cell Styles

```css
.cell {
  display: flex;
  align-items: center;
  height: var(--cell-height);
  padding: 0 var(--cell-padding-inline);
  
  font-family: var(--cell-font-family);
  font-size: var(--cell-font-size);
  font-weight: var(--cell-font-weight);
  line-height: var(--cell-line-height);
  letter-spacing: var(--cell-letter-spacing);
  color: var(--cell-text-color);
}

/* Text cells */
.cell--text {
  text-align: var(--cell-text-align-left);
  overflow: var(--cell-overflow);
  text-overflow: var(--cell-text-overflow);
  white-space: var(--cell-white-space);
}

/* Text 2 lines */
.cell--text2lines {
  display: -webkit-box;
  -webkit-line-clamp: var(--cell-2line-webkit-line-clamp);
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
  white-space: normal;
}

/* Number cells */
.cell--number,
.cell--currency {
  text-align: var(--cell-text-align-right);
  justify-content: flex-end;
}

/* Status cell */
.cell--status {
  text-align: left;
}

/* Action cell */
.cell--action {
  text-align: left;
}

/* Namegroup cell */
.cell--namegroup {
  text-align: left;
}
```

## CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-content-primary: #032536;
  --cell-height: 72px;
  --cell-padding-inline: 16px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-content-primary: #FFFFFF;
  /* Spacing remains constant */
}
```

---

# Usage Guidelines

## Cell Type Selection

**Use Text Cell for:**
- Single-line text data
- Labels and names
- General string content
- Short descriptive text

**Use Text 2 Lines Cell for:**
- Addresses
- Multi-line descriptions
- Longer text that fits in 2 lines

**Use Number Cell for:**
- Counts and quantities
- IDs and reference numbers
- Numeric data without currency

**Use Currency Cell for:**
- Prices and costs
- Financial amounts
- Revenue/payment data

**Use Status Cell for:**
- Job status
- Entity state
- Workflow stages
- Operational status

**Use Action Cell for:**
- Primary row actions
- CTAs (View, Edit, Delete)
- Quick actions

**Use Namegroup Cell for:**
- User identification
- Assigned personnel
- Customer names with avatars

**Use Type8 Cell for:**
- Secondary actions
- Alternative button styles

## Best Practices

### Content Guidelines âœ“
1. **Consistent Types:** Use same cell type for same column
2. **Appropriate Format:** Numbers right-aligned, text left-aligned
3. **Truncation:** Design for ellipsis on long content
4. **Status Semantics:** Use appropriate status intents
5. **Action Clarity:** Clear, brief button labels

### Visual Guidelines âœ“
1. **72px Height:** Standard row height for all cells
2. **Adequate Padding:** 16px horizontal minimum
3. **Alignment:** Follow type conventions
4. **Overflow:** Handle gracefully with ellipsis
5. **Status Visibility:** Pills stand out in cell

### Interaction Guidelines âœ“
1. **Read-Only Default:** Most cells are display-only
2. **Action Buttons:** Clear affordance for clickable cells
3. **Namegroup Links:** Can be clickable for user profiles
4. **Status Info:** Consider tooltips for status definitions
5. **Keyboard Access:** Interactive cells must be keyboard accessible

---

# Accessibility

## ARIA Attributes

```tsx
// Text cell
<td role="cell">
  <Cell type="Text" content={data.name} />
</td>

// Number cell
<td role="cell">
  <Cell type="Number" value={data.count} />
</td>

// Currency cell with aria-label for screen readers
<td role="cell" aria-label={`Price: ${formatCurrency(data.price)}`}>
  <Cell type="Currency" value={data.price} currency="Â£" />
</td>

// Status cell
<td role="cell">
  <span role="status" aria-label={`Status: ${data.status}`}>
    <Cell type="Status">
      <StatusPill status={data.status} />
    </Cell>
  </span>
</td>

// Action cell
<td role="cell">
  <Cell type="Action">
    <button onClick={handleView} aria-label={`View ${data.name}`}>
      View
    </button>
  </Cell>
</td>

// Namegroup cell (clickable)
<td role="cell">
  <Cell type="Namegroup">
    <button
      onClick={() => viewUser(data.userId)}
      aria-label={`View profile for ${data.name}`}
    >
      <NameGroup name={data.name} avatar={data.avatar} />
    </button>
  </Cell>
</td>
```

## Screen Reader Considerations

- Number cells should be announced as numbers, not digit-by-digit
- Currency cells should include currency symbol in announcement
- Status cells should announce the status clearly
- Namegroup cells should announce the name, not describe the avatar
- Action cells should have clear button labels

---

# Advanced Patterns

## Responsive Cell Content

```tsx
const ResponsiveCell = ({ type, content, mobile }) => {
  if (mobile && type === "Text 2 lines") {
    // On mobile, allow more lines or truncate differently
    return <Cell type="Text" content={content} />;
  }
  
  return <Cell type={type} content={content} />;
};
```

## Conditional Cell Rendering

```tsx
const ConditionalCell = ({ value, threshold }) => {
  if (value > threshold) {
    return (
      <Cell type="Number">
        <span className="highlight-high">{value}</span>
      </Cell>
    );
  }
  
  return <Cell type="Number" value={value} />;
};
```

## Cell with Tooltip

```tsx
const CellWithTooltip = ({ content, tooltip }) => {
  return (
    <Tooltip content={tooltip} position="top">
      <Cell type="Text" content={content} />
    </Tooltip>
  );
};
```

## Editable Cell

```tsx
const EditableCell = ({ value, onSave, editable }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  if (isEditing) {
    return (
      <td>
        <input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={() => {
            onSave(editValue);
            setIsEditing(false);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSave(editValue);
              setIsEditing(false);
            }
            if (e.key === 'Escape') {
              setEditValue(value);
              setIsEditing(false);
            }
          }}
          autoFocus
        />
      </td>
    );
  }

  return (
    <td onClick={() => editable && setIsEditing(true)}>
      <Cell type="Text" content={value} />
    </td>
  );
};
```

---

# Testing Checklist

## Visual Testing
- [ ] Text: 18px, left-aligned, truncates with ellipsis
- [ ] Text 2 lines: Max 2 lines, left-aligned
- [ ] Number: 18px, right-aligned, comma separators
- [ ] Currency: 18px, right-aligned, currency symbol
- [ ] Status: Status pill renders correctly
- [ ] Action: Button renders correctly
- [ ] Namegroup: Avatar 40Ã—40px, name 18px, 12px gap
- [ ] All cells: 72px height
- [ ] Light mode: Dark text
- [ ] Dark mode: White text

## Functional Testing
- [ ] Text displays correctly
- [ ] Long text truncates with ellipsis
- [ ] Numbers format with commas
- [ ] Currency displays with symbol
- [ ] Status pill shows correct status
- [ ] Action button is clickable
- [ ] Namegroup displays avatar and name
- [ ] All cell types align correctly

## Accessibility Testing
- [ ] Cells have role="cell"
- [ ] Text content is readable by screen readers
- [ ] Numbers announced correctly
- [ ] Currency includes symbol in announcement
- [ ] Status has aria-label
- [ ] Action buttons have aria-label
- [ ] Namegroup clickable has aria-label
- [ ] Keyboard accessible when interactive

## Mode Testing
- [ ] Text color adapts to mode
- [ ] Status pills adapt per component tokens
- [ ] Buttons adapt per component tokens
- [ ] All content readable in both modes
- [ ] Smooth transitions between modes

---

# Related Components

- **Status Pill** - Used in Status cell type
- **Button** - Used in Action and Type8 cells
- **Name Group** - Used in Namegroup cell type
- **Avatar** - Part of Namegroup cell
- **Tooltip** - Can wrap cells for additional info

---

# Common Patterns

## Complete Table Row

```tsx
const JobRow = ({ job }) => {
  return (
    <tr>
      <Cell type="Namegroup">
        <NameGroup name={job.customerName} avatar={job.avatar} />
      </Cell>
      <Cell type="Status">
        <ConnectStatusPill status={job.status} />
      </Cell>
      <Cell type="Text">
        <JobTypePill jobType={job.type} />
      </Cell>
      <Cell type="Text" content={job.postcode} />
      <Cell type="Text" content={job.enteredDate} />
      <Cell type="Text" content={job.leadId} />
      <Cell type="Text" content={job.assignedTo} />
      <Cell type="Action">
        <Button type="tertiary" size="small" onClick={() => viewJob(job.id)}>
          View
        </Button>
      </Cell>
    </tr>
  );
};
```

## Dynamic Cell Type

```tsx
const DynamicCell = ({ columnType, value }) => {
  switch (columnType) {
    case 'text':
      return <Cell type="Text" content={value} />;
    case 'number':
      return <Cell type="Number" value={value} />;
    case 'currency':
      return <Cell type="Currency" value={value} currency="Â£" />;
    case 'status':
      return (
        <Cell type="Status">
          <StatusPill status={value} />
        </Cell>
      );
    default:
      return <Cell type="Text" content={String(value)} />;
  }
};
```

---

# Version History

- **v1.0** - Initial cell system with 8 cell types

---

*Component Documentation - Ohme Design System*  
*Table System - Cell Components*  
*Last Updated: January 2025*
