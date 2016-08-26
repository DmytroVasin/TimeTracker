import { applyMiddleware, createStore, compose } from 'redux'

import thunk from 'redux-thunk'

import rootReducer from '../reducers/trayReducer.js'


const configureTrayStore = function() {
  const store = createStore( rootReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f // Install DevTools
  ))

  return store
}

export default configureTrayStore;
