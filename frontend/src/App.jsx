import { JobProvider } from "./context/jobContext";
<<<<<<< HEAD
import JobForm from './components/jobForm.jsx';
import JobList from "./components/jobList.jsx";
=======
import JobForm from "./components/JobForm.jsx";
import JobList from "./components/JobList.jsx";
>>>>>>> d0d1ac23122edd573c3b6a82edbd8d8a91717ebd
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
