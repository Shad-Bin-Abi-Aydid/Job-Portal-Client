import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

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

    console.log(linkedIn, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch("https://job-portal-server-sigma-rouge.vercel.app/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/myApplications');
        }
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-3/6 mx-auto shadow-2xl">
      <div className="card-body">
        <form onSubmit={submitJobApplication}>
          <h1 className="text-3xl font-bold my-4 text-center">
            Apply Now and Good Luck!
          </h1>
          <fieldset className="fieldset">
            <label className="label">LinkedIn</label>
            <input
              type="url"
              className="input"
              name="linkedIn"
              placeholder="LinkedIn URL"
            />
            <label className="label">Github</label>
            <input
              type="url"
              className="input"
              placeholder="Github Url"
              name="github"
            />

            <label className="label">Resume</label>
            <input
              type="url"
              className="input"
              placeholder="Resume Url"
              name="resume"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Apply</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
