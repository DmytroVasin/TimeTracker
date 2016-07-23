import React, { Component } from 'react'

import { Navigation } from './navigation.jsx'
import { ModalRoot } from './modalRoot.jsx'

class Application extends Component {
  render() {
    return (
      <div>
        <ModalRoot />

        <Navigation />

        {this.props.children}
      </div>
    );
  }
}

export default Application
