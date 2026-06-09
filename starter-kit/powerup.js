// 2D Game Starter Kit — Power-Up System
// Extracted from Darius Star: Cyber Coelacanth
// What An Adventure Games — 2026

/**
 * Create a power-up manager.
 * Supports: weapon upgrades, spread shot, rapid fire, shield boost.
 * 
 * Usage:
 *   const powerups = createPowerUpSystem(player, canvas);
 *   powerups.spawn(x, y, 'weaponUp');
 *   powerups.update(dt);
 *   powerups.draw(ctx);
 */
function createPowerUpSystem(player, canvas) {
    const active = [];
    const types = {
        weaponUp:   { color: '#ffff00', label: 'W', effect: () => { player.weaponLevel = Math.min(player.weaponLevel + 1, 4); } },
        spreadShot: { color: '#00ffff', label: 'S', effect: () => { player.spreadShot = true; } },
        rapidFire:  { color: '#ff8800', label: 'R', effect: () => { player.rapidFire = true; setTimeout(() => { player.rapidFire = false; }, 10000); } },
        shield:     { color: '#00ff00', label: '+', effect: () => { player.shield = Math.min(player.shield + 25, 100); } },
        health:     { color: '#ff0055', label: '♥', effect: () => { player.health = Math.min(player.health + 1, player.maxHealth); } },
    };

    return {
        types,

        spawn(x, y, type) {
            if (!types[type]) return;
            active.push({
                x, y,
                width: 16, height: 16,
                type,
                color: types[type].color,
                label: types[type].label,
                timer: 15, // Seconds before it disappears
                pulse: 0
            });
        },

        update(dt) {
            for (let i = active.length - 1; i >= 0; i--) {
                const p = active[i];
                p.timer -= dt;
                p.pulse += dt * 4;
                p.x -= 60 * dt; // Scroll left

                // Check collision with player
                if (aabbCollision(player, p)) {
                    types[p.type].effect();
                    active.splice(i, 1);
                    return 'collected';
                }

                // Remove if off-screen or expired
                if (p.timer <= 0 || p.x + p.width < 0) {
                    active.splice(i, 1);
                }
            }
        },

        draw(ctx) {
            active.forEach(p => {
                const pulseScale = 1 + Math.sin(p.pulse) * 0.15;
                ctx.save();
                ctx.translate(p.x + p.width / 2, p.y + p.height / 2);
                ctx.scale(pulseScale, pulseScale);

                // Glow
                ctx.fillStyle = p.color;
                ctx.globalAlpha = 0.3;
                ctx.beginPath();
                ctx.arc(0, 0, 14, 0, Math.PI * 2);
                ctx.fill();

                // Body
                ctx.globalAlpha = 1;
                ctx.fillStyle = p.color;
                ctx.fillRect(-8, -8, 16, 16);
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 1;
                ctx.strokeRect(-8, -8, 16, 16);

                // Label
                ctx.fillStyle = '#000';
                ctx.font = 'bold 10px monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(p.label, 0, 1);

                ctx.restore();
            });
        },

        get activeCount() { return active.length; },
        clear() { active.length = 0; }
    };
}
