import '../scss/application.scss'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import TrayAppContainer  from './containers/TrayAppContainer.js'

import configureTrayStore from './config/configureTrayStore'

const store = configureTrayStore()

render(
  <Provider store={store}>
    <TrayAppContainer />
  </Provider>,

  document.getElementById('react-root')
)
