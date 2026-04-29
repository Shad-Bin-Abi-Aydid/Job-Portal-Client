import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { FiBriefcase } from "react-icons/fi";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;

    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n").filter(Boolean);
    newJob.responsibilities = newJob.responsibilities.split("\n").filter(Boolean);

    fetch("https://job-portal-server-sigma-rouge.vercel.app/jobs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Job Published Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJobs");
        }
      });
  };

  const inputClass =
    "w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all bg-white";

  const selectClass =
    "w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all bg-white";

  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Page header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
            <FiBriefcase className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Post a New Job</h1>
            <p className="text-sm text-gray-500">Fill in the details to publish your job listing</p>
          </div>
        </div>

        <form onSubmit={handleAddJob} className="space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-semibold text-gray-900 border-b border-gray-50 pb-3">
              Basic Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Job Title</label>
                <input type="text" name="title" required placeholder="e.g. Senior React Developer" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Company Name</label>
                <input type="text" name="company" required placeholder="e.g. Acme Corp" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Job Type</label>
                <select name="jobType" defaultValue="" className={selectClass}>
                  <option value="" disabled>Select job type</option>
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Hybrid</option>
                  <option>Intern</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Job Field / Category</label>
                <select name="category" defaultValue="" className={selectClass}>
                  <option value="" disabled>Select category</option>
                  <option>Engineering</option>
                  <option>Finance</option>
                  <option>Doctor</option>
                  <option>Teaching</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>Location</label>
              <input type="text" name="location" required placeholder="e.g. Dhaka, Bangladesh" className={inputClass} />
            </div>
          </div>

          {/* Salary */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-semibold text-gray-900 border-b border-gray-50 pb-3">
              Salary Range
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Minimum</label>
                <input type="number" name="min" required placeholder="e.g. 30000" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Maximum</label>
                <input type="number" name="max" required placeholder="e.g. 60000" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Currency</label>
                <select name="currency" defaultValue="" className={selectClass}>
                  <option value="" disabled>Select</option>
                  <option>BDT</option>
                  <option>USD</option>
                  <option>GBP</option>
                  <option>INR</option>
                </select>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-semibold text-gray-900 border-b border-gray-50 pb-3">
              Job Details
            </h2>

            <div>
              <label className={labelClass}>Job Description</label>
              <textarea
                name="description"
                required
                rows={4}
                placeholder="Describe the role, team, and what the candidate will be working on..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div>
              <label className={labelClass}>Requirements</label>
              <p className="text-xs text-gray-400 mb-1.5">One requirement per line</p>
              <textarea
                name="requirements"
                required
                rows={4}
                placeholder={"React.js\nNode.js\n3+ years experience"}
                className={`${inputClass} resize-none`}
              />
            </div>

            <div>
              <label className={labelClass}>Responsibilities</label>
              <p className="text-xs text-gray-400 mb-1.5">One responsibility per line</p>
              <textarea
                name="responsibilities"
                required
                rows={4}
                placeholder={"Build and maintain web applications\nCollaborate with design team\nWrite clean, tested code"}
                className={`${inputClass} resize-none`}
              />
            </div>
          </div>

          {/* HR & Meta */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-semibold text-gray-900 border-b border-gray-50 pb-3">
              HR & Deadline
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>HR Name</label>
                <input type="text" name="hr_name" required placeholder="HR contact name" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>HR Email</label>
                <input
                  type="email"
                  name="hr_email"
                  required
                  defaultValue={user?.email}
                  placeholder="hr@company.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Application Deadline</label>
                <input type="date" name="applicationDeadline" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Company Logo URL</label>
                <input type="url" name="company_logo" placeholder="https://..." className={inputClass} />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-sm text-sm"
          >
            <FiBriefcase className="w-4 h-4" />
            Publish Job Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
