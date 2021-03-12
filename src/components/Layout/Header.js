import React from 'react'
import { Box } from '@welcome-ui/box'
import Language from '@components/Common/Language'
import Logo from '@components/Common/Logo'
import * as S from '@components/Common/styles'

function Header() {
  return (
    <S.Header>
      <Box
        alignItems={{ xs: 'center', lg: 'flex-start' }}
        backgroundColor="primary.500"
        display="flex"
        justifyContent="space-between"
        p="md"
        width="100%"
      >
        <Logo />
        <Language />
      </Box>
    </S.Header>
  )
}

export default Header
