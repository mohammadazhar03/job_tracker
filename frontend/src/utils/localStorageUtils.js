const JOBS_KEY = "jobs";

export const saveJobsToStorage = (jobs) => {
  localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
};

export const getJobsFromStorage = () => {
  const stored = localStorage.getItem(JOBS_KEY);
  return stored ? JSON.parse(stored) : [];
};