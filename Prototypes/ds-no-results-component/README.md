# No Results Component Documentation

## Overview

The No Results component displays when tables, searches, or data views return no results. It provides visual feedback through illustrations, clear messaging, and actionable next steps. Used for both empty states (first-time use) and filtered states (no matching results).

**Component Type:** Functional Component  
**Category:** Empty States / Data Display  
**Token Integration:** Yes - uses content and button tokens  
**Variants:** 2 (with/without subtext)

## Variant Matrix

| Variant | Illustration | Heading | Body Text | Button | Use Case |
|---------|-------------|---------|-----------|--------|----------|
| **Without Subtext** | Cloud with sad face | Search query feedback | None | "Add" | No search/filter results |
| **With Subtext** | Environment/planet | Feature introduction | Detailed description | "Add" | First-time setup, onboarding |

## Design Specifications

### Dimensions

| Element | Width | Height | Gap |
|---------|-------|--------|-----|
| **Container** | 380px | Auto | 24px between elements |
| **Illustration (Cloud)** | 273px | 200px | - |
| **Illustration (Environment)** | 192px | 192px | - |
| **Heading** | 380px | 44px (2 lines max) | - |
| **Body Text** | 380px | Auto (multi-line) | - |
| **Button** | Auto | 48px | - |

### Visual Properties
- **Layout:** Vertical center-aligned stack
- **Illustration:** Decorative graphic, centered
- **Typography:** Center-aligned text
- **Button:** Primary button with plus icon
- **Spacing:** Consistent 24px gaps

## Color System

### Illustrations

**Cloud Illustration (No results):**
- Cloud shapes: Light blue #D1EFFF
- Sad face: Lighter blue #76D6FF
- Used for search/filter empty states

**Environment Illustration (First-time setup):**
- Earth/planet graphic
- Plant growing from earth
- Used for onboarding/setup states

---

### Heading Text

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Content** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** Roobert Regular, 22px / 28px (H6), 0.2px letter-spacing

**Examples:**
- "No results found for 'The heights'"
- "Set up your first company"

---

### Body Text (Optional)

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Content** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** Roobert Regular, 18px / 24px, 0.2px letter-spacing

**Example:**
"Add a company to invite them into the hub and give them everything they need to manage their users and settings in one place"

---

### Action Button

Uses standard Primary Button component tokens:
- Surface: `button/primary/surface/active` â†’ highlighterteal #00FFD6
- Border: `button/primary/border/active` â†’ ohmedarkblue
- Content: `button/primary/content/content` â†’ ohmedarkblue
- Icon: Plus icon (24Ã—24px)
- Text: "Add" or custom action text

---

## Complete Token Mapping

### Tier 3 Component Tokens (Recommended)

```css
/* No Results Container */
--no-results-width: 380px;
--no-results-gap: 24px;

/* No Results Illustration */
--no-results-illustration-height-cloud: 200px;
--no-results-illustration-height-env: 192px;
--no-results-illustration-width-cloud: 273px;
--no-results-illustration-width-env: 192px;

/* No Results Heading */
--no-results-heading-font-family: var(--typography-font-family-Roobert);
--no-results-heading-font-size: var(--typography-font-size-22);
--no-results-heading-font-weight: var(--typography-font-weight-regular);
--no-results-heading-line-height: var(--typography-line-height-28);
--no-results-heading-letter-spacing: var(--typography-letter-spacing-0dot2);
--no-results-heading-color: var(--color-content-primary);
--no-results-heading-align: center;

/* No Results Body */
--no-results-body-font-family: var(--typography-font-family-Roobert);
--no-results-body-font-size: var(--typography-font-size-18);
--no-results-body-font-weight: var(--typography-font-weight-regular);
--no-results-body-line-height: var(--typography-line-height-24);
--no-results-body-letter-spacing: var(--typography-letter-spacing-0dot2);
--no-results-body-color: var(--color-content-primary);
--no-results-body-align: center;
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `typography/font-size/22` | - | - | 22px | 22px |
| `typography/line-height/28` | - | - | 28px | 28px |
| `typography/font-size/18` | - | - | 18px | 18px |
| `typography/line-height/24` | - | - | 24px | 24px |
| `typography/letter-spacing/0dot2` | - | - | 0.2px | 0.2px |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/ohmedarkblue` | #032536 | Text color (light mode) |
| `color/brand/white` | #FFFFFF | Text color (dark mode) |
| `Values/space/space-6x` | 24px | Element gaps |

## Anatomy

```
No Results Component
â””â”€â”€ Container (380px width, center-aligned)
    â”œâ”€â”€ Illustration (24px gap below)
    â”‚   â”œâ”€â”€ Cloud variant: 273px Ã— 200px (search/filter)
    â”‚   â””â”€â”€ Environment variant: 192px Ã— 192px (setup)
    â”œâ”€â”€ Heading (24px gap below)
    â”‚   â”œâ”€â”€ Typography: 22px / 28px (H6)
    â”‚   â”œâ”€â”€ Color: content/primary (mode-aware)
    â”‚   â”œâ”€â”€ Alignment: Center
    â”‚   â””â”€â”€ Max Height: 44px (~2 lines)
    â”œâ”€â”€ Body Text (optional, 24px gap below)
    â”‚   â”œâ”€â”€ Typography: 18px / 24px
    â”‚   â”œâ”€â”€ Color: content/primary (mode-aware)
    â”‚   â”œâ”€â”€ Alignment: Center
    â”‚   â””â”€â”€ Multi-line support
    â””â”€â”€ Action Button
        â”œâ”€â”€ Type: Primary button
        â”œâ”€â”€ Icon: Plus (24Ã—24px)
        â”œâ”€â”€ Text: "Add" or custom
        â””â”€â”€ Standard button styling
```

## Component Properties

```typescript
type NoResultsProps = {
  className?: string;
  variant?: "search" | "setup";
  heading: string;
  subText?: string;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  onAction?: () => void;
  illustration?: "cloud" | "environment" | React.ReactNode;
};
```

### Property: `variant` (string, optional)
Visual variant determining illustration and context.

**Values:**
- `"search"` - Cloud with sad face, for no search/filter results
- `"setup"` - Environment with plant, for first-time setup/onboarding

**Default:** `"search"`

---

### Property: `heading` (string, required)
Main message displayed to user.

**Examples:**
- "No results found for 'The heights'"
- "Set up your first company"
- "No jobs scheduled today"
- "No partners added yet"

**Guidelines:**
- Keep concise (1-2 lines)
- Be specific about what's missing
- Use friendly, helpful tone

---

### Property: `subText` (string, optional)
Additional context or guidance.

**Examples:**
- "Add a company to invite them into the hub and give them everything they need to manage their users and settings in one place"
- "Try adjusting your filters or search terms"
- "Click Add to create your first job"

**When to Use:**
- First-time setup flows
- Complex features needing explanation
- When action isn't obvious

**When Not to Use:**
- Simple search no-results (self-explanatory)
- Filtered states (user knows why empty)

---

### Property: `buttonText` (string, optional)
Text for action button.

**Default:** "Add"  
**Examples:** "Add Company", "Create Job", "Add Partner"

---

## Implementation Examples

### Search No Results

```tsx
import NoResults from '@/components/functional/NoResults';

// Simple search with no results
<NoResults
  variant="search"
  heading="No results found for 'The heights'"
  buttonText="Add"
  onAction={() => openAddModal()}
/>

// Filter no results
<NoResults
  variant="search"
  heading="No jobs match your filters"
  buttonText="Clear filters"
  onAction={clearAllFilters}
/>
```

### First-Time Setup

```tsx
// Company setup
<NoResults
  variant="setup"
  heading="Set up your first company"
  subText="Add a company to invite them into the hub and give them everything they need to manage their users and settings in one place"
  buttonText="Add Company"
  onAction={() => navigate('/companies/new')}
/>

// Partner onboarding
<NoResults
  variant="setup"
  heading="Welcome to Partner Management"
  subText="Get started by adding your first partner. They'll be able to manage installations and view their job dashboard."
  buttonText="Add Partner"
  onAction={() => setShowPartnerModal(true)}
/>
```

### Table Empty State

```tsx
const JobsTableWithEmptyState = ({ jobs, filters }) => {
  if (jobs.length === 0) {
    const hasFilters = Object.keys(filters).length > 0;
    
    return (
      <NoResults
        variant="search"
        heading={
          hasFilters 
            ? "No jobs match your filters"
            : "No jobs scheduled"
        }
        buttonText={hasFilters ? "Clear filters" : "Schedule Job"}
        onAction={
          hasFilters 
            ? () => clearFilters()
            : () => openScheduleModal()
        }
      />
    );
  }

  return <JobsTable jobs={jobs} />;
};
```

### Dynamic No Results

```tsx
const DynamicNoResults = ({ searchQuery, totalCount, hasFilters }) => {
  if (totalCount > 0) return null;

  if (searchQuery) {
    return (
      <NoResults
        variant="search"
        heading={`No results found for '${searchQuery}'`}
        buttonText="Clear search"
        onAction={clearSearch}
      />
    );
  }

  if (hasFilters) {
    return (
      <NoResults
        variant="search"
        heading="No matches found"
        subText="Try adjusting your filters to see more results"
        buttonText="Clear filters"
        onAction={clearFilters}
      />
    );
  }

  return (
    <NoResults
      variant="setup"
      heading="Get started"
      subText="You haven't created any items yet. Click Add to create your first one."
      buttonText="Add"
      onAction={openCreateModal}
    />
  );
};
```

## CSS Implementation

### Core Styles

```css
.noResults {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--no-results-gap);
  width: var(--no-results-width);
  padding: 40px 0;
}

/* Illustration container */
.noResults__illustration {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.noResults__illustration--cloud {
  width: 273px;
  height: 200px;
}

.noResults__illustration--environment {
  width: 192px;
  height: 192px;
}

/* Heading */
.noResults__heading {
  font-family: var(--no-results-heading-font-family);
  font-size: var(--no-results-heading-font-size);
  font-weight: var(--no-results-heading-font-weight);
  line-height: var(--no-results-heading-line-height);
  letter-spacing: var(--no-results-heading-letter-spacing);
  color: var(--no-results-heading-color);
  text-align: var(--no-results-heading-align);
  width: 100%;
  max-height: 44px;
}

/* Body text */
.noResults__body {
  font-family: var(--no-results-body-font-family);
  font-size: var(--no-results-body-font-size);
  font-weight: var(--no-results-body-font-weight);
  line-height: var(--no-results-body-line-height);
  letter-spacing: var(--no-results-body-letter-spacing);
  color: var(--no-results-body-color);
  text-align: var(--no-results-body-align);
  width: 100%;
}

/* Action button */
.noResults__button {
  /* Uses standard Primary Button component */
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-content-primary: #032536;
  --no-results-gap: 24px;
  --no-results-width: 380px;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-content-primary: #FFFFFF;
  /* Spacing remains constant */
}
```

## Usage Guidelines

### When to Use No Results

**Search Results:**
- User searches and finds nothing
- Show search query in heading
- Offer to clear search

**Filter Results:**
- Applied filters return no matches
- Suggest adjusting filters
- Offer to clear filters

**First-Time Use:**
- Feature has never been used
- Empty table on first visit
- Onboarding context

**Empty Categories:**
- No items in category
- Category exists but is empty
- Offer to add first item

### Variant Selection

**Without Subtext:**
- Search results (query obvious)
- Filtered results (context clear)
- Simple empty states
- When space is limited

**With Subtext:**
- First-time feature use
- Complex features needing explanation
- Onboarding flows
- When action isn't obvious

### Content Guidelines

**Heading:**
- Be specific about what's missing
- Include search query when relevant
- Use friendly, non-technical language
- Keep to 1-2 lines

**Body Text:**
- Explain why state is empty
- Provide clear next steps
- Be encouraging and helpful
- 2-4 lines maximum

**Button:**
- Clear action verb
- Specific to context
- "Add [Thing]" pattern works well

## Best Practices

### Content Guidelines âœ“
1. **Specific Feedback:** Tell user exactly what's missing
2. **Actionable Language:** Clear next steps
3. **Friendly Tone:** Encouraging, not discouraging
4. **Context Aware:** Different messages for search vs setup
5. **Concise:** Don't over-explain

### Visual Guidelines âœ“
1. **Center Alignment:** All elements centered
2. **Consistent Width:** 380px container
3. **Adequate Spacing:** 24px gaps between elements
4. **Illustration Choice:** Match context (search vs setup)
5. **Single Action:** One primary action button

### Interaction Guidelines âœ“
1. **Clear Action:** Button provides obvious next step
2. **Alternative Actions:** Consider secondary actions (clear filters)
3. **Avoid Dead Ends:** Always provide a way forward
4. **Loading States:** Show loading before no-results
5. **Empty vs Error:** Different messages for errors

## Accessibility

### ARIA Attributes

```tsx
<div 
  className="no-results"
  role="status"
  aria-live="polite"
  aria-label="No results found"
>
  {/* Illustration */}
  <div className="illustration" aria-hidden="true">
    <img src={illustrationSrc} alt="" />
  </div>

  {/* Heading */}
  <h2 className="no-results-heading">
    {heading}
  </h2>

  {/* Body text */}
  {subText && (
    <p className="no-results-body">
      {subText}
    </p>
  )}

  {/* Action button */}
  <button
    onClick={onAction}
    aria-label={`${buttonText} - ${heading}`}
  >
    <PlusIcon aria-hidden="true" />
    {buttonText}
  </button>
</div>
```

### Screen Reader Considerations

```tsx
// Announce when no results appear
<div role="status" aria-live="polite">
  {showNoResults && (
    <NoResults
      heading="No results found"
      subText="Try adjusting your search terms"
    />
  )}
</div>

// Provide context for screen readers
<NoResults
  heading="No jobs scheduled"
  subText="You haven't scheduled any jobs yet"
  buttonText="Schedule first job"
  aria-describedby="no-jobs-help"
/>
<p id="no-jobs-help" className="sr-only">
  To get started, click the Schedule first job button to create your first scheduled job.
</p>
```

## Advanced Patterns

### Search No Results with Suggestions

```tsx
const NoResultsWithSuggestions = ({ searchQuery, suggestions }) => {
  return (
    <div className="no-results-with-suggestions">
      <NoResults
        variant="search"
        heading={`No results found for '${searchQuery}'`}
        subText="Try one of these suggestions:"
      />
      
      <div className="suggestions">
        {suggestions.map(suggestion => (
          <button
            key={suggestion}
            onClick={() => searchFor(suggestion)}
            className="suggestion-chip"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};
```

### Progressive Onboarding

```tsx
const ProgressiveOnboarding = ({ step, totalSteps }) => {
  const onboardingSteps = {
    company: {
      heading: 'Set up your first company',
      subText: 'Add a company to invite them into the hub and give them everything they need to manage their users and settings in one place',
      buttonText: 'Add Company'
    },
    partner: {
      heading: 'Add your first partner',
      subText: 'Partners can manage installations and view their own dashboard',
      buttonText: 'Add Partner'
    },
    job: {
      heading: 'Schedule your first job',
      subText: 'Create and assign jobs to your partners and engineers',
      buttonText: 'Schedule Job'
    }
  };

  const currentStep = onboardingSteps[step];

  return (
    <div className="onboarding-container">
      <div className="progress-indicator">
        Step {totalSteps.indexOf(step) + 1} of {totalSteps.length}
      </div>
      
      <NoResults
        variant="setup"
        heading={currentStep.heading}
        subText={currentStep.subText}
        buttonText={currentStep.buttonText}
        onAction={() => handleStepAction(step)}
      />
    </div>
  );
};
```

### Context-Aware Empty State

```tsx
const ContextAwareNoResults = ({ context, filters, searchQuery }) => {
  const getNoResultsConfig = () => {
    if (searchQuery) {
      return {
        variant: 'search',
        heading: `No results found for '${searchQuery}'`,
        buttonText: 'Clear search',
        onAction: clearSearch
      };
    }

    if (filters.length > 0) {
      return {
        variant: 'search',
        heading: 'No matches found',
        subText: 'Try adjusting your filters',
        buttonText: 'Clear filters',
        onAction: clearFilters
      };
    }

    // First-time use
    return {
      variant: 'setup',
      heading: `Create your first ${context.itemName}`,
      subText: context.onboardingText,
      buttonText: `Add ${context.itemName}`,
      onAction: context.onAdd
    };
  };

  const config = getNoResultsConfig();

  return <NoResults {...config} />;
};
```

### No Results with Alternative Actions

```tsx
const NoResultsWithAlternatives = ({ searchQuery, category }) => {
  return (
    <div className="no-results-with-alternatives">
      <NoResults
        variant="search"
        heading={`No ${category} found for '${searchQuery}'`}
      />

      <div className="alternative-actions">
        <button onClick={clearSearch}>Clear search</button>
        <button onClick={browseAll}>Browse all {category}</button>
        <button onClick={openImport}>Import {category}</button>
      </div>
    </div>
  );
};
```

## Testing Checklist

### Visual Testing
- [ ] Container: 380px width
- [ ] Gap: 24px between all elements
- [ ] Illustration: Correct size (200px or 192px)
- [ ] Heading: 22px / 28px, center-aligned
- [ ] Heading: Max 44px height (~2 lines)
- [ ] Body: 18px / 24px, center-aligned (when present)
- [ ] Button: Primary styling with plus icon
- [ ] All elements vertically centered
- [ ] Light mode: Dark blue text
- [ ] Dark mode: White text

### Functional Testing
- [ ] Button click triggers action
- [ ] Correct illustration shows for variant
- [ ] Heading displays correctly
- [ ] Subtext shows/hides based on prop
- [ ] Button text customizable
- [ ] Action callback fires
- [ ] Component renders in empty state

### Accessibility Testing
- [ ] Container has role="status"
- [ ] Container has aria-live="polite"
- [ ] Illustration is aria-hidden
- [ ] Heading uses proper heading level
- [ ] Button has descriptive aria-label
- [ ] Focus visible on button
- [ ] Screen reader announces empty state

### Mode Testing
- [ ] Heading text adapts to mode
- [ ] Body text adapts to mode
- [ ] Button adapts per component tokens
- [ ] Illustrations visible in both modes
- [ ] Smooth transitions between modes

## Related Components

### Composed From:
- **Button (Primary)** - Action button
- **Icon** - Plus icon in button

### Works With:
- **Table** - Empty table state
- **Search** - No search results
- **Filter** - No filtered results
- **Pagination** - Shows when no data

## Common Patterns

### Table Empty State

```tsx
const TableWithEmptyState = ({ data, isLoading, searchQuery, filters }) => {
  if (isLoading) {
    return <TableSkeleton />;
  }

  if (data.length === 0) {
    return (
      <NoResults
        variant="search"
        heading={
          searchQuery 
            ? `No results found for '${searchQuery}'`
            : filters.length > 0
            ? "No matches found"
            : "No jobs yet"
        }
        subText={
          !searchQuery && filters.length === 0
            ? "Schedule your first job to get started"
            : undefined
        }
        buttonText={
          searchQuery || filters.length > 0
            ? "Clear filters"
            : "Schedule Job"
        }
        onAction={
          searchQuery || filters.length > 0
            ? clearFiltersAndSearch
            : openScheduleModal
        }
      />
    );
  }

  return <Table data={data} />;
};
```

### Dashboard Widget Empty State

```tsx
const DashboardWidget = ({ title, data, onAdd }) => {
  return (
    <div className="dashboard-widget">
      <h3>{title}</h3>
      
      {data.length === 0 ? (
        <NoResults
          variant="setup"
          heading={`No ${title.toLowerCase()} yet`}
          buttonText={`Add ${title.slice(0, -1)}`}
          onAction={onAdd}
        />
      ) : (
        <WidgetContent data={data} />
      )}
    </div>
  );
};
```

### Multi-Step Setup Flow

```tsx
const SetupFlow = ({ completedSteps }) => {
  if (!completedSteps.includes('company')) {
    return (
      <NoResults
        variant="setup"
        heading="Set up your first company"
        subText="Add a company to invite them into the hub and give them everything they need to manage their users and settings in one place"
        buttonText="Add Company"
        onAction={() => navigate('/setup/company')}
      />
    );
  }

  if (!completedSteps.includes('partner')) {
    return (
      <NoResults
        variant="setup"
        heading="Add your first partner"
        subText="Partners will be able to manage their installations and view their job dashboard"
        buttonText="Add Partner"
        onAction={() => navigate('/setup/partner')}
      />
    );
  }

  // Setup complete, show dashboard
  return <Dashboard />;
};
```

## Illustration Assets

### Cloud Illustration (Search Variant)
- **Colors:** Light blue (#D1EFFF), lighter blue (#76D6FF)
- **Elements:** Cloud shapes, sad face
- **Size:** 273px Ã— 200px
- **Use:** Search and filter no-results

### Environment Illustration (Setup Variant)
- **Elements:** Earth/planet with plant growing
- **Size:** 192px Ã— 192px
- **Use:** First-time setup, onboarding

**Note:** Illustrations should be provided as SVG or optimized PNG assets in the design system.

## Version History

- **v1.0** - Initial no results component with search and setup variants

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
