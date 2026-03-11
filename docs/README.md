# The Strictly Elvis Show - Website POC

**Client:** Alan Graveen  
**Current Site:** https://thestrictlyelvisshow.com/  
**Project Status:** Phase 0 (GoDaddy fixes) + POC Development (parallel track)

---

## Project Overview

This repository contains a proof-of-concept (POC) website for The Strictly Elvis Show, built to demonstrate what's possible with a modern, custom-built site hosted on Netlify/Vercel's free tier.

### Why This Exists

The client's current site is built on GoDaddy Airo (website builder) which has significant limitations:
- No control over SEO schema markup
- Limited design customization
- "Cheesy" template aesthetic (client's words)
- Can't add event calendar, video galleries, or custom features
- No easy way for client to update content themselves

### The Two-Track Approach

**Track 1: Phase 0 ($450) - Fix Current GoDaddy Site**
- Set up Google Business Profile (biggest SEO impact)
- Fix branding inconsistencies ("Stricly" vs "Strictly")
- Add proper meta tags and SEO fundamentals
- Content cleanup and mobile optimization
- Timeline: 3 weeks
- See: `PHASE_0_TASKS.md`

**Track 2: POC Development (This Repo) - Build the Future**
- Clean, modern design inspired by https://ellishopefoundation.org/
- Hosted on Netlify/Vercel free tier ($0/month vs current $112/year)
- Foundation for future Phase 1 migration
- Demonstrate to client what's possible
- Timeline: Build in parallel with Phase 0
- See: `POC_BUILD_PLAN.md`

---

## Goals

### POC Success Criteria
- ✅ Professional design that represents the brand (not "cheesy")
- ✅ Fast, mobile-responsive
- ✅ Deployed to free Netlify/Vercel tier
- ✅ All current site content preserved and improved
- ✅ Foundation for future DecapCMS admin panel (Phase 1)

### What This Proves to Client
1. **Better design** - Professional vs template-based
2. **Better performance** - Faster load times
3. **Lower cost** - Free hosting vs $112/year
4. **Future potential** - Easy to add admin panel, events, videos, etc.

---

## Tech Stack

### POC (Current)
- Static HTML/CSS/JavaScript
- Tailwind CSS for styling
- Netlify/Vercel for hosting (free tier)
- Netlify Forms for contact form

### Phase 1 (Future)
- Same foundation as POC
- Add DecapCMS for content management
- Event calendar functionality
- Video gallery with YouTube embeds
- Client admin panel for updates

---

## Repository Structure

```
strictly-elvis-poc/
├── README.md                 # This file
├── POC_BUILD_PLAN.md        # Detailed build instructions
├── PHASE_0_TASKS.md         # Parallel GoDaddy fix tasks
├── public/                  # Static site files
│   ├── index.html
│   ├── shows.html
│   ├── events.html
│   ├── media.html
│   ├── about.html
│   ├── contact.html
│   ├── css/
│   ├── js/
│   └── images/
├── content/                 # Future CMS content
└── netlify.toml            # Netlify config
```

---

## Getting Started

### For Development
1. Clone this repo
2. Make changes locally
3. Push to GitHub
4. Netlify auto-deploys from main branch

### For Deployment
1. Connect GitHub repo to Netlify
2. Configure build settings (if needed)
3. Deploy
4. Get `.netlify.app` URL to share with client

---

## Client Information

**Alan Graveen** - The Strictly Elvis Show  
- **Email:** elvisg@wi.rr.com
- **Phone:** 262-293-9805 (primary?) or 414-467-5761
- **Service Area:** Based in Lannon, WI. Serves Milwaukee, Waukesha, Madison, Green Bay, Beloit, Kenosha, Racine (up to 100mi radius)
- **Experience:** 5,000+ shows performed
- **Current GoDaddy Username:** Magicdj

**Jacque** (Alan's wife)
- **Email:** Jacquesjunk@wi.rr.com
- Reviewing current site for corrections and additions
- Said current site is "cheesy and doesn't represent him"

---

## Content Sources

### Current Site Pages
- Home
- Shows
- Events (currently shows "No upcoming events")
- Media (photo gallery)
- About
- Contact Us

### Key Content Elements
- **Headline:** "Wisconsin's Favorite Elvis Tribute and Classic Hit Show!"
- **Main pitch:** Personalized Elvis concerts for 2-1000 people
- **Testimonials:** Pam Thomas, Jeff and Judy, Monika
- **Photos:** Performance images from GoDaddy CDN
- **Contact info:** Phone numbers, email, service area

### Issues to Fix
- Branding: "Stricly" vs "Strictly" inconsistency
- Remove "No upcoming events" placeholder
- Standardize phone number display
- Remove empty blog section
- Clean up duplicate navigation items

---

## Timeline

### POC Build (This Week)
- Day 1-2: Content extraction and organization
- Day 3-5: Build POC with clean design
- Day 6: Deploy to Netlify
- Day 7: Share with client alongside Phase 0 work

### Phase 0 (Next 3 Weeks)
- Week 1: Google Business Profile + audit
- Week 2: GoDaddy fixes + SEO
- Week 3: Testing + delivery

### Phase 1 (Future - If Approved)
- 6-8 weeks for full custom build
- $2,500 budget
- Complete before GoDaddy contract ends (late 2026)

---

## Resources

- **Current site:** https://thestrictlyelvisshow.com/
- **Design reference:** https://ellishopefoundation.org/
- **Netlify:** https://www.netlify.com/
- **DecapCMS:** https://decapcms.org/

---

## Notes

- Client loved Ellis Hope Foundation site - use as aesthetic reference
- GoDaddy contract ends late 2026 - perfect migration window
- Client wants ability to update content themselves (key requirement)
- POC is a sales tool for Phase 1, not billable work
- Keep it simple for POC - save complexity for Phase 1

---

**Last Updated:** March 10, 2026  
**Consultant:** Mark McArthey - Learned Geek Consulting (https://learnedgeek.com)
