// 2D Game Starter Kit — Particle Effects System
// Extracted from Darius Star: Cyber Coelacanth
// What An Adventure Games — 2026

/**
 * Create a particle emitter for explosions, trails, and effects.
 * 
 * Usage:
 *   const particles = createParticleSystem();
 *   particles.emit(x, y, { count: 20, color: '#ff8800', speed: 150, life: 0.5 });
 *   particles.update(dt);
 *   particles.draw(ctx);
 */
function createParticleSystem() {
    const particles = [];

    return {
        /**
         * Emit a burst of particles.
         * Options: count, color, speed, life, size, spread (angle), gravity
         */
        emit(x, y, opts = {}) {
            const {
                count = 10,
                color = '#ffffff',
                speed = 100,
                life = 0.5,
                size = 3,
                spread = Math.PI * 2, // Default: omnidirectional
                gravity = 0
            } = opts;

            for (let i = 0; i < count; i++) {
                const angle = Math.random() * spread - spread / 2;
                particles.push({
                    x, y,
                    vx: Math.cos(angle) * (speed * (0.5 + Math.random() * 0.5)),
                    vy: Math.sin(angle) * (speed * (0.5 + Math.random() * 0.5)),
                    life: life * (0.5 + Math.random() * 0.5),
                    maxLife: life,
                    size: size * (0.5 + Math.random()),
                    color,
                    gravity
                });
            }
        },

        /** Emit a directional spray (e.g., engine exhaust) */
        emitDirectional(x, y, angle, opts = {}) {
            const {
                count = 10,
                color = '#ff8800',
                speed = 80,
                life = 0.3,
                size = 2,
                cone = Math.PI / 4
            } = opts;

            for (let i = 0; i < count; i++) {
                const a = angle + (Math.random() * cone - cone / 2);
                particles.push({
                    x, y,
                    vx: Math.cos(a) * (speed * (0.3 + Math.random() * 0.7)),
                    vy: Math.sin(a) * (speed * (0.3 + Math.random() * 0.7)),
                    life: life * (0.5 + Math.random() * 0.5),
                    maxLife: life,
                    size: size * (0.5 + Math.random()),
                    color,
                    gravity: 0
                });
            }
        },

        update(dt) {
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.life -= dt;
                if (p.life <= 0) {
                    particles.splice(i, 1);
                    continue;
                }
                p.x += p.vx * dt;
                p.y += p.vy * dt;
                p.vy += p.gravity * dt;
            }
        },

        draw(ctx) {
            particles.forEach(p => {
                const alpha = p.life / p.maxLife;
                ctx.fillStyle = p.color;
                ctx.globalAlpha = alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.globalAlpha = 1;
        },

        get count() { return particles.length; },
        clear() { particles.length = 0; }
    };
}
