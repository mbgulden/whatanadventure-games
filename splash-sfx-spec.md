# Sound Design Specification: Animated Logo Splash Screen

This specification outlines the audio design and musical composition guidelines for the **What An Adventure Games** animated logo splash screen. The audio is designed to play in sync with the 4.5-second CSS animation sequence on `splash.html`.

---

## 1. Keyframe-Aligned Audio Timeline

The table below aligns the visual animation phases with sound effects (SFX) and musical jingle cues.

| Time (Seconds) | CSS Animation State | Audio Event & Jingle Sync | Description & Direction |
| :--- | :--- | :--- | :--- |
| **0.0s** | Splash container loaded (dark background). Compass rose/needle fades in. | **Wind Whoosh (Inception)** | A low, airy wind whoosh fades in to establish a sense of mystery and journey. |
| **0.5s** | Compass needle begins its fast 180-degree spin. | **Whoosh Acceleration** | The whoosh rises in pitch and volume, syncing with the compass spin velocity. |
| **1.5s** | Compass settles. Sparkle particles float out. Logo image fades & rotates in. | **Sparkle Chimes & Jingle Start** | Staggered high-frequency glass/metal chime pings. First chord of G-major acoustic guitar arpeggio. |
| **3.0s** | "GAMES" text slides up with spring bounce. Warm logo glow pulses. | **Reveal Swell Peak & Ocarina** | A warm string synthesizer swell peaks. Cheerful ocarina melody resolves to the root G note. |
| **4.0s** | Animation finishes. Enter button is interactive. Progress bar completes. | **Motif Resolution & Decay** | The ocarina note sustains and the guitar chord decays naturally into ambient silence. |
| **4.5s** | Automatic page redirect to `index.html` starts (or user clicks "Enter"). | **Transition Sweep** | A subtle high-pass white-noise sweep fades out all remaining tails. |

---

## 2. Sound Effects (SFX) Breakdown

### A. Logo Whoosh (0.0s - 1.2s)
* **Description**: A soft, organic wind draft transitioning into a synthetic whoosh.
* **Texture**: Whispering wind, rustling leaves, or a soft whip whoosh. Avoid heavy industrial or mechanical metal sounds.
* **Role**: Represents the start of the adventure and the compass needle catching the wind.

### B. Sparkle Chimes (1.5s - 2.5s)
* **Description**: High-frequency, acoustic chime sounds that trigger in a staggered fashion.
* **Texture**: Single triangle hits, small hand-bell drops, or a light wind-chime flourish.
* **Role**: Mimics the visual expansion of the 6 star sparkles as they pop out around the logo.

### C. Reveal Swell (1.5s - 3.5s)
* **Description**: A warm swell of strings and analog synth pads.
* **Texture**: Soft cellos transitioning to high violins combined with a warm, low-frequency brassy synthesizer note.
* **Role**: Builds tension and grandeur as the logo, title text, and "GAMES" subtitle bounce into position.

---

## 3. Musical Jingle Composition

* **Duration**: 4.0 seconds.
* **Key Signature**: **G Major** (warm, happy, and optimistic color profile).
* **Tempo**: **110 BPM** (brisk, adventurous).
* **Mood**: Whimsical, cozy, inviting, and adventurous.

### Instrumentation
1. **Acoustic Guitar**: Steel-string acoustic guitar playing clean, bright arpeggiated chords (`G - C - G/B - D` progression).
2. **Wooden Ocarina**: Playful lead instrument playing a short, whimsical ascending melody: `E5 -> D5 -> G5` (resolving on a sustained root note).
3. **Glockenspiel / Chime**: Synchronized with the sparkle burst, playing a high `B6` and `D7` to highlight the acoustic guitar's chord changes.

---

## 4. Sourcing & Sound Generation Guidelines

> [!TIP]
> To compile or generate these assets, use the following free or generative resources:

* **Sound Effects (SFX)**:
  * **Freesound.org**: Search terms like "wind whoosh", "sparkle bell", "ambient swell", and "ocarina single note".
  * **ElevenLabs Sound Effects**: Use text prompts such as:
    * `"A soft, magical wind whoosh with high-pitched chimes"`
    * `"A cheerful wooden flute playing a single bright note with reverb"`
* **Musical Jingle**:
  * **Suno AI / Udio AI**: Prompt: `"A short 4-second acoustic logo jingle, G Major, ocarina melody, steel-string acoustic guitar, whimsical adventure theme, high quality, sound effect"`.
  * **Composer Commission**: Hand the notes in Section 3 to a local composer to record live steel-string guitar and wooden flute/ocarina tracks.
