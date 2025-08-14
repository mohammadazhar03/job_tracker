import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { jobReducer } from "./jobReducer";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobReducer, { jobs: [] });

  useEffect(() => {
    axios.get("https://job-tracker-79je.onrender.com/api/jobs")
      .then(res => dispatch({ type: "SET_JOBS", payload: res.data }))
      .catch(err => console.error(err));
  }, []);

  const addJob = (job) => {
    axios.post("https://job-tracker-79je.onrender.com/api/jobs", job)
      .then(res => dispatch({ type: "ADD_JOB", payload: res.data }))
      .catch(err => console.error(err));
  };

  const deleteJob = (id) => {
    axios.delete(`https://job-tracker-79je.onrender.com/api/jobs/${id}`)
      .then(() => dispatch({ type: "DELETE_JOB", payload: id }))
      .catch(err => console.error(err));
  };

  return (
    <JobContext.Provider value={{ jobs: state.jobs, addJob, deleteJob }}>
      {children}
    </JobContext.Provider>
  );
};
