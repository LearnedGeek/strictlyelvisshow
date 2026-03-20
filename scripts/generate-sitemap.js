const fs = require('fs');
const path = require('path');
const glob = require('path');

const SITE_URL = 'https://thestrictlyelvisshow.com';
const SRC_DIR = path.join(__dirname, '..', 'src');

// Scan for all HTML files in src/
const htmlFiles = fs.readdirSync(SRC_DIR)
  .filter(f => f.endsWith('.html'))
  .sort();

// Build sitemap entries
const today = new Date().toISOString().split('T')[0];

const entries = htmlFiles.map(file => {
  const slug = file === 'index.html' ? '' : file.replace('.html', '');
  const loc = slug ? `${SITE_URL}/${slug}` : `${SITE_URL}/`;
  const priority = slug === '' ? '1.0' : '0.8';

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(SRC_DIR, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(SRC_DIR, 'robots.txt'), robots);

console.log(`Generated sitemap.xml (${htmlFiles.length} pages) and robots.txt`);
