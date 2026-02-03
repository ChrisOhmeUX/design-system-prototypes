# Tab System Documentation

## Overview

The Tab system provides three distinct tab components for different navigation contexts: modern tab groups with background highlighting, legacy table tabs with underlines and counts, and the tab group container. Each serves specific use cases across the Ohme portal products.

**Component Type:** Functional Component  
**Category:** Navigation  
**Token Integration:** Yes - uses tab state tokens  
**System Components:** Tab (new style), Table Tab (old style), Tab Group (container)

---

# Part 1: Tab Component (New Style)

## Overview

The new Tab component is a modern, pill-style navigation element with background highlighting for the active state. Used within Tab Group containers.

**Variants:** 2 (Active, Inactive)  
**Height:** 40px  
**Padding:** 8px (all sides)  
**Corner Radius:** 6px  
**Gap:** 12px (between icon and label)

## Design Specifications

### Dimensions
- **Height:** 40px
- **Padding:** 8px (inline and stack) â†’ `tab/size/md/padding-inline` and `tab/size/md/padding-stack`
- **Corner Radius:** 6px â†’ `tab/size/md/radius`
- **Icon Size:** 24Ã—24px
- **Gap:** 12px â†’ `tab/size/md/gap`

### Visual Properties
- **Layout:** Horizontal flex
- **Typography:** Roobert Regular, 18px / 24px
- **Letter Spacing:** 0.2px
- **Alignment:** Left with icon
- **Icon:** Radix Objects (Pin icon shown)

## Color System - Tab (New Style)

### Default State (Inactive)

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `tab/new/state/default/surface` | `surface/base` | smokeyblue | lakeblue | #F5F8FA | #0B2539 |
| **Content** | `tab/new/state/default/content` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Indicator** | `tab/new/state/default/indicator` | `brand/clear` | transparent | transparent | Transparent | Transparent |

**Visual Result:**
- Light mode: Light blue/grey background, dark blue text
- Dark mode: Dark blue background, white text

---

### Selected State (Active)

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `tab/new/state/selected/surface` | `teal100` | teal100 | teal900 | #C0FFF6 | #003A37 |
| **Content** | `tab/new/state/selected/content` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Indicator** | `tab/new/state/selected/indicator` | `interactive/primary/surface` | highlighterteal | highlighterteal | #00FFD6 | #00FFD6 |

**Visual Result:**
- Light mode: Light teal background, dark blue text
- Dark mode: Dark teal background, white text

---

# Part 2: Table Tab Component (Old Style)

## Overview

The Table Tab is a legacy-style tab with icon, label, count badge, and bottom underline indicator. Used in table contexts for filtering or categorizing data.

**Variants:** 12 (2 selected states Ã— 3 count colors Ã— 2 sizes)  
**Height:** 40px  
**Underline:** 2px (when selected)

## Design Specifications

### Dimensions
- **Height:** 40px
- **Icon Size:** 24Ã—24px
- **Gap:** Auto-spacing between icon, label, count
- **Count Badge:** Inline with label
- **Underline Width:** Full tab width
- **Underline Height:** 2px (selected state only)

### Visual Properties
- **Layout:** Horizontal flex with icon, label, count
- **Typography:** Roobert SemiBold, 18px / 24px
- **Letter Spacing:** 0.2px
- **Icon:** Radix Components (List, Envelope, Flag icons shown)
- **Underline Position:** Bottom edge

## Color System - Table Tab (Old Style)

### Default State (Unselected)

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `tab/old/state/default/surface` | `surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Border** | `tab/old/state/default/border` | `border/subtle` | grey100 | grey700 | #E5E8E8 | #647882 |
| **Content** | `tab/old/state/default/content` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- No underline visible
- Light mode: White background, dark blue text
- Dark mode: Dark blue background, white text

---

### Selected State

| Property | Tier 3 Token | â†’ Tier 2 | Resolves To | Hex Value |
|----------|-------------|----------|-------------|-----------|
| **Surface** | `tab/old/state/selected/surface` | `surface/canvas` | (mode-aware) | #FFFFFF / #032536 |
| **Border** | `tab/old/state/selected/border` | `teal700` | teal700 | #0EBA9E |
| **Content** | `tab/old/state/selected/content` | `content/primary` | (mode-aware) | #032536 / #FFFFFF |

**Visual Result:**
- Teal underline (2px, constant both modes)
- Same background and text as default

---

### Count Colors

**Teal Count:**

| Property | Token Reference | Resolves To | Hex Value |
|----------|----------------|-------------|-----------|
| **Count** | `tab/old/count-colour/green` | teal700 | #0EBA9E |

**Black Count:**

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Count** | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Red Count:**

| Property | Token Reference | Resolves To | Hex Value |
|----------|----------------|-------------|-----------|
| **Count** | (likely `state/error/border`) | rosered | #FA1460 |

---

# Part 3: Tab Group Component

## Overview

Tab Group is a container component that displays multiple Tab components in a horizontal row, managing the active state across the group.

**Variants:** 4 (2, 3, 4, or 5 tabs)  
**Layout:** Horizontal flex  
**Height:** 56px (container)  
**Gap:** Auto (tabs fit within container)

## Design Specifications

### Dimensions
- **Container Height:** 56px
- **Individual Tab:** 40px height (8px padding creates spacing)
- **Layout:** Horizontal flex, wrapping if needed
- **Gap:** Managed by tab padding

### Visual Properties
- **Composition:** Contains multiple Tab components
- **Active Management:** One tab active at a time
- **Responsive:** Can adapt number of visible tabs

## Tab Group Specifications

| Configuration | Tab Count | Width (approx) | Active Position |
|--------------|-----------|----------------|-----------------|
| **Tabs=2** | 2 tabs | 418px | First tab (typically) |
| **Tabs=3** | 3 tabs | 627px | Second tab (example) |
| **Tabs=4** | 4 tabs | 836px | Third tab (example) |
| **Tabs=5** | 5 tabs | 1045px | Fourth tab (example) |

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Tab (New Style) Size */
--tab-size-md-padding-inline: var(--value-spacing-axis-aware-inline-md);
--tab-size-md-padding-stack: var(--value-spacing-axis-aware-stack-md);
--tab-size-md-gap: var(--value-spacing-gap-lg);
--tab-size-md-radius: var(--value-corner-radii-md);

/* Tab (New Style) - Default State */
--tab-new-state-default-surface: var(--color-surface-base);
--tab-new-state-default-indicator: var(--color-brand-clear);
--tab-new-state-default-content: var(--color-content-primary);

/* Tab (New Style) - Selected State */
--tab-new-state-selected-surface: var(--color-secondary-teal100);
--tab-new-state-selected-indicator: var(--color-interactive-primary-surface);
--tab-new-state-selected-content: var(--color-content-primary);

/* Table Tab (Old Style) - Default State */
--tab-old-state-default-surface: var(--color-surface-canvas);
--tab-old-state-default-border: var(--color-border-subtle);
--tab-old-state-default-content: var(--color-content-primary);

/* Table Tab (Old Style) - Selected State */
--tab-old-state-selected-surface: var(--color-surface-canvas);
--tab-old-state-selected-border: var(--color-secondary-teal700);
--tab-old-state-selected-content: var(--color-content-primary);

/* Count Colors */
--tab-old-count-teal: var(--color-secondary-teal700);
--tab-old-count-black: var(--color-content-primary);
--tab-old-count-red: var(--color-state-error-border);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/base` | smokeyblue | lakeblue | #F5F8FA | #0B2539 |
| `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/secondary/teal100` | teal100 | teal900 | #C0FFF6 | #003A37 |
| `color/secondary/teal700` | teal700 | teal700 | #0EBA9E | #0EBA9E |
| `color/interactive/primary/surface` | highlighterteal | highlighterteal | #00FFD6 | #00FFD6 |
| `color/border/subtle` | grey100 | grey700 | #E5E8E8 | #647882 |
| `color/brand/clear` | transparent | transparent | Transparent | Transparent |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/tertiary/smokeyblue` | #F5F8FA | Tab default surface (light) |
| `color/tertiary/lakeblue` | #0B2539 | Tab default surface (dark) |
| `color/brand/white` | #FFFFFF | Table tab surface (light) |
| `color/brand/ohmedarkblue` | #032536 | Tab content (light), table surface (dark) |
| `color/secondary/teal100` | #C0FFF6 | Tab selected surface (light) |
| `color/secondary/teal900` | #003A37 | Tab selected surface (dark) |
| `color/secondary/teal700` | #0EBA9E | Table tab underline, teal count |
| `color/brand/highlighterteal` | #00FFD6 | Tab indicator |
| `color/secondary/grey100` | #E5E8E8 | Table tab border (light) |
| `color/secondary/grey700` | #647882 | Table tab border (dark) |
| `Values/space/space-2x` | 8px | Tab padding |
| `Values/space/space-3x` | 12px | Tab gap |
| `Values/corner radii/radius-1halfx` | 6px | Tab corner radius |

## Component Properties

### Tab (New Style)

```typescript
type TabProps = {
  className?: string;
  active?: boolean;
  label: string;
  icon?: string; // Icon name from Radix Objects
  onClick?: () => void;
};
```

### Table Tab (Old Style)

```typescript
type TableTabProps = {
  className?: string;
  selected?: boolean;
  countColour?: "Teal" | "Black" | "Red";
  mobile?: boolean;
  label: string;
  count?: number;
  icon?: string; // Icon name from Radix Components
  onClick?: () => void;
};
```

### Tab Group

```typescript
type TabGroupProps = {
  className?: string;
  tabs?: "2" | "3" | "4" | "5";
  activeTab: number;
  onTabChange: (index: number) => void;
  tabConfigs: TabConfig[];
};

type TabConfig = {
  label: string;
  icon?: string;
};
```

## Implementation Examples

### Basic Tab (New Style)

```tsx
import Tab from '@/components/functional/Tab';

// Inactive tab
<Tab 
  active={false}
  label="Company details"
  icon="Pin"
/>

// Active tab
<Tab 
  active={true}
  label="Company details"
  icon="Pin"
/>
```

### Tab Group Usage

```tsx
import TabGroup from '@/components/functional/TabGroup';

const [activeTab, setActiveTab] = useState(0);

<TabGroup
  tabs="3"
  activeTab={activeTab}
  onTabChange={setActiveTab}
  tabConfigs={[
    { label: 'Company details', icon: 'Pin' },
    { label: 'Contact info', icon: 'Envelope' },
    { label: 'Settings', icon: 'Gear' }
  ]}
/>
```

### Table Tab Usage

```tsx
import TableTab from '@/components/functional/TableTab';

const [selectedTab, setSelectedTab] = useState('all');

<div className="table-tabs">
  <TableTab
    selected={selectedTab === 'all'}
    label="All"
    count={82}
    countColour="Teal"
    icon="List"
    onClick={() => setSelectedTab('all')}
  />
  <TableTab
    selected={selectedTab === 'messages'}
    label="Messages"
    count={17}
    countColour="Black"
    icon="Envelope"
    onClick={() => setSelectedTab('messages')}
  />
  <TableTab
    selected={selectedTab === 'flagged'}
    label="Flagged"
    count={17}
    countColour="Red"
    icon="Flag"
    onClick={() => setSelectedTab('flagged')}
  />
</div>
```

### Controlled Tab Group

```tsx
const [currentView, setCurrentView] = useState(0);

const views = [
  { label: 'Overview', icon: 'Dashboard' },
  { label: 'Details', icon: 'File Text' },
  { label: 'History', icon: 'Clock' }
];

<TabGroup
  tabs="3"
  activeTab={currentView}
  onTabChange={setCurrentView}
  tabConfigs={views}
/>

{/* Render content based on currentView */}
<div className="tab-content">
  {currentView === 0 && <OverviewPanel />}
  {currentView === 1 && <DetailsPanel />}
  {currentView === 2 && <HistoryPanel />}
</div>
```

### Responsive Table Tabs

```tsx
const ResponsiveTableTabs = ({ data }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [selected, setSelected] = useState('all');

  return (
    <div className="table-tabs">
      <TableTab
        mobile={isMobile}
        selected={selected === 'all'}
        label="All"
        count={data.all.length}
        countColour="Teal"
        icon="List"
        onClick={() => setSelected('all')}
      />
      <TableTab
        mobile={isMobile}
        selected={selected === 'active'}
        label="Active"
        count={data.active.length}
        countColour="Black"
        icon="Check"
        onClick={() => setSelected('active')}
      />
    </div>
  );
};
```

## CSS Implementation

### Tab (New Style)

```css
.tab {
  display: flex;
  align-items: center;
  gap: var(--tab-size-md-gap);
  padding: var(--tab-size-md-padding-stack) 
           var(--tab-size-md-padding-inline);
  border-radius: var(--tab-size-md-radius);
  cursor: pointer;
  transition: background 200ms ease;
  
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-18);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
}

.tab--inactive {
  background: var(--tab-new-state-default-surface);
  color: var(--tab-new-state-default-content);
}

.tab--active {
  background: var(--tab-new-state-selected-surface);
  color: var(--tab-new-state-selected-content);
}

.tab__icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.tab:hover:not(.tab--active) {
  opacity: 0.8;
}

.tab:focus {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
```

### Table Tab (Old Style)

```css
.tableTab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  position: relative;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: border-color 200ms ease;
  
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-18);
  font-weight: var(--typography-font-weight-semibold);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
  color: var(--tab-old-state-default-content);
}

.tableTab--selected {
  border-bottom-color: var(--tab-old-state-selected-border);
}

.tableTab__icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.tableTab__label {
  color: var(--color-content-primary);
}

.tableTab__count {
  font-weight: var(--typography-font-weight-semibold);
}

.tableTab__count--teal {
  color: var(--color-secondary-teal700);
}

.tableTab__count--black {
  color: var(--color-content-primary);
}

.tableTab__count--red {
  color: var(--color-state-error-border);
}

.tableTab:hover:not(.tableTab--selected) {
  opacity: 0.7;
}
```

### Tab Group

```css
.tabGroup {
  display: flex;
  align-items: center;
  height: 56px;
  gap: 0;
}

.tabGroup__tab {
  /* Individual tabs use Tab component styles */
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-surface-base: #F5F8FA;
  --color-surface-canvas: #FFFFFF;
  --color-content-primary: #032536;
  --color-secondary-teal100: #C0FFF6;
  --color-secondary-teal700: #0EBA9E;
  --color-interactive-primary-surface: #00FFD6;
  --color-border-subtle: #E5E8E8;
  --color-brand-clear: transparent;
  --tab-size-md-padding-inline: 8px;
  --tab-size-md-padding-stack: 8px;
  --tab-size-md-gap: 12px;
  --tab-size-md-radius: 6px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-surface-base: #0B2539;
  --color-surface-canvas: #032536;
  --color-content-primary: #FFFFFF;
  --color-secondary-teal100: #003A37;
  --color-border-subtle: #647882;
  /* teal700, highlighterteal, and clear remain constant */
}
```

## Usage Guidelines

### When to Use Tab (New Style)

**Modern Navigation:**
- Page-level navigation
- Section switching
- View toggles
- Settings categories

**Visual Emphasis:**
- When active state needs strong visual feedback
- When background highlighting improves clarity
- Modern, card-based layouts

### When to Use Table Tab (Old Style)

**Data Filtering:**
- Table data categories
- Status filters
- Count-based categories
- Legacy interfaces

**List Management:**
- Inbox-style navigation
- Item categorization
- Multi-category views

### When to Use Tab Group

**Multiple Options:**
- 2-5 related views
- Mutually exclusive content areas
- Horizontal navigation preferred
- Desktop-first contexts

## Best Practices

### Content Guidelines âœ“
1. **Short Labels:** 1-2 words ideal
2. **Parallel Structure:** Keep label format consistent
3. **Clear Meaning:** Unambiguous category names
4. **Logical Order:** Most used first
5. **Icons Optional:** Use when they add clarity

### Visual Guidelines âœ“
1. **One Active:** Only one tab active at a time
2. **Visual Feedback:** Clear active state indication
3. **Adequate Spacing:** Don't crowd tabs together
4. **Icon Consistency:** Use icons across all tabs or none
5. **Responsive:** Consider mobile layouts

### Interaction Guidelines âœ“
1. **Click Anywhere:** Entire tab is clickable
2. **Keyboard Nav:** Arrow keys to navigate
3. **Initial Selection:** Pre-select most common tab
4. **Content Loading:** Show loading state when switching
5. **URL Sync:** Consider updating URL with active tab

## Accessibility

### ARIA Attributes

```tsx
// Tab Group
<div role="tablist" aria-label="Main navigation">
  <button
    role="tab"
    aria-selected={activeTab === 0}
    aria-controls="panel-0"
    id="tab-0"
    onClick={() => setActiveTab(0)}
  >
    <Tab active={activeTab === 0} label="Overview" />
  </button>
  <button
    role="tab"
    aria-selected={activeTab === 1}
    aria-controls="panel-1"
    id="tab-1"
    onClick={() => setActiveTab(1)}
  >
    <Tab active={activeTab === 1} label="Details" />
  </button>
</div>

<div
  role="tabpanel"
  id="panel-0"
  aria-labelledby="tab-0"
  hidden={activeTab !== 0}
>
  {/* Panel content */}
</div>
```

### Keyboard Navigation

```tsx
const TabGroup = ({ tabs, activeTab, onTabChange }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const tabCount = parseInt(tabs);
    
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      onTabChange((activeTab + 1) % tabCount);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onTabChange((activeTab - 1 + tabCount) % tabCount);
    } else if (e.key === 'Home') {
      e.preventDefault();
      onTabChange(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      onTabChange(tabCount - 1);
    }
  };

  // Implementation...
};
```

### Focus Management

```tsx
useEffect(() => {
  // Focus active tab when selection changes
  const activeTabElement = document.querySelector('[role="tab"][aria-selected="true"]');
  activeTabElement?.focus();
}, [activeTab]);
```

## Advanced Patterns

### Lazy Loading Tab Content

```tsx
const LazyTabGroup = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [loadedTabs, setLoadedTabs] = useState(new Set([0]));

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    if (!loadedTabs.has(index)) {
      setLoadedTabs(prev => new Set([...prev, index]));
    }
  };

  return (
    <>
      <TabGroup
        activeTab={activeTab}
        onTabChange={handleTabChange}
        {...props}
      />
      <div className="tab-panels">
        {loadedTabs.has(0) && <Panel0 hidden={activeTab !== 0} />}
        {loadedTabs.has(1) && <Panel1 hidden={activeTab !== 1} />}
        {loadedTabs.has(2) && <Panel2 hidden={activeTab !== 2} />}
      </div>
    </>
  );
};
```

### Table Tabs with Dynamic Counts

```tsx
const DynamicTableTabs = ({ data }) => {
  const [selected, setSelected] = useState('all');

  const tabs = [
    { key: 'all', label: 'All', count: data.length, color: 'Teal', icon: 'List' },
    { key: 'unread', label: 'Unread', count: data.filter(d => !d.read).length, color: 'Black', icon: 'Envelope' },
    { key: 'flagged', label: 'Flagged', count: data.filter(d => d.flagged).length, color: 'Red', icon: 'Flag' }
  ];

  return (
    <div className="table-tabs">
      {tabs.map(tab => (
        <TableTab
          key={tab.key}
          selected={selected === tab.key}
          label={tab.label}
          count={tab.count}
          countColour={tab.color}
          icon={tab.icon}
          onClick={() => setSelected(tab.key)}
        />
      ))}
    </div>
  );
};
```

### Responsive Tab Overflow

```tsx
const ResponsiveTabGroup = ({ tabs }) => {
  const [visibleTabs, setVisibleTabs] = useState(tabs.length);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const tabWidth = 200; // approximate
      setVisibleTabs(Math.floor(containerWidth / tabWidth));
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
    <div ref={containerRef} className="tab-group-responsive">
      {tabs.slice(0, visibleTabs).map((tab, i) => (
        <Tab key={i} {...tab} />
      ))}
      {tabs.length > visibleTabs && (
        <Dropdown
          options={tabs.slice(visibleTabs)}
          label="More"
        />
      )}
    </div>
  );
};
```

### Tabs with URL Routing

```tsx
const RoutedTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'overview';

  const tabIndex = {
    'overview': 0,
    'details': 1,
    'settings': 2
  }[activeTab];

  const handleTabChange = (index: number) => {
    const tabName = ['overview', 'details', 'settings'][index];
    setSearchParams({ tab: tabName });
  };

  return (
    <TabGroup
      tabs="3"
      activeTab={tabIndex}
      onTabChange={handleTabChange}
      tabConfigs={[
        { label: 'Overview', icon: 'Dashboard' },
        { label: 'Details', icon: 'File' },
        { label: 'Settings', icon: 'Gear' }
      ]}
    />
  );
};
```

## Testing Checklist

### Visual Testing - Tab (New)
- [ ] Inactive: Light grey/blue background (light) / dark blue (dark)
- [ ] Active: Teal background in both modes
- [ ] Height: 40px
- [ ] Padding: 8px all sides
- [ ] Gap: 12px between icon and label
- [ ] Corner radius: 6px
- [ ] Icon: 24Ã—24px
- [ ] Typography: 18px / 24px line-height
- [ ] Text color adapts to mode

### Visual Testing - Table Tab
- [ ] Unselected: No underline
- [ ] Selected: Teal 2px underline (constant both modes)
- [ ] Icon: 24Ã—24px
- [ ] Label: Dark blue (light) / white (dark)
- [ ] Count colors: Teal (#0EBA9E), Black (mode-aware), Red (#FA1460)
- [ ] Mobile variant renders correctly
- [ ] Typography: SemiBold 18px / 24px

### Visual Testing - Tab Group
- [ ] Container height: 56px
- [ ] Tabs arranged horizontally
- [ ] One tab active at a time
- [ ] Active tab shows teal background
- [ ] Inactive tabs show grey background
- [ ] Responsive to different tab counts (2-5)

### Functional Testing
- [ ] Click tab changes active state
- [ ] Tab group manages single selection
- [ ] Table tab click triggers callback
- [ ] Count displays correctly
- [ ] Icons render properly
- [ ] Active state persists correctly

### Accessibility Testing
- [ ] role="tablist" on container
- [ ] role="tab" on each tab
- [ ] aria-selected indicates active tab
- [ ] aria-controls links to panel
- [ ] Keyboard arrow navigation works
- [ ] Home/End keys navigate to first/last
- [ ] Focus visible on all tabs
- [ ] Screen reader announces selection

### Mode Testing
- [ ] Tab inactive: Correct in light mode
- [ ] Tab inactive: Correct in dark mode
- [ ] Tab active: Teal background inverts correctly
- [ ] Table tab: Text adapts to mode
- [ ] Table tab: Underline constant in both modes
- [ ] Table tab: Count colors correct
- [ ] Smooth transitions between modes

## Related Components

### Composed From/With:
- **Tab** - Used within Tab Group
- **Icon Components** - Radix Objects and Components
- **Button** - Similar interaction patterns

### Works With:
- **Panel/Container** - Tab content areas
- **Dropdown** - Overflow menu for many tabs
- **Badge/Count** - Table tab counts

## Common Patterns

### Settings Tabs

```tsx
const SettingsTabs = () => {
  const [section, setSection] = useState(0);

  return (
    <div className="settings-page">
      <TabGroup
        tabs="4"
        activeTab={section}
        onTabChange={setSection}
        tabConfigs={[
          { label: 'Profile', icon: 'Person' },
          { label: 'Account', icon: 'Gear' },
          { label: 'Billing', icon: 'Credit Card' },
          { label: 'Notifications', icon: 'Bell' }
        ]}
      />
      <div className="settings-content">
        {/* Content panels */}
      </div>
    </div>
  );
};
```

### Data Table with Filters

```tsx
const DataTableWithTabs = ({ data }) => {
  const [filter, setFilter] = useState('all');

  const filteredData = {
    all: data,
    active: data.filter(d => d.status === 'active'),
    pending: data.filter(d => d.status === 'pending'),
    completed: data.filter(d => d.status === 'completed')
  };

  return (
    <>
      <div className="table-tabs">
        <TableTab
          selected={filter === 'all'}
          label="All"
          count={filteredData.all.length}
          countColour="Teal"
          onClick={() => setFilter('all')}
        />
        <TableTab
          selected={filter === 'active'}
          label="Active"
          count={filteredData.active.length}
          countColour="Black"
          onClick={() => setFilter('active')}
        />
        <TableTab
          selected={filter === 'pending'}
          label="Pending"
          count={filteredData.pending.length}
          countColour="Black"
          onClick={() => setFilter('pending')}
        />
        <TableTab
          selected={filter === 'completed'}
          label="Completed"
          count={filteredData.completed.length}
          countColour="Teal"
          onClick={() => setFilter('completed')}
        />
      </div>
      <DataTable data={filteredData[filter]} />
    </>
  );
};
```

## Version History

- **v1.0** - Initial tab system with Tab (new style), Table Tab (old style), and Tab Group components

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
