// 2D Game Starter Kit — Game Loop
// Extracted from Darius Star: Cyber Coelacanth
// What An Adventure Games — 2026

/**
 * Creates a game loop with requestAnimationFrame, delta time, and pause support.
 * 
 * Usage:
 *   const loop = createGameLoop({
 *     update: (dt) => { /* update game state */ },
 *     render: (dt) => { /* draw to canvas */ },
 *     canvas: document.getElementById('gameCanvas')
 *   });
 *   loop.start();
 */
function createGameLoop({ update, render, canvas }) {
    let lastTime = 0;
    let running = false;
    let paused = false;
    let rafId = null;

    function tick(timestamp) {
        if (!running) return;

        if (!lastTime) lastTime = timestamp;
        const dt = Math.min((timestamp - lastTime) / 1000, 0.1); // Cap at 100ms to prevent spiral
        lastTime = timestamp;

        if (!paused) {
            update(dt);
            render(dt);
        }

        rafId = requestAnimationFrame(tick);
    }

    return {
        start() {
            if (running) return;
            running = true;
            lastTime = 0;
            rafId = requestAnimationFrame(tick);
        },

        stop() {
            running = false;
            if (rafId) cancelAnimationFrame(rafId);
        },

        pause() { paused = true; },
        resume() { paused = false; },

        get isRunning() { return running; },
        get isPaused() { return paused; },
        get deltaTime() { return lastTime ? (performance.now() - lastTime) / 1000 : 0; },

        // Toggle pause (for P key)
        togglePause() {
            paused = !paused;
            return paused;
        }
    };
}
