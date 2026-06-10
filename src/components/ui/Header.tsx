"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "@/hooks/useLocale";
import { BookOpen, Menu, X } from "lucide-react";

export default function Header() {
  const { t, locale } = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Localized navigation text labels
  const navTexts = {
    en: {
      home: "Home",
      parent: "Parent Guidelines",
      resources: t.homepage.navResources,
    },
    as: {
      home: "হোম",
      parent: "অভিভাৱকৰ বাবে নিৰ্দেশনা",
      resources: t.homepage.navResources,
    }
  }[locale];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand Title */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-indigo-600 p-2 rounded-md group-hover:bg-indigo-700 transition-colors">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-slate-800">
                AIFor21stCenturyKids
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              {navTexts.home}
            </Link>
            <Link 
              href="/parent-framework" 
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              {navTexts.parent}
            </Link>
            <Link 
              href="/resources" 
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              {navTexts.resources}
            </Link>
            <div className="h-4 w-px bg-slate-200" />
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="text-slate-500 hover:text-slate-800 p-2 rounded-md transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-slate-50/95 backdrop-blur-sm transition-all duration-200">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              {navTexts.home}
            </Link>
            <Link
              href="/parent-framework"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              {navTexts.parent}
            </Link>
            <Link
              href="/resources"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              {navTexts.resources}
            </Link>
            <div className="border-t border-slate-200 my-2 pt-4 px-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500 font-sans">
                {locale === "as" ? "ভাষা সলনি কৰক" : "Select Language"}
              </span>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
