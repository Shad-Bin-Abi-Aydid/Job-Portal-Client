import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FiLinkedin, FiGithub, FiFileText, FiSend } from "react-icons/fi";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const submitJobApplication = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch("https://job-portal-server-sigma-rouge.vercel.app/job-applications", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Application submitted!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myApplications");
        }
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-100 mb-4">
            <FiSend className="w-6 h-6 text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Submit Your Application</h1>
          <p className="text-sm text-gray-500 mt-2">
            Applying as <span className="font-medium text-gray-700">{user?.email}</span>
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <form onSubmit={submitJobApplication} className="space-y-5">
            {/* LinkedIn */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                LinkedIn Profile
              </label>
              <div className="relative">
                <FiLinkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="url"
                  name="linkedIn"
                  required
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                />
              </div>
            </div>

            {/* GitHub */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                GitHub Profile
              </label>
              <div className="relative">
                <FiGithub className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="url"
                  name="github"
                  required
                  placeholder="https://github.com/yourusername"
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                />
              </div>
            </div>

            {/* Resume */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Resume Link
              </label>
              <div className="relative">
                <FiFileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="url"
                  name="resume"
                  required
                  placeholder="https://drive.google.com/your-resume"
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-sm mt-2"
            >
              <FiSend className="w-4 h-4" />
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
