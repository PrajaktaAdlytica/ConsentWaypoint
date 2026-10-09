# Event instrumentation

Current behavior: **no analytics provider or outbound transport is connected**. The browser emits nothing unless an integration explicitly sets `window.CW_ANALYTICS_CONSENT = true` after obtaining valid consent. `src/analytics.js` then dispatches `cw:analytics` CustomEvents locally. Revoking consent means setting the flag false and disabling any connected receiver immediately.

Each event has `event`, UUID `event_id`, ISO `at`, and `environment` (`public` or `synthetic_demo`). Only `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` are copied, capped at 100 characters. Do not place personal data or agreement references in campaign parameters. A browser-session set suppresses duplicate event/path/id combinations. A connected server must additionally dedupe by event_id; browser deduplication is not server delivery assurance.

| Event | Current trigger | Boundary |
|---|---|---|
| landing_view | Home route opens | Consent-gated local event |
| demo_open | Demo route opens | Synthetic-demo environment |
| receipt_view | Canonical receipt route opens | Viewing is not completion |
| demo_complete | Visitor explicitly finishes the receipt walkthrough | No retrieval is executed |
| pricing_view | Pricing route opens | No accepted offer or purchase implied |
| form_start | First focus in a workshop/contact lead form | Product request controls do not trigger this |
| brief_prepared | Valid form prepares its local brief | Not delivered, submitted or verified |
| form_submit | Not active | Add only after server confirms actual lead delivery |
| verified_signup | Not active | Server-confirmed verification; never fire from button click |
| interview_booked | Not active | Confirmed scheduled booking; not an interview-interest checkbox |

Receiver implementation should minimize payloads, segregate synthetic fixture events, suppress email/company/free-text values, rate limit ingestion, dedupe server-side, apply a documented retention period and support deletion/revocation. Do not add external analytics to the fixture bundle before consent QA. No event in this build represents customer validation, live source usage, payment or a legal approval.
