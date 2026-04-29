import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FiMapPin, FiCalendar, FiDollarSign, FiMail, FiUser, FiTag, FiClock } from "react-icons/fi";

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    company_logo,
    hr_email,
    hr_name,
  } = useLoaderData();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <div className="w-20 h-20 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
              <img src={company_logo} alt={company} className="w-16 h-16 object-contain" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h1>
              <p className="text-gray-500 mt-1 font-medium">{company}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-flex items-center gap-1.5 text-sm bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-medium">
                  <FiClock className="w-3.5 h-3.5" />
                  {jobType}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm bg-sky-50 text-sky-700 px-3 py-1 rounded-full font-medium">
                  <FiTag className="w-3.5 h-3.5" />
                  {category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                  <FiMapPin className="w-3.5 h-3.5" />
                  {location}
                </span>
              </div>
            </div>
            <Link
              to={`/jobApply/${_id}`}
              className="shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: main details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Job Description</h2>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            {responsibilities && responsibilities.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Responsibilities</h2>
                <ul className="space-y-2">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {requirements && requirements.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Requirements</h2>
                <div className="flex flex-wrap gap-2">
                  {requirements.map((req, index) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-lg font-medium"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: summary sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Job Summary</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                    <FiDollarSign className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Salary</p>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5">
                      {salaryRange.min} – {salaryRange.max}{" "}
                      <span className="font-normal text-gray-500">{salaryRange.currency?.toUpperCase()}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                    <FiCalendar className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Deadline</p>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5">{applicationDeadline}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                    <FiUser className="w-4 h-4 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">HR Contact</p>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5">{hr_name}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                    <FiMail className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5 break-all">{hr_email}</p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to={`/jobApply/${_id}`}
              className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-sm"
            >
              Apply for this Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
