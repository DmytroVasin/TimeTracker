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

import axios from 'axios'


const store = configureStore()


// // >>>>>>>>>>>>>>>>>>>>>
// console.info(store.getState())
store.dispatch((dispatch) => {
  dispatch({type: "FETCH_USERS_START"})

  axios.get('http://rest.learncode.academy/api/wstern/users')
    .then((response) => {
      dispatch({type: "FETCH_USERS_SUCCESS", payload: response.data})
    })
    .catch((error) => {
      dispatch({type: "FETCH_USERS_ERROR", payload: error})
    })
})
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
