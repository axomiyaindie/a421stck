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
  warningTitle: string;
  warningText: string;
  warningLink: string;
  guidelineTitle: string;
  guidelineText: string;
  guidelineLink: string;
}

export interface LocalizationSchema {
  homepage: HomepageContent;
  tracks: {
    explorers: AgeCohort;
    creators: AgeCohort;
    strategists: AgeCohort;
  };
}

export const dictionaries: Record<"en" | "as", LocalizationSchema> = {
  en: {
    homepage: {
      heroTagline: "The Single Most Critical Skill of Our Century",
      heroHeadline: "AI Won't Replace Your Child. But a Child Who Directs AI Will.",
      heroDescription: "Rote learning is dead. Rote coding is dying. This OER book is a living, bilingual guide for parents and students aged 5 to 20 to master cognitive tool direction, output verification, and critical logic—before the automated economy redraws the career map. Read it completely or be left behind.",
      primaryButtonText: "View Learning Tracks",
      secondaryButtonText: "Parent Framework Documentation",
      tracksHeading: "Structured Learning Pathways",
      tracksSubheading: "Curriculum designed specifically for core cognitive developmental stages.",
      navResources: "Resources",
      warningTitle: "A Crucial Warning on AI Velocity",
      warningText: "AI is accelerating at an unprecedented rate, writing its own code and self-improving. Sci-fi theorems are becoming reality faster than we ever imagined, changing which skills hold value.",
      warningLink: "Read Full Warning & Future Impact Analysis",
      guidelineTitle: "Universal AI Guidelines for Fast-Tracking Your Life",
      guidelineText: "AI won't take your job, but a person using AI will. Whether you are a student, parent, or professional, learn to utilize the full power of AI tools to accelerate your study, business, and daily productivity, or risk being left behind.",
      guidelineLink: "Read AI Guidelines & Actions"
    },
    tracks: {
      explorers: {
        title: "The Explorers",
        ageRange: "5-9",
        focusArea: "Fundamental logic structures, automation boundaries, and identifying synthetic digital imagery.",
        actionText: "Access Explorer Module",
        lessons: [
          { id: "exp-01", title: "Defining Automation", description: "Distinguishing between deterministic software operations and human execution parameters.", duration: "5 minutes" },
          { id: "exp-02", title: "Real vs. Synthetic", description: "Learning to identify AI-generated images and understand that not everything on a screen is real.", duration: "10 minutes" },
          { id: "exp-03", title: "Basic Logic Gates", description: "Introduction to simple IF/THEN rules that form the basis of all computer instructions.", duration: "15 minutes" },
          { id: "exp-04", title: "The Memory Helper", description: "Moving from rote memorization of facts to asking smart questions and logical play.", duration: "5 minutes" }
        ]
      },
      creators: {
        title: "The Creators",
        ageRange: "10-14",
        focusArea: "Structured prompt interaction techniques, algorithmic data biases, and digital footprints.",
        actionText: "Access Creator Module",
        lessons: [
          { id: "cre-01", title: "Prompt Engineering Basics", description: "How to structure queries to get precise, factual, and useful responses from language models.", duration: "15 minutes" },
          { id: "cre-02", title: "Understanding Algorithm Bias", description: "Exploring how training data can contain human biases and how AI models reproduce them.", duration: "20 minutes" },
          { id: "cre-03", title: "The Digital Footprint", description: "Analyzing how personal data is collected and used to train future generative systems.", duration: "15 minutes" },
          { id: "cre-04", title: "AI as a Co-Pilot, Not a Copycat", description: "Using AI to explain difficult concepts in multiple styles instead of copy-pasting homework answers.", duration: "15 minutes" }
        ]
      },
      strategists: {
        title: "The Strategists",
        ageRange: "15-20",
        focusArea: "Advanced prompt engineering frameworks, deepfake forensic detection, and economic implications of industrial automation.",
        actionText: "Access Strategist Module",
        lessons: [
          { id: "str-01", title: "Deepfake Forensics", description: "Advanced techniques for detecting synthetically generated media and misinformation.", duration: "25 minutes" },
          { id: "str-02", title: "Economic Automation", description: "Analyzing the impact of AI on job markets and how to position oneself strategically.", duration: "30 minutes" },
          { id: "str-03", title: "AI Ethics & Policy", description: "Understanding the regulatory landscape and the ethical responsibilities of AI deployment.", duration: "25 minutes" },
          { id: "str-04", title: "The Death of Rote Memorization", description: "How the modern workforce values critical verification and prompt orchestration over standard recall.", duration: "20 minutes" }
        ]
      }
    }
  },
  as: {
    homepage: {
      heroTagline: "আমাৰ শতিকাৰ আটাইতকৈ গুৰুত্বপূৰ্ণ দক্ষতা",
      heroHeadline: "AI-য়ে আপোনাৰ সন্তানৰ স্থান ল'ব নোৱাৰে। কিন্তু যিজন সন্তানে AI পৰিচালনা কৰিব পাৰে, তেওঁহে ল’ব।",
      heroDescription: "যান্ত্ৰিক মুখস্থ বিদ্যা এতিয়া অচল। কেৱল ক'ডিঙৰ গুৰুত্বও ক্ৰমাৎ হেৰাই গৈছে। এইখন কিতাপ হ'ল ৫ ৰ পৰা ২০ বছৰ বয়সৰ শিক্ষাৰ্থী আৰু অভিভাৱকৰ বাবে এক জীৱন্ত, দ্বিভাষিক নিৰ্দেশিকা। স্বয়ংক্ৰিয় অৰ্থনীতিয়ে কেৰিয়াৰৰ মানচিত্ৰখন নতুনকৈ অঁকাৰ আগতেই AI পৰিচালনা, সত্যতা নিৰূপণ আৰু জটিল যুক্তি আয়ত্ত কৰক। ইয়াক সম্পূৰ্ণকৈ পঢ়ক, নহ'লে পিছ পৰি ৰ'ব।",
      primaryButtonText: "পাঠ্যক্ৰমসমূহ চাওক",
      secondaryButtonText: "অভিভাৱকৰ বাবে নিৰ্দেশনা",
      tracksHeading: "পৰিকল্পিত শিক্ষণ পথ",
      tracksSubheading: "প্ৰণালীবদ্ধ জ্ঞান আৰু মানসিক বিকাশৰ স্তৰ অনুসৰি প্ৰস্তুত কৰা পাঠ্যক্ৰম।",
      navResources: "সম্পদসমূহ",
      warningTitle: "AI ৰ গতি সন্দৰ্ভত এক গুৰুত্বপূৰ্ণ সতৰ্কবাণী",
      warningText: "AI অভূতপূৰ্ব গতিত অগ্ৰসৰ হৈছে, নিজে কোড লিখিছে আৰু নিজেই উন্নত হৈছে। কল্পবিজ্ঞানৰ কাহিনীসমূহ আমাৰ ধাৰণাবোৰতকৈও দ্ৰুতগতিত বাস্তৱত পৰিণত হৈছে আৰু কোনবোৰ দক্ষতা উপযোগী হৈ থাকিব তাক সঠিকভাৱে কোৱাটো কঠিন হৈ পৰিছে।",
      warningLink: "পূৰ্ণ সতৰ্কবাণী আৰু ভৱিষ্যতৰ প্ৰভাৱ বিশ্লেষণ পঢ়ক",
      guidelineTitle: "জীৱন ক্ষিপ্ৰ কৰাৰ বাবে সাৰ্বজনীন AI নিৰ্দেশিকা",
      guidelineText: "AI-য়ে আপোনাৰ চাকৰি কাঢ়ি নলয়, কিন্তু AI ব্যৱহাৰ কৰা এজন ব্যক্তিয়েহে ল'ব। আপুনি এজন ছাত্ৰ, অভিভাৱক বা কৰ্মচাৰী যিয়েই নহওক কিয়, আপোনাৰ অধ্যয়ন, ব্যৱসায় আৰু উৎপাদনশীলতাক ক্ষিপ্ৰ কৰিবলৈ AI সঁজুলিসমূহৰ সম্পূৰ্ণ শক্তি ব্যৱহাৰ কৰিবলৈ শিকক।",
      guidelineLink: "AI নিৰ্দেশিকা আৰু পদক্ষেপসমূহ পঢ়ক"
    },
    tracks: {
      explorers: {
        title: "দি এক্সপ্লৰাৰ্ছ (সন্ধানী)",
        ageRange: "৫-৯",
        focusArea: "মৌলিক যুক্তি গঠন, স্বয়ংক্ৰিয়কৰণৰ পৰিসীমা আৰু কৃত্ৰিম ডিজিটেল ছবি চিনাক্তকৰণ।",
        actionText: "সন্ধানী মডিউল খোলক",
        lessons: [
          { id: "exp-01", title: "স্বয়ংক্ৰিয়কৰণৰ সংজ্ঞা", description: "ছফ্টৱেৰৰ নিৰ্দিষ্ট কাৰ্যপ্ৰণালী আৰু মানুহৰ কাৰ্যক্ষমতাৰ মাজৰ পাৰ্থক্য বুজি পোৱা।", duration: "৫ মিনিট" },
          { id: "exp-02", title: "প্ৰকৃত বনাম কৃত্ৰিম", description: "AI-য়ে বনোৱা ছবি চিনাক্ত কৰিবলৈ শিকা আৰু স্ক্ৰীণত থকা সকলো বস্তু যে সঁচা নহয় সেয়া বুজা।", duration: "১০ মিনিট" },
          { id: "exp-03", title: "মৌলিক লজিক গেট", description: "সাধাৰণ IF/THEN নিয়মৰ পৰিচয়, যি সকলো কম্পিউটাৰ নিৰ্দেশনাৰ ভিত্তি।", duration: "১৫ মিনিট" },
          { id: "exp-04", title: "স্মৃতি সহায়ক", description: "তথ্য মুখস্থ কৰাৰ পৰিবৰ্তে স্মাৰ্ট প্ৰশ্ন কৰা আৰু লজিক খেল শিকা।", duration: "৫ মিনিট" }
        ]
      },
      creators: {
        title: "দি ক্ৰিয়েটৰ্ছ (সৃষ্টিকৰ্তা)",
        ageRange: "১০-১৪",
        focusArea: "প্ৰম্প্ট ব্যৱহাৰৰ নিয়মসমূহ, এলগৰিডমৰ পক্ষপাতিত্ব আৰু ডিজিটেল পদচিহ্ন।",
        actionText: "সৃষ্টিকৰ্তা মডিউল খোলক",
        lessons: [
          { id: "cre-01", title: "প্ৰম্প্ট ইঞ্জিনিয়াৰিং প্ৰাথমিক জ্ঞান", description: "ভাষা মডেলৰ পৰা সঠিক, তথ্যসমৃদ্ধ আৰু উপযোগী সঁহাৰি পাবলৈ প্ৰশ্ন কেনেকৈ গঠন কৰিব লাগে।", duration: "১৫ মিনিট" },
          { id: "cre-02", title: "এলগৰিডমৰ পক্ষপাতিত্ব বুজি পোৱা", description: "প্ৰশিক্ষণ তথ্যত মানৱীয় পক্ষপাতিত্ব কেনেকৈ সোমাই পৰে আৰু AI মডেলে কেনেকৈ তাৰ পুনৰাবৃত্তি কৰে তাৰ বিশ্লেষণ।", duration: "২০ মিনিট" },
          { id: "cre-03", title: "ডিজিটেল পদচিহ্ন", description: "ভৱিষ্যতৰ জেনেবেটিভ চিষ্টেমবোৰক প্ৰশিক্ষণ দিবলৈ ব্যক্তিগত তথ্য কেনেকৈ সংগ্ৰহ আৰু ব্যৱহাৰ কৰা হয় তাৰ বিশ্লেষণ।", duration: "১৫ মিনিট" },
          { id: "cre-04", title: "AI এক সহ-চালক, নকলনবীচ নহয়", description: "গৃহকৰ্মৰ উত্তৰ কপি কৰাৰ পৰিবৰ্তে বিভিন্ন শৈলীত কঠিন ধাৰণাসমূহ বুজিবলৈ AI ব্যৱহাৰ কৰা।", duration: "১৫ মিনিট" }
        ]
      },
      strategists: {
        title: "দি ষ্ট্ৰেটেজিষ্ট (পৰিকল্পনাকাৰী)",
        ageRange: "১৫-২০",
        focusArea: "উচ্চস্তৰীয় প্ৰম্প্ট ইঞ্জিনিয়াৰিং ফ্ৰেমৱৰ্ক, ডিপফেক চিনাক্তকৰণ আৰু উদ্যোগিক স্বয়ংক্ৰিয়কৰণৰ অৰ্থনৈতিক প্ৰভাৱ।",
        actionText: "পৰিকল্পনাকাৰী মডিউল খোলক",
        lessons: [
          { id: "str-01", title: "ডিপফেক ফৰেনছিক", description: "কৃত্ৰিমভাৱে প্ৰস্তুত কৰা মিডিয়া আৰু ভুল তথ্য চিনাক্ত কৰাৰ উন্নত কৌশল।", duration: "২৫ মিনিট" },
          { id: "str-02", title: "অৰ্থনৈতিক স্বয়ংক্ৰিয়কৰণ", description: "কৰ্মক্ষেত্ৰত AI-ৰ প্ৰভাৱ আৰু নিজকে কেনেকৈ কৌশলগতভাৱে স্থাপন কৰিব পাৰি তাৰ বিশ্লেষণ।", duration: "৩০ মিনিট" },
          { id: "str-03", title: "AI নীতি আৰু নৈতিকতা", description: "AI ব্যৱহাৰৰ নিয়ন্ত্ৰণ ব্যৱস্থা আৰু নৈতিক দায়িত্বসমূহ বুজি পোৱা।", duration: "২৫ মিনিট" },
          { id: "str-04", title: "যান্ত্ৰিক মুখস্থ বিদ্যাৰ অৱসান", description: "আধুনিক কৰ্মক্ষেত্ৰত তথ্য মনত ৰখাৰ পৰিৱৰ্তে কেনেকৈ গুৰুত্বপূৰ্ণ সত্যতা নিৰূপণ আৰু প্ৰম্প্ট ব্যৱহাৰ কৰা হয়।", duration: "২০ মিনিট" }
        ]
      }
    }
  }
};
