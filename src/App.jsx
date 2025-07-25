import React from 'react';
import { JobProvider } from './context/JobContext';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import './index.css'
const App = () => {
  return (
    <JobProvider>
      <div className="container mt-4">
        <h2 className="text-center mb-4 title">Job Tracker Dashboard</h2>
        <JobForm />
        <JobList />
      </div>
    </JobProvider>
  );
};

export default App;