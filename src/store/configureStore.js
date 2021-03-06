import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import jobsReducer from './reducers/jobs'

const rootReducer = combineReducers({
  jobs: jobsReducer,
})

const configureStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default configureStore
