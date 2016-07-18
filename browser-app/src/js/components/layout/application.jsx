import React from 'react'

import { Navigation } from './navigation.jsx'

export class Application extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
