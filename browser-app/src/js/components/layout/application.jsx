import '../../../scss/application.scss'

import React, { Component } from 'react'

import { WindowHeader } from './window/WindowHeader.jsx'
import { Navigation } from './navigation.jsx'
import { ModalRoot } from './modalRoot.jsx'
import Spinner from '../layout/spinner.jsx';

export default class Application extends Component {
  render() {
    return (
      <div className='window'>
        <WindowHeader />

        <ModalRoot />
        <Navigation />

        <div className='window-container'>
          {this.props.children}
        </div>

        <Spinner />
      </div>
    );
  }
}
