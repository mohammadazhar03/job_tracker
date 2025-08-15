import React, { useContext } from "react";
import { JobContext } from "../context/JobContext";
import JobCard from "./JobCard";
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
