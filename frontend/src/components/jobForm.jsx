import React, { useState, useContext } from "react";
import { JobContext } from "../context/jobContext";
import "../css/job.css";

const JobForm = () => {
  const { addJob } = useContext(JobContext);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    date: "",
    status: "Applied",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.company || !formData.location || !formData.date) {
      alert("Please fill in all fields");
      return;
    }

    addJob(formData);
    setFormData({ title: "", company: "", location: "", date: "", status: "Applied" });
  };

  return (
    <div className="job-form-container">
      <h2>Add a New Job</h2>
      <form onSubmit={handleSubmit}>
        <label>Job Title</label>
        <input
          type="text"
          name="title"
          placeholder="e.g. Frontend Developer"
          value={formData.title}
          onChange={handleChange}
        />

        <label>Company</label>
        <input
          type="text"
          name="company"
          placeholder="e.g. Google"
          value={formData.company}
          onChange={handleChange}
        />

        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="e.g. New York"
          value={formData.location}
          onChange={handleChange}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>

        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default JobForm;
