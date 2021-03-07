import styled from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 150ms;

  &[data-enter] {
    opacity: 1;
  }
`

export const Dialog = styled(Box)`
  transition: opacity 250ms ease-in-out 0s, margin-top 250ms ease-in-out 0s;
  opacity: 0;
  margin-top: 1.25rem;

  &[data-enter] {
    margin-top: 0;
    opacity: 1;
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

export const JobCard = styled(Box)`
  position: absolute;
  z-index: 1;
`

export const JobContent = styled(Box)`
  p {
    color: rgb(76, 76, 76);
    font-weight: 400;
    font-size: 1.125rem;
    letter-spacing: -0.3px;
    line-height: 1.5em;
    margin-bottom: 1.875rem;
  }

  a {
    color: rgb(55, 57, 66);
  }

  ul {
    margin-bottom: 1.875rem;
  }

  ul li {
    color: rgb(76, 76, 76);
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.5em;
    position: relative;
    margin-left: 1.25rem;
    padding-left: 1.25rem;
    margin-bottom: 0.9375rem;
    vertical-align: baseline;

    &::before {
      content: '';
      position: absolute;
      left: 0px;
      top: 0.5em;
      width: 8px;
      height: 8px;
      background-color: rgb(255, 205, 0);
      border-radius: 50%;
    }
  }
`

export const ImageContainer = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 0;

  &::after {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const LogoContainer = styled(Box)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const Overlay = styled(Box)`
  cursor: pointer;
`
