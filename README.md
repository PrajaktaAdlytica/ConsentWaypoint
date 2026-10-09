# Consent Waypoint

Consent Waypoint is a premium, story-led SaaS website for a research-stage rights operations concept. It pairs an animated passage entrance and interactive homepage with a complete public site, five product modules, editorial resources, pricing, forms, and an isolated synthetic sample workspace.

## Repository map

- `website/` — deployable React 19 + Vite website
- `outputs/consent-waypoint-brand-kit/` — complete browsable brand identity kit
- `outputs/CONSENT_WAYPOINT_BRAND_IDENTITY.md` — master brand identity document
- `outputs/CONSENT_WAYPOINT_INFORMATION_ARCHITECTURE.md` — website IA and content architecture
- `outputs/brand-assets/` — production logo, favicon, app icon, icon and manifest files
- `outputs/hero-exploration/` — approved hero and entrance direction, sources, prompts and visual studies
- `work/` — reproducible brand-kit generators and acceptance review

## Run locally

```bash
cd website
npm ci
npm run dev
```

Open `http://127.0.0.1:4320/`. The sample workspace is at `/demo`.

## Verify

```bash
cd website
npm test
npm run build
```

The policy test covers 13 boundary cases and reconciles ten synthetic checks to 4 Allow, 3 Requires counsel, 3 Deny, and zero executions. Responsive browser QA and current limitations are recorded in `website/qa/QA_NOTES.md`.

## Deploy on Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import `PrajaktaAdlytica/ConsentWaypoint` from GitHub.
3. Set **Root Directory** to `website`.
4. Vercel should detect Vite. Confirm:
   - Framework preset: `Vite`
   - Install command: `npm ci`
   - Build command: `npm run build`
   - Output directory: `dist`
5. No environment variables are required for the current fixture-only build.
6. Deploy, then directly open `/products/rights-review`, `/legal/privacy`, and `/demo/receipts/CW-0017` to confirm SPA rewrites.
7. Add the production domain under **Project Settings → Domains**, then apply the DNS records Vercel shows at the domain provider.

`website/vercel.json` contains the deep-link rewrite used by the React router. Forms currently prepare a local brief and do not transmit data; authentication, CRM, live analytics transport, payment, and production integrations are intentionally not connected.

