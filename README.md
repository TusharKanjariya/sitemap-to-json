# sitemap-to-json

A lightweight Node.js package that fetches and parses XML sitemaps into JSON format using only native Node.js modules—no external dependencies required!

---

## 🚀 Installation

### As a package (for programmatic use)

```bash
npm install sitemap-to-json
```

### As a CLI (run without installing)

```bash
npx sitemap-to-json https://example.com/sitemap.xml
```

---

## 💡 Usage Example (Programmatically)

```js
const { processSitemap } = require("sitemap-to-json");

(async () => {
    const urls = await processSitemap("https://example.com/sitemap.xml");
    console.log(urls);
})();
```

---

## 💻 Usage Example (CLI)

```bash
sitemap-to-json https://example.com/sitemap.xml
```

Or via npx:

```bash
npx sitemap-to-json https://example.com/sitemap.xml
```

---

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

---

## ✅ Features

- ✅ Pure native Node.js implementation
- ✅ Handles nested sitemap indexes
- ✅ Converts XML sitemap to structured JSON
- ✅ Zero external dependencies
- ✅ CLI + Programmatic support

---

## 👨‍💻 Contributing

💡 **Want to improve this tool?**  
Feel free to **fork** the repository, create a **new branch**, and submit a **pull request**.

💬 **Suggestions or Issues?**  
Open an [Issue](https://github.com/TusharKanjariya/sitemap-to-json/issues).

---

## ⭐ Support the Project

If you found this tool useful, consider **starring 🌟 the repository** to support further development.

---

🔗 **Follow me on GitHub**: [@TusharKanjariya](https://github.com/TusharKanjariya)  
📧 **Contact:** [tusharkanjariya2014@gmail.com](mailto:tusharkanjariya2014@gmail.com)

---

## 📄 License

[MIT](LICENSE)