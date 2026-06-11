# What An Adventure Games — Visual Library

Welcome to the **What An Adventure Games** Visual Library. This document contains the complete, copy-pasteable design system modules, button systems, form elements, icons, and layout structures aligned with the light-theme studio rebrand. 

---

## 1. Implementation Plan & Design Rationale

This visual library has been engineered to transition the studio from its previous dark, neon cyberpunk mode to a warm, airy, storybook-inspired light theme. Below is the implementation strategy used to construct this library:

```
┌─────────────────────────────────────────────────────────────┐
│                 1. DESIGN TOKEN FOUNDATION                  │
│  - HSL-tailored colors (Warm orange, amber, sky-blue, cream) │
│  - Dual-font layout (Lilita One for display, Fredoka headings)│
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 2. BASE COMPONENT SYSTEM                    │
│  - 21 cohesive, line-art SVG icons (rounded caps/joins)      │
│  - Button styles (primary, secondary, outline, ghost)       │
│  - Accessible form elements matching the boardgame aesthetic│
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 3. pre-built page modules                   │
│  - 12 independent, responsive layout blocks                 │
│  - Self-contained, scoped CSS per module                    │
│  - Smooth CSS transforms and micro-interactions              │
└─────────────────────────────────────────────────────────────┘
```

### Key Design Rationale:
* **The Tactile Map Aesthetic**: Utilizing dotted/dashed border lines (`border-style: dashed`) to mimic adventure trails, topographic contours, and organic borders.
* **Playful Physics**: Applying cubic-bezier transition curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`) to button hovers and interactive cards to create a snappy, "bouncy" feel.
* **Warm Contrast**: Off-white background (`#FDFBF7`) paired with soft cream offsets (`#FAF5EB`) to reduce eye strain while maintaining a friendly, family-focused atmosphere.
* **Responsive Independence**: Using pure CSS Flexbox and Grid (`repeat(auto-fill, minmax(320px, 1fr))`) to handle breakpoints dynamically, eliminating heavy media queries where possible.

---

## 2. Design System Core (Global Setup)

Add this block of CSS to your site-wide stylesheet (e.g., `index.css` or `globals.css`). It imports the required Google Fonts, declares the custom CSS properties, and sets up body-level defaults.

### CSS (Core Variables & Typography)
```css
/* Import Fonts */
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Lilita+One&family=Nunito:ital,wght@0,300..900;1,300..900&display=swap');

:root {
  /* Brand Colors */
  --wag-color-primary: #FE7916;        /* Vibrant Adventure Orange */
  --wag-color-primary-hover: #E26810;  /* Darker Orange for Hover */
  --wag-color-secondary: #FDC781;      /* Golden Peach / Warm Amber */
  --wag-color-secondary-hover: #FCB85C;/* Darker Gold for Hover */
  --wag-color-accent: #C8E3FE;         /* Airy Ice Blue */
  --wag-color-accent-hover: #AFD4FC;   /* Slightly darker blue for hover states */

  /* Background Shades */
  --wag-bg-main: #FDFBF7;              /* Alabaster Off-White */
  --wag-bg-cream: #FAF5EB;             /* Warm Map Cream */
  --wag-bg-gray: #F0EFEA;              /* Light Trail Gray */
  --wag-bg-card: #FFFFFF;              /* Pure White for maximum card pop */

  /* Typography / Ink */
  --wag-text-main: #1B1C1E;            /* Ink Black */
  --wag-text-secondary: #3B4141;       /* Deep Charcoal */
  --wag-text-muted: #8E94A0;           /* Muted Blue-Gray */

  /* Semantic UI States */
  --wag-state-success: #2E7D32;        /* Forest Green */
  --wag-state-warning: #FFA000;        /* Amber Yellow */
  --wag-state-error: #D32F2F;          /* Crimson Red */

  /* Decorative Borders & Shadows */
  --wag-border-light: rgba(27, 28, 30, 0.08);
  --wag-border-medium: rgba(27, 28, 30, 0.15);
  --wag-border-ink: #1B1C1E;
  
  --wag-shadow-soft: 0 4px 20px -2px rgba(74, 62, 61, 0.06), 0 2px 8px 0 rgba(74, 62, 61, 0.04);
  --wag-shadow-hover: 0 12px 30px -4px rgba(74, 62, 61, 0.12), 0 4px 12px 0 rgba(74, 62, 61, 0.06);
  --wag-shadow-button: 0 4px 12px rgba(254, 121, 22, 0.2);
  --wag-shadow-button-hover: 0 8px 20px rgba(254, 121, 22, 0.35);

  /* Layout / Radii */
  --wag-radius-card: 16px;
  --wag-radius-btn: 12px;
  --wag-radius-tag: 6px;
  --wag-radius-badge: 20px;

  /* Typography Fonts */
  --wag-font-display: 'Lilita One', cursive;
  --wag-font-header: 'Fredoka', sans-serif;
  --wag-font-body: 'Nunito', sans-serif;

  /* Font Size Scale */
  --wag-fs-h1: 3.5rem;      /* 56px - Main Hero Title */
  --wag-fs-h2: 2.25rem;     /* 36px - Section Headers */
  --wag-fs-h3: 1.75rem;     /* 28px - Card Titles / Subsections */
  --wag-fs-h4: 1.25rem;     /* 20px - Mini Card Titles / Bold highlights */
  --wag-fs-body: 1rem;      /* 16px - Base Body Font size */
  --wag-fs-small: 0.875rem; /* 14px - Badges, tags, details */
  --wag-fs-caption: 0.75rem;/* 12px - Table specs, copyright text */

  /* Line Heights */
  --wag-lh-tight: 1.1;
  --wag-lh-header: 1.25;
  --wag-lh-body: 1.6;

  /* Transitions */
  --wag-transition-spring: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease;
}

/* Global Reset Base */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--wag-bg-main);
  color: var(--wag-text-main);
  font-family: var(--wag-font-body);
  line-height: var(--wag-lh-body);
  -webkit-font-smoothing: antialiased;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 50 Q 25 35, 50 50 T 100 50' fill='none' stroke='%231B1C1E' stroke-width='0.5' stroke-opacity='0.03'/%3E%3Cpath d='M0 70 Q 30 85, 60 70 T 100 70' fill='none' stroke='%231B1C1E' stroke-width='0.5' stroke-opacity='0.03'/%3E%3C/svg%3E");
}

/* Consistent SVG Icon Class */
.wag-icon {
  width: 1.25em;
  height: 1.25em;
  display: inline-block;
  vertical-align: middle;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
```

---

## 3. Foundational Systems

### A. Icon Set
A collection of 21 line-art icons built with consistent strokes and geometry. They scale naturally using `currentColor` and font sizing.

#### HTML (Copy-paste SVG definitions)
```html
<!-- Compass/Adventure -->
<svg class="wag-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>

<!-- Controller/Games -->
<svg class="wag-icon" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="3"></rect><path d="M6 12h4M8 10v4M15 11h.01M18 13h.01"></path></svg>

<!-- Star (Rating) -->
<svg class="wag-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>

<!-- Map (Journey) -->
<svg class="wag-icon" viewBox="0 0 24 24"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>

<!-- Trophy -->
<svg class="wag-icon" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z"></path></svg>

<!-- Backpack -->
<svg class="wag-icon" viewBox="0 0 24 24"><path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10zM9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M8 12h8v4H8z"></path></svg>

<!-- Binoculars -->
<svg class="wag-icon" viewBox="0 0 24 24"><circle cx="6" cy="18" r="4"></circle><circle cx="18" cy="18" r="4"></circle><path d="M6 14v-6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6M8 18h8M12 6v8"></path></svg>

<!-- Tent (Camping) -->
<svg class="wag-icon" viewBox="0 0 24 24"><polygon points="12 2 2 22 22 22"></polygon><polyline points="12 2 12 22"></polyline><path d="M10 18l2-4 2 4"></path></svg>

<!-- Heart -->
<svg class="wag-icon" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>

<!-- Shield -->
<svg class="wag-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>

<!-- Sword -->
<svg class="wag-icon" viewBox="0 0 24 24"><polyline points="14.5 17.5 3 6 6 3 17.5 14.5"></polyline><line x1="13" y1="19" x2="19" y2="13"></line><line x1="16" y1="16" x2="20" y2="20"></line><line x1="19" y1="21" x2="21" y2="19"></line></svg>

<!-- Arrow Right -->
<svg class="wag-icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>

<!-- Play -->
<svg class="wag-icon" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>

<!-- Calendar -->
<svg class="wag-icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>

<!-- Envelope -->
<svg class="wag-icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>

<!-- Quote -->
<svg class="wag-icon" viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h4c0 4-2 6-5 6v1zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h4c0 4-2 6-5 6v1z"></path></svg>

<!-- User -->
<svg class="wag-icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>

<!-- Chevron Down -->
<svg class="wag-icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>

<!-- Twitter/X -->
<svg class="wag-icon" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>

<!-- Discord -->
<svg class="wag-icon" viewBox="0 0 24 24"><path d="M18.75 4a12.64 12.64 0 0 0-3.37-1l-.16.36a14.28 14.28 0 0 0-6.44 0l-.16-.36A12.64 12.64 0 0 0 5.25 4c-3.1 4.7-2.6 9.3-.5 13a13 13 0 0 0 4.1 2.2l.8-1.1a8.42 8.42 0 0 1-2.6-1.3l.2-.2a13.31 13.31 0 0 0 9.7 0l.2.2a8.42 8.42 0 0 1-2.6 1.3l.8 1.1a13 13 0 0 0 4.1-2.2c2.1-3.7 2.6-8.3-.5-13z"></path><circle cx="9.5" cy="11.5" r="1.5"></circle><circle cx="14.5" cy="11.5" r="1.5"></circle></svg>

<!-- YouTube -->
<svg class="wag-icon" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
```

#### CSS
```css
/* Inline Icon Layout Helpers */
.wag-icon-container {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
```

---

### B. Button System
A complete button component ecosystem covering sizes, variants, and keyboard focus states.

#### HTML
```html
<div class="wag-btn-showcase">
  <!-- Sizes -->
  <button class="wag-btn wag-btn--primary wag-btn--small">Small Button</button>
  <button class="wag-btn wag-btn--primary">Normal Button</button>
  <button class="wag-btn wag-btn--primary wag-btn--large">Large Button</button>

  <br/><br/>

  <!-- Variants -->
  <button class="wag-btn wag-btn--primary">Primary Brand</button>
  <button class="wag-btn wag-btn--secondary">Secondary Gold</button>
  <button class="wag-btn wag-btn--outline">Outline Accent</button>
  <button class="wag-btn wag-btn--ghost">Ghost Link</button>
  <button class="wag-btn wag-btn--primary" disabled>Disabled State</button>
</div>
```

#### CSS
```css
.wag-btn {
  font-family: var(--wag-font-display);
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  padding: 0.8rem 2.2rem;
  border-radius: var(--wag-radius-btn);
  border: 3px solid transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  line-height: 1;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s, background-color 0.2s, border-color 0.2s;
  user-select: none;
}

/* Primary Brand Variant */
.wag-btn--primary {
  background-color: var(--wag-color-primary);
  color: #FFFFFF;
  border-color: var(--wag-border-ink);
  box-shadow: 4px 4px 0px var(--wag-border-ink);
}
.wag-btn--primary:hover:not(:disabled) {
  background-color: var(--wag-color-primary-hover);
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px var(--wag-border-ink);
}
.wag-btn--primary:active:not(:disabled) {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px var(--wag-border-ink);
}

/* Secondary Golden Accent Variant */
.wag-btn--secondary {
  background-color: var(--wag-color-secondary);
  color: var(--wag-text-main);
  border-color: var(--wag-border-ink);
  box-shadow: 4px 4px 0px var(--wag-border-ink);
}
.wag-btn--secondary:hover:not(:disabled) {
  background-color: var(--wag-color-secondary-hover);
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px var(--wag-border-ink);
}
.wag-btn--secondary:active:not(:disabled) {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px var(--wag-border-ink);
}

/* Outline Cozy Variant */
.wag-btn--outline {
  background-color: transparent;
  color: var(--wag-text-main);
  border-color: var(--wag-border-ink);
  box-shadow: 4px 4px 0px var(--wag-color-accent);
}
.wag-btn--outline:hover:not(:disabled) {
  background-color: var(--wag-bg-cream);
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px var(--wag-color-accent);
}
.wag-btn--outline:active:not(:disabled) {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px var(--wag-color-accent);
}

/* Ghost Link Variant */
.wag-btn--ghost {
  background-color: transparent;
  color: var(--wag-text-secondary);
  border-color: transparent;
}
.wag-btn--ghost:hover:not(:disabled) {
  color: var(--wag-color-primary);
  background-color: var(--wag-bg-cream);
}
.wag-btn--ghost:active:not(:disabled) {
  background-color: var(--wag-bg-gray);
}

/* Sizes */
.wag-btn--small {
  padding: 0.5rem 1.25rem;
  font-size: 0.9rem;
  border-width: 2px;
  box-shadow: 2px 2px 0px var(--wag-border-ink);
}
.wag-btn--small:hover:not(:disabled) {
  box-shadow: 4px 4px 0px var(--wag-border-ink);
}

.wag-btn--large {
  padding: 1rem 3rem;
  font-size: 1.25rem;
}

/* Disabled State */
.wag-btn:disabled {
  background-color: var(--wag-bg-gray);
  color: var(--wag-text-muted);
  border-color: var(--wag-border-light);
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}

/* Global Focus Styles */
.wag-btn:focus-visible {
  outline: 4px dashed var(--wag-color-primary);
  outline-offset: 4px;
}
```

---

### C. Form Elements
Board-game styled input components with warm focus borders and interactive radio/checkbox overlays.

#### HTML
```html
<form class="wag-form-showcase" onsubmit="event.preventDefault();">
  <div class="wag-form-group">
    <label class="wag-label" for="txt_explorer">Explorer Name</label>
    <input class="wag-input" type="text" id="txt_explorer" placeholder="Pip the Adventurer" />
  </div>

  <div class="wag-form-group">
    <label class="wag-label" for="sel_class">Select Class</label>
    <select class="wag-select" id="sel_class">
      <option value="scout">Forest Scout</option>
      <option value="mapper">Map Maker</option>
      <option value="cozy">Cozy Cook</option>
    </select>
  </div>

  <div class="wag-form-group">
    <label class="wag-checkbox-label">
      <input type="checkbox" class="wag-checkbox" checked />
      <span class="wag-checkbox-custom"></span>
      Sign up for the Dev Diary newsletter
    </label>
  </div>

  <div class="wag-form-group">
    <label class="wag-radio-label">
      <input type="radio" name="difficulty" class="wag-radio" checked />
      <span class="wag-radio-custom"></span>
      Cozy Explorer (Easy)
    </label>
    <label class="wag-radio-label">
      <input type="radio" name="difficulty" class="wag-radio" />
      <span class="wag-radio-custom"></span>
      Trail Blazer (Normal)
    </label>
  </div>
</form>
```

#### CSS
```css
.wag-form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.wag-label {
  font-family: var(--wag-font-header);
  font-weight: 600;
  font-size: var(--wag-fs-small);
  color: var(--wag-text-secondary);
}

.wag-input,
.wag-select {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-body);
  padding: 0.8rem 1rem;
  background-color: var(--wag-bg-card);
  border: 2px solid var(--wag-border-ink);
  border-radius: var(--wag-radius-btn);
  color: var(--wag-text-main);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
}

.wag-input::placeholder {
  color: var(--wag-text-muted);
}

.wag-input:focus,
.wag-select:focus {
  border-color: var(--wag-color-primary);
  box-shadow: 0 0 0 4px var(--wag-color-accent);
}

/* Styling Checkbox & Radio Buttons */
.wag-checkbox-label,
.wag-radio-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--wag-font-body);
  color: var(--wag-text-secondary);
  cursor: pointer;
  user-select: none;
  font-size: var(--wag-fs-body);
}

/* Hide default inputs */
.wag-checkbox,
.wag-radio {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Custom Checkbox */
.wag-checkbox-custom {
  height: 22px;
  width: 22px;
  background-color: var(--wag-bg-card);
  border: 2px solid var(--wag-border-ink);
  border-radius: 6px;
  display: inline-block;
  position: relative;
  transition: background-color 0.2s, border-color 0.2s;
}

.wag-checkbox:checked ~ .wag-checkbox-custom {
  background-color: var(--wag-color-primary);
  border-color: var(--wag-border-ink);
}

.wag-checkbox-custom::after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 6px;
  height: 11px;
  border: solid white;
  border-width: 0 2.5px 2.5px 0;
  transform: rotate(45deg);
}

.wag-checkbox:checked ~ .wag-checkbox-custom::after {
  display: block;
}

/* Custom Radio */
.wag-radio-custom {
  height: 22px;
  width: 22px;
  background-color: var(--wag-bg-card);
  border: 2px solid var(--wag-border-ink);
  border-radius: 50%;
  display: inline-block;
  position: relative;
  transition: background-color 0.2s, border-color 0.2s;
}

.wag-radio:checked ~ .wag-radio-custom {
  background-color: var(--wag-bg-card);
  border-color: var(--wag-color-primary);
}

.wag-radio-custom::after {
  content: "";
  position: absolute;
  display: none;
  left: 5px;
  top: 5px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--wag-color-primary);
}

.wag-radio:checked ~ .wag-radio-custom::after {
  display: block;
}

.wag-checkbox:focus-visible ~ .wag-checkbox-custom,
.wag-radio:focus-visible ~ .wag-radio-custom {
  outline: 3px dashed var(--wag-color-primary);
  outline-offset: 2px;
}
```

---

## 4. Pre-Built Modules

---

### Module 1: Hero Banner
A split layout featuring tagline text, double CTAs, and a stylized adventure artwork placeholder framed with contour-mapping graphics.

#### HTML
```html
<section class="wag-hero">
  <div class="wag-hero__container">
    <div class="wag-hero__content">
      <div class="wag-hero__badge">
        <svg class="wag-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
        Embark on the Journey
      </div>
      <h1 class="wag-hero__title">Playful Worlds,<br/>Cozy Journeys</h1>
      <p class="wag-hero__tagline">We craft whimsical digital board games, cozy tabletop RPGs, and family-friendly adventures that bring players together across platforms.</p>
      <div class="wag-hero__actions">
        <a href="#games" class="wag-btn wag-btn--primary">
          Explore Quests
          <svg class="wag-icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
        <a href="#about" class="wag-btn wag-btn--outline">Meet the Studio</a>
      </div>
    </div>
    <div class="wag-hero__artwork">
      <div class="wag-hero__art-container">
        <!-- Floating Elements to simulate dynamic game layers -->
        <div class="wag-hero__art-card wag-hero__art-card--left">
          <div class="wag-hero__art-icon">🧭</div>
          <h3>Discover</h3>
        </div>
        <div class="wag-hero__art-card wag-hero__art-card--right">
          <div class="wag-hero__art-icon">🎮</div>
          <h3>Play Together</h3>
        </div>
        <div class="wag-hero__art-main">
          <svg viewBox="0 0 200 200" class="wag-hero__topography-vector">
            <path d="M10,100 C60,50 140,150 190,100" stroke="#FE7916" stroke-width="2" stroke-dasharray="6,6" fill="none" />
            <path d="M10,130 C70,90 130,170 190,130" stroke="#FDC781" stroke-width="2" fill="none" />
            <circle cx="100" cy="100" r="15" fill="#C8E3FE" />
            <text x="94" y="105" font-size="16">✦</text>
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### CSS
```css
.wag-hero {
  position: relative;
  background: radial-gradient(circle at top right, var(--wag-color-accent) 0%, transparent 60%);
  background-color: var(--wag-bg-main);
  padding: 5rem 2rem;
  overflow: hidden;
}

.wag-hero__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
}

.wag-hero__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.wag-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--wag-bg-cream);
  border: 2px solid var(--wag-border-ink);
  padding: 0.5rem 1rem;
  border-radius: var(--wag-radius-badge);
  font-family: var(--wag-font-header);
  font-weight: 600;
  font-size: var(--wag-fs-small);
  margin-bottom: 1.5rem;
  box-shadow: 2px 2px 0px var(--wag-border-ink);
}

.wag-hero__title {
  font-family: var(--wag-font-display);
  font-size: var(--wag-fs-h1);
  color: var(--wag-text-main);
  line-height: var(--wag-lh-tight);
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
}

.wag-hero__tagline {
  font-family: var(--wag-font-body);
  font-size: 1.2rem;
  color: var(--wag-text-secondary);
  margin-bottom: 2.5rem;
  max-width: 540px;
}

.wag-hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Hero Artwork Showcase */
.wag-hero__artwork {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wag-hero__art-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 400px;
  background-color: var(--wag-bg-cream);
  border: 3px solid var(--wag-border-ink);
  border-radius: 40px;
  box-shadow: 8px 8px 0px var(--wag-border-ink);
  display: flex;
  justify-content: center;
  align-items: center;
}

.wag-hero__art-main {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wag-hero__topography-vector {
  width: 100%;
  height: 100%;
}

.wag-hero__art-card {
  position: absolute;
  background: var(--wag-bg-card);
  border: 2px solid var(--wag-border-ink);
  border-radius: var(--wag-radius-card);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 4px 0px var(--wag-border-ink);
  animation: wag-float 4s ease-in-out infinite;
}

.wag-hero__art-card--left {
  top: 10%;
  left: -15%;
  animation-delay: 0s;
}

.wag-hero__art-card--right {
  bottom: 12%;
  right: -15%;
  animation-delay: 2s;
}

.wag-hero__art-icon {
  font-size: 2rem;
  margin-bottom: 0.25rem;
}

.wag-hero__art-card h3 {
  font-family: var(--wag-font-header);
  font-size: var(--wag-fs-small);
  color: var(--wag-text-main);
}

@keyframes wag-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsive Scaling */
@media (max-width: 768px) {
  .wag-hero__container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .wag-hero__artwork {
    order: -1;
  }
  .wag-hero__title {
    font-size: 2.5rem;
  }
  .wag-hero__art-container {
    max-width: 320px;
    height: 320px;
  }
}
```

---

### Module 2: Game Card
A tactile portfolio display containing organic framing filters, meta category tags, and responsive CTA play buttons.

#### HTML
```html
<article class="wag-game-card">
  <div class="wag-game-card__thumbnail">
    <div class="wag-game-card__overlay">
      <span class="wag-game-card__genre">Adventure RPG</span>
    </div>
    <!-- Styled Vector Background Placeholder -->
    <div class="wag-game-card__img-placeholder">
      <div class="wag-game-card__camp-sketch">⛺</div>
    </div>
  </div>
  <div class="wag-game-card__body">
    <div class="wag-game-card__meta">
      <span class="wag-game-card__platform">Nintendo Switch & Steam</span>
      <div class="wag-game-card__rating">
        <svg class="wag-icon text-orange" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <span>4.9</span>
      </div>
    </div>
    <h3 class="wag-game-card__title">Campfire Chronicles</h3>
    <p class="wag-game-card__excerpt">Gather round the fireside to tell stories, solve cozy wilderness puzzle blocks, and build relationships with whimsical forest critters.</p>
    <div class="wag-game-card__actions">
      <button class="wag-btn wag-btn--primary wag-btn--small wag-game-card__btn">
        <svg class="wag-icon" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        Play Demo
      </button>
    </div>
  </div>
</article>
```

#### CSS
```css
.wag-game-card {
  background-color: var(--wag-bg-card);
  border: 3px solid var(--wag-border-ink);
  border-radius: var(--wag-radius-card);
  box-shadow: 4px 4px 0px var(--wag-border-ink);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s;
}

.wag-game-card:hover {
  transform: translateY(-6px);
  box-shadow: 8px 8px 0px var(--wag-border-ink);
}

.wag-game-card__thumbnail {
  position: relative;
  width: 100%;
  height: 200px;
  background-color: var(--wag-color-accent);
  border-bottom: 3px solid var(--wag-border-ink);
  overflow: hidden;
}

.wag-game-card__img-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: radial-gradient(var(--wag-color-secondary) 15%, transparent 16%);
  background-size: 16px 16px;
}

.wag-game-card__camp-sketch {
  font-size: 4rem;
  filter: drop-shadow(2px 2px 0 var(--wag-border-ink));
}

.wag-game-card__genre {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: var(--wag-bg-main);
  color: var(--wag-text-main);
  border: 2.5px solid var(--wag-border-ink);
  padding: 0.25rem 0.75rem;
  border-radius: var(--wag-radius-tag);
  font-family: var(--wag-font-header);
  font-size: var(--wag-fs-small);
  font-weight: 600;
  box-shadow: 2px 2px 0px var(--wag-border-ink);
  z-index: 10;
}

.wag-game-card__body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.wag-game-card__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.wag-game-card__platform {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-caption);
  color: var(--wag-text-secondary);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.wag-game-card__rating {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--wag-font-header);
  font-weight: 700;
  font-size: var(--wag-fs-small);
}

.wag-game-card__rating .wag-icon {
  color: var(--wag-color-primary);
}

.wag-game-card__title {
  font-family: var(--wag-font-header);
  font-size: var(--wag-fs-h3);
  color: var(--wag-text-main);
  margin-bottom: 0.75rem;
}

.wag-game-card__excerpt {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-body);
  color: var(--wag-text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.wag-game-card__actions {
  margin-top: auto;
}

.wag-game-card__btn {
  width: 100%;
}
```

---

### Module 3: Game Grid
A responsive wrapper system that adapts seamlessly across platforms without rigid breakpoint queries.

#### HTML
```html
<section class="wag-grid-section">
  <div class="wag-grid-container">
    <div class="wag-grid-header">
      <h2 class="wag-grid-title">Current Expeditions</h2>
      <p class="wag-grid-subtitle">Jump straight into one of our whimsically active gameplay adventures.</p>
    </div>
    
    <div class="wag-grid">
      <!-- Card 1 -->
      <article class="wag-game-card">
        <div class="wag-game-card__thumbnail">
          <span class="wag-game-card__genre">Cozy RPG</span>
          <div class="wag-game-card__img-placeholder" style="background-color: var(--wag-color-accent)">
            <div class="wag-game-card__camp-sketch">🌲</div>
          </div>
        </div>
        <div class="wag-game-card__body">
          <div class="wag-game-card__meta">
            <span class="wag-game-card__platform">PC / Switch</span>
          </div>
          <h3 class="wag-game-card__title">Forest Ranger Pip</h3>
          <p class="wag-game-card__excerpt">Keep trails safe, catalog cute bugs, and guide lost hikers in this isometric adventure RPG.</p>
          <div class="wag-game-card__actions">
            <button class="wag-btn wag-btn--primary wag-btn--small wag-game-card__btn">Play Demo</button>
          </div>
        </div>
      </article>

      <!-- Card 2 -->
      <article class="wag-game-card">
        <div class="wag-game-card__thumbnail">
          <span class="wag-game-card__genre">Strategy</span>
          <div class="wag-game-card__img-placeholder" style="background-color: var(--wag-color-secondary)">
            <div class="wag-game-card__camp-sketch">⛺</div>
          </div>
        </div>
        <div class="wag-game-card__body">
          <div class="wag-game-card__meta">
            <span class="wag-game-card__platform">Switch / Mobile</span>
          </div>
          <h3 class="wag-game-card__title">Mapmaker's Guild</h3>
          <p class="wag-game-card__excerpt">Map out unknown grid terrains, connect camping trails, and build cozy cabins in this tile puzzle draft.</p>
          <div class="wag-game-card__actions">
            <button class="wag-btn wag-btn--primary wag-btn--small wag-game-card__btn">Play Demo</button>
          </div>
        </div>
      </article>

      <!-- Card 3 -->
      <article class="wag-game-card">
        <div class="wag-game-card__thumbnail">
          <span class="wag-game-card__genre">Puzzle</span>
          <div class="wag-game-card__img-placeholder" style="background-color: var(--wag-color-accent)">
            <div class="wag-game-card__camp-sketch">🎈</div>
          </div>
        </div>
        <div class="wag-game-card__body">
          <div class="wag-game-card__meta">
            <span class="wag-game-card__platform">Steam / iOS</span>
          </div>
          <h3 class="wag-game-card__title">Whimsical Winds</h3>
          <p class="wag-game-card__excerpt">Guide custom hot air balloons using physics drafts in an elegant storybook cloud landscape.</p>
          <div class="wag-game-card__actions">
            <button class="wag-btn wag-btn--primary wag-btn--small wag-game-card__btn">Play Demo</button>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
```

#### CSS
```css
.wag-grid-section {
  padding: 5rem 2rem;
  background-color: var(--wag-bg-main);
  background-image: 
    radial-gradient(var(--wag-border-medium) 1px, transparent 1px);
  background-size: 24px 24px;
}

.wag-grid-container {
  max-width: 1200px;
  margin: 0 auto;
}

.wag-grid-header {
  text-align: center;
  margin-bottom: 4rem;
}

.wag-grid-title {
  font-family: var(--wag-font-display);
  font-size: var(--wag-fs-h2);
  color: var(--wag-text-main);
  margin-bottom: 1rem;
}

.wag-grid-subtitle {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-body);
  color: var(--wag-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* CSS Grid Auto-fit columns */
.wag-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}
```

---

### Module 4: Studio Intro
A custom layout featuring team summaries and directional map vectors reflecting the "Journey before Destination" philosophy.

#### HTML
```html
<section class="wag-about">
  <div class="wag-about__container">
    <div class="wag-about__philosophy-box">
      <span class="wag-about__badge">Our Map</span>
      <h2 class="wag-about__title">The Journey is the Destination</h2>
      <blockquote class="wag-about__quote">
        "We believe games should feel like a cozy blanket and an adventure journal combined. Our process focuses on bringing family-friendly warmth to modern digital platforms."
      </blockquote>
      <div class="wag-about__signature">
        <svg class="wag-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <span>Pip & Scout, Studio Co-Founders</span>
      </div>
    </div>
    <div class="wag-about__team">
      <div class="wag-about__card">
        <div class="wag-about__avatar">🎨</div>
        <div class="wag-about__info">
          <h3>Pip</h3>
          <span class="wag-about__role">Art Director / Illustrator</span>
          <p>Hand-draws the cozy woodland sketches and crafts custom vector map patterns.</p>
        </div>
      </div>
      <div class="wag-about__card">
        <div class="wag-about__avatar">⚙️</div>
        <div class="wag-about__info">
          <h3>Scout</h3>
          <span class="wag-about__role">Technical Engine Lead</span>
          <p>Tuned to write bouncy physics, modular canvas render loops, and cozy audio states.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### CSS
```css
.wag-about {
  padding: 6rem 2rem;
  background-color: var(--wag-bg-cream);
  border-top: 3px dashed var(--wag-border-medium);
  border-bottom: 3px dashed var(--wag-border-medium);
}

.wag-about__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.wag-about__philosophy-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.wag-about__badge {
  color: var(--wag-color-primary);
  font-family: var(--wag-font-header);
  font-weight: 700;
  font-size: var(--wag-fs-small);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.wag-about__title {
  font-family: var(--wag-font-display);
  font-size: var(--wag-fs-h2);
  color: var(--wag-text-main);
  margin-bottom: 1.5rem;
}

.wag-about__quote {
  font-family: var(--wag-font-header);
  font-size: 1.35rem;
  font-weight: 400;
  line-height: var(--wag-lh-header);
  color: var(--wag-text-secondary);
  border-left: 4px solid var(--wag-color-primary);
  padding-left: 1.5rem;
  margin-bottom: 2rem;
  font-style: italic;
}

.wag-about__signature {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--wag-font-body);
  font-weight: 700;
  color: var(--wag-text-main);
}

.wag-about__signature .wag-icon {
  color: var(--wag-color-primary);
}

/* Team Grid Column */
.wag-about__team {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.wag-about__card {
  background-color: var(--wag-bg-card);
  border: 3px solid var(--wag-border-ink);
  border-radius: var(--wag-radius-card);
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
  box-shadow: 4px 4px 0px var(--wag-border-ink);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.wag-about__card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 7px 7px 0px var(--wag-border-ink);
}

.wag-about__avatar {
  font-size: 3rem;
  background-color: var(--wag-color-accent);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--wag-border-ink);
  flex-shrink: 0;
}

.wag-about__info h3 {
  font-family: var(--wag-font-header);
  font-size: var(--wag-fs-h4);
  color: var(--wag-text-main);
  margin-bottom: 0.25rem;
}

.wag-about__role {
  display: inline-block;
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-small);
  color: var(--wag-color-primary);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.wag-about__info p {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-body);
  color: var(--wag-text-secondary);
}

@media (max-width: 768px) {
  .wag-about__container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
```

---

### Module 5: Feature Highlights
A 3-column features panel emphasizing performance specifications with animated icons and soft ice blue accents.

#### HTML
```html
<section class="wag-features">
  <div class="wag-features__container">
    <div class="wag-features__grid">
      <!-- Feature 1 -->
      <div class="wag-features__item">
        <div class="wag-features__icon-box">
          <svg class="wag-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
        </div>
        <h3 class="wag-features__title">Cozy Navigation</h3>
        <p class="wag-features__desc">Explore map paths using tactile mouse gestures, controller d-pads, or standard layouts.</p>
      </div>

      <!-- Feature 2 -->
      <div class="wag-features__item">
        <div class="wag-features__icon-box">
          <svg class="wag-icon" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="3"></rect><path d="M6 12h4M8 10v4M15 11h.01M18 13h.01"></path></svg>
        </div>
        <h3 class="wag-features__title">Cross Play Ready</h3>
        <p class="wag-features__desc">Play multiplayer games with friends on web canvas, tablet sizes, or console screens.</p>
      </div>

      <!-- Feature 3 -->
      <div class="wag-features__item">
        <div class="wag-features__icon-box">
          <svg class="wag-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        </div>
        <h3 class="wag-features__title">Kid-Safe Fun</h3>
        <p class="wag-features__desc">Strictly verified sandbox environments with zero tracking, data gathering, or invasive ads.</p>
      </div>
    </div>
  </div>
</section>
```

#### CSS
```css
.wag-features {
  padding: 5rem 2rem;
  background-color: var(--wag-bg-main);
}

.wag-features__container {
  max-width: 1200px;
  margin: 0 auto;
}

.wag-features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
}

.wag-features__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: var(--wag-bg-card);
  border: 2px solid var(--wag-border-light);
  border-radius: var(--wag-radius-card);
  transition: transform 0.2s, border-color 0.2s;
}

.wag-features__item:hover {
  transform: translateY(-4px);
  border-color: var(--wag-color-primary);
}

.wag-features__icon-box {
  width: 64px;
  height: 64px;
  background-color: var(--wag-color-accent);
  color: var(--wag-text-main);
  border: 2px solid var(--wag-border-ink);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 3px 3px 0px var(--wag-border-ink);
  transition: transform 0.3s ease;
}

.wag-features__item:hover .wag-features__icon-box {
  transform: rotate(15deg) scale(1.1);
}

.wag-features__title {
  font-family: var(--wag-font-header);
  font-size: var(--wag-fs-h4);
  color: var(--wag-text-main);
  margin-bottom: 0.75rem;
}

.wag-features__desc {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-body);
  color: var(--wag-text-secondary);
}
```

---

### Module 6: Newsletter Signup
An inline sign-up form with a soft warm cream background block to collect emails for dev logs.

#### HTML
```html
<section class="wag-newsletter">
  <div class="wag-newsletter__container">
    <div class="wag-newsletter__card">
      <div class="wag-newsletter__content">
        <h2 class="wag-newsletter__title">Get the Dev Diaries</h2>
        <p class="wag-newsletter__subtitle">Sign up for rare updates, beta testing keys, and behind-the-scenes concept art.</p>
      </div>
      <form class="wag-newsletter__form" onsubmit="event.preventDefault(); alert('Subscribed!');">
        <div class="wag-newsletter__form-group">
          <input class="wag-newsletter__input" type="email" placeholder="Enter your explorer email" required />
          <button class="wag-btn wag-btn--primary wag-newsletter__btn" type="submit">
            Join Guild
            <svg class="wag-icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
```

#### CSS
```css
.wag-newsletter {
  padding: 5rem 2rem;
  background-color: var(--wag-bg-main);
}

.wag-newsletter__container {
  max-width: 1000px;
  margin: 0 auto;
}

.wag-newsletter__card {
  background-color: var(--wag-bg-cream);
  border: 3px solid var(--wag-border-ink);
  border-radius: var(--wag-radius-card);
  padding: 3.5rem 3rem;
  box-shadow: 6px 6px 0px var(--wag-border-ink);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  position: relative;
}

/* Background topographic sketch accent */
.wag-newsletter__card::after {
  content: '🧭';
  position: absolute;
  right: 2rem;
  top: 1rem;
  font-size: 5rem;
  opacity: 0.05;
  pointer-events: none;
}

.wag-newsletter__content {
  flex: 1 1 50%;
}

.wag-newsletter__title {
  font-family: var(--wag-font-display);
  font-size: var(--wag-fs-h2);
  color: var(--wag-text-main);
  margin-bottom: 0.75rem;
}

.wag-newsletter__subtitle {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-body);
  color: var(--wag-text-secondary);
}

.wag-newsletter__form {
  flex: 1 1 50%;
  width: 100%;
}

.wag-newsletter__form-group {
  display: flex;
  gap: 0.75rem;
  width: 100%;
}

.wag-newsletter__input {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-body);
  padding: 0.8rem 1.25rem;
  border: 2px solid var(--wag-border-ink);
  border-radius: var(--wag-radius-btn);
  background-color: var(--wag-bg-card);
  color: var(--wag-text-main);
  outline: none;
  flex-grow: 1;
  box-shadow: inset 2px 2px 0px rgba(0,0,0,0.05);
}

.wag-newsletter__input:focus {
  border-color: var(--wag-color-primary);
  box-shadow: 0 0 0 4px var(--wag-color-accent);
}

.wag-newsletter__btn {
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .wag-newsletter__card {
    flex-direction: column;
    padding: 2.5rem 2rem;
    gap: 2rem;
    text-align: center;
  }
  .wag-newsletter__form-group {
    flex-direction: column;
  }
}
```

---

### Module 7: Testimonial Card
A review block with custom character avatar masking and a decorative quote highlight.

#### HTML
```html
<div class="wag-testimonial">
  <div class="wag-testimonial__header">
    <div class="wag-testimonial__stars">
      ★★★★★
    </div>
    <div class="wag-testimonial__quote-icon">
      <svg class="wag-icon" viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h4c0 4-2 6-5 6v1zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h4c0 4-2 6-5 6v1z"></path></svg>
    </div>
  </div>
  <blockquote class="wag-testimonial__body">
    "Playing Campfire Chronicles with my kids has been a highlights routine this summer. The characters are delightfully written and the puzzles are perfectly cozy!"
  </blockquote>
  <div class="wag-testimonial__author">
    <div class="wag-testimonial__avatar-mask">
      👩‍👦
    </div>
    <div class="wag-testimonial__meta">
      <cite class="wag-testimonial__name">Sarah Jennings</cite>
      <span class="wag-testimonial__game">Player & Parent</span>
    </div>
  </div>
</div>
```

#### CSS
```css
.wag-testimonial {
  background-color: var(--wag-bg-card);
  border: 3px solid var(--wag-border-ink);
  border-radius: var(--wag-radius-card);
  padding: 2.5rem;
  box-shadow: 4px 4px 0px var(--wag-border-ink);
  max-width: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.wag-testimonial__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.wag-testimonial__stars {
  font-family: var(--wag-font-header);
  color: var(--wag-color-primary);
  font-size: 1.25rem;
  letter-spacing: 0.1em;
}

.wag-testimonial__quote-icon {
  color: var(--wag-color-accent);
}

.wag-testimonial__body {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-body);
  line-height: var(--wag-lh-body);
  color: var(--wag-text-secondary);
  font-style: italic;
  margin-bottom: 2rem;
}

.wag-testimonial__author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
}

.wag-testimonial__avatar-mask {
  width: 48px;
  height: 48px;
  background-color: var(--wag-bg-cream);
  border: 2px solid var(--wag-border-ink);
  border-radius: 14px; /* Organic hand-drawn mask feel */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.wag-testimonial__meta {
  display: flex;
  flex-direction: column;
}

.wag-testimonial__name {
  font-family: var(--wag-font-header);
  font-weight: 700;
  font-size: var(--wag-fs-body);
  color: var(--wag-text-main);
  font-style: normal;
}

.wag-testimonial__game {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-small);
  color: var(--wag-text-muted);
}
```

---

### Module 8: CTA Banner
A high-energy, full-width block highlighting immediate game play.

#### HTML
```html
<section class="wag-cta">
  <div class="wag-cta__container">
    <div class="wag-cta__inner">
      <div class="wag-cta__illustration-bg">🧭</div>
      <h2 class="wag-cta__title">Start Your Next Expedition</h2>
      <p class="wag-cta__desc">Join over 100,000 players currently mapping out cute cozy forest trails today. Play instantly in your browser or grab the Switch cartridge version.</p>
      <div class="wag-cta__actions">
        <a href="#demo" class="wag-btn wag-btn--secondary">Play Free Demo</a>
        <a href="#store" class="wag-btn wag-btn--outline wag-cta__btn-outline">Buy Game Cart</a>
      </div>
    </div>
  </div>
</section>
```

#### CSS
```css
.wag-cta {
  padding: 4rem 2rem;
  background-color: var(--wag-bg-main);
}

.wag-cta__container {
  max-width: 1100px;
  margin: 0 auto;
}

.wag-cta__inner {
  background-color: var(--wag-color-primary);
  border: 3px solid var(--wag-border-ink);
  border-radius: var(--wag-radius-card);
  padding: 4rem 3rem;
  text-align: center;
  box-shadow: 6px 6px 0px var(--wag-border-ink);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wag-cta__illustration-bg {
  position: absolute;
  left: -2rem;
  bottom: -2rem;
  font-size: 10rem;
  opacity: 0.1;
  pointer-events: none;
}

.wag-cta__title {
  font-family: var(--wag-font-display);
  font-size: 3rem;
  color: #FFFFFF;
  line-height: var(--wag-lh-tight);
  margin-bottom: 1rem;
  text-shadow: 2px 2px 0px var(--wag-border-ink);
}

.wag-cta__desc {
  font-family: var(--wag-font-body);
  font-size: 1.15rem;
  color: #FFFFFF;
  max-width: 650px;
  margin-bottom: 2.5rem;
}

.wag-cta__actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Customizing buttons specifically for layout color compatibility */
.wag-cta__btn-outline {
  border-color: #FFFFFF;
  color: #FFFFFF;
  box-shadow: 4px 4px 0px var(--wag-border-ink);
}
.wag-cta__btn-outline:hover {
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 6px 6px 0px var(--wag-border-ink);
}
```

---

### Module 9: Blog/Dev Log Card
A clean preview card displaying dev log milestones with sliding meta vectors.

#### HTML
```html
<article class="wag-blog-card">
  <div class="wag-blog-card__meta">
    <span class="wag-blog-card__date">
      <svg class="wag-icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
      June 9, 2026
    </span>
    <span class="wag-blog-card__reading">5 Min Read</span>
  </div>
  <h3 class="wag-blog-card__title">How We Designed the Soundscapes for Campfire Chronicles</h3>
  <p class="wag-blog-card__excerpt">From recording crackling dry leaves to synthesizing soft guitar arpeggios, read about how our cozy music design system resolves into G Major.</p>
  <a href="#blog-detail" class="wag-blog-card__link">
    Read Dev Diary
    <svg class="wag-icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
  </a>
</article>
```

#### CSS
```css
.wag-blog-card {
  background-color: var(--wag-bg-card);
  border-bottom: 3px solid var(--wag-border-ink);
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: border-color 0.2s;
}

.wag-blog-card:hover {
  border-color: var(--wag-color-primary);
}

.wag-blog-card__meta {
  display: flex;
  gap: 1.5rem;
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-small);
  color: var(--wag-text-muted);
  margin-bottom: 0.75rem;
}

.wag-blog-card__date {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.wag-blog-card__title {
  font-family: var(--wag-font-header);
  font-size: var(--wag-fs-h3);
  color: var(--wag-text-main);
  margin-bottom: 0.75rem;
  transition: color 0.2s;
}

.wag-blog-card:hover .wag-blog-card__title {
  color: var(--wag-color-primary);
}

.wag-blog-card__excerpt {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-body);
  color: var(--wag-text-secondary);
  margin-bottom: 1.25rem;
}

.wag-blog-card__link {
  font-family: var(--wag-font-header);
  font-weight: 700;
  font-size: var(--wag-fs-body);
  color: var(--wag-color-primary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: gap 0.2s;
}

.wag-blog-card__link:hover {
  gap: 0.8rem;
}
```

---

### Module 10: FAQ Accordion
A semantic FAQ listing with animated rotation symbols built using `<details>` and `<summary>` elements.

#### HTML
```html
<div class="wag-faq">
  <!-- Item 1 -->
  <details class="wag-faq__item" open>
    <summary class="wag-faq__trigger">
      <span>What platforms are your cozy games available on?</span>
      <span class="wag-faq__icon">
        <svg class="wag-icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </summary>
    <div class="wag-faq__panel">
      <p>Our games are built on HTML5 Canvas engines, allowing us to publish on PC/Mac (Steam), Nintendo Switch, iOS, Android, and directly in modern web browsers.</p>
    </div>
  </details>

  <!-- Item 2 -->
  <details class="wag-faq__item">
    <summary class="wag-faq__trigger">
      <span>Are What An Adventure games safe for children?</span>
      <span class="wag-faq__icon">
        <svg class="wag-icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </summary>
    <div class="wag-faq__panel">
      <p>Absolutely! We build family-friendly puzzle blocks. We do not use third-party ads, user behavior tracking, or in-app purchase gates. Fun and safe play is our priority.</p>
    </div>
  </details>

  <!-- Item 3 -->
  <details class="wag-faq__item">
    <summary class="wag-faq__trigger">
      <span>Can I stream your game builds online?</span>
      <span class="wag-faq__icon">
        <svg class="wag-icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </summary>
    <div class="wag-faq__panel">
      <p>Yes, we love streamers! You are fully licensed to record videos or stream gameplay. Tag us so we can watch and highlight your journey!</p>
    </div>
  </details>
</div>
```

#### CSS
```css
.wag-faq {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.wag-faq__item {
  background-color: var(--wag-bg-card);
  border: 3px solid var(--wag-border-ink);
  border-radius: var(--wag-radius-card);
  box-shadow: 3px 3px 0px var(--wag-border-ink);
  overflow: hidden;
  transition: transform 0.2s;
}

.wag-faq__item[open] {
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0px var(--wag-border-ink);
}

.wag-faq__trigger {
  font-family: var(--wag-font-header);
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--wag-text-main);
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  list-style: none; /* Hide default list marker in Chrome/Firefox */
}

/* Hide default marker in Safari */
.wag-faq__trigger::-webkit-details-marker {
  display: none;
}

.wag-faq__icon {
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
}

.wag-faq__item[open] .wag-faq__icon {
  transform: rotate(180deg);
  color: var(--wag-color-primary);
}

.wag-faq__panel {
  padding: 0 1.5rem 1.5rem;
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-body);
  color: var(--wag-text-secondary);
  line-height: var(--wag-lh-body);
  border-top: 1px dashed var(--wag-border-light);
  padding-top: 1rem;
}
```

---

### Module 11: Stats Counter
A stat module displaying milestones with bouncy animations.

#### HTML
```html
<section class="wag-stats">
  <div class="wag-stats__container">
    <div class="wag-stats__grid">
      <!-- Stat 1 -->
      <div class="wag-stats__item">
        <div class="wag-stats__number">5+</div>
        <div class="wag-stats__desc">Games Released</div>
      </div>
      <!-- Stat 2 -->
      <div class="wag-stats__item">
        <div class="wag-stats__number">100K+</div>
        <div class="wag-stats__desc">Active Explorers</div>
      </div>
      <!-- Stat 3 -->
      <div class="wag-stats__item">
        <div class="wag-stats__number">4.9★</div>
        <div class="wag-stats__desc">Average Player Rating</div>
      </div>
    </div>
  </div>
</section>
```

#### CSS
```css
.wag-stats {
  padding: 5rem 2rem;
  background-color: var(--wag-bg-cream);
  border-top: 3px dashed var(--wag-border-medium);
  border-bottom: 3px dashed var(--wag-border-medium);
}

.wag-stats__container {
  max-width: 1200px;
  margin: 0 auto;
}

.wag-stats__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 3rem;
  text-align: center;
}

.wag-stats__item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wag-stats__number {
  font-family: var(--wag-font-display);
  font-size: 4rem;
  color: var(--wag-color-primary);
  line-height: 1;
  margin-bottom: 0.5rem;
  filter: drop-shadow(2px 2px 0px var(--wag-border-ink));
  transition: transform 0.2s;
}

.wag-stats__item:hover .wag-stats__number {
  transform: scale(1.1);
}

.wag-stats__desc {
  font-family: var(--wag-font-header);
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--wag-text-secondary);
}
```

---

### Module 12: Footer
A structured navigation footer referencing social layouts and inline registration inputs.

#### HTML
```html
<footer class="wag-footer">
  <div class="wag-footer__container">
    <div class="wag-footer__top">
      <div class="wag-footer__branding">
        <h2 class="wag-footer__logo">What An Adventure</h2>
        <p class="wag-footer__tagline">Journey before Destination. We create whimsical games that unite people.</p>
        <div class="wag-footer__socials">
          <a href="#" class="wag-footer__social-link" aria-label="Twitter">
            <svg class="wag-icon" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
          <a href="#" class="wag-footer__social-link" aria-label="Discord">
            <svg class="wag-icon" viewBox="0 0 24 24"><path d="M18.75 4a12.64 12.64 0 0 0-3.37-1l-.16.36a14.28 14.28 0 0 0-6.44 0l-.16-.36A12.64 12.64 0 0 0 5.25 4c-3.1 4.7-2.6 9.3-.5 13a13 13 0 0 0 4.1 2.2l.8-1.1a8.42 8.42 0 0 1-2.6-1.3l.2-.2a13.31 13.31 0 0 0 9.7 0l.2.2a8.42 8.42 0 0 1-2.6 1.3l.8 1.1a13 13 0 0 0 4.1-2.2c2.1-3.7 2.6-8.3-.5-13z"></path><circle cx="9.5" cy="11.5" r="1.5"></circle><circle cx="14.5" cy="11.5" r="1.5"></circle></svg>
          </a>
          <a href="#" class="wag-footer__social-link" aria-label="YouTube">
            <svg class="wag-icon" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
          </a>
        </div>
      </div>
      <div class="wag-footer__nav">
        <div class="wag-footer__column">
          <h3 class="wag-footer__heading">Explore</h3>
          <ul class="wag-footer__list">
            <li><a href="#games" class="wag-footer__link">Game Portfolios</a></li>
            <li><a href="#tabletop" class="wag-footer__link">Tabletop Kits</a></li>
            <li><a href="#devlog" class="wag-footer__link">Dev Log Entries</a></li>
          </ul>
        </div>
        <div class="wag-footer__column">
          <h3 class="wag-footer__heading">Studio</h3>
          <ul class="wag-footer__list">
            <li><a href="#about" class="wag-footer__link">Our Story</a></li>
            <li><a href="#philosophy" class="wag-footer__link">Game Philosophy</a></li>
            <li><a href="#contact" class="wag-footer__link">Send a Pigeon</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="wag-footer__bottom">
      <p class="wag-footer__copyright">&copy; 2026 What An Adventure Games. All Rights Reserved. Built with Cozy Code.</p>
    </div>
  </div>
</footer>
```

#### CSS
```css
.wag-footer {
  background-color: var(--wag-bg-cream);
  border-top: 3px solid var(--wag-border-ink);
  color: var(--wag-text-secondary);
  padding: 5rem 2rem 2.5rem;
}

.wag-footer__container {
  max-width: 1200px;
  margin: 0 auto;
}

.wag-footer__top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.wag-footer__branding {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.wag-footer__logo {
  font-family: var(--wag-font-display);
  font-size: 2.25rem;
  color: var(--wag-text-main);
  margin-bottom: 1rem;
}

.wag-footer__tagline {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-body);
  color: var(--wag-text-secondary);
  margin-bottom: 2rem;
  max-width: 320px;
}

.wag-footer__socials {
  display: flex;
  gap: 1rem;
}

.wag-footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: var(--wag-bg-card);
  border: 2px solid var(--wag-border-ink);
  border-radius: 50%;
  color: var(--wag-text-main);
  box-shadow: 2px 2px 0px var(--wag-border-ink);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s;
}

.wag-footer__social-link:hover {
  transform: translateY(-3px);
  color: var(--wag-color-primary);
  box-shadow: 4px 4px 0px var(--wag-border-ink);
}

.wag-footer__nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.wag-footer__heading {
  font-family: var(--wag-font-header);
  font-size: var(--wag-fs-h4);
  color: var(--wag-text-main);
  margin-bottom: 1.25rem;
}

.wag-footer__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.wag-footer__link {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-body);
  color: var(--wag-text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

.wag-footer__link:hover {
  color: var(--wag-color-primary);
}

.wag-footer__bottom {
  border-top: 1px dashed var(--wag-border-medium);
  padding-top: 2rem;
  text-align: center;
}

.wag-footer__copyright {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-caption);
  color: var(--wag-text-muted);
}

@media (max-width: 768px) {
  .wag-footer__top {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
```
