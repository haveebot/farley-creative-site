# Packages — best practices reply

**Collie's ask (asset descriptions on Hub IDs 12 + 13):**
> "Best practices, industry standards, packages and rates will be helpful in developing this for the website. Collie will design, if Havee presents best practices for wording, presentation and pricing structure of the tiers."

Here's the pass. Use what's useful, ignore what isn't.

---

## Pricing structure — what the tiers should do

A tiered package strategy works hardest when each tier has a clear job:

| Tier | Job | Audience |
|---|---|---|
| **Entry** | Reduce commitment barrier, prove value | First-time clients, small projects, "let me see if this is real" |
| **Standard** | Sweet spot for SMB clients — covers 80% of demand | Founders + leadership at small-to-mid businesses |
| **Growth** *(highlight)* | The "most chosen" anchor — price + scope visible to make Standard look like a deal | Established brands scaling marketing investment |
| **Enterprise** | Anchor pricing, signals you can play at the top | Large brands, full-service expectations |

**Your prices already follow the pattern** — $500 → $1,500 → $5,000 → $8,500 for Brand & Marketing, and $500 → $750 → $1,250 → $2,000 for Social Media. The 1.5x–3x jumps between tiers are well-calibrated. Don't change them.

**One recommendation:** consider marking the Growth tier as "Most chosen" or "Most popular" (we did this on the site with the highlighted card style). It anchors the price point and tells visitors what most of your clients pick. This is the single biggest conversion lever on tiered pricing pages.

---

## Tier naming — your names are good, here's why

Your tier names (Seed → Foundation → Growth → Enterprise) follow agency best practice perfectly. They:

- **Describe growth stage**, not features. "Foundation" means more than "Plus" because it implies a business stage.
- **Are aspirational** — clients want to "grow into" Enterprise, not "settle for" it.
- **Read in order** — left to right, the progression is obvious.

For Brand & Marketing, "Identity → Branding → Brand Launch → Enterprise Rebrand" works the same way. Each name describes what the engagement *is for*, not what's *in it*.

**Don't change them.**

---

## Tier wording / deliverables — recommendations

For each tier, the deliverables list should follow these rules:

### Be concrete and countable
- ✅ "5–7 posts per month"
- ❌ "Regular posting"
- ✅ "Up to 3 brand revisions"
- ❌ "Multiple revisions"

### Lead with deliverables, follow with services
- ✅ "Monthly analytics report" (a thing)
- ❌ "We provide reporting" (an action)

### Use parallel structure across tiers
If "Monthly analytics report" appears in three tiers but the depth grows, write it as:
- Seed: "Monthly analytics report (baseline)"
- Foundation: "Monthly analytics report (reach + engagement + follower change)"
- Growth: "Monthly analytics report (full funnel + paid attribution)"

The repetition + escalation tells visitors *what* gets deeper.

### Cap each tier at ~7 deliverables
More than 7 turns into a checklist nobody reads. If you have 12 deliverables in Enterprise, group them under headers (Content · Strategy · Reporting) or move some to "Add-ons available."

### One "you'll get this only here" item per tier
Each higher tier should have at least one deliverable the previous tier lacks entirely. Examples from your draft:
- Foundation: adds "Monthly strategy check-in call"
- Growth: adds "Dedicated account manager" + paid ad management
- Enterprise: adds "Custom copy + creative"

This makes the jump *worth* the jump.

---

## Presentation — the visual frame

### Layout
- **4 tiers fit in a single row on desktop, stack on mobile** — what we built on `/packages`. Keep them visually equal in height so visitors compare line by line.
- **Highlight the "Most chosen" tier visually** — different background color, taller card, or a small label. We used black background + butter-yellow accents on the Growth tier; works.
- **Price is the visual anchor** — show it big. Tier name secondary.

### Disclaimer placement
- ✅ Bottom of the packages page (we have it: "All prices vary with the scope...")
- ✅ Repeated at the bottom CTA
- Avoid putting it next to each price — reads as defensive

### "Most chosen" / "Recommended"
- Best on tier 3 of 4 — anchors as the smart middle choice
- Use sparingly — too many badges = confused

---

## Pricing structure — what to add later

Three things worth considering for V2:

1. **"Starting at $X"** prefix when scope varies a lot. Lets you keep the headline price low while protecting yourself on bigger scopes.
2. **Annual prepay discount** on monthly tiers — 10% off if paid annually is industry standard for recurring services. Cashflow + retention win.
3. **À la carte add-ons table** at the bottom of `/packages` — e.g., "Add a brand book ($X), add a copywriter ($Y/mo)" — captures upsell intent without bloating tiers.

These are all V2/V3 — your current tier structure is strong as-is.

---

## What I shipped on the site

- **`/packages` page** — both tier families laid out per these best practices, Growth/Brand Launch highlighted, full disclaimer at bottom
- **Tier deliverables** — my first-pass wording based on standard agency practice; edit freely. The `src/lib/packages.ts` file is the source — change there and the page re-renders.
- **CTAs** — each tier links to `/contact?package={tier-slug}` so when someone clicks "Start with Growth →" the contact form (eventually) pre-selects that package.

Anything in the deliverables that's wrong / off / missing — flag it and we'll edit. The structure mirrors your assets exactly; the wording is the part that's mine and absolutely yours to rewrite.
