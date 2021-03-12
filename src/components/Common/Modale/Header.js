import React from 'react'
import { func, string } from 'prop-types'
import { Stack } from '@welcome-ui/stack'
import { Text } from '@welcome-ui/text'
import { CoverLetterIcon } from '@welcome-ui/icons.cover_letter'
import { CrossIcon } from '@welcome-ui/icons.cross'
import { LocationIcon } from '@welcome-ui/icons.location'
import { COMPANY_NAME, JOB_ILLUSTRATION_ALT, LOGO_ALT } from '@constants'
import * as S from '@components/Common/Modale/styles'

function Header({ city, closeModaleWithAnim, contractType, country, image, logo, name }) {
  return (
    <S.ImageContainer height={{ xs: '30rem', lg: '20.125rem' }}>
      <S.ExitIconContainer
        alignItems="center"
        display="flex"
        justifyContent="center"
        onClick={closeModaleWithAnim}
        p="md"
        position="absolute"
        right="20px"
        top="20px"
        zIndex={1}
      >
        <CrossIcon color="light.900" />
      </S.ExitIconContainer>
      <S.JobCard
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        p="xl"
      >
        <S.LogoContainer height={50} width={50}>
          <img alt={LOGO_ALT} src={logo} />
        </S.LogoContainer>
        <Text color="light.900" margin="0.9375rem 0" variant="h3">
          {COMPANY_NAME}
        </Text>
        <Text color="light.900" marginBottom="md" textAlign="center" variant="h1">
          {name}
        </Text>
        <Stack direction="row">
          <Text alignItems="flex-end" color="light.900" display="flex">
            <CoverLetterIcon color="light.900" height="20px" width="20px" />
            {contractType}
          </Text>
          <Text alignItems="flex-end" color="light.900" display="flex">
            <LocationIcon color="light.900" height="20px" width="20px" />
            {city}, {country}
          </Text>
        </Stack>
      </S.JobCard>
      <img alt={JOB_ILLUSTRATION_ALT} src={image} />
    </S.ImageContainer>
  )
}

Header.propTypes /* remove-proptypes */ = {
  city: string,
  closeModaleWithAnim: func,
  contractType: string,
  country: string,
  image: string,
  logo: string,
  name: string,
}

export default Header
