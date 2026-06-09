// 2D Game Starter Kit — Parallax Background System
// Extracted from Darius Star: Cyber Coelacanth
// What An Adventure Games — 2026

/**
 * Creates a multi-layer parallax scrolling background.
 * 
 * Usage:
 *   const bg = createParallax([
 *     { color: '#050510', speed: 0 },       // Deep space (static)
 *     { stars: true, density: 100, speed: 0.2 },  // Far stars (slow)
 *     { stars: true, density: 40, speed: 0.5 },    // Mid stars
 *     { stars: true, density: 15, speed: 1.0 },    // Near stars (fast)
 *   ]);
 *   bg.update(dt);
 *   bg.draw(ctx, canvas.width, canvas.height);
 */
function createParallax(layers) {
    const stars = layers.map(layer => {
        if (!layer.stars) return null;
        const arr = [];
        for (let i = 0; i < (layer.density || 50); i++) {
            arr.push({
                x: Math.random() * 800,
                y: Math.random() * 600,
                size: Math.random() * 2 + 0.5,
                brightness: Math.random() * 0.5 + 0.5
            });
        }
        return arr;
    });

    let scrollX = 0;

    return {
        update(dt, speed = 1) {
            scrollX += dt * speed;
        },

        draw(ctx, width, height) {
            layers.forEach((layer, i) => {
                if (layer.color) {
                    ctx.fillStyle = layer.color;
                    ctx.fillRect(0, 0, width, height);
                    return;
                }
                if (stars[i]) {
                    stars[i].forEach(star => {
                        let sx = (star.x - scrollX * layer.speed) % width;
                        if (sx < 0) sx += width;
                        ctx.fillStyle = `rgba(255,255,255,${star.brightness})`;
                        ctx.fillRect(sx, star.y, star.size, star.size);
                    });
                }
            });
        },

        reset() {
            scrollX = 0;
        }
    };
}
