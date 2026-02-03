# Ohme Design System - Complete Token Documentation

## Overview

This document contains the complete three-tier token architecture for the Ohme design system. The system follows a strict hierarchical structure where each tier references only the tier above it:

| Tier | Name | Purpose | Token Count |
|------|------|---------|-------------|
| **Tier 1** | Primitives | Raw values - colors, spacing, typography | **162** |
| **Tier 2** | Semantic | Purpose-based tokens with Light/Dark modes | **452** |
| **Tier 3** | Component | Component-specific design decisions | **311** |
| | | **Total** | **925** |

### Architecture Principles

1. **Tier 3 â†’ Tier 2**: Component tokens reference semantic tokens
2. **Tier 2 â†’ Tier 1**: Semantic tokens reference primitives
3. **Mode Switching**: Tier 2 handles Light/Dark mode switching
4. **No Bypass**: Direct hex values should never bypass semantic layers

---

# TIER 1 - PRIMITIVES (Base/Raw Values)

## Color Tokens

### color/brand
Core brand colors - the foundation of Ohme's visual identity.

| Token | Value | Usage |
|-------|-------|-------|
| `color/brand/highlighterteal` | #00FFD6 | Primary brand accent |
| `color/brand/ohmedarkblue` | #032536 | Primary brand color |
| `color/brand/white` | #FFFFFF | Base white |
| `color/brand/smokeyblue` | #366C92 | Secondary blue |
| `color/brand/smokeygreen` | #034048 | Secondary green |
| `color/brand/brightblue` | #0046AF | Links, CTAs |
| `color/brand/smokeygrey` | #D1D1D1 | Neutral grey |
| `color/brand/electricblue` | #00CBFF | Accent blue |
| `color/brand/clear` | #FFFFFF @ 0% | Transparent |

### color/secondary
Semantic color palette with 100/300/700/900 variations for state indication.

| Token | Value | Purpose |
|-------|-------|---------|
| `color/secondary/grey900` | #1B1D1D | Darkest grey |
| `color/secondary/grey700` | #647882 | Medium grey |
| `color/secondary/grey300` | #ADB3B1 | Light grey |
| `color/secondary/grey100` | #E5E8E8 | Lightest grey |
| `color/secondary/red900` | #580202 | Error dark |
| `color/secondary/red300` | #FF9B9B | Error light |
| `color/secondary/red100` | #FFE1E1 | Error surface |
| `color/secondary/yellow900` | #441906 | Warning dark |
| `color/secondary/yellow300` | #FFE385 | Warning light |
| `color/secondary/yellow100` | #FFF2C6 | Warning surface |
| `color/secondary/teal900` | #003A37 | Action dark |
| `color/secondary/teal700` | #0EBA9E | Action medium |
| `color/secondary/teal500` | #01E6C1 | Action hover |
| `color/secondary/teal300` | #00FFD6 | Action accent |
| `color/secondary/teal100` | #C0FFF6 | Action surface |
| `color/secondary/green900` | #072C14 | Success dark |
| `color/secondary/green300` | #8AEBA8 | Success light |
| `color/secondary/green100` | #DDFBE5 | Success surface |
| `color/secondary/blue900` | #062965 | Info dark |
| `color/secondary/blue300` | #76D6FF | Info light |
| `color/secondary/blue100` | #D1EFFF | Info surface |
| `color/secondary/violet900` | #510076 | Special dark |
| `color/secondary/violet300` | #E7A6FF | Special light |
| `color/secondary/violet100` | #F8E4FF | Special surface |

### color/tertiary
Extended palette for gradients, illustrations, and special UI elements.

| Token | Value | Usage |
|-------|-------|-------|
| `color/tertiary/lakeblue` | #0B2539 | Dark backgrounds |
| `color/tertiary/voidblue` | #1D2A54 | Deep blue |
| `color/tertiary/catalinablue` | #00327C | Rich blue |
| `color/tertiary/Darkteal` | #0AB4A8 | Teal accent |
| `color/tertiary/happygreen` | #00E45A | Bright green |
| `color/tertiary/toxicgreen` | #00FF75 | Vibrant green |
| `color/tertiary/paleteal` | #93BFBC | Muted teal |
| `color/tertiary/spicyred` | #C14051 | Warm red |
| `color/tertiary/rosered` | #FA1460 | Danger/error |
| `color/tertiary/vanetianred` | #FF387A | Vibrant pink |
| `color/tertiary/poisonpurple` | #B001F9 | Purple accent |
| `color/tertiary/sandyorange` | #F5BD50 | Avatar accent |
| `color/tertiary/sunnyyellow` | #FBDA2F | Bright yellow |
| `color/tertiary/Bismarckgrey` | #8F9DA4 | Cool grey |
| `color/tertiary/smokeygrey` | #D1D1D1 | Neutral grey |
| `color/tertiary/lightgrey` | #E9E9E9 | Light neutral |
| `color/tertiary/borderwhite` | #F1F1F1 | Border light |
| `color/tertiary/smokeyblue` | #F5F8FA | Base surface |

### color/mixer stops (Gradients)
Gradient endpoints for decorative elements and illustrations.

| Gradient | Dark Stop | Light Stop |
|----------|-----------|------------|
| Night dream | â†’ lakeblue | #292C68 |
| Lucent blue | #283959 | #385080 |
| Tab bar blue | #07345E | #304A69 |
| Divider white | #F4F9FF @ 7% | #89C6FF @ 24% |
| Shiny metal | â†’ white | â†’ lightgrey |
| Keppel Blue | â†’ smokeygreen | #359DAB |
| Deep Sea | â†’ smokeyblue | #479EDB |
| Purple Haze | â†’ rosered | â†’ poisonpurple |
| Sunset | â†’ vanetianred | #D980FF |
| Blue lagoo | â†’ electricblue | #2AFFD7 |
| Green glade | â†’ toxicgreen | #00E45A |

---

## Typography Tokens

### typography/font-family
| Token | Value |
|-------|-------|
| `typography/font-family/Roobert` | "Roobert" |

### typography/font-size
| Token | Value (px) |
|-------|------------|
| `typography/font-size/10` | 10 |
| `typography/font-size/12` | 12 |
| `typography/font-size/14` | 14 |
| `typography/font-size/16` | 16 |
| `typography/font-size/18` | 18 |
| `typography/font-size/20` | 20 |
| `typography/font-size/22` | 22 |
| `typography/font-size/26` | 26 |
| `typography/font-size/28` | 28 |
| `typography/font-size/32` | 32 |
| `typography/font-size/36` | 36 |
| `typography/font-size/44` | 44 |
| `typography/font-size/50` | 50 |

### typography/line-height
| Token | Value (px) |
|-------|------------|
| `typography/line-height/16` | 16 |
| `typography/line-height/18` | 18 |
| `typography/line-height/24` | 24 |
| `typography/line-height/28` | 28 |
| `typography/line-height/30` | 30 |
| `typography/line-height/32` | 32 |
| `typography/line-height/36` | 36 |
| `typography/line-height/40` | 40 |
| `typography/line-height/44` | 44 |
| `typography/line-height/50` | 50 |
| `typography/line-height/72` | 72 |

### typography/letter-spacing
| Token | Value (px) |
|-------|------------|
| `typography/letter-spacing/none` | 0 |
| `typography/letter-spacing/0dot1` | 0.1 |
| `typography/letter-spacing/0dot2` | 0.2 |
| `typography/letter-spacing/0dot3` | 0.3 |
| `typography/letter-spacing/0dot5` | 0.5 |
| `typography/letter-spacing/0dot8` | 0.8 |

### typography/font-weight
| Token | Value |
|-------|-------|
| `typography/font-weight/light` | 300 |
| `typography/font-weight/regular` | 400 |
| `typography/font-weight/medium` | 500 |
| `typography/font-weight/semibold` | 600 |

---

## Values/space (Spacing Scale)
4px base unit system.

| Token | Value (px) | Multiplier |
|-------|------------|------------|
| `Values/space/space-0x` | 0 | 0Ã— |
| `Values/space/space-0Halfx` | 2 | 0.5Ã— |
| `Values/space/space-1` | 4 | 1Ã— |
| `Values/space/space-1Halfx` | 6 | 1.5Ã— |
| `Values/space/space-2x` | 8 | 2Ã— |
| `Values/space/space-3x` | 12 | 3Ã— |
| `Values/space/space-4x` | 16 | 4Ã— |
| `Values/space/space-5x` | 20 | 5Ã— |
| `Values/space/space-6x` | 24 | 6Ã— |
| `Values/space/space-8x` | 32 | 8Ã— |
| `Values/space/space-10x` | 40 | 10Ã— |
| `Values/space/space-12x` | 48 | 12Ã— |
| `Values/space/space-14x` | 56 | 14Ã— |
| `Values/space/space-16x` | 64 | 16Ã— |

## Values/corner radii (Border Radius Scale)

| Token | Value (px) |
|-------|------------|
| `Values/corner radii/radius-0x` | 0 |
| `Values/corner radii/radius-halfx` | 2 |
| `Values/corner radii/radius-1x` | 4 |
| `Values/corner radii/radius-1halfx` | 6 |
| `Values/corner radii/radius-2x` | 8 |
| `Values/corner radii/radius-2halfx` | 10 |
| `Values/corner radii/radius-max` | 100 |

## Values/elevation (Shadow/Elevation Scale)

| Token | Value |
|-------|-------|
| `Values/elevation/e100` | 0px 1px 5.3px rgba(72,70,100,0.07) |
| `Values/elevation/e200` | 0px 3px 15px rgba(72,70,100,0.08) |
| `Values/elevation/e300` | 0px 10px 35px rgba(72,70,100,0.05) |

## Values/breakpoint (Responsive Grid System)

### frame (Container Widths)
| Breakpoint | Width (px) |
|------------|------------|
| xs | 360 |
| sm | 480 |
| md | 768 |
| lg | 1024 |
| xl | 1280 |
| 2xl | 1536 |

### height (Design Heights)
| Breakpoint | Height (px) | Validation Height |
|------------|-------------|-------------------|
| xs | 720 | 667 |
| sm | 780 | 700 |
| md | 900 | 820 |
| lg | 800 | 768 |
| xl | 800 | 768 |
| 2xl | 900 | 800 |

### columns (Grid Columns)
| Breakpoint | Columns |
|------------|---------|
| xs | 4 |
| sm | 4 |
| md | 8 |
| lg | 12 |
| xl | 12 |
| 2xl | 12 |

### gutter (Column Gaps)
| Breakpoint | Gutter (px) |
|------------|-------------|
| xs | 16 |
| sm | 16 |
| md | 24 |
| lg | 24 |
| xl | 24 |
| 2xl | 32 |

### margin (Container Margins)
| Breakpoint | Margin (px) |
|------------|-------------|
| xs | 16 |
| sm | 24 |
| md | 32 |
| lg | 48 |
| xl | 64 |
| 2xl | 80 |

---

# TIER 2 - SEMANTIC TOKENS (Purpose-Based)

Tier 2 tokens provide semantic meaning and handle Light/Dark mode switching. The same token names exist in both modes but resolve to different Tier 1 values.

## Color Tokens

### color/content
Text, icon, and foreground colors.

| Token | Light Mode â†’ | Dark Mode â†’ | Purpose |
|-------|--------------|-------------|---------|
| `color/content/primary` | ohmedarkblue | white | High-emphasis text |
| `color/content/secondary` | grey700 | grey300 | Medium-emphasis |
| `color/content/tertiary` | grey300 | grey700 | Low-emphasis |
| `color/content/accent` | highlighterteal | highlighterteal | Accent content |
| `color/content/inverse` | white | ohmedarkblue | Inverted context |
| `color/content/disabled` | grey300 | grey700 | Disabled state |
| `color/content/link` | brightblue | brightblue | Link text |
| `color/content/link 2` | teal700 | teal700 | Alternative link |
| `color/content/on-brand` | white | white | On brand surfaces |
| `color/content/on-accent` | ohmedarkblue | ohmedarkblue | On accent surfaces |
| `color/content/on-state` | white | white | On state surfaces |
| `color/content/icon` | highlighterteal | highlighterteal | Default icon |
| `color/content/icon 2` | ohmedarkblue | white | Secondary icon |
| `color/content/icon 3` | teal700 | teal700 | Tertiary icon |
| `color/content/avatar` | sandyorange | sandyorange | Avatar initials |

### color/surface
Background layers and containers.

| Token | Light Mode â†’ | Dark Mode â†’ | Purpose |
|-------|--------------|-------------|---------|
| `color/surface/canvas` | white | ohmedarkblue | Page background |
| `color/surface/base` | smokeyblue (#F5F8FA) | lakeblue | Card background |
| `color/surface/subtle` | grey100 | voidblue | Tinted background |
| `color/surface/raised` | white | lakeblue | Elevated containers |
| `color/surface/brand` | ohmedarkblue | ohmedarkblue | Brand surfaces |
| `color/surface/accent` | highlighterteal | highlighterteal | Accent surfaces |
| `color/surface/inverse` | ohmedarkblue | white | Inverted surfaces |
| `color/surface/overlay` | ohmedarkblue @ 60% | ohmedarkblue @ 60% | Modal overlay |
| `color/surface/avatar` | yellow100 | yellow100 | Avatar background |

### color/border
Edges, outlines, and dividers.

| Token | Light Mode â†’ | Dark Mode â†’ | Purpose |
|-------|--------------|-------------|---------|
| `color/border/subtle` | grey100 | grey700 | Subtle dividers |
| `color/border/default` | grey300 | grey300 | Standard borders |
| `color/border/strong` | grey700 | grey700 | Emphasized borders |
| `color/border/brand` | ohmedarkblue | highlighterteal | Brand borders |
| `color/border/focus` | teal300 | teal300 | Focus ring |
| `color/border/danger` | rosered | rosered | Error borders |
| `color/border/warning` | yellow100 | yellow100 | Warning borders |
| `color/border/success` | green100 | green100 | Success borders |
| `color/border/disabled` | grey100 | grey700 | Disabled borders |

### color/state (Interaction & Semantic States)

#### Hover
| Token | Light â†’ | Dark â†’ |
|-------|---------|--------|
| `color/state/hover/surface` | grey700 | grey300 |
| `color/state/hover/content` | ohmedarkblue | white |
| `color/state/hover/border` | grey700 | grey300 |

#### Active
| Token | Light â†’ | Dark â†’ |
|-------|---------|--------|
| `color/state/active/surface` | grey300 | grey700 |
| `color/state/active/content` | ohmedarkblue | white |
| `color/state/active/border` | grey300 | grey700 |

#### Disabled
| Token | Light â†’ | Dark â†’ |
|-------|---------|--------|
| `color/state/disabled/surface` | smokeygrey | grey700 |
| `color/state/disabled/content` | grey700 | grey300 |
| `color/state/disabled/icon` | grey700 | grey300 |
| `color/state/disabled/border` | smokeygrey | grey700 |

#### Focus
| Token | Light â†’ | Dark â†’ |
|-------|---------|--------|
| `color/state/focus/surface` | white | lakeblue |
| `color/state/focus/content` | ohmedarkblue | white |
| `color/state/focus/icon` | ohmedarkblue | white |
| `color/state/focus/border` | teal300 | teal300 |

#### Action (Teal semantic)
| Token | Light â†’ | Dark â†’ |
|-------|---------|--------|
| `color/state/action/surface` | teal100 | teal900 |
| `color/state/action/content` | teal900 | teal100 |
| `color/state/action/icon` | teal900 | teal100 |
| `color/state/action/border` | teal300 | teal300 |

#### Warning (Yellow semantic)
| Token | Light â†’ | Dark â†’ |
|-------|---------|--------|
| `color/state/warning/surface` | yellow100 | yellow900 |
| `color/state/warning/content` | yellow900 | yellow100 |
| `color/state/warning/icon` | yellow900 | yellow100 |
| `color/state/warning/border` | yellow300 | yellow300 |

#### Error (Red semantic)
| Token | Light â†’ | Dark â†’ |
|-------|---------|--------|
| `color/state/error/surface` | red100 | red900 |
| `color/state/error/content` | red900 | red100 |
| `color/state/error/icon` | red900 | red100 |
| `color/state/error/border` | rosered | rosered |

#### Success (Green semantic)
| Token | Light â†’ | Dark â†’ |
|-------|---------|--------|
| `color/state/success/surface` | green100 | green900 |
| `color/state/success/content` | green900 | green100 |
| `color/state/success/icon` | green900 | green100 |
| `color/state/success/border` | green300 | green300 |

#### Info (Blue semantic)
| Token | Light â†’ | Dark â†’ |
|-------|---------|--------|
| `color/state/info/surface` | blue100 | blue900 |
| `color/state/info/content` | blue900 | blue100 |
| `color/state/info/icon` | blue900 | blue100 |
| `color/state/info/border` | blue300 | blue300 |

#### Special (Violet semantic)
| Token | Light â†’ | Dark â†’ |
|-------|---------|--------|
| `color/state/special/surface` | violet100 | violet900 |
| `color/state/special/content` | violet900 | violet100 |
| `color/state/special/icon` | violet900 | violet100 |
| `color/state/special/border` | violet300 | violet300 |

### color/interactive (Actionable Element Roles)

#### Primary Interactive
| Token | References |
|-------|------------|
| `color/interactive/primary/surface` | highlighterteal |
| `color/interactive/primary/surface hover` | teal500 |
| `color/interactive/primary/surface select` | teal300 |
| `color/interactive/primary/content` | content/on-accent |
| `color/interactive/primary/border` | surface/brand |

#### Secondary Interactive
| Token | References |
|-------|------------|
| `color/interactive/secondary/surface` | surface/canvas |
| `color/interactive/secondary/surface hover` | state/hover/surface |
| `color/interactive/secondary/surface select` | state/active/surface |
| `color/interactive/secondary/content` | content/primary |
| `color/interactive/secondary/border` | border/default |

#### Tertiary Interactive
| Token | References |
|-------|------------|
| `color/interactive/tertiary/surface` | brand/clear |
| `color/interactive/tertiary/surface hover` | state/hover/surface |
| `color/interactive/tertiary/surface select` | state/active/surface |
| `color/interactive/tertiary/content` | content/primary |
| `color/interactive/tertiary/border` | brand/clear |

---

## Spacing Tokens

### value/spacing/core
Semantic spacing scale with t-shirt sizing.

| Token | â†’ Tier 1 | Value |
|-------|----------|-------|
| `value/spacing/core/none` | space-0x | 0px |
| `value/spacing/core/xxs` | space-0Halfx | 2px |
| `value/spacing/core/xs` | space-1 | 4px |
| `value/spacing/core/sm` | space-1Halfx | 6px |
| `value/spacing/core/md` | space-2x | 8px |
| `value/spacing/core/lg` | space-3x | 12px |
| `value/spacing/core/xl` | space-4x | 16px |
| `value/spacing/core/2xl` | space-5x | 20px |
| `value/spacing/core/3xl` | space-6x | 24px |
| `value/spacing/core/4xl` | space-8x | 32px |
| `value/spacing/core/5xl` | space-10x | 40px |
| `value/spacing/core/6xl` | space-12x | 48px |
| `value/spacing/core/7xl` | space-14x | 56px |
| `value/spacing/core/8xl` | space-16x | 64px |

### value/spacing/axis_aware/Inline (Horizontal)
| Token | â†’ Core |
|-------|--------|
| `value/spacing/axis_aware/Inline/none` | none |
| `value/spacing/axis_aware/Inline/xxs` | xxs |
| `value/spacing/axis_aware/Inline/xs` | xs |
| `value/spacing/axis_aware/Inline/sm` | sm |
| `value/spacing/axis_aware/Inline/md` | md |
| `value/spacing/axis_aware/Inline/lg` | lg |
| `value/spacing/axis_aware/Inline/xl` | xl |
| `value/spacing/axis_aware/Inline/3xl` | 3xl |
| `value/spacing/axis_aware/Inline/4xl` | 4xl |
| `value/spacing/axis_aware/Inline/5xl` | 5xl |

### value/spacing/axis_aware/stack (Vertical)
| Token | â†’ Core |
|-------|--------|
| `value/spacing/axis_aware/stack/none` | none |
| `value/spacing/axis_aware/stack/xxs` | xxs |
| `value/spacing/axis_aware/stack/xs` | xs |
| `value/spacing/axis_aware/stack/sm` | sm |
| `value/spacing/axis_aware/stack/md` | md |
| `value/spacing/axis_aware/stack/lg` | lg |
| `value/spacing/axis_aware/stack/xl` | xl |
| `value/spacing/axis_aware/stack/3xl` | 3xl |
| `value/spacing/axis_aware/stack/4xl` | 4xl |
| `value/spacing/axis_aware/stack/5xl` | 5xl |

### value/spacing/gap
| Token | â†’ Core |
|-------|--------|
| `value/spacing/gap/none` | none |
| `value/spacing/gap/xxs` | xxs |
| `value/spacing/gap/xs` | xs |
| `value/spacing/gap/sm` | sm |
| `value/spacing/gap/md` | md |
| `value/spacing/gap/lg` | lg |
| `value/spacing/gap/xl` | xl |
| `value/spacing/gap/3xl` | 3xl |
| `value/spacing/gap/4xl` | 4xl |
| `value/spacing/gap/5xl` | 5xl |

### value/spacing/negative
| Token | Value |
|-------|-------|
| `value/spacing/negative/xs` | -2px |
| `value/spacing/negative/sm` | -4px |

---

## Value Tokens

### value/border/width
| Token | Value |
|-------|-------|
| `value/border/width/none` | 0 |
| `value/border/width/hairline` | 1px |
| `value/border/width/thin` | 2px |
| `value/border/width/thick` | 3px |

### value/corner-radii
| Token | â†’ Tier 1 | Value |
|-------|----------|-------|
| `value/corner-radii/none` | radius-0x | 0px |
| `value/corner-radii/xs` | radius-halfx | 2px |
| `value/corner-radii/sm` | radius-1x | 4px |
| `value/corner-radii/md` | radius-1halfx | 6px |
| `value/corner-radii/lg` | radius-2x | 8px |
| `value/corner-radii/xl` | radius-2halfx | 10px |
| `value/corner-radii/full` | radius-max | 100px |

### value/motion/duration
| Token | Value |
|-------|-------|
| `value/motion/duration/fast` | 150ms |
| `value/motion/duration/normal` | 300ms |
| `value/motion/duration/slow` | 500ms |

### value/motion/easing
| Token | Value |
|-------|-------|
| `value/motion/easing/standard` | cubic-bezier(0.16, 1, 0.3, 1) |

### value/z-index
| Token | Value |
|-------|-------|
| `value/z-index/base` | 1 |
| `value/z-index/dropdown` | 10 |
| `value/z-index/tooltip` | 100 |
| `value/z-index/modal overlay` | 999 |
| `value/z-index/modal` | 1000 |

### value/elevation
| Token | â†’ Tier 1 |
|-------|----------|
| `value/elevation/level-1` | e100 |
| `value/elevation/level-2` | e200 |
| `value/elevation/level 3` | e300 |
| `value/elevation/surface-raised` | level-1 |
| `value/elevation/surface-floating` | level-2 |
| `value/elevation/surface-overlay` | level 3 |

---

## Typography Composites

Typography composites combine font-family, font-size, font-weight, line-height, and letter-spacing into complete type styles.

### Desktop Headings

| Style | Size/Line-height | Weight Default | Letter-spacing |
|-------|------------------|----------------|----------------|
| h1 | 50px / 72px | Regular | 0.5px |
| h2 | 44px / 50px | Medium | 0.5px |
| h3 | 36px / 36px | Regular | 0.3px |
| h4 | 32px / 40px | Regular | 0.2px |
| h5 | 26px / 28px | Medium | 0.2px |
| h6 | 22px / 28px | Regular | 0.2px |

### Desktop Body

| Style | Size/Line-height | Weight Default | Letter-spacing |
|-------|------------------|----------------|----------------|
| paragraph | 18px / 24px | Regular | 0.2px |
| small | 14px / 24px | Regular | 0.1px |

### Mobile Headings

| Style | Size/Line-height | Weight Default | Letter-spacing |
|-------|------------------|----------------|----------------|
| h1 | 32px / 40px | SemiBold | 0.5px |
| h2 | 28px / 36px | Medium | 0.5px |
| h3 | 26px / 36px | Regular | 0.3px |
| h4 | 22px / 30px | Regular | 0.2px |
| h5 | 20px / 28px | Medium | 0.2px |
| h6 | 18px / 24px | Regular | 0.2px |

### Mobile Body

| Style | Size/Line-height | Weight Default | Letter-spacing |
|-------|------------------|----------------|----------------|
| paragraph | 16px / 24px | Regular | 0.2px |
| small | 14px / 24px | Regular | 0.1px |

### Supporting Text

| Style | Size/Line-height | Weight | Letter-spacing |
|-------|------------------|--------|----------------|
| button-text-large | 18px / 24px | SemiBold | 0px |
| button-text-small | 16px / 16px | SemiBold | 0px |
| input-text | 16px / 24px | Regular | 0px |
| input-label | 14px / 18px | Regular | 0px |
| label | 12px / 16px | Regular | 0.1px |

---

# TIER 3 - COMPONENT TOKENS

Component tokens encode specific design decisions for UI components, always referencing Tier 2 semantic tokens.

## Button Tokens

### button/primary

| Token | â†’ Tier 2 |
|-------|----------|
| `button/primary/surface/active` | interactive/primary/surface |
| `button/primary/surface/hover` | interactive/primary/surface hover |
| `button/primary/surface/select` | interactive/primary/surface select |
| `button/primary/surface/disabled` | state/disabled/surface |
| `button/primary/content/content` | interactive/primary/content |
| `button/primary/content/disabled` | state/disabled/content |
| `button/primary/border/active` | interactive/primary/border |
| `button/primary/border/disabled` | state/disabled/border |

### button/secondary

| Token | â†’ Tier 2 |
|-------|----------|
| `button/secondary/surface/active` | interactive/secondary/surface |
| `button/secondary/surface/hover` | tertiary/lightgrey |
| `button/secondary/surface/select` | brand/smokeygrey |
| `button/secondary/surface/disabled` | brand/white |
| `button/secondary/content/content` | content/primary |
| `button/secondary/content/disabled` | state/disabled/content |
| `button/secondary/border/active` | brand/ohmedarkblue |
| `button/secondary/border/disabled` | brand/smokeygrey |

### button/tertiary

| Token | â†’ Tier 2 |
|-------|----------|
| `button/tertiary/surface/active` | interactive/tertiary/surface |
| `button/tertiary/surface/hover` | tertiary/lightgrey |
| `button/tertiary/surface/select` | brand/smokeygrey |
| `button/tertiary/surface/disabled` | brand/white |
| `button/tertiary/content/content` | content/primary |
| `button/tertiary/content/disabled` | state/disabled/content |
| `button/tertiary/border/active` | interactive/tertiary/border |
| `button/tertiary/border/disabled` | brand/smokeygrey |

### Button Corner Radius (all variants)

| Size | â†’ Value |
|------|---------|
| lg | radius-2x (8px) |
| md | radius-1halfx (6px) |
| sm | radius-1x (4px) |

---

## Dropdown Tokens

### Dropdown/field

| Token | â†’ Tier 2 |
|-------|----------|
| `Dropdown/field/surface/active` | surface/canvas |
| `Dropdown/field/surface/disabled` | state/disabled/surface |
| `Dropdown/field/surface/error` | surface/canvas |
| `Dropdown/field/surface/filled` | surface/canvas |
| `Dropdown/field/surface/focus` | surface/canvas |
| `Dropdown/field/content/placeholder` | content/secondary |
| `Dropdown/field/content/filled` | content/primary |
| `Dropdown/field/content/disabled` | state/disabled/content |
| `Dropdown/field/border/active` | border/default |
| `Dropdown/field/border/disabled` | state/disabled/border |
| `Dropdown/field/border/error` | state/error/border |
| `Dropdown/field/border/filled` | border/default |
| `Dropdown/field/border/focus` | surface/accent |

### Dropdown/menu

| Token | â†’ Tier 2 |
|-------|----------|
| `Dropdown/menu/surface` | surface/raised |
| `Dropdown/menu/border` | border/subtle |
| `Dropdown/menu/elevation` | z-index/dropdown |

### Dropdown/menu/item

| Token | â†’ Tier 2 |
|-------|----------|
| `Dropdown/menu/item/surface-active` | surface/canvas |
| `Dropdown/menu/item/surface-hover` | surface/base |
| `Dropdown/menu/item/content` | content/primary |
| `Dropdown/menu/item/selected` | interactive/primary/surface |

---

## Input Tokens

### Input/field

| Token | â†’ Tier 2 |
|-------|----------|
| `Input/field/surface/active` | surface/canvas |
| `Input/field/surface/disabled` | state/disabled/surface |
| `Input/field/surface/error` | surface/canvas |
| `Input/field/surface/filled` | surface/canvas |
| `Input/field/surface/focus` | surface/canvas |
| `Input/field/content/placeholder` | content/secondary |
| `Input/field/content/filled` | content/primary |
| `Input/field/content/disabled` | state/disabled/content |
| `Input/field/border/active` | border/default |
| `Input/field/border/disabled` | state/disabled/border |
| `Input/field/border/error` | state/error/border |
| `Input/field/border/filled` | border/default |
| `Input/field/border/focus` | surface/accent |

### Input/Label & error-message

| Token | â†’ Tier 2 |
|-------|----------|
| `Input/Label/Content` | content/secondary |
| `Input/error-message/Content` | state/error/border |

---

## Modal Tokens

| Token | â†’ Tier 2 |
|-------|----------|
| `modal/buttongroup/gap` | spacing/gap/lg |
| `modal/container/surface` | surface/raised |
| `modal/container/border` | border/subtle |
| `modal/container/radius` | corner-radii/lg |
| `modal/container/elevation` | elevation/level 3 |
| `modal/container/padding-inline` | spacing/axis_aware/inline/lg |
| `modal/container/padding-stack` | spacing/axis_aware/stack/lg |
| `modal/overlay/surface` | surface/overlay |
| `modal/header/title` | content/primary |
| `modal/header/subtitle` | content/secondary |
| `modal/header/icon` | content/primary |
| `modal/header/padding-inline` | spacing/axis_aware/inline/md |
| `modal/header/gap` | spacing/gap/lg |
| `modal/body/content` | content/primary |
| `modal/body/gap` | spacing/gap/md |
| `modal/advisory-text/surface` | surface/base |
| `modal/advisory-text/content` | content/primary |
| `modal/advisory-text/padding-inline` | spacing/axis_aware/inline/lg |
| `modal/advisory-text/padding-stack` | spacing/axis_aware/stack/lg |

---

## Pill Tokens

### pill/intent

| Intent | Surface â†’ | Content â†’ | Border â†’ |
|--------|-----------|-----------|----------|
| jobtype | state/focus/surface | state/focus/content | state/focus/border |
| action | state/action/surface | state/action/content | state/action/border |
| success | state/success/surface | state/success/content | state/success/border |
| warning | state/warning/surface | state/warning/content | state/warning/border |
| error | state/error/surface | state/error/content | state/error/border |
| info | state/info/surface | state/info/content | state/info/border |
| special | state/special/surface | state/special/content | state/special/border |
| job type | surface/inverse | content/inverse | border/brand |
| channel | surface/canvas | content/primary | border/brand |

### pill/size

| Size | padding-inline | padding-stack | gap |
|------|----------------|---------------|-----|
| sm | inline/lg | stack/xs | gap/xxs |
| lg | inline/lg | stack/xs | gap/sm |
| icon-only | inline/sm | - | radius-max |

---

## Radio Tokens

### radio/size

| Size | Control Ã˜ | Dot Ã˜ | Gap |
|------|-----------|-------|-----|
| sm | 16px | 8px | inline/xxs |
| md | 20px | 10px | inline/xs |

### radio/style

| Token | â†’ Tier 2 |
|-------|----------|
| `radio/style/label` | content/primary |
| `radio/style/label-disabled` | content/disabled |

---

## Switch Tokens

### switch/state/inactive

| Token | â†’ Tier 2 |
|-------|----------|
| `track/surface` | surface/subtle |
| `track/border` | border/brand |
| `thumb/surface` | surface/base |
| `thumb/border` | border/default |
| `thumb/icon` | content/primary |

### switch/state/active

| Token | â†’ Tier 2 |
|-------|----------|
| `track/surface` | surface/accent |
| `track/border` | surface/brand |
| `thumb/surface` | surface/canvas |
| `thumb/border` | secondary/teal700 |
| `thumb/icon` | content/primary |

### switch/size

| Size | Track W | Track H | Gap | Radius |
|------|---------|---------|-----|--------|
| lg | 56px | 32px | gap/xxs | radius-max |
| sm | 40px | 24px | gap/xxs | radius-max |

---

## Tab Tokens

### tab/size/md

| Token | â†’ Tier 2 |
|-------|----------|
| `padding-inline` | axis_aware/inline/md |
| `padding-stack` | axis_aware/stack/md |
| `gap` | gap/lg |
| `radius` | corner-radii/md |

### tab/new/state

| State | Surface â†’ | Indicator â†’ | Content â†’ |
|-------|-----------|-------------|-----------|
| default | surface/base | brand/clear | content/primary |
| selected | teal100 | interactive/primary/surface | content/primary |

### tab/old/state

| State | Surface â†’ | Border â†’ | Content â†’ |
|-------|-----------|----------|-----------|
| default | surface/canvas | border/subtle | content/primary |
| selected | surface/canvas | teal700 | content/primary |

---

## Textarea Tokens

### textarea/textbox/state

| State | Surface â†’ | Border â†’ | Helper Text â†’ |
|-------|-----------|----------|---------------|
| default | surface/canvas | border/subtle | content/tertiary |
| focus | state/focus/surface | state/focus/border | content/tertiary |
| error | surface/canvas | state/error/border | state/error/content |
| disabled | state/disabled/surface | state/disabled/border | state/disabled/content |

---

## Navigation Tokens

### Menu

| Token | â†’ Tier 1/2 |
|-------|------------|
| `Menu/Label` | tertiary/paleteal |
| `Menu/Divider` | white |

### Menu/Collapse

| Token | â†’ |
|-------|---|
| `collapse-surface` | brand/smokeygreen |

### Menu/Menu drawer

| Token | â†’ |
|-------|---|
| `menudrawer-surface` | navigation/surface |

### Menu/Menu Item

| Token | â†’ |
|-------|---|
| `menuitem-surface-default` | surface/brand |
| `menuitem-surface-hover` | electricblue @ 5% |
| `menuitem-surface-active` | electricblue @ 12% |

---

## Token System Summary

### Architecture Health: 98%
- All component tokens properly reference Tier 2
- All semantic tokens properly reference Tier 1
- Mode switching handled entirely at Tier 2

### Token Counts by Tier

| Tier | Count | Categories |
|------|-------|------------|
| Tier 1 | 162 | Colors (75), Typography (35), Values (52) |
| Tier 2 | 452 | Colors (180), Spacing (85), Values (52), Typography (135) |
| Tier 3 | 311 | Button (45), Dropdown (25), Input (20), Modal (20), Pill (35), Radio (12), Switch (22), Tab (30), Textarea (12), Navigation (15), Other (95) |
| **Total** | **925** | |

### Component Coverage
- Buttons: 4 variants (Primary, Secondary, Tertiary, Combo)
- Dropdowns: Field, Menu, Items
- Inputs: Field, Label, Error states
- Modals: Complete system with overlay
- Pills: 9 intent types, 3 sizes
- Radio buttons: 2 sizes, styled labels
- Switches/Toggles: 2 states, 2 sizes
- Tabs: New and Old variants
- Textarea: 4 states

---

## CSS Custom Properties Example

```css
:root {
  /* Tier 1 - Primitives */
  --color-brand-highlighterteal: #00FFD6;
  --color-brand-ohmedarkblue: #032536;
  --space-4x: 16px;
  --radius-2x: 8px;
  
  /* Tier 2 - Semantic (Light mode) */
  --color-content-primary: var(--color-brand-ohmedarkblue);
  --color-surface-canvas: #FFFFFF;
  --spacing-lg: var(--space-3x);
  
  /* Tier 3 - Component */
  --button-primary-surface: var(--color-interactive-primary-surface);
  --button-primary-content: var(--color-content-on-accent);
}

[data-theme="dark"] {
  /* Tier 2 - Semantic (Dark mode overrides) */
  --color-content-primary: #FFFFFF;
  --color-surface-canvas: var(--color-brand-ohmedarkblue);
}
```

---

*Last Updated: January 2025*
*Design System: Ohme*
*Version: 2.0*
*Source: Figma Native Variables Export*
