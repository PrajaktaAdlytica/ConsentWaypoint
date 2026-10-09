# Deployment and operating runbook

## Local preview

Double-click `start-preview.command`, then visit http://127.0.0.1:4320/. Leave that terminal running. If port 4320 is occupied, use the URL printed by Vite or stop the earlier project server. The website has no environment-variable requirement in fixture mode.

Production verification: `npm ci`, `npm test`, `npm run build`, `npm run preview`. Use `npm run preview -- --port 4321` when the development server already occupies 4320.

## Hosting configuration

The deployable project root is **website/**, not the parent research workspace. A Vercel project should use the included `package-lock.json`, build command `npm run build`, and output directory `dist`. `vercel.json` routes public and demo deep links to the React entry point and preserves `/assets/` requests. Test a direct reload of `/products/rights-review`, `/legal/privacy` and `/demo/receipts/CW-0017` after hosting.

Source repository: `https://github.com/PrajaktaAdlytica/ConsentWaypoint`. Import that repository in Vercel and set the project root to `website/`. The current build does not create a Vercel project or connect a domain. The proposed consentwaypoint.com name remains unpurchased and uncleared; no ownership claim is made.

### Vercel dashboard steps

1. Choose **Add New → Project** and import `PrajaktaAdlytica/ConsentWaypoint`.
2. Set **Root Directory** to `website`.
3. Confirm **Vite**, install command `npm ci`, build command `npm run build`, and output directory `dist`.
4. Leave environment variables empty for this fixture-only release.
5. Deploy and verify direct reloads of `/products/rights-review`, `/legal/privacy`, and `/demo/receipts/CW-0017`.
6. Add the production domain in **Project Settings → Domains** and copy Vercel's displayed DNS records to the domain provider.

## Connections before accepting real requests

1. Establish approved operator/contact details, brand/domain clearance and privacy copy for the real deployment.
2. Connect workshop/contact to a controlled server endpoint. Keep only work email, role, company, high-level qualification, optional interview preference and explicit consent. Do not add agreement uploads to the public form.
3. Return confirmed success only after durable server delivery. Use validation, rate limiting, idempotent request IDs, deletion/retention controls, and verification where required. Replace the current local-brief completion copy only when that endpoint exists.
4. Connect a consent-aware analytics receiver using `ANALYTICS.md`. Separate demo activity from real lead events. Do not replay fixture names or source excerpts to an external service.
5. Connect authentication only when an actual workspace is available. Replace the current access screen with the approved auth experience and establish appropriate controls.
6. Publish social profile links only after real company profiles exist. Current footer buttons explain the unpublished state.

The sample workspace must remain separate from any future real product. Allow/deny/requires-counsel are local mock decisions; nothing executes. Downstream deletion and licensor delivery remain unverified. Actual contract interpretation requires approved human review.

## Release and rollback

Run tests and build, inspect screenshots and keyboard/mobile states, then deploy a versioned commit. Check hosted deep links, forms, motion preference and sample exports. Retain the previous successful deployment for rollback. Record the commit, deployment URL, build time, operator, and outstanding connections in the experiment record. Do not mark demand, paid pilots or actual usage complete on the basis of a website release.
