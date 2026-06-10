"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { ArrowLeft, ShieldCheck, HeartHandshake, Eye, Lightbulb } from "lucide-react";

export default function ParentFrameworkPage() {
  const { locale } = useLocale();

  const content = {
    en: {
      title: "Parent Guide: Cultivating AI Literacy at Home",
      subtitle: "A practical framework to guide children (ages 5 to 20) through the automated era.",
      author: "Curated by Rakibul with AI",
      readTime: "10 min read",
      publishedDate: "June 2026",
      backLink: "Back to Tracks",
      
      intro: "As artificial intelligence becomes embedded in our daily devices, classrooms, and entertainment, raising children with AI literacy is as fundamental as reading or basic arithmetic. This framework is designed to help you navigate this transition, offering simple concepts and guidelines for every developmental stage.",
      
      principlesHeader: "Our Core Pedagogical Principles",
      principlesIntro: "Rather than teaching kids how to write raw code immediately, our curriculum focuses on cognitive readiness. We build our learning tracks around four primary pillars:",
      
      p1Title: "1. Understanding Automation Boundaries",
      p1Desc: "Children should understand that computers do not 'think' or 'feel' like humans. They follow mathematical logic. Understanding where human intention ends and machine execution begins prevents passive dependence.",
      
      p2Title: "2. Developing Critical Discernment",
      p2Desc: "With synthetic media (deepfakes, AI images) becoming common, kids must learn to question what they see on screens. Identifying visual anomalies and recognizing that data can contain bias is key to digital safety.",
      
      p3Title: "3. Prompting over Coding",
      p3Desc: "The future belongs to those who can direct AI systems. We teach kids to treat AI as a collaborative partner by structuring precise queries, acting as editors, and maintaining creative ownership.",
      
      p4Title: "4. Protecting the Digital Footprint",
      p4Desc: "AI is fueled by personal data. Parents must help kids understand that every search, click, and download feeds algorithms, and teaching them to govern their own privacy settings is vital.",
      
      comparisonHeader: "Traditional Memorization vs. AI-Augmented Learning",
      comparisonIntro: "Modern education is undergoing a paradigm shift. With access to instant information, we are transitioning from memorizing content to orchestrating intelligent tools. Here is how learning is changing:",
      traditionalFocus: "Traditional Learning",
      traditionalPoints: [
        "Focuses on rote memorization of facts, dates, capitals, and spelling.",
        "Measures success through recalling specific data under rigid test conditions.",
        "Students act as passive consumers of static textbooks."
      ],
      aiFocus: "AI-Augmented Learning",
      aiPoints: [
        "Focuses on critical verification, prompt design, and output evaluation.",
        "Measures success through active problem-solving and stitching tools together.",
        "Students act as active curators, editors, and system designers."
      ],
      expertQuote: "As educational researcher Ethan Mollick notes, 'We are no longer training brains to be storage units; we are training them to be curators of intelligence.' Sal Khan adds that AI tools act as personal tutors, allowing students to skip basic recall and leap directly to high-level analysis.",
      
      cohortsHeader: "Guidelines by Age Cohort",
      
      c1Title: "The Explorers (Ages 5-9)",
      c1Desc: "At this stage, children are concrete thinkers. Focus on the concept of 'rules.' If/then statements are perfect for this age. Co-watch videos and point out details: 'Do you think this animal is real or drawn by a computer?' Keep screen time highly collaborative and focus on logic play.",
      
      c2Title: "The Creators (Ages 10-14)",
      c2Desc: "Pre-teens begin using AI models to write, draw, or play. This is the stage to teach structured prompting. Ask them to guide a language model to write a joke and then evaluate it: 'Is it funny? Why did the computer think it was?' Introduce the concept of algorithmic bias by showing how search recommendations are tailored based on history.",
      
      c3Title: "The Strategists (Ages 15-20)",
      c3Desc: "Young adults face the immediate economic reality of automation. Encourage them to use AI tools for advanced research and project management, but emphasize ethical boundaries. Discuss deepfakes, academic integrity, and how automation is changing careers they might be considering.",
      
      discussionHeader: "Family Dinner Discussion Starters",
      discussionIntro: "You don't need a degree in computer science to teach AI literacy. Try these questions at the dinner table:",
      d1: "If an AI generates a painting, who owns the artwork? The user who typed the prompt, the software developers, or the artists whose work trained the model?",
      d2: "Have you seen any videos on social media recently that looked fake? What made you suspicious?",
      d3: "If a self-driving car must make a choice during an emergency, how should we write the rules for what it does?"
    },
    as: {
      title: "অভিভাৱকৰ বাবে নিৰ্দেশনা: ঘৰতে কৃত্ৰিম বুদ্ধিমত্তাৰ শিক্ষা",
      subtitle: "স্বয়ংক্ৰিয় যুগত ৫ ৰ পৰা ২০ বছৰ বয়সৰ সন্তানক পথ প্ৰদৰ্শন কৰাৰ এক ব্যৱহাৰিক আৰ্হি।",
      author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
      readTime: "১০ মিনিট পঢ়ক",
      publishedDate: "জুন ২০২৬",
      backLink: "পাঠ্যক্ৰমসমূহলৈ উভতি যাওক",
      
      intro: "কৃত্ৰিম বুদ্ধিমত্তা আমাৰ দৈনিক সঁজুলি, শ্ৰেণীকোঠা আৰু মনোৰঞ্জনৰ লগত জড়িত হৈ পৰাৰ লগে লগে সন্তানক ইয়াৰ বিষয়ে জ্ঞান দিয়াটো পঢ়া-শুনা বা সাধাৰণ গণিতৰ দৰেই গুৰুত্বপূৰ্ণ। এই নিৰ্দেশনাটো আপোনাক এই যাত্ৰাত সহায় কৰাকৈ সন্তানৰ মানসিক বিকাশৰ বিভিন্ন স্তৰ অনুসারে প্ৰস্তুত কৰা হৈছে।",
      
      principlesHeader: "আমাৰ মূল শিক্ষণীয় নীতিসমূহ",
      principlesIntro: "সন্তানক পোনপটিয়াকৈ ক'ডিং শিকোৱাৰ পৰিৱৰ্তে, আমাৰ পাঠ্যক্ৰমে তেওঁলোকৰ মানসিক প্ৰস্তুতিৰ ওপৰতহে গুৰুত্ব দিয়ে। আমি আমাৰ শিক্ষণ প্ৰণালীক চাৰিটা মূল স্তম্ভৰ ওপৰত ভিত্তি কৰি তৈয়াৰ কৰিছোঁ:",
      
      p1Title: "১. স্বয়ংক্ৰিয়কৰণৰ পৰিসীমা বুজা",
      p1Desc: "সন্তানে বুজা উচিত যে কম্পিউটাৰে মানুহৰ দৰে 'চিন্তা' বা 'অনুভৱ' কৰিব নোৱাৰে। ইহঁতে কেৱল গাণিতিক যুক্তি মানি চলে। যন্ত্ৰৰ পৰিসীমা বুজি পালে সন্তানে ইয়াৰ ওপৰত সম্পূৰ্ণ নিৰ্ভৰশীল হোৱাৰ পৰা বাচি থাকিব পাৰে।",
      
      p2Title: "২. সমালোচনামূলক চিন্তাৰ বিকাশ",
      p2Desc: "ডিপফেক আৰু AI ফটোৰ পয়োভৰ থকা এই যুগত স্ক্ৰীণত দেখা সকলো বস্তুকে বিশ্বাস নকৰিবলৈ সন্তানে শিকাটো প্ৰয়োজনীয়। ফটোৰ ভুলবোৰ ধৰা পেলোৱা আৰু তথ্যত পক্ষপাতিত্ব থাকিব পাৰে বুলি জনাটো ডিজিটেল সুৰক্ষাৰ বাবে অতি গুৰুত্বপূৰ্ণ।",
      
      p3Title: "৩. ক'ডিঙৰ পৰিৱৰ্তে প্ৰম্প্টিং",
      p3Desc: "ভৱিষ্যত তেওঁলোকৰ হ'ব যিয়ে AI ক সঠিক নিৰ্দেশ দিব পাৰিব। আমি সন্তানক শিকাব বিচাৰোঁ কেনেকৈ AI ক এক সহযোগী হিচাপে লৈ সঠিক প্ৰশ্ন কৰিব পাৰি আৰু নিজৰ সৃষ্টিশীলতা ধৰি ৰাখিব পাৰি।",
      
      p4Title: "৪. ডিজিটেল পদচিহ্নৰ সুৰক্ষা",
      p4Desc: "AI ৰ চালিকা শক্তি হ'ল আমাৰ ডাটা বা তথ্য। অভিভাৱক হিচাপে আপুনি বুজাব লাগিব যে প্ৰতিটো চাৰ্চ বা ক্লিকে ইণ্টাৰনেটত এটা চিন এৰি যায়। গতিকে নিজৰ ব্যক্তিগত গোপনীয়তা কেনেকৈ সুৰক্ষিত ৰাখিব লাগে সেইয়া জনাটো অপৰিহাৰ্য।",
      
      comparisonHeader: "পৰম্পৰাগত মুখস্থ বিদ্যা বনাম AI-সমৃদ্ধ শিক্ষণ প্ৰক্ৰিয়া",
      comparisonIntro: "আধুনিক শিক্ষা ব্যৱস্থাত এক বৃহৎ পৰিৱৰ্তন ঘটিছে। আমাৰ হাতত তাৎক্ষণিক তথ্য উপলব্ধ হোৱাৰ ফলত আমি তথ্য মুখস্থ কৰাৰ পৰা বুদ্ধিমান সঁজুলিসমূহ পৰিচালনা কৰাৰ দিশে গতি কৰিছোঁ। শিক্ষা কেনেকৈ সলনি হৈছে চাওক:",
      traditionalFocus: "পৰম্পৰাগত শিক্ষণ",
      traditionalPoints: [
        "তথ্য, তাৰিখ, ৰাজধানী চহৰ আৰু আখৰ জোঁটনি মুখস্থ কৰাত গুৰুত্ব দিয়ে।",
        "পৰীক্ষাত কেৱল তথ্য কিমান মনত আছে তাৰ ওপৰত ভিত্তি কৰি মূল্যায়ন কৰা হয়।",
        "ছাত্ৰ-ছাত্ৰীসকলে কিতাপৰ পৰা কেৱল নিষ্ক্ৰিয়ভাৱে তথ্য গ্ৰহণ কৰে।"
      ],
      aiFocus: "AI-সমৃদ্ধ শিক্ষণ",
      aiPoints: [
        "সমালোচনাত্মক সত্যতা নিৰূপণ, প্ৰম্প্ট ডিজাইন আৰু আউটপুট বিশ্লেষণত গুৰুত্ব দিয়ে।",
        "জভিল সমস্যা সমাধান আৰু সঁজুলিৰ সঠিক ব্যৱহাৰৰ দ্বাৰা যোগ্যতা নিৰূপণ কৰা হয়।",
        "ছাত্ৰ-ছাত্ৰীসকলে সক্ৰিয় কিউৰেটৰ, সম্পাদক আৰু ছিষ্টেম ডিজাইনাৰ হিচাপে কাম কৰে।"
      ],
      expertQuote: "শিক্ষাবিদ ইথান মলিকে উল্লেখ কৰিছে, 'আমি এতিয়া মগজুক কেৱল তথ্য সাঁচি ৰখা ডাব্বা হিচাপে গঢ়ি তুলিব নালাগে; বৰঞ্চ আমি বুদ্ধিমত্তাৰ সঠিক ব্যৱহাৰ কৰিব পৰাকৈ গঢ়িব লাগে।' চাল খানে যোগ দিছে যে AI সঁজুলিয়ে সন্তানক যান্ত্ৰিক মুখস্থ কৰা এৰাই পোনপটীয়াকৈ গভীৰ বিশ্লেষণ কৰাত সহায় কৰে।",
      
      cohortsHeader: "বয়স অনুসৰি নিৰ্দেশনা",
      
      c1Title: "সন্ধানী মডিউল (৫-৯ বছৰ)",
      c1Desc: "এই বয়সৰ ল'ৰা-ছোৱালীয়ে বাস্তৱমুখী কথাবোৰ সহজে বুজি পায়। সিহঁতক 'IF/THEN' নিয়মৰ সৰল ধাৰণা দিয়ক। একেলগে ভিডিঅ' চাওক আৰু প্ৰশ্ন কৰক: 'এই মেকুৰীটো সঁচা যেন লাগেনে কম্পিউটাৰে বনোৱা যেন লাগে?' সিহঁতৰ সৈতে সঘনে কথা পাতক আৰু খেলৰ ছলেৰে যুক্তি শিকাবলৈ চেষ্টা কৰক।",
      
      c2Title: "সৃষ্টিকৰ্তা মডিউল (১০-১৪ বছৰ)",
      c2Desc: "এই বয়সত সিহঁতে বিভিন্ন কামত AI ব্যৱহাৰ কৰিবলৈ আৰম্ভ কৰে। এইটোৱেই হ'ল সঠিক সময় সিহঁতক প্ৰম্প্ট ইঞ্জিনিয়াৰিং শিকোৱাৰ। সিহঁতক AI ক ধেমালি এটা ক'বলৈ ক'ব দিয়ক আৰু তাৰ মূল্যায়ন কৰক: 'এইটো ধেমলীয়া আছিলনে? মেচিনে কিয় এইটো ধেমলীয়া বুলি ভাবিলে?' চাৰ্চ ৰিজাল্ট আৰু বিজ্ঞাপনবোৰ ইণ্টাৰনেটৰ পুৰণি গতিবিধিৰ ওপৰত নিৰ্ভৰ কৰি আহে বুলি সিহঁতক বুজাওক।",
      
      c3Title: "পৰিকল্পনাকাৰী মডিউল (১৫-২০ বছৰ)",
      c3Desc: "এই বয়সৰ যুৱক-যুৱতীসকলে ভৱিষ্যতৰ কৰ্মক্ষেত্ৰত স্বয়ংক্ৰিয়কৰণৰ প্ৰভাৱ নিজে অনুভৱ কৰিব। তেওঁলোকক উন্নত গৱেষণা আৰু প্ৰকল্পত AI সঁজুলি ব্যৱহাৰ কৰিবলৈ উৎসাহিত কৰক, কিন্তু তাৰ লগত নৈতিক সীমাও বুজাই দিয়ক। ডিপফেক, শৈক্ষিক সততা আৰু AI-য়ে ভৱিষ্যতৰ কেৰিয়াৰত কেনে প্ৰভাৱ পেলাব পাৰে সেইয়া আলোচনা কৰক।",
      
      discussionHeader: "পৰিয়ালৰ মাজত আলোচনাৰ বাবে প্ৰশ্ন",
      discussionIntro: "AI ৰ বিষয়ে শিকাবলৈ আপোনাৰ কম্পিউটাৰ বিজ্ঞানৰ ডিগ্ৰী থকাটো প্ৰয়োজনীয় নহয়। খোৱা মেজত এই প্ৰশ্নবোৰ উলিয়াই আলোচনা কৰিব পাৰে:",
      d1: "যদি AI মডেলে এখন সুন্দৰ ছবি বনাই দিয়ে, তেন্তে সেই ছবিখনৰ স্বত্বাধিকাৰী কোন হ'ব? প্ৰম্প্টটো টাইপ কৰা মানুহজন, ছফ্টৱেৰ নিৰ্মাতা কোম্পানীটো, নে যাৰ ছবি ব্যৱহাৰ কৰি মডেলটোক প্ৰশিক্ষণ দিয়া হৈছিল?",
      d2: "আপুনি ছচিয়েল মিডিয়াত শেহতীয়াকৈ কিবা ভুৱা ভিডিঅ' বা ছবি দেখিবলৈ পাইছে নেকি? আপোনাৰ কিয় সন্দেহ হৈছিল?",
      d3: "যদি এখন স্বয়ংক্ৰিয়ভাৱে চলা গাড়ীয়ে জৰুৰীকালীন অৱস্থাত কোনো objections বা সিদ্ধান্ত ল'বলগীয়া হয়, তেন্তে মেচিনটোৱে কি কৰিব লাগে বুলি আমি তাৰ বাবে নিয়ম লিখা উচিত?"
    }
  }[locale];

  return (
    <div className="bg-white min-h-screen">
      {/* Back button container */}
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {content.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed font-normal mb-6">
            {content.subtitle}
          </p>
          
          <div className="flex items-center space-x-3 text-sm text-slate-500">
            <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-150 flex items-center justify-center text-indigo-700 font-bold">
              R
            </div>
            <div>
              <p className="font-semibold text-slate-800">
                {locale === "en" ? (
                  <span>
                    Curated by{" "}
                    <a 
                      href="https://github.com/axomiyaindie" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: '#2563eb' }}
                      className="hover:underline font-bold font-sans"
                    >
                      Rakibul
                    </a>{" "}
                    with AI
                  </span>
                ) : (
                  <span>
                    <a 
                      href="https://github.com/axomiyaindie" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: '#2563eb' }}
                      className="hover:underline font-bold font-sans"
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
          <p className="font-medium text-slate-800 text-xl leading-relaxed mb-6">
            {content.intro}
          </p>

          <h2>{content.principlesHeader}</h2>
          <p>{content.principlesIntro}</p>

          <div className="my-8 space-y-6">
            <div className="p-5 border border-slate-100 rounded-lg bg-slate-50/50">
              <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2">
                <HeartHandshake className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                {content.p1Title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 mb-0 leading-relaxed">{content.p1Desc}</p>
            </div>

            <div className="p-5 border border-slate-100 rounded-lg bg-slate-50/50">
              <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2">
                <Eye className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                {content.p2Title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 mb-0 leading-relaxed">{content.p2Desc}</p>
            </div>

            <div className="p-5 border border-slate-100 rounded-lg bg-slate-50/50">
              <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                {content.p3Title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 mb-0 leading-relaxed">{content.p3Desc}</p>
            </div>

            <div className="p-5 border border-slate-100 rounded-lg bg-slate-50/50">
              <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                {content.p4Title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 mb-0 leading-relaxed">{content.p4Desc}</p>
            </div>
          </div>

          {/* New Comparative Learning Framework section */}
          <h2>{content.comparisonHeader}</h2>
          <p>{content.comparisonIntro}</p>

          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            <div className="p-6 border border-slate-200 rounded-lg bg-slate-50/30">
              <h4 className="font-bold text-slate-800 text-base mb-4 pb-2 border-b border-slate-200">
                {content.traditionalFocus}
              </h4>
              <ul className="space-y-3 list-disc pl-5 text-sm text-slate-600">
                {content.traditionalPoints.map((pt: string, idx: number) => (
                  <li key={idx} className="leading-relaxed">{pt}</li>
                ))}
              </ul>
            </div>

            <div className="p-6 border border-indigo-100 rounded-lg bg-indigo-50/10">
              <h4 className="font-bold text-indigo-900 text-base mb-4 pb-2 border-b border-indigo-100">
                {content.aiFocus}
              </h4>
              <ul className="space-y-3 list-disc pl-5 text-sm text-slate-700 font-medium">
                {content.aiPoints.map((pt: string, idx: number) => (
                  <li key={idx} className="leading-relaxed">{pt}</li>
                ))}
              </ul>
            </div>
          </div>

          <blockquote>
            <p className="text-slate-600 font-serif leading-relaxed text-base italic">
              {content.expertQuote}
            </p>
          </blockquote>

          <h2>{content.cohortsHeader}</h2>
          
          <h3>{content.c1Title}</h3>
          <p>{content.c1Desc}</p>

          <h3>{content.c2Title}</h3>
          <p>{content.c2Desc}</p>

          <h3>{content.c3Title}</h3>
          <p>{content.c3Desc}</p>

          <h2>{content.discussionHeader}</h2>
          <p>{content.discussionIntro}</p>

          <blockquote>
            <p className="text-sm mb-4 font-semibold">1. {content.d1}</p>
            <p className="text-sm mb-4 font-semibold">2. {content.d2}</p>
            <p className="text-sm mb-0 font-semibold">3. {content.d3}</p>
          </blockquote>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-slate-200 mt-16 pt-8 text-center">
          <Link
            href="/"
            className="inline-flex justify-center items-center px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg text-sm font-medium shadow-sm transition-colors"
          >
            {content.backLink}
          </Link>
        </div>
      </article>
    </div>
  );
}
