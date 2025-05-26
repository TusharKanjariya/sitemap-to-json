
# sitemap-to-json

A lightweight Node.js package that fetches and parses XML sitemaps into JSON format using only native Node.js modules—no external dependencies required!

## 🚀 Installation

```bash
npm install sitemap-to-json
```

## 💡 Usage Example

```js
const { sitemapToJson } = require("sitemap-to-json");

(async () => {
    const urls = await sitemapToJson("https://example.com/sitemap.xml");
    console.log(urls);
})();
```

## 📌 Output Example

```json
[
    {
        "loc": "https://example.com/page1",
        "lastmod": "2023-03-21",
        "changefreq": "daily",
        "priority": "0.8"
    },
    {
        "loc": "https://example.com/page2",
        "lastmod": "2023-03-19",
        "changefreq": "weekly",
        "priority": "0.5"
    }
]
```

## ✅ Features

- Pure native Node.js implementation
- Handles nested sitemap indexes
- Converts XML sitemap directly into structured JSON
- Zero external dependencies

---
## 👨‍💻 Contributing

💡 **Want to improve this tool?**  
Feel free to **fork** the repository, create a **new branch**, and submit a **pull request**.  

💬 **Suggestions or Issues?** Open an [Issue](https://github.com/TusharKanjariya/sitemap-to-json/issues).

---

### ⭐ **Support the Project**
If you found this tool useful, consider **starring 🌟 the repository** to support further development.  
---
## 📄 License

[MIT](LICENSE)
