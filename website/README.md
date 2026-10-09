# Consent Waypoint website

A runnable, responsive React website using the approved **Evidence in Motion** identity. Homepage chapters use original paper objects, permission branching, inspectable evidence, and five distinct module scenes. Supporting pages include their own diagrams, workbenches, charts, tables and motion. GSAP ScrollTrigger and Lenis share one animation clock; mobile uses native touch scrolling and stacked content.

## Open and run

The current local server is **http://127.0.0.1:4320/**. Open `/demo` for the isolated sample workspace. If the server stops, double-click `start-preview.command` or run from this directory:

```sh
npm ci
npm run dev
```

Node.js 22.12+ or 24+ is suitable for the installed Vite version. Dependencies are pinned and the lockfile is included.

```sh
npm test
npm run build
npm run preview
```

`npm test` checks 13 policy boundaries and reconciles all ten evaluation fixtures. The build writes `dist/`.

## Pages

| Group | Routes |
|---|---|
| Story | `/`, `/why-rights`, `/platform` |
| Products | `/products`, `/products/rights-desk`, `/products/rights-review`, `/products/rights-proof`, `/products/rights-signal`, `/products/rights-report` |
| Buyers | `/solutions`, plus `/solutions/data-governance`, `/solutions/licensing-counsel`, `/solutions/data-partnerships`, `/solutions/retrieval-engineering` |
| Commercial | `/pricing`, `/workshop`, `/validation` |
| Resources | `/resources`, `/resources/rights-matrix-guide`, `/resources/shadow-pilot-method` |
| Company | `/about`, `/contact`, `/trust`, `/sign-in`, `/legal/privacy`, `/legal/terms` |
| Sample workspace | `/demo`, `/demo/records/LIC-17` and nine other records, `/demo/request`, `/demo/receipts/CW-0017`, `/demo/lineage`, `/demo/lifecycle`, `/demo/reports`, `/demo/dictionary` |

Unknown paths display a branded recovery page.

## What works now

Navigation, scroll scenes, motion preference, responsive layouts, permission controls, evidence flip, product mechanisms, chart filters, source queue, receipt inspector, local fixture exports and reset. Workshop/contact validate inputs and prepare a local downloadable brief. No details are transmitted or saved by those forms.

The website is a frontend implementation of the supplied concept. Account authentication, actual lead delivery, CRM, analytics storage and product integrations are not connected. The access page provides honest sample-workspace access instead of collecting credentials. Pricing remains a hypothesis. No customer results or endorsements are invented.

## Handoff files

- `DEPLOYMENT.md`: run, host, routing and operational connections.
- `ANALYTICS.md`: consent hook, events and delivery deduplication requirements.
- `qa/QA_NOTES.md`: checks, screenshots and remaining verification.
- `EXPERIMENT_READOUT.md`: buyer validation template and stop/go criterion.
- `public/assets/ASSET_PROVENANCE.json`: original art, fonts, icons and fixture provenance.

Brand kit and identity documents remain in the parent project's `outputs/` directory. Website tokens live in `src/styles.css`; module visuals live in `src/Mechanism.jsx`; synthetic records and evaluator live in `src/Demo.jsx`.
