// src: https://blogs.infinitesquare.com/posts/web/ajouter-des-traductions-dans-votre-app-react-avec-i18n
import React, { useState } from 'react'
import { Select } from '@welcome-ui/select'
import { Form as FinalForm } from 'react-final-form'
import { withTranslation } from 'react-i18next'
import { func, object } from 'prop-types'
import { ConnectedField } from '@welcome-ui/connected-field'

import { LOCALES } from '../../constants/locales'

function Lang({ i18n, t }) {
  const [lang, setLang] = useState(i18n.language)

  const options = [
    {
      label: t('common.languages.fr'),
      value: LOCALES.FR,
    },
    {
      label: t('common.languages.en'),
      value: LOCALES.EN,
    },
  ]

  const changeLanguage = language => {
    switch (language) {
      case LOCALES.EN:
        setLang(LOCALES.EN)
        i18n.changeLanguage(LOCALES.EN)
        break
      case LOCALES.FR:
      default:
        setLang(LOCALES.FR)
        i18n.changeLanguage(LOCALES.FR)
        break
    }
  }

  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.debug
  }

  return (
    <FinalForm initialValues={lang} onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <ConnectedField
            component={Select}
            name="language"
            onChange={changeLanguage}
            options={options}
            value={lang}
          />
        </form>
      )}
    </FinalForm>
  )
}

Lang.propTypes /* remove-proptypes */ = {
  i18n: object,
  t: func,
}

export default withTranslation()(Lang)
