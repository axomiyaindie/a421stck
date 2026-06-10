# Project Architecture & System Specifications: AIFor21stCenturyKids

This file provides a complete technical blueprint of the **AIFor21stCenturyKids** platform. You can feed this file directly into any Large Language Model (LLM) or code generation assistant to give it a comprehensive understanding of the project's goal, technical stack, file architecture, and coding standards.

---

## 1. Project Overview & Design Philosophy

* **Project Name:** AIFor21stCenturyKids
* **Target Audience:** Parents and Kids/Young Adults (Ages 5–20)
* **Goal:** Deliver a high-performance, accessible, bilingual educational resource teaching AI literacy, safety, history, and critical thinking skills.
* **Core Aesthetics:** Clean, objective, corporate-editorial layout modeled after **Medium.com**.
  * **Layout constraints:** Constrained reading columns (`max-w-3xl` / `max-w-2xl` with auto margins) for comfortable reading.
  * **High contrast:** Soft dark-charcoal text (`#242424` or `#191919`) on a pure white background.
  * **Typography system:** Pairs clean sans-serif UI components (navigation headers, switches, buttons) with premium serif reading typography (article body, takeaways, quotes).
  * **AI Guidelines and Warning Banners:** Integrated at the bottom of the homepage, aligned to the main page containers (`max-w-6xl`) to feel like integral chapters of the book:
    * **AI Guidelines Section:** Styled with a soft indigo-slate gradient (`bg-gradient-to-br from-indigo-50/60 via-slate-50/50 to-indigo-50/60` with border `border-indigo-100`) containing steps on how to leverage AI tools.
    * **AI Velocity Warning Section:** Styled with a soft yellow gradient (`bg-gradient-to-br from-amber-50/80 via-orange-50/30 to-amber-50/80` with border `border-amber-200/70`) warning about exponential velocity.
  * **Progress Checklist Tracking:** Saves completed lesson IDs to `localStorage` dynamically upon answering a quiz correctly, displaying a green checkmark next to the lesson indexes on track directories.

---

## 2. Recommended Technology Stack

* **Framework:** Next.js 15+ App Router (TypeScript, React 19)
* **Styling:** Tailwind CSS (v3.x / postcss configuration)
* **Icons:** Lucide React (`lucide-react`)
* **State Management:** React Context Provider for client-side localization routing.
* **Offline Service Worker:** Progressive Web App (PWA) enabled using zero-dependency, stale-while-revalidate Service Worker caching.
* **Metadata & Sharing:** Built-in App Router file-based metadata utilities. Includes dynamic Open Graph (OG) social sharing templates.

---

## 3. Bilingual & Typography System

### A. Dynamic Font Pairing
To support English and Assamese (native script) seamlessly, the system loads four Google fonts in `src/app/layout.tsx`:
* **English UI & Controls:** `Inter` (sans-serif)
* **English Reading Content:** `Lora` (serif)
* **Assamese UI & Controls:** `Noto Sans Bengali` (sans-serif)
* **Assamese Reading Content:** `Noto Serif Bengali` (serif)

These are mapped to CSS variables (`--font-inter`, `--font-noto-bengali`, `--font-lora`, `--font-noto-serif-bengali`) and extended inside `tailwind.config.ts` as:
* `font-sans`: Mapped to Inter and Noto Sans Bengali.
* `font-serif`: Mapped to Lora and Noto Serif Bengali.

### B. Assamese Ligature Optimization
Assamese script contains complex ligatures that clip if vertical spacing is too tight. To prevent this, `src/app/globals.css` applies explicit line-height overrides:
* When `html[lang="as"]` is active, body text line-height increases to `1.8` and the serif article text increases to `1.85`.
* English (`html[lang="en"]`) defaults to a standard `1.6` for body text.

### C. Localization Provider & PWA Registration
Dynamic switching between English (`en`) and Assamese (`as`) is managed by `LocaleProvider` in `src/hooks/useLocale.tsx`. It:
* Persists the user's language selection to `localStorage` (saved as `app-locale`).
* Synchronizes the HTML root `lang` attribute dynamically.
* Registers the browser `serviceWorker` file `/sw.js` upon mounting.

---

## 4. Database Schema (Decoupled Content Layer)

The application separates content databases from the React presentation components to allow seamless future migrations to external database engines (like Supabase/PostgreSQL) without restructuring the frontend layout logic.

There are three main files in the data layer:

### A. Core Site Strings: `src/data/dictionary.ts`
Holds translation blocks for the homepage hero, headers, and warning/guideline notice cards:
```typescript
export interface LessonStructure {
  id: string;
  title: string;
  description: string;
  duration: string;
}

export interface AgeCohort {
  title: string;
  ageRange: string;
  focusArea: string;
  actionText: string;
  lessons: LessonStructure[];
}

export interface HomepageContent {
  heroTagline: string;
  heroHeadline: string;
  heroDescription: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  tracksHeading: string;
  tracksSubheading: string;
  navResources: string;
  warningTitle: string;    // Localized AI velocity warning card title
  warningText: string;     // Localized warning body text
  warningLink: string;     // Localized warning call-to-action
  guidelineTitle: string;  // Localized AI Guidelines title
  guidelineText: string;   // Localized guidelines summary text
  guidelineLink: string;   // Localized guidelines call-to-action
}

export interface LocalizationSchema {
  homepage: HomepageContent;
  tracks: {
    explorers: AgeCohort;
    creators: AgeCohort;
    strategists: AgeCohort;
  };
}
```

### B. Long-Form Lessons: `src/data/lessons.ts`
Houses detailed article contents, interactive quizzes, and references for all 9 lessons:
```typescript
export interface LessonSource {
  title: string;
  authorOrPublisher: string;
  url: string;
  type: "video" | "article" | "social";
}

export interface LessonDetail {
  id: string;
  title: string;
  subtitle: string;
  readTime: string;
  author: string; // Attributed as "Curated by Rakibul with AI" or "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত"
  publishedDate: string;
  introduction: string;
  sections: { heading: string; paragraphs: string[] }[];
  keyTakeaways: string[];
  sources: LessonSource[]; // Wikipedia-style outbound reference links
  quiz: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  };
}
```

### C. Learning Resources: `src/data/resources.ts`
Stores items rendered on the independent `/resources` page.

---

## 5. Directory & File Structure Map

```
a:/a/aifor21stkids/
├── public/
│   ├── manifest.json                  # Web App manifest declaring install characteristics & icons
│   ├── sw.js                          # Service worker scripting pre-caching & stale-while-revalidate assets
│   ├── images/                        # Directory to store manually added content images
│   │   └── .gitkeep
│   ├── icons/                         # Directory to store PWA app icons
│   │   ├── icon.svg                   # Scalable vector app icon placeholder
│   │   ├── icon-192.png               # PNG app icon (192x192) for installable PWA
│   │   ├── icon-512.png               # PNG app icon (512x512) for installable PWA
│   │   └── .gitkeep
│   ├── next.svg
│   └── vercel.svg
│
├── src/
│   ├── app/
│   │   ├── opengraph-image.png        # Social sharing card image (Replace with custom 1200x630 PNG)
│   │   ├── globals.css                # Global styles, typography & Medium.com styling overrides
│   │   ├── layout.tsx                 # Root layout, Google fonts configurations & manifest links
│   │   ├── page.tsx                   # Homepage (Hero + Tracks + AI Guidelines + AI Warning block)
│   │   ├── parent-framework/
│   │   │   └── page.tsx               # Long-form editorial parent guidelines (English & Assamese)
│   │   ├── resources/
│   │   │   └── page.tsx               # Independent tabbed page displaying videos, articles, and profiles
│   │   ├── future-of-ai/
│   │   │   └── page.tsx               # Long-form detailed AI velocity warning editorial page
│   │   ├── ai-guidelines/
│   │   │   └── page.tsx               # Long-form detailed AI integration guidelines page
│   │   ├── lessons/
│   │   │   └── [id]/
│   │   │       └── page.tsx           # Dynamic reader layout + quiz completing progress tracker
│   │   ├── track-5-9/
│   │   │   └── page.tsx               # Sub-view shell for explorers track
│   │   ├── track-10-14/
│   │   │   └── page.tsx               # Sub-view shell for creators track
│   │   └── track-15-20/
│   │       └── page.tsx               # Sub-view shell for strategists track
│   │
│   ├── components/
│   │   └── ui/
│   │       ├── Header.tsx             # Sticky header (Title, links, mobile layout toggle options)
│   │       ├── Footer.tsx             # Double footer: Sitemap Directory + OER licenses & authors profile link
│   │       ├── LanguageSwitcher.tsx   # Switch toggling 'en' / 'as' state
│   │       ├── HeroSection.tsx        # Responsive site hero + CTAs to tracks & parent docs
│   │       ├── TrackCard.tsx          # Card displaying track summary info
│   │       ├── LessonRow.tsx          # Client row rendering dynamic start state & local checkmark completions
│   │       └── TrackDetailView.tsx    # Reusable shell listing details & lesson cards per track
│   │
│   ├── data/
│   │   ├── dictionary.ts              # Localized site labels & navigation interface data
│   │   ├── lessons.ts                 # Full database for detailed lesson texts, sources & quizzes
│   │   └── resources.ts               # Database for resources page (videos, blogs, expert profiles)
│   │
│   └── hooks/
│       └── useLocale.tsx              # React Context Provider managing internationalization state & PWA registration
│
│   ├── package.json                   # Next.js 15, React 19, and Tailwind CSS dependencies
│   ├── tailwind.config.ts             # Tailwind configuration defining the typography paired fonts
│   ├── postcss.config.mjs             # PostCSS setup compiling Tailwind CSS styles
│   ├── .gitignore                     # Git tracking exclusion filters file
│   ├── README.md                      # Public description documentation file for GitHub
│   ├── addingcontent.md               # Developer manual for adding new content to the codebase
│   └── webbooks.md                    # Master blueprint template for creating bilingual web-books
```

---

## 6. How Future LLMs Can Safely Modify This Codebase

When writing code generator prompts or instructing another agent to make tweaks:

1. **Maintain Decoupling:** Never hardcode text or prose inside the UI files (e.g., in `src/app/lessons/[id]/page.tsx` or `src/app/parent-framework/page.tsx`). Always add the entries in `src/data/lessons.ts`, `src/data/dictionary.ts`, or `src/data/resources.ts` and fetch them dynamically using the `useLocale()` hook.
2. **Observe Typography Pairings:** 
   * UI containers, buttons, switches, and navigation headers must use the default sans-serif font class (`font-sans`).
   * Long-form readable text, headers inside articles, paragraphs, and blockquotes must use the serif class (`font-serif`) inside a constrained reading column to preserve the Medium.com feel.
3. **Respect internationalization:** Any new component that consumes text must support bilingual routing. Read active strings using the `t` object destructured from `useLocale()`.
4. **Assamese line-height safety:** If modifying font sizes, ensure you test rendering in Assamese (`as`). Ensure `line-height` remains between `1.8` and `1.85` for reading blocks so the script ligatures do not overlap.
5. **Authorship Link Consistency:** Do not display raw static strings for the project curation credit (`Curated by Rakibul with AI` or `ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত`). You must parse or dynamically render the credit so that `"Rakibul"` / `"ৰকিবুল"` is wrapped in an `<a>` tag linking to `https://github.com/axomiyaindie` styled inline in blue (`style={{ color: '#2563eb' }}`).
6. **Progress State Persistence:** Progress checks read the list stringified under `completed-lessons` inside the browser's `localStorage` namespace. Avoid adding network calls or database connectors for progress caching.
