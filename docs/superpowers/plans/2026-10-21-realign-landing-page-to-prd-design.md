# Realign Landing Page to PRD/DESIGN — Implementation Plan

> **For agentic workers:** execute this plan task-by-task (native execution in this session; user directed "lanjutkan pekerjaan").

**Goal:** Rebuild the Next.js landing page so it strictly matches docs/PRD.md §5 (exactly 7 bands) and docs/DESIGN.md §2–§10 (tokens, layout, components, motion, responsive, accessibility), satisfying FR-01..FR-23 and QA checklist §12.

**Architecture:** Keep the existing Next.js 16 app-router + shadcn/ui + Tailwind v4 stack. Align design tokens and markup to DESIGN.md. Reduce `page.tsx` to the 7 PRD bands (Header, Hero, About & Value, Metrics & Impact, Value Proposition, Featured Work, Footer); remove out-of-scope sections (TrackRecord, TrustBand, Services, Projects, Approach, Safety, Testimonials, Faq, ClosingCta) that reference non-existent `site-data.ts` exports and missing images. Reuse existing `brand.tsx`, `reveal.tsx`, `reveal-observer.tsx`; rewrite `hero.tsx`, `site-header.tsx`, `site-footer.tsx`; create `about.tsx`, `metrics.tsx`, `value-proposition.tsx`, `featured-work.tsx`.

**Tech Stack:** Next.js 16 (app router), React 19, Tailwind v4, shadcn/ui, Lucide, `motion`.

**Spec:** docs/PRD.md and docs/DESIGN.md (in repo root). DESIGN.md wins for visual; PRD.md wins for behavior (PRD §10 rule #4).

## Global Constraints (verbatim from specs)

- Colors: `--page #fbfaf7`, `--band #f2f0ea`, `--surface #fff`, `--ink #161616`, `--muted #6b6a64`, `--line #e7e4dc`, `--green #1f3328`, `--green-ink #e9ece4`, `--sage #6b7a6c`, `--sand #b9b4a6`, `--sky1 #f1efe9`, `--sky2 #e0e4e3`.
- Font: Inter 300/400/500/600 via next/font, stack `'Inter', system-ui, sans-serif`; one family only.
- h1 `clamp(34px,4.4vw,52px)` w400 lh1.12 ls-0.025em; stat `clamp(44px,6vw,76px)` w300 lh1 ls-0.04em (stat is largest element).
- Container 1160px, padding 32px; section padding 72px; radius sm4/md6/lg10/full.
- One accent color (green); no gradients, no heavy shadows, no second font, no centered headings, no UPPERCASE except eyebrow.
- PRD §10 rule #3: do not add features/sections/colors outside docs without permission.
- FR-23: content must remain visible if JS fails (reveal classes added only by JS).
- FR-22: `prefers-reduced-motion: reduce` kills ALL animation/parallax/count-up/transitions.
- `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`; no horizontal scroll 360–1920px; safe-area `env(safe-area-inset-*)`.
- Lighthouse: Performance ≥90, Accessibility ≥95, Best Practices ≥95. One `h1`, landmarks, focus visible, contrast ≥4.5:1, alt/aria-label.

## Review Focus (failure modes to pin)

1. Broken/dead imports referencing non-existent `site-data.ts` exports → pinned: Stage 1 (audit exports) + Stage file deletions.
2. Missing images (`hero-site.jpg`, `site-crew.jpg`, ...) → pinned: use only existing `public/images/*` (hero-architecture, value-*, work-*).
3. Undefined footer color vars (`--deep`, `text-deep-foreground`) → pinned: Stage 5 footer rewrite uses defined `--green`/`--green-ink`.
4. Hero solid button / wrong copy / wrong image → pinned: Stage 2 hero rewrite (no hero buttons, H1 ≤8 words, lead 10–16 words, hero-architecture.jpg).
5. `prefers-reduced-motion` not actually disabling motion → pinned: Stage 6 + CSS block already present; verify in QA.
6. Content hidden when JS fails → pinned: `.js .rv` opacity default; QA FR-23.

## Files

- Modify: `src/app/page.tsx` (7 bands only)
- Modify: `src/components/sections/hero.tsx` (rewrite)
- Modify: `src/components/site-header.tsx` (align tokens/z-index/shadow)
- Modify: `src/components/site-footer.tsx` (fix vars, DESIGN §4.9)
- Modify: `src/app/globals.css` (confirm utilities/tokens only; likely no change)
- Create: `src/components/sections/about.tsx`
- Create: `src/components/sections/metrics.tsx`
- Create: `src/components/sections/value-proposition.tsx`
- Create: `src/components/sections/featured-work.tsx`
- Delete: `src/components/sections/track-record.tsx`, `trust-band.tsx`, `services.tsx`, `projects.tsx`, `approach.tsx`, `safety.tsx`, `testimonials.tsx`, `faq.tsx`, `closing-cta.tsx` (out of scope / broken)

site-data.ts exports used: `company`, `navLinks`, `hero`, `about`, `metrics`, `valueBlocks`, `featuredWork`, `footer`.

## Stages

### Stage 0: Baseline verification
Verify build is broken (list broken imports/missing images/undefined vars). No code changes. Deliverable: confirmed list of breakages. ✓ (already confirmed via exploration: missing exports heroStats/services/etc., missing images hero-site.jpg/site-crew.jpg/project-mep.jpg/planning-desk.jpg/worker-safety.jpg/project-pump.jpg, undefined footer vars --deep/text-deep-foreground/deep-foreground).

### Stage 1: Setup & token audit
Confirm globals.css tokens match DESIGN §2.6 exactly; confirm .wrap/.btn/.more/.eyebrow/.photo/.rule/.rv utilities present; confirm Inter weights 300/400/500/600 loaded; viewport meta + safe-area in layout. Deliverable: tokens + utilities present; no change needed or minimal CSS touch-up.

### Stage 2: Header + Hero (FR-01–07)
- site-header: sticky top:0 z-index 5, `--band` bg, Brand left, nav links right (gap 28, opacity .85→1, 0.2s), CTA outline "Get in Touch", `data-scrolled` shadow when scrollY>8, mobile ≤760 hides nav (logo + CTA only), header height 56px, respects safe-area.
- hero: section bg `--band`; grid `1fr / 1.05fr`; copy left (padding 88px 48px 88px 32px; mobile 56px 24px), gap 28px; image right full-height min 380px, object-fit cover, no radius; H1 ≤8 words 2 lines (`<br>`) clamp 34–52px; lead 10–16 words clamp 17–21px w300; NO hero buttons; hero fade-in 1s; parallax translateY(scrollY×0.04) scale 1.08, off under reduced motion; use `/images/hero-architecture.jpg`.
- Verify FR-01..FR-07.

### Stage 3: About & Value + Metrics (FR-08–13)
- Create `about.tsx`: section; grid `.8fr / 2.2fr`; left: eyebrow "Our Story", h2, 1-sentence intro; right: 3 cards (badge absolute top-right, round green icon, h3, p 12–18 words, "Learn More" link pushed bottom via margin-top:auto), card bg `--surface` border 1px `--line` radius 10 shadow soft, hover translateY(-3px) border → `--sage` 0.3s; ≤900px 1 col. Use `about` data.
- Create `metrics.tsx`: section; eyebrow "Metrics & Impact", h2, intro; 4 stats (`15+ Years`, `120+ Projects`, `98% Sustainability Rate`, `24 Awards`), number clamp 44–76px w300 lh1 above label 13px muted; grid baseline; count-up 0→value 900ms once via IntersectionObserver threshold .15 rootMargin `0 0 -6% 0`; ≤900px 2-col, title full row. Use `metrics` data.
- Verify FR-08..FR-13 + hr separator after About (DESIGN §3).

### Stage 4: Value Proposition + Featured Work (FR-14–17)
- Create `value-proposition.tsx`: 2 blocks; each text + square image aspect 1.15 radius 6; desktop: left block text-then-image, right block image-then-text; gap 20 rows / 16 text-image; h3 15px w500, p 13px muted ~20 words. Use `valueBlocks`.
- Create `featured-work.tsx`: grid `1.1fr 1fr 1fr`, 2 rows 230px, gap 14px; first item `grid-row: span 2`; each `figure.ph` radius 6 overflow hidden, `figcaption` 11px white bottom-left (12/10 padding) text-shadow, caption "Featured Work 01–05"; hover image scale 1.04 0.6s cubic-bezier(.2,.7,.2,1); mobile ≤760: 2 col, first span 2 height 300, others 200. Use `featuredWork`.
- Verify FR-14..FR-17 + hr separator after Metrics (DESIGN §3).

### Stage 5: Footer + responsive (FR-18, breakpoints)
- Rewrite `site-footer.tsx`: `--green` bg, `--green-ink` text; 4 cols `1.4fr 1fr 1fr 1fr`, mobile ≤700 2 cols; col1 BrandMark + logo name + 1-sentence description; col2 Links (navLinks), col3 Company (address/founded), col4 Social (LinkedIn/Instagram/Email mailto); copyright row auto year `new Date().getFullYear()`, border-top `rgba(233,236,228,.15)`, copy 11px; padding 56px 0 28px, col gap 32px; links 12px opacity .65 hover; focus visible. Remove undefined `--deep` vars; remove font-mono headings (single Inter family).
- Breakpoints ≤900/820/760/700 per DESIGN §9; no horizontal scroll 360–1920; `viewport-fit=cover`, safe-area.
- Verify FR-18 + all breakpoints.

### Stage 6: Motion + reduced motion (FR-20–23)
- Wrap revealable titles/cards/stats/rows/photos in `.rv` (or reuse `Reveal`/`RevealObserver`); reveal: opacity 0→1, translateY 18px→0, 0.7s cubic-bezier(.2,.7,.2,1), stagger index×80ms max 400ms, IntersectionObserver threshold .15 rootMargin `0 0 -6% 0`, once per element, cleanup remove `rv`/`is-in` after animationend.
- Hero fade-in 1s (existing `.hero-copy > *` keyframe). Count-up 0→value 900ms ease-out cubic once. Header shadow scrollY>8. Hover: card -3px, work photo 1.04, button invert 0.25s.
- `prefers-reduced-motion: reduce`: kill all animation/parallax/count-up/transitions, content visible; `.js .rv` opacity 0 default so no-JS shows content.
- Verify FR-20..FR-23.

### Stage 7: QA & Lighthouse
- Run `next build`; fix all errors/warnings; confirm no console errors.
- Verify QA checklist §12: tokens match DESIGN §2; hero 2-col image right; stat largest; footer only dark block; anchor nav works; header sticky; reveal/count-up/parallax/hover once & smooth; reduced motion disables all; no horizontal scroll at 360/768/1024/1440; one h1 + heading order; alt/aria-label complete; focus visible; contrast ≥4.5:1; no copied reference text/assets.
- Deliverable: build passes, all FR met, manual QA checklist complete.

## Risks & Mitigations

- Deleting out-of-scope sections removes existing work: mitigated by PRD rule #3 + user directive to build per docs; sections are broken (missing exports/images) anyway.
- Count-up double-trigger / not once: use IntersectionObserver `once` semantics and a `hasCounted` flag; disable under reduced motion.
- Parallax layout shift / image escaping container: `overflow: hidden` on hero media wrapper, `transform` only, disable under reduced motion.
- Contrast of `--muted` on `--page`: DESIGN says ~5:1 (passes AA); keep muted ≥12px.
- Next/Image `fill` + `object-cover` in work grid may shift: set explicit widths/heights or aspect-ratio; use `sizes`.

## Verification
`next build` must pass with no errors; run Lighthouse (or `next` build output) targeting Perf ≥90, A11y ≥95, BP ≥95; manually check FR-01..FR-23 and §12 checklist at 360/768/1024/1440px and with `prefers-reduced-motion: reduce`.