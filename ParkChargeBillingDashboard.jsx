/**
 * Park & Charge Billing Dashboard - React Prototype
 * 
 * Implements Approach A: Unified "Earnings" view with conditional payment banner
 * 
 * DESIGN SYSTEM COMPLIANCE:
 * ========================
 * 
 * TOKENS USED (from Token_System_Documentation.md):
 * - Typography: Roobert font family, font-size scale (14-50px), line-height scale
 * - Spacing: 4px base unit system (space-0x through space-16x)
 * - Colors: Tier 1 primitives → Tier 2 semantic → Tier 3 component tokens
 * - Corner radii: radius-1x (4px), radius-1halfx (6px), radius-2x (8px)
 * - Elevation: e100, e200 (box-shadow levels)
 * - Border widths: hairline (1px), thin (2px)
 * 
 * COMPONENTS USED (from design system documentation):
 * - Tab System (Tab_System_Documentation.md): New-style tabs with teal active indicator
 * - Status Pill (Status_Pill_Component_Documentation.md): Information, Success, Warning, Error intents
 * - Button (Button_Component_Documentation.md): Primary, Secondary, Tertiary variants
 * - Table System (Table_Structure_Documentation.md): Headers, rows, cells, pagination
 * - Input (Input_Component_Documentation.md): Search field with icon
 * 
 * DESIGN SYSTEM GAPS IDENTIFIED:
 * =============================
 * 1. Payment Banner Card: No documented "alert card" or "highlight card" component exists.
 *    - SOLUTION: Composed from documented primitives (surface tokens + border + content layout)
 *    - RECOMMENDATION: Add "AlertCard" or "HighlightCard" to design system with intents
 * 
 * 2. Progress Bar: Visible in Figma but not fully documented with tokens.
 *    - SOLUTION: Built using documented color tokens (teal for progress, grey for track)
 *    - RECOMMENDATION: Document ProgressBar component with size variants and token mappings
 * 
 * 3. Summary Stats Row: No documented "stats card" pattern.
 *    - SOLUTION: Composed from typography tokens and layout patterns
 *    - RECOMMENDATION: Consider adding MetricCard or StatDisplay component
 * 
 * ASSUMPTIONS:
 * ============
 * - Quarter dates are calculated from current date
 * - Payment due 30 days after quarter close
 * - Session data structure based on Figma designs
 * - "Ready to pay" banner only shows when a closed quarter has pending payment
 * - Dark mode support via [data-theme="dark"] attribute on root
 */

import React, { useState } from 'react';

// ============================================================================
// CSS-IN-JS STYLES (Using Design System Tokens)
// ============================================================================

const styles = `
/* ============================================================================
   CSS CUSTOM PROPERTIES - DESIGN SYSTEM TOKENS
   Source: Token_System_Documentation.md
   ============================================================================ */

:root {
  /* Tier 1 - Primitives: Colors */
  --color-brand-highlighterteal: #00FFD6;
  --color-brand-ohmedarkblue: #032536;
  --color-brand-white: #FFFFFF;
  --color-brand-smokeygrey: #D1D1D1;
  --color-secondary-teal100: #C0FFF6;
  --color-secondary-teal300: #6BFFE6;
  --color-secondary-teal500: #01E6C1;
  --color-secondary-teal700: #0EBA9E;
  --color-secondary-teal900: #003A37;
  --color-secondary-grey200: #E5E8E8;
  --color-secondary-grey300: #ADB3B1;
  --color-secondary-grey700: #647882;
  --color-secondary-grey800: #3D4A4E;
  --color-tertiary-smokeyblue: #F5F8FA;
  --color-tertiary-lakeblue: #0B2539;
  --color-tertiary-lightgrey: #E9E9E9;
  
  /* Tier 1 - Primitives: Semantic State Colors */
  --color-state-success-100: #DDFBE5;
  --color-state-success-900: #072C14;
  --color-state-info-100: #D1EFFF;
  --color-state-info-900: #062965;
  --color-state-warning-100: #FFF2C6;
  --color-state-warning-900: #441906;
  --color-state-error-100: #FFE1E1;
  --color-state-error-900: #580202;

  /* Tier 1 - Primitives: Spacing (4px base unit) */
  --space-0x: 0px;
  --space-halfx: 2px;
  --space-1x: 4px;
  --space-1halfx: 6px;
  --space-2x: 8px;
  --space-3x: 12px;
  --space-4x: 16px;
  --space-5x: 20px;
  --space-6x: 24px;
  --space-8x: 32px;
  --space-10x: 40px;
  --space-12x: 48px;
  --space-16x: 64px;

  /* Tier 1 - Primitives: Corner Radii */
  --radius-0x: 0px;
  --radius-halfx: 2px;
  --radius-1x: 4px;
  --radius-1halfx: 6px;
  --radius-2x: 8px;
  --radius-2halfx: 10px;
  --radius-max: 100px;

  /* Tier 1 - Primitives: Typography */
  --font-family-roobert: 'Roobert', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  
  /* Tier 1 - Primitives: Elevation */
  --elevation-100: 0 1px 3px rgba(0, 0, 0, 0.1);
  --elevation-200: 0 4px 12px rgba(0, 0, 0, 0.15);

  /* Tier 2 - Semantic: Light Mode Defaults */
  --color-surface-canvas: var(--color-brand-white);
  --color-surface-base: var(--color-tertiary-smokeyblue);
  --color-surface-brand: var(--color-brand-ohmedarkblue);
  --color-content-primary: var(--color-brand-ohmedarkblue);
  --color-content-secondary: var(--color-secondary-grey700);
  --color-content-inverse: var(--color-brand-white);
  --color-border-default: var(--color-brand-ohmedarkblue);
  --color-border-subtle: var(--color-secondary-grey200);
  --color-interactive-primary-surface: var(--color-brand-highlighterteal);
  --color-interactive-primary-content: var(--color-brand-ohmedarkblue);
  
  /* Tier 2 - Semantic: State Colors (Light Mode) */
  --color-state-success-surface: var(--color-state-success-100);
  --color-state-success-content: var(--color-state-success-900);
  --color-state-info-surface: var(--color-state-info-100);
  --color-state-info-content: var(--color-state-info-900);
  --color-state-warning-surface: var(--color-state-warning-100);
  --color-state-warning-content: var(--color-state-warning-900);
  --color-state-error-surface: var(--color-state-error-100);
  --color-state-error-content: var(--color-state-error-900);

  /* Tier 3 - Component: Tab Tokens */
  --tab-active-surface: var(--color-secondary-teal100);
  --tab-active-content: var(--color-content-primary);
  --tab-inactive-surface: var(--color-surface-base);
  --tab-inactive-content: var(--color-content-primary);
  --tab-border-active: var(--color-brand-highlighterteal);

  /* Tier 3 - Component: Pill Tokens */
  --pill-intent-success-surface: var(--color-state-success-surface);
  --pill-intent-success-content: var(--color-state-success-content);
  --pill-intent-info-surface: var(--color-state-info-surface);
  --pill-intent-info-content: var(--color-state-info-content);
  --pill-intent-warning-surface: var(--color-state-warning-surface);
  --pill-intent-warning-content: var(--color-state-warning-content);
  --pill-intent-error-surface: var(--color-state-error-surface);
  --pill-intent-error-content: var(--color-state-error-content);

  /* Tier 3 - Component: Button Tokens */
  --button-primary-surface: var(--color-interactive-primary-surface);
  --button-primary-content: var(--color-interactive-primary-content);
  --button-secondary-surface: var(--color-surface-canvas);
  --button-secondary-content: var(--color-content-primary);
  --button-secondary-border: var(--color-border-default);
  --button-secondary-hover: var(--color-tertiary-lightgrey);

  /* Tier 3 - Component: Input Tokens */
  --input-surface: var(--color-surface-canvas);
  --input-border: var(--color-secondary-grey300);
  --input-border-focus: var(--color-brand-ohmedarkblue);
  --input-content: var(--color-content-primary);
  --input-placeholder: var(--color-secondary-grey700);
}

/* Dark Mode Overrides - Tier 2 Semantic Layer */
[data-theme="dark"] {
  --color-surface-canvas: var(--color-brand-ohmedarkblue);
  --color-surface-base: var(--color-tertiary-lakeblue);
  --color-surface-brand: var(--color-secondary-teal700); /* FIX: Use teal for contrast in dark mode */
  --color-content-primary: var(--color-brand-white);
  --color-content-secondary: var(--color-secondary-grey300);
  --color-content-inverse: var(--color-brand-white); /* FIX: Keep white for totals row text */
  --color-border-default: var(--color-secondary-grey300);
  --color-border-subtle: var(--color-secondary-grey800);
  
  /* State colors invert in dark mode */
  --color-state-success-surface: var(--color-state-success-900);
  --color-state-success-content: var(--color-state-success-100);
  --color-state-info-surface: var(--color-state-info-900);
  --color-state-info-content: var(--color-state-info-100);
  --color-state-warning-surface: var(--color-state-warning-900);
  --color-state-warning-content: var(--color-state-warning-100);
  --color-state-error-surface: var(--color-state-error-900);
  --color-state-error-content: var(--color-state-error-100);

  /* Tab tokens update via semantic layer */
  --tab-active-surface: var(--color-secondary-teal900);
  --tab-inactive-surface: var(--color-surface-base);

  /* Button secondary adapts */
  --button-secondary-surface: transparent;
  --button-secondary-content: var(--color-brand-white);
  --button-secondary-border: var(--color-secondary-grey300);
  --button-secondary-hover: var(--color-secondary-grey800); /* FIX: Dark hover state */

  /* Input adapts */
  --input-surface: var(--color-surface-canvas);
  --input-border: var(--color-secondary-grey700);
  --input-border-focus: var(--color-brand-white);
  --input-content: var(--color-brand-white);
  --input-placeholder: var(--color-secondary-grey300);
}

/* ============================================================================
   LAYOUT - Page Structure
   ============================================================================ */

.billingDashboard {
  min-height: 100vh;
  background: var(--color-surface-base);
  font-family: var(--font-family-roobert);
  color: var(--color-content-primary);
}

.billingDashboard__main {
  padding: var(--space-6x);
  max-width: 1440px;
  margin: 0 auto;
}

/* Responsive: Mobile */
@media (max-width: 768px) {
  .billingDashboard__main {
    padding: var(--space-4x);
  }
}

/* ============================================================================
   PAGE HEADER
   Pattern: Title Group from design system
   ============================================================================ */

.pageHeader {
  display: flex;
  align-items: center;
  gap: var(--space-4x);
  margin-bottom: var(--space-6x);
}

.pageHeader__icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-primary);
}

.pageHeader__title {
  font-size: 44px;
  line-height: 50px;
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.5px;
  margin: 0;
}

@media (max-width: 768px) {
  .pageHeader__title {
    font-size: 28px;
    line-height: 36px;
  }
}

/* ============================================================================
   TAB COMPONENT
   Source: Tab_System_Documentation.md - New Style Tabs
   
   Specs:
   - Height: 40px
   - Padding: 8px
   - Corner Radius: 6px
   - Gap: 12px between icon and label
   - Typography: 18px / 24px, letter-spacing 0.2px
   ============================================================================ */

.tabGroup {
  display: flex;
  gap: 0;
  margin-bottom: var(--space-6x);
  border-bottom: 1px solid var(--color-border-subtle);
}

.tab {
  display: flex;
  align-items: center;
  gap: var(--space-3x);
  padding: var(--space-2x) var(--space-4x);
  height: 40px;
  
  font-family: var(--font-family-roobert);
  font-size: 18px;
  line-height: 24px;
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  border-radius: var(--radius-1halfx) var(--radius-1halfx) 0 0;
  
  color: var(--color-content-primary);
  cursor: pointer;
  transition: all 150ms ease;
}

.tab:hover {
  background: var(--tab-inactive-surface);
}

.tab:focus-visible {
  outline: 2px solid var(--color-interactive-primary-surface);
  outline-offset: 2px;
}

.tab--active {
  background: var(--tab-active-surface);
  border-bottom-color: var(--tab-border-active);
}

.tab__icon {
  width: 24px;
  height: 24px;
}

/* ============================================================================
   PAYMENT BANNER CARD
   
   ⚠️ DESIGN SYSTEM GAP: No documented "AlertCard" component exists.
   
   COMPOSITION: Built from documented primitives:
   - Surface: surface/canvas token
   - Border: 2px solid using teal for "ready to pay" emphasis
   - Corner radius: radius-2x (8px) - matches card patterns
   - Padding: space-6x (24px)
   - Elevation: elevation-100
   
   RECOMMENDATION: Add AlertCard/HighlightCard component to design system
   with intent variants (success, warning, info, neutral)
   ============================================================================ */

.paymentBanner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-6x);
  
  padding: var(--space-6x);
  margin-bottom: var(--space-6x);
  
  background: var(--color-surface-canvas);
  border: 2px solid var(--color-secondary-teal500);
  border-radius: var(--radius-2x);
  box-shadow: var(--elevation-100);
}

.paymentBanner__content {
  flex: 1;
}

.paymentBanner__header {
  display: flex;
  align-items: center;
  gap: var(--space-3x);
  margin-bottom: var(--space-2x);
}

.paymentBanner__quarterLabel {
  font-size: 22px;
  line-height: 28px;
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.2px;
  margin: 0;
}

.paymentBanner__dateRange {
  font-size: 16px;
  line-height: 24px;
  color: var(--color-content-secondary);
  margin-bottom: var(--space-4x);
}

.paymentBanner__amount {
  font-size: 36px;
  line-height: 44px;
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.3px;
  margin-bottom: var(--space-2x);
}

.paymentBanner__paymentDate {
  font-size: 14px;
  line-height: 24px;
  color: var(--color-content-secondary);
}

.paymentBanner__actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-3x);
  align-items: flex-end;
}

@media (max-width: 768px) {
  .paymentBanner {
    flex-direction: column;
  }
  
  .paymentBanner__actions {
    width: 100%;
    flex-direction: row;
  }
  
  .paymentBanner__amount {
    font-size: 28px;
    line-height: 36px;
  }
}

/* ============================================================================
   CURRENT QUARTER CARD
   Pattern: Content card using surface/canvas
   ============================================================================ */

.currentQuarterCard {
  background: var(--color-surface-canvas);
  border-radius: var(--radius-2x);
  padding: var(--space-6x);
  margin-bottom: var(--space-6x);
  box-shadow: var(--elevation-100);
}

.currentQuarterCard__header {
  display: flex;
  align-items: center;
  gap: var(--space-3x);
  margin-bottom: var(--space-4x);
}

.currentQuarterCard__title {
  font-size: 22px;
  line-height: 28px;
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.2px;
  margin: 0;
}

.currentQuarterCard__dateRange {
  font-size: 16px;
  line-height: 24px;
  color: var(--color-content-secondary);
  margin-bottom: var(--space-6x);
}

/* ============================================================================
   STATS ROW
   
   ⚠️ DESIGN SYSTEM GAP: No documented "StatsCard" or "MetricDisplay" component.
   
   COMPOSITION: Built from typography tokens and flex layout
   RECOMMENDATION: Add MetricCard component with label/value/trend variants
   ============================================================================ */

.statsRow {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-6x);
  margin-bottom: var(--space-6x);
  padding-bottom: var(--space-6x);
  border-bottom: 1px solid var(--color-border-subtle);
}

.statItem {
  display: flex;
  flex-direction: column;
  gap: var(--space-1x);
}

.statItem__label {
  font-size: 14px;
  line-height: 24px;
  color: var(--color-content-secondary);
  letter-spacing: 0.1px;
}

.statItem__value {
  font-size: 26px;
  line-height: 32px;
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.2px;
}

.statItem__subtext {
  font-size: 14px;
  line-height: 24px;
  color: var(--color-content-secondary);
}

/* ============================================================================
   PROGRESS BAR
   
   ⚠️ DESIGN SYSTEM GAP: ProgressBar not fully documented with tokens.
   
   COMPOSITION: Built using documented color tokens:
   - Track: border-subtle (grey)
   - Fill: highlighterteal / teal500
   - Height: 8px (space-2x)
   - Border radius: radius-max (pill shape)
   
   RECOMMENDATION: Document ProgressBar component with:
   - Size variants (sm: 4px, md: 8px, lg: 12px)
   - Color variants (default, success, warning, error)
   - Determinate vs indeterminate states
   ============================================================================ */

.progressSection {
  margin-bottom: var(--space-4x);
}

.progressSection__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-3x);
}

.progressSection__label {
  font-size: 14px;
  line-height: 24px;
  color: var(--color-content-secondary);
}

.progressSection__daysLeft {
  font-size: 14px;
  line-height: 24px;
  color: var(--color-content-secondary);
}

.progressBar {
  width: 100%;
  height: var(--space-2x);
  background: var(--color-border-subtle);
  border-radius: var(--radius-max);
  overflow: hidden;
}

.progressBar__fill {
  height: 100%;
  background: var(--color-secondary-teal500);
  border-radius: var(--radius-max);
  transition: width 300ms ease;
}

/* ============================================================================
   STATUS PILL
   Source: Status_Pill_Component_Documentation.md
   
   Specs:
   - Height: 32px (Regular size)
   - Padding: 4px 12px
   - Corner Radius: 6px
   - Typography: 14px / 24px, letter-spacing 0.1px
   - Intents: Information (blue), Success (green), Warning (yellow), Error (red)
   ============================================================================ */

.statusPill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1halfx);
  
  padding: var(--space-1x) var(--space-3x);
  height: 32px;
  
  font-family: var(--font-family-roobert);
  font-size: 14px;
  line-height: 24px;
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.1px;
  
  border-radius: var(--radius-1halfx);
  white-space: nowrap;
}

.statusPill--information {
  background: var(--pill-intent-info-surface);
  color: var(--pill-intent-info-content);
}

.statusPill--success {
  background: var(--pill-intent-success-surface);
  color: var(--pill-intent-success-content);
}

.statusPill--warning {
  background: var(--pill-intent-warning-surface);
  color: var(--pill-intent-warning-content);
}

.statusPill--error {
  background: var(--pill-intent-error-surface);
  color: var(--pill-intent-error-content);
}

/* ============================================================================
   BUTTON
   Source: Button_Component_Documentation.md
   
   Specs:
   - Medium: 40px height, 6px radius
   - Large: 48px height, 8px radius
   - Padding: 8px
   - Typography: 18px / 24px, SemiBold
   - Gap: 8px (icon to text)
   ============================================================================ */

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2x);
  
  padding: var(--space-2x) var(--space-4x);
  height: 40px;
  
  font-family: var(--font-family-roobert);
  font-size: 18px;
  line-height: 24px;
  font-weight: var(--font-weight-semibold);
  
  border-width: 1px;
  border-style: solid;
  border-radius: var(--radius-1halfx);
  
  cursor: pointer;
  transition: all 150ms ease;
  white-space: nowrap;
}

.button:focus-visible {
  outline: 2px solid var(--color-interactive-primary-surface);
  outline-offset: 2px;
}

.button--primary {
  background: var(--button-primary-surface);
  color: var(--button-primary-content);
  border-color: var(--button-primary-surface);
}

.button--primary:hover {
  background: var(--color-secondary-teal500);
  border-color: var(--color-secondary-teal500);
}

.button--secondary {
  background: var(--button-secondary-surface);
  color: var(--button-secondary-content);
  border-color: var(--button-secondary-border);
}

.button--secondary:hover {
  background: var(--button-secondary-hover);
}

.button--large {
  height: 48px;
  padding: var(--space-2x) var(--space-6x);
  border-radius: var(--radius-2x);
}

/* ============================================================================
   TABLE SYSTEM
   Source: Table_Structure_Documentation.md, Table_Controls_Documentation.md
   ============================================================================ */

.tableSection {
  background: var(--color-surface-canvas);
  border-radius: var(--radius-2x);
  padding: var(--space-6x);
  box-shadow: var(--elevation-100);
}

.tableSection__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-4x);
  margin-bottom: var(--space-6x);
}

.tableSection__title {
  font-size: 22px;
  line-height: 28px;
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.2px;
  margin: 0;
}

/* Search and Filter - from Table_Controls_Documentation.md */
.searchAndFilter {
  display: flex;
  gap: var(--space-4x);
  align-items: center;
}

@media (max-width: 768px) {
  .tableSection__header {
    flex-direction: column;
    align-items: stretch;
  }
  
  .searchAndFilter {
    flex-direction: column;
  }
}

/* Input - from Input_Component_Documentation.md */
.searchInput {
  display: flex;
  align-items: center;
  gap: var(--space-2x);
  
  width: 320px;
  height: 48px;
  padding: 0 var(--space-4x);
  
  background: var(--input-surface);
  border: 1px solid var(--input-border);
  border-radius: var(--radius-1halfx);
  
  font-family: var(--font-family-roobert);
  font-size: 16px;
  line-height: 24px;
  color: var(--input-content);
}

.searchInput:focus-within {
  border-color: var(--input-border-focus);
  outline: none;
}

.searchInput__field {
  flex: 1;
  border: none;
  background: transparent;
  font: inherit;
  color: inherit;
  outline: none;
}

.searchInput__field::placeholder {
  color: var(--input-placeholder);
}

.searchInput__icon {
  width: 24px;
  height: 24px;
  color: var(--color-content-secondary);
}

@media (max-width: 768px) {
  .searchInput {
    width: 100%;
  }
}

/* Filter Button */
.filterButton {
  display: flex;
  align-items: center;
  gap: var(--space-2x);
  
  padding: var(--space-2x) var(--space-4x);
  height: 48px;
  
  background: var(--button-secondary-surface);
  border: 1px solid var(--button-secondary-border);
  border-radius: var(--radius-1halfx);
  
  font-family: var(--font-family-roobert);
  font-size: 16px;
  line-height: 24px;
  font-weight: var(--font-weight-regular);
  color: var(--button-secondary-content);
  
  cursor: pointer;
  transition: background 150ms ease;
}

.filterButton:hover {
  background: var(--button-secondary-hover);
}

.filterButton:focus-visible {
  outline: 2px solid var(--color-interactive-primary-surface);
  outline-offset: 2px;
}

.filterButton__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  min-width: 20px;
  height: 20px;
  padding: 0 var(--space-1halfx);
  
  background: var(--color-content-primary);
  color: var(--color-content-inverse);
  
  font-size: 12px;
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-max);
}

/* Table Structure */
.table {
  width: 100%;
  border-collapse: collapse;
}

/* Table Header - Height: 32px, 14px UPPERCASE */
.table__headerCell {
  padding: var(--space-2x) var(--space-3x);
  height: 32px;
  
  font-size: 14px;
  line-height: 16px;
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.1px;
  text-transform: uppercase;
  text-align: left;
  
  color: var(--color-content-secondary);
  border-bottom: 1px solid var(--color-border-subtle);
  white-space: nowrap;
}

.table__headerCell--sortable {
  cursor: pointer;
}

.table__headerCell--sortable:hover {
  color: var(--color-content-primary);
}

.table__headerCell--right {
  text-align: right;
}

.table__sortIndicator {
  display: inline-flex;
  margin-left: var(--space-1x);
  opacity: 0.5;
}

.table__sortIndicator--active {
  opacity: 1;
  color: var(--color-secondary-teal700);
}

/* Table Row - Height: 72px */
.table__row {
  height: 72px;
  border-bottom: 1px solid var(--color-border-subtle);
  transition: background 150ms ease;
}

.table__row:hover {
  background: var(--color-surface-base);
}

.table__row:last-child {
  border-bottom: none;
}

/* Table Cell - Typography: 18px / 24px */
.table__cell {
  padding: var(--space-3x);
  
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.2px;
  
  vertical-align: middle;
}

.table__cell--right {
  text-align: right;
}

.table__cell--secondary {
  color: var(--color-content-secondary);
}

/* Action Link */
.actionLink {
  color: var(--color-secondary-teal700);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  cursor: pointer;
}

.actionLink:hover {
  text-decoration: underline;
}

.actionLink:focus-visible {
  outline: 2px solid var(--color-interactive-primary-surface);
  outline-offset: 2px;
}

/* ============================================================================
   PAGINATION
   Source: Pagination_Component_Documentation.md
   ============================================================================ */

.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--space-2x);
  margin-top: var(--space-6x);
}

.pagination__button {
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 40px;
  height: 40px;
  
  background: var(--color-surface-canvas);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-1halfx);
  
  font-family: var(--font-family-roobert);
  font-size: 16px;
  color: var(--color-content-primary);
  
  cursor: pointer;
  transition: all 150ms ease;
}

.pagination__button:hover:not(:disabled) {
  background: var(--color-surface-base);
}

.pagination__button:focus-visible {
  outline: 2px solid var(--color-interactive-primary-surface);
  outline-offset: 2px;
}

.pagination__button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination__button--active {
  background: var(--color-surface-brand);
  color: var(--color-content-inverse);
  border-color: var(--color-surface-brand);
}

.pagination__ellipsis {
  padding: 0 var(--space-2x);
  color: var(--color-content-secondary);
}

/* ============================================================================
   EMPTY STATE
   ============================================================================ */

.emptyState {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-12x) var(--space-6x);
  text-align: center;
}

.emptyState__icon {
  width: 64px;
  height: 64px;
  margin-bottom: var(--space-4x);
  color: var(--color-content-secondary);
  opacity: 0.5;
}

.emptyState__title {
  font-size: 22px;
  line-height: 28px;
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-2x);
}

.emptyState__description {
  font-size: 16px;
  line-height: 24px;
  color: var(--color-content-secondary);
  max-width: 400px;
}

/* ============================================================================
   HISTORY VIEW
   ============================================================================ */

.historyStats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--space-4x);
  margin-bottom: var(--space-6x);
}

.historyStatCard {
  background: var(--color-surface-base);
  border-radius: var(--radius-1halfx);
  padding: var(--space-4x);
}

.historyStatCard__label {
  font-size: 14px;
  line-height: 24px;
  color: var(--color-content-secondary);
  margin-bottom: var(--space-1x);
}

.historyStatCard__value {
  font-size: 26px;
  line-height: 32px;
  font-weight: var(--font-weight-medium);
}

/* ============================================================================
   ACCESSIBILITY UTILITIES
   ============================================================================ */

.srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
`;

// ============================================================================
// ICON COMPONENTS (Simplified SVG icons)
// ============================================================================

const Icons = {
  Invoice: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </svg>
  ),
  Search: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  Filter: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" />
    </svg>
  ),
  ChevronDown: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6,9 12,15 18,9" />
    </svg>
  ),
  ChevronUp: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="18,15 12,9 6,15" />
    </svg>
  ),
  ChevronLeft: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="15,18 9,12 15,6" />
    </svg>
  ),
  ChevronRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9,18 15,12 9,6" />
    </svg>
  ),
  Calendar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Empty: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get quarter information from a date
 */
const getQuarterInfo = (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const quarter = Math.floor(month / 3) + 1;
  
  const quarterStart = new Date(year, (quarter - 1) * 3, 1);
  const quarterEnd = new Date(year, quarter * 3, 0);
  
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return {
    quarter,
    year,
    label: `Q${quarter} ${year}`,
    fullLabel: `Q${quarter} ${year} (${monthNames[quarterStart.getMonth()]}–${monthNames[quarterEnd.getMonth()]})`,
    dateRange: `${quarterStart.getDate()} ${monthNames[quarterStart.getMonth()]} – ${quarterEnd.getDate()} ${monthNames[quarterEnd.getMonth()]} ${year}`,
    start: quarterStart,
    end: quarterEnd,
    paymentDate: new Date(quarterEnd.getTime() + 30 * 24 * 60 * 60 * 1000), // 30 days after quarter end
  };
};

/**
 * Calculate days remaining in current quarter
 */
const getDaysRemaining = (quarterEnd) => {
  const today = new Date();
  const diff = quarterEnd.getTime() - today.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
};

/**
 * Calculate quarter progress percentage
 */
const getQuarterProgress = (quarterStart, quarterEnd) => {
  const today = new Date();
  const total = quarterEnd.getTime() - quarterStart.getTime();
  const elapsed = today.getTime() - quarterStart.getTime();
  return Math.min(100, Math.max(0, Math.round((elapsed / total) * 100)));
};

/**
 * Format currency
 */
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
  }).format(amount);
};

/**
 * Format date
 */
const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

// ============================================================================
// MOCK DATA - Monthly Breakdown
// ============================================================================

/**
 * Generate monthly breakdown data based on quarter info and simulated date
 * Only includes months that have started relative to the reference date
 */
const generateMonthlyBreakdown = (quarterInfo, simulatedDate) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];
  
  const startMonth = quarterInfo.start.getMonth();
  const year = quarterInfo.year;
  
  // Sample data that varies by month (full month data)
  const fullMonthData = [
    { sessions: 32, chargers: 4, locations: 2, grossRevenue: 156.80, fees: -17.84, netPayment: 121.12 },
    { sessions: 28, chargers: 4, locations: 2, grossRevenue: 142.35, fees: -16.12, netPayment: 108.11 },
    { sessions: 24, chargers: 3, locations: 2, grossRevenue: 128.90, fees: -16.45, netPayment: 96.01 },
  ];
  
  const result = [];
  
  for (let i = 0; i < 3; i++) {
    const monthIndex = startMonth + i;
    const monthStart = new Date(year, monthIndex, 1);
    const monthEnd = new Date(year, monthIndex + 1, 0); // Last day of month
    
    // Only include months that have at least started
    if (simulatedDate >= monthStart) {
      const isCurrentMonth = simulatedDate.getMonth() === monthIndex && 
                             simulatedDate.getFullYear() === year;
      
      if (isCurrentMonth) {
        // Partial month - calculate pro-rata data based on days elapsed
        const daysInMonth = monthEnd.getDate();
        const dayOfMonth = simulatedDate.getDate();
        const progressRatio = dayOfMonth / daysInMonth;
        
        const baseData = fullMonthData[i];
        result.push({
          month: `${monthNames[monthIndex]} ${year}`,
          monthIndex: i,
          isPartial: true,
          sessions: Math.floor(baseData.sessions * progressRatio),
          chargers: baseData.chargers,
          locations: baseData.locations,
          grossRevenue: Math.round(baseData.grossRevenue * progressRatio * 100) / 100,
          fees: Math.round(baseData.fees * progressRatio * 100) / 100,
          netPayment: Math.round(baseData.netPayment * progressRatio * 100) / 100,
        });
      } else {
        // Completed month - full data
        result.push({
          ...fullMonthData[i],
          month: `${monthNames[monthIndex]} ${year}`,
          monthIndex: i,
          isPartial: false,
        });
      }
    }
  }
  
  return result;
};

/**
 * Calculate quarter totals from monthly data
 */
const calculateQuarterTotals = (monthlyData) => {
  return {
    sessions: monthlyData.reduce((sum, m) => sum + m.sessions, 0),
    grossRevenue: monthlyData.reduce((sum, m) => sum + m.grossRevenue, 0),
    fees: monthlyData.reduce((sum, m) => sum + m.fees, 0),
    netPayment: monthlyData.reduce((sum, m) => sum + m.netPayment, 0),
  };
};

// ============================================================================
// COMPONENT: Monthly Breakdown Table
// 
// Matches Figma design: Q1 - Monthly breakdown table
// Columns: Month, Sessions, Chargers, Locations, Gross Revenue, 
//          Transaction Fees, Net Payment, Action
// 
// Features:
// - Sortable columns (using Table Column Sort documentation)
// - Quarter totals row with highlighted background (surface/brand)
// - "View Sessions" action links
// - Handles partial months (in progress) and empty states
// ============================================================================

const MonthlyBreakdownTable = ({ quarterInfo, monthlyData }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  
  const totals = calculateQuarterTotals(monthlyData);
  
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  
  const SortIndicator = ({ column }) => {
    const isActive = sortColumn === column;
    return (
      <span 
        className={`table__sortIndicator ${isActive ? 'table__sortIndicator--active' : ''}`}
        style={{ marginLeft: 'var(--space-1x)', display: 'inline-flex' }}
      >
        {isActive && sortDirection === 'asc' ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
      </span>
    );
  };
  
  // Empty state - no months have started yet
  if (monthlyData.length === 0) {
    return (
      <section className="tableSection" aria-labelledby="monthly-breakdown-title">
        <div className="tableSection__header" style={{ marginBottom: 'var(--space-4x)' }}>
          <div>
            <h3 id="monthly-breakdown-title" className="tableSection__title">
              {quarterInfo.label} – Monthly breakdown
            </h3>
            <p style={{ 
              margin: 'var(--space-1x) 0 0 0',
              fontSize: '14px',
              color: 'var(--color-content-secondary)',
            }}>
              Revenue and fees in this payment cycle
            </p>
          </div>
        </div>
        
        <div className="emptyState">
          <div className="emptyState__icon"><Icons.Empty /></div>
          <h4 className="emptyState__title">No data yet</h4>
          <p className="emptyState__description">
            Monthly breakdown will appear here as sessions are completed
          </p>
        </div>
      </section>
    );
  }
  
  return (
    <section className="tableSection" aria-labelledby="monthly-breakdown-title">
      <div className="tableSection__header" style={{ marginBottom: 'var(--space-4x)' }}>
        <div>
          <h3 id="monthly-breakdown-title" className="tableSection__title">
            {quarterInfo.label} – Monthly breakdown
          </h3>
          <p style={{ 
            margin: 'var(--space-1x) 0 0 0',
            fontSize: '14px',
            color: 'var(--color-content-secondary)',
          }}>
            Revenue and fees in this payment cycle
          </p>
        </div>
      </div>
      
      <table className="table" role="grid" aria-label="Monthly breakdown">
        <thead>
          <tr>
            <th 
              className="table__headerCell table__headerCell--sortable"
              onClick={() => handleSort('month')}
              aria-sort={sortColumn === 'month' ? sortDirection : 'none'}
            >
              Month <SortIndicator column="month" />
            </th>
            <th 
              className="table__headerCell table__headerCell--sortable table__headerCell--right"
              onClick={() => handleSort('sessions')}
              aria-sort={sortColumn === 'sessions' ? sortDirection : 'none'}
            >
              Sessions <SortIndicator column="sessions" />
            </th>
            <th 
              className="table__headerCell table__headerCell--sortable table__headerCell--right"
              onClick={() => handleSort('chargers')}
              aria-sort={sortColumn === 'chargers' ? sortDirection : 'none'}
            >
              Chargers <SortIndicator column="chargers" />
            </th>
            <th 
              className="table__headerCell table__headerCell--sortable table__headerCell--right"
              onClick={() => handleSort('locations')}
              aria-sort={sortColumn === 'locations' ? sortDirection : 'none'}
            >
              Locations <SortIndicator column="locations" />
            </th>
            <th 
              className="table__headerCell table__headerCell--sortable table__headerCell--right"
              onClick={() => handleSort('grossRevenue')}
              aria-sort={sortColumn === 'grossRevenue' ? sortDirection : 'none'}
            >
              Gross Revenue <SortIndicator column="grossRevenue" />
            </th>
            <th 
              className="table__headerCell table__headerCell--sortable table__headerCell--right"
              onClick={() => handleSort('fees')}
              aria-sort={sortColumn === 'fees' ? sortDirection : 'none'}
            >
              Transaction Fees <SortIndicator column="fees" />
            </th>
            <th 
              className="table__headerCell table__headerCell--sortable table__headerCell--right"
              onClick={() => handleSort('netPayment')}
              aria-sort={sortColumn === 'netPayment' ? sortDirection : 'none'}
            >
              Net Payment <SortIndicator column="netPayment" />
            </th>
            <th className="table__headerCell">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {monthlyData.map((row, index) => (
            <tr key={index} className="table__row">
              <td className="table__cell" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                {row.month}
                {row.isPartial && (
                  <span style={{ 
                    marginLeft: 'var(--space-2x)',
                    fontSize: '12px',
                    color: 'var(--color-content-secondary)',
                    fontWeight: 'var(--font-weight-regular)',
                  }}>
                    (in progress)
                  </span>
                )}
              </td>
              <td className="table__cell table__cell--right">{row.sessions}</td>
              <td className="table__cell table__cell--right">{row.chargers}</td>
              <td className="table__cell table__cell--right">{row.locations}</td>
              <td className="table__cell table__cell--right">{formatCurrency(row.grossRevenue)}</td>
              <td className="table__cell table__cell--right table__cell--secondary">
                {formatCurrency(row.fees)}
              </td>
              <td className="table__cell table__cell--right" style={{ fontWeight: 'var(--font-weight-semibold)' }}>
                {formatCurrency(row.netPayment)}
              </td>
              <td className="table__cell">
                <a href="#" className="actionLink" onClick={(e) => e.preventDefault()}>
                  View Sessions
                </a>
              </td>
            </tr>
          ))}
          
          {/* Quarter Totals Row - Highlighted with brand surface */}
          <tr 
            className="table__row table__row--totals"
            style={{
              background: 'var(--color-surface-brand)',
              color: 'var(--color-content-inverse)',
            }}
          >
            <td 
              className="table__cell" 
              style={{ 
                fontWeight: 'var(--font-weight-semibold)',
                color: 'inherit',
              }}
            >
              {monthlyData.length < 3 ? 'Total so far' : 'Quarter totals'}
            </td>
            <td className="table__cell table__cell--right" style={{ color: 'inherit' }}>
              {totals.sessions}
            </td>
            <td className="table__cell table__cell--right" style={{ color: 'inherit' }}>–</td>
            <td className="table__cell table__cell--right" style={{ color: 'inherit' }}>–</td>
            <td className="table__cell table__cell--right" style={{ color: 'inherit' }}>
              {formatCurrency(totals.grossRevenue)}
            </td>
            <td className="table__cell table__cell--right" style={{ color: 'inherit', opacity: 0.8 }}>
              {formatCurrency(totals.fees)}
            </td>
            <td 
              className="table__cell table__cell--right" 
              style={{ 
                fontWeight: 'var(--font-weight-semibold)',
                color: 'inherit',
              }}
            >
              {formatCurrency(totals.netPayment)}
            </td>
            <td className="table__cell">
              <a 
                href="#" 
                className="actionLink" 
                onClick={(e) => e.preventDefault()}
                style={{ color: 'var(--color-secondary-teal300)' }}
              >
                View Sessions
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

const MOCK_HISTORY = [
  { invoiceNumber: 'INV-2249', quarter: 1, year: 2026, sessions: 35, chargers: 4, locations: 2, grossRevenue: 168.50, fees: -38.12, netPayment: 130.38 },
  { invoiceNumber: 'INV-2248', quarter: 4, year: 2025, sessions: 32, chargers: 4, locations: 2, grossRevenue: 156.80, fees: -35.68, netPayment: 121.12 },
  { invoiceNumber: 'INV-2247', quarter: 3, year: 2025, sessions: 28, chargers: 4, locations: 2, grossRevenue: 142.35, fees: -32.24, netPayment: 108.11 },
  { invoiceNumber: 'INV-2246', quarter: 2, year: 2025, sessions: 30, chargers: 4, locations: 2, grossRevenue: 148.50, fees: -33.50, netPayment: 115.00 },
  { invoiceNumber: 'INV-2245', quarter: 1, year: 2025, sessions: 24, chargers: 3, locations: 2, grossRevenue: 128.90, fees: -28.90, netPayment: 96.01 },
  { invoiceNumber: 'INV-2244', quarter: 4, year: 2024, sessions: 26, chargers: 3, locations: 2, grossRevenue: 135.20, fees: -30.20, netPayment: 105.00 },
  { invoiceNumber: 'INV-2243', quarter: 3, year: 2024, sessions: 22, chargers: 3, locations: 2, grossRevenue: 118.40, fees: -26.40, netPayment: 92.00 },
];

/**
 * Filter history data to only include quarters that have been paid
 * A quarter is paid if the simulated date is past the payment due date (30 days after quarter end)
 */
const getFilteredHistory = (simulatedDate) => {
  return MOCK_HISTORY.filter(item => {
    // Calculate when this quarter ended
    const quarterEnd = new Date(item.year, item.quarter * 3, 0); // Last day of quarter
    // Payment is due 30 days after quarter end
    const paymentDueDate = new Date(quarterEnd.getTime() + 30 * 24 * 60 * 60 * 1000);
    // Only show in history if payment date has passed
    return simulatedDate >= paymentDueDate;
  }).map(item => ({
    ...item,
    period: `Q${item.quarter} ${item.year}`,
  }));
};

// ============================================================================
// COMPONENT: Status Pill
// ============================================================================

const StatusPill = ({ status, children }) => {
  const intentMap = {
    'In progress': 'information',
    'Pending': 'information',
    'Ready to pay': 'success',
    'Paid': 'success',
    'Overdue': 'error',
    'Complete': 'success',
  };
  
  const intent = intentMap[status] || 'information';
  
  return (
    <span 
      className={`statusPill statusPill--${intent}`}
      role="status"
      aria-label={`Status: ${status}`}
    >
      {children || status}
    </span>
  );
};

// ============================================================================
// COMPONENT: Button
// ============================================================================

const Button = ({ variant = 'primary', size = 'medium', children, ...props }) => {
  return (
    <button 
      className={`button button--${variant} ${size === 'large' ? 'button--large' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

// ============================================================================
// COMPONENT: Tab Group
// ============================================================================

const TabGroup = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="tabGroup" role="tablist" aria-label="Billing views">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`tabpanel-${tab.id}`}
          id={`tab-${tab.id}`}
          className={`tab ${activeTab === tab.id ? 'tab--active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.icon && <span className="tab__icon">{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

// ============================================================================
// COMPONENT: Payment Banner (Ready to Pay)
// ============================================================================

const PaymentBanner = ({ quarterInfo, amount, onViewInvoice }) => {
  return (
    <section 
      className="paymentBanner" 
      aria-labelledby="payment-banner-title"
      role="region"
    >
      <div className="paymentBanner__content">
        <div className="paymentBanner__header">
          <StatusPill status="Ready to pay" />
        </div>
        <h2 id="payment-banner-title" className="paymentBanner__quarterLabel">
          {quarterInfo.fullLabel}
        </h2>
        <p className="paymentBanner__dateRange">
          Sessions completed {quarterInfo.dateRange}
        </p>
        <p className="paymentBanner__amount">{formatCurrency(amount)}</p>
        <p className="paymentBanner__paymentDate">
          Payment date: {formatDate(quarterInfo.paymentDate)}
        </p>
      </div>
      <div className="paymentBanner__actions">
        <Button variant="secondary" onClick={onViewInvoice}>
          View invoice
        </Button>
      </div>
    </section>
  );
};

// ============================================================================
// COMPONENT: Current Quarter Card
// ============================================================================

const CurrentQuarterCard = ({ 
  quarterInfo, 
  accumulated, 
  sessionCount, 
  grossAmount,
  progress,
  daysRemaining 
}) => {
  return (
    <section 
      className="currentQuarterCard"
      aria-labelledby="current-quarter-title"
      role="region"
    >
      <div className="currentQuarterCard__header">
        <StatusPill status="In progress" />
      </div>
      <h2 id="current-quarter-title" className="currentQuarterCard__title">
        {quarterInfo.fullLabel}
      </h2>
      <p className="currentQuarterCard__dateRange">
        Sessions completed {quarterInfo.dateRange}
      </p>
      
      <div className="statsRow">
        <div className="statItem">
          <span className="statItem__label">Accumulated so far</span>
          <span className="statItem__value">{formatCurrency(accumulated)}</span>
          <span className="statItem__subtext">
            {sessionCount} sessions • {formatCurrency(grossAmount)} gross
          </span>
        </div>
      </div>
      
      <div className="progressSection">
        <div className="progressSection__header">
          <span className="progressSection__label">Quarter progress</span>
          <span className="progressSection__daysLeft">{daysRemaining} days left</span>
        </div>
        <div 
          className="progressBar" 
          role="progressbar" 
          aria-valuenow={progress} 
          aria-valuemin={0} 
          aria-valuemax={100}
          aria-label={`Quarter ${progress}% complete, ${daysRemaining} days remaining`}
        >
          <div 
            className="progressBar__fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
};

// SessionsTable removed - replaced by MonthlyBreakdownTable for appropriate granularity

// ============================================================================
// COMPONENT: History View
// ============================================================================

const HistoryView = ({ simulatedDate }) => {
  const history = getFilteredHistory(simulatedDate);
  
  // Handle empty history
  if (history.length === 0) {
    return (
      <div>
        <div className="historyStats">
          <div className="historyStatCard">
            <p className="historyStatCard__label">Total paid</p>
            <p className="historyStatCard__value">£0.00</p>
          </div>
          <div className="historyStatCard">
            <p className="historyStatCard__label">Total sessions</p>
            <p className="historyStatCard__value">0</p>
          </div>
          <div className="historyStatCard">
            <p className="historyStatCard__label">Average per quarter</p>
            <p className="historyStatCard__value">–</p>
          </div>
          <div className="historyStatCard">
            <p className="historyStatCard__label">Invoices</p>
            <p className="historyStatCard__value">0</p>
          </div>
        </div>
        
        <section className="tableSection" aria-labelledby="history-table-title">
          <div className="tableSection__header">
            <h3 id="history-table-title" className="tableSection__title">
              Payment history
            </h3>
          </div>
          
          <div className="emptyState">
            <div className="emptyState__icon"><Icons.Empty /></div>
            <h4 className="emptyState__title">No payment history yet</h4>
            <p className="emptyState__description">
              Completed payments will appear here after processing
            </p>
          </div>
        </section>
      </div>
    );
  }
  
  const totalPaid = history.reduce((sum, h) => sum + h.netPayment, 0);
  const totalSessions = history.reduce((sum, h) => sum + h.sessions, 0);
  const avgPerQuarter = totalPaid / history.length;
  
  return (
    <div>
      <div className="historyStats">
        <div className="historyStatCard">
          <p className="historyStatCard__label">Total paid</p>
          <p className="historyStatCard__value">{formatCurrency(totalPaid)}</p>
        </div>
        <div className="historyStatCard">
          <p className="historyStatCard__label">Total sessions</p>
          <p className="historyStatCard__value">{totalSessions}</p>
        </div>
        <div className="historyStatCard">
          <p className="historyStatCard__label">Average per quarter</p>
          <p className="historyStatCard__value">{formatCurrency(avgPerQuarter)}</p>
        </div>
        <div className="historyStatCard">
          <p className="historyStatCard__label">Invoices</p>
          <p className="historyStatCard__value">{history.length}</p>
        </div>
      </div>
      
      <section className="tableSection" aria-labelledby="history-table-title">
        <div className="tableSection__header">
          <h3 id="history-table-title" className="tableSection__title">
            Payment history
          </h3>
          <div className="searchAndFilter">
            <label className="searchInput">
              <span className="srOnly">Search history</span>
              <input
                type="text"
                className="searchInput__field"
                placeholder="Search by invoice number..."
                aria-label="Search payment history"
              />
              <span className="searchInput__icon"><Icons.Search /></span>
            </label>
            <button className="filterButton" aria-label="Open filters">
              <Icons.Filter />
              Filters
            </button>
          </div>
        </div>
        
        <table className="table" role="grid" aria-label="Payment history">
          <thead>
            <tr>
              <th className="table__headerCell">Invoice Number</th>
              <th className="table__headerCell">Period</th>
              <th className="table__headerCell table__headerCell--right">Sessions</th>
              <th className="table__headerCell table__headerCell--right">Chargers</th>
              <th className="table__headerCell table__headerCell--right">Locations</th>
              <th className="table__headerCell table__headerCell--right">Gross Revenue</th>
              <th className="table__headerCell table__headerCell--right">Fees</th>
              <th className="table__headerCell table__headerCell--right">Net Payment</th>
              <th className="table__headerCell">Action</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index} className="table__row">
                <td className="table__cell">{item.invoiceNumber}</td>
                <td className="table__cell">{item.period}</td>
                <td className="table__cell table__cell--right">{item.sessions}</td>
                <td className="table__cell table__cell--right">{item.chargers}</td>
                <td className="table__cell table__cell--right">{item.locations}</td>
                <td className="table__cell table__cell--right">{formatCurrency(item.grossRevenue)}</td>
                <td className="table__cell table__cell--right table__cell--secondary">
                  {formatCurrency(item.fees)}
                </td>
                <td className="table__cell table__cell--right" style={{ fontWeight: 500 }}>
                  {formatCurrency(item.netPayment)}
                </td>
                <td className="table__cell">
                  <a href="#" className="actionLink" onClick={(e) => e.preventDefault()}>
                    View Invoice
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

// ============================================================================
// DATE SCENARIOS
// ============================================================================

/**
 * Predefined date scenarios to demonstrate different billing states
 */
const DATE_SCENARIOS = {
  'today': {
    label: 'Today (Current date)',
    description: 'Shows actual current state',
    getDate: () => new Date(),
  },
  'feb12': {
    label: '12th February 2026',
    description: 'Month 2 of Q1 — Q4 payment already processed, only current quarter visible',
    getDate: () => new Date(2026, 1, 12), // Feb 12, 2026
  },
  'jan15': {
    label: '15th January 2026',
    description: 'Month 1 of Q1 — Q4 payment still pending (due 30 Jan)',
    getDate: () => new Date(2026, 0, 15), // Jan 15, 2026
  },
  'apr5': {
    label: '5th April 2026',
    description: 'Month 1 of Q2 — Q1 payment pending (due 30 Apr)',
    getDate: () => new Date(2026, 3, 5), // Apr 5, 2026
  },
  'may20': {
    label: '20th May 2026',
    description: 'Month 2 of Q2 — Q1 payment processed, only current quarter visible',
    getDate: () => new Date(2026, 4, 20), // May 20, 2026
  },
};

/**
 * Determine if payment banner should show based on simulated date
 * 
 * Logic:
 * - Payment is due 30 days after quarter end
 * - If simulated date is before payment due date, banner shows
 * - If simulated date is after payment due date, banner hidden (payment processed)
 */
const shouldShowPaymentBanner = (simulatedDate, previousQuarterEnd) => {
  const paymentDueDate = new Date(previousQuarterEnd.getTime() + 30 * 24 * 60 * 60 * 1000);
  return simulatedDate < paymentDueDate;
};

/**
 * Calculate quarter info relative to a specific date
 */
const getQuarterInfoForDate = (referenceDate) => {
  const month = referenceDate.getMonth();
  const year = referenceDate.getFullYear();
  const quarter = Math.floor(month / 3) + 1;
  
  const quarterStart = new Date(year, (quarter - 1) * 3, 1);
  const quarterEnd = new Date(year, quarter * 3, 0);
  
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Calculate days remaining from reference date
  const daysRemaining = Math.max(0, Math.ceil((quarterEnd.getTime() - referenceDate.getTime()) / (1000 * 60 * 60 * 24)));
  
  // Calculate progress from reference date
  const total = quarterEnd.getTime() - quarterStart.getTime();
  const elapsed = referenceDate.getTime() - quarterStart.getTime();
  const progress = Math.min(100, Math.max(0, Math.round((elapsed / total) * 100)));
  
  return {
    quarter,
    year,
    label: `Q${quarter} ${year}`,
    fullLabel: `Q${quarter} ${year} (${monthNames[quarterStart.getMonth()]}–${monthNames[quarterEnd.getMonth()]})`,
    dateRange: `${quarterStart.getDate()} ${monthNames[quarterStart.getMonth()]} – ${quarterEnd.getDate()} ${monthNames[quarterEnd.getMonth()]} ${year}`,
    start: quarterStart,
    end: quarterEnd,
    paymentDate: new Date(quarterEnd.getTime() + 30 * 24 * 60 * 60 * 1000),
    daysRemaining,
    progress,
  };
};

/**
 * Get previous quarter info
 */
const getPreviousQuarterInfo = (referenceDate) => {
  const previousQuarterDate = new Date(referenceDate.getFullYear(), referenceDate.getMonth() - 3, 1);
  return getQuarterInfoForDate(previousQuarterDate);
};

// ============================================================================
// COMPONENT: Toggle Switch (Design System Compliant)
// Source: Toggle_Switch_System_Documentation.md
// 
// Specs:
// - Track: 44px × 24px
// - Thumb: 20px diameter
// - Corner radius: full (pill shape)
// - Colors: grey (off) → teal (on)
// ============================================================================

const ToggleSwitch = ({ checked, onChange, label, id }) => {
  return (
    <label 
      htmlFor={id}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2x)',
        cursor: 'pointer',
        fontSize: '14px',
        color: 'var(--color-content-primary)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '44px',
          height: '24px',
          borderRadius: 'var(--radius-max)',
          background: checked 
            ? 'var(--color-interactive-primary-surface)' 
            : 'var(--color-secondary-grey300)',
          transition: 'background 150ms ease',
        }}
      >
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          style={{
            position: 'absolute',
            opacity: 0,
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            margin: 0,
          }}
          aria-label={label}
        />
        <div
          style={{
            position: 'absolute',
            top: '2px',
            left: checked ? '22px' : '2px',
            width: '20px',
            height: '20px',
            borderRadius: 'var(--radius-max)',
            background: 'var(--color-brand-white)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
            transition: 'left 150ms ease',
            pointerEvents: 'none',
          }}
        />
      </div>
      {label}
    </label>
  );
};

// ============================================================================
// COMPONENT: Date Scenario Selector (with Dark Mode Toggle)
// ============================================================================

const DateScenarioSelector = ({ 
  selectedScenario, 
  onScenarioChange, 
  simulatedDate,
  isDarkMode,
  onDarkModeChange 
}) => {
  return (
    <div style={{
      marginBottom: 'var(--space-6x)',
      padding: 'var(--space-4x)',
      background: 'var(--color-surface-canvas)',
      borderRadius: 'var(--radius-2x)',
      border: '2px dashed var(--color-border-subtle)',
    }}>
      {/* Header with Dark Mode Toggle */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 'var(--space-3x)',
        marginBottom: 'var(--space-4x)',
        paddingBottom: 'var(--space-3x)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}>
        <span style={{ 
          fontSize: '14px', 
          fontWeight: 'var(--font-weight-semibold)',
          textTransform: 'uppercase',
          letterSpacing: '0.1px',
          color: 'var(--color-content-secondary)',
        }}>
          🎛️ Prototype Controls
        </span>
        
        {/* Dark Mode Toggle - Uses design system toggle tokens */}
        <ToggleSwitch
          id="dark-mode-toggle"
          checked={isDarkMode}
          onChange={onDarkModeChange}
          label={isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        />
      </div>
      
      {/* Date Scenario Selection */}
      <div style={{ marginBottom: 'var(--space-3x)' }}>
        <span style={{ 
          fontSize: '12px', 
          fontWeight: 'var(--font-weight-medium)',
          textTransform: 'uppercase',
          letterSpacing: '0.1px',
          color: 'var(--color-content-secondary)',
          display: 'block',
          marginBottom: 'var(--space-2x)',
        }}>
          📅 Simulated Date
        </span>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          gap: 'var(--space-2x)',
        }}>
          {Object.entries(DATE_SCENARIOS).map(([key, scenario]) => (
            <button
              key={key}
              onClick={() => onScenarioChange(key)}
              style={{
                padding: 'var(--space-2x) var(--space-3x)',
                borderRadius: 'var(--radius-1halfx)',
                border: selectedScenario === key 
                  ? '2px solid var(--color-secondary-teal500)' 
                  : '1px solid var(--color-border-subtle)',
                background: selectedScenario === key 
                  ? 'var(--tab-active-surface)' 
                  : 'var(--color-surface-base)',
                color: 'var(--color-content-primary)',
                fontSize: '14px',
                fontFamily: 'var(--font-family-roobert)',
                cursor: 'pointer',
                transition: 'all 150ms ease',
              }}
            >
              {scenario.label}
            </button>
          ))}
        </div>
      </div>
      
      <p style={{ 
        margin: 0,
        fontSize: '14px',
        color: 'var(--color-content-secondary)',
        lineHeight: '24px',
      }}>
        <strong>Simulating:</strong> {formatDate(simulatedDate)}
        <br />
        {DATE_SCENARIOS[selectedScenario].description}
      </p>
    </div>
  );
};

// ============================================================================
// COMPONENT: State Explanation Banner
// ============================================================================

const StateExplanationBanner = ({ showBanner, currentQuarter, previousQuarter, simulatedDate }) => {
  const paymentDueDate = previousQuarter.paymentDate;
  const isPastPaymentDate = simulatedDate >= paymentDueDate;
  
  return (
    <div style={{
      marginBottom: 'var(--space-4x)',
      padding: 'var(--space-3x) var(--space-4x)',
      background: showBanner ? 'var(--color-state-info-surface)' : 'var(--color-state-success-surface)',
      borderRadius: 'var(--radius-1halfx)',
      fontSize: '14px',
      lineHeight: '24px',
    }}>
      <strong style={{ color: showBanner ? 'var(--color-state-info-content)' : 'var(--color-state-success-content)' }}>
        {showBanner ? '💰 Payment Pending State' : '✅ No Pending Payment State'}
      </strong>
      <p style={{ 
        margin: 'var(--space-2x) 0 0 0',
        color: showBanner ? 'var(--color-state-info-content)' : 'var(--color-state-success-content)',
      }}>
        {showBanner ? (
          <>
            <strong>{previousQuarter.label}</strong> closed on {formatDate(previousQuarter.end)}. 
            Payment due {formatDate(paymentDueDate)} — still pending, so the "Ready to pay" banner is visible.
          </>
        ) : (
          <>
            <strong>{previousQuarter.label}</strong> payment was due {formatDate(paymentDueDate)}. 
            Since we're past that date ({formatDate(simulatedDate)}), payment is assumed processed — banner hidden.
            Only <strong>{currentQuarter.label}</strong> accumulation is shown.
          </>
        )}
      </p>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT: Park & Charge Billing Dashboard
// ============================================================================

const ParkChargeBillingDashboard = () => {
  // State
  const [activeTab, setActiveTab] = useState('earnings');
  const [selectedScenario, setSelectedScenario] = useState('feb12'); // Default to Feb 12th scenario
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode toggle for review
  
  // Get simulated date based on selected scenario
  const simulatedDate = DATE_SCENARIOS[selectedScenario].getDate();
  
  // Calculate quarter information relative to simulated date
  const currentQuarter = getQuarterInfoForDate(simulatedDate);
  const previousQuarter = getPreviousQuarterInfo(simulatedDate);
  
  // Determine if payment banner should show
  const showPaymentBanner = shouldShowPaymentBanner(simulatedDate, previousQuarter.end);
  
  // Generate monthly breakdown data for current quarter (only months that have occurred)
  const monthlyData = generateMonthlyBreakdown(currentQuarter, simulatedDate);
  
  // Accumulated amounts vary by scenario (simulated data)
  const getAccumulatedData = () => {
    const dayOfQuarter = Math.ceil((simulatedDate - currentQuarter.start) / (1000 * 60 * 60 * 24));
    const baseAccumulation = dayOfQuarter * 1.2; // ~£1.20 per day average
    const sessions = Math.floor(dayOfQuarter * 0.3); // ~0.3 sessions per day
    return {
      accumulated: Math.round(baseAccumulation * 100) / 100,
      sessionCount: Math.max(1, sessions),
      grossAmount: Math.round(baseAccumulation * 1.23 * 100) / 100,
    };
  };
  
  const accumulatedData = getAccumulatedData();
  
  // Tab configuration
  const tabs = [
    { id: 'earnings', label: 'Earnings', icon: <Icons.Calendar /> },
    { id: 'history', label: 'History', icon: <Icons.Invoice /> },
  ];
  
  return (
    <>
      <style>{styles}</style>
      
      {/* 
        Dark mode applied via data-theme attribute
        This triggers the [data-theme="dark"] CSS selectors which override
        Tier 2 semantic tokens as per Token_System_Documentation.md
      */}
      <div 
        className="billingDashboard"
        data-theme={isDarkMode ? 'dark' : 'light'}
      >
        <main className="billingDashboard__main">
          {/* Page Header */}
          <header className="pageHeader">
            <div className="pageHeader__icon">
              <Icons.Invoice />
            </div>
            <h1 className="pageHeader__title">Invoice dashboard</h1>
          </header>
          
          {/* Prototype Controls - Date Simulator & Dark Mode Toggle */}
          <DateScenarioSelector
            selectedScenario={selectedScenario}
            onScenarioChange={setSelectedScenario}
            simulatedDate={simulatedDate}
            isDarkMode={isDarkMode}
            onDarkModeChange={setIsDarkMode}
          />
          
          {/* Tab Navigation */}
          <TabGroup 
            tabs={tabs} 
            activeTab={activeTab} 
            onTabChange={setActiveTab}
          />
          
          {/* Tab Panels */}
          <div
            id="tabpanel-earnings"
            role="tabpanel"
            aria-labelledby="tab-earnings"
            hidden={activeTab !== 'earnings'}
          >
            {activeTab === 'earnings' && (
              <>
                {/* State Explanation - Demo Only */}
                <StateExplanationBanner
                  showBanner={showPaymentBanner}
                  currentQuarter={currentQuarter}
                  previousQuarter={previousQuarter}
                  simulatedDate={simulatedDate}
                />
                
                {/* 
                  CONDITIONAL PAYMENT BANNER
                  Only shows when a closed quarter has pending payment.
                  
                  Logic:
                  - Payment is due 30 days after quarter end
                  - If simulated date < payment due date → show banner
                  - If simulated date >= payment due date → hide banner (payment processed)
                */}
                {showPaymentBanner && (
                  <PaymentBanner
                    quarterInfo={previousQuarter}
                    amount={325.24}
                    onViewInvoice={() => console.log('View invoice clicked')}
                  />
                )}
                
                {/* Current Quarter Accumulation */}
                <CurrentQuarterCard
                  quarterInfo={currentQuarter}
                  accumulated={accumulatedData.accumulated}
                  sessionCount={accumulatedData.sessionCount}
                  grossAmount={accumulatedData.grossAmount}
                  progress={currentQuarter.progress}
                  daysRemaining={currentQuarter.daysRemaining}
                />
                
                {/* Monthly Breakdown Table - replaces granular sessions table */}
                <MonthlyBreakdownTable
                  quarterInfo={currentQuarter}
                  monthlyData={monthlyData}
                />
              </>
            )}
          </div>
          
          <div
            id="tabpanel-history"
            role="tabpanel"
            aria-labelledby="tab-history"
            hidden={activeTab !== 'history'}
          >
            {activeTab === 'history' && (
              <HistoryView simulatedDate={simulatedDate} />
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default ParkChargeBillingDashboard;
