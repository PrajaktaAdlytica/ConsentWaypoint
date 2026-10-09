# Consent Waypoint — complete component and visual system

Version 2.0 · 8 October 2026 · Evidence in Motion

Open `index.html` through a local web server for the complete interactive specimen. All assets are local; no dependency installation is needed. Use `python3 -m http.server 4187 --bind 127.0.0.1 --directory outputs`, then open `/consent-waypoint-brand-kit/`.

The brand identity document is the design authority; the IA describes the eventual company website. This package is a working brand kit, not that entire website.

## Design contracts

- Canvas #F6F3EC, surface #FFFEFA, ink #202522, action coral #B8422B, lilac #D8CEF2 and sage #DDE7DC. Expression coral #D45538 is decorative.
- Fonts: Manrope variable 200–800, used at 400–700; IBM Plex Mono 400/500 for metadata. Local source font files and OFL notices are included.
- Layout: 1312px content maximum; 12 desktop columns with 24px gaps and 64px minimum margins; tablet eight columns / 32px margins / 24px gaps; mobile four columns / 20px margins / 16px gaps. The grid selector is a scaled schematic, not a viewport resize.
- Space: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px. Evidence padding 32px desktop / 20px narrow.
- Radius: 4 labels, 8 controls, 12 evidence, 16 media, 24 scenes. Three shadow elevations complement flat tables.
- Icons: original 24px viewBox, 1.75px stroke, rounded joins. Social marks use separate licensed source files, not a redrawn house icon.

## Interaction inventory

Color swatches copy hex values. Grid and environment buttons use aria-pressed. Source/use/destination controls update synthetic evidence. Chart buttons filter the fixed ten-event table. Buyer journey buttons explain one stage. Flip uses an explicit persistent button and inert inactive face. Quote controls never hide their fictional disclosure. Forms validate only in browser memory and show “nothing was sent.” All controls have keyboard semantics and visible focus.

Motion sequence uses native controls with 800ms transform transitions and explicit play/pause. It pauses offscreen and on hidden tabs. Reduced motion makes frame selection instant; Play advances a single still. No viewport pinning or scroll-jacking is implemented in this kit. Future scroll choreography remains specified in the brand guide and IA.

## Source and state rules

Three source specimens: LIC-17 Atlas Reference, LIC-22 Lumen Research (missing conditions), LIC-31 Cedar Index (expired). Owners are fictional. LIC-17 external inference always requires counsel, redistribution is denied, internal read can be allowed. A permitted result does not execute content. Every result has Output: None. The ten chart events form a separate fixed sample and do not change when the workbench is manipulated.

Do not remove the DEMO boundary from diagrams, screenshots or exports. Pricing and testimonial placeholders keep their disclosures adjacent to the content.

## File map

- `index.html`, `kit.css`, `kit.js`: complete 18-section interactive specimen.
- `brand-assets/`: logo/mark/favicon/font exports and original icon sprite.
- `icons/`: 26 individually downloadable original icons.
- `visuals/`: generated folio still and seven original SVG visuals.
- `social/`: licensed LinkedIn and Crunchbase specimens with notices.
- `brand-tokens.css`, `brand-tokens.json`: semantic implementation foundation.
- `CONSENT_WAYPOINT_BRAND_IDENTITY.md`: updated identity and component specification.
- `CONSENT_WAYPOINT_INFORMATION_ARCHITECTURE.md`: website IA including pricing, stats and fictional testimonials.
- `ASSET_PROVENANCE.json`: sources, generation prompt and file hashes.
- `QA_NOTES.md`: completed checks and limitations.

## User flow coverage

Rights owner → source evidence → counsel review → request context → evaluated decision → decision receipt. A pending review never implies approval. Buyer flow: understand → inspect → qualify owner/counsel → scope funded pilot. Workshop completion in this kit is a local preview, not a booked meeting.


## Visual library expansion 2.1
Open `visual-library.html`: two original generated material images, three charts, four workflow diagrams, one receipt figure and three editable HTML tables. Filter by visual type and inspect the independent 12-event synthetic fixture. Eight SVGs are individually downloadable; data is supplied as CSV and JSON. See `library/visual-brief.md` for semantics and implementation.
