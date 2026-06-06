VOWVY — SESSION LOG (v2)

Last updated: June 6, 2026

═══════════════════════════════════════════════════════════

SESSION 1 — June 6, 2026

═══════════════════════════════════════════════════════════

DECISIONS MADE
--------------
- Product vision defined: searchable memory system for physical possessions
- Core philosophy locked: "Capture first. Organize later."
- MVP scope locked: Locations, Containers, Photo upload, AI tags, Search
- Tech stack confirmed: React + Firebase + GitHub + Claude API
- Brand palette finalized (see Vision Document)
- Golden ratio rule: ALL sizing decisions must follow φ = 1.618
- Logo approval rule: ALL changes must be approved before pushing to production

WHAT WAS BUILT
--------------
- Full Vowvy landing page (7 sections)
- GitHub repo created: MultigrainIntl/vowvy-website
- GitHub Pages enabled
- CNAME set to www.vowvy.com
- Brand colors, typography, animations implemented
- Phone mockup with cycling AI tags
- Waitlist form (UI only — not connected to anything yet)
- Header logo: mark + VOWVY + tagline, 64px mark height (APPROVED ✅)
- Footer: mark + white VOWVY wordmark (footer mark still has halo ❌)

═══════════════════════════════════════════════════════════

LOGO SAGA — Full Account (read this before touching anything)

═══════════════════════════════════════════════════════════

The logo work was the longest, most painful part of Session 1.
This section explains exactly what happened so we don't repeat it.

ROOT CAUSE:
The original logo file was a ChatGPT-generated PNG with a solid black
background. There was no alpha channel (no true transparency).

The core problem with removing a background from an anti-aliased image:
When a logo has soft/blended edges (anti-aliasing), the edge pixels are
a MIX of the logo color and the background color. For black background,
those edge pixels look like [logo color + black] blended together.

When you remove the black background, those edge pixels remain. On a
white page you barely notice. On a dark background (like our Deep Slate
#101A23), those dark edge pixels show up as an obvious dark halo.

WHAT WAS TRIED:
- Background removal directly from the original PNG → halo remained
- PSD file provided by George — better source material, used as base
- Multiple alpha channel recovery attempts from PSD layers
- Various threshold and edge-detection approaches
- Result: Nav mark got to "mostly fixed" after several iterations
- Footer mark: halo still clearly visible on the dark section backgrounds

CURRENT STATE:
- Nav mark (logo-mark-only.png): APPROVED ✅ — looks good on light bg
- Footer mark (logo-mark-only.png): NOT APPROVED ❌ — halo on dark bg
- Checkmark (logo-check.png): UNCERTAIN ❓ — sand/warm color turned grey
  at some point during logo processing

THE PERMANENT FIX (not done yet):
Get a proper vector file from the original designer (AI, SVG, or EPS).
A vector has mathematically defined, hard edges — no anti-aliasing,
no blending, no halo. Works on any background.

RULE GOING FORWARD:
The nav mark is approved and working. DO NOT touch it.
Only the footer mark and checkmark need attention.
Any logo changes: show the before/after first, push only after approval.

═══════════════════════════════════════════════════════════

GITHUB PERSONAL ACCESS TOKEN — What We Did in Session 1

═══════════════════════════════════════════════════════════

GitHub requires a Personal Access Token (PAT) for terminal git pushes.
Regular GitHub passwords are no longer accepted for this.

What we did:
- Generated a classic PAT in GitHub Settings → Developer settings
- Scopes: repo (full repo access)
- Used the token as the "password" when Terminal prompted for credentials
- Alternatively embedded it in the push URL:
  git push https://[TOKEN]@github.com/MultigrainIntl/vowvy-website.git

IMPORTANT: Tokens expire. If a future push fails with "authentication
failed" — the token has likely expired. Generate a new one.

See full step-by-step instructions in STATE.md (GitHub PAT section).

═══════════════════════════════════════════════════════════

KNOWN BUG — Stray CSS Property (`gap: 13px` outside a rule)

═══════════════════════════════════════════════════════════

During a CSS editing session, a stray property was introduced:

  gap: 13px

was placed OUTSIDE of any CSS rule block — it was an orphaned property,
not inside any {} curly braces.

EFFECT:
This caused the header/nav elements to stack vertically instead of
sitting in a horizontal row. The header layout broke completely.

HOW WE FOUND IT:
The layout broke after a CSS change, and visual inspection of the
CSS file found the orphaned property between rule blocks.

FIX:
Moved the gap: 13px inside the correct rule block (the nav/header rule).

LESSON FOR FUTURE SESSIONS:
- After any CSS edit, scan the file for orphaned properties (properties
  sitting outside of any {} block).
- An orphaned CSS property does not cause a browser error — it is
  silently ignored or can cause unexpected behavior.
- Always visually check the header layout after any CSS change near
  the nav/header rules.
- A quick way to check: look for any lone "property: value;" line that
  isn't inside a rule block.

═══════════════════════════════════════════════════════════

WORKING RULES — Emotional Context (Why These Rules Exist)

═══════════════════════════════════════════════════════════

These rules are not just preferences. They exist because:

1. A broken push means a broken LIVE site that real visitors can see.
   We have no staging environment — the repo IS the live site.

2. Logo and CSS changes were hard and time-consuming to undo.
   Each "quick fix" that wasn't approved first cost an hour to reverse.

3. George is not a developer and needs to feel in control.
   Surprises are stressful. Show before doing. Always.

4. The goal is to build trust that changes are safe before making them.

THE RULES (apply to every session, no exceptions):

1. NEVER change anything that is currently working without approval.
   If it's in the DO NOT TOUCH list → stop. Ask. Wait.

2. NEVER push to GitHub without showing the change and getting a "yes."
   The sequence is always: show → approve → push. Never just push.

3. NEVER guess what the problem is. Only fix what is confirmed broken
   in a screenshot or clear description. Do not "fix" things speculatively.

4. ALWAYS follow the golden ratio (1.618) for any sizing decision.

5. ALWAYS propose the change, show what it will look like, then wait.
   Do not chain multiple changes together in one push.

6. One step at a time. One push at a time.

IF IN DOUBT: Stop. Ask George. Wait for his approval. Then proceed.

═══════════════════════════════════════════════════════════

NEXT SESSION — Proper Checklist

═══════════════════════════════════════════════════════════

Full copy-paste prompt is in STATE.md (last section).

Quick reference checklist for Session 2:

[ ] 1. Read STATE.md + SESSION_LOG.md
[ ] 2. Run: node --version in Terminal (check if Node is installed)
[ ] 3. Fix footer logo halo — show fix first, push after approval
[ ] 4. Connect Formspree to waitlist form — follow STATE.md instructions
[ ] 5. DNS: connect www.vowvy.com — follow STATE.md GoDaddy section
[ ] 6. Review V→checkmark waitlist animation
[ ] 7. (If Node confirmed) Firebase project setup — MVP Step 1

Priority order: 3, 4, 5, 6, then 7. Do not skip ahead.
