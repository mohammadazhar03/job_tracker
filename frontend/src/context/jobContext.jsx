import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { jobReducer } from "./jobReducer";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobReducer, { jobs: [] });

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs")
      .then(res => dispatch({ type: "SET_JOBS", payload: res.data }))
      .catch(err => console.error(err));
  }, []);

  const addJob = (job) => {
    axios.post("http://localhost:5000/api/jobs", job)
      .then(res => dispatch({ type: "ADD_JOB", payload: res.data }))
      .catch(err => console.error(err));
  };

  const deleteJob = (id) => {
    axios.delete(`http://localhost:5000/api/jobs/${id}`)
      .then(() => dispatch({ type: "DELETE_JOB", payload: id }))
      .catch(err => console.error(err));
  };

  return (
    <JobContext.Provider value={{ jobs: state.jobs, addJob, deleteJob }}>
      {children}
    </JobContext.Provider>
  );
};
