"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import HeroSection from "@/components/ui/HeroSection";
import TrackCard from "@/components/ui/TrackCard";

export default function Home() {
  const { t, locale } = useLocale();

  return (
    <div>
      <HeroSection />
      
      <section id="tracks" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              {t.homepage.tracksHeading}
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              {t.homepage.tracksSubheading}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrackCard 
              cohort={t.tracks.explorers} 
              href="/track-5-9" 
            />
            <TrackCard 
              cohort={t.tracks.creators} 
              href="/track-10-14" 
            />
            <TrackCard 
              cohort={t.tracks.strategists} 
              href="/track-15-20" 
            />
          </div>
        </div>
      </section>

      {/* AI Guidelines Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50/60 via-slate-50/50 to-indigo-50/60 p-8 sm:p-12 border border-indigo-100 shadow-sm">
            {/* Soft ambient violet/indigo glow */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-indigo-200/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-violet-200/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-100 text-indigo-800 border border-indigo-200 mb-4 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                  {locale === "as" ? "পদ্ধতি আৰু নীতি" : "Guidelines & Practice"}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight font-sans">
                  {t.homepage.guidelineTitle}
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed text-base font-sans">
                  {t.homepage.guidelineText}
                </p>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-auto">
                <Link 
                  href="/ai-guidelines" 
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition-all shadow-md text-center font-sans group whitespace-nowrap"
                >
                  {t.homepage.guidelineLink}
                  <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Velocity Warning Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50/80 via-orange-50/30 to-amber-50/80 p-8 sm:p-12 border border-amber-200/70 shadow-sm">
            {/* Soft ambient warm glow */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-orange-200/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-100 text-amber-800 border border-amber-200 mb-4 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  {locale === "as" ? "গুৰুত্বপূৰ্ণ সতৰ্কবাণী" : "Critical Notice"}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight font-sans">
                  {t.homepage.warningTitle}
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed text-base font-sans">
                  {t.homepage.warningText}
                </p>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-auto">
                <Link 
                  href="/future-of-ai" 
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 transition-all shadow-md text-center font-sans group whitespace-nowrap"
                >
                  {t.homepage.warningLink}
                  <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

