import React, { useEffect } from 'react'
import { array, bool, func, string } from 'prop-types'
import JobsListContent from '@components/JobsList/Content'
import JobsListContentOrdered from '@components/JobsList/Content/Ordered'
import JobsListContentEmpty from '@components/JobsList/Content/Empty'

function JobsListContainer({
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
    return <JobsListContentEmpty />
  }

  if (jobsListOrdered.length) {
    return (
      <JobsListContentOrdered
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
    <JobsListContent
      filtersKeyword={filtersKeyword}
      jobsList={jobsListToDisplay}
      openModale={openModale}
    />
  ) : (
    <div />
  )
}

JobsListContainer.propTypes /* remove-proptypes */ = {
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

export default JobsListContainer
