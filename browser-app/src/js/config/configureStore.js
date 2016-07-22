import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'


import rootReducer from '../reducers/reducer'

function configureStore () {
  const logger = createLogger({collapsed: true})
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  )

  return store
}

export default configureStore;
