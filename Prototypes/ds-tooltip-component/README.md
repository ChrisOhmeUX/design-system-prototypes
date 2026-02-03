# Tooltip Component Documentation

## Overview

Tooltips display helpful information when users hover over or focus on an element. They provide contextual guidance without cluttering the interface and automatically dismiss when no longer needed.

**Component Type:** Functional Component  
**Category:** Overlay / Information Display  
**Token Integration:** Yes - uses inverse color tokens  
**Variants:** 4 (4 arrow directions: â†“, â†, â†‘, â†’)

## Design Specifications

### Dimensions
- **Padding:** 4px (all sides) â†’ `value/spacing/axis_aware/inline/xs` and `value/spacing/axis_aware/stack/xs`
- **Corner Radius:** 6px â†’ `value/corner-radii/md`
- **Arrow Size:** 12Ã—12px (rotated 45Â°)
- **Arrow Offset:** 9px from container edge
- **Width:** Auto (content-driven)
- **Max Width:** Recommended 250px to prevent overly wide tooltips

### Visual Properties
- **Shape:** Rounded rectangle with arrow pointer
- **Typography:** Roobert Regular, 14px / 24px line-height
- **Letter Spacing:** 0.1px
- **Text Alignment:** Center
- **Shadow:** 0px 1px 5.3px rgba(72,70,70,0.07)
- **z-index:** 100 â†’ `value/z-index/tooltip`

### Arrow Directions
- **â†“ (Down):** Arrow points downward (tooltip above trigger)
- **â†‘ (Up):** Arrow points upward (tooltip below trigger)
- **â† (Left):** Arrow points left (tooltip to right of trigger)
- **â†’ (Right):** Arrow points right (tooltip to left of trigger)

## Color System

### Tooltip Container & Arrow

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/surface/inverse` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Content** | `color/content/inverse` | white | ohmedarkblue | #FFFFFF | #032536 |

**Visual Result:**
- Light mode: Dark blue background, white text
- Dark mode: White background, dark blue text
- Arrow matches container background color

---

## Component Properties

```typescript
type TooltipProps = {
  className?: string;
  arrowDirection?: "â†’" | "â†‘" | "â†“" | "â†";
  content: string | React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number; // milliseconds
  offset?: number; // pixels from trigger
};
```

### Property: `arrowDirection` (string, optional)
Controls the direction the arrow points.

**Values:**
- `"â†“"` (default) - Arrow points down (tooltip above)
- `"â†‘"` - Arrow points up (tooltip below)
- `"â†"` - Arrow points left (tooltip to right)
- `"â†’"` - Arrow points right (tooltip to left)

**Note:** Arrow direction is opposite to tooltip position (tooltip above = arrow down)

---

### Property: `content` (string or ReactNode, required)
The text or content to display in the tooltip.

**Recommendations:**
- Keep brief (1-2 sentences)
- Use plain text when possible
- Avoid interactive elements

---

### Property: `position` (string, optional)
Preferred position relative to trigger element.

**Values:**
- `"top"` - Above trigger (arrow points down)
- `"bottom"` - Below trigger (arrow points up)
- `"left"` - Left of trigger (arrow points right)
- `"right"` - Right of trigger (arrow points left)

**Auto-positioning:** Should flip if insufficient space

---

### Property: `delay` (number, optional)
Delay in milliseconds before showing tooltip.

**Default:** 200ms  
**Recommendations:**
- Short delay (200-300ms): Standard tooltips
- No delay (0ms): Critical information
- Long delay (500ms+): Avoid accidental triggers

---

### Property: `offset` (number, optional)
Distance in pixels between tooltip and trigger.

**Default:** 8px  
**Recommendations:** 4-12px typical range

---

## Complete Token Mapping

### Tier 3 Component Tokens (Recommended)

```css
/* Tooltip Container */
--tooltip-surface: var(--color-surface-inverse);
--tooltip-content: var(--color-content-inverse);
--tooltip-padding-inline: var(--value-spacing-axis-aware-inline-xs);
--tooltip-padding-stack: var(--value-spacing-axis-aware-stack-xs);
--tooltip-radius: var(--value-corner-radii-md);
--tooltip-shadow: 0px 1px 5.3px rgba(72, 70, 70, 0.07);
--tooltip-z-index: var(--value-z-index-tooltip);

/* Tooltip Typography */
--tooltip-font-family: var(--typography-font-family-Roobert);
--tooltip-font-size: var(--typography-font-size-14);
--tooltip-font-weight: var(--typography-font-weight-regular);
--tooltip-line-height: var(--typography-line-height-24);
--tooltip-letter-spacing: var(--typography-letter-spacing-0dot1);

/* Tooltip Arrow */
--tooltip-arrow-size: 12px;
--tooltip-arrow-offset: 9px;
--tooltip-arrow-surface: var(--color-surface-inverse);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/inverse` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/inverse` | white | ohmedarkblue | #FFFFFF | #032536 |
| `value/spacing/axis_aware/inline/xs` | xs | xs | 4px | 4px |
| `value/spacing/axis_aware/stack/xs` | xs | xs | 4px | 4px |
| `value/corner-radii/md` | md | md | 6px | 6px |
| `value/z-index/tooltip` | - | - | 100 | 100 |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/ohmedarkblue` | #032536 | Surface (light), content (dark) |
| `color/brand/white` | #FFFFFF | Content (light), surface (dark) |
| `Values/space/space-1x` | 4px | Padding |
| `Values/corner radii/radius-1halfx` | 6px | Corner radius |
| `Values/z-index/z-tooltip` | 100 | Stacking order |

## Anatomy

```
Tooltip Component
â”œâ”€â”€ Container (rounded rectangle)
â”‚   â”œâ”€â”€ Surface: surface/inverse (mode-aware)
â”‚   â”œâ”€â”€ Content: content/inverse (mode-aware)
â”‚   â”œâ”€â”€ Padding: 4px all sides
â”‚   â”œâ”€â”€ Corner Radius: 6px
â”‚   â”œâ”€â”€ Shadow: Subtle drop shadow
â”‚   â””â”€â”€ Text
â”‚       â”œâ”€â”€ Typography: 14px / 24px
â”‚       â”œâ”€â”€ Letter Spacing: 0.1px
â”‚       â””â”€â”€ Alignment: Center
â””â”€â”€ Arrow (12Ã—12px diamond, rotated 45Â°)
    â”œâ”€â”€ Direction: â†“, â†‘, â†, or â†’
    â”œâ”€â”€ Size: 12Ã—12px square rotated
    â”œâ”€â”€ Color: Matches container surface
    â””â”€â”€ Position: 9px from edge
```

### Component Parts

**Container:**
- Background: Dark blue (light mode) / White (dark mode)
- Padding: 4px on all sides
- Corner radius: 6px
- Shadow: Soft elevation shadow
- Auto-width based on content

**Text:**
- Font: Roobert Regular
- Size: 14px / 24px line-height
- Color: White (light mode) / Dark blue (dark mode)
- Alignment: Center
- Max width: ~250px recommended

**Arrow:**
- Size: 12Ã—12px square rotated 45Â°
- Color: Matches container background
- Position: Extends 9px from container edge
- Direction: Points toward trigger element

## Implementation Examples

### Basic Usage

```tsx
import Tooltip from '@/components/core/Tooltip';

// Tooltip above element (arrow down)
<Tooltip content="Click to edit" arrowDirection="â†“">
  <button>Edit</button>
</Tooltip>

// Tooltip below element (arrow up)
<Tooltip content="Save your changes" arrowDirection="â†‘">
  <button>Save</button>
</Tooltip>

// Tooltip to right of element (arrow left)
<Tooltip content="More options" arrowDirection="â†">
  <IconButton icon="Menu" />
</Tooltip>
```

### With Position Prop

```tsx
<Tooltip 
  content="This action cannot be undone"
  position="top"
>
  <Button type="Primary">Delete</Button>
</Tooltip>
```

### Multi-Line Content

```tsx
<Tooltip 
  content={
    <>
      <strong>Pro Feature</strong>
      <br />
      Upgrade to access this feature
    </>
  }
  position="right"
>
  <span className="feature-badge">â˜… Pro</span>
</Tooltip>
```

### With Delay

```tsx
<Tooltip 
  content="Additional information"
  position="top"
  delay={500} // Wait 500ms before showing
>
  <InfoIcon />
</Tooltip>
```

### Controlled Tooltip

```tsx
const [showTooltip, setShowTooltip] = useState(false);

<div
  onMouseEnter={() => setShowTooltip(true)}
  onMouseLeave={() => setShowTooltip(false)}
  onFocus={() => setShowTooltip(true)}
  onBlur={() => setShowTooltip(false)}
>
  <button>Hover me</button>
  {showTooltip && (
    <Tooltip
      content="You found me!"
      arrowDirection="â†“"
    />
  )}
</div>
```

## CSS Implementation

### Core Styles

```css
.tooltip {
  position: absolute;
  z-index: var(--tooltip-z-index);
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(var(--tooltip-shadow));
  pointer-events: none;
}

.tooltip__container {
  background: var(--tooltip-surface);
  color: var(--tooltip-content);
  padding: var(--tooltip-padding-stack) 
           var(--tooltip-padding-inline);
  border-radius: var(--tooltip-radius);
  
  font-family: var(--tooltip-font-family);
  font-size: var(--tooltip-font-size);
  font-weight: var(--tooltip-font-weight);
  line-height: var(--tooltip-line-height);
  letter-spacing: var(--tooltip-letter-spacing);
  text-align: center;
  white-space: nowrap;
  max-width: 250px;
}

.tooltip__arrow {
  width: var(--tooltip-arrow-size);
  height: var(--tooltip-arrow-size);
  background: var(--tooltip-arrow-surface);
  transform: rotate(45deg);
  position: relative;
}

/* Arrow positions */
.tooltip--top {
  flex-direction: column;
  padding-bottom: var(--tooltip-arrow-offset);
}

.tooltip--top .tooltip__arrow {
  margin-bottom: calc(var(--tooltip-arrow-offset) * -1);
}

.tooltip--bottom {
  flex-direction: column-reverse;
  padding-top: var(--tooltip-arrow-offset);
}

.tooltip--bottom .tooltip__arrow {
  margin-top: calc(var(--tooltip-arrow-offset) * -1);
}

.tooltip--left {
  flex-direction: row;
  padding-right: var(--tooltip-arrow-offset);
}

.tooltip--left .tooltip__arrow {
  margin-right: calc(var(--tooltip-arrow-offset) * -1);
}

.tooltip--right {
  flex-direction: row-reverse;
  padding-left: var(--tooltip-arrow-offset);
}

.tooltip--right .tooltip__arrow {
  margin-left: calc(var(--tooltip-arrow-offset) * -1);
}

/* Animation */
.tooltip {
  opacity: 0;
  animation: tooltipFadeIn 200ms ease forwards;
}

@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Positioning Logic

```tsx
const getTooltipPosition = (
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  preferredPosition: Position
) => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const offset = 8;

  const positions = {
    top: {
      x: triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2),
      y: triggerRect.top - tooltipRect.height - offset,
      arrow: "â†“"
    },
    bottom: {
      x: triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2),
      y: triggerRect.bottom + offset,
      arrow: "â†‘"
    },
    left: {
      x: triggerRect.left - tooltipRect.width - offset,
      y: triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2),
      arrow: "â†’"
    },
    right: {
      x: triggerRect.right + offset,
      y: triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2),
      arrow: "â†"
    }
  };

  let position = positions[preferredPosition];

  // Check if tooltip fits in viewport, flip if needed
  if (position.y < 0) position = positions.bottom;
  if (position.y + tooltipRect.height > viewportHeight) position = positions.top;
  if (position.x < 0) position = positions.right;
  if (position.x + tooltipRect.width > viewportWidth) position = positions.left;

  return position;
};
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-surface-inverse: #032536;
  --color-content-inverse: #FFFFFF;
  --tooltip-shadow: 0px 1px 5.3px rgba(72, 70, 70, 0.07);
  --tooltip-z-index: 100;
  --tooltip-padding-inline: 4px;
  --tooltip-padding-stack: 4px;
  --tooltip-radius: 6px;
  --tooltip-arrow-size: 12px;
  --tooltip-arrow-offset: 9px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-surface-inverse: #FFFFFF;
  --color-content-inverse: #032536;
  /* Shadow and spacing remain constant */
}
```

## Usage Guidelines

### When to Use Tooltips

**Helpful Context:**
- Icon button labels
- Abbreviation explanations
- Feature descriptions
- Disabled state reasons

**Supplementary Info:**
- Additional details
- Keyboard shortcuts
- Format requirements
- Character limits

**Clarification:**
- Unfamiliar terms
- Complex UI elements
- Truncated text
- Status indicators

### When NOT to Use

- **Critical Information:** Use visible text instead
- **Long Content:** Use popover or modal
- **Mobile Primary:** Touch doesn't support hover
- **Error Messages:** Use inline error text
- **Required Actions:** Don't hide important instructions

### Content Guidelines

**Keep Brief:**
- 1-2 sentences maximum
- Single concept per tooltip
- 50 characters or less ideal

**Be Helpful:**
- Provide value-adding information
- Don't repeat visible text
- Explain, don't just restate

**Write Clearly:**
- Use plain language
- Avoid jargon
- Be specific and actionable

## Best Practices

### Content Guidelines âœ“
1. **Concise Text:** Maximum 1-2 short sentences
2. **Plain Language:** Avoid technical jargon
3. **Action-Oriented:** Tell users what to do or expect
4. **No Redundancy:** Don't repeat visible interface text
5. **Proper Grammar:** Use complete sentences

### Visual Guidelines âœ“
1. **Auto-Position:** Flip to prevent viewport overflow
2. **Adequate Offset:** Space between tooltip and trigger
3. **Readable Width:** Don't exceed ~250px width
4. **Clear Arrow:** Ensure arrow points to trigger
5. **Consistent Styling:** Use same style throughout app

### Interaction Guidelines âœ“
1. **Hover Delay:** Small delay (200ms) prevents accidental triggers
2. **Focus Support:** Show on keyboard focus too
3. **Quick Dismiss:** Hide immediately when hover/focus ends
4. **No Blocking:** Don't prevent interaction with page
5. **No Nesting:** Don't put tooltips on tooltips

## Accessibility

### ARIA Attributes

```tsx
// Tooltip on button
<button
  aria-label="Edit profile"
  aria-describedby="edit-tooltip"
  onMouseEnter={() => setShowTooltip(true)}
  onMouseLeave={() => setShowTooltip(false)}
  onFocus={() => setShowTooltip(true)}
  onBlur={() => setShowTooltip(false)}
>
  <EditIcon />
</button>

{showTooltip && (
  <Tooltip
    id="edit-tooltip"
    role="tooltip"
    content="Edit your profile information"
    arrowDirection="â†“"
  />
)}
```

### Keyboard Support

```tsx
const TooltipTrigger = ({ children, content }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <Tooltip content={content} />
      )}
    </div>
  );
};
```

### Screen Reader Considerations

```tsx
// For decorative/redundant tooltips
<Tooltip 
  content="Save" 
  aria-hidden="true"
>
  <button aria-label="Save">
    <SaveIcon />
  </button>
</Tooltip>

// For helpful tooltips
<Tooltip 
  id="help-tooltip"
  role="tooltip"
  content="Keyboard shortcut: Cmd+S"
>
  <button aria-describedby="help-tooltip">
    Save
  </button>
</Tooltip>
```

## Advanced Patterns

### Tooltip Hook

```tsx
const useTooltip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 8
      });
    }
  }, [isVisible]);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  return {
    isVisible,
    position,
    triggerRef,
    show,
    hide,
    triggerProps: {
      onMouseEnter: show,
      onMouseLeave: hide,
      onFocus: show,
      onBlur: hide,
      ref: triggerRef
    }
  };
};

// Usage
const { isVisible, position, triggerProps } = useTooltip();

<button {...triggerProps}>
  Hover me
</button>
{isVisible && (
  <Tooltip 
    content="Helpful tip"
    style={{ top: position.y, left: position.x }}
  />
)}
```

### Portal-Based Tooltip

```tsx
import { createPortal } from 'react-dom';

const PortalTooltip = ({ content, triggerRef, isVisible }) => {
  if (!isVisible) return null;

  return createPortal(
    <Tooltip content={content} />,
    document.body
  );
};
```

### Smart Positioning Tooltip

```tsx
const SmartTooltip = ({ content, children }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState('top');
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    // Check space and determine best position
    const spaceAbove = triggerRect.top;
    const spaceBelow = viewportHeight - triggerRect.bottom;
    const spaceLeft = triggerRect.left;
    const spaceRight = viewportWidth - triggerRect.right;

    if (spaceAbove >= tooltipRect.height) {
      setPosition('top');
    } else if (spaceBelow >= tooltipRect.height) {
      setPosition('bottom');
    } else if (spaceRight >= tooltipRect.width) {
      setPosition('right');
    } else {
      setPosition('left');
    }
  };

  useEffect(() => {
    if (visible) {
      updatePosition();
    }
  }, [visible]);

  return (
    <div
      ref={triggerRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div ref={tooltipRef}>
          <Tooltip
            content={content}
            arrowDirection={
              position === 'top' ? 'â†“' :
              position === 'bottom' ? 'â†‘' :
              position === 'left' ? 'â†’' : 'â†'
            }
          />
        </div>
      )}
    </div>
  );
};
```

### Tooltip with Rich Content

```tsx
const RichTooltip = ({ title, description, shortcut }) => {
  return (
    <Tooltip
      content={
        <div className="rich-tooltip">
          <div className="tooltip-title">{title}</div>
          <div className="tooltip-description">{description}</div>
          {shortcut && (
            <div className="tooltip-shortcut">
              <kbd>{shortcut}</kbd>
            </div>
          )}
        </div>
      }
      position="top"
    />
  );
};
```

## Testing Checklist

### Visual Testing
- [ ] Container: 4px padding all sides
- [ ] Container: 6px corner radius
- [ ] Arrow: 12Ã—12px diamond shape
- [ ] Arrow offset: 9px from container edge
- [ ] Light mode: Dark blue background, white text
- [ ] Dark mode: White background, dark blue text
- [ ] Shadow visible in both modes
- [ ] Typography: 14px / 24px line-height
- [ ] All 4 arrow directions render correctly
- [ ] Arrow matches container background color

### Functional Testing
- [ ] Appears on hover
- [ ] Appears on focus
- [ ] Disappears on mouse leave
- [ ] Disappears on blur
- [ ] Delay works (if implemented)
- [ ] Positioning follows trigger element
- [ ] Auto-flips when near viewport edge
- [ ] Doesn't block mouse interactions

### Accessibility Testing
- [ ] role="tooltip" present
- [ ] Trigger has aria-describedby or aria-label
- [ ] Appears on keyboard focus
- [ ] Keyboard dismissible
- [ ] Not announced for decorative content
- [ ] Announced for helpful content
- [ ] Sufficient color contrast (21:1 light, 12.2:1 dark)
- [ ] Doesn't interfere with screen reader navigation

### Mode Testing
- [ ] Surface inverts correctly (dark â†” white)
- [ ] Content inverts correctly (white â†” dark)
- [ ] Arrow color matches surface in both modes
- [ ] Shadow visible in both modes
- [ ] Smooth transitions between modes

## Related Components

- **Popover** - More complex, interactive overlay
- **Modal** - Blocking overlay for critical info
- **Toast Notification** - Temporary feedback messages
- **Dropdown** - Menu-style overlay

## Common Patterns

### Icon Button Tooltips

```tsx
const IconButtonWithTooltip = ({ icon, label, onClick }) => {
  return (
    <Tooltip content={label} position="top">
      <button 
        onClick={onClick}
        aria-label={label}
      >
        <Icon name={icon} />
      </button>
    </Tooltip>
  );
};
```

### Truncated Text Tooltip

```tsx
const TruncatedTextWithTooltip = ({ text, maxLength = 30 }) => {
  const isTruncated = text.length > maxLength;
  const displayText = isTruncated ? `${text.slice(0, maxLength)}...` : text;

  return isTruncated ? (
    <Tooltip content={text} position="top">
      <span className="truncated-text">{displayText}</span>
    </Tooltip>
  ) : (
    <span>{text}</span>
  );
};
```

### Help Text Tooltip

```tsx
const FormFieldWithHelp = ({ label, helpText, ...inputProps }) => {
  return (
    <div className="form-field">
      <label>
        {label}
        <Tooltip content={helpText} position="right">
          <InfoIcon />
        </Tooltip>
      </label>
      <Input {...inputProps} />
    </div>
  );
};
```

## Contrast Requirements

**Both modes meet WCAG AAA standards:**

**Light Mode:**
- Text (white on dark blue): 21:1 âœ“ (AAA)

**Dark Mode:**
- Text (dark blue on white): 12.2:1 âœ“ (AAA)

## Version History

- **v1.0** - Initial tooltip component with 4 arrow directions

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
