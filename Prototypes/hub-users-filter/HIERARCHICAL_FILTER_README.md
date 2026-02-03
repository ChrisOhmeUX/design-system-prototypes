# Hierarchical User Filter System - Documentation

## Overview

A flexible, variable-depth hierarchical filter system for managing 100,000+ users across regions, products, organizations, and roles in Ohme Hub.

**Key Features:**
- ✅ Variable-depth hierarchy (3-6 levels)
- ✅ Single-selection filtering at any level
- ✅ Real-time search across hierarchy
- ✅ Applied filter chips with individual/bulk removal
- ✅ Full dark mode support
- ✅ Adapts to different product structures
- ✅ Pixel-perfect Ohme design system implementation

---

## Hierarchy Structure

### Standard Products (4 Levels)
```
Region (Purple)
  └─ Product (Orange)
      └─ Org (Blue)
          └─ Role (Yellow)
              └─ Users
```

**Example:** United Kingdom → Connect → Energize Solutions Ltd → Installer → 2 users

---

### Dealer Portal (5 Levels)
```
Region (Purple)
  └─ Product (Orange)
      └─ Dealer Group (Blue)
          └─ Dealership (Teal)
              └─ Role (Yellow)
                  └─ Users
```

**Example:** United Kingdom → Dealer Portal → VWec25 → VW Brighton Central → Sales → 1 user

---

## Visual Design System

### Pill Colors by Level

| Level | Type | Pill Color | Light BG | Dark BG | Purpose |
|-------|------|------------|----------|---------|---------|
| **1** | Region | Purple | #F8E4FF | #510076 | Geographic segmentation |
| **2** | Product | Orange | #FFF2C6 | #441906 | Product/portal type |
| **3** | Org / Dealer Group | Blue | #D1EFFF | #062965 | Organization/company |
| **4** | Dealership | Teal | #C0FFF6 | #003A37 | Dealer-specific (when present) |
| **5** | Role | Yellow | #FFF2C6 | #441906 | User role/permission level |

### Icons by Level

| Level | Icon | Description |
|-------|------|-------------|
| Region | Globe | World icon with latitude/longitude lines |
| Product | Grid | Calendar/grid layout icon |
| Org | Building | Multi-story office building |
| Dealer Group | Building with wheels | Building icon with vehicle elements |
| Dealership | House | Store/dealership storefront |
| Role | Person | User/person silhouette |

---

## Sample Data Structure

### 3 Regions Included

**1. United Kingdom (18 users)**
- Connect: 3 orgs (Energize Solutions, Tesla UK, Green Charge) → 7 users
- Dealer Portal: 2 dealer groups (VWec25, BMW Group) → 6 dealerships → 6 users
- Fleet Portal: 2 orgs (Royal Mail, Tesco) → 3 users
- Hub: 1 org (Ohme Admin) → 2 users

**2. Europe (9 users)**
- Connect: 3 orgs (Paris Electric, Berlin EV, Amsterdam Charge) → 5 users
- Fleet Portal: 2 orgs (European Fleet, DHL Europe) → 4 users

**3. North America (6 users)**
- Connect: 2 orgs (SparkCharge USA, EV Connect Canada) → 4 users
- Fleet Portal: 1 org (FedEx North America) → 2 users

**Total: 33 users across 3 regions, 4-5 products, 13 organizations**

---

## User Flow

### 1. Opening the Filter
1. User clicks "Filters" button in table controls
2. Modal opens with all hierarchy levels collapsed
3. Search input is focused and ready

### 2. Navigating the Hierarchy
**Option A: Browse**
1. Click chevron on "United Kingdom" → Expands to show 4 products
2. Click chevron on "Dealer Portal" → Shows 2 dealer groups
3. Click chevron on "VWec25" → Shows 2 dealerships
4. Click chevron on "VW Brighton Central" → Shows 2 roles (Sales, Service)

**Option B: Search**
1. Type "Brighton" in search → Tree filters to show only VW Brighton Central
2. Hierarchy auto-filters to relevant branches only
3. Result count updates: "1 items found • 2 users"

### 3. Making a Selection
1. Click "Select" button at any level:
   - Region level → Filters to all users in that region
   - Product level → All users in that product
   - Org level → All users in that organization
   - Dealership level → All users in that dealership
   - Role level → All users in that role
2. Selection displays at bottom: "**Selected:** VW Brighton Central (2 users)"

### 4. Applying the Filter
**Option A: Apply**
1. Click "Apply filter - 2 users" button
2. Modal closes
3. Yellow filter chip appears: "**Filter:** VW Brighton Central"
4. Table updates to show only 2 users (Emma Williams, James Brown)
5. Result count: "Showing 2 users out of 33"

**Option B: Clear in Modal**
1. Click "Clear selection & filter" button
2. **Modal selection clears** (ready for new selection)
3. **Table filter also clears** (shows all users again)
4. Filter chip disappears
5. Can make a new selection or close modal

### 5. Managing Applied Filters
**Remove Individual Filter:**
- Click × on the yellow filter chip → Filter removed, table resets

**Clear All Filters:**
- Click "Clear all" button → All filters removed at once

---

## Technical Implementation

### Data Structure

Each node in the hierarchy contains:

```javascript
{
  id: string,              // Unique identifier
  name: string,            // Display name
  type: string,            // 'Region', 'Product', 'Org', 'Dealer Group', 'Dealership', 'Role'
  userCount: number,       // Total users at this level
  children: Node[]         // Optional array of child nodes
}
```

### Filter Selection Object

When a filter is applied:

```javascript
{
  path: ['uk', 'dealer-portal', 'vwec25', 'vw-brighton', 'sales'],
  label: 'VW Brighton Central',
  fullPath: 'uk → dealer-portal → vwec25 → vw-brighton → sales',
  type: 'Dealership',
  userCount: 1,
  node: { ...nodeObject }
}
```

### Filtering Logic

Users are filtered by matching their attributes to the filter path:

```javascript
// Path position mapping
path[0] → user.region
path[1] → user.product
path[2] → user.org (or dealer group for dealer portal)
path[3] → user.dealership (dealer portal only)
path[4] → user.role (dealer portal) OR path[3] → user.role (other products)
```

---

## Component Architecture

### Main Components

**1. TreeNode (Recursive)**
- Renders a single hierarchy node
- Handles expand/collapse
- Renders children recursively
- Manages selection
- Filters based on search

**2. UserFilterModal**
- Modal container
- Search input
- Tree rendering
- Selection display
- Apply/Clear actions

**3. AppliedFilters**
- Yellow warning pills
- Individual remove buttons (×)
- "Clear all" button

**4. UsersTable**
- Displays filtered results
- Updates based on active filter
- Shows result count

### State Management

```javascript
// Modal state
const [searchQuery, setSearchQuery] = useState('');
const [expandedNodes, setExpandedNodes] = useState(new Set());
const [selectedFilter, setSelectedFilter] = useState(null);

// App state
const [theme, setTheme] = useState('light');
const [activeFilter, setActiveFilter] = useState(null);
const [searchQuery, setSearchQuery] = useState('');
```

---

## Customization Guide

### Adding a New Region

```javascript
{
  id: 'asia-pacific',
  name: 'Asia Pacific',
  type: 'Region',
  userCount: 5000,
  children: [
    {
      id: 'connect',
      name: 'Connect',
      type: 'Product',
      userCount: 3000,
      children: [
        {
          id: 'tokyo-ev',
          name: 'Tokyo EV Solutions',
          type: 'Org',
          userCount: 3000,
          children: [
            { id: 'admin', name: 'Admin', type: 'Role', userCount: 10 },
            { id: 'installer', name: 'Installer', type: 'Role', userCount: 2990 }
          ]
        }
      ]
    }
  ]
}
```

### Adding a New Product with Custom Hierarchy

```javascript
{
  id: 'volt',
  name: 'Volt',
  type: 'Product',
  userCount: 5000,
  children: [
    {
      id: 'residential-uk',
      name: 'Residential UK',
      type: 'Customer Segment',  // Custom level type
      userCount: 3000,
      children: [
        { id: 'premium', name: 'Premium', type: 'Tier', userCount: 1000 },
        { id: 'standard', name: 'Standard', type: 'Tier', userCount: 2000 }
      ]
    }
  ]
}
```

**Note:** The system automatically adapts to any `type` value. Just ensure you add appropriate pill colors and icons in the configuration.

### Adding New Pill Color

In the CSS, add a new pill class:

```css
/* Custom Tier - Green */
.pill-tier {
  background-color: #DDFBE5;
  color: #072C14;
}

[data-theme="dark"] .pill-tier {
  background-color: #072C14;
  color: #DDFBE5;
}
```

Then update `getPillClass()`:

```javascript
const getPillClass = (type) => {
  const typeMap = {
    'Region': 'pill-region',
    'Product': 'pill-product',
    'Org': 'pill-org',
    'Dealer Group': 'pill-org',
    'Dealership': 'pill-dealership',
    'Role': 'pill-role',
    'Tier': 'pill-tier'  // New addition
  };
  return typeMap[type] || 'pill-org';
};
```

### Adding New Icon

In the `IconByType` component:

```javascript
const icons = {
  'Region': <svg>...</svg>,
  'Product': <svg>...</svg>,
  'Tier': <svg width="32" height="32" viewBox="0 0 32 32">
    <!-- Your custom icon SVG path -->
  </svg>
};
```

---

## Design Decisions

### Why Variable-Depth?

**Problem:** Different products have different organizational structures
- Connect: Simple org structure
- Dealer Portal: Two-tier dealer hierarchy (groups → dealerships)
- Future products: Unknown structures

**Solution:** Flexible system that renders any depth automatically

### Why Single-Selection?

**Alternatives Considered:**
- Multi-select (checkboxes) → Too complex, unclear table state
- Dropdown cascade → Hidden hierarchy, poor browsing

**Benefits of Single-Selection:**
- Clear user intent: "Show me X"
- Simple UI: One "Select" button per item
- Easy to display: Single filter chip
- Matches radio button mental model

### Why User Counts at Every Level?

**Alternative:** Show count of children ("5 products")

**Benefits of User Counts:**
- Admins care about distribution: "How many users in UK?"
- Informs filtering decisions
- Shows impact before selection
- More useful than structural info

---

## Integration Checklist

### Frontend Integration

- [ ] Replace sample data with API call to `/api/users/hierarchy`
- [ ] Connect filter selection to table data fetching
- [ ] Add filter to URL parameters for deep linking
- [ ] Implement keyboard shortcuts (Cmd+K to open filter)
- [ ] Add loading states during data fetch
- [ ] Handle empty states (no hierarchy data)
- [ ] Add error states (API failures)
- [ ] Test with production user counts

### Backend Requirements

**Endpoint:** `GET /api/users/hierarchy`

**Response Format:**
```json
[
  {
    "id": "uk",
    "name": "United Kingdom",
    "type": "Region",
    "userCount": 45230,
    "children": [
      {
        "id": "connect",
        "name": "Connect",
        "type": "Product",
        "userCount": 22450,
        "children": [...]
      }
    ]
  }
]
```

**Filtering Endpoint:** `GET /api/users?path=uk/connect/energize-solutions/installer`

Returns paginated users matching the hierarchical path.

### Performance Considerations

- Cache hierarchy data (updates infrequently)
- Lazy-load user lists (don't include in hierarchy response)
- Debounce search input (300ms)
- Virtual scrolling for large hierarchies
- Memoize filter calculations

---

## Accessibility

### Keyboard Navigation
- `Tab` / `Shift+Tab` - Navigate interactive elements
- `Enter` / `Space` - Activate buttons, expand/collapse
- `Escape` - Close modal
- `Arrow keys` - Future: Navigate tree nodes

### ARIA Attributes
- Modal: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- Tree structure: Consider `role="tree"` for semantic tree navigation
- Expand buttons: `aria-expanded`, `aria-label`
- Filter pills: `aria-label` for remove actions
- Theme toggle: `role="switch"`, `aria-checked`

### Screen Reader Support
- Hierarchy levels announced with type
- User counts announced
- Selection changes announced
- Filter application confirmed

---

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Safari iOS 14+
- ✅ Chrome Android

**Safari-Specific Fixes:**
- Uses React development build for better debugging
- Simplified SVG rendering
- Inline SVGs instead of external components
- Emoji fallbacks for theme toggle icons

---

## Testing Guide

### Manual Testing Scenarios

**Scenario 1: Basic Filtering**
1. Open filter modal
2. Expand "United Kingdom" → "Connect" → "Energize Solutions Ltd"
3. Select "Installer" role
4. Apply filter
5. ✓ Table shows 2 users (Sarah, Michael)
6. ✓ Filter chip displays "Filter: Installer"
7. ✓ Result count: "Showing 2 users out of 33"

**Scenario 2: Dealer Portal Hierarchy**
1. Expand "United Kingdom" → "Dealer Portal" → "VWec25"
2. Expand "VW Brighton Central"
3. Select "Sales" role
4. Apply filter
5. ✓ Table shows 1 user (Emma Williams)

**Scenario 3: Region-Level Filtering**
1. Select "Europe" at region level (don't expand)
2. Apply filter
3. ✓ Table shows all 9 European users
4. ✓ Filter chip: "Filter: Europe"

**Scenario 4: Search Filtering**
1. Type "Tesla" in modal search
2. ✓ Tree filters to show only Tesla UK Partners
3. Select the org
4. ✓ Table shows 2 Tesla UK users

**Scenario 5: Clear Operations**
1. Apply a filter
2. Click × on filter chip → ✓ Filter removed, table resets
3. Apply another filter
4. Open modal, click "Clear selection & filter" → ✓ Both modal and table reset
5. Apply filter again
6. Click "Clear all" button → ✓ All filters removed

**Scenario 6: Dark Mode**
1. Toggle dark mode switch
2. ✓ All pills invert colors correctly
3. ✓ Table background darkens
4. ✓ Text remains readable
5. ✓ Menu stays dark (constant)

**Scenario 7: Multiple Levels**
1. Apply filter at Region level
2. Remove it
3. Apply filter at Org level
4. Remove it
5. Apply filter at Role level
6. ✓ All depths work correctly

### Automated Testing (Recommended)

```javascript
describe('Hierarchical User Filter', () => {
  it('renders hierarchy tree correctly', () => {...});
  it('expands and collapses nodes', () => {...});
  it('filters tree by search query', () => {...});
  it('selects filter at different levels', () => {...});
  it('applies filter and updates table', () => {...});
  it('displays applied filter chip', () => {...});
  it('removes filter via chip × button', () => {...});
  it('removes filter via Clear all button', () => {...});
  it('clears modal and table via Clear selection & filter', () => {...});
  it('handles dealer portal 5-level hierarchy', () => {...});
  it('maintains correct user counts at all levels', () => {...});
});
```

---

## Scalability

### Current Demo: 33 Users
- 3 regions
- 8 products (across all regions)
- 13 organizations
- ~25 roles (across all orgs)

### Production Scale: 100,000+ Users
- Hierarchy depth remains the same (3-5 levels)
- Filtered results paginated
- Tree navigation cached
- Search debounced
- Virtual scrolling for large org lists

**Performance Targets:**
- Modal open: <200ms
- Search filter: <100ms (debounced)
- Apply filter: <300ms
- Table update: <500ms

---

## Design System Compliance

### Components Used
- **Modal** - Title group, overlay, close button
- **Input** - Search field (48px large size)
- **Button** - Primary (teal), Secondary (outlined)
- **Pill** - Warning intent for filter chips (24px small size)
- **Icon System** - Radix icons throughout
- **Typography** - Roobert font family, proper weights

### Tokens Applied
- `color/surface/raised` - Modal background
- `color/content/primary` - Text colors
- `color/state/warning/*` - Filter chip colors
- `color/state/special/*` - Region pills
- `color/state/info/*` - Org pills
- `color/state/action/*` - Dealership pills
- `value/spacing/*` - All gaps and padding
- `value/corner-radii/*` - Border radius values

---

## File Structure

```
HubUsersPage_Safari_Fixed.html
├─ Inline styles (CSS)
├─ React components
│  ├─ App (main container)
│  ├─ UserFilterModal
│  ├─ TreeNode (recursive)
│  └─ Icon components
├─ Sample hierarchy data
└─ Sample user data
```

**Single-file design** for easy deployment and testing.

---

## Future Enhancements

### Phase 1 (Immediate)
- [ ] Add keyboard shortcuts (Cmd+K, Cmd+F)
- [ ] Persist filter in URL (`?filter=uk/connect/energize/installer`)
- [ ] Add "Recently used filters" section
- [ ] Show breadcrumb trail in applied filter chip

### Phase 2 (Short-term)
- [ ] Multi-select support (checkboxes)
- [ ] Saved filter presets ("All UK Admins", "Active Dealers")
- [ ] Filter history with undo/redo
- [ ] Export filtered users to CSV
- [ ] Bulk operations on filtered users

### Phase 3 (Long-term)
- [ ] Advanced filters (date ranges, status combinations)
- [ ] Filter builder (AND/OR logic)
- [ ] Smart suggestions based on usage patterns
- [ ] Integration with analytics (track popular filters)
- [ ] Collaborative filters (share filter URLs with team)

---

## Troubleshooting

### Safari Blank Screen
**Issue:** Modal causes page to go blank in Safari  
**Fix:** Use development React build, simplified SVG rendering  
**File:** HubUsersPage_Safari_Fixed.html (this version)

### Filter Not Applying
**Issue:** Click "Apply" but table doesn't update  
**Cause:** User data doesn't match filter path structure  
**Fix:** Ensure user objects have all required fields (region, product, org, role, dealership for dealers)

### Pill Colors Wrong
**Issue:** Pills don't match design system  
**Cause:** Theme not applied or CSS custom properties not set  
**Fix:** Check `data-theme` attribute on `<html>` element

### Counts Don't Match
**Issue:** User counts in hierarchy don't match actual users  
**Cause:** Sample data mismatch  
**Fix:** Ensure `userCount` in hierarchy matches actual user records

---

## Support & Questions

**Design System:** Chris (Design System Lead)  
**Product:** Ohme Hub Team  
**Version:** 1.0.0  
**Last Updated:** February 2025  
**Status:** ✅ Ready for Implementation

---

## Summary

This hierarchical filter system solves the scalability challenge of managing 100,000+ users by:

1. **Organizing users hierarchically** - Region → Product → Org → Role
2. **Enabling targeted filtering** - Select at any level of specificity
3. **Supporting flexible structures** - Adapts to different product needs
4. **Providing clear visual feedback** - Color-coded pills, counts, applied filters
5. **Maintaining design consistency** - Full design system compliance

The system is production-ready, accessible, and built to scale with Ohme's growing user base.
