# What An Adventure Games — Rebrand Moodboard & Design System

## Implementation Plan

This document details the visual direction and core design system for the **What An Adventure Games** light-theme rebrand. Below is the list of topics and sections covered in this moodboard:

1. **Color Palette**: Extracted directly from brand logo images (`Adventure-Logo-01.jpg` and `Revised-splash-screen.png`), featuring hex codes, color roles, and clean CSS custom properties.
2. **Typography**: Google Fonts selection containing playful, adventurous heading faces and highly legible, friendly body text. Includes a comprehensive type scale from H1 to Captions.
3. **Visual Language**: A concrete system of motifs (trails, maps, paths), texture descriptions, icon definitions, warm illustration styles, and photo guidelines.
4. **Mood References**: Five rich visual concepts (Storybook Adventure, Modern Indie Studio, Retro Nostalgia, Outdoor Expedition, and Cyber-Light Fusion) with functional CSS snippets.
5. **Light Theme Specification**: Clear styling definitions for pages, card states, buttons, dividers, sticky navigation, footers, and a list of premium reference sites.
6. **Design System Modules**: Detailed blueprint definitions (naming, purpose, key style properties, responsive behavior) for all 12 modules, spanning index.html structures and other standard storefront pages.
7. **Animated Logo Splash Screen Concept**: A timed 4.5-second sequence with sound effects, musical jingle orchestration in G Major, and native CSS animation technical notes.

---

## 1. Color Palette

The following color palette has been extracted from the studio's brand logo (`Adventure-Logo-01.jpg` and `Revised-splash-screen.png`). It transitions the site from its previous neon-cyberpunk dark mode to a warm, airy, light-themed outdoor adventure style.

### Swatch Breakdown

| Color Role | HEX Code | Source / Derivation | Description |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | `#FE7916` | Adventure Logo Orange | Vibrant Adventure Orange; energetic and playful focus. |
| **Secondary Brand / Accent** | `#FDC781` | Adventure Logo Peach/Gold | Golden Peach / Amber Accent; warm highlights and secondary button fills. |
| **Airy Brand Accent** | `#C8E3FE` | Splash Screen Sky Blue | Ice Blue Accent; used for background highlight spots and tags. |
| **Base Background** | `#FDFBF7` | Derived from Logo White | Alabaster Off-White; bright, clean base that reduces screen glare. |
| **Warm Background Offset** | `#FAF5EB` | Splash Screen Cream | Soft Warm Cream; trail map aesthetic for section backgrounds and cards. |
| **Dark Body Text** | `#1B1C1E` | Logo Outlines | Ink Black; high-contrast readable dark gray-black for body text. |
| **Slate Secondary Text** | `#3B4141` | Logo Accents | Deep Charcoal; softer contrast for descriptions and captions. |
| **Muted Blue-Gray Text** | `#8E94A0` | Derived from Sky Blue | Slate Gray; used for disabled elements, placeholder text, and subheaders. |
| **Success State** | `#2E7D32` | Custom (Brand Aligned) | Forest Green; friendly, nature-aligned green for success indicators. |
| **Warning State** | `#FFA000` | Custom (Brand Aligned) | Amber Yellow; matches orange hues for warnings. |
| **Error State** | `#D32F2F` | Custom (Brand Aligned) | Crimson Red; high-visibility alert color for errors. |

### CSS Custom Properties

```css
:root {
  /* Brand Colors */
  --wag-color-primary: #FE7916;        /* Vibrant Adventure Orange */
  --wag-color-secondary: #FDC781;      /* Golden Peach / Warm Amber */
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
  --wag-shadow-soft: 0 4px 20px -2px rgba(74, 62, 61, 0.06), 0 2px 8px 0 rgba(74, 62, 61, 0.04);
  --wag-shadow-hover: 0 12px 30px -4px rgba(74, 62, 61, 0.12), 0 4px 12px 0 rgba(74, 62, 61, 0.06);
  --wag-shadow-button: 0 4px 12px rgba(254, 121, 22, 0.2);
  --wag-shadow-button-hover: 0 8px 20px rgba(254, 121, 22, 0.35);

  /* Layout / Radii */
  --wag-radius-card: 16px;
  --wag-radius-btn: 12px;
  --wag-radius-tag: 6px;
  --wag-radius-badge: 20px;
}
```

---

## 2. Typography

The typography features a balanced pairing of a playful, chunky header font and a clean, rounded, highly readable body font to maintain a friendly, family-focused identity.

### Google Fonts Integration

```html
<!-- Include Google Fonts in <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Lilita+One&family=Nunito:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
```

### Font Selection
1. **Heading Display Font**: `Lilita One`, cursive
   - *Characteristics*: Bold, chunky, slightly condensed, playful.
   - *Usage*: Main studio logo text, page titles, Hero headers, button labels.
2. **Subheadings / Secondary Headers**: `Fredoka`, sans-serif
   - *Characteristics*: Rounded, soft corners, adventurous and energetic.
   - *Usage*: Card titles, category headers, navigation tags, and prominent subheaders.
3. **Body / Interface Font**: `Nunito`, sans-serif
   - *Characteristics*: Clean, highly readable geometric sans-serif with rounded terminals.
   - *Usage*: Main paragraph body copy, technical specs, forms, and general interface text.

### Font Size Scale

We use a modular typography scale configured using CSS variables:

```css
:root {
  --wag-font-display: 'Lilita One', 'Fredoka', cursive;
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
}
```

---

## 3. Visual Language

To support the studio philosophy ("We're all about 'the journey'"), the interface incorporates tactile physical world metaphors and hand-drawn warm accents.

```
       ✦ ──── [ THE JOURNEY ELEMENTS ] ──── ✦
       
       ( Compass ) ────── ( Dotted Paths ) ────── ( Hand-Drawn Arrows )
           │                     │                       │
     Direction &            Progression &           Focus & CTA
      Discovery              Wandering               Highlights
```

### 1. "Journey Before Destination" Motif
* **Trail Lines**: Instead of flat borders, use dashed, dotted, or wavy paths (`border-style: dashed;` or custom SVG paths) connecting sections to resemble hiking trails or treasure maps.
* **Adventure Ornaments**: Subtle compass icons, coordinate ticks, hand-drawn vector stars, and directional arrows pointing users down the page.
* **Wandering Layouts**: Break the rigid vertical grid by shifting game cards slightly off-axis or adding organic, overlapping visual nodes.

### 2. Physical Textures
* **Warm Cardstock**: Apply a subtle, light paper grain background or overlay to elements. This gives game cards the tactile feel of an analog board game.
* **Topographic Waves**: Background vectors containing light, repeating contour map lines in pale yellow-orange (`#FAF5EB`) or ice blue (`#EBF3FC`).

### 3. Icon Style
* **Line-Art Focus**: Icons are thin-to-medium line drawings with rounded caps and joins (`stroke-linecap: round; stroke-linejoin: round;`).
* **Friendly Aesthetics**: Avoid hard sharp edges; icons should look warm and hand-crafted, fitting the kid-and-adult theme.

### 4. Illustration Style
* **Storybook Warmth**: Hand-sketched lines, colored pencil textures, or soft watercolor illustrations.
* **Energy Over Cleanliness**: Playful asymmetry and stylized proportions rather than corporate, flat SVG vector minimalism.

### 5. Photography Direction
* **Bright & Outdoor**: High-key, natural outdoor lighting. Warm golden-hour tones, campfires, kids and parents exploring forest trails, or family members playing games together in sunny, cozy rooms.
* **Organic Framing**: Place photos inside organic mask shapes (e.g., custom SVG squiggles or rounded-corner polygon shapes) instead of rigid rectangles.

---

## 4. Mood References

This section presents five distinct design interpretations that align with the brand brief's light-theme instructions. Each mood features a unique feel, paired with a ready-to-use CSS template.

### Mood 1: Storybook Adventure (Warm, Whimsical, Cozy)
* **Visual Feel**: Reads like an interactive fairytale book or classic board game. Heavy focus on cream backgrounds, organic asymmetry, and paper textures.
* **Color Focus**: Off-white, soft wood browns, deep forest green, and muted warm oranges.
* **CSS Snippet**:
  ```css
  .mood-storybook-card {
    background-color: var(--wag-bg-cream);
    border: 3px solid #4A3E3D;
    /* Hand-drawn organic border radius */
    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
    box-shadow: 6px 6px 0px #4A3E3D;
    transition: transform 0.2s ease;
  }
  .mood-storybook-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0px #4A3E3D;
  }
  ```

### Mood 2: Modern Indie Game Studio (Bold, Vibrant, Clean)
* **Visual Feel**: Extremely premium, energetic, and clean. Employs soft shadows, glassmorphism components, and striking bright orange hover states.
* **Color Focus**: Alabaster white backgrounds, high-contrast ink text, and electric orange/sky-blue highlights.
* **CSS Snippet**:
  ```css
  .mood-indie-card {
    background: #FFFFFF;
    border-radius: var(--wag-radius-card);
    box-shadow: var(--wag-shadow-soft);
    border: 1px solid rgba(27, 28, 30, 0.04);
    transition: var(--wag-transition-spring);
  }
  .mood-indie-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--wag-shadow-hover);
    border-color: var(--wag-color-primary);
  }
  ```

### Mood 3: Retro Game Nostalgia (Pixel-Chunky, Grid-Aligned)
* **Visual Feel**: A charming blend of 16-bit arcade soul with a modern light-mode website layout. Features dotted dividers, grid lines, and thick blocky borders.
* **Color Focus**: Cream white backgrounds, stark black pixel accents, and bright saturated brand highlights.
* **CSS Snippet**:
  ```css
  .mood-retro-button {
    font-family: var(--wag-font-display);
    background-color: var(--wag-color-primary);
    color: #FFFFFF;
    border: 4px solid #1B1C1E;
    box-shadow: 4px 4px 0px #1B1C1E;
    image-rendering: pixelated;
    cursor: pointer;
    transition: all 0.1s steps(2);
  }
  .mood-retro-button:hover {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px #1B1C1E;
    background-color: var(--wag-color-secondary);
  }
  ```

### Mood 4: Outdoor Expedition (Tactile Map, Field Notebook)
* **Visual Feel**: Looks like a physical adventurer's journal. Uses topographic patterns, compass pointers, and lined grid systems.
* **Color Focus**: Pale sand backgrounds, slate gray text, warm trail orange, and earth-toned labels.
* **CSS Snippet**:
  ```css
  .mood-expedition-section {
    background-color: var(--wag-bg-main);
    background-image: 
      radial-gradient(var(--wag-border-medium) 1px, transparent 1px),
      linear-gradient(to right, var(--wag-bg-cream) 1px, transparent 1px);
    background-size: 20px 20px;
    border-left: 4px solid var(--wag-color-primary);
    padding: 2.5rem;
  }
  ```

### Mood 5: Cyber-Light Fusion (Clean, Soft Glow, High Contrast)
* **Visual Feel**: A bright, neon-influenced theme that preserves high-energy cyber motifs (scanlines, soft glow, cyan/magenta accents) but maps them onto a clean off-white background.
* **Color Focus**: Crisp white base, neon orange/blue highlights, light scanline overlays.
* **CSS Snippet**:
  ```css
  .mood-cyber-light {
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid var(--wag-color-accent);
    /* Soft colored glow instead of dark shadow */
    box-shadow: 0 0 15px rgba(200, 227, 254, 0.6);
    backdrop-filter: blur(5px);
  }
  .mood-cyber-light:hover {
    border-color: var(--wag-color-primary);
    box-shadow: 0 0 20px rgba(254, 121, 22, 0.25);
  }
  ```

---

## 5. Light Theme Specification

### 1. Page Backgrounds
The overall website body is set to a soft off-white/cream texture (`--wag-bg-main`), incorporating a subtle SVG topographic pattern to establish the explorer theme.
```css
body {
  background-color: var(--wag-bg-main);
  color: var(--wag-text-main);
  font-family: var(--wag-font-body);
  /* Topographic map contour lines overlay (subtle opacity 0.03) */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 50 Q 25 35, 50 50 T 100 50' fill='none' stroke='%231B1C1E' stroke-width='0.5' stroke-opacity='0.03'/%3E%3Cpath d='M0 70 Q 30 85, 60 70 T 100 70' fill='none' stroke='%231B1C1E' stroke-width='0.5' stroke-opacity='0.03'/%3E%3C/svg%3E");
}
```

### 2. Cards & Content Containers
Cards pop forward from the background cream by using pure white fill, rounded corners, and deep but soft, warm shadows:
```css
.wag-card {
  background-color: var(--wag-bg-card);
  border-radius: var(--wag-radius-card);
  box-shadow: var(--wag-shadow-soft);
  border: 1px solid var(--wag-border-light);
  padding: 2rem;
  transition: var(--wag-transition-spring);
}
.wag-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--wag-shadow-hover);
  border-color: var(--wag-color-primary);
}
```

### 3. Interactive Buttons
Buttons are rounded, bold, and reactive. They lift and expand their shadow on hover:
```css
.wag-btn {
  font-family: var(--wag-font-display);
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
  border-radius: var(--wag-radius-btn);
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s, background-color 0.2s;
}
.wag-btn--primary {
  background-color: var(--wag-color-primary);
  color: #FFFFFF;
  box-shadow: var(--wag-shadow-button);
}
.wag-btn--primary:hover {
  background-color: #E26810;
  transform: translateY(-3px);
  box-shadow: var(--wag-shadow-button-hover);
}
.wag-btn--secondary {
  background-color: var(--wag-bg-cream);
  color: var(--wag-text-main);
  border-color: var(--wag-border-medium);
}
.wag-btn--secondary:hover {
  background-color: var(--wag-bg-gray);
  transform: translateY(-3px);
}
```

### 4. Dividers
Sections are separated by dotted "trail" dividers to break the standard linear line style:
```css
.wag-divider {
  border: none;
  height: 2px;
  background-image: linear-gradient(to right, transparent, var(--wag-color-primary) 50%, transparent);
  margin: 4rem auto;
  width: 60%;
  position: relative;
}
.wag-divider::after {
  content: '✦';
  color: var(--wag-color-primary);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--wag-bg-main);
  padding: 0 10px;
}
```

### 5. Navigation Bar
A clean, sticky bar using high-contrast fonts, rounded hover pills, and transparent glassmorphism:
```css
.wag-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(253, 251, 247, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--wag-border-light);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wag-nav__link {
  font-family: var(--wag-font-header);
  color: var(--wag-text-secondary);
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: var(--wag-radius-tag);
  transition: all 0.2s ease;
}
.wag-nav__link:hover {
  color: var(--wag-color-primary);
  background-color: var(--wag-bg-cream);
}
```

### 6. Footer
A solid, warm footer anchor using a slightly darker cream background:
```css
.wag-footer {
  background-color: var(--wag-bg-cream);
  border-top: 1px solid var(--wag-border-medium);
  padding: 4rem 2rem 2rem;
  color: var(--wag-text-secondary);
  text-align: center;
}
```

### Best-in-Class Light Theme Reference Studios
1. **Playdate by Panic** (*play.date*): Exceptional use of bright primary yellow/orange, bold typography, tactile illustrations, and rounded card containers.
2. **Nintendo Kid's Club** (*play.nintendo.com*): Bold, colorful, kid-friendly card designs, bright gradients, and asymmetric adventure layouts.
3. **Double Fine Productions** (*doublefine.com*): Cohesive warm, quirky illustrations, hand-drawn site headers, and deep adventure motif.
4. **Toca Boca** (*tocaboca.com*): Clean white and cream backgrounds combined with massive, colorful characters, bold round fonts, and dynamic icons.

---

## 6. Design System — Pre-Built Modules

This section specifies the blueprint configuration for the studio's module elements.

```
+---------------------------------------------------------------------------------+
|                               Hero Banner                                       |
+---------------------------------------------------------------------------------+
|               |                               |                                 |
|   Game Card   |   Game Card                   |   Studio Intro                  |
|               |                               |                                 |
+---------------------------------------------------------------------------------+
|   Testimonial |   Blog Log Card               |   FAQ Accordion                 |
+---------------------------------------------------------------------------------+
```

### 1. Hero Banner
* **Purpose**: Sets the adventurous studio tone and highlights the flagship game with dual-CTAs.
* **CSS Naming Class**: `.wag-hero`, `.wag-hero__content`, `.wag-hero__title`, `.wag-hero__tagline`, `.wag-hero__actions`.
* **Key Style Properties**:
  - `min-height: 70vh;`
  - `display: grid; grid-template-columns: 1fr 1fr;` (for split text and artwork layout)
  - `background: radial-gradient(circle at top right, var(--wag-color-accent) 0%, transparent 60%);`
* **Responsive Behavior**: Splits into single column vertically on screen width under `768px`. The artwork slides above the content, and font size scales down (`h1` drops from `3.5rem` to `2.2rem`).

### 2. Game Card
* **Purpose**: Dynamic cards in the grid displaying a game's key art, category tags, description, and play buttons.
* **CSS Naming Class**: `.wag-game-card`, `.wag-game-card__thumbnail`, `.wag-game-card__body`, `.wag-game-card__genre-badge`, `.wag-game-card__platform-icon`.
* **Key Style Properties**:
  - `display: flex; flex-direction: column; height: 100%;`
  - `border-radius: var(--wag-radius-card); overflow: hidden;`
  - `.wag-game-card__thumbnail { aspect-ratio: 16/9; object-fit: cover; }`
* **Responsive Behavior**: Image scales cleanly. Title font adjusts dynamically. Inner buttons stretch to full card width on screens below `480px`.

### 3. Game Detail Section
* **Purpose**: Showcase the media and full profile of a selected game (includes gallery and specifications).
* **CSS Naming Class**: `.wag-game-detail`, `.wag-game-detail__main`, `.wag-game-detail__sidebar`, `.wag-game-detail__gallery-grid`, `.wag-game-detail__spec-table`.
* **Key Style Properties**:
  - `display: grid; grid-template-columns: 2fr 1fr; gap: 3rem;`
  - `.wag-game-detail__spec-table { width: 100%; border-collapse: collapse; }`
  - `.wag-game-detail__spec-table td { padding: 0.75rem; border-bottom: 1px solid var(--wag-border-light); }`
* **Responsive Behavior**: Collapses to single column (`1fr`) on viewports under `992px`, placing the specs sidebar beneath the gallery.

### 4. Studio Intro / About
* **Purpose**: Highlights the two-person team, development philosophy, and the step-by-step pipeline.
* **CSS Naming Class**: `.wag-about`, `.wag-about__philosophy`, `.wag-about__pipeline-flow`, `.wag-about__pipeline-step`.
* **Key Style Properties**:
  - `.wag-about__pipeline-flow { display: flex; justify-content: space-around; padding: 2rem 0; }`
  - `.wag-about__pipeline-step { position: relative; text-align: center; }`
  - `border-bottom: 2px dashed var(--wag-color-primary);` (acting as path trail lines)
* **Responsive Behavior**: Pipeline flow converts from horizontal layout to vertical timeline grid on viewports below `768px`.

### 5. Game Grid
* **Purpose**: Grid wrapper containing all game cards.
* **CSS Naming Class**: `.wag-game-grid`.
* **Key Style Properties**:
  - `display: grid;`
  - `grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));`
  - `gap: 2.5rem;`
* **Responsive Behavior**: Columns drop to `1fr` automatically on screens under `600px` without manual media queries.

### 6. Feature Highlight
* **Purpose**: Highlights key features or tools (e.g., HTML5 Canvas, Web Audio, cloud deployments) using icons.
* **CSS Naming Class**: `.wag-feature-highlight`, `.wag-feature-highlight__grid`, `.wag-feature-highlight__item`, `.wag-feature-highlight__icon-box`.
* **Key Style Properties**:
  - `.wag-feature-highlight__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }`
  - `.wag-feature-highlight__icon-box { width: 64px; height: 64px; border-radius: 50%; background-color: var(--wag-color-accent); }`
* **Responsive Behavior**: Changes to two columns on tablets (`768px`), and a single vertical column on mobile (`576px`).

### 7. Newsletter Signup
* **Purpose**: Inline sign-up form for updates, newsletters, and dev logs.
* **CSS Naming Class**: `.wag-newsletter`, `.wag-newsletter__form`, `.wag-newsletter__input`, `.wag-newsletter__btn`.
* **Key Style Properties**:
  - `background-color: var(--wag-bg-cream); border-radius: var(--wag-radius-card);`
  - `display: flex; gap: 1rem; align-items: center; justify-content: center;`
* **Responsive Behavior**: Converts input and button to a full-width vertical stack on viewports below `576px`.

### 8. Testimonial / Review Card
* **Purpose**: Displays customer quotes, player ratings, and game reviewer highlights.
* **CSS Naming Class**: `.wag-testimonial`, `.wag-testimonial__quote`, `.wag-testimonial__reviewer`, `.wag-testimonial__avatar`.
* **Key Style Properties**:
  - `border-left: 4px solid var(--wag-color-primary);`
  - `.wag-testimonial__avatar { width: 48px; height: 48px; border-radius: 50%; }`
  - `font-style: italic;`
* **Responsive Behavior**: Font size reduces slightly on small screens to maintain layout balance.

### 9. Call-to-Action (CTA) Banner
* **Purpose**: Direct full-width block to capture active players.
* **CSS Naming Class**: `.wag-cta-banner`, `.wag-cta-banner__container`, `.wag-cta-banner__title`, `.wag-cta-banner__actions`.
* **Key Style Properties**:
  - `background-color: var(--wag-color-primary); color: #FFFFFF;`
  - `border-radius: var(--wag-radius-card); padding: 4rem 2rem; text-align: center;`
  - `display: flex; flex-direction: column; gap: 1.5rem;`
* **Responsive Behavior**: Shrinks vertical padding. Buttons wrap from row to column on mobile viewports.

### 10. Blog / Dev Log Card
* **Purpose**: Lists studio news, log updates, and post-mortems.
* **CSS Naming Class**: `.wag-dev-log-card`, `.wag-dev-log-card__meta`, `.wag-dev-log-card__title`, `.wag-dev-log-card__preview`.
* **Key Style Properties**:
  - `.wag-dev-log-card__meta { font-size: var(--wag-fs-caption); color: var(--wag-text-muted); }`
  - `border-bottom: 1px solid var(--wag-border-light); padding-bottom: 1.5rem;`
* **Responsive Behavior**: Simplifies details (meta elements drop side-by-side) and shifts image thumbnails to full width.

### 11. FAQ Accordion
* **Purpose**: Dynamic lists answering common questions about gameplay, development tools, and licenses.
* **CSS Naming Class**: `.wag-faq`, `.wag-faq__item`, `.wag-faq__trigger`, `.wag-faq__panel`.
* **Key Style Properties**:
  - `.wag-faq__trigger { width: 100%; display: flex; justify-content: space-between; cursor: pointer; }`
  - `.wag-faq__panel { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; }`
* **Responsive Behavior**: Active touch-targets are kept at a minimum of `48px` to support fingers on mobile screens.

### 12. Stats Counter
* **Purpose**: Showcases game counts, player milestones, and high scores.
* **CSS Naming Class**: `.wag-stats`, `.wag-stats__grid`, `.wag-stats__num`, `.wag-stats__desc`.
* **Key Style Properties**:
  - `.wag-stats__grid { display: flex; justify-content: space-around; gap: 1.5rem; }`
  - `.wag-stats__num { font-family: var(--wag-font-display); font-size: 3rem; color: var(--wag-color-primary); }`
* **Responsive Behavior**: Flex-row wraps to double-stacked grid (`2x2`) on tablets and drops to single vertical column on mobile.

---

## 7. Animated Logo Splash Screen Concept

```
   (0.0s)             (1.2s)                   (2.2s)                 (3.5s)          (4.5s)
     │                  │                        │                      │               │
  [ Fade In ] ──> [ Sparkle Pop ] ──> [ Logo Text Slide ] ──> [ "GAMES" Reveal ] ──> [ Fade Out ]
  Compass Icon      Vector Stars         "WHAT AN ADVENTURE"     Spring Animation     To Site
```

### 1. Animation Sequence
* **Phase 1: The compass needle spin (0.0s - 1.2s)**: The screen starts with a pure warm cream fill (`#FAF5EB`). A minimal hand-drawn compass rose/needle fades in at the center, spinning 180 degrees into place while scaling up from `0.7` to `1.0`.
* **Phase 2: The sparkle burst (1.2s - 2.2s)**: 4 small pixelated/hand-drawn stars pop out around the compass. The text `"WHAT AN ADVENTURE"` slides out letter-by-letter horizontally from the center.
* **Phase 3: The title drop (2.2s - 3.5s)**: The word `"GAMES"` slides up from underneath using a bouncy spring transition. The entire logo combination glows with a warm golden peach drop-shadow.
* **Phase 4: Fade-out transition (3.5s - 4.5s)**: The splash container smoothly fades out to reveal the main landing page.

### 2. Sound Effects (SFX)
* **Wind Whoosh**: A soft, organic wind draft sound (representing the start of a journey) plays during the initial compass spin.
* **Sparkle Ping**: A high-frequency, clean acoustic chime sound (similar to a glass triangle or wind chime) triggers exactly at `1.2s` as the stars pop out.

### 3. Musical Jingle
* **Duration**: 4.0 seconds.
* **Key**: G Major (gives a bright, happy, acoustic, and warm color).
* **Instrumentation**: Acoustic steel-string guitar, wooden ocarina, and a glockenspiel.
* **Orchestration**:
  - *Second 0.0 - 1.2*: Gentle ascending acoustic guitar arpeggio: `G - B - D - G` (vamping upward).
  - *Second 1.2*: Glockenspiel chimes play a high `B` and `D` note synchronously with the sparkle burst.
  - *Second 1.2 - 3.5*: The ocarina enters, playing a cheerful, whimsical phrase: `E - D - G` (resolving on a warm, sustained root note).
  - *Second 3.5 - 4.0*: The guitar chords ring out and decay naturally into the silence as the website interface appears.

### 4. Technical CSS Implementation Notes
* The splash container is fixed on top of all components (`z-index: 9999`) and removed from layout flows once finished.
* Use `will-change` on animated attributes to maintain hardware acceleration and steady `60 FPS` rendering.
* The wrapper class list is animated as follows:

```css
/* Splash Screen Animation Keyframes */
.wag-splash {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--wag-bg-cream);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: all;
  transition: opacity 0.8s ease;
}

.wag-splash--hidden {
  opacity: 0;
  pointer-events: none;
}

.wag-splash__compass {
  animation: compassIntro 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.wag-splash__title {
  font-family: var(--wag-font-display);
  font-size: var(--wag-fs-h1);
  color: var(--wag-text-main);
  opacity: 0;
  transform: translateY(20px);
  animation: titleReveal 1.0s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.2s forwards;
}

.wag-splash__sparkle {
  transform: scale(0);
  animation: sparklePop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.5) 1.2s forwards;
}

@keyframes compassIntro {
  0% {
    transform: scale(0.6) rotate(-180deg);
    opacity: 0;
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

@keyframes titleReveal {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes sparklePop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}
```
