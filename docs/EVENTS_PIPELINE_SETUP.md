# Events Pipeline Setup Guide

How to set up the Google Sheet → Website events pipeline for The Strictly Elvis Show.

---

## 1. Create the Google Sheet

1. Go to https://sheets.google.com and create a new spreadsheet
2. Name it: **Strictly Elvis Show — Events**
3. Set up the header row (Row 1) with these exact column names:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Publish | Date | Time | Event Name | Venue | Address | City | Notes |

### Add Data Validation

**Column A (Publish):** Insert > Checkbox
- Click column A header, go to Insert > Checkbox
- Events only show on the site when checked

**Column B (Date):** Format > Number > Date
- Select column B, Format > Number > Date
- Ensures consistent date format

**Column G (City):** Data > Data validation > Dropdown
- Add these options: Milwaukee, Waukesha, Madison, Kenosha, Racine, Green Bay, Beloit, Appleton, Oshkosh, Fond du Lac, Sheboygan, Lannon, Oak Creek, Brookfield, Other

### Add Conditional Formatting

1. Select the data range (A2:H100)
2. Format > Conditional formatting
3. Rule: Custom formula = `=AND($A2=TRUE, OR($B2="", $D2="", $E2=""))`
4. Format: Red background
5. This highlights published rows that are missing required fields (Date, Event Name, or Venue)

### Publish the Sheet

1. File > Share > Publish to web
2. Select: Entire Document, CSV format
3. Click Publish
4. Note the Sheet ID from the URL (the long string between `/d/` and `/edit`)

---

## 2. Configure Netlify Build Hook

1. Go to https://app.netlify.com/sites/strictlyelvisshow/settings/deploys
2. Scroll to "Build hooks"
3. Click "Add build hook"
4. Name: "Google Sheet Update"
5. Branch: main
6. Copy the generated webhook URL

---

## 3. Add Apps Script (Auto-Trigger on Edit)

1. In the Google Sheet, go to Extensions > Apps Script
2. Replace the default code with:

```javascript
// Netlify build hook URL — triggers a site rebuild when events are updated
var NETLIFY_HOOK = 'YOUR_NETLIFY_BUILD_HOOK_URL_HERE';

function onEdit(e) {
  // Only trigger on the first sheet
  if (e.source.getActiveSheet().getIndex() !== 1) return;

  // Debounce — don't trigger more than once per 5 minutes
  var cache = CacheService.getScriptCache();
  if (cache.get('lastTrigger')) return;
  cache.put('lastTrigger', 'true', 300); // 5 min cooldown

  // Trigger Netlify rebuild
  triggerBuild();
}

function triggerBuild() {
  try {
    UrlFetchApp.fetch(NETLIFY_HOOK, {
      method: 'POST',
      payload: '{}'
    });
    SpreadsheetApp.getActiveSpreadsheet().toast(
      'Site rebuild triggered! Changes will be live in ~1 minute.',
      'Website Updated',
      5
    );
  } catch (err) {
    SpreadsheetApp.getActiveSpreadsheet().toast(
      'Could not trigger rebuild: ' + err.message,
      'Error',
      10
    );
  }
}

// Manual trigger button — add to menu
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Website')
    .addItem('Publish Changes Now', 'triggerBuild')
    .addToUi();
}
```

3. Replace `YOUR_NETLIFY_BUILD_HOOK_URL_HERE` with the actual Netlify build hook URL
4. Save the script (Ctrl+S)
5. Run `onOpen` once to authorize permissions
6. Close and reopen the sheet — you'll see a "Website" menu with "Publish Changes Now"

---

## Google Sheet Details

- **Published CSV URL:** https://docs.google.com/spreadsheets/d/e/2PACX-1vRWYfyO4KTSwI3UfvA5zGyUcucXVj91ULyFtoNb3ER5Ti-ALqlChz74V716o79GcpC46vqgnh_JB4IV/pub?output=csv
- **Sheet ID:** Extract from the edit URL (the string between `/d/` and `/edit`)
- **Netlify Build Hook URL:** *(to be created — see step 2)*

---

## 4. Configure Environment Variable on Netlify

1. Go to https://app.netlify.com/sites/strictlyelvisshow/settings/env
2. Add ONE of these variables (either works):
   - Key: `GOOGLE_SHEET_CSV_URL` — Value: The full published CSV URL (preferred)
     `https://docs.google.com/spreadsheets/d/e/2PACX-1vRWYfyO4KTSwI3UfvA5zGyUcucXVj91ULyFtoNb3ER5Ti-ALqlChz74V716o79GcpC46vqgnh_JB4IV/pub?output=csv`
   - OR Key: `GOOGLE_SHEET_ID` — Value: The Sheet ID from the edit URL

---

## 5. Test the Pipeline

1. Add a test event in the Google Sheet:
   - ✓ | 12/25/2026 | 2:00 PM | Elvis Christmas Special | Test Venue | 123 Main St | Milwaukee | Test event
2. Check the "Publish" checkbox
3. Click Website > Publish Changes Now (or wait for auto-trigger)
4. Wait ~1 minute for Netlify to build
5. Visit the Events page — the event should appear
6. Uncheck "Publish" and trigger again — event should disappear

---

## How It Works

```
Alan edits Google Sheet
        ↓
Apps Script detects edit (5-min debounce)
        ↓
Triggers Netlify build hook (POST request)
        ↓
Netlify runs: npm run build
        ↓
fetch-events.js pulls Google Sheet as CSV
        ↓
Filters: published? future date? required fields?
        ↓
Generates src/data/events.json
        ↓
Events page loads JSON and renders cards
        ↓
Event schema updated dynamically for Google
```

## Column Reference

| Column | Required | Description |
|--------|:--------:|-------------|
| Publish | Yes | Checkbox — only checked events appear on site |
| Date | Yes | Event date (MM/DD/YYYY) — past dates auto-hidden |
| Time | No | Event time (e.g., "2:00 PM") |
| Event Name | Yes | Name of the event/show |
| Venue | Yes | Venue or location name |
| Address | No | Street address |
| City | No | City (dropdown of service areas) |
| Notes | No | Additional details shown on the event card |

## Notes

- Past events are automatically hidden — no cleanup needed
- Unpublished rows (unchecked) are never shown, even if complete
- If the Google Sheet can't be reached during build, the previous events.json is preserved
- The 5-minute debounce prevents excessive rebuilds if Alan is editing multiple rows
- State is hardcoded to WI since all events are in Wisconsin
