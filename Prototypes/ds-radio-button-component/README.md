# Radio Button Component Documentation

## Overview

Radio buttons allow users to select a single option from a set of mutually exclusive choices. They provide clear visual feedback for selection and support two visual styles for different contexts.

**Component Type:** Core UI Component  
**Category:** Form Controls  
**Token Integration:** Yes - uses radio style tokens  
**Total Variants:** 20 (2 types Ã— 2 checked states Ã— 5 interaction states)

## Variant Matrix

| Type | Checked States | Interaction States | Total Variants |
|------|----------------|-------------------|----------------|
| Classic | 2 (Checked, Unchecked) | 5 (Default, Hovered, Pressed, Selected, Disabled) | 10 |
| Background | 2 (Checked, Unchecked) | 5 | 10 |
| **TOTAL** | **2** | **5** | **20** |

## Design Specifications

### Dimensions
- **Control Size:** 25Ã—25px (circular)
- **Control Border:** 1px
- **Dot Size:** 11Ã—11px (when selected)
- **Gap to Label:** 16px â†’ `value/spacing/gap/xl`
- **Label Typography:** 15px / 1.6 line-height (24px calculated)
- **Letter Spacing:** 0.1px

### Visual Properties (Classic Type)
- **Background:** None (transparent)
- **Control Border:** Varies by state
- **Control Fill:** Varies by state
- **Dot:** Appears when checked

### Visual Properties (Background Type)
- **Container Background:** Canvas or teal
- **Container Border:** Varies by state
- **Container Padding:** 6px (all sides)
- **Container Radius:** 6px
- **Control:** Same as Classic type

## Color System - Classic Type

### Default State

**Unchecked:**

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Control Surface** | `radio/style/classic/default/inactive/control/surface` | transparent | transparent | Transparent | Transparent |
| **Control Border** | `radio/style/classic/default/inactive/control/border` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |
| **Label** | `radio/style/label` â†’ `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Checked:**

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Control Surface** | `radio/style/classic/default/active/control/surface` | transparent | transparent | Transparent | Transparent |
| **Control Border** | `radio/style/classic/default/active/control/border` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |
| **Dot** | `radio/style/classic/default/active/control/dot` â†’ `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Label** | `radio/style/label` â†’ `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

---

### Hover State

**Checked:**

| Property | Token Reference | Resolves To | Hex Value |
|----------|----------------|-------------|-----------|
| **Control Surface** | `radio/style/classic/hover/active/control/surface` | highlighterteal | #00FFD6 |
| **Control Border** | `radio/style/classic/hover/active/control/border` | grey700 | #647882 |
| **Dot** | `radio/style/classic/hover/active/control/dot` â†’ `content/primary` | (mode-aware) | #032536 / #FFFFFF |

**Visual Result:** Teal background with darker border on hover

---

### Pressed/Selected States

| Property | Token Reference | Resolves To | Hex Value |
|----------|----------------|-------------|-----------|
| **Control Surface** | Pressed/Selected surface | highlighterteal | #00FFD6 |
| **Control Border** | Pressed/Selected border | ohmedarkblue | #032536 |
| **Dot** | `content/primary` | (mode-aware) | #032536 / #FFFFFF |

**Visual Result:** Teal background with dark blue border

---

### Disabled State

**Checked:**

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Control Surface** | `radio/style/classic/disabled/active/control/surface` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| **Control Border** | `radio/style/classic/disabled/inactive/control/border` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| **Dot** | `radio/style/classic/disabled/active/control/dot` | grey700 | grey300 | #647882 | #ADB3B1 |
| **Label** | `radio/style/label-disabled` â†’ `content/disabled` | grey300 | grey700 | #ADB3B1 | #647882 |

**Visual Result:**
- Light mode: Light grey control with medium grey dot and text
- Dark mode: Medium grey control with light grey dot and text

---

## Color System - Background Type

### Default State

**Container:** Same colors as Classic type control

**Unchecked:**

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Box Surface** | `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Control Surface** | `radio/style/boxed/default/inactive/control/surface` | transparent | transparent | Transparent | Transparent |
| **Control Border** | `radio/style/boxed/default/inactive/control/border` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |

**Checked:** Same as unchecked with added dot

---

### Hover State

**Container:**

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Hex Value |
|----------|----------------|-------------|-------------|-----------|
| **Box Surface** | `radio/style/boxed/hover/active/box/surface` | transparent | transparent | Transparent |
| **Box Border** | `radio/style/boxed/hover/active/box/border` | grey300 | grey300 | #ADB3B1 |

**Control:** Teal background (#00FFD6) with grey border

---

### Selected State (Keyboard Focus)

**Container:**

| Property | Token Reference | Resolves To | Hex Value |
|----------|----------------|-------------|-----------|
| **Box Surface** | `radio/style/boxed/selected/active/box/surface` | teal100 | #C0FFF6 |

**Control:** Teal background (#00FFD6) with dark blue border

**Visual Result:** Teal box background with teal control

---

### Pressed State

**Similar to Selected but with canvas background instead of teal box background**

---

### Disabled State

**Container:** Canvas background (white/dark blue)
**Control:** Same as Classic disabled state

---

## Component Properties

```typescript
type RadioButtonProps = {
  className?: string;
  checked?: boolean;
  state?: "Default â­‘" | "Hovered" | "Pressed" | "Selected âœ“" | "Disabled";
  type?: "Classic" | "Background";
  label: string;
  name: string;
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};
```

### Property: `type` (string, optional)
Controls the visual style of the radio button.

**Values:**
- `"Classic"` (default) - No background container
- `"Background"` - Rounded background container around radio and label

---

### Property: `checked` (boolean, optional)
Whether this radio button is selected.

**Values:**
- `true` - Selected (shows dot)
- `false` (default) - Not selected (empty circle)

---

### Property: `state` (string, optional)
Visual interaction state (typically managed automatically).

**Values:**
- `"Default â­‘"` - Resting state
- `"Hovered"` - Mouse over
- `"Pressed"` - Mouse down
- `"Selected âœ“"` - Keyboard focus
- `"Disabled"` - Not interactable

---

### Property: `name` (string, required)
Radio group name (all radios in a group must share the same name).

---

### Property: `value` (string, required)
Unique value for this radio option.

---

### Property: `label` (string, required)
Text label describing the option.

---

## Complete Token Mapping

### Tier 3 Component Tokens (Classic Type)

```css
/* Default State - Unchecked */
--radio-classic-default-inactive-surface: transparent;
--radio-classic-default-inactive-border: var(--color-border-default);

/* Default State - Checked */
--radio-classic-default-active-surface: transparent;
--radio-classic-default-active-border: var(--color-border-default);
--radio-classic-default-active-dot: var(--color-content-primary);

/* Hover State - Checked */
--radio-classic-hover-active-surface: var(--color-surface-accent);
--radio-classic-hover-active-border: var(--color-secondary-grey700);
--radio-classic-hover-active-dot: var(--color-content-primary);

/* Pressed/Selected State */
--radio-classic-pressed-surface: var(--color-surface-accent);
--radio-classic-pressed-border: var(--color-brand-ohmedarkblue);
--radio-classic-pressed-dot: var(--color-content-primary);

/* Disabled State - Checked */
--radio-classic-disabled-active-surface: var(--color-state-disabled-surface);
--radio-classic-disabled-active-border: var(--color-state-disabled-surface);
--radio-classic-disabled-active-dot: var(--color-state-disabled-content);

/* Label */
--radio-label: var(--color-content-primary);
--radio-label-disabled: var(--color-content-disabled);

/* Sizing */
--radio-control-size: 25px;
--radio-dot-size: 11px;
--radio-gap: var(--value-spacing-gap-xl);
--radio-radius: var(--value-corner-radii-full);
```

### Tier 3 Component Tokens (Background Type)

```css
/* Selected State - Box */
--radio-boxed-selected-active-box-surface: var(--color-state-action-surface);
--radio-boxed-selected-inactive-box-surface: var(--color-state-action-surface);

/* Hover State - Box */
--radio-boxed-hover-box-surface: transparent;
--radio-boxed-hover-box-border: var(--color-border-default);

/* Container */
--radio-boxed-padding: var(--value-spacing-axis-aware-inline-sm);
--radio-boxed-radius: var(--value-corner-radii-md);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `content/disabled` | grey300 | grey700 | #ADB3B1 | #647882 |
| `color/border/default` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |
| `color/surface/accent` | highlighterteal | highlighterteal | #00FFD6 | #00FFD6 |
| `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/state/disabled/surface` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| `color/state/disabled/content` | grey700 | grey300 | #647882 | #ADB3B1 |
| `color/state/action/surface` | teal100 | teal900 | #C0FFF6 | #003A37 |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/ohmedarkblue` | #032536 | Dot color (light), label (light) |
| `color/brand/white` | #FFFFFF | Label (dark) |
| `color/brand/highlighterteal` | #00FFD6 | Hover/pressed/selected surface |
| `color/secondary/grey300` | #ADB3B1 | Default border, disabled label (light) |
| `color/secondary/grey700` | #647882 | Hover border, disabled content |
| `color/brand/smokeygrey` | #D1D1D1 | Disabled surface (light) |
| `color/secondary/teal100` | #C0FFF6 | Background selected box (light) |
| `Values/corner radii/radius-max` | 100px | Circular control |
| `Values/corner radii/radius-1halfx` | 6px | Background container |
| `Values/space/space-4x` | 16px | Gap to label |

## Anatomy

### Classic Type
```
Radio Button Component (Classic)
â”œâ”€â”€ Control (25Ã—25px circular)
â”‚   â”œâ”€â”€ Surface: Transparent (default) or teal (interactive)
â”‚   â”œâ”€â”€ Border: Grey (default) or accent (interactive)
â”‚   â””â”€â”€ Dot (11Ã—11px, when checked)
â”‚       â””â”€â”€ Color: content/primary (mode-aware)
â””â”€â”€ Label (16px gap from control)
    â”œâ”€â”€ Typography: 15px / 24px line-height
    â””â”€â”€ Color: content/primary (mode-aware)
```

### Background Type
```
Radio Button Component (Background)
â”œâ”€â”€ Container Box (rounded, 6px radius)
â”‚   â”œâ”€â”€ Padding: 6px all sides
â”‚   â”œâ”€â”€ Surface: Canvas or teal (selected state)
â”‚   â””â”€â”€ Border: Grey or transparent
â””â”€â”€ Content (same as Classic)
    â”œâ”€â”€ Control (25Ã—25px)
    â””â”€â”€ Label (16px gap)
```

### Component Parts

**Control Circle:**
- Size: 25Ã—25px
- Border: 1px solid
- Border radius: 100px (circular)
- Surface: Transparent (default), teal (interactive states)
- Border color: Grey (default), dark blue (pressed/selected)

**Dot (When Checked):**
- Size: 11Ã—11px
- Position: Centered in control
- Border radius: 100px (circular)
- Color: Matches label text (mode-aware)

**Label:**
- Font: Roobert Regular
- Size: 15px
- Line height: 1.6 (24px calculated)
- Letter spacing: 0.1px
- Color: Dark blue (light mode) / White (dark mode)
- Disabled: Grey (mode-aware)

**Background Container (Background type only):**
- Padding: 6px all sides
- Border radius: 6px
- Surface: White/dark blue (default), teal (selected state)
- Border: Grey (hover), transparent (most states)

## Implementation Examples

### Basic Usage

```tsx
import RadioButton from '@/components/core/RadioButton';

// Classic type
<RadioButton
  type="Classic"
  name="option"
  value="option1"
  label="Option 1"
  checked={selectedValue === 'option1'}
  onChange={(value) => setSelectedValue(value)}
/>

// Background type
<RadioButton
  type="Background"
  name="option"
  value="option2"
  label="Option 2"
  checked={selectedValue === 'option2'}
  onChange={(value) => setSelectedValue(value)}
/>
```

### Radio Group

```tsx
const RadioGroup = ({ options, value, onChange, type = "Classic" }) => {
  return (
    <div className="radio-group">
      {options.map(option => (
        <RadioButton
          key={option.value}
          type={type}
          name="radio-group"
          value={option.value}
          label={option.label}
          checked={value === option.value}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

// Usage
const [selected, setSelected] = useState('option1');

<RadioGroup
  type="Classic"
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]}
  value={selected}
  onChange={setSelected}
/>
```

### With State Management

```tsx
const [paymentMethod, setPaymentMethod] = useState('card');

<div className="payment-options">
  <RadioButton
    type="Background"
    name="payment"
    value="card"
    label="Credit Card"
    checked={paymentMethod === 'card'}
    onChange={setPaymentMethod}
  />
  <RadioButton
    type="Background"
    name="payment"
    value="bank"
    label="Bank Transfer"
    checked={paymentMethod === 'bank'}
    onChange={setPaymentMethod}
  />
  <RadioButton
    type="Background"
    name="payment"
    value="cash"
    label="Cash"
    checked={paymentMethod === 'cash'}
    onChange={setPaymentMethod}
  />
</div>
```

### Disabled Option

```tsx
<RadioButton
  type="Classic"
  name="option"
  value="disabled-option"
  label="Unavailable Option"
  checked={false}
  disabled={true}
  state="Disabled"
/>
```

## CSS Implementation

### Classic Type Styles

```css
.radio {
  display: inline-flex;
  align-items: center;
  gap: var(--value-spacing-gap-xl);
  cursor: pointer;
  user-select: none;
}

.radio__control {
  width: 25px;
  height: 25px;
  border-radius: var(--value-corner-radii-full);
  border: 1px solid;
  position: relative;
  flex-shrink: 0;
  transition: all 200ms ease;
}

/* Default state */
.radio__control {
  background: transparent;
  border-color: var(--color-border-default);
}

.radio__control--checked::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 11px;
  height: 11px;
  border-radius: var(--value-corner-radii-full);
  background: var(--color-content-primary);
}

/* Hover state */
.radio:hover .radio__control {
  background: var(--color-surface-accent);
  border-color: var(--color-secondary-grey700);
}

/* Pressed/Selected state */
.radio--pressed .radio__control,
.radio--selected .radio__control {
  background: var(--color-surface-accent);
  border-color: var(--color-brand-ohmedarkblue);
}

/* Disabled state */
.radio--disabled .radio__control {
  background: var(--color-state-disabled-surface);
  border-color: var(--color-state-disabled-surface);
  cursor: not-allowed;
}

.radio--disabled .radio__control--checked::before {
  background: var(--color-state-disabled-content);
}

/* Label */
.radio__label {
  font-family: var(--typography-font-family-Roobert);
  font-size: 15px;
  font-weight: var(--typography-font-weight-regular);
  line-height: 1.6;
  letter-spacing: 0.1px;
  color: var(--color-content-primary);
}

.radio--disabled .radio__label {
  color: var(--color-content-disabled);
}
```

### Background Type Styles

```css
.radio--background {
  padding: var(--value-spacing-axis-aware-inline-sm);
  border-radius: var(--value-corner-radii-md);
  background: var(--color-surface-canvas);
  border: 1px solid transparent;
  transition: all 200ms ease;
}

/* Hover state - show border */
.radio--background:hover {
  border-color: var(--color-border-default);
}

/* Selected state - teal background */
.radio--background.radio--selected {
  background: var(--color-state-action-surface);
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-content-primary: #032536;
  --color-content-disabled: #ADB3B1;
  --color-border-default: #ADB3B1;
  --color-surface-accent: #00FFD6;
  --color-surface-canvas: #FFFFFF;
  --color-state-disabled-surface: #D1D1D1;
  --color-state-disabled-content: #647882;
  --color-state-action-surface: #C0FFF6;
  --color-secondary-grey700: #647882;
  --color-brand-ohmedarkblue: #032536;
  --value-spacing-gap-xl: 16px;
  --value-corner-radii-full: 100px;
  --value-corner-radii-md: 6px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-content-primary: #FFFFFF;
  --color-content-disabled: #647882;
  --color-surface-canvas: #032536;
  --color-state-disabled-surface: #647882;
  --color-state-disabled-content: #ADB3B1;
  --color-state-action-surface: #003A37;
  /* Border default, accent, and ohmedarkblue remain constant */
}
```

## Usage Guidelines

### When to Use Radio Buttons

**Single Selection:**
- Choose one option from 2-6 choices
- Mutually exclusive options
- All options should be visible

**Immediate Feedback:**
- Selection takes effect immediately
- No submit button needed
- Clear current selection

**Limited Options:**
- 2-6 options ideal
- More options: consider dropdown
- Binary choice: consider toggle/switch

### When NOT to Use

- **Multiple selections:** Use checkboxes instead
- **Many options (>6):** Use dropdown or autocomplete
- **Binary on/off:** Use switch/toggle
- **Single inevitable choice:** Use buttons

### Type Selection

**Classic Type:**
- Standard forms
- Clean, minimal interfaces
- High-density layouts
- When background would add visual clutter

**Background Type:**
- Card-based selections
- Feature selection interfaces
- Payment method choices
- When options need visual separation

## Best Practices

### Content Guidelines âœ“
1. **Clear Labels:** Use descriptive, unambiguous text
2. **Parallel Structure:** Keep label format consistent
3. **Concise Text:** Brief but meaningful
4. **Positive Framing:** Avoid negatives when possible
5. **Logical Order:** Present options in logical sequence

### Visual Guidelines âœ“
1. **Vertical Stacking:** Stack radio buttons vertically
2. **Adequate Spacing:** Use consistent gaps between options
3. **Group Related:** Visually group related radio sets
4. **One Selection:** Show only one selected at a time
5. **Touch Targets:** Ensure 44Ã—44px minimum for mobile

### Interaction Guidelines âœ“
1. **Click Anywhere:** Label and control both trigger selection
2. **Keyboard Support:** Arrow keys to navigate, Space to select
3. **Persist State:** Maintain selection across page changes
4. **No Deselect:** Can't uncheck by clicking (unlike checkbox)
5. **Default Selection:** Consider pre-selecting most common option

## Accessibility

### ARIA Attributes

```tsx
<div role="radiogroup" aria-labelledby="payment-method-label">
  <h3 id="payment-method-label">Payment Method</h3>
  
  <label className="radio">
    <input
      type="radio"
      name="payment"
      value="card"
      checked={selected === 'card'}
      onChange={(e) => setSelected(e.target.value)}
      aria-checked={selected === 'card'}
    />
    <span className="radio__label">Credit Card</span>
  </label>
  
  <label className="radio">
    <input
      type="radio"
      name="payment"
      value="bank"
      checked={selected === 'bank'}
      onChange={(e) => setSelected(e.target.value)}
      aria-checked={selected === 'bank'}
      disabled={!bankAvailable}
      aria-disabled={!bankAvailable}
    />
    <span className="radio__label">Bank Transfer</span>
  </label>
</div>
```

### Keyboard Navigation

- **Tab:** Focus next radio group
- **Arrow Up/Down:** Navigate within group
- **Arrow Left/Right:** Navigate within group (horizontal layout)
- **Space:** Select focused radio

### Keyboard Navigation Implementation

```tsx
const RadioGroup = ({ options, value, onChange }) => {
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % options.length;
      onChange(options[nextIndex].value);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + options.length) % options.length;
      onChange(options[prevIndex].value);
    }
  };

  // Implementation...
};
```

## Advanced Patterns

### Radio with Description

```tsx
const RadioWithDescription = ({ option, checked, onChange }) => {
  return (
    <label className="radio-with-description">
      <RadioButton
        type="Background"
        name="feature"
        value={option.value}
        label={option.label}
        checked={checked}
        onChange={onChange}
      />
      <p className="radio-description">{option.description}</p>
    </label>
  );
};
```

### Radio Card Selection

```tsx
const RadioCard = ({ option, checked, onChange }) => {
  return (
    <div className={`radio-card ${checked ? 'selected' : ''}`}>
      <RadioButton
        type="Background"
        name="plan"
        value={option.value}
        label={option.name}
        checked={checked}
        onChange={onChange}
      />
      <div className="card-details">
        <p className="price">{option.price}</p>
        <ul className="features">
          {option.features.map(f => <li key={f}>{f}</li>)}
        </ul>
      </div>
    </div>
  );
};
```

### Conditional Radio Options

```tsx
const ConditionalRadioGroup = ({ isPremium }) => {
  const [selected, setSelected] = useState('basic');

  return (
    <div role="radiogroup">
      <RadioButton
        type="Classic"
        name="tier"
        value="basic"
        label="Basic"
        checked={selected === 'basic'}
        onChange={setSelected}
      />
      <RadioButton
        type="Classic"
        name="tier"
        value="pro"
        label="Pro"
        checked={selected === 'pro'}
        onChange={setSelected}
      />
      <RadioButton
        type="Classic"
        name="tier"
        value="enterprise"
        label="Enterprise"
        checked={selected === 'enterprise'}
        onChange={setSelected}
        disabled={!isPremium}
      />
    </div>
  );
};
```

## Testing Checklist

### Visual Testing
- [ ] Control size: 25Ã—25px circular
- [ ] Dot size: 11Ã—11px (when checked)
- [ ] Gap to label: 16px
- [ ] Classic type: No background container
- [ ] Background type: Rounded 6px container with 6px padding
- [ ] Light mode: Default - transparent control, grey border
- [ ] Light mode: Hover - teal control, darker grey border
- [ ] Light mode: Selected - teal control, dark blue border
- [ ] Light mode: Disabled - light grey control, medium grey dot
- [ ] Dark mode: Dot and label colors invert correctly
- [ ] Background selected: Teal box background

### Functional Testing
- [ ] Click control selects radio
- [ ] Click label selects radio
- [ ] Only one radio selected per group
- [ ] onChange callback fires with correct value
- [ ] Disabled radios don't respond to clicks
- [ ] Checked state displays dot
- [ ] Unchecked state has empty circle

### Accessibility Testing
- [ ] radiogroup role on container
- [ ] Proper label association
- [ ] Arrow key navigation works
- [ ] Space key selects focused radio
- [ ] aria-checked announces correctly
- [ ] Disabled radios have aria-disabled
- [ ] Focus indicator visible
- [ ] Screen reader announces selection
- [ ] Minimum 44Ã—44px touch target

### Mode Testing
- [ ] Default state correct in light mode
- [ ] Default state correct in dark mode
- [ ] Hover state correct in both modes
- [ ] Pressed/selected correct in both modes
- [ ] Disabled state correct in both modes
- [ ] Dot color adapts to mode
- [ ] Label color adapts to mode
- [ ] Background type container adapts
- [ ] Smooth transitions between modes

## Related Components

- **Checkbox** - Multiple selection alternative
- **Dropdown** - Alternative for many options
- **Switch** - Binary toggle alternative
- **Button Group** - Alternative for 2-3 options

## Common Patterns

### Form Field with Validation

```tsx
const [method, setMethod] = useState('');
const [error, setError] = useState('');

const handleSubmit = () => {
  if (!method) {
    setError('Please select a method');
    return;
  }
  // Process form
};

<fieldset>
  <legend>Delivery Method</legend>
  <RadioGroup
    options={deliveryOptions}
    value={method}
    onChange={(v) => { setMethod(v); setError(''); }}
  />
  {error && <span className="error-message">{error}</span>}
</fieldset>
```

### Multi-Step Form

```tsx
const WizardStep = ({ step, currentStep, onStepChange }) => {
  return (
    <RadioButton
      type="Background"
      name="step"
      value={step.id}
      label={step.title}
      checked={currentStep === step.id}
      onChange={onStepChange}
      disabled={!step.isAccessible}
    />
  );
};
```

## Version History

- **v1.0** - Initial radio button component with Classic and Background types, 20 variants

---

*Component Documentation - Ohme Design System*  
*Core UI Component*  
*Last Updated: January 2025*
