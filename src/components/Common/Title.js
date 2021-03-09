import React from 'react'
import { string } from 'prop-types'
import { Box } from '@welcome-ui/box'

import * as S from './styles'

function Title({ text }) {
  return (
    <Box margin="1.875rem 0" position="relative">
      <S.SectionTitle variant="h2">{text}</S.SectionTitle>
    </Box>
  )
}

Title.propTypes /* remove-proptypes */ = {
  text: string,
}

export default Title
