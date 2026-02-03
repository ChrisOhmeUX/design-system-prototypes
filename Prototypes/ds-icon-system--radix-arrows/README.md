# Icon System - Radix Icons Documentation

## Overview

The Ohme design system uses **Radix Icons** as its comprehensive icon library, organized into 10 distinct categories. The system supports **334+ unique icons**, each available in **three sizes**, for a total of over 1,000 icon variants.

**Component Type:** Foundation Component  
**Icon Library:** Radix Icons  
**Total Unique Icons:** 334+  
**Total Variants:** 1,000+ (334 icons Ã— 3 sizes)  
**Color Token:** `color/content/icon 2`

## Architecture

### Size System

All icons are available in three standardized sizes:

| Size | Dimensions | Use Case |
|------|------------|----------|
| **sm** (small) | 16px Ã— 16px | Inline text, compact UI, dense data tables |
| **md** (medium) | 24px Ã— 24px | Standard buttons, form inputs, navigation |
| **lg** (large) | 40px Ã— 40px | Hero sections, empty states, feature highlights |

### Color System

**All Radix icons use the semantic token: `color/content/icon 2`**

| Mode | Token Reference | Resolves To | Hex Value |
|------|----------------|-------------|-----------|
| **Light** | `color/content/icon 2` | `color/brand/ohmedarkblue` | #032536 |
| **Dark** | `color/content/icon 2` | `color/brand/white` | #FFFFFF |

**Token Architecture:**
- **Tier 2 Semantic:** `color/content/icon 2` (mode-aware)
- **Tier 1 Primitives:** References brand colors
- **Implementation:** Icons automatically adapt to light/dark mode through the token system

## Icon Categories

The icon system is organized into 10 semantic categories:

### 1. Arrows (34 icons)
**Purpose:** Directional indicators, navigation, sorting, movement

**Icons:**
- All Sides
- Arrow Bottom Left, Arrow Bottom Right, Arrow Down, Arrow Left, Arrow Right, Arrow Top Left, Arrow Top Right, Arrow Up
- Caret Down, Caret Left, Caret Right, Caret Sort, Caret Up
- Chevron Down, Chevron Left, Chevron Right, Chevron Up
- Double Arrow Down, Double Arrow Left, Double Arrow Right, Double Arrow Up
- Height, Width, Size
- Move, Expand
- Thick Arrow Down, Thick Arrow Left, Thick Arrow Right, Thick Arrow Up
- Triangle Down, Triangle Left, Triangle Right, Triangle Up

**Common Use Cases:**
```typescript
// Dropdown indicators
<IconRadixArrows iconRadix="Chevron Down" size="sm" />

// Navigation
<IconRadixArrows iconRadix="Arrow Right" size="md" />

// Sorting controls
<IconRadixArrows iconRadix="Caret Sort" size="sm" />

// Full-screen toggle
<IconRadixArrows iconRadix="Expand" size="md" />
```

### 2. Components (29 icons)
**Purpose:** UI component representations, design system elements

**Icons:**
- Activity Log, Aspect Ratio, Avatar
- Badge, Bar Chart, Box, Button
- Calendar, Checkbox, Code, Container
- Dashboard, Divider Horizontal, Divider Vertical, Dropdown Menu
- Grid, Image, Input
- Layout, List Bullet
- Pie Chart
- Quote
- Radiobutton
- Section, Slider, Switch
- Table
- Video

**Common Use Cases:**
```typescript
// Component documentation
<IconRadixComponents iconRadix="Button" size="md" />

// Feature indicators
<IconRadixComponents iconRadix="Calendar" size="sm" />

// Dashboard elements
<IconRadixComponents iconRadix="Bar Chart" size="lg" />
```

### 3. Design (44 icons)
**Purpose:** Design tools, layout controls, visual properties

**Icons:**
- Angle
- Blending Mode, Box Model
- Color Wheel, Column Spacing, Columns
- Component 1, Component 2, Component Boolean, Component Instance, Component None, Component Placeholder
- Crop, Cursor Arrow, Cursor Text
- Dimensions, inbox
- Frame
- Group
- Layers
- Margin, Mask Off, Mask On
- Opacity
- Padding
- Rotate Counter-Clockwise, Row Spacing, Rows
- Shadow, Shadow Inner, Shadow None, Shadow Outer
- Stack, Symbol
- Tokens, Transform, Transparency Grid
- Value, Value None
- Zoom In, Zoom Out

**Common Use Cases:**
```typescript
// Design tools
<IconRadixDesign iconRadix="Layers" size="md" />

// Property controls
<IconRadixDesign iconRadix="Padding" size="sm" />

// Color selection
<IconRadixDesign iconRadix="Color Wheel" size="lg" />
```

### 4. Objects (107 icons)
**Purpose:** Real-world objects, common interface elements

**Icons:**
- Archive
- Backpack, Bar Code, Bell, Bookmark, Bookmark Filled, Briefcase
- Camera, Card Stack, Card Stack Minus, Card Stack Plus, Chat Bubble, Chat-2, Chat - message, Clipboard, Clipboard Copy, Clock, Cookie, Countdown Timer, Counter-Clockwise Clock, Crosshair 1, Crosshair 2, Crumpled Paper, Cube
- Desktop, Disc, Drawing Pin, Drawing Pin Filled
- Envelope Closed, Envelope Open, Eraser, Eye Closed, Eye None, Eye Open
- Face, Factory, File, File Minus, File Plus, File Text, Flag
- Gear, Globe
- Hand, Heart, Heart Filled, Hobby Knife, Home, home-survey
- Id Card, In progress, Invoice
- Keyboard
- Lap Timer, Laptop, Lightning Bolt, Link 1, Link 2, Link Break 1, Link Break 2, Link None 1, Link None 2, Location Pin, Lock Closed, Lock Open 1, Lock Open 2
- Magic Wand, Magnifying Glass, Mix, Mixer Horizontal, Mixer Vertical, Mobile, Moon
- Paper Plane, Payment, Pencil 1, Pencil 2, Person
- Reader, Rocket, Ruler Horizontal, Ruler Square
- save, Scissors, Security, Service, Sewing Pin, Sewing Pin Filled, Star, Star Filled, Stopwatch, Sun
- Target, Team, Timer, Trash
- Video

**Common Use Cases:**
```typescript
// Actions
<IconRadixObjects iconRadix="Trash" size="sm" />
<IconRadixObjects iconRadix="Download" size="md" />

// Status indicators
<IconRadixObjects iconRadix="Bell" size="sm" />
<IconRadixObjects iconRadix="Star Filled" size="md" />

// Navigation
<IconRadixObjects iconRadix="Home" size="md" />
<IconRadixObjects iconRadix="Gear" size="sm" />
```

### 5. Typography (42 icons)
**Purpose:** Text formatting, alignment, typographic controls

**Icons:**
- Align Baseline
- Dash
- Font Bold, Font Family, Font Italic, Font Roman, Font Size, Font Style
- Heading
- Letter Case Capitalize, Letter Case Lowercase, Letter Case Toggle, Letter Case Uppercase, Letter Spacing, Line Height
- Overline
- Pilcrow
- Strikethrough
- Text, Text Align Bottom, Text Align Center, Text Align Justify, Text Align Left, Text Align Middle, Text Align Right, Text Align Top, Text None
- Underline

**Common Use Cases:**
```typescript
// Rich text editor
<IconRadixTypography iconRadix="Font Bold" size="sm" />
<IconRadixTypography iconRadix="Font Italic" size="sm" />

// Alignment controls
<IconRadixTypography iconRadix="Text Align Left" size="md" />
<IconRadixTypography iconRadix="Text Align Center" size="md" />

// Text properties
<IconRadixTypography iconRadix="Line Height" size="sm" />
```

### 6. Music (13 icons)
**Purpose:** Media playback controls

**Icons:**
- Loop
- Pause, Play
- Resume
- Shuffle
- Speaker Loud, Speaker Moderate, Speaker Off, Speaker Quiet
- Stop
- Track Next, Track Previous

**Common Use Cases:**
```typescript
// Media player
<IconRadixMusic iconRadix="Play" size="md" />
<IconRadixMusic iconRadix="Pause" size="md" />
<IconRadixMusic iconRadix="Track Next" size="sm" />

// Volume controls
<IconRadixMusic iconRadix="Speaker Moderate" size="sm" />
```

### 7. Alignment (4 icons)
**Purpose:** Positioning and pinning controls

**Icons:**
- Pin Bottom
- Pin Left
- Pin Right
- Pin Top

**Common Use Cases:**
```typescript
// Layout controls
<IconRadixAlignment iconRadix="Pin Top" size="sm" />
<IconRadixAlignment iconRadix="Pin Left" size="sm" />
```

### 8. Abstract (47 icons)
**Purpose:** Actions, states, feedback, general UI controls

**Icons:**
- Accessibility
- Check, Check Circled, Checked circle, Circle, Circle Backslash
- Commit, Copy
- Cross 1, Cross 2, Cross Circled
- Dot, Dot Filled, Dot Large, Dots Horizontal, Dots Vertical, Download, Drag Handle Dots 1, Drag Handle Dots 2, Drag Handle Horizontal, Drag Handle Vertical
- Enter, Enter Full Screen, Exit, Exit Full Screen, External Link
- Half 1, Half 2, Hamburger Menu
- Info Circled
- Minus, Minus Circled
- Open in New Window
- Plus, Plus Circled
- Question Mark, Question Mark Circled
- Reload, Reset
- Share 1, Share 2, Slash, Square
- Update, Upload
- View Grid, View Horizontal, View None, View Vertical
- Warning

**Common Use Cases:**
```typescript
// Common actions
<IconRadixAbstract iconRadix="Plus" size="md" />
<IconRadixAbstract iconRadix="Check" size="sm" />
<IconRadixAbstract iconRadix="Cross 1" size="sm" />

// Menus
<IconRadixAbstract iconRadix="Hamburger Menu" size="md" />
<IconRadixAbstract iconRadix="Dots Vertical" size="sm" />

// Status
<IconRadixAbstract iconRadix="Warning" size="md" />
<IconRadixAbstract iconRadix="Info Circled" size="sm" />
```

### 9. Borders and Corners (19 icons)
**Purpose:** Border styling, corner controls

**Icons:**
- Border All, Border Bottom, Border Dashed, Border Dotted, Border Left, Border None, Border Right, Border Solid, Border Split, Border Style, Border Top, Border Width
- Corner Bottom Left, Corner Bottom Right, Corner Top Left, Corner Top Right, Corners

**Common Use Cases:**
```typescript
// Border controls
<IconRadixBorders iconRadix="Border Solid" size="sm" />
<IconRadixBorders iconRadix="Border Dashed" size="sm" />

// Corner controls
<IconRadixBorders iconRadix="Corners" size="md" />
```

### 10. Logos (15 icons)
**Purpose:** Brand and platform logos

**Icons:**
- CodeSandbox Logo
- Discord Logo
- Figma Logo, Framer Logo, Facebook Logo
- GitHub Logo, Google Logo
- IconJar Logo, Instagram Logo
- LinkedIn Logo
- Modulz Logo
- Notion Logo
- Sketch Logo, Stitches Logo
- Twitter Logo
- Vercel Logo

**Common Use Cases:**
```typescript
// Social links
<IconRadixLogos iconRadix="GitHub Logo" size="md" />
<IconRadixLogos iconRadix="Twitter Logo" size="sm" />

// Tool integrations
<IconRadixLogos iconRadix="Figma Logo" size="lg" />
```

## Implementation Guidelines

### Component Structure

Each category is implemented as a separate component with consistent props:

```typescript
type IconRadix[Category]Props = {
  className?: string;
  iconRadix: IconName; // Specific to category
  size?: "sm" | "md" | "lg";
};

function IconRadix[Category]({
  className,
  iconRadix,
  size = "sm"
}: IconRadix[Category]Props) {
  // Implementation
}
```

### Basic Usage

```typescript
import { 
  IconRadixArrows,
  IconRadixObjects,
  IconRadixAbstract 
} from '@/components/foundation/icons';

// Small arrow
<IconRadixArrows 
  iconRadix="Chevron Down" 
  size="sm" 
/>

// Medium home icon
<IconRadixObjects 
  iconRadix="Home" 
  size="md" 
/>

// Large checkmark
<IconRadixAbstract 
  iconRadix="Check" 
  size="lg" 
/>
```

### With Custom Styling

```typescript
// Using CSS Modules
<IconRadixObjects 
  iconRadix="Bell" 
  size="sm"
  className={styles.notificationIcon}
/>

// Inline styles (not recommended for production)
<IconRadixArrows 
  iconRadix="Arrow Right" 
  size="md"
  className="ml-2"
/>
```

### In Buttons

```typescript
<button className={styles.primaryButton}>
  <IconRadixAbstract iconRadix="Plus" size="sm" />
  <span>Add Item</span>
</button>

<button className={styles.iconButton}>
  <IconRadixObjects iconRadix="Trash" size="sm" />
</button>
```

### In Navigation

```typescript
<nav className={styles.sidebar}>
  <NavItem icon={<IconRadixObjects iconRadix="Home" size="md" />}>
    Dashboard
  </NavItem>
  <NavItem icon={<IconRadixObjects iconRadix="Gear" size="md" />}>
    Settings
  </NavItem>
  <NavItem icon={<IconRadixObjects iconRadix="Person" size="md" />}>
    Profile
  </NavItem>
</nav>
```

## CSS Styling

### Size Variables

```css
.iconContainer {
  /* Small icons */
  --icon-sm: 16px;
  
  /* Medium icons */
  --icon-md: 24px;
  
  /* Large icons */
  --icon-lg: 40px;
}
```

### Common Patterns

```css
/* Icon button */
.iconButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 4px;
}

/* Icon with text */
.buttonWithIcon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

/* Icon-only interactive element */
.interactiveIcon {
  cursor: pointer;
  transition: opacity 200ms ease;
}

.interactiveIcon:hover {
  opacity: 0.7;
}
```

## Accessibility

### ARIA Labels

Always provide descriptive labels for interactive icons:

```typescript
<button aria-label="Delete item">
  <IconRadixObjects iconRadix="Trash" size="sm" />
</button>

<button aria-label="Navigate to next page">
  <IconRadixArrows iconRadix="Arrow Right" size="md" />
</button>
```

### Screen Reader Text

For non-decorative icons without visible text:

```typescript
<button>
  <IconRadixObjects iconRadix="Bell" size="sm" />
  <span className={styles.srOnly}>Notifications</span>
</button>
```

### Icon Buttons

```typescript
// Good
<button aria-label="Close dialog">
  <IconRadixAbstract iconRadix="Cross 1" size="sm" />
</button>

// Bad - missing label
<button>
  <IconRadixAbstract iconRadix="Cross 1" size="sm" />
</button>
```

### Decorative Icons

For purely decorative icons next to text:

```typescript
<div>
  <IconRadixObjects 
    iconRadix="Star Filled" 
    size="sm" 
    aria-hidden="true"
  />
  <span>Featured</span>
</div>
```

## Technical Notes

### SVG Assets & Token Integration
- All icons are delivered as inline SVG
- **Color Token:** `color/content/icon 2`
  - Light mode: ohmedarkblue (#032536)
  - Dark mode: white (#FFFFFF)
- Icons use CSS custom properties for theme-aware coloring
- Automatically adapt to light/dark mode
- Optimized for web delivery

### Performance
- SVG assets are small (typically <1KB each)
- Consider lazy loading for pages with many icons
- Tree-shake unused icon categories in production builds

### Browser Compatibility
- **Modern Browsers:** Full support (Chrome, Firefox, Safari, Edge)
- **SVG Support:** Required
- **IE11:** Not supported

## Quick Reference Tables

### Most Common Icons by Category

#### Actions
| Icon | Category | Usage |
|------|----------|-------|
| Plus | Abstract | Add, create new |
| Trash | Objects | Delete, remove |
| Pencil 1 | Objects | Edit, modify |
| Copy | Abstract | Duplicate, copy |
| Download | Abstract | Download file |
| Upload | Abstract | Upload file |

#### Navigation
| Icon | Category | Usage |
|------|----------|-------|
| Chevron Down | Arrows | Dropdown menu |
| Chevron Right | Arrows | Next, forward |
| Arrow Left | Arrows | Back, previous |
| Hamburger Menu | Abstract | Mobile menu |
| Home | Objects | Home page |
| External Link | Abstract | Open in new window |

#### Status & Feedback
| Icon | Category | Usage |
|------|----------|-------|
| Check | Abstract | Success, completed |
| Cross 1 | Abstract | Error, cancel |
| Warning | Abstract | Warning state |
| Info Circled | Abstract | Information |
| Bell | Objects | Notifications |
| Clock | Objects | Time, pending |

#### Media Controls
| Icon | Category | Usage |
|------|----------|-------|
| Play | Music | Start playback |
| Pause | Music | Pause playback |
| Stop | Music | Stop playback |
| Speaker Moderate | Music | Volume control |

## Category Summary

| Category | Icon Count | Primary Use Cases |
|----------|------------|-------------------|
| **Arrows** | 34 | Navigation, sorting, directional |
| **Components** | 29 | UI elements, design system |
| **Design** | 44 | Design tools, properties |
| **Objects** | 107 | Common items, actions |
| **Typography** | 42 | Text formatting, alignment |
| **Music** | 13 | Media playback |
| **Alignment** | 4 | Positioning controls |
| **Abstract** | 47 | General UI actions |
| **Borders** | 19 | Border and corner styling |
| **Logos** | 15 | Brand and platform logos |
| **TOTAL** | **334** | **1,000+ variants** |

## Migration Guide

### From Other Icon Systems

If migrating from another icon system:

1. **Identify Icon Usage**: Audit current icon usage by category
2. **Map Icons**: Create mapping table from old icons to Radix equivalents
3. **Update Imports**: Replace import statements
4. **Update Props**: Adjust size props (`sm`, `md`, `lg`)
5. **Test Accessibility**: Verify ARIA labels are preserved
6. **Visual QA**: Review icon sizes and positioning

### Common Mappings

```typescript
// From generic icon system
<Icon name="arrow-down" size={16} />
// To Radix
<IconRadixArrows iconRadix="Arrow Down" size="sm" />

// From Font Awesome
<i className="fas fa-home"></i>
// To Radix
<IconRadixObjects iconRadix="Home" size="md" />
```

## Best Practices

### Do's âœ“
- Use appropriate size for context (sm in tables, md in buttons, lg in heroes)
- Provide ARIA labels for interactive icons
- Use semantic icon names that match functionality
- Group related icons by category in imports
- Use consistent icon sizes within same UI context

### Don'ts âœ—
- Don't mix different icon sizes randomly
- Don't use logos inappropriately (respect brand guidelines)
- Don't forget accessibility attributes
- Don't override icon colors (they use `color/content/icon 2` token)
- Don't use directional icons (arrows) for non-directional purposes

## Testing Checklist

- [ ] All required icon categories are imported
- [ ] Icon sizes are appropriate for context
- [ ] Interactive icons have ARIA labels
- [ ] Decorative icons have `aria-hidden="true"`
- [ ] Icons render correctly at all three sizes
- [ ] Icons display properly in both light contexts
- [ ] SVG assets load without errors
- [ ] No console warnings for missing icons
- [ ] Custom className prop applies correctly
- [ ] Icon buttons are keyboard accessible

## Related Components

- **Button** - Frequently uses icons from Objects and Abstract
- **Navigation** - Uses Arrows and Objects categories
- **Form Inputs** - Uses Arrows for dropdowns, Objects for validation
- **Cards** - Uses various icons for actions and status

## Version History

- **v1.0** - Initial implementation with 334 unique icons across 10 categories

## Support & Resources

### Icon Categories Summary
1. **Arrows** (34) - Directional navigation
2. **Components** (29) - UI element representations
3. **Design** (44) - Design tool controls
4. **Objects** (107) - Real-world items and common actions
5. **Typography** (42) - Text formatting
6. **Music** (13) - Media playback
7. **Alignment** (4) - Positioning
8. **Abstract** (47) - General UI actions
9. **Borders** (19) - Border styling
10. **Logos** (15) - Brand logos

### Total Coverage
- **Unique Icons:** 334
- **Total Variants:** 1,000+ (with all size variations)
- **Sizes:** 3 (sm, md, lg)
- **Categories:** 10

## Questions & Clarifications Needed

- [ ] Should we create a unified icon component that handles all categories?
- [ ] Do we need hover states for interactive icons?
- [ ] Should icon components accept `onClick` handlers directly?
- [ ] Do we need a dark mode variant (different color)?
- [ ] Should we provide icon search/discovery tool for developers?
- [ ] Do we need animation variants (spin, pulse, bounce)?
