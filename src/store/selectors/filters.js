import { createSelector } from 'reselect'

import parseDate from '../../utils/parseDate'

const getAllJobs = state => state.jobs.jobsList
const getFiltersContract = state => state.filters.contractType
const getFiltersDate = state => state.filters.date
const getFiltersKeyword = state => state.filters.keyword

export const selectFiltersActivated = createSelector(
  getFiltersKeyword,
  getFiltersContract,
  (keywords, contractType) => (keywords || contractType ? true : false)
)

export const selectJobsByContract = createSelector(
  getFiltersContract,
  getFiltersDate,
  getFiltersKeyword,
  getAllJobs,
  (contractType, date, keywords, allJobs) =>
    allJobs?.filter(
      job =>
        job.name.toLowerCase().includes(keywords.toLowerCase()) &&
        (job.contract_type.en.toLowerCase() === contractType || !contractType) &&
        (!date || new Date(parseDate(job.created_at.en)) - new Date(date) > 0)
    )
)
