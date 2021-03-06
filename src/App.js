import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import JobsList from './components/JobsList'

function App() {
  return (
    <Provider store={configureStore}>
      <JobsList />
    </Provider>
  )
}

export default App
