import '../../../scss/application.scss'

import React, { Component } from 'react'

import { Navigation } from './navigation.jsx'
import { ModalRoot } from './modalRoot.jsx'

export default class Application extends Component {
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
