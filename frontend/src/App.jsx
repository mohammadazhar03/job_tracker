import { JobProvider } from "./context/jobContext";
import JobForm from './components/jobForm.jsx';
import JobList from "./components/jobList.jsx";

import "./css/job.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <JobProvider>
      <div className="container">
        <header className="header text-center">
          <h1 className="text-info-emphasis text-center fw-bold"> Job Tracker</h1>
          <p className="muted">Track applications, interviews, and offers in one place.</p>
        </header>

        <JobForm />
        <JobList />
      </div>
    </JobProvider>
  );
}
