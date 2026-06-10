export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  url: string;
  provider: string;
  embedId?: string; // YouTube video ID for inline iframe player
}

export interface ResourcesSchema {
  videosHeader: string;
  articlesHeader: string;
  profilesHeader: string;
  videos: ResourceItem[];
  articles: ResourceItem[];
  profiles: ResourceItem[];
}

export const resourcesData: Record<"en" | "as", ResourcesSchema> = {
  en: {
    videosHeader: "Curated Learning Videos",
    articlesHeader: "Recommended Readings & Blogs",
    profilesHeader: "Industry Experts & Thinkers",
    videos: [
      {
        id: "vid-01",
        title: "How AI Works: Introduction to Machine Learning",
        description: "A friendly, easy-to-follow guide explaining how algorithms learn from data, curated by Code.org.",
        url: "https://www.youtube.com/watch?v=mJeNghZXtMo",
        provider: "Code.org",
        embedId: "mJeNghZXtMo"
      },
      {
        id: "vid-02",
        title: "But what is a neural network?",
        description: "An incredibly visual, mathematical look at the structural nodes that power modern generative AI models.",
        url: "https://www.youtube.com/watch?v=aircAruvnKk",
        provider: "3Blue1Brown",
        embedId: "aircAruvnKk"
      },
      {
        id: "vid-03",
        title: "The Rise of the Machines – Why Automation is Different This Time",
        description: "A beautiful animated look at the economic transformations caused by AI and automation in the 21st century.",
        url: "https://www.youtube.com/watch?v=yqgY8dO4s8M",
        provider: "Kurzgesagt",
        embedId: "yqgY8dO4s8M"
      }
    ],
    articles: [
      {
        id: "art-01",
        title: "MIT Technology Review — Artificial Intelligence",
        description: "Stay updated with the latest breakthroughs, analysis, and reports on the real-world impact of machine learning.",
        url: "https://www.technologyreview.com/topic/artificial-intelligence/",
        provider: "MIT Technology Review"
      },
      {
        id: "art-02",
        title: "Stanford HAI Official Blog",
        description: "Insights, research papers, and discussions focusing on building human-centered AI frameworks from Stanford University.",
        url: "https://hai.stanford.edu/news",
        provider: "Stanford Human-Centered AI"
      },
      {
        id: "art-03",
        title: "The Prompt Engineering Guide",
        description: "A comprehensive free learning resource on advanced prompt patterns, system prompts, and structuring instructions.",
        url: "https://www.promptingguide.ai/",
        provider: "DAIR.AI"
      }
    ],
    profiles: [
      {
        id: "prof-01",
        title: "Dr. Andrew Ng",
        description: "Co-founder of Coursera, founder of DeepLearning.AI, and Stanford Professor. A leading voice in machine learning education.",
        url: "https://twitter.com/AndrewYNg",
        provider: "Twitter / X Profile"
      },
      {
        id: "prof-02",
        title: "Dr. Yann LeCun",
        description: "Chief AI Scientist at Meta, NYU Professor, and Turing Award winner. One of the 'Godfathers of Deep Learning'.",
        url: "https://twitter.com/ylecun",
        provider: "Twitter / X Profile"
      },
      {
        id: "prof-03",
        title: "Dr. Joy Buolamwini",
        description: "Founder of the Algorithmic Justice League and author of 'Unmasking AI'. Activist fighting facial recognition bias.",
        url: "https://www.linkedin.com/in/joy-buolamwini-2b4a7a3b/",
        provider: "LinkedIn Profile"
      }
    ]
  },
  as: {
    videosHeader: "নিৰ্বাচিত শৈক্ষিক ভিডিঅ'সমূহ",
    articlesHeader: "পঢ়িবলগীয়া প্ৰবন্ধ আৰু ব্লগ",
    profilesHeader: "উদ্যোগ বিশেষজ্ঞ আৰু চিন্তাবিদসকল",
    videos: [
      {
        id: "vid-01",
        title: "AI-য়ে কেনেকৈ কাম কৰে: মেচিন লাৰ্নিঙৰ পৰিচয়",
        description: "এলগৰিডমে কেনেকৈ তথ্য বা ডাটাৰ পৰা শিকে তাৰ এক সৰল আৰু সুন্দৰ পৰিচয়, Code.org ৰ দ্বাৰা সংকলিত।",
        url: "https://www.youtube.com/watch?v=mJeNghZXtMo",
        provider: "Code.org",
        embedId: "mJeNghZXtMo"
      },
      {
        id: "vid-02",
        title: "নিউৰেল নেটৱৰ্কনো আচলতে কি?",
        description: "আধুনিক জেনেক্টিভ AI মডেলবোৰক চলোৱা সুক্ষ্ম নোড বা চিপ গাঁথনিৰ এক আকৰ্ষণীয় দৃশ্যমান গাণিতিক ৰূপ।",
        url: "https://www.youtube.com/watch?v=aircAruvnKk",
        provider: "3Blue1Brown",
        embedId: "aircAruvnKk"
      },
      {
        id: "vid-03",
        title: "মেচিনৰ উত্থান – স্বয়ংক্ৰিয়কৰণ কিয় এইবাৰ বেলেগ",
        description: "২১ শতিকাত AI আৰু স্বয়ংক্ৰিয়কৰণে অৰ্থনীতিলৈ আনিব পৰা পৰিৱৰ্তনসমূহৰ এক সুন্দৰ এনিমেটেড ৰূপ।",
        url: "https://www.youtube.com/watch?v=yqgY8dO4s8M",
        provider: "Kurzgesagt",
        embedId: "yqgY8dO4s8M"
      }
    ],
    articles: [
      {
        id: "art-01",
        title: "MIT প্ৰযুক্তি পৰ্যালোচনা — কৃত্ৰিম বুদ্ধিমত্তা",
        description: "মেচিন লাৰ্নিঙৰ বাস্তৱ প্ৰভাৱ আৰু শেহতীয়া আৱিষ্কাৰসমূহৰ খবৰ আৰু বিশ্লেষণসমূহ পঢ়ক।",
        url: "https://www.technologyreview.com/topic/artificial-intelligence/",
        provider: "MIT Technology Review"
      },
      {
        id: "art-02",
        title: "ষ্টেনফৰ্ড HAI অফিচিয়েল ব্লগ",
        description: "মানৱ-কেন্দ্ৰিক AI ব্যৱস্থা নিৰ্মাণ কৰাৰ বাবে ষ্টেনফৰ্ড বিশ্ববিদ্যালয়ৰ পৰা প্ৰকাশিত গৱেষণা আৰু আলোচনা।",
        url: "https://hai.stanford.edu/news",
        provider: "Stanford Human-Centered AI"
      },
      {
        id: "art-03",
        title: "প্ৰম্প্ট ইঞ্জিনিয়াৰিং গাইড",
        description: "প্ৰম্প্ট আৰ্হি, চিষ্টেম প্ৰম্প্ট আৰু সঠিক নিৰ্দেশনা প্ৰস্তুত কৰাৰ বিষয়ে এক সম্পূৰ্ণ বিনামূলীয়া সমল।",
        url: "https://www.promptingguide.ai/",
        provider: "DAIR.AI"
      }
    ],
    profiles: [
      {
        id: "prof-01",
        title: "ড° এণ্ড্ৰু এনজি",
        description: "Coursera ৰ সহ-প্ৰতিষ্ঠাপক, DeepLearning.AI ৰ প্ৰতিষ্ঠাপক আৰু ষ্টেনফৰ্ডৰ অধ্যাপক। মেচিন লাৰ্নিং শিক্ষাদানৰ অন্যতম অগ্ৰণী ব্যক্তি।",
        url: "https://twitter.com/AndrewYNg",
        provider: "Twitter / X প্ৰফাইল"
      },
      {
        id: "prof-02",
        title: "ড° য়ান লেকুন",
        description: "Meta ৰ মুখ্য AI বিজ্ঞানী, NYU ৰ অধ্যাপক আৰু টিউৰিং বঁটা বিজয়ী। 'ডিপ লাৰ্নিঙৰ পিতৃ স্বৰূপ' ব্যক্তি।",
        url: "https://twitter.com/ylecun",
        provider: "Twitter / X প্ৰফাইল"
      },
      {
        id: "prof-03",
        title: "ড° জয় বুওলামউইনি",
        description: "Algorithmic Justice League ৰ প্ৰতিষ্ঠাপক আৰু 'Unmasking AI' কিতাপখনৰ লেখিকা। চেহেৰা চিনাক্তকৰণত পক্ষপাতিত্বৰ বিৰুদ্ধে যুঁজ দিয়া কৰ্মী।",
        url: "https://www.linkedin.com/in/joy-buolamwini-2b4a7a3b/",
        provider: "LinkedIn প্ৰফাইল"
      }
    ]
  }
};
