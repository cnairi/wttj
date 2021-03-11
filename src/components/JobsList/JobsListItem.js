import React from 'react'
import { Stack } from '@welcome-ui/stack'
import { Text } from '@welcome-ui/text'
import { func, number, string } from 'prop-types'
import { useTranslation } from 'react-i18next'

import highlightContent from '../../utils/highlightContent'
import Button from '../Common/Button'
import { JOB_DETAILS_MODALE } from '../../constants'

import * as S from './styles'

function JobsListItem({ contractType, filtersKeyword, jobId, name, officeName, onClickItem }) {
  const { t } = useTranslation()

  const handleJobsDetailModal = () => {
    onClickItem({ id: jobId, type: JOB_DETAILS_MODALE })
  }

  return (
    <S.ItemContainer
      alignItems={{ xs: 'flex-start', lg: 'center' }}
      display="flex"
      justifyContent={{ xs: 'flex-start', lg: 'space-between' }}
      width="100%"
    >
      <Stack marginBottom={{ xs: 'md', lg: 0 }} spacing="xs">
        <Text fontSize="1.25rem" variant="h3">
          {highlightContent(name, filtersKeyword)}
        </Text>
        <Stack direction="row" spacing="xxs">
          <Text color="dark.100" variant="body1">
            {contractType}
          </Text>
          <Text color="dark.100" variant="body1">
            {officeName}
          </Text>
        </Stack>
      </Stack>
      <Button onClickAction={handleJobsDetailModal} text={t('common.cta')} />
    </S.ItemContainer>
  )
}

JobsListItem.propTypes /* remove-proptypes */ = {
  contractType: string,
  filtersKeyword: string,
  jobId: number,
  name: string,
  officeName: string,
  onClickItem: func,
}

export default JobsListItem
