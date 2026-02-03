# Pagination Component Documentation

## Overview

Pagination components allow users to navigate through large sets of data or content split across multiple pages. They provide clear feedback about current position and enable efficient navigation to specific pages.

**Component Type:** Functional Component  
**Category:** Navigation  
**Token Integration:** Yes - uses button and content tokens  
**Variants:** 3 styles (Default, Text Buttons, Simple)

## Design Specifications

### Style Variants

| Style | Elements | Width | Navigation | Page Display |
|-------|----------|-------|------------|--------------|
| **Default** | Icon buttons + numbered pages | Auto | Chevrons + numbered buttons | Current page highlighted |
| **Text Buttons** | Text buttons + page info | ~305px | "Back"/"Next" with chevrons | "Page 1 of 9" text |
| **Simple** | Icon buttons + page info | ~343px | Chevron-only buttons | "Page 1 of 9" text |

### Visual Properties
- **Button Size:** 40Ã—40px minimum
- **Button Padding:** 8px
- **Corner Radius:** 6px â†’ `button/secondary/corner-radius/medium`
- **Gap:** 16px (default style), 12px (text/simple styles)
- **Icon Size:** 24Ã—24px
- **Typography:** Roobert SemiBold, 18px / 24px (buttons), Regular (page text)

## Color System

### Navigation Buttons - Active State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `button/secondary/surface/active` | `surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Border** | `button/secondary/content/content` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Content** | `button/secondary/content/content` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Light mode: White background, dark blue border and text
- Dark mode: Dark blue background, white border and text

---

### Navigation Buttons - Disabled State

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `button/secondary/surface/disabled` | `brand/white` | white | white | #FFFFFF | #FFFFFF |
| **Border** | `button/secondary/border/disabled` | `brand/smokeygrey` | smokeygrey | smokeygrey | #D1D1D1 | #D1D1D1 |
| **Content** | `button/secondary/content/disabled` | `state/disabled/content` | grey700 | grey300 | #647882 | #ADB3B1 |

**Visual Result:**
- Light mode: White background, light grey border, medium grey content
- Dark mode: White background, light grey border, light grey content

**Note:** Disabled buttons show as grey in both modes

---

### Page Number Buttons - Current Page

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `button/secondary/surface/active` | `surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Border** | `button/secondary/content/content` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| **Content** | `button/secondary/content/content` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:** Same as active navigation buttons

---

### Page Number Buttons - Other Pages (Tertiary)

| Property | Tier 3 Token | â†’ Tier 2 | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|-------------|----------|--------------|-------------|-----------|----------|
| **Surface** | `button/tertiary/surface/active` | `brand/clear` | transparent | transparent | Transparent | Transparent |
| **Border** | `button/tertiary/border/active` | `brand/clear` | transparent | transparent | Transparent | Transparent |
| **Content** | `button/tertiary/content/content` | `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Visual Result:**
- Both modes: Transparent background, no border
- Light mode: Dark blue text
- Dark mode: White text

---

### Page Info Text

**"Page" Label:**

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Content** | `color/content/secondary` | grey700 | grey300 | #647882 | #ADB3B1 |

**"1 of 9" Value:**

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Content** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** Roobert Regular, 18px / 23px line-height, 0.2px letter-spacing

---

## Component Properties

```typescript
type PaginationProps = {
  className?: string;
  style?: "Default" | "text buttons" | "simple";
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number; // For Default style
};
```

### Property: `style` (string, optional)
Controls the pagination visual style.

**Values:**
- `"Default"` - Full pagination with numbered page buttons
- `"text buttons"` - "Back"/"Next" text buttons with page counter
- `"simple"` - Icon-only buttons with page counter

---

### Property: `currentPage` (number, required)
The currently active page (1-indexed).

---

### Property: `totalPages` (number, required)
Total number of pages available.

---

### Property: `onPageChange` (function, required)
Callback when user selects a different page.

**Usage:**
```typescript
onPageChange={(pageNumber) => {
  fetchData(pageNumber);
}}
```

---

### Property: `maxVisiblePages` (number, optional)
Maximum number of page buttons to show in Default style.

**Default:** 5  
**Behavior:** Shows ellipsis (...) for collapsed pages

---

## Complete Token Mapping

### Tier 3 Component Tokens (Recommended)

```css
/* Navigation Buttons */
--pagination-button-surface-active: var(--button-secondary-surface-active);
--pagination-button-surface-disabled: var(--button-secondary-surface-disabled);
--pagination-button-border-active: var(--button-secondary-content-content);
--pagination-button-border-disabled: var(--button-secondary-border-disabled);
--pagination-button-content-active: var(--button-secondary-content-content);
--pagination-button-content-disabled: var(--button-secondary-content-disabled);

/* Page Buttons - Current */
--pagination-page-current-surface: var(--button-secondary-surface-active);
--pagination-page-current-border: var(--button-secondary-content-content);
--pagination-page-current-content: var(--button-secondary-content-content);

/* Page Buttons - Other */
--pagination-page-other-surface: var(--button-tertiary-surface-active);
--pagination-page-other-border: var(--button-tertiary-border-active);
--pagination-page-other-content: var(--button-tertiary-content-content);

/* Page Info Text */
--pagination-info-label-color: var(--color-content-secondary);
--pagination-info-value-color: var(--color-content-primary);

/* Dimensions */
--pagination-button-min-width: 40px;
--pagination-button-min-height: 40px;
--pagination-button-padding: var(--value-spacing-axis-aware-stack-md);
--pagination-gap-default: var(--value-spacing-gap-xl);
--pagination-gap-compact: var(--value-spacing-gap-lg);
--pagination-button-radius: var(--button-secondary-corner-radius-medium);
--pagination-icon-size: 24px;
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `button/secondary/surface/active` â†’ `surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| `button/secondary/content/content` â†’ `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `button/secondary/surface/disabled` | white | white | #FFFFFF | #FFFFFF |
| `button/secondary/border/disabled` | smokeygrey | smokeygrey | #D1D1D1 | #D1D1D1 |
| `button/secondary/content/disabled` â†’ `state/disabled/content` | grey700 | grey300 | #647882 | #ADB3B1 |
| `button/tertiary/surface/active` â†’ `brand/clear` | transparent | transparent | Transparent | Transparent |
| `button/tertiary/content/content` â†’ `content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/content/secondary` | grey700 | grey300 | #647882 | #ADB3B1 |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/white` | #FFFFFF | Button surface (light) |
| `color/brand/ohmedarkblue` | #032536 | Button border/content (light) |
| `color/brand/smokeygrey` | #D1D1D1 | Disabled border |
| `color/secondary/grey700` | #647882 | Secondary text (light), disabled content (light) |
| `color/secondary/grey300` | #ADB3B1 | Secondary text (dark), disabled content (dark) |
| `Values/corner radii/radius-1halfx` | 6px | Button corner radius |
| `Values/space/space-4x` | 16px | Default gap |
| `Values/space/space-3x` | 12px | Compact gap |
| `Values/space/space-2x` | 8px | Button padding |

## Anatomy

### Default Style
```
Pagination Component (Default Style)
â”œâ”€â”€ Previous Button (chevron left, icon-only)
â”‚   â”œâ”€â”€ State: Active or Disabled
â”‚   â””â”€â”€ Icon: Arrow Left
â”œâ”€â”€ Page Number Buttons (1, 2, 3, ...)
â”‚   â”œâ”€â”€ Current Page (secondary button style)
â”‚   â””â”€â”€ Other Pages (tertiary button style)
â”œâ”€â”€ Ellipsis (...) - when pages collapsed
â””â”€â”€ Next Button (chevron right, icon-only)
    â”œâ”€â”€ State: Active or Disabled
    â””â”€â”€ Icon: Arrow Right
```

### Text Buttons Style
```
Pagination Component (Text Buttons Style)
â”œâ”€â”€ Back Button (icon + text)
â”‚   â”œâ”€â”€ Icon: Arrow Left
â”‚   â”œâ”€â”€ Text: "Back"
â”‚   â””â”€â”€ State: Active or Disabled
â”œâ”€â”€ Page Info
â”‚   â”œâ”€â”€ Label: "Page" (secondary content)
â”‚   â””â”€â”€ Value: "1 of 9" (primary content)
â””â”€â”€ Next Button (text + icon)
    â”œâ”€â”€ Text: "Next"
    â”œâ”€â”€ Icon: Arrow Right
    â””â”€â”€ State: Active or Disabled
```

### Simple Style
```
Pagination Component (Simple Style)
â”œâ”€â”€ Previous Button (chevron left, icon-only)
â”‚   â””â”€â”€ State: Active or Disabled
â”œâ”€â”€ Page Info
â”‚   â”œâ”€â”€ Label: "Page" (secondary content)
â”‚   â””â”€â”€ Value: "1 of 9" (primary content)
â””â”€â”€ Next Button (chevron right, icon-only)
    â””â”€â”€ State: Active or Disabled
```

## Implementation Examples

### Default Pagination

```tsx
import Pagination from '@/components/functional/Pagination';

const [currentPage, setCurrentPage] = useState(1);
const totalPages = 59;

<Pagination
  style="Default"
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  maxVisiblePages={5}
/>
```

### Text Buttons Pagination

```tsx
<Pagination
  style="text buttons"
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
```

### Simple Pagination

```tsx
<Pagination
  style="simple"
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
```

### With Data Fetching

```tsx
const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const pageSize = 20;
  const totalItems = 1180;
  const totalPages = Math.ceil(totalItems / pageSize);

  useEffect(() => {
    fetchData(currentPage, pageSize).then(setData);
  }, [currentPage]);

  return (
    <div>
      <table>
        {/* Table content */}
      </table>
      <Pagination
        style="Default"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
```

### Responsive Pagination

```tsx
const ResponsivePagination = ({ currentPage, totalPages, onPageChange }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  
  return (
    <Pagination
      style={isMobile ? "simple" : "Default"}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
      maxVisiblePages={isMobile ? 3 : 5}
    />
  );
};
```

## CSS Implementation

### Core Styles

```css
.pagination {
  display: flex;
  align-items: center;
  gap: var(--value-spacing-gap-xl);
}

.pagination--textButtons,
.pagination--simple {
  gap: var(--value-spacing-gap-lg);
}

/* Navigation buttons */
.pagination__navButton {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--value-spacing-gap-md);
  min-width: 40px;
  min-height: 40px;
  padding: var(--value-spacing-axis-aware-stack-md);
  
  background: var(--button-secondary-surface-active);
  border: 1px solid var(--button-secondary-content-content);
  border-radius: var(--button-secondary-corner-radius-medium);
  
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-18);
  font-weight: var(--typography-font-weight-semibold);
  line-height: var(--typography-line-height-24);
  color: var(--button-secondary-content-content);
  
  cursor: pointer;
  transition: all 200ms ease;
}

.pagination__navButton:disabled {
  background: var(--button-secondary-surface-disabled);
  border-color: var(--button-secondary-border-disabled);
  color: var(--button-secondary-content-disabled);
  cursor: not-allowed;
}

.pagination__navButton:hover:not(:disabled) {
  background: var(--button-secondary-surface-hover);
}

/* Page number buttons */
.pagination__pageButton {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  padding: var(--value-spacing-axis-aware-stack-md);
  
  background: var(--button-tertiary-surface-active);
  border: 1px solid var(--button-tertiary-border-active);
  border-radius: var(--button-secondary-corner-radius-medium);
  
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-18);
  font-weight: var(--typography-font-weight-semibold);
  line-height: var(--typography-line-height-24);
  color: var(--button-tertiary-content-content);
  
  cursor: pointer;
  transition: all 200ms ease;
}

.pagination__pageButton:hover {
  background: var(--button-tertiary-surface-hover);
}

.pagination__pageButton--current {
  background: var(--button-secondary-surface-active);
  border-color: var(--button-secondary-content-content);
  color: var(--button-secondary-content-content);
}

/* Ellipsis */
.pagination__ellipsis {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 27.5px;
  
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-18);
  font-weight: var(--typography-font-weight-semibold);
  line-height: var(--typography-line-height-24);
  color: var(--color-content-primary);
}

/* Page info text */
.pagination__pageInfo {
  display: flex;
  gap: 10px;
  align-items: center;
  
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-18);
  font-weight: var(--typography-font-weight-regular);
  line-height: 23px;
  letter-spacing: var(--typography-letter-spacing-0dot2);
}

.pagination__pageInfo__label {
  color: var(--color-content-secondary);
  text-align: right;
  flex: 1;
}

.pagination__pageInfo__value {
  color: var(--color-content-primary);
  flex: 1;
}

/* Icons */
.pagination__icon {
  width: 24px;
  height: 24px;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --button-secondary-surface-active: #FFFFFF;
  --button-secondary-content-content: #032536;
  --button-secondary-surface-disabled: #FFFFFF;
  --button-secondary-border-disabled: #D1D1D1;
  --button-secondary-content-disabled: #647882;
  --button-tertiary-surface-active: transparent;
  --button-tertiary-content-content: #032536;
  --color-content-primary: #032536;
  --color-content-secondary: #647882;
  --value-spacing-gap-xl: 16px;
  --value-spacing-gap-lg: 12px;
}

[data-theme="dark"] {
  /* Dark mode */
  --button-secondary-surface-active: #032536;
  --button-secondary-content-content: #FFFFFF;
  --button-secondary-content-disabled: #ADB3B1;
  --button-tertiary-content-content: #FFFFFF;
  --color-content-primary: #FFFFFF;
  --color-content-secondary: #ADB3B1;
  /* Disabled surface and border remain constant */
}
```

## Usage Guidelines

### When to Use Each Style

**Default Style:**
- Large datasets (50+ pages)
- Desktop applications
- When users need to jump to specific pages
- Data tables and lists

**Text Buttons Style:**
- Sequential navigation preferred
- Smaller page counts (â‰¤10 pages)
- Mobile-friendly interfaces
- When page numbers aren't critical

**Simple Style:**
- Very limited space
- Mobile interfaces
- Sequential-only navigation
- Minimal UI requirements

### Page Range Display Logic

For Default style with many pages, use smart truncation:

**Example: Current page = 5, Total = 59**
- Show: `< 1 2 3 4 [5] 6 7 ... 59 >`

**Example: Current page = 1, Total = 59**
- Show: `< [1] 2 3 ... 59 >`

**Example: Current page = 59, Total = 59**
- Show: `< 1 ... 57 58 [59] >`

## Best Practices

### Content Guidelines âœ“
1. **Clear Labels:** Use "Page X of Y" format
2. **Disable Appropriately:** Disable prev on page 1, next on last page
3. **Current Indication:** Clearly show current page
4. **Total Context:** Always show total pages
5. **Consistent Terminology:** "Back/Next" or "Previous/Next"

### Visual Guidelines âœ“
1. **Clear Current State:** Current page visually distinct
2. **Disabled States:** Grey out unavailable navigation
3. **Touch Targets:** Minimum 40Ã—40px for all buttons
4. **Spacing:** Consistent gaps between elements
5. **Alignment:** Center pagination in layout

### Interaction Guidelines âœ“
1. **Keyboard Navigation:** Tab through buttons, Enter to activate
2. **Loading States:** Disable during data fetch
3. **URL Sync:** Update URL with page parameter
4. **Scroll Position:** Reset scroll on page change
5. **Preserve Filters:** Maintain other query parameters

## Accessibility

### ARIA Attributes

```tsx
<nav 
  role="navigation" 
  aria-label="Pagination"
>
  <button
    onClick={() => onPageChange(currentPage - 1)}
    disabled={currentPage === 1}
    aria-label="Go to previous page"
  >
    <IconRadixArrows iconRadix="Arrow Left" aria-hidden="true" />
  </button>
  
  {pageNumbers.map(num => (
    <button
      key={num}
      onClick={() => onPageChange(num)}
      aria-label={`Go to page ${num}`}
      aria-current={num === currentPage ? 'page' : undefined}
    >
      {num}
    </button>
  ))}
  
  <button
    onClick={() => onPageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    aria-label="Go to next page"
  >
    <IconRadixArrows iconRadix="Arrow Right" aria-hidden="true" />
  </button>
</nav>
```

### Keyboard Navigation

- **Tab:** Move through page buttons
- **Enter/Space:** Activate button
- **Arrow Keys:** Navigate between pages (optional)

### Screen Reader Announcements

```tsx
<div 
  role="status" 
  aria-live="polite" 
  aria-atomic="true"
  className="sr-only"
>
  Page {currentPage} of {totalPages}
</div>
```

## Advanced Patterns

### Page Range Calculator

```tsx
const getPageRange = (current: number, total: number, maxVisible = 5) => {
  if (total <= maxVisible) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  
  const halfVisible = Math.floor(maxVisible / 2);
  
  if (current <= halfVisible) {
    return [...Array.from({ length: maxVisible }, (_, i) => i + 1), '...', total];
  }
  
  if (current >= total - halfVisible) {
    return [1, '...', ...Array.from({ length: maxVisible }, (_, i) => total - maxVisible + i + 1)];
  }
  
  return [
    1,
    '...',
    ...Array.from({ length: maxVisible }, (_, i) => current - halfVisible + i),
    '...',
    total
  ];
};
```

### With Loading State

```tsx
const PaginationWithLoading = ({ currentPage, totalPages, onPageChange, isLoading }) => {
  return (
    <Pagination
      style="Default"
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
      disabled={isLoading}
    />
  );
};
```

### URL Synchronization

```tsx
const PaginationWithURL = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1');

  const handlePageChange = (page: number) => {
    setSearchParams({ ...Object.fromEntries(searchParams), page: page.toString() });
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
};
```

## Testing Checklist

### Visual Testing
- [ ] All 3 styles render correctly
- [ ] Button size: 40Ã—40px minimum
- [ ] Gap: 16px (default) / 12px (text/simple)
- [ ] Corner radius: 6px on all buttons
- [ ] Light mode: Current page - white bg, dark border/text
- [ ] Light mode: Other pages - transparent, dark text
- [ ] Light mode: Disabled - white bg, grey border/text
- [ ] Dark mode: Current page - dark bg, white border/text
- [ ] Dark mode: Other pages - transparent, white text
- [ ] Dark mode: Disabled - white bg, grey border/text
- [ ] Page info text colors correct in both modes

### Functional Testing
- [ ] Previous button navigates to previous page
- [ ] Next button navigates to next page
- [ ] Page number buttons navigate to specific page
- [ ] Previous disabled on page 1
- [ ] Next disabled on last page
- [ ] Current page highlighted
- [ ] onPageChange callback fires with correct page number
- [ ] Ellipsis appears for large page counts

### Accessibility Testing
- [ ] nav role="navigation" present
- [ ] aria-label="Pagination" on container
- [ ] Previous button has aria-label
- [ ] Next button has aria-label
- [ ] Page buttons have aria-label
- [ ] Current page has aria-current="page"
- [ ] Disabled buttons have disabled attribute
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader announces page changes

### Mode Testing
- [ ] Active buttons: Correct in light mode
- [ ] Active buttons: Correct in dark mode
- [ ] Disabled buttons: Correct in both modes
- [ ] Current page highlight: Correct in both modes
- [ ] Page info text: Correct in both modes
- [ ] Smooth transitions between modes

## Related Components

- **Button** - Uses secondary and tertiary button tokens
- **Icon Components** - Arrow Left/Right icons
- **Table** - Often used with data tables

## Common Patterns

### Items Per Page Selector

```tsx
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(20);

const totalPages = Math.ceil(totalItems / itemsPerPage);

<div className="pagination-controls">
  <Dropdown
    value={itemsPerPage}
    onChange={(value) => {
      setItemsPerPage(value);
      setCurrentPage(1); // Reset to first page
    }}
    options={[
      { value: 10, label: '10 per page' },
      { value: 20, label: '20 per page' },
      { value: 50, label: '50 per page' }
    ]}
  />
  <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={setCurrentPage}
  />
</div>
```

### With Total Items Display

```tsx
const PaginationWithInfo = ({ currentPage, itemsPerPage, totalItems }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="pagination-wrapper">
      <span className="pagination-info">
        Showing {startItem}-{endItem} of {totalItems}
      </span>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
```

## Version History

- **v1.0** - Initial pagination component with 3 style variants

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
