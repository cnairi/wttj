import styled from '@xstyled/styled-components'
import { ConnectedField } from '@welcome-ui/connected-field'
import { Stack } from '@welcome-ui/stack'

export const FormContent = styled(Stack)`
  margin-top: 1.5rem;

  @media (min-width: 1024px) {
    margin-top: 0.825rem;
  }

  > div:not(:last-child) {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;

    @media (max-width: 1025px) {
      margin-bottom: 0.825rem;
    }
  }
`

export const SearchBar = styled(ConnectedField)`
  flex: 1;
`
