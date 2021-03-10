import React from 'react'
import { node, string } from 'prop-types'
import { Text } from '@welcome-ui/text'

import * as S from './styles'

function Layout({ children, title }) {
  return (
    <S.Layout
      backgroundColor="light.900"
      borderRadius="sm"
      height={{ xs: 'auto', lg: '80vh' }}
      overflow="scroll"
      p="xxl"
      width={{ xs: '100%', lg: '80%' }}
    >
      <Text textAlign="center" variant="h1">
        {title}
      </Text>
      {children}
    </S.Layout>
  )
}

Layout.propTypes /* remove-proptypes */ = {
  children: node,
  title: string,
}

export default Layout
