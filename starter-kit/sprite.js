// 2D Game Starter Kit — Sprite Loading & Animation
// Extracted from Darius Star: Cyber Coelacanth
// What An Adventure Games — 2026

/**
 * Load a sprite sheet image and define animation frames.
 * 
 * Usage:
 *   const sprite = await loadSprite('/assets/player.png', {
 *     frameWidth: 32, frameHeight: 32,
 *     animations: {
 *       idle: { row: 0, frames: 4, fps: 8 },
 *       run:  { row: 1, frames: 6, fps: 12 }
 *     }
 *   });
 *   sprite.play('idle');
 *   sprite.update(dt);
 *   sprite.draw(ctx, x, y);
 */
async function loadSprite(src, { frameWidth, frameHeight, animations = {} } = {}) {
    const img = new Image();
    img.src = src;
    await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
    });

    const cols = Math.floor(img.width / frameWidth);
    const rows = Math.floor(img.height / frameHeight);

    return {
        img,
        frameWidth, frameHeight,
        cols, rows,
        animations,
        currentAnim: null,
        currentFrame: 0,
        frameTimer: 0,

        play(name) {
            if (this.animations[name] && this.currentAnim !== name) {
                this.currentAnim = name;
                this.currentFrame = 0;
                this.frameTimer = 0;
            }
        },

        update(dt) {
            if (!this.currentAnim) return;
            const anim = this.animations[this.currentAnim];
            if (!anim) return;

            this.frameTimer += dt;
            const frameDuration = 1 / anim.fps;

            while (this.frameTimer >= frameDuration) {
                this.frameTimer -= frameDuration;
                this.currentFrame++;
                if (this.currentFrame >= anim.frames) {
                    this.currentFrame = 0; // Loop
                }
            }
        },

        draw(ctx, x, y, scale = 1) {
            if (!this.currentAnim) return;
            const anim = this.animations[this.currentAnim];
            const col = (this.currentFrame % this.cols);
            const row = anim.row;

            ctx.drawImage(
                this.img,
                col * this.frameWidth, row * this.frameHeight,
                this.frameWidth, this.frameHeight,
                x, y,
                this.frameWidth * scale, this.frameHeight * scale
            );
        },

        // Draw a specific frame (no animation)
        drawFrame(ctx, x, y, frameIndex, rowIndex = 0, scale = 1) {
            const col = frameIndex % this.cols;
            ctx.drawImage(
                this.img,
                col * this.frameWidth, rowIndex * this.frameHeight,
                this.frameWidth, this.frameHeight,
                x, y,
                this.frameWidth * scale, this.frameHeight * scale
            );
        }
    };
}
