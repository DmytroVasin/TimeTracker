require('../scss/application.scss');

import React from 'react';
import ReactDOM from 'react-dom';

class World extends React.Component {
  render() {
    return <h1>Hello World</h1>
  }
}

ReactDOM.render(<World/>, document.getElementById('react-root'));
