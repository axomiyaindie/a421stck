"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { 
  ArrowLeft, 
  Sparkles, 
  Zap, 
  Briefcase, 
  GraduationCap, 
  Lightbulb 
} from "lucide-react";

export default function AiGuidelinesPage() {
  const { locale } = useLocale();

  const content = {
    en: {
      title: "Universal AI Guidelines: How to Fast-Track Your Study, Career, and Life",
      subtitle: "AI won't take your job—but a person using AI will. Learn how to harness the full power of cognitive tools to multiply your productivity and thrive.",
      author: "Curated by Rakibul with AI",
      readTime: "6 min read",
      publishedDate: "June 2026",
      backLink: "Back to Home",
      
      intro: "We are living in an era where cognitive power has become instant and abundant. In this new landscape, success is no longer determined by what you can memorize, but by how effectively you can co-pilot with artificial intelligence. To thrive, you must learn to integrate AI tools into your daily workflows today.",
      
      sec1Title: "1. The Replacement Myth: The Real Threat is Skill Inertia",
      sec1Text: "You have likely heard the question: 'Will AI take my job?' The answer is nuanced. AI itself will not take your job; however, a student, professional, or entrepreneur who knows how to leverage AI will easily replace one who does not. Staying passive is the only guarantee of being left behind. The future belongs to those who actively adapt.",
      
      sec2Title: "2. Fast-Tracking Education & Study",
      sec2Text: "For students, AI is not a tool for copying answers—it is the ultimate personal tutor. Use models to explain complex topics (e.g., 'explain quantum physics like I am 10 years old'), generate custom practice quizzes, translate languages in real time, and brainstorm projects. By delegating static research compilation to AI, you can spend your time on critical analysis and high-level comprehension.",
      
      sec3Title: "3. Accelerating Business & Careers",
      sec3Text: "For professionals and business owners, AI is a leverage multiplier. It acts as an instant chief of staff, drafting correspondence, summarizing voluminous reports, writing initial code templates, and creating marketing outlines. By offloading low-leverage execution, you can focus on strategy, relationship building, and creative direction.",
      
      sec4Title: "4. Directing the System: Learn to Edit, Not Just Prompt",
      sec4Text: "Utilizing the full power of AI requires moving from passive prompting to active curation. AI models can hallucinate, produce biased results, or generate generic content. Your value lies in critical verification and refinement. Act as a managing editor: direct the system, critique the output, verify the facts, and inject your unique human context.",
      
      conclusionHeader: "Your Action Plan",
      conclusionText: "Start small but start today. Dedicate an hour every week to experiment with new AI tools in your specific field. Treat the technology not as a threat, but as an extension of your own capabilities. Learn to direct, learn to verify, and build the future."
    },
    as: {
      title: "AI ব্যৱহাৰৰ সাৰ্বজনীন নিৰ্দেশিকা: স্বয়ংক্ৰিয় যুগত জীৱন আৰু শিক্ষা ক্ষিপ্ৰ কৰক",
      subtitle: "AI-য়ে আপোনাৰ চাকৰি কাঢ়ি নলয়—কিন্তু AI ব্যৱহাৰ কৰা এজন ব্যক্তিয়েহে ল'ব। উৎপাদনশীলতা বহুগুণে বৃদ্ধি কৰিবলৈ কৃত্ৰিম বুদ্ধিমত্তাৰ সঁজুলিসমূহৰ পূৰ্ণ ব্যৱহাৰৰ নিৰ্দেশিকা।",
      author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
      readTime: "৬ মিনিট পঢ়ক",
      publishedDate: "জুন ২০২৬",
      backLink: "হোমলৈ উভতি যাওক",
      
      intro: "আমি এনে এক যুগত বাস কৰিছোঁ য’ত বৌদ্ধিক শক্তি তাৎক্ষণিক আৰু প্ৰচুৰ পৰিমাণে উপলব্ধ হৈ পৰিছে। এই নতুন পৰিৱেশত, সফলতা এতিয়া আপুনি কিমান মুখস্থ কৰিব পাৰে তাৰ ওপৰত নিৰ্ভৰ নকৰে, বৰঞ্চ আপুনি কিমান ফলপ্ৰসূভাৱে AI-ক আপোনাৰ সহ-চালক হিচাপে লৈ কাম কৰিব পাৰে তাৰ ওপৰতহে নিৰ্ভৰ কৰে। নিজকে আগুৱাই নিবলৈ আজিৰ পৰাই AI সঁজুলিসমূহ ব্যৱহাৰ কৰিবলৈ শিকক।",
      
      sec1Title: "১. স্থানান্তৰৰ ধাৰণা: প্ৰকৃত ভাবুকি হ'ল পৰিৱৰ্তনৰ জড়তা",
      sec1Text: "আপুনি চাগে প্ৰায়েই শুনে: 'AI-য়ে মোৰ চাকৰি কাঢ়ি ল'ব নেকি?' ইয়াৰ উত্তৰ হ'ল—AI-য়ে নিজে কাৰো চাকৰি কাঢ়ি নলয়; কিন্তু যিজন ছাত্ৰ, পেছাদাৰী বা ব্যৱসায়ীয়ে AI ব্যৱহাৰ কৰিব জানে, তেওঁ সহজেই AI ব্যৱহাৰ নকৰা এজন ব্যক্তিক পিছ পেলাই আগবাঢ়ি যাব। নিষ্ক্ৰিয় হৈ থকাটোৱেই পিছ পৰি ৰোৱাৰ একমাত্ৰ কাৰণ। ভৱিষ্যত তেওঁলোকৰ হ’ব যিয়ে সক্ৰিয়ভাৱে পৰিৱৰ্তনক গ্ৰহণ কৰিব।",
      
      sec2Title: "২. অধ্যয়ন আৰু শিক্ষা ক্ষিপ্ৰ কৰক",
      sec2Text: "ছাত্ৰ-ছাত্ৰীৰ বাবে AI কেৱল উত্তৰ কপি কৰাৰ আহিলা নহয়—এয়া এক সৰ্বোত্তম ব্যক্তিগত শিক্ষক। কঠিন বিষয়সমূহ সহজকৈ বুজিবলৈ (যেনে: 'কোৱাণ্টাম ফিজিক্স ১০ বছৰীয়া ল'ৰাই বুজি পোৱাকৈ বুজোৱা'), নিজাকৈ কুইজ তৈয়াৰ কৰিবলৈ আৰু নতুন ধাৰণাসমূহ মগজুলৈ আনিবলৈ AI ব্যৱহাৰ কৰক। তথ্য সংগ্ৰহৰ দৰে সাধাৰণ কামবোৰ AI-ক দি আপুনি সমালোচনাত্মক বিশ্লেষণত বেছি সময় নিয়োজন কৰক।",
      
      sec3Title: "৩. ব্যৱসায় আৰু কেৰিয়াৰ ক্ষিপ্ৰ কৰক",
      sec3Text: "পেছাদাৰী আৰু ব্যৱসায়ীসকলৰ বাবে AI হ’ল এক প্ৰভাৱশালী গুণক (multiplier)। ই এজন তাৎক্ষণিক সহায়কৰ দৰে কাম কৰে, যিয়ে চিঠি ড্ৰাফট কৰা, দীঘলীয়া প্ৰতিবেদনৰ সাৰাংশ উলিওৱা, প্ৰাথমিক কোড লিখা আৰু বিপণন পৰিকল্পনা তৈয়াৰ কৰাত সহায় কৰে। এনে সময় খৰচ হোৱা কামবোৰ AI ৰ জৰিয়তে কৰি আপুনি মূল ৰণনীতি আৰু সৃষ্টিশীল কামত বেছি মনোযোগ দিব পাৰে।",
      
      sec4Title: "৪. ছিষ্টেম পৰিচালনা কৰক: কেৱল প্ৰম্প্ট নহয়, সম্পাদনা কৰিবলৈ শিকক",
      sec4Text: "AI-ৰ সম্পূৰ্ণ শক্তি ব্যৱহাৰ কৰাৰ অৰ্থ হ'ল কেৱল প্ৰশ্ন সোধাটোৱেই নহয়, বৰঞ্চ সক্ৰিয়ভাৱে তাক কিউৰেট কৰা। AI মডেলে কেতিয়াবা ভুল তথ্য দিব পাৰে বা পক্ষপাতমূলক উত্তৰ উলিয়াব পাৰে। আপোনাৰ প্ৰকৃত মূল্য হ'ল সেই উত্তৰসমূহ চালি-জাৰি চাই তাৰ সত্যতা নিৰূপণ কৰা। এজন মুখ্য সম্পাদকৰ দৰে কাম কৰক: ছিষ্টেমক নিৰ্দেশ দিয়ক, আউটপুট নিৰীক্ষণ কৰক আৰু তাত নিজৰ মানৱীয় চিন্তা প্ৰয়োগ কৰক।",
      
      conclusionHeader: "আপোনাৰ কৰণীয় পৰিকল্পনা",
      conclusionText: "সৰুকৈ আৰম্ভ কৰক, কিন্তু আজিৰ পৰাই আৰম্ভ কৰক। প্ৰতি সপ্তাহত এঘণ্টা সময় নিজৰ ক্ষেত্ৰখনত নতুন AI সঁজুলিবোৰ পৰীক্ষা কৰিবলৈ সুকীয়া কৰক। এই প্ৰযুক্তিটোক ভাবুকি হিচাপে নলৈ নিজৰ কাৰ্যক্ষমতাৰ এক অংশ হিচাপে লওক। পৰিচালনা কৰিবলৈ শিকক, সত্যতা নিৰূপণ কৰিবলৈ শিকক আৰু ভৱিষ্যত গঢ়ক।"
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-100 text-indigo-800 border border-indigo-200 mb-6 font-sans">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-pulse" />
            {locale === "as" ? "ব্যৱহাৰিক নিৰ্দেশিকা" : "Practical Playbook"}
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-sans">
            {content.title}
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed font-normal mb-8 font-sans">
            {content.subtitle}
          </p>
          
          <div className="flex items-center space-x-3 text-sm text-slate-500 font-sans">
            <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-150 flex items-center justify-center text-indigo-700 font-bold">
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

          <div className="my-10 p-6 border-l-4 border-indigo-500 bg-indigo-50/20 rounded-r-lg">
            <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2 font-sans">
              <Zap className="h-5 w-5 text-indigo-600 flex-shrink-0" />
              {content.sec1Title}
            </h3>
            <p className="text-slate-700 mt-3 mb-0 leading-relaxed">{content.sec1Text}</p>
          </div>

          <div className="my-10 p-6 border-l-4 border-emerald-500 bg-emerald-50/20 rounded-r-lg">
            <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2 font-sans">
              <GraduationCap className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              {content.sec2Title}
            </h3>
            <p className="text-slate-700 mt-3 mb-0 leading-relaxed">{content.sec2Text}</p>
          </div>

          <div className="my-10 p-6 border-l-4 border-blue-500 bg-blue-50/20 rounded-r-lg">
            <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2 font-sans">
              <Briefcase className="h-5 w-5 text-blue-600 flex-shrink-0" />
              {content.sec3Title}
            </h3>
            <p className="text-slate-700 mt-3 mb-0 leading-relaxed">{content.sec3Text}</p>
          </div>

          <div className="my-10 p-6 border-l-4 border-amber-500 bg-amber-50/20 rounded-r-lg">
            <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2 font-sans">
              <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0" />
              {content.sec4Title}
            </h3>
            <p className="text-slate-700 mt-3 mb-0 leading-relaxed">{content.sec4Text}</p>
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
