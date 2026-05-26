# Next actions

Persistent log of pending operator-tier work for `farleycreative.com`. Cross off when done.

## Operator (Winston) tasks

- [ ] **Add DKIM record for `google._domainkey.farleycreative.com`** — improves email deliverability when Collie sends client mail from `collie@farleycreative.com`. 5-min add via the registrar DNS panel:
  - Get the DKIM value from Google Workspace admin → Apps → Google Workspace → Gmail → Authenticate email → generate DKIM key for `farleycreative.com` (2048-bit)
  - Workspace gives you a long TXT value
  - Add at registrar as `TXT` record with host `google._domainkey` and the value from Workspace
  - Wait ~10 min, then go back to Workspace admin and click "Start authentication"
  - Verify: `dig +short TXT google._domainkey.farleycreative.com` should return the long key

- [ ] **Confirm Collie's Vercel team access** to `haveebots-projects/farley-creative-site` — she may already be in (Hub access carried over) but worth visually confirming in Vercel team settings so previews + project dashboard work for her

## Collie's first edits (whenever she's ready)

The site is hers to customize. She has write access to `github.com/haveebot/farley-creative-site` (invite sent 2026-05-25). To make changes:

- **Smallest edits** (copy, color, content): edit files directly in GitHub web UI → commit → auto-deploys via Vercel
- **Bigger changes** (layout, components, new sections): open the repo in Claude Code on her laptop (same flow as the Hub repo) and describe what she wants — Claude makes the change + pushes
- **Brand kit canonical** lives in the Hub's `brand_kits` table (`is_studio_self=true`). When she updates voice/colors/typography there, the site CSS tokens in `src/app/globals.css` should follow

## Cutover follow-ups

- [x] DNS cutover from Canva → Vercel (2026-05-25)
- [x] SSL provisioned + verified
- [ ] Monitor that Canva billing for the website hosting is cancelled (separate from domain registration)
- [ ] Decide whether to publish a sitemap to Google Search Console + Bing Webmaster tools for indexing
- [ ] (Phase 2 polish) Annual prepay discount option for monthly Social Media tiers
- [ ] (Phase 2 polish) À la carte add-ons table at bottom of `/packages`

## Content gaps to fill

- [ ] Real client logos for "Who we've worked with" strip on home (placeholder text right now)
- [ ] Sage Em case study hero image (currently text-only)
- [ ] Real photography for Cinnamon Shore additional gallery item (Google Ads banners collage downloaded but not yet wired)
- [ ] Collie's review of the package tier deliverable wording on `/packages`
