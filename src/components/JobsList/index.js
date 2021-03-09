import { connect } from 'react-redux'

import { fetchJobs } from '../../store/actions/jobs'
import { openModale } from '../../store/actions/modale'
import {
  selectFiltersActivated,
  selectGroupedByActivated,
  selectJobsFiltered,
} from '../../store/selectors/filters'

import JobsList from './JobsList'

const mapStateToProps = state => {
  const { filters, jobs } = state
  return {
    filtersActivated: selectFiltersActivated(state),
    groupBy: selectGroupedByActivated(state),
    jobsList: jobs.jobsList,
    jobsListFiltered: selectJobsFiltered(state),
    filtersKeyword: filters.keyword,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchJobs: () => dispatch(fetchJobs()),
  openModale: (id, type) => dispatch(openModale(id, type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsList)
