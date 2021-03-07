import { createSelector } from 'reselect'

const getFiltersKeyword = state => state.filters.keyword
const getAllJobs = state => state.jobs.jobsList

export const selectJobsByKeywords = createSelector(
  getFiltersKeyword,
  getAllJobs,
  (keywords, allJobs) => allJobs.filter(job => job.name.toLowerCase().includes(keywords))
)
