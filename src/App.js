import React from 'react'
import { Provider } from 'react-redux'
import { WuiProvider } from '@welcome-ui/core'
import { useTranslation } from 'react-i18next'
import FiltersBar from '@components/FiltersBar'
import Header from '@components/Common/Header'
import JobsList from '@components/JobsList'
import Layout from '@components/Layout'
import Modale from '@components/Common/Modale/'
import configureStore from '@store/configureStore'
import theme from '@context/theme'

function App() {
  const { t } = useTranslation()
  return (
    <Provider store={configureStore}>
      <WuiProvider theme={theme} useReset>
        <Header />
        <Layout title={t('jobs.offers')}>
          <FiltersBar />
          <JobsList />
        </Layout>
        <Modale />
      </WuiProvider>
    </Provider>
  )
}

export default App
