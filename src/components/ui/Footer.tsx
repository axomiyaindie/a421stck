"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { Github, BookOpen } from "lucide-react";

export default function Footer() {
  const { locale } = useLocale();

  // Localized sitemap translations
  const footerTexts = {
    en: {
      colTracks: "Learning Tracks",
      colDocs: "Guidelines & Resources",
      colConnect: "Connect & Developer",
      trackExp: "Explorers (Ages 5-9)",
      trackCre: "Creators (Ages 10-14)",
      trackStr: "Strategists (Ages 15-20)",
      parentGuide: "Parent Guidelines",
      resources: "Learning Resources",
      futureOfAi: "AI Velocity Warning",
      aiGuidelines: "AI Practice Guidelines",
      homeLink: "Home",
      githubProfile: "GitHub Profile",
      rights: `© ${new Date().getFullYear()} AIFor21stCenturyKids. Open Educational Resource (OER).`,
      curatedBy: "Curated with AI by Rakibul"
    },
    as: {
      colTracks: "শিক্ষণ পাঠ্যক্ৰমসমূহ",
      colDocs: "নিৰ্দেশিকা আৰু সম্পদ",
      colConnect: "সংযোগ আৰু বিকাশকাৰী",
      trackExp: "সন্ধানী (বয়স ৫-৯)",
      trackCre: "সৃষ্টিকৰ্তা (বয়স ১০-১৪)",
      trackStr: "পৰিকল্পনাকাৰী (বয়স ১৫-২০)",
      parentGuide: "অভিভাৱকৰ নিৰ্দেশনা",
      resources: "সম্পদসমূহ",
      futureOfAi: "AI-ৰ গতিৰ সতৰ্কবাণী",
      aiGuidelines: "AI ব্যৱহাৰৰ গাইড",
      homeLink: "হোম",
      githubProfile: "GitHub প্ৰফাইল",
      rights: `© ${new Date().getFullYear()} AIFor21stCenturyKids. মুক্ত শৈক্ষিক সমল (OER)।`,
      curatedBy: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত"
    }
  }[locale];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* General Footer - Sitemap Directory */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Column 1: Learning Tracks */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 font-sans">
              {footerTexts.colTracks}
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link href="/track-5-9" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {footerTexts.trackExp}
                </Link>
              </li>
              <li>
                <Link href="/track-10-14" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {footerTexts.trackCre}
                </Link>
              </li>
              <li>
                <Link href="/track-15-20" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {footerTexts.trackStr}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Guidelines & Resources */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 font-sans">
              {footerTexts.colDocs}
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link href="/parent-framework" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {footerTexts.parentGuide}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {footerTexts.resources}
                </Link>
              </li>
              <li>
                <Link href="/ai-guidelines" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {footerTexts.aiGuidelines}
                </Link>
              </li>
              <li>
                <Link href="/future-of-ai" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {footerTexts.futureOfAi}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Developer */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 font-sans">
              {footerTexts.colConnect}
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {footerTexts.homeLink}
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/axomiyaindie" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Github className="h-4 w-4 mr-1.5" />
                  {footerTexts.githubProfile}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans">
          
          {/* Left: OER License & Copyright */}
          <div className="flex items-center space-x-2 text-center md:text-left">
            <BookOpen className="h-4 w-4 text-slate-400 hidden sm:inline-block" />
            <p>{footerTexts.rights}</p>
          </div>

          {/* Right: Curated by Rakibul (Super Footer Accent) */}
          <div className="flex items-center space-x-1.5 font-semibold text-slate-700 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
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
          </div>

        </div>
      </div>
    </footer>
  );
}
