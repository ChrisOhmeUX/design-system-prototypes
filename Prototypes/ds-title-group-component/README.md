# Title Group Component Documentation

## Overview

The Title Group component provides the page header section combining a title, optional icon, contextual pills, and action controls. It appears at the top of page content, below the header navigation, establishing page context and providing primary page actions.

**Component Type:** Functional Component  
**Category:** Page Layout / Headers  
**Token Integration:** Yes - uses content, button, and pill tokens  
**Variants:** 12 configurations (3 platforms Ã— 2 versions Ã— 2 sizes)

## Variant Matrix

| Platform | Version | Icon | Pills | Controls | Use Case |
|----------|---------|------|-------|----------|----------|
| **Shared Parking v1** | 1 | âœ“ 50px | - | Primary + Secondary | List pages (Locations) |
| **Shared Parking v2** | 2 | âœ“ 50px | - | Secondary only | Detail pages (Location detail) |
| **Connect v1** | 1 | âœ— | âœ“ Job + Channel | Icon buttons | Job detail pages |
| **Connect v2** | 2 | âœ— | - | Icon buttons | Simple pages (Jobs list) |
| **Volt v2** | 2 | âœ— | - | Search + Primary | User management pages |

## Design Specifications

### Desktop Dimensions

| Element | Width | Height | Gap |
|---------|-------|--------|-----|
| **Container** | 1584px | Auto (50-68px) | - |
| **Title** | Flex-grow | 51px line-height | 13px from icon |
| **Icon (when present)** | 50px | 50px | - |
| **Pills (when present)** | Auto | 32px | 13px from title |
| **Controls** | Auto | 48px (buttons) | 12px between buttons |

---

### Mobile Dimensions

| Element | Width | Height | Gap |
|---------|-------|--------|-----|
| **Container** | 290px | Auto | 24px vertical |
| **Title** | Full width | 36px line-height | 12px from icon |
| **Icon (when present)** | 24px | 24px | - |
| **Pills (when present)** | Auto | 32px | 12px stacked |
| **Controls** | Full width | 40px (buttons) | 12px stacked |

---

## Platform Configurations

### Shared Parking v1 (List Page)

**Desktop Layout:**
- Icon (50px location icon) + Title "Locations"
- Right-aligned: "Add location" (primary) + "More" (secondary)
- Width: 1584px

**Mobile Layout:**
- Icon (24px) + Title "Locations"
- Below: "Add location" button (full width)
- Stacked vertical layout

**Use Case:** Main locations list page

---

### Shared Parking v2 (Detail Page)

**Desktop Layout:**
- Icon (50px location icon) + Title "Elmwood Heights"
- Right-aligned: "More" (secondary only)
- Width: 1584px

**Mobile Layout:**
- Icon (24px) + Title "Elmwood Heights"
- Below: Two "More" buttons (side by side, 32px gap)
- Stacked vertical layout

**Use Case:** Individual location detail page

---

### Connect v1 (Job Detail)

**Desktop Layout:**
- Title "Service visit" + Job Type Pill + Channel Pill
- Right-aligned: Two icon-only buttons (More, Activity log)
- Width: 1584px
- Buttons: 12px gap

**Mobile Layout:**
- Title "Service visit" (28px)
- Below: Job Type + Channel pills (12px gap, stacked)
- Below: Two icon-only buttons (12px gap)
- Vertical stack, 32px gaps

**Pills:**
- Job Type: Dark blue background (inverse), "Standard Installation"
- Channel: White background, "Motobility"

**Use Case:** Job detail page with job type and channel context

---

### Connect v2 (Simple Page)

**Mobile Only:**
- Title "Jobs" (28px)
- Below: Two secondary buttons with icons ("Part P", "Export List")
- Vertical stack, 8px title gap, 40px height buttons

**Use Case:** Jobs list or simple content pages

---

### Volt v2 (User Management)

**Desktop Layout:**
- Title "Company settings"
- Search input (260px, "Search users")
- "Add a user" button (primary with plus icon)
- Horizontal row, 24px gaps, bottom-aligned

**Mobile Layout:**
- Title "Company settings" (28px)
- Below: Search input (260px, "Search users")
- Below: "Add a user" button (full width)
- Vertical stack, 24px gaps

**Use Case:** User management, settings pages with search

---

## Color System

### Title Text

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Content** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Desktop Typography:** Roobert Medium, 44px / 51px, 0.5px letter-spacing  
**Mobile Typography:** Roobert Medium, 28px / 36px, 0.5px letter-spacing

---

### Icon

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Stroke** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Desktop Size:** 50Ã—50px  
**Mobile Size:** 24Ã—24px

---

### Pills

**Job Type Pill (Inverse):**
- Surface: `pill/intent/job-type/surface` â†’ ohmedarkblue (light) / white (dark) â†’ #032536 / #FFFFFF
- Content: `pill/intent/job-type/content` â†’ white (light) / ohmedarkblue (dark) â†’ #FFFFFF / #032536

**Channel Pill (Standard):**
- Surface: white (light) / varies (dark)
- Content: `content/primary` â†’ ohmedarkblue (light) / white (dark)
- Border: 1px solid (optional)

---

### Buttons

Uses standard Button component tokens:
- **Primary:** Teal background, dark blue text
- **Secondary:** White background, dark blue border/text
- **Icon-only:** 40Ã—40px or 48Ã—48px

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Title Group Container */
--title-group-width-desktop: 1584px;
--title-group-width-mobile: 290px;
--title-group-gap-desktop: 24px;
--title-group-gap-mobile: 24px;

/* Title Group Layout */
--title-group-title-gap: 13px; /* Title to icon */
--title-group-pill-gap: 13px; /* Title to pills */
--title-group-control-gap: 12px; /* Between control buttons */

/* Title Text Desktop */
--title-group-title-desktop-font-family: var(--typography-font-family-Roobert);
--title-group-title-desktop-font-size: 44px;
--title-group-title-desktop-font-weight: var(--typography-font-weight-medium);
--title-group-title-desktop-line-height: 51px;
--title-group-title-desktop-letter-spacing: 0.5px;
--title-group-title-desktop-color: var(--color-content-primary);

/* Title Text Mobile */
--title-group-title-mobile-font-family: var(--typography-font-family-Roobert);
--title-group-title-mobile-font-size: 28px;
--title-group-title-mobile-font-weight: var(--typography-font-weight-medium);
--title-group-title-mobile-line-height: 36px;
--title-group-title-mobile-letter-spacing: 0.5px;
--title-group-title-mobile-color: var(--color-content-primary);

/* Title Icon */
--title-group-icon-size-desktop: 50px;
--title-group-icon-size-mobile: 24px;
--title-group-icon-stroke: var(--color-content-primary);

/* Search Input (Volt variant) */
--title-group-search-width: 260px;
--title-group-search-height: 48px;
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `typography/font-weight/medium` | - | - | 500 | 500 |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/ohmedarkblue` | #032536 | Title text (light), icon stroke (light) |
| `color/brand/white` | #FFFFFF | Title text (dark), icon stroke (dark) |
| `Values/space/space-6x` | 24px | Section gaps |
| `Values/space/space-3x` | 12px | Control button gaps |

---

## Anatomy

```
Title Group Component
â””â”€â”€ Container (1584px desktop, 290px mobile)
    â”œâ”€â”€ Layout: Horizontal (desktop), Vertical (mobile)
    â””â”€â”€ Content
        â”œâ”€â”€ Title Section (Left/Top)
        â”‚   â”œâ”€â”€ Icon (optional, 50px desktop, 24px mobile)
        â”‚   â”œâ”€â”€ Title Text
        â”‚   â”‚   â”œâ”€â”€ Desktop: 44px / 51px Medium
        â”‚   â”‚   â””â”€â”€ Mobile: 28px / 36px Medium
        â”‚   â””â”€â”€ Pills (optional, Connect variant)
        â”‚       â”œâ”€â”€ Job Type Pill (inverse colors)
        â”‚       â””â”€â”€ Channel Pill (standard)
        â””â”€â”€ Controls Section (Right/Bottom)
            â”œâ”€â”€ Version 1: Primary + Secondary buttons
            â”œâ”€â”€ Version 2: Secondary buttons or icon-only
            â””â”€â”€ Volt: Search input + Primary button
```

---

## Component Properties

```typescript
type TitleGroupProps = {
  className?: string;
  platform?: "Connect" | "Shared parking" | "Volt" | "Dealer portal" | "Hub";
  version?: "1" | "2";
  mobile?: boolean;
  
  // Title section
  title: string;
  icon?: React.ReactNode | string;
  
  // Pills (Connect variant)
  jobTypePill?: string;
  channelPill?: string;
  
  // Controls
  primaryAction?: {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
  };
  secondaryActions?: Array<{
    label?: string;
    icon: React.ReactNode;
    onClick: () => void;
  }>;
  
  // Volt variant
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
};
```

### Property: `platform` (string, optional)
The portal platform variant.

**Values:**
- `"Shared parking"` - Location-focused layout
- `"Connect"` - Job-focused layout with pills
- `"Volt"` - Settings layout with search
- `"Dealer portal"`, `"Hub"` - Similar patterns

**Default:** `"Shared parking"`

---

### Property: `version` (string, optional)
Visual variant within platform.

**Values:**
- `"1"` - Full controls (list pages)
- `"2"` - Simplified controls (detail pages)

**Default:** `"1"`

**Differences:**
- v1: Multiple action buttons
- v2: Reduced actions (often just "More")

---

### Property: `title` (string, required)
The page title text.

**Examples:**
- "Locations" (list page)
- "Elmwood Heights" (detail page)
- "Service visit" (job type)
- "Company settings" (settings page)
- "Jobs" (list page)

---

### Property: `icon` (ReactNode or string, optional)
Icon displayed before title.

**Size:**
- Desktop: 50Ã—50px
- Mobile: 24Ã—24px

**Common Icons:**
- Location icon (map marker)
- Building icon
- Settings icon

---

## Implementation Examples

### Shared Parking - List Page

```tsx
import TitleGroup from '@/components/functional/TitleGroup';

// Desktop
<TitleGroup
  platform="Shared parking"
  version="1"
  mobile={false}
  title="Locations"
  icon={<LocationIcon />}
  primaryAction={{
    label: "Add location",
    icon: <PlusIcon />,
    onClick: () => openAddLocationModal()
  }}
  secondaryActions={[
    {
      label: "More",
      icon: <DotsVerticalIcon />,
      onClick: () => openMoreMenu()
    }
  ]}
/>

// Mobile
<TitleGroup
  platform="Shared parking"
  version="1"
  mobile={true}
  title="Locations"
  icon={<LocationIcon />}
  primaryAction={{
    label: "Add location",
    onClick: () => openAddLocationModal()
  }}
/>
```

### Shared Parking - Detail Page

```tsx
// Desktop
<TitleGroup
  platform="Shared parking"
  version="2"
  mobile={false}
  title="Elmwood Heights"
  icon={<LocationIcon />}
  secondaryActions={[
    {
      label: "More",
      icon: <DotsVerticalIcon />,
      onClick: () => openMoreMenu()
    }
  ]}
/>

// Mobile
<TitleGroup
  platform="Shared parking"
  version="2"
  mobile={true}
  title="Elmwood Heights"
  icon={<LocationIcon />}
  secondaryActions={[
    {
      label: "More",
      icon: <DotsVerticalIcon />,
      onClick: () => openAction1()
    },
    {
      label: "More",
      icon: <DotsVerticalIcon />,
      onClick: () => openAction2()
    }
  ]}
/>
```

### Connect - Job Detail

```tsx
// Desktop
<TitleGroup
  platform="Connect"
  version="1"
  mobile={false}
  title="Service visit"
  jobTypePill="Standard Installation"
  channelPill="Motobility"
  secondaryActions={[
    {
      icon: <DotsVerticalIcon />,
      onClick: () => openMoreMenu()
    },
    {
      icon: <ActivityIcon />,
      onClick: () => openActivityLog()
    }
  ]}
/>

// Mobile
<TitleGroup
  platform="Connect"
  version="1"
  mobile={true}
  title="Service visit"
  jobTypePill="Standard Installation"
  channelPill="Motobility"
  secondaryActions={[
    {
      icon: <DotsVerticalIcon />,
      onClick: () => openMoreMenu()
    },
    {
      icon: <ActivityIcon />,
      onClick: () => openActivityLog()
    }
  ]}
/>
```

### Connect v2 - Simple Page

```tsx
// Mobile
<TitleGroup
  platform="Connect"
  version="2"
  mobile={true}
  title="Jobs"
  secondaryActions={[
    {
      label: "Part P",
      icon: <DownloadIcon />,
      onClick: () => downloadPartP()
    },
    {
      label: "Export List",
      icon: <DownloadIcon />,
      onClick: () => exportList()
    }
  ]}
/>
```

### Volt v2 - User Management

```tsx
// Desktop
<TitleGroup
  platform="Volt"
  version="2"
  mobile={false}
  title="Company settings"
  searchValue={searchQuery}
  onSearchChange={setSearchQuery}
  searchPlaceholder="Search users"
  primaryAction={{
    label: "Add a user",
    icon: <PlusIcon />,
    onClick: () => openAddUserModal()
  }}
/>

// Mobile
<TitleGroup
  platform="Volt"
  version="2"
  mobile={true}
  title="Company settings"
  searchValue={searchQuery}
  onSearchChange={setSearchQuery}
  searchPlaceholder="Search users"
  primaryAction={{
    label: "Add a user",
    icon: <PlusIcon />,
    onClick: () => openAddUserModal()
  }}
/>
```

---

# CSS Implementation

## Title Group Container

```css
.titleGroup {
  display: flex;
  align-items: flex-end; /* Bottom-align for desktop horizontal */
  justify-content: space-between;
}

.titleGroup--desktop {
  width: var(--title-group-width-desktop);
  flex-direction: row;
  gap: var(--title-group-gap-desktop);
}

.titleGroup--mobile {
  width: var(--title-group-width-mobile);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--title-group-gap-mobile);
}

/* Title section */
.titleGroup__titleSection {
  display: flex;
  align-items: center;
  gap: var(--title-group-title-gap);
  flex: 1;
}

.titleGroup--mobile .titleGroup__titleSection {
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

/* Icon */
.titleGroup__icon {
  flex-shrink: 0;
}

.titleGroup--desktop .titleGroup__icon {
  width: var(--title-group-icon-size-desktop);
  height: var(--title-group-icon-size-desktop);
}

.titleGroup--mobile .titleGroup__icon {
  width: var(--title-group-icon-size-mobile);
  height: var(--title-group-icon-size-mobile);
}

/* Title text */
.titleGroup__title {
  font-family: var(--title-group-title-desktop-font-family);
  font-weight: var(--title-group-title-desktop-font-weight);
  letter-spacing: var(--title-group-title-desktop-letter-spacing);
  color: var(--title-group-title-desktop-color);
  white-space: nowrap;
}

.titleGroup--desktop .titleGroup__title {
  font-size: var(--title-group-title-desktop-font-size);
  line-height: var(--title-group-title-desktop-line-height);
}

.titleGroup--mobile .titleGroup__title {
  font-size: var(--title-group-title-mobile-font-size);
  line-height: var(--title-group-title-mobile-line-height);
}

/* Pills */
.titleGroup__pills {
  display: flex;
  gap: var(--title-group-pill-gap);
  align-items: center;
}

.titleGroup--mobile .titleGroup__pills {
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

/* Controls */
.titleGroup__controls {
  display: flex;
  gap: var(--title-group-control-gap);
  align-items: center;
}

.titleGroup--mobile .titleGroup__controls {
  width: 100%;
  flex-direction: column;
  gap: 12px;
}

.titleGroup--mobile .titleGroup__controls > button {
  width: 100%;
}

/* Volt variant specific */
.titleGroup--volt .titleGroup__controls {
  gap: 24px;
  align-items: flex-end;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-content-primary: #032536;
  --title-group-width-desktop: 1584px;
  --title-group-width-mobile: 290px;
  --title-group-icon-size-desktop: 50px;
  --title-group-icon-size-mobile: 24px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-content-primary: #FFFFFF;
  /* Spacing remains constant */
}
```

---

# Usage Guidelines

## When to Use Title Group

**List Pages:**
- Page showing multiple items
- Primary action: "Add [item]"
- Secondary actions: "More", "Export"
- Example: Locations list, Jobs list

**Detail Pages:**
- Page showing single item
- Title is item name
- Reduced controls (often just "More")
- Example: Location detail, User detail

**Settings Pages:**
- Configuration/management pages
- Often includes search
- Primary action: "Add" or "Save"
- Example: Company settings, User management

**Job/Entity Pages:**
- Specific entity with context
- Pills show type/category
- Icon-only actions for space
- Example: Job detail with type and channel

## Variant Selection Guide

**Use Version 1 When:**
- List page with add functionality
- Multiple primary actions needed
- Full control set required

**Use Version 2 When:**
- Detail page (single item)
- Minimal controls needed
- Simplified interface preferred

**Include Icon When:**
- Entity has standard icon (location, building)
- Visual reinforcement helpful
- Branding important

**Include Pills When:**
- Contextual categorization needed (job type)
- Channel/source identification important
- Multiple attributes to display

**Include Search When:**
- Large datasets need filtering
- User management pages
- Settings with many items

## Best Practices

### Content Guidelines âœ“
1. **Concise Titles:** 1-4 words typically
2. **Specific Names:** Use entity names for detail pages
3. **Action Clarity:** Clear button labels
4. **Icon Consistency:** Same icon for same entity type
5. **Pill Relevance:** Only show necessary context pills

### Visual Guidelines âœ“
1. **Desktop Horizontal:** Title and controls on same line
2. **Mobile Vertical:** Stack title above controls
3. **Bottom Alignment:** Desktop controls align to bottom
4. **Icon Scale:** Larger desktop (50px), smaller mobile (24px)
5. **Button Sizing:** Standard 48px desktop, 40px mobile

### Interaction Guidelines âœ“
1. **Primary Action:** Most important action (Add, Save)
2. **Secondary Actions:** Additional options (More, Export)
3. **Icon-Only:** Space-constrained contexts
4. **Search Integration:** Volt variant combines search
5. **Responsive Stacking:** Mobile stacks all elements

---

# Accessibility

## ARIA Attributes

```tsx
<div className="title-group" role="region" aria-labelledby="page-title">
  {/* Title section */}
  <div className="title-section">
    {icon && (
      <div className="title-icon" aria-hidden="true">
        {icon}
      </div>
    )}
    
    <h1 id="page-title" className="title-text">
      {title}
    </h1>
    
    {/* Pills */}
    {jobTypePill && (
      <div role="status" aria-label={`Job type: ${jobTypePill}`}>
        <JobTypePill type={jobTypePill} />
      </div>
    )}
    
    {channelPill && (
      <div role="status" aria-label={`Channel: ${channelPill}`}>
        <Pill label={channelPill} />
      </div>
    )}
  </div>

  {/* Controls */}
  <div className="controls">
    {searchValue !== undefined && (
      <Input
        type="search"
        value={searchValue}
        onChange={onSearchChange}
        placeholder={searchPlaceholder}
        aria-label={searchPlaceholder}
      />
    )}
    
    {primaryAction && (
      <Button
        type="Primary"
        onClick={primaryAction.onClick}
        icon={primaryAction.icon}
      >
        {primaryAction.label}
      </Button>
    )}
    
    {secondaryActions?.map((action, idx) => (
      <Button
        key={idx}
        type="Secondary"
        onClick={action.onClick}
        icon={action.icon}
        aria-label={action.label || `Action ${idx + 1}`}
      >
        {action.label}
      </Button>
    ))}
  </div>
</div>
```

---

# Advanced Patterns

### Breadcrumb Integration

```tsx
const TitleGroupWithBreadcrumbs = ({ breadcrumbs, title, ...props }) => {
  return (
    <div className="page-header">
      <Breadcrumbs items={breadcrumbs} />
      
      <TitleGroup
        title={title}
        {...props}
      />
    </div>
  );
};

// Usage
<TitleGroupWithBreadcrumbs
  breadcrumbs={[
    { label: 'Locations', href: '/locations' },
    { label: 'Elmwood Heights', current: true }
  ]}
  title="Elmwood Heights"
  platform="Shared parking"
  version="2"
  icon={<LocationIcon />}
/>
```

### Dynamic Action Menu

```tsx
const TitleGroupWithDynamicMenu = ({ entity, permissions }) => {
  const getAvailableActions = () => {
    const actions = [];
    
    if (permissions.canEdit) {
      actions.push({
        label: "Edit",
        icon: <EditIcon />,
        onClick: () => editEntity(entity.id)
      });
    }
    
    if (permissions.canDelete) {
      actions.push({
        label: "Delete",
        icon: <DeleteIcon />,
        onClick: () => deleteEntity(entity.id)
      });
    }
    
    if (permissions.canExport) {
      actions.push({
        label: "Export",
        icon: <DownloadIcon />,
        onClick: () => exportEntity(entity.id)
      });
    }
    
    return actions;
  };

  return (
    <TitleGroup
      title={entity.name}
      icon={<getEntityIcon(entity.type) />}
      secondaryActions={getAvailableActions()}
    />
  );
};
```

### Title Group with Live Search

```tsx
const TitleGroupWithLiveSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch]);

  return (
    <TitleGroup
      platform="Volt"
      version="2"
      title="Company settings"
      searchValue={searchQuery}
      onSearchChange={setSearchQuery}
      searchPlaceholder="Search users"
      primaryAction={{
        label: "Add a user",
        icon: <PlusIcon />,
        onClick: openAddUserModal
      }}
    />
  );
};
```

### Responsive Title Group

```tsx
const ResponsiveTitleGroup = (props) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <TitleGroup
      {...props}
      mobile={isMobile}
    />
  );
};
```

---

# Testing Checklist

## Visual Testing - Desktop
- [ ] Container: 1584px width
- [ ] Title: 44px / 51px Medium
- [ ] Icon: 50Ã—50px (when present)
- [ ] Gap: 13px icon to title
- [ ] Gap: 13px title to pills
- [ ] Gap: 12px between control buttons
- [ ] Pills: 32px height (when present)
- [ ] Buttons: 48px height
- [ ] Horizontal layout
- [ ] Bottom-aligned controls

## Visual Testing - Mobile
- [ ] Container: 290px width
- [ ] Title: 28px / 36px Medium
- [ ] Icon: 24Ã—24px (when present)
- [ ] Gap: 12px icon to title
- [ ] Gap: 24px vertical sections
- [ ] Pills: Stacked 12px gap
- [ ] Buttons: 40px height
- [ ] Full width buttons
- [ ] Vertical stack layout

## Visual Testing - All Variants
- [ ] Shared Parking v1: Icon + title + primary + secondary
- [ ] Shared Parking v2: Icon + title + secondary only
- [ ] Connect v1: Title + pills + icon buttons
- [ ] Connect v2: Title + labeled buttons
- [ ] Volt v2: Title + search + primary
- [ ] Text: Dark blue (light) / white (dark)
- [ ] Icons: Match text color

## Functional Testing
- [ ] Title displays correctly
- [ ] Icon renders (when present)
- [ ] Pills display (Connect variant)
- [ ] Primary action button works
- [ ] Secondary action buttons work
- [ ] Icon-only buttons work
- [ ] Search input works (Volt variant)
- [ ] More menu opens
- [ ] Responsive layout switches

## Accessibility Testing
- [ ] Title has h1 or appropriate heading level
- [ ] Title has id for aria-labelledby
- [ ] Region has aria-labelledby
- [ ] Icon is aria-hidden
- [ ] Pills have role="status"
- [ ] Buttons have aria-label
- [ ] Icon-only buttons have clear labels
- [ ] Search has aria-label
- [ ] Keyboard accessible

## Mode Testing
- [ ] Title text adapts to mode
- [ ] Icon stroke adapts to mode
- [ ] Pills adapt per component tokens
- [ ] Buttons adapt per component tokens
- [ ] Search input adapts
- [ ] Smooth transitions between modes

---

# Related Components

### Composed From:
- **Icon** - Title icons (location, building, etc.)
- **Button (Primary)** - Primary actions
- **Button (Secondary)** - Secondary actions
- **Pill (Job Type)** - Job context (Connect)
- **Pill (Standard)** - Channel context (Connect)
- **Input** - Search field (Volt variant)

### Works With:
- **Header** - Positioned below main header
- **Status Bar** - May appear below title group
- **Page Content** - Establishes context for page
- **Breadcrumbs** - Can be integrated above

---

# Common Patterns

## List Page Title Group

```tsx
const ListPageTitleGroup = ({ entityType, onAdd, onMore }) => {
  const config = {
    locations: {
      title: 'Locations',
      icon: <LocationIcon />,
      addLabel: 'Add location'
    },
    jobs: {
      title: 'Jobs',
      icon: null,
      addLabel: 'Schedule job'
    },
    users: {
      title: 'Users',
      icon: null,
      addLabel: 'Add user'
    }
  };

  const { title, icon, addLabel } = config[entityType];

  return (
    <TitleGroup
      platform="Shared parking"
      version="1"
      title={title}
      icon={icon}
      primaryAction={{
        label: addLabel,
        icon: <PlusIcon />,
        onClick: onAdd
      }}
      secondaryActions={[
        {
          label: "More",
          icon: <DotsVerticalIcon />,
          onClick: onMore
        }
      ]}
    />
  );
};
```

## Detail Page Title Group

```tsx
const DetailPageTitleGroup = ({ entity, onEdit, onDelete, onMore }) => {
  return (
    <TitleGroup
      platform="Shared parking"
      version="2"
      title={entity.name}
      icon={<getEntityIcon(entity.type) />}
      secondaryActions={[
        {
          label: "More",
          icon: <DotsVerticalIcon />,
          onClick: onMore
        }
      ]}
    />
  );
};
```

## Job Detail Title Group

```tsx
const JobDetailTitleGroup = ({ job }) => {
  return (
    <TitleGroup
      platform="Connect"
      version="1"
      title={job.visitType}
      jobTypePill={job.jobType}
      channelPill={job.channel}
      secondaryActions={[
        {
          icon: <DotsVerticalIcon />,
          onClick: openJobMenu
        },
        {
          icon: <ActivityIcon />,
          onClick: () => navigate(`/jobs/${job.id}/activity`)
        }
      ]}
    />
  );
};
```

---

# Version History

- **v1.0** - Initial title group component with platform variants

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
