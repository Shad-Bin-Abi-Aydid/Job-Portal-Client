import React from "react";
import { motion } from "framer-motion";
import { FiSearch, FiMapPin } from "react-icons/fi";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const MotionSpan = motion.span;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionDiv = motion.div;
const MotionImg = motion.img;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const Banner = ({ keyword, setKeyword, location, setLocation }) => {
  return (
    <section className="relative bg-linear-to-br from-indigo-50 via-white to-sky-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40 z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-40 z-0 -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <MotionSpan
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
              500+ new jobs this week
            </MotionSpan>

            <MotionH1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
            >
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-sky-500">
                Dream Job
              </span>{" "}
              Today
            </MotionH1>

            <MotionP
              {...fadeUp(0.2)}
              className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg"
            >
              Discover opportunities that match your skills and ambitions. Explore roles from
              trusted employers and take the next step in your career journey.
            </MotionP>

            {/* Search bar */}
            <MotionDiv {...fadeUp(0.3)} className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                <FiSearch className="w-4 h-4 text-gray-400 shrink-0" />
                <input
                  type="text"
                  value={keyword}
                  onChange={e => setKeyword(e.target.value)}
                  placeholder="Job title, company, or keyword"
                  className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                />
                {keyword && (
                  <button onClick={() => setKeyword('')} className="text-gray-300 hover:text-gray-500 transition-colors text-lg leading-none">&times;</button>
                )}
              </div>
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm sm:w-44 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                <FiMapPin className="w-4 h-4 text-gray-400 shrink-0" />
                <input
                  type="text"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  placeholder="Location"
                  className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                />
                {location && (
                  <button onClick={() => setLocation('')} className="text-gray-300 hover:text-gray-500 transition-colors text-lg leading-none">&times;</button>
                )}
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm whitespace-nowrap">
                Search Jobs
              </button>
            </MotionDiv>

            {/* Stats */}
            <MotionDiv {...fadeUp(0.4)} className="mt-10 flex gap-8">
              {[
                { value: "10K+", label: "Jobs Posted" },
                { value: "5K+", label: "Companies" },
                { value: "8K+", label: "People Hired" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-gray-900">{value}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </MotionDiv>
          </div>

          {/* Right: Images */}
          <div className="relative hidden lg:block h-[500px]">
            {/* team1: larger main image, floats on Y axis */}
            <MotionImg
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src={team1}
              alt="Professional"
              className="absolute top-0 left-0 w-72 h-[360px] rounded-3xl shadow-2xl border-4 border-white object-cover object-top z-10"
            />
            {/* team2: smaller overlay image, floats on X axis */}
            <MotionImg
              animate={{ x: [0, 30, 0] }}
              transition={{ duration: 5, delay: 2.5, repeat: Infinity, ease: "easeInOut" }}
              src={team2}
              alt="Professional"
              className="absolute bottom-0 right-0 w-60 h-[280px] rounded-3xl shadow-2xl border-4 border-white object-cover object-top z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
