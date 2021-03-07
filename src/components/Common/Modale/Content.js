import React from 'react'
import { array, string } from 'prop-types'
import { Link } from '@welcome-ui/link'
import { Tag } from '@welcome-ui/tag'
import { Text } from '@welcome-ui/text'
import ReactHtmlParser from 'react-html-parser'

import Button from '../Button'

import SectionTitle from './Section/Title'
import * as S from './styles'

function ModaleContent({
  address,
  createdAt,
  departmentName,
  description,
  profile,
  recruitmentProcess,
  websitesUrl,
}) {
  const transform = node => {
    if (node.type === 'tag' && node.name === 'a') {
      return (
        <Link href={node.attribs.href} key={node.attribs.href} target="_blank">
          {node.children[0].data}
        </Link>
      )
    }
  }

  return (
    <S.JobContent p="4xl">
      {/* {myLink.split('<a').reduce((prev, current, i) => {
        if (!i) {
          return [current]
        }
        return prev.concat(<b key={'<a' + current}>{'<a'}</b>, current)
      }, [])} */}
      {/* <Text dangerouslySetInnerHTML={{ __html: myLink }} /> */}
      <Text>{createdAt}</Text>
      <Tag variant="primary">{departmentName}</Tag>
      <SectionTitle text="Job Description" />
      {ReactHtmlParser(description, { transform })}
      <SectionTitle text="For Who?" />
      {ReactHtmlParser(profile, { transform })}
      <SectionTitle text="Recruitment process" />
      {ReactHtmlParser(recruitmentProcess, { transform })}
      <SectionTitle text="Where?" />
      <Text>{address}</Text>
      <Button
        external
        link={websitesUrl.find(url => url.website_reference === 'wttj_fr')}
        text="Apply"
      />
    </S.JobContent>
  )
}

ModaleContent.propTypes /* remove-proptypes */ = {
  address: string,
  createdAt: string,
  departmentName: string,
  description: string,
  profile: string,
  recruitmentProcess: string,
  websitesUrl: array,
}

export default ModaleContent
