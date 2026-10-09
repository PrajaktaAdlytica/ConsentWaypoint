from pathlib import Path
import json,shutil,hashlib
r=Path('outputs');k=r/'consent-waypoint-brand-kit';p=r/'CONSENT_WAYPOINT_BRAND_IDENTITY.md';s=p.read_text().replace('Version 1.0','Version 2.0',1)
s=s.replace('| Brand specimen | `brand-board.html`; review aid, not website implementation |','| Complete interactive brand kit | `consent-waypoint-brand-kit/index.html`; 18 visible specimen sections with working controls |\n| Earlier compact specimen | `brand-board.html`; retained as the earlier review artifact |')
s=s.replace('| 3D folio and editorial imagery production exports | Future asset production; selected concept is visual reference only |','| Original material artwork and visual library | Generated folio still plus seven original editable SVG illustrations/diagrams in the complete kit |')
s=s.replace('| Official social assets and real profile URLs | Pending verified inputs |','| Social icon specimens | LinkedIn from Bootstrap Icons (MIT), Crunchbase from Simple Icons (CC0), licenses included; these are third-party vector specimens, not official brand approval |\n| Real social profiles and trademark-use check | Pending; controls explicitly explain “Profile pending” |')
s=s.replace('Official social assets are a separate pending input, not part of the original icon sprite. Use official permitted variations;', 'Social icons are separate from the original sprite. The kit includes third-party LinkedIn and Crunchbase vector specimens with license notices; publication still requires confirming applicable trademark use. Use approved variations;')
s=s.replace('Future stock, generated image, video and social assets need their own source/license entry.', 'The complete kit includes `ASSET_PROVENANCE.json` with the generated folio prompt, original SVG inventory, and social/font attribution. Any additional stock, video or social asset needs a new source/license entry.')
s+='''

## 15. Complete interactive kit — version 2.0

The earlier brand board was a compact specimen. The full review surface is now `consent-waypoint-brand-kit/index.html`, with portable assets and `Consent-Waypoint-brand-kit.zip`. FlakeMap was inspected for the breadth of its deliverables, not copied for its palette, layouts, copy, product data, assets or interaction code. Consent Waypoint retains its own clause-window metaphor, paper/ink/coral/lilac/sage identity and rights-specific mechanisms.

### Visible coverage and behavior

| Requested item | Included visual specimen | Working behavior |
|---|---|---|
| Logo, favicon and identity | Primary/reverse/compact marks, small-size examples | Downloadable vector/raster files |
| Colors | 12 semantic swatches and three decision chips | Copy a hex value; readable fallback if clipboard is unavailable |
| Fonts and text styles | 12 type rows, local Manrope and IBM Plex Mono | Responsive display sizes; source fonts and notices included |
| Grid and margins | 12/8/4-column schematic and breakpoint table | Select desktop, tablet or mobile schematic |
| Spacing | 13-step scale and contextual spacing contracts | Visible size specimens; no arbitrary animated count-up |
| Shadows and depth | Flat, paper, evidence and overlay surfaces | Four elevation specimens with exact values |
| Different backgrounds | Paper, rules, lilac, ink, sage, calendar, aperture and art | Environment selector changes surface, title and intended use |
| Cards with images and illustrations | Material feature, branch diagram, operational record and evidence flip | Media reveal, slight lift, rail emphasis and explicit face toggle |
| Buttons and states | Default, hover, focus, pressed, selected, disabled, loading, error, success and empty | Local actions, selected toggle and complete field feedback |
| Dashboard | Three-source rights-review workbench | Source selection, requested use, destination, result, citation, receipt and reset |
| Diagrams and maps | Seven original editable SVG illustrations and diagrams | Downloads; destination topology explains boundaries without geographic claims |
| User flows | Reviewer flow and four-step buyer journey | Select a buyer stage for its corresponding explanation |
| Charts and tables | Ten-event outcome bars, source table and rights matrix | Bar selection filters exactly matching source events; clear filter restores ten |
| Icon set | 26 consistent original UI/module SVGs plus sprite | Download individual files |
| LinkedIn and Crunchbase | Separate monochrome social specimens | Explain missing profile URL; do not invent links or create profiles |
| Motion and hovering | Three-scene folio, card lift, mask/scale reveal, rail, explicit flip | Play/pause/scene controls; pause offscreen/hidden; reduced-motion stills |
| Pricing | Two-stage pilot/ongoing composition and scope FAQ | Workshop anchor and accessible scope disclosure; hypothetical labels remain visible |
| Stats | 5 modules, 5 rights, 1 source family | Scope facts only; chart outcomes separately labeled synthetic |
| Testimonials | Three role-based quote compositions | Manual carousel; persistent fictional-placeholder disclosure |
| Forms and access | Polished access-preview panel and workshop form | Local validation, retained errors, checkbox, honest no-send completion and reset |
| Footer and handoff | Complete kit links, social states and bundle | Working local links and download bundle |

### Commercial and evidence components

Prices remain test hypotheses: $7,500 pilot and $2,500/month per governed source family. Do not imply accepted pricing, unlimited scope or an active checkout. Scope statistics describe the proposed offering. The ten chart events are a separate fixed synthetic dataset with 4 Allow, 3 Requires counsel and 3 Deny. They are not source-document counts or actual usage.

Testimonials use the visible label **Illustrative testimonial — fictional placeholder** and example buyer roles without invented names, customer logos, ratings or outcomes. Each placeholder is replaced only after quote and attribution approval. Marketing polish does not change evidence status.

### Media and asset treatment

The folio image is original generated material artwork, made with the built-in Image Generation tool. It is a visual metaphor, not a product screenshot or a legal artifact. Seven SVG visuals remain editable: rights folio, decision route, receipt chain, deadline calendar, report ledger, destination map and reviewer flow. All product text in them is fictional and labeled. Actual UI remains HTML, so controls and tables can be selected, resized and read by assistive technology.

### Specimen boundaries

This kit demonstrates a three-record workbench to evaluate component behavior. The eventual isolated product demo still needs the 8–12-record fixture scope from the brief and full route implementation. The kit performs no real policy writes, sends, analytics, authentication, model calls, or lead storage. It is not the public company site. See the kit QA notes for checks actually performed and untested areas.
'''
p.write_text(s)
for n in ['CONSENT_WAYPOINT_BRAND_IDENTITY.md','CONSENT_WAYPOINT_INFORMATION_ARCHITECTURE.md']:shutil.copy2(r/n,k/n)
(k/'DESIGN_SYSTEM.md').write_text('''# Consent Waypoint — complete component and visual system

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
''')
(k/'README.md').write_text('''# Consent Waypoint brand kit

Open `index.html` using a local static server. The kit is fully local and includes fonts, visual assets, source files and design specifications. Open the parent directory as server root to use the optional adjacent ZIP download; individual assets work inside the kit.

This is an identity/design-system deliverable, not a deployed product. Start with the brand identity document, then the information architecture. See QA_NOTES.md for validation coverage.
''')
