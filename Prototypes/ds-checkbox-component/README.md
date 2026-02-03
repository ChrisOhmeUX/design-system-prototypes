# Checkbox Component Documentation

## Overview

Checkboxes allow users to select one or multiple options from a set, toggle settings on or off, or indicate agreement with terms and conditions. They provide clear visual feedback for binary or multi-select choices.

**Component Type:** Core UI Component  
**Category:** Form Controls  
**Token Integration:** Yes - uses semantic state tokens  
**Total Variants:** 18 (6 statuses Ã— 3 states)

## Variant Matrix

| Status | States | Description |
|--------|--------|-------------|
| **Default** | Unchecked, Checked, Indeterminate | Standard resting state |
| **Hover** | Unchecked, Checked, Indeterminate | Mouse over |
| **Pressed** | Unchecked, Checked, Indeterminate | Mouse/touch down |
| **Selected** | Unchecked, Checked, Indeterminate | Keyboard focus |
| **Disabled** | Unchecked, Checked, Indeterminate | Cannot interact |
| **Error** | Unchecked, Checked, Indeterminate | Validation error |

**Total Variants: 18** (6 statuses Ã— 3 selection states)

## Design Specifications

### Dimensions
- **Control Size:** 24Ã—24px (square)
- **Corner Radius:** 6px â†’ `value/corner-radii/md`
- **Border Width:** 1px (default), 1.5px (error)
- **Icon Size:** 15px (check mark or minus)
- **Gap to Label:** 12px â†’ `value/spacing/gap/lg`
- **Touch Target:** 44Ã—44px minimum (with padding)

### Visual Properties
- **Shape:** Rounded square (6px radius)
- **Border:** 1px solid (1.5px for error state)
- **Background:** Varies by status
- **Icon:** Check mark (âœ“) or minus (âˆ’) for indeterminate
- **Label:** Always present, 16px text

## Color System

### Default State (Unchecked/Checked)

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Border** | `color/state/active/border` | grey300 | grey700 | #ADB3B1 | #647882 |
| **Icon** (when checked) | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Label** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Light mode: White background, light grey border, dark blue icon/text
- Dark mode: Dark blue background, medium grey border, white icon/text

---

### Hover/Pressed/Selected States

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Hex Value |
|----------|----------------|-------------|-------------|-----------|
| **Surface** | `color/surface/accent` | highlighterteal | highlighterteal | #00FFD6 |
| **Border** | None or accent | N/A | N/A | N/A |
| **Icon** | `color/content/primary` | ohmedarkblue | white | #032536 / #FFFFFF |
| **Label** | `color/content/primary` | ohmedarkblue | white | #032536 / #FFFFFF |

**Visual Result:**
- Both modes: Bright teal background
- Light mode: Dark blue icon/text
- Dark mode: White icon/text

---

### Disabled State

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/state/disabled/surface` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| **Border** | `color/state/disabled/surface` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| **Icon** | `color/state/disabled/content` | grey700 | grey300 | #647882 | #ADB3B1 |
| **Label** | `color/state/disabled/content` | grey700 | grey300 | #647882 | #ADB3B1 |

**Visual Result:**
- Light mode: Light grey background and border, medium grey icon/text
- Dark mode: Medium grey background and border, light grey icon/text

---

### Error State

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Hex Value |
|----------|----------------|-------------|-------------|-----------|
| **Surface** | `color/surface/canvas` | white | ohmedarkblue | #FFFFFF / #032536 |
| **Border** | `color/state/error/border` | rosered | rosered | #FA1460 |
| **Icon** | `color/content/primary` | ohmedarkblue | white | #032536 / #FFFFFF |
| **Label** | `color/content/primary` | ohmedarkblue | white | #032536 / #FFFFFF |

**Visual Result:**
- Both modes: Bright pink/red border (1.5px)
- Light mode: White background, dark blue icon/text
- Dark mode: Dark blue background, white icon/text

---

## Component Properties

```typescript
type CheckboxProps = {
  className?: string;
  status?: "Default" | "Hover" | "Pressed" | "Selected" | "Disabled" | "Error";
  state?: "Unchecked" | "Checked" | "Indeterminate";
  label: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: (checked: boolean) => void;
};
```

### Property: `status` (string, optional)
Visual interaction status (typically managed automatically).

**Values:**
- `"Default"` - Resting state
- `"Hover"` - Mouse over
- `"Pressed"` - Mouse down
- `"Selected"` - Keyboard focus
- `"Disabled"` - Not interactable
- `"Error"` - Validation error

---

### Property: `state` (string, optional)
Selection state of the checkbox.

**Values:**
- `"Unchecked"` (default) - Not selected
- `"Checked"` - Selected
- `"Indeterminate"` - Partially selected (for parent checkboxes)

---

### Property: `label` (string, required)
Text label describing the checkbox option.

**Requirements:**
- Clear, descriptive text
- Sentence case preferred
- Keep concise but meaningful

## Complete Token Mapping

### Tier 3 Component Tokens (Recommended)

```css
/* Control Dimensions */
--checkbox-control-size: 24px;
--checkbox-control-radius: var(--value-corner-radii-md);
--checkbox-border-width-default: 1px;
--checkbox-border-width-error: 1.5px;
--checkbox-icon-size: 15px;

/* Spacing */
--checkbox-gap-to-label: var(--value-spacing-gap-lg);

/* Default State */
--checkbox-default-surface: var(--color-surface-canvas);
--checkbox-default-border: var(--color-state-active-border);
--checkbox-default-icon: var(--color-content-primary);

/* Interactive States (Hover/Pressed/Selected) */
--checkbox-interactive-surface: var(--color-surface-accent);
--checkbox-interactive-icon: var(--color-content-primary);

/* Disabled State */
--checkbox-disabled-surface: var(--color-state-disabled-surface);
--checkbox-disabled-border: var(--color-state-disabled-surface);
--checkbox-disabled-icon: var(--color-state-disabled-content);

/* Error State */
--checkbox-error-surface: var(--color-surface-canvas);
--checkbox-error-border: var(--color-state-error-border);
--checkbox-error-icon: var(--color-content-primary);

/* Label */
--checkbox-label-color: var(--color-content-primary);
--checkbox-label-color-disabled: var(--color-state-disabled-content);
--checkbox-label-font-family: var(--typography-font-family-Roobert);
--checkbox-label-font-size: var(--typography-font-size-16);
--checkbox-label-line-height: 1.6;
--checkbox-label-letter-spacing: var(--typography-letter-spacing-0dot2);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/surface/accent` | highlighterteal | highlighterteal | #00FFD6 | #00FFD6 |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/state/active/border` | grey300 | grey700 | #ADB3B1 | #647882 |
| `color/state/disabled/surface` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| `color/state/disabled/content` | grey700 | grey300 | #647882 | #ADB3B1 |
| `color/state/error/border` | rosered | rosered | #FA1460 | #FA1460 |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/white` | #FFFFFF | Canvas background (light) |
| `color/brand/ohmedarkblue` | #032536 | Canvas background (dark), icon color (light) |
| `color/brand/highlighterteal` | #00FFD6 | Interactive state surface |
| `color/secondary/grey300` | #ADB3B1 | Default border (light), disabled content (dark) |
| `color/secondary/grey700` | #647882 | Default border (dark), disabled content (light) |
| `color/brand/smokeygrey` | #D1D1D1 | Disabled surface (light) |
| `color/tertiary/rosered` | #FA1460 | Error border |
| `Values/corner radii/radius-1halfx` | 6px | Corner radius |
| `Values/space/space-3x` | 12px | Gap to label |

## Implementation Examples

### Basic Usage

```tsx
import Checkbox from '@/components/core/Checkbox';

// Unchecked
<Checkbox label="Accept terms and conditions" />

// Checked
<Checkbox label="Subscribe to newsletter" checked={true} />

// Indeterminate (parent with some children selected)
<Checkbox label="Select all" indeterminate={true} />
```

### With State Management

```tsx
const [isChecked, setIsChecked] = useState(false);

<Checkbox 
  label="Remember me"
  checked={isChecked}
  onChange={setIsChecked}
/>
```

### Disabled State

```tsx
<Checkbox 
  label="This option is unavailable"
  disabled={true}
  checked={false}
/>

<Checkbox 
  label="Pre-selected, cannot change"
  disabled={true}
  checked={true}
/>
```

### Error State

```tsx
const [agreed, setAgreed] = useState(false);
const [submitted, setSubmitted] = useState(false);

<Checkbox 
  label="I agree to the terms of service"
  checked={agreed}
  onChange={setAgreed}
  error={submitted && !agreed}
/>
{submitted && !agreed && (
  <p className="error-message">You must agree to continue</p>
)}
```

### Checkbox Group

```tsx
const [selected, setSelected] = useState<string[]>([]);

const toggleOption = (value: string) => {
  setSelected(prev => 
    prev.includes(value)
      ? prev.filter(v => v !== value)
      : [...prev, value]
  );
};

<div className="checkbox-group">
  <Checkbox 
    label="Email notifications"
    checked={selected.includes('email')}
    onChange={() => toggleOption('email')}
  />
  <Checkbox 
    label="SMS notifications"
    checked={selected.includes('sms')}
    onChange={() => toggleOption('sms')}
  />
  <Checkbox 
    label="Push notifications"
    checked={selected.includes('push')}
    onChange={() => toggleOption('push')}
  />
</div>
```

### Parent/Child Selection (Indeterminate)

```tsx
const [selectedItems, setSelectedItems] = useState<string[]>([]);
const allItems = ['item1', 'item2', 'item3'];

const isAllSelected = selectedItems.length === allItems.length;
const isSomeSelected = selectedItems.length > 0 && selectedItems.length < allItems.length;

<div>
  <Checkbox 
    label="Select all"
    checked={isAllSelected}
    indeterminate={isSomeSelected}
    onChange={(checked) => {
      setSelectedItems(checked ? allItems : []);
    }}
  />
  <div className="checkbox-children">
    {allItems.map(item => (
      <Checkbox 
        key={item}
        label={item}
        checked={selectedItems.includes(item)}
        onChange={(checked) => {
          setSelectedItems(prev =>
            checked ? [...prev, item] : prev.filter(i => i !== item)
          );
        }}
      />
    ))}
  </div>
</div>
```

## CSS Implementation

### Core Styles

```css
.checkbox {
  display: inline-flex;
  align-items: center;
  gap: var(--value-spacing-gap-lg);
  cursor: pointer;
  user-select: none;
}

.checkbox__control {
  width: 24px;
  height: 24px;
  border-radius: var(--value-corner-radii-md);
  border-width: 1px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

/* Default state */
.checkbox__control {
  background: var(--color-surface-canvas);
  border-color: var(--color-state-active-border);
}

.checkbox__control svg {
  width: 15px;
  height: 15px;
  color: var(--color-content-primary);
}

/* Hover/Pressed/Selected states */
.checkbox:hover .checkbox__control,
.checkbox--pressed .checkbox__control,
.checkbox--selected .checkbox__control {
  background: var(--color-surface-accent);
  border-color: transparent;
}

/* Disabled state */
.checkbox--disabled .checkbox__control {
  background: var(--color-state-disabled-surface);
  border-color: var(--color-state-disabled-surface);
  cursor: not-allowed;
}

.checkbox--disabled .checkbox__control svg {
  color: var(--color-state-disabled-content);
}

.checkbox--disabled .checkbox__label {
  color: var(--color-state-disabled-content);
}

/* Error state */
.checkbox--error .checkbox__control {
  background: var(--color-surface-canvas);
  border-color: var(--color-state-error-border);
  border-width: 1.5px;
}

/* Label */
.checkbox__label {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-16);
  font-weight: var(--typography-font-weight-regular);
  line-height: 1.6;
  letter-spacing: var(--typography-letter-spacing-0dot2);
  color: var(--color-content-primary);
  white-space: nowrap;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-surface-canvas: #FFFFFF;
  --color-surface-accent: #00FFD6;
  --color-content-primary: #032536;
  --color-state-active-border: #ADB3B1;
  --color-state-disabled-surface: #D1D1D1;
  --color-state-disabled-content: #647882;
  --color-state-error-border: #FA1460;
  
  /* Spacing & sizing */
  --value-spacing-gap-lg: 12px;
  --value-corner-radii-md: 6px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-surface-canvas: #032536;
  --color-content-primary: #FFFFFF;
  --color-state-active-border: #647882;
  --color-state-disabled-surface: #647882;
  --color-state-disabled-content: #ADB3B1;
  /* Accent and error colors remain constant */
}
```

## State Behavior

### Unchecked State
- Empty control box
- Border visible
- No icon displayed
- Default surface and border colors

### Checked State
- Check mark (âœ“) icon appears
- Same colors as unchecked
- Icon color matches label text

### Indeterminate State
- Minus (âˆ’) icon appears
- Used for parent checkboxes when some but not all children selected
- Represents partial selection
- Same colors as checked state

## Accessibility

### ARIA Attributes

```tsx
<label className="checkbox">
  <input 
    type="checkbox"
    checked={checked}
    aria-checked={indeterminate ? "mixed" : checked}
    disabled={disabled}
    aria-invalid={error}
    aria-describedby={error ? "error-message" : undefined}
  />
  <span className="checkbox__label">{label}</span>
</label>
{error && (
  <span id="error-message" className="error-text">
    This field is required
  </span>
)}
```

### Keyboard Navigation

```tsx
// Native checkbox behavior:
// Space - Toggle checked state
// Tab - Move focus to next checkbox
// Shift+Tab - Move focus to previous checkbox

<Checkbox 
  label="Option"
  onKeyDown={(e) => {
    if (e.key === ' ') {
      e.preventDefault();
      toggleChecked();
    }
  }}
/>
```

### Focus States

```tsx
.checkbox__input:focus-visible + .checkbox__control {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
```

### Label Association

```tsx
// Good - Proper label association
<label>
  <input type="checkbox" />
  <span>Label text</span>
</label>

// Also good - Using for/id
<input type="checkbox" id="agree" />
<label htmlFor="agree">I agree</label>

// Bad - No association
<input type="checkbox" />
<span>Label text</span>
```

## Usage Guidelines

### When to Use Checkboxes

**Multi-Select Lists:**
- Select multiple options from a list
- Choose preferences or settings
- Filter options

**Binary Toggles:**
- Agree to terms
- Enable/disable features
- Opt in/out of services

**Grouped Selections:**
- Select all/none controls
- Category selections with children
- Nested option hierarchies

### When NOT to Use

- **Single selection from group:** Use Radio buttons instead
- **On/off toggle:** Use Switch/Toggle for immediate effect
- **Large option sets:** Consider Dropdown or Multi-select
- **Mutually exclusive options:** Use Radio buttons

## Best Practices

### Content âœ“
1. **Clear Labels:** Use descriptive, action-oriented text
2. **Positive Framing:** "Send notifications" not "Don't send notifications"
3. **Concise Text:** Keep labels brief but meaningful
4. **Consistent Format:** Use same voice and tense
5. **Error Messages:** Provide clear feedback for errors

### Visual âœ“
1. **Touch Targets:** Ensure 44Ã—44px minimum for mobile
2. **Alignment:** Align checkbox tops with first line of multi-line labels
3. **Grouping:** Visually group related checkboxes
4. **Spacing:** Use consistent vertical spacing between checkboxes
5. **Focus:** Clear focus indicators for keyboard users

### Interaction âœ“
1. **Whole Area Clickable:** Label and control both trigger toggle
2. **Immediate Feedback:** Show visual response on interaction
3. **Persist State:** Maintain selection across page changes
4. **Validation:** Validate on submit, not on change
5. **Loading States:** Disable during async operations

## Testing Checklist

### Visual Testing
- [ ] All 18 variants render correctly
- [ ] 24Ã—24px control size consistent
- [ ] 6px corner radius on all controls
- [ ] 12px gap between control and label
- [ ] Check icon centered in control (checked state)
- [ ] Minus icon centered in control (indeterminate state)
- [ ] Light mode colors correct (all states)
- [ ] Dark mode colors correct (all states)
- [ ] Error border is 1.5px thick
- [ ] Default border is 1px thick

### Functional Testing
- [ ] Click toggles checked state
- [ ] Space key toggles when focused
- [ ] Disabled checkboxes don't respond
- [ ] Indeterminate state displays correctly
- [ ] onChange callback fires correctly
- [ ] Can be controlled or uncontrolled
- [ ] Label click toggles checkbox

### Accessibility Testing
- [ ] Label properly associated with input
- [ ] Keyboard navigation works (Tab, Space)
- [ ] Focus indicator visible
- [ ] Screen reader announces state
- [ ] aria-checked="mixed" for indeterminate
- [ ] aria-invalid for error state
- [ ] Minimum 44Ã—44px touch target
- [ ] Sufficient color contrast in all states

### Mode Testing
- [ ] Default state: Correct in light mode
- [ ] Default state: Correct in dark mode
- [ ] Interactive states: Correct in both modes
- [ ] Disabled state: Correct in both modes
- [ ] Error state: Correct in both modes
- [ ] Smooth transitions between modes
- [ ] Icon colors adapt properly

## Related Components

- **Radio Button** - Single selection from group
- **Switch/Toggle** - Binary on/off with immediate effect
- **Form** - Container for checkbox groups
- **Dropdown** - Alternative for large option sets

## Common Patterns

### Select All Pattern

```tsx
const SelectAllCheckbox = ({ items, selected, onSelectChange }) => {
  const allSelected = selected.length === items.length;
  const someSelected = selected.length > 0 && selected.length < items.length;

  return (
    <Checkbox 
      label="Select all"
      checked={allSelected}
      indeterminate={someSelected}
      onChange={(checked) => {
        onSelectChange(checked ? items.map(i => i.id) : []);
      }}
    />
  );
};
```

### Validation Pattern

```tsx
const [formData, setFormData] = useState({ agreed: false });
const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  if (!formData.agreed) {
    newErrors.agreed = 'You must agree to continue';
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

<Checkbox 
  label="I agree to the terms of service"
  checked={formData.agreed}
  onChange={(checked) => setFormData({ ...formData, agreed: checked })}
  error={!!errors.agreed}
/>
```

## Version History

- **v1.0** - Initial checkbox component with 18 variants

---

*Component Documentation - Ohme Design System*  
*Core UI Component*  
*Last Updated: January 2025*
