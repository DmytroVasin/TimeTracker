require('../scss/application.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './config/configureStore';

import { Application } from './components/layout/application.jsx'
import { storyPage }   from './components/stories/storyPage.jsx'
import { graphPage }   from './components/graphs/graphPage.jsx'


const store = configureStore()


// // >>>>>>>>>>>>>>>>>>>>>
// console.info(store.getState())
// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Use Redux'
// })
// console.info(store.getState())
// // >>>>>>>>>>>>>>>>>>>>>



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
