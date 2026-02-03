# Toggle and Switch System Documentation

## Overview

The Toggle and Switch system provides three distinct components for different selection contexts: binary on/off switches, multi-option toggle buttons, and individual toggle button segments. Each serves specific interaction patterns across the Ohme portal products.

**Component Type:** Functional Components  
**Category:** Form Controls / Navigation  
**Token Integration:** Yes - uses switch state and content tokens  
**System Components:** Toggle Switch (binary), Toggle Button (multi-option), Toggle (individual segment)

---

# Part 1: Toggle Switch (Binary Choice)

## Overview

Toggle Switch provides a clear on/off control for binary settings. It uses a sliding thumb within a track to indicate state changes.

**Variants:** 8 (2 states Ã— 2 sizes Ã— 2 icon options)  
**Component Type:** Binary control (on/off)

## Design Specifications

### Size Dimensions

| Size | Track Width | Track Height | Thumb Diameter | Gap |
|------|-------------|--------------|----------------|-----|
| **Large** | 56px | 32px | 30px | 4px (xxs) |
| **Small** | 40px | 24px | 22px | 4px (xxs) |

### Visual Properties
- **Track Shape:** Pill-shaped (rounded ends)
- **Thumb Shape:** Circular
- **Border Width:** 1px
- **Track Radius:** 100px (full pill) â†’ `switch/size/lg/radius`
- **Animation:** Smooth slide transition (200ms)
- **Icon Size:** Varies by size (optional)

## Color System - Toggle Switch

### Inactive State (Off)

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Track Surface** | `switch/state/inactive/track/surface` | `surface/subtle` | grey100 | voidblue | #E5E8E8 | #1D2A54 |
| **Track Border** | `switch/state/inactive/track/border` | `border/brand` | ohmedarkblue | ohmedarkblue | #032536 | #032536 |
| **Thumb Surface** | `switch/state/inactive/thumb/surface` | `surface/base` | smokeyblue | lakeblue | #F5F8FA | #0B2539 |
| **Thumb Border** | `switch/state/inactive/thumb/border` | `border/default` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |
| **Thumb Icon** | `switch/state/inactive/thumb/icon` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Light mode: Light grey track, light blue/grey thumb
- Dark mode: Dark blue track, medium dark blue thumb
- Track border: Dark blue (constant)
- Thumb border: Light grey (constant)

---

### Active State (On)

| Property | Tier 3 Token | â†’ Tier 2 | Resolves To | Hex Value |
|----------|-------------|----------|-------------|-----------|
| **Track Surface** | `switch/state/active/track/surface` | `surface/accent` | highlighterteal | #00FFD6 |
| **Track Border** | `switch/state/active/track/border` | `surface/brand` | ohmedarkblue | #032536 |
| **Thumb Surface** | `switch/state/active/thumb/surface` | `surface/canvas` | (mode-aware) | #FFFFFF / #032536 |
| **Thumb Border** | `switch/state/active/thumb/border` | `secondary/teal700` | teal700 | #0EBA9E |
| **Thumb Icon** | `switch/state/active/thumb/icon` | `content/primary` | (mode-aware) | #032536 / #FFFFFF |

**Visual Result:**
- Both modes: Bright teal track
- Light mode: White thumb with teal border
- Dark mode: Dark blue thumb with teal border
- Track border: Dark blue (constant)

---

# Part 2: Toggle (Individual Button Segment)

## Overview

Toggle is the individual button segment used within Toggle Button groups. It represents a single option in a multi-option selection set.

**Variants:** 36 (3 sizes Ã— 3 positions Ã— 2 states Ã— 2 divider options)

## Design Specifications

### Size Dimensions

| Size | Height | Padding H | Padding V | Typography |
|------|--------|-----------|-----------|------------|
| **Large** | 48px | 16px | 12px | 18px / 24px |
| **Medium** | 40px | 16px | 8px | 18px / 24px |
| **Small** | 32px | 12px | 6px | 14px / 20px |

### Visual Properties
- **Font:** Roobert SemiBold
- **Letter Spacing:** 0.2px (large/medium), 0.1px (small)
- **Text Alignment:** Center
- **Border Width:** 1px
- **Position-based Radius:** Left (left corners), Middle (no corners), Right (right corners)

### Position Variants

| Position | Left Radius | Right Radius | Left Border | Right Border |
|----------|-------------|--------------|-------------|--------------|
| **Left** | 6px | 0px | 1px all sides | No right border (if divider) |
| **Middle** | 0px | 0px | Top/Bottom/Left | No right border (if divider) |
| **Right** | 0px | 6px | All sides | 1px all sides |

## Color System - Toggle (Individual Button)

### Active State (Not Selected)

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Border** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Content** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Light mode: White background, dark blue border and text
- Dark mode: Dark blue background, white border and text

---

### Select State (Selected)

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/surface/inverse` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Border** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Content** | `color/content/inverse` | white | ohmedarkblue | #FFFFFF | #032536 |

**Visual Result:**
- Light mode: Dark blue background, white text
- Dark mode: White background, dark blue text
- Border remains same color as active state

---

# Part 3: Toggle Button (Multi-Option Group)

## Overview

Toggle Button is a container that groups multiple Toggle components into a segmented control for selecting one option from a set.

**Variants:** 6 configurations (2-7 options)  
**Height:** 48px (large toggles)

## Design Specifications

### Configuration Options

| Options | Width (approx) | Segments | Active Index |
|---------|---------------|----------|--------------|
| **2** | 178px | 2 Ã— 89px | First (typically) |
| **3** | 267px | 3 Ã— 89px | Variable |
| **4** | 356px | 4 Ã— 89px | Variable |
| **5** | 445px | 5 Ã— 89px | Variable |
| **6** | 534px | 6 Ã— 89px | Variable |
| **7** | 623px | 7 Ã— 89px | Variable |

### Visual Properties
- **Layout:** Horizontal flex, equal-width segments
- **Border:** Continuous 1px border around entire group
- **Corner Radius:** 6px on outer corners only
- **Dividers:** 1px vertical lines between segments (optional)
- **Selection:** One segment selected at a time

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Toggle Switch - Large */
--switch-size-lg-track-width: 56px;
--switch-size-lg-track-height: 32px;
--switch-size-lg-gap: var(--value-spacing-gap-xxs);
--switch-size-lg-radius: var(--value-corner-radii-full);
--switch-size-lg-thumb-diameter: 30px;

/* Toggle Switch - Small */
--switch-size-sm-track-width: 40px;
--switch-size-sm-track-height: 24px;
--switch-size-sm-gap: var(--value-spacing-gap-xxs);
--switch-size-sm-radius: var(--value-corner-radii-full);
--switch-size-sm-thumb-diameter: 22px;

/* Switch - Inactive State */
--switch-state-inactive-track-surface: var(--color-surface-subtle);
--switch-state-inactive-track-border: var(--color-border-brand);
--switch-state-inactive-thumb-surface: var(--color-surface-base);
--switch-state-inactive-thumb-border: var(--color-border-default);
--switch-state-inactive-thumb-icon: var(--color-content-primary);

/* Switch - Active State */
--switch-state-active-track-surface: var(--color-surface-accent);
--switch-state-active-track-border: var(--color-surface-brand);
--switch-state-active-thumb-surface: var(--color-surface-canvas);
--switch-state-active-thumb-border: var(--color-secondary-teal700);
--switch-state-active-thumb-icon: var(--color-content-primary);

/* Toggle Button - Individual Toggle */
--toggle-padding-inline-large: 16px;
--toggle-padding-stack-large: 12px;
--toggle-padding-inline-medium: 16px;
--toggle-padding-stack-medium: 8px;
--toggle-padding-inline-small: 12px;
--toggle-padding-stack-small: 6px;
--toggle-border-radius: 6px;
--toggle-border-width: 1px;

/* Toggle - Active State */
--toggle-active-surface: var(--color-surface-canvas);
--toggle-active-border: var(--color-content-primary);
--toggle-active-content: var(--color-content-primary);

/* Toggle - Selected State */
--toggle-selected-surface: var(--color-surface-inverse);
--toggle-selected-border: var(--color-content-primary);
--toggle-selected-content: var(--color-content-inverse);
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/subtle` | grey100 | voidblue | #E5E8E8 | #1D2A54 |
| `color/surface/base` | smokeyblue | lakeblue | #F5F8FA | #0B2539 |
| `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/surface/accent` | highlighterteal | highlighterteal | #00FFD6 | #00FFD6 |
| `color/surface/brand` | ohmedarkblue | ohmedarkblue | #032536 | #032536 |
| `color/surface/inverse` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/inverse` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/border/default` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |
| `color/border/brand` | ohmedarkblue | ohmedarkblue | #032536 | #032536 |
| `color/secondary/teal700` | teal700 | teal700 | #0EBA9E | #0EBA9E |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/white` | #FFFFFF | Thumb surface (active light), canvas (light) |
| `color/brand/ohmedarkblue` | #032536 | Track border, brand surface, content (light) |
| `color/brand/highlighterteal` | #00FFD6 | Active track surface |
| `color/secondary/grey100` | #E5E8E8 | Track surface inactive (light) |
| `color/tertiary/voidblue` | #1D2A54 | Track surface inactive (dark) |
| `color/tertiary/smokeyblue` | #F5F8FA | Thumb surface inactive (light) |
| `color/tertiary/lakeblue` | #0B2539 | Thumb surface inactive (dark) |
| `color/secondary/grey300` | #ADB3B1 | Thumb border inactive |
| `color/secondary/teal700` | #0EBA9E | Thumb border active |
| `Values/corner radii/radius-max` | 100px | Switch track/thumb radius |
| `Values/corner radii/radius-1halfx` | 6px | Toggle button radius |
| `Values/space/space-1x` | 4px | Switch gap (xxs) |

## Component Properties

### Toggle Switch

```typescript
type ToggleSwitchProps = {
  className?: string;
  state?: boolean; // true = on, false = off
  size?: "Large" | "Small";
  icon?: boolean;
  onChange?: (state: boolean) => void;
  disabled?: boolean;
  label?: string;
};
```

### Toggle (Individual Button)

```typescript
type ToggleProps = {
  className?: string;
  size?: "large" | "medium" | "small";
  position?: "Left" | "Middle" | "right";
  state?: "Active" | "select";
  divider?: boolean;
  label: string;
  onClick?: () => void;
};
```

### Toggle Button (Group)

```typescript
type ToggleButtonProps = {
  className?: string;
  options?: "2" | "3" | "4" | "5" | "6" | "7";
  selectedIndex: number;
  onSelectionChange: (index: number) => void;
  optionLabels: string[];
  size?: "large" | "medium" | "small";
};
```

## Implementation Examples

### Toggle Switch - Basic Usage

```tsx
import ToggleSwitch from '@/components/core/ToggleSwitch';

// Large switch
const [isEnabled, setIsEnabled] = useState(false);

<ToggleSwitch
  state={isEnabled}
  size="Large"
  onChange={setIsEnabled}
  label="Enable notifications"
/>

// Small switch with icon
<ToggleSwitch
  state={isEnabled}
  size="Small"
  icon={true}
  onChange={setIsEnabled}
  label="Dark mode"
/>
```

### Toggle Switch - With Label

```tsx
const SettingToggle = ({ setting, value, onChange }) => {
  return (
    <div className="setting-row">
      <div className="setting-info">
        <h3>{setting.label}</h3>
        <p>{setting.description}</p>
      </div>
      <ToggleSwitch
        state={value}
        size="Large"
        onChange={onChange}
      />
    </div>
  );
};
```

### Toggle Button - Basic Usage

```tsx
import ToggleButton from '@/components/functional/ToggleButton';

const [selectedView, setSelectedView] = useState(0);

// 2 options
<ToggleButton
  options="2"
  selectedIndex={selectedView}
  onSelectionChange={setSelectedView}
  optionLabels={['Grid', 'List']}
/>

// 3 options
<ToggleButton
  options="3"
  selectedIndex={selectedView}
  onSelectionChange={setSelectedView}
  optionLabels={['Day', 'Week', 'Month']}
/>
```

### Toggle Button - View Switcher

```tsx
const ViewSwitcher = () => {
  const [view, setView] = useState(0);
  const views = ['Overview', 'Details', 'Analytics', 'Settings'];

  return (
    <div>
      <ToggleButton
        options="4"
        selectedIndex={view}
        onSelectionChange={setView}
        optionLabels={views}
        size="large"
      />
      <div className="view-content">
        {view === 0 && <OverviewView />}
        {view === 1 && <DetailsView />}
        {view === 2 && <AnalyticsView />}
        {view === 3 && <SettingsView />}
      </div>
    </div>
  );
};
```

### Individual Toggle Usage

```tsx
// Used within ToggleButton group
const CustomToggleButton = ({ options, selected, onSelect }) => {
  return (
    <div className="toggle-button-group">
      {options.map((option, index) => (
        <Toggle
          key={index}
          size="large"
          position={index === 0 ? "Left" : index === options.length - 1 ? "right" : "Middle"}
          state={selected === index ? "select" : "Active"}
          divider={index < options.length - 1}
          label={option}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
};
```

## CSS Implementation

### Toggle Switch

```css
.toggleSwitch {
  position: relative;
  display: inline-flex;
  cursor: pointer;
}

.toggleSwitch__track {
  position: relative;
  border-radius: var(--value-corner-radii-full);
  border: 1px solid;
  transition: all 200ms ease;
}

/* Large size */
.toggleSwitch__track--large {
  width: 56px;
  height: 32px;
}

/* Small size */
.toggleSwitch__track--small {
  width: 40px;
  height: 24px;
}

/* Inactive state */
.toggleSwitch--inactive .toggleSwitch__track {
  background: var(--switch-state-inactive-track-surface);
  border-color: var(--switch-state-inactive-track-border);
}

/* Active state */
.toggleSwitch--active .toggleSwitch__track {
  background: var(--switch-state-active-track-surface);
  border-color: var(--switch-state-active-track-border);
}

/* Thumb */
.toggleSwitch__thumb {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: var(--value-corner-radii-full);
  border: 1px solid;
  transition: all 200ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Large thumb */
.toggleSwitch__thumb--large {
  width: 30px;
  height: 30px;
}

/* Small thumb */
.toggleSwitch__thumb--small {
  width: 22px;
  height: 22px;
}

/* Inactive thumb */
.toggleSwitch--inactive .toggleSwitch__thumb {
  left: 1px;
  background: var(--switch-state-inactive-thumb-surface);
  border-color: var(--switch-state-inactive-thumb-border);
}

/* Active thumb - Large */
.toggleSwitch--active.toggleSwitch--large .toggleSwitch__thumb {
  left: calc(100% - 31px); /* 56px - 30px - 1px border */
  background: var(--switch-state-active-thumb-surface);
  border-color: var(--switch-state-active-thumb-border);
}

/* Active thumb - Small */
.toggleSwitch--active.toggleSwitch--small .toggleSwitch__thumb {
  left: calc(100% - 23px); /* 40px - 22px - 1px border */
  background: var(--switch-state-active-thumb-surface);
  border-color: var(--switch-state-active-thumb-border);
}

/* Icon */
.toggleSwitch__icon {
  width: 16px;
  height: 16px;
  color: var(--switch-state-inactive-thumb-icon);
}

.toggleSwitch--active .toggleSwitch__icon {
  color: var(--switch-state-active-thumb-icon);
}

/* Disabled */
.toggleSwitch--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Toggle (Individual Button)

```css
.toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-content-primary);
  cursor: pointer;
  transition: all 200ms ease;
  
  font-family: var(--typography-font-family-Roobert);
  font-weight: var(--typography-font-weight-semibold);
  text-align: center;
}

/* Size variants */
.toggle--large {
  height: 48px;
  padding: 12px 16px;
  font-size: var(--typography-font-size-18);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
}

.toggle--medium {
  height: 40px;
  padding: 8px 16px;
  font-size: var(--typography-font-size-18);
  line-height: var(--typography-line-height-24);
  letter-spacing: var(--typography-letter-spacing-0dot2);
}

.toggle--small {
  height: 32px;
  padding: 6px 12px;
  font-size: var(--typography-font-size-14);
  line-height: var(--typography-line-height-20);
  letter-spacing: var(--typography-letter-spacing-0dot1);
}

/* Position variants */
.toggle--left {
  border-radius: 6px 0 0 6px;
}

.toggle--middle {
  border-radius: 0;
}

.toggle--right {
  border-radius: 0 6px 6px 0;
}

/* Divider (remove right border) */
.toggle--divider {
  border-right: none;
}

/* State variants */
.toggle--active {
  background: var(--toggle-active-surface);
  border-color: var(--toggle-active-border);
  color: var(--toggle-active-content);
}

.toggle--selected {
  background: var(--toggle-selected-surface);
  border-color: var(--toggle-selected-border);
  color: var(--toggle-selected-content);
}

.toggle:hover:not(.toggle--selected) {
  background: var(--color-surface-subtle);
}
```

### Toggle Button Group

```css
.toggleButtonGroup {
  display: inline-flex;
  border-radius: var(--value-corner-radii-md);
}

.toggleButtonGroup .toggle:first-child {
  border-radius: 6px 0 0 6px;
}

.toggleButtonGroup .toggle:last-child {
  border-radius: 0 6px 6px 0;
  border-right: 1px solid var(--color-content-primary);
}

.toggleButtonGroup .toggle:not(:last-child) {
  border-right: none;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-surface-subtle: #E5E8E8;
  --color-surface-base: #F5F8FA;
  --color-surface-canvas: #FFFFFF;
  --color-surface-accent: #00FFD6;
  --color-surface-brand: #032536;
  --color-surface-inverse: #032536;
  --color-content-primary: #032536;
  --color-content-inverse: #FFFFFF;
  --color-border-default: #ADB3B1;
  --color-border-brand: #032536;
  --color-secondary-teal700: #0EBA9E;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-surface-subtle: #1D2A54;
  --color-surface-base: #0B2539;
  --color-surface-canvas: #032536;
  --color-surface-inverse: #FFFFFF;
  --color-content-primary: #FFFFFF;
  --color-content-inverse: #032536;
  /* Accent, brand surface, borders remain constant */
}
```

## Usage Guidelines

### When to Use Toggle Switch

**Binary Settings:**
- Enable/disable features
- On/off preferences
- Show/hide options
- Active/inactive states

**Immediate Effect:**
- Changes take effect immediately
- No submit button needed
- Clear on/off states

### When to Use Toggle Button

**View Modes:**
- Grid vs List view
- Chart types
- Display formats
- Sorting options

**Mutually Exclusive Options:**
- 2-7 related options
- Single selection required
- Equal-weight choices
- Horizontal space available

### When NOT to Use

**Toggle Switch:**
- Multiple options (use toggle button or radio)
- Actions requiring confirmation (use button)
- More than 2 states (use dropdown or radio)

**Toggle Button:**
- Many options (>7): Use dropdown
- Single option: Use checkbox or switch
- Actions (not states): Use regular buttons

## Best Practices

### Toggle Switch Guidelines âœ“
1. **Clear Labels:** Describe what switch controls
2. **Immediate Feedback:** Visual state change on toggle
3. **Default State:** Choose sensible default (usually off)
4. **Icon Usage:** Add icons for enhanced recognition
5. **Size Selection:** Large for primary controls, small for compact layouts

### Toggle Button Guidelines âœ“
1. **Equal Weight:** All options should be equally important
2. **Short Labels:** 1-2 words per option
3. **Logical Order:** Arrange options sensibly
4. **One Selection:** Always maintain one selected option
5. **Responsive:** Consider stacking on mobile for >4 options

### Visual Guidelines âœ“
1. **Clear Active State:** Selected option visually distinct
2. **Adequate Spacing:** Don't crowd toggle buttons
3. **Consistent Sizing:** Use same size within context
4. **Touch Targets:** Minimum 44Ã—44px for mobile
5. **Hover Feedback:** Show hover state on inactive toggles

## Accessibility

### Toggle Switch ARIA

```tsx
<div className="setting-control">
  <label htmlFor="notifications-switch">
    Enable notifications
  </label>
  <button
    id="notifications-switch"
    role="switch"
    aria-checked={isEnabled}
    onClick={() => setIsEnabled(!isEnabled)}
    className="toggleSwitch"
  >
    <span className="sr-only">
      {isEnabled ? 'On' : 'Off'}
    </span>
  </button>
</div>
```

### Toggle Button ARIA

```tsx
<div 
  role="group" 
  aria-label="View mode"
  className="toggleButtonGroup"
>
  {options.map((option, index) => (
    <button
      key={index}
      role="radio"
      aria-checked={selectedIndex === index}
      onClick={() => onSelectionChange(index)}
      className={`toggle ${selectedIndex === index ? 'toggle--selected' : 'toggle--active'}`}
    >
      {option}
    </button>
  ))}
</div>
```

### Keyboard Navigation

**Toggle Switch:**
- **Space/Enter:** Toggle on/off
- **Tab:** Navigate to next control

**Toggle Button:**
- **Arrow Left/Right:** Navigate between options
- **Space/Enter:** Select focused option
- **Tab:** Navigate to next control group

## Advanced Patterns

### Toggle Switch with Confirmation

```tsx
const ConfirmToggle = ({ initialState, onConfirm }) => {
  const [state, setState] = useState(initialState);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleToggle = (newState: boolean) => {
    if (newState && !initialState) {
      setShowConfirm(true);
    } else {
      setState(newState);
      onConfirm(newState);
    }
  };

  return (
    <>
      <ToggleSwitch
        state={state}
        size="Large"
        onChange={handleToggle}
      />
      {showConfirm && (
        <Modal
          title="Enable Feature?"
          onConfirm={() => {
            setState(true);
            onConfirm(true);
            setShowConfirm(false);
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
};
```

### Toggle Button with Icons

```tsx
const ViewToggle = ({ view, onViewChange }) => {
  return (
    <div className="toggle-button-group">
      <Toggle
        size="large"
        position="Left"
        state={view === 'grid' ? "select" : "Active"}
        label="Grid"
        onClick={() => onViewChange('grid')}
      />
      <Toggle
        size="large"
        position="Middle"
        state={view === 'list' ? "select" : "Active"}
        label="List"
        onClick={() => onViewChange('list')}
        divider={true}
      />
      <Toggle
        size="large"
        position="right"
        state={view === 'table' ? "select" : "Active"}
        label="Table"
        onClick={() => onViewChange('table')}
        divider={true}
      />
    </div>
  );
};
```

### Responsive Toggle Button

```tsx
const ResponsiveToggle = ({ options, selected, onChange }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  if (isMobile && options.length > 3) {
    // Use dropdown for mobile with many options
    return (
      <Dropdown
        value={selected}
        onChange={onChange}
        options={options.map((opt, i) => ({ value: i, label: opt }))}
      />
    );
  }

  return (
    <ToggleButton
      options={options.length.toString()}
      selectedIndex={selected}
      onSelectionChange={onChange}
      optionLabels={options}
      size={isMobile ? "medium" : "large"}
    />
  );
};
```

### Settings Panel with Switches

```tsx
const SettingsPanel = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    autoSave: false,
    darkMode: false,
    analytics: true
  });

  const updateSetting = (key: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="settings-panel">
      <div className="setting-row">
        <label>Enable Notifications</label>
        <ToggleSwitch
          state={settings.notifications}
          size="Large"
          onChange={(val) => updateSetting('notifications', val)}
        />
      </div>
      <div className="setting-row">
        <label>Auto-save</label>
        <ToggleSwitch
          state={settings.autoSave}
          size="Large"
          onChange={(val) => updateSetting('autoSave', val)}
        />
      </div>
      <div className="setting-row">
        <label>Dark Mode</label>
        <ToggleSwitch
          state={settings.darkMode}
          size="Large"
          icon={true}
          onChange={(val) => updateSetting('darkMode', val)}
        />
      </div>
    </div>
  );
};
```

## Testing Checklist

### Visual Testing - Toggle Switch
- [ ] Large: Track 56Ã—32px, Thumb 30Ã—30px
- [ ] Small: Track 40Ã—24px, Thumb 22Ã—22px
- [ ] Off state: Grey track, grey/blue thumb
- [ ] On state: Teal track, white/dark blue thumb
- [ ] Thumb slides smoothly (200ms)
- [ ] Light mode: Correct track and thumb colors
- [ ] Dark mode: Correct track and thumb colors
- [ ] Track border: Dark blue (constant)
- [ ] Active thumb border: Teal (constant)
- [ ] Icon displays (when enabled)

### Visual Testing - Toggle Button
- [ ] All sizes render correctly (48px, 40px, 32px)
- [ ] Position variants have correct corner radius
- [ ] Left: Rounded left corners only
- [ ] Middle: No rounded corners
- [ ] Right: Rounded right corners only
- [ ] Active: White bg (light) / dark bg (dark)
- [ ] Selected: Dark bg (light) / white bg (dark)
- [ ] Border: 1px continuous around group
- [ ] Dividers between segments (when enabled)
- [ ] Equal-width segments in group

### Functional Testing
- [ ] Toggle switch changes state on click
- [ ] Toggle switch onChange fires with correct value
- [ ] Toggle button selects clicked option
- [ ] Only one toggle selected per group
- [ ] Disabled switches don't respond
- [ ] Smooth animations play
- [ ] State persists correctly

### Accessibility Testing
- [ ] Switch has role="switch"
- [ ] aria-checked reflects state
- [ ] Toggle group has role="group"
- [ ] Individual toggles have role="radio"
- [ ] Keyboard navigation works
- [ ] Space/Enter activates control
- [ ] Focus indicators visible
- [ ] Screen reader announces state
- [ ] Labels properly associated

### Mode Testing
- [ ] Switch inactive: Track and thumb correct in light mode
- [ ] Switch inactive: Track and thumb correct in dark mode
- [ ] Switch active: Teal track constant in both modes
- [ ] Switch active: Thumb surface adapts to mode
- [ ] Toggle active: Surface and border adapt to mode
- [ ] Toggle selected: Colors invert correctly
- [ ] Smooth transitions between modes

## Related Components

### Toggle Switch Related:
- **Checkbox** - Multiple binary choices
- **Radio Button** - Single selection from options

### Toggle Button Related:
- **Tab** - Alternative for content switching
- **Radio Button** - Vertical alternative
- **Button** - Alternative for actions

## Common Patterns

### Feature Flags

```tsx
const FeatureFlags = ({ features, onUpdate }) => {
  return (
    <div className="feature-flags">
      {features.map(feature => (
        <div key={feature.id} className="feature-row">
          <div>
            <h4>{feature.name}</h4>
            <p>{feature.description}</p>
          </div>
          <ToggleSwitch
            state={feature.enabled}
            size="Large"
            onChange={(val) => onUpdate(feature.id, val)}
          />
        </div>
      ))}
    </div>
  );
};
```

### Time Period Selector

```tsx
const TimePeriodSelector = ({ period, onChange }) => {
  const periods = ['Day', 'Week', 'Month', 'Year'];
  const periodIndex = periods.indexOf(period);

  return (
    <ToggleButton
      options="4"
      selectedIndex={periodIndex}
      onSelectionChange={(index) => onChange(periods[index])}
      optionLabels={periods}
      size="large"
    />
  );
};
```

### Responsive Display Mode

```tsx
const DisplayModeToggle = () => {
  const [mode, setMode] = useState(0);
  const modes = ['Compact', 'Comfortable', 'Spacious'];

  return (
    <div className="display-settings">
      <label>Display Density</label>
      <ToggleButton
        options="3"
        selectedIndex={mode}
        onSelectionChange={setMode}
        optionLabels={modes}
      />
    </div>
  );
};
```

## Version History

- **v1.0** - Initial toggle and switch system with Toggle Switch, Toggle Button, and Toggle components

---

*Component Documentation - Ohme Design System*  
*Functional Components*  
*Last Updated: January 2025*
