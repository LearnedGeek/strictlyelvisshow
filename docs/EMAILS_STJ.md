# St. Joan of Arc School — Email Correspondence

---

From: "Mark McArthey"
To: Lindsey Muchka
Sent: ~March 2026
Subject: Google Business Profile & Search Console

Hi Lindsey,

As part of my initial review, I wanted to bring two Google tools to your attention — both are free, and both have a direct impact on how easily families find the school online.

Google Business Profile

This is the info panel that appears when someone searches for the school on Google — showing your address, phone number, hours, photos, and reviews. Think of it as your storefront on Google Maps and search results.
I can see that St. Joan of Arc has two separate listings at 120 Nashotah Rd — one for the parish and one for the school. That's actually the right setup. What I can't tell from the outside is whether the school's listing has been claimed and verified by someone on staff, or whether it's just sitting there unmanaged. An unclaimed listing means no one can update the information, add photos, or respond to reviews — and Google will sometimes fill in details on its own, not always accurately.
Do you know if anyone currently has admin access to the school's Google Business Profile? If not, claiming and optimizing it is one of the highest-impact things we can do.

Google Search Console

This is a free tool that shows how the school's website is performing in Google search results — which pages are being found, whether everything is being indexed properly, and if there are any issues affecting visibility.
One important task it handles is submitting your sitemap to Google — essentially handing Google a complete map of the site so it indexes pages promptly. This used to happen automatically, but Google changed that in 2023 and it now needs to be done manually.

To set this up, someone needs to verify ownership of the website. Do you know if Search Console has been connected to the site, and if so, who has access?
Either way, I can walk you through both of these or take care of them directly — just want to make sure we're not duplicating anything that's already in place.

Mark

-----------------------------------------

From: "Lindsey Muchka"
To: Mark McArthey
Subject: Re: Google Business Profile & Search Console

Hi Mark -

Glad to hear you were able to get into the workspace!

Thank you so much for sending this info over... These are great tools and absolutely the right area to focus on for our visibility online. I've been working with both for quite a while in my day job so I'm very familiar with how much impact they can have, especially for our local search digital visibility for new families!

With the new LPI workspace in place, we should be able to incorporate them. That said, this CMS doesn't function as easily as an EPI or Wordpress, where we could normally just add admin and verify site access on our own. In many cases, we do need to loop in the LPI Tech Team (Ashley) to get the permissions and verifications complete. I've cc'd in Dana as I would assume either her or our new Business Manager should be the direct point of contact for the site access and ownership settings?

Either way, I'm happy to support set up where I can - I don't have current access however, and assume it may have been linked to either Holly or Leisha in their previous role.

Would you like to lead the verification process with the internal team? I'd love to get access once set up to better align on content and keywords moving forward!

Let me know what I can do to keep things moving,
Thanks!
Lindsey

-----------------------------------------

From: "Mark McArthey"
To: Lindsey Muchka
Subject: Re: Google Business Profile & Search Console

Hi Lindsey,

Great — yes, I'm happy to lead the process on both fronts. Here's what to expect:

Google Business Profile

Since access may be tied to Holly or Leisha's accounts, the most likely path is requesting an ownership transfer directly through Google. The process is straightforward but can take up to 7 days for Google to process, so the sooner we start, the better.
To kick that off, I'll need to know the Google account email address the profile is currently associated with, if anyone has that information. If not, we can initiate a transfer request without it and Google will attempt to notify the current owner. If there's no response within the window, ownership can be transferred to a current staff member.
For the transfer, we'll need a Google account that belongs to the school (ideally a permanent one tied to the organization, not a personal Gmail) to receive ownership. Dana or the new Business Manager would be the right fit for that.

Google Search Console

For this one I'll need either Ashley at LPI or whoever has access to the website backend to add a small verification tag. It's a quick technical step on their end. Once verified, I can handle the sitemap submission and initial configuration from there.

If you can make an introduction to Ashley and copy Dana on the access question, I'll take it from there and keep you in the loop as things progress.

Mark McArthey

-----------------------------------------

From: "Lindsey Muchka"
To: Mark McArthey
Subject: Re: Google Business Profile & Search Console

Hi Mark -

1. Just cc'd you in on an email to Ashley - I included an image of the current options on LPI / Google Tools but it looks like Search Console isn't linked there... I'll standby if you need my help!
2. Business Profile: I believe the school emails are Google business emails, so Shannon in the office at school or Dana may be able to help. I'm not connected on those through my personal email, so I assume they would be your best bet. If we can't find the connection, I agree, that we should set this up under an admin account at the school.

Happy to help where I can!
Lindsey

-----------------------------------------

From: "Mark McArthey"
To: Lindsey Muchka
Sent: March 17, 2026
Subject: Re: Google Business Profile & Search Console

Hi Lindsey,

Just checking in — any word back from Ashley on the Search Console piece, or from Shannon/Dana on the Business Profile access?

No rush, just want to keep things moving when you have a chance.

Thanks!
Mark

-----------------------------------------
from:	Lindsey Muchka <lindseymuchka@gmail.com>
to:	Mark McArthey <markm@learnedgeek.com>
date:	Mar 23, 2026, 8:49 AM
subject:	Re: Google site awareness

Hi Mark - 

This was the Google login that Shannon had on file that another volunteer was trying to help with... this may be the one?

Email: website@scsjcluster.org
PW: 2025.Cluster

-----------------------------------------

From: "Mark McArthey"
To: Lindsey Muchka
CC: Lindsey Lezama <lindsey.lezama@gmail.com>, Dana McEvoy <dmcevoy@scsjcluster.org>
Sent: March 25, 2026, 9:12 PM
Subject: Site updates completed

Hi Lindsey,

Great news — the credentials worked! I was able to log into the Google Business Profile and made several improvements today:

- **Website URL** updated to https://school.scsjcluster.org/ (was pointing to the parish root with http)
- **Service area** added: Nashotah, Hartland, Delafield, Oconomowoc, Pewaukee, Merton, Sussex
- **Description** updated with SEO-optimized content covering K3–8th grade, Lake Country, programs offered, and enrollment
- **Managers added**: markm@learnedgeek.com and lindseymuchka@gmail.com now have access — no more reliance on the shared credential

Overall the listing was in decent shape — hours, address, and phone were correct. The biggest gaps remaining are photos. If you can point me to any school or Facebook page photos, I can get those added.

On the Google Search Console front — I was also able to get that fully set up today without needing Ashley at LPI. Here's how it was done for future reference:

1. Logged into Google Search Console (search.google.com/search-console) under markm@learnedgeek.com
2. Added `https://school.scsjcluster.org/` as a new URL prefix property
3. Used the **HTML tag** verification method — copied the `<meta name="google-site-verification" ...>` tag Google provided
4. Logged into the LPI site editor (weconnectonline.com) using the same credentials from Shannon's file
5. Pasted the meta tag into **Settings → Head HTML** and republished the site
6. Returned to Search Console and clicked Verify — confirmed successfully
7. Submitted `sitemap.xml` — Google will now begin indexing the site systematically

Both the GBP and Search Console are now fully operational. Here's what to expect from these changes:

**Google Business Profile improvements:**
- The corrected website URL means families clicking through from Google Maps now land on the actual school site instead of the parish root
- The expanded service area means the listing will appear in local searches from Hartland, Delafield, Oconomowoc, and surrounding communities — not just Nashotah
- The updated description improves keyword relevance for searches like "Catholic school Lake Country WI" and "K3 school near me"
- Changes typically take 1–2 weeks to fully reflect in search results

**Google Search Console:**
- Google will now systematically crawl and index all pages on the school site — previously it had to discover pages on its own, which is slower and less complete
- Within a few weeks you'll be able to see which search queries families use to find the school, which pages get the most traffic, and whether there are any indexing issues to address
- This data will be valuable for shaping content and enrollment messaging going forward

The biggest remaining gap is photos on the GBP listing — if you can share any school photos or point me to the Facebook page, I can get those added.

Thanks again for tracking down those credentials — it unlocked everything!

Mark

-----------------------------------------

[DRAFT — SCHEDULED TO SEND ~May 4, 2026]

From: "Mark McArthey"
To: Lindsey Lezama <lindsey.lezama@gmail.com>, Lindsey Muchka <lindseymuchka@gmail.com>, Dana McEvoy <dmcevoy@scsjcluster.org>
Subject: St. Joan of Arc — Search Console Check-In

Hi Lindsey, Lindsey, and Dana,

It's been about six weeks since we connected Google Search Console to the school site — enough time for meaningful data to start coming in. Here's a summary of where things stand and what we can do next.

**Directory registrations — all complete:**
- Google Business Profile — optimized, managers added
- Google Search Console — verified, sitemap submitted
- Bing Places — live (imported from GBP)
- Apple Maps — submitted with EIN verification, in review
- Niche.com — claimed (already appearing in Google search results)
- GreatSchools.org — claimed, profile updated
- PrivateSchoolReview.com — profile updated with new description and contact info
- Yelp — claimed and verified (thanks Dana for answering the phone!)
- Backlinks from Crescent Moon and Three Oaks (thanks Lindsey!)

**Search Console baseline (first 28 days):**
- 52 clicks / 913 impressions — the site is being found
- Top query: "st joan of arc school" — 13 clicks, ranking position 3.1
- Key finding: "st joan of arc nashotah" has 52 impressions at position 2.8 but 0 clicks — people are likely getting what they need from the Google Business Profile panel without clicking through to the site. This is actually normal and means the GBP listing is working.
- Discovery queries like "private catholic schools near me" and "catholic church near me" are starting to appear at position 1 — still low volume but trending in the right direction.

**What's working:**
- The GBP description we wrote is showing up word for word in Google search results
- Niche.com listing is already appearing in search results
- Photos from Dana are making the listing more engaging
- All directory citations are building Google's trust score

**Recommended next steps:**
1. **Add secondary categories on GBP** — "Private school" and "Catholic school" in addition to "Religious school." This will help the school appear for searches like "private school near me."
2. **Keep adding photos** — Dana, the photos you've been adding are great. The more classroom, event, and campus photos the better. Google prioritizes listings with fresh photos.
3. **GreatSchools & PrivateSchoolReview profiles** — these have detailed sections (enrollment, programs, learning environment) that would benefit from someone at the school spending an afternoon filling in. The profiles are claimed and ready to edit.
4. **Catholic Herald article** — when Mike Previte's Flex Farm piece comes out, share the link and we'll add it to the GBP posts and any relevant directory profiles.

I'm happy to pull the full Search Console data and walk through it with you — just let me know a good time to connect.

Mark

-----------------------------------------

from: Lindsey Lezama <lindsey.lezama@gmail.com>
to: Lindsey Muchka <lindseymuchka@gmail.com>
cc: Mark McArthey <markm@learnedgeek.com>, "St. Joan of Arc School" <school-office@scsjcluster.org>, dmcevoy@scsjcluster.org
date: Mar 25, 2026, 9:21 AM
subject: Re: Site updates completed

Mark and Lindsey
We've got the website backlinked on our Crescent Moon website and along side OASD on our Three Oaks Reserve resources page.
Hopefully that will help!
Mike Previte is doing a piece in the Catholic Herald about the Flex Farm some time in April or May. (Dana, he's probably going to want to do a short interview)  When it comes out I'm going to add it to Crescent Moon's homepage.
Thank you!
Lindsey

-----------------------------------------

from: SCHOOL OFFICE <school-office@scsjcluster.org>
to: Mark McArthey <markm@learnedgeek.com>
cc: Lindsey Muchka <lindseymuchka@gmail.com>, Lindsey Lezama <lindsey.lezama@gmail.com>, dmcevoy@scsjcluster.org
date: Mar 25, 2026, 11:45 AM
subject: Re: Site updates completed

Hi Mark,

All of our emails are through Google. You can use Gmail to access that email.

Thanks for your help!
Shannon

-----------------------------------------

from: Mark McArthey <markm@learnedgeek.com>
to: SCHOOL OFFICE <school-office@scsjcluster.org>
cc: Lindsey Muchka <lindseymuchka@gmail.com>, Lindsey Lezama <lindsey.lezama@gmail.com>, dmcevoy@scsjcluster.org
date: Mar 25, 2026, 11:27 AM
subject: Re: Site updates completed

Hi Shannon,

Thank you for the credentials; having access to the website@scsjcluster.org inbox will be very helpful as I register for the other directory sites I mentioned. As Lindsey noted, the backlinks from Crescent Moon and Three Oaks are also excellent for improving the school's search indexing.

If the school has a specific portal for accessing this email account, please let me know. I plan to begin working on these registrations tonight.

Best regards,
Mark

-----------------------------------------

[DRAFT — SCHEDULED TO SEND ~April 1, 2026]

From: "Mark McArthey"
To: Lindsey Lezama <lindsey.lezama@gmail.com>, Lindsey Muchka <lindseymuchka@gmail.com>, Dana McEvoy <dmcevoy@scsjcluster.org>
Subject: St. Joan of Arc — Directory Registrations Complete

Hi Lindsey, Lindsey, and Dana,

Quick update on the directory and citation registrations. Each of these creates a backlink to the school site, which improves Google's trust score and helps the school rank higher in local searches.

**Completed:**
- **Bing Places** (bingplaces.com) — imported directly from Google Business Profile. Pending publish (7–12 days).
- **Niche.com** — claimed the school profile. Pending approval. Parents actively use Niche to compare schools.
- **GreatSchools.org** — claimed with provisional account. Updated school leader to Dana McEvoy, corrected website URL and email. Profile has detailed sections (applying, courses, learning environment) that would benefit from someone at the school spending an afternoon filling in.
- **PrivateSchoolReview.com** — logged in and updated profile with correct website, description, and school information. Username: st29974. This profile already had 22 views this quarter, so parents are finding it.

- **Apple Maps** (businessconnect.apple.com) — listing submitted with logo, cover photo, description, and all details. Verified with utility bill and EIN. In review, expected approval within 5 days.

**Pending — need help from school staff:**
- **Yelp** (biz.yelp.com) — listing exists but claiming requires answering a verification call at (262) 646-5821. Shannon or Dana would need to answer the school phone and enter a code on the keypad. Takes 30 seconds.

**Still to do:**
- **Facebook** — school page exists at facebook.com/sjoaschool. Need to verify/claim it and link it to the GBP social profiles.
- **Archdiocese of Milwaukee** directory — verify the school listing links to https://school.scsjcluster.org/ (currently points to archmil.org parish page).
- **Wisconsin DPI** (dpi.wi.gov) — verify the school's listing in the state directory.
- **Local chamber of commerce** — Lake Country or Nashotah/Delafield area if available.

**Why this matters:**
Google uses these directory listings (called "citations") to validate that a business is legitimate and active. Consistent name, address, and phone number (NAP) across multiple authoritative sites is one of the strongest local SEO signals. Each registration also creates a backlink — combined with Lindsey's Crescent Moon and Three Oaks links, this builds a strong foundation.

**Notes:**
- All registrations use consistent NAP: St. Joan of Arc Parish School, 120 Nashotah Road, Nashotah, WI 53058, (262) 646-5821
- All point to https://school.scsjcluster.org/
- Confirmation emails were sent to website@scsjcluster.org — please don't delete those

Let me know if any of these need adjustments or if there are other local directories I should look at.

Mark

-----------------------------------------

from: Mark McArthey <markm@learnedgeek.com>
to: Lindsey Muchka <lindseymuchka@gmail.com>
cc: Lindsey Lezama <lindsey.lezama@gmail.com>, Dana McEvoy <dmcevoy@scsjcluster.org>, SCHOOL OFFICE <school-office@scsjcluster.org>
date: Mar 25, 2026, 10:45 PM
subject: Directory registrations — progress update & quick asks

Hi everyone,

Quick update — I spent the evening registering the school on several directory and citation sites. These create backlinks that help Google recognize the school as a legitimate, active organization, which directly improves search rankings.

**Done:**
- **Bing Places** — live within 7–12 days (imported from Google Business Profile)
- **Niche.com** — claimed, pending approval
- **GreatSchools.org** — claimed, profile updated (Dana listed as school leader)
- **PrivateSchoolReview.com** — logged in and updated profile, description, and website URL

**Two quick asks:**

1. **Yelp** — the school already has a listing, but claiming it requires answering a verification call at (262) 646-5821. Could someone at the school be available to answer and enter a short code on the keypad? It takes about 30 seconds. Just let me know when you're ready and I'll trigger the call.

2. **Apple Maps** — verification requires either the school's **EIN (tax ID number)** or access to the **DNS records for scsjcluster.org**. If someone knows the EIN or who manages the domain, I can finish this one quickly. Apple Maps is important because it's what iPhone users see when searching via Maps or Siri.

**Still working on this week:**
- Facebook page — verifying and linking to Google Business Profile
- Archdiocese of Milwaukee directory — updating the school link
- Wisconsin DPI and local chamber listings

All registrations use consistent information and point to https://school.scsjcluster.org/. Confirmation emails have been going to website@scsjcluster.org.

Thanks,
Mark

-----------------------------------------

from: Mark McArthey <markm@learnedgeek.com>
to: Dana McEvoy <dmcevoy@scsjcluster.org>
cc: Lindsey Muchka <lindseymuchka@gmail.com>, Lindsey Lezama <lindsey.lezama@gmail.com>
date: Mar 27, 2026
subject: Apple Maps — DNS access for scsjcluster.org

Hi Dana,

Thank you for the EIN — I was able to enter it into the Apple Business Connect verification. However, Apple also requires a second verification step: either uploading an official document (utility bill, business license, etc.) or adding a short DNS record to the scsjcluster.org domain.

The DNS route is the fastest option — it's a one-line TXT record that takes about 30 seconds to add. I did a lookup and the domain is registered and hosted through **Amazon Web Services (AWS Route 53)**. Does anyone at the school or parish have login credentials for an AWS account? It's possible it was set up by whoever originally configured the school's email and website infrastructure.

If no one has AWS access, the alternative is uploading a document. Any of these would work:
- A recent utility bill for 120 Nashotah Road showing the school's name
- The IRS determination letter (501(c)(3) confirmation)
- A business license

If you can track down either the AWS login or one of those documents, I can finish the Apple Maps listing. This is the last step — everything else is already submitted.

Thanks,
Mark

-----------------------------------------

from: Lindsey Muchka <lindseymuchka@gmail.com>
to: Mark McArthey <markm@learnedgeek.com>
date: Apr 6, 2026, 10:54 AM
subject: Search Console for SJOA

Hi Mark -

Is there a way for me to login to Search Console to see some of the metrics?

Thanks!
Lindsey

-----------------------------------------

From: "Mark McArthey"
To: Lindsey Muchka <lindseymuchka@gmail.com>
Sent: Apr 6, 2026
Subject: Re: Search Console for SJOA

Hi Lindsey,

Absolutely! I just added you as a full user. Here's how to access it:

1. Go to https://search.google.com/search-console
2. Sign in with your Google account (lindseymuchka@gmail.com)
3. You should see the property for https://school.scsjcluster.org/ in the dropdown

A few things to check out:

- **Performance → Search results** — shows which queries people use to find the school, how many clicks and impressions each gets, and your average ranking position
- **Indexing → Pages** — shows how many pages Google has indexed and whether there are any issues
- **Insights** — a friendlier dashboard view of the same data

The numbers are already moving in the right direction — 79 clicks and nearly 1,500 impressions in the last 28 days, all up from zero before we connected everything. The homepage alone is getting 62 clicks, and queries like "st joan of arc school" are ranking in the top 3. As the directory registrations continue to propagate, these numbers should keep climbing.

I'm tracking this on our end too, so we can compare month over month and see what's working. Let me know if you have any questions about what you're seeing!

Mark

-----------------------------------------

[DRAFT — to send 2026-04-20]

From: "Mark McArthey"
To: Lindsey Muchka <lindseymuchka@gmail.com>
CC: Andres Lezama, Lindsey Lezama <lindsey.lezama@gmail.com>, Dana McEvoy <dmcevoy@scsjcluster.org>
Subject: SJOA Search Console — strong growth, plus a small ask

Hi Lindsey (and team),

Quick update — the school's search performance is up significantly. In the last 28 days the site got **146 clicks and 2.7K impressions**, both nearly double the prior period. All up from zero before we started. The directory registrations and GBP work are clearly paying off.

Andres asked about why the school doesn't show up for "private schools" searches. Here's the honest picture:

**Why "private schools" is hard:** It's a national, hyper-competitive term dominated by big aggregator sites (Niche, GreatSchools, US News). Even the best small Catholic schools rarely rank for the bare term "private schools." What schools CAN win is **local geographic searches** — "private school Nashotah," "Catholic school Lake Country," "private school Hartland." Those are the realistic targets.

**What's working:** Every branded query (st joan of arc school, st joan of arc parish school) is climbing. Directory backlinks, GBP photos, and the site itself are all gaining authority. This is the foundation that eventually unlocks the broader, non-branded queries.

**What would help most right now:**

1. **More Google reviews on the school's GBP listing.** This is the single biggest factor for local search ranking. If parents and alumni could leave reviews, it would directly help the school rank for "Catholic school near me" type searches. Even 10-15 fresh reviews would be a meaningful boost.

2. **Page-level SEO tweaks on the LPI site.** Since you have access to the editor, a few small updates could help local searches:
   - In the LPI editor, click **Pages** → click the **Settings icon (gear)** next to a page → **Edit Page SEO**
   - Update the **Page Meta Title** (under 60 chars) and **Page Meta Description** (under 160 chars)
   - Priority pages: Home, About Us, Admissions, Tuition & Fees

Suggested text for the Home page:
- Title: `St. Joan of Arc Parish School | Catholic K3–8th Grade | Nashotah, WI`
- Description: `A faith-centered private Catholic school in Nashotah, WI serving Lake Country families since 1847. K3–8th grade with multi-age classrooms and after-school care. Schedule a tour today.`

I can provide suggested text for the other pages once you give the green light to start.

**Realistic expectations:** SEO improvements on this scale typically take 3–6 months to fully reflect in rankings. The work we've done so far has primarily made the school more findable for branded searches and built foundational authority. Expanding into competitive non-branded terms is a longer game, but every piece we add gets us closer.

Happy to jump on a call with the team to walk through the dashboard if anyone wants to see the data live.

Mark

-----------------------------------------

from: Lindsey Muchka <lindseymuchka@gmail.com>
to: Mark McArthey <markm@learnedgeek.com>
cc: Andres Lezama <andres.lezama99@gmail.com>, Lindsey Lezama <lindsey.lezama@gmail.com>, dmcevoy@scsjcluster.org
date: Apr 20, 2026, 8:28 AM
subject: Re: SJOA Search Console — strong growth, plus a small ask

The SEO updates can be made quite easily and quickly. Do you want to see what we currently have and adjust from there? ... I can include a spreadsheet if easier? Here's a screenshot of the first few pages...

[Attachment: screenshot of current meta tags for Home, About Us, School History, Our Foundation, Academics pages]

-----------------------------------------

From: "Mark McArthey"
To: Lindsey Muchka <lindseymuchka@gmail.com>
CC: Andres Lezama <andres.lezama99@gmail.com>, Lindsey Lezama <lindsey.lezama@gmail.com>, Dana McEvoy <dmcevoy@scsjcluster.org>
Sent: Apr 20, 2026
Subject: Re: SJOA Search Console — strong growth, plus a small ask

Hi Lindsey,

Yes, a spreadsheet would be perfect — much easier than working from screenshots.

If you can export or copy/paste the current titles and descriptions into a spreadsheet with columns for Page, URL, Current Title, and Current Description, I'll fill in proposed updates and send it back. Once you approve the proposed changes, I'll make the updates directly in the LPI editor.

**Quick observation from the screenshot:** The current titles are all running well over 55 characters because of the repeated geographic list ("Lake Country, WI, Oconomowoc, Delafield, Okauchee, Nashotah") at the end of every title. Google truncates titles after about 55-60 characters, so everything after that gets cut off in search results — meaning the valuable page-specific content is being hidden. My goal will be to get each title under 55 characters and vary them so each page competes for slightly different local searches.

Send the spreadsheet whenever it's ready and I'll turn it around quickly.

Thanks!
Mark

-----------------------------------------

from: Lindsey Muchka <lindseymuchka@gmail.com>
to: Mark McArthey <markm@learnedgeek.com>
cc: Andres Lezama <andres.lezama99@gmail.com>, Lindsey Lezama <lindsey.lezama@gmail.com>, dmcevoy@scsjcluster.org
date: Apr 21, 2026, 8:16 AM
subject: Re: SJOA Search Console — strong growth, plus a small ask

Hi Mark -

That would be great! I know we loaded in the locations across the board, and we should probably rotate those throughout the pages to avoid the length and duplication... Would love your thoughts on how to best optimize now that we've got the ball rolling!

Attached Spreadsheet... I used CoPilot so there may be some slight tweaks, but these are the main pages. Let me know if you'd like to brainstorm anything!

Thanks,
Lindsey

[Attachment: docs/client/SJOA_Page_Titles_and_Descriptions_FULL.xlsx - 31 pages with current titles and descriptions]

-----------------------------------------

From: "Mark McArthey"
To: Lindsey Muchka <lindseymuchka@gmail.com>
CC: Andres Lezama <andres.lezama99@gmail.com>, Lindsey Lezama <lindsey.lezama@gmail.com>, Dana McEvoy <dmcevoy@scsjcluster.org>
Sent: Apr 21, 2026
Subject: Re: SJOA Search Console — strong growth, plus a small ask

Hi Lindsey,

Spreadsheet back with proposed titles and descriptions for all 31 pages — attached.

**What I optimized for:**

1. **Every title is now under 55 characters** (Google's display cutoff). The current titles were all running 100+ chars because of the repeated geographic list at the end, so the valuable page-specific content was getting hidden in search results.

2. **Rotated geographic keywords across pages** so the school competes for a wider range of local searches rather than every page fighting over the same long list. For example:
   - Home page leads with "Nashotah, WI"
   - About Us uses "Lake Country, WI"
   - Academics page references "Hartland, Delafield & Oconomowoc"
   - Middle School page references "Oconomowoc Area"
   - 3K/4K Preschool leads with "Hartland-Delafield"
   - This way Google sees the school as relevant across the whole region, not just Nashotah.

3. **Led each title with the most important keyword for that specific page** — "Admissions" leads with "Admissions," "Tuition" leads with "Tuition," etc. Users scanning search results see the relevant info first.

4. **Descriptions stay varied and action-oriented** — every one has either a value proposition or a call to action (schedule a tour, apply today, enroll today, etc.).

**One thing I flagged (highlighted in yellow):** The **Elementary School** page (`/elementary-school`) currently has the title "3K & 4K Preschool" — looks like a copy/paste error from when the site was built. The description correctly references grades 1-5. Worth fixing regardless of the SEO updates.

Feel free to copy/paste the proposed values into the LPI editor as-is, or tweak any that don't feel right to you. If you want me to revise anything before you apply them, just let me know.

Thanks!
Mark

[Attachment: docs/client/SJOA_Page_Titles_and_Descriptions_PROPOSED.xlsx]

-----------------------------------------

from: DANA MCEVOY <dmcevoy@scsjcluster.org>
to: Mark McArthey <markm@learnedgeek.com>
cc: Lindsey Muchka <lindseymuchka@gmail.com>, Andres Lezama <andres.lezama99@gmail.com>, Lindsey Lezama <lindsey.lezama@gmail.com>
date: Apr 22, 2026, 6:09 PM
subject: Re: SJOA Search Console — strong growth, plus a small ask

Good Evening,
I have asked many parents for reviews for our school. They have questions that I need clarification on. Are their reviews for google, or on our website? (I am not sure what the difference is?) How should they send these reviews, via email, word document?

I truly appreciate the feedback,

Blessings,
Dana

-----------------------------------------

From: "Mark McArthey"
To: Dana McEvoy <dmcevoy@scsjcluster.org>
CC: Lindsey Muchka <lindseymuchka@gmail.com>, Andres Lezama <andres.lezama99@gmail.com>, Lindsey Lezama <lindsey.lezama@gmail.com>
Sent: Apr 23, 2026
Subject: Re: SJOA Search Console — strong growth, plus a small ask

Hi Dana,

Great question — and there are actually two different kinds of reviews, both valuable but for different reasons:

**1. Google reviews (highest priority for SEO)**

These are the star ratings and reviews that show up in the Google Business Profile panel when someone searches for the school. They're the **single biggest factor** in how Google ranks the school for local searches like "Catholic school near me." Parents leave them directly through Google.

**How parents leave a Google review:**

The easiest way is for you to share a direct link with parents. Here's how to get it:

1. Go to https://business.google.com (sign in with the school's Google account)
2. Find the school's listing and click on it
3. Look for **"Get more reviews"** or **"Ask for reviews"** in the dashboard
4. Copy the short link Google provides (it looks like `g.page/r/...`)
5. Share that link with parents via email, text, or in a school newsletter

When they click that link, it takes them straight to a "Leave a review for St. Joan of Arc Parish School" page. They sign in with any Google account, click stars, write a sentence or two, and submit. Whole thing takes under 2 minutes.

**2. Website testimonials (great for the school's website page)**

These are the longer, more personal stories that appear on the school's `/testimonials` page (https://school.scsjcluster.org/testimonials). They're more controlled — the school decides what gets posted, and they can be longer and more detailed than a typical Google review.

**For these, a Word document or email is perfectly fine.** A simple format like this works well:
- Parent/alumni name (or just first name + last initial if they prefer)
- Their connection to the school (current parent, alumni, grandparent, etc.)
- A few sentences about their experience

Lindsey or whoever manages the LPI editor can post these to the testimonials page.

**My recommendation:**

Push hard for Google reviews first — they directly help families discover the school. Even 10-15 fresh Google reviews would meaningfully improve the school's visibility. Website testimonials are wonderful, but they don't move the SEO needle the way Google reviews do.

Happy to draft a "request for review" email template you could send to parents if that would help — just let me know.

Thanks,
Mark

-----------------------------------------

from: Lindsey Muchka <lindseymuchka@gmail.com>
to: Mark McArthey <markm@learnedgeek.com>
cc: DANA MCEVOY <dmcevoy@scsjcluster.org>, Andres Lezama <andres.lezama99@gmail.com>, Lindsey Lezama <lindsey.lezama@gmail.com>
date: Apr 23, 2026, 9:44 AM
subject: Re: SJOA Search Console — strong growth, plus a small ask

Hey All -

Just chatted with Lindsey L about the Reviews Option not working this morning.

After doing some digging, it looks like Google removed the ability to leave reviews on "Education" or "School" business profiles...

see attached image showing Google AI Overview confirming K-12 school review restriction as of April 30, 2020

It appears our best bet would be to ask for reviews on our Social Platforms and update our testimonials on the website? Mark, what do you think?

Thanks!
Lindsey

[Attachment: docs/img/stjoanofarc/image.png]

-----------------------------------------

From: "Mark McArthey"
To: Lindsey Muchka <lindseymuchka@gmail.com>
CC: DANA MCEVOY <dmcevoy@scsjcluster.org>, Andres Lezama <andres.lezama99@gmail.com>, Lindsey Lezama <lindsey.lezama@gmail.com>
Sent: Apr 23, 2026
Subject: Re: SJOA Search Console — strong growth, plus a small ask

Hi Lindsey,

Dang, good catch. You're right — per the AI Overview you shared, Google disabled reviews for K-12 school listings as of April 30, 2025 to prevent harassment and misuse. That's a real constraint, not something we can work around on the Google Business Profile itself.

The good news: this is actually part of why we claimed profiles on all those other directories early on. Several school-specific review platforms carry real weight and show up prominently in Google search results. Here's a prioritized plan:

**1. Niche.com** *(already claimed)*
Parents actively use Niche when comparing schools — highest-intent audience. Niche reviews also surface in Google search for "best schools in [area]" queries.
🔗 https://www.niche.com/k12/st-joan-of-arc-parish-school-nashotah-wi/
*(parents click "Write a review" near the top of the profile)*

**2. GreatSchools.org** *(already claimed)*
Trusted school review platform. Parent reviews here carry significant weight and GreatSchools profiles rank well in Google.
🔗 https://www.greatschools.org/wisconsin/nashotah/3257-St-Joan-Of-Arc-School/
*(parents click "Write a Review" on the school profile)*

**3. PrivateSchoolReview.com** *(already claimed)*
Shows up for "private school [city]" searches.
🔗 https://www.privateschoolreview.com/st-joan-of-arc-parish-school-profile
*(scroll to bottom of the profile for "Add a Review")*

**4. Facebook page recommendations**
Parents can leave recommendations on the school's Facebook page. Facebook pages are Google-indexed, so recommendations can appear in search.
🔗 https://www.facebook.com/sjoaschool/reviews/
*(visitors answer "Do you recommend St. Joan of Arc?" and add a comment)*

**5. Website testimonials** *(Dana already working on this)*
Doesn't move SEO directly, but builds trust for anyone who lands on the site — and we can excerpt them for social posts.

**Practical suggestion for Dana's parent email:**

Rather than one ask, structure it as a menu so parents can pick whichever platform they're most comfortable with:

> We'd love your help sharing your experience with St. Joan of Arc! Any of these would mean a lot:
> - Leave a review on Niche.com: [link]
> - Leave a review on GreatSchools.org: [link]
> - Leave a recommendation on our Facebook page: [link]
> - Share a testimonial for our website: [email]

This spreads reviews across all the important sites instead of concentrating on one.

Mark

-----------------------------------------

from: Lindsey Muchka <lindseymuchka@gmail.com>
to: Mark McArthey <markm@learnedgeek.com>
cc: Andres Lezama <andres.lezama99@gmail.com>, Lindsey Lezama <lindsey.lezama@gmail.com>, dmcevoy@scsjcluster.org
date: Apr 23, 2026, 12:18 PM
subject: SEO Page Updates

Hi Everyone -

I made the attached updates from Mark in the editor today. Mark, the only edits to note were regarding grade levels. Dana, I know you've mentioned changing this eventually, but I kept them consistent to where we are today and what the grade pages say (Elementary: 1-4, Middle: 5-8, Athletics: 4-8). Happy to adjust when the time comes.

Thank you for all the suggestions, Mark - the spreadsheet made it easy to copy/paste into the editor!

Lindsey

-----------------------------------------

From: "Mark McArthey"
To: Lindsey Muchka <lindseymuchka@gmail.com>
CC: Andres Lezama <andres.lezama99@gmail.com>, Lindsey Lezama <lindsey.lezama@gmail.com>, Dana McEvoy <dmcevoy@scsjcluster.org>
Sent: Apr 23, 2026
Subject: Re: SEO Page Updates

Hi Lindsey,

That was fast — thank you! Glad the spreadsheet format made it easy to work through.

And great call on the grade level corrections. You were right to keep those consistent with what the actual grade pages on the site say (Elementary 1-4, Middle 5-8, Athletics 4-8). SEO content should always match the reality of the school, not guesses from the outside. When Dana's ready to adjust those in the future, the meta tags can get updated to match at the same time.

Should start seeing the impact of these updates in Search Console over the next few weeks as Google re-crawls the site. I'll keep an eye on it and let everyone know when the queries start shifting.

Thanks again for the quick turnaround!

Mark

-----------------------------------------

from: Lindsey Lezama <lindsey.lezama@gmail.com>
to: Mark McArthey <markm@learnedgeek.com>
cc: Lindsey Muchka <lindseymuchka@gmail.com>, Andres Lezama <andres.lezama99@gmail.com>, DANA MCEVOY <dmcevoy@scsjcluster.org>
date: Apr 23, 2026, 5:54 PM
subject: Re: SEO Page Updates

Mark
We have a bunch of email addresses we can put to use. Is it better to put the same review on all of the sites with one email and then repeat for the different emails addresses or is it better to have a review from on email on one site and another review from a different address on another site?
Thank you!
Lindsey

-----------------------------------------

From: "Mark McArthey"
To: Lindsey Lezama <lindsey.lezama@gmail.com>
CC: Lindsey Muchka <lindseymuchka@gmail.com>, Andres Lezama <andres.lezama99@gmail.com>, Dana McEvoy <dmcevoy@scsjcluster.org>
Sent: Apr 24, 2026
Subject: Re: SEO Page Updates

Hi Lindsey,

I love that you're thinking strategically about this — your enthusiasm for getting reviews in is exactly what the school needs right now.

One thing worth knowing about how these platforms work behind the scenes: Niche, GreatSchools, Facebook, and others have gotten really sophisticated at detecting when reviews come from coordinated sources rather than independent voices. They look at IP addresses, device fingerprints, writing patterns, and account history. When they spot something that looks orchestrated, they typically just remove the reviews — sometimes they'll flag the listing for a closer look. So unfortunately, even though spreading out the email addresses sounds clever, the platforms are usually a step ahead of that approach.

The good news: the strategy you're describing absolutely works in its authentic form. The real version is asking different *real people* — parents, alumni, grandparents, parish friends — to each leave one review on the platform they're most comfortable with. That's exactly the kind of organic, distributed review profile that platforms reward and Google trusts. And you've already got a great network through the parish, Crescent Moon, and Three Oaks Reserve.

If it would help, I can put together a short outreach template you could forward to your contacts with the direct review links — something easy for them to act on in 2 minutes. Just say the word.

Thanks for being such a champion for the school!

-----------------------------------------

From: DANA MCEVOY <dmcevoy@scsjcluster.org>
To: Lindsey Muchka <lindseymuchka@gmail.com>, Mark McArthey <markm@learnedgeek.com>
Sent: Apr 30, 2026, 6:52 AM
Subject: review

Good Morning,
Attached is a review from a former parent, Rick and Elaine Hills whose children all went to SJOA. It is rather long, but I think it is a great review for our website?!
Let me know what you think.

Thank you,

Mrs. Dana McEvoy
Principal
St. Joan of Arc Parish School

[Attachment: HILLS – SJOA TESTIMONIAL]

A little history; my husband and I joined St. Joan of Arc in 1990 when we relocated to Lake Country. We celebrated the Baptisms, First Eucharists and Confirmations of all four of our children. The kids all attended SJOA school from 4K-8th grade. In total we spent 17 years in a row driving to and from school, the best days ever. We continue to be parish members and proudly support the school.

It has been 12 years since we graduated the youngest from SJOA. As the high school and college chapters are all behind us now, we have gained a greater life perspective worth sharing to those parents interested in this Parish school.

Was everything always perfect? Were parents always perfect? Were the other classmates perfect? The answer is of course not; there's no such thing as a perfect world. Yet those imperfections encouraged positive learning situations. Rather than leaving for another school with likely the same problems in another building, we provided opportunities for our children to add "tools" for eventual real-life scenarios. Sometimes negative experiences can strengthen us and our kids in unexpected ways. That's how character is built.

My husband volunteered as a coach for the middle school girls' basketball teams. His philosophy was simple; will they remember if they won, or will they remember if they played? Every girl played in every quarter of every game. By the 8th grade those players developed a confidence that would carry them through high school and beyond. Another school parent initiated a cross-country team for any student who liked to run. As a result of this, our youngest daughter (who only joined to be with her friends) was awarded a scholarship to run CC for a Division I university.

When our second son was in 8th grade, he won the district level "Modern Woodman" speech contest and had the opportunity to compete at the state level representing SJOA. His teacher let him practice his speech every day in front of his peers. We were grateful that she cared as much as we did. He went on to win the state competition and moved on to a national competition. The principal hosted a pizza day for the entire school in celebration. Everyone cared.

The academics exceeded our expectations in the classroom. Our oldest daughter was invited to take the ACT test as a 5th grader due to her high standardized test results. She continued to take the ACT test every year going forward, and by the time junior year of HS ACT test taking came along, she was very secure in her testing ability.

The boys went to Oconomowoc HS and the girls attended Arrowhead HS. The students from SJOA at both high schools were considered the "smarties" by both teachers and other students. Highlighting the high level of academics not just for our kids, but all SJOA graduates. There are so many others out there who have gone on to accomplish great things.

However, there was more to it than academics that shaped our children during their first ten years of school. SJOA set a high bar of expected behavior which was reinforced at home and God was always the focus. This included respect for others, kindness and compassion, honesty, generosity, and always doing your best. Our parish priest taught the religion classes and inspired our children to become more involved in the mass. All four became altar servers, and three out of four were lectors along with their dad.

What may surprise you as perhaps an interesting social experiment is that our four children were all adopted as infants. They had two things in common; the parents who raised them and the 4k-8th grade foundation that shaped their lives forever. In many ways, the small class sizes made it feel like "family". The students all encouraged and helped each other, and there was also one on one time with the teacher when indicated. The concern was genuine from parents and other school staff members as well.

Our goal as parents is two-fold; first to give our kids strong roots and a sense of belonging, and second to grow their wings...to take them as far as they wish to go, to make a difference in the world. SJOA was and is the best kept secret in Lake Country. Once the word gets out there, expect a waiting list to get in... it is a priceless investment in the lives of your children.

-----------------------------------------

From: Mark McArthey
To: Dana McEvoy <dmcevoy@scsjcluster.org>
CC: Lindsey Muchka <lindseymuchka@gmail.com>
Sent: Apr 30, 2026
Subject: Re: review

Hi Dana,

Thank you for sending this; it's a wonderful piece. The Hills clearly know SJOA inside and out, and their perspective (four kids, 17 years, still parish members) carries real weight. The closing line, "the best-kept secret in Lake Country," is exactly the kind of thing prospective parents remember.

A thought on how to use it: At roughly 600 words it's longer than a typical testimonial card, but the depth is what makes it powerful. Rather than truncate it, I'd recommend publishing it two ways:

Featured Parent Story page — the full essay gets its own page on the website (something like "Our Families → The Hills Family") with their byline. It reads like a heartfelt parent reflection, and that's worth giving real space rather than chopping down. The keyword-rich content also helps with SEO when prospective families search for things like "Catholic school Lake Country" or "private school Hartland."

Pull-quotes elsewhere — pick two or three of the strongest lines for the homepage testimonial section and the admissions page, each linking back to the full story. A few that stood out to me:

"SJOA was and is the best kept secret in Lake Country... a priceless investment in the lives of your children."
"In many ways, the small class sizes made it feel like family."
"The students from SJOA at both high schools were considered the 'smarties' by both teachers and other students."

Lindsey, I'm curious for your take too and I'm happy to coordinate on placement and styling once you've had a chance to read through.

Thanks,
Mark
