import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex gap-3 items-center">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <p className="text-xl">{company}</p>
          <p className="text-sm text-gray-500 flex gap-1 items-center">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>

        <p className="flex flex-wrap">
          {requirements.map((item) => (
            <p key={item._id} className="border rounded-xl text-center m-1">{item}</p>
          ))}
        </p>

        <div className="flex items-center mt-4">
          <p>
            <span className="font-bold">Salary:</span> {salaryRange.min} -{" "}
            {salaryRange.max} {salaryRange.currency}
          </p>
          <Link to= {`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
