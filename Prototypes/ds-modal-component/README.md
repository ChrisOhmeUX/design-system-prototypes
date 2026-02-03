# Modal Component System Documentation

## Overview

Modals are overlay dialogs that focus user attention on critical tasks or information. The Ohme modal system provides a complete set of composable elements for creating accessible, responsive dialog experiences.

**Component Type:** Functional Component  
**Category:** Overlay / Dialog  
**Token Integration:** Yes - uses Tier 3 modal tokens  
**Composite System:** Title Group + Advisory Text + Content + Button Group + Overlay

## System Architecture

The modal is composed of four main sub-components plus the container:

1. **Title Group** - Header with title, optional subtitle, and close button
2. **Advisory Text** - Informational panel to guide users
3. **Button Group** - Action buttons (1-3 buttons, horizontal/vertical)
4. **Modal Container** - Main modal surface with padding and elevation
5. **Modal Overlay** - Semi-transparent backdrop

---

# Part 1: Modal Container

## Container Specifications

### Dimensions
- **Desktop Width:** 570px (typical)
- **Mobile Width:** 388px
- **Padding:** 12px (inline and stack) â†’ `modal/container/padding-inline` and `modal/container/padding-stack`
- **Corner Radius:** 8px â†’ `modal/container/radius`
- **Elevation:** Level 3 shadow

### Visual Properties
- **Background:** Elevated surface
- **Border:** Subtle border
- **Shadow:** 0px 10px 35px rgba(72,70,100,0.05)
- **z-index:** Modal level

## Container Color System

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `modal/container/surface` | `surface/raised` | white | lakeblue | #FFFFFF | #0B2539 |
| **Border** | `modal/container/border` | `border/subtle` | grey100 | grey700 | #E5E8E8 | #647882 |

**Visual Result:**
- Light mode: White background with light grey border
- Dark mode: Dark blue (lakeblue) background with medium grey border

---

## Modal Overlay

| Property | Tier 3 Token | â†’ Tier 2 | Resolves To | Hex Value |
|----------|-------------|----------|-------------|-----------|
| **Surface** | `modal/overlay/surface` | `surface/overlay` | ohmedarkblue @ 60% | #032536 @ 60% opacity |

**Visual Result:** Semi-transparent dark blue backdrop (both modes)

---

# Part 2: Title Group

## Title Group Specifications

### Dimensions
- **Height:** 48px
- **Gap:** 24px (between title and close button)
- **Close Button:** 48Ã—48px

### Visual Properties
- **Layout:** Horizontal flex
- **Title:** H4 heading (32px)
- **Subtitle:** 18px paragraph (optional)
- **Close Icon:** X (Cross 1) from Radix Abstract

## Title Group Color System

### Title Text

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Content** | `modal/header/title` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** Roobert Regular, 32px / 40px line-height

---

### Subtitle Text

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Content** | `modal/header/subtitle` | `content/secondary` | grey700 | grey300 | #647882 | #ADB3B1 |

**Typography:** Roobert Regular, 18px / 24px line-height

---

### Close Button Icon

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Icon** | `modal/header/icon` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Size:** 24Ã—24px

---

# Part 3: Advisory Text

## Advisory Text Specifications

### Dimensions
- **Width:** Full width of modal (520px in 570px container)
- **Padding:** 12px inline and stack
- **Gap:** Part of modal body gap system

### Visual Properties
- **Layout:** Flex container with padding
- **Typography:** 18px / 24px paragraph text
- **Background:** Tinted surface

## Advisory Text Color System

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `modal/advisory-text/surface` | `surface/base` | smokeyblue | lakeblue | #F5F8FA | #0B2539 |
| **Content** | `modal/advisory-text/content` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Light mode: Light blue/grey background, dark blue text
- Dark mode: Dark blue background, white text

---

# Part 4: Button Group

## Button Group Specifications

### Variants
- **Buttons:** 1, 2, or 3 buttons
- **Grouping:** Horizontal or Vertical
- **Gap:** 12px â†’ `modal/buttongroup/gap`

### Layout Options

| Configuration | Layout | Gap | Button Width |
|--------------|--------|-----|--------------|
| **1 Button (H/V)** | Single full-width button | N/A | 100% |
| **2 Buttons - Horizontal** | Side by side | 12px | 50% each (flex-1) |
| **2 Buttons - Vertical** | Stacked | 12px | 100% each |
| **3 Buttons - Horizontal** | Side by side | 12px | 33% each (flex-1) |
| **3 Buttons - Vertical** | Stacked | 12px | 100% each |

### Visual Properties
- Buttons use standard Button component tokens
- Typically: Primary + Tertiary/Secondary combinations
- Gap: 12px between buttons

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Modal Container */
--modal-container-surface: var(--color-surface-raised);
--modal-container-border: var(--color-border-subtle);
--modal-container-radius: var(--value-corner-radii-lg);
--modal-container-elevation: var(--value-elevation-level-3);
--modal-container-padding-inline: var(--value-spacing-axis-aware-inline-lg);
--modal-container-padding-stack: var(--value-spacing-axis-aware-stack-lg);

/* Modal Overlay */
--modal-overlay-surface: var(--color-surface-overlay);

/* Title Group */
--modal-header-title: var(--color-content-primary);
--modal-header-subtitle: var(--color-content-secondary);
--modal-header-icon: var(--color-content-primary);
--modal-header-padding-inline: var(--value-spacing-axis-aware-inline-md);
--modal-header-gap: var(--value-spacing-gap-lg);

/* Body Content */
--modal-body-content: var(--color-content-primary);
--modal-body-gap: var(--value-spacing-gap-md);

/* Advisory Text */
--modal-advisory-text-surface: var(--color-surface-base);
--modal-advisory-text-content: var(--color-content-primary);
--modal-advisory-text-padding-inline: var(--value-spacing-axis-aware-inline-lg);
--modal-advisory-text-padding-stack: var(--value-spacing-axis-aware-stack-lg);

/* Button Group */
--modal-buttongroup-gap: var(--value-spacing-gap-lg);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/raised` | white | lakeblue | #FFFFFF | #0B2539 |
| `color/surface/base` | smokeyblue | lakeblue | #F5F8FA | #0B2539 |
| `color/surface/overlay` | ohmedarkblue @ 60% | ohmedarkblue @ 60% | #032536 @ 60% | #032536 @ 60% |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/secondary` | grey700 | grey300 | #647882 | #ADB3B1 |
| `color/border/subtle` | grey100 | grey700 | #E5E8E8 | #647882 |
| `value/elevation/level 3` | e300 | e300 | 0px 10px 35px rgba(72,70,100,0.05) | Same |
| `value/corner-radii/lg` | radius-2x | radius-2x | 8px | 8px |
| `value/spacing/gap/lg` | lg | lg | 12px | 12px |
| `value/spacing/gap/md` | md | md | 8px | 8px |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/white` | #FFFFFF | Container surface (light) |
| `color/tertiary/lakeblue` | #0B2539 | Container/advisory surface (dark) |
| `color/tertiary/smokeyblue` | #F5F8FA | Advisory surface (light) |
| `color/brand/ohmedarkblue` | #032536 | Primary content (light), overlay |
| `color/secondary/grey700` | #647882 | Secondary content (light), border (dark) |
| `color/secondary/grey300` | #ADB3B1 | Secondary content (dark) |
| `color/secondary/grey100` | #E5E8E8 | Border (light) |
| `Values/elevation/e300` | 0px 10px 35px rgba(72,70,100,0.05) | Elevation shadow |
| `Values/corner radii/radius-2x` | 8px | Container corner radius |
| `Values/space/space-3x` | 12px | Gaps and padding |

## Component Properties

```typescript
type ModalProps = {
  className?: string;
  mobile?: boolean;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  advisoryText?: string;
  children?: React.ReactNode;
  buttons?: ModalButton[];
  buttonGrouping?: "Horizontal" | "Vertical";
};

type ModalButton = {
  label: string;
  type?: "Primary" | "secondary" | "tertiary";
  onClick: () => void;
};

type TitleGroupProps = {
  mobile?: boolean;
  title: string;
  subtitle?: string;
  onClose: () => void;
};

type AdvisoryTextProps = {
  text: string;
};

type ButtonGroupProps = {
  buttons?: "1" | "2" | "3";
  grouping?: "Horizontal" | "Vertical";
  buttonConfigs: ModalButton[];
};
```

### Property: `mobile` (boolean, optional)
Controls whether the modal uses mobile or desktop layout.

**Values:**
- `false` (default) - Desktop layout (570px)
- `true` - Mobile layout (388px)

---

### Property: `isOpen` (boolean, required)
Controls modal visibility.

---

### Property: `onClose` (function, required)
Callback when modal should close (X button or overlay click).

---

### Property: `title` (string, required)
Modal title text displayed in title group.

---

### Property: `subtitle` (string, optional)
Optional subtitle text below title.

---

### Property: `advisoryText` (string, optional)
Optional advisory text panel content.

---

### Property: `buttonGrouping` (string, optional)
Button layout direction.

**Values:**
- `"Horizontal"` (default) - Buttons side by side
- `"Vertical"` - Buttons stacked

---

## Anatomy

```
Modal System
â”œâ”€â”€ Overlay (semi-transparent backdrop)
â”‚   â””â”€â”€ Color: ohmedarkblue @ 60% (constant)
â””â”€â”€ Modal Container
    â”œâ”€â”€ Surface: surface/raised (mode-aware)
    â”œâ”€â”€ Border: border/subtle (mode-aware)
    â”œâ”€â”€ Elevation: Level 3 shadow
    â””â”€â”€ Content
        â”œâ”€â”€ Title Group
        â”‚   â”œâ”€â”€ Title (H4 - 32px)
        â”‚   â”‚   â””â”€â”€ Color: content/primary (mode-aware)
        â”‚   â”œâ”€â”€ Subtitle (18px, optional)
        â”‚   â”‚   â””â”€â”€ Color: content/secondary (mode-aware)
        â”‚   â””â”€â”€ Close Button (X icon)
        â”‚       â””â”€â”€ Color: content/primary (mode-aware)
        â”œâ”€â”€ Advisory Text (optional)
        â”‚   â”œâ”€â”€ Surface: surface/base (mode-aware)
        â”‚   â””â”€â”€ Content: content/primary (mode-aware)
        â”œâ”€â”€ Body Content
        â”‚   â””â”€â”€ Color: content/primary (mode-aware)
        â””â”€â”€ Button Group
            â””â”€â”€ Buttons: 1-3, H/V layout
```

## Implementation Examples

### Basic Modal

```tsx
import Modal from '@/components/functional/Modal';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  subtitle="Please review before proceeding"
  advisoryText="This action cannot be undone. Make sure you want to continue."
  buttons={[
    { label: 'Confirm', type: 'Primary', onClick: handleConfirm },
    { label: 'Cancel', type: 'tertiary', onClick: () => setIsOpen(false) }
  ]}
  buttonGrouping="Vertical"
/>
```

### Mobile Modal

```tsx
<Modal
  mobile={true}
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Mobile Dialog"
  buttons={[
    { label: 'OK', type: 'Primary', onClick: handleOk }
  ]}
/>
```

### Modal with Form Content

```tsx
const [formData, setFormData] = useState({ email: '', name: '' });

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Edit Profile"
  subtitle="Update your information"
  buttonGrouping="Horizontal"
  buttons={[
    { label: 'Cancel', type: 'tertiary', onClick: () => setIsOpen(false) },
    { label: 'Save', type: 'Primary', onClick: handleSave }
  ]}
>
  <Input
    type="primary"
    size="Large"
    label={true}
    labelText="Name"
    value={formData.name}
    onChange={(v) => setFormData({ ...formData, name: v })}
  />
  <Input
    type="email"
    size="Large"
    label={true}
    labelText="Email"
    value={formData.email}
    onChange={(v) => setFormData({ ...formData, email: v })}
  />
</Modal>
```

### Three-Button Modal

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Save Changes?"
  advisoryText="You have unsaved changes that will be lost."
  buttonGrouping="Vertical"
  buttons={[
    { label: 'Save', type: 'Primary', onClick: handleSave },
    { label: 'Discard', type: 'secondary', onClick: handleDiscard },
    { label: 'Cancel', type: 'tertiary', onClick: () => setIsOpen(false) }
  ]}
/>
```

## CSS Implementation

### Modal Container

```css
.modal {
  position: fixed;
  inset: 0;
  z-index: var(--value-z-index-modal);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__overlay {
  position: absolute;
  inset: 0;
  background: var(--modal-overlay-surface);
}

.modal__container {
  position: relative;
  width: 570px;
  background: var(--modal-container-surface);
  border: 1px solid var(--modal-container-border);
  border-radius: var(--modal-container-radius);
  box-shadow: var(--modal-container-elevation);
  padding: var(--modal-container-padding-stack) 
           var(--modal-container-padding-inline);
}

.modal__container--mobile {
  width: 388px;
}
```

### Title Group

```css
.modal__titleGroup {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
}

.modal__header {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--modal-header-gap);
}

.modal__title {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-32);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--typography-line-height-40);
  letter-spacing: var(--typography-letter-spacing-0dot2);
  color: var(--modal-header-title);
}

.modal__subtitle {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-18);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
  color: var(--modal-header-subtitle);
}

.modal__closeButton {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: var(--value-corner-radii-md);
  transition: background 200ms ease;
}

.modal__closeButton:hover {
  background: var(--color-surface-subtle);
}

.modal__closeIcon {
  width: 24px;
  height: 24px;
  color: var(--modal-header-icon);
}
```

### Advisory Text

```css
.modal__advisoryText {
  background: var(--modal-advisory-text-surface);
  padding: var(--modal-advisory-text-padding-stack) 
           var(--modal-advisory-text-padding-inline);
  width: 100%;
}

.modal__advisoryText p {
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-18);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
  color: var(--modal-advisory-text-content);
}
```

### Button Group

```css
.modal__buttonGroup {
  display: flex;
  gap: var(--modal-buttongroup-gap);
  width: 100%;
}

.modal__buttonGroup--horizontal {
  flex-direction: row;
}

.modal__buttonGroup--vertical {
  flex-direction: column;
}

.modal__buttonGroup button {
  flex: 1;
}

.modal__buttonGroup--vertical button {
  width: 100%;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-surface-raised: #FFFFFF;
  --color-surface-base: #F5F8FA;
  --color-surface-overlay: rgba(3, 37, 54, 0.6);
  --color-content-primary: #032536;
  --color-content-secondary: #647882;
  --color-border-subtle: #E5E8E8;
  --value-elevation-level-3: 0px 10px 35px rgba(72, 70, 100, 0.05);
  --value-corner-radii-lg: 8px;
  --value-spacing-gap-lg: 12px;
  --value-spacing-gap-md: 8px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-surface-raised: #0B2539;
  --color-surface-base: #0B2539;
  --color-content-primary: #FFFFFF;
  --color-content-secondary: #ADB3B1;
  --color-border-subtle: #647882;
  /* Overlay and elevation remain constant */
}
```

## Usage Guidelines

### When to Use Modal

**Critical Actions:**
- Confirm destructive actions
- Final approval before submission
- Account/data deletion warnings

**Required Input:**
- Mandatory user decisions
- Form data collection
- Settings configuration

**Important Information:**
- Critical alerts
- Error messages requiring acknowledgment
- Success confirmations

**Workflow Interruptions:**
- Session timeout warnings
- Unsaved changes prompts
- Permission requests

### When NOT to Use

- **Non-critical notifications:** Use toast/snackbar
- **Complex forms:** Use dedicated page
- **Frequent interruptions:** Consider inline solutions
- **Non-blocking info:** Use tooltips or popovers

## Best Practices

### Content Guidelines âœ“
1. **Clear Title:** Concise, action-oriented
2. **Helpful Subtitle:** Provide context when needed
3. **Advisory Text:** Use for critical warnings or guidance
4. **Action Buttons:** Clear, specific labels (not just "OK")
5. **Escape Route:** Always provide way to dismiss

### Visual Guidelines âœ“
1. **Button Hierarchy:** Primary action most prominent
2. **Vertical for Mobile:** Stack buttons on small screens
3. **Advisory When Critical:** Use advisory panel for warnings
4. **White Space:** Don't overcrowd modal content
5. **Max Width:** Keep readable (570px desktop, 388px mobile)

### Interaction Guidelines âœ“
1. **Overlay Dismiss:** Click outside to close (usually)
2. **ESC Key:** Always close on escape
3. **Focus Trap:** Keep keyboard focus within modal
4. **Initial Focus:** Set focus to primary action or first input
5. **Return Focus:** Return focus to trigger element on close

## Accessibility

### ARIA Attributes

```tsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <div className="modal__overlay" onClick={onClose} />
  <div className="modal__container">
    <div className="modal__titleGroup">
      <h2 id="modal-title">{title}</h2>
      {subtitle && <p id="modal-description">{subtitle}</p>}
      <button 
        onClick={onClose}
        aria-label="Close dialog"
      >
        <IconRadixAbstract iconRadix="Cross 1" />
      </button>
    </div>
    {/* Content */}
  </div>
</div>
```

### Focus Management

```tsx
const Modal = ({ isOpen, onClose, ...props }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      // Focus first focusable element in modal
      const firstFocusable = modalRef.current?.querySelector('button, input');
      (firstFocusable as HTMLElement)?.focus();
    } else {
      // Return focus to trigger
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Focus trap implementation
  // ...
};
```

### Keyboard Navigation

- **Escape:** Close modal
- **Tab:** Navigate through modal elements
- **Shift+Tab:** Navigate backwards
- **Enter:** Activate focused button

## Responsive Behavior

### Breakpoint Strategy

```tsx
const ResponsiveModal = (props) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  
  return (
    <Modal 
      {...props}
      mobile={isMobile}
      buttonGrouping={isMobile ? "Vertical" : "Horizontal"}
    />
  );
};
```

### CSS Media Queries

```css
/* Desktop */
.modal__container {
  width: 570px;
}

/* Mobile */
@media (max-width: 767px) {
  .modal__container {
    width: 388px;
    margin: 16px;
  }
  
  .modal__buttonGroup {
    flex-direction: column;
  }
}
```

## Advanced Patterns

### Confirmation Modal

```tsx
const ConfirmationModal = ({ isOpen, onConfirm, onCancel, title, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancel}
      title={title}
      advisoryText={message}
      buttons={[
        { label: 'Confirm', type: 'Primary', onClick: onConfirm },
        { label: 'Cancel', type: 'tertiary', onClick: onCancel }
      ]}
      buttonGrouping="Horizontal"
    />
  );
};
```

### Form Modal with Validation

```tsx
const FormModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name required';
    if (!formData.email) newErrors.email = 'Email required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(formData);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Profile"
      subtitle="Update your information"
      buttonGrouping="Horizontal"
      buttons={[
        { label: 'Cancel', type: 'tertiary', onClick: onClose },
        { label: 'Save', type: 'Primary', onClick: handleSubmit }
      ]}
    >
      <Input
        type="primary"
        label={true}
        labelText="Name"
        value={formData.name}
        onChange={(v) => setFormData({ ...formData, name: v })}
        error={!!errors.name}
      />
      <Input
        type="email"
        label={true}
        labelText="Email"
        value={formData.email}
        onChange={(v) => setFormData({ ...formData, email: v })}
        error={!!errors.email}
      />
    </Modal>
  );
};
```

### Destructive Action Modal

```tsx
const DeleteModal = ({ isOpen, onDelete, onCancel, itemName }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancel}
      title="Delete Item?"
      subtitle={`Are you sure you want to delete "${itemName}"?`}
      advisoryText="This action cannot be undone. All data associated with this item will be permanently removed."
      buttons={[
        { label: 'Delete', type: 'Primary', onClick: onDelete },
        { label: 'Cancel', type: 'tertiary', onClick: onCancel }
      ]}
      buttonGrouping="Vertical"
    />
  );
};
```

## Testing Checklist

### Visual Testing
- [ ] Desktop: 570px width
- [ ] Mobile: 388px width
- [ ] Light mode: White container, light grey border
- [ ] Dark mode: Dark blue container, medium grey border
- [ ] Overlay: Semi-transparent dark blue (60% opacity)
- [ ] Advisory text: Light blue/grey (light) / dark blue (dark)
- [ ] Title: Dark blue (light) / white (dark)
- [ ] Subtitle: Medium grey (light) / light grey (dark)
- [ ] Close icon: Dark blue (light) / white (dark)
- [ ] Container has 8px corner radius
- [ ] Elevation shadow visible
- [ ] Button gap: 12px

### Functional Testing
- [ ] Modal opens when isOpen=true
- [ ] Modal closes when isOpen=false
- [ ] Overlay click closes modal
- [ ] Close button (X) closes modal
- [ ] Escape key closes modal
- [ ] Button actions fire correctly
- [ ] Form inputs work within modal
- [ ] Scroll works for long content

### Accessibility Testing
- [ ] role="dialog" on container
- [ ] aria-modal="true" present
- [ ] aria-labelledby references title
- [ ] aria-describedby references subtitle/content
- [ ] Focus trapped within modal
- [ ] Escape key closes modal
- [ ] Focus returns to trigger on close
- [ ] Close button has aria-label
- [ ] Keyboard navigation works
- [ ] Screen reader announces modal opening

### Mode Testing
- [ ] Container surface correct in light mode
- [ ] Container surface correct in dark mode
- [ ] Border adapts to mode
- [ ] Title text adapts to mode
- [ ] Subtitle text adapts to mode
- [ ] Advisory panel adapts to mode
- [ ] Close icon adapts to mode
- [ ] Overlay constant in both modes
- [ ] Smooth theme transitions

## Related Components

### Composed From:
- **Title Group** - Modal header
- **Advisory Text** - Warning/info panel
- **Button Group** - Action buttons
- **Button Component** - Individual buttons
- **Icon Component** - Close icon (Cross 1)

### Works With:
- **Input** - Form fields in modal
- **Dropdown** - Selectors in modal
- **Checkbox** - Multi-select in modal

## Common Patterns

### Modal State Management

```tsx
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(prev => !prev);
  
  return { isOpen, open, close, toggle };
};

// Usage
const { isOpen, open, close } = useModal();

<button onClick={open}>Open Modal</button>
<Modal isOpen={isOpen} onClose={close} {...props} />
```

### Prevent Background Scroll

```tsx
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isOpen]);
```

### Animation

```css
.modal__overlay {
  animation: fadeIn 200ms ease;
}

.modal__container {
  animation: slideIn 300ms ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Version History

- **v1.0** - Initial modal system with title group, advisory text, and button group components

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
