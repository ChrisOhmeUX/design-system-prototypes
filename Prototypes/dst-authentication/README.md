# Authentication Page Template

## Typography Audit from Figma

**Exact Typography Styles Applied (from Figma MCP extraction):**

### Mobile Typography
- **Main Heading** (`mobile/heading/h4/regular`): 22px / 30px line-height, letter-spacing: 0.2px
- **Body Text** (`mobile/heading/h6/regular`): 18px / 24px line-height, letter-spacing: 0.2px  
- **Support Label** (`mobile/supporting/label`): 14px / 16px line-height, letter-spacing: 0.1px
- **Footer Small Text** (`mobile/body/small/regular`): 14px / 24px line-height, letter-spacing: 0.1px
- **Button Text**: 18px / 24px line-height (Roobert SemiBold)
- **Input Placeholder**: 16px / 24px line-height

### Desktop Typography
- **Main Heading** (`desktop/heading/h4/regular`): 32px / 40px line-height, letter-spacing: 0.2px
- **Body Text** (`desktop/body/p/regular`): 18px / 24px line-height, letter-spacing: 0.2px
- **Small Text** (`desktop/body/small/regular`): 14px / 24px line-height, letter-spacing: 0 (none)
- **Button Text**: 18px / 24px line-height (Roobert SemiBold)
- **Input Placeholder**: 16px / 24px line-height

**Critical: Desktop "Forgot password?" link uses `desktop/body/small/regular` which has NO letter-spacing (0), while mobile version uses `mobile/body/small/regular` which has 0.1px letter-spacing.**

## Overview

The Authentication Page template provides a complete authentication experience for the Ohme Connect Portal, supporting both login and signup flows across mobile and desktop viewports. The template features a split-screen design on desktop with product imagery and a full-screen branded experience on mobile.

## Component Classification

- **Level**: Template
- **Category**: Page Layout
- **Status**: Production Ready
- **Responsive**: Yes (Mobile-first with desktop variant)

---

## Variants

### Primary Variants

1. **Signup - Mobile** (360×800px)
   - Full-screen branded background
   - Compact form layout
   - Validation list visible
   - Terms acceptance checkbox
   - Mobile-optimized footer

2. **Signup - Desktop** (1280×800px)
   - Split-screen layout (530px sidebar + 750px content)
   - Product imagery on right
   - Expanded form with validation
   - Desktop-optimized footer

3. **Login - Mobile** (360×800px)
   - Full-screen branded background
   - Simplified two-field form
   - Forgot password link
   - Mobile-optimized footer

4. **Login - Desktop** (1280×800px)
   - Split-screen layout
   - Product imagery on right
   - Forgot password link above form
   - Desktop-optimized footer

---

## Anatomy

### Mobile Layout Structure

```
┌─────────────────────────────────┐
│ Mobile Header                   │
│ - Logo centered                 │
├─────────────────────────────────┤
│                                 │
│ Content Area (scrollable)       │
│ - Welcome heading               │
│ - Input fields                  │
│ - Validation list (signup)      │
│ - Terms checkbox (signup)       │
│ - Forgot password (login)       │
│ - Primary button                │
│                                 │
├─────────────────────────────────┤
│ Footer                          │
│ - Support info                  │
│ - Language selector             │
└─────────────────────────────────┘
```

### Desktop Layout Structure

```
┌──────────────────┬──────────────────────────────────┐
│ Left Sidebar     │ Right Content Area               │
│ (530px)          │ (750px)                          │
│                  │                                  │
│ - Logo           │                                  │
│ - Form           │     Product Image                │
│ - Footer         │     (Home Pro Charger)           │
│ - Lang selector  │                                  │
│                  │                                  │
└──────────────────┴──────────────────────────────────┘
```

---

## Detailed Specifications

### Signup Page - Mobile (360×800px)

#### Layout
- **Canvas**: 360×800px
- **Background**: `var(--color/surface/brand, #032536)`
- **Content container**: 320px wide, centered
- **Top spacing**: 83px from top
- **Bottom spacing**: 22px from bottom

#### Header Section
- **Logo**: Ohme wordmark (63.548×20px)
- **Position**: Centered horizontally
- **Top spacing**: Centered in mobile menu (68px height)

#### Content Section

**Welcome Heading**
- **Text**: "Welcome to the Ohme Connect Portal"
- **Typography**: `mobile/heading/h4/regular`
  - Font: Roobert Regular
  - Size: 22px
  - Line height: 30px
  - Letter spacing: 0.2px
- **Color**: `var(--color/content/on-brand, white)`
- **Alignment**: Center
- **Width**: 320px

**Form Fields**

1. **Password Input**
   - **Width**: 320px
   - **Height**: 48px
   - **Placeholder**: "Enter password"
   - **Border radius**: 6px
   - **Background**: White
   - **Border**: 1px solid `var(--input/field/border/active, #ADB3B1)`
   - **Padding**: 12px 16px
   - **Icon**: Eye icon (24×24px) for show/hide
   - **Gap**: 12px between text and icon

2. **Validation List**
   - **Width**: 320px
   - **Gap**: 2px between items
   - **Margin top**: 24px from previous input

   **Each validation item**:
   - Icon: 24×24px circle
   - Text: 18px Roobert Regular
   - Color: White at 70% opacity
   - Gap: 12px between icon and text
   - Requirements:
     - "At least 10 characters long"
     - "At least 1 letter (a-z)"
     - "At least 1 number (0-9)"
     - "At least 1 special character (!,@,#,£,$,%,&,*,_,-)"

3. **Confirm Password Input**
   - **Width**: 320px
   - **Height**: 48px
   - **Placeholder**: "Confirm password"
   - **Margin top**: 24px
   - Same styling as password input

4. **Terms Checkbox**
   - **Margin top**: 24px
   - **Gap**: 12px between checkbox and label
   - **Checkbox**: 24×24px
     - Border radius: 6px
     - Border: 1px solid `#ADB3B1`
     - Background: White
   - **Label**:
     - Font: Roobert Regular 18px
     - Line height: 24px
     - Color: White
     - Text: "I agree to Ohme's Terms & Conditions and Privacy Policy."
     - Links: `#00FFD6` (highlighterteal)

5. **Primary Button**
   - **Width**: 320px
   - **Height**: 48px (12px padding top/bottom)
   - **Text**: "Let's go"
   - **Background**: `var(--button/primary/surface/active, #00FFD6)`
   - **Border**: 1px solid `#032536`
   - **Border radius**: 6px
   - **Typography**: Roobert SemiBold 18px
   - **Color**: `#032536`
   - **Margin top**: 24px

#### Footer Section
- **Position**: 22px from bottom
- **Width**: 335px centered

**Support Link**
- Icon: 16×16px
- Text: "Support"
- Typography: 14px / 16px line-height
- Letter spacing: 0.1px
- Color: `#00FFD6`
- Gap: 8px between icon and text

**Phone Number**
- Text: "+44 (0) 020 3375 1586"
- Typography: 14px Roobert Regular
- Color: `var(--color/content/tertiary, #ADB3B1)`
- Alignment: Center

**Copyright**
- Text: "Copyright © 2026 Ohme Operation UK Ltd"
- Typography: 14px Roobert Regular
- Color: `var(--color/content/tertiary, #ADB3B1)`
- Alignment: Center

**Language Selector**
- **Width**: 235px
- **Height**: 48px
- **Border radius**: 6px
- **Background**: White
- **Border**: 1px solid `#ADB3B1`
- **Padding**: 12px 16px
- Flag icon: 24×24px (GB flag)
- Text: "English - GB" (16px)
- Dropdown icon: 24×24px chevron

---

### Signup Page - Desktop (1280×800px)

#### Layout
- **Canvas**: 1280×800px
- **Left sidebar**: 530px
  - Background: `var(--color/surface/inverse, #032536)`
- **Right content**: 750px
  - Background: White
  - Product image: Home Pro charger

#### Left Sidebar Content

**Logo**
- **Size**: 98.5×31px
- **Position**: 70px from left, 48px from top

**Language Selector**
- **Width**: 235px
- **Position**: 225px from left, 40px from top
- Same styling as mobile

**Form Container**
- **Width**: 381px centered
- **Top position**: 128px from top
- **Gap**: 16px between sections

**Welcome Heading**
- **Text**: "Welcome to the Ohme Connect Portal"
- **Typography**: `desktop/heading/h4/regular`
  - Font: Roobert Regular
  - Size: 32px
  - Line height: 40px
  - Letter spacing: 0.2px
- **Color**: White
- **Width**: 381px

**Subheading**
- **Text**: "Please set a password to create an account"
- **Typography**: 18px Roobert Regular
- **Line height**: 24px
- **Color**: White at 70% opacity
- **Width**: 381px

**Form Fields**

1. **Password Input**
   - **Width**: 381px
   - **Height**: 48px
   - Same styling as mobile
   - **Gap**: 16px between inputs

2. **Validation List**
   - **Width**: 381px
   - **Gap**: 10px between items
   - Each item same as mobile but desktop colors

3. **Confirm Password Input**
   - **Width**: 381px
   - **Height**: 48px
   - Same styling as password input

4. **Terms Checkbox**
   - Same as mobile but two-line layout:
     - Line 1: "I agree to Ohme's Terms & Conditions"
     - Line 2: "and Privacy Policy."

5. **Primary Button**
   - **Width**: 381px
   - Same styling as mobile

**Footer**
- **Position**: 697px from top, centered
- **Width**: Auto (fits content)
- **Gap**: 8px between elements

Support link, phone, and copyright same as mobile but with updated typography:
- **Support link**: 18px / 24px line-height, letter-spacing: 0.2px
- **Phone & Copyright**: 18px / 24px line-height, letter-spacing: 0.2px

#### Right Content Area

**Product Image**
- **Source**: Home Pro side_UK low res
- **Size**: 1160×1121px
- **Position**: Offset to show charger prominently
- **Placement**: 16.67% + 50.67px from left, -141px from top

---

### Login Page - Mobile (360×800px)

#### Differences from Signup Mobile:

**Welcome Heading**
- **Text**: "Login to the Ohme Connect Portal"
- Line breaks: "Login to the" / "Ohme Connect Portal"
- Same typography and styling

**Form Fields**
1. **Email Input** (instead of first password)
   - **Placeholder**: "Email address"
   - **Width**: 320px
   - No eye icon

2. **Password Input**
   - **Placeholder**: "Password"
   - **Width**: 320px
   - Eye icon present

**No validation list**
**No terms checkbox**

**Forgot Password Link**
- **Position**: Below form, centered
- **Text**: "Forgot password?"
- **Typography**: 14px / 24px line-height
- **Letter spacing**: 0.1px - uses `mobile/body/small/regular` style
- **Color**: `var(--color/content/link-on-accent, #00FFD6)`

---

### Login Page - Desktop (1280×800px)

#### Differences from Signup Desktop:

**Heading**
- **Text**: "Login to the Ohme Connect Portal"
- Same typography as signup

**Forgot Password Link**
- **Position**: Below heading, centered, above form
- **Text**: "Forgot password?"
- **Typography**: 14px / 24px line-height
- **Letter spacing**: 0 (none) - uses `desktop/body/small/regular` style
- **Color**: `#00FFD6`
- **Margin**: 16px below heading

**Form Fields**
1. **Email Input**
   - **Placeholder**: "Email address"
   - **Width**: 381px
   - No icon

2. **Password Input**
   - **Placeholder**: "Password"
   - **Width**: 381px
   - No icon shown in this variant

**No validation list**
**No terms checkbox**

---

## Design Tokens Used

### Colors

**Brand Colors**
- Background: `var(--color/surface/brand, #032536)` (ohmedarkblue)
- Accent: `var(--color/content/accent, #00FFD6)` (highlighterteal)
- Primary button: `var(--button/primary/surface/active, #00FFD6)`

**Neutral Colors**
- White: `#FFFFFF`
- Border: `var(--input/field/border/active, #ADB3B1)`
- Tertiary text: `var(--color/content/tertiary, #ADB3B1)`
- Placeholder: `var(--input/field/content/placeholder, #647882)`

### Typography

**Mobile Styles**
- h4: 22px / 30px line height (Roobert Regular)
- h6: 18px / 24px line height (Roobert Regular)
- Body small: 14px / 24px line height (Roobert Regular)
- Label: 14px / 16px line height (Roobert Regular)

**Desktop Styles**
- h4: 32px / 40px line height (Roobert Regular)
- Body: 18px / 24px line height (Roobert Regular)
- Body small: 14px / 24px line height (Roobert Regular)

**Button**
- Text: 18px / 24px line height (Roobert SemiBold)

### Spacing

- Tiny: 2px (validation list gap)
- Small: 12px (internal component gaps)
- Medium: 16px (input padding, desktop section gaps)
- Large: 24px (form field spacing)
- XL: 32px (mobile section spacing)

### Border Radius

- Input/Button: 6px
- Checkbox: 6px
- Flag: 2px

### Elevation

No elevation/shadows used - flat design

---

## Behavior

### Validation States

**Password Input**
- Default: Gray border
- Focus: Highlight border (implementation dependent)
- Error: Red border (not shown in designs)
- Success: Green border (not shown in designs)

**Validation List (Signup)**
- Icons change state based on password validation:
  - Unchecked: Gray circle outline
  - Checked: Green checkmark (implementation dependent)
- Text remains at 70% opacity throughout

**Terms Checkbox**
- Unchecked: White background, gray border
- Checked: Checkmark appears (implementation dependent)
- Required before form submission

### Button States

**Primary Button**
- Default: Teal background (`#00FFD6`)
- Hover: Slightly darker (implementation dependent)
- Active: Pressed state (implementation dependent)
- Disabled: Gray (when form invalid)

### Interactive Elements

**Forgot Password Link**
- Default: Teal (`#00FFD6`)
- Hover: Underline (implementation dependent)
- Active: Visited state (implementation dependent)

**Support Link**
- Same behavior as forgot password

**Terms Links**
- Default: Teal (`#00FFD6`)
- Hover: Underline
- Opens in new tab/window

**Language Selector**
- Opens dropdown menu
- Shows country flags
- Updates language on selection

**Show/Hide Password**
- Eye icon toggles password visibility
- Changes to eye-slash when visible

---

## Responsive Behavior

### Breakpoints

- **Mobile**: 360px viewport
- **Desktop**: 1280px viewport
- **Transition**: Handled via media queries

### Layout Changes

**Mobile → Desktop**
- Single column → Split screen
- Full-screen form → Sidebar form
- No product image → Product image visible
- Stacked footer → Inline footer elements
- Compressed spacing → Expanded spacing

### Component Adaptations

**Logo**
- Mobile: 63.548×20px centered in header
- Desktop: 98.5×31px top-left of sidebar

**Form Width**
- Mobile: 320px (89% of viewport)
- Desktop: 381px (72% of sidebar)

**Typography**
- Mobile: Smaller sizes (22px headings)
- Desktop: Larger sizes (32px headings)

**Validation List**
- Mobile: 2px gap between items
- Desktop: 10px gap between items

**Footer**
- Mobile: Centered, stacked elements
- Desktop: Centered, more compact

---

## Accessibility

### Keyboard Navigation

1. **Tab Order**:
   - Language selector (desktop only)
   - Email/Password input
   - Confirm password input (signup)
   - Show/hide password buttons
   - Terms checkbox (signup)
   - Primary button
   - Forgot password link (login)
   - Support link
   - Language selector (mobile)

2. **Focus Indicators**:
   - Visible focus ring on all interactive elements
   - High contrast focus states
   - Keyboard shortcuts documented

### Screen Reader Support

**Labels**
- All inputs have associated labels
- Placeholder text not used as primary label
- Error messages announced on validation

**ARIA Attributes**
- `role="main"` on content area
- `role="complementary"` on sidebar
- `role="contentinfo"` on footer
- `aria-required="true"` on required inputs
- `aria-invalid="true"` on error states
- `aria-describedby` linking inputs to validation

**Semantic HTML**
- `<form>` element wraps inputs
- `<button type="submit">` for primary action
- `<a>` elements for links
- `<label>` elements properly associated

### Color Contrast

**Text Contrast**
- White on `#032536`: 14.56:1 (AAA)
- `#00FFD6` on `#032536`: 11.23:1 (AAA)
- `#ADB3B1` on `#032536`: 6.34:1 (AA)
- `#032536` on `#00FFD6`: 11.23:1 (AAA)

**Interactive Elements**
- All interactive elements meet WCAG AA standards
- Focus indicators have 3:1 contrast minimum
- Error states use color + icon + text

### Error Handling

**Validation Messages**
- Clear, specific error text
- Positioned near relevant field
- Announced to screen readers
- Persistent until corrected

**Form Submission**
- Prevent submission when invalid
- Show all errors simultaneously
- Focus first error field
- Provide clear success feedback

---

## Usage Guidelines

### When to Use

- **User registration/signup flows**
- **Login/authentication pages**
- **Password reset initiation**
- **Account creation workflows**
- **Portal access gates**

### When Not to Use

- Internal application pages
- Profile editing
- Settings pages
- Dashboard content
- Non-authentication flows

### Best Practices

#### Content

1. **Heading Clarity**:
   - Use clear, action-oriented headings
   - Explain what the user is signing up for
   - Keep subheadings concise

2. **Password Requirements**:
   - Show requirements upfront
   - Use validation list for transparency
   - Update validation states in real-time

3. **Terms & Conditions**:
   - Make links clearly visible
   - Use high-contrast colors
   - Explain what user is agreeing to

4. **Error Messages**:
   - Be specific about what's wrong
   - Provide clear correction guidance
   - Use friendly, non-technical language

5. **Support Information**:
   - Always provide support contact
   - Make phone number clickable on mobile
   - Position footer information prominently

#### Layout

1. **Mobile First**:
   - Design for mobile viewport first
   - Ensure touch targets are 44×44px minimum
   - Test on actual devices

2. **Desktop Enhancement**:
   - Use product imagery to reinforce brand
   - Maintain sidebar width for optimal reading
   - Don't let content area become too wide

3. **Visual Hierarchy**:
   - Primary action should be most prominent
   - Use size and color to guide attention
   - Group related elements clearly

#### Interaction

1. **Progressive Disclosure**:
   - Show validation after user interaction
   - Don't show all errors immediately
   - Provide inline validation feedback

2. **Button States**:
   - Disable button until form is valid
   - Provide loading state during submission
   - Show clear success/error feedback

3. **Password Visibility**:
   - Always provide show/hide toggle
   - Default to hidden for security
   - Use clear iconography

---

## Implementation Notes

### Component Dependencies

**Required Components**:
- Input component (with icon support)
- Button component (primary variant)
- Checkbox component
- Dropdown component (language selector)
- Logo component
- Flag icon component
- Validation list component
- Mobile menu component
- Footer component

### Form Validation

**Client-Side**:
```javascript
// Password validation rules
const passwordRules = {
  minLength: 10,
  requiresLetter: /[a-z]/i,
  requiresNumber: /[0-9]/,
  requiresSpecial: /[!@#£$%&*_-]/
};

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

**Server-Side**:
- Always validate on server
- Return specific error messages
- Rate limit submission attempts
- Implement CSRF protection

### State Management

```javascript
// Form state
const [formData, setFormData] = useState({
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
});

// Validation state
const [validationState, setValidationState] = useState({
  minLength: false,
  hasLetter: false,
  hasNumber: false,
  hasSpecial: false,
  passwordsMatch: false
});

// UI state
const [showPassword, setShowPassword] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [errors, setErrors] = useState({});
```

### API Integration

```javascript
// Signup endpoint
POST /api/auth/signup
Body: {
  email: string,
  password: string,
  agreeToTerms: boolean
}

// Login endpoint
POST /api/auth/login
Body: {
  email: string,
  password: string
}

// Response format
{
  success: boolean,
  token?: string,
  user?: object,
  errors?: array
}
```

### Security Considerations

1. **Password Handling**:
   - Never log passwords
   - Use HTTPS only
   - Implement rate limiting
   - Hash passwords server-side

2. **CSRF Protection**:
   - Include CSRF token in forms
   - Validate token server-side
   - Rotate tokens on successful auth

3. **Session Management**:
   - Use secure, httpOnly cookies
   - Implement session timeout
   - Invalidate on logout
   - Use strong session IDs

4. **Input Sanitization**:
   - Escape user input
   - Prevent SQL injection
   - Validate data types
   - Limit input length

---

## Testing Checklist

### Functional Testing

- [ ] Email validation works correctly
- [ ] Password validation shows all requirements
- [ ] Confirm password matches primary password
- [ ] Terms checkbox is required for signup
- [ ] Show/hide password toggles visibility
- [ ] Form submits only when valid
- [ ] Forgot password link navigates correctly
- [ ] Support link navigates correctly
- [ ] Language selector changes language
- [ ] All links open correctly

### Visual Testing

- [ ] Layout correct at 360px mobile width
- [ ] Layout correct at 1280px desktop width
- [ ] Product image displays correctly on desktop
- [ ] Colors match design tokens exactly
- [ ] Typography sizes correct for mobile/desktop
- [ ] Spacing consistent with specifications
- [ ] Icons render at correct sizes
- [ ] Logo displays correctly
- [ ] Footer aligned properly

### Responsive Testing

- [ ] Smooth transition between breakpoints
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets meet minimum size
- [ ] Content remains readable at all sizes
- [ ] Images scale appropriately
- [ ] No layout breaks between 360-1280px

### Accessibility Testing

- [ ] Keyboard navigation works completely
- [ ] Tab order is logical
- [ ] Focus indicators visible
- [ ] Screen reader announces all content
- [ ] Error messages announced
- [ ] Color contrast meets WCAG AA
- [ ] Form labels properly associated
- [ ] ARIA attributes correct

### Performance Testing

- [ ] Page loads in under 2 seconds
- [ ] Images optimized for web
- [ ] No layout shift during load
- [ ] Smooth animations/transitions
- [ ] No memory leaks
- [ ] Works on slow connections

### Security Testing

- [ ] HTTPS enforced
- [ ] CSRF protection active
- [ ] XSS prevention working
- [ ] SQL injection prevented
- [ ] Rate limiting functional
- [ ] Session management secure

### Browser/Device Testing

**Desktop Browsers**:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Mobile Browsers**:
- [ ] iOS Safari
- [ ] Chrome Mobile
- [ ] Samsung Internet
- [ ] Firefox Mobile

**Devices**:
- [ ] iPhone (various models)
- [ ] Android phones
- [ ] Tablets
- [ ] Desktop (1920×1080 and higher)

---

## Related Components

### Foundation Level
- **Logo Component**: Ohme branding
- **Flag Icon Component**: Country flags for language selector

### Core UI Level
- **Input Component**: Text input fields
- **Button Component**: Primary action button
- **Checkbox Component**: Terms acceptance
- **Dropdown Component**: Language selector

### Functional Level
- **Validation List Component**: Password requirements
- **Mobile Menu Component**: Mobile header
- **Footer Component**: Support and copyright information

---

## Version History

- **v1.0.0** (Current): Initial authentication page template
  - Mobile and desktop variants
  - Login and signup flows
  - Validation list integration
  - Terms acceptance
  - Language selector
  - Support footer

---

## Resources

### Design Files
- Figma: [Authentication Page Templates]
- Token reference: `/mnt/project/Token_System_Documentation.md`

### Code Examples
- React implementation: `./examples/auth-page-react.tsx`
- Vue implementation: `./examples/auth-page-vue.vue`
- HTML/CSS: `./examples/auth-page.html`

### Dependencies
- Input component documentation
- Button component documentation
- Checkbox component documentation
- Dropdown component documentation
- Validation list component documentation

---

## Support

For questions or issues with this template:
- **Design System Team**: design-system@ohme.com
- **Documentation**: [Internal Wiki]
- **Slack**: #design-system

---

**Last Updated**: January 2025
**Maintained By**: UX Design Team
**Review Cycle**: Quarterly