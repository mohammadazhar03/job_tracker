import React from 'react';
import { useJobContext } from '../context/JobContext';
import JobCard from './JobCard';

const JobList = () => {
  const { jobs } = useJobContext();

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;