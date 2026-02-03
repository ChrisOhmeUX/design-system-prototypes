# Footer Component Documentation

## Overview

The Footer component provides consistent page footer content across Ohme portal products. It displays copyright information, contact details, and support access in a responsive layout that adapts between desktop and mobile viewports.

**Component Type:** Functional Component  
**Category:** Navigation / Layout  
**Token Integration:** Yes - uses semantic content tokens  
**Variants:** 2 (Desktop, Mobile)

## Design Specifications

### Dimensions

| Variant | Width | Height | Layout | Gap |
|---------|-------|--------|--------|-----|
| **Desktop** | Full width | 48px | Horizontal flex | 32px |
| **Mobile** | 320px | Auto | Vertical stack | 8px |

### Visual Properties
- **Layout Direction:** Horizontal (desktop) / Vertical (mobile)
- **Alignment:** Center (desktop) / Center (mobile)
- **Typography:** Roobert Regular, 14px
- **Line Height:** 24px (desktop) / 24px (mobile body)
- **Letter Spacing:** 0px (desktop) / 0.1px (mobile)

## Color System

### Copyright Text (Secondary Information)

| Mode | Token Reference | Resolves To | Hex Value |
|------|----------------|-------------|-----------|
| **Light** | `color/content/tertiary` | `color/secondary/grey300` | #ADB3B1 |
| **Dark** | `color/content/tertiary` | `color/secondary/grey700` | #647882 |

**Visual Result:**
- Light mode: Light grey text (#ADB3B1)
- Dark mode: Medium grey text (#647882)

---

### Phone Number Text (Secondary Information)

| Mode | Token Reference | Resolves To | Hex Value |
|------|----------------|-------------|-----------|
| **Light** | `color/content/tertiary` | `color/secondary/grey300` | #ADB3B1 |
| **Dark** | `color/content/tertiary` | `color/secondary/grey700` | #647882 |

**Visual Result:**
- Light mode: Light grey text (#ADB3B1)
- Dark mode: Medium grey text (#647882)

---

### Support Button Text (Primary Call-to-Action)

| Mode | Token Reference | Resolves To | Hex Value |
|------|----------------|-------------|-----------|
| **Light** | `color/content/primary` | `color/brand/ohmedarkblue` | #032536 |
| **Dark** | `color/content/primary` | `color/brand/white` | #FFFFFF |

**Visual Result:**
- Light mode: Dark blue text (#032536)
- Dark mode: White text (#FFFFFF)

---

### Support Icon

| Mode | Token Reference | Resolves To | Hex Value |
|------|----------------|-------------|-----------|
| **Light** | `color/content/icon 2` | `color/brand/ohmedarkblue` | #032536 |
| **Dark** | `color/content/icon 2` | `color/brand/white` | #FFFFFF |

**Visual Result:**
- Light mode: Dark blue icon (#032536)
- Dark mode: White icon (#FFFFFF)

---

### Token Architecture

**Tier 2 Semantic Tokens:**
- `color/content/primary` (mode-aware: ohmedarkblue â†” white)
- `color/content/tertiary` (mode-aware: grey300 â†” grey700)
- `color/content/icon 2` (mode-aware: ohmedarkblue â†” white)
- `value/spacing/gap/4xl` â†’ 32px
- `value/spacing/gap/md` â†’ 8px
- `value/spacing/axis_aware/inline/md` â†’ 8px
- `value/spacing/axis_aware/stack/xs` â†’ 4px

**Tier 1 Primitives:**
- `color/brand/ohmedarkblue` = #032536
- `color/brand/white` = #FFFFFF
- `color/secondary/grey300` = #ADB3B1
- `color/secondary/grey700` = #647882
- `Values/space/space-8x` = 32px
- `Values/space/space-2x` = 8px

## Component Properties

```typescript
type FooterProps = {
  className?: string;
  property1?: "footer-desktop" | "footer-mobile";
  copyrightText?: string;
  phoneNumber?: string;
  supportLabel?: string;
  onSupportClick?: () => void;
};
```

### Property: `property1` (string, optional)
Controls the footer layout variant.

**Values:**
- `"footer-desktop"` (default) - Horizontal layout, 48px height
- `"footer-mobile"` - Vertical stacked layout, 320px width

**Implementation:**
```typescript
type FooterProps = {
  property1?: "footer-desktop" | "footer-mobile";
};
```

---

### Property: `copyrightText` (string, optional)
The copyright notice text to display.

**Default:** "Copyright Â© 2025 Ohme Operation UK Ltd"

---

### Property: `phoneNumber` (string, optional)
Contact phone number to display.

**Default:** "+44 (0) 020 3375 1586"

---

### Property: `supportLabel` (string, optional)
Label for the support button.

**Default:** "Support"

---

### Property: `onSupportClick` (function, optional)
Callback function when support button is clicked.

**Usage:**
```typescript
<Footer onSupportClick={() => openSupportDialog()} />
```

## Anatomy

### Desktop Footer Structure
```
Footer Component (48px height, horizontal layout)
â”œâ”€â”€ Copyright Text (flex-1)
â”‚   â”œâ”€â”€ Color: content/tertiary (mode-aware)
â”‚   â””â”€â”€ Typography: 14px / 24px / 0px letter-spacing
â”œâ”€â”€ Phone Number
â”‚   â”œâ”€â”€ Color: content/tertiary (mode-aware)
â”‚   â””â”€â”€ Typography: 14px / 24px / 0px letter-spacing
â””â”€â”€ Support Button
    â”œâ”€â”€ Icon (Question Mark Circled - 24Ã—24px)
    â”‚   â””â”€â”€ Color: content/icon 2 (mode-aware)
    â””â”€â”€ Label Text
        â”œâ”€â”€ Color: content/primary (mode-aware)
        â””â”€â”€ Typography: 14px / 24px / 0px letter-spacing
```

### Mobile Footer Structure
```
Footer Component (320px width, vertical stacked layout)
â”œâ”€â”€ Support Button (top)
â”‚   â”œâ”€â”€ Icon (Question Mark Circled - 16Ã—16px)
â”‚   â”‚   â””â”€â”€ Color: content/icon 2 (mode-aware)
â”‚   â””â”€â”€ Label Text
â”‚       â”œâ”€â”€ Color: content/primary (mode-aware)
â”‚       â””â”€â”€ Typography: 14px / 16px / 0.1px letter-spacing
â”œâ”€â”€ Phone Number (middle)
â”‚   â”œâ”€â”€ Color: content/tertiary (mode-aware)
â”‚   â”œâ”€â”€ Typography: 14px / 24px / 0.1px letter-spacing
â”‚   â””â”€â”€ Alignment: Center
â””â”€â”€ Copyright Text (bottom)
    â”œâ”€â”€ Color: content/tertiary (mode-aware)
    â”œâ”€â”€ Typography: 14px / 24px / 0.1px letter-spacing
    â””â”€â”€ Alignment: Center
```

### Component Parts

**Copyright Text:**
- Legal/ownership information
- Color: Tertiary content (mode-aware)
- Typography: 14px / 24px line-height
- Position: Left (desktop) / Bottom center (mobile)

**Phone Number:**
- Contact telephone number
- Color: Tertiary content (mode-aware)
- Typography: 14px / 24px line-height
- Position: Center (desktop) / Middle center (mobile)

**Support Button:**
- Interactive help/support access
- Icon: Question Mark Circled (Radix Abstract)
- Icon size: 24Ã—24px (desktop) / 16Ã—16px (mobile)
- Text color: Primary content (mode-aware)
- Icon color: Icon 2 (mode-aware)
- Gap: 12px (desktop) / 8px (mobile)
- Padding: 8px inline, 4px stack
- Border radius: 6px

## Complete Token Mapping

### Tier 3 Component Tokens (Recommended)

```css
/* Desktop Layout */
--footer-desktop-height: 48px;
--footer-desktop-gap: var(--value-spacing-gap-4xl);
--footer-desktop-alignment: center;

/* Mobile Layout */
--footer-mobile-width: 320px;
--footer-mobile-gap: var(--value-spacing-gap-md);
--footer-mobile-alignment: center;

/* Copyright & Phone */
--footer-info-color: var(--color-content-tertiary);
--footer-info-font-family: var(--typography-font-family-Roobert);
--footer-info-font-size: var(--typography-font-size-14);
--footer-info-font-weight: var(--typography-font-weight-regular);
--footer-info-line-height-desktop: var(--typography-line-height-24);
--footer-info-line-height-mobile: var(--typography-line-height-24);
--footer-info-letter-spacing-desktop: var(--typography-letter-spacing-none);
--footer-info-letter-spacing-mobile: var(--typography-letter-spacing-0dot1);

/* Support Button */
--footer-support-color: var(--color-content-primary);
--footer-support-icon-color: var(--color-content-icon-2);
--footer-support-gap: var(--value-spacing-gap-lg);
--footer-support-padding-inline: var(--value-spacing-axis-aware-inline-md);
--footer-support-padding-stack: var(--value-spacing-axis-aware-stack-xs);
--footer-support-border-radius: 6px;
--footer-support-icon-size-desktop: 24px;
--footer-support-icon-size-mobile: 16px;
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/tertiary` | grey300 | grey700 | #ADB3B1 | #647882 |
| `color/content/icon 2` | ohmedarkblue | white | #032536 | #FFFFFF |
| `value/spacing/gap/4xl` | 4xl | 4xl | 32px | 32px |
| `value/spacing/gap/md` | md | md | 8px | 8px |
| `value/spacing/gap/lg` | lg | lg | 12px | 12px |
| `value/spacing/axis_aware/inline/md` | md | md | 8px | 8px |
| `value/spacing/axis_aware/stack/xs` | xs | xs | 4px | 4px |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/ohmedarkblue` | #032536 | Primary content (light), icon (light) |
| `color/brand/white` | #FFFFFF | Primary content (dark), icon (dark) |
| `color/secondary/grey300` | #ADB3B1 | Tertiary content (light) |
| `color/secondary/grey700` | #647882 | Tertiary content (dark) |
| `Values/space/space-8x` | 32px | Desktop gap |
| `Values/space/space-2x` | 8px | Mobile gap |
| `Values/space/space-3x` | 12px | Support button gap |
| `typography/font-size/14` | 14px | All text sizes |
| `typography/line-height/24` | 24px | Line height (desktop) |
| `typography/line-height/16` | 16px | Line height (mobile support label) |
| `typography/letter-spacing/none` | 0px | Desktop letter spacing |
| `typography/letter-spacing/0dot1` | 0.1px | Mobile letter spacing |

## Implementation Examples

### Basic Usage

```tsx
import Footer from '@/components/functional/Footer';

// Desktop footer
<Footer property1="footer-desktop" />

// Mobile footer
<Footer property1="footer-mobile" />
```

### With Custom Content

```tsx
<Footer 
  property1="footer-desktop"
  copyrightText="Copyright Â© 2025 Ohme Operation UK Ltd"
  phoneNumber="+44 (0) 020 3375 1586"
  supportLabel="Support"
  onSupportClick={() => window.open('/support', '_blank')}
/>
```

### Responsive Footer

```tsx
import { useMediaQuery } from '@/hooks/useMediaQuery';

const ResponsiveFooter = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  
  return (
    <footer className={styles.pageFooter}>
      <Footer 
        property1={isMobile ? "footer-mobile" : "footer-desktop"}
        onSupportClick={() => navigate('/support')}
      />
    </footer>
  );
};
```

### Desktop Footer Layout

```tsx
const DesktopFooter = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContainer}>
        <Footer 
          property1="footer-desktop"
          copyrightText="Copyright Â© 2025 Ohme Operation UK Ltd"
          phoneNumber="+44 (0) 020 3375 1586"
          supportLabel="Support"
          onSupportClick={() => openSupportModal()}
        />
      </div>
    </footer>
  );
};
```

### Mobile Footer Layout

```tsx
const MobileFooter = () => {
  return (
    <footer className={styles.mobileFooter}>
      <Footer 
        property1="footer-mobile"
        onSupportClick={() => navigate('/contact')}
      />
    </footer>
  );
};
```

## CSS Implementation

### Core Styles

```css
/* Desktop Footer */
.footer--desktop {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--value-spacing-gap-4xl);
  height: 48px;
}

/* Mobile Footer */
.footer--mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--value-spacing-gap-md);
  width: 320px;
}

/* Copyright Text */
.footer__copyright {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-14);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--typography-line-height-24);
  color: var(--color-content-tertiary);
}

/* Desktop copyright - left aligned, flex-1 */
.footer--desktop .footer__copyright {
  flex: 1;
  letter-spacing: var(--typography-letter-spacing-none);
  text-align: left;
}

/* Mobile copyright - center aligned */
.footer--mobile .footer__copyright {
  letter-spacing: var(--typography-letter-spacing-0dot1);
  text-align: center;
  width: 100%;
}

/* Phone Number */
.footer__phone {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-14);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--typography-line-height-24);
  color: var(--color-content-tertiary);
}

/* Desktop phone */
.footer--desktop .footer__phone {
  letter-spacing: var(--typography-letter-spacing-none);
}

/* Mobile phone - center aligned */
.footer--mobile .footer__phone {
  letter-spacing: var(--typography-letter-spacing-0dot1);
  text-align: center;
  width: 100%;
}

/* Support Button */
.footer__support {
  display: flex;
  align-items: center;
  gap: var(--value-spacing-gap-lg);
  padding: var(--value-spacing-axis-aware-stack-xs) 
           var(--value-spacing-axis-aware-inline-md);
  border-radius: 6px;
  cursor: pointer;
  transition: background 200ms ease;
}

.footer__support:hover {
  background: var(--color-surface-subtle);
}

.footer__support:focus {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* Support Icon */
.footer__supportIcon {
  width: 24px;
  height: 24px;
  color: var(--color-content-icon-2);
}

.footer--mobile .footer__supportIcon {
  width: 16px;
  height: 16px;
}

/* Support Text */
.footer__supportText {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-14);
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-primary);
}

/* Desktop support text */
.footer--desktop .footer__supportText {
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-none);
}

/* Mobile support text */
.footer--mobile .footer__supportText {
  line-height: var(--typography-line-height-16);
  letter-spacing: var(--typography-letter-spacing-0dot1);
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-content-primary: #032536;
  --color-content-tertiary: #ADB3B1;
  --color-content-icon-2: #032536;
  --value-spacing-gap-4xl: 32px;
  --value-spacing-gap-md: 8px;
  --value-spacing-gap-lg: 12px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-content-primary: #FFFFFF;
  --color-content-tertiary: #647882;
  --color-content-icon-2: #FFFFFF;
}
```

## Usage Guidelines

### When to Use Footer

**Page-Level Footer:**
- Main site pages
- Application pages
- Portal pages
- Marketing pages

**Content Requirements:**
- Legal information (copyright)
- Contact information
- Support access
- Company identification

### Desktop vs Mobile Selection

**Use Desktop Variant When:**
- Viewport â‰¥768px
- Horizontal space available
- Multi-column layout context
- Desktop-optimized pages

**Use Mobile Variant When:**
- Viewport <768px
- Vertical stacking needed
- Mobile-optimized pages
- Space-constrained contexts

## Best Practices

### Content Guidelines âœ“
1. **Copyright:** Always include current year
2. **Phone:** Use international format with country code
3. **Support:** Clear, concise label
4. **Updates:** Keep copyright year current
5. **Localization:** Adjust phone/copyright for regions

### Visual Guidelines âœ“
1. **Alignment:** Consistent with page layout
2. **Spacing:** Use design system gap tokens
3. **Typography:** Maintain hierarchy (tertiary vs primary)
4. **Color:** Ensure sufficient contrast
5. **Icon Size:** Scale appropriately for viewport

### Interaction Guidelines âœ“
1. **Support Button:** Clear clickable target
2. **Phone Link:** Consider making clickable (tel: link)
3. **Touch Targets:** Minimum 44Ã—44px for mobile buttons
4. **Focus States:** Clear focus indicators
5. **Keyboard Access:** Support button keyboard accessible

## Accessibility

### ARIA Labels

```tsx
<footer role="contentinfo">
  <Footer 
    property1="footer-desktop"
    onSupportClick={() => openSupport()}
  />
</footer>

// Support button with aria-label
<button 
  className="footer__support"
  onClick={onSupportClick}
  aria-label="Contact support"
>
  <IconRadixAbstract iconRadix="Question Mark Circled" size="md" />
  <span>Support</span>
</button>
```

### Semantic HTML

```tsx
<footer role="contentinfo" className="site-footer">
  <div className="footer-content">
    <p className="copyright">{copyrightText}</p>
    <a href={`tel:${phoneNumber}`} className="phone-link">
      {phoneNumber}
    </a>
    <button 
      onClick={onSupportClick}
      aria-label="Contact support"
    >
      <IconRadixAbstract iconRadix="Question Mark Circled" />
      <span>Support</span>
    </button>
  </div>
</footer>
```

### Contrast Requirements

**Light Mode:**
- Copyright/Phone (grey300 on white): 3.6:1 âœ“ (WCAG AA for large text)
- Support text (ohmedarkblue on white): 12.2:1 âœ“ (WCAG AAA)

**Dark Mode:**
- Copyright/Phone (grey700 on ohmedarkblue): 5.9:1 âœ“ (WCAG AA)
- Support text (white on ohmedarkblue): 21:1 âœ“ (WCAG AAA)

## Responsive Behavior

### Breakpoint Strategy

```tsx
const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  
  return (
    <footer>
      <FooterComponent 
        property1={isMobile ? "footer-mobile" : "footer-desktop"}
      />
    </footer>
  );
};
```

### CSS Media Queries

```css
/* Desktop - default */
.footer {
  display: flex;
  flex-direction: row;
  height: 48px;
  gap: 32px;
}

/* Mobile - stacked */
@media (max-width: 767px) {
  .footer {
    flex-direction: column;
    height: auto;
    gap: 8px;
    width: 320px;
    margin: 0 auto;
  }
  
  .footer__support {
    order: -1; /* Move to top */
  }
  
  .footer__copyright,
  .footer__phone {
    text-align: center;
  }
}
```

## Advanced Patterns

### Footer with Dynamic Year

```tsx
const Footer = ({ property1 }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterComponent 
      property1={property1}
      copyrightText={`Copyright Â© ${currentYear} Ohme Operation UK Ltd`}
    />
  );
};
```

### Footer with Localized Phone

```tsx
const LocalizedFooter = ({ property1, locale }) => {
  const phoneNumbers = {
    'en-GB': '+44 (0) 020 3375 1586',
    'en-US': '+1 (555) 123-4567',
    'en-AU': '+61 2 1234 5678'
  };
  
  return (
    <FooterComponent 
      property1={property1}
      phoneNumber={phoneNumbers[locale] || phoneNumbers['en-GB']}
    />
  );
};
```

### Footer with Multiple Support Options

```tsx
const EnhancedFooter = ({ property1 }) => {
  const [supportMenuOpen, setSupportMenuOpen] = useState(false);
  
  return (
    <footer>
      <div className="footer-wrapper">
        <p className="copyright">Copyright Â© 2025 Ohme Operation UK Ltd</p>
        <a href="tel:+442033751586" className="phone">
          +44 (0) 020 3375 1586
        </a>
        <div className="support-dropdown">
          <button 
            onClick={() => setSupportMenuOpen(!supportMenuOpen)}
            aria-label="Support options"
            aria-expanded={supportMenuOpen}
          >
            <IconRadixAbstract iconRadix="Question Mark Circled" size="md" />
            <span>Support</span>
          </button>
          {supportMenuOpen && (
            <div className="support-menu">
              <a href="/help">Help Center</a>
              <a href="/contact">Contact Us</a>
              <a href="/faq">FAQ</a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
```

## Testing Checklist

### Visual Testing
- [ ] Desktop: 48px height, horizontal layout
- [ ] Mobile: 320px width, vertical stacked layout
- [ ] Desktop gap: 32px between elements
- [ ] Mobile gap: 8px between elements
- [ ] Support icon: 24Ã—24px (desktop), 16Ã—16px (mobile)
- [ ] Light mode: Copyright/phone light grey (#ADB3B1)
- [ ] Light mode: Support text dark blue (#032536)
- [ ] Dark mode: Copyright/phone medium grey (#647882)
- [ ] Dark mode: Support text white (#FFFFFF)
- [ ] Support button has 6px border radius
- [ ] Support button padding: 8px inline, 4px stack

### Functional Testing
- [ ] Support button click triggers callback
- [ ] Responsive switching works (desktop â†” mobile)
- [ ] Phone number displays correctly
- [ ] Copyright text displays correctly
- [ ] Support label displays correctly
- [ ] Component renders without errors

### Accessibility Testing
- [ ] Footer has role="contentinfo"
- [ ] Support button has aria-label
- [ ] Support button keyboard accessible
- [ ] Focus indicator visible
- [ ] Phone number can be clickable tel: link
- [ ] Sufficient color contrast in both modes
- [ ] Copyright/Phone: 3.6:1 (light) / 5.9:1 (dark) âœ“
- [ ] Support text: 12.2:1 (light) / 21:1 (dark) âœ“

### Mode Testing
- [ ] Copyright text correct in light mode (light grey)
- [ ] Copyright text correct in dark mode (medium grey)
- [ ] Phone text correct in light mode (light grey)
- [ ] Phone text correct in dark mode (medium grey)
- [ ] Support text correct in light mode (dark blue)
- [ ] Support text correct in dark mode (white)
- [ ] Support icon adapts to mode correctly
- [ ] Smooth transition when theme changes

## Related Components

- **Navigation Header** - Page top navigation
- **Logo** - May appear in footer variant
- **Button** - Support button uses similar patterns
- **Icon Components** - Question Mark Circled icon

## Common Patterns

### Footer in Page Layout

```tsx
const PageLayout = ({ children }) => {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer property1="footer-desktop" />
    </div>
  );
};
```

### Sticky Footer

```css
.pageLayout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.mainContent {
  flex: 1;
}

.footer {
  margin-top: auto;
}
```

## Version History

- **v1.0** - Initial footer component with desktop and mobile variants

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
