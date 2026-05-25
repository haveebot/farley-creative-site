# CLAUDE.md — farley-creative-site

This file auto-loads when a Claude session opens the farley-creative-site repo. It points the session at the right context for whoever is sitting at the keyboard.

## What this repo is

The **public marketing site** for Farley Creative — Collie's marketing + branding agency. Lives at `farleycreative.com` (eventually; currently on Canva).

**Distinct from** `farley-creative-hub`, which is the operator-tier dashboard running the studio's operations at `hub.farleycreative.com`. Don't conflate them.

## Brand canonical

The Hub's `brand_kits` table (`is_studio_self=true`) is the single source of truth for:
- Voice + tone
- Color hierarchy (Warm Black foundation, Cream backdrop, Butter Yellow CTAs, Forest Teal anchor)
- Typography (Montserrat + Times New Roman Condensed)
- Visual identity (stripe motif, photo-led, refined editorial)

The site's CSS color tokens in `src/app/globals.css` mirror this kit. When the kit gets updated, the site CSS should follow.

## Phase status

See README. Phase 1 in progress: Home + About + Services + Contact.

## Conventions

- **No hardcoded brand strings.** Tagline, color values, contact email all centralized.
- **Photo-led, not illustration-led.** Don't introduce vector illustrations unless explicitly asked.
- **No coastal-glossy agency tone.** Voice principles from the brand kit are non-negotiable.
- **Author commits as** `haveebot <haveebot@gmail.com>` for Vercel build-author parity (same as Hub, PAL, brons-beach).
- **Commit convention:** lowercase imperative subject. `feat:`, `fix:`, `polish:`, `copy:`, `docs:`.

## Cross-references

- Hub repo: `~/Projects/workspace/farley-creative-hub/`
- Phase 0 audit: `farley-creative-hub/Farley Creative Hub/website-audit/farleycreative-com-phase-0.md`
- HeyeDeploy framework: `~/Projects/workspace/heyedeploy/`
- Workspace memory: `~/.claude/projects/-Users-winstoncaraker-Projects-workspace/memory/`
