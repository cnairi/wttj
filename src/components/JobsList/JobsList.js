import React, { useEffect } from 'react'
import { array, bool, func, string } from 'prop-types'
import { Stack } from '@welcome-ui/stack'
import { Alert } from '@welcome-ui/alert'

import JobsListItem from './JobsListItem'

function JobsList({
  fetchJobs,
  filtersActivated,
  filtersKeyword,
  jobsList,
  jobsListFiltered,
  openModale,
}) {
  const jobsListToDisplay = jobsListFiltered.length ? jobsListFiltered : jobsList

  useEffect(() => {
    fetchJobs()
  }, [fetchJobs])

  if (filtersActivated && !jobsListFiltered.length) {
    return (
      <Alert variant="info">
        <Alert.Title>Try again with other requirements or come back later!</Alert.Title>
        <span>
          No results found for these criteria. Your dream job is on his way to Welcome to the Jungle
          platform.
        </span>
      </Alert>
    )
  }

  return jobsListToDisplay?.length ? (
    <Stack as="ul" spacing="xs">
      {jobsListToDisplay.map(jobOffer => (
        <JobsListItem
          contractType={jobOffer.contract_type.en}
          filtersKeyword={filtersKeyword}
          jobId={jobOffer.id}
          key={jobOffer.id}
          name={jobOffer.name}
          officeName={jobOffer.office.name}
          onClickItem={openModale}
        />
      ))}
    </Stack>
  ) : (
    <div />
  )
}

JobsList.propTypes /* remove-proptypes */ = {
  fetchJobs: func,
  filtersActivated: bool,
  filtersKeyword: string,
  jobsList: array,
  jobsListFiltered: array,
  openModale: func,
}

export default JobsList
