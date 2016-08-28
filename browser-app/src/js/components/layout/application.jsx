import React, { Component } from 'react'

import { WindowHeader } from '../window/WindowHeader'
import { Navigation } from './navigation.jsx'
import { ModalRoot } from './modalRoot.jsx'
import Spinner from '../layout/spinner.jsx';

export default class Application extends Component {
  // <ModalRoot />
  render() {
    return (
      <div className='window'>
        <WindowHeader title='Time Tracker' close='true' minimize='true' maximize='true' />

        <div className='window-container'>
          <Navigation />

          {this.props.children}

          <Spinner />
        </div>
      </div>
    );
  }
}
