import React from 'react'

import { Navigation } from './navigation.jsx'
import { ModalRoot } from './modalRoot.jsx'

export class Application extends React.Component {
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
