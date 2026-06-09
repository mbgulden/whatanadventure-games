// 2D Game Starter Kit — Collision Detection Utilities
// Extracted from Darius Star: Cyber Coelacanth
// What An Adventure Games — 2026

/**
 * Axis-Aligned Bounding Box collision (rectangles).
 * Returns true if two rectangles overlap.
 */
function aabbCollision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
}

/**
 * Circle-circle collision.
 * Returns true if distance between centers < sum of radii.
 */
function circleCollision(c1, c2) {
    const dx = c1.x - c2.x;
    const dy = c1.y - c2.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    return dist < (c1.radius + c2.radius);
}

/**
 * Point-in-rectangle test.
 */
function pointInRect(px, py, rect) {
    return px >= rect.x && px <= rect.x + rect.width &&
           py >= rect.y && py <= rect.y + rect.height;
}

/**
 * Get the distance between two points.
 */
function distance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Get the angle (in radians) from point A to point B.
 */
function angleTo(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
}

/**
 * Normalize a vector to length 1.
 */
function normalize(x, y) {
    const len = Math.sqrt(x * x + y * y);
    return len ? { x: x / len, y: y / len } : { x: 0, y: 0 };
}

/**
 * Lerp (linear interpolation).
 */
function lerp(a, b, t) {
    return a + (b - a) * t;
}

/**
 * Clamp a value between min and max.
 */
function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
}

/**
 * Random integer in range [min, max] (inclusive).
 */
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Random float in range [min, max).
 */
function randFloat(min, max) {
    return Math.random() * (max - min) + min;
}
