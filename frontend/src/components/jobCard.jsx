import React, { useContext } from "react";
import { JobContext } from "../context/jobContext";

const JobCard = ({ job }) => {
  const { deleteJob } = useContext(JobContext);

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Date:</strong> {job.date}</p>
      <p>
        <strong>Status:</strong>{" "}
        <span className={`status ${job.status.toLowerCase()}`}>{job.status}</span>
      </p>
      <button className="delete-btn" onClick={() => deleteJob(job._id)}>
        Delete
      </button>
    </div>
  );
};

export default JobCard;
