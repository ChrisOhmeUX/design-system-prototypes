# Input Component Documentation

## Overview

Input fields allow users to enter and edit text data. The Ohme input system provides extensive variants to support diverse data types, contexts, and interaction patterns across the portal.

**Component Type:** Core UI Component  
**Category:** Form Controls  
**Token Integration:** Yes - uses Tier 3 Input tokens  
**Total Variants:** 500+ (multiple types Ã— 3 sizes Ã— 2 alignments Ã— 5 states Ã— 2 label options)

## Variant Matrix

### Input Types (11 total)
- **primary** - Standard text input
- **email** - Email address input
- **percent** - Percentage value input
- **currency** - Currency/monetary value input
- **tag** - Tag/keyword input
- **search** - Search query input
- **input-icon-left** - Input with left icon
- **input-icon-right** - Input with right icon
- **input-CusText-left** - Input with custom left text
- **input-CusText-left-2** - Input with alternative custom left text

### Size Variants
- **Large** - 48px height (desktop)
- **Small** - 40px height (compact)
- **Mobile** - 56px height (touch-optimized)

### Alignment Options
- **Left** - Left-aligned text
- **Right** - Right-aligned text

### States
- **Default** - Empty field
- **Filled** - Contains text
- **Focused** - Active/in focus
- **Error** - Validation error
- **Disabled** - Not editable

### Additional Variants
- **Label** - With/without label (2 options)

**Total:** 11 types Ã— 3 sizes Ã— 2 alignments Ã— 5 states Ã— 2 label = **660 possible variants** (actual ~500+ implemented)

## Design Specifications

### Size Dimensions

| Size | Height | Padding H | Padding V | Typography | Corner Radius |
|------|--------|-----------|-----------|------------|---------------|
| **Large** | 48px | 16px | 12px | 16px / 24px | 6px |
| **Small** | 40px | 16px | 8px | 16px / 24px | 6px |
| **Mobile** | 56px | 16px | 16px | 16px / 24px | 6px |

### Visual Properties
- **Border Width:** 1px (1.5px for error)
- **Font Family:** Roobert Regular
- **Font Weight:** 400
- **Text Alignment:** Left or Right
- **Label Gap:** 4px (label to field)

## Color System

### Default State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `Input/field/surface/active` | `surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Border** | `Input/field/border/active` | `border/default` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |
| **Placeholder** | `Input/field/content/placeholder` | `content/secondary` | grey700 | grey300 | #647882 | #ADB3B1 |

**Visual Result:**
- Light mode: White background, light grey border, medium grey placeholder
- Dark mode: Dark blue background, light grey border, light grey placeholder

---

### Filled State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `Input/field/surface/filled` | `surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Border** | `Input/field/border/filled` | `border/default` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |
| **Content** | `Input/field/content/filled` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Light mode: White background, light grey border, dark blue text
- Dark mode: Dark blue background, light grey border, white text

---

### Focus State

| Property | Tier 3 Token | â†’ Tier 2 | Resolves To | Hex Value |
|----------|-------------|----------|-------------|-----------|
| **Surface** | `Input/field/surface/focus` | `surface/canvas` | (mode-aware) | #FFFFFF / #032536 |
| **Border** | `Input/field/border/focus` | `surface/accent` | highlighterteal | #00FFD6 |
| **Content** | `Input/field/content/filled` | `content/primary` | (mode-aware) | #032536 / #FFFFFF |

**Visual Result:**
- Both modes: Bright teal border
- Light mode: White background, dark blue text
- Dark mode: Dark blue background, white text

---

### Error State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Hex Value |
|----------|-------------|----------|--------------|-------------|-----------|
| **Surface** | `Input/field/surface/error` | `surface/canvas` | white | ohmedarkblue | #FFFFFF / #032536 |
| **Border** | `Input/field/border/error` | `state/error/border` | rosered | rosered | #FA1460 |
| **Content** | `Input/field/content/filled` | `content/primary` | ohmedarkblue | white | #032536 / #FFFFFF |
| **Error Message** | `Input/error-message/Content` | `state/error/border` | rosered | rosered | #FA1460 |

**Visual Result:**
- Both modes: Bright pink/red border (1.5px) and error message
- Light mode: White background, dark blue text
- Dark mode: Dark blue background, white text

---

### Disabled State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `Input/field/surface/disabled` | `state/disabled/surface` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| **Border** | `Input/field/border/disabled` | `state/disabled/border` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| **Content** | `Input/field/content/disabled` | `state/disabled/content` | grey700 | grey300 | #647882 | #ADB3B1 |

**Visual Result:**
- Light mode: Light grey background and border, medium grey text
- Dark mode: Medium grey background and border, light grey text

---

### Label

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Content** | `Input/Label/Content` â†’ `content/secondary` | grey700 | grey300 | #647882 | #ADB3B1 |

**Typography:** Roobert Regular, 14px / 18px line-height

---

## Component Properties

```typescript
type InputProps = {
  className?: string;
  type?: "primary" | "email" | "percent" | "currency" | "tag" | "search" | 
         "input-icon-left" | "input-icon-right" | "input-CusText-left" | "input-CusText-left-2";
  size?: "Large" | "Small" | "Mobile";
  alignment?: "Left" | "Right";
  state?: "Default" | "Filled" | "Focused" | "Error" | "Disabled";
  label?: boolean;
  labelText?: string;
  placeholder?: string;
  value?: string;
  errorMessage?: string;
  onChange?: (value: string) => void;
};
```

### Property: `type` (string, optional)
Controls the input type and formatting.

**Values:**
- `"primary"` (default) - Standard text input
- `"email"` - Email address validation
- `"percent"` - Percentage formatting (%, 0-100)
- `"currency"` - Currency formatting (Â£, $, â‚¬)
- `"tag"` - Pill-style tag input
- `"search"` - Search with magnifying glass icon
- `"input-icon-left"` - Custom icon on left
- `"input-icon-right"` - Custom icon on right
- `"input-CusText-left"` - Custom text prefix (left)
- `"input-CusText-left-2"` - Alternative custom text prefix

---

### Property: `size` (string, optional)
Controls input dimensions.

**Values:**
- `"Large"` - 48px height, desktop contexts
- `"Small"` - 40px height, compact interfaces  
- `"Mobile"` - 56px height, mobile/touch-optimized

---

### Property: `alignment` (string, optional)
Text alignment within input field.

**Values:**
- `"Left"` (default) - Left-aligned text
- `"Right"` - Right-aligned (numeric values, amounts)

---

### Property: `state` (string, optional)
Visual state of the input (typically managed automatically).

**Values:**
- `"Default"` - Empty field
- `"Filled"` - Has content
- `"Focused"` - Active/selected
- `"Error"` - Validation failed
- `"Disabled"` - Not editable

---

### Property: `label` (boolean, optional)
Whether to show label above input.

**Values:**
- `true` - Shows label
- `false` - No label

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Input Field */
--input-field-surface-active: var(--color-surface-canvas);
--input-field-surface-disabled: var(--color-state-disabled-surface);
--input-field-surface-error: var(--color-surface-canvas);
--input-field-surface-filled: var(--color-surface-canvas);
--input-field-surface-focus: var(--color-surface-canvas);

--input-field-content-placeholder: var(--color-content-secondary);
--input-field-content-filled: var(--color-content-primary);
--input-field-content-disabled: var(--color-state-disabled-content);

--input-field-border-active: var(--color-border-default);
--input-field-border-disabled: var(--color-state-disabled-border);
--input-field-border-error: var(--color-state-error-border);
--input-field-border-filled: var(--color-border-default);
--input-field-border-focus: var(--color-surface-accent);

/* Label */
--input-label-content: var(--color-content-secondary);
--input-label-font-size: var(--typography-font-size-14);
--input-label-line-height: var(--typography-line-height-18);

/* Error Message */
--input-error-message-content: var(--color-state-error-border);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/secondary` | grey700 | grey300 | #647882 | #ADB3B1 |
| `color/border/default` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |
| `color/state/disabled/surface` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| `color/state/disabled/content` | grey700 | grey300 | #647882 | #ADB3B1 |
| `color/state/disabled/border` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| `color/state/error/border` | rosered | rosered | #FA1460 | #FA1460 |
| `color/surface/accent` | highlighterteal | highlighterteal | #00FFD6 | #00FFD6 |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/white` | #FFFFFF | Canvas background (light) |
| `color/brand/ohmedarkblue` | #032536 | Canvas (dark), primary content (light) |
| `color/secondary/grey300` | #ADB3B1 | Borders, secondary content (dark) |
| `color/secondary/grey700` | #647882 | Secondary content (light), borders (dark) |
| `color/brand/smokeygrey` | #D1D1D1 | Disabled surface (light) |
| `color/tertiary/rosered` | #FA1460 | Error border & message |
| `color/brand/highlighterteal` | #00FFD6 | Focus border |
| `Values/corner radii/radius-1halfx` | 6px | Corner radius |
| `Values/space/space-4x` | 16px | Horizontal padding |
| `Values/space/space-3x` | 12px | Large vertical padding |

## Implementation Examples

### Basic Inputs

```tsx
import Input from '@/components/core/Input';

// Standard text input
<Input 
  type="primary"
  size="Large"
  label={true}
  labelText="Full Name"
  placeholder="Enter your name"
/>

// Email input
<Input 
  type="email"
  size="Large"
  label={true}
  labelText="Email Address"
  placeholder="you@example.com"
/>

// Currency input
<Input 
  type="currency"
  size="Large"
  alignment="Right"
  label={true}
  labelText="Amount"
  placeholder="Â£0.00"
/>

// Percentage input
<Input 
  type="percent"
  size="Large"
  alignment="Right"
  label={true}
  labelText="Discount"
  placeholder="0%"
/>
```

### With Icons

```tsx
// Search input
<Input 
  type="search"
  size="Large"
  placeholder="Search..."
/>

// Input with left icon
<Input 
  type="input-icon-left"
  size="Large"
  label={true}
  labelText="Location"
  placeholder="Enter location"
/>

// Input with right icon
<Input 
  type="input-icon-right"
  size="Large"
  label={true}
  labelText="Website"
  placeholder="https://"
/>
```

### With State Management

```tsx
const [email, setEmail] = useState('');
const [error, setError] = useState('');

const validateEmail = (value: string) => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (!isValid) {
    setError('Please enter a valid email address');
  } else {
    setError('');
  }
};

<Input 
  type="email"
  size="Large"
  label={true}
  labelText="Email"
  value={email}
  onChange={(value) => {
    setEmail(value);
    validateEmail(value);
  }}
  state={error ? "Error" : email ? "Filled" : "Default"}
  errorMessage={error}
/>
{error && (
  <p className="error-message">{error}</p>
)}
```

### Tag Input

```tsx
const [tags, setTags] = useState<string[]>([]);
const [inputValue, setInputValue] = useState('');

const addTag = () => {
  if (inputValue.trim()) {
    setTags([...tags, inputValue.trim()]);
    setInputValue('');
  }
};

<div>
  <div className="tags-display">
    {tags.map((tag, index) => (
      <span key={index} className="tag-pill">
        {tag}
        <button onClick={() => setTags(tags.filter((_, i) => i !== index))}>Ã—</button>
      </span>
    ))}
  </div>
  <Input 
    type="tag"
    size="Large"
    value={inputValue}
    onChange={setInputValue}
    onKeyDown={(e) => e.key === 'Enter' && addTag()}
    placeholder="Add tag..."
  />
</div>
```

### Disabled Input

```tsx
<Input 
  type="primary"
  size="Large"
  label={true}
  labelText="Username"
  value="john.doe"
  state="Disabled"
  disabled={true}
/>
```

## CSS Implementation

### Core Styles

```css
.input {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.input__label {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-14);
  line-height: var(--typography-line-height-18);
  color: var(--color-content-secondary);
}

.input__field {
  display: flex;
  align-items: center;
  gap: var(--value-spacing-gap-lg);
  padding: var(--input-field-padding-stack) 
           var(--input-field-padding-inline);
  
  background: var(--input-field-surface-active);
  border: 1px solid var(--input-field-border-active);
  border-radius: var(--value-corner-radii-md);
  
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-16);
  line-height: var(--typography-line-height-24);
  font-weight: var(--typography-font-weight-regular);
  
  transition: all 200ms ease;
}

/* Size variants */
.input__field--large {
  height: 48px;
  padding: 12px 16px;
}

.input__field--small {
  height: 40px;
  padding: 8px 16px;
}

.input__field--mobile {
  height: 56px;
  padding: 16px;
}

/* Alignment */
.input__field--left {
  text-align: left;
}

.input__field--right {
  text-align: right;
}

/* States */
.input__field:focus {
  border-color: var(--input-field-border-focus);
  outline: none;
}

.input__field[data-error="true"] {
  border-color: var(--input-field-border-error);
  border-width: 1.5px;
}

.input__field:disabled {
  background: var(--input-field-surface-disabled);
  border-color: var(--input-field-border-disabled);
  color: var(--input-field-content-disabled);
  cursor: not-allowed;
}

/* Placeholder */
.input__field::placeholder {
  color: var(--input-field-content-placeholder);
}

/* Error message */
.input__errorMessage {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-14);
  line-height: var(--typography-line-height-18);
  color: var(--input-error-message-content);
  margin-top: 4px;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-surface-canvas: #FFFFFF;
  --color-content-primary: #032536;
  --color-content-secondary: #647882;
  --color-border-default: #ADB3B1;
  --color-state-disabled-surface: #D1D1D1;
  --color-state-disabled-content: #647882;
  --color-state-disabled-border: #D1D1D1;
  --color-state-error-border: #FA1460;
  --color-surface-accent: #00FFD6;
  
  /* Spacing */
  --value-spacing-gap-lg: 12px;
  --value-corner-radii-md: 6px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-surface-canvas: #032536;
  --color-content-primary: #FFFFFF;
  --color-content-secondary: #ADB3B1;
  --color-state-disabled-surface: #647882;
  --color-state-disabled-content: #ADB3B1;
  --color-state-disabled-border: #647882;
  /* Border default, error, and accent remain constant */
}
```

## Input Type Specifications

### Primary (Standard Text)
- General text input
- No special formatting
- Left or right alignment
- Most common variant

### Email
- Email address format
- Validation for @ symbol
- Lowercase preferred
- Left alignment typical

### Percent
- Percentage values (0-100)
- % suffix display
- Right alignment typical
- Numeric input

### Currency
- Monetary values
- Currency symbol prefix (Â£, $, â‚¬)
- Right alignment typical
- Decimal formatting

### Tag
- Keyword/label input
- Pill-style visual treatment
- Multiple tag support
- Left alignment typical

### Search
- Search queries
- Magnifying glass icon
- Left alignment
- Clear button on filled

### Icon Variants
- **input-icon-left:** Custom icon before text
- **input-icon-right:** Custom icon after text
- Icons use `color/content/icon 2`

### Custom Text Variants
- **input-CusText-left:** Custom text prefix (e.g., "https://")
- **input-CusText-left-2:** Alternative prefix format

## Usage Guidelines

### When to Use Input Types

**Primary:**
- Names, titles, descriptions
- General text entry
- Single-line text fields

**Email:**
- Email addresses only
- User registration
- Contact forms

**Percent:**
- Discount rates
- Completion percentages
- Performance metrics

**Currency:**
- Prices, costs, budgets
- Payment amounts
- Financial values

**Tag:**
- Keywords, labels
- Categories, topics
- Multi-item entry

**Search:**
- Search bars
- Filter fields
- Query inputs

### Size Selection

**Large (48px):**
- Desktop forms
- Primary inputs
- Standard contexts

**Small (40px):**
- Compact forms
- Data tables
- Dense interfaces

**Mobile (56px):**
- Mobile forms
- Touch-optimized
- Accessibility-focused

### Alignment Selection

**Left Alignment:**
- Text content (names, emails)
- Search queries
- General text

**Right Alignment:**
- Numeric values (percent, currency)
- Monetary amounts
- Quantities

## Accessibility

### ARIA Attributes

```tsx
<div className="input-wrapper">
  <label htmlFor="email-input" className="input__label">
    Email Address
  </label>
  <input
    id="email-input"
    type="email"
    className="input__field"
    placeholder="you@example.com"
    aria-invalid={hasError}
    aria-describedby={hasError ? "email-error" : undefined}
    required
  />
  {hasError && (
    <span id="email-error" className="input__errorMessage">
      Please enter a valid email address
    </span>
  )}
</div>
```

### Keyboard Navigation

- **Tab:** Move to next field
- **Shift+Tab:** Move to previous field
- **Enter:** Submit form (in forms)
- **Esc:** Clear field (optional)

### Label Association

```tsx
// Good - Proper association
<label htmlFor="username">Username</label>
<input id="username" type="text" />

// Also good - Wrapper label
<label>
  Username
  <input type="text" />
</label>
```

## Testing Checklist

### Visual Testing
- [ ] All sizes render correctly (48px, 40px, 56px)
- [ ] Light mode: White background, light grey border
- [ ] Dark mode: Dark blue background, light grey border
- [ ] Focus: Teal border in both modes
- [ ] Error: Pink border (1.5px), pink error message
- [ ] Disabled: Light grey (light) / medium grey (dark)
- [ ] Placeholder: Medium grey (light) / light grey (dark)
- [ ] Filled text: Dark blue (light) / white (dark)
- [ ] Label: Medium grey (light) / light grey (dark)

### Functional Testing
- [ ] Text input works
- [ ] onChange fires correctly
- [ ] Focus states trigger
- [ ] Disabled prevents editing
- [ ] Alignment applies correctly
- [ ] Icons display properly
- [ ] Error validation works

### Accessibility Testing
- [ ] Label properly associated
- [ ] Keyboard navigation works
- [ ] Focus indicator visible
- [ ] Screen reader announces label
- [ ] Error message announced
- [ ] aria-invalid for errors
- [ ] Minimum contrast met in all states
- [ ] Touch targets â‰¥44Ã—44px

### Mode Testing
- [ ] Surface colors correct in light mode
- [ ] Surface colors correct in dark mode
- [ ] Text colors adapt properly
- [ ] Label color correct in both modes
- [ ] Border colors constant/adaptive as specified
- [ ] Smooth theme transitions

## Related Components

- **Dropdown** - Similar field structure
- **Textarea** - Multi-line text input
- **Form** - Container for inputs
- **Button** - Form submission

## Common Patterns

### Controlled Input

```tsx
const [value, setValue] = useState('');

<Input 
  type="primary"
  value={value}
  onChange={setValue}
  placeholder="Enter text"
/>
```

### Form Field with Validation

```tsx
const [email, setEmail] = useState('');
const [touched, setTouched] = useState(false);
const [error, setError] = useState('');

const validate = (value: string) => {
  if (!value) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email';
  return '';
};

<Input 
  type="email"
  size="Large"
  label={true}
  labelText="Email"
  value={email}
  onChange={(v) => {
    setEmail(v);
    if (touched) setError(validate(v));
  }}
  onBlur={() => {
    setTouched(true);
    setError(validate(email));
  }}
  state={error ? "Error" : email ? "Filled" : "Default"}
  errorMessage={error}
/>
```

## Version History

- **v1.0** - Initial input component with 500+ variants

---

*Component Documentation - Ohme Design System*  
*Core UI Component*  
*Last Updated: January 2025*
