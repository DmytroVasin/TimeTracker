require('font-awesome-webpack');
import '../styles/application.scss'

import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import configureStore from './config/configureStore'

import routes from './routes'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,

  document.getElementById('react-root')
)
