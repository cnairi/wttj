import { createSelector } from 'reselect'

const getFiltersKeyword = state => state.filters.keyword
const getFiltersContract = state => state.filters.contractType
const getAllJobs = state => state.jobs.jobsList

export const selectFiltersActivated = createSelector(
  getFiltersKeyword,
  getFiltersContract,
  (keywords, contractType) => (keywords || contractType ? true : false)
)

export const selectJobsByKeywords = createSelector(
  getFiltersKeyword,
  getAllJobs,
  (keywords, allJobs) =>
    allJobs.filter(job => job.name.toLowerCase().includes(keywords.toLowerCase()))
)

export const selectJobsByContract = createSelector(
  getFiltersKeyword,
  getFiltersContract,
  getAllJobs,
  (keywords, contractType, allJobs) =>
    allJobs.filter(
      job =>
        job.name.toLowerCase().includes(keywords.toLowerCase()) &&
        (job.contract_type.en.toLowerCase() === contractType || !contractType)
    )
)
