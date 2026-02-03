# Alert Count Component Documentation

## Overview

The Alert Count component is a small circular indicator that displays the number of unread messages, notifications, or pending items. It provides users with quick, at-a-glance awareness of items requiring attention.

**Component Type:** Core UI Component  
**Category:** Indicators / Badges  
**Token Integration:** Yes - uses error state semantic tokens

## Design Specifications

### Dimensions
- **Height:** 16px (fixed)
- **Width:** Auto-expands based on content
  - Single digit (1-9): ~16px (circular)
  - Double digit (10-99): ~24px
  - Triple digit (100-999): ~32px
  - 4+ digits (1000+): Expands horizontally as needed

### Visual Properties
- **Shape:** Circular for small numbers, pill-shaped for larger counts
- **Corner Radius:** `value/corner-radii/full` (100px) â†’ Fully rounded ends
- **Typography:** Roobert Regular, 12px, 400 weight
- **Line Height:** 16px
- **Letter Spacing:** 0.1px
- **Text Alignment:** Center

## Color System

The Alert Count uses error state tokens which automatically adapt to light and dark modes.

### Light Mode

| Property | Token Reference | Resolves To | Hex Value |
|----------|----------------|-------------|-----------|
| **Surface** | `color/state/error/surface` | `color/secondary/red100` | #FFE1E1 |
| **Content** | `color/state/error/content` | `color/secondary/red900` | #580202 |

**Visual Result:** Light pink background with dark red text

---

### Dark Mode

| Property | Token Reference | Resolves To | Hex Value |
|----------|----------------|-------------|-----------|
| **Surface** | `color/state/error/surface` | `color/secondary/red900` | #580202 |
| **Content** | `color/state/error/content` | `color/secondary/red100` | #FFE1E1 |

**Visual Result:** Dark red background with light pink text

---

### Token Architecture

**Tier 3 Component Tokens (Recommended):**
```css
--alert-count-surface: var(--color-state-error-surface);
--alert-count-content: var(--color-state-error-content);
--alert-count-height: 16px;
--alert-count-radius: var(--value-corner-radii-full);
--alert-count-padding-inline: var(--value-spacing-axis-aware-inline-sm);
--alert-count-padding-stack: var(--value-spacing-axis-aware-stack-xs);
```

**Tier 2 Semantic Tokens:**
- `color/state/error/surface` (mode-aware: red100 â†” red900)
- `color/state/error/content` (mode-aware: red900 â†” red100)
- `value/corner-radii/full` â†’ 100px
- `value/spacing/axis_aware/inline/sm` â†’ 6px
- `value/spacing/axis_aware/stack/xs` â†’ 4px

**Tier 1 Primitives:**
- `color/secondary/red100` = #FFE1E1
- `color/secondary/red900` = #580202
- `Values/corner radii/radius-max` = 100px
- `Values/space/space-1Halfx` = 6px
- `Values/space/space-1` = 4px

## Component Properties

```typescript
type AlertCountProps = {
  count: number;
  className?: string;
  maxDisplay?: number; // Optional: e.g., 99 for "99+" display
};
```

### Property: `count` (number, required)
The numeric value to display.

**Behavior:**
- Values 1-9: Circular badge
- Values 10+: Expands horizontally
- Consider truncation for very large values

---

### Property: `className` (string, optional)
Additional CSS classes for custom styling or positioning.

---

### Property: `maxDisplay` (number, optional)
Maximum value to show before adding "+" suffix.

**Examples:**
- `maxDisplay={99}` â†’ Shows "99+" for counts â‰¥100
- `maxDisplay={999}` â†’ Shows "999+" for counts â‰¥1000

## Anatomy

```
Alert Count Component (16px height, auto width)
â””â”€â”€ Wrapper Container
    â”œâ”€â”€ Background: color/state/error/surface
    â”œâ”€â”€ Border Radius: value/corner-radii/full (100px)
    â””â”€â”€ Counter Text
        â”œâ”€â”€ Content: Numeric value (1-9999+)
        â””â”€â”€ Color: color/state/error/content
```

### Component Parts
1. **Wrapper:** Container with error surface background, fully rounded corners
2. **Counter Text:** Error content color displaying the count value

### Responsive Behavior
- **Small numbers (1-9):** Wrapper appears circular (~16Ã—16px)
- **Larger numbers:** Wrapper expands horizontally while maintaining 16px height
- **Mode Switching:** Colors automatically invert between light/dark modes

## Implementation Examples

### Basic Usage

```tsx
import AlertCount from '@/components/core/AlertCount';

// Simple count
<AlertCount count={5} />

// With truncation
<AlertCount count={150} maxDisplay={99} />
// Displays: "99+"
```

### With Icon Button

```tsx
<button 
  className="notification-button"
  aria-label="Notifications, 3 unread"
>
  <IconRadixObjects iconRadix="Bell" size="md" />
  <AlertCount count={3} />
</button>
```

### Navigation Item

```tsx
const NavItem = ({ icon, label, count, href }) => {
  return (
    <a 
      href={href}
      className={styles.navItem}
      aria-label={count > 0 ? `${label}, ${count} unread` : label}
    >
      <div className={styles.iconWrapper}>
        <IconRadixObjects iconRadix={icon} size="md" />
        {count > 0 && <AlertCount count={count} />}
      </div>
      <span>{label}</span>
    </a>
  );
};

// Usage
<nav>
  <NavItem icon="Bell" label="Notifications" count={12} href="/notifications" />
  <NavItem icon="Envelope Closed" label="Messages" count={5} href="/messages" />
</nav>
```

### Conditional Rendering

```tsx
const MessageIndicator = ({ unreadCount }) => {
  return (
    <div className={styles.messageContainer}>
      <IconRadixObjects iconRadix="Chat Bubble" size="md" />
      {unreadCount > 0 && (
        <AlertCount count={unreadCount} />
      )}
    </div>
  );
};
```

### Tab with Alert Count

```tsx
<button
  role="tab"
  aria-selected={isActive}
  aria-label={`Pending Jobs${count > 0 ? `, ${count} items` : ''}`}
  className={styles.tab}
>
  <span>Pending Jobs</span>
  {count > 0 && <AlertCount count={count} />}
</button>
```

## CSS Implementation

### Core Styles

```css
.alertCount {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  /* Dimensions */
  height: 16px;
  min-width: 16px;
  
  /* Spacing */
  padding: var(--value-spacing-axis-aware-stack-xs) 
           var(--value-spacing-axis-aware-inline-sm);
  
  /* Appearance */
  background: var(--color-state-error-surface);
  border-radius: var(--value-corner-radii-full);
  
  /* Typography */
  font-family: 'Roobert', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: var(--color-state-error-content);
  text-align: center;
  white-space: nowrap;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-state-error-surface: #FFE1E1;
  --color-state-error-content: #580202;
  --value-corner-radii-full: 100px;
  --value-spacing-axis-aware-inline-sm: 6px;
  --value-spacing-axis-aware-stack-xs: 4px;
}

[data-theme="dark"] {
  /* Dark mode - colors invert */
  --color-state-error-surface: #580202;
  --color-state-error-content: #FFE1E1;
}
```

### Positioning Pattern

```css
.parentWithBadge {
  position: relative;
  display: inline-block;
}

.alertCount {
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 1;
}
```

## Usage Guidelines

### When to Use

**Notifications & Messages:**
- Unread messages in chat/messaging apps
- System notifications and alerts
- Inbox unread counts
- Activity feed updates

**Task Management:**
- Pending tasks or approvals
- Action items requiring attention
- Assigned tasks
- Overdue items

**Job-Related Indicators:**
- New job matches
- Pending applications
- Employer responses
- Status updates

**E-commerce:**
- Shopping cart item count
- Wishlist item count
- Order updates
- Saved items

### When NOT to Use

- Large numbers (>9999) without truncation
- Decorative purposes (use Badge instead)
- Non-numeric data
- Low-priority items
- Continuous metrics (use different visualization)

## Best Practices

### Content âœ“
1. **Numeric Only:** Display only numbers
2. **Truncation:** Use "99+", "999+", or "9999+" for large counts
3. **Real-time Updates:** Update counts immediately when items change
4. **Accuracy:** Ensure count matches actual unread/pending items
5. **Zero Handling:** Hide component when count is 0

### Visual âœ“
1. **High Contrast:** Colors automatically provide proper contrast in both modes
2. **Consistent Placement:** Position consistently (typically top-right)
3. **Maintain Shape:** Circular for 1-9, pill for larger numbers
4. **Token Compliance:** Always use semantic error state tokens

### Interaction âœ“
1. **Non-interactive:** Alert count itself is not clickable
2. **Parent Clickable:** Parent element (button, link) handles interaction
3. **Screen Reader:** Include count in parent's aria-label
4. **Live Updates:** Use aria-live for dynamic count changes

## Accessibility

### ARIA Labels

```tsx
// Parent element includes count
<button aria-label="Notifications, 12 unread">
  <IconRadixObjects iconRadix="Bell" size="md" />
  <AlertCount count={12} />
</button>

// Conditional label
<button 
  aria-label={`Messages${count > 0 ? `, ${count} new` : ''}`}
>
  <IconRadixObjects iconRadix="Envelope Closed" size="md" />
  {count > 0 && <AlertCount count={count} />}
</button>
```

### Live Regions

For real-time updates:

```tsx
<div 
  className={styles.iconWrapper}
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  <IconRadixObjects iconRadix="Bell" size="md" />
  <AlertCount count={unreadCount} />
  <span className="sr-only">{unreadCount} unread notifications</span>
</div>
```

### Contrast Requirements

**Light Mode:**
- Background: #FFE1E1
- Text: #580202
- Contrast: 5.8:1 âœ“ (Exceeds WCAG AA requirement)

**Dark Mode:**
- Background: #580202
- Text: #FFE1E1
- Contrast: 5.8:1 âœ“ (Exceeds WCAG AA requirement)

## Advanced Features

### Count Formatting Helper

```tsx
const formatAlertCount = (count: number, max: number = 99): string => {
  if (count <= max) return count.toString();
  return `${max}+`;
};

// Usage
<AlertCount count={formatAlertCount(150, 99)} />
// Displays: "99+"
```

### Animated Updates

```tsx
import { useState, useEffect } from 'react';

const AnimatedAlertCount = ({ count }: { count: number }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    setIsUpdating(true);
    const timer = setTimeout(() => setIsUpdating(false), 300);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div 
      className={`${styles.alertCount} ${isUpdating ? styles.pulse : ''}`}
      role="status"
      aria-live="polite"
    >
      {count}
    </div>
  );
};
```

### Animation CSS

```css
@keyframes countPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}

.pulse {
  animation: countPulse 300ms ease-out;
}

@keyframes badgeAppear {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.alertCount {
  animation: badgeAppear 200ms ease-out;
}
```

## Positioning Patterns

### Top-Right Corner (Most Common)

```css
.badgeContainer {
  position: relative;
  display: inline-block;
}

.alertCount {
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: var(--value-z-index-base);
}
```

### Inline After Element

```css
.inlineBadge {
  display: inline-flex;
  align-items: center;
  gap: var(--value-spacing-gap-md);
}

.alertCount {
  position: relative;
}
```

### Within Tab

```css
.tabWithBadge {
  display: flex;
  align-items: center;
  gap: var(--value-spacing-gap-md);
  padding: var(--value-spacing-axis-aware-stack-md)
           var(--value-spacing-axis-aware-inline-md);
}
```

## Complete Token Mapping

### Tier 3 Component Tokens (Recommended)

```css
/* Alert Count Component */
--alert-count-surface: var(--color-state-error-surface);
--alert-count-content: var(--color-state-error-content);
--alert-count-height: 16px;
--alert-count-min-width: 16px;
--alert-count-radius: var(--value-corner-radii-full);
--alert-count-padding-inline: var(--value-spacing-axis-aware-inline-sm);
--alert-count-padding-stack: var(--value-spacing-axis-aware-stack-xs);
--alert-count-font-size: 12px;
--alert-count-line-height: 16px;
--alert-count-letter-spacing: 0.1px;
--alert-count-font-family: var(--typography-font-family-Roobert);
--alert-count-font-weight: var(--typography-font-weight-regular);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Value (Light) | Value (Dark) |
|-------|-------------|-------------|---------------|--------------|
| `color/state/error/surface` | red100 | red900 | #FFE1E1 | #580202 |
| `color/state/error/content` | red900 | red100 | #580202 | #FFE1E1 |
| `value/corner-radii/full` | radius-max | radius-max | 100px | 100px |
| `value/spacing/axis_aware/inline/sm` | sm | sm | 6px | 6px |
| `value/spacing/axis_aware/stack/xs` | xs | xs | 4px | 4px |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/secondary/red100` | #FFE1E1 | Light pink |
| `color/secondary/red900` | #580202 | Dark red |
| `Values/corner radii/radius-max` | 100px | Full rounding |
| `Values/space/space-1Halfx` | 6px | Inline padding |
| `Values/space/space-1` | 4px | Stack padding |
| `typography/font-size/12` | 12px | Text size |
| `typography/line-height/16` | 16px | Line height |
| `typography/letter-spacing/0dot1` | 0.1px | Letter spacing |
| `typography/font-weight/regular` | 400 | Font weight |

## Real-World Examples

### Notification Center

```tsx
const NotificationButton = ({ unreadCount }: { unreadCount: number }) => {
  return (
    <button 
      className={styles.notificationButton}
      aria-label={`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ''}`}
    >
      <IconRadixObjects iconRadix="Bell" size="md" />
      {unreadCount > 0 && <AlertCount count={unreadCount} />}
    </button>
  );
};
```

### Shopping Cart

```tsx
const CartIcon = ({ itemCount }: { itemCount: number }) => {
  const formattedCount = itemCount > 99 ? 99 : itemCount;
  
  return (
    <a 
      href="/cart"
      className={styles.cartLink}
      aria-label={`Shopping cart, ${itemCount} items`}
    >
      <div className={styles.iconWrapper}>
        <IconRadixObjects iconRadix="Card Stack" size="md" />
        {itemCount > 0 && (
          <AlertCount count={formattedCount} maxDisplay={99} />
        )}
      </div>
    </a>
  );
};
```

### Tab Navigation

```tsx
const TabGroup = ({ tabs }: { tabs: Tab[] }) => {
  return (
    <div role="tablist" className={styles.tabList}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={tab.isActive}
          aria-label={`${tab.label}${tab.count > 0 ? `, ${tab.count} items` : ''}`}
          className={styles.tab}
        >
          <span>{tab.label}</span>
          {tab.count > 0 && <AlertCount count={tab.count} />}
        </button>
      ))}
    </div>
  );
};
```

### Job Dashboard

```tsx
const JobStatusCard = ({ status, count }: { status: string; count: number }) => {
  return (
    <div className={styles.statusCard}>
      <div className={styles.cardHeader}>
        <h3>{status}</h3>
        {count > 0 && <AlertCount count={count} />}
      </div>
      <p>{count} {status.toLowerCase()} jobs</p>
    </div>
  );
};
```

## Testing Checklist

### Visual Testing
- [ ] Circular appearance for single digit (1-9) in both modes
- [ ] Horizontal expansion for double digits (10-99) in both modes
- [ ] Proper truncation with "99+" format
- [ ] Maintains 16px height across all counts
- [ ] Corners remain fully rounded (pill shape)
- [ ] Text properly centered vertically and horizontally
- [ ] Light mode: Light pink background with dark red text
- [ ] Dark mode: Dark red background with light pink text

### Functional Testing
- [ ] Count updates dynamically
- [ ] Hides when count is 0
- [ ] Appears when count increases from 0
- [ ] Formats large numbers correctly
- [ ] Doesn't break parent layout when expanding
- [ ] Works with different parent elements

### Accessibility Testing
- [ ] Parent element has descriptive aria-label including count
- [ ] Count changes announced via aria-live
- [ ] Sufficient color contrast in light mode (5.8:1)
- [ ] Sufficient color contrast in dark mode (5.8:1)
- [ ] Keyboard navigation works on parent element
- [ ] Screen reader announces count updates

### Mode Testing
- [ ] Renders correctly in light mode
- [ ] Renders correctly in dark mode
- [ ] Smooth transition when theme changes
- [ ] Text remains legible in both modes
- [ ] Contrast requirements met in both modes

## Related Components

- **Pill Component:** Similar rounded shape, different purpose (labels vs counts)
- **Badge Component:** General labeling system
- **Icon Components:** Often used as parent elements
- **Tab Component:** Frequently contains alert counts
- **Navigation Items:** Common container for alert counts

## Common Patterns

### Hide/Show Logic

```tsx
const ConditionalAlert = ({ count }: { count: number }) => {
  if (count === 0) return null;
  
  return <AlertCount count={count} />;
};
```

### Format Utility

```tsx
const getDisplayCount = (count: number): string | number => {
  if (count > 9999) return '9999+';
  if (count > 999) return '999+';
  if (count > 99) return '99+';
  return count;
};
```

### Animation Hook

```tsx
const useCountAnimation = (count: number) => {
  const [prevCount, setPrevCount] = useState(count);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (count !== prevCount) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      setPrevCount(count);
      return () => clearTimeout(timer);
    }
  }, [count, prevCount]);

  return isAnimating;
};
```

## Version History

- **v1.0** - Initial alert count component with auto-expanding behavior

---

*Component Documentation - Ohme Design System*  
*Core UI Component*  
*Last Updated: January 2025*
