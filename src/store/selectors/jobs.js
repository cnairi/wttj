import { createSelector } from 'reselect'

const getSelectedJobId = state => state.modale.id
const getAllJobs = state => state.jobs.jobsList

export const selectJobDetails = createSelector(
  getSelectedJobId,
  getAllJobs,
  (selectedJobId, allJobs) => allJobs.filter(job => job.id === selectedJobId)[0]
)

export const selectJobsTypes = state => state.jobs.jobsTypes
