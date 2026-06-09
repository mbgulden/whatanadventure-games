// 2D Game Starter Kit — Web Audio Synthesis Toolkit
// Extracted from Darius Star: Cyber Coelacanth
// What An Adventure Games — 2026

/**
 * Web Audio synthesis — no external audio files needed.
 * 
 * Usage:
 *   const audio = createAudioSystem();
 *   audio.playLaser();    // Pew!
 *   audio.playExplosion(); // Boom!
 *   audio.startMusic();    // Procedural background music
 */
function createAudioSystem() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    function playTone(freq, duration, type = 'square', volume = 0.1) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
    }

    function playNoise(duration, volume = 0.08) {
        const bufferSize = ctx.sampleRate * duration;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        const source = ctx.createBufferSource();
        const gain = ctx.createGain();
        source.buffer = buffer;
        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        source.connect(gain);
        gain.connect(ctx.destination);
        source.start();
    }

    return {
        ctx,

        // Weapon sounds
        playLaser() { playTone(880, 0.08, 'square', 0.06); },
        playRapidFire() { playTone(1200, 0.05, 'square', 0.04); },
        playSpreadShot() { playTone(660, 0.06, 'sawtooth', 0.05); },

        // Impact sounds
        playHit() { playTone(200, 0.1, 'square', 0.08); playNoise(0.05, 0.04); },
        playExplosion() { playTone(80, 0.3, 'sawtooth', 0.15); playNoise(0.2, 0.1); },
        playBossExplosion() { playTone(40, 0.5, 'sawtooth', 0.2); playNoise(0.4, 0.15); },

        // UI sounds
        playPowerUp() { playTone(440, 0.1, 'sine', 0.08); setTimeout(() => playTone(660, 0.1, 'sine', 0.08), 100); setTimeout(() => playTone(880, 0.15, 'sine', 0.08), 200); },
        playGameOver() { playTone(440, 0.3, 'sine', 0.1); setTimeout(() => playTone(330, 0.3, 'sine', 0.1), 300); setTimeout(() => playTone(220, 0.5, 'sine', 0.1), 600); },
        playVictory() { playTone(523, 0.15, 'sine', 0.08); setTimeout(() => playTone(659, 0.15, 'sine', 0.08), 150); setTimeout(() => playTone(784, 0.15, 'sine', 0.08), 300); setTimeout(() => playTone(1047, 0.3, 'sine', 0.1), 450); },

        // Raw tone for custom use
        playTone,
        playNoise,

        // Resume audio context (must be called from user gesture)
        resume() {
            if (ctx.state === 'suspended') ctx.resume();
        }
    };
}
