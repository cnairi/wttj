import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import filtersReducer from './reducers/filters'
import jobsReducer from './reducers/jobs'
import modaleReducer from './reducers/modale'

const rootReducer = combineReducers({
  filters: filtersReducer,
  jobs: jobsReducer,
  modale: modaleReducer,
})

const configureStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default configureStore
