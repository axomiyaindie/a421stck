"use client";

import { useLocale } from "@/hooks/useLocale";
import Link from "next/link";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <div className="bg-white border-b border-slate-200 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
            {t.homepage.heroTagline}
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.homepage.heroHeadline}
          </h1>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl">
            {t.homepage.heroDescription}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            <a href="#tracks" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors">
              {t.homepage.primaryButtonText}
            </a>
            <Link 
              href="/parent-framework" 
              className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-colors"
            >
              {t.homepage.secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
