const https = require("https");
const http = require("http");
const { URL } = require("url");

function fetchXML(url) {
    return new Promise((resolve, reject) => {
        const parsedUrl = new URL(url);
        const protocol = parsedUrl.protocol === "https:" ? https : http;

        protocol.get(parsedUrl, (res) => {
            let xml = "";
            res.on("data", chunk => xml += chunk);
            res.on("end", () => resolve(xml));
        }).on("error", (err) => {
            console.error(`Error fetching ${url}:`, err.message);
            resolve(null);
        });
    });
}

function parseSitemapIndex(xml) {
    const regex = /<loc>(.*?)<\/loc>/g;
    let matches, urls = [];
    while ((matches = regex.exec(xml))) {
        urls.push(matches[1]);
    }
    return urls;
}

function parseUrlSet(xml) {
    const urlRegex = /<url>([\s\S]*?)<\/url>/g;
    const getTagContent = (tag, xml) => (new RegExp(`<${tag}>(.*?)<\/${tag}>`).exec(xml) || [])[1] || null;

    let match, urls = [];
    while ((match = urlRegex.exec(xml))) {
        const urlBlock = match[1];
        urls.push({
            loc: getTagContent('loc', urlBlock),
            lastmod: getTagContent('lastmod', urlBlock),
            changefreq: getTagContent('changefreq', urlBlock),
            priority: getTagContent('priority', urlBlock),
        });
    }
    return urls;
}

async function processSitemap(url) {
    const xml = await fetchXML(url);
    if (!xml) return [];

    if (xml.includes("<sitemapindex")) {
        const subSitemaps = parseSitemapIndex(xml);
        const nestedUrls = await Promise.all(subSitemaps.map(sub => processSitemap(sub)));
        return nestedUrls.flat();
    }

    if (xml.includes("<urlset")) {
        return parseUrlSet(xml);
    }

    return [];
}

module.exports = {
    processSitemap,
};