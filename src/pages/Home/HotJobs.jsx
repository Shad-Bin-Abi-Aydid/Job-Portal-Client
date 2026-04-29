import React from "react";
import HotJobsCard from "./HotJobsCard";
import { FiBriefcase, FiSearch } from "react-icons/fi";

const HotJobs = ({ jobs, keyword, location }) => {
  const isSearching = keyword?.trim() || location?.trim();

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 text-sm font-semibold mb-2">
              <FiBriefcase className="w-4 h-4" />
              {isSearching ? "Search Results" : "Featured Opportunities"}
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {isSearching ? (
                <>
                  {jobs.length} job{jobs.length !== 1 ? "s" : ""} found
                  {keyword && <span className="text-indigo-600"> for &ldquo;{keyword}&rdquo;</span>}
                  {location && <span className="text-gray-500 text-xl font-normal"> in {location}</span>}
                </>
              ) : (
                "Hot Jobs Right Now"
              )}
            </h2>
            {!isSearching && (
              <p className="text-gray-500 mt-2">Handpicked positions from top companies</p>
            )}
          </div>
          {!isSearching && (
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              View all jobs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
        </div>

        {/* Cards */}
        {jobs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <FiSearch className="w-10 h-10 text-gray-300 mb-4" />
            <p className="text-gray-500 font-medium">No jobs found</p>
            <p className="text-sm text-gray-400 mt-1">Try different keywords or location</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {jobs.map((job, index) => (
              <HotJobsCard key={job._id} job={job} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HotJobs;
