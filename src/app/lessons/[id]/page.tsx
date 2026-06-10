"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { lessonsDetails } from "@/data/lessons";
import { ArrowLeft, CheckCircle, XCircle, ArrowRight, BookOpen } from "lucide-react";

export default function LessonDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { locale } = useLocale();
  const id = params.id as string;

  const lesson = lessonsDetails[locale]?.[id];

  // Quiz state
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!lesson) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Lesson not found / পাঠ্যক্ৰম পোৱা নগ’ল</h2>
        <p className="mt-4 text-slate-600">The lesson code {id} is not configured.</p>
        <Link href="/" className="mt-6 inline-flex items-center text-indigo-600 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to safety / উভতি যাওক
        </Link>
      </div>
    );
  }

  const handleOptionSelect = (index: number) => {
    if (submitted) return;
    setSelectedOption(index);
  };

  const handleQuizSubmit = () => {
    if (selectedOption === null) return;
    setSubmitted(true);
    
    // Save completion state in localStorage if answer is correct
    if (selectedOption === lesson.quiz.answerIndex) {
      try {
        const completed = JSON.parse(localStorage.getItem("completed-lessons") || "[]");
        if (!completed.includes(id)) {
          completed.push(id);
          localStorage.setItem("completed-lessons", JSON.stringify(completed));
        }
      } catch (e) {
        console.error("Failed to save progress to localStorage", e);
      }
    }
  };

  const handleQuizReset = () => {
    setSelectedOption(null);
    setSubmitted(false);
  };

  const isCorrect = selectedOption === lesson.quiz.answerIndex;

  // Determine next lesson link
  const getNextLessonLink = () => {
    const prefix = id.split("-")[0]; // exp, cre, str
    const num = parseInt(id.split("-")[1]);
    const nextId = `${prefix}-0${num + 1}`;
    
    // Check if next lesson exists
    if (lessonsDetails[locale]?.[nextId]) {
      return {
        id: nextId,
        title: lessonsDetails[locale][nextId].title,
        href: `/lessons/${nextId}`
      };
    }
    return null;
  };

  const nextLesson = getNextLessonLink();

  // Localized UI text helper
  const uiText = {
    en: {
      authorBy: "By",
      takeaways: "Key Takeaways",
      quizHeader: "Check Your Understanding",
      submit: "Submit Answer",
      reset: "Try Again",
      correct: "Correct!",
      incorrect: "Incorrect",
      nextLesson: "Next Lesson",
      backToTracks: "Back to Tracks",
      startQuiz: "Please select an option to submit."
    },
    as: {
      authorBy: "লেখক:",
      takeaways: "মূল শিক্ষণীয় কথাসমূহ",
      quizHeader: "আপোনাৰ বুজাবুজি পৰীক্ষা কৰক",
      submit: "উত্তৰ জমা কৰক",
      reset: "পুনৰ চেষ্টা কৰক",
      correct: "শুদ্ধ হৈছে!",
      incorrect: "ভুল হৈছে",
      nextLesson: "পৰৱৰ্তী পাঠ্যক্ৰম",
      backToTracks: "পাঠ্যক্ৰমসমূহলৈ উভতি যাওক",
      startQuiz: "অনুগ্ৰহ কৰি উত্তৰ দিবলৈ এটা বিকল্প বাছনি কৰক।"
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
          {uiText.backToTracks}
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-4 pt-8 pb-20">
        {/* Editorial Header */}
        <header className="mb-10 pb-8 border-b border-slate-100">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {lesson.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed font-normal mb-6">
            {lesson.subtitle}
          </p>
          
          <div className="flex items-center space-x-3 text-sm text-slate-500">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-semibold border border-slate-200">
              {lesson.author.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-slate-700">
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
                {lesson.publishedDate} · {lesson.readTime}
              </p>
            </div>
          </div>
        </header>

        {/* Medium-style serif article body */}
        <div className="medium-article-body mb-12">
          <p className="font-medium text-slate-800 text-xl leading-relaxed mb-6">
            {lesson.introduction}
          </p>

          {lesson.sections.map((section, idx) => (
            <div key={idx} className="mt-8">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Key Takeaways Section */}
        <div className="my-12 p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-xl">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-indigo-600" />
            {uiText.takeaways}
          </h3>
          <ul className="space-y-3">
            {lesson.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start text-sm text-slate-700 leading-relaxed">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 font-semibold text-xs mr-3 mt-0.5 flex-shrink-0">
                  {idx + 1}
                </span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive Quiz Section */}
        <div className="border-t border-slate-200 pt-12 mt-12">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
              {uiText.quizHeader}
            </h3>
            
            <p className="text-base font-semibold text-slate-800 mb-6">
              {lesson.quiz.question}
            </p>

            <div className="space-y-3">
              {lesson.quiz.options.map((option, idx) => {
                let borderClass = "border-slate-200 hover:border-slate-300 bg-white";
                let checkIcon = null;

                if (selectedOption === idx) {
                  borderClass = "border-indigo-600 bg-indigo-50/50";
                }

                if (submitted) {
                  if (idx === lesson.quiz.answerIndex) {
                    borderClass = "border-green-600 bg-green-50/50";
                    checkIcon = <CheckCircle className="h-5 w-5 text-green-600 ml-auto flex-shrink-0" />;
                  } else if (selectedOption === idx) {
                    borderClass = "border-red-600 bg-red-50/50";
                    checkIcon = <XCircle className="h-5 w-5 text-red-600 ml-auto flex-shrink-0" />;
                  } else {
                    borderClass = "border-slate-200 opacity-60 bg-white";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={submitted}
                    className={`w-full text-left p-4 border rounded-lg flex items-center transition-all ${borderClass}`}
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-medium text-xs mr-3 flex-shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm text-slate-700 font-medium pr-4">{option}</span>
                    {checkIcon}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-4">
              {!submitted ? (
                <button
                  onClick={handleQuizSubmit}
                  disabled={selectedOption === null}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    selectedOption !== null
                      ? "bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  {uiText.submit}
                </button>
              ) : (
                <button
                  onClick={handleQuizReset}
                  className="px-5 py-2.5 bg-slate-200 text-slate-700 hover:bg-slate-300 rounded-lg text-sm font-medium transition-colors"
                >
                  {uiText.reset}
                </button>
              )}
            </div>

            {submitted && (
              <div className={`mt-6 p-4 rounded-lg border ${
                isCorrect 
                  ? "border-green-200 bg-green-50/30 text-green-900" 
                  : "border-red-200 bg-red-50/30 text-red-900"
              }`}>
                <p className="font-bold flex items-center text-sm mb-2">
                  {isCorrect ? (
                    <span className="flex items-center"><CheckCircle className="h-4 w-4 mr-1.5 text-green-600" /> {uiText.correct}</span>
                  ) : (
                    <span className="flex items-center"><XCircle className="h-4 w-4 mr-1.5 text-red-600" /> {uiText.incorrect}</span>
                  )}
                </p>
                <p className="text-sm leading-relaxed opacity-90">
                  {lesson.quiz.explanation}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Wikipedia-style sources list */}
        {lesson.sources && lesson.sources.length > 0 && (
          <div className="border-t border-slate-200 pt-12 mt-12">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center font-sans">
              <span className="text-indigo-600">{locale === "as" ? "উৎস আৰু প্ৰসংগসমূহ" : "Sources & References"}</span>
            </h3>
            <ol className="space-y-4 pl-5 list-decimal text-sm text-slate-600">
              {lesson.sources.map((src, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="italic font-medium text-slate-800">"{src.title}"</span>
                  {" · "}
                  <span className="text-slate-500">{src.authorOrPublisher}</span>
                  {" · "}
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800 capitalize mr-2 font-sans">
                    {src.type}
                  </span>
                  <a 
                    href={src.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-indigo-600 hover:text-indigo-800 underline break-all font-sans font-medium"
                  >
                    {src.url}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto text-center px-5 py-3 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors"
          >
            {uiText.backToTracks}
          </Link>
          
          {nextLesson && (
            <Link
              href={nextLesson.href}
              className="w-full sm:w-auto text-center inline-flex justify-center items-center px-5 py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg text-sm font-medium shadow-sm transition-colors"
            >
              <span>{uiText.nextLesson}: {nextLesson.title}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          )}
        </div>
      </article>
    </div>
  );
}
