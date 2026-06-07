VOWVY — STATE DOCUMENT (v5 — CURRENT)

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

LIVE SITE (MARKETING)

═══════════════════════════════════════════════════════════

GitHub repo: https://github.com/MultigrainIntl/vowvy-website
GitHub Pages: https://multigrainintl.github.io/vowvy-website/
Custom domain: www.vowvy.com (NOT yet connected — GoDaddy forwarding active)
GitHub user: MultigrainIntl

═══════════════════════════════════════════════════════════

LIVE APP

═══════════════════════════════════════════════════════════

Primary URL:  https://app.vowvy.com
Backup URL:   https://vowvy-1ba5f.web.app
App repo:     https://github.com/MultigrainIntl/vowvy-app (local: /Users/georgejibilian/vowvy-app)
Firebase project: vowvy-1ba5f
Auth domain:  app.vowvy.com (custom domain — verified and live, fixes Safari ITP)
Auth mode:    LOCAL persistence (default — survives tab closes)
App Check:    DISABLED (see Pending Actions)

═══════════════════════════════════════════════════════════

SITE STRUCTURE (Marketing)

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

MARKETING SITE
- Full landing page live and rendering correctly
- Header: mark (left) + VOWVY + tagline (right), 64px mark height
- Brand colors correct throughout
- Typography (Cormorant Garamond + Lora)
- Mobile responsive
- Scroll animations (reveal on scroll)
- Phone mockup with animated AI tag cycling
- Waitlist form shows confirmation state (UI only)
- Footer: VOWVY wordmark in white, no tagline

APP (live at app.vowvy.com)
- Google sign-in (auth domain app.vowvy.com — Safari ITP safe)
- LOCAL persistence — sessions survive tab closes
- Password reset
- Locations and containers
- Photo upload and capture (iOS camera, file picker)
- AI-generated tags and description via Gemini 2.5 Flash
  - Tags fire on ANY new photo addition (not just first)
- Full-text search across names, locations, tags, descriptions, notes, photo descriptions
- Container notes with soft delete
- Branded QR code per container with deep-link support
  - QR URL: https://app.vowvy.com/container/{containerId}
  - Print label: URL hidden on print via @media print
- iPad Safari compatibility:
  - Images served via proxyImage Cloud Function (bypasses Safari CORS block)
  - useWebWorker: false for image compression
  - getIdToken(true) force-refresh before all writes
  - 15-second timeout on photo add
- Responsive tablet layout (two-column grid at 768px+)
- Photo-level descriptions (editable in lightbox, included in search)
- Individual AI tag deletion (✕ button on each tag, hard-delete)
- Soft-delete trash with 30-day retention:
  - Containers, photos, and notes all use deletedAt timestamps
  - /trash route with Recently Deleted screen
  - Restore with optimistic feedback ("Restored" inline for 1.5s)
  - Delete Forever with confirmation + optimistic feedback
- viewingOwnerUid threaded through MainScreen (foundation for collaborator sharing)
- ContainerScreen accessible via QR deep link — add photos and notes from it

═══════════════════════════════════════════════════════════

WHAT IS BROKEN / TODO ❌

═══════════════════════════════════════════════════════════

MARKETING SITE
- [ ] Footer logo: dark halo on dark background
- [ ] DNS: www.vowvy.com not pointing to GitHub Pages
      (GoDaddy forwarding active — must remove first)
- [ ] Waitlist animation: V→checkmark morph needs review
- [ ] Checkmark PNG: sand wing turned grey
- [ ] OG image (1200×630px)
- [ ] Apple touch icon (180×180px)
- [ ] Favicons (32px, 16px)
- [ ] Real vector logo file

APP — KNOWN ISSUES PARKED
- [ ] App Check disabled — needs reCAPTCHA reconfig (see Pending Actions)
- [ ] Email notifications (SendGrid SMTP returns 401; try Resend or SendGrid Web API next)
- [ ] Tag–photo association: ghost tags persist after photo deletion
      (AI tags belong to the container, not individual photos — needs data model refactor)
- [ ] Collaborator invite UI not built yet (foundation deployed, UI next)

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
    (also add app.vowvy.com)

  STEP 3 (code):
    Uncomment initializeAppCheck block in src/firebase.ts
    Rebuild and deploy: npm run build && firebase deploy --only hosting --project vowvy-1ba5f
    Test sign-in before proceeding.

  STEP 4 (enforcement — only after sign-in confirmed working):
    Firebase Console → App Check → APIs tab
    Flip Firestore, Storage, and Auth to Enforced — one at a time.

Site key (public):  6LdbjREtAAAAAGxozqM7Nnbi7DmKUTzE6sDSH6vI
Secret key:         6LdbjREtAAAAEIV-2EXAjG58cSe4WyZmBd8u_k2

COLLABORATOR INVITES — FOUNDATION DEPLOYED, UI NEXT

  Data model deployed:
    users/{ownerUid}/collaborators/{collaboratorUid} — status, email, acceptedAt
    invites/{token} — ownerUid, status (pending→active), single-use
    AcceptInviteScreen live at /invite/{token}
    viewingOwnerUid threaded through MainScreen (all Firestore/Storage paths)
    Firestore rules: isActiveCollaborator() check on container reads/writes

  Still to build:
    - Owner UI to generate and copy invite link
    - Shared inventory switcher in MainScreen header
    - Revoke collaborator access

EMAIL NOTIFICATIONS — PARKED

  Firebase Trigger Email extension installed but SMTP returns 401 despite
  correct secret in Secret Manager. Likely a SendGrid domain auth issue.
  Options for next attempt:
    1. Resend.com — simpler API, better DX
    2. SendGrid Web API (not SMTP) — more reliable than SMTP
  Not blocking anything. Invite links work without email.

═══════════════════════════════════════════════════════════

NEXT MAJOR MILESTONE — Sharing & Collaboration (Phase 2)

═══════════════════════════════════════════════════════════

PERSONAL SHARING

  Owner invites collaborator via shareable link (no email required).
  Collaborator signs in, accepts invite, and can view and add to the
  shared inventory. Owner sees all contributions. Owner can revoke access.

ROCKY MOUNTAIN BOX CO. USE CASE

  Each physical box has a pre-printed QR code. Customer scans it and is
  automatically added to that box's project. Whole family can scan the
  same QR and contribute. When box is returned, owner clears all data
  with one click and the QR is reused for the next customer.

DATA MODEL (deployed)

  users/{ownerUid}/collaborators/{uid}
    email, displayName, status: "active" | "revoked", inviteToken, acceptedAt

  invites/{token}
    ownerUid, ownerDisplayName, status: "pending" | "active" | "revoked"
    acceptedByUid, acceptedAt

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
