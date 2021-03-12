import React from 'react'
import { array, string } from 'prop-types'
import { Link } from '@welcome-ui/link'
import { Tag } from '@welcome-ui/tag'
import { Text } from '@welcome-ui/text'
import ReactHtmlParser from 'react-html-parser'
import Button from '@components/Common/Button'
import SectionTitle from '@components/Common/Title'
import highlightContent from '@utils/highlightContent'
import * as S from '@components/Common/Modale/styles'
import { JOB_DETAILS_LINK } from '@constants'
import { useTranslation } from 'react-i18next'

function ModaleContent({
  address,
  createdAt,
  departmentName,
  description,
  filtersKeyword,
  profile,
  recruitmentProcess,
  websitesUrl,
}) {
  const { t } = useTranslation()

  const transform = node => {
    if (node.type === 'tag' && node.name === 'a') {
      return (
        <Link href={node.attribs.href} key={node.attribs.href} target="_blank">
          {node.children[0].data}
        </Link>
      )
    }
    if (node.data?.includes(filtersKeyword)) {
      return highlightContent(node.data, filtersKeyword)
    }
  }

  return (
    <S.JobContent p="4xl">
      <Text>{createdAt}</Text>
      <Tag variant="primary">{departmentName}</Tag>
      <SectionTitle text={t('jobs.description')} />
      {ReactHtmlParser(description, { transform })}
      <SectionTitle text={t('jobs.profile')} />
      {ReactHtmlParser(profile, { transform })}
      <SectionTitle text={t('jobs.process')} />
      {ReactHtmlParser(recruitmentProcess, { transform })}
      <SectionTitle text={t('jobs.location')} />
      <Text>{address}</Text>
      <Button
        external
        link={websitesUrl.find(url => url.website_reference === JOB_DETAILS_LINK)}
        text={t('jobs.apply')}
      />
    </S.JobContent>
  )
}

ModaleContent.propTypes /* remove-proptypes */ = {
  address: string,
  createdAt: string,
  departmentName: string,
  description: string,
  filtersKeyword: string,
  profile: string,
  recruitmentProcess: string,
  websitesUrl: array,
}

export default ModaleContent
