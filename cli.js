#!/usr/bin/env node

const { processSitemap } = require("./index");
const [, , sitemapUrl] = process.argv;

if (!sitemapUrl) {
    console.error("❌ Usage: sitemap-to-json <sitemap-url>");
    process.exit(1);
}

(async () => {
    try {
        const result = await processSitemap(sitemapUrl);
        console.log(JSON.stringify(result, null, 2));
    } catch (err) {
        console.error("❌ Error:", err.message);
        process.exit(1);
    }
})();
