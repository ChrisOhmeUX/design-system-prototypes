# Name Group Component Documentation

## Overview

Name Groups combine an avatar and a name to provide clear and recognizable representation of a user or entity. This composite component enhances identification and adds a personal touch to interactions within the portal.

**Component Type:** Core UI Component  
**Category:** User Identity  
**Composite Component:** Avatar + Name Label  
**Variants:** 2 sizes (medium, small)

## Design Specifications

### Size Variants

| Size | Avatar | Text Size | Gap | Total Height | Use Case |
|------|--------|-----------|-----|--------------|----------|
| **Medium** | SM (32px) | 18px / 24px | 12px | 32px | Standard lists, profiles, navigation |
| **Small** | XS (24px) | 16px / 24px | 12px | 24px | Compact lists, dense tables, mobile |

### Visual Properties
- **Layout:** Horizontal flex with centered alignment
- **Gap:** 12px between avatar and name â†’ `value/spacing/gap/lg`
- **Text:** Single line, no wrapping
- **Avatar:** 6px corner radius

## Color System

### Name Text

The name label uses primary content color which adapts to light/dark modes:

| Mode | Token Reference | Resolves To | Hex Value |
|------|----------------|-------------|-----------|
| **Light** | `color/content/primary` | `color/brand/ohmedarkblue` | #032536 |
| **Dark** | `color/content/primary` | `color/brand/white` | #FFFFFF |

**Visual Result:**
- Light mode: Dark blue text (#032536)
- Dark mode: White text (#FFFFFF)

---

### Avatar Component

The avatar inherits its color system from the Avatar component:

**Initial Type:**
- Surface: `color/surface/avatar` â†’ yellow100 (#FFF2C6) - constant
- Content: `color/content/avatar` â†’ sandyorange (#F5BD50) - constant

**Photo Type:**
- Surface: white (#FFFFFF)

## Component Properties

```typescript
type NameGroupProps = {
  className?: string;
  size?: "medium" | "small";
  user: {
    name: string;
    profileImage?: string;
    initials?: string;
  };
};
```

### Property: `size` (string, optional)
Controls the overall size of the name group.

**Values:**
- `"medium"` (default) - 32px avatar, 18px text
- `"small"` - 24px avatar, 16px text

**Internally Affects:**
- Avatar size (SM for medium, XS for small)
- Text font size (18px for medium, 16px for small)
- Component height (32px for medium, 24px for small)

---

### Property: `user` (object, required)
User data object containing name and avatar information.

**Required Fields:**
- `name` (string) - User's display name

**Optional Fields:**
- `profileImage` (string) - URL to user's photo
- `initials` (string) - Fallback initials if no photo

## Anatomy

```
Name Group Component
â”œâ”€â”€ Avatar (photo or initial)
â”‚   â””â”€â”€ Size: SM (medium) or XS (small)
â””â”€â”€ Name Label
    â”œâ”€â”€ Color: content/primary (mode-aware)
    â”œâ”€â”€ Typography: 18px (medium) or 16px (small)
    â””â”€â”€ Alignment: Vertically centered with avatar
```

### Component Parts

**Avatar:**
- Visual user identifier
- Size: SM (32px) for medium, XS (24px) for small
- Type: Photo or Initial
- Gap: 12px to name label

**Name Label:**
- User's display name
- Color: Dark blue (light mode) / White (dark mode)
- Typography: 18px (medium) or 16px (small)
- No text wrapping
- Vertically centered with avatar

## Complete Token Mapping

### Tier 3 Component Tokens (Recommended)

```css
/* Medium Size */
--name-group-medium-avatar-size: var(--avatar-size-sm);
--name-group-medium-font-size: var(--typography-font-size-18);
--name-group-medium-line-height: var(--typography-line-height-24);
--name-group-medium-gap: var(--value-spacing-gap-lg);

/* Small Size */
--name-group-small-avatar-size: var(--avatar-size-xs);
--name-group-small-font-size: var(--typography-font-size-16);
--name-group-small-line-height: var(--typography-line-height-24);
--name-group-small-gap: var(--value-spacing-gap-lg);

/* Common Properties */
--name-group-label-color: var(--color-content-primary);
--name-group-label-font-family: var(--typography-font-family-Roobert);
--name-group-label-font-weight: var(--typography-font-weight-regular);
--name-group-label-letter-spacing: var(--typography-letter-spacing-0dot2);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Value (Light) | Value (Dark) |
|-------|-------------|-------------|---------------|--------------|
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `value/spacing/gap/lg` | lg | lg | 12px | 12px |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/ohmedarkblue` | #032536 | Dark blue text (light mode) |
| `color/brand/white` | #FFFFFF | White text (dark mode) |
| `Values/space/space-3x` | 12px | Gap between elements |
| `typography/font-size/16` | 16px | Small size text |
| `typography/font-size/18` | 18px | Medium size text |
| `typography/line-height/24` | 24px | Line height |
| `typography/letter-spacing/0dot2` | 0.2px | Letter spacing |
| `typography/font-weight/regular` | 400 | Font weight |

## Implementation Examples

### Basic Usage

```tsx
import NameGroup from '@/components/core/NameGroup';

// Medium size (default)
<NameGroup 
  user={{
    name: "Francis Duperee",
    profileImage: "/images/users/francis.jpg"
  }}
  size="medium"
/>

// Small size with initials
<NameGroup 
  user={{
    name: "Peter Doe",
    initials: "PD"
  }}
  size="small"
/>
```

### User List

```tsx
const UserList = ({ users }) => {
  return (
    <ul className={styles.userList}>
      {users.map(user => (
        <li key={user.id}>
          <NameGroup user={user} size="medium" />
        </li>
      ))}
    </ul>
  );
};
```

### Interactive Name Group

```tsx
const SelectableUser = ({ user, onSelect, isSelected }) => {
  return (
    <button
      className={`${styles.selectableUser} ${isSelected ? styles.selected : ''}`}
      onClick={() => onSelect(user)}
      aria-label={`Select ${user.name}`}
      aria-pressed={isSelected}
    >
      <NameGroup user={user} size="medium" />
      {isSelected && (
        <IconRadixAbstract iconRadix="Check" size="sm" />
      )}
    </button>
  );
};
```

### User Picker Dropdown

```tsx
const UserPicker = ({ users, selectedUser, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.userPicker}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select user"
        aria-expanded={isOpen}
      >
        {selectedUser ? (
          <NameGroup user={selectedUser} size="small" />
        ) : (
          <span>Select user...</span>
        )}
        <IconRadixArrows iconRadix="Chevron Down" size="sm" />
      </button>
      
      {isOpen && (
        <div className={styles.dropdownMenu} role="listbox">
          {users.map(user => (
            <button
              key={user.id}
              role="option"
              onClick={() => {
                onSelect(user);
                setIsOpen(false);
              }}
            >
              <NameGroup user={user} size="small" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
```

## CSS Implementation

### Core Styles

```css
.nameGroup {
  display: inline-flex;
  align-items: center;
  gap: var(--value-spacing-gap-lg);
}

/* Medium size */
.nameGroup--medium .avatar {
  width: 32px;
  height: 32px;
}

.nameGroup--medium .name {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-18);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
  color: var(--color-content-primary);
  white-space: nowrap;
}

/* Small size */
.nameGroup--small .avatar {
  width: 24px;
  height: 24px;
}

.nameGroup--small .name {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-16);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
  color: var(--color-content-primary);
  white-space: nowrap;
}

/* Interactive states */
.nameGroupButton {
  display: flex;
  align-items: center;
  gap: var(--value-spacing-gap-lg);
  padding: var(--value-spacing-axis-aware-stack-md) 
           var(--value-spacing-axis-aware-inline-lg);
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: var(--value-corner-radii-md);
  transition: background 200ms ease;
}

.nameGroupButton:hover {
  background: var(--color-surface-subtle);
}

.nameGroupButton:focus {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-content-primary: #032536;
  --value-spacing-gap-lg: 12px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-content-primary: #FFFFFF;
}
```

## Usage Guidelines

### When to Use Name Group

**User Lists:**
- Team members, participants, contributors
- Assigned users, job candidates
- Contact lists, directories

**Navigation & Selection:**
- User pickers, mention dropdowns
- Assignee selectors
- Transfer ownership dialogs

**Activity & History:**
- Activity feeds, audit logs
- Comment authors
- Change history

**Search Results:**
- User search results
- Directory listings

### When to Use Medium vs Small

**Medium Size (32px avatar, 18px text):**
- Standard lists
- Profile cards
- Navigation elements
- Search results
- Desktop viewports

**Small Size (24px avatar, 16px text):**
- Compact lists
- Inline mentions
- Mobile viewports
- Secondary information
- Dropdown items

## Best Practices

### Content Guidelines âœ“
1. **Full Names:** Display complete user names when possible
2. **Consistent Format:** Use same name format throughout (First Last)
3. **Truncation:** Handle long names with ellipsis
4. **Localization:** Support international name formats
5. **Sync:** Keep names synchronized with user profiles

### Visual Guidelines âœ“
1. **Alignment:** Always vertically center avatar and text
2. **Gap:** Maintain 12px gap consistently
3. **No Wrap:** Text should not wrap to multiple lines
4. **Overflow:** Use ellipsis for long names
5. **Avatar Priority:** Prefer photos when available

### Interaction Guidelines âœ“
1. **Click Target:** Entire group can be clickable or just parts
2. **Hover States:** Apply to entire group when interactive
3. **Focus States:** Clear focus indicators
4. **Touch Targets:** Minimum 44Ã—44px for mobile
5. **Cursor:** Show pointer when clickable

## Responsive Behavior

```tsx
const ResponsiveNameGroup = ({ user }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  
  return (
    <NameGroup 
      user={user}
      size={isMobile ? "small" : "medium"}
    />
  );
};
```

## Testing Checklist

### Visual Testing
- [ ] Avatar and name vertically aligned
- [ ] 12px gap between avatar and name
- [ ] Medium size: 32px avatar, 18px text
- [ ] Small size: 24px avatar, 16px text
- [ ] Text doesn't wrap
- [ ] Long names truncate properly
- [ ] Avatar corner radius is 6px
- [ ] Light mode: Dark blue text (#032536)
- [ ] Dark mode: White text (#FFFFFF)

### Functional Testing
- [ ] Photo avatars display correctly
- [ ] Initial avatars show when no photo
- [ ] Initials generate correctly
- [ ] Click events work on interactive groups
- [ ] Hover states apply correctly
- [ ] Focus states visible
- [ ] Size prop affects avatar and text

### Accessibility Testing
- [ ] Screen reader announces user name
- [ ] Interactive groups have aria-label
- [ ] Keyboard navigation works
- [ ] Focus indicator visible
- [ ] Alt text provided on avatar
- [ ] Sufficient color contrast in both modes
- [ ] Works without images (initial fallback)

### Mode Testing
- [ ] Text color correct in light mode (dark blue)
- [ ] Text color correct in dark mode (white)
- [ ] Avatar colors remain consistent
- [ ] Smooth transition when theme changes

## Related Components

### Composed From:
- **Avatar Component** - Visual user identifier

### Builds Into:
- **User Group** - Name Group + Role + Settings

### Works With:
- **Dropdown Menu** - User selection
- **Lists** - User/team lists
- **Cards** - Profile cards
- **Tables** - Assignee columns

## Version History

- **v1.0** - Initial name group component with medium and small sizes

---

*Component Documentation - Ohme Design System*  
*Core UI Component*  
*Last Updated: January 2025*
