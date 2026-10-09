# Implementation QA — 9 October 2026

## Verified

| Area | Evidence / result |
|---|---|
| Production build | `npm run build` succeeds with Vite 8.3.4. Pages and demo are split into lazy-loaded chunks. |
| Policy checks | `npm test`: 13 boundary cases; all ten event decisions match the evaluator; report totals 4 Allow / 3 Requires counsel / 3 Deny; zero executed actions. |
| Public routes, desktop | Home plus 25 public destinations; branded unknown-route recovery. Route log `desktop-routes.json`. 1440px width; no page overflow or observed broken image. |
| Public routes, mobile | All 25 supporting destinations plus homepage at 390px; no page overflow or observed broken image. Route log `mobile-routes.json`. |
| Built deep links | Direct navigation and reload of product review, privacy and canonical demo receipt on production preview. `production-routes.json`; no warning/error logs during final production checks. |
| Public request example | Internal reading → Allow / not executed; redistribution → Deny / blocked; external inference → Requires counsel / paused. Output remains none. |
| Product request | Internal reading within 30 days allows; 90 days routes to counsel. Actual built page checked in browser. |
| Product report | Selecting Deny gives exactly CW-0020, CW-0021, CW-0022; three table rows. |
| Evidence flip | Button changes source excerpt to the canonical external-inference receipt with R2.4 and paused/output-none state. |
| Workshop form | Empty submission exposes required errors and focuses first invalid input. Valid desktop/mobile form focuses the local completion card; no delivery claim. |
| Menus / keyboard | Desktop menu Escape returns to trigger. Mobile menu closes with Escape and returns to Open navigation; background is inert during dialog and restored afterward. Visible keyboard focus. |
| Motion | Desktop rights chapter pins below header at 86px. Lenis and ScrollTrigger coordinate; route cleanup present. Motion-off gives zero pin spacers and zero hidden reveal elements. Reduced-motion CSS disables transitions and sticky scenes. |
| Demo | Queue, record, request, canonical receipt, lifecycle, lineage, reports and dictionary render. Request branches, filters, reset and walkthrough completion checked. Persistent synthetic-data boundary and isolated fixture-only actions. |
| Contrast | Six core text/surface pairs exceed AA normal-text 4.5:1. Exact values in `contrast.json`. This is not an audit of every pixel or an accessibility certification. |
| Provenance | Locally hosted original brand/diagram assets, original generated conceptual art, font licenses and social-icon specimens recorded in `public/assets/ASSET_PROVENANCE.json`. |

## Fixes made during review

Pricing cards no longer remain transparent because of overlapping reveal tweens. Public and demo LIC-17 inference scope, reviewer and policy version now agree. Approved embedding index/model context is explicit. Mega-menu and mobile Escape restore focus. Source icon aliases resolve. Demo state persists across its internal routes. Product pages each include a distinct working mechanism. Select controls have explicit accessible names. Form completion receives focus and scrolls into view.

## Performance evidence

Production main script: 436.35 kB uncompressed / 144.67 kB gzip. Lazy product, editorial and demo scripts are approximately 6.23 / 16.42 / 14.12 kB gzip. Build figures are bundle output, not measured transfer time. Three raster artworks use WebP versions of 56,284 / 117,740 / 84,794 bytes; original PNGs are retained as source assets and are not requested by page copy. Fonts are local and use `font-display: swap`. Mobile removes desktop pin/parallax motion and uses native touch input.

No Lighthouse score, field Core Web Vitals, screen-reader certification or hosted security assessment is claimed. Perform those measurements against the final hosting environment and connected features. Accessibility spot checks cover labels, focus, menus, outcomes, mobile layouts and core contrast; a full assistive-technology audit remains separate.

## Screenshot record

All files in `screenshots/` are genuine browser renders. Public captures: 1440×1000 desktop and 390×844 mobile. Demo agent captures: 1440×1000 and 390×844. `screenshots.json` records actual file dimensions, route and subject. Full-page composites or generated UI images are not substituted for application captures.

Included: public hero; request chapter and narrow mobile decision; pricing; form completion; source record/evidence; canonical receipt; desktop/mobile request inspector; mobile register; dedicated product request and report. Product fixtures retain local synthetic labels; demo captures keep their persistent boundary.

## Operational limits

Forms prepare local briefs; no live endpoint, CRM, authentication, analytics transport, payment, product connector, report sending or downstream deletion is connected. Browser-save completion of downloadable JSON was not independently verified after a browser download-wait timeout; export construction/watermark is reviewed in source. No private record or contract is collected. Delivery and analytics need their own end-to-end tests after connection.

No public deployment, domain, social profile or customer validation was created. Use `DEPLOYMENT.md` and `EXPERIMENT_READOUT.md` for those separate milestones.

## Browser-comment refinement — 9 October 2026

Aligned the header around the content margins with equal desktop side columns and a compact tablet/mobile layout. Added original SVG paper, architectural, ledger and route environments to the eight marked homepage chapters. Added a three-role sample testimonial carousel, explicitly identified as illustrative copy rather than customer endorsements.

Verified at 775 × 804: zero horizontal overflow in all eight marked sections. Request routing moves its waypoint from cx104 to cx228 while scrolling and draws the active route. Verified desktop header centers at y43 for logo, navigation and actions. Carousel Next changes the quote to Licensing counsel. Report chart Deny filters counts and displays LIC-31 / CW-0020 / Deny. Counters settle to 05 / 03 / 01 and retain those values with motion disabled. Checked mobile testimonial layout at 390 × 844; clipped temporary decorative rotations to prevent horizontal overflow. Final production preview emits no warning/error logs.

Final build succeeds: initial JS 446.00 KB / 147.01 KB gzip; initial CSS 50.28 KB / 11.39 KB gzip. Policy checks still pass: 13 boundary cases, ten fixtures, 4/3/3 reconciliation and zero executions. Saved refinement screenshots are actual browser captures; some tablet captures show the entry animation in progress.

## Sign-in navigation and supporting-page motion

Added Sign in to the desktop/tablet/mobile header and mobile navigation, linking to /sign-in. Existing workspace access remains a synthetic demonstration entry; authentication is not connected. Supporting public pages animate section content from alternating sides with reversible ScrollTrigger scrub, entering from the other side when returning upward after a section. Section backgrounds remain anchored. Homepage and demo are excluded from this added behavior.

Browser verification: platform section two moves from x130/opacity0 to x13.375/opacity0.8971 to x0/opacity1 on downward scroll and returns to x13.375/opacity0.8971 on upward scroll. Sign in opens /sign-in. At 390px header and page have no horizontal overflow. Homepage has no supporting-page motion class. Build passes; final browser warning/error logs empty. Actual sign-in desktop capture: screenshots/sign-in-navigation-desktop.png.

## Material background correction

Removed every decorative atmosphere SVG line and point layer after user review. Replaced ruled-paper overlays and dotted/diagonal suite patterns with broad color fields, subtle original grain, and original archive/passage imagery framing the evidence and pilot cards. Dark forest counters with lilac numerals improve the visual rhythm. Questions use quiet off-white; closing uses a warm peach-to-lilac field. Product diagrams and scroll scenes remain functional. Restored Sample workspace alongside Sign in in the visible header and mobile menu.

Browser checked at 775px and 390px: zero horizontal overflow, both links visible, zero atmosphere-drawing elements. Actual captures: material-scope-tablet.png and material-evidence-tablet.png.

## Final entrance and responsive release pass — 9 October 2026

The opening sequence now provides keyboard-reachable Pause/Resume and Skip controls. Desktop controls are 44px high; mobile controls are also 44px high and fit inside 390px without overflow. Browser checks confirmed that Pause holds the camera transform and WebGL ribbon time, Resume continues, Skip lands the hero below the sticky navigation, and scrolling back to the top shows the static passage frame without recreating the canvas overlay. Motion off suppresses the entrance and leaves all content visible; the preference was restored to Motion on after the test.

Loaded-route checks covered the homepage, all five product pages, product overview, platform, why-rights, solutions overview and all four role pages, pricing, workshop, validation, resources overview and both guides, about, contact, trust, sign-in, privacy, terms, demo, and branded unknown-route recovery. At 1440×900 no tested route produced horizontal overflow or a broken image. The seven primary public/demo routes also passed at 390×844. The mobile sample workspace, pricing, sign-in and contact form were visually inspected. Empty contact submission exposed five inline errors, marked each associated field invalid and focused the first invalid input.

Supporting-page motion was checked on pricing: successive section containers alternated from -130px and +130px, settled at x0 while in view, exited on the opposite side, and reversed to the prior state while scrolling upward. Homepage remains excluded from this route-level pattern. The homepage testimonial control advanced from sample 01 to sample 02 while keeping the visible “illustrative perspectives, not customer endorsements” disclosure. Final browser warning/error log was empty.

Final commands: `npm test` passed 13 policy cases and 10 fixtures with 4/3/3 reconciliation and zero executions; `npm run build` completed successfully with Vite 8.3.4. WebGL-unavailable and context-loss fallbacks remain code-reviewed rather than hardware-forced. Hosted Core Web Vitals and assistive-technology certification remain deployment-stage checks.
