# Button Component Documentation

## Overview

Buttons are interactive elements that trigger actions when clicked, providing clear calls-to-action throughout the portal. The Ohme button system offers comprehensive variants to establish visual hierarchy and support diverse use cases.

**Component Type:** Core UI Component  
**Category:** Interactive Controls  
**Token Integration:** Yes - uses Tier 3 button tokens  
**Total Variants:** 108 (3 types Ã— 3 sizes Ã— varying icon configs Ã— 4 states)

## Variant Matrix

| Type | Size | Icon Options | States | Total Variants |
|------|------|--------------|--------|----------------|
| Primary | Large | 4 (None, Left, Right, Icon-only) | 4 | 16 |
| Primary | Medium | 4 (None, Left, Right, Icon-only) | 4 | 16 |
| Primary | Small | 1 (None only) | 4 | 4 |
| Secondary | Large | 4 (None, Left, Right, Icon-only) | 4 | 16 |
| Secondary | Medium | 4 (None, Left, Right, Icon-only) | 4 | 16 |
| Secondary | Small | 1 (None only) | 4 | 4 |
| Tertiary | Large | 4 (None, Left, Right, Icon-only) | 4 | 16 |
| Tertiary | Medium | 4 (None, Left, Right, Icon-only) | 4 | 16 |
| Tertiary | Small | 1 (None only) | 4 | 4 |
| **TOTAL** | **3 sizes** | **Varies** | **4** | **108** |

## Design Specifications

### Size Dimensions

| Size | Height | Padding | Icon Size | Typography | Corner Radius | Icon-only Width |
|------|--------|---------|-----------|------------|---------------|-----------------|
| **Large** | 48px | 8px (all sides) | 24Ã—24px | 18px / 24px | 8px | 48Ã—48px |
| **Medium** | 40px | 8px (all sides) | 24Ã—24px | 18px / 24px | 6px | 40Ã—40px |
| **Small** | 32px | 8px (all sides) | 16Ã—16px | 16px / 24px | 4px | 32Ã—32px |

### Visual Properties
- **Font Family:** Roobert SemiBold
- **Font Weight:** 600
- **Border Width:** 1px (hairline)
- **Gap:** 8px (between icon and text) â†’ `value/spacing/gap/md`
- **Text Alignment:** Center
- **White Space:** No wrap

## Color System - Primary Button

Primary buttons use teal accent colors with dark text that remain constant across light/dark modes.

### Active State

| Property | Tier 3 Token | Ã¢â€ ' Tier 2 | Resolves To | Hex Value | Mode Behavior |
|----------|-------------|----------|-------------|-----------|---------------|
| **Surface** | `button/primary/surface/active` | `interactive/primary/surface` | highlighterteal | #00FFD6 | Constant |
| **Content** | `button/primary/content/content` | `interactive/primary/content` | ohmedarkblue | #032536 | Constant |
| **Border** | `button/primary/border/active` | `interactive/primary/border` | ohmedarkblue | #032536 | Constant |

**Visual Result:** Teal background with dark blue text (both modes)

---

### Hover State

| Property | Tier 3 Token | Ã¢â€ ' Tier 2 | Resolves To | Hex Value | Mode Behavior |
|----------|-------------|----------|-------------|-----------|---------------|
| **Surface** | `button/primary/surface/hover` | `interactive/primary/surface hover` | teal500 | #01E6C1 | Constant |
| **Content** | `button/primary/content/content` | `interactive/primary/content` | ohmedarkblue | #032536 | Constant |
| **Border** | `button/primary/border/active` | `interactive/primary/border` | ohmedarkblue | #032536 | Constant |

**Visual Result:** Darker teal background with dark blue text (both modes)

---

### Select/Pressed State

| Property | Tier 3 Token | Ã¢â€ ' Tier 2 | Resolves To | Hex Value | Mode Behavior |
|----------|-------------|----------|-------------|-----------|---------------|
| **Surface** | `button/primary/surface/select` | `interactive/primary/surface select` | teal300 | #00FFD6 | Constant |
| **Content** | `button/primary/content/content` | `interactive/primary/content` | ohmedarkblue | #032536 | Constant |
| **Border** | `button/primary/border/active` | `interactive/primary/border` | ohmedarkblue | #032536 | Constant |

**Visual Result:** Bright teal background with dark blue text (both modes)

---

### Disabled State

| Property | Tier 3 Token | Ã¢â€ ' Tier 2 | Light Mode Ã¢â€ ' | Dark Mode Ã¢â€ ' | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `button/primary/surface/disabled` | `state/disabled/surface` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| **Content** | `button/primary/content/disabled` | `state/disabled/content` | grey700 | grey300 | #647882 | #ADB3B1 |
| **Border** | `button/primary/border/disabled` | `state/disabled/border` | smokeygrey | grey700 | #D1D1D1 | #647882 |

**Visual Result:**
- Light mode: Light grey background with medium grey text
- Dark mode: Medium grey background with light grey text

---

## Color System - Secondary Button

Secondary buttons have white/outlined appearance in light mode and invert for dark mode.

### Active State

| Property | Tier 3 Token | Ã¢â€ ' Tier 2 | Light Mode Ã¢â€ ' | Dark Mode Ã¢â€ ' | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `button/secondary/surface/active` | `interactive/secondary/surface` â†’ `surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Content** | `button/secondary/content/content` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Border** | `button/secondary/border/active` | `brand/ohmedarkblue` | ohmedarkblue | ohmedarkblue | #032536 | #032536 |

**Visual Result:**
- Light mode: White background, dark blue text, dark blue border
- Dark mode: Dark blue background, white text, dark blue border

---

### Hover State

| Property | Tier 3 Token | Ã¢â€ ' Tier 2 | Resolves To | Light Hex | Dark Hex | Mode Behavior |
|----------|-------------|----------|-------------|-----------|----------|---------------|
| **Surface** | `button/secondary/surface/hover` | `tertiary/lightgrey` | lightgrey | #E9E9E9 | #E9E9E9 | Constant |
| **Content** | `button/secondary/content/content` | `content/primary` | (mode-aware) | #032536 | #FFFFFF | Mode-aware |
| **Border** | `button/secondary/border/active` | `brand/ohmedarkblue` | ohmedarkblue | #032536 | #032536 | Constant |

**Visual Result:**
- Light mode: Light grey background, dark blue text, dark blue border
- Dark mode: Light grey background, white text, dark blue border

---

### Select/Pressed State

| Property | Tier 3 Token | Ã¢â€ ' Tier 2 | Resolves To | Hex Value | Mode Behavior |
|----------|-------------|----------|-------------|-----------|---------------|
| **Surface** | `button/secondary/surface/select` | `brand/smokeygrey` | smokeygrey | #D1D1D1 | Constant |
| **Content** | `button/secondary/content/content` | `content/primary` | (mode-aware) | Light: #032536 / Dark: #FFFFFF | Mode-aware |
| **Border** | `button/secondary/border/active` | `brand/ohmedarkblue` | ohmedarkblue | #032536 | Constant |

**Visual Result:**
- Light mode: Medium grey background, dark blue text, dark blue border
- Dark mode: Medium grey background, white text, dark blue border

---

### Disabled State

Uses shared disabled state tokens (see Primary button disabled state above).

---

## Color System - Tertiary Button

Tertiary buttons have transparent/ghost appearance with mode-aware text.

### Active State

| Property | Tier 3 Token | Ã¢â€ ' Tier 2 | Light Mode Ã¢â€ ' | Dark Mode Ã¢â€ ' | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `button/tertiary/surface/active` | `interactive/tertiary/surface` â†’ `brand/clear` | transparent | transparent | Transparent | Transparent |
| **Content** | `button/tertiary/content/content` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Border** | `button/tertiary/border/active` | `interactive/tertiary/border` â†’ `brand/clear` | transparent | transparent | Transparent | Transparent |

**Visual Result:**
- Light mode: Transparent background, dark blue text, no border
- Dark mode: Transparent background, white text, no border

---

### Hover State

| Property | Tier 3 Token | Ã¢â€ ' Tier 2 | Resolves To | Light Hex | Dark Hex | Mode Behavior |
|----------|-------------|----------|-------------|-----------|----------|---------------|
| **Surface** | `button/tertiary/surface/hover` | `tertiary/lightgrey` | lightgrey | #E9E9E9 | #E9E9E9 | Constant |
| **Content** | `button/tertiary/content/content` | `content/primary` | (mode-aware) | #032536 | #FFFFFF | Mode-aware |
| **Border** | `button/tertiary/border/active` | `brand/clear` | transparent | Transparent | Transparent | Constant |

**Visual Result:**
- Light mode: Light grey background, dark blue text, no border
- Dark mode: Light grey background, white text, no border

---

### Select/Pressed State

| Property | Tier 3 Token | Ã¢â€ ' Tier 2 | Resolves To | Hex Value | Mode Behavior |
|----------|-------------|----------|-------------|-----------|---------------|
| **Surface** | `button/tertiary/surface/select` | `brand/smokeygrey` | smokeygrey | #D1D1D1 | Constant |
| **Content** | `button/tertiary/content/content` | `content/primary` | (mode-aware) | Light: #032536 / Dark: #FFFFFF | Mode-aware |
| **Border** | `button/tertiary/border/active` | `brand/clear` | transparent | Transparent | Constant |

**Visual Result:**
- Light mode: Medium grey background, dark blue text, no border
- Dark mode: Medium grey background, white text, no border

---

### Disabled State

Uses shared disabled state tokens (see Primary button disabled state above).

---

## Complete Tier Mapping

### Tier 3 Component Tokens

**Primary Button:**
```css
--button-primary-surface-active: var(--color-interactive-primary-surface);
--button-primary-surface-hover: var(--color-interactive-primary-surface-hover);
--button-primary-surface-select: var(--color-interactive-primary-surface-select);
--button-primary-surface-disabled: var(--color-state-disabled-surface);
--button-primary-content-content: var(--color-interactive-primary-content);
--button-primary-content-disabled: var(--color-state-disabled-content);
--button-primary-border-active: var(--color-interactive-primary-border);
--button-primary-border-disabled: var(--color-state-disabled-border);
```

**Secondary Button:**
```css
--button-secondary-surface-active: var(--color-interactive-secondary-surface);
--button-secondary-surface-hover: var(--color-tertiary-lightgrey);
--button-secondary-surface-select: var(--color-brand-smokeygrey);
--button-secondary-surface-disabled: var(--color-brand-white);
--button-secondary-content-content: var(--color-content-primary);
--button-secondary-content-disabled: var(--color-state-disabled-content);
--button-secondary-border-active: var(--color-brand-ohmedarkblue);
--button-secondary-border-disabled: var(--color-brand-smokeygrey);
```

**Tertiary Button:**
```css
--button-tertiary-surface-active: var(--color-interactive-tertiary-surface);
--button-tertiary-surface-hover: var(--color-tertiary-lightgrey);
--button-tertiary-surface-select: var(--color-brand-smokeygrey);
--button-tertiary-surface-disabled: var(--color-brand-white);
--button-tertiary-content-content: var(--color-content-primary);
--button-tertiary-content-disabled: var(--color-state-disabled-content);
--button-tertiary-border-active: var(--color-interactive-tertiary-border);
--button-tertiary-border-disabled: var(--color-brand-smokeygrey);
```

**Shared Properties:**
```css
--button-padding-inline: var(--value-spacing-axis-aware-inline-md);
--button-padding-stack: var(--value-spacing-axis-aware-stack-md);
--button-gap: var(--value-spacing-gap-md);
--button-border-width: var(--value-border-width-hairline);
--button-font-family: var(--typography-font-family-Roobert);
--button-font-weight: var(--typography-font-weight-semibold);
--button-corner-radius-lg: var(--value-corner-radii-lg);
--button-corner-radius-md: var(--value-corner-radii-md);
--button-corner-radius-sm: var(--value-corner-radii-sm);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/interactive/primary/surface` | highlighterteal | highlighterteal | #00FFD6 | #00FFD6 |
| `color/interactive/primary/content` | ohmedarkblue | ohmedarkblue | #032536 | #032536 |
| `color/interactive/secondary/surface` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/state/disabled/surface` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| `color/state/disabled/content` | grey700 | grey300 | #647882 | #ADB3B1 |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/highlighterteal` | #00FFD6 | Primary button surface |
| `color/secondary/teal500` | #01E6C1 | Primary hover surface |
| `color/secondary/teal300` | #00FFD6 | Primary select surface |
| `color/brand/ohmedarkblue` | #032536 | Primary content, borders |
| `color/brand/white` | #FFFFFF | Secondary surface (light) |
| `color/tertiary/lightgrey` | #E9E9E9 | Hover states |
| `color/brand/smokeygrey` | #D1D1D1 | Select/disabled states |
| `color/secondary/grey700` | #647882 | Disabled content/surface |
| `color/secondary/grey300` | #ADB3B1 | Disabled content (dark) |
| `Values/corner radii/radius-2x` | 8px | Large corner radius |
| `Values/corner radii/radius-1halfx` | 6px | Medium corner radius |
| `Values/corner radii/radius-1x` | 4px | Small corner radius |
| `Values/space/space-2x` | 8px | Padding and gap |

## Component Properties

```typescript
type ButtonProps = {
  className?: string;
  type?: "Primary" | "secondary" | "tertiary";
  size?: "large" | "Medium" | "small";
  state?: "Active" | "Hover" | "Select" | "Disabled";
  icon?: "none" | "left" | "right" | "Icon only";
  onClick?: () => void;
  children?: React.ReactNode;
};
```

### Property: `type` (string, optional)
Controls the button visual hierarchy.

**Values:**
- `"Primary"` (default) - High emphasis, teal accent
- `"secondary"` - Medium emphasis, outlined
- `"tertiary"` - Low emphasis, ghost/minimal

---

### Property: `size` (string, optional)
Controls button dimensions.

**Values:**
- `"large"` - 48px height, 8px radius
- `"Medium"` (default) - 40px height, 6px radius
- `"small"` - 32px height, 4px radius

---

### Property: `icon` (string, optional)
Controls icon placement.

**Values:**
- `"none"` (default) - Text only
- `"left"` - Icon before text
- `"right"` - Icon after text
- `"Icon only"` - Icon only, square shape

**Note:** Icon options only available for Large and Medium sizes

---

### Property: `state` (string, optional)
Visual state (typically managed automatically).

**Values:**
- `"Active"` (default) - Default state
- `"Hover"` - Mouse hover
- `"Select"` - Pressed/active
- `"Disabled"` - Not interactable

## Implementation Examples

### Basic Usage

```tsx
import Button from '@/components/core/Button';

// Primary button
<Button type="Primary" size="Medium">
  Save Changes
</Button>

// Secondary button
<Button type="secondary" size="Medium">
  Cancel
</Button>

// Tertiary button
<Button type="tertiary" size="large">
  Learn More
</Button>
```

### With Icons

```tsx
// Icon on left
<Button type="Primary" size="Medium" icon="left">
  <IconRadixArrows iconRadix="Arrow Left" size="md" />
  Back
</Button>

// Icon on right
<Button type="secondary" size="large" icon="right">
  Next
  <IconRadixArrows iconRadix="Arrow Right" size="md" />
</Button>

// Icon only
<Button type="tertiary" size="Medium" icon="Icon only">
  <IconRadixObjects iconRadix="Gear" size="md" />
</Button>
```

### Disabled States

```tsx
<Button type="Primary" state="Disabled" size="Medium">
  Unavailable
</Button>

<Button 
  type="secondary" 
  state="Disabled" 
  size="large"
  disabled
>
  Locked Action
</Button>
```

### Button Groups

```tsx
const ButtonGroup = () => {
  return (
    <div className={styles.buttonGroup}>
      <Button type="tertiary" size="Medium">
        Cancel
      </Button>
      <Button type="Primary" size="Medium">
        Confirm
      </Button>
    </div>
  );
};
```

## CSS Implementation

### Core Button Styles

```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--value-spacing-gap-md);
  padding: var(--value-spacing-axis-aware-stack-md) 
           var(--value-spacing-axis-aware-inline-md);
  
  font-family: var(--typography-font-family-Roobert);
  font-weight: var(--typography-font-weight-semibold);
  text-align: center;
  white-space: nowrap;
  
  border-width: var(--value-border-width-hairline);
  border-style: solid;
  
  cursor: pointer;
  transition: all 200ms ease;
}

/* Size variants */
.button--large {
  height: 48px;
  font-size: var(--typography-font-size-18);
  line-height: var(--typography-line-height-24);
  border-radius: var(--value-corner-radii-lg);
}

.button--medium {
  height: 40px;
  font-size: var(--typography-font-size-18);
  line-height: var(--typography-line-height-24);
  border-radius: var(--value-corner-radii-md);
}

.button--small {
  height: 32px;
  font-size: var(--typography-font-size-16);
  line-height: var(--typography-line-height-24);
  border-radius: var(--value-corner-radii-sm);
}

/* Primary button */
.button--primary {
  background: var(--button-primary-surface-active);
  color: var(--button-primary-content-content);
  border-color: var(--button-primary-border-active);
}

.button--primary:hover:not(:disabled) {
  background: var(--button-primary-surface-hover);
}

.button--primary:active:not(:disabled) {
  background: var(--button-primary-surface-select);
}

.button--primary:disabled {
  background: var(--button-primary-surface-disabled);
  color: var(--button-primary-content-disabled);
  border-color: var(--button-primary-border-disabled);
  cursor: not-allowed;
}

/* Secondary button */
.button--secondary {
  background: var(--button-secondary-surface-active);
  color: var(--button-secondary-content-content);
  border-color: var(--button-secondary-border-active);
}

.button--secondary:hover:not(:disabled) {
  background: var(--button-secondary-surface-hover);
}

.button--secondary:active:not(:disabled) {
  background: var(--button-secondary-surface-select);
}

.button--secondary:disabled {
  background: var(--button-secondary-surface-disabled);
  color: var(--button-secondary-content-disabled);
  border-color: var(--button-secondary-border-disabled);
  cursor: not-allowed;
}

/* Tertiary button */
.button--tertiary {
  background: var(--button-tertiary-surface-active);
  color: var(--button-tertiary-content-content);
  border-color: var(--button-tertiary-border-active);
}

.button--tertiary:hover:not(:disabled) {
  background: var(--button-tertiary-surface-hover);
}

.button--tertiary:active:not(:disabled) {
  background: var(--button-tertiary-surface-select);
}

.button--tertiary:disabled {
  background: var(--button-tertiary-surface-disabled);
  color: var(--button-tertiary-content-disabled);
  border-color: var(--button-tertiary-border-disabled);
  cursor: not-allowed;
}

/* Icon only variant */
.button--iconOnly {
  padding: var(--value-spacing-axis-aware-stack-md);
  aspect-ratio: 1;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-content-primary: #032536;
  --color-interactive-secondary-surface: #FFFFFF;
  --color-surface-canvas: #FFFFFF;
  --color-state-disabled-surface: #D1D1D1;
  --color-state-disabled-content: #647882;
  --color-state-disabled-border: #D1D1D1;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-content-primary: #FFFFFF;
  --color-interactive-secondary-surface: #032536;
  --color-surface-canvas: #032536;
  --color-state-disabled-surface: #647882;
  --color-state-disabled-content: #ADB3B1;
  --color-state-disabled-border: #647882;
}
```

## Usage Guidelines

### Button Type Selection

**Primary Button:**
- Most important action on page
- Form submissions
- Confirmations
- Primary CTAs
- Maximum one per section

**Secondary Button:**
- Important but not primary
- Alternative actions
- Cancel operations
- Navigation

**Tertiary Button:**
- Least visual emphasis
- Optional actions
- Helper functions
- Collapsed menus
- Multiple on same page acceptable

### Size Selection

**Large (48px):**
- Hero sections
- Marketing pages
- Primary page actions
- High-emphasis contexts

**Medium (40px):**
- Standard forms
- Modals and dialogs
- Cards and panels
- Default choice

**Small (32px):**
- Compact interfaces
- Data tables
- Secondary actions
- Space-constrained UIs

## Accessibility

### ARIA Labels

```tsx
<Button 
  type="Primary" 
  size="Medium"
  aria-label="Save changes to profile"
>
  Save
</Button>

// Icon-only buttons require labels
<Button 
  type="tertiary" 
  size="Medium"
  icon="Icon only"
  aria-label="Open settings"
>
  <IconRadixObjects iconRadix="Gear" size="md" />
</Button>
```

### Keyboard Navigation

```tsx
<Button 
  type="Primary"
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleAction();
    }
  }}
>
  Submit
</Button>
```

### Disabled State

```tsx
<Button 
  type="Primary"
  disabled
  aria-disabled="true"
  title="Please complete the form first"
>
  Submit
</Button>
```

## Testing Checklist

### Visual Testing - Light Mode
- [ ] Primary: Teal surface, dark blue text
- [ ] Secondary: White surface, dark blue text, dark blue border
- [ ] Tertiary: Transparent surface, dark blue text
- [ ] Primary hover: Darker teal surface
- [ ] Secondary hover: Light grey surface
- [ ] Tertiary hover: Light grey surface
- [ ] All disabled: Light grey surface, medium grey text

### Visual Testing - Dark Mode
- [ ] Primary: Teal surface, dark blue text (same as light)
- [ ] Secondary: Dark blue surface, white text, dark blue border
- [ ] Tertiary: Transparent surface, white text
- [ ] Primary hover: Darker teal surface (same as light)
- [ ] Secondary hover: Light grey surface, white text
- [ ] Tertiary hover: Light grey surface, white text
- [ ] All disabled: Medium grey surface, light grey text

### Functional Testing
- [ ] Click handlers fire correctly
- [ ] Hover states apply on mouse over
- [ ] Focus states visible
- [ ] Disabled buttons don't fire handlers
- [ ] Icon alignment correct (left/right)
- [ ] Icon-only buttons are square
- [ ] All sizes render correctly

### Accessibility Testing
- [ ] All buttons keyboard accessible
- [ ] Icon-only buttons have aria-label
- [ ] Disabled state announced
- [ ] Focus indicator visible (2px outline)
- [ ] Minimum contrast met in all states
- [ ] Touch targets â‰¥44Ã—44px for mobile

### Mode Testing
- [ ] Secondary button surface inverts correctly
- [ ] Text colors adapt properly
- [ ] Primary button remains consistent
- [ ] Disabled states work in both modes
- [ ] Smooth transitions between modes

## Related Components

- **Icon Components** - Used within buttons
- **Button Group** - Multiple buttons together
- **Dropdown** - Buttons as triggers
- **Forms** - Submit/cancel buttons

## Common Patterns

### Button with Loading State

```tsx
const LoadingButton = ({ isLoading, children, ...props }) => {
  return (
    <Button {...props} disabled={isLoading}>
      {isLoading ? (
        <>
          <Spinner size="sm" />
          Loading...
        </>
      ) : (
        children
      )}
    </Button>
  );
};
```

### Conditional Button Type

```tsx
const ConditionalButton = ({ isPrimary, ...props }) => {
  return (
    <Button 
      type={isPrimary ? "Primary" : "secondary"}
      {...props}
    />
  );
};
```

## Version History

- **v1.0** - Initial button component with 108 variants

---

*Component Documentation - Ohme Design System*  
*Core UI Component*  
*Last Updated: January 2025*
