import { connect } from 'react-redux'

import { fetchJobs } from '../../store/actions/jobs'

import JobsList from './JobsList'

const mapStateToProps = state => {
  const { jobs } = state
  return { jobsList: jobs.jobsList }
}

const mapDispatchToProps = dispatch => ({
  fetchJobs: () => dispatch(fetchJobs()),
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsList)
