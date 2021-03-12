import React from 'react'
import { array, func, string } from 'prop-types'
import { Stack } from '@welcome-ui/stack'
import JobsListItem from '@components/JobsList/Item'

function JobsListContent({ filtersKeyword, jobsList, openModale }) {
  return (
    <Stack as="ul" marginTop="4xl" spacing="4xl">
      {jobsList.map(jobOffer => (
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
  )
}

JobsListContent.propTypes /* remove-proptypes */ = {
  filtersKeyword: string,
  jobsList: array,
  openModale: func,
}

export default JobsListContent
