import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Application   from './components/layout/Application.jsx'

import StoryPageContainer     from './containers/StoryPageContainer.js'
import GraphPageContainer     from './containers/GraphPageContainer.js'
import NewStoryPageContainer  from './containers/NewStoryPageContainer.js'
import EditStoryPageContainer from './containers/EditStoryPageContainer.js'
import ShowStoryPageContainer from './containers/ShowStoryPageContainer.js'


export default (
  <Route   path='/'                 component={Application} >
    <IndexRoute                     component={StoryPageContainer} />
    <Route path='/graph'            component={GraphPageContainer} />
    <Route path='/stories/new'      component={NewStoryPageContainer} />
    <Route path='/stories/:id'      component={ShowStoryPageContainer} />
    <Route path='/stories/:id/edit' component={EditStoryPageContainer} />
  </Route>
)
