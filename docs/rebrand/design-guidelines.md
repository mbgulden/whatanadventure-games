# What An Adventure Games — Rebrand Design Guidelines

## Implementation Plan

This section outlines the step-by-step strategy for migrating the **What An Adventure Games** storefront from its legacy cyber-punk dark mode theme to the newly designed light theme.

1. **Audit and Inventory**: Inspect the current [index.html](file:///home/ubuntu/work/whatanadventure-games/index.html) to locate all hardcoded values, legacy variables, and components (Header, Nav, Game Grid, About, Contact, Footer).
2. **Define Token Foundation**: Implement all color palette, spacing, typography, shadow, and transition tokens under the `:root` pseudo-class inside the CSS architecture.
3. **Typography Migration**: Integrate the new Google Fonts links (`Fredoka`, `Lilita One`, `Nunito`) in the `<head>` of the HTML files and bind them to the appropriate element styles.
4. **Layout Grid Overhaul**: Establish a 12-column grid configuration for desktop viewports and create the necessary media queries for responsive scaling down to mobile resolutions.
5. **Interactive Element Restyling**: Revamp class definitions and states (hover, focus-visible, active, disabled) for buttons, text inputs, links, cards, and accordions.
6. **Animation & Transition Wiring**: Apply standardized transition durations, cubic-bezier easing functions, and keyframe definitions to elements.
7. **Accessibility (WCAG 2.1 AA) Verification**: Verify contrast ratios (targeting a minimum of 4.5:1 for regular text, and 3:1 for large headings) and integrate focus-visible rings and reduced-motion media query overrides.
8. **Visual Elements Alignment**: Align iconography, image crop aspect ratios, overlays, and blob shapes with the hand-crafted, outdoorsy look.
9. **Component-by-Component Upgrade**: Apply BEM naming conventions to refactor existing stylesheet blocks.

---

## 1. Design Principles

The design of the rebranded What An Adventure Games website is built on the core studio philosophy: **"Journey before destination."** The following four principles guide every design decision:

1. **The Trail is the Destination (Exploratory Layouts)**
   * *Description*: The user experience should feel like walking a path of discovery. Avoid rigid grid symmetry. Instead, use off-axis element offsets, path-like trail indicators (e.g., dashed borders connecting components), and directional vector ornaments (e.g., compass needles, coordinate indicators).
2. **Tactile Craftsmanship (Board Game Meta)**
   * *Description*: The digital interface must evoke the feel of physical tabletop games and field journals. We utilize card-on-card layering, paper textures, organic soft-corners (`border-radius: 16px`), and hand-drawn border shapes that reject flat, sterile corporate minimalism.
3. **Inclusive Playfulness (Kid-and-Adult Friendly)**
   * *Description*: The site is built for kids and parents. Colors are warm, bright, and energetic, while typography relies on rounded terminals (Fredoka, Nunito) that are highly legible yet cheerful. Every component state reacts playfully with soft bounce spring animations.
4. **Instant Ascent (Zero Friction)**
   * *Description*: The path to gameplay should be instant. Web-native technologies mean games run in the browser without setup. Navigation paths must be flat, key features must be clearly visible, and touch/keyboard controls must be active from the first frame.

---

## 2. Complete CSS Design Token System

The design token system is declared as CSS Custom Properties. Place these variables inside the `:root` selector in the main stylesheet:

```css
:root {
  /* ==========================================
     COLOR TOKENS
     ========================================== */
  /* Brand Primary & Secondary (Extracted from Logo Orange & Peach) */
  --wag-color-primary: #FE7916;          /* Vibrant Adventure Orange (Logo Focus) */
  --wag-color-primary-dark: #E26810;     /* Darkened Orange for hover/active states */
  --wag-color-secondary: #FDC781;        /* Golden Peach / Warm Amber Accent */
  --wag-color-secondary-dark: #ECAE5C;   /* Darkened secondary for active states */
  
  /* Airy Accent (Extracted from Splash Screen Sky Blue) */
  --wag-color-accent: #C8E3FE;           /* Ice Blue Accent */
  --wag-color-accent-hover: #AFD4FC;     /* Hover Ice Blue */
  --wag-color-accent-dark: #84BAF8;      /* Active state Ice Blue */

  /* Neutral Background Tones (Light Theme Spec) */
  --wag-bg-main: #FDFBF7;                /* Alabaster Off-White (Screen background) */
  --wag-bg-cream: #FAF5EB;               /* Warm Map Cream (Section offsets / headers) */
  --wag-bg-gray: #F0EFEA;                /* Light Trail Gray (Background accents) */
  --wag-bg-card: #FFFFFF;                /* Pure White (Cards and active containers) */

  /* Text & Ink Contrast (WCAG AA compliant) */
  --wag-text-main: #1B1C1E;              /* Ink Black (Primary headers and body copy) */
  --wag-text-secondary: #3B4141;         /* Deep Charcoal (Descriptions and meta copy) */
  --wag-text-muted: #8E94A0;             /* Muted Blue-Gray (Disabled states, labels) */

  /* Semantic UI State Colors */
  --wag-state-success: #2E7D32;          /* Forest Green (Success indicators) */
  --wag-state-warning: #FFA000;          /* Amber Yellow (Warning text and icons) */
  --wag-state-error: #D32F2F;            /* Crimson Red (Alert / Error indicators) */

  /* Borders & Divider Colors */
  --wag-border-light: rgba(27, 28, 30, 0.08);   /* Subtle card/input border */
  --wag-border-medium: rgba(27, 28, 30, 0.15);  /* Interactive border */
  --wag-border-dark: #1B1C1E;                   /* Solid layout border outline */

  /* ==========================================
     SPACING & LAYOUT TOKENS
     ========================================== */
  --wag-spacing-xs: 0.25rem;             /* 4px - Micro-alignments */
  --wag-spacing-sm: 0.5rem;              /* 8px - Label spacing, list gaps */
  --wag-spacing-md: 1rem;                /* 16px - Base padding, item gutters */
  --wag-spacing-lg: 1.5rem;              /* 24px - Mobile section gaps, card padding */
  --wag-spacing-xl: 2rem;                /* 32px - Standard gutters, desktop cards */
  --wag-spacing-xxl: 3rem;               /* 48px - Desktop section spacing */
  --wag-spacing-xxxl: 4rem;              /* 64px - Hero margins and page blocks */

  /* ==========================================
     SHADOW TOKENS (Tactile Elevation)
     ========================================== */
  /* Soft, warm shadows to pop cards out of the cream backgrounds */
  --wag-shadow-soft: 0 4px 20px -2px rgba(74, 62, 61, 0.06), 0 2px 8px 0 rgba(74, 62, 61, 0.04);
  --wag-shadow-hover: 0 12px 30px -4px rgba(74, 62, 61, 0.12), 0 4px 12px 0 rgba(74, 62, 61, 0.06);
  --wag-shadow-button: 0 4px 12px rgba(254, 121, 22, 0.20);
  --wag-shadow-button-hover: 0 8px 20px rgba(254, 121, 22, 0.35);
  --wag-shadow-focus: 0 0 0 3px rgba(254, 121, 22, 0.45);

  /* ==========================================
     LAYOUT & CORNER RADII
     ========================================== */
  --wag-radius-tag: 6px;                 /* Genre badges, metadata chips */
  --wag-radius-btn: 12px;                /* Buttons, input fields */
  --wag-radius-card: 16px;               /* Game cards, primary containers */
  --wag-radius-badge: 20px;              /* Status pills, floating alerts */

  /* ==========================================
     MOTION & TRANSITIONS
     ========================================== */
  --wag-transition-fast: 150ms ease;
  --wag-transition-medium: 300ms ease;
  --wag-transition-slow: 500ms cubic-bezier(0.16, 1, 0.3, 1);
  --wag-transition-spring: 400ms cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy spring curves */
}
```

---

## 3. Typography System

The typography uses three Google Fonts to convey a playful, bold adventure feel while maintaining flawless legibility.

### Google Fonts Link
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Lilita+One&family=Nunito:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
```

### Font Pairings
* **Display Font**: `'Lilita One', cursive` — Bold, chunky display face used for the main studio branding, high-visibility CTAs, and hero headers.
* **Header Font**: `'Fredoka', sans-serif` — Rounded, soft-cornered headings used for page titles, card headers, and navigation links.
* **Body Font**: `'Nunito', sans-serif` — Extremely legible geometric rounded sans-serif used for body paragraphs, specs, inputs, and footer text.

### Font-Family Declarations
```css
--wag-font-display: 'Lilita One', 'Fredoka', cursive, sans-serif;
--wag-font-header: 'Fredoka', sans-serif;
--wag-font-body: 'Nunito', sans-serif;
```

### Type Scale

| Class | Font Family | Size (Desktop) | Size (Mobile) | Line Height | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | Display | `3.5rem` (56px) | `2.25rem` (36px) | `1.1` | `400` | Main Hero Headers |
| **H2** | Header | `2.25rem` (36px) | `1.75rem` (28px) | `1.25` | `600` | Section Title Headers |
| **H3** | Header | `1.75rem` (28px) | `1.4rem` (22px) | `1.25` | `600` | Card Titles, Subheaders |
| **H4** | Header | `1.25rem` (20px) | `1.15rem` (18px) | `1.3` | `600` | Badges, Highlight blocks |
| **Body** | Body | `1.0rem` (16px) | `0.9375rem` (15px)| `1.6` | `400` / `700` | Main copy and descriptions |
| **Small**| Body | `0.875rem` (14px)| `0.8125rem` (13px)| `1.4` | `600` | Metadata tags, input labels|
| **Caption**| Body | `0.75rem` (12px) | `0.75rem` (12px) | `1.4` | `400` | Table cell details, footer |

### Fluid Typography Scaling Rules
To prevent large headers from breaking layouts on tablet and mobile viewports, the following CSS rules apply:

```css
h1, .wag-h1 {
  font-family: var(--wag-font-display);
  font-size: var(--wag-fs-h1);
  line-height: var(--wag-lh-tight);
  color: var(--wag-text-main);
}
h2, .wag-h2 {
  font-family: var(--wag-font-header);
  font-size: var(--wag-fs-h2);
  line-height: var(--wag-lh-header);
  color: var(--wag-text-main);
}
h3, .wag-h3 {
  font-family: var(--wag-font-header);
  font-size: var(--wag-fs-h3);
  line-height: var(--wag-lh-header);
  color: var(--wag-text-main);
}
h4, .wag-h4 {
  font-family: var(--wag-font-header);
  font-size: var(--wag-fs-h4);
  line-height: var(--wag-lh-header);
  color: var(--wag-text-main);
}
p, .wag-body {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-body);
  line-height: var(--wag-lh-body);
  color: var(--wag-text-secondary);
}

@media (max-width: 768px) {
  :root {
    --wag-fs-h1: 2.25rem;
    --wag-fs-h2: 1.75rem;
    --wag-fs-h3: 1.4rem;
    --wag-fs-h4: 1.15rem;
    --wag-fs-body: 0.9375rem;
    --wag-fs-small: 0.8125rem;
  }
}
```

---

## 4. Spacing & Layout Grid

To create consistent spacing and dynamic grid alignments, we enforce standard viewport breakpoints, column counts, and column gaps.

### Responsive Breakpoints
* **Mobile (Small)**: `< 480px`
* **Mobile (Large)**: `480px` to `767px`
* **Tablet**: `768px` to `991px`
* **Desktop (Standard)**: `992px` to `1199px`
* **Desktop (Wide)**: `>= 1200px`

### Layout Grids

```
+-------------------------------------------------------------------------------+
| Container Max Width: 1200px                                                    |
| Desktop Gutter: 2rem (32px) | Mobile Gutter: 1rem (16px)                      |
|                                                                               |
| [Col 1] [Col 2] [Col 3] [Col 4] [Col 5] [Col 6] [Col 7] [Col 8] [Col 9] [Col 10] [Col 11] [Col 12] |
+-------------------------------------------------------------------------------+
```

* **Desktop Layout Grid**: 12 Columns. Column Gutter is `2rem` (32px). Max container width is `1200px`.
* **Tablet Layout Grid**: 6 Columns. Column Gutter is `1.5rem` (24px).
* **Mobile Layout Grid**: 4 Columns. Column Gutter is `1rem` (16px).

### Layout CSS Classes
```css
.wag-container {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--wag-spacing-lg);
  padding-right: var(--wag-spacing-lg);
}

.wag-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--wag-spacing-xl);
}

/* Responsive Overrides */
@media (max-width: 991px) {
  .wag-grid {
    grid-template-columns: repeat(6, 1fr);
    gap: var(--wag-spacing-lg);
  }
  .wag-container {
    padding-left: var(--wag-spacing-md);
    padding-right: var(--wag-spacing-md);
  }
}

@media (max-width: 480px) {
  .wag-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--wag-spacing-md);
  }
}

/* Span Helper Utilities */
.wag-col-12 { grid-column: span 12; }
.wag-col-8  { grid-column: span 8; }
.wag-col-6  { grid-column: span 6; }
.wag-col-4  { grid-column: span 4; }
.wag-col-3  { grid-column: span 3; }

@media (max-width: 991px) {
  .wag-col-8, .wag-col-6, .wag-col-4, .wag-col-3 {
    grid-column: span 6;
  }
}
@media (max-width: 480px) {
  .wag-col-8, .wag-col-6, .wag-col-4, .wag-col-3 {
    grid-column: span 4;
  }
}
```

---

## 5. Component States

Every interactive element must present a high-contrast, visually distinct layout for each keyboard, pointer, and state interaction.

### 1. Buttons

* **Primary Button (`.wag-btn--primary`)**
  * *Base*: Background `#FE7916`, Text Ink Black (`#1B1C1E` for WCAG AA compliance), border `2px solid transparent`, border-radius `12px`, padding `0.8rem 2rem`. Shadow: `var(--wag-shadow-button)`.
  * *Hover*: Background `#E26810`, translation `translateY(-3px)`, shadow: `var(--wag-shadow-button-hover)`.
  * *Active*: Background `#C64E00`, translation `translateY(-1px)`, shadow: `var(--wag-shadow-button)`.
  * *Focus-Visible*: Outline `none`, shadow: `var(--wag-shadow-focus)`.
  * *Disabled*: Background `#F0EFEA`, Text `#8E94A0`, cursor `not-allowed`, border-color `transparent`, shadow `none`, transformation `none`, opacity `0.6`.

* **Secondary Button (`.wag-btn--secondary`)**
  * *Base*: Background `#FAF5EB`, Text Ink Black (`#1B1C1E`), border `2px solid var(--wag-border-medium)`, border-radius `12px`, padding `0.8rem 2rem`.
  * *Hover*: Background `#F0EFEA`, border-color `#1B1C1E`, translation `translateY(-3px)`.
  * *Active*: Background `#E3DFD5`, border-color `#1B1C1E`, translation `translateY(-1px)`.
  * *Focus-Visible*: Outline `none`, shadow: `var(--wag-shadow-focus)`.
  * *Disabled*: Background `#FAF5EB`, Text `#8E94A0`, border-color `var(--wag-border-light)`, cursor `not-allowed`, transformation `none`, opacity `0.6`.

### 2. Cards (`.wag-card`)
* *Base*: Background `#FFFFFF`, border-radius `16px`, border `1px solid var(--wag-border-light)`, padding `2rem`, shadow `var(--wag-shadow-soft)`, transition `var(--wag-transition-spring)`.
* *Hover*: Border-color `#FE7916`, translation `translateY(-4px) rotate(-0.5deg)` (playful tilt), shadow `var(--wag-shadow-hover)`.
* *Focus-Visible / Active Focus*: Outline `none`, border-color `#FE7916`, shadow `var(--wag-shadow-focus)`.

### 3. Links (`.wag-link`)
* *Base*: Color `#3B4141`, text-decoration `none`, border-bottom `2px dashed transparent`, transition `var(--wag-transition-fast)`.
* *Hover*: Color `#FE7916`, border-bottom-color `#FE7916`.
* *Active*: Color `#E26810`.
* *Focus-Visible*: Outline `2px solid var(--wag-color-primary)`, outline-offset `2px`, border-radius `var(--wag-radius-tag)`.

### 4. Form Inputs (`.wag-input`)
* *Base*: Background `#FFFFFF`, border `2px solid var(--wag-border-medium)`, border-radius `12px`, padding `0.75rem 1rem`, color `#1B1C1E`, font family `Nunito`.
* *Hover*: Border-color `#FE7916`.
* *Focus*: Outline `none`, border-color `#FE7916`, shadow `var(--wag-shadow-focus)`.
* *Disabled*: Background `#F0EFEA`, border-color `var(--wag-border-light)`, color `#8E94A0`, cursor `not-allowed`.

---

## 6. Animation & Motion

Animations support the tactile, organic adventure feel, utilizing spring physics rather than basic linear transitions.

### Motion Tokens
* **Durations**:
  * Fast: `150ms` (for colors, borders, opacity)
  * Medium: `300ms` (for translation movements, accordion heights)
  * Slow: `500ms` (for page layout transitions and fade-ins)
  * Spring: `400ms` (for cards and playful button bounces)
* **Easing Curves**:
  * Standard: `cubic-bezier(0.4, 0, 0.2, 1)` (UI details)
  * Spring Out (Elastic Bounce): `cubic-bezier(0.34, 1.56, 0.64, 1)` (Card tilt, button hover)
  * Decelerate (Entrance): `cubic-bezier(0.16, 1, 0.3, 1)` (Splash screen items, layout grids)

### CSS Animation Keyframes & Usage
```css
/* Entrance Animation: Slide-up & Fade-in */
@keyframes wagFadeInUp {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Applied to cards or sections on load */
.wag-animate-fade-in-up {
  animation: wagFadeInUp var(--wag-transition-slow) forwards;
}

/* Micro-Interaction: Card subtle wiggle on hover */
@keyframes wagWiggle {
  0%, 100% { transform: translateY(-4px) rotate(0deg); }
  50% { transform: translateY(-4px) rotate(-0.5deg); }
}

.wag-card:hover {
  animation: wagWiggle 1s ease-in-out infinite alternate;
}
```

---

## 7. Accessibility Standards

To ensure parents, kids, and players of all abilities can explore the games, the storefront strictly complies with WCAG 2.1 AA standards.

### Color Contrast Analysis
* **Body Text (`#1B1C1E`) on Alabaster (`#FDFBF7`)**: Contrast ratio is **16.1:1** (Exceeds the WCAG AAA requirement of 7.0:1).
* **Secondary Text (`#3B4141`) on Alabaster (`#FDFBF7`)**: Contrast ratio is **10.2:1** (Exceeds the WCAG AAA requirement).
* **Vibrant Orange (`#FE7916`) Text on Alabaster (`#FDFBF7`)**: Contrast is **3.1:1**.
  * *Prescriptive Rule*: Do NOT use `--wag-color-primary` (`#FE7916`) for body text, regular labels, or secondary captions. Use it only for decorative borders, background accents, and massive headers (>= 24pt/32px bold) where the 3:1 ratio is permitted.
* **White text on Vibrant Orange background**: Contrast is **3.1:1**.
  * *Prescriptive Rule*: All text inside primary buttons (`.wag-btn--primary`) must use Ink Black (`#1B1C1E`) as the text color to achieve a **6.7:1** contrast ratio. Do not use white text on the bright orange button.

### Focus Indicators
* Hardcoded `outline: none` or `outline: 0` is strictly forbidden.
* All interactive items (links, buttons, input fields) must use a high-contrast focus ring:
```css
*:focus-visible {
  outline: 3px solid var(--wag-color-primary) !important;
  outline-offset: 3px !important;
}
```

### Reduced-Motion Preferences
For users sensitive to motion or animation, all transition speeds must drop to zero, and animations must be disabled immediately:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
}
```

---

## 8. Iconography System

Icons are visual checkpoints along the trail. They must follow a consistent weight, sizing, and outline hierarchy.

### Icon Dimensions
* **Small (inline chips, platform icons)**: `16px` x `16px` (`1rem`)
* **Medium (standard card actions, grid headers)**: `24px` x `24px` (`1.5rem`)
* **Large (feature boxes, showcase stats)**: `32px` x `32px` (`2rem`)

### Stroke Weight & Design Rules
* All icons are line drawings with rounded endings: `stroke-width: 2px` (standard) or `2.5px` (large).
* SVG properties must specify: `stroke-linecap: round; stroke-linejoin: round;` to match the friendly Fredoka curves.
* Avoid sharp points, geometric corners, and filled blocks for general UI actions.

```
       [ OUTLINED ]                    [ FILLED ]
  Used for interface actions     Used for status/badges
       
       /\   /\                         /\___/\
      /  \_/  \                       /  xxx  \
     (  o   o  )                     (  @   @  )
      \___=___/                       \___^___/
```

### When to Use Outlined vs Filled
* **Outlined Icons**: Default for interactive control components (e.g., arrows, play controls, platform icons, email envelope, close X, search).
* **Filled Icons**: Reserved for status representations, milestones, achievements, rating systems (e.g., filled gold stars, success green checkmarks, warning amber triangles, error red exclamation badges).

---

## 9. Photography & Illustration Guidelines

Photos and sketches capture the warm, family-oriented vibe of the studio.

### Crop & Aspect Ratios
* **Game Thumbnail Previews**: `16:9` (`aspect-ratio: 16 / 9;`) to align with arcade frames.
* **Team Portraits / Avatars**: `1:1` (`aspect-ratio: 1 / 1;`) circular masks.
* **Studio Gallery**: `4:3` or `3:2` landscape crop ratios.

### Treatment & Masking
* Rigid rectangular images feel too corporate. Wrap photography and artwork inside organic blob masks:
```css
.wag-photo--organic {
  border-radius: 60% 40% 60% 40% / 40% 60% 40% 60%;
  transition: var(--wag-transition-spring);
}
.wag-photo--organic:hover {
  border-radius: 40% 60% 40% 60% / 60% 40% 60% 40%;
}
```
* **Color Overlay**: Apply a subtle, warm amber gradient overlay to unify color-grading across user-uploaded or stock photographs:
  `background: linear-gradient(135deg, rgba(254, 121, 22, 0.04) 0%, rgba(253, 199, 129, 0.08) 100%);`

### Caption Styles
* Captions are centered under assets using secondary styling:
```css
.wag-caption {
  font-family: var(--wag-font-body);
  font-size: var(--wag-fs-caption);
  color: var(--wag-text-secondary);
  font-style: italic;
  text-align: center;
  margin-top: var(--wag-spacing-sm);
}
```

---

## 10. Code Conventions

To keep stylesheets readable, extensible, and clean, we adopt strict class organization rules.

### CSS Naming Conventions (BEM - Block Element Modifier)
Every class must map to a block element using standard BEM formatting:
* **Block**: Represents the standalone component entity. (e.g., `.wag-game-card`)
* **Element**: Parts of the block that perform a sub-function. (e.g., `.wag-game-card__thumbnail`)
* **Modifier**: Flag that defines a variation of the block. (e.g., `.wag-game-card--featured`)

```css
/* BEM Layout Example */
.wag-game-card {
  background: var(--wag-bg-card);
  border-radius: var(--wag-radius-card);
}
.wag-game-card__thumbnail {
  aspect-ratio: 16/9;
}
.wag-game-card--featured {
  border: 3px solid var(--wag-color-primary);
}
```

### Custom Property Usage Rules
* **No Hardcoded Hex Values**: Color values, pixel margins, and transition curves must use the design token properties defined in Section 2.
* **No Direct Inline Styles**: Avoid using `style=""` inside HTML tags. All styles must live in a central CSS file structure.
* **Cascade Ordering**: Files must load in this specific cascade order to avoid unexpected overrides:
  1. `reset.css` (Base browser resets)
  2. `tokens.css` (Variables under `:root`)
  3. `base.css` (Typography presets, global body styling, backgrounds)
  4. `layout.css` (Grids, header, nav, footer, sections)
  5. `components.css` (Buttons, cards, inputs, tabs, accordions)
