# Contacts System Documentation

## Overview

The Contacts system provides a structured way to display contact information for users, customers, admins, and other entities. It consists of individual Contact Type components (name, address, email, phone, reference) grouped within a Contacts container.

**Component Type:** Functional Component  
**Category:** Data Display  
**Token Integration:** Yes - uses content and link tokens  
**System Components:** Contact Type (individual info rows), Contacts (container)

---

# Part 1: Contact Type (Individual Information Row)

## Overview

Contact Type displays a single piece of contact information with an appropriate icon and formatting. Each type has specific behavior for displaying, linking, and copying data.

**Variants:** 5 types (name, address, email, phone, reference)  
**Layout:** Horizontal with icon + content  
**Width:** 268px (typical)

## Contact Type Variants

| Type | Icon | Content Format | Interactive Features |
|------|------|----------------|---------------------|
| **Name** | Person | Plain text name | None |
| **Address** | Location Pin | Multi-line address + map link | Google Maps link |
| **Email** | Envelope | Email address + copy | Click to email, copy button |
| **Phone** | Mobile | Phone number + copy | Click to call, copy button |
| **Reference** | ID Card/Barcode | Reference code + copy | Copy button |

## Design Specifications

### Dimensions
- **Width:** 268px (standard)
- **Height:** Variable by type (24px single-line, 72px address)
- **Icon Size:** 16Ã—16px (visual area within 24Ã—24px container)
- **Icon-to-Content Gap:** 12px â†’ `primitive/values/space/space-small`
- **Copy Icon Size:** 16Ã—16px
- **Copy Icon Gap:** 4px (email/phone) or 6px (reference)

### Visual Properties
- **Layout:** Horizontal flex, icon left, content flex-grow
- **Icon Alignment:** Top-aligned with first line of content
- **Typography:** Varies by element type
- **Text Wrapping:** Multi-line for address only

## Color System - Contact Type

### Name

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Icon** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Text** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** Roobert Regular, 18px / 24px, 0.2px letter-spacing

**Visual Result:**
- Light mode: Dark blue icon and text
- Dark mode: White icon and text

---

### Address

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Icon** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Address Text** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Map Link** | `color/content/link-2` | Darkteal | Darkteal | #0EBA9E | #0EBA9E |

**Typography:** 
- Address: Roobert Regular, 18px / 24px, 0.2px letter-spacing
- Map link: Roobert Medium, 18px / 24px, 0.2px letter-spacing

**Visual Result:**
- Multi-line address in dark blue (light) / white (dark)
- Teal "View on Google maps" link (constant both modes)

---

### Email

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Hex Value |
|----------|----------------|-------------|-------------|-----------|
| **Icon** | `color/content/primary` | ohmedarkblue | white | #032536 / #FFFFFF |
| **Email Text** | `color/content/link-2` | Darkteal | Darkteal | #0EBA9E |
| **Copy Icon** | `color/content/link-2` | Darkteal | Darkteal | #0EBA9E |

**Typography:** Roobert Medium, 18px / 24px, 0.2px letter-spacing

**Visual Result:**
- Teal email address (constant both modes)
- Teal copy icon (constant both modes)

---

### Phone

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Hex Value |
|----------|----------------|-------------|-------------|-----------|
| **Icon** | `color/content/primary` | ohmedarkblue | white | #032536 / #FFFFFF |
| **Phone Text** | `color/content/link-2` | Darkteal | Darkteal | #0EBA9E |
| **Copy Icon** | `color/content/link-2` | Darkteal | Darkteal | #0EBA9E |

**Typography:** Roobert Medium, 18px / 24px, 0.2px letter-spacing

**Visual Result:**
- Teal phone number (constant both modes)
- Teal copy icon (constant both modes)

---

### Reference

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Hex Value |
|----------|----------------|-------------|-------------|-----------|
| **Icon** | `color/content/primary` | ohmedarkblue | white | #032536 / #FFFFFF |
| **Reference Text** | `color/content/primary` | ohmedarkblue | white | #032536 / #FFFFFF |
| **Copy Icon** | `color/content/link-2` | Darkteal | Darkteal | #0EBA9E |

**Typography:** Roobert Regular, 18px / 24px, 0.2px letter-spacing

**Visual Result:**
- Dark blue (light) / white (dark) reference number
- Teal copy icon (constant both modes)

---

# Part 2: Contacts (Container)

## Overview

Contacts is a container component that groups multiple Contact Type components to display complete contact information for an entity.

**Variants:** 2 platform configurations (Shared parking, Connect)  
**Width:** 268px  
**Gap:** 24px between contact types â†’ `primitive/values/space/space-large`

## Container Specifications

| Property | Value | Token Reference |
|----------|-------|----------------|
| **Width** | 268px | Fixed |
| **Gap** | 24px | `space/space-large` |
| **Layout** | Vertical stack | Flex column |
| **Alignment** | Left | Start |

### Platform Variants

Both platforms use the same layout and styling but may include different contact types:

**Shared Parking Platform:**
- Name
- Address
- Email
- Phone
- Reference

**Connect Platform:**
- Name
- Address
- Email
- Phone
- Reference

## Complete Token Mapping

### Tier 3 Component Tokens (Recommended)

```css
/* Contact Type Container */
--contact-gap: var(--primitive-values-space-space-small);
--contact-icon-size: 16px;
--contact-icon-container: 24px;

/* Contact Typography */
--contact-name-font-family: var(--typography-font-family-Roobert);
--contact-name-font-size: var(--typography-font-size-18);
--contact-name-font-weight: var(--typography-font-weight-regular);
--contact-name-line-height: var(--typography-line-height-24);
--contact-name-letter-spacing: var(--typography-letter-spacing-0dot2);

--contact-link-font-family: var(--typography-font-family-Roobert);
--contact-link-font-size: var(--typography-font-size-18);
--contact-link-font-weight: var(--typography-font-weight-medium);
--contact-link-line-height: var(--typography-line-height-24);
--contact-link-letter-spacing: var(--typography-letter-spacing-0dot2);

/* Contact Colors */
--contact-icon-color: var(--color-content-primary);
--contact-text-color: var(--color-content-primary);
--contact-link-color: var(--color-content-link-2);
--contact-copy-icon-color: var(--color-content-link-2);

/* Contacts Container */
--contacts-gap: var(--primitive-values-space-space-large);
--contacts-width: 268px;
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/link-2` | Darkteal | Darkteal | #0EBA9E | #0EBA9E |
| `primitive/values/space/space-small` | - | - | 12px | 12px |
| `primitive/values/space/space-large` | - | - | 24px | 24px |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/ohmedarkblue` | #032536 | Icon, text (light mode) |
| `color/brand/white` | #FFFFFF | Icon, text (dark mode) |
| `color/tertiary/Darkteal` | #0EBA9E | Links, copy icons |
| `Values/space/space-3x` | 12px | Icon-to-content gap |
| `Values/space/space-6x` | 24px | Between contact types |

## Anatomy

### Contact Type Structure
```
Contact Type Component
â”œâ”€â”€ Icon Container (16Ã—16px within 24Ã—24px area)
â”‚   â”œâ”€â”€ Icon: Person/Location/Envelope/Phone/ID Card
â”‚   â””â”€â”€ Color: content/primary (mode-aware)
â”œâ”€â”€ Content (flex-grow)
â”‚   â””â”€â”€ [Varies by type]
â”‚       â”œâ”€â”€ Name: Plain text
â”‚       â”œâ”€â”€ Address: Multi-line text + map link
â”‚       â”œâ”€â”€ Email: Link text + copy icon
â”‚       â”œâ”€â”€ Phone: Link text + copy icon
â”‚       â””â”€â”€ Reference: Text + copy icon
â””â”€â”€ Copy Icon (16Ã—16px, optional)
    â””â”€â”€ Color: content/link-2 (teal)
```

### Contacts Container Structure
```
Contacts Component
â””â”€â”€ Container (268px width)
    â””â”€â”€ Contact Type Stack (24px gap)
        â”œâ”€â”€ Name Contact Type
        â”œâ”€â”€ Address Contact Type
        â”œâ”€â”€ Email Contact Type
        â”œâ”€â”€ Phone Contact Type
        â””â”€â”€ Reference Contact Type
```

## Component Properties

### Contact Type

```typescript
type ContactTypeProps = {
  className?: string;
  type?: "name" | "address" | "email" | "phone" | "reference";
  value: string | AddressValue;
  onCopy?: () => void;
  onClick?: () => void;
};

type AddressValue = {
  line1: string;
  line2?: string;
  city: string;
  postcode: string;
  mapUrl?: string;
};
```

### Contacts

```typescript
type ContactsProps = {
  className?: string;
  platform?: "Shared parking" | "Connect";
  contactData: ContactData;
};

type ContactData = {
  name?: string;
  address?: AddressValue;
  email?: string;
  phone?: string;
  reference?: string;
};
```

## Implementation Examples

### Basic Contact Type Usage

```tsx
import ContactType from '@/components/functional/ContactType';

// Name
<ContactType
  type="name"
  value="Lily Sanders"
/>

// Email with copy
<ContactType
  type="email"
  value="lilysanders@gmail.com"
  onCopy={() => copyToClipboard('lilysanders@gmail.com')}
  onClick={() => window.location.href = 'mailto:lilysanders@gmail.com'}
/>

// Phone with copy
<ContactType
  type="phone"
  value="+44 7645 353 870"
  onCopy={() => copyToClipboard('+447645353870')}
  onClick={() => window.location.href = 'tel:+447645353870'}
/>

// Address with map link
<ContactType
  type="address"
  value={{
    line1: '1875 Pogteh Center,',
    city: 'London',
    postcode: 'SW19 7HX',
    mapUrl: 'https://maps.google.com/?q=1875+Pogteh+Center+London+SW19+7HX'
  }}
/>

// Reference with copy
<ContactType
  type="reference"
  value="BCOOQDO47N"
  onCopy={() => copyToClipboard('BCOOQDO47N')}
/>
```

### Complete Contacts Usage

```tsx
import Contacts from '@/components/functional/Contacts';

const CustomerContacts = ({ customer }) => {
  return (
    <Contacts
      platform="Connect"
      contactData={{
        name: customer.name,
        address: {
          line1: customer.address.street,
          city: customer.address.city,
          postcode: customer.address.postcode,
          mapUrl: customer.address.googleMapsUrl
        },
        email: customer.email,
        phone: customer.phone,
        reference: customer.referenceId
      }}
    />
  );
};
```

### With Copy Functionality

```tsx
const ContactsWithCopy = ({ contactData }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (value: string, field: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <Contacts
      platform="Connect"
      contactData={{
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        reference: contactData.reference
      }}
      onCopyEmail={() => handleCopy(contactData.email, 'email')}
      onCopyPhone={() => handleCopy(contactData.phone, 'phone')}
      onCopyReference={() => handleCopy(contactData.reference, 'reference')}
    />
  );
};
```

### Dynamic Contact Display

```tsx
const DynamicContacts = ({ entity }) => {
  const contactData = {};

  // Only include available contact information
  if (entity.name) contactData.name = entity.name;
  if (entity.address) contactData.address = formatAddress(entity.address);
  if (entity.email) contactData.email = entity.email;
  if (entity.phone) contactData.phone = formatPhone(entity.phone);
  if (entity.referenceId) contactData.reference = entity.referenceId;

  return <Contacts contactData={contactData} />;
};
```

## CSS Implementation

### Contact Type Styles

```css
.contactType {
  display: flex;
  gap: var(--contact-gap);
  width: 268px;
}

/* Alignment */
.contactType--singleLine {
  align-items: center;
}

.contactType--multiLine {
  align-items: flex-start;
}

/* Icon */
.contactType__icon {
  width: 16px;
  height: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contactType__iconImage {
  width: 16px;
  height: 16px;
  color: var(--contact-icon-color);
}

/* Content */
.contactType__content {
  flex: 1;
  min-width: 0;
}

/* Name */
.contactType__name {
  font-family: var(--contact-name-font-family);
  font-size: var(--contact-name-font-size);
  font-weight: var(--contact-name-font-weight);
  line-height: var(--contact-name-line-height);
  letter-spacing: var(--contact-name-letter-spacing);
  color: var(--contact-text-color);
}

/* Address */
.contactType__address {
  font-family: var(--contact-name-font-family);
  font-size: var(--contact-name-font-size);
  font-weight: var(--contact-name-font-weight);
  line-height: var(--contact-name-line-height);
  letter-spacing: var(--contact-name-letter-spacing);
  color: var(--contact-text-color);
  white-space: pre-wrap;
}

.contactType__mapLink {
  font-family: var(--contact-link-font-family);
  font-size: var(--contact-link-font-size);
  font-weight: var(--contact-link-font-weight);
  line-height: var(--contact-link-line-height);
  letter-spacing: var(--contact-link-letter-spacing);
  color: var(--contact-link-color);
  cursor: pointer;
  margin-top: 0;
}

.contactType__mapLink:hover {
  opacity: 0.8;
}

/* Email/Phone (with copy) */
.contactType__linkContainer {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  justify-content: space-between;
}

.contactType__link {
  font-family: var(--contact-link-font-family);
  font-size: var(--contact-link-font-size);
  font-weight: var(--contact-link-font-weight);
  line-height: var(--contact-link-line-height);
  letter-spacing: var(--contact-link-letter-spacing);
  color: var(--contact-link-color);
  cursor: pointer;
}

.contactType__link:hover {
  opacity: 0.8;
}

/* Reference (with copy) */
.contactType__referenceContainer {
  display: flex;
  align-items: center;
  gap: 6px;
}

.contactType__reference {
  font-family: var(--contact-name-font-family);
  font-size: var(--contact-name-font-size);
  font-weight: var(--contact-name-font-weight);
  line-height: var(--contact-name-line-height);
  letter-spacing: var(--contact-name-letter-spacing);
  color: var(--contact-text-color);
}

/* Copy icon */
.contactType__copyIcon {
  width: 16px;
  height: 16px;
  color: var(--contact-copy-icon-color);
  cursor: pointer;
  flex-shrink: 0;
}

.contactType__copyIcon:hover {
  opacity: 0.7;
}

.contactType__copyIcon:active {
  transform: scale(0.95);
}
```

### Contacts Container Styles

```css
.contacts {
  display: flex;
  flex-direction: column;
  gap: var(--contacts-gap);
  width: var(--contacts-width);
}

.contacts__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-content-primary: #032536;
  --color-content-link-2: #0EBA9E;
  --contact-gap: 12px;
  --contacts-gap: 24px;
  --contacts-width: 268px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-content-primary: #FFFFFF;
  /* link-2 remains constant */
}
```

## Usage Guidelines

### When to Use Contacts

**User Profiles:**
- Customer details
- Admin information
- Engineer profiles
- Partner contacts

**Entity Information:**
- Business contacts
- Property information
- Installation details
- Service locations

**Contact Cards:**
- Quick reference panels
- Sidebar information
- Modal details
- Profile pages

### Type Selection

**Name:**
- Person's full name
- Business name
- Entity identifier

**Address:**
- Physical location
- Installation address
- Service location
- Multi-line addresses

**Email:**
- Contact email addresses
- Support emails
- Business emails

**Phone:**
- Mobile numbers
- Landline numbers
- Contact numbers

**Reference:**
- Job reference IDs
- Customer reference codes
- Booking numbers
- System identifiers

## Best Practices

### Content Guidelines âœ“
1. **Format Consistency:** Use consistent formats (phone, address)
2. **Complete Information:** Provide all available contact details
3. **Valid Data:** Ensure email/phone are clickable/copyable
4. **Map Links:** Include Google Maps for addresses
5. **Reference Clarity:** Clear, copyable reference codes

### Visual Guidelines âœ“
1. **Icon Alignment:** Top-align for multi-line content
2. **Gap Consistency:** 12px icon-to-content, 24px between types
3. **Width Consistency:** 268px standard width
4. **Copy Affordance:** Show copy icon for copyable fields
5. **Link Styling:** Teal color indicates interactivity

### Interaction Guidelines âœ“
1. **Click to Action:** Email/phone click to open default app
2. **Copy to Clipboard:** Copy icon copies to clipboard
3. **Map Navigation:** Address link opens Google Maps
4. **Feedback:** Show confirmation when copying
5. **Error Handling:** Handle invalid/missing data gracefully

## Accessibility

### ARIA Attributes

```tsx
<div className="contacts" role="region" aria-label="Contact information">
  {/* Name */}
  <div className="contact-type">
    <span className="contact-icon" aria-hidden="true">
      <PersonIcon />
    </span>
    <span className="contact-value">Lily Sanders</span>
  </div>

  {/* Email with copy */}
  <div className="contact-type">
    <span className="contact-icon" aria-hidden="true">
      <EnvelopeIcon />
    </span>
    <a 
      href="mailto:lilysanders@gmail.com"
      className="contact-link"
    >
      lilysanders@gmail.com
    </a>
    <button
      onClick={copyEmail}
      aria-label="Copy email address"
      className="copy-icon"
    >
      <CopyIcon />
    </button>
  </div>

  {/* Phone with copy */}
  <div className="contact-type">
    <span className="contact-icon" aria-hidden="true">
      <PhoneIcon />
    </span>
    <a 
      href="tel:+447645353870"
      className="contact-link"
    >
      +44 7645 353 870
    </a>
    <button
      onClick={copyPhone}
      aria-label="Copy phone number"
      className="copy-icon"
    >
      <CopyIcon />
    </button>
  </div>

  {/* Address with map link */}
  <div className="contact-type">
    <span className="contact-icon" aria-hidden="true">
      <LocationIcon />
    </span>
    <div className="contact-address">
      <address>
        1875 Pogteh Center,<br />
        London, SW19 7HX
      </address>
      <a 
        href="https://maps.google.com/..."
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Google maps
      </a>
    </div>
  </div>

  {/* Reference with copy */}
  <div className="contact-type">
    <span className="contact-icon" aria-hidden="true">
      <IDCardIcon />
    </span>
    <span className="contact-value">BCOOQDO47N</span>
    <button
      onClick={copyReference}
      aria-label="Copy reference number"
      className="copy-icon"
    >
      <CopyIcon />
    </button>
  </div>
</div>
```

### Semantic HTML

```tsx
// Use semantic elements
<address>...</address> // For address content
<a href="mailto:...">...</a> // For email
<a href="tel:...">...</a> // For phone
```

## Advanced Patterns

### Copy to Clipboard with Toast

```tsx
const ContactsWithToast = ({ contactData }) => {
  const { showToast } = useToast();

  const handleCopy = async (value: string, field: string) => {
    try {
      await navigator.clipboard.writeText(value);
      showToast({
        type: 'Success',
        message: `${field} copied to clipboard`
      });
    } catch (err) {
      showToast({
        type: 'Error',
        message: 'Failed to copy'
      });
    }
  };

  return (
    <Contacts
      contactData={contactData}
      onCopyEmail={(email) => handleCopy(email, 'Email')}
      onCopyPhone={(phone) => handleCopy(phone, 'Phone')}
      onCopyReference={(ref) => handleCopy(ref, 'Reference')}
    />
  );
};
```

### Editable Contacts

```tsx
const EditableContacts = ({ initialData, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState(initialData);

  if (editMode) {
    return (
      <div className="editable-contacts">
        <Input
          label="Name"
          value={data.name}
          onChange={(v) => setData({...data, name: v})}
        />
        <Input
          label="Email"
          type="email"
          value={data.email}
          onChange={(v) => setData({...data, email: v})}
        />
        <Input
          label="Phone"
          type="tel"
          value={data.phone}
          onChange={(v) => setData({...data, phone: v})}
        />
        <div className="edit-actions">
          <Button onClick={() => { onUpdate(data); setEditMode(false); }}>
            Save
          </Button>
          <Button type="tertiary" onClick={() => setEditMode(false)}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Contacts contactData={data} />
      <Button onClick={() => setEditMode(true)}>Edit Contact</Button>
    </>
  );
};
```

### Conditional Contact Display

```tsx
const ConditionalContacts = ({ entity }) => {
  const contactData = {};

  // Only show available contact methods
  if (entity.name) contactData.name = entity.name;
  
  if (entity.address?.street) {
    contactData.address = {
      line1: entity.address.street,
      city: entity.address.city,
      postcode: entity.address.postcode,
      mapUrl: generateGoogleMapsUrl(entity.address)
    };
  }

  if (entity.email) contactData.email = entity.email;
  if (entity.phone) contactData.phone = entity.phone;
  if (entity.referenceId) contactData.reference = entity.referenceId;

  // Don't render if no contact info
  if (Object.keys(contactData).length === 0) {
    return <p>No contact information available</p>;
  }

  return <Contacts contactData={contactData} />;
};
```

### Multi-Contact Display

```tsx
const EngineerList = ({ engineers }) => {
  return (
    <div className="engineer-contacts-list">
      <h3>Assigned Engineers</h3>
      {engineers.map(engineer => (
        <div key={engineer.id} className="engineer-card">
          <Contacts
            platform="Connect"
            contactData={{
              name: engineer.name,
              email: engineer.email,
              phone: engineer.phone,
              reference: engineer.engineerId
            }}
          />
        </div>
      ))}
    </div>
  );
};
```

## Testing Checklist

### Visual Testing - Contact Type
- [ ] Icon size: 16Ã—16px within 24Ã—24px area
- [ ] Gap: 12px between icon and content
- [ ] Name: Plain text, dark blue (light) / white (dark)
- [ ] Address: Multi-line, dark blue (light) / white (dark)
- [ ] Address map link: Teal, below address lines
- [ ] Email: Teal text with copy icon
- [ ] Phone: Teal text with copy icon
- [ ] Reference: Dark blue (light) / white (dark) with teal copy icon
- [ ] Copy icon: 16Ã—16px, teal color
- [ ] Typography: 18px / 24px line-height
- [ ] All icons render correctly

### Visual Testing - Contacts
- [ ] Width: 268px
- [ ] Gap: 24px between contact types
- [ ] Vertical stack layout
- [ ] All contact types aligned consistently
- [ ] Icons align with first line of text

### Functional Testing
- [ ] Email link opens mail client
- [ ] Phone link initiates call
- [ ] Map link opens Google Maps in new tab
- [ ] Copy buttons copy to clipboard
- [ ] Copy feedback displays
- [ ] Missing fields handled gracefully
- [ ] Platform variants display correctly

### Accessibility Testing
- [ ] Contact region has aria-label
- [ ] Email links have href="mailto:"
- [ ] Phone links have href="tel:"
- [ ] Copy buttons have aria-label
- [ ] Icons are aria-hidden
- [ ] Semantic <address> for addresses
- [ ] Keyboard accessible copy buttons
- [ ] Focus indicators visible

### Mode Testing
- [ ] Icons adapt to mode
- [ ] Name text adapts to mode
- [ ] Address text adapts to mode
- [ ] Reference text adapts to mode
- [ ] Links remain teal (constant)
- [ ] Copy icons remain teal (constant)
- [ ] Smooth transitions between modes

## Related Components

### Composed From:
- **Icon Components** - Radix Objects (Person, Envelope, Phone, Location, ID Card)
- **Copy Icon** - Clipboard copy functionality

### Works With:
- **Modal** - Contact display in dialogs
- **Card** - Contact cards
- **Sidebar** - Quick reference panels
- **User Profile** - Profile contact sections

## Common Patterns

### Customer Contact Card

```tsx
const CustomerContactCard = ({ customer }) => {
  return (
    <div className="contact-card">
      <div className="card-header">
        <h3>Customer Details</h3>
        <Button type="tertiary" onClick={editCustomer}>
          Edit
        </Button>
      </div>
      <Contacts
        platform="Connect"
        contactData={{
          name: customer.name,
          address: customer.address,
          email: customer.email,
          phone: customer.phone,
          reference: customer.customerId
        }}
      />
    </div>
  );
};
```

### Installation Contact Info

```tsx
const InstallationContacts = ({ installation }) => {
  return (
    <div className="installation-contacts">
      <section>
        <h4>Customer</h4>
        <Contacts contactData={installation.customer} />
      </section>
      
      <section>
        <h4>Installation Address</h4>
        <ContactType
          type="address"
          value={installation.address}
        />
      </section>
      
      <section>
        <h4>Primary Engineer</h4>
        <Contacts contactData={installation.primaryEngineer} />
      </section>
    </div>
  );
};
```

### Sidebar Quick Reference

```tsx
const JobSidebarContacts = ({ job }) => {
  return (
    <aside className="job-sidebar">
      <div className="sidebar-section">
        <h3>Job Reference</h3>
        <ContactType
          type="reference"
          value={job.referenceCode}
          onCopy={() => copyToClipboard(job.referenceCode)}
        />
      </div>

      <div className="sidebar-section">
        <h3>Customer Contact</h3>
        <Contacts
          contactData={{
            name: job.customer.name,
            email: job.customer.email,
            phone: job.customer.phone
          }}
        />
      </div>

      <div className="sidebar-section">
        <h3>Installation Location</h3>
        <ContactType
          type="address"
          value={job.installationAddress}
        />
      </div>
    </aside>
  );
};
```

## Version History

- **v1.0** - Initial contacts system with Contact Type (5 types) and Contacts container

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
