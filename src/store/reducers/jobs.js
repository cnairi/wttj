export const FETCH_JOBS = 'FETCH_JOBS'

const initialState = {
  jobsList: [],
  jobsTypes: [],
  jobsOffices: [],
  jobsDepartments: [],
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        jobsDepartments: action.payload.jobsDepartments,
        jobsList: action.payload.jobsList,
        jobsOffices: action.payload.jobsOffices,
        jobsTypes: action.payload.jobsTypes,
      }
    default:
      return state
  }
}

export default jobsReducer
