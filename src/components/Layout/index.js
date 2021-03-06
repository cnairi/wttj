import React from 'react'
import { node } from 'prop-types'

import * as S from './styles'

function Layout({ children }) {
  return (
    <S.Layout
      backgroundColor="light.900"
      borderRadius="sm"
      height={{ xs: 'auto', lg: '80vh' }}
      overflow="scroll"
      width={{ xs: '100%', lg: '80%' }}
    >
      {children}
    </S.Layout>
  )
}

Layout.propTypes /* remove-proptypes */ = {
  children: node,
}

export default Layout
