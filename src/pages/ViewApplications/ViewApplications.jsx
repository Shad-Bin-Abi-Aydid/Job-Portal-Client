import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();

  const handleStatusUpdate = (e, id) =>{

    console.log(e.target.value, id);
    const data = {
        status : e.target.value
    }
    fetch(`https://job-portal-server-sigma-rouge.vercel.app/job-applications/${id}`,{
        method: 'PATCH',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if (data.modifiedCount) {
                  Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "Status Update Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
        
                }
    })
  };

  return (
    <div>
      <h2>Applications for this jobs {applications.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{application.applicant_email}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select onChange={(e)=>handleStatusUpdate(e, application._id)} defaultValue="Change Status" className="select select-xs">
                    <option disabled={true}>Change Status</option>
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
    </div>
  );
};

export default ViewApplications;
