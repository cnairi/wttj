import React from 'react'
import { Alert } from '@welcome-ui/alert'

import { EMPTY_JOBS_LIST_TEXT, EMPTY_JOBS_LIST_TITLE } from '../../constants'

function EmptyList() {
  return (
    <Alert variant="info">
      <Alert.Title>{EMPTY_JOBS_LIST_TITLE}</Alert.Title>
      <span>{EMPTY_JOBS_LIST_TEXT}</span>
    </Alert>
  )
}

export default EmptyList
