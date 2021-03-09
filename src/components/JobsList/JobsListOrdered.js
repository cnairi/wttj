import React from 'react'
import { Stack } from '@welcome-ui/stack'
import { Box } from '@welcome-ui/box'
import { array, func, string } from 'prop-types'

import Title from '../Common/Title'

import JobsListItem from './JobsListItem'

function JobsListOrdered({
  filtersKeyword,
  groupedBy,
  jobsDepartments,
  jobsListOrdered,
  jobsOffices,
  openModale,
}) {
  return (
    <Stack as="ul" spacing="xs">
      {jobsListOrdered.map((category, index) =>
        category.length ? (
          <Box key={category}>
            <Title
              text={groupedBy === 'department' ? jobsDepartments[index] : jobsOffices[index]}
            />
            {category.map(jobOffer => (
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
          </Box>
        ) : null
      )}
    </Stack>
  )
}

JobsListOrdered.propTypes /* remove-proptypes */ = {
  filtersKeyword: string,
  groupedBy: string,
  jobsDepartments: array,
  jobsListOrdered: array,
  jobsOffices: array,
  openModale: func,
}

export default JobsListOrdered
