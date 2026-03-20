# Strictly Elvis Show - POC Build Plan

**Project:** Netlify/Vercel POC for future migration from GoDaddy Airo  
**Client:** Alan Graveen - The Strictly Elvis Show  
**Current Site:** https://thestrictlyelvisshow.com/  
**Goal:** Create a clean, modern POC to demonstrate what's possible post-migration

---

## Project Context

### Current Situation
- Client site is on GoDaddy Airo (website builder with severe limitations)
- Client's wife Jacque says current site is "cheesy and doesn't represent him"
- They want to add events, testimonials, and have control to update content
- GoDaddy contract ends late 2026
- Client loved the Ellis Hope Foundation site (https://ellishopefoundation.org/) we built

### Two-Track Approach
**Track 1 (Phase 0):** Fix current GoDaddy site for immediate SEO/visibility wins ($450)  
**Track 2 (This POC):** Build Netlify-hosted proof-of-concept for future migration proposal

### POC Objectives
1. Scrape/extract content from current GoDaddy site
2. Build clean, modern version using Netlify/Vercel free tier
3. Use similar aesthetic to Ellis Hope Foundation (client reference point)
4. Deploy to free Netlify subdomain as demonstration
5. Show client what's possible without GoDaddy limitations

---

## Technical Approach

### Hosting Platform: Netlify or Vercel
- **Why:** Free tier, automatic SSL, Git-based deployment, CDN included
- **Cost:** $0/month ongoing (vs. their current $112/year GoDaddy)
- **Deployment:** Auto-deploy from Git repo on every push

### Content Management (Future Phase 1)
- **DecapCMS** (formerly Netlify CMS) - free, open-source, Git-based
- Gives client admin panel to manage events, testimonials, photos
- Stores content as markdown/JSON in Git repo
- **Not included in POC** - just demonstrate the foundation

### Tech Stack (Suggested)
- Static HTML/CSS/JS (simplest for POC)
- OR: Next.js/React if you want something more robust
- Tailwind CSS for styling (matches Ellis Hope Foundation approach)
- Responsive, mobile-first design

---

## Content Extraction Requirements

### Site Structure (from current GoDaddy site)
Current pages to extract:
- **Home** - Main landing page
- **Shows** - Performance information
- **Events** - Event calendar (currently shows "No upcoming events")
- **Media** - Photo gallery
- **About** - About Alan/The Show
- **Contact Us** - Contact form and info

### Content to Capture

#### Text Content
- All page copy (Home, Shows, Events, Media, About, Contact)
- Headline: "Wisconsin's Favorite Elvis Tribute and Classic Hit Show!"
- Welcome message and show description
- "5000 shows in my career so far" testimonial
- Three existing testimonials:
  - Pam Thomas: "Alan Graveen aka Elvis Presley is one of the most entertaining and inspiring acts I have seen in a long time."
  - Jeff and Judy: "You made our evening a lot of fun along with a lot of laughter! Your interacting with the group and selection of songs were great!"
  - Monika: "EVERYONE enjoyed the performance and I, of course, was in heaven. What a special tribute you give to a great man. Thank you for a memory that will last me the rest of my life!"

#### Images to Download
- All photos of Alan/Elvis performances
- Key images from homepage (found at these GoDaddy CDN URLs):
  - `//isteam.wsimg.com/ip/8a8b78e1-e694-4c37-bcbd-5130b4dcefbe/KING2.jpg`
  - `//img1.wsimg.com/isteam/ip/8a8b78e1-e694-4c37-bcbd-5130b4dcefbe/THE%20STRICLY%204.jpeg`
  - `//img1.wsimg.com/isteam/ip/8a8b78e1-e694-4c37-bcbd-5130b4dcefbe/50233421_2601294236553509_1617365317942509568_.jpg`
- Any additional photos from Media/Photo Gallery section

#### Contact Information
- **Phone Numbers:** 262-293-9805 and 414-467-5761 (confirm primary with client)
- **Email:** elvisg@wi.rr.com (Alan), Jacquesjunk@wi.rr.com (Jacque)
- **Service Area:** Based in Lannon, WI. Serves: Beloit, Madison, Green Bay, Milwaukee, Waukesha, Kenosha, Racine (up to 100mi west/north, to state border south/east)

#### Issues to Fix in POC
- **Branding inconsistency:** Site shows both "Stricly" and "Strictly" - use "Strictly" consistently
- **Remove placeholder content:** "No upcoming events" should be styled better or removed
- **Clean up navigation:** Current site has duplicate nav items and "Events old" page

---

## Scraping Strategy

### Network Restrictions
Note: Direct `wget` is blocked by network config. Alternative approaches:

#### Option 1: Playwright/Puppeteer (Recommended)
```python
# Headless browser approach - handles JavaScript-rendered content
from playwright.sync_api import sync_playwright

def scrape_site():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        
        pages_to_scrape = [
            '/',
            '/shows',
            '/events-3',
            '/media',
            '/about',
            '/contact-us'
        ]
        
        for path in pages_to_scrape:
            page.goto(f'https://thestrictlyelvisshow.com{path}')
            # Extract content, save HTML, download images
        
        browser.close()
```

#### Option 2: Manual Content Reconstruction
- Use the content already fetched via `web_fetch` tool
- Manually organize into clean HTML structure
- Download images via direct URLs
- Build from scratch using extracted content (cleaner result)

#### Option 3: Use GoDaddy Credentials
- Alan provided credentials (username: Magicdj)
- Could potentially export content from GoDaddy dashboard
- May not give clean code, but ensures complete content capture

### Recommended Approach
**Start with Option 2** - Use the content we already have from `web_fetch`, manually organize it, and build clean HTML. This will result in cleaner code than trying to parse GoDaddy's auto-generated markup.

---

## POC Repository Structure

```
strictly-elvis-poc/
├── README.md                  # Project overview and setup instructions
├── PHASE_0_TASKS.md          # Parallel Phase 0 task tracking
├── POC_BUILD_PLAN.md         # This document
├── public/                   # Static assets
│   ├── index.html
│   ├── shows.html
│   ├── events.html
│   ├── media.html
│   ├── about.html
│   ├── contact.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/               # Downloaded from current site
│       ├── hero/
│       ├── performances/
│       └── testimonials/
├── content/                  # Future DecapCMS content (Phase 1)
│   ├── events/
│   ├── testimonials/
│   └── media/
├── netlify.toml              # Netlify configuration
└── package.json              # If using build tools

```

---

## POC Design Guidelines

### Visual Reference
- **Primary inspiration:** https://ellishopefoundation.org/
- Clean, modern, professional
- Not "cheesy" (client's words about current site)
- Mobile-first responsive design

### Key Sections to Include

#### Homepage
- Hero section with main photo and headline
- "About The Show" introduction
- Testimonials showcase
- Call-to-action (Book Now / Contact)
- Service area mention (Wisconsin cities)

#### Shows Page
- Description of show types (Elvis Tribute, Classic Hits)
- Performance details
- Photos from shows
- Booking information

#### Events Page
- Calendar or list view of upcoming shows
- **For POC:** Show placeholder/sample events instead of "No upcoming events"
- Venue, date, time for each event

#### Media Page
- Photo gallery
- **Future:** Video embeds (YouTube)
- Performance clips

#### About Page
- Alan's bio and experience
- "5000 shows" highlight
- What makes the show unique
- Service area details

#### Contact Page
- Contact form
- Phone numbers (standardize to ONE primary)
- Email address
- Social media links (if any)
- Service area map/description

### Design Elements
- Professional color scheme (Elvis-themed: gold/black/white?)
- High-quality images (from current site)
- Clear typography
- Strong call-to-action buttons
- Mobile hamburger menu
- Fast loading (static assets, optimized images)

---

## POC Success Criteria

### Must Have
- [x] All content from current site captured and organized
- [ ] Clean, modern design (not template "cheesy")
- [ ] Mobile responsive
- [ ] Deployed to Netlify free tier
- [ ] All images loading properly
- [ ] Contact form functional (Netlify Forms)
- [ ] Fast load times (<2 seconds)
- [ ] Proper SEO meta tags (title, description per page)

### Nice to Have (But Not Required for POC)
- [ ] DecapCMS admin panel (save for Phase 1)
- [ ] Video embeds
- [ ] Event calendar with actual functionality
- [ ] Social media feed integration
- [ ] Google Analytics setup
- [ ] **SEO "Areas We Serve" page** — Hidden from nav, included in sitemap. One section per target city (Milwaukee, Waukesha, Madison, Kenosha, Racine, Green Bay, Beloit) with location-specific keywords like "Elvis tribute entertainment in Milwaukee" etc. Same pattern as lakecountryspanish.com/Home/AreasWeServe. Helps Google rank for local searches without cluttering the navigation.

### What to Demonstrate to Client
1. **Speed:** Show side-by-side load time comparison (GoDaddy vs Netlify)
2. **Design:** Professional look vs current "cheesy" template
3. **Mobile:** How it looks on phone vs current site
4. **Cost:** Free hosting vs $112/year
5. **Future capability:** "This is the foundation - in Phase 1 we add the admin panel so you can update it yourself"

---

## Deployment Steps

1. **Set up Git repo** on GitHub
2. **Build POC locally** following structure above
3. **Test locally** to ensure all links/images work
4. **Push to GitHub**
5. **Connect to Netlify:**
   - Link GitHub repo
   - Configure build settings (if using build tools)
   - Deploy
6. **Get Netlify URL** (e.g., `strictly-elvis-poc.netlify.app`)
7. **Share with client** as demonstration

---

## Timeline

- **Day 1-2:** Content extraction and organization
- **Day 3-5:** Build POC pages with clean design
- **Day 6:** Deploy to Netlify, test, refine
- **Day 7:** Share with client

**Run in parallel with Phase 0 GoDaddy fixes** - don't wait for Phase 0 completion to start POC.

---

## Next Steps for OC (Other Claude)

1. **Content Extraction:**
   - Parse the `web_fetch` content we already have
   - Download images from GoDaddy CDN URLs
   - Organize into clean file structure

2. **Build POC:**
   - Simple HTML/CSS structure
   - Use Tailwind CSS or similar for styling
   - Reference Ellis Hope Foundation aesthetic
   - Make it mobile-responsive

3. **Set up Netlify:**
   - Create `netlify.toml` config
   - Set up Netlify Forms for contact page
   - Configure redirects if needed

4. **Document:**
   - Update README with setup instructions
   - Note any limitations or future improvements
   - Create comparison screenshots (current site vs POC)

---

## Phase 1 Preview (Not in POC)

When client approves POC and wants to move forward with full build:

- Add DecapCMS for content management
- Build out event calendar with real functionality
- Video gallery with YouTube embeds
- Enhanced photo galleries with lightbox
- Blog section for show recaps / Elvis history
- Social media integration
- Google Analytics / tracking
- Custom domain setup (migrate from GoDaddy)
- Full SEO optimization with schema markup
- Booking/inquiry system integration

**Pricing for Phase 1:** $2,500-3,000 (reduced from original $3,000-3,500 proposal to match early-customer portfolio building)

---

## Resources

- **Current site:** https://thestrictlyelvisshow.com/
- **Design reference:** https://ellishopefoundation.org/
- **Netlify templates:** https://templates.netlify.com/
- **DecapCMS docs:** https://decapcms.org/docs/intro/

---

## Questions for Client (When Showing POC)

1. What do you think of the design compared to current site?
2. Does this feel like it represents your brand better?
3. Which sections are most important to you?
4. What would you want to update most frequently? (Events? Testimonials? Photos?)
5. Ready to move forward with Phase 1 custom build?

---

**Last Updated:** March 10, 2026
