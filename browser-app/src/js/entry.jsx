import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import configureStore from './config/configureStore';

import application   from './components/layout/application.jsx'
import storyPage     from './components/stories/storyPage.jsx'
import newStoryPage  from './components/stories/newStoryPage.jsx'
import editStoryPage from './components/stories/editStoryPage.jsx'
import graphPage     from './components/graphs/graphPage.jsx'
import showStoryPage from './components/stories/showStoryPage.jsx'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route   path='/'                 component={application} >
        <IndexRoute                     component={storyPage} />
        <Route path='/graph'            component={graphPage} />
        <Route path='/stories/new'      component={newStoryPage} />
        <Route path='/stories/:id'      component={showStoryPage} />
        <Route path='/stories/:id/edit' component={editStoryPage} />
      </Route>
    </Router>
  </Provider>,

  document.getElementById('react-root')
)
