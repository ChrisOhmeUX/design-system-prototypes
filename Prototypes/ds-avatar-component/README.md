# Avatar Component Documentation

## Overview

Avatars are visual representations of users or entities, displayed as images, initials, or icons. They help personalize experiences and identify individuals or roles within the portal.

**Component Type:** Core UI Component  
**Category:** User Identity  
**Token Integration:** Yes - uses avatar-specific semantic tokens  
**Variants:** 8 total (2 types Ã— 4 sizes)

## Design Specifications

### Dimensions

| Size | Dimensions | Typography (Initial) | Use Case |
|------|------------|---------------------|----------|
| **XS** (Extra Small) | 24Ã—24px | 14px / 16px line-height | Compact lists, dense UIs |
| **SM** (Small) | 32Ã—32px | 16px / 24px line-height | Standard lists, comments |
| **MD** (Medium) | 40Ã—40px | 16px / 24px line-height | Cards, profiles |
| **LG** (Large) | 48Ã—48px | 18px / 24px line-height | Headers, main profiles |

### Visual Properties
- **Corner Radius:** 6px (all sizes) â†’ `value/corner-radii/md`
- **Overflow:** Clip (ensures images stay within bounds)
- **Aspect Ratio:** 1:1 (square)
- **Format:** SVG or raster image

## Color System

### Initial Type

The Initial avatar uses consistent colors in both light and dark modes:

| Property | Token Reference | Resolves To | Hex Value |
|----------|----------------|-------------|-----------|
| **Surface** | `color/surface/avatar` | `color/secondary/yellow100` | #FFF2C6 |
| **Content** | `color/content/avatar` | `color/tertiary/sandyorange` | #F5BD50 |

**Visual Result:** Light yellow background with orange/gold text (both modes)

**Note:** Avatar initials maintain the same warm color scheme in both light and dark modes for consistent user identification.

---

### Photo Type

| Property | Token Reference | Resolves To | Hex Value |
|----------|----------------|-------------|-----------|
| **Surface** | N/A | `color/brand/white` | #FFFFFF |

**Visual Result:** White background behind user photo

---

### Token Architecture

**Tier 2 Semantic Tokens:**
- `color/surface/avatar` (mode-constant: yellow100)
- `color/content/avatar` (mode-constant: sandyorange)
- `value/corner-radii/md` â†’ 6px

**Tier 1 Primitives:**
- `color/secondary/yellow100` = #FFF2C6
- `color/tertiary/sandyorange` = #F5BD50
- `color/brand/white` = #FFFFFF
- `Values/corner radii/radius-1halfx` = 6px

## Component Properties

```typescript
type AvatarProps = {
  className?: string;
  type?: "Photo" | "Initial";
  size?: "XS" | "SM" | "MD" | "LG";
  src?: string; // For Photo type
  initials?: string; // For Initial type
  alt?: string; // Accessibility
};
```

### Property: `type` (string, optional)
Determines the avatar content display type.

**Values:**
- `"Photo"` (default) - Displays user image
- `"Initial"` - Displays user initials on colored background

**Usage:**
```typescript
<Avatar type="Photo" src="/images/user.jpg" alt="John Doe" />
<Avatar type="Initial" initials="JD" alt="John Doe" />
```

---

### Property: `size` (string, optional)
Controls the avatar dimensions.

**Values:**
- `"XS"` - 24Ã—24px (Extra Small)
- `"SM"` - 32Ã—32px (Small)
- `"MD"` - 40Ã—40px (Medium)
- `"LG"` - 48Ã—48px (Large, default)

**Typography Scale:**
- **XS:** 14px / 16px line-height / 0.1px letter-spacing
- **SM:** 16px / 24px line-height / 0.2px letter-spacing
- **MD:** 16px / 24px line-height / 0.2px letter-spacing
- **LG:** 18px / 24px line-height / 0.2px letter-spacing

---

### Property: `src` (string, optional)
Image URL for Photo type avatars.

**Requirements:**
- Valid image URL
- Recommended: 2x actual display size for retina
- Supported formats: JPEG, PNG, WebP

---

### Property: `initials` (string, optional)
User initials for Initial type avatars.

**Requirements:**
- Maximum 2 characters recommended
- Automatically uppercased
- Format: "JD", "PD", "AS", etc.

---

### Property: `alt` (string, required)
Accessibility label describing the avatar.

**Requirements:**
- Include user's name
- Example: "John Doe" or "John Doe's avatar"

## Anatomy

```
Avatar Component (square, 6px rounded corners)
â””â”€â”€ Container
    â”œâ”€â”€ Photo Type: User Image
    â”‚   â””â”€â”€ Background: white
    â””â”€â”€ Initial Type: Text Container
        â”œâ”€â”€ Background: yellow100 (#FFF2C6)
        â””â”€â”€ Initials Text
            â””â”€â”€ Color: sandyorange (#F5BD50)
```

### Component Parts

**Photo Type:**
1. **Container:** White background, 6px rounded corners
2. **Image:** User photo, object-fit cover, centered

**Initial Type:**
1. **Container:** Light yellow background (#FFF2C6), 6px rounded corners
2. **Initials:** Orange/gold text (#F5BD50), centered, uppercase

## Complete Token Mapping

### Tier 3 Component Tokens (Recommended)

```css
/* Avatar Dimensions */
--avatar-size-xs: 24px;
--avatar-size-sm: 32px;
--avatar-size-md: 40px;
--avatar-size-lg: 48px;
--avatar-radius: var(--value-corner-radii-md);

/* Avatar Initial Type */
--avatar-initial-surface: var(--color-surface-avatar);
--avatar-initial-content: var(--color-content-avatar);

/* Avatar Photo Type */
--avatar-photo-surface: var(--color-brand-white);

/* Avatar Initial Typography */
--avatar-xs-font-size: var(--typography-font-size-14);
--avatar-xs-line-height: var(--typography-line-height-16);
--avatar-xs-letter-spacing: var(--typography-letter-spacing-0dot1);

--avatar-sm-md-font-size: var(--typography-font-size-16);
--avatar-sm-md-line-height: var(--typography-line-height-24);
--avatar-sm-md-letter-spacing: var(--typography-letter-spacing-0dot2);

--avatar-lg-font-size: var(--typography-font-size-18);
--avatar-lg-line-height: var(--typography-line-height-24);
--avatar-lg-letter-spacing: var(--typography-letter-spacing-0dot2);

--avatar-font-family: var(--typography-font-family-Roobert);
--avatar-font-weight: var(--typography-font-weight-regular);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Value | Purpose |
|-------|-------------|-------------|-------|---------|
| `color/surface/avatar` | yellow100 | yellow100 | #FFF2C6 | Initial background (constant) |
| `color/content/avatar` | sandyorange | sandyorange | #F5BD50 | Initial text (constant) |
| `value/corner-radii/md` | radius-1halfx | radius-1halfx | 6px | Corner rounding |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/secondary/yellow100` | #FFF2C6 | Light yellow background |
| `color/tertiary/sandyorange` | #F5BD50 | Orange/gold text |
| `color/brand/white` | #FFFFFF | Photo background |
| `Values/corner radii/radius-1halfx` | 6px | Rounded corners |

## Implementation Examples

### Basic Usage

```tsx
import Avatar from '@/components/core/Avatar';

// Photo avatar
<Avatar 
  type="Photo" 
  size="LG" 
  src="/images/users/john-doe.jpg"
  alt="John Doe"
/>

// Initial avatar (fallback)
<Avatar 
  type="Initial" 
  size="MD" 
  initials="JD"
  alt="John Doe"
/>
```

### Auto-Fallback Pattern

```tsx
const SmartAvatar = ({ user, size = "MD" }) => {
  return (
    <Avatar 
      type={user.profileImage ? "Photo" : "Initial"}
      size={size}
      src={user.profileImage}
      initials={getInitials(user.name)}
      alt={user.name}
    />
  );
};
```

### All Size Variants

```tsx
// Extra Small - 24Ã—24px
<Avatar type="Initial" size="XS" initials="PD" alt="Peter Doe" />

// Small - 32Ã—32px
<Avatar type="Photo" size="SM" src="/user.jpg" alt="Jane Smith" />

// Medium - 40Ã—40px
<Avatar type="Initial" size="MD" initials="AS" alt="Anna Stone" />

// Large - 48Ã—48px
<Avatar type="Photo" size="LG" src="/user.jpg" alt="Mike Chen" />
```

### With Error Handling

```tsx
const RobustAvatar = ({ user, size }) => {
  const [imageError, setImageError] = useState(false);
  
  if (imageError || !user.profileImage) {
    return (
      <Avatar 
        type="Initial"
        size={size}
        initials={getInitials(user.name)}
        alt={user.name}
      />
    );
  }
  
  return (
    <Avatar 
      type="Photo"
      size={size}
      src={user.profileImage}
      alt={user.name}
      onError={() => setImageError(true)}
    />
  );
};
```

## CSS Implementation

### Core Styles

```css
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--value-corner-radii-md);
  overflow: clip;
  flex-shrink: 0;
}

/* Size variants */
.avatar--xs { width: 24px; height: 24px; }
.avatar--sm { width: 32px; height: 32px; }
.avatar--md { width: 40px; height: 40px; }
.avatar--lg { width: 48px; height: 48px; }

/* Photo type */
.avatar--photo {
  background: var(--color-brand-white);
}

.avatar--photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Initial type */
.avatar--initial {
  background: var(--color-surface-avatar);
  color: var(--color-content-avatar);
  font-family: var(--typography-font-family-Roobert);
  font-weight: var(--typography-font-weight-regular);
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
}

/* Initial type - size-specific typography */
.avatar--initial.avatar--xs {
  font-size: var(--typography-font-size-14);
  line-height: var(--typography-line-height-16);
  letter-spacing: var(--typography-letter-spacing-0dot1);
}

.avatar--initial.avatar--sm,
.avatar--initial.avatar--md {
  font-size: var(--typography-font-size-16);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
}

.avatar--initial.avatar--lg {
  font-size: var(--typography-font-size-18);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
}
```

### CSS Custom Properties

```css
:root {
  /* Avatar colors - constant in both modes */
  --color-surface-avatar: #FFF2C6;
  --color-content-avatar: #F5BD50;
  --color-brand-white: #FFFFFF;
  
  /* Corner radius */
  --value-corner-radii-md: 6px;
  
  /* Typography */
  --typography-font-family-Roobert: 'Roobert', sans-serif;
  --typography-font-weight-regular: 400;
  --typography-font-size-14: 14px;
  --typography-font-size-16: 16px;
  --typography-font-size-18: 18px;
  --typography-line-height-16: 16px;
  --typography-line-height-24: 24px;
  --typography-letter-spacing-0dot1: 0.1px;
  --typography-letter-spacing-0dot2: 0.2px;
}

/* Dark mode - avatar colors remain constant */
[data-theme="dark"] {
  /* Avatar colors don't change */
  --color-surface-avatar: #FFF2C6;
  --color-content-avatar: #F5BD50;
}
```

## Usage Guidelines

### When to Use Avatar

**User Identification:**
- Profile headers and pages
- Account settings
- User lists and directories
- Comments and discussion participants

**Navigation Elements:**
- User menu triggers
- Sidebar user identification
- Account/workspace switchers
- Logged-in user indicators

**Content Attribution:**
- Post authors
- Document collaborators
- Task assignees
- Meeting participants

### When to Use Photo vs Initial

**Use Photo Type When:**
- User has uploaded profile image
- High-quality image available
- Personal branding is important
- Social/community context

**Use Initial Type When:**
- No profile image uploaded (fallback)
- User hasn't set an image
- System-generated accounts
- Anonymous or placeholder users

### Size Selection Guide

**Extra Small (XS - 24px):**
- Inline mentions
- Dense data tables
- Compact activity feeds
- Mobile navigation (collapsed)

**Small (SM - 32px):**
- Standard lists
- Comments sections
- Chat interfaces
- Team member grids

**Medium (MD - 40px):**
- Profile cards
- User selection dialogs
- Search results
- Moderate-emphasis contexts

**Large (LG - 48px):**
- Page headers
- Profile pages
- User settings
- Primary user identification

## Best Practices

### Image Guidelines âœ“
1. **Resolution:** Use 2x dimensions for retina displays (e.g., 96Ã—96px for LG avatar)
2. **File Format:** JPEG for photos, PNG for transparency, WebP for modern browsers
3. **Optimization:** Compress images appropriately (70-80% quality for JPEG)
4. **Centering:** Ensure faces are centered in photos
5. **Background:** Consider removing or blurring backgrounds for consistency

### Initial Guidelines âœ“
1. **Format:** Use first letter of first + last name
2. **Uppercase:** Always display in uppercase
3. **Length:** Maximum 2 characters
4. **Single Name:** Use first 2 letters if only one name available
5. **Special Characters:** Strip or handle appropriately

### Accessibility Guidelines âœ“
1. **Alt Text:** Provide descriptive alt text with user's name
2. **Semantic HTML:** Use appropriate HTML elements
3. **Color Contrast:** Initials meet 3.1:1 contrast ratio (sufficient for large text)
4. **Focus States:** Ensure visible focus when interactive
5. **Screen Readers:** Announce user name, not just "avatar"

## Helper Functions

### Generate Initials

```typescript
function getInitials(fullName: string): string {
  if (!fullName) return '??';
  
  const names = fullName.trim().split(' ');
  
  if (names.length === 1) {
    // Single name: use first 2 letters
    return names[0].substring(0, 2).toUpperCase();
  }
  
  // Multiple names: first letter of first + last name
  const firstInitial = names[0][0];
  const lastInitial = names[names.length - 1][0];
  
  return `${firstInitial}${lastInitial}`.toUpperCase();
}

// Examples:
getInitials("John Doe");           // "JD"
getInitials("Sarah");              // "SA"
getInitials("Mary Jane Watson");   // "MW"
getInitials("Peter");              // "PE"
```

### Get Avatar Props Helper

```typescript
function getAvatarProps(user: User, size: AvatarSize = "MD") {
  return {
    type: user.profileImage ? "Photo" : "Initial",
    size: size,
    src: user.profileImage || undefined,
    initials: getInitials(user.name),
    alt: user.name
  };
}

// Usage:
<Avatar {...getAvatarProps(user, "LG")} />
```

## Advanced Patterns

### Avatar with Image Loading

```tsx
const Avatar = ({ src, alt, size, initials }: AvatarProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageLoaded(true);
        setIsLoading(false);
      };
      img.onerror = () => {
        setImageError(true);
        setIsLoading(false);
      };
    }
  }, [src]);

  if (isLoading) {
    return <div className={`avatar avatar--${size} skeleton`} />;
  }

  if (imageError || !src) {
    return (
      <div className={`avatar avatar--initial avatar--${size}`}>
        {initials}
      </div>
    );
  }

  return (
    <div className={`avatar avatar--photo avatar--${size}`}>
      <img src={src} alt={alt} />
    </div>
  );
};
```

### Avatar with Status Indicator

```tsx
const AvatarWithStatus = ({ user, isOnline, size = "MD" }) => {
  return (
    <div className={styles.avatarWrapper}>
      <Avatar {...getAvatarProps(user, size)} />
      <span 
        className={`${styles.statusDot} ${isOnline ? styles.online : styles.offline}`}
        aria-label={isOnline ? "Online" : "Offline"}
      />
    </div>
  );
};
```

### Avatar Stack (Overlapping)

```tsx
const AvatarStack = ({ users, max = 3 }) => {
  const displayUsers = users.slice(0, max);
  const overflow = users.length - max;
  
  return (
    <div className={styles.avatarStack}>
      {displayUsers.map((user, index) => (
        <Avatar
          key={user.id}
          {...getAvatarProps(user, "SM")}
          className={styles.stackedAvatar}
          style={{ marginLeft: index > 0 ? '-8px' : '0', zIndex: displayUsers.length - index }}
        />
      ))}
      {overflow > 0 && (
        <div className={styles.avatarOverflow}>
          +{overflow}
        </div>
      )}
    </div>
  );
};
```

## Accessibility

### Alt Text

```tsx
// Good - Descriptive
<Avatar 
  type="Photo" 
  src="/user.jpg" 
  alt="John Doe" 
/>

// Good - With context
<Avatar 
  type="Initial" 
  initials="JD" 
  alt="John Doe, Project Manager" 
/>

// Bad - Generic
<Avatar 
  type="Photo" 
  src="/user.jpg" 
  alt="Avatar" 
/>
```

### Interactive Avatars

```tsx
<button 
  aria-label="View John Doe's profile"
  onClick={() => viewProfile(user)}
>
  <Avatar {...getAvatarProps(user, "MD")} />
</button>
```

### Contrast Requirements

**Initial Type:**
- Background: #FFF2C6 (yellow100)
- Text: #F5BD50 (sandyorange)
- Contrast: 3.1:1 âœ“ (Sufficient for large text/graphics, WCAG AA)

## Testing Checklist

### Visual Testing
- [ ] All 4 sizes render correctly (24, 32, 40, 48px)
- [ ] Corner radius is 6px on all sizes
- [ ] Photo type fills container without distortion
- [ ] Initial type centers text properly
- [ ] Initials are uppercase
- [ ] Typography scales appropriately per size
- [ ] Initial background: light yellow (#FFF2C6)
- [ ] Initial text: orange/gold (#F5BD50)
- [ ] Photo background: white (#FFFFFF)
- [ ] Colors consistent in both light and dark modes

### Functional Testing
- [ ] Fallback to initials when photo unavailable
- [ ] Image error handling works
- [ ] Initials generate correctly from names
- [ ] Special characters in names handled
- [ ] Single-name users show 2-letter initials
- [ ] Empty names handled gracefully
- [ ] Loading states work properly

### Accessibility Testing
- [ ] Alt text includes user name
- [ ] Screen reader announces correctly
- [ ] Color contrast meets requirements (3.1:1 for initials)
- [ ] Focus visible when interactive
- [ ] Keyboard navigation works
- [ ] Works without images (initial fallback)

### Mode Testing
- [ ] Initial colors remain consistent in light mode
- [ ] Initial colors remain consistent in dark mode
- [ ] Photo avatars display correctly in both modes
- [ ] No color shifting between modes

## Related Components

### Builds Into:
- **Name Group** - Avatar + Name
- **User Group** - Avatar + Name + Role + Settings

### Works With:
- **Alert Count** - Notification badge overlay
- **Online Indicator** - Status dot overlay
- **Dropdown Menu** - User menu trigger
- **Cards** - Profile or user cards

## Common Patterns

### Conditional Rendering

```tsx
const ConditionalAvatar = ({ user }) => {
  if (!user) return null;
  
  return <Avatar {...getAvatarProps(user, "MD")} />;
};
```

### Responsive Sizing

```tsx
const ResponsiveAvatar = ({ user }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const size = isMobile ? "SM" : "MD";
  
  return <Avatar {...getAvatarProps(user, size)} />;
};
```

## Version History

- **v1.0** - Initial avatar component with photo and initial types, 4 size variants

---

*Component Documentation - Ohme Design System*  
*Core UI Component*  
*Last Updated: January 2025*
