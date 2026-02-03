# User Group Component Documentation

## Overview

User Groups are navigation elements that display an avatar, name, user role, and optional settings button. They provide a clear and convenient way to access and manage user-specific options within the portal.

**Component Type:** Core UI Component  
**Category:** User Identity & Navigation  
**Composite Component:** Avatar + Name + Role + Settings Icon  
**Variants:** 2 (with/without settings icon)

## Design Specifications

### Dimensions

| Variant | Width | Height | Avatar | Settings Icon |
|---------|-------|--------|--------|---------------|
| **With Settings** | 208px | 56px | MD (40px) | 24Ã—24px |
| **Without Settings** | 168px | 56px | MD (40px) | N/A |

### Visual Properties
- **Container Border Radius:** 50px (pill shape)
- **Avatar Corner Radius:** 6px â†’ `value/corner-radii/md`
- **Padding Inline:** 8px â†’ `value/spacing/axis_aware/inline/md`
- **Padding Stack:** 8px (top/bottom)
- **Gap:** 8px â†’ `value/spacing/gap/md`
- **Layout:** Horizontal flex with stacked text

## Color System

### Name Text (Primary Label)

| Mode | Token Reference | Resolves To | Hex Value |
|------|----------------|-------------|-----------|
| **Light** | `color/content/primary` | `color/brand/ohmedarkblue` | #032536 |
| **Dark** | `color/content/primary` | `color/brand/white` | #FFFFFF |

**Visual Result:**
- Light mode: Dark blue text (#032536)
- Dark mode: White text (#FFFFFF)

---

### Role Text (Secondary Label)

| Mode | Token Reference | Resolves To | Hex Value |
|------|----------------|-------------|-----------|
| **Light** | `color/content/tertiary` | `color/secondary/grey300` | #ADB3B1 |
| **Dark** | `color/content/tertiary` | `color/secondary/grey700` | #647882 |

**Visual Result:**
- Light mode: Light grey text (#ADB3B1)
- Dark mode: Medium grey text (#647882)

---

### Settings Icon

| Mode | Token Reference | Resolves To | Hex Value |
|------|----------------|-------------|-----------|
| **Both** | Direct reference | `color/brand/highlighterteal` | #00FFD6 |

**Visual Result:** Teal gear icon (constant in both modes)

---

### Avatar Component

The avatar inherits colors from the Avatar component:

**Initial Type:**
- Surface: yellow100 (#FFF2C6) - constant
- Content: sandyorange (#F5BD50) - constant

**Photo Type:**
- Surface: white (#FFFFFF)

## Component Properties

```typescript
type UserGroupProps = {
  className?: string;
  settings?: boolean;
  user: {
    name: string;
    role: string;
    profileImage?: string;
    initials?: string;
  };
  onSettingsClick?: () => void;
};
```

### Property: `settings` (boolean, optional)
Controls whether the settings icon is displayed.

**Values:**
- `true` (default) - Shows gear icon, width 208px
- `false` - Hides gear icon, width 168px

**Usage:**
```typescript
<UserGroup settings={true} user={user} />  // With settings
<UserGroup settings={false} user={user} /> // Without settings
```

---

### Property: `user` (object, required)
User data object containing identity and role information.

**Required Fields:**
- `name` (string) - User's display name
- `role` (string) - User's role or title

**Optional Fields:**
- `profileImage` (string) - URL to user's photo
- `initials` (string) - Fallback initials

---

### Property: `onSettingsClick` (function, optional)
Callback function when settings icon is clicked.

**Usage:**
```typescript
<UserGroup 
  settings={true}
  user={user}
  onSettingsClick={() => openSettings()}
/>
```

## Anatomy

```
User Group Component (Pill-shaped container)
â”œâ”€â”€ Avatar (MD - 40Ã—40px)
â”‚   â””â”€â”€ Photo or Initial type
â”œâ”€â”€ Text Stack Container
â”‚   â”œâ”€â”€ Name Label (top)
â”‚   â”‚   â”œâ”€â”€ Color: content/primary (mode-aware)
â”‚   â”‚   â””â”€â”€ Font: 18px / 24px line-height
â”‚   â””â”€â”€ Role Label (bottom)
â”‚       â”œâ”€â”€ Color: content/tertiary (mode-aware)
â”‚       â””â”€â”€ Font: 14px / 18px line-height
â””â”€â”€ Settings Icon (optional - 24Ã—24px)
    â”œâ”€â”€ Icon: Gear (Radix Objects)
    â””â”€â”€ Color: highlighterteal (constant)
```

### Component Parts

**Avatar:**
- Size: MD (40Ã—40px)
- Type: Photo or Initial
- Positioned: Left side of group
- Gap: 8px to text stack

**Name Label:**
- User's display name (e.g., "David A.")
- Font: 18px / 24px line-height / 0.2px letter-spacing
- Color: Dark blue (light mode) / White (dark mode)
- Position: Top of text stack
- Width: Flexible (approx 108px)

**Role Label:**
- User's role or title (e.g., "Engineer")
- Font: 14px / 18px line-height
- Color: Light grey (light mode) / Medium grey (dark mode)
- Position: Below name label
- Width: Flexible (approx 108px)

**Settings Icon (Optional):**
- Gear icon from Radix Objects
- Size: 24Ã—24px (md)
- Color: Teal (#00FFD6) - constant
- Position: Far right of group
- Gap: 8px from text stack

## Complete Token Mapping

### Tier 3 Component Tokens (Recommended)

```css
/* Dimensions */
--user-group-width-with-settings: 208px;
--user-group-width-without-settings: 168px;
--user-group-height: 56px;
--user-group-border-radius: 50px;
--user-group-padding-inline: var(--value-spacing-axis-aware-inline-md);
--user-group-padding-stack: var(--value-spacing-axis-aware-stack-md);
--user-group-gap: var(--value-spacing-gap-md);

/* Avatar */
--user-group-avatar-size: var(--avatar-size-md);

/* Name Label */
--user-group-name-font-size: var(--typography-font-size-18);
--user-group-name-line-height: var(--typography-line-height-24);
--user-group-name-letter-spacing: var(--typography-letter-spacing-0dot2);
--user-group-name-color: var(--color-content-primary);

/* Role Label */
--user-group-role-font-size: var(--typography-font-size-14);
--user-group-role-line-height: var(--typography-line-height-18);
--user-group-role-color: var(--color-content-tertiary);

/* Settings Icon */
--user-group-settings-icon-size: 24px;
--user-group-settings-icon-color: var(--color-brand-highlighterteal);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Value (Light) | Value (Dark) |
|-------|-------------|-------------|---------------|--------------|
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/tertiary` | grey300 | grey700 | #ADB3B1 | #647882 |
| `color/brand/highlighterteal` | N/A | N/A | #00FFD6 | #00FFD6 |
| `value/spacing/gap/md` | md | md | 8px | 8px |
| `value/spacing/axis_aware/inline/md` | md | md | 8px | 8px |
| `value/spacing/axis_aware/stack/md` | md | md | 8px | 8px |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/ohmedarkblue` | #032536 | Name text (light mode) |
| `color/brand/white` | #FFFFFF | Name text (dark mode) |
| `color/secondary/grey300` | #ADB3B1 | Role text (light mode) |
| `color/secondary/grey700` | #647882 | Role text (dark mode) |
| `color/brand/highlighterteal` | #00FFD6 | Settings icon |
| `Values/space/space-2x` | 8px | Spacing values |
| `typography/font-size/18` | 18px | Name font size |
| `typography/font-size/14` | 14px | Role font size |
| `typography/line-height/24` | 24px | Name line height |
| `typography/line-height/18` | 18px | Role line height |
| `typography/letter-spacing/0dot2` | 0.2px | Letter spacing |

## Implementation Examples

### Basic Usage

```tsx
import UserGroup from '@/components/core/UserGroup';

// With settings icon
<UserGroup 
  settings={true}
  user={{
    name: "David A.",
    role: "Engineer",
    profileImage: "/images/users/david.jpg"
  }}
  onSettingsClick={() => openUserSettings()}
/>

// Without settings icon
<UserGroup 
  settings={false}
  user={{
    name: "Sarah Chen",
    role: "Designer",
    initials: "SC"
  }}
/>
```

### Navigation Header

```tsx
const UserNavigation = ({ currentUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className={styles.userNav}>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="User menu"
        aria-expanded={menuOpen}
      >
        <UserGroup 
          settings={true}
          user={currentUser}
          onSettingsClick={() => navigate('/settings')}
        />
      </button>
      
      {menuOpen && (
        <div className={styles.userMenu}>
          {/* Menu items */}
        </div>
      )}
    </div>
  );
};
```

### Profile Card

```tsx
const ProfileCard = ({ user }) => {
  return (
    <div className={styles.profileCard}>
      <UserGroup 
        settings={false}
        user={user}
      />
      <div className={styles.profileStats}>
        <div className={styles.stat}>
          <span>Projects</span>
          <strong>{user.projectCount}</strong>
        </div>
        <div className={styles.stat}>
          <span>Tasks</span>
          <strong>{user.taskCount}</strong>
        </div>
      </div>
    </div>
  );
};
```

### Team Member List

```tsx
const TeamList = ({ members }) => {
  return (
    <div className={styles.teamList}>
      <h2>Team Members</h2>
      {members.map(member => (
        <div key={member.id} className={styles.teamMember}>
          <UserGroup 
            settings={false}
            user={member}
          />
          <button 
            onClick={() => viewProfile(member)}
            aria-label={`View ${member.name}'s profile`}
          >
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
};
```

## CSS Implementation

### Core Styles

```css
.userGroup {
  display: inline-flex;
  align-items: center;
  gap: var(--value-spacing-gap-md);
  padding: var(--value-spacing-axis-aware-stack-md) 
           var(--value-spacing-axis-aware-inline-md);
  border-radius: 50px;
}

/* With settings */
.userGroup--withSettings {
  width: 208px;
}

/* Without settings */
.userGroup--withoutSettings {
  width: 168px;
}

/* Avatar container */
.userGroup__avatar {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
}

/* Text stack */
.userGroup__textStack {
  display: flex;
  flex-direction: column;
  gap: 0;
  flex: 1;
  min-width: 0;
}

/* Name label */
.userGroup__name {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-18);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Role label */
.userGroup__role {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-14);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--typography-line-height-18);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Settings icon */
.userGroup__settingsIcon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: var(--color-brand-highlighterteal);
  cursor: pointer;
}

.userGroup__settingsIcon:hover {
  opacity: 0.8;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-content-primary: #032536;
  --color-content-tertiary: #ADB3B1;
  --color-brand-highlighterteal: #00FFD6;
  --value-spacing-gap-md: 8px;
  --value-spacing-axis-aware-inline-md: 8px;
  --value-spacing-axis-aware-stack-md: 8px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-content-primary: #FFFFFF;
  --color-content-tertiary: #647882;
  /* Highlighterteal remains constant */
}
```

## Usage Guidelines

### When to Use User Group

**Navigation:**
- User account menu trigger
- Sidebar user identification
- Header navigation
- Workspace/tenant switcher

**Profile Display:**
- Current user indicator
- Profile page header
- Account settings
- User cards

**Administrative:**
- User management interfaces
- Team member displays
- Role assignment interfaces
- Permission management

### When to Show Settings Icon

**Show Settings (true):**
- User can access settings
- Clickable user management
- Account configuration available
- Administrative actions possible

**Hide Settings (false):**
- Read-only display
- Other users' profiles
- Limited permissions
- Display-only contexts

## Best Practices

### Content Guidelines âœ“
1. **Name Format:** Consistent format (First Last or First Initial)
2. **Role Clarity:** Use clear, understandable role names
3. **Truncation:** Handle long names/roles with ellipsis
4. **Capitalization:** Proper case for names, sentence case for roles
5. **Updates:** Keep synchronized with user data

### Visual Guidelines âœ“
1. **Alignment:** Vertically center all elements
2. **Gap Consistency:** Maintain 8px gap throughout
3. **Text Stack:** Name above role, no gaps between
4. **Overflow:** Ellipsis for long text
5. **Icon Color:** Settings icon always teal

### Interaction Guidelines âœ“
1. **Click Areas:** Separate click areas for group vs settings
2. **Hover States:** Show hover on settings icon
3. **Focus:** Clear focus indicators
4. **Touch Targets:** Ensure 44Ã—44px minimum for mobile
5. **Cursor:** Pointer on interactive elements

## Accessibility

### ARIA Labels

```tsx
// Complete user group
<button 
  aria-label="User menu for David A., Engineer"
  onClick={() => toggleMenu()}
>
  <UserGroup settings={true} user={user} />
</button>

// Settings icon action
<UserGroup 
  settings={true}
  user={user}
  onSettingsClick={() => navigate('/settings')}
  aria-label="Open user settings"
/>
```

### Keyboard Navigation

```tsx
<div className={styles.userGroup}>
  <button
    className={styles.userButton}
    onClick={() => viewProfile(user)}
    aria-label={`View ${user.name}'s profile`}
  >
    <UserGroup settings={false} user={user} />
  </button>
  
  <button
    className={styles.settingsButton}
    onClick={() => openSettings()}
    aria-label="Settings"
  >
    <IconRadixObjects iconRadix="Gear" size="md" />
  </button>
</div>
```

### Screen Reader Announcements

```tsx
<div 
  role="region" 
  aria-label="Current user"
>
  <UserGroup 
    settings={true}
    user={currentUser}
  />
</div>
```

## Advanced Patterns

### User Menu Trigger

```tsx
const UserMenu = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={styles.userMenuContainer}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="User menu"
        aria-expanded={isOpen}
      >
        <UserGroup 
          settings={true}
          user={currentUser}
        />
      </button>
      
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <MenuItem icon="Person" label="Profile" />
          <MenuItem icon="Gear" label="Settings" />
          <MenuItem icon="Exit" label="Sign Out" />
        </div>
      )}
    </div>
  );
};
```

### With Status Indicator

```tsx
const UserGroupWithStatus = ({ user, isOnline }) => {
  return (
    <div className={styles.userGroupWrapper}>
      <UserGroup settings={true} user={user} />
      <span 
        className={`${styles.statusDot} ${isOnline ? styles.online : styles.offline}`}
        aria-label={isOnline ? "Online" : "Offline"}
      />
    </div>
  );
};
```

### Workspace Switcher

```tsx
const WorkspaceSwitcher = ({ workspaces, currentWorkspace, currentUser }) => {
  return (
    <div className={styles.workspaceSwitcher}>
      <UserGroup 
        settings={true}
        user={{
          name: currentUser.name,
          role: currentWorkspace.name,
          profileImage: currentUser.profileImage
        }}
        onSettingsClick={() => openWorkspaceSettings()}
      />
      
      <div className={styles.switcherMenu}>
        {workspaces.map(workspace => (
          <button
            key={workspace.id}
            onClick={() => switchWorkspace(workspace)}
          >
            {workspace.name}
          </button>
        ))}
      </div>
    </div>
  );
};
```

## Testing Checklist

### Visual Testing
- [ ] Avatar displays correctly (40Ã—40px, 6px radius)
- [ ] Name and role vertically aligned
- [ ] Text stack has no gap between name and role
- [ ] 8px gap between avatar and text
- [ ] 8px gap between text and settings icon (when present)
- [ ] Settings icon is 24Ã—24px teal gear
- [ ] With settings: 208px width
- [ ] Without settings: 168px width
- [ ] Container has 50px border radius (pill shape)
- [ ] Light mode: Name dark blue, role light grey
- [ ] Dark mode: Name white, role medium grey
- [ ] Settings icon teal in both modes

### Functional Testing
- [ ] Settings icon click triggers callback
- [ ] Settings prop shows/hides icon correctly
- [ ] Photo avatars load properly
- [ ] Initial avatars fallback works
- [ ] Long names truncate with ellipsis
- [ ] Long roles truncate with ellipsis
- [ ] Component renders without errors

### Accessibility Testing
- [ ] Entire component has descriptive aria-label
- [ ] Settings button has separate aria-label
- [ ] Screen reader announces user name and role
- [ ] Keyboard navigation works
- [ ] Focus visible on interactive elements
- [ ] Contrast requirements met in both modes
- [ ] Name: 12.2:1 (light) / 21:1 (dark) âœ“
- [ ] Role: 3.6:1 (light) / 5.9:1 (dark) âœ“

### Mode Testing
- [ ] Name text correct in light mode (dark blue)
- [ ] Name text correct in dark mode (white)
- [ ] Role text correct in light mode (light grey)
- [ ] Role text correct in dark mode (medium grey)
- [ ] Settings icon remains teal in both modes
- [ ] Avatar colors remain consistent
- [ ] Smooth transition when theme changes

## Related Components

### Composed From:
- **Avatar Component** - User visual identifier
- **Icon Component** - Settings gear icon (Radix Objects)

### Composed Into:
- **Navigation Header** - User account menu
- **Sidebar** - User identification section
- **Profile Card** - User profile display

### Works With:
- **Dropdown Menu** - User menu
- **Modal** - Settings dialog
- **Cards** - Profile information

## Common Patterns

### Hide/Show Settings

```tsx
const ConditionalSettings = ({ user, canEdit }) => {
  return (
    <UserGroup 
      settings={canEdit}
      user={user}
      onSettingsClick={canEdit ? () => openSettings() : undefined}
    />
  );
};
```

### Dynamic Role Display

```tsx
const UserGroupWithDynamicRole = ({ user, workspace }) => {
  const role = workspace ? workspace.role : user.globalRole;
  
  return (
    <UserGroup 
      settings={true}
      user={{
        ...user,
        role: role
      }}
    />
  );
};
```

## Version History

- **v1.0** - Initial user group component with optional settings icon

---

*Component Documentation - Ohme Design System*  
*Core UI Component*  
*Last Updated: January 2025*
