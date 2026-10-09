# Hero implementation QA

final result: passed

## Visual truth and evidence

- Source: ../outputs/hero-exploration/evidence-folio-hybrid.png (1586 × 992).
- Desktop implementation: qa/screenshots/hero-hybrid-desktop.png (1440 × 900 CSS pixels, device scale 1).
- Tablet implementation: qa/screenshots/hero-hybrid-tablet.png (775 × 804, scale 1).
- Mobile implementation: qa/screenshots/hero-hybrid-mobile.png (390 × 844, scale 1).
- State: homepage, illustrative external inference request, Requires counsel, no output.
- Comparison: source and desktop implementation were opened together in the same visual inspection input. They have equivalent viewport aspect ratios; source scale relative to the desktop viewport is approximately 1.102. Compare proportions rather than raw pixel offsets.

## Full-view comparison

The final implementation retains the centered white/lilac headline, forest studio texture and edge plinths, expansive ivory spread, coral ribbon, lilac page tabs, source excerpt on the left, request controls on the right, and workshop/workspace actions below. The existing complete navigation is retained, including Company. Source microcopy is replaced with the existing canonical fictional license fixture rather than generated legal prose. The optional playback chrome is omitted: motion is controlled by native scroll and chapter buttons.

## Focused control review

The book controls were inspected in desktop and tablet screenshots and exercised through the browser. Intended use, destination, decision, source basis and illustrative-source note remain on their respective paper surfaces. On mobile the spread becomes a single tall paper surface with readable source and controls; conversion actions precede the book. This is an intentional responsive adaptation, not an attempt to shrink desktop controls to phone size.

## Comparison history and fixes

1. P1: first generated blank book clipped its top edge and left excessive transparent space. Regenerated a complete 1922 × 818 transparent spread before final placement.
2. P2: initial desktop spacing put conversion actions beneath the 900px viewport. Tightened the heading and lifted the book to reproduce the reference's compact arrangement. Final desktop capture shows both actions.
3. P2: initial phone source label preceded the visible paper. Increased paper-content inset and placed actions before the book. Final mobile capture shows the label on paper and actions above it.
4. P2: tablet composition initially overlapped subtitle/book, and source-basis content extended beneath the page. Added a tablet-specific spacing and control density treatment. Final tablet capture shows all content within the paper and no overlap.

No actionable P0/P1/P2 issue remains in the final captures.

## Behavior verified

- Inference + External model → Requires counsel; Output none.
- Read + Internal → Allow; Output none.
- Embed + Internal → Allow with the approved Atlas R2 basis.
- Source-basis button opens by keyboard Enter and shows the reviewed reason.
- Source chapter returns the scene to its opening position.
- Scroll down changes book position, scale and X rotation; returning to the opening chapter restores the opening transform.
- Motion-off switch removes the book transform; restored the user's existing Motion on setting after verification.
- Workshop CTA opens /workshop; returned to homepage afterward.
- No horizontal overflow at phone or tablet sizes; all hero images loaded.
- Browser error log: no errors observed in the checked session.
- Production build passes. Existing policy suite passes 13 boundary cases, 10 fixture decisions and 4/3/3 reconciliation, with zero executions.

## Follow-up polish

- P3: small source annotations are intentionally compact on tablet; the main inputs and result are readable. The full sample workspace provides detailed evidence inspection.
- The scene uses a complete static book asset with reversible perspective movement and live control states. It does not simulate physical page turning.
- Actual OS reduced-motion preference was not changed during QA; the equivalent application motion-off cleanup was verified, and the CSS reduced-motion fallback is present.
