import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { FiUsers, FiMail, FiCheckCircle } from "react-icons/fi";

const ViewApplications = () => {
  const applications = useLoaderData();

  const handleStatusUpdate = (e, id) => {
    const data = { status: e.target.value };

    fetch(`https://job-portal-server-sigma-rouge.vercel.app/job-applications/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Status updated",
            showConfirmButton: false,
            timer: 1200,
          });
        }
      });
  };

  const statusBadge = (status) => {
    const map = {
      Hired: "bg-emerald-50 text-emerald-700 border-emerald-200",
      Rejected: "bg-red-50 text-red-600 border-red-200",
      "Under Review": "bg-amber-50 text-amber-700 border-amber-200",
    };
    return map[status] || "bg-gray-50 text-gray-600 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
            <FiUsers className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Job Applications</h1>
            <p className="text-sm text-gray-500">
              {applications.length} applicant{applications.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {applications.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center">
            <FiUsers className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">No applications yet</p>
            <p className="text-sm text-gray-400 mt-1">Applicants will appear here once they apply</p>
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
                    Applicant
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3.5">
                    Current Status
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3.5">
                    Update Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {applications.map((application, index) => (
                  <tr key={application._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-400 font-medium">{index + 1}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                          <FiMail className="w-3.5 h-3.5 text-indigo-600" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">
                          {application.applicant_email}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border ${statusBadge(
                          application.status
                        )}`}
                      >
                        <FiCheckCircle className="w-3 h-3" />
                        {application.status || "Applied"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        onChange={(e) => handleStatusUpdate(e, application._id)}
                        defaultValue="Change Status"
                        className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all bg-white cursor-pointer"
                      >
                        <option disabled>Change Status</option>
                        <option>Under Review</option>
                        <option>Hired</option>
                        <option>Rejected</option>
                      </select>
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

export default ViewApplications;
