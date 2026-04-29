import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FiTrash2, FiEye, FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure(
      `https://job-portal-server-sigma-rouge.vercel.app/jobs?email=${user.email}`
    ).then((res) => {
      setJobs(res.data);
    });
  }, [user.email, axiosSecure]);

  const handleDelete = (id) => {
    axiosSecure.delete(`/jobs/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        setJobs((prev) => prev.filter((job) => job._id !== id));
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
              <FiBriefcase className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Posted Jobs</h1>
              <p className="text-sm text-gray-500">
                {jobs.length} job{jobs.length !== 1 ? "s" : ""} posted
              </p>
            </div>
          </div>
          <Link
            to="/addJob"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
          >
            + Post New Job
          </Link>
        </div>

        {jobs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center">
            <FiBriefcase className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">No jobs posted yet</p>
            <p className="text-sm text-gray-400 mt-1">
              Jobs you post will appear here
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-50 bg-gray-50/60">
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3.5">
                    #
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3.5">
                    Job Title
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3.5 hidden sm:table-cell">
                    Deadline
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3.5 hidden md:table-cell">
                    Location
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3.5">
                    Applications
                  </th>
                  <th className="px-6 py-3.5" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {jobs.map((job, index) => (
                  <tr key={job._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-400 font-medium">{index + 1}</td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">{job.title}</p>
                      <p className="text-xs text-indigo-600 mt-0.5">{job.category}</p>
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell">
                      <span className="text-sm text-gray-500 flex items-center gap-1.5">
                        <FiCalendar className="w-3.5 h-3.5 text-gray-400" />
                        {job.applicationDeadline || job.deadline}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-sm text-gray-500 flex items-center gap-1.5">
                        <FiMapPin className="w-3.5 h-3.5 text-gray-400" />
                        {job.location}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/viewApplications/${job._id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        <FiEye className="w-3.5 h-3.5" />
                        View Applications
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDelete(job._id)}
                        className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                        title="Delete job"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPostedJobs;
