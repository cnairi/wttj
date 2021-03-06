import React from 'react'
import { Provider } from 'react-redux'
import { createTheme, WuiProvider } from '@welcome-ui/core'

import configureStore from './store/configureStore'
import Header from './components/Common/Header'
import JobsList from './components/JobsList'
import Layout from './components/Layout'

const theme = createTheme({
  colors: {
    primary: {
      500: '#FFCD00',
    },
  },
  buttons: {
    primary: {
      color: '',
    },
    focus: {
      primary: {
        backgroundColor: '#FFE166',
        borderColor: '#FFE166',
      },
    },
    hover: {
      primary: {
        backgroundColor: '#FFE166',
        borderColor: '#FFE166',
      },
    },
    active: {
      primary: {
        backgroundColor: '#FFE166',
        borderColor: '#FFE166',
      },
    },
  },
})

function App() {
  return (
    <Provider store={configureStore}>
      <WuiProvider theme={theme}>
        <Header />
        <Layout>
          <JobsList />
        </Layout>
      </WuiProvider>
    </Provider>
  )
}

export default App
