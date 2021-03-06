import React from 'react'
import { Box } from '@welcome-ui/box'
import { bool, func, object } from 'prop-types'
import { Tag } from '@welcome-ui/tag'
import { Text } from '@welcome-ui/text'

import Button from '../Button'

function Modale({ closeModale, data, isOpen }) {
  return isOpen ? (
    <Box
      alignItems="center"
      borderRadius="sm"
      bottom={0}
      display="flex"
      justifyContent="center"
      left={0}
      position="absolute"
      right={0}
      top={0}
    >
      <Box
        backgroundColor="dark.800"
        height="100%"
        onClick={closeModale}
        opacity={0.5}
        p="md"
        position="relative"
        width="100%"
      />
      <Box
        backgroundColor="nude.100"
        height={{ xs: 'auto', lg: '80vh' }}
        overflow="scroll"
        position="absolute"
        width={{ xs: '100%', lg: '80%' }}
      >
        <Text>{data.name}</Text>
        <Text>{data.created_at.en}</Text>
        <Tag variant="primary">{data.contract_type.en}</Tag>
        <Tag variant="primary">{data.department.name}</Tag>
        <Text dangerouslySetInnerHTML={{ __html: data.description }} />
        <Text dangerouslySetInnerHTML={{ __html: data.profile }} />
        <Text dangerouslySetInnerHTML={{ __html: data.recruitment_process }} />
        <Text>
          Where ? {data.office.address} in {data.office.city}, {data.office.country.en}
        </Text>
        <Button
          external
          link={data.websites_urls.find(url => url.website_reference === 'wttj_fr')}
          text="Apply"
        />
      </Box>
    </Box>
  ) : null
}

Modale.propTypes /* remove-proptypes */ = {
  closeModale: func,
  data: object,
  isOpen: bool,
}

export default Modale
