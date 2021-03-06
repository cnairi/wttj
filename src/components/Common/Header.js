import React from 'react'
import { Box } from '@welcome-ui/box'

import Logo from './Logo'
import * as S from './styles'

function Header() {
  return (
    <S.Header>
      <Box backgroundColor="primary.500" display="flex" p="md" width="100%">
        <Logo />
      </Box>
    </S.Header>
  )
}

export default Header
