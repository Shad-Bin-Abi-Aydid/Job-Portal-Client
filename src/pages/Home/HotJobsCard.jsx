import React from "react";
import { FiMapPin, FiDollarSign, FiArrowRight, FiClock, FiTag } from "react-icons/fi";
import { Link } from "react-router-dom";

const jobTypeConfig = {
  "Full-Time": { bar: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-700" },
  "Part-Time": { bar: "bg-amber-500",   badge: "bg-amber-100 text-amber-700"     },
  "Hybrid":    { bar: "bg-sky-500",     badge: "bg-sky-100 text-sky-700"         },
  "Intern":    { bar: "bg-violet-500",  badge: "bg-violet-100 text-violet-700"   },
};

const defaultConfig = { bar: "bg-indigo-500", badge: "bg-indigo-100 text-indigo-700" };

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
  } = job;

  const { bar, badge } = jobTypeConfig[jobType] || defaultConfig;

  return (
    <div className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">

      {/* ── Colored accent bar (job-type coded) ── */}
      <div className={`h-1.5 w-full shrink-0 ${bar}`} />

      {/* ── Section 1 · Company ─────────────────── */}
      <div className="flex items-center gap-3 px-5 pt-4 pb-3.5 border-b border-dashed border-gray-100">
        <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
          <img src={company_logo} alt={company} className="w-9 h-9 object-contain" />
        </div>
        <div className="min-w-0">
          <p className="font-bold text-gray-800 text-sm truncate">{company}</p>
          <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
            <FiMapPin className="w-3 h-3 shrink-0" />
            <span className="truncate">{location}</span>
          </p>
        </div>
      </div>

      {/* ── Section 2 · Job details ─────────────── */}
      <div className="px-5 py-4 flex flex-col flex-1 gap-3">
        <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md ${badge}`}>
            <FiClock className="w-3 h-3" />
            {jobType}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
            <FiTag className="w-3 h-3" />
            {category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5">
          {requirements.slice(0, 4).map((req, i) => (
            <span key={i} className="text-xs bg-slate-100 text-slate-600 font-medium px-2.5 py-1 rounded-md">
              {req}
            </span>
          ))}
          {requirements.length > 4 && (
            <span className="text-xs text-gray-400 self-center font-medium">
              +{requirements.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* ── Section 3 · Footer ──────────────────── */}
      <div className="flex items-center justify-between gap-3 px-5 py-3.5 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
            <FiDollarSign className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-400 leading-none mb-0.5">Salary</p>
            <p className="text-sm font-bold text-gray-800 leading-none truncate">
              {salaryRange.min}–{salaryRange.max}
              <span className="text-xs font-normal text-gray-400 ml-1">
                {salaryRange.currency?.toUpperCase()}
              </span>
            </p>
          </div>
        </div>

        <Link
          to={`/jobs/${_id}`}
          className="shrink-0 inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
        >
          View Job
          <FiArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
};

export default HotJobsCard;
