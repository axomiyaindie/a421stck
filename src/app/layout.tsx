import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali, Lora, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/hooks/useLocale";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-bengali",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal", "italic"],
});

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-serif-bengali",
});

export const metadata: Metadata = {
  title: "AIFor21stCenturyKids",
  description: "Education for the Digital Intelligence Era",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansBengali.variable} ${lora.variable} ${notoSerifBengali.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-900">
        <LocaleProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
