# Consent Waypoint: The First Clause

Status: researched recommendation; not implemented. Research used Perplexity's high research preset and primary technical sources. Timing below is an original creative proposal, not a universal UX benchmark.

## Direction

A 3.2-second opening scene integrated into the approved Evidence Folio hero. Preserve the dark photographic stage, ivory folio, coral ribbon, lilac accents, cream navigation and live HTML controls. The existing website must remain immediately usable.

## Storyboard

| Time | Composition | Motion and meaning |
| --- | --- | --- |
| 0–0.55 s | Cream navigation and headline are readable above the ink stage. A small bracket-and-coral-dot brand mark appears at the book's eventual center. | Brackets settle into alignment, framing the source. No full-screen obstruction or fake progress meter. |
| 0.4–1.5 s | Ivory folio emerges into the stage. | The already-open book moves gently forward from a lower position, settles from a slight perspective angle, and grows to its final scale. Soft contact shadow anchors it. Do not pretend a flattened PNG can physically unfold. |
| 1.2–2.3 s | The source clause receives a warm highlight. Intended-use controls remain live. | The highlight sweeps across the actual clause; coral emphasis connects attention from source to requested use. Avoid unrelated background line graphics. |
| 2.1–3.2 s | Decision and source basis settle beside the clause. | A subtle emphasis on the existing Requires counsel state completes the story. No automatic Allow state or fabricated execution. The sequence ends on the exact interactive hero composition. |

## Recommended implementation

- Use a separate GSAP entry timeline on decorative wrappers; keep existing ScrollTrigger transforms on a different nested wrapper so they cannot compete.
- Animate primarily transform and opacity. Keep the source text and controls as HTML, not text baked into an image or video.
- Keep navigation, headline, CTAs and controls available from the start. Any scrolling or control interaction finishes the intro immediately and hands over to the existing experience.
- Play once per browser session. Add a small keyboard-accessible Skip intro during playback and Replay intro after completion. Replay is user initiated and does not reset the selected rights controls.
- Respect both prefers-reduced-motion and the existing website Motion off setting: render the finished hero without entry motion.
- Keep dimensions reserved. Do not lazy-load the above-the-fold book/stage; compress the existing large PNG assets before implementation and measure actual load performance.
- Ensure route changes and React cleanup cancel the entry timeline. The intro must not pin the page, trap focus or disable Lenis/native navigation.

## Alternatives considered

| Technology | Fit for this hero |
| --- | --- |
| GSAP with layered image/HTML elements | Recommended. Matches the existing stack and supports a seamless interactive handoff. |
| Short rendered video plus GSAP/HTML handoff | Use if a physically opening book becomes essential. Requires a properly modeled/rigged book and a matching final frame; provide muted inline playback, a poster and a rejected-play fallback. |
| Rive | Strong for vector/state-machine animation, less appropriate for this photographic paper-and-stone scene. Adds another runtime without a clear benefit here. |
| Realtime WebGL/3D | Worth considering only for sustained physical book interaction. For a one-time entry it adds modeling, GPU and fallback complexity. |

The existing open-book PNG can be translated, scaled and rotated as a whole. It does not contain hidden covers, page faces or geometry. A convincing physical opening is a separate asset-production task, not an image-warp effect.

## Acceptance criteria

1. No visual jump between entry completion and scroll-controlled hero.
2. Scroll, Skip and CTA activation all reach the final state immediately.
3. Existing Read/Embed/Inference and destination behavior remains correct.
4. Back navigation does not replay the intro automatically during the session.
5. Reduced motion shows complete readable content immediately.
6. Test desktop, tablet and phone, keyboard navigation and slow-network loading; measure LCP and interaction responsiveness before claiming a performance improvement.

## Primary sources

- GSAP React lifecycle and cleanup: https://gsap.com/resources/React/
- GSAP accessibility and reduced motion: https://gsap.com/resources/a11y/
- GSAP responsive motion lifecycle: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/
- Efficient animation properties: https://web.dev/articles/animations-guide
- LCP and critical image discovery: https://web.dev/articles/optimize-lcp
- Video delivery and performance: https://web.dev/learn/performance/video-performance
- Autoplay behavior and playback fallback: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay
- Animation control: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide
- Interaction animation accessibility: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- Rive mesh deformation: https://rive.app/docs/editor/manipulating-shapes/meshes
- WebGL runtime considerations: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices

Creative direction, duration, sequencing and technology selection are project-specific judgments informed by these sources; the sources do not prescribe this storyboard.
