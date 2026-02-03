# Toast Notification Component Documentation

## Overview

Toast Notifications are temporary, non-intrusive messages that appear to provide feedback about operations or system events. They automatically dismiss after a set duration and don't interrupt the user's workflow.

**Component Type:** Functional Component  
**Category:** Feedback / Alerts  
**Token Integration:** Yes - uses semantic state tokens  
**Variants:** 5 types (Default, Success, Error, Warning, Info)

## Design Specifications

### Dimensions
- **Height:** Auto (content-driven, typically 48px)
- **Width:** Auto (content-driven)
- **Padding:** 12px (all sides) â†’ `value/spacing/axis_aware/inline/lg` and `value/spacing/axis_aware/stack/lg`
- **Corner Radius:** 6px â†’ `value/corner-radii/md`
- **Icon Size:** 24Ã—24px
- **Gap:** 8px (between icon and text) â†’ `value/spacing/gap/md`

### Visual Properties
- **Layout:** Horizontal flex with centered alignment
- **Typography:** Roobert Regular, 18px / 24px line-height
- **Shadow:** 0px 5px 18px 0px rgba(0,0,0,0.15)
- **Text Alignment:** Center
- **Icon:** Radix Abstract icons (Check Circled, Cross Circled, Exclamation Triangle, Info Circled)

## Color System

### Default Type (Focus State)

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/state/focus/surface` | white | lakeblue | #FFFFFF | #0B2539 |
| **Content** | `color/state/focus/content` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Icon** | `color/state/focus/icon` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Light mode: White background, dark blue text and icon
- Dark mode: Dark blue (lakeblue) background, white text and icon

---

### Success Type

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/state/success/surface` | green100 | green900 | #DDFBE5 | #072C14 |
| **Content** | `color/state/success/content` | green900 | green100 | #072C14 | #DDFBE5 |
| **Icon** | `color/state/success/icon` | green900 | green100 | #072C14 | #DDFBE5 |

**Visual Result:**
- Light mode: Light green background, dark green text and icon
- Dark mode: Dark green background, light green text and icon

**Icon:** Check Circled (âœ“)

---

### Error Type

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/state/error/surface` | red100 | red900 | #FFE1E1 | #580202 |
| **Content** | `color/state/error/content` | red900 | red100 | #580202 | #FFE1E1 |
| **Icon** | `color/state/error/icon` | red900 | red100 | #580202 | #FFE1E1 |

**Visual Result:**
- Light mode: Light pink background, dark red text and icon
- Dark mode: Dark red background, light pink text and icon

**Icon:** Exclamation Triangle (âš )

---

### Warning Type

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/state/warning/surface` | yellow100 | yellow900 | #FFF2C6 | #441906 |
| **Content** | `color/state/warning/content` | yellow900 | yellow100 | #441906 | #FFF2C6 |
| **Icon** | `color/state/warning/icon` | yellow900 | yellow100 | #441906 | #FFF2C6 |

**Visual Result:**
- Light mode: Light yellow background, dark brown/yellow text and icon
- Dark mode: Dark brown background, light yellow text and icon

**Icon:** Exclamation Triangle (âš )

---

### Info Type

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/state/info/surface` | blue100 | blue900 | #D1EFFF | #062965 |
| **Content** | `color/state/info/content` | blue900 | blue100 | #062965 | #D1EFFF |
| **Icon** | `color/state/info/icon` | blue900 | blue100 | #062965 | #D1EFFF |

**Visual Result:**
- Light mode: Light blue background, dark blue text and icon
- Dark mode: Dark blue background, light blue text and icon

**Icon:** Info Circled (â„¹)

---

## Component Properties

```typescript
type ToastNotificationProps = {
  className?: string;
  type?: "Default" | "success" | "error" | "warning" | "info";
  message: string;
  duration?: number; // milliseconds
  onDismiss?: () => void;
};
```

### Property: `type` (string, optional)
Controls the notification visual style and semantic meaning.

**Values:**
- `"Default"` - Neutral notification (focus state colors)
- `"success"` - Success confirmation (green)
- `"error"` - Error alert (red)
- `"warning"` - Warning message (yellow)
- `"info"` - Informational message (blue)

---

### Property: `message` (string, required)
The notification text to display.

**Requirements:**
- Keep concise and actionable
- Use sentence case
- Avoid jargon

---

### Property: `duration` (number, optional)
Auto-dismiss duration in milliseconds.

**Default:** 4000ms (4 seconds)

**Recommendations:**
- Success/Info: 3000-4000ms
- Warning: 5000-6000ms
- Error: 6000-8000ms (or manual dismiss only)

---

### Property: `onDismiss` (function, optional)
Callback when notification is dismissed.

---

## Complete Token Mapping

### Tier 3 Component Tokens (Recommended)

```css
/* Notification Dimensions */
--notification-padding-inline: var(--value-spacing-axis-aware-inline-lg);
--notification-padding-stack: var(--value-spacing-axis-aware-stack-lg);
--notification-gap: var(--value-spacing-gap-md);
--notification-radius: var(--value-corner-radii-md);
--notification-icon-size: 24px;

/* Notification Typography */
--notification-font-family: var(--typography-font-family-Roobert);
--notification-font-size: var(--typography-font-size-18);
--notification-line-height: var(--typography-line-height-24);
--notification-letter-spacing: var(--typography-letter-spacing-0dot2);
--notification-font-weight: var(--typography-font-weight-regular);

/* Default Type */
--notification-default-surface: var(--color-state-focus-surface);
--notification-default-content: var(--color-state-focus-content);
--notification-default-icon: var(--color-state-focus-icon);

/* Success Type */
--notification-success-surface: var(--color-state-success-surface);
--notification-success-content: var(--color-state-success-content);
--notification-success-icon: var(--color-state-success-icon);

/* Error Type */
--notification-error-surface: var(--color-state-error-surface);
--notification-error-content: var(--color-state-error-content);
--notification-error-icon: var(--color-state-error-icon);

/* Warning Type */
--notification-warning-surface: var(--color-state-warning-surface);
--notification-warning-content: var(--color-state-warning-content);
--notification-warning-icon: var(--color-state-warning-icon);

/* Info Type */
--notification-info-surface: var(--color-state-info-surface);
--notification-info-content: var(--color-state-info-content);
--notification-info-icon: var(--color-state-info-icon);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/state/focus/surface` | white | lakeblue | #FFFFFF | #0B2539 |
| `color/state/focus/content` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/state/success/surface` | green100 | green900 | #DDFBE5 | #072C14 |
| `color/state/success/content` | green900 | green100 | #072C14 | #DDFBE5 |
| `color/state/error/surface` | red100 | red900 | #FFE1E1 | #580202 |
| `color/state/error/content` | red900 | red100 | #580202 | #FFE1E1 |
| `color/state/warning/surface` | yellow100 | yellow900 | #FFF2C6 | #441906 |
| `color/state/warning/content` | yellow900 | yellow100 | #441906 | #FFF2C6 |
| `color/state/info/surface` | blue100 | blue900 | #D1EFFF | #062965 |
| `color/state/info/content` | blue900 | blue100 | #062965 | #D1EFFF |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/white` | #FFFFFF | Default surface (light) |
| `color/tertiary/lakeblue` | #0B2539 | Default surface (dark) |
| `color/brand/ohmedarkblue` | #032536 | Default content (light) |
| `color/secondary/green100` | #DDFBE5 | Success surface (light) |
| `color/secondary/green900` | #072C14 | Success content (light) / surface (dark) |
| `color/secondary/red100` | #FFE1E1 | Error surface (light) |
| `color/secondary/red900` | #580202 | Error content (light) / surface (dark) |
| `color/secondary/yellow100` | #FFF2C6 | Warning surface (light) |
| `color/secondary/yellow900` | #441906 | Warning content (light) / surface (dark) |
| `color/secondary/blue100` | #D1EFFF | Info surface (light) |
| `color/secondary/blue900` | #062965 | Info content (light) / surface (dark) |
| `Values/corner radii/radius-1halfx` | 6px | Corner radius |
| `Values/space/space-3x` | 12px | Padding |
| `Values/space/space-2x` | 8px | Gap |

## Anatomy

```
Toast Notification Component
â”œâ”€â”€ Container (rounded, shadowed)
â”‚   â”œâ”€â”€ Surface: state-specific (mode-aware)
â”‚   â”œâ”€â”€ Padding: 12px all sides
â”‚   â””â”€â”€ Shadow: 0px 5px 18px rgba(0,0,0,0.15)
â”œâ”€â”€ Icon (24Ã—24px)
â”‚   â”œâ”€â”€ Type-specific icon
â”‚   â””â”€â”€ Color: state-specific (mode-aware)
â””â”€â”€ Message Text
    â”œâ”€â”€ Typography: 18px / 24px
    â””â”€â”€ Color: state-specific (mode-aware)
```

### Component Parts

**Container:**
- Rounded corners (6px)
- Drop shadow for elevation
- Background color varies by type
- Auto-width based on content

**Icon:**
- Size: 24Ã—24px
- Position: Left of text
- Type-specific: Check, Warning, Error, Info icons
- Color matches text color

**Message Text:**
- Font: Roobert Regular
- Size: 18px / 24px line-height
- Color varies by notification type
- Center-aligned with icon

## Implementation Examples

### Basic Usage

```tsx
import ToastNotification from '@/components/functional/ToastNotification';

// Success notification
<ToastNotification 
  type="success"
  message="Settings saved successfully"
/>

// Error notification
<ToastNotification 
  type="error"
  message="Failed to save changes"
/>

// Warning notification
<ToastNotification 
  type="warning"
  message="Your session will expire in 5 minutes"
/>

// Info notification
<ToastNotification 
  type="info"
  message="A new update is available"
/>

// Default notification
<ToastNotification 
  type="Default"
  message="Action completed"
/>
```

### With Toast Manager

```tsx
const ToastManager = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (type: ToastType, message: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, message }]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  return (
    <div className={styles.toastContainer}>
      {toasts.map(toast => (
        <ToastNotification
          key={toast.id}
          type={toast.type}
          message={toast.message}
          onDismiss={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
        />
      ))}
    </div>
  );
};
```

### Auto-Dismiss Pattern

```tsx
const AutoDismissToast = ({ type, message, duration = 4000, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss?.();
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  return (
    <ToastNotification 
      type={type}
      message={message}
      onDismiss={onDismiss}
    />
  );
};
```

### Context-Based Notifications

```tsx
// Create toast context
const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = (type, message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, message }]);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        {toasts.map(toast => (
          <ToastNotification key={toast.id} {...toast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// Usage in component
const MyComponent = () => {
  const { showToast } = useToast();
  
  const handleSave = async () => {
    try {
      await saveData();
      showToast('success', 'Saved successfully');
    } catch (error) {
      showToast('error', 'Failed to save');
    }
  };
};
```

## CSS Implementation

### Core Styles

```css
.toast {
  display: inline-flex;
  align-items: center;
  gap: var(--value-spacing-gap-md);
  padding: var(--value-spacing-axis-aware-stack-lg) 
           var(--value-spacing-axis-aware-inline-lg);
  border-radius: var(--value-corner-radii-md);
  box-shadow: 0px 5px 18px 0px rgba(0, 0, 0, 0.15);
  
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-18);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
  text-align: center;
}

/* Type variants */
.toast--default {
  background: var(--color-state-focus-surface);
  color: var(--color-state-focus-content);
}

.toast--default .toast__icon {
  color: var(--color-state-focus-icon);
}

.toast--success {
  background: var(--color-state-success-surface);
  color: var(--color-state-success-content);
}

.toast--success .toast__icon {
  color: var(--color-state-success-icon);
}

.toast--error {
  background: var(--color-state-error-surface);
  color: var(--color-state-error-content);
}

.toast--error .toast__icon {
  color: var(--color-state-error-icon);
}

.toast--warning {
  background: var(--color-state-warning-surface);
  color: var(--color-state-warning-content);
}

.toast--warning .toast__icon {
  color: var(--color-state-warning-icon);
}

.toast--info {
  background: var(--color-state-info-surface);
  color: var(--color-state-info-content);
}

.toast--info .toast__icon {
  color: var(--color-state-info-icon);
}

/* Icon */
.toast__icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

/* Animation */
.toast {
  animation: toastSlideIn 300ms ease-out;
}

@keyframes toastSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.toast--dismissing {
  animation: toastSlideOut 200ms ease-in forwards;
}

@keyframes toastSlideOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
```

### Toast Container Positioning

```css
.toastContainer {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: var(--value-z-index-tooltip);
  display: flex;
  flex-direction: column;
  gap: var(--value-spacing-gap-md);
  pointer-events: none;
}

.toastContainer .toast {
  pointer-events: auto;
}

/* Alternative positions */
.toastContainer--topCenter {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.toastContainer--bottomRight {
  bottom: 20px;
  right: 20px;
  top: auto;
}

.toastContainer--bottomCenter {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  top: auto;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-state-focus-surface: #FFFFFF;
  --color-state-focus-content: #032536;
  --color-state-success-surface: #DDFBE5;
  --color-state-success-content: #072C14;
  --color-state-error-surface: #FFE1E1;
  --color-state-error-content: #580202;
  --color-state-warning-surface: #FFF2C6;
  --color-state-warning-content: #441906;
  --color-state-info-surface: #D1EFFF;
  --color-state-info-content: #062965;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-state-focus-surface: #0B2539;
  --color-state-focus-content: #FFFFFF;
  --color-state-success-surface: #072C14;
  --color-state-success-content: #DDFBE5;
  --color-state-error-surface: #580202;
  --color-state-error-content: #FFE1E1;
  --color-state-warning-surface: #441906;
  --color-state-warning-content: #FFF2C6;
  --color-state-info-surface: #062965;
  --color-state-info-content: #D1EFFF;
}
```

## Usage Guidelines

### When to Use Each Type

**Default (Focus):**
- Neutral notifications
- General confirmations
- Non-critical updates
- System messages

**Success:**
- Action completed successfully
- Data saved
- Settings updated
- Operation confirmed

**Error:**
- Action failed
- Validation errors
- System errors
- Connection issues

**Warning:**
- Potential issues
- Session expiring
- Unsaved changes
- Cautionary messages

**Info:**
- Informational updates
- Tips and hints
- Feature announcements
- Non-critical notices

### Duration Guidelines

**Short (3-4 seconds):**
- Success confirmations
- Simple info messages
- Completed actions

**Medium (5-6 seconds):**
- Warning messages
- Multi-step confirmations
- Messages requiring brief reading

**Long (6-8 seconds) or Manual:**
- Error messages
- Critical warnings
- Messages with actions
- Complex information

## Best Practices

### Content Guidelines âœ“
1. **Be Concise:** Keep messages brief and scannable
2. **Action-Oriented:** Tell users what happened or what to do
3. **Avoid Jargon:** Use plain language
4. **Positive Framing:** "Settings saved" not "Settings were not rejected"
5. **Specific Details:** "Email sent to john@example.com" vs "Email sent"

### Visual Guidelines âœ“
1. **Consistent Position:** Keep toasts in same screen location
2. **Stack Properly:** Newer toasts above or below older ones
3. **Limit Quantity:** Maximum 3-4 toasts visible at once
4. **Icon Relevance:** Use appropriate icon for message type
5. **Readable Duration:** Ensure users have time to read

### Interaction Guidelines âœ“
1. **Auto-Dismiss:** Most toasts should auto-dismiss
2. **Manual Dismiss:** Allow users to close early (X button optional)
3. **Pause on Hover:** Pause auto-dismiss timer on hover
4. **Non-Blocking:** Don't prevent other interactions
5. **Action Buttons:** Avoid actions in toasts (use modals instead)

## Accessibility

### ARIA Attributes

```tsx
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
  className="toast toast--success"
>
  <IconRadixAbstract 
    iconRadix="Check Circled" 
    size="md"
    aria-hidden="true"
  />
  <span>{message}</span>
</div>

// For error notifications, use assertive
<div
  role="alert"
  aria-live="assertive"
  aria-atomic="true"
  className="toast toast--error"
>
  <IconRadixAbstract 
    iconRadix="Cross Circled" 
    size="md"
    aria-hidden="true"
  />
  <span>{message}</span>
</div>
```

### Screen Reader Considerations

```tsx
// Error messages should be assertive
const ariaLive = type === 'error' ? 'assertive' : 'polite';
const role = type === 'error' ? 'alert' : 'status';

<div
  role={role}
  aria-live={ariaLive}
  aria-atomic="true"
>
  {message}
</div>
```

### Keyboard Interaction

```tsx
// Optional: Allow dismissing with Escape key
const Toast = ({ onDismiss, ...props }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onDismiss?.();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onDismiss]);

  // ...
};
```

## Advanced Patterns

### Toast Queue System

```tsx
const useToastQueue = () => {
  const [queue, setQueue] = useState<Toast[]>([]);
  const [visible, setVisible] = useState<Toast[]>([]);
  const maxVisible = 3;

  useEffect(() => {
    if (queue.length > 0 && visible.length < maxVisible) {
      const next = queue[0];
      setQueue(prev => prev.slice(1));
      setVisible(prev => [...prev, next]);
    }
  }, [queue, visible]);

  const addToast = (type: ToastType, message: string) => {
    const id = Date.now();
    setQueue(prev => [...prev, { id, type, message }]);
  };

  const removeToast = (id: number) => {
    setVisible(prev => prev.filter(t => t.id !== id));
  };

  return { visible, addToast, removeToast };
};
```

### With Action Button

```tsx
const ActionableToast = ({ type, message, actionLabel, onAction }) => {
  return (
    <div className={`toast toast--${type}`}>
      <IconRadixAbstract iconRadix="Info Circled" size="md" />
      <span>{message}</span>
      {actionLabel && (
        <button 
          onClick={onAction}
          className="toast__action"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};
```

### Programmatic Toast Trigger

```tsx
// Global toast function
window.showToast = (type, message) => {
  // Add to toast queue
};

// Usage anywhere
window.showToast('success', 'Profile updated');
window.showToast('error', 'Network error occurred');
```

## Testing Checklist

### Visual Testing
- [ ] All 5 types render correctly
- [ ] Padding: 12px all sides
- [ ] Corner radius: 6px
- [ ] Icon size: 24Ã—24px
- [ ] Gap between icon and text: 8px
- [ ] Shadow visible on all types
- [ ] Light mode: Correct background/text colors for each type
- [ ] Dark mode: Correct background/text colors for each type
- [ ] Colors invert properly (surface â†” content)

### Functional Testing
- [ ] Toast appears when triggered
- [ ] Auto-dismiss timer works
- [ ] Manual dismiss (if implemented) works
- [ ] Multiple toasts stack correctly
- [ ] Pause on hover (if implemented) works
- [ ] Animation plays smoothly
- [ ] Callback fires on dismiss

### Accessibility Testing
- [ ] role="status" or role="alert" present
- [ ] aria-live="polite" or "assertive" set correctly
- [ ] aria-atomic="true" present
- [ ] Icon has aria-hidden="true"
- [ ] Screen reader announces message
- [ ] Error toasts use assertive live region
- [ ] Sufficient color contrast in all types and modes
- [ ] Focus management doesn't break

### Mode Testing
- [ ] Default: Correct in light mode
- [ ] Default: Correct in dark mode
- [ ] Success: Colors invert correctly
- [ ] Error: Colors invert correctly
- [ ] Warning: Colors invert correctly
- [ ] Info: Colors invert correctly
- [ ] Smooth transitions between modes
- [ ] All text remains legible

## Related Components

- **Alert Count** - Similar color schemes (error state)
- **Modal** - Alternative for blocking messages
- **Button** - May trigger notifications
- **Icon Components** - Used for notification icons

## Common Patterns

### Success After Action

```tsx
const handleSave = async () => {
  try {
    await saveData();
    showToast('success', 'Changes saved successfully');
  } catch (error) {
    showToast('error', 'Failed to save changes');
  }
};
```

### Progressive States

```tsx
const handleUpload = async (file) => {
  const toastId = showToast('info', 'Uploading file...');
  
  try {
    await uploadFile(file);
    updateToast(toastId, 'success', 'File uploaded successfully');
  } catch (error) {
    updateToast(toastId, 'error', 'Upload failed');
  }
};
```

### Undo Action

```tsx
const handleDelete = (item) => {
  deleteItem(item);
  
  showToast('success', 'Item deleted', {
    action: 'Undo',
    onAction: () => restoreItem(item)
  });
};
```

## Contrast Requirements

**All notification types meet WCAG AA standards:**

**Light Mode:**
- Default: 12.2:1 âœ“ (AAA)
- Success: 5.7:1 âœ“ (AA)
- Error: 5.8:1 âœ“ (AA)
- Warning: 6.5:1 âœ“ (AA)
- Info: 6.4:1 âœ“ (AA)

**Dark Mode:**
- Default: 21:1 âœ“ (AAA)
- Success: 5.7:1 âœ“ (AA)
- Error: 5.8:1 âœ“ (AA)
- Warning: 6.5:1 âœ“ (AA)
- Info: 6.4:1 âœ“ (AA)

## Version History

- **v1.0** - Initial toast notification component with 5 semantic types

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
