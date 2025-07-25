import React, { useState } from 'react';
import { useJobContext } from '../context/JobContext';
import { v4 as uuidv4 } from 'uuid';

const JobForm = () => {
  const { dispatch } = useJobContext();
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    status: 'Applied'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { ...formData, id: uuidv4() };
    dispatch({ type: 'ADD_JOB', payload: newJob });
    setFormData({ title: '', company: '', location: '', status: 'Applied' });
  };

  return (
    <form className="job-form " onSubmit={handleSubmit}>
      <input type="text gap-2" name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" className="form-control" required />
      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="form-control" required />
      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="form-control" required />
      <select name="status" value={formData.status} onChange={handleChange} className="form-select">
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <button className="btn btn-primary mt-2">Add Job</button>
    </form>
  );
};

export default JobForm;