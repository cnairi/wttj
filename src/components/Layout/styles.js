import styled from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'

export const Layout = styled(Box)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: 1024px) {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
