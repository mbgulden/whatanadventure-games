# Game Analytics Integration Plan — What An Adventure Games

**Author:** Ned (autonomous executor)  
**Date:** 2026-06-09  
**Linear Issue:** [GRO-859](https://linear.app/growthwebdev/issue/GRO-859)  
**Status:** Plan — Ready for Implementation  

---

## Design Goals

1. **Privacy-respecting** — No personal data, no cookies, no tracking IDs, no fingerprinting
2. **Lightweight** — Minimal payload, no external SDK dependencies for basic tracking
3. **Actionable** — Tracks metrics that directly inform game design decisions
4. **Self-hosted** — Data stays on our infrastructure

---

## Metrics to Track

### Core Gameplay Metrics

| Metric | Description | Data Type | Priority |
|--------|-------------|-----------|----------|
| `plays` | Total game starts (resetGame calls) | Counter | P1 |
| `sessions` | Unique browser sessions (sessionStorage ID) | Counter | P1 |
| `play_duration` | Time from game start to game end (seconds) | Histogram | P1 |
| `scores` | Final score at game over/victory | Distribution | P1 |
| `boss_defeats` | Number of times boss is killed (gameWon=true) | Counter | P1 |
| `boss_encounters` | Number of times boss spawns | Counter | P2 |
| `deaths` | Number of game over events | Counter | P2 |
| `weapon_level_distribution` | Weapon level at game end | Distribution | P2 |
| `max_weapon_level` | Highest weapon level achieved | Max gauge | P2 |

### Engagement Metrics

| Metric | Description | Data Type | Priority |
|--------|-------------|-----------|----------|
| `return_rate` | Sessions per unique player | Ratio | P2 |
| `avg_session_duration` | Average play time | Aggregate | P2 |
| `powerup_collection_rate` | Powerups collected per session | Distribution | P3 |

---

## Architecture Options

### Option A: Cloudflare Workers Analytics (Recommended)

**Infrastructure:** Cloudflare Worker + KV store

```javascript
// POST to cf-worker endpoint on game events
// Workers Free Tier: 100k requests/day — more than enough for indie games
fetch('https://analytics.whatanadventure.games/event', {
  method: 'POST',
  body: JSON.stringify({
    game: 'darius-star',
    event: 'game_end',
    score: 14300,
    duration_sec: 247,
    weapon_level: 3,
    boss_defeated: true,
    session_id: 's_abc123'  // sessionStorage, not a cookie
  })
});
```

**Pros:** Free tier sufficient, no server maintenance, fast edge delivery, already on CF  
**Cons:** Limited query capabilities on free tier, KV eventually consistent

### Option B: Simple JSON API Endpoint

Self-hosted Flask/FastAPI on homelab server, storing events to SQLite.

**Pros:** Full SQL query capability, no external dependencies, complete data ownership  
**Cons:** Requires server maintenance, SSH tunnel or CF Tunnel for access

### Option C: Cloudflare Pages Functions (Hybrid)

Use CF Pages Functions (serverless) to receive events and write to D1 (SQLite-compatible at edge).

**Pros:** SQL queries, edge-delivered, built into CF Pages, D1 free tier generous  
**Cons:** D1 still in beta, slightly more complex setup

---

## Implementation Plan

### Phase 1: Minimal Viable Analytics (Week 1)

**Choose Option A (CF Workers).** Fastest path to data.

1. Create `analytics.whatanadventure.games` Worker
2. Accept POST events with game name, event type, and numeric data
3. Store to Workers KV with aggregate counters
4. Add event dispatch to Darius Star:
   ```javascript
   // In resetGame(): store session_id in sessionStorage
   // In gameOver/gameWon: send analytics event
   function sendAnalytics(event, data) {
     if (location.hostname === 'localhost') return; // No dev tracking
     fetch('https://analytics.whatanadventure.games/event', {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({game: 'darius-star', event, ...data})
     }).catch(() => {}); // Fire-and-forget, never block the game
   }
   ```
5. Simple dashboard: `GET /dashboard` returning aggregate counters as JSON

### Phase 2: Dashboard & Insights (Week 2)

1. Build lightweight analytics dashboard in whatanadventure-games repo
2. Show: total plays, unique players, boss defeat rate, avg score, playtime distribution
3. Privacy note on dashboard: "No personal data collected. Anonymous gameplay stats only."

### Phase 3: Cross-Game Analytics (When 2nd game launches)

1. Extend analytics to cover all studio titles
2. Compare metrics across games (which genres perform better?)
3. Player cohort analysis (do Darius Star players also try our next game?)

---

## Privacy Implementation

- **No cookies** — Use `sessionStorage` for session ID (cleared on tab close)
- **No IP logging** — Workers accept events but never log IP addresses
- **No fingerprinting** — No canvas fingerprinting, no user agent parsing beyond browser family
- **No personal data** — Score, duration, weapon level — purely gameplay metrics
- **Opt-out** — Respect `navigator.doNotTrack` (check before sending events)
- **Transparency** — Dashboard shows exactly what's tracked, nothing hidden

---

## File Structure

```
whatanadventure-games/
├── analytics/
│   ├── worker.js           # CF Worker: receive/store events
│   ├── dashboard.html      # Simple analytics dashboard
│   └── README.md           # Privacy policy + setup guide
└── darius-star/
    └── index.html          # Add sendAnalytics() + event hooks
```

---

## Dependencies

- **Cloudflare Workers** (Free Tier — 100k req/day)
- **Workers KV** (Free Tier — 1 GB storage)
- **No npm packages needed** for the Worker (vanilla JS with Web Crypto for hashing session IDs)
- **No SDK needed in games** — raw `fetch()` calls

---

## DONE SIGNAL

1. ✅ Plan complete at `docs/analytics-plan.md`
2. ✅ Privacy-first design — no personal data, no cookies, no fingerprinting
3. ✅ Recommended: Option A (CF Workers) — fastest to ship, free tier sufficient
4. ✅ Implementation plan in 3 phases: MVP → Dashboard → Cross-game
5. ✅ Next step: Create Linear issue for Phase 1 implementation

— Ned (autonomous executor, GRO-859)
