VOWVY — STATE DOCUMENT (v4 — CURRENT)

Last updated: June 6, 2026

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
- [ ] Formspree: waitlist form not capturing emails (signups are LOST)
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

Vowvy gets its OWN form — not the shared Multigrain one.
Do this in Claude chat first, then implement in Claude Code.

1. Go to https://formspree.io — log in or create account
2. Click "New Form" → name it "Vowvy Waitlist"
3. Set recipient email
4. Copy the endpoint: https://formspree.io/f/XXXXXXXX
5. In index.html, find the waitlist <form> tag
6. Add: action="https://formspree.io/f/XXXXXXXX" method="POST"
7. Confirm email input has: name="email"
8. Optional spam guard: <input type="text" name="_gotcha" style="display:none">
9. Show George the change → wait for approval → push
10. Test with a real email to confirm delivery

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
