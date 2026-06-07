# VOWVY — CLAUDE.md
Rules and context for every session. Read this before doing anything.

## Session Protocol
1. Show → Approve → Do. Describe what will change and what won't. Wait for George's approval. Then act.
2. Working things are off limits. If it works, don't touch it.
3. One change at a time. One push at a time.
4. Never push to GitHub without George's explicit approval.
5. If in doubt: stop, ask, wait.

## MVP Scope — Locked
Five features only: Locations, Containers, Photo upload, AI tags, Search.
Anything else gets parked. No mission creep.

## Do Not Touch (Marketing Site)
Nav layout, 64px mark height, footer layout, logo-mark-only.png (nav),
all brand colors (see STATE.md), Cormorant Garamond + Lora.

## Workflow
Claude Code (Terminal) for all code and file changes.
Claude chat for planning, design decisions, and approvals.
George approves every change before it is pushed.

## Repos
Marketing site: https://github.com/MultigrainIntl/vowvy-website
App:            /Users/georgejibilian/vowvy-app (Firebase project: vowvy-1ba5f)

---

## App Architecture Patterns

### Photo data model
Photos are stored as `PhotoItem[]` on each container document:

```typescript
interface PhotoItem {
  id: string;
  url: string;
  storagePath: string;
  description: string;
  createdAt: number;
  deletedAt?: number;   // soft delete — never hard-delete from main UI
}
```

Legacy containers (created before the PhotoItem migration) have `photoUrls: string[]`
and `photoStoragePaths: string[]` instead of `photos[]`. Both formats exist in
Firestore simultaneously.

**mapContainer merge rule:** Always merge both sources on read. Start with `photos[]`,
then append any `photoUrls` entry not already represented by URL. Never use
either/or — always merge:

```typescript
const photoUrlSet = new Set(rawPhotos.map(p => p.url));
const merged = [...rawPhotos];
photoUrls.forEach((url, i) => {
  if (!photoUrlSet.has(url)) {
    merged.push({ id: `legacy-${i}`, url, storagePath: photoStoragePaths[i] ?? '',
                  description: '', createdAt: 0 });
  }
});
```

**Write rule:** Never use `arrayUnion(photoItem)` for the `photos` field. Always
read the current photos from React state, append the new item, and write the full
array. `arrayUnion` is fine for the legacy `photoUrls` and `photoStoragePaths`
fields (append-only). This is critical — `arrayUnion` on a non-existent `photos`
field creates a single-item array and loses all legacy photos.

### Soft delete model
All content uses `deletedAt: number | null` timestamps instead of hard deletion:

- **Containers:** `deletedAt` on the document itself
- **Photos:** `deletedAt` on each `PhotoItem` within the `photos[]` array
- **Notes:** `deletedAt` on each `ContainerNote` within the `notes[]` array

30-day retention. `/trash` route shows Recently Deleted with Restore and Delete Forever.

When restoring a photo or note, omit `deletedAt` via destructuring — do NOT set it
to `undefined` (Firestore throws on undefined values):
```typescript
const { deletedAt: _removed, ...rest } = item;  // correct
// NOT: { ...item, deletedAt: undefined }         // Firestore throws
```

### viewingOwnerUid
`MainScreen` holds `viewingOwnerUid` state (defaults to `user.uid`). Every
Firestore and Storage path uses this UID, not `user.uid` directly. This enables
collaborators to view a shared inventory without rebuilding the component.

Collaborator flow (foundation deployed, UI pending):
- `invites/{token}` — shareable link, single-use (pending → active)
- `users/{ownerUid}/collaborators/{callerUid}` — active collaborators
- `isActiveCollaborator()` function in Firestore rules checks this subcollection

### iPad Safari compatibility
- Images: serve via `proxyImage` Cloud Function, not direct Firebase Storage URLs
- Image compression: `useWebWorker: false`
- All writes: call `auth.currentUser.getIdToken(true)` before upload
- Photo add: wrap entire operation in `Promise.race` with 15-second timeout

### Firestore write patterns
- New containers: `setDoc` with full document including `deletedAt: null`
- Add photo to existing: write full `photos` array (not arrayUnion); use arrayUnion only for legacy `photoUrls`/`photoStoragePaths`
- Soft delete: `updateDoc({ deletedAt: Date.now() })`
- Add note: `arrayUnion(noteItem)` is safe (note objects have stable IDs)
- Restore (photo/note): destructure out `deletedAt`, write full array back
