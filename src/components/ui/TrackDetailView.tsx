"use client";

import Link from "next/link";
import { AgeCohort } from "@/data/dictionary";
import LessonRow from "./LessonRow";
import { ArrowLeft } from "lucide-react";

interface TrackDetailViewProps {
  cohort: AgeCohort;
}

export default function TrackDetailView({ cohort }: TrackDetailViewProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        href="/" 
        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Tracks
      </Link>
      
      <div className="bg-white border border-slate-200 rounded-xl p-8 mb-10 shadow-sm">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
          Ages {cohort.ageRange}
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          {cohort.title}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          {cohort.focusArea}
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">Available Modules</h2>
        {cohort.lessons.length > 0 ? (
          <div className="space-y-4">
            {cohort.lessons.map((lesson, idx) => (
              <LessonRow key={lesson.id} lesson={lesson} index={idx} />
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 text-center">
            <p className="text-slate-500">Modules for this track are currently in development.</p>
          </div>
        )}
      </div>
    </div>
  );
}
