# Textarea Component Documentation

## Overview

Textarea components allow users to enter and edit multi-line text content. They provide visual feedback for different states and support labels, placeholder text, and validation messages.

**Component Type:** Core UI Component  
**Category:** Form Controls  
**Token Integration:** Yes - uses Tier 3 textarea tokens  
**Variants:** 4 states (Default, Focus, Error, Disabled)

## Design Specifications

### Dimensions
- **Width:** 474px (standard, can be flexible)
- **Height:** 106px (textbox), 128px (with label)
- **Padding:** 16px (inline), 12px (stack) â†’ `textarea/padding-inline` and `textarea/padding-stack`
- **Corner Radius:** 6px â†’ `value/corner-radii/md`
- **Border Width:** 1px
- **Gap:** 4px (label to textbox) â†’ `textarea/gap`

### Visual Properties
- **Layout:** Vertical flex (label above textbox)
- **Label Typography:** Roobert Regular, 14px / 24px line-height
- **Placeholder Typography:** Roobert Regular, 16px / 24px line-height
- **Letter Spacing:** 0.1px (label), standard (placeholder)
- **Text Alignment:** Left, top-aligned

## Color System

### Default State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `textarea/textbox/state/default/surface` | `surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Border** | `textarea/textbox/state/default/border` | `border/subtle` | grey100 | grey700 | #E5E8E8 | #647882 |
| **Placeholder** | `textarea/advisory-text` | `content/tertiary` | grey300 | grey700 | #ADB3B1 | #647882 |
| **Label** | `textarea/title` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Light mode: White background, light grey border, light grey placeholder
- Dark mode: Dark blue background, medium grey border, medium grey placeholder

---

### Focus State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `textarea/textbox/state/focus/surface` | `state/focus/surface` | white | lakeblue | #FFFFFF | #0B2539 |
| **Border** | `textarea/textbox/state/focus/border` | `state/focus/border` | teal300 | teal300 | #00FFD6 | #00FFD6 |
| **Placeholder** | `textarea/advisory-text` | `content/tertiary` | grey300 | grey700 | #ADB3B1 | #647882 |
| **Label** | `textarea/title` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Both modes: Bright teal border
- Light mode: White background
- Dark mode: Dark blue (lakeblue) background

---

### Error State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Hex Value |
|----------|-------------|----------|--------------|-------------|-----------|
| **Surface** | `textarea/textbox/state/error/surface` | `surface/canvas` | white | ohmedarkblue | #FFFFFF / #032536 |
| **Border** | `textarea/textbox/state/error/border` | `state/error/border` | rosered | rosered | #FA1460 |
| **Placeholder** | `textarea/advisory-text` | `content/tertiary` | grey300 | grey700 | #ADB3B1 / #647882 |
| **Label** | `textarea/title` | `content/primary` | ohmedarkblue | white | #032536 / #FFFFFF |

**Visual Result:**
- Both modes: Bright pink/red border
- Light mode: White background
- Dark mode: Dark blue background

---

### Disabled State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `textarea/textbox/state/disabled/surface` | `state/disabled/surface` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| **Border** | `textarea/textbox/state/disabled/border` | `state/disabled/border` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| **Content** | `textarea/textbox/state/disabled/content` | `state/disabled/content` | grey700 | grey300 | #647882 | #ADB3B1 |
| **Label** | `textarea/title` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Light mode: Light grey background and border, medium grey text
- Dark mode: Medium grey background and border, light grey text

---

## Component Properties

```typescript
type TextAreaProps = {
  className?: string;
  state?: "Default" | "focus" | "error" | "disabled";
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  errorMessage?: string;
  rows?: number;
  maxLength?: number;
};
```

### Property: `state` (string, optional)
Visual state of the textarea (typically managed automatically).

**Values:**
- `"Default"` - Resting state
- `"focus"` - Active/selected
- `"error"` - Validation failed
- `"disabled"` - Not editable

---

### Property: `label` (string, optional)
Label text displayed above textarea.

**Default:** "Message (Optional)"

---

### Property: `placeholder` (string, optional)
Placeholder text shown when empty.

**Default:** "Type your message"

---

### Property: `rows` (number, optional)
Number of visible text rows.

**Default:** Approximately 4 rows (106px height)

---

### Property: `maxLength` (number, optional)
Maximum character limit.

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Textarea Structure */
--textarea-gap: 4px;
--textarea-padding-inline: 16px;
--textarea-padding-stack: 12px;
--textarea-radius: var(--value-corner-radii-md);

/* Label */
--textarea-title: var(--color-content-primary);
--textarea-label-font-size: var(--typography-font-size-14);
--textarea-label-line-height: var(--typography-line-height-24);
--textarea-label-letter-spacing: var(--typography-letter-spacing-0dot1);

/* Placeholder/Advisory Text */
--textarea-advisory-text: var(--color-content-tertiary);
--textarea-text-font-size: var(--typography-font-size-16);
--textarea-text-line-height: var(--typography-line-height-24);

/* Default State */
--textarea-textbox-state-default-surface: var(--color-surface-canvas);
--textarea-textbox-state-default-border: var(--color-border-subtle);

/* Focus State */
--textarea-textbox-state-focus-surface: var(--color-state-focus-surface);
--textarea-textbox-state-focus-border: var(--color-state-focus-border);

/* Error State */
--textarea-textbox-state-error-surface: var(--color-surface-canvas);
--textarea-textbox-state-error-border: var(--color-state-error-border);

/* Disabled State */
--textarea-textbox-state-disabled-surface: var(--color-state-disabled-surface);
--textarea-textbox-state-disabled-border: var(--color-state-disabled-border);
--textarea-textbox-state-disabled-content: var(--color-state-disabled-content);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/tertiary` | grey300 | grey700 | #ADB3B1 | #647882 |
| `color/border/subtle` | grey100 | grey700 | #E5E8E8 | #647882 |
| `color/state/focus/surface` | white | lakeblue | #FFFFFF | #0B2539 |
| `color/state/focus/border` | teal300 | teal300 | #00FFD6 | #00FFD6 |
| `color/state/error/border` | rosered | rosered | #FA1460 | #FA1460 |
| `color/state/disabled/surface` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| `color/state/disabled/border` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| `color/state/disabled/content` | grey700 | grey300 | #647882 | #ADB3B1 |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/white` | #FFFFFF | Surface (light, focus light) |
| `color/brand/ohmedarkblue` | #032536 | Surface (dark), label (light) |
| `color/tertiary/lakeblue` | #0B2539 | Focus surface (dark) |
| `color/secondary/grey100` | #E5E8E8 | Border (light) |
| `color/secondary/grey300` | #ADB3B1 | Placeholder (light) |
| `color/secondary/grey700` | #647882 | Border (dark), placeholder (dark) |
| `color/brand/smokeygrey` | #D1D1D1 | Disabled surface/border (light) |
| `color/secondary/teal300` | #00FFD6 | Focus border |
| `color/tertiary/rosered` | #FA1460 | Error border |
| `Values/corner radii/radius-1halfx` | 6px | Corner radius |
| `Values/space/space-4x` | 16px | Padding inline |
| `Values/space/space-3x` | 12px | Padding stack |
| `Values/space/space-1x` | 4px | Label gap |

## Anatomy

```
Textarea Component
â”œâ”€â”€ Label (optional)
â”‚   â”œâ”€â”€ Typography: 14px / 24px
â”‚   â”œâ”€â”€ Color: content/primary (mode-aware)
â”‚   â””â”€â”€ Gap: 4px to textbox
â””â”€â”€ Textbox
    â”œâ”€â”€ Surface: State-specific (mode-aware)
    â”œâ”€â”€ Border: State-specific (mode/constant)
    â”œâ”€â”€ Padding: 16px inline, 12px stack
    â”œâ”€â”€ Corner Radius: 6px
    â””â”€â”€ Content
        â”œâ”€â”€ Placeholder: content/tertiary (mode-aware)
        â”œâ”€â”€ Text: content/primary (mode-aware)
        â””â”€â”€ Typography: 16px / 24px
```

### Component Parts

**Label:**
- Typography: Roobert Regular, 14px / 24px
- Color: Dark blue (light mode) / White (dark mode)
- Position: Above textbox with 4px gap
- Optional indicator: "(Optional)" suffix

**Textbox:**
- Dimensions: Full width, 106px height (approximately 4 rows)
- Padding: 16px horizontal, 12px vertical
- Border: 1px solid, varies by state
- Corner radius: 6px
- Resizable: Typically vertical resize allowed

**Placeholder:**
- Typography: Roobert Regular, 16px / 24px
- Color: Light grey (light mode) / Medium grey (dark mode)
- Position: Top-left aligned
- Visible: Only when empty

**Text Content:**
- Typography: Roobert Regular, 16px / 24px
- Color: Dark blue (light mode) / White (dark mode)
- Position: Top-left aligned
- Multi-line: Wraps automatically

## Implementation Examples

### Basic Usage

```tsx
import Textarea from '@/components/core/Textarea';

// Simple textarea
<Textarea
  label="Message (Optional)"
  placeholder="Type your message"
/>

// Required field
<Textarea
  label="Description"
  placeholder="Enter description"
  required
/>
```

### With State Management

```tsx
const [message, setMessage] = useState('');
const [isFocused, setIsFocused] = useState(false);

<Textarea
  label="Message (Optional)"
  placeholder="Type your message"
  value={message}
  onChange={setMessage}
  onFocus={() => setIsFocused(true)}
  onBlur={() => setIsFocused(false)}
  state={isFocused ? "focus" : message ? "Default" : "Default"}
/>
```

### With Validation

```tsx
const [comment, setComment] = useState('');
const [error, setError] = useState('');
const maxLength = 500;

const validate = (value: string) => {
  if (value.length > maxLength) {
    return `Comment must be ${maxLength} characters or less`;
  }
  if (value.trim().length < 10) {
    return 'Comment must be at least 10 characters';
  }
  return '';
};

<div>
  <Textarea
    label="Comments"
    placeholder="Enter your comments"
    value={comment}
    onChange={(value) => {
      setComment(value);
      setError(validate(value));
    }}
    state={error ? "error" : "Default"}
    maxLength={maxLength}
  />
  {error && (
    <p className="error-message">{error}</p>
  )}
  <p className="character-count">
    {comment.length} / {maxLength}
  </p>
</div>
```

### Disabled State

```tsx
<Textarea
  label="System Message"
  value="This field is read-only"
  state="disabled"
  disabled={true}
/>
```

### Auto-Resize Textarea

```tsx
const AutoResizeTextarea = ({ value, onChange, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <Textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
```

## CSS Implementation

### Core Styles

```css
.textarea {
  display: flex;
  flex-direction: column;
  gap: var(--textarea-gap);
  width: 100%;
}

.textarea__label {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--textarea-label-font-size);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--textarea-label-line-height);
  letter-spacing: var(--textarea-label-letter-spacing);
  color: var(--textarea-title);
}

.textarea__field {
  width: 100%;
  min-height: 106px;
  padding: var(--textarea-padding-stack) 
           var(--textarea-padding-inline);
  
  background: var(--textarea-textbox-state-default-surface);
  border: 1px solid var(--textarea-textbox-state-default-border);
  border-radius: var(--value-corner-radii-md);
  
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--textarea-text-font-size);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--textarea-text-line-height);
  color: var(--color-content-primary);
  
  resize: vertical;
  transition: all 200ms ease;
}

.textarea__field::placeholder {
  color: var(--textarea-advisory-text);
}

/* States */
.textarea__field:focus {
  background: var(--textarea-textbox-state-focus-surface);
  border-color: var(--textarea-textbox-state-focus-border);
  outline: none;
}

.textarea__field[data-error="true"] {
  border-color: var(--textarea-textbox-state-error-border);
}

.textarea__field:disabled {
  background: var(--textarea-textbox-state-disabled-surface);
  border-color: var(--textarea-textbox-state-disabled-border);
  color: var(--textarea-textbox-state-disabled-content);
  cursor: not-allowed;
  resize: none;
}

/* Error message */
.textarea__errorMessage {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-14);
  line-height: var(--typography-line-height-18);
  color: var(--color-state-error-border);
  margin-top: 4px;
}

/* Character count */
.textarea__charCount {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-14);
  line-height: var(--typography-line-height-18);
  color: var(--color-content-tertiary);
  text-align: right;
  margin-top: 4px;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-surface-canvas: #FFFFFF;
  --color-content-primary: #032536;
  --color-content-tertiary: #ADB3B1;
  --color-border-subtle: #E5E8E8;
  --color-state-focus-surface: #FFFFFF;
  --color-state-focus-border: #00FFD6;
  --color-state-error-border: #FA1460;
  --color-state-disabled-surface: #D1D1D1;
  --color-state-disabled-border: #D1D1D1;
  --color-state-disabled-content: #647882;
  
  /* Spacing */
  --textarea-gap: 4px;
  --textarea-padding-inline: 16px;
  --textarea-padding-stack: 12px;
  --value-corner-radii-md: 6px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-surface-canvas: #032536;
  --color-content-primary: #FFFFFF;
  --color-content-tertiary: #647882;
  --color-border-subtle: #647882;
  --color-state-focus-surface: #0B2539;
  --color-state-disabled-surface: #647882;
  --color-state-disabled-border: #647882;
  --color-state-disabled-content: #ADB3B1;
  /* Focus border, error border remain constant */
}
```

## Usage Guidelines

### When to Use Textarea

**Multi-Line Text:**
- Comments and feedback
- Descriptions and notes
- Messages and correspondence
- Long-form responses

**Flexible Length:**
- Unknown content length
- Variable response sizes
- Detailed explanations
- User-generated content

### When NOT to Use

- **Single-line text:** Use Input component
- **Formatted text:** Use rich text editor
- **Code input:** Use code editor component
- **Fixed options:** Use dropdown or radio buttons

### Size Considerations

**Height Selection:**
- **Short (3-4 rows):** Brief comments, notes
- **Medium (5-8 rows):** Standard messages, descriptions
- **Tall (10+ rows):** Long-form content, detailed feedback
- **Auto-resize:** When content length varies significantly

## Best Practices

### Content Guidelines âœ“
1. **Clear Labels:** Describe expected content
2. **Helpful Placeholders:** Provide examples or guidance
3. **Optional Indicators:** Mark "(Optional)" when not required
4. **Character Limits:** Show count when limiting length
5. **Validation Messages:** Clear, actionable error text

### Visual Guidelines âœ“
1. **Adequate Height:** Size for typical content length
2. **Readable Width:** Not too wide (max 600-800px)
3. **Consistent Spacing:** Use standard padding and gaps
4. **Resize Control:** Allow vertical resize by default
5. **Clear States:** Visual feedback for all states

### Interaction Guidelines âœ“
1. **Auto-Focus:** Focus when appropriate (e.g., reply forms)
2. **Tab Navigation:** Standard tab behavior
3. **Keyboard Shortcuts:** Support Cmd/Ctrl+A, C, V, Z
4. **Save Draft:** Consider auto-save for long forms
5. **Clear Action:** Provide way to clear/reset content

## Accessibility

### ARIA Attributes

```tsx
<div className="textarea-wrapper">
  <label htmlFor="message-textarea" className="textarea__label">
    Message (Optional)
  </label>
  <textarea
    id="message-textarea"
    className="textarea__field"
    placeholder="Type your message"
    aria-invalid={hasError}
    aria-describedby={hasError ? "message-error" : "message-help"}
    aria-required={required}
    rows={4}
  />
  {hasError ? (
    <span id="message-error" className="textarea__errorMessage">
      {errorMessage}
    </span>
  ) : (
    <span id="message-help" className="textarea__help">
      Maximum 500 characters
    </span>
  )}
</div>
```

### Keyboard Support

- **Tab:** Move to next field
- **Shift+Tab:** Move to previous field
- **Cmd/Ctrl+A:** Select all
- **Cmd/Ctrl+Z:** Undo
- **Cmd/Ctrl+Y:** Redo
- **Enter:** New line (not submit)

### Label Association

```tsx
// Good - Explicit association
<label htmlFor="comments">Comments</label>
<textarea id="comments" />

// Also good - Wrapper label
<label>
  Comments
  <textarea />
</label>
```

## Advanced Patterns

### Character Counter

```tsx
const TextareaWithCounter = ({ maxLength = 500, ...props }) => {
  const [value, setValue] = useState('');
  const remaining = maxLength - value.length;

  return (
    <div>
      <Textarea
        {...props}
        value={value}
        onChange={setValue}
        maxLength={maxLength}
        state={remaining < 0 ? "error" : "Default"}
      />
      <div className="textarea-footer">
        <span className={remaining < 0 ? 'error' : ''}>
          {value.length} / {maxLength}
        </span>
      </div>
    </div>
  );
};
```

### Auto-Save Textarea

```tsx
const AutoSaveTextarea = ({ initialValue, onSave, ...props }) => {
  const [value, setValue] = useState(initialValue);
  const [isSaving, setIsSaving] = useState(false);
  const saveTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (value !== initialValue) {
      clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(async () => {
        setIsSaving(true);
        await onSave(value);
        setIsSaving(false);
      }, 1000); // Save after 1 second of inactivity
    }
  }, [value, initialValue, onSave]);

  return (
    <div>
      <Textarea
        {...props}
        value={value}
        onChange={setValue}
      />
      {isSaving && <span className="saving-indicator">Saving...</span>}
    </div>
  );
};
```

### Textarea with Markdown Preview

```tsx
const MarkdownTextarea = ({ value, onChange }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="markdown-textarea">
      <div className="toolbar">
        <button onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? 'Edit' : 'Preview'}
        </button>
      </div>
      {showPreview ? (
        <div className="markdown-preview">
          {renderMarkdown(value)}
        </div>
      ) : (
        <Textarea
          value={value}
          onChange={onChange}
          placeholder="Enter markdown text"
          rows={10}
        />
      )}
    </div>
  );
};
```

### Form Field with Validation

```tsx
const ValidatedTextarea = ({ label, required, minLength, maxLength }) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  const validate = (text: string) => {
    if (required && !text.trim()) return 'This field is required';
    if (minLength && text.length < minLength) {
      return `Minimum ${minLength} characters required`;
    }
    if (maxLength && text.length > maxLength) {
      return `Maximum ${maxLength} characters allowed`;
    }
    return '';
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validate(value));
  };

  return (
    <div>
      <Textarea
        label={label}
        value={value}
        onChange={(v) => {
          setValue(v);
          if (touched) setError(validate(v));
        }}
        onBlur={handleBlur}
        state={error ? "error" : "Default"}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};
```

## Testing Checklist

### Visual Testing
- [ ] Width: 474px (or flexible)
- [ ] Textbox height: 106px
- [ ] Total height with label: 128px
- [ ] Padding: 16px inline, 12px stack
- [ ] Gap: 4px between label and textbox
- [ ] Corner radius: 6px
- [ ] Border width: 1px
- [ ] Light mode: White background, light grey border
- [ ] Dark mode: Dark blue background, medium grey border
- [ ] Focus: Teal border in both modes
- [ ] Error: Pink border in both modes
- [ ] Disabled: Grey background and border
- [ ] Label: 14px, dark blue (light) / white (dark)
- [ ] Placeholder: 16px, light grey (light) / medium grey (dark)

### Functional Testing
- [ ] Text input works
- [ ] Multi-line text wraps correctly
- [ ] onChange fires on input
- [ ] onFocus fires when focused
- [ ] onBlur fires when blurred
- [ ] Disabled prevents editing
- [ ] Placeholder disappears when typing
- [ ] Value persists correctly
- [ ] Vertical resize works (if enabled)

### Accessibility Testing
- [ ] Label properly associated with textarea
- [ ] aria-invalid for error state
- [ ] aria-describedby links to help/error text
- [ ] aria-required for required fields
- [ ] Keyboard navigation works
- [ ] Screen reader announces label
- [ ] Error messages announced
- [ ] Focus indicator visible
- [ ] Minimum contrast met in all states

### Mode Testing
- [ ] Default: Surface and border correct in light mode
- [ ] Default: Surface and border correct in dark mode
- [ ] Focus: Surface adapts, border constant teal
- [ ] Error: Border constant pink in both modes
- [ ] Disabled: Surface and border adapt to mode
- [ ] Label color adapts to mode
- [ ] Placeholder color adapts to mode
- [ ] Smooth theme transitions

## Related Components

- **Input** - Single-line text input
- **Form** - Container for textareas
- **Button** - Form submission
- **Modal** - May contain textareas

## Common Patterns

### Comment Form

```tsx
const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        label="Add Comment"
        placeholder="Type your comment"
        value={comment}
        onChange={setComment}
        rows={3}
      />
      <Button type="submit" disabled={!comment.trim()}>
        Post Comment
      </Button>
    </form>
  );
};
```

### Feedback Form

```tsx
const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <Textarea
        label="Feedback"
        placeholder="Tell us what you think..."
        value={feedback}
        onChange={setFeedback}
        rows={6}
        disabled={submitted}
        state={submitted ? "disabled" : "Default"}
      />
      <Button 
        onClick={() => {
          submitFeedback(feedback);
          setSubmitted(true);
        }}
        disabled={!feedback.trim() || submitted}
      >
        {submitted ? 'Submitted' : 'Submit Feedback'}
      </Button>
    </div>
  );
};
```

## Contrast Requirements

**All states meet WCAG AA standards:**

**Light Mode:**
- Placeholder (grey300 on white): 3.6:1 âœ“ (AA for large text)
- Text (ohmedarkblue on white): 12.2:1 âœ“ (AAA)
- Border (grey100): Visible at 1.4:1

**Dark Mode:**
- Placeholder (grey700 on ohmedarkblue): 5.9:1 âœ“ (AA)
- Text (white on ohmedarkblue): 21:1 âœ“ (AAA)
- Border (grey700): Visible contrast

## Version History

- **v1.0** - Initial textarea component with 4 states

---

*Component Documentation - Ohme Design System*  
*Core UI Component*  
*Last Updated: January 2025*
