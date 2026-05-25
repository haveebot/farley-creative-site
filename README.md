# Farley Creative — marketing site

Public marketing presence for **Farley Creative**, Collie Farley's marketing + branding agency.

- **Live:** `farleycreative.com` (planned — currently on Canva; cutover after Phase 2)
- **Operator dashboard (separate):** [`hub.farleycreative.com`](https://hub.farleycreative.com) — runs the studio's operations
- **Brand canonical:** the Hub's `brand_kits` table (`is_studio_self=true`). Voice, color hierarchy, visual identity all flow from there.

## Stack

Next.js 16 · React 19 · Tailwind 4 · TypeScript · Vercel.

Matches the Hub stack so contributors don't have to context-switch.

## Phases

- **Phase 0 (DONE):** [audit](https://github.com/haveebot/farley-creative-hub/blob/main/Farley%20Creative%20Hub/website-audit/farleycreative-com-phase-0.md)
- **Phase 1 (in progress):** Home · About · Services · Contact. Lives at Vercel preview URLs until Phase 2 cutover.
- **Phase 2:** `/work` index + 2-3 case studies with real Collie/client material. DNS cutover from Canva.
- **Phase 3:** Journal + lead-capture polish + newsletter (optional).

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.
