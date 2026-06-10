import Link from "next/link";
import { AgeCohort } from "@/data/dictionary";

interface TrackCardProps {
  cohort: AgeCohort;
  href: string;
}

export default function TrackCard({ cohort, href }: TrackCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-900">{cohort.title}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            Ages {cohort.ageRange}
          </span>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          {cohort.focusArea}
        </p>
        <div className="mt-6 pt-6 border-t border-slate-100 text-sm text-slate-500 font-medium">
          {cohort.lessons.length} {cohort.lessons.length === 1 ? 'Module' : 'Modules'} Available
        </div>
      </div>
      <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
        <Link 
          href={href}
          className="text-indigo-600 font-medium text-sm hover:text-indigo-800 flex items-center transition-colors"
        >
          {cohort.actionText}
          <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
