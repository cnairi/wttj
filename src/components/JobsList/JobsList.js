import React, { useEffect } from 'react'
import { array, bool, func, string } from 'prop-types'
import { Stack } from '@welcome-ui/stack'

import JobsListItem from './JobsListItem'
import JobsListOrdered from './JobsListOrdered'
import EmptyList from './EmptyList'

function JobsList({
  fetchJobs,
  filtersActivated,
  filtersKeyword,
  groupedBy,
  jobsDepartments,
  jobsList,
  jobsListFiltered,
  jobsListOrdered,
  jobsOffices,
  openModale,
}) {
  const jobsListToDisplay = jobsListFiltered.length ? jobsListFiltered : jobsList

  useEffect(() => {
    fetchJobs()
  }, [fetchJobs])

  if (filtersActivated && !jobsListFiltered.length) {
    return <EmptyList />
  }

  if (jobsListOrdered.length) {
    return (
      <JobsListOrdered
        filtersKeyword={filtersKeyword}
        groupedBy={groupedBy}
        jobsDepartments={jobsDepartments}
        jobsListOrdered={jobsListOrdered}
        jobsOffices={jobsOffices}
        openModale={openModale}
      />
    )
  }

  return jobsListToDisplay?.length ? (
    <Stack as="ul" marginTop="4xl" spacing="4xl">
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
  groupedBy: string,
  jobsDepartments: array,
  jobsList: array,
  jobsListFiltered: array,
  jobsListOrdered: array,
  jobsOffices: array,
  openModale: func,
}

export default JobsList
