"use client";

import { useState, useEffect } from "react";
import { LessonStructure } from "@/data/dictionary";
import { PlayCircle, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface LessonRowProps {
  lesson: LessonStructure;
  index: number;
}

export default function LessonRow({ lesson, index }: LessonRowProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    try {
      const completed = JSON.parse(localStorage.getItem("completed-lessons") || "[]");
      setIsCompleted(completed.includes(lesson.id));
    } catch (e) {
      console.error(e);
    }
  }, [lesson.id]);

  return (
    <div className="group bg-white border border-slate-200 rounded-lg p-5 sm:p-6 hover:border-indigo-300 hover:shadow-sm transition-all flex flex-col sm:flex-row sm:items-center gap-4">
      <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full font-bold border transition-colors ${
        isCompleted 
          ? "bg-green-50 text-green-600 border-green-200 animate-fade-in" 
          : "bg-slate-50 text-slate-500 border-slate-200 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-200"
      }`}>
        {isCompleted ? (
          <CheckCircle2 className="h-5 w-5 text-green-600" />
        ) : (
          index + 1
        )}
      </div>
      <div className="flex-grow">
        <h4 className="text-lg font-semibold text-slate-900">{lesson.title}</h4>
        <p className="mt-1 text-sm text-slate-600">{lesson.description}</p>
      </div>
      <div className="flex-shrink-0 flex items-center gap-4 sm:flex-col sm:items-end">
        <div className="flex items-center text-sm text-slate-500">
          <Clock className="h-4 w-4 mr-1.5" />
          {lesson.duration}
        </div>
        <Link 
          href={`/lessons/${lesson.id}`}
          className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <PlayCircle className="h-4 w-4 mr-1.5" />
          Start
        </Link>
      </div>
    </div>
  );
}
