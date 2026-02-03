# Logo Component Documentation

## Overview

The Logo component represents the Ohme brand identity across different product portals and contexts. It provides consistent branding with variants optimized for different backgrounds, use cases, and space constraints.

**Component Type:** Foundation Component  
**Category:** Branding  
**Dependencies:** None (SVG assets)  
**Variants:** 6 total (2 portals Ã— 2 colors Ã— 1-2 sizes)

## Design Specifications

### Dimensions

| Portal | State | Width | Height | Aspect Ratio |
|--------|-------|-------|--------|--------------|
| **Connect** | Expanded | 100px | 51px | ~2:1 |
| **Global** | Expanded | 98.5px | 31px | ~3.2:1 |
| **Global** | Collapsed (Icon) | 31px | 31px | 1:1 |

### Visual Characteristics
- **Format:** SVG vector graphics
- **Scalability:** Maintains aspect ratio at all sizes
- **Clear space:** Minimum clearance equal to icon height
- **Minimum sizes:** 
  - Expanded: 100px width minimum
  - Collapsed: 24px minimum (31px recommended)

## Color System

### Light Variant (for dark backgrounds)

| Mode | Token Reference | Resolves To | Hex Value | Use Case |
|------|----------------|-------------|-----------|----------|
| **Light** | N/A | `color/brand/white` | #FFFFFF | Default - dark backgrounds, dark mode UI |

**Usage Context:**
- Dark navigation bars (ohmedarkblue #032536)
- Dark mode interfaces
- Hero sections with dark overlays
- Footer sections
- Photography with dark areas

**Token Architecture:**
- **Tier 1 Primitive:** `color/brand/white` = #FFFFFF

---

### Dark Variant (for light backgrounds)

| Mode | Token Reference | Resolves To | Hex Value | Use Case |
|------|----------------|-------------|-----------|----------|
| **Dark** | N/A | `color/brand/brightblue` | #0046AF | Light backgrounds, light mode UI |

**Usage Context:**
- Light backgrounds (white #FFFFFF)
- Light mode interfaces
- Documentation pages
- White or light gray cards
- Clean, minimal layouts

**Token Architecture:**
- **Tier 1 Primitive:** `color/brand/brightblue` = #0046AF

## Component Properties

### Property: `light` (boolean)
Controls the logo color variant.

**Values:**
- `true` (default) - White logo for dark backgrounds
- `false` - Blue logo for light backgrounds

**Implementation:**
```typescript
type LogoProps = {
  light?: boolean; // Default: true
  portal?: "Connect" | "global"; // Default: "Connect"
  expanded?: boolean; // Default: true
};
```

---

### Property: `portal` (string)
Specifies which Ohme product portal the logo represents.

**Values:**
- `"Connect"` (default) - Ohme Connect branding with "CONNECT" subtitle
- `"global"` - Ohme global/main brand without subtitle

**Visual Differences:**
- **Connect:** Includes "CONNECT" text below main wordmark (51px tall)
- **Global:** Wordmark only, more compact (31px tall)

---

### Property: `expanded` (boolean)
Controls whether to show full wordmark or icon-only version.

**Values:**
- `true` (default) - Full logo with wordmark
- `false` - Icon only (circular mark)

**Availability:**
- âœ… **Global portal:** Both expanded and collapsed variants available
- âŒ **Connect portal:** Only expanded variant available

## Variants Matrix

### All 6 Logo Variants

| Light | Portal | Expanded | Dimensions | Colors | Use Case |
|-------|--------|----------|------------|--------|----------|
| âœ“ | Connect | âœ“ | 100Ã—51px | White (#FFFFFF) | Connect app - dark backgrounds |
| âœ— | Connect | âœ“ | 100Ã—51px | Blue (#0046AF) | Connect app - light backgrounds |
| âœ“ | Global | âœ“ | 98.5Ã—31px | White (#FFFFFF) | Main site - dark backgrounds |
| âœ— | Global | âœ“ | 98.5Ã—31px | Blue (#0046AF) | Main site - light backgrounds |
| âœ“ | Global | âœ— | 31Ã—31px | White (#FFFFFF) | Icon only - dark backgrounds |
| âœ— | Global | âœ— | 31Ã—31px | Blue (#0046AF) | Icon only - light backgrounds |

## Anatomy

### Expanded Logo Structure
```
Logo Component
â””â”€â”€ SVG Container (maintains aspect ratio)
    â”œâ”€â”€ Ohme Icon (circular with smile/charge mark)
    â””â”€â”€ Wordmark
        â”œâ”€â”€ "Ohme" text (brand typography)
        â””â”€â”€ "CONNECT" label (Connect portal only)
```

### Collapsed Logo Structure (Global Only)
```
Logo Component
â””â”€â”€ SVG Container (31Ã—31px square)
    â””â”€â”€ Ohme Icon Only (circular with smile/charge mark)
```

### Component Parts
1. **Icon:** Circular mark with smile/charging symbol
2. **Wordmark:** "Ohme" text in brand typography
3. **Product Label:** "CONNECT" subtitle (Connect portal only)

## Token Mapping

### Component-Specific Tokens (Tier 3)

Recommended token structure for logo sizing:

```css
/* Dimensions */
--logo-connect-expanded-width: 100px;
--logo-connect-expanded-height: 51px;
--logo-global-expanded-width: 98.5px;
--logo-global-expanded-height: 31px;
--logo-global-collapsed-size: 31px;

/* Colors - Reference Tier 1 */
--logo-color-light: var(--color-brand-white); /* #FFFFFF */
--logo-color-dark: var(--color-brand-brightblue); /* #0046AF */
```

### Tier 1 Primitives Used

| Token | Value | Usage |
|-------|-------|-------|
| `color/brand/white` | #FFFFFF | Light logo variant |
| `color/brand/brightblue` | #0046AF | Dark logo variant |

## Implementation Examples

### Basic Usage

```tsx
import Logo from '@/components/foundation/Logo';

// Default - White Connect expanded
<Logo />

// Blue variant for light backgrounds
<Logo light={false} />

// Global portal
<Logo portal="global" />

// Global icon only (mobile)
<Logo portal="global" expanded={false} />
```

### Complete Variant Examples

```tsx
// Connect - Dark backgrounds
<Logo light={true} portal="Connect" expanded={true} />

// Connect - Light backgrounds
<Logo light={false} portal="Connect" expanded={true} />

// Global expanded - Dark backgrounds
<Logo light={true} portal="global" expanded={true} />

// Global expanded - Light backgrounds
<Logo light={false} portal="global" expanded={true} />

// Global icon - Dark backgrounds
<Logo light={true} portal="global" expanded={false} />

// Global icon - Light backgrounds
<Logo light={false} portal="global" expanded={false} />
```

### Responsive Header

```tsx
import { useMediaQuery } from '@/hooks/useMediaQuery';

const ResponsiveHeader = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <header className="site-header">
      <a href="/" aria-label="Ohme home">
        <Logo 
          portal="global"
          light={false} // Blue for light header
          expanded={!isMobile}
        />
      </a>
      <nav>{/* Navigation items */}</nav>
    </header>
  );
};
```

### Dark Header (Connect Portal)

```tsx
const ConnectHeader = () => {
  return (
    <header className="bg-ohmedarkblue">
      <a href="/connect" aria-label="Ohme Connect home">
        <Logo 
          portal="Connect"
          light={true} // White for dark background
          expanded={true}
        />
      </a>
    </header>
  );
};
```

### Light Header (Global Portal)

```tsx
const GlobalHeader = () => {
  return (
    <header className="bg-white border-b">
      <a href="/" aria-label="Ohme home">
        <Logo 
          portal="global"
          light={false} // Blue for light background
          expanded={true}
        />
      </a>
    </header>
  );
};
```

### Mobile Navigation with Icon

```tsx
const MobileNav = ({ isOpen, onToggle }) => {
  return (
    <nav className="mobile-nav bg-white">
      <button 
        onClick={onToggle}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <IconRadixAbstract iconRadix="Hamburger Menu" />
      </button>
      
      <a href="/" aria-label="Ohme home">
        <Logo 
          portal="global"
          light={false} // Blue for light background
          expanded={false} // Icon only for mobile
        />
      </a>
    </nav>
  );
};
```

## Usage Guidelines

### When to Use Each Variant

#### Expanded Logo (Full Wordmark)
**Use for:**
- Main navigation headers
- Landing page headers
- Desktop viewports (>768px)
- Hero sections
- Marketing materials
- Email headers
- Print materials

**Minimum Width:** 100px for Connect, 98.5px for Global

---

#### Collapsed Logo (Icon Only)
**Use for:**
- Mobile navigation (<768px)
- Collapsed sidebars
- Favicons/app icons
- Loading spinners
- Small spaces where full logo doesn't fit
- Social media profile images

**Minimum Size:** 24Ã—24px (31Ã—31px recommended)  
**Availability:** Global portal only

---

#### Light Variant (White)
**Use on:**
- **Dark backgrounds:**
  - ohmedarkblue (#032536)
  - smokeyblue (#366C92)
  - smokeygreen (#034048)
- Dark mode interfaces
- Hero sections with dark overlays
- Footer sections
- Photography with dark areas

**Contrast Requirement:** Minimum 4.5:1 contrast ratio (WCAG AA)

---

#### Dark Variant (Blue)
**Use on:**
- **Light backgrounds:**
  - white (#FFFFFF)
  - smokeyblue surface (#F5F8FA)
  - grey100 (#E5E8E8)
  - lightgrey (#E9E9E9)
- Light mode interfaces
- Documentation pages
- White or light gray cards
- Clean, minimal layouts

**Contrast Requirement:** Minimum 4.5:1 contrast ratio (WCAG AA)

## Responsive Breakpoints

### Desktop (â‰¥1024px)
```tsx
<Logo portal="global" expanded={true} />
// Show full wordmark
```

### Tablet (768px - 1023px)
```tsx
<Logo portal="global" expanded={true} />
// Show full wordmark, may scale down slightly
```

### Mobile (<768px)
```tsx
<Logo portal="global" expanded={false} />
// Switch to icon only to save space
```

### CSS Implementation

```css
/* Desktop - Full logo */
@media (min-width: 1024px) {
  .logo-expanded {
    display: block;
  }
  .logo-collapsed {
    display: none;
  }
}

/* Mobile - Icon only */
@media (max-width: 767px) {
  .logo-expanded {
    display: none;
  }
  .logo-collapsed {
    display: block;
  }
}
```

## Color Variants & Recommended Backgrounds

### Light Logo (White)
**Color Token:** `color/brand/white` (#FFFFFF)

**Recommended Backgrounds:**
- `color/brand/ohmedarkblue` (#032536) âœ“
- `color/brand/smokeyblue` (#366C92) âœ“
- `color/brand/smokeygreen` (#034048) âœ“
- Dark photography or video
- Gradient backgrounds with dark tones

**Minimum Contrast:** 4.5:1 (WCAG AA for large text/graphics)

---

### Dark Logo (Blue)
**Color Token:** `color/brand/brightblue` (#0046AF)

**Recommended Backgrounds:**
- `color/brand/white` (#FFFFFF) âœ“
- `color/tertiary/smokeyblue` (#F5F8FA) âœ“
- `color/secondary/grey100` (#E5E8E8) âœ“
- `color/tertiary/lightgrey` (#E9E9E9) âœ“
- Light photography or video

**Minimum Contrast:** 4.5:1 (WCAG AA for large text/graphics)

## Portal Comparison

### Ohme Connect
- **Purpose:** Product-specific branding for Connect application
- **Identifier:** Includes "CONNECT" subtitle below wordmark
- **Dimensions:** 100Ã—51px (taller to accommodate subtitle)
- **Variants Available:** 2 (white and blue, expanded only)
- **Use Cases:** Connect app, Connect-specific pages, Connect marketing

### Ohme Global
- **Purpose:** Main Ohme brand identity
- **Identifier:** Wordmark only, no subtitle
- **Dimensions:** 98.5Ã—31px expanded, 31Ã—31px collapsed
- **Variants Available:** 4 (white/blue Ã— expanded/collapsed)
- **Use Cases:** Main website, general materials, mobile apps, favicons

## Best Practices

### Brand Consistency âœ“
1. **Don't Modify:** Never alter logo proportions, colors, or elements
2. **Clear Space:** Maintain minimum clear space around logo (equal to icon height)
3. **Minimum Sizes:** Never scale below minimum readable sizes (100px width expanded, 24px collapsed)
4. **Approved Colors:** Only use white (#FFFFFF) or brand blue (#0046AF) variants
5. **Background Contrast:** Ensure sufficient contrast for accessibility (4.5:1 minimum)

### Implementation âœ“
1. **Use SVG:** Always use vector format for scalability
2. **Alt Text:** Provide descriptive alt text (`"Ohme"` or `"Ohme Connect"`)
3. **Link to Home:** Logo should typically link to homepage
4. **Responsive:** Switch between expanded/collapsed based on viewport
5. **Semantic HTML:** Use appropriate link element wrapping the logo

### Technical âœ“
1. **Asset Format:** SVG (preferred) or PNG with @2x/@3x for retina displays
2. **File Size:** Optimize SVG files for web performance (target <5KB)
3. **Caching:** Implement proper browser caching for logo assets
4. **Preload:** Consider preloading above-fold logos for performance

### Incorrect Usage âœ—
- âœ— Don't change logo colors beyond white/blue
- âœ— Don't rotate or skew the logo
- âœ— Don't add drop shadows, gradients, or effects
- âœ— Don't place on busy backgrounds without sufficient contrast
- âœ— Don't use outdated logo versions
- âœ— Don't recreate or redraw the logo
- âœ— Don't use logo as a pattern or watermark
- âœ— Don't stretch or distort the aspect ratio

## Accessibility

### ARIA Labels

Always provide descriptive labels for logo links:

```tsx
// Good - Descriptive label
<a href="/" aria-label="Ohme home">
  <Logo portal="global" light={false} />
</a>

// Good - Context-specific label
<a href="/connect" aria-label="Ohme Connect home">
  <Logo portal="Connect" light={true} />
</a>

// Bad - Missing label
<a href="/">
  <Logo portal="global" />
</a>
```

### Alt Text for Images

If logo is rendered as `<img>` instead of inline SVG:

```tsx
<img 
  src="/assets/logos/ohme-global-white-full.svg" 
  alt="Ohme"
  width="98.5"
  height="31"
/>
```

### Keyboard Navigation

Ensure logo links are keyboard accessible:

```tsx
<a 
  href="/" 
  aria-label="Ohme home"
  className="logo-link"
  tabIndex={0}
>
  <Logo portal="global" light={false} />
</a>
```

## File Naming Convention

### Suggested Asset Names
```
ohme-connect-white-expanded.svg
ohme-connect-blue-expanded.svg
ohme-global-white-expanded.svg
ohme-global-blue-expanded.svg
ohme-global-white-icon.svg
ohme-global-blue-icon.svg
```

### Asset Organization
```
/assets/
  /logos/
    /connect/
      expanded-white.svg
      expanded-blue.svg
    /global/
      expanded-white.svg
      expanded-blue.svg
      icon-white.svg
      icon-blue.svg
```

## Performance Considerations

### Optimization
- **SVG Optimization:** Minify SVG files, remove unnecessary metadata
- **File Size:** Target <5KB for each logo variant
- **Inline vs External:** Inline small logos, external reference for larger files
- **Caching:** Cache logo assets with long expiry headers
- **Preload:** Consider preloading above-fold logos

### Loading Strategy

```html
<!-- Preload critical above-fold logo -->
<link rel="preload" href="/assets/logos/ohme-global-blue-expanded.svg" as="image">

<!-- Inline SVG for above-fold (preferred) -->
<svg>...</svg>

<!-- External reference for below-fold logos -->
<img src="/assets/logos/ohme-connect-white-expanded.svg" alt="Ohme Connect">
```

## Integration with Design System

### Typography Pairing

When logo appears with text, use these type styles:
- **Headlines near logo:** `desktop/heading/h2` or `desktop/heading/h3`
- **Taglines:** `desktop/body/paragraph`
- **Footer text:** `desktop/body/small`

### Color Context

Logo colors should work with design system surfaces:
- **Light logo (white):** Use with `color/surface/brand` or `color/surface/inverse`
- **Dark logo (blue):** Use with `color/surface/canvas` or `color/surface/base`

### Spacing

Recommended spacing tokens when integrating logo:
- **Header padding:** `value/spacing/axis_aware/inline/3xl` (24px)
- **Logo to nav gap:** `value/spacing/gap/4xl` (32px)
- **Footer spacing:** `value/spacing/axis_aware/stack/5xl` (40px)

## Related Components

- **Navigation Header:** Primary container for logo placement
- **Footer:** Secondary logo placement
- **Loading Spinner:** Can incorporate logo animation
- **Favicon:** Uses collapsed global icon variant
- **App Icons:** Uses collapsed global icon variant

## Testing Checklist

- [ ] All 6 logo variants render correctly
- [ ] White logos display on dark backgrounds with sufficient contrast (4.5:1 minimum)
- [ ] Blue logos display on light backgrounds with sufficient contrast (4.5:1 minimum)
- [ ] Logos maintain aspect ratio at different sizes
- [ ] SVG assets load properly in all environments
- [ ] ARIA labels present for all logo links
- [ ] Logos link to appropriate homepage/landing page
- [ ] Responsive switching works (expanded â†” collapsed)
- [ ] Keyboard navigation works for logo links
- [ ] Logo displays correctly in both portal contexts
- [ ] Icon-only variant only appears for global portal
- [ ] Clear space around logo is maintained

## Version History

- **v1.0** - Initial logo component with dual portal support (6 variants)

---

*Component Documentation - Ohme Design System*  
*Foundation Level Component*  
*Last Updated: January 2025*
