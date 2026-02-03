# T&Cs Resource Management

A prototype for managing Terms & Conditions documents across Ohme's product ecosystem. Built with React and the Ohme Design System.

## Overview

This feature enables administrators to manage T&Cs documents across multiple resources (Connect, Fleet Portal, Volt, Dealer Portal, Pulse) and countries, with full version history tracking.

## Features

- **Resource Management** — View all resources with T&Cs document counts
- **Country Filtering** — Browse T&Cs by country within each resource
- **Version Control** — Upload new versions with automatic version incrementing
- **Status Management** — Set active/inactive status for T&Cs documents
- **File Upload** — Drag-and-drop PDF upload with validation
- **Audit Trail** — Full version history with upload dates and user attribution

## Navigation Structure

```
Resources → Countries → T&Cs List → Version History
```

Each level includes breadcrumb navigation and back buttons for easy traversal.

## Demo

Open `tcs-resource-management.html` directly in a browser—no build process required.

## Deployment

### GitHub Pages

1. Upload `tcs-resource-management.html` to your repository
2. Navigate to **Settings → Pages**
3. Select your branch and root folder
4. Access at `https://[username].github.io/[repo]/tcs-resource-management.html`

### Other Static Hosts

Upload the HTML file to any static hosting service (Netlify, Vercel, S3, etc.).

## Technical Details

### Dependencies (loaded via CDN)

- React 18
- ReactDOM 18
- Babel Standalone (for JSX transformation)

### Design System

Implements the Ohme three-tier token architecture:

| Tier | Purpose | Example |
|------|---------|---------|
| T1 Primitives | Raw values | `--t1-brand-highlighterteal: #00FFD6` |
| T2 Semantic | Contextual meaning | `--t2-content-primary` |
| T3 Component | Component-specific | `--t3-button-primary-bg` |

### Components Used

- Button (primary, secondary, ghost variants)
- Input (with validation states)
- Dropdown (single-select)
- Checkbox
- Modal (with focus trapping)
- Table (header, row, cell)
- StatusPill (active, inactive, draft)
- Toast (success, error)
- FileUploadZone (drag-and-drop)
- EmptyState

### Accessibility

- WCAG AA colour contrast compliance
- Full keyboard navigation (Tab, Enter, Space, Escape, Arrow keys)
- ARIA labels and roles throughout
- Focus management in modals
- Screen reader announcements for state changes

## Browser Support

Modern browsers with ES6+ and CSS Custom Properties support:

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## File Structure

```
tcs-resource-management.html    # Complete standalone application
README.md                       # This file
```

## Mock Data

The prototype includes sample data for demonstration. Replace the mock data objects with API calls for production use:

- `mockResources` — Resource definitions
- `mockCountries` — Country assignments per resource
- `mockTcs` — T&Cs document records
- `mockVersions` — Version history entries

## Design System Gaps

The following components were identified as gaps during development and are implemented locally:

- **FileUploadZone** — Drag-and-drop file upload pattern
- **Breadcrumbs** — Location-based navigation component

These should be added to the core design system for reuse across products.

## Licence

Internal Ohme use only.
