import React, { useEffect } from 'react'
import { array, func } from 'prop-types'

function JobsList({ fetchJobs, jobsList }) {
  useEffect(() => {
    fetchJobs()
  }, [fetchJobs])

  return jobsList ? jobsList.map(jobOffer => <p key={jobOffer.id}>{jobOffer.name}</p>) : <div />
}

JobsList.propTypes /* remove-proptypes */ = {
  fetchJobs: func,
  jobsList: array,
}

export default JobsList
