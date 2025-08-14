export const jobReducer = (state, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return { ...state, jobs: action.payload };
    case "ADD_JOB":
      return { ...state, jobs: [...state.jobs, action.payload] };
    case "DELETE_JOB":
      return { ...state, jobs: state.jobs.filter(job => job._id !== action.payload) };
    default:
      return state;
  }
};
