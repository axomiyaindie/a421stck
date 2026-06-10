"use client";

import { useLocale } from "@/hooks/useLocale";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center space-x-1 border border-slate-200 rounded-md p-1 bg-white shadow-sm">
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-colors ${
          locale === "en"
            ? "bg-indigo-50 text-indigo-700"
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("as")}
        className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-colors ${
          locale === "as"
            ? "bg-indigo-50 text-indigo-700"
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
        }`}
      >
        অসমীয়া
      </button>
    </div>
  );
}
