# Consent Waypoint — Brand identity and interaction system

Version 2.0 · 8 October 2026 · Selected territory: **Evidence in Motion**

This is a build-ready identity specification for the concept-preview website and isolated synthetic demo. The user selected the first visual concept. The company name, domain, legal position and commercial offers remain provisional; selection of a design does not establish trademark clearance, operating-product status or buyer demand.

## 1. Source hierarchy and design decisions

The Consent Waypoint brief and the user's explicit requests govern scope. `STARTUP_WEBSITE_MASTER_GUIDE.md` supplies coverage and quality defaults. The guide's example prompt is reference material, not an instruction to deploy, create profiles or build a production product during this documentation stage.

| Input | Applied decision |
|---|---|
| Original concept #5 brief | Counsel-reviewed rights records, five proposed modules, one-source pilot, tri-state decisions, synthetic demo, workshop conversion |
| User-selected Evidence in Motion | Warm paper, ink, coral, lilac and sage; clause-window folio; large editorial typography |
| Hear, preferred over Blackbird | Scene transformations, layered evidence, deliberately paced reveals; original compositions and native scrolling |
| Adaptyx screenshots | A central explanatory object and connected labels; use original content-specific imagery |
| Forge screenshots | Precise rules, generous space, numbered structure and thin diagrams |
| Stripe screenshots | Polished UI evidence and distinct visual treatments; no borrowed customer proof |
| Master guide | All five modules visible on Home, in navigation, in the directory, on individual pages and in intake; complete layout/state/motion rules |

The selected generated concept establishes visual intent. Its mock text is not approved policy, contract language, measured evidence or a specification of actual product behavior. The original brief and the fixture rules below override any inconsistent generated text.

## 2. Brand strategy

**Working brand:** Consent Waypoint. **Category description:** proposed agent data rights workbench. **Audience:** enterprise data governance and licensing/privacy counsel. **Sponsor:** data partnerships owner. **Integrator:** retrieval engineer.

**Positioning:** Check intended agent use against documented, human-reviewed licensed-content rights, and route uncertainty to the responsible reviewer.

**Tagline:** “Check permitted use, destination and retention before agent retrieval.”

**Vision:** Each use of governed content has a documented, human-reviewed basis and provenance.

**Mission:** Translate approved contract clauses into purpose-sensitive policy checks, with ambiguity escalated to counsel.

| Character | Visible expression |
|---|---|
| Precise | Source IDs, dated review states, explicit inputs and outcomes |
| Accountable | Named fictional owner, next action, clause citation and decision receipt |
| Calm | Large reading areas; quiet surfaces; restrained semantic color |
| Tangible | Paper folios and editable product-shaped diagrams |
| Clear | Plain verbs, readable labels and visibly separate access/use questions |

Use language such as “proposed,” “human-reviewed policy,” “simulated decision,” “inspect clause,” and “retrieval paused.” Avoid “automated legal interpretation,” “compliance guaranteed,” “protected everywhere,” “delete everywhere,” “unique category,” or unverified claims about adoption and savings. Established rights-management platforms and contextual authorization tools already address adjacent needs.

## 3. Product portfolio and naming

| Proposed module | Job | Signature visual | Status |
|---|---|---|---|
| Consent Waypoint Rights Desk | Human-reviewed machine-readable rights registry | Folio, matrix and cited source pane | Proposed module |
| Consent Waypoint Rights Review | Purpose/model/destination/retention checks at retrieval | Request inspector and decision branches | Proposed module |
| Consent Waypoint Rights Proof | Decision evidence and provenance for permitted derived outputs | Receipt and source-to-output chain | Proposed module |
| Consent Waypoint Rights Signal | Expiry, change and takedown coordination | Lifecycle timeline and owner swimlane | Proposed module |
| Consent Waypoint Rights Report | Licensor usage statements and audit-packet assembly | Ledger, reconciliation and report anatomy | Proposed module |

Use full names at first introduction; shortened “Rights Desk” etc. thereafter. These are separate proposed directions, not five live plans. The first pilot recommendation is Rights Desk plus shadow checks for one license family; all five directions remain visible.

## 4. Logo, wordmark and favicon

The **Clause Window** mark has two opposing ink corner brackets and a coral point. The brackets represent a bounded evidence frame; the point marks the question currently under review. This is an original vector reconstruction of the selected direction's visual motif, not a trademark-cleared mark.

Assets in `brand-assets/`: primary/reverse/monochrome marks; primary/reverse/monochrome horizontal lockups; compact lockup; SVG favicon; 16/32/48px PNG favicon exports and ICO; 180px Apple touch icon; 192/512px application icons; a manifest. Primary, reverse, monochrome and compact lockups have outlined wordmarks and are font-independent. `logo-editable.svg` retains editable Manrope text; use the outlined versions for external handoffs.

**Geometry:** 64-unit mark; 7-unit stroke; restrained 3-unit corner roundness; 6-unit-radius point. Keep the point inside the frame. Horizontal lockup: 32px mark, 10px gap, 24px/650 wordmark at standard header size. Clear space is at least one point diameter around every lockup. Minimum mark: 20px in ordinary UI; 16px favicon uses the dedicated raster. Minimum horizontal lockup: 160px wide. Never stretch, rotate, add a glow, recolor the point to a decision-status color, or place it over busy artwork. On ink backgrounds, use the reverse ivory brackets and the coral point. Social logos stay independent of the company mark.

## 5. Palette and semantic colors

Color variety marks a narrative change; it must not redefine the company identity on each page. Warm paper remains the main reading environment. These roles are mirrored in `brand-tokens.css` and `brand-tokens.json`.

| Role | Hex | Use |
|---|---|---|
| Paper canvas | `#F6F3EC` | Main pages and editorial reading |
| Sheet surface | `#FFFEFA` | Forms, tables, product surfaces |
| Ink | `#202522` | Main text, dark stages, primary neutral controls |
| Secondary text | `#5A625D` | Supporting copy, metadata |
| Coral expression | `#D45538` | Brand point, decorative rails and visual emphasis |
| Coral action | `#B8422B` | Filled action controls with ivory text |
| Coral hover | `#9E3521` | Action hover |
| Coral pressed | `#862D1C` | Action pressed |
| Lilac chapter | `#D8CEF2` | Rights distinctions and provenance environments |
| Sage chapter | `#DDE7DC` | Ownership, evidence and responsibilities |
| Allow ink / tint | `#226043` / `#E5EFE7` | Check icon plus Allow text |
| Counsel ink / tint | `#79500C` / `#FFF1CC` | Review icon plus Requires counsel text |
| Deny ink / tint | `#942F32` / `#FBE7E7` | Stop icon plus Deny text |
| Focus | `#4D3AA0` | Visible light-surface keyboard focus |
| Dark-surface focus | `#D8CEF2` | Visible focus on ink |
| Boundary | `#8B948D` | Inputs and interactive outlines |
| Quiet divider | `#CDD3CB` | Nonessential row separation |

Coral expression is not the small-text action color. Large pastel backgrounds use ink text, not white text. Status always includes an icon, label and explanation. Requires counsel is unresolved, not a softer denial or permission. The accompanying `contrast-checks.json` records calculated pairings; these calculations do not certify the future website's accessibility.

## 6. Typography

**Manrope** is the display, wordmark, body and UI family; use 400/500/600/650/700. **IBM Plex Mono** is restricted to IDs, clause references, timestamps, structured samples and small technical labels; use 400/500. Two families total. Supply local font files and original OFL notices; do not synthesize italic or bold styles. Marketing body is 18px; product UI body is 14–16px. Keep long text to 62ch, helper text to 48ch. Do not make whole paragraphs monospace.

| Style | Desktop | Mobile | Line height / tracking |
|---|---|---|---|
| Hero display | 88px, 650 | 44px, 650 | 1.02 / -0.045em desktop; -0.03em mobile |
| H1 interior | 64px, 650 | 40px, 650 | 1.08 / -0.035em |
| H2 chapter | 52px, 650 | 32px, 650 | 1.12 / -0.03em |
| H3 | 32px, 600 | 26px, 600 | 1.2 / -0.02em |
| H4 | 24px, 600 | 22px, 600 | 1.25 / -0.01em |
| H5 / H6 | 20px / 18px, 600 | Same | 1.35 / 0 |
| Lead | 22px, 400 | 20px | 1.5 / 0 |
| Body marketing | 18px, 400 | 17px | 1.6 / 0 |
| Body UI / table | 15px, 400 | 15px | 1.5 / 0 |
| Nav / button | 14px, 600 | 15px | 1.25 / 0 |
| Small / caption | 13px / 12px | 13px / 12px | 1.5 / 0 |
| Eyebrow | 12px mono, 500 | Same | 1.4 / 0.08em; short uppercase labels only |
| IDs / diagram labels | 13px mono / 14px sans | At least 13px / 14px | 1.45 / 0 |

Hero type scales fluidly between the endpoints. Headings wrap naturally; do not shrink long copy to preserve an artboard. Use sentence case. Table numerals are tabular. Quotes appear only when real approved quotations exist; no testimonial styling is needed at concept stage.

## 7. Grid, margins, spacing and rhythm

At 1440px viewport, use 64px page gutters and 1312px content width; cap ordinary content at 1312px. Wide visuals may bleed to the viewport edge while captions return to the content grid. Twelve desktop columns, 24px gaps. At 768–1199px, eight columns and 32px gutters. Below 768px, four columns, 16px gaps and 20px gutters. At 390px, usable width is 350px. Product demo converts its three-pane workbench into list → detail → evidence navigation.

Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px. Most controls use 8/12/16. Card padding is 24px desktop / 20px mobile; evidence panes 32px / 20px. Chapters have 96–128px vertical padding desktop and 56–72px mobile. Heading-to-copy gap 20–24px; copy-to-visual 40–48px. Reading width 720px maximum; form width 640px. Align title, description, preview and CTA bands across comparable product panels without fixed heights that clip text.

Header: 80px desktop / 64px mobile; sticky with an opaque sheet surface after scrolling. Anchors use header height + 16px scroll margin. Mega menu fits inside viewport height, traps focus only when implemented as a modal drawer, and dismisses with Escape or outside activation. Mobile drawer includes the entire page map.

## 8. Surfaces, backgrounds, radii and shadows

| Environment | Construction | Meaning / placement |
|---|---|---|
| Paper field | Solid canvas; no noise behind body text | Home hero, company and workshop |
| Clause rules | Very faint horizontal lines at 32px intervals, masked away from text | Rights Desk and source evidence |
| Lilac split | Solid lilac beside sheet, with asymmetric 5/7 column split | Five-rights explanation and Rights Proof |
| Ink decision stage | Solid ink, ivory labels, coral route, white product result | Rights Review and Home request chapter |
| Sage ledger | Solid sage, structured row lines, clear labels | Rights Report and trust ledger |
| Calendar grid | Paper base, 48px subtle grid, active date rail | Rights Signal |
| Evidence aperture | A bounded rectangular mask; reveals a sheet beneath | Home section transition |
| Quiet art wash | Soft lighting confined to a material render | Folio/receipt media only; no repeated gradient wallpaper |

Default radii: 4px labels; 8px inputs; 12px evidence sheets; 16px media cards; 24px large scene panels; pill radius for short actions only. Avoid one radius on every object. Borders: 1px; diagram strokes: 1.5–2px. Fine paper shadows: `0 8px 24px rgba(32,37,34,.08)`; elevated evidence: `0 20px 64px rgba(32,37,34,.12)`; overlays: `0 24px 80px rgba(32,37,34,.18)`. Tables need rules rather than shadows. Layer map: base 0, diagram 1, evidence 10, header 40, menu 50, modal 80; no decorative layer covers controls.

## 9. Component and state system

| Family | Geometry and content | Interaction |
|---|---|---|
| Primary action | 48px height, 20px horizontal padding, coral-action fill, ivory text, 8px radius | Masked arrow travels 4px; darker fill on hover; stable label |
| Secondary | 48px, ink boundary, transparent/white surface | Sheet fill and route underline |
| Text link | Text plus arrow or external-link icon | Underline draws; underline remains for focus |
| Icon control | Minimum 44×44px hit area, 20px graphic | Named tooltip; focus-equivalent label |
| Module media panel | Title, job, original workflow visual, proposed badge, direct page link | Rail expands; route or media reveals a relevant second state |
| Evidence flip | Summary and citation; fixed stable area sized to longer face | Explicit Inspect/Back button; optional decorative hover hint |
| Rights row | Right, decision, conditions, source and review state | Select exposes matching clause; no hidden required metadata |
| Inspector | Labeled purpose/model/destination/retention inputs | Selection recomputes simulated result; preserves user choice |
| Deadline row | Source, deadline, owner, action and progress | Expand details; distinguish pending from confirmed |
| Report block | Scope, units, chart/table, source and fixture label | Select chart item filters matching rows |
| Input | 48px tall, 8px radius, visible label, help text | Boundary darkens; focus ring; error text tied to control |
| Status chip | Text + check/review/stop icon, semantic tint | No animation implying approval |

Every appropriate control has default, hover, focus-visible, pressed, selected, loading, disabled, success and error definitions. Disabled controls explain why. Loading retains the label and announces progress; do not generate fake loading when work is instantaneous. Form errors retain input, summarize errors and associate messages with fields. Success names actual delivery behavior. Destructive styling is limited to real destructive actions; demo reset uses a neutral secondary action labeled “Reset demo.”

**Flip specification:** 420ms rotation in a stable perspective container only on explicit activation; essential status remains outside the flipping face. Inactive face is inert and hidden from assistive technology. Focus stays on the persistent toggle, whose label/state changes. Touch activates by tap. Reduced motion swaps the content instantly. Use it for clause summary → citation and receipt summary → structured sample, not every card.

Other distinct hover patterns: 220ms module rail growth; 180ms route highlighting with labels unchanged; 240ms media-mask reveal; 160ms table row tint; 200ms diagram ancestor highlight. Prefer 0–2px elevation for selected object families. No random tilts, cursor chasing or label displacement. Social marks do not flip or morph.

## 10. Icons, illustrations, imagery and diagrams

The included original `icons.svg` sprite provides consistent 24×24 UI and module symbols. Use 1.75px rounded strokes and 16/20/24/32px rendered sizes; arrows remain horizontal with optical alignment. Status shapes differ. Decorative symbols have `aria-hidden`; icon-only controls have explicit labels. Use an external icon library only if its license and visual weight are recorded; do not mix icon families.

Footer includes recognizable **LinkedIn [in]** and **Crunchbase** marks in 44px target containers, next to readable names when space allows. Profile URLs are not supplied. The build must show unlinked, accessible “Profile not published” states until actual URLs are available; never use `#` or another company's profile. Social icons are separate from the original sprite. The kit includes third-party LinkedIn and Crunchbase vector specimens with license notices; publication still requires confirming applicable trademark use. Use approved variations; do not tint trademarks coral or merge them with the company logo. No company profiles are created by this work.

**Imagery:** original paper/material folio hero; macro source-clause still; layered evidence sheet; original receipt render. Product captures must later be genuine renders of the implemented synthetic workspace. Generated visual concepts are labeled and never treated as screenshots of operating software. No invented team photo, generic robots, glowing orbs or decorative cybersecurity locks.

**Diagram grammar:** source = sheet; request = outlined rounded rectangle; reviewed policy = bounded table; decision = labeled branch junction; receipt = folded-corner sheet; derived output = separate document; ownership = named lane. Connect arrows at explicit ports, outside labels. Solid line means represented relationship; dashed line means proposed/outside-boundary relationship, explained by legend. Annotate simulation beside the figure, not only in the footer. Color accompanies words. Provide a text description and table equivalent for important figures.

**Maps:** use a conceptual source/destination topology because location is not part of this offer. No world map implies regional hosting, customer coverage or data residency. Add geographic maps only when approved location facts make them useful.

**Charts:** timelines explain dates; outcome bars explain fixture decisions; reconciliation charts explain report rows. Every chart states units, dataset, date range, sample status and source rows. No arbitrary count-ups, ROI, risk-reduction or usage claims. Unknown is distinct from zero. Rights outcomes are not usage measurements.

## 11. Motion language

The shared subject is a stable evidence folio carrying `LIC-17`. Animation changes its state or reveals its supporting evidence. Hear inspires the experience of scene replacement; its exact layouts, artwork and distinctive dot-field effect are not copied.

Recommended durations: micro 160–220ms; object reveal 360–480ms; scene transition 700–900ms. Ease: `cubic-bezier(.22,1,.36,1)` for entrance; linear progress for scrubbing. Text remains readable and selectable. Prefer transforms/opacity; do not animate layout dimensions continuously. Decorative video loops stop offscreen and when the tab is hidden; provide Pause and a poster.

| Home scene | Trigger and change | Up-scroll | Mobile / reduced motion |
|---|---|---|---|
| Hero | Entry: folio layers align and five labeled tabs appear; static headline loads first | Entry remains visible | Complete folio still |
| Access vs rights | Progress: document passes an existing access gate, then five distinct use questions unfold | Diagram retraces | Stacked gate and table |
| Clause aperture | Desktop scroll: bounded clause window expands into the next lilac evidence environment | Aperture reverses predictably | Simple section transition |
| Destination | Short pinned stage: request context appears, external inference highlights Requires counsel | Scrub reverses unless visitor has selected controls | Standard inspector; no pin |
| Evidence and receipt | Source citation appears before outcome details; unresolved request shows no output | Layers retrace; text stays visible | Complete evidence and receipt stacked |
| Modules | Five different previews enter in sequence; each job stays visible | Entrances do not reset | Vertical panels with still previews |
| Ownership / pilot | Role highlight, then quiet scope accordion | State persists | Native controls |

Use at most two short pinned chapters on Home, with total added scroll distance capped initially at 240vh; tune after real content measurement. Dedicated pages may have one focused pin. Do not pin below 1024px width or on short screens below 700px viewport height. Pinning never traps scrolling. Native anchors, wheel, keyboard and browser find must work. User interaction suspends passive demo state changes until “Resume story” or reset. Scrolling never submits forms, approves policy, triggers exports or changes a visitor's selected destination.

`prefers-reduced-motion` disables pinning, forced smoothing, parallax and flips; all figures show a complete readable state with explicit controls. Pause/Skip are required only for any later long intro. No intro is needed for this direction.

## 12. Product semantics and fixture contract

Permissions, review state, evaluation outcome and execution state are separate fields. “Reviewed” means a fictional human reviewed a synthetic policy record; it does not mean every request is allowed.

| LIC-17 right | Synthetic rule | Example outcome |
|---|---|---|
| Read | Allowed for internal research | Allow |
| Embedding | Limited to approved internal index and conditions entered by fictional counsel | Allow only when all sample conditions match; otherwise Requires counsel |
| External model inference | Unresolved; needs counsel review | Requires counsel → paused |
| Retention | Explicit sample conditions must be entered; never infer a duration | Missing/unsupported duration → Requires counsel |
| Redistribution | Disallowed in fictional approved policy | Deny → blocked |

Any specific embedding or retention duration introduced later is a synthetic fixture choice, not a supplied contract fact. External inference has no generated answer or derived-output provenance. Its receipt records decision evidence only. Rights Proof can show a separate permitted **synthetic** internal-output example with an explicit source chain. An Allow evaluation is not proof content was executed or transmitted. Policy evaluation cannot guarantee enforceability once content leaves the boundary.

Every demo route, screenshot, export and report keeps **DEMO — SYNTHETIC DATA** and **CONCEPT PREVIEW** visible. Demo navigation and explicit mock-state changes are allowed; sending, credentials, billing, third-party calls and real policy writes are not. Fixtures never become real analytics or leads.

## 13. Asset inventory and handoff status

| Deliverable | Current status |
|---|---|
| Identity, layout, states, visual and motion rules | Specified here |
| Information architecture, journeys and page plans | `CONSENT_WAYPOINT_INFORMATION_ARCHITECTURE.md` |
| Brand mark, SVG lockups, PNG/ICO icons | Included in `brand-assets/` |
| Fonts and notices | Included locally with original OFL notices and source hashes in the asset manifest |
| Semantic CSS/JSON tokens and contrast pairings | Included |
| Original core icon sprite | Included |
| Complete interactive brand kit | `consent-waypoint-brand-kit/index.html`; 18 visible specimen sections with working controls |
| Earlier compact specimen | `brand-board.html`; retained as the earlier review artifact |
| Original material artwork and visual library | Generated folio still plus seven original editable SVG illustrations/diagrams in the complete kit |
| Genuine product screenshots, responsive site and safe demo | Future implementation |
| Social icon specimens | LinkedIn from Bootstrap Icons (MIT), Crunchbase from Simple Icons (CC0), licenses included; these are third-party vector specimens, not official brand approval |
| Real social profiles and trademark-use check | Pending; controls explicitly explain “Profile pending” |
| Legal notices/contact operation/analytics delivery | Draft scope in IA; operational details unresolved |
| Domain and trademark clearance | Unverified, unpurchased according to brief; must not be presented as cleared |

## 14. Sources and licensing record

The supplied master guide was read in full. Prior reference research and the user's screenshots inform design, not product claims. Technical and brand-source checks used the configured Perplexity search tool on 8 October 2026.

- [Hear](https://www.hear.ai/) — live scroll inspection and supplied screenshots; primary motion reference.
- [Hear design case study](https://www.ecrin.digital/newsroom/hear-ai-awwwards-winning-website-case-study) — research context for scene-driven motion.
- [Adaptyx](https://adaptyx.bio/), [Forge](https://www.forgegrowthinfra.com/), [Stripe](https://stripe.com/) — visual direction references; no assets reused.
- [Manrope](https://fonts.google.com/specimen/Manrope) and [font license](https://github.com/google/fonts/blob/main/ofl/manrope/OFL.txt) — source and OFL notice.
- [IBM Plex Mono source](https://github.com/google/fonts/tree/main/ofl/ibmplexmono) — font and bundled OFL notice.
- [LinkedIn [in] guidelines](https://brand.linkedin.com/in-logo) — separate official mark use; preserve approved forms.
- [Crunchbase profile guidance](https://support.crunchbase.com/hc/en-us/articles/115011823988-How-do-I-create-a-Crunchbase-profile) — profiles require factual company information; not authorization to create one.
- [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) — proposed implementation tooling.

Original brand geometry, UI icons and diagrams are authored for this project. Downloaded font notices remain with the files. The complete kit includes `ASSET_PROVENANCE.json` with the generated folio prompt, original SVG inventory, and social/font attribution. Any additional stock, video or social asset needs a new source/license entry. This document defines design readiness; it does not claim the public website, demo, validation or launch is complete.


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


## Visual library expansion 2.1
Open `visual-library.html`: two original generated material images, three charts, four workflow diagrams, one receipt figure and three editable HTML tables. Filter by visual type and inspect the independent 12-event synthetic fixture. Eight SVGs are individually downloadable; data is supplied as CSV and JSON. See `library/visual-brief.md` for semantics and implementation.
