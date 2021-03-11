import React from 'react'
import { Alert } from '@welcome-ui/alert'
import { useTranslation } from 'react-i18next'

function EmptyList() {
  const { t } = useTranslation()
  return (
    <Alert variant="info">
      <Alert.Title>{t('filters.empty_list_title')}</Alert.Title>
      <span>{t('filters.empty_list_text')}</span>
    </Alert>
  )
}

export default EmptyList
