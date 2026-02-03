# Flag Icon Component Documentation

## Overview

The Flag component is a foundational UI element that displays country and territory flags using SVG assets. This component supports 228 different countries, territories, and special regions with their corresponding ISO 3166-1 alpha-2 codes (and some extensions).

**Component Type:** Foundation Component  
**Category:** Icons & Graphics  
**Hard-coded:** Yes - all flag designs use embedded SVG assets with fixed colors

## Design Specifications

### Default Dimensions
- **Width:** 18px
- **Height:** 12px (most flags)
- **Aspect Ratio:** 3:2

### Special Cases
- **GB (United Kingdom):** 24px Ã— 24px (larger than standard)
- **TC (Turks and Caicos):** 18px Ã— 15px (slightly taller)
- **KG (Kyrgyzstan):** 18px Ã— 12.023px (minor height variance)
- **MW (Malawi):** 18px Ã— 12.023px (minor height variance)
- **NC (New Caledonia):** 18px Ã— 12.001px (minor height variance)

### Visual Characteristics
- All flags use SVG format for crisp rendering at any scale
- Colors are hard-coded within each flag's SVG definition
- Flags maintain proper heraldic design standards
- Consistent border radius (if applicable to design)

## Component Structure

### Props Interface

```typescript
type FlagProps = {
  className?: string;
  country?: CountryCode;
};
```

### Country Code Type

The `country` prop accepts one of 228 country/territory codes (see complete list below).

## Supported Countries & Territories

### Complete List (228 Total)

#### A
- **AC** - Ascension Island
- **AD** - Andorra
- **AE** - United Arab Emirates
- **AF** - Afghanistan
- **AG** - Antigua and Barbuda
- **AI** - Anguilla
- **AL** - Albania
- **AM** - Armenia
- **AO** - Angola
- **AQ** - Antarctica
- **AR** - Argentina
- **AS** - American Samoa
- **AT** - Austria
- **AU** - Australia
- **AW** - Aruba
- **AX** - Ã…land Islands
- **AZ** - Azerbaijan

#### B
- **BA** - Bosnia and Herzegovina
- **BB** - Barbados
- **BD** - Bangladesh
- **BE** - Belgium
- **BF** - Burkina Faso
- **BG** - Bulgaria
- **BH** - Bahrain
- **BI** - Burundi
- **BJ** - Benin
- **BL** - Saint BarthÃ©lemy
- **BM** - Bermuda
- **BN** - Brunei
- **BO** - Bolivia
- **BQ** - Caribbean Netherlands
- **BR** - Brazil
- **BS** - Bahamas
- **BT** - Bhutan
- **BV** - Bouvet Island
- **BW** - Botswana
- **BY** - Belarus
- **BZ** - Belize

#### C
- **CA** - Canada
- **CC** - Cocos (Keeling) Islands
- **CD** - Democratic Republic of the Congo
- **CF** - Central African Republic
- **CG** - Republic of the Congo
- **CH** - Switzerland
- **CI** - CÃ´te d'Ivoire
- **CK** - Cook Islands
- **CL** - Chile
- **CM** - Cameroon
- **CN** - China
- **CO** - Colombia
- **CR** - Costa Rica
- **CU** - Cuba
- **CV** - Cape Verde
- **CW** - CuraÃ§ao
- **CX** - Christmas Island
- **CY** - Cyprus
- **CZ** - Czech Republic

#### D
- **DE** - Germany
- **DJ** - Djibouti
- **DK** - Denmark
- **DM** - Dominica
- **DO** - Dominican Republic
- **DZ** - Algeria

#### E
- **EC** - Ecuador
- **EE** - Estonia
- **EG** - Egypt
- **EH** - Western Sahara
- **ER** - Eritrea
- **ES** - Spain
- **ET** - Ethiopia
- **EU** - European Union

#### F
- **FI** - Finland
- **FJ** - Fiji
- **FK** - Falkland Islands
- **FM** - Micronesia
- **FO** - Faroe Islands
- **FR** - France

#### G
- **GA** - Gabon
- **GB** - United Kingdom (24Ã—24px)
- **GD** - Grenada
- **GE** - Georgia
- **GE-AB** - Abkhazia (Georgia)
- **GE-OS** - South Ossetia (Georgia)
- **GF** - French Guiana
- **GG** - Guernsey
- **GH** - Ghana
- **GI** - Gibraltar
- **GL** - Greenland
- **GM** - Gambia
- **GN** - Guinea
- **GP** - Guadeloupe
- **GQ** - Equatorial Guinea
- **GR** - Greece
- **GS** - South Georgia and the South Sandwich Islands
- **GT** - Guatemala
- **GU** - Guam
- **GW** - Guinea-Bissau
- **GY** - Guyana

#### H
- **HK** - Hong Kong
- **HM** - Heard Island and McDonald Islands
- **HN** - Honduras
- **HR** - Croatia
- **HT** - Haiti
- **HU** - Hungary

#### I
- **ID** - Indonesia
- **IE** - Ireland
- **IL** - Israel
- **IM** - Isle of Man
- **IN** - India
- **IO** - British Indian Ocean Territory
- **IQ** - Iraq
- **IR** - Iran
- **IS** - Iceland
- **IT** - Italy

#### J
- **JE** - Jersey
- **JM** - Jamaica
- **JO** - Jordan
- **JP** - Japan

#### K
- **KE** - Kenya
- **KG** - Kyrgyzstan
- **KH** - Cambodia
- **KI** - Kiribati
- **KM** - Comoros
- **KN** - Saint Kitts and Nevis
- **KP** - North Korea
- **KR** - South Korea
- **KW** - Kuwait
- **KY** - Cayman Islands
- **KZ** - Kazakhstan

#### L
- **LA** - Laos
- **LB** - Lebanon
- **LC** - Saint Lucia
- **LI** - Liechtenstein
- **LK** - Sri Lanka
- **LR** - Liberia
- **LS** - Lesotho
- **LT** - Lithuania
- **LU** - Luxembourg
- **LV** - Latvia
- **LY** - Libya

#### M
- **MA** - Morocco
- **MC** - Monaco
- **MD** - Moldova
- **ME** - Montenegro
- **MF** - Saint Martin
- **MG** - Madagascar
- **MH** - Marshall Islands
- **MK** - North Macedonia
- **ML** - Mali
- **MM** - Myanmar
- **MN** - Mongolia
- **MO** - Macau
- **MP** - Northern Mariana Islands
- **MQ** - Martinique
- **MR** - Mauritania
- **MS** - Montserrat
- **MT** - Malta
- **MU** - Mauritius
- **MV** - Maldives
- **MW** - Malawi
- **MX** - Mexico
- **MY** - Malaysia
- **MZ** - Mozambique

#### N
- **NA** - Namibia
- **NC** - New Caledonia
- **NE** - Niger
- **NF** - Norfolk Island
- **NG** - Nigeria
- **NI** - Nicaragua
- **NL** - Netherlands
- **NO** - Norway
- **NP** - Nepal
- **NR** - Nauru
- **NU** - Niue
- **NZ** - New Zealand

#### O
- **OM** - Oman

#### P
- **PA** - Panama
- **PE** - Peru
- **PF** - French Polynesia
- **PG** - Papua New Guinea
- **PH** - Philippines
- **PK** - Pakistan
- **PL** - Poland
- **PM** - Saint Pierre and Miquelon
- **PN** - Pitcairn Islands
- **PR** - Puerto Rico
- **PS** - Palestine
- **PT** - Portugal
- **PW** - Palau
- **PY** - Paraguay

#### Q
- **QA** - Qatar

#### R
- **RE** - RÃ©union
- **RO** - Romania
- **RS** - Serbia
- **RU** - Russia
- **RW** - Rwanda

#### S
- **SA** - Saudi Arabia
- **SB** - Solomon Islands
- **SC** - Seychelles
- **SD** - Sudan
- **SE** - Sweden
- **SG** - Singapore
- **SH** - Saint Helena
- **SI** - Slovenia
- **SJ** - Svalbard and Jan Mayen
- **SK** - Slovakia
- **SL** - Sierra Leone
- **SM** - San Marino
- **SN** - Senegal
- **SO** - Somalia
- **SR** - Suriname
- **SS** - South Sudan
- **ST** - SÃ£o TomÃ© and PrÃ­ncipe
- **SV** - El Salvador
- **SX** - Sint Maarten
- **SY** - Syria
- **SZ** - Eswatini

#### T
- **TA** - Tristan da Cunha
- **TC** - Turks and Caicos Islands
- **TD** - Chad
- **TF** - French Southern Territories
- **TG** - Togo
- **TH** - Thailand
- **TJ** - Tajikistan
- **TK** - Tokelau
- **TL** - Timor-Leste
- **TM** - Turkmenistan
- **TN** - Tunisia
- **TO** - Tonga
- **TR** - Turkey
- **TT** - Trinidad and Tobago
- **TV** - Tuvalu
- **TW** - Taiwan
- **TZ** - Tanzania

#### U
- **UA** - Ukraine
- **UG** - Uganda
- **UM** - U.S. Minor Outlying Islands
- **US** - United States
- **UY** - Uruguay
- **UZ** - Uzbekistan

#### V
- **VA** - Vatican City
- **VC** - Saint Vincent and the Grenadines
- **VE** - Venezuela
- **VG** - British Virgin Islands
- **VI** - U.S. Virgin Islands
- **VN** - Vietnam
- **VU** - Vanuatu

#### W
- **WF** - Wallis and Futuna
- **WS** - Samoa

#### X
- **XK** - Kosovo

#### Y
- **YE** - Yemen
- **YT** - Mayotte

#### Z
- **ZA** - South Africa
- **ZM** - Zambia
- **ZW** - Zimbabwe

### Special Regions & Extensions

**Territorial Variants:**
- **GE-AB** - Abkhazia (disputed territory of Georgia)
- **GE-OS** - South Ossetia (disputed territory of Georgia)

**Supra-national:**
- **EU** - European Union

**British Overseas Territories & Dependencies:**
- **AC** - Ascension Island
- **TA** - Tristan da Cunha

**Non-ISO Extensions:**
- **XK** - Kosovo (user-assigned code, not official ISO 3166-1)

## Implementation Examples

### Basic Usage

```typescript
import { Flag } from '@/components/foundation/Flag';

// Default (Ascension Island)
<Flag />

// Specific country
<Flag country="US" />
<Flag country="GB" />
<Flag country="FR" />
```

### With Custom Styling

```typescript
// Add custom classes
<Flag country="CA" className={styles.flagIcon} />

// Inline styling
<Flag country="JP" className="rounded shadow-sm" />
```

### In a List

```typescript
const countries = ['US', 'GB', 'FR', 'DE', 'JP'] as const;

<div className={styles.flagGrid}>
  {countries.map(code => (
    <Flag key={code} country={code} />
  ))}
</div>
```

### With User Selection

```typescript
import { useState } from 'react';
import { Flag } from '@/components/foundation/Flag';

function CountrySelector() {
  const [selected, setSelected] = useState<CountryCode>('US');
  
  return (
    <div>
      <Flag country={selected} />
      <select 
        value={selected} 
        onChange={e => setSelected(e.target.value as CountryCode)}
      >
        <option value="US">United States</option>
        <option value="GB">United Kingdom</option>
        <option value="CA">Canada</option>
        {/* ... more options */}
      </select>
    </div>
  );
}
```

## CSS Module Structure

```css
.flag {
  display: inline-block;
  width: 18px;
  height: 12px;
  object-fit: contain;
}

.flagLarge {
  width: 24px;
  height: 24px; /* For GB variant */
}

.flagGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20px, 1fr));
  gap: 8px;
}
```

## Accessibility

### ARIA Labels

Always provide descriptive labels when flags are interactive:

```typescript
<button 
  aria-label="Select United States"
  onClick={() => selectCountry('US')}
>
  <Flag country="US" />
</button>
```

### Screen Reader Considerations

```typescript
<div role="img" aria-label="United Kingdom flag">
  <Flag country="GB" />
</div>
```

### Keyboard Navigation

Ensure flag selectors are keyboard navigable:

```typescript
<button 
  tabIndex={0}
  onKeyDown={handleKeyPress}
  aria-label="Germany"
>
  <Flag country="DE" />
</button>
```

## Technical Notes

### Hard-Coded Colors
All flag colors are embedded in the SVG assets and cannot be modified via CSS custom properties or theming. This ensures:
- Accurate representation of official flag designs
- Consistent colors across all rendering contexts
- No dependency on design tokens for flag colors

### SVG Assets
- Flags are loaded as static SVG files
- Assets are served from localhost during development
- Production builds should optimize and bundle SVG assets appropriately

### Performance Considerations
- SVG files are small and optimized for web delivery
- Consider lazy loading for large lists of flags
- Use CSS `will-change` for animated flag transitions

```css
.animatedFlag {
  will-change: transform;
  transition: transform 200ms ease;
}

.animatedFlag:hover {
  transform: scale(1.1);
}
```

## Browser Compatibility

- **Modern Browsers:** Full support (Chrome, Firefox, Safari, Edge)
- **SVG Support:** Required (all modern browsers)
- **IE11:** Not tested/supported

## Common Use Cases

### 1. Country Selector in Forms

```typescript
<div className={styles.countryField}>
  <label htmlFor="country">Country</label>
  <div className={styles.countrySelect}>
    <Flag country={selectedCountry} />
    <select id="country" value={selectedCountry} onChange={handleChange}>
      {/* options */}
    </select>
  </div>
</div>
```

### 2. Language Switcher

```typescript
const languages = [
  { code: 'US', label: 'English' },
  { code: 'ES', label: 'EspaÃ±ol' },
  { code: 'FR', label: 'FranÃ§ais' },
  { code: 'DE', label: 'Deutsch' },
];

<div className={styles.languageSwitcher}>
  {languages.map(({ code, label }) => (
    <button key={code} onClick={() => switchLanguage(code)}>
      <Flag country={code} />
      <span>{label}</span>
    </button>
  ))}
</div>
```

### 3. User Profile Location

```typescript
<div className={styles.userProfile}>
  <Avatar src={user.avatar} />
  <div className={styles.userInfo}>
    <h3>{user.name}</h3>
    <div className={styles.location}>
      <Flag country={user.countryCode} />
      <span>{user.location}</span>
    </div>
  </div>
</div>
```

### 4. Shipping Options

```typescript
<div className={styles.shippingOptions}>
  {shippingDestinations.map(dest => (
    <div key={dest.code} className={styles.destination}>
      <Flag country={dest.code} />
      <span>{dest.name}</span>
      <span className={styles.price}>{dest.shippingCost}</span>
    </div>
  ))}
</div>
```

## Testing Checklist

- [ ] All 228 flag variants render correctly
- [ ] GB (United Kingdom) displays at correct larger size (24Ã—24px)
- [ ] Flags maintain aspect ratio at different sizes
- [ ] SVG assets load properly in all environments
- [ ] ARIA labels present for interactive flags
- [ ] Keyboard navigation works for flag selectors
- [ ] Flags display correctly in both light/dark contexts
- [ ] No console errors for missing flag variants
- [ ] Custom className prop applies correctly
- [ ] Default country (AC) displays when no prop provided

## Related Components

- **Avatar** - User profile images (may include flag overlay)
- **Icon** - General icon system
- **Badge** - Small indicators (can use flags as content)

## Version History

- **v1.0** - Initial implementation with 228 country/territory flags

## Questions & Clarifications Needed

- [ ] Should flags support `onClick` handlers directly, or should they always be wrapped?
- [ ] Do we need a `size` prop for common sizes (small, medium, large)?
- [ ] Should we provide a helper function to get country name from code?
- [ ] Do we need RTL support for any flag-related layouts?
- [ ] Should animated flags (e.g., hover effects) be part of this component?
