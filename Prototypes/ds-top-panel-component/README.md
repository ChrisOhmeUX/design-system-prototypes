# Top Panel Component Documentation

## Overview

The Top Panel component displays detailed record information at the top of detail pages. It combines contact information, configuration details, and action controls in a flexible layout that adapts across platforms and devices.

**Component Type:** Functional Component System  
**Category:** Page Layout / Information Display  
**Token Integration:** Yes - uses surface, content, border, button, and pill tokens  
**Variants:** 12 configurations (mobile Ã— double config Ã— single Ã— platforms)

## Configuration Matrix

| Mobile | Double Config | Single | Layout | Use Case |
|--------|---------------|--------|--------|----------|
| âœ— | âœ— | âœ— | Contacts + Config Panel | Standard detail page |
| âœ— | âœ“ | âœ— | Contacts + 2 Config Panels | Complex records with many fields |
| âœ— | âœ“ | âœ“ | Half-width variant | Side-by-side detail views |
| âœ“ | âœ— | âœ— | Stacked: Contacts â†’ Config | Mobile detail page |
| âœ“ | âœ“ | âœ— | Stacked: Contacts â†’ 2 Configs | Mobile complex records |

## Top Panel Components

### 1. Contacts Section (Left/Top)

White card containing contact information with icons.

**Width:** 369px fixed  
**Padding:** 0px H, 12px V  
**Background:** White (light) / dark blue (dark)  
**Corner Radius:** 6px  
**Shadow:** Optional card elevation

**See:** **Contacts_System_Documentation.md** for complete contact type specifications

**Contact Types (5):**
1. **Name** - Person icon + name text
2. **Address** - Location icon + multi-line address + "View on Google maps" link
3. **Email** - Mail icon + email + copy icon
4. **Phone** - Phone icon + number + copy icon
5. **Reference** - Hash icon + ID + copy icon

**Gap:** 24px between contact items

---

### 2. Vertical Divider

Thin grey line separating sections (desktop only).

**Width:** 1px  
**Color:** grey200 #E5E8E8  
**Height:** Matches container height  
**Position:** Between contacts and config panel

---

### 3. Config Panel (Right/Bottom)

Flexible panel displaying configuration rows with labels and values.

**Width:** Flex-grow (fills remaining space)  
**Layout:** Vertical stack of config rows

**See:** **Config_Panel_System_Documentation.md** for complete config option specifications

**Config Row Structure:**
- Label (left): 14px UPPERCASE
- Value (right): Various types (text, button, pill, link)
- Border: Dashed bottom, grey200
- Padding: 0px H, 16px V

**Value Types (14 config option types):**
- **Text:** Plain text display
- **Button:** Primary or secondary buttons
- **Pill:** Action or status pills
- **Link:** Clickable link with icon
- **Switch:** Toggle controls
- **Multi-action:** Multiple buttons with gap
- **Editable variants:** Text/pill with edit icons

---

## Design Specifications

### Desktop Single Config (1584px width)

| Section | Width | Padding | Gap |
|---------|-------|---------|-----|
| **Container** | 1584px | 24px H, 0px V | 32px sections |
| **Contacts** | 369px fixed | 0px H, 12px V | 24px items |
| **Divider** | 1px | - | - |
| **Config Panel** | Flex-grow (~1151px) | - | 0px rows (borders) |

**Total Layout:** [369px Contacts] [1px Divider] [~1151px Config] [24px padding each side]

---

### Desktop Double Config (1584px width)

| Section | Width | Padding | Gap |
|---------|-------|---------|-----|
| **Container** | 1584px | 24px H, 0px V | 32px sections |
| **Config Panel 1** | Flex-grow (~760px) | - | 0px rows |
| **Divider** | 1px | - | - |
| **Config Panel 2** | Flex-grow (~760px) | - | 0px rows |

**Total Layout:** [~760px Config 1] [1px Divider] [~760px Config 2] [24px padding each side]

---

### Desktop Single (Half-Width) (792px width)

Same as Desktop Single Config but container constrained to half-width for side-by-side layouts.

---

### Mobile Layout (320px width)

| Section | Width | Padding | Gap |
|---------|-------|---------|-----|
| **Container** | 320px | 16px H, 0px V | 32px sections |
| **Contacts** | 369px (overflow) | 0px H, 12px V | 24px items |
| **Config Panel(s)** | Full width | - | 12px label-to-value |

**Stacked Vertical:** Contacts on top, Config below

---

---

## Config Panel Row Types

**See:** **Config_Panel_System_Documentation.md** for complete config option type specifications (14 types)

**Common Row Types in Top Panel:**

### Button Row

**Structure:**
- Label: "HOME SURVEY" (14px UPPERCASE)
- Value: Secondary button with icon "View home survey"

**Desktop:** Horizontal (label left, button right), 16px padding V  
**Mobile:** Vertical stack, 12px gap, full width button

---

### Text Row

**Structure:**
- Label: "ISSUE REPORTED" (14px UPPERCASE)
- Value: Plain text "CT Clamp - Missing" (18px Regular)

**Alignment:** Label left, text right (desktop)

---

### Button Action Row

**Structure:**
- Label: "FAULT FINDING REPORT" (14px UPPERCASE)
- Value: Primary button with icon "View report"

**Desktop:** Horizontal  
**Mobile:** Vertical, full width button

---

### Link Row (Scheduled Date)

**Structure:**
- Label: "SCHEDULED DATE" (14px UPPERCASE)
- Value: Calendar icon + underlined link "10/03/2024 (1 hours)" (18px Medium, teal)

**Icon:** 24Ã—24px calendar  
**Gap:** 8px icon-to-link

---

### Pill Row (Assignment)

**Structure:**
- Label: "ASSIGNED TO" (14px UPPERCASE)
- Value: Action intent pill "Sam Brown +2"

**Pill Colors:**
- Surface: `pill/intent/action/surface` â†’ lightcyan #C0FFF6 (light) / darkcyan #003A37 (dark)
- Content: `pill/intent/action/content` â†’ darkcyan #003A37 (light) / lightcyan #C0FFF6 (dark)

---

## Complete Color System

### Contacts Card

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |

---

### Contact Icons

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Fill** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

---

### Contact Text

**Standard Text:**

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Color** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** Roobert Regular, 18px / 24px, 0.2px letter-spacing

**Link Text (Email, Phone, Maps):**

| Property | Token Reference | Hex Value (Constant) |
|----------|----------------|---------------------|
| **Color** | `color/content/link-2` | #0EBA9E (teal, both modes) |

**Typography:** Roobert Medium, 18px / 24px, 0.2px letter-spacing

**Copy Icon:**
- Color: teal #0EBA9E (constant)
- Size: 16Ã—16px

---

### Config Panel

**Background:** Transparent

**Row Border:**

| Property | Token Reference | Hex Value (Constant) |
|----------|----------------|---------------------|
| **Border** | `color/border/disabled` | #E5E8E8 (grey, both modes) |
| **Style** | Dashed | - |
| **Width** | 1px bottom | - |

---

### Config Row Label

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Color** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** Roobert Regular, 14px / 21px (desktop) or 14px / 16px (mobile), 1px letter-spacing (desktop) or 0.1px (mobile), UPPERCASE

---

### Config Row Values

**Text Value:**
- Color: `content/primary`
- Typography: Roobert Regular, 18px / 24px

**Link Value:**
- Color: `content/link-2` â†’ teal #0EBA9E
- Typography: Roobert Medium, 18px / 24px
- Decoration: Underline

**Button:** Uses standard Button component tokens

**Pill:** Uses Action intent pill tokens
- Surface: lightcyan #C0FFF6 (light) / darkcyan #003A37 (dark)
- Content: darkcyan #003A37 (light) / lightcyan #C0FFF6 (dark)

---

### Vertical Divider

| Property | Token Reference | Hex Value |
|----------|----------------|-----------|
| **Stroke** | `color/border/subtle` | #E5E8E8 |
| **Width** | 1px | - |

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Top Panel Container */
--top-panel-width-desktop: 1584px;
--top-panel-width-mobile: 320px;
--top-panel-padding-inline-desktop: 24px;
--top-panel-padding-inline-mobile: 16px;
--top-panel-section-gap: 32px;

/* Contacts Card */
--contacts-card-width: 369px;
--contacts-card-padding-inline: 0px;
--contacts-card-padding-stack: 12px;
--contacts-card-radius: 6px;
--contacts-card-surface: var(--color-surface-canvas);
--contacts-item-gap: 24px;
--contacts-icon-gap: 12px;

/* Contact Icons */
--contact-icon-size: 16px;
--contact-icon-color: var(--color-content-primary);

/* Contact Text */
--contact-text-font-family: var(--typography-font-family-Roobert);
--contact-text-font-size: var(--typography-font-size-18);
--contact-text-line-height: var(--typography-line-height-24);
--contact-text-letter-spacing: var(--typography-letter-spacing-0dot2);
--contact-text-color: var(--color-content-primary);

/* Contact Links */
--contact-link-font-weight: var(--typography-font-weight-medium);
--contact-link-color: var(--color-content-link-2);

/* Contact Copy Icon */
--contact-copy-size: 16px;
--contact-copy-color: var(--color-content-link-2);
--contact-copy-gap: 4px;

/* Vertical Divider */
--top-panel-divider-width: 1px;
--top-panel-divider-color: var(--color-border-subtle);

/* Config Panel */
--config-panel-row-padding-stack: 16px;
--config-panel-row-border: 1px dashed var(--color-border-disabled);

/* Config Row Label */
--config-label-font-family: var(--typography-font-family-Roobert);
--config-label-font-size: var(--typography-font-size-14);
--config-label-font-weight: var(--typography-font-weight-regular);
--config-label-line-height-desktop: 21px;
--config-label-line-height-mobile: 16px;
--config-label-letter-spacing-desktop: 1px;
--config-label-letter-spacing-mobile: 0.1px;
--config-label-text-transform: uppercase;
--config-label-color: var(--color-content-primary);

/* Config Row Value */
--config-value-font-size: var(--typography-font-size-18);
--config-value-line-height: var(--typography-line-height-24);
--config-value-letter-spacing: var(--typography-letter-spacing-0dot2);
--config-value-color: var(--color-content-primary);

/* Config Row Gap (Mobile) */
--config-row-gap-mobile: 12px;
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/link-2` | teal300 | teal300 | #0EBA9E | #0EBA9E |
| `color/border/subtle` | grey200 | grey800 | #E5E8E8 | #3D4A4E |
| `color/border/disabled` | grey200 | grey200 | #E5E8E8 | #E5E8E8 |
| `pill/intent/action/surface` | lightcyan | darkcyan | #C0FFF6 | #003A37 |
| `pill/intent/action/content` | darkcyan | lightcyan | #003A37 | #C0FFF6 |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/white` | #FFFFFF | Contacts card surface (light) |
| `color/brand/ohmedarkblue` | #032536 | Contacts card surface (dark), text (light) |
| `color/brand/teal300` | #0EBA9E | Links, copy icons |
| `color/tertiary/lightcyan` | #C0FFF6 | Action pill surface (light) |
| `color/tertiary/darkcyan` | #003A37 | Action pill surface (dark) |
| `color/secondary/grey200` | #E5E8E8 | Borders, divider |
| `Values/space/space-6x` | 24px | Contact gaps, padding |
| `Values/space/space-8x` | 32px | Section gap |
| `Values/space/space-3x` | 12px | Icon gaps, card padding |
| `Values/space/space-4x` | 16px | Config row padding |
| `Values/corner radii/radius-1halfx` | 6px | Card radius |

---

## Anatomy

```
Top Panel Component
â””â”€â”€ Container (1584px desktop, 320px mobile)
    â”œâ”€â”€ Padding: 24px H desktop, 16px H mobile
    â””â”€â”€ Layout (32px gap between sections)
        â”œâ”€â”€ Contacts Section (369px Ã— auto)
        â”‚   â”œâ”€â”€ Surface: surface/canvas (white card)
        â”‚   â”œâ”€â”€ Padding: 0px H, 12px V
        â”‚   â”œâ”€â”€ Radius: 6px
        â”‚   â””â”€â”€ Contact Items (24px gap)
        â”‚       â”œâ”€â”€ Name (icon + text)
        â”‚       â”œâ”€â”€ Address (icon + multi-line + link)
        â”‚       â”œâ”€â”€ Email (icon + email + copy)
        â”‚       â”œâ”€â”€ Phone (icon + number + copy)
        â”‚       â””â”€â”€ Reference (icon + ID + copy)
        â”‚
        â”œâ”€â”€ Vertical Divider (1px, desktop only)
        â”‚   â””â”€â”€ Color: border/subtle
        â”‚
        â””â”€â”€ Config Panel (flex-grow)
            â””â”€â”€ Config Rows (0px gap, dashed borders)
                â”œâ”€â”€ Row Structure (16px padding V)
                â”‚   â”œâ”€â”€ Label (left, 14px UPPERCASE)
                â”‚   â””â”€â”€ Value (right)
                â”‚       â”œâ”€â”€ Text (18px Regular)
                â”‚       â”œâ”€â”€ Button (Secondary/Primary)
                â”‚       â”œâ”€â”€ Pill (Action intent)
                â”‚       â””â”€â”€ Link (18px Medium, teal, underlined)
                â”‚
                â””â”€â”€ Mobile: Stacked (12px gap label-to-value)
```

---

## Component Properties

```typescript
type TopPanelProps = {
  className?: string;
  mobile?: boolean;
  doubleConfig?: boolean;
  single?: boolean;
  platform?: "Shared parking" | "Connect" | "Dealer portal" | "Hub";
  
  // Contacts
  contacts?: {
    name?: string;
    address?: {
      line1: string;
      line2: string;
      mapsUrl?: string;
    };
    email?: string;
    phone?: string;
    reference?: string;
  };
  
  // Config rows
  configRows?: ConfigRow[];
  configRows2?: ConfigRow[]; // For double config
};

type ConfigRow = {
  id: string;
  label: string;
  type: "text" | "button" | "pill" | "link" | "multi-action";
  value: ConfigRowValue;
};

type ConfigRowValue =
  | { type: "text"; content: string }
  | { type: "button"; label: string; icon?: React.ReactNode; onClick: () => void; buttonType?: "Primary" | "Secondary" }
  | { type: "pill"; label: string; intent?: "action" | "status" }
  | { type: "link"; text: string; icon?: React.ReactNode; href: string }
  | { type: "multi-action"; actions: Array<{ label: string; onClick: () => void }> };
```

### Property: `doubleConfig` (boolean, optional)
Whether to display two config panels side by side instead of contacts + config.

**Default:** `false`  
**When true:** Two config panels with divider between them

---

### Property: `single` (boolean, optional)
Whether to use half-width container (792px instead of 1584px).

**Default:** `false`  
**Use Case:** Side-by-side detail views

---

## Implementation Examples

### Basic Top Panel with Contacts

```tsx
import TopPanel from '@/components/functional/TopPanel';

<TopPanel
  platform="Shared parking"
  mobile={false}
  contacts={{
    name: "Lily Sanders",
    address: {
      line1: "1875 Pogteh Center,",
      line2: "London, SW19 7HX",
      mapsUrl: "https://maps.google.com/?q=..."
    },
    email: "lilysanders@gmail.com",
    phone: "+44 7645 353 870",
    reference: "BCOOQDO47N"
  }}
  configRows={[
    {
      id: "home-survey",
      label: "Home survey",
      type: "button",
      value: {
        type: "button",
        label: "View home survey",
        icon: <DocumentIcon />,
        onClick: () => viewHomeSurvey(),
        buttonType: "Secondary"
      }
    },
    {
      id: "issue",
      label: "Issue reported",
      type: "text",
      value: {
        type: "text",
        content: "CT Clamp - Missing"
      }
    },
    {
      id: "fault-report",
      label: "Fault finding report",
      type: "button",
      value: {
        type: "button",
        label: "View report",
        icon: <EyeIcon />,
        onClick: () => viewReport(),
        buttonType: "Primary"
      }
    },
    {
      id: "scheduled",
      label: "Scheduled Date",
      type: "link",
      value: {
        type: "link",
        text: "10/03/2024 (1 hours)",
        icon: <CalendarIcon />,
        href: "#schedule"
      }
    },
    {
      id: "assigned",
      label: "Assigned to",
      type: "pill",
      value: {
        type: "pill",
        label: "Sam Brown +2",
        intent: "action"
      }
    }
  ]}
/>
```

### Double Config Panel

```tsx
<TopPanel
  platform="Shared parking"
  mobile={false}
  doubleConfig={true}
  configRows={[
    // Left panel config rows
    { id: "survey", label: "Home survey", type: "button", value: {...} },
    { id: "issue", label: "Issue reported", type: "text", value: {...} },
    // ... more rows
  ]}
  configRows2={[
    // Right panel config rows
    { id: "assigned1", label: "Assigned to", type: "pill", value: {...} },
    { id: "assigned2", label: "Assigned to", type: "pill", value: {...} },
    // ... more rows
  ]}
/>
```

### Mobile Top Panel

```tsx
<TopPanel
  platform="Shared parking"
  mobile={true}
  contacts={{
    name: "Lily Sanders",
    address: { line1: "1875 Pogteh Center,", line2: "London, SW19 7HX" },
    email: "lilysanders@gmail.com",
    phone: "+44 7645 353 870",
    reference: "BCOOQDO47N"
  }}
  configRows={configRowsData}
/>
```

### Half-Width Variant (Side-by-Side)

```tsx
<div className="side-by-side-details">
  <TopPanel
    platform="Connect"
    single={true}
    mobile={false}
    contacts={customerContacts}
    configRows={customerConfig}
  />
  
  <TopPanel
    platform="Connect"
    single={true}
    mobile={false}
    contacts={installationContacts}
    configRows={installationConfig}
  />
</div>
```

---

# CSS Implementation

## Top Panel Container

```css
.topPanel {
  display: flex;
  gap: var(--top-panel-section-gap);
}

.topPanel--desktop {
  width: var(--top-panel-width-desktop);
  padding: 0 var(--top-panel-padding-inline-desktop);
  flex-direction: row;
}

.topPanel--mobile {
  width: var(--top-panel-width-mobile);
  padding: 0 var(--top-panel-padding-inline-mobile);
  flex-direction: column;
}

.topPanel--single {
  width: 792px; /* Half of 1584px */
}
```

## Contacts Card

```css
.topPanel__contacts {
  width: var(--contacts-card-width);
  padding: var(--contacts-card-padding-stack) 
           var(--contacts-card-padding-inline);
  background: var(--contacts-card-surface);
  border-radius: var(--contacts-card-radius);
  display: flex;
  flex-direction: column;
  gap: var(--contacts-item-gap);
}

/* Contact item */
.contactItem {
  display: flex;
  gap: var(--contacts-icon-gap);
  align-items: flex-start;
}

.contactItem--alignCenter {
  align-items: center;
}

.contactItem__icon {
  width: var(--contact-icon-size);
  height: var(--contact-icon-size);
  flex-shrink: 0;
  fill: var(--contact-icon-color);
}

.contactItem__content {
  flex: 1;
  font-family: var(--contact-text-font-family);
  font-size: var(--contact-text-font-size);
  line-height: var(--contact-text-line-height);
  letter-spacing: var(--contact-text-letter-spacing);
  color: var(--contact-text-color);
}

.contactItem__link {
  font-weight: var(--contact-link-font-weight);
  color: var(--contact-link-color);
  text-decoration: underline;
  cursor: pointer;
}

.contactItem__copy {
  width: var(--contact-copy-size);
  height: var(--contact-copy-size);
  fill: var(--contact-copy-color);
  cursor: pointer;
  margin-left: var(--contact-copy-gap);
}
```

## Vertical Divider

```css
.topPanel__divider {
  width: var(--top-panel-divider-width);
  background: var(--top-panel-divider-color);
  align-self: stretch;
}

.topPanel--mobile .topPanel__divider {
  display: none; /* Hidden on mobile */
}
```

## Config Panel

```css
.topPanel__configPanel {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.configRow {
  display: flex;
  justify-content: space-between;
  padding: var(--config-panel-row-padding-stack) 0;
  border-bottom: var(--config-panel-row-border);
}

.configRow--desktop {
  flex-direction: row;
  align-items: center;
}

.configRow--mobile {
  flex-direction: column;
  gap: var(--config-row-gap-mobile);
  align-items: flex-start;
}

.configRow__label {
  font-family: var(--config-label-font-family);
  font-size: var(--config-label-font-size);
  font-weight: var(--config-label-font-weight);
  letter-spacing: var(--config-label-letter-spacing-desktop);
  line-height: var(--config-label-line-height-desktop);
  text-transform: var(--config-label-text-transform);
  color: var(--config-label-color);
}

.configRow--mobile .configRow__label {
  letter-spacing: var(--config-label-letter-spacing-mobile);
  line-height: var(--config-label-line-height-mobile);
}

.configRow__value {
  font-size: var(--config-value-font-size);
  line-height: var(--config-value-line-height);
  letter-spacing: var(--config-value-letter-spacing);
  color: var(--config-value-color);
}

.configRow--mobile .configRow__value--button {
  width: 100%;
}
```

## CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-surface-canvas: #FFFFFF;
  --color-content-primary: #032536;
  --color-content-link-2: #0EBA9E;
  --color-border-subtle: #E5E8E8;
  --color-border-disabled: #E5E8E8;
  --pill-intent-action-surface: #C0FFF6;
  --pill-intent-action-content: #003A37;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-surface-canvas: #032536;
  --color-content-primary: #FFFFFF;
  /* Links remain constant */
  --pill-intent-action-surface: #003A37;
  --pill-intent-action-content: #C0FFF6;
}
```

---

# Usage Guidelines

## When to Use Top Panel

**Location Detail Pages:**
- Show location contact info
- Display configuration details
- Show assigned personnel
- Link to related documents

**Job Detail Pages:**
- Customer contact information
- Job configuration
- Scheduled date/time
- Assignment details

**User Detail Pages:**
- User contact info
- Account settings
- Company affiliation
- Status information

**Entity Detail Pages:**
- Any record with contact + config info
- Multi-section information display
- Action-heavy detail pages

## Layout Selection Guide

**Use Single Config When:**
- Standard detail page
- Contacts + configuration needed
- Typical information density

**Use Double Config When:**
- No contact info needed
- Many configuration fields
- Two logical groupings
- Complex records

**Use Single (Half-Width) When:**
- Comparing two records
- Side-by-side detail views
- Split-screen layouts

**Use Mobile When:**
- Viewport < 768px
- Touch interface
- Vertical scroll preferred

## Best Practices

### Content Guidelines âœ“
1. **Contact Completeness:** Include all available contact types
2. **Config Grouping:** Group related fields together
3. **Action Clarity:** Clear button/link labels
4. **Reference Format:** Standard ID format
5. **Link Context:** Descriptive link text

### Visual Guidelines âœ“
1. **Contacts Card:** White background stands out
2. **Vertical Divider:** Subtle grey separation
3. **Dashed Borders:** Light row separators
4. **Icon Consistency:** 16px contact icons
5. **Button Sizing:** Standard 48px desktop, 40px mobile

### Interaction Guidelines âœ“
1. **Copy Icons:** Click to copy to clipboard
2. **Links:** External links open new tab
3. **Buttons:** Primary actions prominent
4. **Pills:** Show assignment/status
5. **Mobile Buttons:** Full width for easy tapping

---

# Accessibility

## ARIA Attributes

```tsx
<div className="top-panel" role="region" aria-label="Record details">
  {/* Contacts section */}
  <section
    className="contacts"
    aria-labelledby="contacts-heading"
  >
    <h2 id="contacts-heading" className="sr-only">
      Contact Information
    </h2>
    
    {/* Name */}
    <div className="contact-item">
      <PersonIcon aria-hidden="true" />
      <span>{name}</span>
    </div>
    
    {/* Email with copy */}
    <div className="contact-item">
      <MailIcon aria-hidden="true" />
      <a href={`mailto:${email}`}>{email}</a>
      <button
        onClick={() => copyToClipboard(email)}
        aria-label={`Copy email ${email}`}
      >
        <CopyIcon aria-hidden="true" />
      </button>
    </div>
    
    {/* Phone with copy */}
    <div className="contact-item">
      <PhoneIcon aria-hidden="true" />
      <a href={`tel:${phone}`}>{phone}</a>
      <button
        onClick={() => copyToClipboard(phone)}
        aria-label={`Copy phone ${phone}`}
      >
        <CopyIcon aria-hidden="true" />
      </button>
    </div>
    
    {/* Address with maps link */}
    <div className="contact-item">
      <LocationIcon aria-hidden="true" />
      <address>
        {address.line1}<br />
        {address.line2}<br />
        <a
          href={address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google maps
        </a>
      </address>
    </div>
    
    {/* Reference with copy */}
    <div className="contact-item">
      <HashIcon aria-hidden="true" />
      <span>{reference}</span>
      <button
        onClick={() => copyToClipboard(reference)}
        aria-label={`Copy reference ${reference}`}
      >
        <CopyIcon aria-hidden="true" />
      </button>
    </div>
  </section>

  {/* Config panel */}
  <section
    className="config-panel"
    aria-labelledby="config-heading"
  >
    <h2 id="config-heading" className="sr-only">
      Configuration Details
    </h2>
    
    <dl>
      {configRows.map(row => (
        <div key={row.id} className="config-row">
          <dt>{row.label}</dt>
          <dd>
            {row.type === 'button' && (
              <button onClick={row.value.onClick}>
                {row.value.label}
              </button>
            )}
            {row.type === 'text' && (
              <span>{row.value.content}</span>
            )}
            {/* ... other types */}
          </dd>
        </div>
      ))}
    </dl>
  </section>
</div>
```

---

# Advanced Patterns

## Top Panel with Copy to Clipboard

```tsx
const TopPanelWithCopy = ({ contacts }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      
      setTimeout(() => {
        setCopiedField(null);
      }, 2000);
      
      showToast(`${field} copied to clipboard`);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <TopPanel
      contacts={contacts}
      configRows={configRows}
      onCopy={copyToClipboard}
      copiedField={copiedField}
    />
  );
};
```

## Dynamic Config Rows

```tsx
const DynamicTopPanel = ({ record, permissions }) => {
  const buildConfigRows = () => {
    const rows: ConfigRow[] = [];
    
    if (record.homeSurveyUrl && permissions.canViewSurvey) {
      rows.push({
        id: 'home-survey',
        label: 'Home survey',
        type: 'button',
        value: {
          type: 'button',
          label: 'View home survey',
          onClick: () => window.open(record.homeSurveyUrl),
          buttonType: 'Secondary'
        }
      });
    }
    
    if (record.issue) {
      rows.push({
        id: 'issue',
        label: 'Issue reported',
        type: 'text',
        value: { type: 'text', content: record.issue }
      });
    }
    
    if (record.scheduledDate) {
      rows.push({
        id: 'scheduled',
        label: 'Scheduled Date',
        type: 'link',
        value: {
          type: 'link',
          text: formatScheduledDate(record.scheduledDate),
          icon: <CalendarIcon />,
          href: `#schedule-${record.id}`
        }
      });
    }
    
    if (record.assignedTo) {
      rows.push({
        id: 'assigned',
        label: 'Assigned to',
        type: 'pill',
        value: {
          type: 'pill',
          label: record.assignedTo,
          intent: 'action'
        }
      });
    }
    
    return rows;
  };

  return (
    <TopPanel
      platform={record.platform}
      contacts={record.contacts}
      configRows={buildConfigRows()}
    />
  );
};
```

## Responsive Top Panel

```tsx
const ResponsiveTopPanel = ({ data }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <TopPanel
      mobile={isMobile}
      platform={data.platform}
      contacts={data.contacts}
      configRows={data.configRows}
    />
  );
};
```

---

# Testing Checklist

## Visual Testing - Desktop
- [ ] Container: 1584px width (or 792px for single)
- [ ] Padding: 24px horizontal
- [ ] Contacts card: 369px width
- [ ] Contacts card: White background, 6px radius
- [ ] Contacts padding: 12px vertical
- [ ] Contact items: 24px gap
- [ ] Divider: 1px grey, full height
- [ ] Config panel: Flex-grow width
- [ ] Config rows: 16px vertical padding
- [ ] Config borders: Dashed bottom, grey
- [ ] Section gap: 32px

## Visual Testing - Mobile
- [ ] Container: 320px width
- [ ] Padding: 16px horizontal
- [ ] Layout: Vertical stack
- [ ] Contacts: Full width (369px may overflow)
- [ ] Config rows: Stacked label/value, 12px gap
- [ ] Config buttons: Full width
- [ ] Section gap: 32px vertical

## Visual Testing - Contact Types
- [ ] Icons: 16Ã—16px, dark blue/white
- [ ] Text: 18px / 24px
- [ ] Email/phone: Teal color, Medium weight
- [ ] Copy icons: 16Ã—16px teal, 4-6px gap
- [ ] Address: Multi-line, maps link teal
- [ ] Reference: Regular weight, copy icon

## Visual Testing - Config Rows
- [ ] Labels: 14px UPPERCASE, 21px/16px line height
- [ ] Desktop labels: 1px letter spacing
- [ ] Mobile labels: 0.1px letter spacing
- [ ] Values: 18px, various types
- [ ] Buttons: Standard component styling
- [ ] Pills: Action intent (lightcyan/darkcyan)
- [ ] Links: Teal, underlined, calendar icon
- [ ] Borders: Dashed, grey, bottom only

## Visual Testing - Double Config
- [ ] Two config panels side by side
- [ ] Divider: 1px grey between panels
- [ ] Equal width panels (flex-grow)
- [ ] No contacts section

## Functional Testing
- [ ] Copy icons copy to clipboard
- [ ] Email/phone links work
- [ ] Maps link opens Google Maps
- [ ] Config buttons trigger actions
- [ ] Config links navigate correctly
- [ ] Mobile stacks correctly
- [ ] Responsive layout switches
- [ ] Double config displays correctly

## Accessibility Testing
- [ ] Contacts section has heading
- [ ] Config section has heading
- [ ] Icons are aria-hidden
- [ ] Copy buttons have aria-label
- [ ] Email/phone use mailto:/tel: protocols
- [ ] Address uses <address> element
- [ ] Config rows use dl/dt/dd semantics
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible

## Mode Testing
- [ ] Contacts card surface adapts
- [ ] Contact text adapts
- [ ] Icons adapt
- [ ] Links remain teal (constant)
- [ ] Copy icons remain teal (constant)
- [ ] Config labels adapt
- [ ] Config values adapt
- [ ] Borders visible in both modes
- [ ] Pills adapt per intent tokens
- [ ] Buttons adapt per component tokens

---

# Related Components

### System Components:
- **Contacts System** - See Contacts_System_Documentation.md
- **Config Panel System** - See Config_Panel_System_Documentation.md

### Composed From:
- **Button** - Primary and secondary actions in config rows
- **Pill** - Action intent pills for assignments
- **Icon** - Contact icons, action icons, copy icons

### Works With:
- **Title Group** - Typically above top panel
- **Status Bar** - May appear above or below
- **Page Content** - Detail sections below panel

---

# Common Patterns

## Customer Detail Page

```tsx
const CustomerDetailPage = ({ customer }) => {
  return (
    <div className="page-container">
      <TitleGroup title={customer.name} platform="Connect" />
      
      <TopPanel
        platform="Connect"
        mobile={isMobile}
        contacts={{
          name: customer.name,
          address: customer.address,
          email: customer.email,
          phone: customer.phone,
          reference: customer.customerId
        }}
        configRows={[
          {
            id: 'account-type',
            label: 'Account type',
            type: 'text',
            value: { type: 'text', content: customer.accountType }
          },
          {
            id: 'joined',
            label: 'Joined date',
            type: 'text',
            value: { type: 'text', content: formatDate(customer.joinedDate) }
          },
          {
            id: 'status',
            label: 'Status',
            type: 'pill',
            value: { type: 'pill', label: customer.status, intent: 'action' }
          }
        ]}
      />
      
      <div className="page-content">
        {/* Additional content */}
      </div>
    </div>
  );
};
```

## Installation Detail with Documents

```tsx
const InstallationDetail = ({ installation }) => {
  return (
    <TopPanel
      platform="Shared parking"
      contacts={{
        name: installation.customerName,
        address: installation.installationAddress,
        email: installation.customerEmail,
        phone: installation.customerPhone,
        reference: installation.installationId
      }}
      configRows={[
        {
          id: 'survey',
          label: 'Home survey',
          type: 'button',
          value: {
            type: 'button',
            label: 'View home survey',
            icon: <DocumentIcon />,
            onClick: () => viewDocument(installation.surveyId),
            buttonType: 'Secondary'
          }
        },
        {
          id: 'report',
          label: 'Fault finding report',
          type: 'button',
          value: {
            type: 'button',
            label: 'View report',
            icon: <EyeIcon />,
            onClick: () => viewDocument(installation.reportId),
            buttonType: 'Primary'
          }
        },
        {
          id: 'scheduled',
          label: 'Scheduled Date',
          type: 'link',
          value: {
            type: 'link',
            text: formatSchedule(installation.scheduledDate),
            icon: <CalendarIcon />,
            href: `/calendar/${installation.id}`
          }
        },
        {
          id: 'assigned',
          label: 'Assigned to',
          type: 'pill',
          value: {
            type: 'pill',
            label: installation.assignedTeam,
            intent: 'action'
          }
        }
      ]}
    />
  );
};
```

## Split View with Two Top Panels

```tsx
const SplitDetailView = ({ record1, record2 }) => {
  return (
    <div className="split-view">
      <TopPanel
        platform="Connect"
        single={true}
        contacts={record1.contacts}
        configRows={record1.config}
      />
      
      <TopPanel
        platform="Connect"
        single={true}
        contacts={record2.contacts}
        configRows={record2.config}
      />
    </div>
  );
};
```

---

# Version History

- **v1.0** - Initial top panel with contacts and config sections

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
