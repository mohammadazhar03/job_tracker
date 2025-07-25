import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { getJobsFromStorage, saveJobsToStorage } from '../utils/localStorageUtils';

const JobContext = createContext();

const initialState = {
  jobs: getJobsFromStorage()
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return { ...state, jobs: [...state.jobs, action.payload] };
    case 'DELETE_JOB':
      return { ...state, jobs: state.jobs.filter(job => job.id !== action.payload) };
    default:
      return state;
  }
};

export const JobProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    saveJobsToStorage(state.jobs);
  }, [state.jobs]);

  return (
    <JobContext.Provider value={{ jobs: state.jobs, dispatch }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);