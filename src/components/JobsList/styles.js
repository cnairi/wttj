import styled from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'

export const ItemContainer = styled(Box)`
  h3 {
    margin: 0;
  }

  @media (max-width: 1025px) {
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
`
