import React, { useEffect, useState } from 'react'
import { bool, func, object } from 'prop-types'

import wttjImage from '../../../assets/images/fr-wttj.jpeg'
import wttjLogo from '../../../assets/images/logo-wttj.jpeg'

import Content from './Content'
import Header from './Header'
import * as S from './styles'

function Modale({ closeModale, data, isOpen }) {
  const [dataAttribute, setDataAttribute] = useState({})

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setDataAttribute({ 'data-enter': true }), 100)
    }
  }, [isOpen])

  const closeModaleWithAnim = () => {
    setDataAttribute({})
    setTimeout(() => closeModale({}), 250)
  }

  return isOpen ? (
    <S.Container {...dataAttribute} display="flex">
      <S.Overlay
        backgroundColor="dark.800"
        height="100%"
        onClick={closeModaleWithAnim}
        opacity={0.5}
        p="md"
        position="absolute"
        width="100%"
      />
      <S.Dialog
        backgroundColor="nude.100"
        borderRadius="md"
        {...dataAttribute}
        height={{ xs: '100vh', lg: '80vh' }}
        overflow="scroll"
        position="relative"
        width={{ xs: '100%', lg: '80%' }}
      >
        <Header
          city={data.office.city}
          closeModaleWithAnim={closeModaleWithAnim}
          contractType={data.contract_type.en}
          country={data.office.country.en}
          image={wttjImage}
          logo={wttjLogo}
          name={data.name}
        />
        <Content
          address={`${data.office.address} in ${data.office.city}, ${data.office.country.en}`}
          createdAt={data.created_at.en}
          departmentName={data.department.name}
          description={data.description}
          profile={data.profile}
          recruitmentProcess={data.recruitment_process}
          websitesUrl={data.websites_urls}
        />
      </S.Dialog>
    </S.Container>
  ) : null
}

Modale.propTypes /* remove-proptypes */ = {
  closeModale: func,
  data: object,
  isOpen: bool,
}

export default Modale
