import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure(`https://job-portal-server-sigma-rouge.vercel.app/jobs?email=${user.email}`).then(
      (res) => {
        setJobs(res.data);
      }
    );
  }, [user.email, axiosSecure]);

  const handleDelete = (id) => {
    axiosSecure.delete(`/jobs/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        setJobs((prev) => prev.filter((job) => job._id !== id));
      }
    });
  };

  return (
    <div>
      <h2>My Posted Jobs: {jobs.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job</th>
              <th>DeadLine</th>
              <th>Location</th>
              <th>Applications</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.deadline}</td>
                <td>{job.location}</td>
                <td>
                  <Link to={`/viewApplications/${job._id}`}>
                    <button className="btn btn-link">View Applications</button>
                  </Link>
                </td>
                <td onClick={() => handleDelete(job._id)}>
                  <button className="btn btn-ghost">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
