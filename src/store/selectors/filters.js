import { createSelector } from 'reselect'

import parseDate from '../../utils/parseDate'

import { selectJobsDepartments, selectJobsOffices } from './jobs'

const getAllJobs = state => state.jobs.jobsList
const getFiltersContract = state => state.filters.contractType
const getFiltersDate = state => state.filters.date
const getFiltersKeyword = state => state.filters.keyword
const getGroupedByActivated = state => state.filters.groupedBy

export const selectFiltersActivated = createSelector(
  getFiltersKeyword,
  getFiltersContract,
  (keywords, contractType) => (keywords || contractType ? true : false)
)

export const selectGroupedByActivated = createSelector(getGroupedByActivated, group => group)

const keywordsIncludedInJobDetails = (job, keywords) =>
  job.name.toLowerCase().includes(keywords.toLowerCase()) ||
  job.description.toLowerCase().includes(keywords.toLowerCase()) ||
  job.profile.toLowerCase().includes(keywords.toLowerCase())

export const selectJobsFiltered = createSelector(
  getFiltersContract,
  getFiltersDate,
  getFiltersKeyword,
  getAllJobs,
  (contractType, date, keywords, allJobs) =>
    allJobs?.filter(
      job =>
        keywordsIncludedInJobDetails(job, keywords) &&
        (job.contract_type.en.toLowerCase() === contractType || !contractType) &&
        (!date || new Date(parseDate(job.created_at.en)) - new Date(date) > 0)
    )
)

export const selectJobsListOrdered = createSelector(
  getAllJobs,
  selectJobsFiltered,
  selectGroupedByActivated,
  selectJobsDepartments,
  selectJobsOffices,
  (allJobs, filteredJobs, groupedBy, departments, offices) => {
    if (!groupedBy) return []
    const groupCategories = groupedBy === 'department' ? departments : offices
    const jobs = filteredJobs.length ? filteredJobs : allJobs
    return groupCategories.map(groupCategory =>
      jobs.filter(job => job[groupedBy]['name'] === groupCategory)
    )
  }
)
