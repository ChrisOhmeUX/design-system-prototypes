# Park & Charge Billing Dashboard — React Prototype

A UX prototype demonstrating the recommended billing interface for Park & Charge building managers, implementing a unified "Earnings" view with conditional payment banner.

---

## Overview

This prototype solves the "month 2 problem" identified in the original 3-tab billing interface, where users encountered empty or stale states during periods when no payment was pending.

### The Problem

With quarterly billing cycles and 30-day payment terms, building managers experienced confusion:

| Month | Original 3-Tab Experience |
|-------|---------------------------|
| Month 1 | Payment tab shows pending invoice ✓ |
| Month 2 | Payment tab shows old/processed data ✗ |
| Month 3 | Payment tab still stale, feels broken ✗ |

### The Solution

A 2-tab structure with conditional UI elements:

| Tab | Content |
|-----|---------|
| **Earnings** | Conditional payment banner (only when payment due) + current quarter card + monthly breakdown |
| **History** | Past payment records |

---

## Key Features

### Conditional Payment Banner
- Only displays when a closed quarter has pending payment
- Automatically hides once payment due date passes
- Prevents empty states and stale information

### Monthly Breakdown Table
- Aggregated view appropriate for building manager role
- Shows only months that have occurred (no future data)
- Current month marked as "in progress" with pro-rata figures
- Quarter totals row with highlighted styling

### Date Simulator
- Test different scenarios without changing system date
- Validates conditional logic across billing cycle
- Includes dark mode toggle for theme review

---

## Date Scenarios

| Scenario | Quarter | Payment State | Banner |
|----------|---------|---------------|--------|
| **15 Jan 2026** | Q1 Month 1 | Q4 pending (due 30 Jan) | ✓ Visible |
| **12 Feb 2026** | Q1 Month 2 | Q4 paid | ✗ Hidden |
| **5 Apr 2026** | Q2 Month 1 | Q1 pending (due 30 Apr) | ✓ Visible |
| **20 May 2026** | Q2 Month 2 | Q1 paid | ✗ Hidden |

---

## Design System Compliance

### Tokens Used

| Category | Tokens |
|----------|--------|
| Typography | `font-family-roobert`, `font-size` scale (14–50px), `font-weight` (400/500/600) |
| Spacing | 4px base unit (`space-1x` through `space-16x`) |
| Colors | 3-tier architecture (primitives → semantic → component) |
| Radii | `radius-1x` (4px), `radius-1halfx` (6px), `radius-2x` (8px) |
| Elevation | `e100`, `e200` box-shadows |

### Components Implemented

| Component | Source Documentation |
|-----------|---------------------|
| Tab System | `Tab_System_Documentation.md` |
| Status Pill | `Status_Pill_Component_Documentation.md` |
| Button | `Button_Component_Documentation.md` |
| Table | `Table_Structure_Documentation.md` |
| Toggle Switch | `Toggle_Switch_System_Documentation.md` |
| Input | `Input_Component_Documentation.md` |

### Dark Mode Support

Implemented via `data-theme="dark"` attribute with Tier 2 semantic token overrides:

| Token | Light | Dark |
|-------|-------|------|
| `surface-canvas` | White | Ohme Dark Blue |
| `surface-brand` | Ohme Dark Blue | Teal 700 |
| `content-primary` | Ohme Dark Blue | White |
| `content-inverse` | White | White |

---

## Design System Gaps Identified

### 1. Payment Banner Card
- **Gap:** No documented "AlertCard" or "HighlightCard" component
- **Solution:** Composed from surface tokens + 2px teal border + radius + elevation
- **Recommendation:** Add AlertCard component with intent variants

### 2. Progress Bar
- **Gap:** Visible in Figma but not fully documented
- **Solution:** Built using teal500 fill, border-subtle track, 8px height
- **Recommendation:** Document ProgressBar with size/color variants

### 3. Stats/Metric Display
- **Gap:** No documented pattern for metric cards
- **Solution:** Composed from typography tokens and grid layout
- **Recommendation:** Add MetricCard component

---

## Component Structure

```
ParkChargeBillingDashboard
├── DateScenarioSelector (prototype controls)
│   └── ToggleSwitch (dark mode)
├── TabGroup
│   ├── Tab: Earnings
│   └── Tab: History
├── [Earnings Panel]
│   ├── StateExplanationBanner (demo only)
│   ├── PaymentBanner (conditional)
│   │   └── StatusPill, Button
│   ├── CurrentQuarterCard
│   │   └── StatusPill, ProgressBar
│   └── MonthlyBreakdownTable
│       └── SortIndicator, ActionLinks
└── [History Panel]
    ├── HistoryStats (4 metric cards)
    └── HistoryTable
```

---

## Business Logic

### Payment Due Date Calculation
```
paymentDueDate = quarterEndDate + 30 days
```

### Banner Visibility Logic
```
showBanner = currentDate < paymentDueDate
```

### Monthly Data Filtering
- Only months that have started are displayed
- Current month shows pro-rata data based on day of month
- Future months within quarter are hidden

---

## Why 2 Tabs for Park & Charge?

Park & Charge uses **quarterly billing** with 30-day payment terms, creating distinct states:

- **Months 1:** Payment pending → banner visible
- **Months 2–3:** Payment processed → banner hidden

The conditional banner provides meaningful progressive disclosure because it **actually disappears** for significant periods.

### Contrast with Connect

Connect uses **2-week cycles** with 30-day terms, meaning payments constantly overlap. This justifies keeping 3 tabs for Connect — the higher frequency means a "conditional" banner would be permanently visible, defeating its purpose.

| Product | Billing Cycle | Recommended Structure |
|---------|---------------|----------------------|
| Park & Charge | Quarterly | 2 tabs (Earnings + History) |
| Connect | 2 weeks | 3 tabs (Payment + Collection + History) |

---

## Usage

### Option 1: Run Directly in Browser

Simply open `index.html` in any modern browser. No build step required — the file includes:
- React 18 via CDN
- Babel standalone for JSX transpilation
- All styles and components embedded

### Option 2: Host on GitHub Pages

1. Create a new GitHub repository
2. Upload all files to the repository root
3. Go to **Settings → Pages**
4. Under "Source", select **Deploy from a branch**
5. Choose `main` branch and `/ (root)` folder
6. Click **Save**
7. Your prototype will be live at `https://[username].github.io/[repo-name]/`

### Option 3: Import as React Component

```jsx
import ParkChargeBillingDashboard from './ParkChargeBillingDashboard';

function App() {
  return <ParkChargeBillingDashboard />;
}
```

---

## Files

| File | Description |
|------|-------------|
| `index.html` | **Standalone HTML** — runs directly in browser or GitHub Pages |
| `ParkChargeBillingDashboard.jsx` | React component for integration into existing projects |
| `README.md` | This documentation |

---

## GitHub Pages Quick Start

```bash
# Clone your repo
git clone https://github.com/[username]/[repo-name].git
cd [repo-name]

# Add the files
# (copy index.html, ParkChargeBillingDashboard.jsx, README.md)

# Push to GitHub
git add .
git commit -m "Add Park & Charge billing prototype"
git push origin main

# Then enable GitHub Pages in repository Settings
```

---

## Author

Created as part of Ohme Design System development.
