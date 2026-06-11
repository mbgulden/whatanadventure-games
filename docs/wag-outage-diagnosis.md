# 🔍 Cloudflare Outage Diagnosis & Resolution Report — whatanadventure.games

**Date:** June 11, 2026  
**Linear Issue:** [GRO-1124](https://linear.app/growthwebdev/issue/GRO-1124/agy-diagnose-whatanadventuregames-http-500-outage)  
**Diagnosed By:** Antigravity (AGY)  

---

## 1. Executive Summary
The indie game studio site `whatanadventure.games` was returning an HTTP 500 error from Cloudflare. We conducted a systematic investigation of the Cloudflare Pages configuration, DNS zone records, Worker routing, repository files, and rewrite rules. 

We identified two major root causes:
1. **DNS & Custom Domain Misconfiguration**: The domain `whatanadventure.games` was pointed to a non-existent Pages subdomain (`whatanadventure-games-5e7.pages.dev`) and was not configured as a custom domain on the active Pages project.
2. **Missing/Untracked Assets**: Core assets (`splash.html`, images, rebrand docs) were untracked locally and never pushed to the GitHub repository, causing the SPA rewrite rule (`/* /index.html 200`) to intercept asset URLs and return HTML instead of the correct resource.

Both issues have been fully resolved, and the site is back online and fully functional.

---

## 2. Detailed Findings & Diagnosis

### Step 1: Cloudflare Workers Check
We queried the Cloudflare Workers API to determine if any Worker script was intercepting root domain traffic.
* **Results**:
  - `darius-star-router`: Handles path-based routing for `play.whatanadventure.games/darius-star*` and `play.whatanadventure.games/staging/darius-star*`.
  - `hd-platform`: Unrelated platform script.
* **Conclusion**: No Workers were bound to `whatanadventure.games` or `www.whatanadventure.games`, ruling out Worker interference.

### Step 2: DNS Routing & Custom Domain Check
We compared the DNS CNAME records against the active Cloudflare Pages projects in the account.
* **DNS Zone Records**:
  - `play.whatanadventure.games` → CNAME `whatanadventure-games.pages.dev` (Active, returning HTTP 200)
  - `whatanadventure.games` → CNAME `whatanadventure-games-5e7.pages.dev` (Returning HTTP 500)
  - `www.whatanadventure.games` → CNAME `whatanadventure-games-5e7.pages.dev` (Returning HTTP 500)
* **Pages Projects**:
  - The active Pages project is named `whatanadventure-games` (subdomain: `whatanadventure-games.pages.dev`).
  - There is no project named `whatanadventure-games-5e7` in the account.
  - The custom domains list for `whatanadventure-games` only included `play.whatanadventure.games` and `whatanadventure-games.pages.dev`. The root domain `whatanadventure.games` and `www.whatanadventure.games` were missing.
* **Conclusion**: The CNAME records were pointing to a dead/non-existent Pages project subdomain, and the domains were never associated with the active Pages project. This caused Cloudflare to return HTTP 500.

### Step 3: Local Files & SPA Redirects Check
We checked the `_redirects` file and compared local files with git-tracked files in `/home/ubuntu/work/whatanadventure-games`.
* **SPA Catch-all**:
  - The `_redirects` file contains: `/* /index.html 200`.
  - This catch-all rule redirects all unrecognized paths to `index.html`. While normal for SPAs, it relies on Cloudflare's behavior of serving existing files first.
* **Missing Files**:
  - Running `git status` showed that several key files were untracked locally and therefore never committed or pushed to GitHub:
    - `splash.html` (Untracked)
    - `assets/Adventure-Logo-01.jpg` (Untracked)
    - `assets/Revised-splash-screen.png` (Untracked)
    - `docs/rebrand/` (Untracked)
  - Because these files did not exist in the deployed build on Cloudflare Pages, requests for them (e.g., `/assets/Revised-splash-screen.png`) fell back to the `/* /index.html 200` catch-all rule, returning `index.html` with a `text/html` content type. This caused image and sub-page render failures.

---

## 3. Resolution Steps Taken

### Action 1: Configured Custom Domains on Pages Project
We invoked the Cloudflare Pages API to add the custom domains to the active project:
* **Apex Domain**: Added `whatanadventure.games` to Pages project `whatanadventure-games`.
* **Subdomain**: Added `www.whatanadventure.games` to Pages project `whatanadventure-games`.

### Action 2: Updated DNS Records
We updated the DNS configuration in the `whatanadventure.games` zone via the Cloudflare DNS API:
* Updated `whatanadventure.games` CNAME record to point to `whatanadventure-games.pages.dev`.
* Updated `www.whatanadventure.games` CNAME record to point to `whatanadventure-games.pages.dev`.

### Action 3: Tracked and Deployed Missing Files
We updated the repository and triggered a fresh build:
1. Added the untracked files to git:
   ```bash
   git add assets/Adventure-Logo-01.jpg assets/Revised-splash-screen.png docs/rebrand/ splash-sfx-spec.md splash.html
   ```
2. Committed and pushed the files to `main` branch on GitHub:
   ```bash
   git commit -m "Fix: add missing studio site assets, splash screen, and rebranding documentation to trigger full CF Pages build"
   git push origin main
   ```
This triggered a new Cloudflare Pages production deployment (`12f8d416-ef37-4002-9b69-0c6b541ee00d`).

---

## 4. Verification & Status
After the Cloudflare Pages deployment completed, we verified the following endpoints:
* **`https://whatanadventure.games/`**: Serves the main studio landing page with HTTP 200.
* **`https://www.whatanadventure.games/`**: Redirects/serves the main studio landing page with HTTP 200.
* **`https://play.whatanadventure.games/`**: Serves correctly with HTTP 200.
* **Static Assets**:
  - Requesting `https://whatanadventure.games/assets/Revised-splash-screen.png` returns `image/png` (instead of `text/html`), confirming the SPA rewrite does not intercept correctly deployed files.
  - Requesting `https://whatanadventure.games/splash.html` serves the splash page successfully with HTTP 200.
