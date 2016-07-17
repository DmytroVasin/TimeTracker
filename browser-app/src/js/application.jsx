require('../scss/application.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import * as reducers from './reducers'


const reducer = combineReducers({ ...reducers, routing: routerReducer })
const store = createStore(reducer)
const history = syncHistoryWithStore(hashHistory, store)




// .......................
class Contact extends React.Component {
  render() {
    return <div>Contact</div>;
  }
}

class About extends React.Component {
  render() {
    return ( <div>About</div> );
  }
}

class Home extends React.Component {
  render() {
    return <div>Home</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Main</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    );
  }
};



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='about' component={About} />
        <Route path='contact' component={Contact} />
      </Route>
    </Router>
  </Provider>,

  document.getElementById('react-root')
)
