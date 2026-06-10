"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { 
  ArrowLeft, 
  AlertTriangle, 
  Cpu, 
  Globe, 
  Sparkles, 
  TrendingUp, 
  BookOpen 
} from "lucide-react";

export default function FutureOfAiPage() {
  const { locale } = useLocale();

  const content = {
    en: {
      title: "The AI Velocity Warning: Navigating the Future of Cognitive Automation",
      subtitle: "AI is accelerating at an unprecedented speed, coding itself recursively, and redefining the very nature of human skill. Why every parent and educator must adapt today.",
      author: "Curated by Rakibul with AI",
      readTime: "8 min read",
      publishedDate: "June 2026",
      backLink: "Back to Home",
      
      intro: "We are living through a singular moment in human history. The industrial revolution mechanized muscle; the computer revolution digitized calculation. The artificial intelligence revolution is automating cognitive execution itself. And it is happening at a speed that defies human intuition.",
      
      sec1Title: "1. The Velocity Crisis: Exponential Growth vs. Human Intuition",
      sec1Text: "Human beings think linearly. We assume that tomorrow will look like today, and next year will represent a minor incremental step. But AI progress is exponential. The time between major breakthroughs is shrinking from decades to months. Sci-fi theorems are becoming reality faster than we ever imagined.",
      
      sec2Title: "2. Recursive Self-Improvement: AI Building Itself",
      sec2Text: "The defining catalyst of this acceleration is recursive self-improvement. Historically, humans wrote code to program computers. Today, AI systems are beginning to write, debug, and optimize their own code. Recent research papers, such as Anthropic's publications on reinforcement learning feedback loops, constitutional AI, and self-correcting models, show that AI can recursively evaluate and enhance its own code base. When software begins writing software, the speed of development is no longer limited by human typing speed or cognitive bandwidth. It scales with raw computing power.",
      
      sec3Title: "3. The Demise of the Traditional Consumer Internet",
      sec3Text: "The consumer internet we have known for thirty years—a portal of search engines, index links, and static websites—is dissolving. It is being replaced by agentic AI networks. Instead of querying a search engine to read ten links, users will command AI agents to execute multi-step tasks: researching, booking, coding, and negotiating autonomously. The web is transforming from a library of static pages to a dynamic ecosystem of actions.",
      
      sec4Title: "4. The Evolution of Value: Which Skills Hold Value?",
      sec4Text: "If AI can write perfect code, draft legal briefs, and design software architectures, what should our children learn? The value of rote memorization is dead. Even raw syntax-level coding is becoming commoditized. The skills that will hold value are high-level synthesis, prompt engineering, critical verification (detecting hallucinations and bias), systems design, and ethical stewardship. We must train children to be directors of intelligence, not passive consumers of code.",
      
      sec5Title: "5. Why This Living Book Exists",
      sec5Text: "Because the ground is shifting beneath our feet daily, static textbooks are obsolete the moment they are printed. This Open Educational Resource (OER) book, curated by Rakibul with AI, is designed as a living, breathing guide. It is not an artifact of the past, but an active compass for the future, helping parents and students build foundational literacy for the era of automation. Everyone must care about this transition—it is the most important human invention since the mastery of fire.",
      
      conclusionHeader: "The Paths Forward",
      conclusionText: "We cannot stop the wave, but we can teach our children how to surf. By focusing on fundamental concepts of automation, logical structure, and critical verification, this curriculum prepares the next generation not just to survive, but to lead in the age of artificial intelligence."
    },
    as: {
      title: "AI-ৰ গতিৰ সতৰ্কবাণী: বৌদ্ধিক স্বয়ংক্ৰিয়কৰণৰ ভৱিষ্যত নিৰূপণ",
      subtitle: "AI অভূতপূৰ্ব গতিত উন্নত হৈছে, নিজে কোড লিখিছে আৰু মানৱীয় দক্ষতাৰ সংজ্ঞাকে সলাই পেলাইছে। প্ৰতিজন অভিভাৱক আৰু শিক্ষক কিয় আজি সাজু হোৱা উচিত তাৰ বিশ্লেষণ।",
      author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
      readTime: "৮ মিনিট পঢ়ক",
      publishedDate: "জুন ২০২৬",
      backLink: "হোমলৈ উভতি যাওক",
      
      intro: "আমি মানৱ ইতিহাসৰ এক অনন্য সন্ধিক্ষণত বাস কৰিছোঁ। ঔদ্যোগিক বিপ্লৱে মানুহৰ শাৰীৰিক পৰিশ্ৰমক স্বয়ংক্ৰিয় কৰিছিল; কম্পিউটাৰ বিপ্লৱে হিচাপ-নিকাচ ডিজিটেল কৰিছিল। কিন্তু AI বিপ্লৱে মানুহৰ চিন্তা আৰু বৌদ্ধিক কাম-কাজসমূহ স্বয়ংক্ৰিয় কৰিবলৈ লৈছে। আৰু এই সকলোবোৰ অতি দ্ৰুত গতিত ঘটিছে।",
      
      sec1Title: "১. গতিৰ সংকট: দ্ৰুত অগ্ৰগতি বনাম মানৱীয় ধাৰণা",
      sec1Text: "মানুহে সাধাৰণতে সৰল ৰেখাত চিন্তা কৰে। আমি ভাবোঁ যে কাইলৈৰ দিনটো আজিৰ দৰেই হ'ব আৰু অহা বছৰটোত কেৱল অলপ হে পৰিৱৰ্তন হ'ব। কিন্তু AI-ৰ বিকাশ অতি দ্ৰুত আৰু ধাৰাবাহিক। গুৰুত্বপূৰ্ণ আৱিষ্কাৰসমূহৰ মাজৰ সময়সীমা কেইবা দশকৰ পৰা কমি আমাৰ হাতত এতিয়া কেইমাহমান হৈছেহি। কল্পবিজ্ঞানৰ কাহিনীসমূহ আমাৰ ধাৰণাতকৈও দ্ৰুতগতিত বাস্তৱত পৰিণত হৈছে।",
      
      sec2Title: "২. ক্ৰমাগত স্বয়ং-উন্নতি: নিজেই নিজক গঢ়া AI",
      sec2Text: "এই দ্ৰুত গতিৰ মূল কাৰণটো হ'ল AI-ৰ ক্ৰমাগত স্বয়ং-উন্নতি (Recursive Self-Improvement)। অতীতত মানুহে কম্পিউটাৰৰ বাবে কোড লিখিছিল। আজিকালি AI ব্যৱস্থাই নিজেই নিজৰ কোড লিখিব, পৰীক্ষা কৰিব আৰু উন্নত কৰিবলৈ আৰম্ভ কৰিছে। শেহতীয়া গৱেষণা পত্ৰসমূহে (বিশেষকৈ এন্থ্ৰ'পিকৰ ৰিইনফ'ৰ্চমেণ্ট লাৰ্নিং আৰু চেলফ-কাৰেক্টিং মডেলৰ গৱেষণা) দেখুৱাইছে যে AI-য়ে নিজেই নিজৰ কোড উন্নত কৰিব পাৰে। যেতিয়া ছফ্টৱেৰে নিজেই ছফ্টৱেৰ লিখিবলৈ লয়, তেতিয়া তাৰ বিকাশ মানুহৰ টাইপিং স্পীড বা চিন্তাৰ ওপৰত নিৰ্ভৰ নকৰে। ই কেৱল কম্পিউটাৰৰ শক্তিৰ ওপৰতহে নিৰ্ভৰ কৰে।",
      
      sec3Title: "৩. পৰম্পৰাগত ইণ্টাৰনেটৰ অৱসান",
      sec3Text: "যোৱা ত্ৰিশ বছৰে আমি ব্যৱহাৰ কৰি অহা ইণ্টাৰনেটৰ স্বৰূপটো—চাৰ্চ ইঞ্জিন, লিংক আৰু স্থিৰ ৱেবছাইটসমূহ—এতিয়া সলনি হৈ যাবলৈ ধৰিছে। ইয়াৰ ঠাই এতিয়া এজেণ্টভিত্তিক AI নেটৱৰ্কে লৈছে। চাৰ্চ ইঞ্জিনত কিবা বিচাৰি দহোটা লিংক পঢ়াৰ পৰিবৰ্তে, ব্যৱহাৰকাৰীয়ে এতিয়া AI এজেণ্টক নিৰ্দেশ দিব আৰু সেই এজেণ্টবোৰে নিজেই গৱেষণা, বুকিং, ক'ডিং আদি সকলো কাম স্বয়ংক্ৰিয়ভাৱে কৰিব। ৱেবছাইটসমূহ এতিয়া কেৱল তথ্যৰ ভঁৰাল হৈ থকাৰ পৰিবৰ্তে কাম কৰাৰ এক মাধ্যম হৈ পৰিছে।",
      
      sec4Title: "৪. কোনবোৰ দক্ষতা উপযোগী হৈ থাকিব?",
      sec4Text: "যদি AI-য়ে নিজেই নিখুঁত কোড লিখিব পাৰে, ছফ্টৱেৰ ডিজাইন কৰিব পাৰে, তেন্তে আমাৰ সন্তানে কি শিকা উচিত? কেৱল মুখস্থ কৰাৰ যুগ এতিয়া শেষ হৈছে। আনকি প্ৰাথমিক ক'ডিং শিকাটোও এতিয়া সহজলভ্য হৈ পৰিছে। ভৱিষ্যতে উপযোগী হ'বলগীয়া দক্ষতাসমূহ হ'ল উচ্চস্তৰীয় সংযোগ স্থাপন, প্ৰম্প্ট ইঞ্জিনিয়াৰিং, সমালোচনাত্মক সত্যতা নিৰূপণ (ভ্ৰান্তি আৰু পক্ষপাতিত্ব ধৰা পেলোৱা), ছিষ্টেম ডিজাইন আৰু নৈতিক দ্বায়িত্ব। আমি সন্তানক কেৱল কোডৰ নিষ্ক্ৰিয় গ্ৰাহক কৰাৰ পৰিবৰ্তে বুদ্ধিমত্তাৰ পৰিচালক হিচাপে গঢ়ি তুলিব লাগিব।",
      
      sec5Title: "৫. এই জীৱন্ত কিতাপখন কিয় গুৰুত্বপূৰ্ণ",
      sec5Text: "যেতিয়া আমাৰ চাৰিওফালৰ পৰিৱেশ প্ৰতিদিনে সলনি হৈ আছে, তেতিয়া স্থিৰ কিতাপ বা পাঠ্যপুথিসমূহ ছপা হোৱাৰ লগে লগেই পুৰণি হৈ পৰে। ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত এই মুক্ত শৈক্ষিক সমল (OER) কিতাপখন এক জীৱন্ত নিৰ্দেশিকা হিচাপে প্ৰস্তুত কৰা হৈছে। ই অতীতৰ কোনো নথি নহয়, বৰঞ্চ ভৱিষ্যতৰ দিশ নিৰ্ণয় কৰা এক কম্পাছ। ই অভিভাৱক আৰু শিক্ষাৰ্থীসকলক স্বয়ংক্ৰিয়কৰণৰ যুগৰ বাবে সাজু কৰাত সহায় কৰিব। এই পৰিৱৰ্তনৰ বিষয়ে প্ৰত্যেকৰে সচেতন হোৱা উচিত—জুইৰ আৱিষ্কাৰৰ পিছত এয়া মানৱ জাতিৰ আটাইতকৈ গুৰুত্বপূৰ্ণ উদ্ভাৱন।",
      
      conclusionHeader: "অগ্ৰসৰ হোৱাৰ পথ",
      conclusionText: "আমি এই জোৱাৰ বন্ধ কৰিব নোৱাৰোঁ, কিন্তু আমি আমাৰ সন্তানক ইয়াৰ ওপৰত খোজ পেলাই চলিবলৈ শিকাব পাৰোঁ। স্বয়ংক্ৰিয়কৰণৰ মৌলিক ধাৰণা, যুক্তিসংগত গাঁথনি আৰু সমালোচনাত্মক সত্যতা নিৰূপণত গুৰুত্ব দি এই পাঠ্যক্ৰমে পৰৱৰ্তী প্ৰজন্মক কেৱল জীয়াই থকা নহয়, কৃত্ৰিম বুদ্ধিমত্তাৰ যুগত নেতৃত্ব দিবলৈ সাজু কৰি তোলে।"
    }
  }[locale];

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button Container */}
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {content.backLink}
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-4 pt-8 pb-20">
        {/* Editorial Header */}
        <header className="mb-10 pb-8 border-b border-slate-100">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-100 text-amber-800 border border-amber-200 mb-6 font-sans">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
            {locale === "as" ? "বিশেষ সতৰ্কবাণী" : "Special Manifesto"}
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-sans">
            {content.title}
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed font-normal mb-8 font-sans">
            {content.subtitle}
          </p>
          
          <div className="flex items-center space-x-3 text-sm text-slate-500 font-sans">
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-indigo-600 font-bold">
              R
            </div>
            <div>
              <p className="font-semibold text-slate-800">
                {locale === "en" ? (
                  <span>
                    Curated with AI by{" "}
                    <a 
                      href="https://github.com/axomiyaindie" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: '#2563eb' }}
                      className="hover:underline font-bold"
                    >
                      Rakibul
                    </a>
                  </span>
                ) : (
                  <span>
                    <a 
                      href="https://github.com/axomiyaindie" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: '#2563eb' }}
                      className="hover:underline font-bold"
                    >
                      ৰকিবুল
                    </a>{" "}
                    আৰু AI-ৰ দ্বাৰা সংকলিত
                  </span>
                )}
              </p>
              <p className="text-xs text-slate-400">
                {content.publishedDate} · {content.readTime}
              </p>
            </div>
          </div>
        </header>

        {/* Medium-style serif article body */}
        <div className="medium-article-body mb-12">
          <p className="font-medium text-slate-900 text-xl sm:text-2xl leading-relaxed mb-8">
            {content.intro}
          </p>

          <div className="my-10 p-6 border-l-4 border-amber-500 bg-amber-50/30 rounded-r-lg">
            <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2 font-sans">
              <TrendingUp className="h-5 w-5 text-amber-600 flex-shrink-0" />
              {content.sec1Title}
            </h3>
            <p className="text-slate-700 mt-3 mb-0 leading-relaxed">{content.sec1Text}</p>
          </div>

          <div className="my-10 p-6 border-l-4 border-indigo-500 bg-indigo-50/20 rounded-r-lg">
            <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2 font-sans">
              <Cpu className="h-5 w-5 text-indigo-600 flex-shrink-0" />
              {content.sec2Title}
            </h3>
            <p className="text-slate-700 mt-3 mb-0 leading-relaxed">{content.sec2Text}</p>
          </div>

          <div className="my-10 p-6 border-l-4 border-slate-850 border-slate-800 bg-slate-50 rounded-r-lg">
            <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2 font-sans">
              <Globe className="h-5 w-5 text-slate-700 flex-shrink-0" />
              {content.sec3Title}
            </h3>
            <p className="text-slate-700 mt-3 mb-0 leading-relaxed">{content.sec3Text}</p>
          </div>

          <div className="my-10 p-6 border-l-4 border-emerald-500 bg-emerald-50/20 rounded-r-lg">
            <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2 font-sans">
              <Sparkles className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              {content.sec4Title}
            </h3>
            <p className="text-slate-700 mt-3 mb-0 leading-relaxed">{content.sec4Text}</p>
          </div>

          <div className="my-10 p-6 border-l-4 border-rose-500 bg-rose-50/20 rounded-r-lg">
            <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2 font-sans">
              <BookOpen className="h-5 w-5 text-rose-600 flex-shrink-0" />
              {content.sec5Title}
            </h3>
            <p className="text-slate-700 mt-3 mb-0 leading-relaxed">{content.sec5Text}</p>
          </div>

          <h2 className="font-sans font-bold text-slate-900 text-2xl mt-12 mb-4">
            {content.conclusionHeader}
          </h2>
          <p>{content.conclusionText}</p>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-slate-200 mt-16 pt-8 text-center">
          <Link
            href="/"
            className="inline-flex justify-center items-center px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg text-sm font-semibold shadow-sm transition-colors font-sans"
          >
            {content.backLink}
          </Link>
        </div>
      </article>
    </div>
  );
}
