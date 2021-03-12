import React from 'react'
import { Stack } from '@welcome-ui/stack'
import { array, func, string } from 'prop-types'
import Title from '@components/Common/Title'
import JobsListItem from '@components/JobsList/Item'

function JobsListOrdered({
  filtersKeyword,
  groupedBy,
  jobsDepartments,
  jobsListOrdered,
  jobsOffices,
  openModale,
}) {
  return (
    <Stack as="ul" spacing="4xl">
      {jobsListOrdered.map((category, index) =>
        category.length ? (
          <div key={category}>
            <Title
              text={groupedBy === 'department' ? jobsDepartments[index] : jobsOffices[index]}
            />
            <Stack as="ul" spacing="4xl">
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
            </Stack>
          </div>
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
