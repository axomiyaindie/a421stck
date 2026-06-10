# The Bilingual Web-Book Framework (PWA & Progress-Tracked)

This document outlines the standard architecture, styling guidelines, and folder structures required to build a premium, bilingual, interactive educational "web book" app. 

You can feed this file directly into any code-generation LLM (Claude, GPT, Gemini) to build a new book from scratch with the exact same capabilities as this platform.

---

## Part 1: System Blueprint & Prompt to give to LLMs

*Copy and paste this exact prompt into an LLM to initialize a new web book:*

```text
Act as a Principal Frontend Architect. I want you to build an interactive, bilingual, offline-enabled (PWA), and progress-tracked "Web-Book App" using Next.js 15+ App Router, Tailwind CSS, and Lucide React. 

Core App Specifications:
1. Editorial Styling (Medium.com aesthetic): Clean margins, high-contrast text on white backgrounds, and constrained reading columns (max-w-3xl) for comfortable reading.
2. Dynamic Font Pairing (Bilingual Support):
   - English: Sans-serif UI font (Inter) paired with Serif reading font (Lora).
   - Localized Language (e.g. Assamese/Bengali): Sans-serif UI (Noto Sans Bengali) paired with Serif reading font (Noto Serif Bengali).
   - Script Safety: Adjust line-height to 1.8 - 1.85 for conjunct-heavy local scripts in CSS to prevent ligature clipping.
3. Decoupled Content Layer: Keep prose content, lesson outlines, and translations decoupled inside TypeScript files (`src/data/lessons.ts`, `src/data/dictionary.ts`, `src/data/resources.ts`). The frontend pages must remain strictly presentation shells.
4. Client-Side Localization: A state provider (`LocaleProvider`) that reads/writes language selection to `localStorage` and exposes a localized dictionary `t` dynamically.
5. Offline-First PWA Capabilities:
   - Provide a `manifest.json` pointing to SVG and PNG app icons.
   - Provide a zero-dependency `sw.js` Service Worker implementing a Stale-While-Revalidate caching strategy.
   - Set up Next.js file-based Open Graph (`opengraph-image.png`) metadata routing.
6. Progress Checkmarks: Save completed lesson IDs to a stringified list in browser `localStorage`. Highlight completed rows on sitemaps/track indexes with a green check icon.
7. Author Credits: Do not hardcode static developer credits. Bind them to dynamic templates that wrap the author's name in a blue hyperlink pointing to their profile.
```

---

## Part 2: Folder & File Structure Blueprint

```
root/
├── public/
│   ├── manifest.json                  # Web App manifest (icons, startup settings)
│   ├── sw.js                          # Service Worker (Stale-While-Revalidate caching)
│   ├── images/                        # Content photos/illustrative assets
│   │   └── .gitkeep
│   └── icons/                         # PWA install icons
│       ├── icon.svg                   # Vector logo icon
│       ├── icon-192.png               # PWA PNG icon (192x192)
│       └── icon-512.png               # PWA PNG icon (512x512)
│
├── src/
│   ├── app/
│   │   ├── opengraph-image.png        # Social sharing card image (1200x630)
│   │   ├── globals.css                # Global styles, line-height overrides, and typography
│   │   ├── layout.tsx                 # Root layout, Google fonts configurations & manifest links
│   │   ├── page.tsx                   # Homepage (Hero + Tracks + Guidelines & Warnings)
│   │   ├── parent-framework/
│   │   │   └── page.tsx               # Parent guide editorial page (English & Localized)
│   │   ├── resources/
│   │   │   └── page.tsx               # tabbed media resources (videos, blogs, profiles)
│   │   ├── [guideline-slug]/
│   │   │   └── page.tsx               # Dedicated pages for guidelines banners
│   │   └── lessons/
│   │       └── [id]/
│   │           └── page.tsx           # Dynamic reader layout + quiz completing progress tracker
│   │
│   ├── components/
│   │   └── ui/
│   │       ├── Header.tsx             # Sticky header + mobile navigation drawer options
│   │       ├── Footer.tsx             # Double footer (Sitemap + OER license + Author Credit link)
│   │       ├── LanguageSwitcher.tsx   # Toggle button switching locales
│   │       ├── HeroSection.tsx        # Hero section + cohort CTAs
│   │       ├── TrackCard.tsx          # Card displaying track metadata summary
│   │       ├── LessonRow.tsx          # Client row displaying checkmarks for completed lessons
│   │       └── TrackDetailView.tsx    # Reusable shell listing lessons per track
│   │
│   ├── data/
│   │   ├── dictionary.ts              # Localized site labels, hero notices, and headers
│   │   ├── lessons.ts                 # Full database for detailed lesson articles, sources & quizzes
│   │   └── resources.ts               # Database for resources page (videos, blogs, expert profiles)
│   │
│   └── hooks/
│       └── useLocale.tsx              # React Context Provider managing locale & SW registration
```

---

## Part 3: Essential Code Templates

### 1. The Zero-Dependency PWA Service Worker (`public/sw.js`)
*This script runs in the background of the browser, caching assets and pages to serve them instantly offline without requiring npm builds:*

```javascript
const CACHE_NAME = "webbook-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/parent-framework",
  "/resources",
  "/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || !event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        // Stale-While-Revalidate: Serve cached immediately, fetch updates silently
        fetch(event.request).then((res) => {
          if (res.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, res));
          }
        }).catch(() => {});
        return cached;
      }
      return fetch(event.request).then((res) => {
        if (!res || res.status !== 200 || res.type !== "basic") return res;
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
        return res;
      }).catch(() => {
        if (event.request.mode === "navigate") return caches.match("/");
      });
    })
  );
});
```

### 2. Progress Tracker Hook (Saves Progress on Quiz Completion)
*Attach this code to your dynamic lesson quiz submission handler to mark progress:*

```typescript
const handleQuizSubmit = (selectedOptionIndex: number, correctOptionIndex: number) => {
  setSubmitted(true);
  
  if (selectedOptionIndex === correctOptionIndex) {
    try {
      const completed = JSON.parse(localStorage.getItem("completed-lessons") || "[]");
      if (!completed.includes(lessonId)) {
        completed.push(lessonId);
        localStorage.setItem("completed-lessons", JSON.stringify(completed));
      }
    } catch (e) {
      console.error("Progress save failed", e);
    }
  }
};
```

### 3. Checkmark Renderer (Check and render completion state)
*Put this in your Lesson Row component to render progress icons instead of indexes:*

```typescript
const [isCompleted, setIsCompleted] = useState(false);

useEffect(() => {
  try {
    const completed = JSON.parse(localStorage.getItem("completed-lessons") || "[]");
    setIsCompleted(completed.includes(lesson.id));
  } catch (e) {
    console.error(e);
  }
}, [lesson.id]);

// Render logic:
// {isCompleted ? <CheckIcon className="text-green-500" /> : index + 1}
```

### 4. Dynamic Font Pairing & Script Line-Heights (`globals.css`)
*Ensures Assamese, Bengali, or other complex ligatures don't clip inside serif columns:*

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.medium-article-body {
  font-family: var(--font-lora), var(--font-noto-serif-bengali), Georgia, serif;
  font-size: 1.25rem;
  line-height: 1.6;
}

/* Override line-heights dynamically for complex script ligatures */
html[lang="as"] .medium-article-body {
  line-height: 1.85;
}
html[lang="as"] body {
  line-height: 1.8;
}
```
