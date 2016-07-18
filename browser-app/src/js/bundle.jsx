require('../scss/application.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import * as reducers from './reducers'

// import Application from './components/layout/application'
import { Application } from './components/layout/application.jsx'
import { storyPage }   from './components/stories/storyPage.jsx'
import { graphPage }   from './components/graphs/graphPage.jsx'

const reducer = combineReducers({ ...reducers, routing: routerReducer })
const store = createStore(reducer)
const history = syncHistoryWithStore(hashHistory, store)


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Application}>
        <IndexRoute component={storyPage} />
        <Route path='graph' component={graphPage} />
      </Route>
    </Router>
  </Provider>,

  document.getElementById('react-root')
)
