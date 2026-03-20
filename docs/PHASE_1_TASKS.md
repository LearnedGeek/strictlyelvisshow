# Phase 1: Custom Site Build & Content Development - Task Checklist

**Client:** Alan Graveen - The Strictly Elvis Show
**Budget:** $1,500
**Status:** Starting
**Start Date:** March 2026
**Deadline:** Before May 6, 2026 (GoDaddy builder renewal date)

---

## Goal

Build a custom website to replace the GoDaddy builder site. Host on Netlify (free) with custom domain (thestrictlyelvisshow.com). All Phase 0 SEO work carries forward and is improved upon.

---

## 1. Custom Site Build (from POC)

POC is live at https://strictlyelvisshow.netlify.app — use as starting point.

### Pages
- [x] Homepage — hero, about preview, show packages, testimonials, CTA *(POC complete)*
- [x] Shows — three show packages (Strictly Elvis, Classic Hits, King & Diamonds) *(POC complete)*
- [x] Events — upcoming events list *(POC complete)*
- [x] Media — video gallery with YouTube embeds *(POC complete — needs real embeds)*
- [x] About — Jacque's approved wording already in place (no DJ, senior living focus) *(verified 3/19)*
- [x] Contact — wired up to Netlify Forms with honeypot spam protection *(3/19)*

### Design & Branding
- [ ] Finalize design based on Alan & Jacque's feedback on POC
- [x] Responsive design — mobile-first, tested across devices *(POC complete)*
- [x] Consistent branding — "The Strictly Elvis Show" everywhere *(POC complete)*
- [ ] Professional photo gallery (source high-quality images from Alan)
- [x] Font pairing: Playfair Display (headings) + Inter (body) *(POC complete)*
- [x] M3 dark theme with gold accents (Vegas stage lighting aesthetic) *(POC complete)*

### Content Updates
- [x] Incorporate Jacque's narrative (Elvis focus, no DJ, senior living communities) *(already in POC, verified 3/19)*
- [x] Standardize phone number: (262) 293-9805 *(already correct in POC)*
- [x] Service area cities prominently displayed *(POC complete)*
- [ ] Testimonials with event context (if Alan provides)
- [x] Clear CTAs on every page *(POC complete)*

---

## 2. SEO — Built Into the Site

- [x] Schema.org structured data (LocalBusiness + Performer) — JSON-LD on homepage with address, geo, service areas, social, ratings *(3/19)*
- [x] Meta titles and descriptions *(all 7 pages done)*
- [x] Image alt text on all images *(POC has alt text)*
- [x] Semantic HTML (proper heading hierarchy, landmarks) *(POC complete)*
- [x] Open Graph / social sharing meta tags *(all 7 pages 3/19)*
- [x] Sitemap.xml generation *(auto-generated at build time via scripts/generate-sitemap.js 3/19)*
- [x] robots.txt with sitemap reference *(auto-generated at build time 3/19)*
- [x] Canonical URLs *(all 7 pages 3/19)*
- [x] Fast page load (static site = inherently fast) *(POC complete)*

---

## 3. Location-Specific Landing Pages (SEO)

Hidden from nav, included in sitemap. Same pattern as lakecountryspanish.com/Home/AreasWeServe.

- [x] /areas-we-serve.html — main page *(3/19)*
- [x] Milwaukee section *(3/19)*
- [x] Waukesha section *(3/19)*
- [x] Madison section *(3/19)*
- [x] Kenosha section *(3/19)*
- [x] Racine section *(3/19)*
- [x] Green Bay section *(3/19)*
- [x] Beloit section *(3/19)*
- [x] Each section with location-specific keywords and CTA to Contact page *(3/19)*

---

## 4. Technical Setup

### Hosting & Domain
- [ ] Netlify custom domain configuration (thestrictlyelvisshow.com)
- [ ] DNS update at GoDaddy — point domain to Netlify
- [ ] HTTPS / SSL via Let's Encrypt (auto on Netlify)
- [ ] Verify site loads on custom domain
- [ ] Cancel GoDaddy Websites + Marketing plan (keep domain only)

### Forms & Functionality
- [x] Contact form via Netlify Forms (data-netlify="true") *(3/19)*
- [ ] Form submission notifications to Alan's email *(needs testing after domain migration)*
- [x] Honeypot spam protection *(3/19 — reCAPTCHA deferred to Phase 2 if needed)*

### Deployment
- [x] Auto-deploy from GitHub (main branch) — already configured *(working)*
- [x] Build process: Tailwind CSS compilation via npm run build *(working)*

---

## 5. Google Integration

- [ ] Update Google Business Profile website URL (if domain changes during transition)
- [ ] Google Search Console — submit sitemap (blocked on Alan granting access)
- [ ] Verify all GBP info still matches new site (NAP consistency)

---

## Deliverables

- [ ] Fully functional custom website on Netlify
- [ ] Custom domain configured with HTTPS
- [x] Schema.org markup implemented *(3/19)*
- [x] Location-specific landing pages *(3/19)*
- [x] Working contact form *(3/19 — Netlify Forms with honeypot + thank-you page)*
- [x] All Phase 0 SEO improvements preserved and enhanced *(3/19)*
- [ ] GoDaddy builder cancellation guidance for Alan
- [x] Custom 404 page — "Elvis Has Left the Page" *(3/19)*
- [x] Custom thank-you page for form submissions *(3/19)*
- [x] Favicon with gold star accent *(3/19)*
- [x] GA4 snippet stubbed — needs measurement ID from Alan *(3/19)*
- [x] Click-to-play video gallery — no iframes on initial load *(3/19)*
- [x] Clean URL redirects (/about instead of /about.html) *(3/19)*

## Lighthouse Performance Scores

**Netlify site (mobile) — progression:**

| Run | Performance | Accessibility | Best Practices | SEO |
|-----|:----------:|:------------:|:--------------:|:---:|
| Initial (pre-optimization) | 76 | 98 | 100 | 92 |
| +Image compression (600KB→78KB) | 85 | 98 | 100 | 92 |
| +Async Google Fonts | **90** | **98** | **100** | **92** |

**Comparison: Netlify vs GoDaddy (mobile):**

| Category | GoDaddy | Netlify | Winner |
|----------|:-------:|:-------:|:------:|
| Performance | 82 | **90** | Netlify |
| Accessibility | 90 | **98** | Netlify |
| Best Practices | 96 | **100** | Netlify |
| SEO | 92 | 92 | Tie |

Reports saved in `docs/client/lighthouse/`

---

## Waiting On

- [ ] **Alan & Jacque feedback on POC** — what they like/don't like, any feature requests
- [ ] **Google Search Console access** — still pending from Phase 0
- [ ] **Banner image replacement** — still pending from Phase 0
- [ ] **Testimonial event context** — optional, asked in Phase 0 email
- [ ] **Phase 1 formal approval** — Alan said "definitely want to go to next phase" but no signed scope yet

---

## Pricing Notes

- **Phase 1 price: $1,500**
- Combines original Phase 1 (Content, $1,000–1,500) with core Phase 2 items (migration, custom build, schema.org, hosting)
- POC head start reduces build time, but full production site + migration justifies $1,500
- GoDaddy builder savings: ~$15/month ($180/year) — site pays for itself in under 2 years
- Payment terms: 50% upfront ($750), 50% upon completion ($750)

### Phase 2 — Future Growth & Premium Features ($1,500–$3,000)
Premium items separated for future engagement:
- Advanced booking/inquiry system (date picker, event type, automated responses)
- Blog/content strategy with ongoing posts
- Professional photo shoots / video production
- CMS integration (DecapCMS) so Alan & Jacque can edit content themselves
- Google Ads campaign setup ($500 credit available on GBP)
- Ongoing SEO monitoring and optimization
- Social media integration / automated posting
- Email marketing setup (newsletter, event announcements)

---

## Contacts

- **Alan Graveen** — elvisg@wi.rr.com
- **Jacque Graveen** — Jacquesjunk@wi.rr.com

---

## Timeline

- **Week 1:** Finalize design from POC, incorporate all content updates
- **Week 2:** Build out remaining pages, SEO implementation, location pages
- **Week 3:** Contact form, testing, domain migration
- **Week 4:** Go live, cancel GoDaddy builder, verify everything
