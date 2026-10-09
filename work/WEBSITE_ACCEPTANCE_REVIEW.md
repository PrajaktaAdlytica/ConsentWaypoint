# Consent Waypoint — implementation acceptance review

Review basis: supplied startup brief, STARTUP_WEBSITE_MASTER_GUIDE.md, approved Evidence in Motion brand, IA v1.1, and latest request for clean public copy with GSAP/ScrollTrigger/Lenis. Reviewed 9 October 2026. This checklist records outcomes to verify; it does not establish completion.

## Buyer journey and route completeness

- Home communicates use rights, human-reviewed clause basis, five named offers, and workshop action within the first meaningful screens.
- All five modules have distinct, useful pages: Desk / Review / Proof / Signal / Report. Links and direct reloads work; a shared template is acceptable only with different mechanisms, evidence, and copy.
- `/why-rights`, `/platform`, `/solutions` plus four buyer destinations, `/pricing`, `/validation`, `/resources` plus two articles, `/about`, `/contact`, `/trust`, `/workshop`, `/sign-in`, privacy, terms, and branded 404 support the planned paths without empty routes.
- Header and footer provide real routes; mobile visitors reach the same destinations. Unknown social profiles use an informative inactive state, never `#` or guessed profile URLs.
- Forms and sign-in expose their actual capabilities before input. No credential form exists without authentication; no “received” or “booked” state appears without confirmed delivery.

## Claims and clean public presentation

- Public diagrams have concise functional titles and labels; ornamental assets need no repeated preview captions. Public product maturity is explained once where useful, without a ribbon on every chapter.
- No invented customer identity, endorsement, headshot, company logo, adoption number, revenue, certification, live connector, legal validity, automatic interpretation, or enforcement guarantee.
- Stats may describe actual proposed scope (five modules, five rights, one pilot source family). Outcome charts carry synthetic context and derive from visible rows.
- Use buyer responsibilities as unquoted prose in public proof areas. If fictional testimonial layouts are retained, disclose that fact directly beside them; “Trusted by” is unsupported.
- $7,500 pilot / $2,500 monthly source-family prices are labeled commercial hypotheses beside the prices; no active checkout.
- Privacy/terms explain current behavior and unresolved operator/delivery details accurately. No guessed address, email inbox, retention promise, or claim of legal approval.

## Request and evidence integrity

- Canonical LIC-17: internal read allowed; internal embedding conditional; external inference requires counsel; redistribution denied. A missing destination, retention, clause condition, or review state never creates permission.
- Access authorization is shown separately from use rights. Review state, rights outcome, execution state, and output state use separate fields.
- Requires counsel → paused → output none. Deny → blocked → output none. An allow result records permission without implying a model call or completed retrieval.
- Receipt context and source references match the currently selected request, including source ID, purpose, destination, retention, policy version, and counsel action.
- Allowed-output lineage belongs to a separate permitted sample. Paused/denied LIC-17 requests never show a generated-output node.
- Expiry/takedown workflow assigns an owner and action; downstream deletion stays unconfirmed without evidence. Counts of decisions are not relabeled actual usage.

## Isolated demo and reconciled data

- Persistent “DEMO — SYNTHETIC DATA” boundary on every demo view and export; fictional source excerpts and review metadata remain distinguishable from real approved contracts.
- Queue contains 8–12 coherent source records, stable IDs, owners, dates, and next actions, including expired, missing-condition, rejected, pending, and reviewed cases.
- Source records and evaluation events have distinct counts/IDs. Report totals, filters, tables, and charts reconcile to a fixed versioned fixture.
- Reset restores original selections and mock state; clears no real lead or consent record. Dictionary explains fields, sample date, decisions, and fixture limitations.
- No model calls, sends, billing, contract uploads, policy writes, third-party fixture requests, or synthetic events mixed with real leads.

## Story motion and interaction

- Desktop homepage has a continuing evidence object and chapter transformations: rights unfold, context changes a branch, evidence assembles a receipt. Section variety follows the brand’s paper/lilac/ink/sage environments.
- Dedicated pages explain their own mechanism through purposeful motion. Reading/legal pages use restrained motion and preserve full readable content.
- Lenis and ScrollTrigger share one clock; route changes clean old triggers/listeners/tickers and refresh after layout/font changes. Browser Back, anchors, direct paths, and focus scroll remain correct.
- No passive scroll overwrites explicit request choices, form data, chart filters, or selected evidence. Reverse scroll retraces only illustrative scenes.
- Reduced motion provides full still states with no hidden text, forced pins, parallax, or smooth-scroll delay. Mobile/touch uses natural stacked content and usable diagram alternatives.
- Flip/hover interactions have button/touch/keyboard equivalents; hidden card faces are inert. Required information never depends on hover.
- Offscreen/hidden animation pauses; no infinite product telemetry loops or essential autoplay. Long intro sequences have skip/pause controls.

## Completion evidence

- Capture real 1440px and 390px hero, core request/evidence, pricing, demo boundary, queue/detail/receipt, and actual form outcome; asset/source/viewport recorded.
- Verify keyboard menu open/close/Escape/focus return, visible focus, native labels and errors, accordions, filters, reset, and status announcement.
- Verify no page-level horizontal overflow; intentional tables have scroll affordances and readable labels. Text/status contrast, alt text, button names, and content order remain accessible.
- Build and direct-route smoke checks pass; inspect runtime console and network for broken assets, failures, leakage, and unintended remote requests.
- Production handoff describes local run/build, deployment rewrite rules, source dependencies, actual delivery/auth/analytics status, and outstanding operating inputs. Site implementation and customer validation remain separate.

## Findings log

Initial inspection: `website/` contains dependency setup and copied original assets; implementation source was not yet available. No source defect established at this point. Browser inspection is owned by the parent agent.

Source review during implementation (in-progress snapshot; fixes may land concurrently):

| Priority | Finding | Required outcome |
|---|---|---|
| High | `Home.jsx` defines Internal environment → Allow for Inference, whereas the demo’s reviewed LIC-17 scope only grants reading, conditional indexing and working copies. | Same source/use produces the same policy result on home and demo; internal inference stays unresolved unless a separate approved scope is represented. |
| High | Raw `<br>` tags occur in Home/Products JSX. | Compile valid JSX (`<br/>`) before browser review. |
| Medium | Home/Suite evidence uses v1.2 and Mira as reviewer; demo uses R2.4 and Elian as counsel with Mira as rights owner. | Canonical source, review roles and policy version agree across the continuing story. |
| Medium | Demo’s evaluator grants embedding using only source ID, destination and retention; approved internal index identity is assumed rather than selected or visibly fixed. No named model field exists in request/export. | Explicit approved index/model assumptions are represented, and mismatch or missing index does not allow embedding. Receipt records the full evaluated context. |
| Medium | Demo references `reviewer` and `link` icons which are not in the copied 26-icon set. | Existing appropriate icons or original added assets resolve without 404s. |
| Medium | Desktop mega-menu Escape removes a focused link without restoring focus to its trigger. | Escape returns to the controlling menu button. Mobile dialog focus/background behavior verified by keyboard. |
| Design completeness | Five product pages currently reuse generic Folio step illustrations/output ledger. IA calls for distinct module mechanisms beyond the differing hero visuals. | Each page exposes one relevant task: citation/version, request branch, receipt/ancestor, date queue, or report/table filter. |

Positive source evidence: ten source records and ten evaluation events reconcile to 4 Allow / 3 Requires counsel / 3 Deny, with zero executed actions. Unknown demo routes have explicit recovery. Canonical external LIC-17 receipt is paused with output null, and lineage is a clearly separate authored fixture. Form completion explicitly prepares a local file and states that nothing was sent; no invented customer proof was found in reviewed public copy. Source review does not replace rendered QA or verify motion/runtime behavior.

## Final disposition — 9 October 2026

All initial source defects in the findings table were resolved during implementation: valid JSX, canonical R2.4 / Elian review metadata, inference ambiguity preserved, named model/index checks, icon aliases, menu focus return, and five distinct module mechanisms. Parent browser QA covered desktop/mobile routes, actual control outcomes, form validation/completion, report filters, reduced-motion and built deep-link reloads. A duplicate pricing reveal was found and fixed during rendered QA.

Reproducible policy QA is now `npm test` in `website/` (13 boundary cases plus ten fixtures). Final rendered evidence and limitations are in `website/qa/QA_NOTES.md`, not inferred from this initial review checklist. Production hosting, delivery/auth/analytics connections and real customer validation remain separate outstanding milestones.
