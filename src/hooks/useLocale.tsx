"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, LocalizationSchema } from "@/data/dictionary";

type Locale = "en" | "as";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: LocalizationSchema;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem("app-locale") as Locale;
    if (savedLocale && (savedLocale === "en" || savedLocale === "as")) {
      setLocaleState(savedLocale);
    }

    // Register service worker for offline availability
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => console.log("Service Worker registered with scope:", reg.scope))
          .catch((err) => console.error("Service Worker registration failed:", err));
      });
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("app-locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  // Prevent hydration mismatch by using a default until mounted
  const currentDictionary = mounted ? dictionaries[locale] : dictionaries.en;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: currentDictionary }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
