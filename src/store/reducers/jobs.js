export const FETCH_JOBS = 'FETCH_JOBS'

const initialState = {
  jobsList: [],
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        jobsList: action.payload,
      }
    default:
      return state
  }
}

export default jobsReducer
