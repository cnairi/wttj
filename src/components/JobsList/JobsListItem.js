import React, { useState } from 'react'
import { Box } from '@welcome-ui/box'
import { Stack } from '@welcome-ui/stack'
import { Text } from '@welcome-ui/text'
import { string } from 'prop-types'

import Button from '../Common/Button'

import * as S from './styles'

function JobsListItem({ contractType, name, officeName }) {
  const [jobDetailsOpened, setOpenJobDetailsOpen] = useState(false)

  const handleJobsDetailModal = () => {
    setOpenJobDetailsOpen(true)
    console.log(jobDetailsOpened)
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
        <Text variant="h3">{name}</Text>
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
  name: string,
  officeName: string,
}

export default JobsListItem
