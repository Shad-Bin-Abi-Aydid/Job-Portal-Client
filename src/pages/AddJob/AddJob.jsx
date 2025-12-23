import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;

    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    console.log(newJob);

    //  Now send the data to the backend
    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "middle",
            icon: "success",
            title: "Job Published Successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/");
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl">Post a New Job</h2>

      <form onSubmit={handleAddJob} className="card-body">
        <fieldset className="fieldset ">
          {/* Title */}
          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input mb-5"
            placeholder="Job Title"
          />

          {/* Location */}
          <label className="label">Job Location</label>
          <input
            type="text"
            name="location"
            className="input mb-5"
            placeholder="Job Location"
          />

          {/* Job Type */}
          <label className="label">Job Type</label>
          <select
            defaultValue="Pick a Job type"
            className="select select-info mb-5"
          >
            <option disabled={true}>Pick a Job type</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Hybrid</option>
            <option>Intern</option>
          </select>

          {/* Job Category */}
          <label className="label">Job Field</label>
          <select
            defaultValue="Pick a Job Field"
            className="select select-info mb-5"
          >
            <option disabled={true}>Pick a Job Field</option>
            <option>Engineering</option>
            <option>Finance</option>
            <option>Doctor</option>
            <option>Teaching</option>
          </select>

          {/* Salary Range*/}

          <label className="label ">Salary: </label>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="min"
                className="input mb-5"
                placeholder="Min"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="max"
                className="input mb-5"
                placeholder="Max"
                required
              />
            </div>
            <div>
              <select
                name="currency"
                defaultValue="Currency"
                className="select select-info mb-5"
              >
                <option disabled>Currency</option>
                <option>BDT</option>
                <option>GDP</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>

          {/* Job Descriptions */}
          <label className="label">Job Description</label>
          <textarea
            className="textarea w-2/3 mb-5"
            placeholder="Job Description"
            name="description"
          ></textarea>

          {/* Company Name */}
          <label className="label">Company Name</label>
          <input
            type="text"
            name="company"
            className="input mb-5"
            placeholder="Company Name"
          />

          {/* Job Requirements */}
          <label className="label">Job Requirements</label>
          <textarea
            className="textarea  mb-5"
            placeholder="Each Requirements in new a line"
            name="requirements"
          ></textarea>

          {/* Job Responsibilities */}
          <label className="label">Job Responsibilities</label>
          <textarea
            className="textarea  mb-5"
            placeholder="Each Responsibility in new a line"
            name="responsibilities"
          ></textarea>

          {/* HR Name */}
          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input mb-5"
            placeholder="HR Name"
          />

          {/* HR Email */}
          <label className="label">HR Email</label>
          <input
            defaultValue={user?.email}
            type="email"
            name="hr_email"
            className="input mb-5"
            placeholder="Hr Email"
          />

          {/* Company Logo */}
          <label className="label">Company Logo URL</label>
          <input
            type="text"
            name="company_logo"
            className="input mb-5"
            placeholder="Company Logo URL"
          />

          {/* Submit */}
          <button className="btn btn-neutral mb-4">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
