# Self-Billing Invoice Template

A professional, A4-sized invoice template designed for Ohme's self-billing system across Park and Charge, Connect, and other portal products.

## Overview

This template generates invoices for partners/suppliers under Ohme's self-billing arrangement, where Ohme creates invoices on behalf of suppliers for completed work. The design follows the established Ohme design system styling from the electrical certificate template.

## Features

- **Professional A4 layout** (210mm × 297mm) ready for print or PDF conversion
- **Portal branding** with customizable logo (currently "PARK AND CHARGE")
- **Monthly breakdown structure** showing Q1 charges by month
- **Separate line item** for prior period charges
- **Automated VAT calculation** at 20%
- **Payment terms section** with 30-day terms and self-billing declaration
- **HMRC compliance** with self-billing agreement notice
- **Clean, accessible design** following Ohme design system tokens

## Structure

### Header Section
- **Logo**: Platform branding (Park and Charge, Connect, etc.)
- **Invoice number**: Unique identifier format `INV-YYYY-QX-NNNN`

### Title Section
- Invoice type: "Self-Billing Invoice"
- Period: Quarter and year
- Service type: e.g., "Parking Sessions" or "Installation Services"
- Compliance text: HMRC self-billing arrangement reference

### Party Details

**Supplier Details (Partner)**
- Company name
- Full address
- Postcode
- VAT registration number

**Customer Details (Ohme)**
- Pre-filled company information
- Address: 152-160 City Road, London, EC1V 2NX
- VAT registration number

### Invoice Breakdown Table

| Column | Description |
|--------|-------------|
| Description | Service type and period |
| Period | Month or date range |
| Sessions/Jobs | Number of completed items |
| Amount (£) | Line item total |

**Line Items:**
1. **Prior periods** (highlighted): Work completed before current quarter
2. **Monthly items**: One row per month in the quarter
   - January
   - February
   - March

### Totals Section
- Subtotal (pre-VAT)
- VAT at 20%
- Total amount due

### Additional Sections
- **Notes**: Free-text field for additional information
- **Payment terms**: 30-day payment terms and banking instructions
- **Self-billing declaration**: Legal compliance text

### Footer
- Issuer information
- Page numbering

## Usage

### Basic HTML Implementation

1. Open the template in any modern web browser
2. Print directly or use browser's "Save as PDF" function
3. File can be opened directly from file system or served via web server

### Integration into Portal Systems

#### React/Next.js Integration

```typescript
import { useRef } from 'react';

interface InvoiceData {
  invoiceNumber: string;
  quarter: string;
  year: number;
  supplier: {
    name: string;
    address: string;
    postcode: string;
    vatNumber: string;
  };
  lineItems: {
    description: string;
    period: string;
    count: number;
    amount: number;
    isPrior?: boolean;
  }[];
  notes?: string;
}

const generateInvoicePDF = async (data: InvoiceData) => {
  // Populate template with data
  // Use library like puppeteer or html2pdf
};
```

#### Backend Generation (Node.js)

```javascript
const puppeteer = require('puppeteer');

async function generateInvoice(invoiceData) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Load template
  const html = populateTemplate(invoiceData);
  await page.setContent(html);
  
  // Generate PDF
  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  
  await browser.close();
  return pdf;
}
```

## Customization

### Portal Branding

**Connect Portal:**
```html
<div class="logo">CONNECT</div>
```
```css
.logo {
  width: 98.5px;
  height: 31px;
}
```

**Park and Charge Portal:**
```html
<div class="logo">PARK AND CHARGE</div>
```
```css
.logo {
  width: 150px;
  height: 31px;
}
```

### Service Descriptions

**Parking Sessions (Park and Charge):**
```html
<td>Parking session - January</td>
<th>Sessions</th>
```

**Installation Services (Connect):**
```html
<td>Installation services - January</td>
<th>Jobs completed</th>
```

### Monthly Data

Update the table rows with actual data:

```html
<tr>
  <td>Parking session - January</td>
  <td>Jan 2025</td>
  <td>8</td>
  <td class="amount-cell">£154.00</td>
</tr>
```

### VAT Calculation

Current rate is 20%. To modify:

```html
<div class="totals-row vat">
  <span>VAT (20%):</span>
  <span>£101.60</span>
</div>
```

For VAT-exempt invoices, set to 0% or remove the row entirely.

### Payment Terms

Customize the payment section:

```html
<p class="payment-text">
  <strong>Payment due:</strong> 30 days from invoice date<br>
  <strong>Payment method:</strong> Bank transfer to account details provided separately<br>
  <strong>Self-billing agreement:</strong> [Your text here]
</p>
```

## Design System Alignment

### Typography
- **Title**: 20px, weight 600, color #032536
- **Section headers**: 14px, weight 600, background #F5F5F5
- **Body text**: 13px, color #484646
- **Labels**: 13px, color #484646

### Colors
- **Primary brand**: #00FFD6 (logo background)
- **Text primary**: #032536
- **Text secondary**: #484646
- **Borders**: #E0E0E0
- **Backgrounds**: #F5F5F5 (sections), #FFF9E6 (prior periods highlight)

### Spacing
- **Page padding**: 24px
- **Section gaps**: 24px vertical
- **Form field gaps**: 8px
- **Input height**: 20px (standard), 60px (textarea)

### Border Radius
- **Logo**: 4px
- **Section headers**: 4px
- **Input fields**: 2px
- **Totals boxes**: 4px

## File Formats

### HTML
- Direct browser rendering
- Easy editing and customization
- Can be styled with external CSS

### PDF Conversion Options

1. **Browser print** → Save as PDF
2. **Puppeteer** (Node.js): Headless Chrome automation
3. **html2pdf.js**: Client-side PDF generation
4. **Prince XML**: Enterprise PDF generation
5. **wkhtmltopdf**: Command-line tool

### Integration Formats

**JSON data structure:**
```json
{
  "invoiceNumber": "INV-2025-Q1-0001",
  "quarter": "Q1",
  "year": 2025,
  "supplier": {
    "name": "Partner Company Ltd",
    "address": "123 Main Street, London",
    "postcode": "SW1A 1AA",
    "vatNumber": "GB987654321"
  },
  "customer": {
    "name": "Ohme Technologies Ltd",
    "address": "152-160 City Road, London",
    "postcode": "EC1V 2NX",
    "vatNumber": "GB123456789"
  },
  "lineItems": [
    {
      "description": "Parking session - Prior periods",
      "period": "Pre-Q1 2025",
      "count": 3,
      "amount": 67.00,
      "isPrior": true
    },
    {
      "description": "Parking session - January",
      "period": "Jan 2025",
      "count": 8,
      "amount": 154.00
    },
    {
      "description": "Parking session - February",
      "period": "Feb 2025",
      "count": 6,
      "amount": 122.00
    },
    {
      "description": "Parking session - March",
      "period": "Mar 2025",
      "count": 9,
      "amount": 165.00
    }
  ],
  "subtotal": 508.00,
  "vatRate": 0.20,
  "vat": 101.60,
  "total": 609.60,
  "notes": "",
  "paymentTermsDays": 30
}
```

## HMRC Self-Billing Requirements

### Key Requirements
1. **Written agreement** between buyer and supplier
2. **Supplier consent** to self-billing arrangement
3. **Supplier must not** issue own invoices for these services
4. **VAT compliance**: Proper VAT registration numbers displayed
5. **Invoice numbering**: Unique sequential numbers
6. **Retention**: Invoices must be kept for 6 years

### Template Compliance
- ✅ Self-billing declaration included
- ✅ Both parties' VAT numbers displayed
- ✅ Unique invoice numbering system
- ✅ Clear service descriptions
- ✅ Proper VAT calculation and display
- ✅ Payment terms specified

## Browser Compatibility

Tested and working in:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Printing

### Print Settings
- **Paper size**: A4 (210mm × 297mm)
- **Margins**: None (template includes internal padding)
- **Background graphics**: Enabled
- **Scale**: 100%

### Print Preview
Use browser's print function (Ctrl+P / Cmd+P) to preview before saving as PDF.

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Sufficient color contrast (WCAG AA compliant)
- Form labels properly associated
- Table headers defined

## Version History

### v1.0 - Initial Release
- Park and Charge branding
- Q1 monthly breakdown structure
- Prior periods handling
- VAT calculation at 20%
- Self-billing compliance text
- A4 print-ready layout

## Future Enhancements

Potential additions for future versions:
- [ ] Multiple quarter support
- [ ] Dynamic VAT rate configuration
- [ ] Currency symbol customization (£, €, $)
- [ ] Multi-page support for large line item lists
- [ ] Digital signature fields
- [ ] QR code for payment verification
- [ ] Automated email delivery
- [ ] Invoice status tracking

## Support

For questions or issues:
1. Check design system documentation in project knowledge
2. Reference electrical certificate template for styling consistency
3. Consult finance team for HMRC compliance questions

## License

Internal use only - Ohme Technologies Ltd

---

**Last updated**: February 2025  
**Template version**: 1.0  
**Compatible with**: Park and Charge, Connect, Fleet Portal, Dealer Portal
