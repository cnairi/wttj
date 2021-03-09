import styled from '@xstyled/styled-components'
import { Text } from '@welcome-ui/text'

export const Header = styled.header`
  display: flex;
  flex: 1;

  @media (min-width: 1024px) {
    height: 33vh;
  }
`

export const SectionTitle = styled(Text)`
  display: flex;
  align-items: center;
  padding-left: 35px;
  padding-bottom: 0.625rem;
  border-bottom: 1px solid rgb(229, 229, 229);

  &::before {
    content: '';
    position: absolute;
    left: 0px;
    height: 4px;
    width: 20px;
    background-color: rgb(255, 205, 0);
    top: 0.875rem;
  }
`
