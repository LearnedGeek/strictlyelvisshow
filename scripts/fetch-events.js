const fs = require('fs');
const path = require('path');
const https = require('https');

// Google Sheet published as CSV
// Replace SHEET_ID with the actual Google Sheet ID once created
const SHEET_ID = process.env.GOOGLE_SHEET_ID || '';
const SHEET_URL = SHEET_ID
  ? `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`
  : '';

const OUTPUT_PATH = path.join(__dirname, '..', 'src', 'data', 'events.json');

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function parseCSV(text) {
  const lines = text.split('\n').filter(line => line.trim());
  if (lines.length < 2) return [];

  // Parse header row
  const headers = parseCSVLine(lines[0]).map(h => h.trim().toLowerCase());

  // Parse data rows
  return lines.slice(1).map(line => {
    const values = parseCSVLine(line);
    const row = {};
    headers.forEach((h, i) => {
      row[h] = (values[i] || '').trim();
    });
    return row;
  });
}

function parseCSVLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      values.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  values.push(current);
  return values;
}

function isPublished(row) {
  const val = (row['publish'] || '').toUpperCase();
  return val === 'TRUE' || val === 'YES' || val === '✓' || val === 'X';
}

function isFutureDate(dateStr) {
  if (!dateStr) return false;
  const eventDate = new Date(dateStr);
  if (isNaN(eventDate.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return eventDate >= today;
}

function hasRequiredFields(row) {
  return row['date'] && row['event name'] && row['venue'];
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function fetchSheet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'StrictlyElvis-BuildScript/1.0' } }, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchSheet(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  // Ensure data directory exists
  const dataDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // If no sheet ID configured, output empty events
  if (!SHEET_URL) {
    console.log('No GOOGLE_SHEET_ID configured — generating empty events.json');
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify({ events: [], generatedAt: new Date().toISOString() }, null, 2));
    return;
  }

  try {
    console.log('Fetching events from Google Sheet...');
    const csv = await fetchSheet(SHEET_URL);
    const rows = parseCSV(csv);

    // Filter and sanitize
    const events = rows
      .filter(row => isPublished(row) && isFutureDate(row['date']) && hasRequiredFields(row))
      .map(row => ({
        date: escapeHtml(row['date']),
        dateFormatted: formatDate(row['date']),
        time: escapeHtml(row['time'] || ''),
        name: escapeHtml(row['event name']),
        venue: escapeHtml(row['venue']),
        address: escapeHtml(row['address'] || ''),
        city: escapeHtml(row['city'] || ''),
        state: escapeHtml(row['state'] || 'WI'),
        notes: escapeHtml(row['notes'] || '')
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    const output = {
      events: events,
      generatedAt: new Date().toISOString()
    };

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
    console.log(`Generated events.json with ${events.length} upcoming event(s)`);

  } catch (err) {
    console.warn(`Warning: Could not fetch events sheet: ${err.message}`);
    console.warn('Falling back to existing events.json or empty list');

    // If events.json already exists, keep it (stale data is better than no data)
    if (!fs.existsSync(OUTPUT_PATH)) {
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify({ events: [], generatedAt: new Date().toISOString() }, null, 2));
    }
  }
}

main();
