# 2D Game Starter Kit — What An Adventure Games

A reusable HTML5 Canvas game starter kit extracted from **Darius Star: Cyber Coelacanth**.

## Quick Start

```bash
# Serve locally
python3 -m http.server 8000
# Open http://localhost:8000/starter-kit/
```

Or just open `index.html` in a browser.

## Modules

| File | Description | Key Functions |
|------|-------------|---------------|
| `game-loop.js` | requestAnimationFrame loop with delta time + pause | `createGameLoop({ update, render, canvas })` |
| `sprite.js` | Sprite sheet loading + frame-based animation | `loadSprite(src, config)` |
| `collision.js` | AABB, circle, point collision + math utils | `aabbCollision()`, `circleCollision()`, `distance()`, `lerp()` |
| `audio.js` | Web Audio API synthesis — no audio files needed | `createAudioSystem()` — lasers, explosions, powerups |
| `parallax.js` | Multi-layer starfield parallax backgrounds | `createParallax(layers)` |
| `powerup.js` | Collectible power-up spawning + effects | `createPowerUpSystem(player, canvas)` |
| `particles.js` | Particle emitter for explosions, trails, VFX | `createParticleSystem()` |
| `index.html` | Template game with all systems wired up | Pause (P), controls, HUD, game over screen |

## Adding to Your Game

```html
<script src="collision.js"></script>
<script src="game-loop.js"></script>
<script src="sprite.js"></script>
<script src="audio.js"></script>
<script src="parallax.js"></script>
<script src="powerup.js"></script>
<script src="particles.js"></script>
```

Each module is vanilla JavaScript — no build step, no dependencies.

## Conventions

- **Coordinate system:** Top-left origin, x right, y down
- **Delta time:** Seconds (not milliseconds). Always multiply speeds by `dt`.
- **Canvas size:** Default 800×450 (16:9). Responsive scaling via CSS `max-width/max-height`.
- **Pixel art:** `image-rendering: pixelated` on canvas for crisp scaling.
- **Audio:** Web Audio API synthesis. No audio files. Call `audio.resume()` from a user gesture.

## What An Adventure Games Branding

All starter kit games include the studio credit line. Customize:
- `<title>` tag
- `<h1>` game title
- Game-specific logic in the `<script>` block

## License

MIT — use freely for your own games.
