"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { resourcesData } from "@/data/resources";
import { ArrowLeft, Video, Newspaper, Users, ExternalLink } from "lucide-react";

type TabType = "videos" | "articles" | "profiles";

export default function ResourcesPage() {
  const { locale } = useLocale();
  const [activeTab, setActiveTab] = useState<TabType>("videos");

  const resources = resourcesData[locale];

  // Localized UI text labels
  const uiText = {
    en: {
      title: "Learning Resources",
      subtitle: "Curated videos, blogs, and industry directories to expand your AI literacy.",
      backLink: "Back to Tracks",
      tabVideos: "Videos",
      tabArticles: "Articles & Readings",
      tabProfiles: "Expert Directory",
      visitLink: "Visit Link",
      watchVideo: "Watch Source Video",
      expertSocial: "View Profile"
    },
    as: {
      title: "শিক্ষণ সম্পদসমূহ",
      subtitle: "আপোনাৰ AI শিক্ষা বিস্তাৰ কৰিবলৈ নিৰ্বাচিত ভিডিঅ', ব্লগ আৰু বিশেষজ্ঞ নিৰ্দেশিকা।",
      backLink: "পাঠ্যক্ৰমসমূহলৈ উভতি যাওক",
      tabVideos: "ভিডিঅ'সমূহ",
      tabArticles: "প্ৰবন্ধ আৰু লিখনী",
      tabProfiles: "বিশেষজ্ঞ ডাইৰেক্টৰী",
      visitLink: "লিংক চাওক",
      watchVideo: "উৎস ভিডিঅ' চাওক",
      expertSocial: "প্ৰফাইল চাওক"
    }
  }[locale];

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {uiText.backLink}
        </Link>

        {/* Editorial Header */}
        <header className="mb-12 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {uiText.title}
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed font-normal">
            {uiText.subtitle}
          </p>
        </header>

        {/* Categories Tab Selector */}
        <div className="border-b border-slate-200 mb-10">
          <nav className="flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center pb-4 px-1 border-b-2 font-medium text-sm transition-all ${
                activeTab === "videos"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              }`}
            >
              <Video className="h-4 w-4 mr-2" />
              {uiText.tabVideos}
            </button>

            <button
              onClick={() => setActiveTab("articles")}
              className={`flex items-center pb-4 px-1 border-b-2 font-medium text-sm transition-all ${
                activeTab === "articles"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              }`}
            >
              <Newspaper className="h-4 w-4 mr-2" />
              {uiText.tabArticles}
            </button>

            <button
              onClick={() => setActiveTab("profiles")}
              className={`flex items-center pb-4 px-1 border-b-2 font-medium text-sm transition-all ${
                activeTab === "profiles"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              }`}
            >
              <Users className="h-4 w-4 mr-2" />
              {uiText.tabProfiles}
            </button>
          </nav>
        </div>

        {/* Tab Panels */}
        <div>
          {/* VIDEOS TAB */}
          {activeTab === "videos" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {resources.videos.map((vid) => (
                <div key={vid.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
                  {/* YouTube Embed Player */}
                  {vid.embedId ? (
                    <div className="aspect-video w-full bg-slate-900">
                      <iframe
                        src={`https://www.youtube.com/embed/${vid.embedId}`}
                        title={vid.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  ) : (
                    <div className="aspect-video w-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <Video className="h-12 w-12" />
                    </div>
                  )}
                  
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-50 text-indigo-700 mb-3 font-sans">
                        {vid.provider}
                      </span>
                      <h3 className="text-lg font-bold text-slate-950 leading-snug mb-2 font-sans">
                        {vid.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-serif">
                        {vid.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <a 
                        href={vid.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        {uiText.watchVideo}
                        <ExternalLink className="ml-1 h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ARTICLES TAB */}
          {activeTab === "articles" && (
            <div className="space-y-6 max-w-4xl">
              {resources.articles.map((art) => (
                <div key={art.id} className="p-6 border border-slate-200 rounded-xl bg-white hover:border-indigo-300 transition-colors shadow-sm">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800 mb-3 font-sans">
                    {art.provider}
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 mb-2 font-sans">
                    {art.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-serif mb-4">
                    {art.description}
                  </p>
                  <a 
                    href={art.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    {uiText.visitLink}
                    <ExternalLink className="ml-1.5 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* PROFILES TAB */}
          {activeTab === "profiles" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.profiles.map((prof) => (
                <div key={prof.id} className="p-6 border border-slate-200 rounded-xl bg-white flex flex-col justify-between h-full shadow-sm hover:border-indigo-200 transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-lg mb-4">
                      {prof.title.charAt(0) === "ড" ? "D" : prof.title.charAt(4)}
                    </div>
                    <h3 className="text-lg font-bold text-slate-950 mb-2 font-sans">
                      {prof.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-serif">
                      {prof.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a 
                      href={prof.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      {uiText.expertSocial} ({prof.provider.split(" ")[0]})
                      <ExternalLink className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
