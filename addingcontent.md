# Developer Guide: Adding Content & Scaling the Platform

This platform is built with a **decoupled data-first architecture**. All UI components consume content dynamically from typed TypeScript data structures. You can add, edit, or remove lessons, sources, or resources without touching any core Next.js presentation views or HTML files.

---

## 1. How to Edit or Add a Lesson

Lesson content is defined inside [lessons.ts](file:///a:/a/aifor21stkids/src/data/lessons.ts).

### Step-by-Step Instructions
1. Open the file `src/data/lessons.ts`.
2. Locate the `lessonsDetails` export object. It is partitioned by locale keys: `en` (English) and `as` (Assamese).
3. To **edit** an existing lesson, find its ID (e.g. `"exp-01"`) and update the paragraphs or questions.
4. To **add a new lesson**, insert a new key under both the `en` and `as` blocks following this schema:

```typescript
"your-lesson-id": {
  id: "your-lesson-id",
  title: "Lesson Title",
  subtitle: "Brief catching subtitle",
  readTime: "X min read",
  author: "Curated by Rakibul with AI", // Note: The frontend dynamically renders this with the author hyperlinked to their GitHub profile
  publishedDate: "June 2026",
  introduction: "First paragraph introducing the concept...",
  sections: [
    {
      heading: "Section Subheading",
      paragraphs: [
        "Paragraph one explaining details...",
        "Paragraph two continuing the explanation..."
      ]
    }
  ],
  keyTakeaways: [
    "Key takeaway point number one.",
    "Key takeaway point number two."
  ],
  sources: [
    {
      title: "Name of the Source",
      authorOrPublisher: "Publisher/Creator",
      url: "https://example.com/source-url",
      type: "article" // Options: "video" | "article" | "social"
    }
  ],
  quiz: {
    question: "What is the core question to test understanding?",
    options: [
      "Option A text",
      "Option B text",
      "Option C text",
      "Option D text"
    ],
    answerIndex: 1, // Index of correct option (0-indexed, i.e., 1 = Option B)
    explanation: "Brief description of why this option is correct."
  }
}
```

---

## 2. How to Add Wikipedia-Style Sources to a Lesson

Outbound references are nested inside each lesson's entry under `sources` in [lessons.ts](file:///a:/a/aifor21stkids/src/data/lessons.ts).

### Adding a Link
Simply add an object to the `sources: []` array inside the lesson:
```typescript
sources: [
  // Existing sources...
  {
    title: "How to Spot a Deepfake",
    authorOrPublisher: "TED-Ed (YouTube)",
    url: "https://www.youtube.com/watch?v=gloikrtjxu4",
    type: "video" // Can be: "video", "article", or "social"
  }
]
```
The lesson detail page (`src/app/lessons/[id]/page.tsx`) will automatically render this in a numbered list with formatting, publisher labels, and outbound redirects at the bottom.

---

## 3. How to Expand the Resources Page

The resources directory is stored in [resources.ts](file:///a:/a/aifor21stkids/src/data/resources.ts).

The page shows resources in 3 tabs: **Videos**, **Articles & Readings**, and **Experts Directory**. To add items, open `src/data/resources.ts` and append elements to the matching category array inside `en` and `as`.

### A. Adding a Video (with YouTube Inline Iframe player)
```typescript
{
  id: "vid-unique-number",
  title: "Video title explaining the concept",
  description: "A short, descriptive overview of what the video covers.",
  url: "https://www.youtube.com/watch?v=mJeNghZXtMo", // Full redirect link
  provider: "Name of the creator (e.g. Code.org)",
  embedId: "mJeNghZXtMo" // The YouTube video ID (found after "v=" in url)
}
```
*Note: If you provide an `embedId`, the page will render a responsive interactive video player directly on the screen.*

---

## 4. Editing Homepage Localized Labels, Guidelines & Notices

General site copy is defined inside [dictionary.ts](file:///a:/a/aifor21stkids/src/data/dictionary.ts).

To update the homepage warnings, guidelines, or buttons, modify the fields under `en.homepage` and `as.homepage`. Key banner assets include:
* **AI Guidelines Block:**
  * `guidelineTitle`: Title of the guidelines banner.
  * `guidelineText`: Summary text explaining AI tool benefits.
  * `guidelineLink`: Button text routing to `/ai-guidelines`.
* **AI Velocity Warning Block:**
  * `warningTitle`: Headline notice of the warning box.
  * `warningText`: Summary content warning of exponential speeds.
  * `warningLink`: Action button routing to `/future-of-ai`.

---

## 5. Curation Attribution Hyperlinking Rules

Whenever a page renders a curation attribution (e.g., consuming `.author` fields or displaying `Curated by Rakibul with AI` / `ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত`):
* The frontend component must parse or conditionally render the string.
* The name `"Rakibul"` (in English) or `"ৰকিবুল"` (in Assamese) must be rendered as an active hyperlink pointing to `https://github.com/axomiyaindie` styled in blue color (`style={{ color: '#2563eb' }}`).
* This ensures that authorship is correctly referenced and linked back in all locations (homepage, parent guidelines, lessons, and warning/guidelines articles).

---

## 6. Offline Support (PWA) & Local Progress Tracking

Offline access and dynamic progress checking run client-side to ensure zero-network latency:
* **Manifest & Caching:** Modify [manifest.json](file:///a:/a/aifor21stkids/public/manifest.json) or [sw.js](file:///a:/a/aifor21stkids/public/sw.js) to append or remove static assets from the cache listing. Core assets are pre-cached on page register; dynamic routing falls back to cached versions if offline.
* **Progress Tracking:** Completed lesson IDs are stored in a serialized array named `completed-lessons` inside the browser's `localStorage` namespace. Lesson rows read this array to display completion checkmarks.

---

## 7. Customizing App Icons & Social Sharing Images

You can customize app graphics by replacing files directly in the filesystem:
1. **App SVG Icon:** Replace the file [public/icons/icon.svg](file:///a:/a/aifor21stkids/public/icons/icon.svg) with your custom logo. This SVG is used by maskable manifest configurations.
2. **PWA PNG Icons:** Replace the files `icon-192.png` and `icon-512.png` in the [public/icons/](file:///a:/a/aifor21stkids/public/icons) directory with your custom app branding.
3. **Open Graph Sharing Card (OG Image):** Save your custom sharing artwork as `src/app/opengraph-image.png` or `src/app/opengraph-image.jpg` and delete `src/app/opengraph-image.svg`. Next.js automatically processes and registers whichever file is present in the `src/app/` folder.
4. **General Content Images:** Place any illustrative photos or figures inside the [public/images/](file:///a:/a/aifor21stkids/public/images) directory and reference them in your content markdown or lessons as `/images/your-photo.png`.
