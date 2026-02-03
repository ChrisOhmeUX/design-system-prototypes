# Notes Component Documentation

## Overview

The Notes component provides a simple plain-text note interface for adding context or instructions to jobs, installations, or other entities. It displays a label, text input area, and action buttons that adapt based on the current state (empty, populated, editing).

**Component Type:** Functional Component  
**Category:** Data Input / Forms  
**Token Integration:** Yes - uses input, button, and content tokens  
**Variants:** 4 states Ã— 2 sizes = 8 configurations

## State Matrix

| State | Input Display | Button(s) | Use Case |
|-------|--------------|-----------|----------|
| **Empty** | Disabled input, "No note yet" placeholder | "Add Note" (secondary with icon) | No note exists yet |
| **Populated** | Read-only input showing note preview | "Add Note" (secondary with icon) | Note exists, collapsed view |
| **Expanded** | Focused textarea, empty/editable | "Save" (disabled) + "Cancel" | Adding new note |
| **Edit** | Focused textarea with existing content | "Save" (active) + "Cancel" | Editing existing note |

## Design Specifications

### Desktop Dimensions

| Element | Width | Height (varies) | Padding H | Padding V | Gap |
|---------|-------|----------------|-----------|-----------|-----|
| **Container** | 1094px | Variable | 32px | 24px | 32px |
| **Note Section** | 560px | Variable | - | - | 12px |
| **Input (Empty/Populated)** | 560px | 48px | 16px | 12px | - |
| **Textarea (Expanded/Edit)** | 560px | 168px | 16px | 12px | - |

### Mobile Dimensions

| Element | Width | Height (varies) | Padding H | Padding V | Gap |
|---------|-------|----------------|-----------|-----------|-----|
| **Container** | 290px | Variable | 0px | 24px | - |
| **Note Section** | Full width | Variable | - | - | 12px |
| **Input (Empty/Populated)** | Full width | 48px | 16px | 12px | - |
| **Textarea (Expanded/Edit)** | Full width | 168px | 16px | 12px | - |

### Visual Properties
- **Container Surface:** `surface/canvas` (white/dark blue)
- **Top Border:** 1px solid, smokeygrey
- **Bottom Corners:** 6px radius
- **Label Transform:** UPPERCASE
- **Text Content:** Plain text only (no rich formatting)

## Color System

### Container

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| **Top Border** | `color/state/disabled/border` | smokeygrey | grey700 | #D1D1D1 | #647882 |

**Visual Result:**
- Light mode: White background with grey border
- Dark mode: Dark blue background with dark grey border

---

### Label

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Text** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** Roobert Regular, 14px / 18px, 0px letter-spacing, UPPERCASE

---

### Input Field States

**Empty State (Disabled):**

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `input/field/surface/disabled` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| **Border** | `input/field/border/active` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |
| **Placeholder** | `input/label/content` | grey700 | grey300 | #647882 | #ADB3B1 |

**Populated State (Read-only):**

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/surface/base` | smokeyblue | lakeblue | #F5F8FA | #0B2539 |
| **Border** | `input/border/input-border-default` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |
| **Content** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Expanded/Edit State (Focus):**

| Property | Token Reference | Light Mode â†’ | Dark Mode â†’ | Light Hex | Dark Hex |
|----------|----------------|-------------|-------------|-----------|----------|
| **Surface** | `color/surface/base` | smokeyblue | lakeblue | #F5F8FA | #0B2539 |
| **Border** | `color/state/focus/border` | teal300 | teal300 | #00FFD6 | #00FFD6 |
| **Content** | `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |

**Typography:** Roobert Regular, 16px / 24px

---

### Buttons

**"Add Note" Button (Secondary):**
- Surface: `button/secondary/surface/active`
- Border: `button/secondary/content/content`
- Content: `button/tertiary/content/content`
- Icon: Plus icon, 24Ã—24px

**"Save" Button States:**
- **Disabled (Empty textarea):** Grey background/border/text
- **Active (Has content):** Teal background, dark blue text

**"Cancel" Button (Secondary):**
- Standard secondary button styling

---

## Complete Token Mapping

### Tier 3 Component Tokens

```css
/* Notes Container */
--notes-surface: var(--color-surface-canvas);
--notes-border-top: var(--color-state-disabled-border);
--notes-padding-inline-desktop: 32px;
--notes-padding-inline-mobile: 0px;
--notes-padding-stack: 24px;
--notes-width-desktop: 1094px;
--notes-width-mobile: 290px;
--notes-section-gap: 32px;

/* Notes Section */
--notes-section-width: 560px;
--notes-section-gap: 12px;

/* Notes Label */
--notes-label-font-family: var(--typography-font-family-Roobert);
--notes-label-font-size: var(--typography-font-size-14);
--notes-label-font-weight: var(--typography-font-weight-regular);
--notes-label-line-height: var(--typography-line-height-18);
--notes-label-letter-spacing: 0px;
--notes-label-color: var(--color-content-primary);
--notes-label-transform: uppercase;

/* Notes Input */
--notes-input-height-collapsed: 48px;
--notes-input-height-expanded: 168px;
--notes-input-padding-inline: 16px;
--notes-input-padding-stack: 12px;
--notes-input-radius: 6px;
--notes-input-gap: 12px;

/* Notes Input - Empty */
--notes-input-empty-surface: var(--input-field-surface-disabled);
--notes-input-empty-border: var(--input-field-border-active);
--notes-input-empty-placeholder: var(--input-label-content);

/* Notes Input - Populated */
--notes-input-populated-surface: var(--color-surface-base);
--notes-input-populated-border: var(--input-border-input-border-default);
--notes-input-populated-content: var(--color-content-primary);

/* Notes Input - Focus */
--notes-input-focus-surface: var(--color-surface-base);
--notes-input-focus-border: var(--color-state-focus-border);
--notes-input-focus-content: var(--color-content-primary);

/* Button Container */
--notes-button-gap: 12px;
```

### Tier 2 Semantic Tokens

| Token | Light Mode â†’ | Dark Mode â†’ | Light Value | Dark Value |
|-------|-------------|-------------|-------------|------------|
| `color/surface/canvas` | white | ohmedarkblue | #FFFFFF | #032536 |
| `color/surface/base` | smokeyblue | lakeblue | #F5F8FA | #0B2539 |
| `color/content/primary` | ohmedarkblue | white | #032536 | #FFFFFF |
| `color/state/disabled/border` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| `color/state/focus/border` | teal300 | teal300 | #00FFD6 | #00FFD6 |
| `input/field/surface/disabled` | smokeygrey | grey700 | #D1D1D1 | #647882 |
| `input/field/border/active` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |
| `input/label/content` | grey700 | grey300 | #647882 | #ADB3B1 |
| `input/border/input-border-default` | grey300 | grey300 | #ADB3B1 | #ADB3B1 |

### Tier 1 Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `color/brand/white` | #FFFFFF | Container surface (light) |
| `color/brand/ohmedarkblue` | #032536 | Container surface (dark), label (light) |
| `color/tertiary/smokeyblue` | #F5F8FA | Input surface (light) |
| `color/tertiary/lakeblue` | #0B2539 | Input surface (dark) |
| `color/secondary/smokeygrey` | #D1D1D1 | Border, disabled input (light) |
| `color/secondary/grey300` | #ADB3B1 | Input borders |
| `color/secondary/grey700` | #647882 | Placeholder (light), borders (dark) |
| `color/brand/highlighterteal` | #00FFD6 | Focus border |
| `Values/space/space-8x` | 32px | Container padding, section gap |
| `Values/space/space-6x` | 24px | Vertical padding |
| `Values/space/space-3x` | 12px | Section gap, button gap |
| `Values/space/space-4x` | 16px | Input padding |
| `Values/corner radii/radius-1halfx` | 6px | Input radius, bottom corners |

## Anatomy

```
Notes Component
â”œâ”€â”€ Container
â”‚   â”œâ”€â”€ Surface: surface/canvas (mode-aware)
â”‚   â”œâ”€â”€ Top Border: 1px solid smokeygrey
â”‚   â”œâ”€â”€ Bottom Radius: 6px
â”‚   â”œâ”€â”€ Padding: 32px H (desktop), 0px H (mobile), 24px V
â”‚   â””â”€â”€ Width: 1094px (desktop), 290px (mobile)
â””â”€â”€ Note Section (560px desktop, full width mobile)
    â”œâ”€â”€ Label (12px gap below)
    â”‚   â”œâ”€â”€ Text: "NOTE TO ENGINEER"
    â”‚   â”œâ”€â”€ Typography: 14px / 18px UPPERCASE
    â”‚   â””â”€â”€ Color: content/primary
    â”œâ”€â”€ Input/Textarea (12px gap below)
    â”‚   â”œâ”€â”€ Empty: Disabled, grey, "No note yet"
    â”‚   â”œâ”€â”€ Populated: Light blue, read-only preview
    â”‚   â”œâ”€â”€ Expanded: Light blue, focused, 168px height
    â”‚   â””â”€â”€ Edit: Light blue, focused, with content
    â””â”€â”€ Action Buttons (12px gap between)
        â”œâ”€â”€ Empty: "Add Note" (secondary with icon)
        â”œâ”€â”€ Populated: "Add Note" (secondary with icon)
        â”œâ”€â”€ Expanded: "Save" (disabled) + "Cancel"
        â””â”€â”€ Edit: "Save" (active) + "Cancel"
```

## Component Properties

```typescript
type NotesProps = {
  className?: string;
  state?: "Empty" | "Populated" | "Expanded" | "Edit";
  mobile?: boolean;
  noteText?: string;
  onSave?: (note: string) => void;
  onCancel?: () => void;
  onAddNote?: () => void;
  label?: string;
  placeholder?: string;
};
```

### Property: `state` (string, optional)
The current state of the notes component.

**Values:**
- `"Empty"` (default) - No note exists, disabled input
- `"Populated"` - Note exists, collapsed preview (62px height)
- `"Expanded"` - Adding new note, empty focused textarea (168px height)
- `"Edit"` - Editing existing note, populated focused textarea (168px height)

---

### Property: `noteText` (string, optional)
The current note text content.

**Usage:**
- Empty in "Empty" and "Expanded" states
- Contains note preview in "Populated" state
- Contains full note in "Edit" state

---

### Property: `mobile` (boolean, optional)
Responsive size variant.

**Default:** `false`  
**Values:**
- `false` - Desktop layout (1094px container, 560px section)
- `true` - Mobile layout (290px container, full width section)

---

## Implementation Examples

### Basic Usage

```tsx
import Notes from '@/components/functional/Notes';

// Empty state
<Notes
  state="Empty"
  mobile={false}
  label="Note to engineer"
  placeholder="No note yet"
  onAddNote={() => setNoteState('Expanded')}
/>

// Populated state (collapsed preview)
<Notes
  state="Populated"
  mobile={false}
  noteText="An example of a note which covers multiple line"
  onAddNote={() => setNoteState('Edit')}
/>

// Expanded state (adding new)
<Notes
  state="Expanded"
  mobile={false}
  onSave={(text) => saveNote(text)}
  onCancel={() => setNoteState('Empty')}
/>

// Edit state (editing existing)
<Notes
  state="Edit"
  mobile={false}
  noteText="An example of a note which covers multiple line just to see how that might look within the user interface"
  onSave={(text) => updateNote(text)}
  onCancel={() => setNoteState('Populated')}
/>
```

### Controlled Notes Component

```tsx
const ControlledNotes = ({ initialNote }) => {
  const [noteState, setNoteState] = useState<'Empty' | 'Populated' | 'Expanded' | 'Edit'>(
    initialNote ? 'Populated' : 'Empty'
  );
  const [noteText, setNoteText] = useState(initialNote || '');
  const [draftText, setDraftText] = useState('');

  const handleAddNote = () => {
    if (noteState === 'Empty') {
      setNoteState('Expanded');
      setDraftText('');
    } else if (noteState === 'Populated') {
      setNoteState('Edit');
      setDraftText(noteText);
    }
  };

  const handleSave = (text: string) => {
    setNoteText(text);
    setNoteState(text ? 'Populated' : 'Empty');
    saveToBackend(text);
  };

  const handleCancel = () => {
    setDraftText('');
    setNoteState(noteText ? 'Populated' : 'Empty');
  };

  return (
    <Notes
      state={noteState}
      noteText={noteState === 'Edit' ? draftText : noteText}
      onAddNote={handleAddNote}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
};
```

### Responsive Notes

```tsx
const ResponsiveNotes = ({ note }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [state, setState] = useState<NotesState>(
    note ? 'Populated' : 'Empty'
  );

  return (
    <Notes
      state={state}
      mobile={isMobile}
      noteText={note}
      onSave={saveNote}
      onCancel={() => setState(note ? 'Populated' : 'Empty')}
      onAddNote={() => setState(note ? 'Edit' : 'Expanded')}
    />
  );
};
```

### Notes with Auto-Save

```tsx
const AutoSaveNotes = ({ jobId, initialNote }) => {
  const [noteText, setNoteText] = useState(initialNote || '');
  const [isSaving, setIsSaving] = useState(false);
  const saveTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Clear existing timeout
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Set new timeout for auto-save (2 seconds after last edit)
    if (noteText !== initialNote) {
      saveTimeoutRef.current = setTimeout(async () => {
        setIsSaving(true);
        await saveNoteToBackend(jobId, noteText);
        setIsSaving(false);
      }, 2000);
    }

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [noteText, jobId, initialNote]);

  return (
    <div>
      <Notes
        state={noteText ? 'Edit' : 'Expanded'}
        noteText={noteText}
        onSave={setNoteText}
      />
      {isSaving && <span className="save-indicator">Saving...</span>}
    </div>
  );
};
```

## CSS Implementation

### Notes Container

```css
.notes {
  background: var(--notes-surface);
  border-top: 1px solid var(--notes-border-top);
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: var(--notes-section-gap);
}

.notes--desktop {
  width: var(--notes-width-desktop);
  padding: var(--notes-padding-stack) var(--notes-padding-inline-desktop);
}

.notes--mobile {
  width: var(--notes-width-mobile);
  padding: var(--notes-padding-stack) var(--notes-padding-inline-mobile);
}
```

### Notes Section

```css
.notes__section {
  display: flex;
  flex-direction: column;
  gap: var(--notes-section-gap);
  width: var(--notes-section-width);
}

.notes--mobile .notes__section {
  width: 100%;
}

/* Label */
.notes__label {
  font-family: var(--notes-label-font-family);
  font-size: var(--notes-label-font-size);
  font-weight: var(--notes-label-font-weight);
  line-height: var(--notes-label-line-height);
  letter-spacing: var(--notes-label-letter-spacing);
  color: var(--notes-label-color);
  text-transform: var(--notes-label-transform);
  width: 100%;
}

/* Input/Textarea */
.notes__input {
  width: 100%;
  padding: var(--notes-input-padding-stack) 
           var(--notes-input-padding-inline);
  border-radius: var(--notes-input-radius);
  border: 1px solid;
  
  font-family: var(--typography-font-family-Roobert);
  font-size: var(--typography-font-size-16);
  font-weight: var(--typography-font-weight-regular);
  line-height: var(--typography-line-height-24);
  resize: vertical;
}

/* Empty state */
.notes__input--empty {
  height: var(--notes-input-height-collapsed);
  background: var(--notes-input-empty-surface);
  border-color: var(--notes-input-empty-border);
  color: var(--notes-input-empty-placeholder);
  cursor: not-allowed;
}

/* Populated state */
.notes__input--populated {
  height: var(--notes-input-height-collapsed);
  background: var(--notes-input-populated-surface);
  border-color: var(--notes-input-populated-border);
  color: var(--notes-input-populated-content);
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Expanded/Edit states */
.notes__input--focus {
  height: var(--notes-input-height-expanded);
  background: var(--notes-input-focus-surface);
  border-color: var(--notes-input-focus-border);
  color: var(--notes-input-focus-content);
}

/* Button container */
.notes__buttons {
  display: flex;
  gap: var(--notes-button-gap);
  align-items: flex-start;
}

.notes--mobile .notes__buttons {
  width: 100%;
}

.notes--mobile .notes__buttons > button {
  flex: 1;
}
```

### CSS Custom Properties

```css
:root {
  /* Light mode */
  --color-surface-canvas: #FFFFFF;
  --color-surface-base: #F5F8FA;
  --color-content-primary: #032536;
  --color-state-disabled-border: #D1D1D1;
  --color-state-focus-border: #00FFD6;
  --input-field-surface-disabled: #D1D1D1;
  --input-field-border-active: #ADB3B1;
  --input-label-content: #647882;
  --input-border-input-border-default: #ADB3B1;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-surface-canvas: #032536;
  --color-surface-base: #0B2539;
  --color-content-primary: #FFFFFF;
  --color-state-disabled-border: #647882;
  --input-field-surface-disabled: #647882;
  --input-label-content: #ADB3B1;
  /* Focus border and input borders remain constant */
}
```

## Usage Guidelines

### When to Use Notes

**Job Context:**
- Engineer instructions
- Special requirements
- Site-specific notes
- Installation details

**Communication:**
- Pass information to field staff
- Document special circumstances
- Provide context
- Record important details

**Plain Text Only:**
- Simple text notes
- No formatting needed
- Quick communication
- Brief instructions

### State Transitions

**Empty â†’ Expanded:**
- User clicks "Add Note" button
- Textarea expands and focuses
- Save button disabled until content entered

**Expanded â†’ Empty:**
- User clicks "Cancel" with no text
- Returns to empty state
- No save occurs

**Expanded â†’ Populated:**
- User enters text and clicks "Save"
- Textarea collapses to preview
- Note is saved

**Populated â†’ Edit:**
- User clicks "Add Note" button
- Textarea expands with existing content
- Save button active (content exists)

**Edit â†’ Populated:**
- User modifies and clicks "Save"
- Textarea collapses
- Updated note is saved

**Edit â†’ Populated (Cancel):**
- User clicks "Cancel"
- Textarea collapses
- Original note preserved

## Best Practices

### Content Guidelines âœ“
1. **Plain Text:** No formatting, markdown, or HTML
2. **Concise Notes:** Keep brief and relevant
3. **Clear Purpose:** Explain what engineer needs to know
4. **Action-Oriented:** Include actionable information
5. **Character Limit:** Consider implementing reasonable limits

### Visual Guidelines âœ“
1. **Preview Height:** Collapsed view shows ~2 lines (48-62px)
2. **Edit Height:** Expanded view allows comfortable editing (168px)
3. **Teal Focus:** Clear focus state with teal border
4. **Disabled State:** Grey when no action possible
5. **Responsive Width:** Adapt to mobile constraints

### Interaction Guidelines âœ“
1. **Click to Edit:** Populated note can be clicked to edit
2. **Auto-Focus:** Textarea receives focus when expanded
3. **Save Validation:** Disable save until content entered
4. **Cancel Safety:** Confirm if significant content will be lost
5. **Keyboard Shortcuts:** Cmd/Ctrl+Enter to save

## Accessibility

### ARIA Attributes

```tsx
<div className="notes" role="region" aria-label="Engineer notes">
  <label htmlFor="engineer-note" className="notes__label">
    Note to engineer
  </label>

  {/* Empty state */}
  {state === 'Empty' && (
    <>
      <input
        id="engineer-note"
        type="text"
        disabled
        placeholder="No note yet"
        className="notes__input notes__input--empty"
        aria-describedby="note-description"
      />
      <p id="note-description" className="sr-only">
        Click Add Note to create a note for the engineer
      </p>
      <button onClick={onAddNote}>
        <PlusIcon aria-hidden="true" />
        Add Note
      </button>
    </>
  )}

  {/* Populated state */}
  {state === 'Populated' && (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={onAddNote}
        onKeyDown={(e) => e.key === 'Enter' && onAddNote()}
        className="notes__input notes__input--populated"
        aria-label="Click to edit note"
      >
        {noteText}
      </div>
      <button onClick={onAddNote}>
        <PlusIcon aria-hidden="true" />
        Add Note
      </button>
    </>
  )}

  {/* Expanded/Edit states */}
  {(state === 'Expanded' || state === 'Edit') && (
    <>
      <textarea
        id="engineer-note"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        className="notes__input notes__input--focus"
        placeholder="Enter note for engineer..."
        aria-label="Engineer note"
        autoFocus
      />
      <div className="notes__buttons">
        <button
          onClick={() => onSave(noteText)}
          disabled={!noteText || noteText.trim() === ''}
          aria-disabled={!noteText}
        >
          Save
        </button>
        <button onClick={onCancel}>
          Cancel
        </button>
      </div>
    </>
  )}
</div>
```

### Keyboard Shortcuts

```tsx
const NotesWithKeyboard = ({ noteText, onSave, onCancel }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Cmd/Ctrl + Enter to save
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      if (noteText && noteText.trim()) {
        onSave(noteText);
      }
    }
    
    // Escape to cancel
    if (e.key === 'Escape') {
      e.preventDefault();
      onCancel();
    }
  };

  return (
    <textarea
      value={noteText}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
};
```

## Advanced Patterns

### Notes with Character Count

```tsx
const NotesWithCharCount = ({ maxLength = 500 }) => {
  const [noteText, setNoteText] = useState('');
  const [state, setState] = useState<'Empty' | 'Expanded'>('Empty');

  return (
    <div className="notes-with-count">
      <Notes
        state={state}
        noteText={noteText}
        onAddNote={() => setState('Expanded')}
        onSave={(text) => {
          setNoteText(text);
          setState('Populated');
        }}
        onCancel={() => setState('Empty')}
      />
      {state === 'Expanded' && (
        <p className="char-count">
          {noteText.length} / {maxLength}
        </p>
      )}
    </div>
  );
};
```

### Notes with Timestamp

```tsx
const NotesWithTimestamp = ({ note }) => {
  return (
    <div className="notes-with-meta">
      <Notes
        state={note ? 'Populated' : 'Empty'}
        noteText={note?.text}
        {...props}
      />
      {note && (
        <p className="note-metadata">
          Last updated {formatDate(note.updatedAt)} by {note.updatedBy}
        </p>
      )}
    </div>
  );
};
```

### Notes with Confirmation

```tsx
const NotesWithConfirmation = ({ note, onUpdate }) => {
  const [state, setState] = useState<NotesState>(note ? 'Populated' : 'Empty');
  const [draftText, setDraftText] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCancel = () => {
    if (draftText && draftText !== note?.text && draftText.length > 50) {
      setShowConfirm(true);
    } else {
      setState(note ? 'Populated' : 'Empty');
      setDraftText('');
    }
  };

  return (
    <>
      <Notes
        state={state}
        noteText={state === 'Edit' ? draftText : note?.text}
        onSave={(text) => {
          onUpdate(text);
          setState('Populated');
        }}
        onCancel={handleCancel}
      />

      {showConfirm && (
        <Modal
          title="Discard changes?"
          message="You have unsaved changes. Are you sure you want to discard them?"
          onConfirm={() => {
            setShowConfirm(false);
            setState(note ? 'Populated' : 'Empty');
            setDraftText('');
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
};
```

### Multiple Notes Support

```tsx
const MultipleNotes = ({ notes, onUpdateNote, onAddNote }) => {
  return (
    <div className="multiple-notes">
      {notes.map((note, index) => (
        <div key={note.id} className="note-item">
          <h4>{note.label}</h4>
          <Notes
            state={note.text ? 'Populated' : 'Empty'}
            noteText={note.text}
            label={note.label}
            onSave={(text) => onUpdateNote(note.id, text)}
            onAddNote={() => {
              if (note.text) {
                // Edit existing
                setEditingNoteId(note.id);
              } else {
                // Add new
                onAddNote(note.id);
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};
```

## Testing Checklist

### Visual Testing - Desktop
- [ ] Container: 1094px width
- [ ] Section: 560px width
- [ ] Padding: 32px horizontal, 24px vertical
- [ ] Label: 14px UPPERCASE, dark blue (light) / white (dark)
- [ ] Empty input: 48px height, grey, disabled
- [ ] Populated input: 62px height, light blue, shows preview
- [ ] Expanded textarea: 168px height, light blue, teal border
- [ ] Edit textarea: 168px height, light blue, teal border, with content
- [ ] Top border: 1px smokeygrey
- [ ] Bottom radius: 6px
- [ ] Button gap: 12px

### Visual Testing - Mobile
- [ ] Container: 290px width
- [ ] Section: Full width
- [ ] Padding: 0px horizontal, 24px vertical
- [ ] All input states render correctly
- [ ] Buttons stack or resize appropriately

### Functional Testing
- [ ] Empty: "Add Note" opens expanded textarea
- [ ] Expanded: Textarea focuses automatically
- [ ] Expanded: Save disabled when empty
- [ ] Expanded: Save enables when text entered
- [ ] Expanded: Cancel returns to empty
- [ ] Populated: Shows note preview (truncated)
- [ ] Populated: "Add Note" opens edit mode
- [ ] Edit: Textarea contains existing note
- [ ] Edit: Save updates note
- [ ] Edit: Cancel preserves original note
- [ ] Character limit enforced (if implemented)

### Accessibility Testing
- [ ] Label properly associated with input
- [ ] Textarea has aria-label
- [ ] Empty input has aria-describedby
- [ ] Populated preview is keyboard accessible
- [ ] Save button has aria-disabled when disabled
- [ ] Focus visible in textarea
- [ ] Screen reader announces state changes
- [ ] Keyboard navigation works

### Mode Testing
- [ ] Container surface adapts to mode
- [ ] Label adapts to mode
- [ ] Input surface adapts to mode
- [ ] Input content adapts to mode
- [ ] Placeholder adapts to mode
- [ ] Border colors correct in both modes
- [ ] Focus border teal in both modes
- [ ] Smooth transitions between modes

## Related Components

### Composed From:
- **Input** - Empty state uses disabled input
- **Textarea** - Expanded/edit states use textarea
- **Button (Secondary)** - "Add Note" button
- **Button (Primary)** - "Save" button
- **Icon** - Plus icon for "Add Note"

### Works With:
- **Job Details** - Add notes to jobs
- **Installation Details** - Installation instructions
- **Service Visits** - Service notes
- **Form Sections** - Part of larger forms

## Common Patterns

### Job Engineer Notes

```tsx
const JobEngineerNotes = ({ job, onUpdateJob }) => {
  const [noteState, setNoteState] = useState<NotesState>(
    job.engineerNote ? 'Populated' : 'Empty'
  );

  const handleSaveNote = async (noteText: string) => {
    await onUpdateJob({
      ...job,
      engineerNote: noteText,
      noteUpdatedAt: new Date()
    });
    setNoteState('Populated');
  };

  return (
    <div className="job-notes-section">
      <Notes
        state={noteState}
        noteText={job.engineerNote}
        label="Note to engineer"
        placeholder="No note yet"
        onAddNote={() => setNoteState(job.engineerNote ? 'Edit' : 'Expanded')}
        onSave={handleSaveNote}
        onCancel={() => setNoteState(job.engineerNote ? 'Populated' : 'Empty')}
      />
    </div>
  );
};
```

### Installation Special Instructions

```tsx
const InstallationNotes = ({ installation }) => {
  return (
    <div className="installation-notes">
      <Notes
        state={installation.specialInstructions ? 'Populated' : 'Empty'}
        noteText={installation.specialInstructions}
        label="Special Instructions"
        placeholder="No special instructions"
        onSave={(text) => updateInstallation({
          ...installation,
          specialInstructions: text
        })}
      />
    </div>
  );
};
```

### Form Section with Notes

```tsx
const JobFormWithNotes = ({ formData, onUpdate }) => {
  return (
    <form className="job-form">
      {/* Other form fields */}
      <Input
        label="Job Title"
        value={formData.title}
        onChange={(val) => onUpdate('title', val)}
      />
      
      <Dropdown
        label="Job Type"
        value={formData.type}
        onChange={(val) => onUpdate('type', val)}
        options={jobTypeOptions}
      />

      {/* Notes section */}
      <Notes
        state={formData.note ? 'Populated' : 'Empty'}
        noteText={formData.note}
        label="Note to engineer"
        onSave={(text) => onUpdate('note', text)}
      />

      {/* Form actions */}
      <div className="form-actions">
        <Button type="Primary" onClick={handleSubmit}>
          Submit Job
        </Button>
      </div>
    </form>
  );
};
```

## Version History

- **v1.0** - Initial notes component with 4 states (Empty, Populated, Expanded, Edit)

---

*Component Documentation - Ohme Design System*  
*Functional Component*  
*Last Updated: January 2025*
