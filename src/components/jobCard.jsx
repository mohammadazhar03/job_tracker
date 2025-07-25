import React from 'react';
import { useJobContext } from '../context/JobContext';

const JobCard = ({ job }) => {
  const { dispatch } = useJobContext();

  const handleDelete = () => {
    dispatch({ type: 'DELETE_JOB', payload: job.id });
  };

  return (
    <div className="card job-card">
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-text">
          <strong>Company:</strong> {job.company} <br />
          <strong>Location:</strong> {job.location} <br />
          <strong>Status:</strong> {job.status}
        </p>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default JobCard;