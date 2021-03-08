export const FETCH_JOBS = 'FETCH_JOBS'

const initialState = {
  jobsList: [],
  jobsTypes: [],
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        jobsList: action.payload.jobsList,
        jobsTypes: action.payload.jobsTypes,
      }
    default:
      return state
  }
}

export default jobsReducer
