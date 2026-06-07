VOWVY — STATE DOCUMENT (v4 — CURRENT)

Last updated: June 7, 2026

═══════════════════════════════════════════════════════════

SESSION PROTOCOL — Read this first, every session

═══════════════════════════════════════════════════════════

RULE 1 — SHOW → APPROVE → DO

Before touching anything, Claude must:

  1. Describe exactly what will change
  2. Describe exactly what will NOT change
  3. Wait for George to say "yes" or "approved"
  4. Only then make the change

This applies to everything: code, CSS, files, git pushes — everything.

RULE 2 — WORKING THINGS ARE OFF LIMITS

If something is currently working, Claude may not touch it unless
George specifically asks. Not to clean it up. Not for any reason.
If in doubt: stop, ask, wait for approval, then proceed.

RULE 3 — MVP SCOPE IS LOCKED. NO MISSION CREEP.

The MVP proves exactly one thing:
"I photographed a box, and later I could search for what was inside."

MVP features — these five and nothing else:

  1. Locations
  2. Containers
  3. Photo upload / capture
  4. AI-generated tags
  5. Search

If an idea isn't directly one of these five → it gets parked for later.
No exceptions, no matter how good the idea sounds.

RULE 4 — RIGHT TOOL FOR THE RIGHT JOB

Claude Code (Terminal) — all building:
  Formspree wiring, Firebase setup, React MVP, file edits, git pushes.
  Use Claude Code for anything that touches actual files or code.

Claude chat — planning and decisions:
  Thinking through problems, document updates, design approvals,
  anything that needs a decision before building starts.

═══════════════════════════════════════════════════════════

LIVE SITE

═══════════════════════════════════════════════════════════

GitHub repo: https://github.com/MultigrainIntl/vowvy-website
GitHub Pages: https://multigrainintl.github.io/vowvy-website/
Custom domain: www.vowvy.com (NOT yet connected — GoDaddy forwarding active)
GitHub user: MultigrainIntl

═══════════════════════════════════════════════════════════

SITE STRUCTURE

═══════════════════════════════════════════════════════════

Single landing page (index.html) with 7 sections:

1. Hero — headline, phone mockup, CTA
2. The Problem — 3 dark cards
3. How It Works — 3 steps + search preview
4. Use Cases — 6 cards
5. Collaboration — activity feed mockup
6. Philosophy — "Capture first. Organize later."
7. Waitlist — email capture form

Files:
- index.html
- css/style.css
- js/main.js
- assets/images/logo-mark-only.png (nav + waitlist mark)
- assets/images/logo-check.png (checkmark state)
- assets/images/logo-full-psd.png (full logo reference)
- CNAME (set to www.vowvy.com)
- README.md

═══════════════════════════════════════════════════════════

DO NOT TOUCH — LOCKED AND APPROVED ✅

═══════════════════════════════════════════════════════════

LAYOUT:
- Nav layout: mark (left) + VOWVY wordmark + tagline (right)
- 7-section page structure and section order
- Footer layout: VOWVY wordmark in white, no tagline
- Mobile responsive layout

LOGO:
- 64px mark height in nav header
- logo-mark-only.png as the nav mark (do not swap files)
- Footer mark is NOT approved — still has halo ❌

COLORS — do not change any of these:
- Terracotta (Primary):          #C96A3D
- Warm Sand (Secondary):         #D9C7B6
- Soft Ivory (Background):       #F7F3EE
- Warm Beige (Background 2):     #EFE7DE
- Charcoal Slate (Text):         #1F2730
- Muted Slate (Text 2):          #5B6570
- Deep Slate (Dark BG):          #101A23
- Dark Graphite (Dark Surface):  #182028
- Resolved Terracotta:           #D06F3E
- Warm Gray (Border):            #D8D2CB

TYPOGRAPHY:
- Cormorant Garamond — headlines, wordmark
- Lora — body text
- Golden ratio (φ = 1.618) for all sizing decisions

═══════════════════════════════════════════════════════════

WHAT IS WORKING ✅

═══════════════════════════════════════════════════════════

- Full landing page live and rendering correctly
- Header: mark (left) + VOWVY + tagline (right), 64px mark height
- Brand colors correct throughout
- Typography (Cormorant Garamond + Lora)
- Mobile responsive
- Scroll animations (reveal on scroll)
- Phone mockup with animated AI tag cycling
- Waitlist form shows confirmation state (UI only)
- Footer: VOWVY wordmark in white, no tagline

═══════════════════════════════════════════════════════════

WHAT IS BROKEN / TODO ❌

═══════════════════════════════════════════════════════════

PRIORITY 1 — Urgent
- [x] Formspree: connected — signups captured via shared Multigrain form (site=vowvy tag)
- [ ] Footer logo: dark halo on dark background
- [ ] DNS: www.vowvy.com not pointing to GitHub Pages
      (GoDaddy forwarding active — must remove first)

PRIORITY 2 — Soon
- [ ] Waitlist animation: V→checkmark morph needs review
- [ ] Checkmark PNG: sand wing turned grey
- [ ] OG image (1200×630px)
- [ ] Apple touch icon (180×180px)
- [ ] Favicons (32px, 16px)
- [ ] Real vector logo file

PRIORITY 3 — Later
- [ ] vowvy.ai domain (may purchase)
- [ ] Additional pages

═══════════════════════════════════════════════════════════

FORMSPREE SETUP INSTRUCTIONS

═══════════════════════════════════════════════════════════

Using the shared Multigrain Formspree form (https://formspree.io/f/xpqeadrq),
tagged with hidden field site=vowvy. Signups arrive at george@multigrain.com
filtered by tag.

═══════════════════════════════════════════════════════════

GODADDY SITUATION — Domain Forwarding vs DNS

═══════════════════════════════════════════════════════════

GoDaddy currently has Domain Forwarding active — not DNS A records.
Forwarding redirects visitors; GitHub Pages never sees the request.
A records are required for GitHub Pages to work.

To fix:
1. GoDaddy → My Products → Domains → vowvy.com → DNS
2. REMOVE domain forwarding
3. ADD four A records (Host: @, Type: A):
   185.199.108.153 / .109 / .110 / .111
4. ADD CNAME: Host: www → MultigrainIntl.github.io
5. Wait 24–48 hours for DNS propagation
6. GitHub repo → Settings → Pages → Custom Domain: www.vowvy.com
7. Enforce HTTPS once cert appears

Do NOT touch MX records (email).

═══════════════════════════════════════════════════════════

BROWSER QUIRK

═══════════════════════════════════════════════════════════

Chrome caches GoDaddy forwarding redirects. Always test in a
Firefox Private Window (Cmd+Shift+P). Do not trust Chrome for DNS tests.

═══════════════════════════════════════════════════════════

GITHUB PERSONAL ACCESS TOKEN (PAT)

═══════════════════════════════════════════════════════════

GitHub no longer accepts passwords for git push. PAT required instead.

Generate:
1. GitHub → profile photo → Settings → Developer settings
2. Personal access tokens → Tokens (classic) → Generate new token (classic)
3. Name: "vowvy-website" | Expiration: 90 days | Scope: repo
4. Generate → COPY IMMEDIATELY (shown once only)

Use: paste token as password when Terminal prompts for credentials.
If push fails with auth error → token expired, generate a new one.

═══════════════════════════════════════════════════════════

LOGO STATUS

═══════════════════════════════════════════════════════════

Nav header mark: ✅ Approved — do not touch
Footer mark:     ❌ Dark halo visible on dark backgrounds
Checkmark:       ❓ Sand wing color may be off

Root issue: Original PNG had solid black background. Anti-aliased edges
blend logo color with black, creating a halo on dark backgrounds.
Permanent fix: vector file (AI/SVG/EPS) from the designer.

═══════════════════════════════════════════════════════════

MVP BUILD STATUS

═══════════════════════════════════════════════════════════

Not started. Prerequisite checklist:
- [ ] Node.js installed (Terminal: node --version)
- [ ] Landing page stable (Formspree, DNS, footer logo resolved)
- [ ] Firebase project created

Tech stack: React + Firebase Firestore + Firebase Storage + Claude API
Build begins: Session 3+. Use Claude Code in Terminal for all build work.

═══════════════════════════════════════════════════════════

NEXT MAJOR MILESTONE — Sharing & Collaboration (Phase 2)

═══════════════════════════════════════════════════════════

PERSONAL SHARING

  Owner invites collaborator by email. Collaborator receives a link,
  signs up or signs in, and can add photos and containers to the shared
  project. Owner sees all contributions. Owner can revoke access at any
  time. Contributor sees their own contribution history.

ROCKY MOUNTAIN BOX CO. USE CASE

  Each physical box has a pre-printed QR code. Customer scans it and is
  automatically added to that box's project. Whole family can scan the
  same QR and contribute. When box is returned, owner clears all data
  with one click and the QR is reused for the next customer.

DATA MODEL

  Each project gets a collaborators subcollection:

    collaborators/{uid}
      email:      string
      role:       "contributor" | "owner"
      expiresAt:  timestamp | null
      revokedAt:  timestamp | null

  Firebase security rules check collaborator status on every read/write.

═══════════════════════════════════════════════════════════

MONETIZATION STRATEGY

═══════════════════════════════════════════════════════════

Revenue model (to be implemented after user validation)

FREEMIUM
  Free tier limited to 10 containers. Paid plan $5–8/month for unlimited
  containers, QR codes, sharing, and export.

BUSINESS PLANS
  $50–200/month for moving companies, storage facilities, estate sale
  organizers, and box rental companies. Includes branded experience and
  multi-user access.

WHITE LABEL
  License Vowvy to businesses (e.g. Rocky Mountain Box Co.) under their
  own brand. Setup fee plus monthly licensing.

INSURANCE PARTNERSHIPS
  Home inventory has direct insurance value. Partner with insurers to
  offer Vowvy as a free benefit to policyholders.

PRIORITY
  Keep free for now. Validate with real users. Build paywall around
  features users actually ask to pay for. B2B partnerships are fastest
  path to revenue.

═══════════════════════════════════════════════════════════

FUTURE OPPORTUNITIES

═══════════════════════════════════════════════════════════

Multi-language support
  Spanish first. Scope: app UI, landing page, and Gemini prompts.
  Auto-detect browser language on first load, manual switcher in header.

Rocky Mountain Box Co. partnership
  Concept: pre-printed QR codes on rental boxes. Customer scans to
  auto-create a container in Vowvy. Data cleared when box is returned
  and QR reused for the next customer.
  Contact: rockymountainboxco.com
  Status: not contacted

═══════════════════════════════════════════════════════════

VOWVY APP — PENDING ACTIONS

═══════════════════════════════════════════════════════════

APP CHECK — DISABLED (needs proper setup before re-enabling)

App Check caused a 401 on sign-in because the reCAPTCHA secret key was never
registered in the Firebase Console. Even in monitoring mode, missing secret
registration breaks auth token validation.

initializeAppCheck is currently commented out in src/firebase.ts.

TO RE-ENABLE — do these steps in order:

  STEP 1 (manual — Firebase Console):
    Firebase Console → App Check → Apps → vowvy-app
    → overflow menu (⋮) → Manage provider
    → enter reCAPTCHA secret key: 6LdbjREtAAAAEIV-2EXAjG58cSe4WyZmBd8u_k2

  STEP 2 (manual — reCAPTCHA admin):
    recaptcha.google.com/admin → select the Vowvy site key
    → verify vowvy-1ba5f.web.app is listed as an allowed domain
    (also add app.vowvy.com once that subdomain is live)

  STEP 3 (code):
    Uncomment initializeAppCheck block in src/firebase.ts
    Rebuild and deploy: npm run build && firebase deploy --only hosting:vowvy-1ba5f --project vowvy-1ba5f
    Test sign-in before proceeding.

  STEP 4 (enforcement — only after sign-in confirmed working):
    Firebase Console → App Check → APIs tab
    Flip Firestore, Storage, and Auth to Enforced — one at a time.
    Watch for errors after each flip before doing the next.

Site key (public):  6LdbjREtAAAAAGxozqM7Nnbi7DmKUTzE6sDSH6vI
Secret key:         6LdbjREtAAAAEIV-2EXAjG58cSe4WyZmBd8u_k2

AUTH DOMAIN — action needed once app.vowvy.com is verified

  app.vowvy.com CNAME is set in GoDaddy (→ vowvy-1ba5f.web.app) but
  Firebase Hosting hasn't verified it yet (shows "Needs setup").

  Safari ITP blocks cross-origin IndexedDB auth persistence when
  authDomain is firebaseapp.com — causes sign-in failures on iPad Safari.
  Workaround: browserSessionPersistence (sessionStorage) is live now.
  Downside: users must re-login when they close the tab.

  Permanent fix — once Firebase verifies app.vowvy.com:
    1. src/firebase.ts → change authDomain to "app.vowvy.com"
    2. Remove the setPersistence(auth, browserSessionPersistence) call
    3. Rebuild and deploy: npm run build &&
       firebase deploy --only hosting:vowvy-1ba5f --project vowvy-1ba5f
    4. Test sign-in on iPad Safari — session should persist across tab closes

App: https://vowvy-1ba5f.web.app
Repo: https://github.com/MultigrainIntl/vowvy-app

═══════════════════════════════════════════════════════════

NEXT SESSION PROMPT — Copy/paste to start Session 2

═══════════════════════════════════════════════════════════

---
Continue Vowvy — Session 2.

Read before doing anything:
- STATE.md (this file — in repo root)
- SESSION_LOG.md (this repo root)

Work through this checklist ONE STEP AT A TIME.
Show every change before making it. Never touch what is working.

[ ] STEP 1: node --version in Terminal
    Error → nodejs.org → download LTS → install

[ ] STEP 2: Fix footer logo halo
    Do NOT touch nav logo. Show fix → wait for approval → push.

[ ] STEP 3: Formspree setup
    Follow instructions in State Document.
    Show code change → approval → push → test with real email.

[ ] STEP 4: DNS for www.vowvy.com
    Follow GoDaddy instructions in State Document.
    Test in Firefox Private Window only.

[ ] STEP 5: Review V→checkmark animation

[ ] STEP 6 (only if Node confirmed): Firebase setup

Rules: Show before doing. Approve before pushing. Never touch what works.
MVP scope is locked — five features only. No additions.
---
