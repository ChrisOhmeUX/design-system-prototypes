# Table System - Documentation Index

## Overview

The Table System is a comprehensive data display framework consisting of 17+ interconnected components organized into focused documentation modules for easier reference.

**Component Type:** Functional Component System  
**Category:** Data Display / Tables  
**Platforms:** Connect, Shared Parking, Hub, Dealer Portal, Volt, Pulse

---

# Documentation Modules

## 1. Table Cell System
**File:** `Table_Cell_System_Documentation.md`

**Covers:** 8 cell types for data display
- Text Cell (single line)
- Text 2 Lines Cell (multi-line)
- Number Cell (right-aligned, formatted)
- Currency Cell (monetary values)
- Status Cell (status pills)
- Action Cell (buttons/links)
- Namegroup Cell (avatar + name)
- Type8 Cell (secondary actions)

**Key Specs:**
- Row Height: 72px
- Typography: 18px / 24px
- Left/right alignment by type
- Overflow handling with ellipsis

---

## 2. Table Column Sort
**File:** `Table_Column_Sort_Documentation.md`

**Covers:** Sorting controls and column headers
- Column Sort (3 states: Unsorted, Ascending, Descending)
- Cell Description (column header + sort)

**Key Specs:**
- Sort Indicator: 16px Ã— 21px
- Header Height: 32px
- Typography: 14px UPPERCASE
- Active/inactive arrow states

---

## 3. Table Tracker and Analytics
**File:** `Table_Tracker_Analytics_Documentation.md`

**Covers:** Metric visualization and analytics
- Tracker (4 variants: up/down Ã— positive/negative)
- Analytics Filter (clickable metric cards)

**Platforms:**
- Shared Parking (6 metrics)
- Connect (6 metrics)
- Dealer Portal (5 metrics)

**Key Specs:**
- Tracker: 22px icon + percentage
- Analytics Card: 242-254px Ã— 89px
- Green for positive, red for negative
- Clickable cards filter table

---

## 4. Table Controls
**File:** `Table_Controls_Documentation.md`

**Covers:** Table control interface
- Search and Filter (search input + filter button)
- Applied Filters (removable filter pills)
- Tabs (data segmentation with counts)
- Result Count (showing X out of Y)

**Key Specs:**
- Search: 1104px desktop, 375px mobile
- Filter Pills: Warning intent, small size
- Tabs: 40px height, 3px teal border when selected
- Desktop/mobile responsive layouts

---

## 5. Table Structure
**File:** `Table_Structure_Documentation.md`

**Covers:** Complete table assembly
- Header (row of cell descriptions)
- Row (row of cells, 72px height)
- Table Results (header + rows + pagination)
- Full Table (controls + results)

**Key Specs:**
- Desktop: 1192px Ã— 763px (typical)
- Mobile: 375px Ã— 1284px (uses cards)
- Header: 32px height
- Row: 72px height
- Platform-specific column configurations

---

# Component Hierarchy

```
Full Table
â”œâ”€â”€ Table Controls
â”‚   â”œâ”€â”€ Search and Filter
â”‚   â”œâ”€â”€ Applied Filters
â”‚   â”œâ”€â”€ Tabs
â”‚   â””â”€â”€ Result Count
â””â”€â”€ Table Results
    â”œâ”€â”€ Header
    â”‚   â””â”€â”€ Cell Descriptions (with Column Sort)
    â”œâ”€â”€ Rows
    â”‚   â””â”€â”€ Cells (8 types)
    â””â”€â”€ Pagination
```

---

# Quick Reference

## Common Column Configurations

**Connect Platform:**
- CUSTOMER NAME (Namegroup cell, sortable)
- STATUS (Status cell, sortable)
- JOB TYPE (Text cell, non-sortable, uses JobTypePill)
- POSTCODE (Text cell, sortable)
- ENTERED STATUS (Text cell, sortable)
- LEAD ID (Text cell, sortable, right-aligned)
- ASSIGNED TO (Text cell, non-sortable)

**Shared Parking - Location:**
- NAME (Text cell, sortable)
- POSTCODE (Text cell, sortable)
- AVAILABLE CHARGERS (Number cell, sortable)
- USERS (Number cell, sortable)
- STATUS (Status cell, sortable)

**Hub - User:**
- NAME (Namegroup cell, sortable)
- EMAIL (Text cell, sortable)
- COMPANY (Text cell, sortable)
- OHME ADMIN (Status cell, sortable)
- STATUS (Status cell, sortable)

---

# Integration Example

```tsx
import FullTable from '@/components/table/FullTable';

const JobsPage = () => {
  return (
    <div className="page-container">
      <Header />
      
      <FullTable
        platform="Connect"
        data={jobs}
        columns={connectColumnConfig}
        // ... all props for search, filter, sort, pagination
      />
    </div>
  );
};
```

---

# Token Summary

**Key Token Categories:**
- **Cell Tokens:** Typography, alignment, overflow (18px / 24px)
- **Header Tokens:** UPPERCASE 14px, 32px height
- **Row Tokens:** 72px height, hover states
- **Sort Tokens:** Active/inactive chevron colors
- **Tracker Tokens:** Success/error surface and content
- **Filter Tokens:** Warning intent pills
- **Tab Tokens:** Selected border (3px teal), count colors
- **Analytics Tokens:** Card dimensions, label/value typography

**All components use mode-aware tokens** with proper light/dark mode inversions.

---

# Version History

- **v1.0** - Initial modular table system documentation

---

*Component Documentation - Ohme Design System*  
*Table System - Overview and Index*  
*Last Updated: January 2025*
