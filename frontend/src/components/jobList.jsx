import React, { useContext } from "react";
import { JobContext } from "../context/jobContext.jsx";
import JobCard from './JobCard.jsx'
import "../css/job.css";

const JobList = () => {
  const { jobs } = useContext(JobContext);

  if (jobs.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>No jobs added yet.</p>;
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
