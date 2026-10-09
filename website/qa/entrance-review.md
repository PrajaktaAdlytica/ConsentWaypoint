# Passage entrance verification

Implemented an 8.6-second entrance into the existing hero. The approved image is a photographic 2.5D plate, not a newly modeled 3D scene. A WebGL texture shader applies restrained coral-pixel displacement in the foreground ribbon; the camera pushes toward the opening at 70% horizontal / 30% vertical. A lilac light wash overlaps the fade into the live hero.

The image was cleaned with built-in Image Gen using the approved entry-passage-of-evidence.png reference, removing baked-in text and the generated mark. The website overlays real HTML text and the existing approved reverse brand mark. Clean plate source: exec-404928ab-6e59-49ff-b493-68bd7a207030.png in the session's generated_images directory. Served asset: public/assets/visuals/entry-passage.webp.

Browser checks passed:
- Automatic completion removes the overlay and reveals the interactive hero.
- Replay opens the entrance; Pause freezes the GSAP camera and WebGL ribbon time, Resume continues, and Skip or Escape removes it immediately and restores focus to Replay.
- Fresh homepage reload plays the animation again.
- Motion off removes Replay and suppresses the entrance; Motion on restores Replay.
- GPU canvas successfully rendered; no browser warnings/errors during inspection.
- Mobile 390×844 keeps the entrance and ribbon in frame; Pause/Resume and Skip remain 44px high and fit without overflow.
- Tablet 775×804 and phone have no horizontal page overflow.

Build passed. Existing policy tests passed: 13 boundary cases, 10 fixture decisions, report reconciliation, zero executions. OS preference is wired through the existing App motion state; equivalent Motion off was tested, but OS settings were not changed.

Fallbacks: CSS camera motion if WebGL is unavailable, immediate handoff for image load failure/timeout or lost GPU context, static hero for reduced motion. GPU-unavailable and lost-context cases were reviewed in code but not forced in browser. No performance benchmark or real 3D ribbon simulation is claimed.

Screenshots: screenshots/entrance-camera.png and screenshots/entrance-still-return.png.

Updated scroll behavior: a static image section remains above the hero. Completion and Skip position the hero below the sticky navigation. Native scroll back up reveals the image with no canvas or animation replay. Desktop 1440×900 and mobile 390×844 checks passed; image loaded, hero positioned correctly, no horizontal overflow. Animation selectors are scoped to the overlay so the static image never receives the camera transform.
