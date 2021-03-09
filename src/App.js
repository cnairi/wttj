import React from 'react'
import { Provider } from 'react-redux'
import { createTheme, WuiProvider } from '@welcome-ui/core'

import configureStore from './store/configureStore'
import FiltersBar from './components/FiltersBar'
import Header from './components/Common/Header'
import JobsList from './components/JobsList'
import Layout from './components/Layout'
import Modale from './components/Common/Modale/'

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
  fontSizes: {
    h2: '1.625rem',
    h3: '0.8125rem',
  },
  space: {
    '4xl': '3.25rem',
  },
  links: {
    default: {
      transition: '300ms ease',
    },
    primary: {
      default: [
        [
          '\n        > .wui-text {\n          \n      background-image: linear-gradient(0deg, #FFCD00, #FFCD00 100%);\n      background-repeat: no-repeat;\n      background-size: 100% 50%;\n   transition: background-position-y 0.25s ease 0s;\n   background-position-y: calc(200% - 1px);',
          null,
          '\n    ;\n        }\n      ',
        ],
      ],
      hover: [
        [
          '\n        > .wui-text {\n          \n      opacity: 1;\n      background-position-y: 100%;\n    ;\n        }\n      ',
        ],
      ],
    },
  },
})

function App() {
  return (
    <Provider store={configureStore}>
      <WuiProvider theme={theme} useReset>
        <Header />
        <Layout title="Our offers">
          <FiltersBar />
          <JobsList />
        </Layout>
        <Modale />
      </WuiProvider>
    </Provider>
  )
}

export default App
