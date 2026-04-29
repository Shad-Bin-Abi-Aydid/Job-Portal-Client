import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FiTrash2, FiMapPin, FiBriefcase } from "react-icons/fi";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/job-applications?email=${user.email}`).then((res) => {
      setJobs(res.data);
    });
  }, [user.email, axiosSecure]);

  const handleDelete = (id) => {
    axiosSecure.delete(`/job-applications/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        setJobs((prev) => prev.filter((job) => job._id !== id));
      }
    });
  };

  const statusColor = (status) => {
    const map = {
      Hired: "bg-emerald-50 text-emerald-700",
      Rejected: "bg-red-50 text-red-600",
      "Under Review": "bg-amber-50 text-amber-700",
    };
    return map[status] || "bg-gray-100 text-gray-600";
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
            <FiBriefcase className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
            <p className="text-sm text-gray-500">
              {jobs.length} application{jobs.length !== 1 ? "s" : ""} submitted
            </p>
          </div>
        </div>

        {jobs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center">
            <FiBriefcase className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">No applications yet</p>
            <p className="text-sm text-gray-400 mt-1">Jobs you apply to will appear here</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-50 bg-gray-50/60">
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3.5">
                    Company
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3.5">
                    Position
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3.5">
                    Status
                  </th>
                  <th className="px-6 py-3.5" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {jobs.map((job) => (
                  <tr key={job._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                          <img
                            src={job.company_logo}
                            alt={job.company}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{job.company}</p>
                          <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                            <FiMapPin className="w-3 h-3" />
                            {job.location}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-gray-800">{job.title}</p>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full mt-1 inline-block">
                        {job.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColor(job.status)}`}
                      >
                        {job.status || "Applied"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDelete(job._id)}
                        className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                        title="Withdraw application"
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

export default MyApplications;
