require('../scss/application.scss');

import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './config/configureStore';

import application from './components/layout/application.jsx'
import storyPage     from './components/stories/storyPage.jsx'
import graphPage   from './components/graphs/graphPage.jsx'

import axios from 'axios'


const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)


render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={application}>
        <IndexRoute component={storyPage} />
        <Route path='graph' component={graphPage} />
      </Route>
    </Router>
  </Provider>,

  document.getElementById('react-root')
)
