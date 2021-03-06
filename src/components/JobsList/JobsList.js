import React, { useEffect } from 'react'
import { array, func } from 'prop-types'
import { Stack } from '@welcome-ui/stack'

import JobsListItem from './JobsListItem'

function JobsList({ fetchJobs, jobsList }) {
  useEffect(() => {
    fetchJobs()
  }, [fetchJobs])

  return jobsList ? (
    <Stack as="ul" spacing="xs">
      {jobsList.map(jobOffer => (
        <JobsListItem
          contractType={jobOffer.contract_type.en}
          key={jobOffer.id}
          name={jobOffer.name}
          officeName={jobOffer.office.name}
        />
      ))}
    </Stack>
  ) : (
    <div />
  )
}

JobsList.propTypes /* remove-proptypes */ = {
  fetchJobs: func,
  jobsList: array,
}

export default JobsList
