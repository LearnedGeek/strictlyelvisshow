# The Strictly Elvis Show — Site Audit Report

**Prepared for:** Alan Graveen
**Prepared by:** Learned Geek Consulting
**Date:** March 10, 2026
**Site:** thestrictlyelvisshow.com (GoDaddy Website Builder)

---

## Executive Summary

A page-by-page audit of thestrictlyelvisshow.com identified **27 issues** across branding, SEO, content, and technical categories. The most impactful problems are: a persistent spelling error in the business name, zero SEO metadata on any page, missing image alt text site-wide, and stale/empty content sections that make the business appear inactive.

All issues below are categorized by the Phase 0 task they fall under and rated by priority.

---

## 1. Branding Consistency Issues

| # | Issue | Location | Priority |
|---|-------|----------|----------|
| 1.1 | **"Stricly" typo** — Footer on every page reads "The Stricly Elvis Show" (missing 't') | All pages — footer copyright | Critical |
| 1.2 | **"Stricly" in page title** — Homepage `<title>` tag reads "The Stricly Elvis Show" | Homepage `<title>` | Critical |
| 1.3 | **Two phone numbers displayed** — 262-293-9805 and 414-467-5761 shown together on every page without clarity on which to call | All pages — footer | High |
| 1.4 | **Phone number formatting inconsistency** — Sometimes shown as "(414) 467-5761", other times as "414-467-5761" | Homepage hero vs. footer | Medium |
| 1.5 | **Business name mismatch** — Contact page lists address under "Magic Moments DJ" not "The Strictly Elvis Show" | Contact Us page | Medium |

---

## 2. SEO Issues

| # | Issue | Location | Priority |
|---|-------|----------|----------|
| 2.1 | **No meta descriptions** — Zero pages have a meta description tag | All pages | Critical |
| 2.2 | **Generic/duplicate page titles** — Every page uses "The Stricly Elvis Show" (with typo) as the title. No unique per-page titles | All pages | Critical |
| 2.3 | **No image alt text** — All images across the site lack descriptive alt text | All pages | High |
| 2.4 | **No location keywords** — No city names (Milwaukee, Waukesha, Madison, etc.) appear in page content or metadata | All pages | High |
| 2.5 | **No target keywords** — Terms like "Elvis tribute," "Elvis impersonator," "Wisconsin Elvis" are not used strategically | All pages | High |
| 2.6 | **No Google Business Profile** — Business does not appear in Google Maps or local search results | N/A | Critical |
| 2.7 | **Images load as placeholder GIFs** — Shows page images appear as base64 placeholder GIFs rather than actual photos | Shows page | High |

---

## 3. Content Issues

| # | Issue | Location | Priority |
|---|-------|----------|----------|
| 3.1 | **Stale event listing** — Events page shows "Christmas at Meadowmere" on 12/12/2025 (3 months ago). Makes business appear inactive | Events page | Critical |
| 3.2 | **Empty blog section** — Blog section exists on homepage with no content | Homepage | High |
| 3.3 | **Empty photo gallery** — Photo gallery section appears empty/placeholder | Homepage | High |
| 3.4 | **Truncated text** — About page text cuts off mid-sentence: "Or any occasion you" | About page | High |
| 3.5 | **No service area info** — No mention of cities served, travel radius, or geographic coverage | All pages | High |
| 3.6 | **No booking CTA on Shows page** — Shows page describes 3 show types but has no "Book Now" or "Contact" button | Shows page | High |
| 3.7 | **Testimonials lack attribution** — Testimonials on homepage use first names only, no event type or date | Homepage | Medium |
| 3.8 | **No email address on Contact page** — Contact form exists but no email address is displayed for direct contact | Contact Us page | Medium |
| 3.9 | **No embedded map** — Contact page has a physical address but no Google Maps embed | Contact Us page | Low |
| 3.10 | **Media page videos may not render** — Audit detected song titles but no visible YouTube embeds in the HTML | Media page | High |

---

## 4. Technical Issues

| # | Issue | Location | Priority |
|---|-------|----------|----------|
| 4.1 | **Events URL is "/events-3"** — Non-standard URL slug suggests multiple event page iterations; may have orphaned old pages | Events page | Medium |
| 4.2 | **No clear mobile CTA** — No tap-to-call button prominently displayed for mobile users | All pages (mobile) | Medium |
| 4.3 | **GoDaddy "Powered by" badge** — Footer shows "Powered by GoDaddy Website Builder" which reduces professional credibility | All pages — footer | Low |
| 4.4 | **"Events old" page** — Original proposal noted an "Events old" page visible in navigation; may have been cleaned up but should verify | Navigation | Medium |
| 4.5 | **Contact form lacks confirmation** — Form says "I will get back to you soon" but no indication of expected response time | Contact Us page | Low |

---

## Page-by-Page Summary

### Homepage (/)
- "Stricly" typo in title tag and footer
- Hero shows phone (414) 467-5761
- About section, testimonials (3), track record section present
- Empty photo gallery and blog sections
- No meta description, no alt text on images
- Contact form at bottom with reCAPTCHA

### Shows (/shows)
- Three shows described: Strictly Elvis, Classic Hits, King & Diamonds
- All images are placeholder GIFs — no actual photos loading
- No booking CTA anywhere on page
- Footer has "Stricly" typo
- External link to Eric Ebert's site (ericdiamondproductions.com)

### Events (/events-3)
- Shows one past event: Christmas at Meadowmere (12/12/2025)
- Stale content makes business appear inactive
- URL slug "/events-3" is unusual
- Footer has "Stricly" typo

### Media (/media)
- Lists 10 song titles but video embeds may not be rendering properly
- No descriptive text or context for videos
- Footer has "Stricly" typo

### About (/about)
- Bio for Alan Graveen — 20+ years performing, Magic Moments DJ since 2007
- Lists event types served (good content, needs formatting)
- Text truncated: "Or any occasion you" cuts off
- "Contact Me" CTA present
- Footer has "Stricly" typo

### Contact Us (/contact-us)
- Contact form with Name and Email fields
- Address: Magic Moments DJ, 20576 W Forest View Drive, Lannon, WI 53046
- No email address displayed
- No embedded map
- Footer has "Stricly" typo

---

## Recommended Fix Priority

### Do First (Critical — Immediate Impact)
1. Fix "Stricly" → "Strictly" everywhere (footer, page title)
2. Remove or update stale Christmas event
3. Pick one primary phone number, display consistently
4. Add meta titles and descriptions to all pages (see separate SEO document)

### Do Second (High — SEO & Credibility)
5. Add alt text to all images
6. Fix placeholder images on Shows page
7. Fix truncated text on About page
8. Remove empty blog section
9. Remove or populate empty photo gallery
10. Add "Book Now" / "Contact" CTA to Shows page
11. Add service area information (cities served)
12. Add location keywords to content

### Do Third (Medium — Polish)
13. Standardize phone number formatting
14. Add email address to Contact page
15. Improve testimonial attribution
16. Verify no orphaned "Events old" page exists
17. Display business name (not "Magic Moments DJ") on Contact page address

### Nice to Have (Low)
18. Add embedded Google Map to Contact page
19. Add expected response time to contact form
20. Remove "Powered by GoDaddy" if possible

---

## What GoDaddy Builder Can vs. Cannot Do

### Can Do in GoDaddy Builder
- Fix text/spelling errors
- Update phone numbers
- Add/remove sections (blog, gallery)
- Update images and add alt text
- Add meta titles and descriptions (limited)
- Update event listings
- Add/edit CTAs and buttons
- Rearrange content sections

### Cannot Do in GoDaddy Builder
- Custom schema.org markup (deferred to Phase 2)
- Custom URL slugs (stuck with /events-3)
- Advanced SEO (canonical tags, structured data)
- Remove "Powered by GoDaddy" badge
- Custom code injection
- Advanced form customization

---

*This report is a Phase 0 deliverable for The Strictly Elvis Show project.*
