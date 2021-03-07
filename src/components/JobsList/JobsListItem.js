import React from 'react'
import { Box } from '@welcome-ui/box'
import { Stack } from '@welcome-ui/stack'
import { Text } from '@welcome-ui/text'
import { func, number, string } from 'prop-types'

import Button from '../Common/Button'
import { JOB_DETAILS_MODALE } from '../../constants'

import * as S from './styles'

function JobsListItem({ contractType, jobId, name, officeName, onClickItem }) {
  const handleJobsDetailModal = () => {
    onClickItem({ id: jobId, type: JOB_DETAILS_MODALE })
  }

  return (
    <S.ItemContainer
      alignItems={{ xs: 'flex-start', lg: 'center' }}
      display="flex"
      justifyContent={{ xs: 'flex-start', lg: 'space-between' }}
      p="xxl"
      width="100%"
    >
      <Box>
        <Text fontSize="1.25rem" variant="h3">
          {name}
        </Text>
        <Stack direction="row" spacing="xxs">
          <Text color="dark.100" variant="body1">
            {contractType}
          </Text>
          <Text color="dark.100" variant="body1">
            {officeName}
          </Text>
        </Stack>
      </Box>
      <Button onClickAction={handleJobsDetailModal} text="See more" />
    </S.ItemContainer>
  )
}

JobsListItem.propTypes /* remove-proptypes */ = {
  contractType: string,
  jobId: number,
  name: string,
  officeName: string,
  onClickItem: func,
}

export default JobsListItem
