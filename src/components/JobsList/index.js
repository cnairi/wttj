import { connect } from 'react-redux'

import { fetchJobs } from '../../store/actions/jobs'
import { openModale } from '../../store/actions/modale'

import JobsList from './JobsList'

const mapStateToProps = state => {
  const { jobs } = state
  return { jobsList: jobs.jobsList }
}

const mapDispatchToProps = dispatch => ({
  fetchJobs: () => dispatch(fetchJobs()),
  openModale: (id, type) => dispatch(openModale(id, type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsList)
