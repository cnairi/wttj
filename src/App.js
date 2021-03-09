import React from 'react'
import { Provider } from 'react-redux'
import { WuiProvider } from '@welcome-ui/core'

import configureStore from './store/configureStore'
import FiltersBar from './components/FiltersBar'
import Header from './components/Common/Header'
import JobsList from './components/JobsList'
import Layout from './components/Layout'
import Modale from './components/Common/Modale/'
import theme from './context/theme'
import { OUR_OFFERS } from './constants'

function App() {
  return (
    <Provider store={configureStore}>
      <WuiProvider theme={theme} useReset>
        <Header />
        <Layout title={OUR_OFFERS}>
          <FiltersBar />
          <JobsList />
        </Layout>
        <Modale />
      </WuiProvider>
    </Provider>
  )
}

export default App
