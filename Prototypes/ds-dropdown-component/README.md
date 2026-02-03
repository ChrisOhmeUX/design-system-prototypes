# Dropdown Component System Documentation

## Overview

The Dropdown (Select) component system allows users to choose a single option from a predefined list. The system conserves screen space by hiding options until activated and provides a familiar, accessible pattern for selection inputs.

**Component Type:** Core UI Component  
**Category:** Form Controls  
**Composite System:** Field + Menu + List Items  
**Total Variants:** 240+ (extensive combinations across field states, sizes, and menu configurations)

## System Architecture

The dropdown is composed of three interconnected components:

1. **Dropdown Field** - The trigger/input that displays selected value
2. **Dropdown Menu** - The container that holds the list of options
3. **Dropdown List Item** - Individual selectable options within the menu

---

# Part 1: Dropdown Field

## Field Specifications

### Size Dimensions

| Size | Height | Padding H | Padding V | Typography | Corner Radius | Label Gap |
|------|--------|-----------|-----------|------------|---------------|-----------|
| **Large** | 48px | 16px | 12px | 16px / 24px | 6px | 4px |
| **Small** | 40px | 16px | 8px | 16px / 24px | 6px | 4px |
| **Mobile** | 56px | 16px | 16px | 16px / 24px | 6px | 4px |

### Visual Properties
- **Icon:** Chevron Down (24Ã—24px)
- **Icon Color:** `color/content/icon 2` (ohmedarkblue / white)
- **Border Width:** 1px (1.5px for error)
- **Font Family:** Roobert Regular
- **Font Weight:** 400

## Field Color System

### Default State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `Dropdown/field/surface/active` | `surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Border** | `Dropdown/field/border/active` | `border/default` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |
| **Placeholder** | `Dropdown/field/content/placeholder` | `content/secondary` | grey700 | grey300 | #647882 | #ADB3B1 |

**Visual Result:**
- Light mode: White background, light grey border, medium grey placeholder
- Dark mode: Dark blue background, light grey border, light grey placeholder

---

### Filled State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `Dropdown/field/surface/filled` | `surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Border** | `Dropdown/field/border/filled` | `border/default` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |
| **Content** | `Dropdown/field/content/filled` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Light mode: White background, light grey border, dark blue text
- Dark mode: Dark blue background, light grey border, white text

---

### Focus State

| Property | Tier 3 Token | â†’ Tier 2 | Resolves To | Hex Value |
|----------|-------------|----------|-------------|-----------|
| **Surface** | `Dropdown/field/surface/focus` | `surface/canvas` | (mode-aware) | #FFFFFF / #032536 |
| **Border** | `Dropdown/field/border/focus` | `surface/accent` | highlighterteal | #00FFD6 |
| **Content** | `Dropdown/field/content/filled` | `content/primary` | (mode-aware) | #032536 / #FFFFFF |

**Visual Result:**
- Both modes: Bright teal border
- Light mode: White background, dark blue text
- Dark mode: Dark blue background, white text

---

### Error State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Hex Value |
|----------|-------------|----------|--------------|-------------|-----------|
| **Surface** | `Dropdown/field/surface/error` | `surface/canvas` | white | ohmedarkblue | #FFFFFF / #032536 |
| **Border** | `Dropdown/field/border/error` | `state/error/border` | rosered | rosered | #FA1460 |
| **Content** | `Dropdown/field/content/filled` | `content/primary` | ohmedarkblue | white | #032536 / #FFFFFF |

**Visual Result:**
- Both modes: Bright pink/red border (1.5px)
- Light mode: White background, dark blue text
- Dark mode: Dark blue background, white text

---

### Disabled State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `Dropdown/field/surface/disabled` | `state/disabled/surface` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| **Border** | `Dropdown/field/border/disabled` | `state/disabled/border` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| **Content** | `Dropdown/field/content/disabled` | `state/disabled/content` | grey700 | grey300 | #647882 | #ADB3B1 |

**Visual Result:**
- Light mode: Light grey background and border, medium grey text
- Dark mode: Medium grey background and border, light grey text

---

### Label

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Content** | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

Font: Roobert Regular, 14px / 18px line-height

---

# Part 2: Dropdown Menu

## Menu Specifications

### Dimensions
- **Width:** 264px (matches field width or custom)
- **Max Height:** Based on visible options (up to 8 items shown)
- **Padding:** 16px vertical, 2px horizontal
- **Item Height:** 34px (without flag), 40px (with flag)

### Visual Properties
- **Background:** Elevated surface
- **Border:** Subtle border
- **Corner Radius:** 4px
- **Shadow/Elevation:** Dropdown level z-index
- **Gap Between Items:** 0px (items touch)

## Menu Color System

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `Dropdown/menu/surface` | `surface/raised` | white | lakeblue | #FFFFFF | #0B2539 |
| **Border** | `Dropdown/menu/border` | `border/subtle` | grey100 | grey700 | #E5E8E8 | #647882 |

**Visual Result:**
- Light mode: White background with light grey border
- Dark mode: Dark blue background with medium grey border

---

# Part 3: Dropdown List Item

## List Item Specifications

### Dimensions
- **Width:** 264px (fills menu)
- **Height:** 34px (text only), 40px (with flag/icon)
- **Padding Horizontal:** 24px
- **Padding Vertical:** 8px
- **Gap:** 8px (between icon and text)

### Visual Properties
- **Text Alignment:** Left, Centre, or Right
- **Font:** Roobert SemiBold, 14px / 18px line-height
- **Flag/Icon Size:** 24Ã—24px container
- **Flag Actual Size:** 22.5Ã—15px (inside container)
- **Flag Corner Radius:** 2px

## List Item Color System

### Default State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `Dropdown/menu/item/surface-active` | `surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Content** | `Dropdown/menu/item/content` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Light mode: White background, dark blue text
- Dark mode: Dark blue background, white text

---

### Hover State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `Dropdown/menu/item/surface-hover` | `surface/base` | smokeyblue | lakeblue | #F5F8FA | #0B2539 |
| **Content** | `Dropdown/menu/item/content` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Light mode: Light blue/grey background, dark blue text
- Dark mode: Same as menu background (lakeblue), white text

---

### Selected State

| Property | Tier 3 Token | â†’ Tier 2 | Resolves To | Hex Value |
|----------|-------------|----------|-------------|-----------|
| **Surface** | `Dropdown/menu/item/selected` | `interactive/primary/surface` | highlighterteal | #00FFD6 |
| **Content** | `Dropdown/menu/item/content` | `content/primary` | (mode-aware) | #032536 / #FFFFFF |

**Visual Result:**
- Both modes: Bright teal background
- Light mode: Dark blue text
- Dark mode: White text

---

## Complete Token Mapping

### Tier 3 Component Tokens

**Dropdown Field:**
```css
--dropdown-field-surface-active: var(--color-surface-canvas);
--dropdown-field-surface-disabled: var(--color-state-disabled-surface);
--dropdown-field-surface-error: var(--color-surface-canvas);
--dropdown-field-surface-filled: var(--color-surface-canvas);
--dropdown-field-surface-focus: var(--color-surface-canvas);

--dropdown-field-content-placeholder: var(--color-content-secondary);
--dropdown-field-content-filled: var(--color-content-primary);
--dropdown-field-content-disabled: var(--color-state-disabled-content);

--dropdown-field-border-active: var(--color-border-default);
--dropdown-field-border-disabled: var(--color-state-disabled-border);
--dropdown-field-border-error: var(--color-state-error-border);
--dropdown-field-border-filled: var(--color-border-default);
--dropdown-field-border-focus: var(--color-surface-accent);
```

**Dropdown Menu:**
```css
--dropdown-menu-surface: var(--color-surface-raised);
--dropdown-menu-border: var(--color-border-subtle);
--dropdown-menu-elevation: var(--value-z-index-dropdown);
```

**Dropdown List Item:**
```css
--dropdown-menu-item-surface-active: var(--color-surface-canvas);
--dropdown-menu-item-surface-hover: var(--color-surface-base);
--dropdown-menu-item-content: var(--color-content-primary);
--dropdown-menu-item-selected: var(--color-interactive-primary-surface);
```

### Tier 2 Semantic Tokens Summary

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/surface/raised` | white | lakeblue | #FFFFFF | #0B2539 |
| `color/surface/base` | smokeyblue | lakeblue | #F5F8FA | #0B2539 |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/secondary` | grey700 | grey300 | #647882 | #ADB3B1 |
| `color/border/default` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |
| `color/border/subtle` | grey100 | grey700 | #E5E8E8 | #647882 |
| `color/state/disabled/surface` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| `color/state/disabled/content` | grey700 | grey300 | #647882 | #ADB3B1 |
| `color/state/error/border` | rosered | rosered | #FA1460 | #FA1460 |
| `color/surface/accent` | highlighterteal | highlighterteal | #00FFD6 | #00FFD6 |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/white` | #FFFFFF | Canvas/raised (light) |
| `color/brand/ohmedarkblue` | #032536 | Canvas (dark), primary content (light) |
| `color/tertiary/lakeblue` | #0B2539 | Raised surface (dark) |
| `color/tertiary/smokeyblue` | #F5F8FA | Base surface (light) |
| `color/secondary/grey300` | #ADB3B1 | Borders, secondary content (dark) |
| `color/secondary/grey700` | #647882 | Secondary content (light), borders (dark) |
| `color/secondary/grey100` | #E5E8E8 | Subtle border (light) |
| `color/brand/smokeygrey` | #D1D1D1 | Disabled surface (light) |
| `color/tertiary/rosered` | #FA1460 | Error border |
| `color/brand/highlighterteal` | #00FFD6 | Focus/selected states |

## Component Properties

```typescript
type DropdownProps = {
  className?: string;
  expanded?: boolean;
  size?: "Large" | "Small" | "Mobile";
  alignment?: "Left" | "Right";
  state?: "Default" | "Filled" | "Focused" | "Error" | "Disabled";
  label?: boolean;
  iconFlag?: boolean;
  telCode?: boolean; // Mobile only
  value?: string;
  placeholder?: string;
  options?: DropdownOption[];
  onChange?: (value: string) => void;
};

type DropdownOption = {
  value: string;
  label: string;
  icon?: string; // Flag code or icon name
};
```

### Property: `expanded` (boolean, optional)
Controls whether the dropdown menu is visible.

**Values:**
- `false` (default) - Collapsed, showing only field
- `true` - Expanded, showing menu with options

---

### Property: `size` (string, optional)
Controls the field size.

**Values:**
- `"Large"` - 48px height, desktop contexts
- `"Small"` - 40px height, compact contexts
- `"Mobile"` - 56px height, touch-optimized

---

### Property: `state` (string, optional)
Visual state of the field.

**Values:**
- `"Default"` - Empty, not selected
- `"Filled"` - Has selected value
- `"Focused"` - Active/focused
- `"Error"` - Validation error
- `"Disabled"` - Not interactable

---

### Property: `alignment` (string, optional)
Text alignment within field and menu items.

**Values:**
- `"Left"` (default) - Left-aligned
- `"Right"` - Right-aligned (useful for numeric values)

---

### Property: `label` (boolean, optional)
Whether to show label above field.

**Values:**
- `true` - Shows label
- `false` - No label

---

### Property: `iconFlag` (boolean, optional)
Whether to show flag/icon prefix in field and menu items.

**Values:**
- `true` - Shows flag/icon
- `false` - Text only

---

### Property: `telCode` (boolean, optional)
Mobile size only - whether this is a telephone code selector.

**Values:**
- `true` - Special tel code variant
- `false` (default) - Standard dropdown

---

## Implementation Examples

### Basic Dropdown

```tsx
import Dropdown from '@/components/core/Dropdown';

// Simple dropdown
<Dropdown 
  size="Large"
  label={true}
  placeholder="Select an option"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ]}
  onChange={(value) => console.log(value)}
/>
```

### Country Selector with Flags

```tsx
<Dropdown 
  size="Large"
  iconFlag={true}
  label={true}
  placeholder="Select country"
  options={[
    { value: 'US', label: 'United States', icon: 'US' },
    { value: 'GB', label: 'United Kingdom', icon: 'GB' },
    { value: 'CA', label: 'Canada', icon: 'CA' }
  ]}
/>
```

### Mobile Phone Code Selector

```tsx
<Dropdown 
  size="Mobile"
  telCode={true}
  iconFlag={true}
  alignment="Left"
  placeholder="+44"
  options={[
    { value: '+1', label: 'United States', icon: 'US' },
    { value: '+44', label: 'United Kingdom', icon: 'GB' },
    { value: '+61', label: 'Australia', icon: 'AU' }
  ]}
/>
```

### With Error State

```tsx
const [country, setCountry] = useState('');
const [submitted, setSubmitted] = useState(false);

<Dropdown 
  size="Large"
  state={submitted && !country ? "Error" : "Default"}
  label={true}
  placeholder="Select country"
  options={countryOptions}
  value={country}
  onChange={setCountry}
/>
{submitted && !country && (
  <p className="error-message">Please select a country</p>
)}
```

## CSS Implementation

### Field Styles

```css
.dropdown {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.dropdown__label {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-14);
  line-height: var(--typography-line-height-18);
  color: var(--color-content-primary);
}

.dropdown__field {
  display: flex;
  align-items: center;
  gap: var(--value-spacing-gap-lg);
  padding: var(--dropdown-field-padding-stack) 
           var(--dropdown-field-padding-inline);
  
  background: var(--dropdown-field-surface-active);
  border: 1px solid var(--dropdown-field-border-active);
  border-radius: var(--value-corner-radii-md);
  
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-16);
  line-height: var(--typography-line-height-24);
  
  cursor: pointer;
  transition: all 200ms ease;
}

.dropdown__field--large {
  height: 48px;
  padding: 12px 16px;
}

.dropdown__field--small {
  height: 40px;
  padding: 8px 16px;
}

.dropdown__field--mobile {
  height: 56px;
  padding: 16px;
}

.dropdown__field:focus {
  border-color: var(--dropdown-field-border-focus);
  outline: none;
}

.dropdown__field[data-error="true"] {
  border-color: var(--dropdown-field-border-error);
  border-width: 1.5px;
}

.dropdown__field:disabled {
  background: var(--dropdown-field-surface-disabled);
  border-color: var(--dropdown-field-border-disabled);
  color: var(--dropdown-field-content-disabled);
  cursor: not-allowed;
}

.dropdown__placeholder {
  color: var(--dropdown-field-content-placeholder);
  flex: 1;
}

.dropdown__value {
  color: var(--dropdown-field-content-filled);
  flex: 1;
}

.dropdown__chevron {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
```

### Menu Styles

```css
.dropdown__menu {
  position: absolute;
  width: 264px;
  max-height: 375px; /* ~8 items */
  
  background: var(--dropdown-menu-surface);
  border: 1px solid var(--dropdown-menu-border);
  border-radius: 4px;
  
  padding: 16px 2px;
  overflow-y: auto;
  
  z-index: var(--dropdown-menu-elevation);
}
```

### List Item Styles

```css
.dropdown__item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 24px;
  
  background: var(--dropdown-menu-item-surface-active);
  color: var(--dropdown-menu-item-content);
  
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-14);
  font-weight: var(--typography-font-weight-semibold);
  line-height: var(--typography-line-height-18);
  
  cursor: pointer;
  transition: background 200ms ease;
}

.dropdown__item:hover {
  background: var(--dropdown-menu-item-surface-hover);
}

.dropdown__item[data-selected="true"] {
  background: var(--dropdown-menu-item-selected);
}

.dropdown__item--left {
  text-align: left;
}

.dropdown__item--centre {
  text-align: center;
  justify-content: center;
}

.dropdown__item--right {
  text-align: right;
  justify-content: flex-end;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-surface-canvas: #FFFFFF;
  --color-surface-raised: #FFFFFF;
  --color-surface-base: #F5F8FA;
  --color-content-primary: #032536;
  --color-content-secondary: #647882;
  --color-border-default: #ADB3B1;
  --color-border-subtle: #E5E8E8;
  --color-state-disabled-surface: #D1D1D1;
  --color-state-disabled-content: #647882;
  --color-state-error-border: #FA1460;
  --color-surface-accent: #00FFD6;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-surface-canvas: #032536;
  --color-surface-raised: #0B2539;
  --color-surface-base: #0B2539;
  --color-content-primary: #FFFFFF;
  --color-content-secondary: #ADB3B1;
  --color-border-subtle: #647882;
  --color-state-disabled-surface: #647882;
  --color-state-disabled-content: #ADB3B1;
  /* Border default, error, and accent remain constant */
}
```

## Usage Guidelines

### When to Use Dropdown

**Single Selection:**
- Country selectors
- Category filters
- Status selectors
- Priority levels

**Limited Options:**
- Up to 8-10 options work best
- More options: consider autocomplete
- Very large lists: consider search functionality

**Defined Choices:**
- Fixed set of options
- No free-form text input
- Standardized selections

### When NOT to Use

- **Multiple selections:** Use multi-select or checkboxes
- **2-3 options:** Consider radio buttons
- **Very long lists:** Use autocomplete/search
- **Free text:** Use text input instead

## Size Selection

**Large (48px):**
- Desktop forms
- Primary inputs
- Standard contexts

**Small (40px):**
- Compact forms
- Data tables
- Dense interfaces

**Mobile (56px):**
- Mobile-optimized
- Touch-friendly
- Phone number codes

## Accessibility

### ARIA Attributes

```tsx
<div
  role="combobox"
  aria-expanded={expanded}
  aria-haspopup="listbox"
  aria-labelledby="dropdown-label"
  aria-activedescendant={selectedId}
>
  <button
    id="dropdown-trigger"
    aria-label={label || "Select option"}
    onClick={() => setExpanded(!expanded)}
  >
    {value || placeholder}
  </button>
</div>

{expanded && (
  <ul role="listbox" aria-labelledby="dropdown-label">
    {options.map(option => (
      <li
        key={option.value}
        role="option"
        aria-selected={option.value === value}
        onClick={() => handleSelect(option.value)}
      >
        {option.label}
      </li>
    ))}
  </ul>
)}
```

### Keyboard Navigation

- **Space/Enter:** Open dropdown
- **Arrow Down:** Next option
- **Arrow Up:** Previous option
- **Enter:** Select option
- **Escape:** Close dropdown
- **Tab:** Close and move to next field

## Testing Checklist

### Visual Testing - Field
- [ ] All sizes render correctly (48px, 40px, 56px)
- [ ] Light mode: White background, light grey border
- [ ] Dark mode: Dark blue background, light grey border
- [ ] Focus: Teal border in both modes
- [ ] Error: Pink border (1.5px) in both modes
- [ ] Disabled: Light grey (light) / medium grey (dark)
- [ ] Placeholder: Medium grey (light) / light grey (dark)
- [ ] Filled text: Dark blue (light) / white (dark)
- [ ] Label: Dark blue (light) / white (dark)

### Visual Testing - Menu
- [ ] Light mode: White background, light grey border
- [ ] Dark mode: Dark blue (lakeblue) background, medium grey border
- [ ] Menu appears below field
- [ ] Max 8 items visible with scroll
- [ ] Border radius 4px

### Visual Testing - List Items
- [ ] Default: Matches menu background
- [ ] Hover: Light blue/grey (light) / same as menu (dark)
- [ ] Selected: Teal background in both modes
- [ ] Text: Dark blue (light) / white (dark)
- [ ] Flags render correctly when present
- [ ] All three alignments work (left, centre, right)

### Functional Testing
- [ ] Click opens/closes menu
- [ ] Option selection works
- [ ] Value updates in field
- [ ] Menu closes on selection
- [ ] Keyboard navigation works
- [ ] Disabled state prevents interaction
- [ ] Error state displays correctly

### Accessibility Testing
- [ ] Proper ARIA roles (combobox, listbox, option)
- [ ] aria-expanded announces correctly
- [ ] Selected option announced
- [ ] Keyboard navigation complete
- [ ] Focus visible
- [ ] Screen reader compatible
- [ ] Touch targets â‰¥44Ã—44px

### Mode Testing
- [ ] Field colors correct in light mode
- [ ] Field colors correct in dark mode
- [ ] Menu colors correct in light mode
- [ ] Menu colors correct in dark mode
- [ ] List items correct in both modes
- [ ] Smooth theme transitions
- [ ] Text remains legible

## Related Components

- **Input** - Text input variant
- **Radio Button** - Alternative for 2-3 options
- **Checkbox** - Multiple selection alternative
- **Autocomplete** - Searchable alternative

## Common Patterns

### Controlled Dropdown

```tsx
const [value, setValue] = useState('');

<Dropdown 
  value={value}
  onChange={setValue}
  options={options}
  placeholder="Select..."
/>
```

### With Validation

```tsx
const [value, setValue] = useState('');
const [error, setError] = useState(false);

const handleSubmit = () => {
  if (!value) {
    setError(true);
    return;
  }
  // Process form
};

<Dropdown 
  value={value}
  onChange={(v) => { setValue(v); setError(false); }}
  state={error ? "Error" : value ? "Filled" : "Default"}
  options={options}
/>
```

## Version History

- **v1.0** - Initial dropdown system with 240+ variants

---

*Component Documentation - Ohme Design System*  
*Core UI Component*  
*Last Updated: January 2025*
