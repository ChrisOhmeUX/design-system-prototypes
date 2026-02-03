# Validation List System Documentation

## Overview

The Validation List System provides real-time feedback for form validation requirements, primarily used for password strength indicators. The system consists of two components: the **List** (individual validation item) and the **Validation List** (container grouping multiple items).

**Component Type:** Functional Component  
**Category:** Form Feedback / Validation  
**Design Context:** Dark backgrounds (brand/inverse surfaces)  
**Token Integration:** Full design system compliance

---

## Component Architecture

```
Validation List System
â”œâ”€â”€ List (Validation List Item)
â”‚   â”œâ”€â”€ state: default | failed | passed
â”‚   â””â”€â”€ Anatomy: Icon + Text
â””â”€â”€ Validation List (Container)
    â”œâ”€â”€ mobile: true | false
    â””â”€â”€ Composition: Multiple List instances
```

---

# Part 1: List Component (Validation List Item)

## Component Overview

The List component represents a single validation requirement with visual state indication. It communicates whether a requirement is pending (default), met (passed), or unmet (failed).

**Figma Component:** `list`  
**Figma Node:** `3292:66965`  
**States:** 3 (default, failed, passed)  
**Width:** Flexible (inherits from parent, default 381px)

---

## Variant Matrix

| State | Icon Color | Text Color | Use Case |
|-------|------------|------------|----------|
| **default** | White | White | Requirement not yet validated |
| **passed** | Green | Green | Requirement successfully met |
| **failed** | Red | Red | Requirement not met |

---

## Design Specifications

### Dimensions

| Property | Value | Notes |
|----------|-------|-------|
| **Height** | 24px | Single line, auto from content |
| **Width** | 381px | Default, inherits from container |
| **Icon container** | 24 Ã— 24px | Fixed |
| **Icon inner shape** | 35% of container | 8.4 Ã— 8.4px |

### Layout Structure

| Property | Value | Token Reference |
|----------|-------|-----------------|
| **Display** | Flex | â€” |
| **Direction** | Row | â€” |
| **Gap** | 12px | `value/spacing/gap/lg` |
| **Align items** | flex-start | Top alignment |
| **Text flex** | 1 0 0 | Fills remaining space |

### Anatomy

```
List Item (381 Ã— 24px)
â”œâ”€â”€ Icon Container (24 Ã— 24px)
â”‚   â”œâ”€â”€ Position: relative
â”‚   â”œâ”€â”€ Flex-shrink: 0
â”‚   â””â”€â”€ Inner Shape
â”‚       â”œâ”€â”€ Inset: 32.5% (centers the dot)
â”‚       â”œâ”€â”€ Size: ~8.4 Ã— 8.4px
â”‚       â””â”€â”€ Fill: State-dependent color
â””â”€â”€ Text (flex: 1 0 0)
    â”œâ”€â”€ Typography: 18px / 24px Regular
    â”œâ”€â”€ Color: State-dependent
    â”œâ”€â”€ Opacity: 70%
    â””â”€â”€ Content: Requirement description
```

---

## State Specifications

### Default State

The initial state before validation is attempted. Indicates a pending requirement.

| Property | Token | Value |
|----------|-------|-------|
| **Icon fill** | `color/content/inverse` | #FFFFFF |
| **Text color** | `color/content/inverse` | #FFFFFF |
| **Text opacity** | â€” | 70% |

```css
/* Default State */
.listItem--default {
  --list-item-icon-fill: var(--color-content-inverse);
  --list-item-text-color: var(--color-content-inverse);
}
```

---

### Passed State

Indicates the requirement has been successfully met.

| Property | Token | Value |
|----------|-------|-------|
| **Icon fill** | `color/state/success/content` | #072C14 |
| **Text color** | `color/state/success/content` | #072C14 |
| **Text opacity** | â€” | 70% |

```css
/* Passed State */
.listItem--passed {
  --list-item-icon-fill: var(--color-state-success-content);
  --list-item-text-color: var(--color-state-success-content);
}
```

---

### Failed State

Indicates the requirement has not been met after validation.

| Property | Token | Value |
|----------|-------|-------|
| **Icon fill** | `color/state/error/content` | #580202 |
| **Text color** | `color/state/error/content` | #580202 |
| **Text opacity** | â€” | 70% |

```css
/* Failed State */
.listItem--failed {
  --list-item-icon-fill: var(--color-state-error-content);
  --list-item-text-color: var(--color-state-error-content);
}
```

---

## Typography

| Property | Token | Value |
|----------|-------|-------|
| **Font family** | `typography/font-family/Roobert` | "Roobert" |
| **Font size** | `typography/font-size/18` | 18px |
| **Font weight** | `typography/font-weight/regular` | 400 |
| **Line height** | `typography/line-height/24` | 24px |
| **Letter spacing** | `typography/letter-spacing/0dot2` | 0.2px |
| **Opacity** | â€” | 70% (0.7) |

**Typography Style Reference:** `desktop/body/p/regular`

---

## Icon Specifications

| Property | Value | Notes |
|----------|-------|-------|
| **Icon component** | `icon-radix-abstract` | Dot Filled |
| **Icon name** | Dot Filled | From Radix Abstract set |
| **Container size** | 24 Ã— 24px | Standard icon size |
| **Shape inset** | 32.5% | Centers dot within container |
| **Shape size** | ~8.4 Ã— 8.4px | Calculated from inset |

---

## Token Mapping

### Tier 3 Component Tokens

```css
/* List Item - Structure */
--list-item-gap: var(--value-spacing-gap-lg); /* 12px */
--list-item-icon-size: 24px;
--list-item-icon-inset: 32.5%;

/* List Item - Typography */
--list-item-font-family: var(--typography-font-family-Roobert);
--list-item-font-size: var(--typography-font-size-18);
--list-item-font-weight: var(--typography-font-weight-regular);
--list-item-line-height: var(--typography-line-height-24);
--list-item-letter-spacing: var(--typography-letter-spacing-0dot2);
--list-item-text-opacity: 0.7;

/* List Item - State: Default */
--list-item-default-icon: var(--color-content-inverse);
--list-item-default-text: var(--color-content-inverse);

/* List Item - State: Passed */
--list-item-passed-icon: var(--color-state-success-content);
--list-item-passed-text: var(--color-state-success-content);

/* List Item - State: Failed */
--list-item-failed-icon: var(--color-state-error-content);
--list-item-failed-text: var(--color-state-error-content);
```

### Tier 2 Semantic References

| Component Token | â†’ Semantic Token | Light Value | Dark Value |
|-----------------|------------------|-------------|------------|
| `--list-item-default-icon` | `color/content/inverse` | #FFFFFF | #032536 |
| `--list-item-default-text` | `color/content/inverse` | #FFFFFF | #032536 |
| `--list-item-passed-icon` | `color/state/success/content` | #072C14 | #B8F5CD |
| `--list-item-passed-text` | `color/state/success/content` | #072C14 | #B8F5CD |
| `--list-item-failed-icon` | `color/state/error/content` | #580202 | #FFCECE |
| `--list-item-failed-text` | `color/state/error/content` | #580202 | #FFCECE |

### Tier 1 Primitive Values

| Token | Value | Description |
|-------|-------|-------------|
| `color/secondary/green900` | #072C14 | Success dark |
| `color/secondary/red900` | #580202 | Error dark |
| `color/brand/white` | #FFFFFF | Default on dark |

---

# Part 2: Validation List Component (Container)

## Component Overview

The Validation List groups multiple List items into a cohesive validation block. It provides responsive variants with different spacing for mobile and desktop contexts.

**Figma Component:** `Validation list`  
**Figma Node:** `3292:67044`  
**Variants:** 2 (Mobile, Desktop)  
**Default Items:** 4 password requirements

---

## Variant Matrix

| Variant | Width | Gap | Text Token |
|---------|-------|-----|------------|
| **Mobile (mobile=true)** | 320px | 2px | `color/content/on-brand` |
| **Desktop (mobile=false)** | 381px | 10px | `color/content/inverse` |

---

## Design Specifications

### Mobile Variant (mobile=true)

| Property | Value | Token Reference |
|----------|-------|-----------------|
| **Width** | 320px | Auth content width (mobile) |
| **Height** | 126px | Auto (4 items Ã— 24px + 3 gaps Ã— 2px) |
| **Gap** | 2px | `primitive/values/space/space-tiny` |
| **Layout** | Flex column | â€” |
| **Alignment** | flex-start | â€” |

### Desktop Variant (mobile=false)

| Property | Value | Token Reference |
|----------|-------|-----------------|
| **Width** | 381px | Auth content width (desktop) |
| **Height** | 150px | Auto (4 items Ã— 24px + 3 gaps Ã— 10px) |
| **Gap** | 10px | Custom value |
| **Layout** | Flex column | â€” |
| **Alignment** | flex-start | â€” |

### Responsive Comparison

| Property | Mobile (xs) | Desktop (xl) | Difference |
|----------|-------------|--------------|------------|
| **Width** | 320px | 381px | +61px |
| **Item gap** | 2px | 10px | +8px |
| **Total height** | ~126px | ~150px | +24px |
| **Text token** | `on-brand` | `inverse` | Semantic shift |

---

## Anatomy

```
Validation List (Container)
â”œâ”€â”€ Layout: Flex column
â”œâ”€â”€ Gap: 2px (mobile) / 10px (desktop)
â”œâ”€â”€ Width: 320px (mobile) / 381px (desktop)
â””â”€â”€ Children (4Ã— List instances)
    â”œâ”€â”€ List[0]: Length requirement
    â”œâ”€â”€ List[1]: Letter requirement
    â”œâ”€â”€ List[2]: Number requirement
    â””â”€â”€ List[3]: Special character requirement
```

---

## Default Content

The component ships with standard password validation requirements:

| Index | Requirement ID | Display Text |
|-------|---------------|--------------|
| 0 | `length` | "At least 10 characters long" |
| 1 | `letter` | "At least 1 letter (a-z)" |
| 2 | `number` | "At least 1 number (0-9)" |
| 3 | `special` | "At least 1 special character (!,@,#,Â£,$,%,&,*,_,-)" |

### Validation Rules

| Requirement | Regex Pattern | Description |
|-------------|---------------|-------------|
| **Length** | `value.length >= 10` | Minimum 10 characters |
| **Letter** | `/[a-zA-Z]/` | At least one alphabetic |
| **Number** | `/[0-9]/` | At least one numeric |
| **Special** | `/[!@#Â£$%&*_-]/` | At least one special char |

---

## Token Mapping

### Tier 3 Component Tokens

```css
/* Validation List - Mobile */
--validation-list-mobile-width: 320px;
--validation-list-mobile-gap: var(--primitive-values-space-space-tiny); /* 2px */

/* Validation List - Desktop */
--validation-list-desktop-width: 381px;
--validation-list-desktop-gap: 10px;

/* Validation List - Layout */
--validation-list-direction: column;
--validation-list-align: flex-start;
```

### Tier 2 Semantic References

| Property | Mobile Token | Desktop Token |
|----------|--------------|---------------|
| **Text color** | `color/content/on-brand` | `color/content/inverse` |

---

# Part 3: CSS Implementation

## List Item Styles

```css
/* ========================================
   List Item (Validation Requirement)
   ======================================== */

.listItem {
  display: flex;
  align-items: flex-start;
  gap: var(--list-item-gap);
  width: 100%;
}

/* Icon Container */
.listItem__icon {
  position: relative;
  width: var(--list-item-icon-size);
  height: var(--list-item-icon-size);
  flex-shrink: 0;
}

.listItem__icon svg,
.listItem__icon img {
  position: absolute;
  inset: var(--list-item-icon-inset);
  width: auto;
  height: auto;
}

/* Text */
.listItem__text {
  flex: 1 0 0;
  min-width: 0;
  min-height: 1px;
  
  font-family: var(--list-item-font-family);
  font-size: var(--list-item-font-size);
  font-weight: var(--list-item-font-weight);
  line-height: var(--list-item-line-height);
  letter-spacing: var(--list-item-letter-spacing);
  opacity: var(--list-item-text-opacity);
}

/* ----------------------------------------
   State: Default
   ---------------------------------------- */
.listItem--default .listItem__icon svg {
  fill: var(--list-item-default-icon);
}

.listItem--default .listItem__text {
  color: var(--list-item-default-text);
}

/* ----------------------------------------
   State: Passed
   ---------------------------------------- */
.listItem--passed .listItem__icon svg {
  fill: var(--list-item-passed-icon);
}

.listItem--passed .listItem__text {
  color: var(--list-item-passed-text);
}

/* ----------------------------------------
   State: Failed
   ---------------------------------------- */
.listItem--failed .listItem__icon svg {
  fill: var(--list-item-failed-icon);
}

.listItem--failed .listItem__text {
  color: var(--list-item-failed-text);
}
```

## Validation List Container Styles

```css
/* ========================================
   Validation List (Container)
   ======================================== */

.validationList {
  display: flex;
  flex-direction: var(--validation-list-direction);
  align-items: var(--validation-list-align);
}

/* Mobile Variant */
.validationList--mobile {
  width: var(--validation-list-mobile-width);
  gap: var(--validation-list-mobile-gap);
}

/* Desktop Variant */
.validationList--desktop {
  width: var(--validation-list-desktop-width);
  gap: var(--validation-list-desktop-gap);
}

/* Full Width Modifier */
.validationList--fullWidth {
  width: 100%;
}
```

---

# Part 4: React Implementation

## List Item Component

```tsx
import React from 'react';
import { DotFilledIcon } from '@radix-ui/react-icons';
import styles from './ListItem.module.css';

export type ListItemState = 'default' | 'passed' | 'failed';

export interface ListItemProps {
  /** Validation state of this requirement */
  state?: ListItemState;
  /** Requirement text to display */
  children: React.ReactNode;
  /** Additional CSS class */
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  state = 'default',
  children,
  className
}) => {
  const stateLabel = {
    default: 'pending',
    passed: 'requirement met',
    failed: 'requirement not met'
  }[state];

  return (
    <li
      className={`
        ${styles.listItem}
        ${styles[`listItem--${state}`]}
        ${className || ''}
      `.trim()}
      role="listitem"
    >
      <span 
        className={styles.listItem__icon}
        aria-hidden="true"
      >
        <DotFilledIcon />
      </span>
      <span className={styles.listItem__text}>
        {children}
      </span>
      <span className="sr-only">
        : {stateLabel}
      </span>
    </li>
  );
};

ListItem.displayName = 'ListItem';
```

## Validation List Container Component

```tsx
import React from 'react';
import { ListItem, ListItemState } from './ListItem';
import styles from './ValidationList.module.css';

export interface ValidationRequirement {
  /** Unique identifier */
  id: string;
  /** Display text */
  text: string;
  /** Current validation state */
  state: ListItemState;
}

export interface ValidationListProps {
  /** Mobile (true) or Desktop (false) variant */
  mobile?: boolean;
  /** Array of validation requirements with states */
  requirements: ValidationRequirement[];
  /** Accessible label for the list */
  ariaLabel?: string;
  /** Additional CSS class */
  className?: string;
}

/** Default password validation requirements */
export const DEFAULT_PASSWORD_REQUIREMENTS: Omit<ValidationRequirement, 'state'>[] = [
  { id: 'length', text: 'At least 10 characters long' },
  { id: 'letter', text: 'At least 1 letter (a-z)' },
  { id: 'number', text: 'At least 1 number (0-9)' },
  { id: 'special', text: 'At least 1 special character (!,@,#,Â£,$,%,&,*,_,-)' }
];

export const ValidationList: React.FC<ValidationListProps> = ({
  mobile = false,
  requirements,
  ariaLabel = 'Password requirements',
  className
}) => {
  const variantClass = mobile 
    ? styles['validationList--mobile'] 
    : styles['validationList--desktop'];

  return (
    <ul
      className={`
        ${styles.validationList}
        ${variantClass}
        ${className || ''}
      `.trim()}
      role="list"
      aria-label={ariaLabel}
    >
      {requirements.map((req) => (
        <ListItem key={req.id} state={req.state}>
          {req.text}
        </ListItem>
      ))}
    </ul>
  );
};

ValidationList.displayName = 'ValidationList';
```

## Password Validation Hook

```tsx
import { useState, useCallback, useMemo } from 'react';
import { 
  ValidationRequirement, 
  DEFAULT_PASSWORD_REQUIREMENTS 
} from './ValidationList';

export interface UsePasswordValidationReturn {
  /** Current validation requirements with states */
  requirements: ValidationRequirement[];
  /** Whether all requirements are met */
  isValid: boolean;
  /** Validate a password value */
  validate: (password: string) => void;
  /** Reset to default state */
  reset: () => void;
}

export const usePasswordValidation = (): UsePasswordValidationReturn => {
  const [password, setPassword] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);

  const requirements = useMemo((): ValidationRequirement[] => {
    // Before interaction, all requirements are default
    if (!hasInteracted) {
      return DEFAULT_PASSWORD_REQUIREMENTS.map(req => ({
        ...req,
        state: 'default' as const
      }));
    }

    // After interaction, validate in real-time
    return [
      {
        id: 'length',
        text: 'At least 10 characters long',
        state: password.length >= 10 ? 'passed' : 'failed'
      },
      {
        id: 'letter',
        text: 'At least 1 letter (a-z)',
        state: /[a-zA-Z]/.test(password) ? 'passed' : 'failed'
      },
      {
        id: 'number',
        text: 'At least 1 number (0-9)',
        state: /[0-9]/.test(password) ? 'passed' : 'failed'
      },
      {
        id: 'special',
        text: 'At least 1 special character (!,@,#,Â£,$,%,&,*,_,-)',
        state: /[!@#Â£$%&*_-]/.test(password) ? 'passed' : 'failed'
      }
    ];
  }, [password, hasInteracted]);

  const isValid = useMemo(() => {
    return requirements.every(req => req.state === 'passed');
  }, [requirements]);

  const validate = useCallback((value: string) => {
    setPassword(value);
    if (!hasInteracted && value.length > 0) {
      setHasInteracted(true);
    }
  }, [hasInteracted]);

  const reset = useCallback(() => {
    setPassword('');
    setHasInteracted(false);
  }, []);

  return { requirements, isValid, validate, reset };
};
```

---

# Part 5: Usage Examples

## Basic Usage

```tsx
import { ValidationList, usePasswordValidation } from '@ohme/components';

const PasswordForm = () => {
  const { requirements, isValid, validate } = usePasswordValidation();

  return (
    <form>
      <input
        type="password"
        onChange={(e) => validate(e.target.value)}
        aria-describedby="password-requirements"
      />
      
      <ValidationList
        requirements={requirements}
        mobile={false}
        ariaLabel="Password requirements"
      />
      
      <button type="submit" disabled={!isValid}>
        Create Account
      </button>
    </form>
  );
};
```

## Responsive Implementation

```tsx
import { ValidationList, usePasswordValidation } from '@ohme/components';
import { useBreakpoint } from '@ohme/hooks';

const ResponsivePasswordForm = () => {
  const isMobile = useBreakpoint('xs');
  const { requirements, validate } = usePasswordValidation();

  return (
    <div className={isMobile ? 'w-[320px]' : 'w-[381px]'}>
      <input
        type="password"
        onChange={(e) => validate(e.target.value)}
      />
      <ValidationList
        requirements={requirements}
        mobile={isMobile}
      />
    </div>
  );
};
```

## Real-Time Validation with Visual Feedback

```tsx
import { useState, useEffect } from 'react';
import { ValidationList, ValidationRequirement } from '@ohme/components';

const RealTimePasswordValidation = () => {
  const [password, setPassword] = useState('');
  const [requirements, setRequirements] = useState<ValidationRequirement[]>([
    { id: 'length', text: 'At least 10 characters long', state: 'default' },
    { id: 'letter', text: 'At least 1 letter (a-z)', state: 'default' },
    { id: 'number', text: 'At least 1 number (0-9)', state: 'default' },
    { id: 'special', text: 'At least 1 special character (!,@,#,Â£,$,%,&,*,_,-)', state: 'default' }
  ]);

  useEffect(() => {
    if (password.length === 0) {
      // Reset to default when empty
      setRequirements(prev => 
        prev.map(r => ({ ...r, state: 'default' }))
      );
      return;
    }

    // Validate each requirement
    setRequirements([
      {
        id: 'length',
        text: 'At least 10 characters long',
        state: password.length >= 10 ? 'passed' : 'failed'
      },
      {
        id: 'letter',
        text: 'At least 1 letter (a-z)',
        state: /[a-zA-Z]/.test(password) ? 'passed' : 'failed'
      },
      {
        id: 'number',
        text: 'At least 1 number (0-9)',
        state: /[0-9]/.test(password) ? 'passed' : 'failed'
      },
      {
        id: 'special',
        text: 'At least 1 special character (!,@,#,Â£,$,%,&,*,_,-)',
        state: /[!@#Â£$%&*_-]/.test(password) ? 'passed' : 'failed'
      }
    ]);
  }, [password]);

  return (
    <>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <ValidationList 
        requirements={requirements} 
        mobile={false} 
      />
    </>
  );
};
```

## Individual List Items

```tsx
import { ListItem } from '@ohme/components';

const CustomValidation = () => {
  return (
    <ul role="list" aria-label="Custom requirements">
      <ListItem state="passed">
        Email is valid format
      </ListItem>
      <ListItem state="failed">
        Email is not already registered
      </ListItem>
      <ListItem state="default">
        Email domain is allowed
      </ListItem>
    </ul>
  );
};
```

---

# Part 6: Accessibility

## ARIA Implementation

```tsx
<ul 
  role="list"
  aria-label="Password requirements"
  aria-live="polite"
  aria-relevant="additions text"
>
  <li role="listitem">
    <span aria-hidden="true">â—</span>
    <span>At least 10 characters long</span>
    <span className="sr-only">: requirement met</span>
  </li>
</ul>
```

## Screen Reader Considerations

| State Change | Announcement |
|--------------|--------------|
| Default â†’ Passed | "[Requirement]: requirement met" |
| Default â†’ Failed | "[Requirement]: requirement not met" |
| Passed â†’ Failed | "[Requirement]: requirement not met" |
| Failed â†’ Passed | "[Requirement]: requirement met" |

## Keyboard Interaction

The Validation List is a read-only feedback element:
- Does not receive focus directly
- Associated with input via `aria-describedby`
- State changes announced via `aria-live`

## Color Contrast Analysis

| State | Foreground | Background | Ratio | WCAG Level |
|-------|------------|------------|-------|------------|
| **Default** | #FFFFFF @ 70% | #032536 | 8.9:1 | AAA âœ“ |
| **Passed** | #072C14 @ 70% | #032536 | 1.5:1 | Decorative* |
| **Failed** | #580202 @ 70% | #032536 | 1.3:1 | Decorative* |

*Note: The passed/failed states rely on color change as a visual indicator. The state is also communicated via screen reader text, satisfying WCAG 1.4.1 (Use of Color).*

---

# Part 7: Design Guidelines

## When to Use

**âœ“ Use Validation List for:**
- Password strength requirements
- Multi-criteria form validation
- Real-time requirement feedback
- Registration/onboarding flows

**âœ— Do not use for:**
- Single field errors (use inline error text)
- Success messages (use Toast)
- General information lists
- Navigation items

## Placement Guidelines

| Context | Recommended Position |
|---------|---------------------|
| Password creation | Below password input, above confirm |
| Password change | Below new password field |
| Registration form | Within the password section |
| Settings page | Adjacent to password controls |

## Content Guidelines

| âœ“ Do | âœ— Don't |
|------|---------|
| Start with "At least" for minimums | Use negative phrasing ("Cannot be...") |
| Be specific about requirements | Be vague ("Must be strong") |
| Include character examples | Assume user knows special chars |
| Match actual validation logic | Show misleading requirements |
| Keep text concise | Write lengthy descriptions |

---

# Part 8: Testing Checklist

## Visual Testing

### List Item
- [ ] Default: White icon (#FFFFFF) at 32.5% inset
- [ ] Default: White text (#FFFFFF) at 70% opacity
- [ ] Passed: Green icon (#072C14) at 32.5% inset
- [ ] Passed: Green text (#072C14) at 70% opacity
- [ ] Failed: Red icon (#580202) at 32.5% inset
- [ ] Failed: Red text (#580202) at 70% opacity
- [ ] Icon container: 24 Ã— 24px
- [ ] Gap between icon and text: 12px
- [ ] Typography: 18px / 24px Roobert Regular

### Validation List
- [ ] Mobile width: 320px
- [ ] Mobile gap: 2px
- [ ] Desktop width: 381px
- [ ] Desktop gap: 10px
- [ ] Four default items render correctly
- [ ] Flex column layout
- [ ] Items aligned to flex-start

## Functional Testing

- [ ] All items start in default state
- [ ] Items transition to passed when requirement met
- [ ] Items transition to failed when requirement not met
- [ ] Real-time validation updates on input
- [ ] Reset function returns all to default
- [ ] isValid returns true only when all passed
- [ ] Empty input resets to default state

## Accessibility Testing

- [ ] List has `role="list"`
- [ ] Items have `role="listitem"`
- [ ] List has `aria-label`
- [ ] State changes announced to screen readers
- [ ] Icon has `aria-hidden="true"`
- [ ] Screen reader text provides state info
- [ ] Associated with input via `aria-describedby`

## Responsive Testing

- [ ] Mobile variant at 320px width
- [ ] Desktop variant at 381px width
- [ ] Gap transitions between variants
- [ ] Long text wraps correctly
- [ ] No horizontal overflow

---

# Part 9: Related Documentation

## Icon Dependency
- **Icon System (Radix Abstract)** â€” Dot Filled icon

## Works With
- **Input** â€” Password input fields
- **Button** â€” Form submission
- **Checkbox** â€” Terms acceptance
- **Toast** â€” Success/error notifications

## Used In
- **Authentication Page Template** â€” Password creation
- **Settings Template** â€” Password change (future)
- **Registration Flow** â€” Account setup

## Related Components
- **Footer** â€” Page footer with support info
- **Modal** â€” Terms & Conditions display

---

# Part 10: Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 2025 | Initial documentation |

---

## Figma Reference

| Component | Node ID | Variants |
|-----------|---------|----------|
| **list** | `3292:66965` | state: default, failed, passed |
| **Validation list** | `3292:67044` | mobile: true, false |

---

*Last Updated: January 2025*  
*Component Version: 1.0*  
*Design System: Ohme*  
*Source: Figma Native Components*
