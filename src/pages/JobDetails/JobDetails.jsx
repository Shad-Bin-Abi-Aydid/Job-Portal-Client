import React from "react";
import { Link, useLoaderData } from "react-router-dom";

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
    // Force light background & readable text
    <div className="bg-gray-500 text-gray-900 min-h-screen rounded-2xl">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-white shadow-md rounded-xl p-6">
          <img
            src={company_logo}
            alt={company}
            className="w-20 h-20 object-contain border rounded-lg bg-white"
          />

          <div className="flex-1">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-600 mt-1">{company}</p>

            <div className="flex flex-wrap gap-3 mt-3 text-sm">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                {jobType}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                {category}
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full">
                📍 {location}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Left Section */}
          <div className="md:col-span-2 space-y-6">
            {/* Job Description */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-3">Job Description</h2>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {responsibilities?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-3">Requirements</h2>
              <div className="flex flex-wrap gap-2">
                {requirements?.map((req, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg text-sm"
                  >
                    {req}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-md rounded-xl p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Job Summary</h2>

            <div className="space-y-3 text-gray-700 text-sm">
              <p>
                <strong>Salary:</strong> {salaryRange.min} – {salaryRange.max}{" "}
                {salaryRange.currency.toUpperCase()}
              </p>
              <p>
                <strong>Deadline:</strong> {applicationDeadline}
              </p>
              <p>
                <strong>HR Name:</strong> {hr_name}
              </p>
              <p>
                <strong>Email:</strong> {hr_email}
              </p>
            </div>

            {/* Apply Button */}
            <Link to={`/jobApply/${_id}`}> 
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
