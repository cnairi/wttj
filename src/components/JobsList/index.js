import { connect } from 'react-redux'
import { fetchJobs } from '@store/actions/jobs'
import { openModale } from '@store/actions/modale'
import {
  selectFiltersActivated,
  selectGroupedByActivated,
  selectJobsFiltered,
  selectJobsListOrdered,
} from '@store/selectors/filters'
import JobsList from '@components/JobsList/JobsList'

const mapStateToProps = state => {
  const { filters, jobs } = state
  return {
    filtersActivated: selectFiltersActivated(state),
    groupedBy: selectGroupedByActivated(state),
    jobsDepartments: jobs.jobsDepartments,
    jobsList: jobs.jobsList,
    jobsOffices: jobs.jobsOffices,
    jobsListFiltered: selectJobsFiltered(state),
    jobsListOrdered: selectJobsListOrdered(state),
    filtersKeyword: filters.keyword,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchJobs: () => dispatch(fetchJobs()),
  openModale: (id, type) => dispatch(openModale(id, type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsList)
