# Menu System Documentation

## Overview

The Menu system provides navigation across Ohme portal products through side navigation (Menu Drawer) and mobile top navigation (Mobile Menu). It consists of four components: Collapse toggle, Menu Item links, Menu Drawer container, and Mobile Menu bar.

**Component Type:** Functional Component  
**Category:** Navigation / Layout  
**Token Integration:** Yes - uses navigation, content, and surface tokens  
**System Components:** Collapse (4 directions), Menu Item (18 variants), Menu Drawer (40+ platform variants), Mobile Menu (2 states)

---

# Part 1: Collapse (Toggle Control)

## Overview

Collapse is a circular button with a directional chevron that toggles the Menu Drawer between expanded and collapsed states. The chevron direction indicates the collapse/expand action.

**Variants:** 4 directional states (â†, â†’, â†‘, â†“)  
**Size:** 24Ã—24px circular button

## Design Specifications

### Dimensions
- **Size:** 24Ã—24px
- **Shape:** Circular (100px radius)
- **Icon:** Chevron arrow, 7.3px Ã— 4.1px
- **Position:** Right edge of menu drawer (-11px offset)

### Visual Properties
- **Background:** Solid color circle
- **Icon:** Teal chevron
- **Border:** None
- **Rotation:** Icon rotates based on direction

### Direction Meanings

| Direction | Use Case | Menu State |
|-----------|----------|------------|
| **â† (Left)** | Collapse menu | Expanded menu â†’ Collapsed |
| **â†’ (Right)** | Expand menu | Collapsed menu â†’ Expanded |
| **â†‘ (Up)** | Collapse upward | Context-specific |
| **â†“ (Down)** | Expand downward | Context-specific |

**Primary Use:** â† and â†’ for menu drawer expansion/collapse

## Color System - Collapse

| Property | Token Reference | Resolves To | Hex Value |
|----------|----------------|-------------|-----------|
| **Surface** | `menu/collapse/surface/collapse-surface` â†’ `brand/smokeygreen` | smokeygreen | #034048 |
| **Icon** | `color/surface/accent` | highlighterteal | #00FFD6 |

**Visual Result:**
- Background: Dark teal-green circle (#034048) - constant both modes
- Icon: Bright teal chevron (#00FFD6) - constant both modes

---

# Part 2: Menu Item (Navigation Link)

## Overview

Menu Item is an individual navigation link within the Menu Drawer. It displays an icon and/or text label with distinct states for default, hover, and active.

**Variants:** 18 (2 sizes Ã— 3 states Ã— 3 display modes)  
**Sizes:** Medium (desktop), Small (mobile)

## Variant Matrix

| Size | Icon | Text | States | Use Case |
|------|------|------|--------|----------|
| Medium | âœ“ | âœ“ | Default, Hover, Active | Standard desktop menu item |
| Medium | âœ“ | âœ— | Default, Hover, Active | Collapsed menu (icon only) |
| Medium | âœ— | âœ“ | Default, Hover, Active | Text-only menu item |
| Small | âœ“ | âœ“ | Default, Hover, Active | Mobile menu item |
| Small | âœ“ | âœ— | Default, Hover, Active | Mobile collapsed (icon only) |
| Small | âœ— | âœ“ | Default, Hover, Active | Mobile text-only |

## Design Specifications

### Medium Size (Desktop)

| Element | Width | Height | Padding | Gap |
|---------|-------|--------|---------|-----|
| **Container** | Auto (172px with text) | 40px | 8px | 12px icon-to-text |
| **Icon** | 24Ã—24px | - | - | - |
| **Icon-only** | 40Ã—40px | 40px | 8px | - |

### Small Size (Mobile)

| Element | Width | Height | Padding | Gap |
|---------|-------|--------|---------|-----|
| **Container** | Auto (149px with text) | 40px | 8px | 12px icon-to-text |
| **Icon** | 24Ã—24px | - | - | - |
| **Icon-only** | 40Ã—40px | 40px | 8px | - |

### Visual Properties
- **Corner Radius:** 6px
- **Typography:** Roobert Regular, 18px / 24px (medium), varies (small)
- **Letter Spacing:** 0.2px
- **Icon Color:** Highlighterteal #00FFD6 (constant)
- **Layout:** Horizontal flex, icon left, text right

## Color System - Menu Item

### Default State

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Hex Value |
|----------|----------------|-------------|-------------|-----------|
| **Surface** | `menu/menu-drawer/surface/menudrawer-surface` | ohmedarkblue | ohmedarkblue | #032536 |
| **Icon** | `color/surface/accent` | highlighterteal | highlighterteal | #00FFD6 |
| **Text** | `color/content/inverse` | white | ohmedarkblue | #FFFFFF / #032536 |

**Visual Result:**
- Dark blue background (constant)
- Teal icon (constant)
- White text (light mode) / dark blue text (dark mode)

---

### Hover State

| Property | Token Reference | Hex Value |
|----------|----------------|-----------|
| **Surface** | `menu/menu-drawer/surface/menudrawer-surface` | #032536 |
| **Icon** | `color/surface/accent` | #00FFD6 |
| **Text** | `color/content/accent` | #00FFD6 |

**Visual Result:**
- Same dark blue background
- Same teal icon
- **Teal text** (changes from white to teal on hover)

---

### Active State

| Property | Token Reference | Hex Value |
|----------|----------------|-----------|
| **Surface** | `menu/menu-drawer/surface/menudrawer-surface` | #032536 |
| **Icon** | `color/surface/accent` | #00FFD6 |
| **Text** | `color/content/accent` | #00FFD6 |

**Visual Result:**
- Same as hover state
- Indicates current page/section

---

# Part 3: Menu Drawer (Side Navigation)

## Overview

Menu Drawer is the primary side navigation component containing logo, grouped menu items, section labels, user information, and settings/logout controls. It supports collapsed and expanded states across multiple portal platforms.

**Platforms:** Connect, Shared Parking, Volt, Conduit, Dealer Portal, Pulse  
**Variants:** 40+ (6 platforms Ã— multiple versions Ã— 2 states Ã— 2 devices)

## Design Specifications

### Expanded Desktop Dimensions

| Platform | Width | Height | Padding | Top Margin |
|----------|-------|--------|---------|------------|
| **Connect** | 204px | Full viewport | 16px H | 24px |
| **Shared Parking** | 209px | Full viewport | 16px H | 24px |
| **Volt** | 200px | Full viewport | 16px H | 24px |
| **Conduit** | 204px | Full viewport | 16px H | 24px |
| **Dealer Portal** | 204px | Full viewport | 16px H | 24px |
| **Pulse** | 204-220px | Full viewport | 16px H | 24px |

### Collapsed Desktop Dimensions

| Element | Width | Height |
|---------|-------|--------|
| **Container** | 80px | Full viewport |
| **Icons Only** | 40Ã—40px | Per item |

### Mobile Dimensions

| Platform | Width | Height |
|----------|-------|--------|
| **All Platforms** | 300px | 800-1089px (varies) |

### Visual Properties
- **Background:** Dark blue (#032536)
- **Logo Position:** Top (24px from top, 16px from left)
- **User Section:** Bottom (24px from bottom)
- **Collapse Button:** Right edge overlay (-11px offset, 56px from top)
- **Section Gap:** 48px between major sections
- **Item Gap:** 4px between menu items in same section
- **Section Label Gap:** 20px above each section

## Menu Drawer Structure

### Sections (Top to Bottom)

1. **Logo** (top, 24px margin)
   - Brand logo (varies by platform)
   - Full width in expanded, centered icon in collapsed

2. **Main Navigation** (32px gap below logo)
   - Primary menu item (e.g., "Jobs")
   - Section labels (e.g., "Admin panel")
   - Grouped menu items (4px gaps)
   - Multiple sections (48px gaps between)

3. **User Bar** (bottom, 24px margin)
   - User avatar + name/role
   - Settings menu item
   - Log out menu item
   - 8px gaps between elements

4. **Collapse Button** (overlay)
   - Position: Right edge, -11px offset
   - Top: 56px from top
   - Always visible in desktop

## Color System - Menu Drawer

### Container

| Property | Token Reference | Resolves To | Hex Value |
|----------|----------------|-------------|-----------|
| **Surface** | `menu/menu-drawer/surface/menudrawer-surface` â†’ `navigation/surface` | ohmedarkblue | #032536 |

**Visual Result:**
- Dark blue background (constant both modes)

---

### Section Labels

| Property | Token Reference | Resolves To | Hex Value |
|----------|----------------|-------------|-----------|
| **Text** | `menu/label` | `tertiary/paleteal` | #93BFBC |

**Typography:** Roobert Regular, 18px / 24px, 0.2px letter-spacing

**Visual Result:**
- Muted teal text (constant both modes)

---

### User Name/Role

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Hex Value |
|----------|----------------|-------------|-------------|-----------|
| **Name** | `color/content/primary` | ohmedarkblue | white | #032536 / #FFFFFF |
| **Role** | `color/content/tertiary` | grey300 | grey700 | #ADB3B1 / #647882 |

**Typography:** 
- Name: 18px / 24px, 0.2px spacing
- Role: 14px / 18px

**Note:** In menu drawer (dark background), these likely display as white/light colors for visibility.

---

# Part 4: Mobile Menu (Top Navigation Bar)

## Overview

Mobile Menu is a horizontal top navigation bar for mobile devices, displaying the Ohme logo and a hamburger menu button (when logged in) or just the centered logo (when logged out).

**Variants:** 2 (Logged in, Logged out)  
**Size:** 375px Ã— 68px

## Design Specifications

### Dimensions

| Element | Width | Height | Position |
|---------|-------|--------|----------|
| **Container** | 375px (full width) | 68px | Top of viewport |
| **Logo** | 64.167px Ã— 20px | - | Left 16px (logged in), center (logged out) |
| **Menu Button** | 48px | 48px | Right 14px |
| **Menu Icon** | 24Ã—24px | - | Inside button |

### Visual Properties
- **Background:** Dark blue (#032536)
- **Logo:** White Ohme logo
- **Menu Icon:** Hamburger (3 horizontal lines)
- **Alignment:** Logo left, menu right (logged in) / Logo center (logged out)

## Color System - Mobile Menu

### Container

| Property | Token Reference | Resolves To | Hex Value |
|----------|----------------|-------------|-----------|
| **Surface** | `menu/menu-drawer/surface/menudrawer-surface` | ohmedarkblue | #032536 |

---

### Logo

| Property | Value |
|----------|-------|
| **Color** | White (#FFFFFF) |
| **Size** | 64.167px Ã— 20px |

---

### Menu Button (Logged In)

| Property | Token Reference | Value |
|----------|----------------|-------|
| **Border** | `button/tertiary/border/active` | Transparent |
| **Icon** | White | #FFFFFF |
| **Padding** | 12px | Standard button |

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Collapse */
--menu-collapse-surface: var(--color-brand-smokeygreen);
--menu-collapse-icon: var(--color-surface-accent);
--menu-collapse-size: 24px;
--menu-collapse-radius: var(--value-corner-radii-full);

/* Menu Item */
--menuitem-padding: 8px;
--menuitem-gap: 12px;
--menuitem-radius: 6px;
--menuitem-icon-size: 24px;
--menuitem-surface: var(--menu-menudrawer-surface);
--menuitem-icon-color: var(--color-surface-accent);
--menuitem-text-default: var(--color-content-inverse);
--menuitem-text-hover: var(--color-content-accent);
--menuitem-text-active: var(--color-content-accent);

/* Menu Item Typography */
--menuitem-font-family: var(--typography-font-family-Roobert);
--menuitem-font-size-medium: var(--typography-font-size-18);
--menuitem-font-weight: var(--typography-font-weight-regular);
--menuitem-line-height: var(--typography-line-height-24);
--menuitem-letter-spacing: var(--typography-letter-spacing-0dot2);

/* Menu Drawer */
--menudrawer-surface: var(--color-brand-ohmedarkblue);
--menudrawer-width-expanded: 204px;
--menudrawer-width-collapsed: 80px;
--menudrawer-width-mobile: 300px;
--menudrawer-padding-inline: 16px;
--menudrawer-padding-top: 24px;
--menudrawer-padding-bottom: 24px;
--menudrawer-section-gap: 48px;
--menudrawer-item-gap: 4px;
--menudrawer-label-gap: 20px;

/* Menu Label */
--menu-label-color: var(--color-tertiary-paleteal);
--menu-label-font-family: var(--typography-font-family-Roobert);
--menu-label-font-size: var(--typography-font-size-18);
--menu-label-font-weight: var(--typography-font-weight-regular);
--menu-label-line-height: var(--typography-line-height-24);
--menu-label-letter-spacing: var(--typography-letter-spacing-0dot2);

/* User Bar */
--menudrawer-userbar-gap: 8px;
--menudrawer-user-avatar-size: 40px;
--menudrawer-user-name-font-size: 18px;
--menudrawer-user-role-font-size: 14px;

/* Mobile Menu */
--mobile-menu-height: 68px;
--mobile-menu-surface: var(--color-brand-ohmedarkblue);
--mobile-menu-logo-width: 64.167px;
--mobile-menu-logo-height: 20px;
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/accent` | highlighterteal | highlighterteal | #00FFD6 | #00FFD6 |
| `color/content/accent` | highlighterteal | highlighterteal | #00FFD6 | #00FFD6 |
| `color/content/inverse` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/tertiary` | grey300 | grey700 | #ADB3B1 | #647882 |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/ohmedarkblue` | #032536 | Menu drawer surface |
| `color/brand/smokeygreen` | #034048 | Collapse button surface |
| `color/brand/highlighterteal` | #00FFD6 | Icons, hover/active text |
| `color/tertiary/paleteal` | #93BFBC | Section labels |
| `color/brand/white` | #FFFFFF | Default menu text, logo |
| `color/secondary/grey300` | #ADB3B1 | User role text (light) |
| `color/secondary/grey700` | #647882 | User role text (dark) |
| `Values/space/space-2x` | 8px | Menu item padding |
| `Values/space/space-3x` | 12px | Icon-to-text gap |
| `Values/space/space-6x` | 24px | Top/bottom margins |
| `Values/space/space-8x` | 32px | Logo gap |
| `Values/space/space-12x` | 48px | Section gaps |
| `Values/corner radii/radius-1halfx` | 6px | Menu item radius |
| `Values/corner radii/radius-max` | 100px | Collapse button radius |

## Component Properties

### Collapse

```typescript
type CollapseProps = {
  className?: string;
  direction?: "â†" | "â†’" | "â†‘" | "â†“";
  onClick?: () => void;
  ariaLabel?: string;
};
```

### Menu Item

```typescript
type MenuItemProps = {
  className?: string;
  size?: "small" | "medium";
  state?: "default" | "hover" | "active";
  icon?: React.ReactNode | string;
  text?: string;
  showIcon?: boolean;
  showText?: boolean;
  onClick?: () => void;
  href?: string;
};
```

### Menu Drawer

```typescript
type MenuDrawerProps = {
  className?: string;
  platform?: "Connect" | "Shared parking" | "Volt" | "Conduit" | "Dealer portal" | "Pulse";
  version?: "1" | "2" | "3" | "MVP";
  collapsed?: boolean;
  showCollapseIcon?: boolean;
  mobile?: boolean;
  menuItems: MenuSection[];
  currentPath?: string;
  user?: UserInfo;
  onNavigate?: (path: string) => void;
  onCollapse?: (collapsed: boolean) => void;
  onLogout?: () => void;
};

type MenuSection = {
  label?: string;
  items: MenuItem[];
};

type MenuItem = {
  id: string;
  label: string;
  icon: string;
  path: string;
  onClick?: () => void;
};

type UserInfo = {
  name: string;
  role: string;
  avatar?: string;
};
```

### Mobile Menu

```typescript
type MobileMenuProps = {
  className?: string;
  loggedIn?: boolean;
  onMenuClick?: () => void;
};
```

## Implementation Examples

### Basic Menu Item Usage

```tsx
import MenuItem from '@/components/functional/MenuItem';

// Default state
<MenuItem
  size="medium"
  state="default"
  icon="Home"
  text="Jobs"
  showIcon={true}
  showText={true}
/>

// Hover state
<MenuItem
  size="medium"
  state="hover"
  icon="Dashboard"
  text="Dashboard"
  showIcon={true}
  showText={true}
/>

// Active state (current page)
<MenuItem
  size="medium"
  state="active"
  icon="Users"
  text="Partners"
  showIcon={true}
  showText={true}
/>

// Icon-only (collapsed menu)
<MenuItem
  size="medium"
  state="default"
  icon="Settings"
  showIcon={true}
  showText={false}
/>
```

### Complete Menu Drawer

```tsx
import MenuDrawer from '@/components/functional/MenuDrawer';

const [menuCollapsed, setMenuCollapsed] = useState(false);
const currentPath = usePathname();

const menuSections: MenuSection[] = [
  {
    items: [
      { id: 'jobs', label: 'Jobs', icon: 'Briefcase', path: '/jobs' }
    ]
  },
  {
    label: 'Admin panel',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: 'Dashboard', path: '/dashboard' },
      { id: 'partners', label: 'Partners', icon: 'Users', path: '/partners' },
      { id: 'agents', label: 'Agents', icon: 'Person', path: '/agents' }
    ]
  },
  {
    label: 'Organisation',
    items: [
      { id: 'users', label: 'Users', icon: 'Person', path: '/users' },
      { id: 'company', label: 'Company', icon: 'Building', path: '/company' }
    ]
  },
  {
    label: 'Support',
    items: [
      { id: 'resources', label: 'Resources', icon: 'File', path: '/resources' }
    ]
  }
];

<MenuDrawer
  platform="Connect"
  version="1"
  collapsed={menuCollapsed}
  showCollapseIcon={true}
  mobile={false}
  menuItems={menuSections}
  currentPath={currentPath}
  user={{
    name: 'David A.',
    role: 'Engineer',
    avatar: '/avatars/david.jpg'
  }}
  onNavigate={(path) => navigate(path)}
  onCollapse={setMenuCollapsed}
  onLogout={handleLogout}
/>
```

### Mobile Menu Usage

```tsx
import MobileMenu from '@/components/functional/MobileMenu';

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Logged in state
<MobileMenu
  loggedIn={true}
  onMenuClick={() => setMobileMenuOpen(true)}
/>

// Logged out state (centered logo only)
<MobileMenu
  loggedIn={false}
/>

// With drawer
<>
  <MobileMenu
    loggedIn={true}
    onMenuClick={() => setMobileMenuOpen(true)}
  />
  
  {mobileMenuOpen && (
    <MenuDrawer
      platform="Connect"
      mobile={true}
      menuItems={menuSections}
      onNavigate={(path) => {
        navigate(path);
        setMobileMenuOpen(false);
      }}
      {...props}
    />
  )}
</>
```

### Responsive Navigation

```tsx
const ResponsiveNavigation = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuCollapsed, setDesktopMenuCollapsed] = useState(false);

  if (isMobile) {
    return (
      <>
        <MobileMenu
          loggedIn={true}
          onMenuClick={() => setMobileMenuOpen(true)}
        />
        {mobileMenuOpen && (
          <MenuDrawer
            platform="Connect"
            mobile={true}
            menuItems={menuSections}
            onNavigate={(path) => {
              navigate(path);
              setMobileMenuOpen(false);
            }}
          />
        )}
      </>
    );
  }

  return (
    <MenuDrawer
      platform="Connect"
      collapsed={desktopMenuCollapsed}
      showCollapseIcon={true}
      mobile={false}
      menuItems={menuSections}
      onCollapse={setDesktopMenuCollapsed}
      {...props}
    />
  );
};
```

## CSS Implementation

### Collapse Button

```css
.collapse {
  width: 24px;
  height: 24px;
  background: var(--menu-collapse-surface);
  border-radius: var(--menu-collapse-radius);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 200ms ease;
  position: absolute;
  right: -11px;
  top: 56px;
  z-index: 10;
}

.collapse:hover {
  transform: scale(1.1);
}

.collapse__icon {
  width: 7.3px;
  height: 4.1px;
  color: var(--menu-collapse-icon);
  transition: transform 200ms ease;
}

/* Direction rotations */
.collapse--left .collapse__icon {
  transform: rotate(90deg) scaleY(-1);
}

.collapse--right .collapse__icon {
  transform: rotate(90deg);
}

.collapse--up .collapse__icon {
  transform: rotate(0deg);
}

.collapse--down .collapse__icon {
  transform: rotate(0deg) scaleY(-1);
}
```

### Menu Item

```css
.menuItem {
  display: flex;
  align-items: center;
  gap: var(--menuitem-gap);
  padding: var(--menuitem-padding);
  background: var(--menuitem-surface);
  border-radius: var(--menuitem-radius);
  cursor: pointer;
  transition: all 200ms ease;
  text-decoration: none;
  
  font-family: var(--menuitem-font-family);
  font-size: var(--menuitem-font-size-medium);
  font-weight: var(--menuitem-font-weight);
  line-height: var(--menuitem-line-height);
  letter-spacing: var(--menuitem-letter-spacing);
}

/* States */
.menuItem--default {
  color: var(--menuitem-text-default);
}

.menuItem--hover,
.menuItem:hover {
  color: var(--menuitem-text-hover);
}

.menuItem--active {
  color: var(--menuitem-text-active);
}

/* Icon */
.menuItem__icon {
  width: var(--menuitem-icon-size);
  height: var(--menuitem-icon-size);
  color: var(--menuitem-icon-color);
  flex-shrink: 0;
}

/* Text-only variant */
.menuItem--textOnly {
  padding-left: calc(var(--menuitem-icon-size) + var(--menuitem-gap) + var(--menuitem-padding));
}

/* Icon-only variant */
.menuItem--iconOnly {
  width: 40px;
  height: 40px;
  justify-content: center;
  padding: 8px;
}
```

### Menu Drawer

```css
.menuDrawer {
  background: var(--menudrawer-surface);
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: var(--menudrawer-padding-top) 
           var(--menudrawer-padding-inline)
           var(--menudrawer-padding-bottom);
  position: fixed;
  left: 0;
  top: 0;
  transition: width 300ms ease;
  z-index: 100;
}

.menuDrawer--expanded {
  width: var(--menudrawer-width-expanded);
}

.menuDrawer--collapsed {
  width: var(--menudrawer-width-collapsed);
}

.menuDrawer--mobile {
  width: var(--menudrawer-width-mobile);
}

/* Logo */
.menuDrawer__logo {
  width: 98px;
  height: 49px;
  margin-bottom: var(--value-spacing-gap-4xl);
}

.menuDrawer--collapsed .menuDrawer__logo {
  width: 40px;
  /* Show icon version only */
}

/* Main menu section */
.menuDrawer__mainMenu {
  display: flex;
  flex-direction: column;
  gap: var(--menudrawer-section-gap);
  flex: 1;
}

/* Section */
.menuDrawer__section {
  display: flex;
  flex-direction: column;
  gap: var(--menudrawer-label-gap);
}

/* Section label */
.menuDrawer__sectionLabel {
  font-family: var(--menu-label-font-family);
  font-size: var(--menu-label-font-size);
  font-weight: var(--menu-label-font-weight);
  line-height: var(--menu-label-line-height);
  letter-spacing: var(--menu-label-letter-spacing);
  color: var(--menu-label-color);
}

.menuDrawer--collapsed .menuDrawer__sectionLabel {
  display: none;
}

/* Menu group */
.menuDrawer__menuGroup {
  display: flex;
  flex-direction: column;
  gap: var(--menudrawer-item-gap);
}

/* User bar */
.menuDrawer__userBar {
  display: flex;
  flex-direction: column;
  gap: var(--menudrawer-userbar-gap);
  margin-top: auto;
}

.menuDrawer__userGroup {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 50px;
}

.menuDrawer__userAvatar {
  width: var(--menudrawer-user-avatar-size);
  height: var(--menudrawer-user-avatar-size);
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
}

.menuDrawer__userName {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--menudrawer-user-name-font-size);
  line-height: 24px;
  letter-spacing: 0.2px;
  color: var(--color-content-primary);
}

.menuDrawer__userRole {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--menudrawer-user-role-font-size);
  line-height: 18px;
  color: var(--color-content-tertiary);
}

.menuDrawer--collapsed .menuDrawer__userName,
.menuDrawer--collapsed .menuDrawer__userRole {
  display: none;
}
```

### Mobile Menu

```css
.mobileMenu {
  width: 100%;
  height: var(--mobile-menu-height);
  background: var(--mobile-menu-surface);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Logged in - logo left, menu right */
.mobileMenu--loggedIn {
  justify-content: space-between;
  padding: 0 16px 0 16px;
}

/* Logged out - logo centered */
.mobileMenu--loggedOut {
  justify-content: center;
}

.mobileMenu__logo {
  width: var(--mobile-menu-logo-width);
  height: var(--mobile-menu-logo-height);
}

.mobileMenu__menuButton {
  width: 24px;
  height: 24px;
  padding: 12px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobileMenu__menuIcon {
  width: 24px;
  height: 24px;
  color: white;
}
```

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-brand-ohmedarkblue: #032536;
  --color-brand-smokeygreen: #034048;
  --color-brand-highlighterteal: #00FFD6;
  --color-tertiary-paleteal: #93BFBC;
  --color-brand-white: #FFFFFF;
  --color-content-accent: #00FFD6;
  --color-content-inverse: #FFFFFF;
  --color-content-primary: #032536;
  --color-content-tertiary: #ADB3B1;
}

[data-theme="dark"] {
  --color-content-inverse: #032536;
  --color-content-primary: #FFFFFF;
  --color-content-tertiary: #647882;
  /* Menu surface and accent colors remain constant */
}
```

## Usage Guidelines

### When to Use Menu Drawer

**Primary Navigation:**
- Main app navigation
- Platform-wide menu
- Always-accessible navigation
- Grouped menu structure

**Desktop:**
- Persistent side navigation
- Collapsible for more workspace
- Shows all navigation options

**Mobile:**
- Slide-out drawer
- Triggered by hamburger menu
- Full-screen overlay

### When to Use Mobile Menu

**Mobile Header:**
- Top navigation on mobile devices
- Logo branding
- Menu access point

**Logged In:**
- Show logo + hamburger menu
- Opens menu drawer on click

**Logged Out:**
- Centered logo only
- No menu access

## Best Practices

### Content Guidelines âœ“
1. **Clear Labels:** Use descriptive menu item names
2. **Logical Grouping:** Group related items under section labels
3. **Section Labels:** Use muted color for hierarchy
4. **User Context:** Show user name and role
5. **Icon Consistency:** Use appropriate icons from Radix system

### Visual Guidelines âœ“
1. **Dark Theme:** Menu drawer uses dark background
2. **Teal Accents:** Icons and active states in teal
3. **Adequate Spacing:** 48px between sections, 4px between items
4. **Collapsed State:** Icon-only for more screen space
5. **User Visibility:** Always show user info at bottom

### Interaction Guidelines âœ“
1. **Hover Feedback:** Change text color to teal on hover
2. **Active Indication:** Teal text for current page
3. **Collapse Toggle:** Easy access to collapse/expand
4. **Mobile Overlay:** Drawer overlays content on mobile
5. **Click Outside:** Close mobile drawer on outside click

## Accessibility

### Menu Drawer ARIA

```tsx
<nav 
  className="menuDrawer"
  aria-label="Main navigation"
  aria-expanded={!collapsed}
>
  {/* Logo */}
  <div className="menu-logo">
    <img src={logo} alt="Ohme Connect" />
  </div>

  {/* Navigation sections */}
  {menuSections.map(section => (
    <div key={section.label} role="group" aria-labelledby={`section-${section.label}`}>
      {section.label && (
        <h2 id={`section-${section.label}`} className="section-label">
          {section.label}
        </h2>
      )}
      <ul role="list">
        {section.items.map(item => (
          <li key={item.id}>
            <MenuItem
              href={item.path}
              icon={item.icon}
              text={item.label}
              state={currentPath === item.path ? 'active' : 'default'}
              aria-current={currentPath === item.path ? 'page' : undefined}
            />
          </li>
        ))}
      </ul>
    </div>
  ))}

  {/* User section */}
  <div className="user-bar">
    <div className="user-info" aria-label="Current user">
      <img src={user.avatar} alt="" />
      <div>
        <p>{user.name}</p>
        <p>{user.role}</p>
      </div>
    </div>
    <MenuItem
      icon="Settings"
      text="Settings"
      onClick={openSettings}
      aria-label="User settings"
    />
    <MenuItem
      icon="Logout"
      text="Log out"
      onClick={handleLogout}
      aria-label="Log out of application"
    />
  </div>

  {/* Collapse button */}
  {!mobile && (
    <button
      onClick={() => setCollapsed(!collapsed)}
      aria-label={collapsed ? "Expand navigation menu" : "Collapse navigation menu"}
      aria-expanded={!collapsed}
      className="collapse-button"
    >
      <Collapse direction={collapsed ? "â†’" : "â†"} />
    </button>
  )}
</nav>
```

### Mobile Menu ARIA

```tsx
<header className="mobileMenu" role="banner">
  <img src={logo} alt="Ohme" className="mobile-logo" />
  
  {loggedIn && (
    <button
      onClick={onMenuClick}
      aria-label="Open navigation menu"
      aria-expanded={menuOpen}
      aria-controls="mobile-nav-drawer"
      className="menu-button"
    >
      <HamburgerIcon />
    </button>
  )}
</header>
```

### Keyboard Navigation

**Menu Drawer:**
- **Tab:** Navigate through menu items
- **Enter/Space:** Activate menu item
- **Arrow Up/Down:** Navigate between items (optional)
- **Home/End:** Jump to first/last item (optional)

**Collapse Button:**
- **Tab:** Focus on collapse button
- **Enter/Space:** Toggle collapse state

**Mobile Menu:**
- **Tab:** Focus on menu button
- **Enter/Space:** Open/close drawer

## Advanced Patterns

### Collapsible Menu with Persistence

```tsx
const PersistentCollapsibleMenu = () => {
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem('menuCollapsed') === 'true';
  });

  const handleCollapse = (newState: boolean) => {
    setCollapsed(newState);
    localStorage.setItem('menuCollapsed', String(newState));
  };

  return (
    <MenuDrawer
      collapsed={collapsed}
      onCollapse={handleCollapse}
      {...props}
    />
  );
};
```

### Active Path Detection

```tsx
const MenuWithActiveDetection = () => {
  const currentPath = usePathname();

  const isActive = (itemPath: string) => {
    // Exact match
    if (currentPath === itemPath) return true;
    
    // Parent path match
    if (itemPath !== '/' && currentPath.startsWith(itemPath)) return true;
    
    return false;
  };

  return (
    <MenuDrawer
      menuItems={menuSections}
      currentPath={currentPath}
      renderItem={(item) => (
        <MenuItem
          {...item}
          state={isActive(item.path) ? 'active' : 'default'}
        />
      )}
    />
  );
};
```

### Platform-Specific Navigation

```tsx
const PlatformMenu = ({ platform }) => {
  const getMenuSections = () => {
    switch (platform) {
      case 'Connect':
        return [
          { items: [{ id: 'jobs', label: 'Jobs', icon: 'Briefcase', path: '/jobs' }] },
          {
            label: 'Admin panel',
            items: [
              { id: 'dashboard', label: 'Dashboard', icon: 'Dashboard', path: '/dashboard' },
              { id: 'partners', label: 'Partners', icon: 'Users', path: '/partners' },
              { id: 'agents', label: 'Agents', icon: 'Person', path: '/agents' }
            ]
          },
          {
            label: 'Organisation',
            items: [
              { id: 'users', label: 'Users', icon: 'Person', path: '/users' },
              { id: 'company', label: 'Company', icon: 'Building', path: '/company' }
            ]
          }
        ];
      
      case 'Shared parking':
        return [
          // Shared parking specific menu
        ];
      
      // Other platforms...
    }
  };

  return (
    <MenuDrawer
      platform={platform}
      menuItems={getMenuSections()}
      {...props}
    />
  );
};
```

### Mobile Drawer with Overlay

```tsx
const MobileNavigationWithOverlay = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MobileMenu
        loggedIn={true}
        onMenuClick={() => setOpen(true)}
      />

      {open && (
        <>
          {/* Overlay */}
          <div 
            className="drawer-overlay"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <MenuDrawer
            mobile={true}
            menuItems={menuSections}
            onNavigate={(path) => {
              navigate(path);
              setOpen(false);
            }}
          />
        </>
      )}
    </>
  );
};
```

## Testing Checklist

### Visual Testing - Collapse
- [ ] Size: 24Ã—24px circular
- [ ] Background: Smokeygreen #034048
- [ ] Icon: Teal chevron #00FFD6
- [ ] Position: Right edge, -11px offset, 56px from top
- [ ] All 4 directions render correctly
- [ ] Hover scale animation works

### Visual Testing - Menu Item
- [ ] Height: 40px
- [ ] Padding: 8px
- [ ] Gap: 12px icon-to-text
- [ ] Icon: 24Ã—24px teal
- [ ] Radius: 6px
- [ ] Default: White text
- [ ] Hover: Teal text
- [ ] Active: Teal text
- [ ] Icon-only: 40Ã—40px
- [ ] Medium and small sizes render correctly

### Visual Testing - Menu Drawer
- [ ] Expanded: 204px width (varies by platform)
- [ ] Collapsed: 80px width
- [ ] Mobile: 300px width
- [ ] Height: Full viewport
- [ ] Background: Dark blue #032536
- [ ] Logo: Correct size and position
- [ ] Section labels: Muted teal #93BFBC
- [ ] Menu items: 4px gaps
- [ ] Sections: 48px gaps
- [ ] User bar: Bottom position, 8px gaps
- [ ] Collapse button: Positioned correctly

### Visual Testing - Mobile Menu
- [ ] Height: 68px
- [ ] Background: Dark blue #032536
- [ ] Logo: 64.167px Ã— 20px, white
- [ ] Logged in: Logo left, menu button right
- [ ] Logged out: Logo centered
- [ ] Menu button: 48Ã—48px touch target

### Functional Testing
- [ ] Collapse button toggles drawer width
- [ ] Menu items navigate to correct paths
- [ ] Active state highlights current page
- [ ] Hover state shows on mouse over
- [ ] User info displays correctly
- [ ] Settings opens settings page
- [ ] Log out triggers logout
- [ ] Mobile menu button opens drawer
- [ ] Mobile drawer closes on navigation
- [ ] Collapsed menu hides text labels

### Accessibility Testing
- [ ] Nav has role="navigation"
- [ ] Section labels have proper heading levels
- [ ] Menu items have role="link" or proper semantics
- [ ] aria-current="page" on active item
- [ ] Collapse button has aria-label
- [ ] Collapse button has aria-expanded
- [ ] Mobile menu button has aria-label
- [ ] Mobile menu button has aria-controls
- [ ] Keyboard navigation works
- [ ] Focus indicators visible

### Mode Testing
- [ ] Menu surface remains dark (constant)
- [ ] Icons remain teal (constant)
- [ ] Default text adapts to mode context
- [ ] Hover/active text remains teal
- [ ] Section labels remain muted teal
- [ ] User name/role adapt to mode
- [ ] Logo remains white
- [ ] Smooth transitions

## Related Components

### Composed From:
- **Collapse** - Toggle button with chevron
- **Menu Item** - Navigation links
- **Avatar** - User profile image
- **Icon Components** - Radix icons throughout

### Works With:
- **Layout** - Provides left sidebar space
- **Header** - Coordinates with page headers
- **Modal** - Settings/logout confirmations
- **Mobile Drawer** - Overlay navigation

## Common Patterns

### Connect Portal Navigation

```tsx
const ConnectNavigation = ({ user, currentPath }) => {
  return (
    <MenuDrawer
      platform="Connect"
      version="1"
      menuItems={[
        {
          items: [
            { id: 'jobs', label: 'Jobs', icon: 'Briefcase', path: '/jobs' }
          ]
        },
        {
          label: 'Admin panel',
          items: [
            { id: 'dashboard', label: 'Dashboard', icon: 'Dashboard', path: '/dashboard' },
            { id: 'partners', label: 'Partners', icon: 'Lightning', path: '/partners' },
            { id: 'agents', label: 'Agents', icon: 'Person', path: '/agents' }
          ]
        },
        {
          label: 'Organisation',
          items: [
            { id: 'users', label: 'Users', icon: 'Person', path: '/users' },
            { id: 'company', label: 'Company', icon: 'Building', path: '/company' }
          ]
        },
        {
          label: 'Support',
          items: [
            { id: 'resources', label: 'Resources', icon: 'File', path: '/resources' }
          ]
        }
      ]}
      currentPath={currentPath}
      user={user}
      onLogout={handleLogout}
    />
  );
};
```

### Responsive Menu System

```tsx
const ResponsiveMenu = ({ platform, user }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);

  if (isMobile) {
    return (
      <>
        <MobileMenu
          loggedIn={!!user}
          onMenuClick={() => setMobileDrawerOpen(true)}
        />
        
        {mobileDrawerOpen && (
          <>
            <div 
              className="overlay"
              onClick={() => setMobileDrawerOpen(false)}
            />
            <MenuDrawer
              platform={platform}
              mobile={true}
              menuItems={menuSections}
              user={user}
              onNavigate={(path) => {
                navigate(path);
                setMobileDrawerOpen(false);
              }}
            />
          </>
        )}
      </>
    );
  }

  return (
    <MenuDrawer
      platform={platform}
      collapsed={desktopCollapsed}
      showCollapseIcon={true}
      mobile={false}
      menuItems={menuSections}
      user={user}
      onCollapse={setDesktopCollapsed}
    />
  );
};
```

### Role-Based Menu

```tsx
const RoleBasedMenu = ({ user }) => {
  const getMenuForRole = () => {
    if (user.role === 'Admin') {
      return [
        { items: [{ id: 'jobs', label: 'Jobs', icon: 'Briefcase', path: '/jobs' }] },
        {
          label: 'Admin panel',
          items: [
            { id: 'dashboard', label: 'Dashboard', icon: 'Dashboard', path: '/dashboard' },
            { id: 'partners', label: 'Partners', icon: 'Users', path: '/partners' },
            { id: 'agents', label: 'Agents', icon: 'Person', path: '/agents' }
          ]
        },
        {
          label: 'Organisation',
          items: [
            { id: 'users', label: 'Users', icon: 'Person', path: '/users' },
            { id: 'company', label: 'Company', icon: 'Building', path: '/company' }
          ]
        }
      ];
    }

    // Engineer role - simplified menu
    return [
      { items: [{ id: 'jobs', label: 'Jobs', icon: 'Briefcase', path: '/jobs' }] },
      {
        label: 'Support',
        items: [
          { id: 'resources', label: 'Resources', icon: 'File', path: '/resources' }
        ]
      }
    ];
  };

  return (
    <MenuDrawer
      menuItems={getMenuForRole()}
      user={user}
      {...props}
    />
  );
};
```

## Platform Configurations

### Connect Platform Menu

**Sections:**
1. Jobs (primary)
2. Admin panel â†’ Dashboard, Partners, Agents
3. Organisation â†’ Users, Company
4. Support â†’ Resources

**User Bar:**
- Avatar + Name/Role
- Settings
- Log out

---

### Shared Parking Platform Menu

**Sections:**
1. Platform-specific primary items
2. Admin sections
3. Organisation
4. Support

---

### Dealer Portal Menu

**Sections:**
1. Dashboard
2. Dealer-specific items
3. Support

---

### Multi-Platform Example

```tsx
const MultiPlatformMenu = ({ currentPlatform, user }) => {
  const platformConfigs = {
    'Connect': {
      logo: ConnectLogo,
      menuSections: connectMenuSections,
      width: 204
    },
    'Shared parking': {
      logo: ParkingLogo,
      menuSections: parkingMenuSections,
      width: 209
    },
    'Volt': {
      logo: VoltLogo,
      menuSections: voltMenuSections,
      width: 200
    }
  };

  const config = platformConfigs[currentPlatform];

  return (
    <MenuDrawer
      platform={currentPlatform}
      menuItems={config.menuSections}
      user={user}
      {...props}
    />
  );
};
```

## Version History

- **v1.0** - Initial menu system with Collapse, Menu Item, Menu Drawer, and Mobile Menu components

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
